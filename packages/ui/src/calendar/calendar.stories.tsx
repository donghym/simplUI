import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Calendar } from './index'

const meta: Meta<typeof Calendar> = {
  title: '数据展示/Calendar 日历',
  component: Calendar,
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'date',
      description: '当前选中的日期（受控）',
    },
    defaultValue: {
      control: 'date',
      description: '默认选中的日期（非受控）',
    },
  },
  parameters: {
    layout: 'padded',
  },
}

export default meta
type Story = StoryObj<typeof Calendar>

export const Default: Story = {
  args: {},
}

export const WithDefaultValue: Story = {
  args: {
    defaultValue: new Date(),
  },
}

export const DisabledDate: Story = {
  args: {
    disabledDate: (date: Date) => {
      const day = date.getDay()
      return day === 0 || day === 6 // 禁用周末
    },
  },
}

export const CustomCellRender: Story = {
  args: {
    dateCellRender: (date: Date) => {
      if (date.getDate() === 15) {
        return <span className="text-primary-500 font-bold">{date.getDate()}</span>
      }
      return date.getDate()
    },
  },
}

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState(new Date())
    return (
      <div className="space-y-4">
        <p>已选择：{value.toLocaleDateString()}</p>
        <Calendar value={value} onSelect={setValue} />
      </div>
    )
  },
}

export const CalendarWithEvents: Story = {
  render: () => {
    const eventDays = [3, 7, 12, 18, 25]
    return (
      <Calendar
        dateCellRender={(date: Date) => {
          const day = date.getDate()
          const hasEvent = eventDays.includes(day)
          return (
            <div className="relative w-full">
              <span>{day}</span>
              {hasEvent && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary-500" />
              )}
            </div>
          )
        }}
      />
    )
  },
}

export const MonthYearSwitch: Story = {
  render: () => {
    const [currentDate, setCurrentDate] = useState(new Date())
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)

    const handlePrevMonth = () => {
      const d = new Date(currentDate)
      d.setMonth(d.getMonth() - 1)
      setCurrentDate(d)
    }

    const handleNextMonth = () => {
      const d = new Date(currentDate)
      d.setMonth(d.getMonth() + 1)
      setCurrentDate(d)
    }

    const handleYearChange = (year: number) => {
      const d = new Date(currentDate)
      d.setFullYear(year)
      setCurrentDate(d)
    }

    const currentYear = currentDate.getFullYear()
    const years = Array.from({ length: 21 }, (_, i) => currentYear - 10 + i)

    return (
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handlePrevMonth}
            className="px-3 py-1.5 border border-border rounded-md text-sm hover:bg-muted transition-colors"
          >
            上月
          </button>
          <select
            value={currentYear}
            onChange={(e) => handleYearChange(Number(e.target.value))}
            className="px-2 py-1.5 border border-border rounded-md text-sm"
          >
            {years.map((y) => (
              <option key={y} value={y}>{y} 年</option>
            ))}
          </select>
          <span className="text-sm font-medium">{currentDate.getMonth() + 1} 月</span>
          <button
            type="button"
            onClick={handleNextMonth}
            className="px-3 py-1.5 border border-border rounded-md text-sm hover:bg-muted transition-colors"
          >
            下月
          </button>
        </div>
        <Calendar
          value={selectedDate}
          currentDate={currentDate}
          onSelect={setSelectedDate}
          onPanelChange={(date) => setCurrentDate(date)}
          headerRender={false}
        />
        <p className="text-sm text-muted-foreground">
          当前面板：{currentDate.getFullYear()} 年 {currentDate.getMonth() + 1} 月
          {selectedDate && ` | 已选择：${selectedDate.toLocaleDateString()}`}
        </p>
      </div>
    )
  },
}