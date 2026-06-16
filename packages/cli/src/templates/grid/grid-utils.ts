import type { ColResponsive } from './types'

/** 根据 span/offset 生成 Tailwind 任意值类名 */
export function getSpanClass(span?: number, offset?: number): string {
  const classes: string[] = []
  if (span !== undefined && span > 0 && span <= 24) {
    classes.push(`w-[${((span / 24) * 100).toFixed(4)}%]`)
  }
  if (offset !== undefined && offset > 0 && offset <= 24) {
    classes.push(`ml-[${((offset / 24) * 100).toFixed(4)}%]`)
  }
  return classes.join(' ')
}

/** 生成响应式列类名 */
export function getResponsiveClass(prefix: string, value?: number | ColResponsive): string {
  if (value === undefined) return ''
  if (typeof value === 'number') {
    return value > 0 && value <= 24 ? `${prefix}:w-[${((value / 24) * 100).toFixed(4)}%]` : ''
  }
  const classes: string[] = []
  if (value.span !== undefined && value.span > 0 && value.span <= 24) {
    classes.push(`${prefix}:w-[${((value.span / 24) * 100).toFixed(4)}%]`)
  }
  if (value.offset !== undefined && value.offset > 0 && value.offset <= 24) {
    classes.push(`${prefix}:ml-[${((value.offset / 24) * 100).toFixed(4)}%]`)
  }
  return classes.join(' ')
}

export const ALIGN_MAP = { top: 'items-start', middle: 'items-center', bottom: 'items-end' } as const
export const JUSTIFY_MAP = { start: 'justify-start', end: 'justify-end', center: 'justify-center', 'space-around': 'justify-around', 'space-between': 'justify-between' } as const