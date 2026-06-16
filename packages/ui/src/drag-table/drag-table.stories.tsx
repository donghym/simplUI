import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { DragTable } from './index'
import type { DragTableColumn } from './types'
import { cn } from '../lib/utils'

const meta: Meta<typeof DragTable> = {
  title: '数据展示/DragTable 拖拽表格',
  component: DragTable,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    actions: {
      argTypesRegex: '^on.*',
    },
  },
  argTypes: {
    columns: {
      control: 'object',
      description: '列配置数组',
    },
    dataSource: {
      control: 'object',
      description: '数据源',
    },
    bordered: {
      control: 'boolean',
      description: '是否显示边框',
    },
    draggable: {
      control: 'select',
      options: [true, false, 'row', 'column'],
      description: '是否允许拖拽',
    },
    dragHandle: {
      control: 'boolean',
      description: '是否显示拖拽手柄（或传入自定义 ReactNode）',
    },
    disabled: {
      control: 'boolean',
      description: '是否禁用拖拽',
    },
  },
}

export default meta
type Story = StoryObj<typeof DragTable>

/** 任务数据接口 */
interface Task {
  key: string
  name: string
  assignee: string
  status: string
  priority: string
}

/** 基础列配置 */
const baseColumns: DragTableColumn<Task>[] = [
  { title: '任务名称', dataIndex: 'name', width: 200 },
  { title: '负责人', dataIndex: 'assignee', width: 120 },
  { title: '状态', dataIndex: 'status', width: 100 },
  { title: '优先级', dataIndex: 'priority', width: 100 },
]

/** 初始数据 */
const initialData: Task[] = [
  { key: '1', name: '需求评审', assignee: '张三', status: '进行中', priority: '高' },
  { key: '2', name: 'UI 设计', assignee: '李四', status: '待开始', priority: '中' },
  { key: '3', name: '前端开发', assignee: '王五', status: '待开始', priority: '高' },
  { key: '4', name: '后端开发', assignee: '赵六', status: '进行中', priority: '高' },
  { key: '5', name: '测试验收', assignee: '钱七', status: '待开始', priority: '低' },
]

/** 基础行拖拽 */
export const Basic: Story = {
  render: () => {
    const [data, setData] = useState<Task[]>(initialData)
    return (
      <div className="w-full max-w-[700px]">
        <DragTable
          columns={baseColumns}
          dataSource={data}
          onDragEnd={setData}
          rowKey="key"
        />
      </div>
    )
  },
}

/** 带拖拽手柄 */
export const WithDragHandle: Story = {
  render: () => {
    const [data, setData] = useState<Task[]>(initialData)
    return (
      <div className="w-full max-w-[700px] space-y-2">
        <div className="text-sm text-muted-foreground">
          拖拽左侧手柄图标可调整行顺序
        </div>
        <DragTable
          columns={baseColumns}
          dataSource={data}
          onDragEnd={setData}
          rowKey="key"
          dragHandle
        />
      </div>
    )
  },
}

/** 无拖拽手柄 */
export const WithoutDragHandle: Story = {
  render: () => {
    const [data, setData] = useState<Task[]>(initialData)
    return (
      <div className="w-full max-w-[700px] space-y-2">
        <div className="text-sm text-muted-foreground">
          整行可拖拽，无需手柄
        </div>
        <DragTable
          columns={baseColumns}
          dataSource={data}
          onDragEnd={setData}
          rowKey="key"
          dragHandle={false}
        />
      </div>
    )
  },
}

/** 禁用拖拽 */
export const Disabled: Story = {
  render: () => (
    <div className="w-full max-w-[700px] space-y-2">
      <div className="text-sm text-muted-foreground">
        拖拽已禁用，行不可拖动
      </div>
      <DragTable
        columns={baseColumns}
        dataSource={initialData}
        rowKey="key"
        disabled
      />
    </div>
  ),
}

/** 拖拽回调 */
export const DragCallback: Story = {
  render: () => {
    const [data, setData] = useState<Task[]>(initialData)
    const [log, setLog] = useState<string[]>([])

    const handleDragEnd = (newData: Task[]) => {
      setData(newData)
      const names = newData.map((d) => d.name).join(' -> ')
      setLog((prev) => [...prev.slice(-4), `排序更新: ${names}`])
    }

    return (
      <div className="w-full max-w-[700px] space-y-4">
        <DragTable
          columns={baseColumns}
          dataSource={data}
          onDragEnd={handleDragEnd}
          rowKey="key"
        />
        <div className="space-y-1">
          <div className="text-sm font-medium text-foreground">变更日志</div>
          {log.length === 0 && (
            <div className="text-sm text-muted-foreground">拖拽行以查看回调日志</div>
          )}
          {log.map((entry, i) => (
            <div key={i} className="text-xs text-muted-foreground font-mono bg-muted rounded px-2 py-1">
              {entry}
            </div>
          ))}
        </div>
      </div>
    )
  },
}

/** 自定义渲染 */
export const CustomRender: Story = {
  render: () => {
    const [data, setData] = useState<Task[]>(initialData)

    const customColumns: DragTableColumn<Task>[] = [
      { title: '任务名称', dataIndex: 'name', width: 200 },
      { title: '负责人', dataIndex: 'assignee', width: 120 },
      {
        title: '状态',
        dataIndex: 'status',
        width: 100,
        render: (value) => {
          const status = value as string
          const colorMap: Record<string, string> = {
            '进行中': 'text-primary-600 bg-primary-50',
            '待开始': 'text-warning-600 bg-warning-50',
            '已完成': 'text-success-600 bg-success-50',
          }
          return (
            <span className={cn('px-2 py-0.5 rounded text-xs font-medium', colorMap[status])}>
              {status}
            </span>
          )
        },
      },
      {
        title: '优先级',
        dataIndex: 'priority',
        width: 100,
        render: (value) => {
          const priority = value as string
          const colorMap: Record<string, string> = {
            '高': 'text-danger-600',
            '中': 'text-warning-600',
            '低': 'text-muted-foreground',
          }
          return (
            <span className={cn('font-medium', colorMap[priority])}>
              {priority}
            </span>
          )
        },
      },
    ]

    return (
      <div className="w-full max-w-[700px]">
        <DragTable
          columns={customColumns}
          dataSource={data}
          onDragEnd={setData}
          rowKey="key"
        />
      </div>
    )
  },
}

/** 无边框 */
export const NoBorder: Story = {
  render: () => {
    const [data, setData] = useState<Task[]>(initialData)
    return (
      <div className="w-full max-w-[700px]">
        <DragTable
          columns={baseColumns}
          dataSource={data}
          onDragEnd={setData}
          rowKey="key"
          bordered={false}
        />
      </div>
    )
  },
}

/** 空数据 */
export const Empty: Story = {
  render: () => (
    <div className="w-full max-w-[700px]">
      <DragTable
        columns={baseColumns}
        dataSource={[]}
        rowKey="key"
      />
    </div>
  ),
}
