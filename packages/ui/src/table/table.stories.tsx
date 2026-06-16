import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { Table } from './index'
import { Tag } from '../tag/index'
import { Button } from '../button/index'
import { Avatar } from '../avatar/index'
import { Progress } from '../progress/index'
import { Switch } from '../switch/index'
import type { ColumnType, TableSize, SortOrder, RowSelectionConfig, CellProps } from './types'
import { useState } from 'react'

const meta: Meta<typeof Table> = {
  title: '数据展示/Table 表格',
  component: Table,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    actions: {
      argTypesRegex: '^on.*',
    },
    docs: {
      description: {
        component: [
          '表格用于展示结构化数据，支持排序、筛选、分页、行选择等高级功能。适用于数据管理、信息展示、后台列表等场景，内置虚拟滚动可流畅渲染万级数据。',
          '',
          '### 与 ProTable 的区别',
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
          '| 虚拟滚动 | react-virtuoso（内置） | 通过 Table 继承 |',
          '| 固定列/展开行/行选择 | 完整支持 | 通过 Table 继承 |',
          '',
          '**选型建议**：需要虚拟滚动、固定列、展开行、行选择等底层能力时用 Table；中后台列表页（搜索 + 分页 + 筛选 + 工具栏）用 ProTable。',
        ].join('\n'),
      },
    },
  },
  args: {
    onRow: fn(),
  },
  argTypes: {
    columns: {
      control: 'object',
      description: '列配置数组，定义每列的标题、数据字段、宽度等',
    },
    dataSource: {
      control: 'object',
      description: '数据源数组，表格渲染的数据',
    },
    bordered: {
      control: 'boolean',
      description: '是否显示边框',
    },
    loading: {
      control: 'boolean',
      description: '是否显示加载状态',
    },
    tableSize: {
      control: 'radio',
      options: ['default', 'middle', 'small'],
      description: '表格尺寸：default 默认、middle 中等、small 紧凑',
    },
    rowSelection: {
      control: 'object',
      description: '行选择配置，支持 checkbox 和 radio 两种选择模式',
    },
  },
}

export default meta
type Story = StoryObj<typeof Table>

/** 用户数据接口 */
interface User {
  id: number
  name: string
  email: string
  department: string
  role: string
  status: 'active' | 'inactive' | 'pending'
  joinDate: string
  avatar: string
  progress: number
}

/** 订单数据接口 */
interface Order {
  id: string
  customer: string
  product: string
  amount: number
  status: 'completed' | 'processing' | 'cancelled' | 'pending'
  createTime: string
  paymentMethod: string
}

/** 产品数据接口 */
interface Product {
  id: number
  name: string
  category: string
  price: number
  stock: number
  sales: number
  rating: number
  status: 'on-sale' | 'off-sale' | 'sold-out'
}

// ==================== 数据生成 ====================

/** 生成大量用户数据（展示虚拟滚动） */
function generateUsers(count: number): User[] {
  const departments = ['技术部', '产品部', '设计部', '运营部', '市场部', '财务部', '人事部']
  const roles = ['工程师', '设计师', '产品经理', '运营专员', '市场经理', '财务专员', 'HR']
  const statuses: User['status'][] = ['active', 'inactive', 'pending']

  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    name: `用户${i + 1}`,
    email: `user${i + 1}@example.com`,
    department: departments[i % departments.length],
    role: roles[i % roles.length],
    status: statuses[i % 3],
    joinDate: `2024-${String((i % 12) + 1).padStart(2, '0')}-${String((i % 28) + 1).padStart(2, '0')}`,
    avatar: `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Crect fill='%23e5e7eb' width='40' height='40' rx='20'/%3E%3Ctext fill='%236b7280' font-family='sans-serif' font-size='16' x='50%25' y='55%25' dominant-baseline='middle' text-anchor='middle'%3E${String.fromCharCode(65 + (i % 26))}%3C/text%3E%3C/svg%3E`,
    progress: Math.floor(Math.random() * 100),
  })) as User[]
}

