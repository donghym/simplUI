import React, { forwardRef } from 'react'
import { cn } from '../lib/utils'
import type { AppProps } from './types'

export type { AppProps }

/**
 * App 应用容器组件
 *
 * 用于包裹整个应用，提供全局上下文。
 *
 * ### 何时使用
 * - 作为应用的根容器
 * - 需要全局配置时
 *
 * ### 示例
 * ```tsx
 * <App>
 *   <Layout>
 *     <Content />
 *   </Layout>
 * </App>
 * ```
 */
export const App = forwardRef<HTMLDivElement, AppProps>(({ children, style, className }, ref) => {
  return (
    <div
      ref={ref}
      className={cn('sui-app w-full min-h-screen', className)}
      style={style}
    >
      {children}
    </div>
  )
})

App.displayName = 'App'
