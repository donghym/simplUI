import type { HTMLAttributes, ReactNode } from 'react'
import type { VariantProps } from 'class-variance-authority'
import { drawerVariants } from './drawer-variants'

/** 抽屉弹出方向 */
export type DrawerPlacement = 'left' | 'right' | 'top' | 'bottom'

/**
 * Drawer Props
 *
 * 抽屉面板，从屏幕边缘滑入，支持标题、内容、底部操作区和遮罩层。
 */
export interface DrawerProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'title'>,
    VariantProps<typeof drawerVariants> {
  /** 抽屉是否可见，受控 */
  open: boolean
  /** 关闭回调（点击遮罩层、关闭按钮或按 ESC 时触发） */
  onClose: () => void
  /** 抽屉标题 */
  title?: ReactNode
  /** 抽屉弹出位置，默认 right */
  placement?: DrawerPlacement
  /** 抽屉宽度（left/right 放置时生效），默认 378 */
  width?: number | string
  /** 抽屉高度（top/bottom 放置时生效），默认 378 */
  height?: number | string
  /** 底部操作区内容，不传时为空 */
  footer?: ReactNode
  /** 点击遮罩层是否关闭，默认 true */
  maskClosable?: boolean
  /** 是否显示关闭按钮，默认 true */
  closable?: boolean
  /** 关闭动画完成后的回调，延迟 200ms 触发 */
  afterClose?: () => void
  /** 自定义类名 */
  className?: string
}