# simplUI

基于 Tailwind CSS 和 class-variance-authority 的极简复制式 React 组件库。simplUI 让你完全拥有组件源码——无运行时库依赖，只有可自由定制的干净源文件。

## 特性

- **复制式模型**：组件直接存在于你的项目中，而非 `node_modules`
- **Tailwind CSS + CVA 构建**：实用优先的样式方案，配合类型安全的变体管理
- **完整 TypeScript 支持**：严格类型，附带完整的 JSDoc 文档
- **默认无障碍**：内置 ARIA 属性、键盘导航和焦点管理
- **Radix UI Slot 集成**：通过 `asChild` 实现多态组件组合
- **96+ 生产级组件**：覆盖数据展示、数据录入、导航、反馈、布局、高阶业务、创意趣味和前沿现代组件

## 快速开始

在你的项目中初始化 simplUI：

```bash
npx simplui init
```

添加组件：

```bash
npx simplui add button input
```

导入并使用：

```tsx
import { Button, Input } from '@/components/ui'

function App() {
  return (
    <form>
      <Input placeholder="邮箱" allowClear />
      <Button variant="primary" htmlType="submit">提交</Button>
    </form>
  )
}
```

## 已支持组件

### 通用

| 组件 | 说明 |
|------|------|
| Button | 5 种变体（default、primary、dashed、link、text），加载/禁用状态，图标支持，通过 asChild 和 href 实现多态渲染 |
| Icon | 图标组件，集成 lucide-react |
| Typography | Text、Title、Paragraph，支持可复制和可编辑 |

### 布局

| 组件 | 说明 |
|------|------|
| Layout | 页面布局，包含 Header、Sider、Content、Footer 区域 |
| Grid | Row/Col 响应式栅格系统，基于 Flex 布局 |
| Space | 统一的元素间距 |
| Divider | 水平和垂直分割线 |
| Flex | Flexbox 容器，支持简写属性 |
| Splitter | 可调整大小的分栏面板 |

### 导航

| 组件 | 说明 |
|------|------|
| Menu | 垂直/水平导航菜单，支持内嵌/折叠模式 |
| Breadcrumb | 面包屑导航，支持最大显示数量 |
| Pagination | 分页导航，支持 onChange 回调 |
| Steps | 步骤条，内置 ARIA 和键盘导航 |
| Anchor | 锚点导航，支持滚动追踪 |
| Dropdown | 下拉菜单，支持嵌套 |
| Tabs | 标签页切换，支持添加/删除和滚动标签 |
| BackTop | 回到顶部按钮 |

### 数据录入

| 组件 | 说明 |
|------|------|
| Input | 文本输入框，支持状态、前缀/后缀、清除按钮、字符计数 |
| InputNumber | 数字输入框，支持格式化、解析和尺寸变体 |
| Select | 单选/多选/全选，支持搜索和分组选项 |
| Checkbox | 复选框，支持受控和全选 |
| Radio | 单选框和 Radio.Button，支持尺寸变体 |
| Switch | 开关，支持受控状态 |
| DatePicker | 日期/范围选择器，支持禁用日期 |
| TimePicker | 时间/范围选择器，支持禁用时间段 |
| Upload | 文件上传，支持拖拽、头像模式和进度显示 |
| Slider | 滑动输入条，支持刻度、提示和尺寸变体（small/middle/large） |
| Rate | 评分组件，支持受控模式和自定义颜色 |
| Form | 表单，支持校验、动态规则和嵌套布局 |
| AutoComplete | 自动补全，支持远程搜索 |
| Cascader | 级联选择，支持搜索、多选和动态加载 |
| TreeSelect | 树形选择，支持勾选和异步加载 |
| ColorPicker | 颜色选择器，支持预设色板、透明度和尺寸变体 |
| Mentions | @提及输入，支持多前缀和自定义渲染 |
| TagInput | 标签输入框，回车/逗号分割生成标签，支持 maxTags 限制和状态 |
| SearchInput | 智能搜索框，搜索建议、历史记录、关键词高亮 |
| ProForm | 高阶表单，多列布局、表单联动、动态表单项、自动校验 |
| StepForm | 分步表单，步骤切换、表单缓存、步骤校验 |

