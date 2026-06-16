import type { PopoverPlacement } from './types'

/** 根据 placement 反推箭头指向方向（箭头指向触发元素） */
export function getArrowDirection(placement: PopoverPlacement): 'top' | 'bottom' | 'left' | 'right' {
  if (placement.startsWith('top')) return 'bottom'
  if (placement.startsWith('bottom')) return 'top'
  if (placement.startsWith('left')) return 'right'
  return 'left'
}

/** 翻转映射表：top ↔ bottom, left ↔ right */
export const FLIP_MAP: Record<PopoverPlacement, PopoverPlacement> = {
  top: 'bottom',
  topLeft: 'bottomLeft',
  topRight: 'bottomRight',
  bottom: 'top',
  bottomLeft: 'topLeft',
  bottomRight: 'topRight',
  left: 'right',
  right: 'left',
}
