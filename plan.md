# PLAN.md — simplUI 执行计划

> **本文件是 AI Agent 的执行目标**。规定要做什么、产出什么、如何验证。
> **本文件不规定行为规则**。行为规则在 `soul.md`。
>
> 阅读顺序：**先 soul.md，再 plan.md**。

---

## 0. 项目定义

| 字段 | 值 |
|---|---|
| 项目名 | simplUI |
| 版本 | v3 MVP / 0.1.0 |
| 类型 | 复制即用组件库（monorepo + CLI） |
| 已实现组件 | **27 个**（9 P0 + 18 P1 已实现；5 P1 待补齐：Tooltip, Dropdown, Breadcrumb, Pagination, List） |
| CLI 命令数 | **4 个**（init / add / list / info） |
| 文档 | 仅 README |
| 包管理 | pnpm |
| Node | >= 18 |
| 语言 | TypeScript strict |

---

## 1. 通用组件规范

> 本节定义所有组件必须遵守的统一标准。违反任何一条即不通过验收。

### 1.1 文件组织标准

每个组件位于 `packages/ui/src/<name>/` 目录下，必须包含以下文件：

```text
packages/ui/src/<name>/
├── types.ts              # 类型定义 + JSDoc 注释
├── <name>-variants.ts    # cva 变体配置（如组件有变体）
├── index.tsx             # 组件实现 + barrel 导出
└── <name>.test.tsx       # 测试文件
```

**拆分规则**：

- `index.tsx` 超过 200 行时，按子组件拆分为独立文件（如 `form.tsx`、`form-item.tsx`），`index.tsx` 改为 barrel 导出所有子组件
- `types.ts` 超过 100 行时，按子组件拆分为独立类型文件
- `<name>-variants.ts` 超过 80 行时，拆分为独立变体文件
- 工具函数文件超过 50 行时，按功能拆分为独立工具文件
- 单个测试文件超过 300 行时，按测试类别拆分为独立测试文件
- 拆分后的文件命名：`<sub-name>.tsx`（组件）、`<sub-name>-types.ts`（类型）、`<sub-name>-variants.ts`（变体）

**barrel 导出**：

- 每个组件目录的 `index.tsx`（或拆分后的 barrel 文件）必须导出所有公共 API
- `packages/ui/src/index.ts` 追加 `export * from './<name>'`
- 导出顺序：组件 → 类型 → 变体函数

### 1.2 类型定义标准

```typescript
// packages/ui/src/<name>/types.ts
import { HTMLAttributes, ReactNode } from 'react'
import type { VariantProps } from 'class-variance-authority'
import { <name>Variants } from './<name>-variants'

export interface <Name>Props
  extends Omit<HTMLAttributes<HTMLElement>, /* 冲突的原生属性 */>,
    VariantProps<typeof <name>Variants> {
  /** 每个字段必须有 JSDoc，说明用途、默认值、行为契约 */
  variant?: <Name>Variant
  className?: string
}
```

**JSDoc 强制要求**：

- 每个 `interface` / `type` 的每个字段必须写 JSDoc 注释
- 说明：用途、默认值（如有）、行为契约（涉及状态联动时）
- 内部实现细节不写 JSDoc，用行注释解释 why

**JSDoc 示例**：

```typescript
export interface ButtonProps {
  /** 按钮变体，决定视觉风格。默认 'default' */
  variant?: ButtonVariant
  /** 加载状态。true 时显示 spinner、禁止所有交互、aria-busy="true" */
  loading?: boolean
  /** 禁用状态。true 时 opacity:50%、pointer-events:none、onClick 不触发 */
  disabled?: boolean
}
```

### 1.3 cva 变体标准

每个有视觉变体的组件必须提供 `<name>-variants.ts`：

```typescript
// packages/ui/src/<name>/<name>-variants.ts
import { cva } from 'class-variance-authority'

export const <name>Variants = cva(
  // base: 所有变体共享的基础样式
  '基础 className',
  {
    variants: {
      // 变体维度
    },
    defaultVariants: {
      // 默认值
    },
  }
)
```

**变体命名规范**：

| 维度 | 命名 | 说明 |
|---|---|---|
| 视觉风格 | `variant` | default / primary / dashed / link / text 等 |
| 功能状态 | `status` | error / warning / success 等 |
| 尺寸 | 禁止暴露 | 全局 38px，用户用 className 覆盖 |

**颜色规范**：

- 变体中的颜色使用 Tailwind 语义化 token（`bg-primary`、`text-danger`、`border-warning`）
- 禁止硬编码色值（如 `bg-blue-500`、`text-red-600`）
- 所有语义色通过 CSS 变量映射（见 §2 主题系统）

**变体覆盖测试**：每个 variant 必须有参数化测试验证对应 className 生效。

### 1.4 cn() 三层结构标准

所有组件的 className 合并必须使用 `cn()`（唯一工具函数，定义在 `packages/ui/src/lib/utils.ts`），遵循三层结构：

```typescript
cn(
  <name>Variants({ variant, ... }),    // 第 1 层：cva 变体
  condition && 'conditional-class',     // 第 2 层：内部条件类
  className                             // 第 3 层：用户 className，永远最后
)
```

- 三层顺序不可颠倒。用户 className 必须最后，确保 `twMerge` 能覆盖默认样式
- 禁止拆分为多个 `cn()` 调用
- 禁止字符串模板拼接 className
- 禁止引入 `cn()` 之外的 class 合并工具

### 1.5 行为契约标准

每个组件必须在 `types.ts` 或独立的行为文档中定义**行为契约表**：

```markdown
| 触发条件 | 必须行为 |
|---|---|
| 条件 A | 精确行为描述（包含 className 变化、事件触发、DOM 变化） |
| 条件 B | 精确行为描述 |
```

**通用行为规则（所有组件必须遵守）**：

| 规则 | 要求 |
|---|---|
| `disabled` | 视觉降级（opacity:50%）+ `pointer-events:none` + 所有事件不触发 |
| `className` 覆盖 | 通过 `cn()` + `twMerge` 合并，用户 className 优先级最高 |
| `ref` 转发 | 所有组件必须使用 `forwardRef` 转发到根 DOM 元素 |
| 键盘操作 | 可交互组件必须支持 Enter/Space 触发（原生或自定义） |
| `data-theme` | 所有组件的颜色跟随 `data-theme` 属性切换（见 §2 主题系统） |
| loading 状态 | 有 loading 的组件：显示加载指示器、禁止交互、设置 `aria-busy="true"` |

**复合组件额外规则**：

- 子组件通过 React Context 或 props 传递状态
- 禁止子组件直接操作父组件 DOM
- 复合组件的每个子组件可独立使用（不强制嵌套）

### 1.6 无障碍（a11y）标准

所有组件必须满足以下无障碍要求：

| 类别 | 要求 |
|---|---|
| ARIA 属性 | `aria-busy`（loading）、`aria-invalid`（error）、`aria-label`（icon-only）、`aria-expanded`（展开/折叠）、`aria-selected`（选中） |
| 角色 | 非原生语义元素必须设置 `role`（如自定义列表用 `role="listbox"`） |
| 焦点管理 | 模态组件（Modal/Drawer）打开时 focus trap，关闭时焦点回到触发元素 |
| 键盘导航 | 列表类组件支持 Tab/Arrow 键导航，Escape 关闭弹层 |
| 颜色对比度 | 文本与背景的对比度 >= 4.5:1（WCAG AA） |
| 屏幕阅读器 | 装饰性元素（icon）设置 `aria-hidden="true"`，交互元素必须有可访问文本 |

### 1.7 测试标准

**每个组件 >= 6 个测试用例**，必须覆盖：

> 参考组件（Button §1.8、Input §1.9）作为模板标准，要求 >= 8 个用例。其他组件最低 6 个。

| 测试类别 | 必须覆盖项 |
|---|---|
| 渲染 | 默认状态渲染正确 |
| 变体 | 所有 variant/status 参数化测试 |
| className | 用户 className 通过 twMerge 正确合并 |
| ref | forwardRef 转发到正确的 DOM 元素 |
| 无障碍 | ARIA 属性正确设置 |

**交互组件额外测试**（Button、Switch、Checkbox 等）：

| 测试类别 | 必须覆盖项 |
|---|---|
| 点击 | click 事件触发回调 |
| 禁用 | disabled 状态下事件不触发 |
| 加载 | loading 状态下事件不触发 |
| 键盘 | Enter/Space 触发操作 |
| 焦点 | focus/blur 行为正确 |

