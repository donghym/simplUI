import React, { forwardRef } from 'react'
import { cn } from '../lib/utils'
import type { IconProps, CustomIconProps, IconFontOptions } from './types'

export type { IconProps, CustomIconProps, IconFontOptions } from './types'
export * from './icons'
export * from './icon-outlined'

/* ─── 双色图标全局颜色 ─── */

let globalTwoToneColor: string | undefined = '#1677FF'

export function setTwoToneColor(color: string): void {
  globalTwoToneColor = color
}

export function getTwoToneColor(): string {
  return globalTwoToneColor!
}

/* ─── 基础图标（用于自定义组件）─── */

export function Icon(props: CustomIconProps) {
  const { component: Component, className, rotate, spin, style, onClick, ...rest } = props
  // rotate 和 spin 通过 style 实现，动态值无法用 Tailwind className 表示
  const mergedStyle = {
    ...(rotate ? { transform: `rotate(${rotate}deg)` } : {}),
    ...(spin ? { animation: 'spin 1s linear infinite' } : {}),
    ...style,
  }
  return (
    <span
      className={cn('sui-icon', className)}
      style={mergedStyle}
      onClick={onClick}
      {...rest}
    >
      <Component />
    </span>
  )
}

/* ─── createFromIconfontCN ─── */

let loadedScripts: string[] = []

export function createFromIconfontCN(options: IconFontOptions) {
  const { scriptUrl, extraCommonProps = {} } = options

  if (scriptUrl) {
    const urls = Array.isArray(scriptUrl) ? scriptUrl : [scriptUrl]
    urls.forEach((url) => {
      if (!loadedScripts.includes(url)) {
        const script = document.createElement('script')
        script.src = url
        script.async = true
        document.body.appendChild(script)
        loadedScripts.push(url)
      }
    })
  }

  const Iconfont = forwardRef<HTMLSpanElement, IconProps & { type: string }>(
    ({ type, className, rotate, spin, style, onClick, ...rest }) => {
      // rotate 和 spin 通过 style 实现，动态值无法用 Tailwind className 表示
      const mergedStyle = {
        ...(rotate ? { transform: `rotate(${rotate}deg)` } : {}),
        ...(spin ? { animation: 'spin 1s linear infinite' } : {}),
        ...style,
      }
      return (
        <span
          className={cn('sui-icon', className)}
          style={mergedStyle}
          onClick={onClick}
          {...rest}
        >
          <svg width="1em" height="1em" fill="currentColor" aria-hidden {...extraCommonProps}>
            <use xlinkHref={`#${type}`} />
          </svg>
        </span>
      )
    },
  )

  Iconfont.displayName = 'Iconfont'
  return Iconfont
}