### 数据展示

| 组件 | 说明 |
|------|------|
| Table | 数据表格，支持排序、筛选、选择、可展开行和合并单元格 |
| ProTable | 高级表格，异步请求、自动分页、列筛选/排序/显隐、行内编辑 |
| TreeTable | 树形表格，层级展开/收起、树形勾选联动 |
| DragTable | 拖拽表格，行拖拽排序、拖拽手柄 |
| Card | 内容卡片，支持内部卡片和网格布局 |
| Descriptions | 键值对描述列表，支持尺寸变体 |
| Tag | 标签，支持动态创建和预设颜色 |
| Badge | 徽标，支持动态计数、状态点和缎带 |
| Avatar | 头像，支持尺寸（small/default/large）和形状（circle/square）变体 |
| AvatarGroup | 堆叠头像组，超出数量省略、hover 展示 |
| Tree | 树形控件，支持勾选和拖拽排序 |
| Timeline | 垂直时间线，支持自定义标签 |
| Calendar | 日历，支持事件标记和月/年切换 |
| Statistic | 统计数值，支持倒计时和动画数值 |
| StatisticCard | 统计卡片，数值+趋势+涨跌色 |
| EnhanceDescriptions | 增强详情面板，多列布局、行内复制、可编辑、折叠展开 |
| EnhanceTimeline | 高级时间线，左右交替布局、状态色、折叠 |
| EventCalendar | 事件日历，月历视图、事件标记、日期选择 |
| ProgressGauge | 仪表盘进度，弧形/圆形、渐变配色、刻度展示 |
| StarRating | 增强星级评分，半星评分、hover 预览、动画填充 |
| Collapse | 折叠面板，支持自定义面板和幽灵变体 |
| Carousel | 走马灯，支持渐隐切换和自定义导航 |
| Image | 图片，支持预览组和懒加载 |
| List | 数据列表，支持网格布局和无限滚动 |
| Tooltip | 文字提示，支持所有方向和自定义颜色 |
| Popover | 气泡卡片，支持视口边界检测 |
| Empty | 空状态占位，支持自定义图标 |
| QRCode | 二维码，支持自定义渲染 |
| Chart | 柱状图和折线图组件 |

### 反馈

| 组件 | 说明 |
|------|------|
| Modal | 对话框，支持确认、异步关闭和居中模式 |
| Drawer | 抽屉，支持底部弹出和多层嵌套 |
| Message | 全局提示，支持自定义时长和 Promise 接口 |
| Notification | 通知提醒，支持位置、自定义样式和更新/关闭 |
| Alert | 警告提示，支持关闭动画和操作按钮 |
| Progress | 进度条，支持仪表盘和渐变色变体 |
| Result | 结果页，支持完整交互流程 |
| Skeleton | 骨架屏，支持元素/卡片/列表/表格/文章骨架 |
| Spin | 加载中，支持嵌入内容和自定义指示器 |
| Popconfirm | 弹出确认框 |
| FloatButton | 悬浮按钮 |
| CopyButton | 一键复制，剪贴板复制+成功/失败状态反馈 |
| BatchOperation | 批量操作栏，表格多选后悬浮展示 |

### 其他

| 组件 | 说明 |
|------|------|
| ConfigProvider | 全局配置，支持国际化和主题 |
| Affix | 固钉，滚动时固定元素位置 |
| Watermark | 水印，支持文字或图片水印 |
| Tour | 漫游式引导，支持 localStorage 记忆和进度条 |
| App | 全局上下文，支持主题切换 |
| PageContainer | 标准页面容器，面包屑/标题/操作栏/loading |

### 创意趣味

| 组件 | 说明 |
|------|------|
| MorphButton | 形变流体按钮，hover/click 形态渐变动效 |
| ElasticToggle | 弹性开关，物理回弹效果 |
| StaggerMenu | 逐帧展开菜单，菜单项逐个飞入动画 |
| ScrollReveal | 滚动显隐，元素进入视口自动淡入/滑入 |
| AnimateCountdown | 动画倒计时，数字翻转动效 |
| HoverCard | 悬浮动效卡片，上浮+阴影+旋转 |
| WiredElement | 手绘风组件集，不规则边框模拟手绘风格 |