/** 生成订单数据 */
const orders: Order[] = [
  { id: 'ORD-001', customer: '张三', product: 'MacBook Pro', amount: 12999, status: 'completed', createTime: '2024-01-15 10:30', paymentMethod: '支付宝' },
  { id: 'ORD-002', customer: '李四', product: 'iPhone 15 Pro', amount: 8999, status: 'processing', createTime: '2024-01-15 11:20', paymentMethod: '微信支付' },
  { id: 'ORD-003', customer: '王五', product: 'AirPods Pro', amount: 1999, status: 'pending', createTime: '2024-01-15 12:00', paymentMethod: '信用卡' },
  { id: 'ORD-004', customer: '赵六', product: 'iPad Air', amount: 4599, status: 'cancelled', createTime: '2024-01-15 13:30', paymentMethod: '支付宝' },
  { id: 'ORD-005', customer: '钱七', product: 'Apple Watch', amount: 2999, status: 'completed', createTime: '2024-01-15 14:00', paymentMethod: '微信支付' },
  { id: 'ORD-006', customer: '孙八', product: 'Magic Keyboard', amount: 999, status: 'processing', createTime: '2024-01-15 15:20', paymentMethod: '支付宝' },
  { id: 'ORD-007', customer: '周九', product: 'Studio Display', amount: 11499, status: 'pending', createTime: '2024-01-15 16:00', paymentMethod: '信用卡' },
  { id: 'ORD-008', customer: '吴十', product: 'Mac Mini', amount: 4499, status: 'completed', createTime: '2024-01-15 17:30', paymentMethod: '微信支付' },
]

/** 生成产品数据 */
const products: Product[] = [
  { id: 1, name: 'MacBook Pro 14寸', category: '电脑', price: 14999, stock: 50, sales: 128, rating: 4.8, status: 'on-sale' },
  { id: 2, name: 'iPhone 15 Pro Max', category: '手机', price: 9999, stock: 100, sales: 256, rating: 4.9, status: 'on-sale' },
  { id: 3, name: 'AirPods Pro 2', category: '配件', price: 1899, stock: 200, sales: 512, rating: 4.7, status: 'on-sale' },
  { id: 4, name: 'iPad Pro 12.9寸', category: '平板', price: 8999, stock: 30, sales: 64, rating: 4.6, status: 'off-sale' },
  { id: 5, name: 'Apple Watch Ultra', category: '穿戴', price: 6299, stock: 0, sales: 32, rating: 4.5, status: 'sold-out' },
  { id: 6, name: 'Studio Display', category: '显示器', price: 11499, stock: 20, sales: 16, rating: 4.4, status: 'on-sale' },
  { id: 7, name: 'Mac Studio', category: '电脑', price: 14999, stock: 15, sales: 8, rating: 4.8, status: 'on-sale' },
  { id: 8, name: 'Magic Keyboard', category: '配件', price: 999, stock: 300, sales: 1024, rating: 4.3, status: 'on-sale' },
]

// ==================== 状态样式映射 ====================

const statusColors: Record<string, 'success' | 'warning' | 'danger' | 'primary'> = {
  active: 'success',
  completed: 'success',
  'on-sale': 'success',
  inactive: 'warning',
  pending: 'warning',
  processing: 'primary',
  cancelled: 'danger',
  'sold-out': 'danger',
  'off-sale': 'warning',
}

const statusText: Record<string, string> = {
  active: '活跃',
  inactive: '离线',
  pending: '待审核',
  completed: '已完成',
  processing: '处理中',
  cancelled: '已取消',
  'on-sale': '在售',
  'off-sale': '下架',
  'sold-out': '售罄',
}

// ==================== 列定义 ====================

