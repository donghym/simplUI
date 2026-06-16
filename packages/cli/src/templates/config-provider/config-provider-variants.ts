import { Context, createContext } from 'react'
import { defaultConfig, ConfigContextValue } from './types'

// ConfigProvider 上下文
export const ConfigContext: Context<ConfigContextValue> = createContext(defaultConfig)