### 前沿现代

| 组件 | 说明 |
|------|------|
| ChatBubble | AI 消息气泡，用户/助手双样式、markdown 渲染、打字动画 |
| ThoughtChain | AI 思维链，分步加载、展开/收起 |
| PromptInput | 提示词输入框，多行自适应、模板插入、Ctrl+Enter 发送 |
| AIStreamText | 流式文本渲染，逐字打字机效果、闪烁光标 |
| MarkdownEditor | 轻量 Markdown 编辑器，编辑/预览/分屏、工具栏 |
| CodeEditor | 代码编辑器，语法高亮、行号、Tab 缩进 |
| PDFViewer | PDF 预览，缩放、下载、加载状态 |
| ImageEditor | 图片编辑器，裁剪、旋转、翻转、缩放、导出 |
| FormDesigner | 表单设计器，拖拽生成表单、JSON 导出 |
| JsonSchemaRender | JSON 表单渲染器，通过 Schema 自动渲染表单 |
| ActionSheet | 底部动作面板，iOS 风格选项列表 |
| PullToRefresh | 下拉刷新，触摸下拉回弹、加载状态 |
| InfiniteScroll | 无限滚动，IntersectionObserver 底部监听加载 |
| TabBar | 底部标签栏，图标+文字、角标、固定底部 |

## 组件 API

### Button

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| variant | `'default' \| 'primary' \| 'dashed' \| 'link' \| 'text'` | `'default'` | 视觉风格变体 |
| loading | `boolean` | `false` | 加载状态，显示旋转图标并禁止交互 |
| disabled | `boolean` | `false` | 禁用状态 |
| block | `boolean` | `false` | 撑满父容器宽度 |
| icon | `ReactNode` | - | 图标元素 |
| iconPosition | `'left' \| 'right'` | `'left'` | 图标位置 |
| asChild | `boolean` | `false` | 通过 Radix Slot 将属性合并到子元素 |
| htmlType | `'button' \| 'submit' \| 'reset'` | `'button'` | 原生 button type 属性 |
| href | `string` | - | 传入时渲染为 `<a>` 元素 |
| target | `string` | - | 链接目标，`_blank` 时自动添加 `rel="noopener noreferrer"` |
| className | `string` | - | 自定义 CSS 类名（通过 twMerge 合并） |

### Input

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| status | `'error' \| 'warning'` | - | 校验状态，显示对应颜色边框 |
| prefix | `ReactNode` | - | 输入框前置内容 |
| suffix | `ReactNode` | - | 输入框后置内容 |
| allowClear | `boolean` | `false` | 有值时显示清除按钮 |
| maxLength | `number` | - | 最大字符长度 |
| showCount | `boolean` | `false` | 显示字符计数（需配合 maxLength） |
| className | `string` | - | 自定义 CSS 类名（通过 twMerge 合并） |

### Avatar

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| src | `string` | - | 图片源地址 |
| alt | `string` | - | 替代文本，同时作为文字回退源 |
| icon | `ReactNode` | - | 无图片时的回退图标 |
| size | `'small' \| 'default' \| 'large'` | `'default'` | 头像尺寸（24px / 40px / 56px） |
| shape | `'circle' \| 'square'` | `'circle'` | 头像形状 |
| onError | `() => boolean \| void` | - | 图片加载失败回调 |
| className | `string` | - | 自定义 CSS 类名（通过 twMerge 合并） |

### Slider

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| value | `number \| [number, number]` | - | 受控值 |
| defaultValue | `number \| [number, number]` | `0` | 默认值 |
| min | `number` | `0` | 最小值 |
| max | `number` | `100` | 最大值 |
| step | `number` | `1` | 步长 |
| disabled | `boolean` | `false` | 禁用交互 |
| range | `boolean` | `false` | 范围选择（双滑块） |
| marks | `SliderMark[]` | - | 刻度标记 |
| showTooltip | `boolean` | `true` | 悬停时显示值提示 |
| componentSize | `'small' \| 'middle' \| 'large'` | `'middle'` | 轨道高度和手柄尺寸 |
| className | `string` | - | 自定义 CSS 类名（通过 twMerge 合并） |