const userColumns: ColumnType<unknown>[] = [
  { title: 'ID', dataIndex: 'id', key: 'id', width: 80, align: 'center' },
  {
    title: '用户',
    key: 'user',
    width: 200,
    render: (_, record) => {
      const user = record as User
      return (
        <div className="flex items-center gap-2">
          <Avatar src={user.avatar} alt={user.name} />
          <div>
            <div className="font-medium">{user.name}</div>
            <div className="text-xs text-gray-500">{user.email}</div>
          </div>
        </div>
      )
    },
  },
  { title: '部门', dataIndex: 'department', key: 'department', width: 120 },
  { title: '角色', dataIndex: 'role', key: 'role', width: 120 },
  {
    title: '状态',
    dataIndex: 'status',
    key: 'status',
    width: 100,
    align: 'center',
    render: (_, record) => {
      const user = record as User
      return <Tag variant={statusColors[user.status]}>{statusText[user.status]}</Tag>
    },
  },
  { title: '入职日期', dataIndex: 'joinDate', key: 'joinDate', width: 120 },
  {
    title: '任务进度',
    dataIndex: 'progress',
    key: 'progress',
    width: 150,
    render: (_, record) => {
      const user = record as User
      return <Progress percent={user.progress} />
    },
  },
]

const orderColumns: ColumnType<unknown>[] = [
  { title: '订单号', dataIndex: 'id', key: 'id', width: 120, fixed: 'left' },
  { title: '客户', dataIndex: 'customer', key: 'customer', width: 100, fixed: 'left' },
  { title: '商品', dataIndex: 'product', key: 'product', width: 180, ellipsis: true },
  {
    title: '金额',
    dataIndex: 'amount',
    key: 'amount',
    width: 120,
    align: 'right',
    sorter: true,
    render: (_, record) => {
      const order = record as Order
      return <span className="font-medium">¥{order.amount.toLocaleString()}</span>
    },
  },
  {
    title: '状态',
    dataIndex: 'status',
    key: 'status',
    width: 100,
    align: 'center',
    render: (_, record) => {
      const order = record as Order
      return <Tag variant={statusColors[order.status]}>{statusText[order.status]}</Tag>
    },
  },
  { title: '支付方式', dataIndex: 'paymentMethod', key: 'paymentMethod', width: 100 },
  { title: '创建时间', dataIndex: 'createTime', key: 'createTime', width: 160 },
  {
    title: '操作',
    key: 'action',
    width: 150,
    fixed: 'right',
    render: () => (
      <div className="flex gap-1">
        <Button variant="primary">查看</Button>
        <Button variant="default">编辑</Button>
      </div>
    ),
  },
]

const productColumns: ColumnType<unknown>[] = [
  { title: 'ID', dataIndex: 'id', key: 'id', width: 60, align: 'center' },
  { title: '商品名称', dataIndex: 'name', key: 'name', width: 200, ellipsis: true },
  { title: '分类', dataIndex: 'category', key: 'category', width: 80 },
  {
    title: '价格',
    dataIndex: 'price',
    key: 'price',
    width: 100,
    align: 'right',
    sorter: true,
    render: (_, record) => {
      const product = record as Product
      return <span className="text-danger-500 font-medium">¥{product.price.toLocaleString()}</span>
    },
  },
  {
    title: '库存',
    dataIndex: 'stock',
    key: 'stock',
    width: 80,
    align: 'center',
    sorter: true,
    render: (_, record) => {
      const product = record as Product
      const color = product.stock === 0 ? 'text-danger-500' : product.stock < 50 ? 'text-warning-500' : 'text-success-500'
      return <span className={color}>{product.stock}</span>
    },
  },
  {
    title: '销量',
    dataIndex: 'sales',
    key: 'sales',
    width: 80,
    align: 'center',
    sorter: true,
  },
  {
    title: '评分',
    dataIndex: 'rating',
    key: 'rating',
    width: 100,
    align: 'center',
    render: (_, record) => {
      const product = record as Product
      return (
        <span className="flex items-center gap-1">
          <span className="text-warning-500">收藏</span>
          {product.rating}
        </span>
      )
    },
  },
  {
    title: '状态',
    dataIndex: 'status',
    key: 'status',
    width: 80,
    align: 'center',
    render: (_, record) => {
      const product = record as Product
      return <Tag variant={statusColors[product.status]}>{statusText[product.status]}</Tag>
    },
  },
  {
    title: '上架',
    key: 'switch',
    width: 80,
    align: 'center',
    render: (_, record) => {
      const product = record as Product
      return <Switch checked={product.status === 'on-sale'} disabled={product.status === 'sold-out'} />
    },
  },
]