**数据录入组件额外测试**（Input、Select、Checkbox 等）：

| 测试类别 | 必须覆盖项 |
|---|---|
| 受控/非受控 | 两种模式都正确工作 |
| onChange | 事件正确触发并传递新值 |
| 清空 | 值清空行为正确 |
| 校验 | 状态（error/warning）视觉正确 |

**弹层/浮层组件额外测试**（Modal、Drawer、Popover 等）：

| 测试类别 | 必须覆盖项 |
|---|---|
| 打开/关闭 | 渲染/销毁行为正确 |
| 遮罩 | 点击遮罩关闭（如适用） |
| Escape | ESC 键关闭 |
| 焦点陷阱 | 打开时焦点不可逃逸 |

**测试验证**：

```bash
pnpm test <name>     # 期望：所有测试通过
pnpm test            # 期望：全量测试通过
```

### 1.8 参考示例：Button

> 以下为 Button 组件的完整实现规范，作为所有组件的参考模板。

**类型定义**（`packages/ui/src/button/types.ts`）：

```typescript
import { ButtonHTMLAttributes, ReactNode } from 'react'
import type { VariantProps } from 'class-variance-authority'
import { buttonVariants } from './button-variants'

export type ButtonVariant = 'default' | 'primary' | 'dashed' | 'link' | 'text'

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'>,
    VariantProps<typeof buttonVariants> {
  /** 按钮变体，决定视觉风格。默认 'default' */
  variant?: ButtonVariant
  /** 加载状态。true 时显示 Loader2 spinner、禁止交互、aria-busy="true" */
  loading?: boolean
  /** 禁用状态。true 时 opacity:50%、pointer-events:none、onClick 不触发 */
  disabled?: boolean
  /** 撑满父容器。true 时 w-full */
  block?: boolean
  /** 前置/后置图标，使用 lucide-react 图标 */
  icon?: ReactNode
  /** 图标位置。默认 'left' */
  iconPosition?: 'left' | 'right'
  /** 使用 Radix Slot 透传 props 到子元素 */
  asChild?: boolean
  /** 原生 button type 属性。默认 'button' */
  htmlType?: 'button' | 'submit' | 'reset'
  /** 提供时渲染为 <a> 标签 */
  href?: string
  /** 链接 target 属性 */
  target?: HTMLAnchorElement['target']
  /** 自定义 className，通过 cn() + twMerge 合并 */
  className?: string
}
```

**行为契约**：

| 触发条件 | 必须行为 |
|---|---|
| `loading === true` | 显示 Loader2 spinner，隐藏 icon，onClick 不触发，htmlType=submit 也不提交，aria-busy="true" |
| `disabled === true` | opacity:50%，pointer-events:none，onClick 不触发 |
| `loading && disabled` | loading 视觉优先，仍不可点击 |
| `asChild === true` | 透传 Radix Slot，children 必须是单个元素 |
| `href` 提供 | 渲染为 `<a>`，target="_blank" 时自动加 `rel="noopener noreferrer"` |
| 只传 `icon` 不传 `children` | 自动圆形（`rounded-full aspect-square p-0`） |
| 键盘 Enter / Space | 触发 click（原生） |
| 暗色模式 | 跟随 `data-theme`（见 §2 主题系统） |

**cva 配置**（`packages/ui/src/button/button-variants.ts`）：

```typescript
import { cva } from 'class-variance-authority'

export const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 font-medium select-none ' +
    'transition-colors duration-200 whitespace-nowrap ' +
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ' +
    'focus-visible:ring-offset-1 ' +
    'disabled:pointer-events-none disabled:opacity-50 ' +
    'h-[38px] px-4 text-sm rounded-md',
  {
    variants: {
      variant: {
        default:
          'bg-white text-gray-900 border border-solid border-gray-300 ' +
          'hover:border-primary hover:text-primary ' +
          'active:border-primary-active',
        primary:
          'bg-primary text-white border border-solid border-primary ' +
          'hover:bg-primary-hover ' +
          'active:bg-primary-active',
        dashed:
          'bg-white text-gray-900 border border-dashed border-gray-300 ' +
          'hover:border-primary hover:text-primary',
        link:
          'bg-transparent text-primary border border-transparent ' +
          'hover:underline underline-offset-4 px-0',
        text:
          'bg-transparent text-gray-900 border border-transparent ' +
          'hover:bg-gray-100',
      },
      block: { true: 'w-full' },
    },
    defaultVariants: { variant: 'default' },
  }
)
```

**组件实现**（`packages/ui/src/button/index.tsx`）：

```typescript
import { forwardRef } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { Loader2 } from 'lucide-react'
import { cn } from '../lib/utils'
import { buttonVariants } from './button-variants'
import type { ButtonProps } from './types'

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      className,
      variant,
      block,
      loading,
      disabled,
      icon,
      iconPosition = 'left',
      asChild,
      htmlType = 'button',
      href,
      target,
      children,
      onClick,
      ...rest
    } = props

    const Comp = asChild ? Slot : href ? 'a' : 'button'
    const isIconOnly = !children && Boolean(icon)

    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
      if (loading || disabled) {
        e.preventDefault()
        return
      }
      onClick?.(e as any)
    }

    const content = (
      <>
        {loading ? (
          <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
        ) : icon && iconPosition === 'left' ? (
          <span aria-hidden="true">{icon}</span>
        ) : null}
        {children}
        {!loading && icon && iconPosition === 'right' ? (
          <span aria-hidden="true">{icon}</span>
        ) : null}
      </>
    )

    return (
      <Comp
        ref={ref as any}
        type={Comp === 'button' ? htmlType : undefined}
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        aria-busy={loading || undefined}
        className={cn(
          buttonVariants({ variant, block }),
          isIconOnly && 'rounded-full aspect-square p-0',
          loading && 'pointer-events-none',
          className
        )}
        disabled={Comp === 'button' ? (disabled || loading) : undefined}
        onClick={handleClick}
        {...rest}
      >
        {content}
      </Comp>
    )
  }
)
Button.displayName = 'Button'
```

**测试用例**（`packages/ui/src/button/button.test.tsx`，>= 8 用例）：

```typescript
describe('Button', () => {
  it('renders with default variant', () => {})
  it.each(['default', 'primary', 'dashed', 'link', 'text'] as const)(
    'renders variant %s with correct class',
    (variant) => {}
  )
  it('merges user className via cn() and twMerge', () => {
    // 验证 <Button className="bg-red-500"> 后 bg-red-500 覆盖 bg-primary
  })
  it('shows Loader2 spinner when loading=true', () => {})
  it('does NOT fire onClick when loading or disabled', () => {})
  it('renders as <a> when href is provided', () => {})
  it('adds rel="noopener noreferrer" for target=_blank', () => {})
  it('becomes circular when only icon is provided (no children)', () => {})
  it('forwards ref to button element', () => {})
  it('passes through asChild via Radix Slot', () => {})
})
```

### 1.9 参考示例：Input

> 以下为 Input 组件的完整实现规范，作为数据录入类组件的参考模板。

**类型定义**（`packages/ui/src/input/types.ts`）：

```typescript
import { InputHTMLAttributes, ReactNode } from 'react'
import type { VariantProps } from 'class-variance-authority'
import { inputVariants } from './input-variants'

export type InputStatus = 'error' | 'warning'

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix' | 'suffix'>,
    VariantProps<typeof inputVariants> {
  /** 输入框状态。error 时边框 danger 色 + aria-invalid，warning 时边框 warning 色 */
  status?: InputStatus
  /** 前缀内容，通过 <span> 插入左侧，垂直居中 */
  prefix?: ReactNode
  /** 后缀内容，通过 <span> 插入右侧，垂直居中 */
  suffix?: ReactNode
  /** 允许清空。true 且 value 存在时显示 X 按钮，点击清空并触发 onChange */
  allowClear?: boolean
  /** 最大长度限制，配合 showCount 使用 */
  maxLength?: number
  /** 显示字数统计。必须配合 maxLength 使用，否则忽略 */
  showCount?: boolean
  /** 自定义 className，通过 cn() + twMerge 合并 */
  className?: string
}
```

**行为契约**：

