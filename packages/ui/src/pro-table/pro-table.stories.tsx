import type { Meta, StoryObj } from '@storybook/react'
import { ProTable } from './index'
import type { ProTableColumn, ProTableRequestParams, ProTableRequestResult } from './types'
import { Input } from '../input'
import { Select } from '../select'

/**
 * ProTable 是基于 Table 封装的高阶业务表格组件。
 *
 * 与基础 Table 的区别：
 * - Table 是低级别构建块，所有状态需要手动管理，数据通过 dataSource 传入
 * - ProTable 新增 request 异步请求（自动管理 loading/分页）、内置搜索栏、
 *   工具栏（刷新/列显隐/自定义操作）、值类型自动格式化（money/number/date）、
 *   轮询自动刷新、列显隐配置等高级业务能力
 *
 * 适用场景：中后台管理系统的列表页、数据管理页等需要「请求 + 搜索 + 分页 + 筛选」
 * 组合的业务场景。如果需要精细控制每项行为（虚拟滚动、固定列、展开行、行选择等），
 * 请使用基础 Table 组件。
 */

/** 用户数据接口 */
interface User {
  id: number
  name: string
  age: number
  department: string
  status: string
  salary: number
  joinDate: string
}

const DEPARTMENTS: readonly string[] = ['技术部', '产品部', '设计部', '运营部']
const STATUSES: readonly string[] = ['在职', '离职', '试用期']

/** 模拟用户数据 */
const mockUsers: User[] = Array.from({ length: 46 }, (_, i) => ({
  id: i + 1,
  name: `用户${i + 1}`,
  age: 20 + (i % 30),
  department: DEPARTMENTS[i % 4] as string,
  status: STATUSES[i % 3] as string,
  salary: 8000 + i * 500,
  joinDate: `2024-${String((i % 12) + 1).padStart(2, '0')}-${String((i % 28) + 1).padStart(2, '0')}`,
}))

/** 模拟异步请求 */
async function mockRequest(params: ProTableRequestParams): Promise<ProTableRequestResult<User>> {
  await new Promise(resolve => setTimeout(resolve, 600))
  let filtered = [...mockUsers]
  if (params.keyword) {
    const kw = params.keyword.toLowerCase()
    filtered = filtered.filter(u =>
      u.name.toLowerCase().includes(kw) || u.department.toLowerCase().includes(kw)
    )
  }
  const start = (params.current - 1) * params.pageSize
  return {
    data: filtered.slice(start, start + params.pageSize),
    total: filtered.length,
    success: true,
  }
}

/** 基础列配置 */
const baseColumns: ProTableColumn<User>[] = [
  { title: 'ID', dataIndex: 'id', width: 60 },
  { title: '姓名', dataIndex: 'name', width: 100 },
  { title: '年龄', dataIndex: 'age', width: 80, valueType: 'number' },
  { title: '部门', dataIndex: 'department', width: 120, filters: [
    { text: '技术部', value: '技术部' },
    { text: '产品部', value: '产品部' },
    { text: '设计部', value: '设计部' },
    { text: '运营部', value: '运营部' },
  ]},
  { title: '状态', dataIndex: 'status', width: 100, filters: [
    { text: '在职', value: '在职' },
    { text: '离职', value: '离职' },
    { text: '试用期', value: '试用期' },
  ]},
  { title: '薪资', dataIndex: 'salary', width: 120, valueType: 'money', sorter: true },
  { title: '入职日期', dataIndex: 'joinDate', width: 120, valueType: 'date' },
]

