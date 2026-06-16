# SOUL.md — AI Agent 行为契约

> **本文件是 AI Agent 的"灵魂规则"**。每次开始执行任何任务前必须先完整阅读本文件。
> 本文件只定义**规则与约束**，不定义**任务内容**。任务内容在 `plan.md`。

---

## 0. 优先级

遇到冲突时按以下顺序处理，**严格降级**：

1. **本文件（SOUL.md）** — 最高优先级
2. **plan.md** — 具体任务的执行规范
3. **用户对话** — 补充说明
4. **AI 自行判断** — 永远最后，禁止提前使用

> 任何"我想……"、"我觉得……"、"差不多就行" 在本项目一律无效。

---

## 1. 范围铁律（按优先级分批实现）

### 1.1 组件范围

**组件来源**：`2.md` 组件清单，按优先级分三批实现。

**P0（核心组件，首批实现）**：

| 组件 | 文件 |
|---|---|
| Button | `packages/ui/src/button/` |
| Input | `packages/ui/src/input/` |
| Layout | `packages/ui/src/layout/` |
| Grid | `packages/ui/src/grid/` |
| Typography | `packages/ui/src/typography/` |
| Form | `packages/ui/src/form/` |
| Table | `packages/ui/src/table/` |
| Modal | `packages/ui/src/modal/` |
| Menu | `packages/ui/src/menu/` |

**P1（常用组件，第二批实现）**：

| 组件 | 文件 |
|---|---|
| Space | `packages/ui/src/space/` |
| Divider | `packages/ui/src/divider/` |
| InputNumber | `packages/ui/src/input-number/` |
| Select | `packages/ui/src/select/` |
| Switch | `packages/ui/src/switch/` |
| Checkbox | `packages/ui/src/checkbox/` |
| Radio | `packages/ui/src/radio/` |
| DatePicker | `packages/ui/src/date-picker/` |
| Upload | `packages/ui/src/upload/` |
| Card | `packages/ui/src/card/` |
| Tabs | `packages/ui/src/tabs/` |
| Tag | `packages/ui/src/tag/` |
| Badge | `packages/ui/src/badge/` |
| Avatar | `packages/ui/src/avatar/` |
| Drawer | `packages/ui/src/drawer/` |
| Message | `packages/ui/src/message/` |
| Notification | `packages/ui/src/notification/` |
| Popover | `packages/ui/src/popover/` |
| Tooltip | `packages/ui/src/tooltip/` |
| Dropdown | `packages/ui/src/dropdown/` |
| Breadcrumb | `packages/ui/src/breadcrumb/` |
| Pagination | `packages/ui/src/pagination/` |
| List | `packages/ui/src/list/` |

**P2（辅助组件，第三批实现）**：

| 组件 | 文件 |
|---|---|
| AutoComplete | `packages/ui/src/auto-complete/` |
| Cascader | `packages/ui/src/cascader/` |
| TreeSelect | `packages/ui/src/tree-select/` |
| TimePicker | `packages/ui/src/time-picker/` |
| Rate | `packages/ui/src/rate/` |
| Slider | `packages/ui/src/slider/` |
| Tree | `packages/ui/src/tree/` |
| Calendar | `packages/ui/src/calendar/` |
| Empty | `packages/ui/src/empty/` |
| Skeleton | `packages/ui/src/skeleton/` |
| Progress | `packages/ui/src/progress/` |
| Statistic | `packages/ui/src/statistic/` |
| Timeline | `packages/ui/src/timeline/` |
| Steps | `packages/ui/src/steps/` |
| Spin | `packages/ui/src/spin/` |
| Anchor | `packages/ui/src/anchor/` |
| BackTop | `packages/ui/src/back-top/` |
| ConfigProvider | `packages/ui/src/config-provider/` |
| Chart | `packages/ui/src/chart/` |
| Icon | `packages/ui/src/icon/` |
| Flex | `packages/ui/src/flex/` |
| Alert | `packages/ui/src/alert/` |
| Popconfirm | `packages/ui/src/popconfirm/` |
| Result | `packages/ui/src/result/` |
| Carousel | `packages/ui/src/carousel/` |
| Collapse | `packages/ui/src/collapse/` |
| Descriptions | `packages/ui/src/descriptions/` |
| Image | `packages/ui/src/image/` |
| Segmented | `packages/ui/src/segmented/` |
| Affix | `packages/ui/src/affix/` |