| 触发条件 | 必须行为 |
|---|---|
| `status === 'error'` | 边框 danger 色，focus ring 同步，`aria-invalid="true"` |
| `status === 'warning'` | 边框 warning 色，focus ring 同步 |
| `allowClear === true && value 存在` | 右侧出现 X 按钮，点击清空 + 触发 onChange |
| `showCount === true` | 必须配 maxLength，否则忽略；右下显示 `{count} / {max}` |
| `prefix` / `suffix` | 通过 `<span>` 插入两侧，垂直居中 |
| `disabled` | 整体灰色，X 按钮不可点击 |
| Enter 键 | 继承原生 onKeyDown |

**cva 配置**（`packages/ui/src/input/input-variants.ts`，要点）：

```typescript
base: 'flex h-[38px] w-full rounded-md border bg-white px-3 text-sm transition-colors ' +
      'file:border-0 file:bg-transparent file:text-sm ' +
      'placeholder:text-gray-400 ' +
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 ' +
      'disabled:cursor-not-allowed disabled:opacity-50'

variants: {
  status: {
    error: 'border-danger focus-visible:ring-danger',
    warning: 'border-warning focus-visible:ring-warning',
    // default 不写，用 base 的 border-gray-300
  }
}
```

**组件实现**（`packages/ui/src/input/index.tsx`）：

```typescript
import { forwardRef, useState, useId } from 'react'
import { X } from 'lucide-react'
import { cn } from '../lib/utils'
import { inputVariants } from './input-variants'
import type { InputProps } from './types'

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    const {
      className,
      status,
      prefix,
      suffix,
      allowClear,
      maxLength,
      showCount,
      value,
      defaultValue,
      onChange,
      disabled,
      ...rest
    } = props

    const [innerValue, setInnerValue] = useState(defaultValue ?? '')
    const isControlled = value !== undefined
    const currentValue = String(isControlled ? value : innerValue)
    const showClear = allowClear && currentValue.length > 0 && !disabled

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!isControlled) setInnerValue(e.target.value)
      onChange?.(e)
    }

    const handleClear = () => {
      if (disabled) return
      const fakeEvent = {
        target: { value: '' },
        currentTarget: { value: '' },
      } as React.ChangeEvent<HTMLInputElement>
      if (!isControlled) setInnerValue('')
      onChange?.(fakeEvent)
    }

    const count = currentValue.length
    const showCounter = showCount && maxLength !== undefined

    return (
      <div className="relative w-full">
        {prefix && (
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            {prefix}
          </span>
        )}
        <input
          ref={ref}
          value={isControlled ? value : innerValue}
          onChange={handleChange}
          maxLength={maxLength}
          disabled={disabled}
          aria-invalid={status === 'error' || undefined}
          className={cn(
            inputVariants({ status }),
            prefix && 'pl-9',
            (suffix || showClear || showCounter) && 'pr-9',
            className
          )}
          {...rest}
        />
        {(suffix || showClear) && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 text-gray-400">
            {showClear && (
              <button
                type="button"
                onClick={handleClear}
                aria-label="Clear input"
                className="hover:text-gray-600"
              >
                <X className="h-4 w-4" />
              </button>
            )}
            {suffix}
          </span>
        )}
        {showCounter && (
          <span className="absolute right-3 -bottom-5 text-xs text-gray-400">
            {count} / {maxLength}
          </span>
        )}
      </div>
    )
  }
)
Input.displayName = 'Input'
```

**测试用例**（`packages/ui/src/input/input.test.tsx`，>= 8 用例）：

```typescript
describe('Input', () => {
  it('renders with default styles', () => {})
  it('applies error border when status=error', () => {})
  it('applies warning border when status=warning', () => {})
  it('shows clear button when allowClear && value', () => {})
  it('clears value when clear button clicked, fires onChange', () => {})
  it('renders prefix and suffix', () => {})
  it('shows count when showCount && maxLength set', () => {})
  it('ignores showCount when maxLength not set', () => {})
  it('merges user className correctly', () => {})
})
```

### 1.10 复合组件行为契约参考

以下为复杂复合组件必须覆盖的行为契约维度，实现时按此模板定义具体行为：

**Form 组件**：FormItem 校验触发时机（onChange / onBlur / onSubmit）、校验状态传递（error message 显示）、FormItem 与 Input/Select 等子组件的值联动方式。

**Table 组件**：列定义与渲染、排序（点击列头切换 asc/desc/none）、筛选（筛选面板交互）、分页（页码切换回调）、行选择（checkbox 全选/单选联动）、空状态展示。

**Modal 组件**：打开/关闭动画、focus trap、ESC 关闭、点击遮罩关闭、`onClose` 回调时机、关闭后焦点回到触发元素。

**Menu 组件**：MenuItem 选中状态、SubMenu 展开/折叠、键盘导航（Arrow 键在菜单项间移动）、水平/垂直模式。

**Select 组件**：下拉面板打开/关闭、搜索过滤、单选/多选、Option 禁用状态、键盘导航、虚拟滚动（大数据量）。

**Tabs 组件**：Tab 切换、Tab 禁用、animated 过渡、额外操作按钮（extra）、Tab 关闭（closable）。

### 1.11 组件验证清单

每个组件实现完成后，必须通过以下验证：

```bash
# 1. 测试
pnpm test <name>
# 期望：所有测试通过（>= 6 用例）

# 2. 类型检查
pnpm typecheck
# 期望：无错误

# 3. lint
pnpm lint
# 期望：无 error

# 4. 文件大小
wc -l packages/ui/src/<name>/<name>-variants.ts  # 期望：<= 80（如存在）
wc -l packages/ui/src/<name>/index.tsx            # 期望：<= 200

# 5. 禁止项检查
grep -r "any\|@ts-ignore\|TODO\|FIXME" packages/ui/src/<name>/
# 期望：无匹配
```

任何一项失败 -> 修复后重跑，禁止跳过。

---

## 2. 主题系统

### 2.1 CSS 变量规范

所有颜色通过 CSS 变量定义，组件中禁止硬编码色值。变量命名规范：

```text
--color-{语义}-{色阶}
```

| 类别 | 变量前缀 | 色阶 | 用途 |
|---|---|---|---|
| 主色 | `--color-primary-` | 50-900 | 品牌色、链接、主操作按钮 |
| 成功 | `--color-success-` | 50, 500, 600 | 成功状态 |
| 警告 | `--color-warning-` | 50, 500, 600 | 警告状态 |
| 危险 | `--color-danger-` | 50, 500, 600 | 错误状态、危险操作 |
| 中性 | `--color-gray-` | 50-900 | 文本、边框、背景 |

**默认值**（`:root` 中定义）：

```css
:root {
  --font-sans: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --color-primary-500: #3b82f6;
  --color-primary-600: #2563eb;
  --color-primary-700: #1d4ed8;
  --color-success-500: #22c55e;
  --color-warning-500: #f59e0b;
  --color-danger-500: #ef4444;
  /* 完整色阶见 packages/ui/src/index.css */
}
```

### 2.2 暗色模式

- 切换机制：通过 `data-theme="dark"` 属性控制（设置在 `<html>` 或任意祖先元素上）
- 所有组件的颜色跟随 `data-theme` 自动切换
- 暗色模式变量定义在 `[data-theme="dark"]` 选择器下

```css
[data-theme="dark"] {
  --color-gray-50: #18181b;
  --color-gray-100: #27272a;
  --color-gray-900: #fafafa;
  /* 暗色模式下翻转中性色阶 */
  /* 语义色（primary/success/warning/danger）保持不变 */
}
```

### 2.3 Tailwind 语义色映射

CSS 变量必须在 `tailwind.config.js` 的 `theme.extend.colors` 中映射为 Tailwind token：

```javascript
colors: {
  primary: {
    DEFAULT: 'var(--color-primary-500)',
    hover: 'var(--color-primary-600)',
    active: 'var(--color-primary-700)',
    50: 'var(--color-primary-50)',
    500: 'var(--color-primary-500)',
    600: 'var(--color-primary-600)',
    700: 'var(--color-primary-700)',
  },
  success: { DEFAULT: 'var(--color-success-500)' },
  warning: { DEFAULT: 'var(--color-warning-500)' },
  danger: { DEFAULT: 'var(--color-danger-500)' },
}
```

组件中使用 `bg-primary`、`text-danger`、`border-warning` 等语义化 class，禁止使用 `bg-blue-500` 等硬编码色值。

### 2.4 主题定制方式

用户可通过两种方式定制主题：

