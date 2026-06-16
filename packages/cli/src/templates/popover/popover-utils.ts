/** Popover 定位计算工具 */

/** 定位方向 */
export type Placement = 'top' | 'bottom' | 'left' | 'right' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight'

/** 定位结果 */
export interface PositionResult {
  x: number
  y: number
  placement: Placement
}

/** 计算 popover 相对于触发元素的位置 */
export function calculatePosition(
  placement: Placement,
  triggerRect: DOMRect,
  popoverRect: DOMRect,
  offset = 8,
  viewportPadding = 8,
): PositionResult {
  const viewportWidth = window.innerWidth
  const viewportHeight = window.innerHeight

  let x = 0
  let y = 0
  let finalPlacement = placement

  const basePositions: Record<Placement, { x: number; y: number }> = {
    top: {
      x: triggerRect.left + triggerRect.width / 2 - popoverRect.width / 2,
      y: triggerRect.top - popoverRect.height - offset,
    },
    bottom: {
      x: triggerRect.left + triggerRect.width / 2 - popoverRect.width / 2,
      y: triggerRect.bottom + offset,
    },
    left: {
      x: triggerRect.left - popoverRect.width - offset,
      y: triggerRect.top + triggerRect.height / 2 - popoverRect.height / 2,
    },
    right: {
      x: triggerRect.right + offset,
      y: triggerRect.top + triggerRect.height / 2 - popoverRect.height / 2,
    },
    topLeft: {
      x: triggerRect.left,
      y: triggerRect.top - popoverRect.height - offset,
    },
    topRight: {
      x: triggerRect.right - popoverRect.width,
      y: triggerRect.top - popoverRect.height - offset,
    },
    bottomLeft: {
      x: triggerRect.left,
      y: triggerRect.bottom + offset,
    },
    bottomRight: {
      x: triggerRect.right - popoverRect.width,
      y: triggerRect.bottom + offset,
    },
  }

  const pos = basePositions[placement]
  x = pos.x
  y = pos.y

  // 边界检测与自动翻转
  const flipMap: Record<Placement, Placement> = {
    top: 'bottom',
    bottom: 'top',
    left: 'right',
    right: 'left',
    topLeft: 'bottomLeft',
    topRight: 'bottomRight',
    bottomLeft: 'topLeft',
    bottomRight: 'topRight',
  }

  const needsFlip =
    (placement.startsWith('top') && y < viewportPadding) ||
    (placement.startsWith('bottom') && y + popoverRect.height > viewportHeight - viewportPadding) ||
    (placement.startsWith('left') && x < viewportPadding) ||
    (placement.startsWith('right') && x + popoverRect.width > viewportWidth - viewportPadding)

  if (needsFlip) {
    finalPlacement = flipMap[placement]
    const flippedPos = basePositions[finalPlacement]
    x = flippedPos.x
    y = flippedPos.y
  }

  // 边界约束
  x = Math.max(viewportPadding, Math.min(x, viewportWidth - popoverRect.width - viewportPadding))
  y = Math.max(viewportPadding, Math.min(y, viewportHeight - popoverRect.height - viewportPadding))

  return { x, y, placement: finalPlacement }
}