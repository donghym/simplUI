import { forwardRef } from 'react'
import { CheckCircle2, XCircle, Info, AlertTriangle, FileQuestion, ShieldX, ServerCrash } from 'lucide-react'
import { cn } from '../lib/utils'
import { resultVariants } from './result-variants'
import type { ResultProps, ResultStatus } from './types'

export type { ResultProps, ResultStatus }

const iconColorClass: Record<ResultStatus, string> = {
  success: 'text-success-500',
  error: 'text-danger-500',
  info: 'text-primary-500',
  warning: 'text-warning-500',
  '404': 'text-gray-500',
  '403': 'text-danger-500',
  '500': 'text-danger-500',
}

const iconMap: Record<ResultStatus, React.ReactNode> = {
  success: <CheckCircle2 className={cn('w-16 h-16', iconColorClass.success)} aria-hidden="true" />,
  error: <XCircle className={cn('w-16 h-16', iconColorClass.error)} aria-hidden="true" />,
  info: <Info className={cn('w-16 h-16', iconColorClass.info)} aria-hidden="true" />,
  warning: <AlertTriangle className={cn('w-16 h-16', iconColorClass.warning)} aria-hidden="true" />,
  '404': <FileQuestion className={cn('w-16 h-16', iconColorClass['404'])} aria-hidden="true" />,
  '403': <ShieldX className={cn('w-16 h-16', iconColorClass['403'])} aria-hidden="true" />,
  '500': <ServerCrash className={cn('w-16 h-16', iconColorClass['500'])} aria-hidden="true" />,
}

/**
 * Result 结果页组件
 *
 * 用于展示操作结果页面，如成功、失败、错误等状态。
 *
 * ### 何时使用
 * - 当用户完成一个操作后需要反馈结果时
 * - 展示错误页面（404、403、500 等）
 *
 * ### 示例
 * ```tsx
 * <Result status="success" title="操作成功" subTitle="您的数据已保存" />
 * <Result status="404" title="页面不存在" />
 * ```
 */
export const Result = forwardRef<HTMLDivElement, ResultProps>(
  (props, ref) => {
    const {
      status = 'info',
      title,
      subTitle,
      icon,
      extra,
      style,
      className,
      ...rest
    } = props

    const displayIcon = icon !== undefined ? icon : iconMap[status]

    return (
      <div
        ref={ref}
        className={cn(
          resultVariants({ status }),
          className,
        )}
        style={style}
        role="status"
        aria-label={`${status} result`}
        {...rest}
      >
        {displayIcon && (
          <div className="sui-result__icon mb-6">
            {displayIcon}
          </div>
        )}
        {title && (
          <div className="sui-result__title text-xl font-semibold text-foreground mb-2">
            {title}
          </div>
        )}
        {subTitle && (
          <div className="sui-result__subtitle text-sm text-muted-foreground mb-6">
            {subTitle}
          </div>
        )}
        {extra && (
          <div className="sui-result__extra flex gap-2">
            {extra}
          </div>
        )}
      </div>
    )
  },
)

Result.displayName = 'Result'