**P3（扩展组件，第四批实现）**：

| 组件 | 文件 |
|---|---|
| FloatButton | `packages/ui/src/float-button/` |
| Splitter | `packages/ui/src/splitter/` |
| ColorPicker | `packages/ui/src/color-picker/` |
| Mentions | `packages/ui/src/mentions/` |
| Transfer | `packages/ui/src/transfer/` |
| QRCode | `packages/ui/src/qrcode/` |
| Tour | `packages/ui/src/tour/` |
| Watermark | `packages/ui/src/watermark/` |
| App | `packages/ui/src/app/` |

**P4（高阶业务组件，第五批实现，来源：AI-IMPLEMENTATION-PLAN.md P0）**：

| 组件 | 文件 |
|---|---|
| ProTable | `packages/ui/src/pro-table/` |
| TreeTable | `packages/ui/src/tree-table/` |
| DragTable | `packages/ui/src/drag-table/` |
| ProForm | `packages/ui/src/pro-form/` |
| TagInput | `packages/ui/src/tag-input/` |
| SearchInput | `packages/ui/src/search-input/` |
| PageContainer | `packages/ui/src/page-container/` |

**P5（进阶业务组件，第六批实现，来源：AI-IMPLEMENTATION-PLAN.md P1）**：

| 组件 | 文件 |
|---|---|
| StatisticCard | `packages/ui/src/statistic-card/` |
| AvatarGroup | `packages/ui/src/avatar-group/` |
| CopyButton | `packages/ui/src/copy-button/` |
| BatchOperation | `packages/ui/src/batch-operation/` |
| StepForm | `packages/ui/src/step-form/` |
| ProgressGauge | `packages/ui/src/progress-gauge/` |
| EnhanceDescriptions | `packages/ui/src/enhance-descriptions/` |
| EnhanceTimeline | `packages/ui/src/enhance-timeline/` |
| EventCalendar | `packages/ui/src/event-calendar/` |

**P6（创意趣味组件，第七批实现，来源：AI-IMPLEMENTATION-PLAN.md P2）**：

| 组件 | 文件 |
|---|---|
| MorphButton | `packages/ui/src/morph-button/` |
| ElasticToggle | `packages/ui/src/elastic-toggle/` |
| StaggerMenu | `packages/ui/src/stagger-menu/` |
| ScrollReveal | `packages/ui/src/scroll-reveal/` |
| AnimateCountdown | `packages/ui/src/animate-countdown/` |
| HoverCard | `packages/ui/src/hover-card/` |
| WiredElement | `packages/ui/src/wired-element/` |
| StarRating | `packages/ui/src/star-rating/` |

**P7（前沿现代组件，第八批实现，来源：AI-IMPLEMENTATION-PLAN.md P3）**：

| 组件 | 文件 |
|---|---|
| ChatBubble | `packages/ui/src/chat-bubble/` |
| ThoughtChain | `packages/ui/src/thought-chain/` |
| PromptInput | `packages/ui/src/prompt-input/` |
| AIStreamText | `packages/ui/src/ai-stream-text/` |
| MarkdownEditor | `packages/ui/src/markdown-editor/` |
| CodeEditor | `packages/ui/src/code-editor/` |
| PDFViewer | `packages/ui/src/pdf-viewer/` |
| ImageEditor | `packages/ui/src/image-editor/` |
| FormDesigner | `packages/ui/src/form-designer/` |
| JsonSchemaRender | `packages/ui/src/json-schema-render/` |
| ActionSheet | `packages/ui/src/action-sheet/` |
| PullToRefresh | `packages/ui/src/pull-to-refresh/` |
| InfiniteScroll | `packages/ui/src/infinite-scroll/` |
| TabBar | `packages/ui/src/tab-bar/` |

**禁止增加**（上述八批清单之外的组件，即使用户要求也必须拒绝）：

- 任何不在上述八批清单中的组件
- 任何"顺手加一下"的组件
- 任何 TextArea / Password / Search 变体（用户用原生 `<Input type="password">`）

> 用户说"加个 XXX 吧"，先查 2.md 清单，不在清单中则回答："不在组件规划范围内，已记录到 backlog。"

### 1.2 Props 范围

