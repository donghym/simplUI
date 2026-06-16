# SimplUI 组件库 AI 落地开发计划

> 本计划专为 AI 执行设计，每个任务包含明确的文件路径、代码模板、验收标准。

---

## 一、项目现状分析

### 已完成组件（57 + 39 = 96 个）

| 类别 | 组件 |
|------|------|
| 基础 | Button, Input, InputNumber, Select, Checkbox, Radio, Switch, Slider, Rate, Upload |
| 布局 | Layout, Grid, Flex, Space, Divider, Splitter |
| 导航 | Menu, Breadcrumb, Pagination, Steps, Tabs, Anchor, Dropdown |
| 数据展示 | Table, List, Card, Tree, Collapse, Descriptions, Statistic, Avatar, Badge, Tag, Timeline, Calendar |
| 反馈 | Modal, Message, Notification, Drawer, Popover, Popconfirm, Tooltip, Progress, Spin, Skeleton, Alert, Result |
| 其他 | Form, AutoComplete, Cascader, ColorPicker, DatePicker, Image, QRCode, Segmented, Tour, Watermark, BackTop, Affix, FloatButton, Empty, ConfigProvider, App |
| 高阶业务 (P4) | ProTable, TreeTable, DragTable, ProForm, TagInput, SearchInput, PageContainer |
| 进阶业务 (P5) | StatisticCard, AvatarGroup, CopyButton, BatchOperation, StepForm, ProgressGauge, EnhanceDescriptions, EnhanceTimeline, EventCalendar |
| 创意趣味 (P6) | MorphButton, ElasticToggle, StaggerMenu, ScrollReveal, AnimateCountdown, HoverCard, WiredElement, StarRating |
| 前沿现代 (P7) | ChatBubble, ThoughtChain, PromptInput, AIStreamText, ActionSheet, InfiniteScroll, MarkdownEditor, CodeEditor, PDFViewer, ImageEditor, FormDesigner, JsonSchemaRender, PullToRefresh, TabBar |

### 待开发组件（按优先级）

> 全部 39 个任务已完成，无待开发组件。

---

## 二、P0 基础刚需组件（必做）

### 任务 1：ProTable 高级表格

**目标**：基于现有 Table 组件增强，内置请求、自动分页、列筛选/排序/显隐配置、行内编辑。

**开发步骤**：

```markdown
1. 创建文件结构：
   - packages/ui/src/pro-table/index.tsx
   - packages/ui/src/pro-table/types.ts
   - packages/ui/src/pro-table/pro-table-variants.ts
   - packages/ui/src/pro-table/pro-table.stories.tsx
   - packages/ui/src/pro-table/pro-table.test.tsx

2. 实现核心功能：
   - 继承 Table 所有 Props
   - 新增 request 属性（异步数据请求函数）
   - 新增 columns 配置增强（支持 hideInTable, filters, sorter, editable）
   - 内置 pagination 自动处理
   - 新增 toolbar（搜索、刷新、列设置、密度切换）

3. 类型定义模板：
```

```typescript
// packages/ui/src/pro-table/types.ts
import { TableProps } from '../table/types'

export interface ProTableRequestParams {
  current: number
  pageSize: number
  keyword?: string
  filters?: Record<string, any>
  sorter?: { field: string; order: 'asc' | 'desc' }
}

export interface ProTableRequestResult<T> {
  data: T[]
  total: number
  success: boolean
}

export interface ProTableColumn<T> extends TableColumn<T> {
  title: string
  dataIndex: string
  hideInTable?: boolean
  filters?: { text: string; value: any }[]
  sorter?: boolean | ((a: T, b: T) => number)
  editable?: boolean
  renderFormItem?: (props: any) => React.ReactNode
  valueType?: 'text' | 'select' | 'date' | 'number' | 'money'
}

export interface ProTableProps<T> extends Omit<TableProps<T>, 'dataSource' | 'pagination'> {
  request?: (params: ProTableRequestParams) => Promise<ProTableRequestResult<T>>
  columns: ProTableColumn<T>[]
  search?: boolean | { defaultCollapsed?: boolean; collapseRender?: boolean }
  toolbar?: boolean | { actions?: React.ReactNode[] }
  manualRequest?: boolean
  polling?: number
}
```

**验收标准**：
- [x] TypeScript 编译无错误
- [x] 支持 request 异步请求
- [x] 内置分页自动处理
- [x] 列筛选/排序/显隐配置可用
- [x] Storybook 示例包含：基础请求、搜索表单、列配置、行内编辑

