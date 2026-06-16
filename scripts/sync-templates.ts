import path from 'node:path'
import fs from 'fs-extra'

const ROOT = path.resolve(import.meta.dirname, '..')
const UI_SRC = path.join(ROOT, 'packages', 'ui', 'src')
const TEMPLATES_DIR = path.join(ROOT, 'packages', 'cli', 'src', 'templates')

interface ManifestConfig {
  name: string
  version: string
  files: string[]
  dependencies: string[]
  description: string
}

// 所有组件配置列表
const COMPONENTS: ManifestConfig[] = [
  // P0 核心组件
  {
    name: 'button',
    version: '1.0.0',
    files: ['index.tsx', 'button-variants.ts', 'types.ts'],
    dependencies: ['@radix-ui/react-slot', 'class-variance-authority', 'lucide-react'],
    description: 'Button component with 5 variants and loading state',
  },
  {
    name: 'input',
    version: '1.0.0',
    files: ['index.tsx', 'input-variants.ts', 'types.ts'],
    dependencies: ['class-variance-authority', 'lucide-react'],
    description: 'Input component with status variants, prefix/suffix, and clear button',
  },
  {
    name: 'layout',
    version: '1.0.0',
    files: ['index.tsx', 'layout-variants.ts', 'types.ts'],
    dependencies: ['class-variance-authority'],
    description: 'Layout container with Header/Sider/Content/Footer sections',
  },
  {
    name: 'grid',
    version: '1.0.0',
    files: ['index.tsx', 'grid-utils.ts', 'types.ts'],
    dependencies: ['class-variance-authority'],
    description: 'Grid system with Row and Col components for responsive layouts',
  },
  {
    name: 'typography',
    version: '1.0.0',
    files: ['index.tsx', 'typography-variants.ts', 'types.ts'],
    dependencies: ['class-variance-authority'],
    description: 'Typography components: Text, Title, Paragraph with style variants',
  },
  {
    name: 'form',
    version: '1.0.0',
    files: ['index.tsx', 'form-variants.ts', 'form-utils.tsx', 'types.ts', 'responsive-col-types.ts'],
    dependencies: ['class-variance-authority'],
    description: 'Form container with FormItem for validation and field management',
  },
  {
    name: 'table',
    version: '1.0.0',
    files: ['index.tsx', 'table-variants.ts', 'table-header.tsx', 'table-row.tsx', 'types.ts'],
    dependencies: ['class-variance-authority', 'lucide-react'],
    description: 'Table component with sorting, selection, and pagination support',
  },
  {
    name: 'modal',
    version: '1.0.0',
    files: ['index.tsx', 'modal-variants.ts', 'types.ts'],
    dependencies: ['class-variance-authority', 'lucide-react'],
    description: 'Modal dialog with focus trap and ESC close support',
  },
  {
    name: 'menu',
    version: '1.0.0',
    files: ['index.tsx', 'menu-variants.ts', 'types.ts'],
    dependencies: ['class-variance-authority', 'lucide-react'],
    description: 'Navigation menu with MenuItem and SubMenu support',
  },
  // P1 常用组件
  {
    name: 'space',
    version: '1.0.0',
    files: ['index.tsx', 'space-variants.ts', 'types.ts'],
    dependencies: ['class-variance-authority'],
    description: 'Space component for consistent spacing between elements',
  },
  {
    name: 'divider',
    version: '1.0.0',
    files: ['index.tsx', 'divider-variants.ts', 'types.ts'],
    dependencies: ['class-variance-authority'],
    description: 'Divider line for separating content sections',
  },
  {
    name: 'input-number',
    version: '1.0.0',
    files: ['index.tsx', 'input-number-variants.ts', 'input-number-utils.ts', 'types.ts'],
    dependencies: ['class-variance-authority', 'lucide-react'],
    description: 'Number input with stepper controls and min/max validation',
  },
  {
    name: 'select',
    version: '1.0.0',
    files: ['index.tsx', 'select-variants.ts', 'types.ts'],
    dependencies: ['class-variance-authority', 'lucide-react'],
    description: 'Select dropdown with single/multiple selection support',
  },
  {
    name: 'switch',
    version: '1.0.0',
    files: ['index.tsx', 'switch-variants.ts', 'types.ts'],
    dependencies: ['class-variance-authority', 'lucide-react'],
    description: 'Switch toggle component with checked state, loading, disabled',
  },
  {
    name: 'checkbox',
    version: '1.0.0',
    files: ['index.tsx', 'checkbox-variants.ts', 'types.ts'],
    dependencies: ['class-variance-authority', 'lucide-react'],
    description: 'Checkbox component with group support and indeterminate state',
  },
  {
    name: 'radio',
    version: '1.0.0',
    files: ['index.tsx', 'radio-variants.ts', 'types.ts'],
    dependencies: ['class-variance-authority', 'lucide-react'],
    description: 'Radio component with group support',
  },
  {
    name: 'date-picker',
    version: '1.0.0',
    files: ['index.tsx', 'date-picker-variants.ts', 'date-picker-utils.ts', 'types.ts'],
    dependencies: ['class-variance-authority', 'lucide-react'],
    description: 'Date picker with calendar popup and range selection',
  },
  {
    name: 'upload',
    version: '1.0.0',
    files: ['index.tsx', 'upload-variants.ts', 'upload-types.ts', 'types.ts'],
    dependencies: ['class-variance-authority', 'lucide-react'],
    description: 'File upload component with drag-drop and preview support',
  },
  {
    name: 'card',
    version: '1.0.0',
    files: ['index.tsx', 'card-variants.ts', 'types.ts'],
    dependencies: ['class-variance-authority'],
    description: 'Card container with header, body, and footer sections',
  },
  {
    name: 'tabs',
    version: '1.0.0',
    files: ['index.tsx', 'tabs-variants.ts', 'types.ts'],
    dependencies: ['class-variance-authority', 'lucide-react'],
    description: 'Tabs component with animated tab switching',
  },
  {
    name: 'tag',
    version: '1.0.0',
    files: ['index.tsx', 'tag-variants.ts', 'types.ts'],
    dependencies: ['class-variance-authority', 'lucide-react'],
    description: 'Tag component with closable and color variants',
  },
  {
    name: 'badge',
    version: '1.0.0',
    files: ['index.tsx', 'badge-variants.ts', 'types.ts'],
    dependencies: ['class-variance-authority'],
    description: 'Badge component for status indicators and counts',
  },
  {
    name: 'avatar',
    version: '1.0.0',
    files: ['index.tsx', 'avatar-variants.ts', 'types.ts'],
    dependencies: ['class-variance-authority', 'lucide-react'],
    description: 'Avatar component with image, icon, and text fallback',
  },
  {
    name: 'drawer',
    version: '1.0.0',
    files: ['index.tsx', 'drawer-variants.ts', 'types.ts'],
    dependencies: ['class-variance-authority', 'lucide-react'],
    description: 'Drawer sidebar with focus trap and ESC close',
  },
  {
    name: 'message',
    version: '1.0.0',
    files: ['index.tsx', 'message-variants.ts', 'types.ts'],
    dependencies: ['class-variance-authority', 'lucide-react'],
    description: 'Message toast notification component',
  },
  {
    name: 'notification',
    version: '1.0.0',
    files: ['index.tsx', 'notification-variants.ts', 'types.ts'],
    dependencies: ['class-variance-authority', 'lucide-react'],
    description: 'Notification alert component with closable support',
  },
  {
    name: 'popover',
    version: '1.0.0',
    files: ['index.tsx', 'popover-variants.ts', 'types.ts'],
    dependencies: ['class-variance-authority', 'lucide-react'],
    description: 'Popover card triggered by click or hover',
  },
  {
    name: 'tooltip',
    version: '1.0.0',
    files: ['index.tsx', 'tooltip-variants.ts', 'types.ts'],
    dependencies: ['class-variance-authority'],
    description: 'Tooltip text hint with hover/focus/click trigger',
  },
  {
    name: 'dropdown',
    version: '1.0.0',
    files: ['index.tsx', 'dropdown-variants.ts', 'types.ts'],
    dependencies: ['class-variance-authority'],
    description: 'Dropdown menu with 6 placements, disabled state, and danger variant',
  },
  {
    name: 'breadcrumb',
    version: '1.0.0',
    files: ['index.tsx', 'breadcrumb-variants.ts', 'breadcrumb-context.ts', 'breadcrumb-item.tsx', 'breadcrumb-separator.tsx', 'types.ts'],
    dependencies: ['class-variance-authority', 'lucide-react'],
    description: 'Breadcrumb navigation with separator and link support',
  },
  {
    name: 'pagination',
    version: '1.0.0',
    files: ['index.tsx', 'pagination-variants.ts', 'types.ts'],
    dependencies: ['class-variance-authority', 'lucide-react'],
    description: 'Pagination component with page size changer and quick jumper',
  },
  {
    name: 'list',
    version: '1.0.0',
    files: ['index.tsx', 'list-variants.ts', 'types.ts'],
    dependencies: ['class-variance-authority', 'lucide-react'],
    description: 'List component with header, footer, and loading state',
  },
  // P2 辅助组件
  {
    name: 'auto-complete',
    version: '1.0.0',
    files: ['index.tsx', 'auto-complete-variants.ts', 'auto-complete-dropdown.tsx', 'auto-complete-utils.ts', 'types.ts'],
    dependencies: ['class-variance-authority', 'lucide-react'],
    description: 'AutoComplete input with suggestion dropdown',
  },
  {
    name: 'cascader',
    version: '1.0.0',
    files: ['index.tsx', 'cascader-variants.ts', 'types.ts'],
    dependencies: ['class-variance-authority', 'lucide-react'],
    description: 'Cascader multi-level selection component',
  },
  {
    name: 'tree-select',
    version: '1.0.0',
    files: ['index.tsx', 'tree-select-variants.ts', 'tree-select-utils.ts', 'tree-select-node.tsx', 'tree-select-filter.ts', 'use-tree-select.ts', 'types.ts'],
    dependencies: ['class-variance-authority', 'lucide-react'],
    description: 'TreeSelect dropdown with tree structure selection',
  },
  {
    name: 'time-picker',
    version: '1.0.0',
    files: ['index.tsx', 'time-picker-variants.ts', 'time-picker-utils.ts', 'types.ts'],
    dependencies: ['class-variance-authority', 'lucide-react'],
    description: 'Time picker with hour/minute/second selection',
  },
  {
    name: 'rate',
    version: '1.0.0',
    files: ['index.tsx', 'rate-variants.ts', 'types.ts'],
    dependencies: ['class-variance-authority', 'lucide-react'],
    description: 'Rate star rating component',
  },
  {
    name: 'slider',
    version: '1.0.0',
    files: ['index.tsx', 'slider-variants.ts', 'slider-utils.ts', 'types.ts'],
    dependencies: ['class-variance-authority', 'lucide-react'],
    description: 'Slider range input component',
  },
  {
    name: 'tree',
    version: '1.0.0',
    files: ['index.tsx', 'tree-variants.ts', 'tree-node.tsx', 'tree-utils.ts', 'types.ts'],
    dependencies: ['class-variance-authority', 'lucide-react'],
    description: 'Tree component with expandable nodes and selection',
  },
  {
    name: 'calendar',
    version: '1.0.0',
    files: ['index.tsx', 'calendar-variants.ts', 'calendar-cell-variants.ts', 'calendar-utils.ts', 'types.ts'],
    dependencies: ['class-variance-authority', 'lucide-react'],
    description: 'Calendar month view with date selection',
  },
  {
    name: 'empty',
    version: '1.0.0',
    files: ['index.tsx', 'empty-variants.ts', 'types.ts'],
    dependencies: ['class-variance-authority', 'lucide-react'],
    description: 'Empty state placeholder component',
  },
  {
    name: 'skeleton',
    version: '1.0.0',
    files: ['index.tsx', 'skeleton-variants.ts', 'types.ts'],
    dependencies: ['class-variance-authority'],
    description: 'Skeleton loading placeholder component',
  },
  {
    name: 'progress',
    version: '1.0.0',
    files: ['index.tsx', 'progress-variants.ts', 'types.ts'],
    dependencies: ['class-variance-authority', 'lucide-react'],
    description: 'Progress bar with circle and line variants',
  },
  {
    name: 'statistic',
    version: '1.0.0',
    files: ['index.tsx', 'statistic-variants.ts', 'types.ts'],
    dependencies: ['class-variance-authority', 'lucide-react'],
    description: 'Statistic number display component',
  },
  {
    name: 'timeline',
    version: '1.0.0',
    files: ['index.tsx', 'timeline-variants.ts', 'types.ts'],
    dependencies: ['class-variance-authority', 'lucide-react'],
    description: 'Timeline vertical list component',
  },
  {
    name: 'steps',
    version: '1.0.0',
    files: ['index.tsx', 'steps-variants.ts', 'types.ts'],
    dependencies: ['class-variance-authority', 'lucide-react'],
    description: 'Steps progress indicator component',
  },
  {
    name: 'spin',
    version: '1.0.0',
    files: ['index.tsx', 'spin-variants.ts', 'types.ts'],
    dependencies: ['class-variance-authority', 'lucide-react'],
    description: 'Spin loading indicator component',
  },
  {
    name: 'anchor',
    version: '1.0.0',
    files: ['index.tsx', 'anchor-variants.ts', 'types.ts'],
    dependencies: ['class-variance-authority', 'lucide-react'],
    description: 'Anchor navigation component',
  },
  {
    name: 'back-top',
    version: '1.0.0',
    files: ['index.tsx', 'back-top-variants.ts', 'types.ts'],
    dependencies: ['class-variance-authority', 'lucide-react'],
    description: 'BackTop scroll to top button',
  },
  {
    name: 'config-provider',
    version: '1.0.0',
    files: ['index.tsx', 'config-provider-variants.ts', 'types.ts'],
    dependencies: ['class-variance-authority'],
    description: 'ConfigProvider global configuration component',
  },
  {
    name: 'chart',
    version: '1.0.0',
    files: ['index.tsx', 'chart-variants.ts', 'types.ts'],
    dependencies: ['class-variance-authority'],
    description: 'Chart wrapper component for data visualization',
  },
  // P2+ 扩展组件
  {
    name: 'icon',
    version: '1.0.0',
    files: ['index.tsx', 'icon-base.tsx', 'icons.tsx', 'types.ts'],
    dependencies: ['class-variance-authority'],
    description: 'Icon component with custom SVG support and icon set',
  },
  {
    name: 'flex',
    version: '1.0.0',
    files: ['index.tsx', 'types.ts'],
    dependencies: [],
    description: 'Flex container with direction, wrap, justify, align support',
  },
  {
    name: 'alert',
    version: '1.0.0',
    files: ['index.tsx', 'types.ts'],
    dependencies: [],
    description: 'Alert component with success/info/warning/error types',
  },
  {
    name: 'popconfirm',
    version: '1.0.0',
    files: ['index.tsx', 'popconfirm-variants.ts', 'types.ts'],
    dependencies: ['class-variance-authority'],
    description: 'Popconfirm bubble for confirmation dialogs',
  },
  {
    name: 'result',
    version: '1.0.0',
    files: ['index.tsx', 'result-variants.ts', 'types.ts'],
    dependencies: ['class-variance-authority'],
    description: 'Result page for success/error/info/warning states',
  },
  {
    name: 'carousel',
    version: '1.0.0',
    files: ['index.tsx', 'carousel-variants.ts', 'types.ts'],
    dependencies: ['class-variance-authority'],
    description: 'Carousel slideshow component',
  },
  {
    name: 'collapse',
    version: '1.0.0',
    files: ['index.tsx', 'collapse-variants.ts', 'types.ts'],
    dependencies: ['class-variance-authority'],
    description: 'Collapse accordion panel component',
  },
  {
    name: 'descriptions',
    version: '1.0.0',
    files: ['index.tsx', 'types.ts'],
    dependencies: [],
    description: 'Descriptions list for displaying key-value pairs',
  },
  {
    name: 'image',
    version: '1.0.0',
    files: ['index.tsx', 'types.ts'],
    dependencies: [],
    description: 'Image component with preview and placeholder support',
  },
  {
    name: 'segmented',
    version: '1.0.0',
    files: ['index.tsx', 'types.ts'],
    dependencies: [],
    description: 'Segmented control for toggle selection',
  },
  {
    name: 'affix',
    version: '1.0.0',
    files: ['index.tsx', 'types.ts'],
    dependencies: [],
    description: 'Affix sticky positioning component',
  },
  // P3 扩展组件
  {
    name: 'float-button',
    version: '1.0.0',
    files: ['index.tsx', 'types.ts'],
    dependencies: [],
    description: 'FloatButton for quick action access',
  },
  {
    name: 'splitter',
    version: '1.0.0',
    files: ['index.tsx', 'types.ts'],
    dependencies: [],
    description: 'Splitter panel for resizable layouts',
  },
  {
    name: 'color-picker',
    version: '1.0.0',
    files: ['index.tsx', 'color-picker-panel.tsx', 'color-picker-utils.ts', 'types.ts'],
    dependencies: [],
    description: 'ColorPicker for color selection',
  },
  {
    name: 'mentions',
    version: '1.0.0',
    files: ['index.tsx', 'types.ts'],
    dependencies: [],
    description: 'Mentions input for @ mentions',
  },
  {
    name: 'transfer',
    version: '1.0.0',
    files: ['index.tsx', 'types.ts'],
    dependencies: [],
    description: 'Transfer for moving items between lists',
  },
  {
    name: 'qrcode',
    version: '1.0.0',
    files: ['index.tsx', 'types.ts'],
    dependencies: [],
    description: 'QRCode generator component',
  },
  {
    name: 'tour',
    version: '1.0.0',
    files: ['index.tsx', 'types.ts'],
    dependencies: [],
    description: 'Tour guide for feature walkthrough',
  },
  {
    name: 'watermark',
    version: '1.0.0',
    files: ['index.tsx', 'types.ts'],
    dependencies: [],
    description: 'Watermark overlay component',
  },
  {
    name: 'app',
    version: '1.0.0',
    files: ['index.tsx', 'types.ts'],
    dependencies: [],
    description: 'App root container for global config',
  },
  // P4 高阶业务组件
  {
    name: 'pro-table',
    version: '1.0.0',
    files: ['index.tsx', 'pro-table-variants.ts', 'types.ts'],
    dependencies: ['class-variance-authority', 'lucide-react'],
    description: 'ProTable with search, toolbar, and async data support',
  },
  {
    name: 'tree-table',
    version: '1.0.0',
    files: ['index.tsx', 'tree-table-variants.ts', 'tree-table-utils.ts', 'tree-table-check.ts', 'tree-table-descendant.ts', 'types.ts'],
    dependencies: ['class-variance-authority', 'lucide-react'],
    description: 'TreeTable with expandable rows and hierarchical data',
  },
  {
    name: 'drag-table',
    version: '1.0.0',
    files: ['index.tsx', 'drag-table-variants.ts', 'types.ts'],
    dependencies: ['class-variance-authority', 'lucide-react'],
    description: 'DragTable with row drag-and-drop reorder support',
  },
  {
    name: 'pro-form',
    version: '1.0.0',
    files: ['index.tsx', 'pro-form-variants.ts', 'pro-form-list.tsx', 'pro-form-select.tsx', 'pro-form-text.tsx', 'types.ts'],
    dependencies: ['class-variance-authority', 'lucide-react'],
    description: 'ProForm with schema-based form generation',
  },
  {
    name: 'tag-input',
    version: '1.0.0',
    files: ['index.tsx', 'tag-input-variants.ts', 'types.ts'],
    dependencies: ['class-variance-authority', 'lucide-react'],
    description: 'TagInput for entering multiple tags',
  },
  {
    name: 'search-input',
    version: '1.0.0',
    files: ['index.tsx', 'search-input-variants.ts', 'search-input-utils.ts', 'highlight-text.tsx', 'types.ts'],
    dependencies: ['class-variance-authority', 'lucide-react'],
    description: 'SearchInput with highlight and suggestion support',
  },
  {
    name: 'page-container',
    version: '1.0.0',
    files: ['index.tsx', 'page-container-variants.ts', 'types.ts'],
    dependencies: ['class-variance-authority'],
    description: 'PageContainer with header, breadcrumb, and footer',
  },
  // P5 进阶业务组件
  {
    name: 'statistic-card',
    version: '1.0.0',
    files: ['index.tsx', 'statistic-card-variants.ts', 'types.ts'],
    dependencies: ['class-variance-authority', 'lucide-react'],
    description: 'StatisticCard with title, value, and trend indicator',
  },
  {
    name: 'avatar-group',
    version: '1.0.0',
    files: ['index.tsx', 'avatar-group-variants.ts', 'types.ts'],
    dependencies: ['class-variance-authority', 'lucide-react'],
    description: 'AvatarGroup for displaying multiple avatars',
  },
  {
    name: 'copy-button',
    version: '1.0.0',
    files: ['index.tsx', 'copy-button-variants.ts', 'types.ts'],
    dependencies: ['class-variance-authority', 'lucide-react'],
    description: 'CopyButton for copying text to clipboard',
  },
  {
    name: 'batch-operation',
    version: '1.0.0',
    files: ['index.tsx', 'batch-operation-variants.ts', 'types.ts'],
    dependencies: ['class-variance-authority', 'lucide-react'],
    description: 'BatchOperation for bulk actions toolbar',
  },
  {
    name: 'step-form',
    version: '1.0.0',
    files: ['index.tsx', 'step-form-variants.ts', 'types.ts'],
    dependencies: ['class-variance-authority', 'lucide-react'],
    description: 'StepForm with multi-step form wizard',
  },
  {
    name: 'progress-gauge',
    version: '1.0.0',
    files: ['index.tsx', 'progress-gauge-variants.ts', 'types.ts'],
    dependencies: ['class-variance-authority', 'lucide-react'],
    description: 'ProgressGauge circular progress indicator',
  },
  {
    name: 'enhance-descriptions',
    version: '1.0.0',
    files: ['index.tsx', 'enhance-descriptions-variants.ts', 'types.ts'],
    dependencies: ['class-variance-authority', 'lucide-react'],
    description: 'EnhanceDescriptions with editable and collapsible support',
  },
  {
    name: 'enhance-timeline',
    version: '1.0.0',
    files: ['index.tsx', 'enhance-timeline-variants.ts', 'types.ts'],
    dependencies: ['class-variance-authority', 'lucide-react'],
    description: 'EnhanceTimeline with interactive timeline items',
  },
  {
    name: 'event-calendar',
    version: '1.0.0',
    files: ['index.tsx', 'event-calendar-variants.ts', 'event-calendar-cells.ts', 'event-calendar-utils.ts', 'types.ts'],
    dependencies: ['class-variance-authority', 'lucide-react'],
    description: 'EventCalendar with event display and management',
  },
  // P6 创意趣味组件
  {
    name: 'morph-button',
    version: '1.0.0',
    files: ['index.tsx', 'morph-button-variants.ts', 'types.ts'],
    dependencies: ['class-variance-authority', 'lucide-react'],
    description: 'MorphButton with morphing animation effect',
  },
  {
    name: 'elastic-toggle',
    version: '1.0.0',
    files: ['index.tsx', 'elastic-toggle-variants.ts', 'types.ts'],
    dependencies: ['class-variance-authority', 'lucide-react'],
    description: 'ElasticToggle with elastic bounce animation',
  },
  {
    name: 'stagger-menu',
    version: '1.0.0',
    files: ['index.tsx', 'stagger-menu-variants.ts', 'types.ts'],
    dependencies: ['class-variance-authority', 'lucide-react'],
    description: 'StaggerMenu with staggered animation items',
  },
  {
    name: 'scroll-reveal',
    version: '1.0.0',
    files: ['index.tsx', 'scroll-reveal-variants.ts', 'types.ts'],
    dependencies: ['class-variance-authority', 'lucide-react'],
    description: 'ScrollReveal with scroll-triggered reveal animation',
  },
  {
    name: 'animate-countdown',
    version: '1.0.0',
    files: ['index.tsx', 'animate-countdown-variants.ts', 'types.ts'],
    dependencies: ['class-variance-authority', 'lucide-react'],
    description: 'AnimateCountdown with animated countdown timer',
  },
  {
    name: 'hover-card',
    version: '1.0.0',
    files: ['index.tsx', 'hover-card-variants.ts', 'types.ts'],
    dependencies: ['class-variance-authority', 'lucide-react'],
    description: 'HoverCard with hover-triggered card reveal',
  },
  {
    name: 'wired-element',
    version: '1.0.0',
    files: ['index.tsx', 'wired-element-variants.ts', 'types.ts'],
    dependencies: ['class-variance-authority', 'lucide-react'],
    description: 'WiredElement with hand-drawn wireframe style',
  },
  {
    name: 'star-rating',
    version: '1.0.0',
    files: ['index.tsx', 'star-rating-variants.ts', 'types.ts'],
    dependencies: ['class-variance-authority', 'lucide-react'],
    description: 'StarRating with animated star rating',
  },
  // P7 前沿现代组件
  {
    name: 'chat-bubble',
    version: '1.0.0',
    files: ['index.tsx', 'chat-bubble-variants.ts', 'types.ts'],
    dependencies: ['class-variance-authority', 'lucide-react'],
    description: 'ChatBubble for AI chat interfaces',
  },
  {
    name: 'thought-chain',
    version: '1.0.0',
    files: ['index.tsx', 'thought-chain-variants.ts', 'types.ts'],
    dependencies: ['class-variance-authority', 'lucide-react'],
    description: 'ThoughtChain for displaying AI reasoning steps',
  },
  {
    name: 'prompt-input',
    version: '1.0.0',
    files: ['index.tsx', 'prompt-input-variants.ts', 'types.ts'],
    dependencies: ['class-variance-authority', 'lucide-react'],
    description: 'PromptInput for AI prompt composition',
  },
  {
    name: 'ai-stream-text',
    version: '1.0.0',
    files: ['index.tsx', 'ai-stream-text-variants.ts', 'types.ts'],
    dependencies: ['class-variance-authority', 'lucide-react'],
    description: 'AIStreamText for streaming AI text display',
  },
  {
    name: 'markdown-editor',
    version: '1.0.0',
    files: ['index.tsx', 'markdown-editor-variants.ts', 'types.ts'],
    dependencies: ['class-variance-authority', 'lucide-react'],
    description: 'MarkdownEditor for markdown editing and preview',
  },
  {
    name: 'code-editor',
    version: '1.0.0',
    files: ['index.tsx', 'code-editor-variants.ts', 'types.ts'],
    dependencies: ['class-variance-authority', 'lucide-react'],
    description: 'CodeEditor for code editing with syntax highlight',
  },
  {
    name: 'pdf-viewer',
    version: '1.0.0',
    files: ['index.tsx', 'pdf-viewer-variants.ts', 'types.ts'],
    dependencies: ['class-variance-authority', 'lucide-react'],
    description: 'PDFViewer for PDF document viewing',
  },
  {
    name: 'image-editor',
    version: '1.0.0',
    files: ['index.tsx', 'image-editor-variants.ts', 'image-editor-canvas.ts', 'image-editor-utils.ts', 'types.ts'],
    dependencies: ['class-variance-authority', 'lucide-react'],
    description: 'ImageEditor for image cropping and editing',
  },
  {
    name: 'form-designer',
    version: '1.0.0',
    files: ['index.tsx', 'form-designer-variants.ts', 'form-designer-preview.tsx', 'form-designer-dnd.ts', 'form-designer-utils.ts', 'types.ts'],
    dependencies: ['class-variance-authority', 'lucide-react'],
    description: 'FormDesigner for visual form building',
  },
  {
    name: 'json-schema-render',
    version: '1.0.0',
    files: ['index.tsx', 'json-schema-render-variants.ts', 'types.ts'],
    dependencies: ['class-variance-authority', 'lucide-react'],
    description: 'JsonSchemaRender for JSON schema-based rendering',
  },
  {
    name: 'action-sheet',
    version: '1.0.0',
    files: ['index.tsx', 'action-sheet-variants.ts', 'types.ts'],
    dependencies: ['class-variance-authority', 'lucide-react'],
    description: 'ActionSheet mobile action menu',
  },
  {
    name: 'pull-to-refresh',
    version: '1.0.0',
    files: ['index.tsx', 'pull-to-refresh-variants.ts', 'types.ts'],
    dependencies: ['class-variance-authority', 'lucide-react'],
    description: 'PullToRefresh mobile pull gesture refresh',
  },
  {
    name: 'infinite-scroll',
    version: '1.0.0',
    files: ['index.tsx', 'infinite-scroll-variants.ts', 'types.ts'],
    dependencies: ['class-variance-authority', 'lucide-react'],
    description: 'InfiniteScroll for endless list loading',
  },
  {
    name: 'tab-bar',
    version: '1.0.0',
    files: ['index.tsx', 'tab-bar-variants.ts', 'types.ts'],
    dependencies: ['class-variance-authority', 'lucide-react'],
    description: 'TabBar mobile bottom navigation',
  },
]

