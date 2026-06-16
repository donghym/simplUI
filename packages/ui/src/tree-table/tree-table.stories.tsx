import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { TreeTable } from './index'
import type { TreeTableColumn } from './types'

const meta: Meta<typeof TreeTable> = {
  title: '数据展示/TreeTable 树形表格',
  component: TreeTable,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    bordered: {
      control: 'boolean',
      description: '是否显示边框',
    },
    expandRowByClick: {
      control: 'boolean',
      description: '点击行是否展开/收起',
    },
    defaultExpandAll: {
      control: 'boolean',
      description: '默认展开所有节点',
    },
  },
}

export default meta
type Story = StoryObj<typeof TreeTable>

/** 部门数据接口 */
interface Dept {
  [key: string]: unknown
  key: string
  name: string
  manager: string
  count: number
  status: string
  children?: Dept[]
}

/** 示例列配置 */
const columns: TreeTableColumn<Record<string, unknown>>[] = [
  { title: '部门名称', dataIndex: 'name', width: 240 },
  { title: '负责人', dataIndex: 'manager', width: 120 },
  { title: '人数', dataIndex: 'count', width: 80 },
  { title: '状态', dataIndex: 'status' },
]

/** 示例树形数据 */
const treeData: Dept[] = [
  {
    key: '1',
    name: '技术中心',
    manager: '张三',
    count: 120,
    status: '正常',
    children: [
      {
        key: '1-1',
        name: '前端组',
        manager: '李四',
        count: 40,
        status: '正常',
        children: [
          { key: '1-1-1', name: 'Web 团队', manager: '王五', count: 20, status: '正常' },
          { key: '1-1-2', name: '移动端团队', manager: '赵六', count: 20, status: '正常' },
        ],
      },
      {
        key: '1-2',
        name: '后端组',
        manager: '孙七',
        count: 50,
        status: '正常',
        children: [
          { key: '1-2-1', name: 'Java 团队', manager: '周八', count: 30, status: '正常' },
          { key: '1-2-2', name: 'Go 团队', manager: '吴九', count: 20, status: '扩招中' },
        ],
      },
      { key: '1-3', name: '测试组', manager: '郑十', count: 30, status: '正常' },
    ],
  },
  {
    key: '2',
    name: '产品中心',
    manager: '钱一',
    count: 60,
    status: '正常',
    children: [
      { key: '2-1', name: '产品设计组', manager: '陈二', count: 30, status: '正常' },
      { key: '2-2', name: '用户研究组', manager: '林三', count: 30, status: '正常' },
    ],
  },
]

/** 基础树形表格 */
export const Default: Story = {
  args: {
    columns,
    dataSource: treeData,
    rowKey: 'key',
    bordered: true,
  },
}

/** 默认展开所有 */
export const ExpandAll: Story = {
  args: {
    columns,
    dataSource: treeData,
    rowKey: 'key',
    defaultExpandAll: true,
  },
}

/** 带勾选联动 */
export const WithCheckbox: Story = {
  render: () => {
    const [selectedKeys, setSelectedKeys] = useState<(string | number)[]>([])
    return (
      <div className="space-y-4">
        <p className="text-sm text-muted-foreground">
          已选中：{selectedKeys.join(', ') || '无'}
        </p>
        <TreeTable
          columns={columns}
          dataSource={treeData}
          rowKey="key"
          defaultExpandAll
          rowSelection={{
            type: 'checkbox',
            selectedRowKeys: selectedKeys,
            onChange: (keys) => setSelectedKeys(keys),
          }}
        />
      </div>
    )
  },
}

/** 勾选不联动（checkStrictly） */
export const CheckStrictly: Story = {
  render: () => {
    const [selectedKeys, setSelectedKeys] = useState<(string | number)[]>([])
    return (
      <div className="space-y-4">
        <p className="text-sm text-muted-foreground">
          已选中：{selectedKeys.join(', ') || '无'}
        </p>
        <TreeTable
          columns={columns}
          dataSource={treeData}
          rowKey="key"
          defaultExpandAll
          rowSelection={{
            type: 'checkbox',
            checkStrictly: true,
            selectedRowKeys: selectedKeys,
            onChange: (keys) => setSelectedKeys(keys),
          }}
        />
      </div>
    )
  },
}

/** 单选模式 */
export const WithRadio: Story = {
  render: () => {
    const [selectedKeys, setSelectedKeys] = useState<(string | number)[]>([])
    return (
      <div className="space-y-4">
        <p className="text-sm text-muted-foreground">
          已选中：{selectedKeys.join(', ') || '无'}
        </p>
        <TreeTable
          columns={columns}
          dataSource={treeData}
          rowKey="key"
          defaultExpandAll
          rowSelection={{
            type: 'radio',
            selectedRowKeys: selectedKeys,
            onChange: (keys) => setSelectedKeys(keys),
          }}
        />
      </div>
    )
  },
}

/** 点击行展开 */
export const ExpandByClick: Story = {
  args: {
    columns,
    dataSource: treeData,
    rowKey: 'key',
    expandRowByClick: true,
  },
}

/** 无边框 */
export const NoBorder: Story = {
  args: {
    columns,
    dataSource: treeData,
    rowKey: 'key',
    bordered: false,
    defaultExpandAll: true,
  },
}

/** 大数据测试（10000+ 节点，启用虚拟滚动） */
export const LargeData: Story = {
  render: () => {
    /* 生成大数据 */
    function generateData(parentCount: number, childCount: number, grandChildCount: number): Dept[] {
      const data: Dept[] = []
      for (let i = 1; i <= parentCount; i++) {
        const children: Dept[] = []
        for (let j = 1; j <= childCount; j++) {
          const grandChildren: Dept[] = []
          for (let k = 1; k <= grandChildCount; k++) {
            grandChildren.push({
              key: `${i}-${j}-${k}`,
              name: `部门 ${i}-${j}-${k}`,
              manager: `员工${i}${j}${k}`,
              count: Math.floor(Math.random() * 50) + 1,
              status: '正常',
            })
          }
          children.push({
            key: `${i}-${j}`,
            name: `部门 ${i}-${j}`,
            manager: `经理${i}${j}`,
            count: Math.floor(Math.random() * 200) + 10,
            status: '正常',
            children: grandChildren,
          })
        }
        data.push({
          key: `${i}`,
          name: `中心 ${i}`,
          manager: `总监${i}`,
          count: Math.floor(Math.random() * 500) + 50,
          status: '正常',
          children,
        })
      }
      return data
    }

    const largeData = generateData(20, 10, 50)
    return (
      <div className="space-y-4">
        <p className="text-sm text-muted-foreground">
          共 20 x 10 x 50 = 10000+ 节点，设置 height=400 启用虚拟滚动
        </p>
        <TreeTable
          columns={columns}
          dataSource={largeData}
          rowKey="key"
          defaultExpandAll={false}
          height={400}
        />
      </div>
    )
  },
}
