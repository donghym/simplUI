export interface CatalogItem {
  name: string;
  title: string;
  demo?: boolean;
  href: string;
}

export interface CatalogCategory {
  title: string;
  items: CatalogItem[];
}

export const categories: CatalogCategory[] = [
  {
    title: "通用",
    items: [
      { name: "button", title: "Button 按钮", href: "/components/button", demo: true, },
      { name: "icon", title: "Icon 图标", href: "/components/icon", },
      { name: "typography", title: "Typography 排版", href: "/components/typography", },
    ],
  },
  {
    title: "布局",
    items: [
      { name: "divider", title: "Divider 分割线", href: "/components/divider", },
      { name: "flex", title: "Flex 弹性布局", href: "/components/flex", },
      { name: "grid", title: "Grid 栅格", href: "/components/grid", },
      { name: "layout", title: "Layout 布局", href: "/components/layout", },
      { name: "space", title: "Space 间距", href: "/components/space", },
      { name: "splitter", title: "Splitter 分隔面板", href: "/components/splitter", },
    ],
  },
  {
    title: "导航",
    items: [
      { name: "anchor", title: "Anchor 锚点", href: "/components/anchor", },
      { name: "back-top", title: "BackTop 回到顶部", href: "/components/back-top", },
      { name: "breadcrumb", title: "Breadcrumb 面包屑", href: "/components/breadcrumb", },
      { name: "dropdown", title: "Dropdown 下拉菜单", href: "/components/dropdown", },
      { name: "menu", title: "Menu 导航菜单", href: "/components/menu", },
      { name: "pagination", title: "Pagination 分页", href: "/components/pagination", },
      { name: "steps", title: "Steps 步骤条", href: "/components/steps", },
      { name: "tabs", title: "Tabs 标签页", href: "/components/tabs", },
    ],
  },
  {
    title: "数据录入",
    items: [
      { name: "auto-complete", title: "AutoComplete 自动完成", href: "/components/auto-complete", },
      { name: "cascader", title: "Cascader 级联选择", href: "/components/cascader", },
      { name: "checkbox", title: "Checkbox 多选框", href: "/components/checkbox", },
      { name: "color-picker", title: "ColorPicker 颜色选择", href: "/components/color-picker", },
      { name: "date-picker", title: "DatePicker 日期选择", href: "/components/date-picker", },
      { name: "form", title: "Form 表单", href: "/components/form", },
      { name: "input", title: "Input 输入框", href: "/components/input", demo: true, },
      { name: "input-number", title: "InputNumber 数字输入", href: "/components/input-number", },
      { name: "mentions", title: "Mentions 提及", href: "/components/mentions", },
      { name: "pro-form", title: "ProForm 高级表单", href: "/components/pro-form", },
      { name: "radio", title: "Radio 单选框", href: "/components/radio", },
      { name: "rate", title: "Rate 评分", href: "/components/rate", },
      { name: "search-input", title: "SearchInput 搜索框", href: "/components/search-input", },
      { name: "select", title: "Select 选择器", href: "/components/select", },
      { name: "slider", title: "Slider 滑动输入条", href: "/components/slider", },
      { name: "switch", title: "Switch 开关", href: "/components/switch", },
      { name: "tag-input", title: "TagInput 标签输入", href: "/components/tag-input", },
      { name: "time-picker", title: "TimePicker 时间选择", href: "/components/time-picker", },
      { name: "transfer", title: "Transfer 穿梭框", href: "/components/transfer", },
      { name: "tree-select", title: "TreeSelect 树选择", href: "/components/tree-select", },
      { name: "upload", title: "Upload 上传", href: "/components/upload", },
    ],
  },
  {
    title: "数据展示",
    items: [
      { name: "avatar", title: "Avatar 头像", href: "/components/avatar", },
      { name: "avatar-group", title: "AvatarGroup 头像组", href: "/components/avatar-group", },
      { name: "badge", title: "Badge 徽标", href: "/components/badge", },
      { name: "calendar", title: "Calendar 日历", href: "/components/calendar", },
      { name: "card", title: "Card 卡片", href: "/components/card", },
      { name: "carousel", title: "Carousel 走马灯", href: "/components/carousel", },
      { name: "collapse", title: "Collapse 折叠面板", href: "/components/collapse", },
      { name: "descriptions", title: "Descriptions 描述列表", href: "/components/descriptions", },
      { name: "empty", title: "Empty 空状态", href: "/components/empty", },
      { name: "image", title: "Image 图片", href: "/components/image", },
      { name: "infinite-scroll", title: "InfiniteScroll 无限滚动", href: "/components/infinite-scroll", },
      { name: "list", title: "List 列表", href: "/components/list", },
      { name: "popover", title: "Popover 气泡卡片", href: "/components/popover", },
      { name: "pro-table", title: "ProTable 高级表格", href: "/components/pro-table", },
      { name: "segmented", title: "Segmented 分段控制器", href: "/components/segmented", },
      { name: "statistic", title: "Statistic 统计数值", href: "/components/statistic", },
      { name: "table", title: "Table 表格", href: "/components/table", },
      { name: "tag", title: "Tag 标签", href: "/components/tag", demo: true, },
      { name: "timeline", title: "Timeline 时间轴", href: "/components/timeline", },
      { name: "tooltip", title: "Tooltip 文字提示", href: "/components/tooltip", },
      { name: "tree", title: "Tree 树形控件", href: "/components/tree", },
    ],
  },
  {
    title: "反馈",
    items: [
      { name: "alert", title: "Alert 警告提示", href: "/components/alert", },
      { name: "drawer", title: "Drawer 抽屉", href: "/components/drawer", },
      { name: "message", title: "Message 全局提示", href: "/components/message", },
      { name: "modal", title: "Modal 对话框", href: "/components/modal", },
      { name: "notification", title: "Notification 通知提醒框", href: "/components/notification", },
      { name: "popconfirm", title: "Popconfirm 气泡确认框", href: "/components/popconfirm", },
      { name: "progress", title: "Progress 进度条", href: "/components/progress", },
      { name: "result", title: "Result 结果", href: "/components/result", },
      { name: "skeleton", title: "Skeleton 骨架屏", href: "/components/skeleton", },
      { name: "spin", title: "Spin 加载中", href: "/components/spin", },
    ],
  },
  {
    title: "其他",
    items: [
      { name: "affix", title: "Affix 固钉", href: "/components/affix", },
      { name: "batch-operation", title: "BatchOperation 批量操作", href: "/components/batch-operation", },
      { name: "config-provider", title: "ConfigProvider 全局化配置", href: "/components/config-provider", },
      { name: "copy-button", title: "CopyButton 复制按钮", href: "/components/copy-button", },
      { name: "float-button", title: "FloatButton 悬浮按钮", href: "/components/float-button", },
    ],
  },
];
