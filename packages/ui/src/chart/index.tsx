import { forwardRef } from 'react'
import { Loader2 } from 'lucide-react'
import { cn } from '../lib/utils'
import {
  chartVariants,
  chartHeaderVariants,
  chartTitleVariants,
  chartDescriptionVariants,
  chartBodyVariants,
} from './chart-variants'
import type { ChartProps, ChartHeaderProps, ChartBodyProps } from './types'

/**
 * ChartHeader 图表头部
 */
const ChartHeader = forwardRef<HTMLDivElement, ChartHeaderProps>((props, ref) => {
  const { title, description, className, children, ...rest } = props
  return (
    <div ref={ref} className={cn(chartHeaderVariants(), className)} {...rest}>
      {title && <div className={cn(chartTitleVariants())}>{title}</div>}
      {description && <div className={cn(chartDescriptionVariants())}>{description}</div>}
      {children}
    </div>
  )
})
ChartHeader.displayName = 'ChartHeader'

/**
 * ChartBody 图表内容区
 */
const ChartBody = forwardRef<HTMLDivElement, ChartBodyProps>((props, ref) => {
  const { children, className, ...rest } = props
  return (
    <div ref={ref} className={cn(chartBodyVariants(), className)} {...rest}>
      {children}
    </div>
  )
})
ChartBody.displayName = 'ChartBody'

/**
 * Chart 图表容器
 *
 * 用于包裹第三方图表库（如 ECharts、Recharts）的容器组件。
 * 提供标题、描述、边框、加载状态等通用功能。
 */
const Chart = forwardRef<HTMLDivElement, ChartProps>((props, ref) => {
  const { title, description, children, bordered = false, loading = false, className, ...rest } = props

  return (
    <div ref={ref} aria-label={typeof title === 'string' ? title : '图表'} className={cn(chartVariants({ bordered }), loading && 'pointer-events-none', className)} {...rest}>
      {(title || description) && (
        <ChartHeader title={title} description={description} />
      )}
      <ChartBody>
        {loading ? (
          <div className="flex items-center justify-center h-full min-h-[200px]" role="status">
            <Loader2 className="h-8 w-8 animate-spin text-primary-500" aria-hidden="true" />
          </div>
        ) : (
          children
        )}
      </ChartBody>
    </div>
  )
})

Chart.displayName = 'Chart'

export { Chart, ChartHeader, ChartBody }
export type { ChartProps, ChartHeaderProps, ChartBodyProps } from './types'
export {
  chartVariants,
  chartHeaderVariants,
  chartTitleVariants,
  chartDescriptionVariants,
  chartBodyVariants,
} from './chart-variants'

export default Chart
