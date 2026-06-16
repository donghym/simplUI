# Form / Table / ProTable / ProForm 审查报告

> 审查时间：2026-06-16
> 审查范围：Form、Table、ProTable、ProForm 四个表单相关组件
> 审查依据：`soul.md` v5.0 + `plan.md` v5.0 + `AI-IMPLEMENTATION-PLAN.md`

---

## 总览

| 组件 | 类型编译 | 红线合规 | 逻辑缺陷 | 总评 |
|------|---------|---------|---------|------|
| Form | PASS | 2 处 inline style 缺注释 | 字段注册无卸载清理 | 基本合格，细节待完善 |
| Table | PASS | 展开按钮使用 Unicode | onChange 未连接 | 核心功能完整 |
| ProTable | PASS | PASS | 3 处逻辑问题 | 功能可用但有逻辑缺陷 |
| ProForm | PASS | className 模板拼接（红线） | validateSingleField 闭包旧值 | 有红线违规 |

---

## P1 - 红线违规 / 逻辑缺陷

### 1. ProForm — className 模板字符串拼接（红线 #4）[未修复]

**文件**：`packages/ui/src/pro-form/index.tsx` 第 118 行

```typescript
className={cn(proFormGridVariants({ columns: gridConfig.columns }), `gap-${gridConfig.gap}`)}
```

soul.md §9 红线 #4 明确规定：**禁止字符串模板拼接 className**。

`gap-${gridConfig.gap}` 使用模板字面量动态生成 className，当 `gap` 值不在 Tailwind 预生成集合中时（如 gap=15），类名会被 Tailwind purge 移除，导致样式丢失。

**修复建议**：改用 Tailwind 方括号语法 `gap-[${gridConfig.gap}px]`，或预定义 gap 变体映射（如 `{ 8: 'gap-2', 16: 'gap-4', 24: 'gap-6' }`）通过 cva 管理。

---

### 2. Table — onChange 回调声明但未连接 [未修复]

**文件**：`packages/ui/src/table/table-inner.tsx` 第 41、46 行

```typescript
onChange,        // 第 41 行：解构
void onChange    // 第 46 行：直接丢弃
```

`TableProps` 定义了 `onChange?: (changeInfo: TableChangeInfo) => void`，用于统一监听分页/排序/过滤变化。但实现中通过 `void onChange` 显式忽略，导致用户传入的 `onChange` 永远不会被调用。

当前分页、排序、过滤的各自 `onChange` 回调独立触发，但 Table 级别的汇总回调无效。

**修复建议**：在 `usePagination`、`useSorter`、`useFilter` 的 change 回调中调用 `props.onChange`，组装对应的 `TableChangeInfo` 对象。

---

### 3. ProTable — request 模式下双重过滤 [未修复]

**文件**：`packages/ui/src/pro-table/index.tsx` 第 59-85 行

ProTable 在 `fetchData` 中将 `keyword` 传给 `request` 由服务端过滤，但返回的数据又被客户端 `filteredData` 再次按 `keyword` 过滤：

```typescript
// 第 63 行：keyword 传给服务端
const result = await request({ current: page, pageSize: size, keyword: kw || undefined })
// 第 80-85 行：服务端返回的数据又被客户端过滤
const filteredData = useMemo(() => {
  const source = dataSource ?? requestData
  if (!keyword) return source
  const kw = keyword.toLowerCase()
  return source.filter(item => Object.values(item as Record<string, unknown>).some(...))
}, [dataSource, requestData, keyword])
```

**后果**：
- 服务端已按 keyword 返回分页数据（如 10 条），客户端再次过滤可能导致实际显示数量少于 pageSize
- 客户端过滤遍历所有字段值（包括非可见字段），可能误过滤掉服务端正确返回的数据
- `displayTotal` 使用 `total`（服务端总数）而非 `filteredData.length`，分页数字与实际显示不匹配

**修复建议**：request 模式下跳过客户端 keyword 过滤，直接使用 `requestData`：
```typescript
const displayData = isRequestMode ? requestData : filteredData
```

---

### 4. ProTable — toTableColumns 丢失自定义 sorter 函数 [未修复]