const meta: Meta<typeof ProTable> = {
  title: '数据展示/ProTable 高级表格',
  component: ProTable,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: [
          'ProTable 是基于 Table 封装的**高阶业务表格**，专为中后台管理系统设计。',
          '',
          '### 与基础 Table 的区别',
          '',
          '| 特性 | Table（基础表格） | ProTable（高级表格） |',
          '|------|-----------------|-------------------|',
          '| 定位 | 低级别构建块 | 高阶业务封装 |',
          '| 数据源 | 仅 dataSource 静态数据 | request 异步请求 + dataSource 静态数据 |',
          '| 搜索 | 需手动实现 | 内置搜索栏（search prop） |',
          '| 工具栏 | 无 | 内置刷新/列显隐/自定义操作（toolbar prop） |',
          '| 分页 | 手动配置 Pagination | 自动管理（request 模式内置） |',
          '| 值类型 | 需自定义 render | 内置 money/number/date/text/select 格式化 |',
          '| 轮询刷新 | 需手动 setInterval | polling prop 一行配置 |',
          '| 列显隐 | 需手动管理 | hideInTable + 工具栏设置面板 |',
          '| 行内编辑 | editable + renderEdit | editable + renderFormItem |',
          '| 虚拟滚动 | react-virtuoso（内置） | 通过 Table 继承 |',
          '| 固定列/展开行/行选择 | 完整支持 | 通过 Table 继承 |',
          '',
          '**选型建议**：中后台列表页（搜索 + 分页 + 筛选 + 工具栏）用 ProTable；',
          '需要精细控制虚拟滚动、固定列、行选择等底层能力时用 Table。',
        ].join('\n'),
      },
    },
  },
  argTypes: {
    columns: { control: 'object', description: '列配置数组，支持 hideInTable / valueType / editable / renderFormItem / filters / sorter 等增强配置' },
    request: { description: '异步数据请求函数。传入后自动管理 loading、分页和数据，与 dataSource 互斥' },
    dataSource: { control: 'object', description: '静态数据源。与 request 互斥，request 存在时忽略' },
    search: { control: 'boolean', description: '搜索栏配置。true 显示默认搜索框；对象形式可配置 defaultCollapsed 折叠' },
    toolbar: { control: 'boolean', description: '工具栏配置。true 显示刷新/列设置；对象形式可通过 actions 注入自定义操作按钮' },
    manualRequest: { control: 'boolean', description: '是否手动触发首次请求。true 时组件挂载不自动请求，需通过搜索/刷新触发' },
    polling: { control: 'number', description: '轮询间隔（毫秒）。设置后按间隔自动重新请求数据，适用于实时监控场景' },
    defaultPageSize: { control: 'number', description: '默认每页条数，默认 10' },
    rowKey: { control: 'text', description: '行数据唯一标识字段名，默认 "id"' },
    onLoadingChange: { description: '加载状态变化回调，参数为 boolean' },
  },
}

export default meta
type Story = StoryObj<typeof ProTable>

/** 基础用法（静态数据） */
export const Basic: Story = {
  render: () => (
    <div className="w-full min-w-[700px]">
      <ProTable<User>
        columns={baseColumns}
        dataSource={mockUsers.slice(0, 10)}
        defaultPageSize={5}
      />
    </div>
  ),
}

/** 异步请求 */
export const AsyncRequest: Story = {
  render: () => (
    <div className="w-full min-w-[700px]">
      <ProTable<User>
        columns={baseColumns}
        request={mockRequest}
        defaultPageSize={5}
      />
    </div>
  ),
}

/** 带搜索栏 */
export const WithSearch: Story = {
  render: () => (
    <div className="w-full min-w-[700px]">
      <ProTable<User>
        columns={baseColumns}
        request={mockRequest}
        search
        defaultPageSize={5}
      />
    </div>
  ),
}

/** 带工具栏 */
export const WithToolbar: Story = {
  render: () => (
    <div className="w-full min-w-[700px]">
      <ProTable<User>
        columns={baseColumns}
        request={mockRequest}
        toolbar
        defaultPageSize={5}
      />
    </div>
  ),
}

/** 完整功能（搜索 + 工具栏 + 异步请求） */
export const FullFeatured: Story = {
  render: () => (
    <div className="w-full min-w-[700px]">
      <ProTable<User>
        columns={baseColumns}
        request={mockRequest}
        search
        toolbar={{ actions: [<button key="add" type="button" className="text-sm text-primary-500 hover:text-primary-600">新增用户</button>] }}
        defaultPageSize={5}
      />
    </div>
  ),
}

/** 列筛选与排序 */
export const FilterAndSort: Story = {
  render: () => {
    const columns: ProTableColumn<User>[] = [
      { title: 'ID', dataIndex: 'id', width: 60, sorter: true },
      { title: '姓名', dataIndex: 'name', width: 100 },
      { title: '部门', dataIndex: 'department', width: 120, filters: [
        { text: '技术部', value: '技术部' },
        { text: '产品部', value: '产品部' },
        { text: '设计部', value: '设计部' },
        { text: '运营部', value: '运营部' },
      ]},
      { title: '薪资', dataIndex: 'salary', width: 120, valueType: 'money', sorter: true },
      { title: '入职日期', dataIndex: 'joinDate', width: 120, valueType: 'date' },
    ]
    return (
      <div className="w-full min-w-[700px]">
        <ProTable<User>
          columns={columns}
          request={mockRequest}
          toolbar
          defaultPageSize={5}
        />
      </div>
    )
  },
}