function syncComponent(config: ManifestConfig): void {
  const srcDir = path.join(UI_SRC, config.name)
  const destDir = path.join(TEMPLATES_DIR, config.name)

  // 确保目标目录存在
  fs.ensureDirSync(destDir)

  // 清理目标目录中的旧文件（保留 manifest.json 以外的内容）
  const existingFiles = fs.readdirSync(destDir)
  for (const file of existingFiles) {
    if (file !== 'manifest.json') {
      fs.removeSync(path.join(destDir, file))
    }
  }

  // 复制源文件
  for (const file of config.files) {
    const srcFile = path.join(srcDir, file)
    const destFile = path.join(destDir, file)
    if (!fs.existsSync(srcFile)) {
      console.error(`  Missing source file: ${srcFile}`)
      process.exit(1)
    }
    fs.copyFileSync(srcFile, destFile)
    console.log(`  Copied ${config.name}/${file}`)
  }

  // 生成 manifest.json
  const manifestPath = path.join(destDir, 'manifest.json')
  fs.writeJsonSync(manifestPath, {
    name: config.name,
    version: config.version,
    files: config.files,
    dependencies: config.dependencies,
    description: config.description,
  }, { spaces: 2 })
  console.log(`  Generated ${config.name}/manifest.json`)
}

console.log('Syncing templates from packages/ui/src to packages/cli/src/templates...')

for (const config of COMPONENTS) {
  console.log(`\nSyncing ${config.name}:`)
  syncComponent(config)
}

console.log('\nAll templates synced successfully.')