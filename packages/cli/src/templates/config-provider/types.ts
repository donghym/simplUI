import { ReactNode, Context } from 'react'

/**
 * ConfigProvider 全局配置
 */
export interface ConfigProviderProps {
  /** 子组件 */
  children: ReactNode
  /** 主题模式 */
  theme?: 'light' | 'dark'
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
  prefixCls: 'simplui',
  config: {},
}

export type { Context }