// ==================== Named action references (avoid re-creating fn() on each render) ====================

const largeDataOnChangeAction = fn()
const largeDataOnSortAction = fn()
const checkboxOnChangeAction = fn()
const radioOnChangeAction = fn()
const sorterOnSortAction = fn()
const userMgmtOnChangeAction = fn()
const productMgmtOnChangeAction = fn()
const rowClickAction = fn()
const rowHoverAction = fn()

// ==================== Stories ====================

/** 基础表格 */
export const Basic: Story = {
  render: () => (
    <div className="w-full min-w-[600px]">
      <Table
        columns={userColumns.slice(0, 4)}
        dataSource={generateUsers(5)}
        rowKey="id"
        height={300}
      />
    </div>
  ),
}

/** 大数据量虚拟滚动（500行） */
export const VirtualScroll: Story = {
  render: () => (
    <div className="w-full min-w-[900px]">
      <Table
        columns={userColumns}
        dataSource={generateUsers(500)}
        rowKey="id"
        height={500}
        bordered
      />
    </div>
  ),
}

/** 万级数据虚拟滚动 - 展示性能 */
export const MillionRows: Story = {
  render: () => {
    const [dataSource] = useState(() => generateUsers(5000))

    return (
      <div className="w-full min-w-[900px] space-y-3">
        <div className="flex items-center justify-between px-1">
          <div className="space-y-1">
            <div className="text-lg font-semibold text-gray-900">万级数据表格</div>
            <div className="text-sm text-gray-500">
              总数据量：<span className="font-mono font-medium text-primary-600">{dataSource.length.toLocaleString()}</span> 行
              {' | '}
              渲染方式：<span className="text-success-600">虚拟滚动</span>
              {' | '}
              实际 DOM 节点：仅视口内约 <span className="font-mono">20</span> 行
            </div>
          </div>
          <div className="text-right">
            <div className="text-xs text-gray-400">基于 react-virtuoso</div>
            <div className="text-xs text-gray-400">滚动流畅无卡顿</div>
          </div>
        </div>
        <Table
          columns={userColumns}
          dataSource={dataSource}
          rowKey="id"
          height={600}
          bordered
          pagination={false}
        />
        <div className="text-xs text-gray-400 px-1">
          提示：无分页，直接使用鼠标滚轮或拖拽滚动条浏览全部 {dataSource.length.toLocaleString()} 行数据
        </div>
      </div>
    )
  },
}

/** 万级数据 + 行选择 + 排序 */
export const LargeDataWithFeatures: Story = {
  render: () => {
    const [dataSource] = useState(() => generateUsers(5000))
    const [selectedKeys, setSelectedKeys] = useState<(string | number)[]>([])
    const [sortField, setSortField] = useState<string>()
    const [sortOrder, setSortOrder] = useState<SortOrder>()

    const rowSelection: RowSelectionConfig<unknown> = {
      type: 'checkbox',
      selectedRowKeys: selectedKeys,
      onChange: (keys, rows) => {
        largeDataOnChangeAction(keys, rows)
        setSelectedKeys(keys)
      },
    }

    return (
      <div className="w-full min-w-[900px] space-y-3">
        <div className="flex items-center justify-between px-1">
          <div>
            <div className="text-lg font-semibold text-gray-900">万级数据 + 完整功能</div>
            <div className="text-sm text-gray-500">
              数据量：<span className="font-mono font-medium text-primary-600">{dataSource.length.toLocaleString()}</span> 行
              {' | '}
              已选择：<span className="font-mono">{selectedKeys.length}</span> 行
              {sortField && ` | 当前排序：${sortField} ${sortOrder || ''}`}
            </div>
          </div>
        </div>
        <Table
          columns={userColumns}
          dataSource={dataSource}
          rowKey="id"
          height={500}
          bordered
          pagination={false}
          rowSelection={rowSelection}
          sorter={{
            field: sortField,
            order: sortOrder,
            onChange: (field, order) => {
              largeDataOnSortAction(field, order)
              setSortField(field)
              setSortOrder(order)
            },
          }}
        />
      </div>
    )
  },
}