/** 隐藏列 */
export const HideInTable: Story = {
  render: () => {
    const columns: ProTableColumn<User>[] = [
      { title: '姓名', dataIndex: 'name', width: 100 },
      { title: '部门', dataIndex: 'department', width: 120 },
      { title: '薪资', dataIndex: 'salary', width: 120, valueType: 'money' },
      { title: '隐藏列', dataIndex: 'status', width: 100, hideInTable: true },
    ]
    return (
      <div className="w-full min-w-[500px]">
        <ProTable<User>
          columns={columns}
          dataSource={mockUsers.slice(0, 5)}
          toolbar
        />
      </div>
    )
  },
}

/** 值类型展示 */
export const ValueTypes: Story = {
  render: () => {
    const columns: ProTableColumn<User>[] = [
      { title: '姓名(text)', dataIndex: 'name', width: 120, valueType: 'text' },
      { title: '年龄(number)', dataIndex: 'age', width: 100, valueType: 'number' },
      { title: '薪资(money)', dataIndex: 'salary', width: 120, valueType: 'money' },
      { title: '入职日期(date)', dataIndex: 'joinDate', width: 140, valueType: 'date' },
      { title: '状态(select)', dataIndex: 'status', width: 100, valueType: 'select' },
    ]
    return (
      <div className="w-full min-w-[600px]">
        <ProTable<User>
          columns={columns}
          dataSource={mockUsers.slice(0, 5)}
        />
      </div>
    )
  },
}

/**
 * 行内编辑
 *
 * 通过 editable + renderFormItem 实现双击单元格进入编辑态。
 * renderFormItem 接收 { value, onChange } 用于控制编辑值，
 * 失焦或回车后自动保存并退出编辑态。
 */
export const InlineEdit: Story = {
  render: () => {
    const columns: ProTableColumn<User>[] = [
      { title: 'ID', dataIndex: 'id', width: 60 },
      {
        title: '姓名（可编辑）', dataIndex: 'name', width: 160,
        editable: true,
        renderFormItem: ({ value, onChange }) => (
          <Input defaultValue={String(value ?? '')} onBlur={e => onChange(e.target.value)} autoFocus />
        ),
      },
      {
        title: '部门（可编辑）', dataIndex: 'department', width: 160,
        editable: true,
        renderFormItem: ({ value, onChange }) => (
          <Select
            defaultValue={String(value ?? '')}
            onChange={val => onChange(val)}
            options={[
              { label: '技术部', value: '技术部' },
              { label: '产品部', value: '产品部' },
              { label: '设计部', value: '设计部' },
              { label: '运营部', value: '运营部' },
            ]}
          />
        ),
      },
      { title: '薪资', dataIndex: 'salary', width: 120, valueType: 'money' },
      { title: '状态', dataIndex: 'status', width: 100 },
    ]
    return (
      <div className="w-full min-w-[700px]">
        <ProTable<User>
          columns={columns}
          dataSource={mockUsers.slice(0, 8)}
          toolbar={{ actions: [<span key="tip" className="text-xs text-muted-foreground">双击姓名或部门列进入编辑</span>] }}
          onLoadingChange={() => {}}
        />
      </div>
    )
  },
}

/**
 * 轮询自动刷新
 *
 * 设置 polling 属性（毫秒）后，ProTable 会按照指定间隔自动重新请求数据。
 * 适用于监控面板、实时状态等需要持续刷新数据的场景。
 * 本示例每 3 秒刷新一次（模拟薪资随机波动）。
 */
