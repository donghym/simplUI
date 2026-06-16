/** 限制值在范围内 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max)
}

/** 按步长取整 */
export function snapToStep(value: number, step: number, min: number): number {
  const steps = Math.round((value - min) / step)
  return min + steps * step
}