---

### 任务 2：TreeTable 树形表格

**目标**：支持层级展开/收起、虚拟滚动、树形勾选。

**开发步骤**：

```markdown
1. 创建文件结构：
   - packages/ui/src/tree-table/index.tsx
   - packages/ui/src/tree-table/types.ts
   - packages/ui/src/tree-table/tree-table.stories.tsx

2. 基于 react-virtuoso 实现：
   - 数据结构支持 children 字段
   - 展开收起状态管理
   - 树形勾选联动（父节点选中联动子节点）
   - 虚拟滚动优化大数据

3. 类型定义：
```

```typescript
// packages/ui/src/tree-table/types.ts
export interface TreeTableColumn<T> {
  title: string
  dataIndex: string
  width?: number
  render?: (value: any, record: T, index: number) => React.ReactNode
}

export interface TreeTableProps<T> {
  columns: TreeTableColumn<T>[]
  dataSource: T[]
  rowKey: string
  childrenKey?: string // 默认 'children'
  expandRowByClick?: boolean
  defaultExpandAll?: boolean
  defaultExpandedKeys?: (string | number)[]
  onExpand?: (expanded: boolean, record: T) => void
  rowSelection?: {
    type: 'checkbox' | 'radio'
    selectedRowKeys?: (string | number)[]
    onChange?: (keys: (string | number)[], rows: T[]) => void
    checkStrictly?: boolean // 父子联动
  }
  height?: number
  bordered?: boolean
}
```

**验收标准**：
- [x] 层级展开/收起正常
- [x] 树形勾选父子联动
- [x] 虚拟滚动支持 10000+ 节点
- [x] Storybook 示例包含：基础树形、勾选联动、大数据测试

---

### 任务 3：DragTable 拖拽表格

**目标**：行拖拽、列拖拽、跨页排序。

**开发步骤**：

```markdown
1. 创建文件结构：
   - packages/ui/src/drag-table/index.tsx
   - packages/ui/src/drag-table/types.ts
   - packages/ui/src/drag-table/drag-table.stories.tsx

2. 使用 @dnd-kit/core 实现：
   - 行拖拽排序
   - 拖拽手柄（DragHandle）
   - onDragEnd 回调返回新排序
   - 可选列拖拽

3. 类型定义：
```

```typescript
// packages/ui/src/drag-table/types.ts
export interface DragTableProps<T> extends TableProps<T> {
  draggable?: boolean | 'row' | 'column'
  dragHandle?: boolean | React.ReactNode
  onDragEnd?: (newData: T[]) => void
}
```

**验收标准**：
- [x] 行拖拽排序正常
- [x] 拖拽手柄可选
- [x] onDragEnd 回调返回新数据
- [x] Storybook 示例包含：行拖拽、带手柄拖拽

---

### 任务 4：ProForm 高阶表单

**目标**：多列自适应、表单联动、动态表单项、自动校验。

**开发步骤**：

```markdown
1. 创建文件结构：
   - packages/ui/src/pro-form/index.tsx
   - packages/ui/src/pro-form/types.ts
   - packages/ui/src/pro-form/pro-form-items.tsx
   - packages/ui/src/pro-form/pro-form.stories.tsx

2. 增强现有 Form：
   - ProFormText, ProFormSelect, ProFormDate, ProFormNumber 等子组件
   - 表单联动（dependencies 配置）
   - 动态表单项（ProFormList）
   - 自动校验规则

3. 类型定义：
```

```typescript
// packages/ui/src/pro-form/types.ts
export interface ProFormProps extends FormProps {
  onFinish?: (values: any) => Promise<void> | void
  initialValues?: Record<string, any>
  layout?: 'horizontal' | 'vertical' | 'inline'
  grid?: boolean | { columns: number; gap: number }
  submitter?: boolean | { render?: (props: any) => React.ReactNode }
}

export interface ProFormItemProps {
  name: string
  label?: string
  rules?: any[]
  dependencies?: string[]
  hidden?: boolean | ((values: any) => boolean)
}
```

**验收标准**：
- [x] 多列自适应布局
- [x] 表单联动生效
- [x] 动态增减表单项
- [x] Storybook 示例包含：多列布局、联动表单、动态表单项

---

### 任务 5：TagInput 标签输入框

**目标**：回车/逗号分割生成标签、标签删除、拖拽排序。

**开发步骤**：

