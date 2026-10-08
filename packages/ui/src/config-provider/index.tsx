import { forwardRef, useEffect, useMemo, useContext } from 'react'
import { cn } from '../lib/utils'
import { ConfigContext } from './config-provider-variants'
import type { ConfigProviderProps, ConfigContextValue, ThemeConfig } from './types'

/**
 * 颜色工具函数
 */
const hexToRgb = (hex: string): { r: number; g: number; b: number } => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  if (result && result[1] && result[2] && result[3]) {
    return {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    }
  }
  return { r: 0, g: 47, b: 167 } // 回退色 #002FA7
}

const rgbToHex = (r: number, g: number, b: number): string => {
  const toHex = (n: number) => n.toString(16).padStart(2, '0')
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`
}

/** 调整颜色亮度 */
function adjustBrightness(hex: string, factor: number): string {
  const rgb = hexToRgb(hex)
  if (factor > 1) {
    const r = Math.min(255, Math.round(rgb.r + (255 - rgb.r) * (factor - 1)))
    const g = Math.min(255, Math.round(rgb.g + (255 - rgb.g) * (factor - 1)))
    const b = Math.min(255, Math.round(rgb.b + (255 - rgb.b) * (factor - 1)))
    return rgbToHex(r, g, b)
  } else {
    const r = Math.round(rgb.r * factor)
    const g = Math.round(rgb.g * factor)
    const b = Math.round(rgb.b * factor)
    return rgbToHex(r, g, b)
  }
}

/** 添加透明度 */
function addAlpha(hex: string, alpha: number): string {
  const rgb = hexToRgb(hex)
  return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`
}

/**
 * 生成主题色的完整色板
 * 根据基础主题色生成 50-900 色阶 + hover/focus/disabled 状态色
 */
function generatePrimaryColors(baseColor: string): Record<string, string> {
  const colors: Record<string, string> = {
    // 基础色（500）
    DEFAULT: baseColor,
    500: baseColor,
    // hover: 稍亮
    hover: adjustBrightness(baseColor, 1.15),
    // focus: 15% 透明度
    focus: addAlpha(baseColor, 0.15),
    // disabled: 40% 亮度
    disabled: adjustBrightness(baseColor, 0.4),
  }

  // 生成色阶
  const scales: Array<[string, number]> = [
    ['50', 1.95],
    ['100', 1.7],
    ['200', 1.45],
    ['300', 1.2],
    ['400', 1.1],
    ['500', 1],
    ['600', 0.85],
    ['700', 0.7],
    ['800', 0.55],
    ['900', 0.4],
  ]

  scales.forEach(([key, factor]) => {
    colors[key] = adjustBrightness(baseColor, factor)
  })

  return colors
}

/**
 * 应用主题色到 CSS 变量
 */
function applyThemeColors(primaryColor: string) {
  const colors = generatePrimaryColors(primaryColor)
  const root = document.documentElement

  Object.entries(colors).forEach(([key, value]) => {
    root.style.setProperty(`--color-primary-${key}`, value)
  })
}

/**
 * ConfigProvider 全局配置组件
 *
 * 用于在组件树顶层提供全局配置，包括主题、组件前缀等。
 * 所有 simplUI 组件都可以通过 useConfig 获取这些配置。
 */
const ConfigProvider = forwardRef<HTMLDivElement, ConfigProviderProps>((props, ref) => {
  const {
    children,
    theme: legacyTheme,
    themeConfig: userThemeConfig,
    config = {},
    className
  } = props

  // 合并主题配置（兼容 legacy theme 属性）
  const themeConfig: ThemeConfig = useMemo(() => ({
    mode: userThemeConfig?.mode || legacyTheme || 'light',
    primaryColor: userThemeConfig?.primaryColor || '#002FA7',
  }), [userThemeConfig, legacyTheme])

  const theme = themeConfig.mode || 'light'

  const contextValue: ConfigContextValue = useMemo(
    () => ({
      theme,
      themeConfig,
      config,
    }),
    [theme, themeConfig, config]
  )

  // 同步主题到 data-theme 属性
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  // 同步主题色到 CSS 变量
  useEffect(() => {
    if (themeConfig.primaryColor) {
      applyThemeColors(themeConfig.primaryColor)
    }
  }, [themeConfig.primaryColor])

  return (
    <ConfigContext.Provider value={contextValue}>
      <div ref={ref} className={cn('sui-config-provider contents', className)}>{children}</div>
    </ConfigContext.Provider>
  )
})

/**
 * useConfig 获取全局配置
 *
 * 在任意组件中调用此 hook 获取 ConfigProvider 提供的配置。
 */
function useConfig(): ConfigContextValue {
  return useContext(ConfigContext)
}

ConfigProvider.displayName = 'ConfigProvider'

export { ConfigProvider, useConfig }
export type { ConfigProviderProps, ConfigContextValue, ThemeConfig } from './types'
export { ConfigContext } from './config-provider-variants'

export default ConfigProvider
