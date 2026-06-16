/** 生成随机数，用于手绘线条的抖动 */
export function random(min: number, max: number) {
  return Math.random() * (max - min) + min
}

/** 生成手绘风格的多边形路径（矩形边框） */
export function generateRoughRectPath(
  width: number,
  height: number,
  roughness: number = 2,
  bowing: number = 1,
): string {
  const w = width
  const h = height
  const r = roughness
  const b = bowing

  // 上边：从左到右，带轻微抖动
  const topY = random(-r, r)
  const topPath = `M ${random(-r, r)} ${topY} ` +
    `Q ${w * 0.25 + random(-b, b)} ${topY + random(-r, r)} ${w * 0.5 + random(-b, b)} ${topY + random(-r, r)} ` +
    `T ${w + random(-r, r)} ${random(-r, r)}`

  // 右边：从上到下
  const rightX = w + random(-r, r)
  const rightPath = `Q ${rightX + random(-r, r)} ${h * 0.25 + random(-b, b)} ${rightX + random(-r, r)} ${h * 0.5 + random(-b, b)} ` +
    `T ${w + random(-r, r)} ${h + random(-r, r)}`

  // 下边：从右到左
  const bottomY = h + random(-r, r)
  const bottomPath = `Q ${w * 0.75 + random(-b, b)} ${bottomY + random(-r, r)} ${w * 0.5 + random(-b, b)} ${bottomY + random(-r, r)} ` +
    `T ${random(-r, r)} ${h + random(-r, r)}`

  // 左边：从下到上
  const leftX = random(-r, r)
  const leftPath = `Q ${leftX + random(-r, r)} ${h * 0.75 + random(-b, b)} ${leftX + random(-r, r)} ${h * 0.5 + random(-b, b)} ` +
    `T ${random(-r, r)} ${random(-r, r)}`

  return `${topPath} ${rightPath} ${bottomPath} ${leftPath}`
}

/** 生成手绘填充路径（内部涂鸦填充） */
export function generateFillPath(
  width: number,
  height: number,
  density: number = 8,
): string {
  let path = ''
  const step = Math.min(width, height) / density

  for (let y = step; y < height - step; y += step * 1.5) {
    const startX = step + random(-step * 0.3, step * 0.3)
    const endX = width - step + random(-step * 0.3, step * 0.3)
    const controlY = y + random(-step * 0.5, step * 0.5)

    path += `M ${startX} ${y} Q ${(startX + endX) / 2 + random(-step, step)} ${controlY} ${endX} ${y + random(-2, 2)} `
  }

  return path
}