```markdown
1. 创建文件结构：
   - packages/ui/src/tag-input/index.tsx
   - packages/ui/src/tag-input/types.ts
   - packages/ui/src/tag-input/tag-input-variants.ts
   - packages/ui/src/tag-input/tag-input.stories.tsx

2. 实现功能：
   - 输入框 + 标签展示区
   - Enter/逗号分割生成 Tag
   - Tag 可删除（x 按钮）
   - 可选拖拽排序
   - maxTags 限制

3. 类型定义：
```

```typescript
// packages/ui/src/tag-input/types.ts
export interface TagInputProps {
  value?: string[]
  defaultValue?: string[]
  onChange?: (tags: string[]) => void
  maxTags?: number
  placeholder?: string
  delimiter?: string | string[] // 默认 [',', 'Enter']
  draggable?: boolean
  disabled?: boolean
  readonly?: boolean
  status?: 'error' | 'warning'
}
```

**验收标准**：
- [x] Enter/逗号分割生成标签
- [x] 标签删除正常
- [x] maxTags 限制生效
- [x] Storybook 示例包含：基础、最大数量、拖拽排序

---

### 任务 6：SearchInput 智能搜索框

**目标**：联想补全、搜索历史、关键词高亮。

**开发步骤**：

```markdown
1. 创建文件结构：
   - packages/ui/src/search-input/index.tsx
   - packages/ui/src/search-input/types.ts
   - packages/ui/src/search-input/search-input.stories.tsx

2. 实现功能：
   - 基于 AutoComplete 增强
   - 搜索历史记录（localStorage）
   - 关键词高亮匹配
   - 清空按钮

3. 类型定义：
```

```typescript
// packages/ui/src/search-input/types.ts
export interface SearchInputProps {
  value?: string
  defaultValue?: string
  onChange?: (value: string) => void
  onSearch?: (value: string) => void
  suggestions?: string[] | ((value: string) => Promise<string[]>)
  showHistory?: boolean
  maxHistory?: number
  highlightMatch?: boolean
  placeholder?: string
  allowClear?: boolean
}
```

**验收标准**：
- [x] 联想补全正常
- [x] 搜索历史记录
- [x] 关键词高亮
- [x] Storybook 示例包含：基础搜索、历史记录、异步建议

---

### 任务 7：PageContainer 页面容器

**目标**：内置面包屑、页面标题、操作栏、页脚。

**开发步骤**：

```markdown
1. 创建文件结构：
   - packages/ui/src/page-container/index.tsx
   - packages/ui/src/page-container/types.ts
   - packages/ui/src/page-container/page-container.stories.tsx

2. 实现功能：
   - 面包屑区域
   - 标题 + 操作按钮区
   - 内容区域（自适应高度）
   - 页脚区域

3. 类型定义：
```

```typescript
// packages/ui/src/page-container/types.ts
export interface PageContainerProps {
  title?: string | React.ReactNode
  breadcrumb?: { title: string; path?: string }[]
  headerActions?: React.ReactNode[]
  footer?: React.ReactNode
  loading?: boolean
  children?: React.ReactNode
  className?: string
  style?: React.CSSProperties
}
```

**验收标准**：
- [x] 面包屑展示正常
- [x] 标题 + 操作栏布局
- [x] loading 状态
- [x] Storybook 示例包含：基础页面、带操作栏、加载态

---

## 三、P1 进阶业务组件

### 任务 8：StatisticCard 统计卡片 ✅

**目标**：数值 + 趋势 + 图标 + 涨跌色。

**文件结构**：
- packages/ui/src/statistic-card/index.tsx
- packages/ui/src/statistic-card/types.ts
- packages/ui/src/statistic-card/statistic-card.stories.tsx

**类型定义**：
```typescript
export interface StatisticCardProps {
  title: string
  value: number | string
  suffix?: string
  prefix?: React.ReactNode
  trend?: 'up' | 'down' | 'flat'
  trendValue?: string
  precision?: number
  loading?: boolean
  icon?: React.ReactNode
  footer?: React.ReactNode
}
```

---

### 任务 9：AvatarGroup 堆叠头像组 ✅

**目标**：头像堆叠、超出数量省略、hover 展示全部。

**文件结构**：
- packages/ui/src/avatar-group/index.tsx
- packages/ui/src/avatar-group/types.ts
- packages/ui/src/avatar-group/avatar-group.stories.tsx

**类型定义**：
```typescript
export interface AvatarGroupProps {
  avatars: { src?: string; name?: string; icon?: React.ReactNode }[]
  maxCount?: number // 默认 4
  size?: 'small' | 'default' | 'large'
  shape?: 'circle' | 'square'
  onExcessClick?: () => void
}
```

