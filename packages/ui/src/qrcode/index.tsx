import React, { forwardRef, useMemo } from 'react'
import { cn } from '../lib/utils'
import { qrcodeVariants } from './qrcode-variants'
import type { QRCodeProps } from './types'

export type { QRCodeProps }

/**
 * QRCode 二维码组件
 *
 * 用于生成和展示二维码。
 *
 * ### 何时使用
 * - 需要扫码支付、添加好友、下载应用等场景
 * - 需要将信息编码为二维码时
 *
 * ### 示例
 * ```tsx
 * <QRCode value="https://example.com" />
 * ```
 */
export const QRCode = forwardRef<HTMLDivElement, QRCodeProps>(({
  value,
  size = 160,
  color = '#000',
  bgColor = '#fff',
  bordered = true,
  status = 'active',
  onRefresh,
  icon,
  iconSize = 40,
  style,
  className,
}, ref) => {
  const qrDataUrl = useMemo(() => {
    // 使用 Google Chart API 生成二维码
    const encoded = encodeURIComponent(value)
    return `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encoded}&color=${color.replace('#', '')}&bgcolor=${bgColor.replace('#', '')}`
  }, [value, size, color, bgColor])

  const isExpired = status === 'expired'
  const isLoading = status === 'loading'
  const isScanned = status === 'scanned'

  return (
    <div
      ref={ref}
      className={cn(qrcodeVariants({ bordered }), className)}
      style={{ '--qr-bg': bgColor, ...style } as React.CSSProperties}
    >
      {isLoading ? (
        <div
          className="flex items-center justify-center text-[#bfbfbf]"
          style={{ width: size, height: size }}
        >
          <svg width="32" height="32" viewBox="0 0 32 32">
            <circle cx="16" cy="16" r="12" fill="none" stroke="#d9d9d9" strokeWidth="2" />
            <path
              d="M16 4 A12 12 0 0 1 28 16"
              fill="none"
              stroke="#1677FF"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 16 16"
                to="360 16 16"
                dur="1s"
                repeatCount="indefinite"
              />
            </path>
          </svg>
        </div>
      ) : (
        <div className="relative" style={{ width: size, height: size }}>
          <img
            src={qrDataUrl}
            alt="QR Code"
            className={cn(isExpired || isScanned ? 'opacity-30' : 'opacity-100')}
            style={{ width: size, height: size }}
          />
          {icon && (
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded overflow-hidden border"
              style={{
                width: iconSize,
                height: iconSize,
                '--qr-bg': bgColor,
                '--icon-border': bordered ? '#f0f0f0' : 'transparent',
                background: 'var(--qr-bg)',
                borderColor: 'var(--icon-border)',
              } as React.CSSProperties}
            >
              <img src={icon} alt="icon" className="w-full h-full object-cover" />
            </div>
          )}
          {(isExpired || isScanned) && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
              <span className="text-[#595959] text-sm">
                {isExpired ? '二维码已过期' : '已扫描'}
              </span>
              {isExpired && onRefresh && (
                <button
                  type="button"
                  onClick={onRefresh}
                  className="px-3 py-1 border border-[#d9d9d9] rounded bg-white cursor-pointer text-sm"
                >
                  点击刷新
                </button>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  )
})

QRCode.displayName = 'QRCode'
