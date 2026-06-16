import type { TimePickerParsed } from './types'

/** 将 HH:mm 格式字符串解析为小时和分钟数值，无效格式返回 null */
export function parseTimeValue(value: string): TimePickerParsed | null {
  if (!value || typeof value !== 'string') return null
  const match = value.match(/^(\d{1,2}):(\d{2})$/)
  if (!match || !match[1] || !match[2]) return null
  const hour = parseInt(match[1], 10)
  const minute = parseInt(match[2], 10)
  if (hour < 0 || hour > 23 || minute < 0 || minute > 59) return null
  return { hour, minute }
}

/** 将小时和分钟数值格式化为 HH:mm 字符串 */
export function formatTimeValue(hour: number, minute: number): string {
  const h = hour.toString().padStart(2, '0')
  const m = minute.toString().padStart(2, '0')
  return `${h}:${m}`
}

/** 根据时间间隔生成可选时间选项列表 */
export function generateTimeOptions(step: number = 30): string[] {
  const options: string[] = []
  for (let hour = 0; hour < 24; hour++) {
    for (let minute = 0; minute < 60; minute += step) {
      options.push(formatTimeValue(hour, minute))
    }
  }
  return options
}

/** 将 24 小时制时间转换为 12 小时制显示格式，如 "09:00 AM" */
export function to12HourFormat(time: string): string {
  const parsed = parseTimeValue(time)
  if (!parsed) return time
  const { hour, minute } = parsed
  const period = hour >= 12 ? 'PM' : 'AM'
  const displayHour = hour % 12 || 12
  const m = minute.toString().padStart(2, '0')
  return `${displayHour.toString().padStart(2, '0')}:${m} ${period}`
}