/** 行选择 - Checkbox */
export const RowSelectionCheckbox: Story = {
  render: () => {
    const [selectedKeys, setSelectedKeys] = useState<(string | number)[]>([])
    const rowSelection: RowSelectionConfig<unknown> = {
      type: 'checkbox',
      selectedRowKeys: selectedKeys,
      onChange: (keys, rows) => {
        checkboxOnChangeAction(keys, rows)
        setSelectedKeys(keys)
      },
    }

    return (
      <div className="w-full min-w-[700px] space-y-2">
        <div className="text-sm text-gray-500">
          已选择 {selectedKeys.length} 项
        </div>
        <Table
          columns={userColumns.slice(0, 5)}
          dataSource={generateUsers(20)}
          rowKey="id"
          height={400}
          rowSelection={rowSelection}
          bordered
        />
      </div>
    )
  },
}

/** 行选择 - Radio */
export const RowSelectionRadio: Story = {
  render: () => {
    const [selectedKey, setSelectedKey] = useState<string | number>()
    const rowSelection: RowSelectionConfig<unknown> = {
      type: 'radio',
      selectedRowKeys: selectedKey ? [selectedKey] : [],
      onChange: (keys, rows) => {
        radioOnChangeAction(keys, rows)
        setSelectedKey(keys[0])
      },
    }

    return (
      <div className="w-full min-w-[700px] space-y-2">
        <div className="text-sm text-gray-500">
          当前选择：{selectedKey || '无'}
        </div>
        <Table
          columns={userColumns.slice(0, 5)}
          dataSource={generateUsers(10)}
          rowKey="id"
          height={300}
          rowSelection={rowSelection}
          bordered
        />
      </div>
    )
  },
}

/** 排序功能 */
export const WithSorter: Story = {
  render: () => {
    const [sortField, setSortField] = useState<string>()
    const [sortOrder, setSortOrder] = useState<SortOrder>()

    return (
      <div className="w-full min-w-[700px] space-y-2">
        <div className="text-sm text-gray-500">
          排序：{sortField ? `${sortField} ${sortOrder || '无序'}` : '无'}
        </div>
        <Table
          columns={orderColumns.filter(c => c.key !== 'action')}
          dataSource={orders}
          rowKey="id"
          height={350}
          bordered
          sorter={{
            field: sortField,
            order: sortOrder,
            onChange: (field, order) => {
              sorterOnSortAction(field, order)
              setSortField(field)
              setSortOrder(order)
            },
          }}
        />
      </div>
    )
  },
}

/** 固定列 */
export const FixedColumns: Story = {
  render: () => (
    <div className="w-full min-w-[800px]">
      <Table
        columns={orderColumns}
        dataSource={orders}
        rowKey="id"
        height={350}
        bordered
      />
    </div>
  ),
}

/** 复杂业务场景 - 用户管理 */
export const UserManagement: Story = {
  render: () => {
    const [selectedKeys, setSelectedKeys] = useState<(string | number)[]>([])
    const rowSelection: RowSelectionConfig<unknown> = {
      type: 'checkbox',
      selectedRowKeys: selectedKeys,
      onChange: (keys, rows) => {
        userMgmtOnChangeAction(keys, rows)
        setSelectedKeys(keys)
      },
      getCheckboxProps: (record) => {
        const user = record as User
        return { disabled: user.status === 'inactive' }
      },
    }

    return (
      <div className="w-full min-w-[900px] space-y-3">
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-500">
            已选择 {selectedKeys.length} 项
          </div>
          <div className="flex gap-2">
            <Button variant="primary">批量导出</Button>
            <Button variant="primary" className="bg-danger-500 hover:bg-danger-600">批量删除</Button>
          </div>
        </div>
        <Table
          columns={userColumns}
          dataSource={generateUsers(50)}
          rowKey="id"
          height={500}
          bordered
          rowSelection={rowSelection}
          rowClassName={(record) => {
            const user = record as User
            return user.status === 'inactive' ? 'opacity-50' : ''
          }}
        />
      </div>
    )
  },
}

