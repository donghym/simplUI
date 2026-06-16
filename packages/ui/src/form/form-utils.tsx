import type { ValidateStatus } from './types'
import type { ResponsiveCol } from './responsive-col-types'

/** 校验状态对应样式（antd 风格） */
export const VALIDATE_COLORS: Record<ValidateStatus, string> = {
  success: 'text-success-600',
  warning: 'text-warning-600',
  error: 'text-danger-500',
  validating: 'text-primary-500',
  '': '',
}

/** 校验状态对应控件边框色（antd 风格） */
export const VALIDATE_BORDER: Record<ValidateStatus, string> = {
  success: 'border-success-500',
  warning: 'border-warning-500',
  error: 'border-danger-500',
  validating: 'border-primary-500',
  '': '',
}

/**
 * 必填星号
 */
export const RequiredMark = () => (
  <span className="text-danger-500 mr-1 select-none" aria-hidden="true">
    *
  </span>
)

/**
 * 归一化 ResponsiveCol 为对象
 */
export function normalizeCol(col: ResponsiveCol | undefined, fallback: number): { span: number; offset: number } {
  if (col == null) return { span: fallback, offset: 0 }
  if (typeof col === 'number') return { span: col, offset: 0 }
  return { span: col.span ?? fallback, offset: col.offset ?? 0 }
}
