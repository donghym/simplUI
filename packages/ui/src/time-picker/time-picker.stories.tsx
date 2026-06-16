import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { TimePicker } from './index'
import { Clock } from 'lucide-react'

const CenterDecorator = (Story: React.FC) => (
  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', minHeight: '500px', width: '100%', paddingTop: '40px' }}>
    <Story />
  </div>
)

const meta: Meta<typeof TimePicker> = {
  title: '数据录入/TimePicker 时间选择框',
  component: TimePicker,
  tags: ['autodocs'],
  decorators: [CenterDecorator],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: '时间选择框用于选择或输入时间。适用于预约时间、日程提醒、班次设置等场景，支持 12/24 小时制和自定义时间间隔。',
      },
    },
  },
  argTypes: {
    format: {
      control: 'radio',
      options: ['12', '24'],
      description: '时间格式，12 小时制或 24 小时制，默认 24 小时制',
    },
    step: {
      control: 'number',
      description: '时间间隔（分钟），用于生成可选时间列表，默认 30 分钟',
    },
    status: {
      control: 'select',
      options: ['error', 'warning'],
      description: '状态变体：error 显示红色边框，warning 显示黄色边框',
    },
    allowClear: {
      control: 'boolean',
      description: '是否显示清空按钮，仅在已选择时间且未禁用时显示',
    },
    prefix: {
      control: 'text',
      description: '输入框左侧前缀图标或文字',
    },
  },
}

export default meta
type Story = StoryObj<typeof TimePicker>

export const Default: Story = {
  args: {
    placeholder: '请选择时间',
  },
}

export const WithDefaultValue: Story = {
  args: {
    defaultValue: '09:30',
  },
}

export const WithPrefix: Story = {
  args: {
    prefix: <Clock className="h-4 w-4" />,
    placeholder: '时间',
  },
}

export const AllowClear: Story = {
  args: {
    allowClear: true,
    defaultValue: '14:00',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: '12:00',
  },
}

export const StatusError: Story = {
  args: {
    status: 'error',
    defaultValue: '08:00',
  },
}

export const StatusWarning: Story = {
  args: {
    status: 'warning',
    defaultValue: '10:00',
  },
}

export const Format12Hour: Story = {
  args: {
    format: '12',
    defaultValue: '09:30',
  },
}

export const CustomStep: Story = {
  args: {
    step: 15,
    placeholder: '15 分钟间隔',
  },
}

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState('')
    return (
      <div className="space-y-4">
        <p>已选择时间：{value || '无'}</p>
        <TimePicker value={value} onChange={(t: string) => setValue(t)} />
      </div>
    )
  },
}

export const TimeRange: Story = {
  render: () => {
    const [startTime, setStartTime] = useState('')
    const [endTime, setEndTime] = useState('')
    return (
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <TimePicker value={startTime} onChange={setStartTime} placeholder="开始时间" />
          <span className="text-muted-foreground">~</span>
          <TimePicker value={endTime} onChange={setEndTime} placeholder="结束时间" />
        </div>
        <p className="text-xs text-muted-foreground">
          已选范围：{startTime || '--:--'} ~ {endTime || '--:--'}
        </p>
      </div>
    )
  },
}

export const DisabledTime: Story = {
  parameters: {
    docs: {
      description: {
        story: '通过受控模式限制不可选择过去时间，适用于预约、排班等需要禁用历史时段的场景。',
      },
    },
  },
  render: () => {
    const [value, setValue] = useState('')
    const now = new Date()
    const currentHour = now.getHours()

    return (
      <div className="flex flex-col gap-3 w-72">
        <TimePicker
          value={value}
          onChange={(t: string) => {
            const hour = parseInt(t.split(':')[0] ?? '0', 10)
            if (hour < currentHour) return
            setValue(t)
          }}
          placeholder="不可选择过去时间"
        />
        <p className="text-xs text-muted-foreground">
          当前小时之前的时段不可选（通过 onChange 过滤，当前小时：{String(currentHour).padStart(2, '0')}:00）
        </p>
      </div>
    )
  },
}