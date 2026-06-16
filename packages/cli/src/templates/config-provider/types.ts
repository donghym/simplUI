import { ReactNode, Context } from 'react'

/**
 * 主题配置
 */
export interface ThemeConfig {
  /** 主题模式 */
  mode?: 'light' | 'dark'
  /** 主题色 */
  primaryColor?: string
}

/**
 * ConfigProvider 全局配置
 */
export interface ConfigProviderProps {
  /** 子组件 */
  children: ReactNode
  /** 主题模式（已废弃，请使用 themeConfig.mode） */
  theme?: 'light' | 'dark'
  /** 主题配置 */
  themeConfig?: ThemeConfig
  /** 组件前缀 */
  prefixCls?: string
  /** 全局配置对象 */
  config?: Record<string, unknown>
  /** 自定义类名 */
  className?: string
}

/**
 * ConfigContext 上下文值
 */
export interface ConfigContextValue {
  /** 当前主题模式，'light' 为亮色模式，'dark' 为暗色模式 */
  theme: 'light' | 'dark'
  /** 主题配置 */
  themeConfig: ThemeConfig
  /** 组件类名前缀，用于生成所有组件的 CSS 类名前缀 */
  prefixCls: string
  /** 全局配置对象，可存储任意键值对供子组件读取 */
  config: Record<string, unknown>
}

/**
 * 默认配置
 */
export const defaultConfig: ConfigContextValue = {
  theme: 'light',
  themeConfig: {
    mode: 'light',
    primaryColor: '#1677FF',
  },
  prefixCls: 'simplui',
  config: {},
}

export type { Context }