/** 复杂业务场景 - 订单列表 */
export const OrderList: Story = {
  render: () => (
    <div className="w-full min-w-[800px]">
      <Table
        columns={orderColumns}
        dataSource={orders}
        rowKey="id"
        height={400}
        bordered
        rowClassName={(record) => {
          const order = record as Order
          return order.status === 'cancelled' ? 'bg-gray-50' : ''
        }}
      />
    </div>
  ),
}

/** 复杂业务场景 - 商品管理 */
export const ProductManagement: Story = {
  render: () => {
    const [selectedKeys, setSelectedKeys] = useState<(string | number)[]>([])
    const rowSelection: RowSelectionConfig<unknown> = {
      type: 'checkbox',
      selectedRowKeys: selectedKeys,
      onChange: (keys, rows) => {
        productMgmtOnChangeAction(keys, rows)
        setSelectedKeys(keys)
      },
    }

    return (
      <div className="w-full min-w-[900px] space-y-3">
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-500">
            已选择 {selectedKeys.length} 项
          </div>
          <div className="flex gap-2">
            <Button variant="primary">新增商品</Button>
            <Button variant="default">批量上架</Button>
            <Button variant="default">批量下架</Button>
          </div>
        </div>
        <Table
          columns={productColumns}
          dataSource={products}
          rowKey="id"
          height={400}
          bordered
          rowSelection={rowSelection}
        />
      </div>
    )
  },
}

/** 不同尺寸 */
export const Sizes: Story = {
  render: () => {
    const sizes: TableSize[] = ['default', 'middle', 'small']
    const sizeLabels = { default: '默认', middle: '中等', small: '紧凑' }

    return (
      <div className="w-full min-w-[600px] space-y-4">
        {sizes.map((size) => (
          <div key={size}>
            <div className="text-sm font-medium mb-2">{sizeLabels[size]}</div>
            <Table
              columns={userColumns.slice(0, 4)}
              dataSource={generateUsers(3)}
              rowKey="id"
              height={size === 'small' ? 150 : size === 'middle' ? 180 : 200}
              tableSize={size}
              bordered
            />
          </div>
        ))}
      </div>
    )
  },
}

/** 加载状态 */
export const Loading: Story = {
  render: () => (
    <div className="w-full min-w-[900px]">
      <Table
        columns={userColumns}
        dataSource={generateUsers(10)}
        rowKey="id"
        height={400}
        loading
        bordered
      />
    </div>
  ),
}

/** 空数据 */
export const Empty: Story = {
  render: () => (
    <div className="w-full min-w-[600px]">
      <Table
        columns={userColumns}
        dataSource={[]}
        rowKey="id"
        height={300}
        emptyText="暂无用户数据"
        bordered
      />
    </div>
  ),
}

/** 自定义空数据提示 */
export const CustomEmpty: Story = {
  render: () => (
    <div className="w-full min-w-[600px]">
      <Table
        columns={userColumns}
        dataSource={[]}
        rowKey="id"
        height={300}
        emptyText={
          <div className="text-center py-8">
            <div className="text-gray-400 mb-2">没有找到相关数据</div>
            <Button variant="primary">添加用户</Button>
          </div>
        }
        bordered
      />
    </div>
  ),
}

/** 边框样式 */
export const Bordered: Story = {
  render: () => (
    <div className="w-full min-w-[700px]">
      <Table
        columns={userColumns.slice(0, 5)}
        dataSource={generateUsers(5)}
        rowKey="id"
        height={300}
        bordered
      />
    </div>
  ),
}

/** 无表头 */
export const NoHeader: Story = {
  render: () => (
    <div className="w-full min-w-[600px]">
      <Table
        columns={userColumns.slice(0, 4)}
        dataSource={generateUsers(5)}
        rowKey="id"
        height={250}
        showHeader={false}
        bordered
      />
    </div>
  ),
}

