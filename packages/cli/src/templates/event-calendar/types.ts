import { HTMLAttributes, ReactNode } from 'react'
import type { VariantProps } from 'class-variance-authority'
import { eventCalendarVariants } from './event-calendar-variants'

/** 日历事件 */
export interface CalendarEvent {
  /** 事件标题 */
  title: string
  /** 事件日期，格式 YYYY-MM-DD */
  date: string
  /** 事件颜色标记 */
  color?: string
}

/** EventCalendar 组件属性 */
export interface EventCalendarProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange' | 'onSelect'>, VariantProps<typeof eventCalendarVariants> {
  /** 当前显示月份（受控模式） */
  value?: Date
  /** 月份变化回调 */
  onChange?: (date: Date) => void
  /** 事件列表 */
  events?: CalendarEvent[]
  /** 日期单元格自定义渲染 */
  dateCellRender?: (date: Date, events: CalendarEvent[]) => ReactNode
  /** 日期点击回调 */
  onSelect?: (date: Date) => void
}