## Class 组装策略

simplUI 使用 `cn()`（基于 `clsx` + `tailwind-merge`）的三层 class 组装模式：

```typescript
import { cn } from '../lib/utils'
import { buttonVariants } from './button-variants'

// 三层结构：
className={cn(
  buttonVariants({ variant }),   // 第 1 层：CVA 变体
  loading && 'pointer-events-none', // 第 2 层：内部条件类
  className                      // 第 3 层：用户 className，永远在最后
)}
```

**扩展机制**：用户 `className` 始终通过 `twMerge` 最后合并，可覆盖任何默认类名：

| 用法 | 是否支持 | 原理 |
|------|---------|------|
| `<Button className="mt-4">` | 支持 | 合并到第 3 层 |
| `<Button className="bg-red-500">` | 支持，覆盖 `bg-primary` | `twMerge` 去重 |
| `<Button className="h-12">` | 支持，覆盖默认高度 | `twMerge` |
| `<Button asChild><a href="/x">链接</a></Button>` | 支持 | Radix Slot 透传 |

## 主题定制

simplUI 使用 Tailwind CSS 语义化颜色 token。通过扩展 `tailwind.config.js` 定制颜色：

```js
// tailwind.config.js
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3b82f6',
          hover: '#2563eb',
          active: '#1d4ed8',
        },
        danger: '#ef4444',
        warning: '#f59e0b',
        muted: {
          DEFAULT: '#f3f4f6',
          foreground: '#6b7280',
        },
      },
    },
  },
}
```

所有组件使用语义化 token（`bg-primary`、`text-danger`、`border-warning`）而非硬编码色值，确保整个组件库的主题一致性。

## CLI 命令

| 命令 | 说明 |
|------|------|
| `simplui init` | 初始化项目：创建 `components/ui/`、安装依赖、配置 Tailwind |
| `simplui add <name...>` | 添加组件：复制源文件、更新导出、合并依赖 |
| `simplui list` | 列出已安装的组件 |
| `simplui info` | 环境诊断：检查 Node/pnpm/React/Tailwind 版本 |

## 本地开发

```bash
git clone https://github.com/your-org/simplui.git
cd simplui
pnpm install
pnpm test          # 运行测试
pnpm typecheck     # 类型检查
pnpm lint          # 代码检查
pnpm storybook     # 启动 Storybook 开发服务器
```

## 项目架构

```
simplui/
├── packages/
│   ├── ui/                    # 组件源码（monorepo 内开发，不发布）
│   │   └── src/
│   │       ├── button/        # 每个组件：index.tsx + variants + types + test + story
│   │       ├── input/
│   │       ├── ...            # 96+ 组件
│   │       └── lib/utils.ts   # cn() 工具函数（全局唯一）
│   └── cli/                   # CLI 工具（发布到 npm）
│       └── src/
│           ├── commands/      # add、list、info、init
│           └── templates/     # 内嵌组件模板（从 ui/src 同步）
├── scripts/
│   └── sync-templates.ts      # 同步 ui/src → cli/templates
└── package.json
```

## 设计原则

- **源码所有权**：组件复制到你的项目中，而非作为依赖安装
- **零运行时开销**：无 CSS-in-JS 运行时，基础使用无需 Context Provider
- **可组合性**：通过 Radix Slot 的 `asChild` 模式实现多态渲染
- **无障碍优先**：内置 ARIA 属性、键盘导航和焦点管理
- **Tailwind 原生**：所有样式通过 Tailwind 工具类 + CVA 变体管理
- **语义化颜色**：禁止硬编码色值，所有颜色使用主题感知 token

## 贡献指南

1. Fork 本仓库
2. 创建功能分支：`git checkout -b feature/my-feature`
3. 进行修改并添加测试
4. 确保所有检查通过：`pnpm test && pnpm typecheck && pnpm lint`
5. 提交 Pull Request

所有组件必须保持严格的 TypeScript 类型、完整的 JSDoc 文档、`forwardRef` + `displayName`，并遵循现有代码规范。

## 许可证

MIT