| 禁止暴露 | 替代方案 |
|---|---|
| `size` 变体 | 全局 38px，用户用 className="h-12" |
| `danger` 变体 | `<Button className="bg-red-500">` |
| `shape` 变体 | icon-only 时自动圆形 |
| `type`（HTML 原生） | `htmlType` |
| `classNames` 子对象 | 外部 className 足够 |
| `styles` 子对象 | 不需要 |

### 1.3 范围判断流程

每次写代码前问自己：

```text
□ 这个组件在 §1.1 白名单内吗？
□ 这个 prop 在 §1.2 黑名单外吗？
□ 这个文件路径符合 plan.md §12 目录结构 吗？
□ 这个组件实现符合 plan.md §1 通用组件规范 吗？
```

任何一个 ❌ → 立即停止，调用 `AskUserQuestion`。

---

## 2. 禁止词清单（AI 输出中绝不出现）

### 2.1 模糊词（出现一次扣分）

中文：`适当` / `合理` / `可能` / `也许` / `或许` / `通常` / `大概` / `差不多` / `基本` / `考虑` / `看着办` / `随便`

英文：`appropriate` / `reasonable` / `maybe` / `perhaps` / `usually` / `roughly` / `anyway` / `consider`

### 2.2 占位符（出现即不通过）

`TBD` / `TODO` / `FIXME` / `XXX` / `待定` / `待补充` / `...`（代码中省略号）

### 2.3 弱化词（让 AI 失去判断力）

`尽量` / `尽量不要` / `最好` / `可以` / `应该` / `或许可以`

**正例**：

- ❌ "可以考虑加个 size 变体"
- ✅ "size 变体在 SOUL.md §1.2 黑名单中，禁止增加"

**正例**：

- ❌ "可能需要用 cva"
- ✅ "用 cva（见 plan.md §1.3 cva 变体标准）"

---

## 3. 决策冲突解决协议

```text
1. 读 SOUL.md
   ↓ 有规定？
   ↓─是─→ 严格遵守
   ↓ 否
2. 读 plan.md
   ↓ 有规定？
   ↓─是─→ 严格遵守
   ↓ 否
3. 用 AskUserQuestion 问用户
   ↓ 用户回答
   ↓─是─→ 记录决策，更新 plan.md
   ↓ 否
4. 永远禁止自行决策
```

**禁止的行为**：

- ❌ 自行决定"应该这样写"
- ❌ 引用"业界惯例"作为依据
- ❌ 引用"看起来更优雅"作为理由
- ❌ 引用类似项目（Antd / shadcn / MUI）的实现作为最终方案

---

## 4. 代码铁律

### 4.1 类型规则（强制）

| 规则 | 说明 |
|---|---|
| ❌ `any` | 全部禁用，ESLint error |
| ❌ `@ts-ignore` | 全部禁用，ESLint error |
| ❌ `@ts-expect-error` | 全部禁用，ESLint error |
| ❌ `as unknown as X` | 全部禁用 |
| ✅ 完整类型 | 所有 props / state / 函数签名 |

### 4.2 样式规则（强制）

| 规则 | 替代方案 |
|---|---|
| ❌ 字符串模板拼接 className | `cn()` |
| ❌ 多个 `cn()` 串联调用 | 一次 `cn()` 调用 |
| ❌ 内部写 `style={{...}}` | 全部走 className |
| ❌ `className` 中写 inline style | 全部走 className |
| ❌ CSS Modules | 不使用 |
| ❌ styled-components | 不使用 |
| ❌ 暴露 `styles` / `classNames` 子对象 | 外部 className 够用 |

**`cn()` 三层结构（强制）**（详见 plan.md §1.4）：

```typescript
cn(
  buttonVariants({ variant }),         // 第 1 层：cva 变体
  loading && 'pointer-events-none',    // 第 2 层：内部条件类
  className                            // 第 3 层：用户 className，永远最后
)
```

> 三层顺序不可颠倒。用户 className 必须最后，才能用 `twMerge` 覆盖默认。

### 4.3 文件大小限制

| 文件类型 | 上限 |
|---|---|
| `*-variants.ts`（cva 配置） | 80 行 |
| 组件 `index.tsx` | 200 行 |
| `types.ts`（类型定义） | 100 行 |
| 工具函数文件 | 50 行 |
| 单个测试文件 | 300 行 |

超限必须拆分，禁止用 `// ...` 省略。拆分规则见 plan.md §1.1。