1. **CSS 变量覆盖**：在用户项目的 `:root` 中重新定义 `--color-primary-*` 等变量
2. **Tailwind 配置覆盖**：在 `tailwind.config.js` 的 `theme.extend.colors` 中覆盖颜色映射

CSS 变量优先级高于 Tailwind 默认值，两者不冲突。

---

## 3. Tailwind 配置标准

### 3.1 tailwind.config.js 模板

`simplui init` 生成的 `tailwind.config.js` 必须包含以下配置：

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{ts,tsx}',
    './components/ui/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--color-primary-500)',
          hover: 'var(--color-primary-600)',
          active: 'var(--color-primary-700)',
          50: 'var(--color-primary-50)',
          500: 'var(--color-primary-500)',
          600: 'var(--color-primary-600)',
          700: 'var(--color-primary-700)',
        },
        success: { DEFAULT: 'var(--color-success-500)' },
        warning: { DEFAULT: 'var(--color-warning-500)' },
        danger: { DEFAULT: 'var(--color-danger-500)' },
      },
    },
  },
  plugins: [],
}
```

### 3.2 content 路径规则

- `content` 必须包含用户项目源码路径和组件安装路径
- 使用相对路径（相对于 `tailwind.config.js` 所在位置）
- 禁止使用绝对路径（CLI 生成的配置中）
- 缺少任一路径会导致组件的 Tailwind class 不生效（样式丢失）

### 3.3 postcss.config.js 模板

```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

### 3.4 全局 CSS 模板

`simplui init` 生成的 `components/ui/index.css`：

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --font-sans: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    --color-primary-50: #eff6ff;
    --color-primary-100: #dbeafe;
    --color-primary-500: #3b82f6;
    --color-primary-600: #2563eb;
    --color-primary-700: #1d4ed8;
    --color-success-500: #22c55e;
    --color-warning-500: #f59e0b;
    --color-danger-500: #ef4444;
    --color-gray-50: #f9fafb;
    --color-gray-100: #f3f4f6;
    --color-gray-300: #d1d5db;
    --color-gray-400: #9ca3af;
    --color-gray-900: #111827;
  }

  [data-theme="dark"] {
    --color-gray-50: #18181b;
    --color-gray-100: #27272a;
    --color-gray-900: #fafafa;
  }
}
```

---

## 4. CLI 工具规范

### 4.1 命令总览

CLI 发布到 npm，包名 `simplui`，提供 4 个命令：

| 命令 | 行为 |
|---|---|
| `simplui init` | 初始化 simplUI 环境：生成 tailwind.config.js、postcss.config.js、components/ui/index.ts、components/ui/index.css、更新 tsconfig.json paths |
| `simplui add <name...>` | 复制模板到 `components/ui/<name>/`、追加 export、合并 package.json 依赖 |
| `simplui list` | 读 `components/ui/` 目录，表格输出已安装组件 |
| `simplui info` | 检查 node/pnpm/React/Tailwind 版本、项目环境诊断 |

### 4.2 `simplui init` 详细流程

```text
1. 检查当前目录 package.json 是否存在
   - 不存在：报错 E002
2. 检测用户包管理器（pnpm > yarn > npm）
3. 检测项目类型（React / Next.js / Vite）
   - 非 React 项目：报错 E105
4. 检查 components/ui/ 目录是否已存在
   - 已存在：询问用户是否覆盖（Y/n）
   - 用户选 N：退出，提示 "已跳过初始化"
5. 检查 tailwind.config.js 是否已存在
   - 已存在：询问用户是否合并配置（不覆盖用户自定义内容）
   - 用户选 N：跳过，提示手动添加 colors 和 content
6. 生成文件：
   a. tailwind.config.js（§3.1 模板）
   b. postcss.config.js（§3.3 模板）
   c. components/ui/index.css（§3.4 模板）
   d. components/ui/index.ts（空 barrel 文件 + 注释说明）
   e. components/ui/lib/utils.ts（cn() 工具函数）
7. 更新 tsconfig.json：
   - 添加 paths: { "@/*": ["./src/*"] }（如不存在）
   - 添加 baseUrl: "."（如不存在）
8. 输出初始化报告：
   - 已创建的文件列表
   - 下一步操作提示（simplui add <component>）
   - 需要手动安装的依赖命令
```

**init 错误码**：

| 码 | 含义 | 用户操作 |
|---|---|---|
| E002 | package.json 未找到 | cd 到项目根目录 |
| E105 | 非 React 项目 | 确认项目使用 React |
| E106 | tailwind.config.js 已存在 | 确认后选择合并或跳过 |
| E107 | components/ui/ 已存在 | 确认后选择覆盖或跳过 |

### 4.3 `simplui add` 详细流程

```text
1. 解析组件名（空格分隔）
2. 校验：组件名存在于 CLI 嵌入的 templates
   - 不存在：报错 E101
3. 读用户 package.json
   - 不存在：报错 E002
4. 校验环境：
   - React >= 18：不存在或版本不足 -> 报错 E103
   - Tailwind 已装：不存在 -> 报错 E104
   - components/ui/ 存在：不存在 -> 提示先跑 simplui init，报错 E108