**文件**：`packages/ui/src/pro-table/index.tsx` 第 32 行

```typescript
sorter: typeof col.sorter === 'boolean' ? col.sorter : undefined,
```

当 `ProTableColumn.sorter` 为自定义排序函数 `(a: T, b: T) => number` 时，此处将其丢弃为 `undefined`。底层 Table 的默认排序回退到字符串比较（`String(a) < String(b)`），导致数值列（如薪资、年龄）排序结果错误。

例如：薪资 12000 和 9000 按字符串比较，"12000" < "9000"（因为 "1" < "9"），排序结果与预期相反。

**修复建议**：传递自定义 sorter 函数到 ColumnType，或提供内置的数值/日期比较器：
```typescript
sorter: typeof col.sorter === 'function'
  ? (a, b) => col.sorter!(a, b)
  : col.sorter === true ? true : undefined,
```

---

## P2 - 轻微偏差 / 代码规范

### 5. Table — 展开按钮使用 Unicode 字符 `▼`/`▶` [未修复]

**文件**：`packages/ui/src/table/table-expand.tsx` 第 68 行

```typescript
{isExpanded ? '▼' : '▶'}
```

使用 Unicode 几何图形字符 `▼`（U+25BC）和 `▶`（U+25B6）作为展开/收起指示器。与 ThoughtChain 之前修复的 `▾` 问题同类，应统一使用 lucide-react 图标。

**修复建议**：替换为 `ChevronDown` / `ChevronRight`：
```typescript
import { ChevronDown, ChevronRight } from 'lucide-react'
{isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
```

---

### 6. ProTable — Table 高度硬编码 400px [未修复]

**文件**：`packages/ui/src/pro-table/index.tsx` 第 132 行

```typescript
<Table columns={tableColumns} dataSource={pageData} rowKey={rowKey}
  height={400} loading={loading} bordered={false} pagination={false} />
```

ProTable 将内部 Table 的 `height` 硬编码为 400px，用户无法通过 `ProTableProps` 自定义表格高度。当数据较少时 400px 留白过多，数据较多时又可能不够。

**修复建议**：在 `ProTableProps` 中新增 `height?: number` 属性，默认 400，传递给内部 Table。

---

### 7. Form — inline style 缺少解释性注释 [未修复]

**文件**：`packages/ui/src/form/index.tsx` 第 156、167 行

```typescript
style={layout === 'horizontal' ? labelColStyle : undefined}    // 第 156 行
style={layout === 'horizontal' ? wrapperColStyle : undefined}  // 第 167 行
```

这两处 inline style 用于 24 栅格百分比宽度计算（如 `{ span: 8 }` → `width: 33.33%`），属于运行时动态值，无法用静态 Tailwind 类表达，是合理的例外。

但 soul.md 要求 inline style 附带解释性注释（与 P6/P7 组件保持一致），当前缺少注释。

**修复建议**：添加注释说明动态计算原因：
```typescript
style={layout === 'horizontal' ? labelColStyle : undefined /* 24栅格百分比宽度，运行时计算 */}
```

---

### 8. Table — inline style 缺少解释性注释 [未修复]

**涉及文件**：
- `table-inner.tsx` 第 151 行：`style={{ height, width }}` — 根容器动态尺寸
- `table-inner.tsx` 第 178 行：react-virtuoso 内部 table 的 style 覆盖

这两处 inline style 属于运行时动态值（用户传入的 height/width、react-virtuoso 库要求），是合理例外，但缺少解释性注释。

注：`table-header.tsx` 和 `table-row.tsx` 中的固定列定位 style 已有注释 `/* 固定列定位计算，允许保留 */`，无需修改。

**修复建议**：为 table-inner.tsx 的两处 inline style 补充注释说明。

---

### 9. ProForm — validateSingleField 闭包可能读取旧值 [未修复]

**文件**：`packages/ui/src/pro-form/index.tsx` 第 62-68 行

```typescript
const setFieldValue = useCallback((name: string, value: unknown) => {
  setFormValues((prev) => ({ ...prev, [name]: value }))    // 异步更新
  setErrors((prev) => { const n = { ...prev }; delete n[name]; return n })
  Object.entries(depsMapRef.current).forEach(([depName, deps]) => {
    if (deps.includes(name)) validateSingleField(depName)   // 闭包中 formValues 尚未更新
  })
}, [validateSingleField])
```