/** 行事件交互 */
export const RowEvents: Story = {
  render: () => {
    const [clickedRow, setClickedRow] = useState<string>()
    const [hoveredRow, setHoveredRow] = useState<string>()

    return (
      <div className="w-full min-w-[600px] space-y-2">
        <div className="text-sm text-gray-500">
          点击：{clickedRow || '无'} | 悬停：{hoveredRow || '无'}
        </div>
        <Table
          columns={userColumns.slice(0, 4)}
          dataSource={generateUsers(10)}
          rowKey="id"
          height={350}
          bordered
          onRow={(record) => {
            const user = record as User
            return {
              onClick: () => {
                rowClickAction('onClick', record)
                setClickedRow(`用户${user.id}`)
              },
              onMouseEnter: () => {
                rowHoverAction('onMouseEnter', record)
                setHoveredRow(`用户${user.id}`)
              },
              onMouseLeave: () => {
                rowHoverAction('onMouseLeave', record)
                setHoveredRow(undefined)
              },
            }
          }}
          rowClassName={(record) => {
            const user = record as User
            return hoveredRow === `用户${user.id}` ? 'bg-primary-50' : ''
          }}
        />
      </div>
    )
  },
}

/** 单元格省略 */
export const Ellipsis: Story = {
  render: () => (
    <div className="w-full min-w-[500px]">
      <Table
        columns={[
          { title: 'ID', dataIndex: 'id', key: 'id', width: 60 },
          { title: '商品名称（超长文本省略）', dataIndex: 'name', key: 'name', width: 150, ellipsis: true },
          { title: '详细描述（超长文本省略）', dataIndex: 'description', key: 'description', ellipsis: true },
        ]}
        dataSource={[
          { id: 1, name: '这是一段非常长的商品名称用于测试省略功能显示效果', description: '这是一段非常长的详细描述文本用于测试省略功能在实际场景中的显示效果，通常会包含很多信息' },
          { id: 2, name: 'MacBook Pro 14寸 M3 Pro芯片', description: '全新MacBook Pro配备M3 Pro芯片，性能强劲，续航持久' },
          { id: 3, name: 'iPhone 15 Pro Max 256GB', description: 'iPhone 15 Pro Max采用钛金属设计，A17 Pro芯片，专业级摄像头系统' },
        ]}
        rowKey="id"
        height={200}
        bordered
      />
    </div>
  ),
}

/** 列筛选 */
export const WithFilter: Story = {
  render: () => {
    const filterColumns: ColumnType<unknown>[] = [
      { title: 'ID', dataIndex: 'id', key: 'id', width: 80, align: 'center' },
      { title: '商品名称', dataIndex: 'name', key: 'name', width: 200, ellipsis: true },
      {
        title: '分类',
        dataIndex: 'category',
        key: 'category',
        width: 100,
        filters: [
          { text: '电脑', value: '电脑' },
          { text: '手机', value: '手机' },
          { text: '配件', value: '配件' },
          { text: '平板', value: '平板' },
          { text: '穿戴', value: '穿戴' },
          { text: '显示器', value: '显示器' },
        ],
        onFilter: (value, record) => (record as Product).category === value,
      },
      {
        title: '状态',
        dataIndex: 'status',
        key: 'status',
        width: 100,
        align: 'center',
        filters: [
          { text: '在售', value: 'on-sale' },
          { text: '下架', value: 'off-sale' },
          { text: '售罄', value: 'sold-out' },
        ],
        onFilter: (value, record) => (record as Product).status === value,
        render: (_, record) => {
          const product = record as Product
          return <Tag variant={statusColors[product.status]}>{statusText[product.status]}</Tag>
        },
      },
      {
        title: '价格',
        dataIndex: 'price',
        key: 'price',
        width: 100,
        align: 'right',
        render: (_, record) => {
          const product = record as Product
          return <span className="text-danger-500 font-medium">¥{product.price.toLocaleString()}</span>
        },
      },
    ]

    return (
      <div className="w-full min-w-[700px]">
        <Table
          columns={filterColumns}
          dataSource={products}
          rowKey="id"
          height={350}
          bordered
        />
      </div>
    )
  },
}

