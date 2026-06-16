/**
 * DatePicker 日期工具函数
 *
 * 提供纯函数式日期计算，无外部依赖。
 */

/** 获取指定年月的天数 */
export function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate()
}

/** 获取指定年月第一天是星期几（0=周日） */
export function getFirstDayOfWeek(year: number, month: number): number {
  return new Date(year, month, 1).getDay()
}

/** 比较两个日期是否同一天 */
export function isSameDay(
  y1: number, m1: number, d1: number,
  y2: number, m2: number, d2: number,
): boolean {
  return y1 === y2 && m1 === m2 && d1 === d2
}

/** 将年月日格式化为 YYYY-MM-DD 字符串 */
export function formatDateValue(year: number, month: number, day: number): string {
  const m = String(month + 1).padStart(2, '0')
  const d = String(day).padStart(2, '0')
  return `${year}-${m}-${d}`
}

/** 将 YYYY-MM-DD 字符串解析为年月日对象，无效格式返回 null */
export function parseDateValue(dateStr: string): { year: number; month: number; day: number } | null {
  if (!dateStr) return null
  const parts = dateStr.split('-')
  if (parts.length !== 3) return null
  const year = parseInt(parts[0]!, 10)
  const month = parseInt(parts[1]!, 10) - 1
  const day = parseInt(parts[2]!, 10)
  if (isNaN(year) || isNaN(month) || isNaN(day)) return null
  return { year, month, day }
}