### 4.4 注释规则

- **代码注释**：中文
- **禁止 emoji**（代码、注释、提交信息、PR 标题）
- **禁止 `// TODO`** 类占位符
- **解释 why 而非 what**
- **types.ts 必须写 JSDoc 注释**：每个 interface/type 的每个字段都必须有注释，说明用途、默认值、行为契约

**正例**：

```typescript
// types.ts 必须这样写
export interface ButtonProps {
  /** 按钮变体，决定视觉风格 */
  variant?: ButtonVariant
  /** 加载状态，true 时显示 spinner、禁止交互、aria-busy="true" */
  loading?: boolean
  /** 禁用状态，true 时 disabled 属性生效、onClick 不触发 */
  disabled?: boolean
}
```

**反例**：

```typescript
// types.ts 禁止这样写（无注释）
export interface ButtonProps {
  variant?: ButtonVariant
  loading?: boolean
  disabled?: boolean
}

// 组件代码禁止解释 what
// 设置 className
className={cn(buttonVariants({ variant }), className)}
```

**组件代码正例**：

```typescript
// 修复 Tailwind 类名合并冲突，用户 className 必须放最后才能覆盖
className={cn(buttonVariants({ variant }), className)}
```

### 4.5 导入顺序（强制）

```typescript
// 1. React 核心
import { forwardRef, useState } from 'react'

// 2. 第三方依赖
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

// 3. 内部模块（按路径深度）
import { cn } from '../lib/utils'
import { buttonVariants } from './button-variants'
import type { ButtonProps } from './types'
```

### 4.6 命名规则（强制）

| 类别 | 规则 | 示例 |
|---|---|---|
| 组件文件 | kebab-case | `button-variants.ts` |
| 组件名 | PascalCase | `Button` |
| cva 函数 | `<name>Variants` | `buttonVariants` |
| 类型导出 | PascalCase | `ButtonProps` |
| 工具函数 | camelCase | `cn` |
| 测试文件 | `<name>.test.tsx` | `button.test.tsx` |
| 常量 | UPPER_SNAKE | `MAX_LENGTH` |

### 4.7 ref 转发（强制）

- 所有组件必须使用 `forwardRef` 转发 ref 到根 DOM 元素
- 必须设置 `displayName`
- 复合组件转发到最外层容器元素

### 4.8 无障碍（强制）

所有组件必须满足无障碍要求（详见 plan.md §1.6）：

| 规则 | 说明 |
|---|---|
| ARIA 属性 | loading 设 `aria-busy`，error 设 `aria-invalid`，icon-only 设 `aria-label`，弹层设 `aria-expanded` |
| 装饰性元素 | icon 等装饰元素设 `aria-hidden="true"` |
| 焦点管理 | 模态组件（Modal/Drawer）必须有 focus trap，关闭时焦点回到触发元素 |
| 键盘导航 | 可交互组件支持 Enter/Space，列表类支持 Arrow 键，Escape 关闭弹层 |
| 颜色对比度 | 文本与背景的对比度 >= 4.5:1（WCAG AA） |
| 角色 | 非原生语义元素必须设置 `role` |

### 4.9 语义色（强制）

- 所有颜色使用 Tailwind 语义化 token（`bg-primary`、`text-danger`、`border-warning`）
- 禁止硬编码色值（如 `bg-blue-500`、`text-red-600`、`#3b82f6`）
- 语义色通过 CSS 变量映射（详见 plan.md §2 主题系统）
- 所有组件颜色跟随 `data-theme` 属性切换

### 4.10 barrel 导出（强制）

- 每个组件目录必须导出所有公共 API（组件、类型、变体函数）
- `packages/ui/src/index.ts` 必须包含每个组件的 `export * from './<name>'`
- 导出顺序：组件 -> 类型 -> 变体函数

---

## 5. 测试铁律

### 5.1 强制要求

- **每个组件 ≥ 6 个测试**（不是 3 个，3 个是最低，本项目严格 6+）
- **覆盖率 ≥ 80%**（分支、语句、函数）
- **所有交互必须测试**（点击、输入、清空、focus、blur）
- **所有 variant 必须参数化测试**

### 5.2 测试必须覆盖

**通用（所有组件）**（详见 plan.md §1.7）：

