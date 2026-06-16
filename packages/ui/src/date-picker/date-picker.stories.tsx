import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { DatePicker } from './index'
import { CalendarDays } from 'lucide-react'

const today = new Date()
const todayStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`

const CenterDecorator = (Story: React.FC) => (
  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', minHeight: '500px', width: '100%', paddingTop: '40px' }}>
    <Story />
  </div>
)

const meta: Meta<typeof DatePicker> = {
  title: '数据录入/DatePicker 日期选择框',
  component: DatePicker,
  tags: ['autodocs'],
  decorators: [CenterDecorator],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: '日期选择框用于选择或输入日期。适用于表单日期填写、时间范围筛选、日程安排等场景，支持日期、月份、年份等多种选择模式。',
      },
    },
  },
  argTypes: {
    status: { control: 'select', options: ['error', 'warning'], description: '校验状态，error 为错误，warning 为警告' },
  },
}

export default meta
type Story = StoryObj<typeof DatePicker>

export const Basic: Story = {
  args: { placeholder: '请选择日期' },
}

export const WithDefault: Story = {
  args: { defaultValue: todayStr },
}

export const Controlled: Story = {
  parameters: {
    docs: {
      description: {
        story: '受控模式示例，展示如何通过外部状态管理日期值。',
      },
    },
  },
  render: () => {
    const [date, setDate] = useState(todayStr)
    return (
      <div className="flex flex-col gap-2 w-72">
        <DatePicker value={date} onChange={setDate} />
        <p className="text-sm text-gray-500">已选择：{date || '(空)'}</p>
      </div>
    )
  },
}

export const ErrorStatus: Story = {
  args: { status: 'error', defaultValue: todayStr },
}

export const WarningStatus: Story = {
  args: { status: 'warning', defaultValue: todayStr },
}

export const Disabled: Story = {
  args: { disabled: true, defaultValue: todayStr },
}

export const AllowClear: Story = {
  args: { allowClear: true, defaultValue: todayStr },
}

export const WithPrefix: Story = {
  args: { prefix: <CalendarDays className="h-4 w-4" />, defaultValue: todayStr },
}

export const DisabledDate: Story = {
  parameters: {
    docs: {
      description: {
        story: '通过受控模式限制不可选择未来日期，适用于需要禁用特定日期范围的业务场景。',
      },
    },
  },
  render: () => {
    const [date, setDate] = useState('')
    const today = new Date()
    const todayStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`
    return (
      <div className="flex flex-col gap-2 w-72">
        <DatePicker
          value={date}
          onChange={(v) => {
            if (v && v > todayStr) return
            setDate(v)
          }}
          placeholder="不可选择未来日期"
        />
        <p className="text-xs text-muted-foreground">未来日期不可选（通过 onChange 过滤）</p>
      </div>
    )
  },
}

export const RangePicker: Story = {
  parameters: {
    docs: {
      description: {
        story: '使用两个日期选择框组合实现日期范围选择，常用于报表筛选、活动周期设置等场景。',
      },
    },
  },
  render: () => {
    const [start, setStart] = useState('')
    const [end, setEnd] = useState('')
    return (
      <div className="flex flex-col gap-3 w-72">
        <div className="flex items-center gap-2">
          <DatePicker value={start} onChange={setStart} placeholder="开始日期" />
          <span className="text-muted-foreground">~</span>
          <DatePicker value={end} onChange={setEnd} placeholder="结束日期" />
        </div>
        <p className="text-xs text-muted-foreground">
          当前范围：{start || '...'} ~ {end || '...'}
        </p>
      </div>
    )
  },
}

export const DifferentModes: Story = {
  parameters: {
    docs: {
      description: {
        story: '展示日期、月份、年份三种选择模式，根据业务需求选择合适的时间粒度。',
      },
    },
  },
  render: () => {
    const [date, setDate] = useState('')
    const [month, setMonth] = useState('')
    const [year, setYear] = useState('')
    return (
      <div className="flex flex-col gap-6">
        <div>
          <p className="mb-2 text-xs text-muted-foreground">日期选择（YYYY-MM-DD）</p>
          <div className="w-72">
            <DatePicker value={date} onChange={setDate} placeholder="选择日期" />
          </div>
          <p className="mt-1 text-xs text-muted-foreground">已选择：{date || '(空)'}</p>
        </div>
        <div>
          <p className="mb-2 text-xs text-muted-foreground">月份选择（YYYY-MM）</p>
          <div className="w-72">
            <DatePicker value={month} onChange={setMonth} placeholder="选择月份" />
          </div>
          <p className="mt-1 text-xs text-muted-foreground">已选择：{month || '(空)'}</p>
        </div>
        <div>
          <p className="mb-2 text-xs text-muted-foreground">年份选择（YYYY）</p>
          <div className="w-72">
            <DatePicker value={year} onChange={setYear} placeholder="选择年份" />
          </div>
          <p className="mt-1 text-xs text-muted-foreground">已选择：{year || '(空)'}</p>
        </div>
      </div>
    )
  },
}
