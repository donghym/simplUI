/**
 * 解析用户输入的文本为数值，空字符串、减号、小数点视为 null
 */
export function parseNumeric(text: string): number | null {
  if (text === '' || text === '-' || text === '.') return null
  const num = Number(text)
  return Number.isNaN(num) ? null : num
}

/**
 * 将数值限制在 min/max 闭区间内
 */
export function clampNumber(value: number, min?: number, max?: number): number {
  if (min !== undefined && value < min) return min
  if (max !== undefined && value > max) return max
  return value
}

/**
 * 将数值按精度格式化为显示字符串
 */
export function formatToPrecision(value: number | null, precision?: number): string {
  if (value === null) return ''
  if (precision === undefined || precision === 0) return String(value)
  return value.toFixed(precision)
}