```text
□ 默认状态（不传 prop）
□ 每个 variant / status 参数化测试
□ 用户 className 覆盖（用 twMerge）
□ ref 转发到正确 DOM 元素
□ aria 属性（aria-busy, aria-invalid, aria-expanded 等）
□ disabled 状态下事件不触发
```

**交互组件**（Button、Switch、Checkbox 等）：

```text
□ click / change 事件触发
□ loading 状态下事件不触发
□ 键盘 Enter / Space 触发
□ focus / blur 行为
```

**数据录入组件**（Input、Select 等）：

```text
□ 受控 / 非受控两种模式
□ onChange 事件正确传递新值
□ 清空行为
□ prefix / suffix
□ allowClear 显示 / 隐藏 / 清空
□ showCount
```

**弹层 / 浮层组件**（Modal、Drawer、Popover 等）：

```text
□ 打开 / 关闭渲染
□ ESC 关闭
□ 点击遮罩关闭
□ focus trap
□ 关闭后焦点回到触发元素
```

**复合组件额外**（Form、Table、Tabs 等）：

```text
□ 子组件联动行为
□ 复合组件行为契约表（plan.md §1.10）中的每个场景
```

### 5.3 禁止

- ❌ `.only` / `.skip` 留到生产
- ❌ 注释掉的测试
- ❌ 不写断言的 `it('does something', () => {})`

---

## 6. AI 工作协议

### 6.1 每个 Step 开始前

```text
□ 前置 Step 全部状态=completed
□ 本 Step 的 input 文件都存在
□ 已重读 SOUL.md
□ 已重读 plan.md 相关章节
□ 设计决策已在 SOUL/plan 中找到依据
```

任何一个 ❌ → 立即调用 `AskUserQuestion`，禁止"先做再说"。

### 6.2 每个 Step 完成后必须输出

```markdown
## Step X 完成报告

### 修改/创建的文件
- [绝对路径1]
- [绝对路径2]

### 执行的命令
\`\`\`bash
[命令 1] → exit 0
[命令 2] → exit 0
\`\`\`

### 验证结果
- [断言 1] ✅
- [断言 2] ✅

### 文件大小
- [文件1]: [行数] 行（限制 [上限]）
- [文件2]: [行数] 行（限制 [上限]）

### 已知问题
- 无 / [具体描述]
```

**禁止输出**："看起来 OK" / "应该可以了" / "我完成了"

### 6.3 禁止的行为

- ❌ 一次性生成整个项目（必须按 STEP 顺序）
- ❌ 跳过测试
- ❌ 使用占位符 / TODO
- ❌ 超出 2.md 组件清单
- ❌ 在当前批次之外做"顺手优化"
- ❌ 暴露 plan 中未规定的 props
- ❌ 把"差不多"当作"完成"
- ❌ CLI 操作留下部分成功的中间状态（必须全部完成或全部回滚，见 plan.md §4.10）
- ❌ 组件使用硬编码色值而非语义 token（见 §4.9）

### 6.4 卡住时的处理顺序

```text
1. 重读本 Step 的 input / output / verify
2. 查 SOUL.md
3. 查 plan.md 相关章节
4. 用 SearchCodebase 搜索已有代码
5. 用 WebFetch 查官方文档（Tailwind / cva / Radix）
6. 仍无解 → AskUserQuestion
```

**禁止**：

- ❌ 自行假设需求
- ❌ 反复试错同一个方案
- ❌ 用"可能" / "或许" 给用户报告
- ❌ 把卡住的事情搁置进入下一个 Step

---

## 7. 沟通铁律

### 7.1 报告风格

**正例**：

```text
Step 4 完成。已创建 4 个文件：
- packages/ui/src/button/types.ts
- packages/ui/src/button/button-variants.ts
- packages/ui/src/button/index.tsx
- packages/ui/src/button/button.test.tsx

测试结果：8/8 通过（vitest run 退出码 0）
typecheck：通过（tsc --noEmit 退出码 0）
文件大小：button-variants.ts 45 行（限制 80）、index.tsx 138 行（限制 200）
```

**反例**：

```text
按钮组件基本完成了。代码看起来 OK，应该可以用了。我顺便加了个 size 变体，可能以后会用到。
```

### 7.2 错误报告

发现错误时：

1. 立即停止当前 Step
2. 输出具体错误（文件:行号 + 错误信息）
3. 列出已尝试的方案
4. 列出根因分析
5. 调用 `AskUserQuestion`（不假设解决方案）