---

### 任务 10：Tour 新手导览 ✅

**目标**：页面分步高亮引导、跳过/下一步、记忆已引导状态。

**文件结构**：
- packages/ui/src/tour/index.tsx (增强现有 Tour)
- packages/ui/src/tour/types.ts
- packages/ui/src/tour/tour.stories.tsx

**增强功能**：
- localStorage 记忆已完成状态
- 步骤进度条
- 自定义弹窗样式

---

### 任务 11：CopyButton 一键复制 ✅

**目标**：内置复制功能、成功/失败状态反馈。

**文件结构**：
- packages/ui/src/copy-button/index.tsx
- packages/ui/src/copy-button/types.ts
- packages/ui/src/copy-button/copy-button.stories.tsx

**类型定义**：
```typescript
export interface CopyButtonProps {
  text: string
  onCopy?: (success: boolean) => void
  showTooltip?: boolean
  tooltipText?: { success: string; error: string }
  icon?: React.ReactNode
}
```

---

### 任务 12：BatchOperation 批量操作栏 ✅

**目标**：表格多选后悬浮展示批量操作。

**文件结构**：
- packages/ui/src/batch-operation/index.tsx
- packages/ui/src/batch-operation/types.ts
- packages/ui/src/batch-operation/batch-operation.stories.tsx

**类型定义**：
```typescript
export interface BatchOperationProps {
  selectedCount: number
  actions: { label: string; onClick: () => void; danger?: boolean }[]
  onClear?: () => void
  position?: 'top' | 'bottom'
}
```

---

### 任务 13：StepForm 分步表单 ✅

**目标**：步骤切换、表单缓存、步骤校验。

**文件结构**：
- packages/ui/src/step-form/index.tsx
- packages/ui/src/step-form/types.ts
- packages/ui/src/step-form/step-form.stories.tsx

**类型定义**：
```typescript
export interface StepFormProps {
  steps: { title: string; form: React.ReactNode }[]
  current?: number
  onStepChange?: (current: number) => void
  onFinish?: (values: any) => void
}
```

---

### 任务 14：EnhanceDescriptions 详情面板 ✅

**目标**：响应式多列、行内复制、可编辑、折叠展开。

**文件结构**：
- packages/ui/src/enhance-descriptions/index.tsx (增强现有 Descriptions)
- packages/ui/src/enhance-descriptions/types.ts
- packages/ui/src/enhance-descriptions/enhance-descriptions.stories.tsx

---

### 任务 15：EnhanceTimeline 高级时间线 ✅

**目标**：左右双向布局、节点自定义、时间折叠。

**文件结构**：
- packages/ui/src/enhance-timeline/index.tsx (增强现有 Timeline)
- packages/ui/src/enhance-timeline/types.ts
- packages/ui/src/enhance-timeline/enhance-timeline.stories.tsx

---

### 任务 16：EventCalendar 事件日历 ✅

**目标**：月/周/日切换、日程拖拽、事件标记。

**文件结构**：
- packages/ui/src/event-calendar/index.tsx (增强现有 Calendar)
- packages/ui/src/event-calendar/types.ts
- packages/ui/src/event-calendar/event-calendar.stories.tsx

---

### 任务 17：ProgressGauge 仪表盘进度 ✅

**目标**：弧形/圆形进度、渐变配色、刻度展示。

**文件结构**：
- packages/ui/src/progress-gauge/index.tsx
- packages/ui/src/progress-gauge/types.ts
- packages/ui/src/progress-gauge/progress-gauge.stories.tsx

**类型定义**：
```typescript
export interface ProgressGaugeProps {
  value: number
  max?: number
  type?: 'arc' | 'circle'
  showScale?: boolean
  gradient?: { from: string; to: string }
  format?: (value: number) => string
}
```

---

## 四、P2 创意趣味组件

### 任务 18：MorphButton 形变流体按钮 ✅

**目标**：hover/click 形态渐变、流体动效。

**技术要点**：使用 CSS transform + transition 或 framer-motion。

**文件结构**：
- packages/ui/src/morph-button/index.tsx
- packages/ui/src/morph-button/types.ts
- packages/ui/src/morph-button/morph-button.stories.tsx

---

### 任务 19：ElasticToggle 弹性开关 ✅

**目标**：物理回弹效果、拖拽拉伸。

**技术要点**：CSS spring animation 或 react-spring。

---

