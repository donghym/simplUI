import { forwardRef, useEffect, useMemo, useContext } from 'react'
import { cn } from '../lib/utils'
import { ConfigContext } from './config-provider-variants'
import type { ConfigProviderProps, ConfigContextValue, ThemeConfig } from './types'

/**
 * 生成主题色的色阶
 * 根据基础主题色生成 50-900 的色阶
 */
function generatePrimaryColors(baseColor: string): Record<string, string> {
  // 简单的颜色变暗/变亮逻辑
  const hexToRgb = (hex: string): { r: number; g: number; b: number } => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    if (result && result[1] && result[2] && result[3]) {
      return {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      }
    }
    return { r: 22, g: 119, b: 255 }
  }

  const rgbToHex = (r: number, g: number, b: number): string => {
    const toHex = (n: number) => n.toString(16).padStart(2, '0')
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`
  }

  const rgb = hexToRgb(baseColor)
  const colors: Record<string, string> = {}

  // 生成不同亮度的色阶
  const scales = [
    { key: '50', factor: 1.9 },
    { key: '100', factor: 1.6 },
    { key: '200', factor: 1.3 },
    { key: '300', factor: 1.1 },
    { key: '400', factor: 1.05 },
    { key: '500', factor: 1 },
    { key: '600', factor: 0.85 },
    { key: '700', factor: 0.7 },
    { key: '800', factor: 0.55 },
    { key: '900', factor: 0.4 },
  ]

  scales.forEach(({ key, factor }) => {
    const r = Math.min(255, Math.round(rgb.r * factor + (factor > 1 ? 255 - 255 * factor : 0)))
    const g = Math.min(255, Math.round(rgb.g * factor + (factor > 1 ? 255 - 255 * factor : 0)))
    const b = Math.min(255, Math.round(rgb.b * factor + (factor > 1 ? 255 - 255 * factor : 0)))
    colors[key] = rgbToHex(r, g, b)
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
    prefixCls = 'simplui',
    config = {},
    className
  } = props

  // 合并主题配置（兼容 legacy theme 属性）
  const themeConfig: ThemeConfig = useMemo(() => ({
    mode: userThemeConfig?.mode || legacyTheme || 'light',
    primaryColor: userThemeConfig?.primaryColor || '#1677FF',
  }), [userThemeConfig, legacyTheme])

  const theme = themeConfig.mode || 'light'

  const contextValue: ConfigContextValue = useMemo(
    () => ({
      theme,
      themeConfig,
      prefixCls,
      config,
    }),
    [theme, themeConfig, prefixCls, config]
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
