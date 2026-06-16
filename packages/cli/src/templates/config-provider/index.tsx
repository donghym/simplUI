import { forwardRef, useEffect, useMemo, useContext } from 'react'
import { cn } from '../lib/utils'
import { ConfigContext } from './config-provider-variants'
import type { ConfigProviderProps, ConfigContextValue } from './types'

/**
 * ConfigProvider 全局配置组件
 *
 * 用于在组件树顶层提供全局配置，包括主题、组件前缀等。
 * 所有 simplUI 组件都可以通过 useConfig 获取这些配置。
 */
const ConfigProvider = forwardRef<HTMLDivElement, ConfigProviderProps>((props, ref) => {
  const { children, theme = 'light', prefixCls = 'simplui', config = {}, className } = props

  const contextValue: ConfigContextValue = useMemo(
    () => ({
      theme,
      prefixCls,
      config,
    }),
    [theme, prefixCls, config]
  )

  // 同步主题到 data-theme 属性
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

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
export type { ConfigProviderProps, ConfigContextValue } from './types'
export { ConfigContext } from './config-provider-variants'

export default ConfigProvider