/** 可展开行 */
export const ExpandableRow: Story = {
  render: () => {
    const expandableColumns: ColumnType<unknown>[] = [
      { title: '订单号', dataIndex: 'id', key: 'id', width: 120 },
      { title: '客户', dataIndex: 'customer', key: 'customer', width: 100 },
      { title: '商品', dataIndex: 'product', key: 'product', width: 180 },
      {
        title: '金额',
        dataIndex: 'amount',
        key: 'amount',
        width: 120,
        align: 'right',
        render: (_, record) => {
          const order = record as Order
          return <span className="font-medium">¥{order.amount.toLocaleString()}</span>
        },
      },
      {
        title: '状态',
        dataIndex: 'status',
        key: 'status',
        width: 100,
        align: 'center',
        render: (_, record) => {
          const order = record as Order
          return <Tag variant={statusColors[order.status]}>{statusText[order.status]}</Tag>
        },
      },
    ]

    return (
      <div className="w-full min-w-[700px]">
        <Table
          columns={expandableColumns}
          dataSource={orders}
          rowKey="id"
          height={400}
          bordered
          expandable={{
            expandedRowRender: (record) => {
              const order = record as Order
              return (
                <div className="p-2 space-y-1 text-sm text-gray-600">
                  <p>支付方式：{order.paymentMethod}</p>
                  <p>创建时间：{order.createTime}</p>
                  <p>订单金额：¥{order.amount.toLocaleString()}</p>
                </div>
              )
            },
          }}
        />
      </div>
    )
  },
}

/** 合并单元格 */
export const MergedCells: Story = {
  render: () => {
    const mergedColumns: ColumnType<unknown>[] = [
      { title: '姓名', dataIndex: 'name', key: 'name', width: 120 },
      { title: '年龄', dataIndex: 'age', key: 'age', width: 80, align: 'center' },
      { title: '住址', dataIndex: 'address', key: 'address' },
    ]

    const mergedData = [
      { id: 1, name: '张三', age: 32, address: '北京市朝阳区望京路1号' },
      { id: 2, name: '张三', age: 32, address: '北京市海淀区中关村路2号' },
      { id: 3, name: '李四', age: 28, address: '上海市浦东新区世纪大道3号' },
      { id: 4, name: '李四', age: 28, address: '上海市徐汇区漕河泾4号' },
      { id: 5, name: '王五', age: 35, address: '广州市天河区天河路5号' },
    ]

    return (
      <div className="w-full min-w-[600px] space-y-2">
        <div className="text-sm text-gray-500">
          通过 onCell 返回 rowSpan/colSpan 实现单元格合并
        </div>
        <Table
          columns={mergedColumns.map((col) => {
            if (col.key === 'name') {
              return {
                ...col,
                onCell: (_record: unknown, index?: number) => {
                  const idx = index ?? 0
                  if (idx > 0 && mergedData[idx]!.name === mergedData[idx - 1]!.name) {
                    return { rowSpan: 0 } as CellProps
                  }
                  let span = 1
                  for (let i = idx + 1; i < mergedData.length && mergedData[i]!.name === mergedData[idx]!.name; i++) {
                    span++
                  }
                  return { rowSpan: span } as CellProps
                },
              }
            }
            if (col.key === 'age') {
              return {
                ...col,
                onCell: (_record: unknown, index?: number) => {
                  const idx = index ?? 0
                  if (idx > 0 && mergedData[idx]!.name === mergedData[idx - 1]!.name) {
                    return { rowSpan: 0 } as CellProps
                  }
                  let span = 1
                  for (let i = idx + 1; i < mergedData.length && mergedData[i]!.name === mergedData[idx]!.name; i++) {
                    span++
                  }
                  return { rowSpan: span } as CellProps
                },
              }
            }
            return col
          })}
          dataSource={mergedData}
          rowKey="id"
          height={300}
          bordered
        />
      </div>
    )
  },
}