5. 对每个组件：
   a. 检查 components/ui/<name>/ 是否已存在
      - 存在：报错 E102，让用户删除后重跑
   b. 复制 templates/<name>/* -> components/ui/<name>/
   c. 复制 components/ui/lib/utils.ts（如不存在）
   d. 解析 manifest.json
   e. 合并 dependencies 到用户 package.json（深合并，不降低版本）
   f. 追加 export 到 components/ui/index.ts
6. 输出安装报告：
   - 已安装的组件列表
   - 需要手动执行的依赖安装命令（pnpm add / npm install）
   - 新增的依赖列表
```

### 4.4 `simplui list`

```text
1. 检查 components/ui/ 目录存在
2. 扫描子目录，过滤出含 index.tsx 的目录
3. 读取每个组件的 manifest.json（如存在）
4. 表格输出：
   | 组件名 | 版本 | 文件数 | 描述 |
5. 底部输出汇总：共 N 个组件
```

### 4.5 `simplui info`

```text
1. 检测并输出：
   - Node.js 版本（>= 18 为 PASS）
   - 包管理器（pnpm/yarn/npm + 版本）
   - React 版本（>= 18 为 PASS）
   - Tailwind CSS 版本（已装为 PASS）
   - TypeScript 版本（>= 5 为 PASS）
2. 检测项目配置：
   - tsconfig.json 存在 + paths 配置
   - tailwind.config.js 存在 + content 配置
   - components/ui/ 目录存在
3. 输出诊断报告：
   - 每项 PASS / FAIL + 版本号
   - FAIL 项给出修复建议
```

### 4.6 manifest.json 模板

每个 CLI 模板目录下必须包含 `manifest.json`：

```json
{
  "name": "button",
  "version": "1.0.0",
  "files": ["index.tsx", "button-variants.ts", "types.ts"],
  "dependencies": [
    "@radix-ui/react-slot",
    "class-variance-authority",
    "lucide-react"
  ],
  "description": "Button component with 5 variants and loading state"
}
```

### 4.7 错误码完整表

| 码 | 含义 | 触发命令 | 用户操作 |
|---|---|---|---|
| E001 | Node < 18 | 所有 | 升级 Node |
| E002 | package.json 未找到 | init / add | cd 到项目根目录 |
| E101 | 组件名不存在 | add | 检查拼写，用 `simplui list` 查看可用组件 |
| E102 | 组件已存在 | add | 删除本地组件目录后重跑 |
| E103 | React 缺失或 < 18 | add | 安装 React 18+ |
| E104 | Tailwind 未装 | add | 跑 `simplui init` 或手动安装 |
| E105 | 非 React 项目 | init | 确认项目使用 React |
| E106 | tailwind.config.js 已存在 | init | 确认后选择合并或跳过 |
| E107 | components/ui/ 已存在 | init | 确认后选择覆盖或跳过 |
| E108 | components/ui/ 不存在 | add | 先跑 `simplui init` |

### 4.8 CLI 依赖

```json
{
  "name": "simplui",
  "version": "0.1.0",
  "bin": { "simplui": "./bin/simplui.js" },
  "files": ["bin", "dist", "src/templates"],
  "dependencies": {
    "commander": "^12.1.0",
    "chalk": "^5.3.0",
    "fs-extra": "^11.2.0"
  }
}
```

### 4.9 CLI 模板同步规则

`scripts/sync-templates.ts` 负责将 `packages/ui/src/<name>/` 同步到 `packages/cli/src/templates/<name>/`。

**同步范围**：

- 同步：`index.tsx`、`<name>-variants.ts`、`types.ts`（及拆分后的子组件文件）
- 不同步：`<name>.test.tsx`、`<name>.stories.tsx`
- 自动生成：`manifest.json`（根据 types.ts 的依赖分析）

**模板与源码的差异规则**：

- 禁止差异：组件逻辑、类型定义、cva 配置
- 允许差异：import 路径（模板中的相对路径可能与源码不同）、测试文件（模板不含测试）
- 模板中的 import 路径必须是用户项目中可直接使用的（不依赖 monorepo 结构）

**同步验证**：

```bash
pnpm sync:templates
diff packages/ui/src/button/index.tsx packages/cli/src/templates/button/index.tsx
# 期望：无差异（除允许的 import 路径差异外）
```

### 4.10 回滚策略

CLI 操作中途失败时的处理：

| 场景 | 处理方式 |
|---|---|
| `add` 复制文件到一半失败 | 删除已复制的组件目录，报错并提示重跑 |
| `add` 合并 package.json 失败 | package.json 不做部分写入，先备份再原子写入 |
| `init` 生成文件到一半失败 | 记录已生成文件列表，报错时输出列表供用户手动清理 |
| 网络错误（下载依赖） | 不涉及（CLI 不自动安装依赖，只输出安装命令） |

**禁止**：部分成功的中间状态。任何操作要么全部完成，要么全部回滚。

---

## 5. README 必含（9 项）

1. 项目介绍（2-3 句）
2. 特性列表（5 个 bullet）
3. 快速开始（`simplui init` + `simplui add` 命令）
4. 已支持组件列表（27 个已实现 + 5 个待补齐，状态标记）
5. 组件 API 表格（核心组件的 props 说明）
6. 主题定制说明（CSS 变量覆盖 + Tailwind 配置覆盖，引用 §2 主题系统）
7. 本地开发（克隆 + pnpm i + pnpm dev）
8. 贡献（PR 流程）
9. License（MIT）

---

## 6. 执行步骤（拓扑排序）

| Step | 名称 | 前置 | 产出 |
|---|---|---|---|
| 0 | 初始化 monorepo 骨架 | -- | package.json, pnpm-workspace.yaml, tsconfig.base.json, .gitignore, README.md, LICENSE |
| 1 | 安装依赖 | 0 | pnpm-lock.yaml |
| 2 | 配置 ESLint + Prettier | 1 | eslint.config.mjs, .prettierrc |
| 3 | 搭建 packages/ui 基础 | 2 | packages/ui/{package.json, tsconfig.json, vitest.config.ts, src/lib/utils.ts, src/test-setup.ts, src/index.ts, src/index.css} |
| 4 | 实现 Button | 3 | packages/ui/src/button/*（types/variants/index/test） |
| 5 | 实现 Input | 4 | packages/ui/src/input/*（types/variants/index/test） |
| 6 | 搭建 packages/cli 基础 | 5 | packages/cli/{package.json, bin/simplui.js, tsconfig.json, src/index.ts} |
| 7 | 实现 4 个 CLI 命令 | 6 | packages/cli/src/commands/*, packages/cli/src/utils/* |
| 8 | 编写 sync-templates 脚本 | 7 | scripts/sync-templates.ts |
| 9 | 端到端验证 | 8 | /tmp/e2e-app 截图 + 报告 |
| 10 | 发布准备 | 9 | README 完善 + CHANGELOG + 0.1.0 |

---

## 7. 详细 Step 定义

### STEP-0：初始化 monorepo 骨架

**Input**：空目录

**Output**：
- `package.json` -- `{ name: "simplui", private: true, scripts: { typecheck, lint, test, build, "sync:templates", format } }`
- `pnpm-workspace.yaml` -- `packages:\n  - 'packages/*'\n`
- `tsconfig.base.json` -- target ES2022, module ESNext, jsx react-jsx, strict, noUncheckedIndexedAccess, isolatedModules, skipLibCheck
- `.gitignore` -- node_modules, dist, .DS_Store, coverage, *.log, .env*, storybook-demo/
- `README.md` -- 标题 + 一句话
- `LICENSE` -- MIT 全文

**Actions**：
1. 创建上述 6 个文件
2. 不创建 `packages/` 子目录（Step 3 再创建）

**Verify**：
```bash
ls -la
# 期望看到 6 个文件
```

**Error**：文件冲突 -> AskUserQuestion

---

### STEP-1：安装依赖

**Input**：STEP-0 完成

**Output**：`pnpm-lock.yaml` 生成

**Actions**：
```bash
pnpm add -Dw <all devDependencies>
pnpm add -w <all runtime deps>
```

**Verify**：
```bash
pnpm list --depth 0
```

**Error**：网络超时 -> 重试或换源

---

### STEP-2：ESLint + Prettier

**Input**：STEP-1 完成

**Output**：`eslint.config.mjs`, `.prettierrc`

**Actions**：
1. `eslint.config.mjs` -- flat config + `@typescript-eslint`，规则：`no-explicit-any: error`, `ban-ts-comment: error`
2. `.prettierrc` -- `singleQuote: true, semi: false, printWidth: 100, trailingComma: 'all'`
3. 根 `package.json` 加 `lint: "eslint ."`, `format: "prettier --write ."`

**Verify**：
```bash
pnpm lint
# 期望：无 error
```

---

### STEP-3：packages/ui 基础

**Input**：STEP-2 完成

**Output**：
- `packages/ui/package.json` -- `{ name: "@simplui/ui", private: true, main: "./src/index.ts" }`
- `packages/ui/tsconfig.json` -- extends 根，include: ["./src"]
- `packages/ui/vitest.config.ts` -- jsdom + @vitejs/plugin-react
- `packages/ui/src/lib/utils.ts` -- `cn()` 函数（见 §1.4）
- `packages/ui/src/test-setup.ts` -- `import '@testing-library/jest-dom/vitest'`
- `packages/ui/src/index.ts` -- `export { cn } from './lib/utils'`
- `packages/ui/src/index.css` -- Tailwind 指令 + CSS 变量（见 §3.4）

**Verify**：
```bash
pnpm test        # 期望：No test files found, exit 0
pnpm typecheck   # 期望：no errors, exit 0
```

---

### STEP-4：实现 Button

**Input**：STEP-3 完成

**Output**：`packages/ui/src/button/*`（types/variants/index/test）

**规范**：见 §1.8 参考示例

**Verify**：
```bash
pnpm test button   # 期望：>= 8 tests passed
pnpm typecheck     # 期望：no errors
wc -l packages/ui/src/button/button-variants.ts  # 期望：<= 80
wc -l packages/ui/src/button/index.tsx            # 期望：<= 200
```

---

### STEP-5：实现 Input

**Input**：STEP-4 完成

**Output**：`packages/ui/src/input/*`（types/variants/index/test）

**规范**：见 §1.9 参考示例

**Verify**：
```bash
pnpm test input    # 期望：>= 8 tests passed
pnpm typecheck     # 期望：no errors
```

---

### STEP-6：packages/cli 基础

**Input**：STEP-5 完成

**Output**：
- `packages/cli/package.json` -- 见 §4.8
- `packages/cli/bin/simplui.js` -- `#!/usr/bin/env node` + `require('../dist/index.js')`
- `packages/cli/tsconfig.json` -- extends 根，outDir: dist，module: CommonJS
- `packages/cli/src/index.ts` -- commander program 入口

**Verify**：
```bash
pnpm --filter simplui build
node packages/cli/bin/simplui.js --version
# 期望输出：0.1.0
```

---

### STEP-7：实现 4 个 CLI 命令

**Input**：STEP-6 完成

**Output**：
- `packages/cli/src/utils/fs.ts` -- pathExists / ensureDir / copy
- `packages/cli/src/utils/logger.ts` -- chalk 蓝/绿/红/黄
- `packages/cli/src/utils/package.ts` -- 读/合并 package.json
- `packages/cli/src/commands/init.ts` -- 见 §4.2
- `packages/cli/src/commands/info.ts` -- 见 §4.5
- `packages/cli/src/commands/list.ts` -- 见 §4.4
- `packages/cli/src/commands/add.ts` -- 见 §4.3

**Verify**：
```bash
cd /tmp/test-app
node /path/to/simplui init
node /path/to/simplui add button
ls /tmp/test-app/components/ui/button/
# 期望看到组件文件
```

---

### STEP-8：sync-templates 脚本

**Input**：STEP-7 完成

**Output**：`scripts/sync-templates.ts`

**规范**：见 §4.9 CLI 模板同步规则

**Verify**：
```bash
pnpm sync:templates
diff packages/ui/src/button/index.tsx packages/cli/src/templates/button/index.tsx
# 期望：无逻辑差异
```

---

### STEP-9：端到端验证

**Input**：STEP-8 完成

**Output**：`/tmp/e2e-app/` 验证报告

**Actions**：
```bash
rm -rf /tmp/e2e-app
pnpm create vite /tmp/e2e-app -- --template react-ts
cd /tmp/e2e-app
pnpm install
simplui init
simplui add button input
# 写 demo 页面
pnpm dev &
```

**Verify**：
- 渲染正确
- loading 状态正确
- allowClear 清空正确
- className 覆盖正确（twMerge）
- icon-only 自动圆形
- 测试覆盖 >= 80%

---

### STEP-10：发布准备

**Input**：STEP-9 通过

**Output**：完善的 README、CHANGELOG、版本 0.1.0

**Verify**：
```bash
pnpm test && pnpm typecheck && pnpm lint
# 期望：三个都退出码 0
```

---

## 8. 里程碑

| ID | 名称 | Step | 验收 | 产出 |
|---|---|---|---|---|
| M1 | 工程底座 | 0-3 | install + typecheck + lint + test 全绿 | 可运行 monorepo |
| M2 | 组件就绪 | 4-5 | Button + Input 全部测试通过（>= 8 用例/个） | 两个 MVP 组件 |
| M3 | CLI 可用 | 6-8 | 真实项目 `simplui init` + `simplui add button input` 成功 | 可发布 CLI |
| M4 | v0.1.0 就绪 | 9-10 | E2E 截图 + README 完整 + 三件套全绿 | 可发版 |
| M5 | P0 核心组件 | 11-17 | Layout/Grid/Typography/Form/Table/Modal/Menu 全部测试通过 | 核心组件集 |
| M6 | P1 常用组件 | 18-40 | Space 到 List 全部测试通过 | 常用组件集 |
| M7 | P2 辅助组件 | 41-59 | AutoComplete 到 Chart 全部测试通过 | 完整组件库 |
| M8 | 全量发布 | 59+ | 所有组件 CLI 模板同步 + README 更新 + 版本发布 | 正式发布 |

---

## 9. 验收清单（v0.1.0）

- [ ] `packages/ui` Button + Input 源码 + 测试（>= 8 用例/个）
- [ ] `packages/cli` 4 个命令（init / add / list / info）可用
- [ ] `scripts/sync-templates.ts` 可执行
- [ ] 真实 React 项目 E2E 验证通过
- [ ] README 完整（§5 全部 9 项）
- [ ] LICENSE（MIT）
- [ ] CI 中 lint + typecheck + test 三件套全绿
- [ ] 无任何 `any` / `@ts-ignore` / `TODO`
- [ ] 无任何 emoji
- [ ] 无字符串模板拼接 className
- [ ] 无内部 `style={{...}}`
- [ ] 文件大小符合限制（variants <= 80 行，index.tsx <= 200 行）
- [ ] 所有组件使用 `cn()` 三层结构（§1.4）
- [ ] 所有组件使用 `forwardRef`（§1.5）
- [ ] 所有组件 JSDoc 完整（§1.2）
- [ ] 所有颜色使用语义化 token（§2.3）
- [ ] CLI 模板与源码逻辑一致（§4.9）

---

## 10. 扩展组件实现计划（v4.0）

> Button 和 Input 已完成（STEP-4/5）。以下按 P0 -> P1 -> P2 优先级逐个实现 2.md 中的剩余组件。
> 每个组件的实现必须严格遵循 §1 通用组件规范（cn() 三层结构、JSDoc 注释、>= 6 测试、文件大小限制等）。

### 10.1 P0 批次（核心组件）

| Step | 组件 | 前置 | 产出 |
|---|---|---|---|
| 11 | Layout | 10 | `packages/ui/src/layout/*` |
| 12 | Grid | 11 | `packages/ui/src/grid/*`（Row + Col） |
| 13 | Typography | 12 | `packages/ui/src/typography/*`（Text + Title + Paragraph） |
| 14 | Form | 13 | `packages/ui/src/form/*`（Form + FormItem） |
| 15 | Table | 14 | `packages/ui/src/table/*`（Table + TableHead + TableBody + TableRow + TableCell） |
| 16 | Modal | 15 | `packages/ui/src/modal/*`（Modal + ModalHeader + ModalBody + ModalFooter） |
| 17 | Menu | 16 | `packages/ui/src/menu/*`（Menu + MenuItem + SubMenu） |

### 10.2 P1 批次（常用组件）

| Step | 组件 | 前置 | 产出 |
|---|---|---|---|
| 18 | Space | 17 | `packages/ui/src/space/*` |
| 19 | Divider | 18 | `packages/ui/src/divider/*` |
| 20 | InputNumber | 19 | `packages/ui/src/input-number/*` |
| 21 | Select | 20 | `packages/ui/src/select/*` |
| 22 | Switch | 21 | `packages/ui/src/switch/*` |
| 23 | Checkbox | 22 | `packages/ui/src/checkbox/*` |
| 24 | Radio | 23 | `packages/ui/src/radio/*` |
| 25 | DatePicker | 24 | `packages/ui/src/date-picker/*` |
| 26 | Upload | 25 | `packages/ui/src/upload/*` |
| 27 | Card | 26 | `packages/ui/src/card/*` |
| 28 | Tabs | 27 | `packages/ui/src/tabs/*` |
| 29 | Tag | 28 | `packages/ui/src/tag/*` |
| 30 | Badge | 29 | `packages/ui/src/badge/*` |
| 31 | Avatar | 30 | `packages/ui/src/avatar/*` |
| 32 | Drawer | 31 | `packages/ui/src/drawer/*` |
| 33 | Message | 32 | `packages/ui/src/message/*` |
| 34 | Notification | 33 | `packages/ui/src/notification/*` |
| 35 | Popover | 34 | `packages/ui/src/popover/*` |
| 36 | Tooltip | 35 | `packages/ui/src/tooltip/*` |
| 37 | Dropdown | 36 | `packages/ui/src/dropdown/*` |
| 38 | Breadcrumb | 37 | `packages/ui/src/breadcrumb/*` |
| 39 | Pagination | 38 | `packages/ui/src/pagination/*` |
| 40 | List | 39 | `packages/ui/src/list/*` |

### 10.3 P2 批次（辅助组件）

| Step | 组件 | 前置 | 产出 |
|---|---|---|---|
| 41 | AutoComplete | 40 | `packages/ui/src/auto-complete/*` |
| 42 | Cascader | 41 | `packages/ui/src/cascader/*` |
| 43 | TreeSelect | 42 | `packages/ui/src/tree-select/*` |
| 44 | TimePicker | 43 | `packages/ui/src/time-picker/*` |
| 45 | Rate | 44 | `packages/ui/src/rate/*` |
| 46 | Slider | 45 | `packages/ui/src/slider/*` |
| 47 | Tree | 46 | `packages/ui/src/tree/*` |
| 48 | Calendar | 47 | `packages/ui/src/calendar/*` |
| 49 | Empty | 48 | `packages/ui/src/empty/*` |
| 50 | Skeleton | 49 | `packages/ui/src/skeleton/*` |
| 51 | Progress | 50 | `packages/ui/src/progress/*` |
| 52 | Statistic | 51 | `packages/ui/src/statistic/*` |
| 53 | Timeline | 52 | `packages/ui/src/timeline/*` |
| 54 | Steps | 53 | `packages/ui/src/steps/*` |
| 55 | Spin | 54 | `packages/ui/src/spin/*` |
| 56 | Anchor | 55 | `packages/ui/src/anchor/*` |
| 57 | BackTop | 56 | `packages/ui/src/back-top/*` |
| 58 | ConfigProvider | 57 | `packages/ui/src/config-provider/*` |
| 59 | Chart | 58 | `packages/ui/src/chart/*` |

### 10.4 P2+ 扩展组件（第三批之后）

以下组件按 P2/P3 优先级分批实现，Step 60 起：

**P2 扩展组件**：

| Step | 组件 | 前置 | 产出 |
|---|---|---|---|
| 60 | Icon | 59 | `packages/ui/src/icon/*` |
| 61 | Flex | 60 | `packages/ui/src/flex/*` |
| 62 | Alert | 61 | `packages/ui/src/alert/*` |
| 63 | Popconfirm | 62 | `packages/ui/src/popconfirm/*` |
| 64 | Result | 63 | `packages/ui/src/result/*` |
| 65 | Carousel | 64 | `packages/ui/src/carousel/*` |
| 66 | Collapse | 65 | `packages/ui/src/collapse/*` |
| 67 | Descriptions | 66 | `packages/ui/src/descriptions/*` |
| 68 | Image | 67 | `packages/ui/src/image/*` |
| 69 | Segmented | 68 | `packages/ui/src/segmented/*` |
| 70 | Affix | 69 | `packages/ui/src/affix/*` |

**P3 扩展组件**：

| Step | 组件 | 前置 | 产出 |
|---|---|---|---|
| 71 | FloatButton | 70 | `packages/ui/src/float-button/*` |
| 72 | Splitter | 71 | `packages/ui/src/splitter/*` |
| 73 | ColorPicker | 72 | `packages/ui/src/color-picker/*` |
| 74 | Mentions | 73 | `packages/ui/src/mentions/*` |
| 75 | Transfer | 74 | `packages/ui/src/transfer/*` |
| 76 | QRCode | 75 | `packages/ui/src/qrcode/*` |
| 77 | Tour | 76 | `packages/ui/src/tour/*` |
| 78 | Watermark | 77 | `packages/ui/src/watermark/*` |
| 79 | App | 78 | `packages/ui/src/app/*` |

### 10.5 P1 待补齐组件

以下 P1 组件尚未创建源码目录和 CLI 模板，需在 P1 批次中按 Step 顺序实现：

| Step | 组件 | 当前状态 |
|---|---|---|
| 36 | Tooltip | 无源码、无模板 |
| 37 | Dropdown | 无源码、无模板 |
| 38 | Breadcrumb | 无源码、无模板 |
| 39 | Pagination | 无源码、无模板 |
| 40 | List | 无源码、无模板 |

已实现的 P1 组件（27 个中的非 Button/Input 组件）需确认是否已按 §1 通用规范完成审查，未通过的需回头补齐。

### 10.6 每个组件的统一执行流程

**Input**：前置 Step 完成

**Output**（每个组件必须产出）：
- `packages/ui/src/<name>/types.ts` -- 完整类型定义 + JSDoc（§1.2）
- `packages/ui/src/<name>/<name>-variants.ts` -- cva 配置（§1.3，如适用）
- `packages/ui/src/<name>/index.tsx` -- 组件实现（§1.4 cn() 三层、§1.5 行为契约、§1.6 a11y）
- `packages/ui/src/<name>/<name>.test.tsx` -- >= 6 个测试用例（§1.7）
- `packages/ui/src/index.ts` 追加 `export * from './<name>'`
- `packages/cli/src/templates/<name>/` -- CLI 模板同步（§4.9）

**Actions**：
1. 研究组件 API（参考 Ant Design 对应组件）
2. 设计 types.ts + 行为契约表（§1.5）
3. 实现 cva variants（§1.3，<= 80 行）
4. 实现组件（<= 200 行，cn() 三层结构）
5. 编写测试（§1.7，覆盖所有 variant/status/交互）
6. 追加 barrel export
7. 同步 CLI 模板（§4.9）
8. 跑验证清单（§1.11）

**Verify**：按 §1.11 组件验证清单执行

**Error**：任何验证失败 -> 修复后重跑，禁止跳过

### 10.6 扩展里程碑

| ID | 名称 | Step | 验收 |
|---|---|---|---|
| M5 | P0 核心组件 | 11-17 | Layout/Grid/Typography/Form/Table/Modal/Menu 全部测试通过 |
| M6 | P1 常用组件 | 18-40 | Space 到 List 全部测试通过 |
| M7 | P2 辅助组件 | 41-59 | AutoComplete 到 Chart 全部测试通过 |
| M8 | P2+ 扩展组件 | 60-70 | Icon 到 Affix 全部测试通过 |
| M9 | P3 扩展组件 | 71-79 | FloatButton 到 App 全部测试通过 |
| M10 | 全量组件发布 | 79+ | 所有组件 CLI 模板同步 + README 更新 + 版本发布 |

---

## 11. Storybook 规范与联调复盘

### 11.1 Stories 文件标准

每个组件必须提供 `.stories.tsx` 文件，放在 `storybook-demo/src/stories/` 目录下：

```text
storybook-demo/src/stories/
├── Button.stories.tsx
├── Input.stories.tsx
├── ...
```

**Stories 文件规范**：

```typescript
import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '@simplui/ui'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    // 每个 prop 配置 control 类型
  },
}
export default meta

type Story = StoryObj<typeof Button>

// 必须包含的 stories：
export const Default: Story = {}              // 默认状态
export const AllVariants: Story = {           // 所有 variant 展示
  render: () => (
    <div className="flex gap-2">
      {/* 每个 variant 一个实例 */}
    </div>
  ),
}
export const Disabled: Story = { args: { disabled: true } }
export const Loading: Story = { args: { loading: true } }  // 有 loading 的组件
```

**必须覆盖的 stories**：

| Story | 覆盖 |
|---|---|
| Default | 默认状态 |
| AllVariants | 所有 variant 并排展示 |
| Disabled | 禁用状态 |
| Loading | 加载状态（如适用） |
| WithIcon | 带图标（如适用） |
| CustomClassName | 自定义 className 覆盖 |
| Interactive | 交互演示（如适用） |

### 11.2 联调复盘（storybook-demo）

> 本节记录 `storybook-demo`（独立子项目，不在 monorepo workspace 内）在搭建过程中踩到的所有坑、根因、最终解决方案。
> 凡是后续再搭建 storybook-demo、或者迁移到 monorepo workspace 的步骤中遇到类似报错，先看本节。

**工程定位**：

- 路径：`/Users/donghym/Desktop/simplUI/storybook-demo/`
- 定位：手动创建的演示子项目，不属于 pnpm workspace，独立 package.json / pnpm-lock.yaml / node_modules
- 作用：把 `packages/ui/src` 下的所有组件跑在 Storybook 里，便于人工验收
- 已被 `.gitignore` 忽略（`storybook-demo/`）

**根因清单**（按发生顺序）：

| # | 现象 | 根因 | 解决方案 |
|---|---|---|---|
| 1 | `You installed esbuild for another platform` | sandbox 装的是 linux-arm64 的 esbuild，当前机器是 darwin-arm64 | 删除 node_modules + pnpm-lock.yaml 重装；显式 `pnpm add -D @esbuild/darwin-arm64` |
| 2 | `Cannot find native binding @oxc-parser` | Storybook 8.6+ 依赖 oxc-parser 可选 native 包 | 改用 Storybook **8.6.14**（不依赖 oxc） |
| 3 | `incompatible packages with Storybook 10.4.3` | addon-essentials/blocks 停留在 8.6.14 | 全部 storybook 依赖统一降到 **8.6.14** |
| 4 | `Cannot find module '@simplui/ui'` | 路径别名未配置 | 在 vite.config.ts、tsconfig.json、.storybook/main.ts 三处统一加 alias |
| 5 | 组件样式没生效 | CSS @import 不识别 Vite alias | 在 .storybook/preview.ts 用 ESM import 引入（绝对路径） |
| 6 | 部分组件样式丢失 | Tailwind content 未扫 packages/ui/src | tailwind.config.js content 加 packages/ui/src 路径 |
| 7 | Vite alias 不生效 | 沙箱 __dirname 与实际路径不一致 | 全部改用字面量绝对路径常量 |

**关键配置快照（最终可用版本）**：

`storybook-demo/package.json`（devDependencies 关键项）：

```json
{
  "@storybook/addon-essentials": "8.6.14",
  "@storybook/blocks": "8.6.14",
  "@storybook/react": "8.6.14",
  "@storybook/react-vite": "8.6.14",
  "@vitejs/plugin-react": "^4.3.3",
  "esbuild": "^0.21.5",
  "@esbuild/darwin-arm64": "*",
  "storybook": "8.6.14",
  "tailwindcss": "^3.4.14",
  "typescript": "^5.6.3",
  "vite": "^5.4.10"
}
```

同时需安装组件库运行时依赖：`@radix-ui/react-slot`、`class-variance-authority`、`clsx`、`tailwind-merge`、`lucide-react`。

`storybook-demo/vite.config.ts`：

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const UI_SRC = '/Users/donghym/Desktop/simplUI/packages/ui/src'
const SRC_DIR = '/Users/donghym/Desktop/simplUI/storybook-demo/src'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: SRC_DIR },
      { find: '@simplui/ui', replacement: UI_SRC },
      { find: '@simplui/ui/src', replacement: UI_SRC },
    ],
  },
})
```

