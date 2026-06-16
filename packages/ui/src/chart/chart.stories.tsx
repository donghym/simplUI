import type { Meta, StoryObj } from '@storybook/react'
import { Chart } from './index'
import { ChartHeader } from '../chart/index'
import { ChartBody } from '../chart/index'

const meta: Meta<typeof Chart> = {
  title: '数据展示/Chart 图表',
  component: Chart,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
}

export default meta
type Story = StoryObj<typeof Chart>

export const Default: Story = {
  render: () => (
    <Chart title="销售概览" description="月度销售数据">
      <ChartBody>
        <div className="h-[200px] flex items-center justify-center bg-gray-100 rounded">
          图表内容占位
        </div>
      </ChartBody>
    </Chart>
  ),
}

export const Bordered: Story = {
  render: () => (
    <Chart bordered title="收入" description="季度收入">
      <ChartBody>
        <div className="h-[150px] flex items-center justify-center">
          收入图表
        </div>
      </ChartBody>
    </Chart>
  ),
}

export const Loading: Story = {
  render: () => (
    <Chart loading title="图表加载中">
      <ChartBody>
        <div className="h-[200px]">内容</div>
      </ChartBody>
    </Chart>
  ),
}

export const WithHeader: Story = {
  render: () => (
    <Chart>
      <ChartHeader title="自定义标题" description="自定义布局" />
      <ChartBody>
        <div className="h-[200px] bg-primary-50 rounded flex items-center justify-center">
          图表区域
        </div>
      </ChartBody>
    </Chart>
  ),
}

export const NoTitle: Story = {
  render: () => (
    <Chart>
      <ChartBody>
        <div className="h-[200px] bg-gray-50 rounded p-4">
          无标题图表
        </div>
      </ChartBody>
    </Chart>
  ),
}

/** 柱状图 */
export const BarChart: Story = {
  render: () => {
    const data = [
      { label: '一月', value: 65 },
      { label: '二月', value: 40 },
      { label: '三月', value: 85 },
      { label: '四月', value: 55 },
      { label: '五月', value: 72 },
      { label: '六月', value: 90 },
    ]
    const maxValue = Math.max(...data.map((d) => d.value))

    return (
      <Chart title="月度销售" description="柱状图示例">
        <ChartBody>
          <div className="h-[240px] flex items-end gap-3 px-4 pt-4 pb-2">
            {data.map((item) => (
              <div key={item.label} className="flex-1 flex flex-col items-center gap-1">
                <span className="text-xs text-gray-500">{item.value}</span>
                <div
                  className="w-full rounded-t-md bg-indigo-500 transition-all"
                  style={{ height: `${(item.value / maxValue) * 180}px` }}
                />
                <span className="text-xs text-gray-600">{item.label}</span>
              </div>
            ))}
          </div>
        </ChartBody>
      </Chart>
    )
  },
}

/** 折线图 */
export const LineChart: Story = {
  render: () => {
    const data = [30, 45, 28, 60, 52, 78, 65, 90, 72, 85, 68, 95]
    const labels = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
    const maxValue = Math.max(...data)
    const minValue = Math.min(...data)
    const range = maxValue - minValue || 1
    const chartHeight = 200
    const chartWidth = 500
    const stepX = chartWidth / (data.length - 1)

    const points = data
      .map((val, i) => {
        const x = i * stepX
        const y = chartHeight - ((val - minValue) / range) * (chartHeight - 20) - 10
        return `${x},${y}`
      })
      .join(' ')

    return (
      <Chart title="年度趋势" description="折线图示例">
        <ChartBody>
          <div className="h-[260px] p-4">
            <svg viewBox={`0 0 ${chartWidth} ${chartHeight + 30}`} className="w-full h-full" preserveAspectRatio="xMidYMid meet">
              <polyline
                fill="none"
                stroke="#6366f1"
                strokeWidth="2"
                points={points}
              />
              {data.map((val, i) => {
                const x = i * stepX
                const y = chartHeight - ((val - minValue) / range) * (chartHeight - 20) - 10
                return (
                  <g key={i}>
                    <circle cx={x} cy={y} r="4" fill="#6366f1" />
                    <text x={x} y={chartHeight + 20} textAnchor="middle" className="text-[10px]" fill="#6b7280">
                      {labels[i]}
                    </text>
                  </g>
                )
              })}
            </svg>
          </div>
        </ChartBody>
      </Chart>
    )
  },
}