export const Polling: Story = {
  render: () => {
    const pollingRequest = async (params: ProTableRequestParams): Promise<ProTableRequestResult<User>> => {
      await new Promise(resolve => setTimeout(resolve, 300))
      const data = mockUsers.slice(0, 10).map(u => ({
        ...u,
        salary: u.salary + Math.floor(Math.random() * 1000 - 500),
      }))
      const start = (params.current - 1) * params.pageSize
      return {
        data: data.slice(start, start + params.pageSize),
        total: data.length,
        success: true,
      }
    }
    const columns: ProTableColumn<User>[] = [
      { title: 'ID', dataIndex: 'id', width: 60 },
      { title: '姓名', dataIndex: 'name', width: 100 },
      { title: '部门', dataIndex: 'department', width: 120 },
      { title: '薪资（实时）', dataIndex: 'salary', width: 140, valueType: 'money' },
      { title: '状态', dataIndex: 'status', width: 100 },
    ]
    return (
      <div className="w-full min-w-[700px]">
        <ProTable<User>
          columns={columns}
          request={pollingRequest}
          polling={3000}
          toolbar
          defaultPageSize={5}
        />
      </div>
    )
  },
}

/**
 * 手动触发请求
 *
 * 设置 manualRequest 为 true 后，组件不会在挂载时自动请求数据。
 * 需要用户通过搜索或刷新按钮手动触发第一次请求。
 * 适用于需要先填写筛选条件再查询的场景。
 */
export const ManualRequest: Story = {
  render: () => (
    <div className="w-full min-w-[700px]">
      <ProTable<User>
        columns={baseColumns}
        request={mockRequest}
        manualRequest
        search
        toolbar
        defaultPageSize={5}
      />
    </div>
  ),
}

/**
 * 搜索栏折叠
 *
 * 通过 search={{ defaultCollapsed: true }} 初始折叠搜索栏，
 * 节省页面空间。用户可展开后输入搜索关键词。
 */
export const SearchCollapsed: Story = {
  render: () => (
    <div className="w-full min-w-[700px]">
      <ProTable<User>
        columns={baseColumns}
        request={mockRequest}
        search={{ defaultCollapsed: true }}
        toolbar
        defaultPageSize={5}
      />
    </div>
  ),
}

/**
 * 自定义工具栏操作
 *
 * 通过 toolbar.actions 数组注入自定义操作按钮，
 * 如新增、批量删除、导出等。操作按钮显示在工具栏右侧，
 * 与刷新和列设置按钮并排。
 */
export const CustomActions: Story = {
  render: () => (
    <div className="w-full min-w-[700px]">
      <ProTable<User>
        columns={baseColumns}
        request={mockRequest}
        search
        toolbar={{
          actions: [
            <button key="export" type="button" className="text-sm px-3 py-1 rounded border border-border hover:bg-muted">
              导出
            </button>,
            <button key="batch-delete" type="button" className="text-sm px-3 py-1 rounded border border-border hover:bg-muted text-danger-500">
              批量删除
            </button>,
            <button key="add" type="button" className="text-sm px-3 py-1 rounded bg-primary-500 text-white hover:bg-primary-600">
              新增用户
            </button>,
          ],
        }}
        defaultPageSize={5}
      />
    </div>
  ),
}

/**
 * 与基础 Table 对比
 *
 * 同样的用户管理场景，分别用 Table（左）和 ProTable（右）实现。
 *
 * Table 需要手动管理 loading、分页、搜索过滤、列配置等状态，代码量约 80-120 行。
 * ProTable 通过 request + search + toolbar 三行配置即可实现同等效果，代码量约 20-30 行。
 *
 * 如果需要虚拟滚动、固定列、行选择、展开行等底层能力，请使用 Table。
 */
export const ComparisonWithTable: Story = {
  render: () => {
    const columns: ProTableColumn<User>[] = [
      { title: 'ID', dataIndex: 'id', width: 60, sorter: true },
      { title: '姓名', dataIndex: 'name', width: 100 },
      { title: '部门', dataIndex: 'department', width: 120, filters: [
        { text: '技术部', value: '技术部' },
        { text: '产品部', value: '产品部' },
      ]},
      { title: '薪资', dataIndex: 'salary', width: 120, valueType: 'money', sorter: true },
      { title: '状态', dataIndex: 'status', width: 100 },
    ]
    return (
      <div className="w-full min-w-[700px]">
        <div className="mb-2 text-sm text-muted-foreground">
          ProTable 模式：request + search + toolbar 即可覆盖搜索/分页/刷新/列配置场景
        </div>
        <ProTable<User>
          columns={columns}
          request={mockRequest}
          search
          toolbar={{ actions: [<button key="add" type="button" className="text-sm text-primary-500 hover:text-primary-600">+ 新增</button>] }}
          defaultPageSize={5}
        />
      </div>
    )
  },
}