`storybook-demo/.storybook/main.ts`：

```typescript
import type { StorybookConfig } from '@storybook/react-vite'

const UI_SRC = '/Users/donghym/Desktop/simplUI/packages/ui/src'
const SRC_DIR = '/Users/donghym/Desktop/simplUI/storybook-demo/src'

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(ts|tsx)'],
  addons: ['@storybook/addon-essentials', '@storybook/blocks'],
  framework: { name: '@storybook/react-vite', options: {} },
  viteFinal: async (config) => {
    config.resolve = config.resolve || {}
    const existing = Array.isArray(config.resolve.alias)
      ? config.resolve.alias
      : Object.entries(config.resolve.alias || {}).map(([find, replacement]) => ({ find, replacement }))
    config.resolve.alias = [
      ...existing,
      { find: '@', replacement: SRC_DIR },
      { find: '@simplui/ui', replacement: UI_SRC },
      { find: '@simplui/ui/src', replacement: UI_SRC },
    ]
    return config
  },
}

export default config
```

`storybook-demo/.storybook/preview.ts`：

```typescript
import type { Preview } from '@storybook/react'
import '../src/index.css'
import '/Users/donghym/Desktop/simplUI/packages/ui/src/index.css'

const preview: Preview = { parameters: {} }
export default preview
```