### 任务 20：StaggerMenu 逐帧展开菜单 ✅

**目标**：菜单子项逐个飞入动画。

**技术要点**：framer-motion staggerChildren。

---

### 任务 21：ScrollReveal 滚动显隐 ✅

**目标**：元素进入视口自动淡入/滑入。

**技术要点**：Intersection Observer API。

**文件结构**：
- packages/ui/src/scroll-reveal/index.tsx
- packages/ui/src/scroll-reveal/types.ts
- packages/ui/src/scroll-reveal/scroll-reveal.stories.tsx

---

### 任务 22：AnimateCountdown 动画倒计时 ✅

**目标**：数字翻转动效、背景渐变。

**文件结构**：
- packages/ui/src/animate-countdown/index.tsx
- packages/ui/src/animate-countdown/types.ts
- packages/ui/src/animate-countdown/animate-countdown.stories.tsx

---

### 任务 23：HoverCard 悬浮动效卡片 ✅

**目标**：悬浮上浮、阴影放大、轻微旋转。

**文件结构**：
- packages/ui/src/hover-card/index.tsx
- packages/ui/src/hover-card/types.ts
- packages/ui/src/hover-card/hover-card.stories.tsx

---

### 任务 24：WiredElement 手绘风组件集 ✅

**目标**：手绘线条按钮、卡片、输入框。

**技术要点**：SVG 路径 + rough.js 或自定义手绘风格。

---

### 任务 25：StarRating 增强星级评分 ✅

**目标**：半星评分、hover 预览、动画填充。

**文件结构**：
- packages/ui/src/star-rating/index.tsx (增强现有 Rate)
- packages/ui/src/star-rating/types.ts
- packages/ui/src/star-rating/star-rating.stories.tsx

---

## 五、P3 前沿现代组件

### 任务 26：ChatBubble AI 消息气泡 ✅

**目标**：用户/助手双样式、markdown 渲染、代码块高亮、加载中动画。

**文件结构**：
- packages/ui/src/chat-bubble/index.tsx
- packages/ui/src/chat-bubble/types.ts
- packages/ui/src/chat-bubble/chat-bubble.stories.tsx

**类型定义**：
```typescript
export interface ChatBubbleProps {
  role: 'user' | 'assistant' | 'system'
  content: string | React.ReactNode
  avatar?: React.ReactNode
  loading?: boolean
  timestamp?: string
  markdown?: boolean
  codeHighlight?: boolean
}
```

---

### 任务 27：ThoughtChain AI 思维链 ✅

**目标**：拆解 AI 思考步骤、分步加载、展开/收起。

**文件结构**：
- packages/ui/src/thought-chain/index.tsx
- packages/ui/src/thought-chain/types.ts
- packages/ui/src/thought-chain/thought-chain.stories.tsx

---

### 任务 28：PromptInput 提示词输入框 ✅

**目标**：多行自适应、模板插入、历史记录。

**文件结构**：
- packages/ui/src/prompt-input/index.tsx
- packages/ui/src/prompt-input/types.ts
- packages/ui/src/prompt-input/prompt-input.stories.tsx

---

### 任务 29：AIStreamText 流式文本渲染 ✅

**目标**：逐字输出动画、打字机效果。

**文件结构**：
- packages/ui/src/ai-stream-text/index.tsx
- packages/ui/src/ai-stream-text/types.ts
- packages/ui/src/ai-stream-text/ai-stream-text.stories.tsx

---

### 任务 30：MarkdownEditor 轻量编辑器 ✅

**目标**：编辑/预览切换、图片上传、代码高亮。

**技术要点**：可集成 react-markdown + react-simplemde-editor。

---

### 任务 31：CodeEditor 代码编辑器 ✅

**目标**：语法高亮、行号、代码折叠。

**技术要点**：集成 Monaco Editor 或 CodeMirror。

---

### 任务 32：PDFViewer PDF 预览 ✅

**目标**：分页、缩放、搜索。

**技术要点**：集成 pdf.js。

---

### 任务 33：ImageEditor 图片编辑器 ✅

**目标**：裁剪、旋转、涂鸦、文字标注。

**技术要点**：集成 fabric.js 或 tui.image-editor。

---

### 任务 34：FormDesigner 表单设计器 ✅

**目标**：拖拽生成表单、JSON 导出。

**技术要点**：dnd-kit + JSON Schema。

---

### 任务 35：JsonSchemaRender JSON 表单渲染器 ✅

**目标**：通过 JSON 自动渲染表单。

---