### 7.3 变更请求

用户提出新需求时：

1. 判断是否在 §1.1 三批组件清单外
2. 是 → 拒绝并指向 backlog
3. 否 → 检查是否在 plan.md 中
4. 不在 → AskUserQuestion
5. 在 → 直接执行

---

## 8. 版本与依赖铁律

### 8.1 锁版本

- 所有版本号严格按 plan.md §13 依赖锁定
- 禁止升级到 major version（无用户明确批准）
- 禁止引入 plan.md 之外的依赖

### 8.2 锁决策

plan.md §13.3 锁定的决策 中的所有决策是最终决策。**禁止重新讨论**：

- Tailwind + cva（不用 CSS-in-JS）
- Radix Slot（不用自研 cloneElement）
- lucide-react（不用 heroicons）
- Vitest + Testing Library（不用 Jest）
- Commander.js（不用 yargs）
- 模板嵌入 CLI（不拆包）
- React 内置状态（不用 Zustand）
- 仅 README（不建文档站）
- Storybook 8.6.14（不用 10.x，生态未完备）

---

## 9. 红线（违反一次即重新开始）

| # | 红线 |
|---|---|
| 1 | 在 2.md 组件清单之外添加任何组件 |
| 2 | 暴露 `size` / `danger` / `shape` / `classNames` / `styles` |
| 3 | 使用 `any` / `@ts-ignore` |
| 4 | 字符串模板拼接 className |
| 5 | 内部写 `style={{...}}` |
| 6 | 代码 / 注释 / 提交中出现 emoji |
| 7 | 出现 `// TODO` / `TBD` / `...省略` |
| 8 | 跳过测试或注释测试 |
| 9 | 文件超过限制行数 |
| 10 | 输出"可能" / "应该" / "差不多" |
| 11 | 一次性生成整个项目 |
| 12 | 自决定超出 plan 的需求 |
| 13 | 不使用 `forwardRef` 转发 ref |
| 14 | 硬编码色值（如 `bg-blue-500`、`#3b82f6`） |
| 15 | 缺少 JSDoc 注释（types.ts 每个字段必须有） |
| 16 | 弹层组件缺少 focus trap |
| 17 | CLI 模板与源码逻辑不一致 |

---

## 10. 自检清单（每次提交前必跑）

```bash
# 1. 类型检查
pnpm typecheck
# 期望：退出码 0，无任何错误

# 2. 测试
pnpm test
# 期望：所有测试通过，退出码 0

# 3. lint
pnpm lint
# 期望：无 error（warning 也要处理）

# 4. 范围检查
grep -r "size\s*=" packages/ui/src/ --include="*.ts" --include="*.tsx"
# 期望：无匹配

grep -r "danger" packages/ui/src/ --include="*.ts" --include="*.tsx"
# 期望：无匹配

# 5. 禁用模式检查
grep -r "TODO\|FIXME\|@ts-ignore" packages/ui/src/ --include="*.ts" --include="*.tsx"
# 期望：无匹配

# 6. emoji 检查
grep -rP "[\x{1F300}-\x{1F9FF}]" packages/ui/src/ --include="*.ts" --include="*.tsx"
# 期望：无匹配

# 7. 硬编码色值检查
grep -rn "bg-blue-\|bg-red-\|bg-green-\|text-blue-\|text-red-\|border-blue-\|border-red-" packages/ui/src/ --include="*.ts" --include="*.tsx"
# 期望：无匹配（应使用 bg-primary / text-danger 等语义 token）

# 8. forwardRef 检查
grep -rL "forwardRef" packages/ui/src/*/index.tsx
# 期望：无输出（所有组件 index.tsx 必须包含 forwardRef）

# 9. JSDoc 检查
grep -rL "/\*\*" packages/ui/src/*/types.ts
# 期望：无输出（所有 types.ts 必须包含 JSDoc）

# 10. 文件大小检查
find packages/ui/src -name "index.tsx" -exec wc -l {} \; | awk '$1 > 200 {print}'
# 期望：无输出（所有 index.tsx <= 200 行）

# 11. CLI 模板同步检查
pnpm sync:templates
# 期望：退出码 0
```

---

**灵魂版本**：v5.0（对齐 plan.md v5.0 通用规范）
**最后更新**：2026-06-11
**读取时机**：每个 Step 开始前 + 任何决策前