`storybook-demo/tailwind.config.js`：

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{ts,tsx}',
    '/Users/donghym/Desktop/simplUI/packages/ui/src/**/*.{ts,tsx}',
  ],
  theme: { extend: {} },
  plugins: [],
}
```

**启动流程**：

```bash
cd /Users/donghym/Desktop/simplUI/storybook-demo
rm -rf node_modules pnpm-lock.yaml   # 首次或换机器必跑
pnpm install
pnpm exec storybook dev -p 6006
# 浏览器打开 http://localhost:6006/
```

**未来改进（迁移到 monorepo workspace 时的检查清单）**：

- [ ] 把 `storybook-demo/` 加入 `pnpm-workspace.yaml`
- [ ] 改用 `workspace:*` 协议引用 `@simplui/ui`，删除 alias
- [ ] 去掉绝对路径，回归 `path.resolve(__dirname, ...)`
- [ ] Tailwind `content` 改回相对路径
- [ ] 删除 `@esbuild/darwin-arm64` 强制依赖
- [ ] 升级到 Storybook 10.x（待生态完善）

---

## 12. 目录结构（最终）

```text
/Users/donghym/Desktop/simplUI/
├── package.json                              # 根 workspace
├── pnpm-workspace.yaml                       # packages: ['packages/*']
├── tsconfig.base.json                        # strict, ES2022, ESNext
├── eslint.config.mjs                         # @typescript-eslint flat config
├── .prettierrc                               # singleQuote, no semi, 100
├── .gitignore
├── README.md
├── LICENSE                                   # MIT
├── CHANGELOG.md
├── .github/
│   └── workflows/
│       └── ci.yml                            # lint + typecheck + test
├── scripts/
│   └── sync-templates.ts                     # ui/src -> cli/src/templates
├── packages/
│   ├── ui/                                   # 不发布
│   │   ├── package.json                      # @simplui/ui
│   │   ├── tsconfig.json
│   │   ├── vitest.config.ts
│   │   └── src/
│   │       ├── lib/
│   │       │   └── utils.ts                  # cn() 唯一工具
│   │       ├── index.ts                      # 桶导出
│   │       ├── index.css                     # Tailwind 指令 + CSS 变量
│   │       ├── test-setup.ts                 # jest-dom
│   │       ├── button/                       # §1.8 参考示例
│   │       │   ├── types.ts
│   │       │   ├── button-variants.ts
│   │       │   ├── index.tsx
│   │       │   └── button.test.tsx
│   │       ├── input/                        # §1.9 参考示例
│   │       │   ├── types.ts
│   │       │   ├── input-variants.ts
│   │       │   ├── index.tsx
│   │       │   └── input.test.tsx
│   │       └── <name>/                       # 其他组件（§1.1 文件组织标准）
│   │           ├── types.ts
│   │           ├── <name>-variants.ts        # 如有
│   │           ├── index.tsx                 # 或拆分为多个子组件文件
│   │           └── <name>.test.tsx
│   └── cli/                                  # 发布到 npm
│       ├── package.json                      # name: "simplui"
│       ├── tsconfig.json
│       ├── README.md
│       ├── bin/
│       │   └── simplui.js                    # #!/usr/bin/env node
│       └── src/
│           ├── index.ts                      # commander 入口
│           ├── commands/
│           │   ├── init.ts
│           │   ├── add.ts
│           │   ├── list.ts
│           │   └── info.ts
│           ├── utils/
│           │   ├── fs.ts
│           │   ├── logger.ts
│           │   └── package.ts
│           └── templates/
│               └── <name>/                   # 每个组件的 CLI 模板
│                   ├── index.tsx
│                   ├── <name>-variants.ts
│                   ├── types.ts
│                   └── manifest.json
└── storybook-demo/                           # .gitignore 忽略
    ├── package.json
    ├── vite.config.ts
    ├── tailwind.config.js
    ├── postcss.config.js
    ├── .storybook/
    │   ├── main.ts
    │   └── preview.ts
    └── src/
        ├── index.css
        └── stories/
            ├── Button.stories.tsx
            └── ...