### 任务 36：ActionSheet 底部动作面板 ✅

**目标**：iOS 风格、选项分组。

**文件结构**：
- packages/ui/src/action-sheet/index.tsx
- packages/ui/src/action-sheet/types.ts
- packages/ui/src/action-sheet/action-sheet.stories.tsx

---

### 任务 37：PullToRefresh 下拉刷新 ✅

**目标**：顶部动画回弹、加载状态。

---

### 任务 38：InfiniteScroll 无限滚动 ✅

**目标**：底部监听加载。

---

### 任务 39：TabBar 底部标签栏 ✅

**目标**：图标 + 文字、角标、路由联动。

---

## 六、组件开发模板

### 标准文件结构

```
packages/ui/src/{component-name}/
├── index.tsx           # 主组件实现
├── types.ts            # TypeScript 类型定义
├── {component}-variants.ts  # CVA 样式变体（可选）
├── {component}-utils.ts     # 工具函数（可选）
├── {component}.stories.tsx  # Storybook 示例
├── {component}.test.tsx     # 单元测试（可选）
```

### index.tsx 模板

```typescript
import React, { forwardRef } from 'react'
import { cn } from '../lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import type { ComponentNameProps } from './types'

const componentVariants = cva(
  'base-classes',
  {
    variants: {
      variant: {
        default: 'default-classes',
        primary: 'primary-classes',
      },
      size: {
        small: 'small-classes',
        large: 'large-classes',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'small',
    },
  }
)

export const ComponentName = forwardRef<HTMLDivElement, ComponentNameProps & VariantProps<typeof componentVariants>>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(componentVariants({ variant, size }), className)}
        {...props}
      />
    )
  }
)

ComponentName.displayName = 'ComponentName'
```

### types.ts 模板

```typescript
import type { HTMLAttributes, ReactNode } from 'react'

export interface ComponentNameProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  children?: ReactNode
  variant?: 'default' | 'primary'
  size?: 'small' | 'large'
  disabled?: boolean
  loading?: boolean
}
```

### stories.tsx 模板

```typescript
import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { ComponentName } from './index'

const meta: Meta<typeof ComponentName> = {
  title: 'Components/ComponentName',
  component: ComponentName,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['default', 'primary'] },
    size: { control: 'select', options: ['small', 'large'] },
  },
  args: {
    onClick: fn(),
  },
}

export default meta
type Story = StoryObj<typeof ComponentName>

export const Default: Story = {
  args: {
    children: 'Default',
  },
}

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary',
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex gap-4">
      <ComponentName variant="default">Default</ComponentName>
      <ComponentName variant="primary">Primary</ComponentName>
    </div>
  ),
}
```

---

## 七、验收标准清单

每个组件完成后需验证：

- [x] TypeScript 编译无错误（`pnpm tsc --noEmit`）
- [x] 组件导出到 `packages/ui/src/index.ts`
- [x] Storybook 示例正常运行
- [x] 支持 className 透传
- [x] 支持 ref 透传
- [x] 支持 disabled/loading/error 状态（如适用）
- [x] 颜色类名使用语义色（如 `bg-primary`、`text-danger`）
- [x] Actions 配置使用 `fn()` 而非 `fn()()`

---

## 八、执行顺序建议

### 第一批（P0 核心）

1. ProTable → 2. TreeTable → 3. DragTable → 4. ProForm → 5. TagInput → 6. SearchInput → 7. PageContainer

### 第二批（P1 业务）

8. StatisticCard → 9. AvatarGroup → 10. Tour 增强 → 11. CopyButton → 12. BatchOperation → 13. StepForm → 14-17. 其他增强组件

### 第三批（P2 创意）

18-25. 动效趣味组件

### 第四批（P3 前沿）

26-39. AI/编辑器/移动端组件

---

## 九、技术依赖清单

| 组件 | 依赖 |
|------|------|
| DragTable | @dnd-kit/core, @dnd-kit/sortable |
| TreeTable | react-virtuoso (已有) |
| MarkdownEditor | react-markdown, remark-gfm |
| CodeEditor | @monaco-editor/react 或 codemirror |
| PDFViewer | pdfjs-dist |
| ImageEditor | fabric 或 tui-image-editor |
| ScrollReveal | Intersection Observer (原生) |
| MorphButton | framer-motion (可选) |
| WiredElement | rough.js (可选) |

---

> 本计划按任务拆分，每个任务可独立执行。AI 可按顺序逐个完成，每完成一个任务后验证验收标准。