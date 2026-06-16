import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { EventCalendar } from './index'
import type { CalendarEvent } from './types'

const meta: Meta<typeof EventCalendar> = {
  title: '增强组件/EventCalendar 事件日历',
  component: EventCalendar,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    events: {
      control: 'object',
      description: '事件列表',
    },
  },
}

export default meta
type Story = StoryObj<typeof EventCalendar>

const sampleEvents: CalendarEvent[] = [
  { title: '团队周会', date: '2024-06-03', color: '#3b82f6' },
  { title: '需求评审', date: '2024-06-05', color: '#f59e0b' },
  { title: '版本发布', date: '2024-06-10', color: '#10b981' },
  { title: '技术分享', date: '2024-06-12', color: '#8b5cf6' },
  { title: '冲刺回顾', date: '2024-06-15', color: '#ef4444' },
  { title: '代码审查', date: '2024-06-18', color: '#3b82f6' },
  { title: '用户调研', date: '2024-06-20', color: '#f59e0b' },
  { title: '上线部署', date: '2024-06-25', color: '#10b981' },
  { title: '月度总结', date: '2024-06-28', color: '#8b5cf6' },
]

export const Default: Story = {
  args: {
    events: sampleEvents,
  },
}

export const NoEvents: Story = {
  args: {},
}

export const MultiEventsPerDay: Story = {
  render: () => {
    const events: CalendarEvent[] = [
      { title: '晨会', date: '2024-06-10', color: '#3b82f6' },
      { title: '评审', date: '2024-06-10', color: '#f59e0b' },
      { title: '部署', date: '2024-06-10', color: '#10b981' },
      { title: '回顾', date: '2024-06-10', color: '#ef4444' },
      { title: '分享', date: '2024-06-15', color: '#8b5cf6' },
      { title: '培训', date: '2024-06-15', color: '#3b82f6' },
    ]
    return <EventCalendar events={events} />
  },
}

export const CustomCellRender: Story = {
  render: () => (
    <EventCalendar
      events={sampleEvents}
      dateCellRender={(date, cellEvents) => (
        <div className="w-full">
          <span className="text-sm">{date.getDate()}</span>
          {cellEvents.length > 0 && (
            <div className="mt-0.5 space-y-0.5">
              {cellEvents.map((evt, i) => (
                <div
                  key={i}
                  className="text-[10px] truncate px-1 py-0.5 rounded text-white bg-primary-500"
                  data-color={evt.color}
                >
                  {evt.title}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    />
  ),
}

export const Controlled: Story = {
  render: () => {
    const [currentDate, setCurrentDate] = useState(new Date(2024, 5, 1))
    return (
      <div className="space-y-4">
        <p className="text-sm text-muted-foreground">
          当前月份：{currentDate.getFullYear()}年{currentDate.getMonth() + 1}月
        </p>
        <EventCalendar
          value={currentDate}
          onChange={setCurrentDate}
          events={sampleEvents}
        />
      </div>
    )
  },
}
