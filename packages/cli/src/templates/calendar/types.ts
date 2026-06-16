import { HTMLAttributes, ReactNode } from 'react'
import type { VariantProps } from 'class-variance-authority'
import { calendarVariants } from './calendar-variants'

/** 日历模式 */
export type CalendarMode = 'month' | 'year'

/** 日期单元格数据 */
export interface CalendarCell {
  /** 日期对象 */
  date: Date
  /** 是否属于当前月份 */
  isCurrentMonth: boolean
  /** 是否今天 */
  isToday: boolean
  /** 是否选中 */
  isSelected: boolean
  /** 是否禁用 */
  disabled: boolean
}

/** 日历组件 Props */
export interface CalendarProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'onSelect' | 'value' | 'defaultValue'>,
    VariantProps<typeof calendarVariants> {
  /** 当前选中的日期（受控） */
  value?: Date
  /** 默认选中的日期（非受控） */
  defaultValue?: Date
  /** 当前显示的日期，决定日历展示哪年哪月 */
  currentDate?: Date
  /** 默认显示的日期 */
  defaultCurrentDate?: Date
  /** 日期变化回调 */
  onSelect?: (date: Date) => void
  /** 月份/年份变化回调 */
  onPanelChange?: (date: Date, mode: CalendarMode) => void
  /** 日期禁用函数，返回 true 则该日期不可选 */
  disabledDate?: (date: Date) => boolean
  /** 自定义日期单元格渲染 */
  dateCellRender?: (date: Date) => ReactNode
  /**
   * 自定义日期单元格内容渲染，优先级高于 dateCellRender
   * 返回 ReactNode 替换默认日期数字
   */
  dateFullCellRender?: (date: Date) => ReactNode
  /** 是否显示头部切换按钮。默认 true */
  headerRender?: boolean
  /** 自定义 className，通过 cn() + twMerge 合并 */
  className?: string
}

/** 日历头部 Props（内部使用） */
export interface CalendarHeaderProps {
  /** 当前显示日期 */
  currentDate: Date
  /** 日历模式 */
  mode: CalendarMode
  /** 切换到上一个月/年 */
  onPrev: () => void
  /** 切换到下一个月/年 */
  onNext: () => void
  /** 切换到当前日期 */
  onToday: () => void
  /** 模式变化回调 */
  onModeChange: (mode: CalendarMode) => void
}