当字段 A 的值变化时，`setFormValues` 是异步的（React 批量更新），但 `validateSingleField(depName)` 同步执行，其闭包中的 `formValues` 仍是更新前的旧值。

如果依赖字段 B 的校验规则引用了字段 A 的值（如「确认密码」依赖「密码」字段），校验会使用 A 的旧值，可能产生误报。

**修复建议**：将校验改为 `useEffect` 监听 `formValues` 变化后触发，或使用 `setFormValues` 的函数形式在更新后执行校验：
```typescript
const setFieldValue = useCallback((name: string, value: unknown) => {
  setFormValues((prev) => {
    const next = { ...prev, [name]: value }
    // 在同步上下文中使用最新值校验依赖字段
    Object.entries(depsMapRef.current).forEach(([depName, deps]) => {
      if (deps.includes(name)) validateFieldWithValues(depName, next)
    })
    return next
  })
}, [])
```

---

### 10. Form — 字段注册无卸载清理 [未修复]

**文件**：`packages/ui/src/form/index.tsx` 第 62-72 行

```typescript
const registerField = useCallback(
  (name: string, ref: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | null) => {
    const existing = fieldsRef.current.find((f) => f.name === name)
    if (existing) {
      existing.ref = ref    // 卸载时 ref=null，但条目仍在数组中
    } else {
      fieldsRef.current.push({ name, ref })
    }
  },
  [],
)
```

当 FormItem 卸载时，`registerField(name, null)` 被调用将 ref 设为 null，但字段条目永远保留在 `fieldsRef.current` 数组中。如果表单动态挂载/卸载 FormItem（如条件渲染），`fieldsRef.current` 会持续增长，产生内存泄漏。

此外，Form 仅收集原生 `<input>`/`<select>`/`<textarea>` 的值，不支持自定义表单组件（如 Select 组件包装后的内部 input）。

**修复建议**：
- 卸载时从 `fieldsRef.current` 中移除条目
- 长期考虑支持通过 `registerField` 注册自定义控件的值获取函数

---

## 通过的项目

以下检查项在四个组件中均通过，零违规：

- **TypeScript 编译**：四个组件零错误
- **forwardRef + displayName**：Form、FormItem、ProForm、ProFormText、ProFormSelect、ProFormList 全部合规
- **cn() 三层结构**：全部正确使用 cn() 合并 className（ProForm grid gap 除外，见 P1-1）
- **语义色 token**：全部使用 `text-danger-500`、`bg-primary` 等语义化类名，零硬编码色值
- **无 @ts-ignore / @ts-nocheck / TODO / FIXME**：四个组件零违规
- **JSDoc 注释**：所有 types.ts 字段均有 JSDoc
- **文件行数**：Form index.tsx = 200 行（恰好达标）、types.ts = 100 行（恰好达标）、Table index.tsx = 33 行、ProTable index.tsx = 150 行、ProForm index.tsx = 139 行
- **barrel 导出**：四个组件均在 packages/ui/src/index.ts 中正确导出

---

## 修复优先级建议

### 第一优先级（P1）

- [ ] **ProForm className 模板拼接** — 红线 #4 违规，改用 cva 变体或方括号语法
- [ ] **Table onChange 未连接** — 声明了但从未调用，功能缺失
- [ ] **ProTable 双重过滤** — request 模式下跳过客户端 keyword 过滤
- [ ] **ProTable sorter 函数丢失** — 自定义排序函数被丢弃，数值排序结果错误

### 第二优先级（P2）

- [ ] **Table 展开按钮 Unicode** — 替换为 lucide-react 图标
- [ ] **ProTable height 硬编码** — 新增 height prop
- [ ] **Form/Table inline style 注释** — 补充解释性注释
- [ ] **ProForm 校验闭包旧值** — 改为 useEffect 或函数式更新后校验
- [ ] **Form 字段注册无卸载清理** — 卸载时移除 fieldsRef 条目
