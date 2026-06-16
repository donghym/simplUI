export type { CSSProperties } from 'react'

export function hexToHsv(hex: string) {
  const r = parseInt(hex.slice(1, 3), 16) / 255
  const g = parseInt(hex.slice(3, 5), 16) / 255
  const b = parseInt(hex.slice(5, 7), 16) / 255
  const max = Math.max(r, g, b), min = Math.min(r, g, b), d = max - min
  let h = 0; let s = max ? d / max : 0; const v = max
  if (d) {
    if (max === r) h = ((g - b) / d + (g < b ? 6 : 0)) / 6
    else if (max === g) h = ((b - r) / d + 2) / 6
    else h = ((r - g) / d + 4) / 6
  }
  return { h: Math.round(h * 360), s: Math.round(s * 100), v: Math.round(v * 100) }
}

export function hsvToHex(h: number, s: number, v: number) {
  h /= 360; s /= 100; v /= 100
  const i = Math.floor(h * 6), f = h * 6 - i
  const p = v * (1 - s), q = v * (1 - f * s), t = v * (1 - (1 - f) * s)
  let r = 0, g = 0, b = 0
  switch (i % 6) {
    case 0: r = v; g = t; b = p; break
    case 1: r = q; g = v; b = p; break
    case 2: r = p; g = v; b = t; break
    case 3: r = p; g = q; b = v; break
    case 4: r = t; g = p; b = v; break
    case 5: r = v; g = p; b = q; break
  }
  const toHex = (n: number) => Math.round(n * 255).toString(16).padStart(2, '0')
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`
}

export const defaultPresets = [
  { label: 'Recommended', colors: [
    '#f5222d', '#fa8c16', '#fadb14', '#52c41a', '#13c2c2', '#1890ff', '#2f54eb', '#722ed1',
    '#eb2f96', '#fa541c', '#a0d911', '#36cfc9', '#40a9ff', '#597ef7', '#b37feb', '#ff85c0',
  ]},
  { label: 'Recent', colors: [] as string[] },
]
export const sizeMap = { small: 24, medium: 32, large: 40 }
export const fontSizeMap = { small: 12, medium: 14, large: 16 }
export const placementStyles: Record<string, React.CSSProperties> = {
  bottomLeft: { top: '100%', left: 0, marginTop: 4 },
  bottomRight: { top: '100%', right: 0, marginTop: 4 },
  topLeft: { bottom: '100%', left: 0, marginBottom: 4 },
  topRight: { bottom: '100%', right: 0, marginBottom: 4 },
}