```

---

## 13. 依赖锁定

### 13.1 运行时（用户项目）

```json
{
  "react": "^18.3.0",
  "react-dom": "^18.3.0",
  "@radix-ui/react-slot": "^1.1.0",
  "class-variance-authority": "^0.7.0",
  "clsx": "^2.1.1",
  "tailwind-merge": "^2.5.4",
  "lucide-react": "^0.460.0"
}
```

### 13.2 开发（monorepo）

```json
{
  "typescript": "^5.6.0",
  "tailwindcss": "^3.4.14",
  "autoprefixer": "^10.4.20",
  "postcss": "^8.4.47",
  "@types/react": "^18.3.12",
  "@types/react-dom": "^18.3.1",
  "vitest": "^2.1.4",
  "@testing-library/react": "^16.0.1",
  "@testing-library/jest-dom": "^6.6.3",
  "@testing-library/user-event": "^14.6.1",
  "@vitejs/plugin-react": "^4.3.3",
  "vite": "^5.4.10",
  "eslint": "^9.13.0",
  "@typescript-eslint/eslint-plugin": "^8.12.0",
  "@typescript-eslint/parser": "^8.12.0",
  "prettier": "^3.3.3",
  "tsx": "^4.19.1",
  "commander": "^12.1.0",
  "chalk": "^5.3.0",
  "fs-extra": "^11.2.0",
  "storybook": "8.6.14",
  "@storybook/react": "8.6.14",
  "@storybook/react-vite": "8.6.14",
  "@storybook/addon-essentials": "8.6.14",
  "@storybook/blocks": "8.6.14"
}
```

### 13.3 锁定的决策

| 决策 | 选择 | 否决项 |
|---|---|---|
| 样式 | Tailwind + CVA | CSS-in-JS / Modules / styled-components |
| asChild 基座 | @radix-ui/react-slot | 自研 cloneElement |
| 图标 | lucide-react | heroicons |
| 测试 | Vitest + Testing Library | Jest |
| CLI | Commander.js | yargs |
| 模板分发 | 嵌入 CLI | 独立 templates 包 |
| 状态 | React 内置 | Zustand |
| 文档 | README | VitePress |
| Storybook | 8.6.14 | 10.x（生态未完备） |

---

**计划版本**：v5.0（通用规范统一 + 主题/Tailwind/CLI 完善 + 冲突清理）
**最后更新**：2026-06-11
**配套规则**：见 [soul.md](soul.md)
