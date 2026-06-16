import React, { forwardRef } from 'react'
import type { IconProps, CustomIconProps, IconFontOptions } from './types'

export type { IconProps, CustomIconProps, IconFontOptions } from './types'
export * from './icons'
export * from './icon-outlined'

/* ─── Two-tone color global ─── */

let globalTwoToneColor: string | undefined = '#1677FF'

export function setTwoToneColor(color: string): void {
  globalTwoToneColor = color
}

export function getTwoToneColor(): string {
  return globalTwoToneColor!
}

/* ─── Base Icon (for custom components) ─── */

export function Icon(props: CustomIconProps) {
  const { component: Component, className, rotate, spin, style, onClick, ...rest } = props
  const mergedStyle = {
    ...(rotate ? { transform: `rotate(${rotate}deg)` } : {}),
    ...style,
  }
  return (
    <span
      className={['sui-icon', spin ? 'sui-icon-spin' : '', className].filter(Boolean).join(' ') || undefined}
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
      const mergedStyle = {
        ...(rotate ? { transform: `rotate(${rotate}deg)` } : {}),
        ...style,
      }
      return (
        <span
          className={['sui-icon', spin ? 'sui-icon-spin' : '', className].filter(Boolean).join(' ') || undefined}
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