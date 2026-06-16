import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Progress } from './index'
import { Button } from '../button/index'

const meta: Meta<typeof Progress> = {
  title: '反馈/Progress 进度条',
  component: Progress,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: '进度条用于展示操作的当前进度。适用于文件上传、数据加载、任务完成度等场景，支持线性和圆形两种样式以及成功/错误状态。',
      },
    },
  },
  argTypes: {
    progressShape: { control: 'select', options: ['line', 'circle'], description: '进度条形状，line 为线性进度条，circle 为圆形进度条' },
    status: { control: 'select', options: ['normal', 'success', 'error'], description: '进度条状态，normal 为默认色，success 为成功色，error 为错误色' },
    showText: { control: 'boolean', description: '是否显示进度文字' },
  },
}

export default meta
type Story = StoryObj<typeof Progress>

export const LineDefault: Story = {
  args: {
    percent: 30,
    progressShape: 'line',
    showText: true,
  },
}

export const LineSuccess: Story = {
  args: {
    percent: 100,
    progressShape: 'line',
    status: 'success',
    showText: true,
  },
}

export const LineError: Story = {
  args: {
    percent: 70,
    progressShape: 'line',
    status: 'error',
    showText: true,
  },
}

export const LineNoText: Story = {
  args: {
    percent: 50,
    progressShape: 'line',
    showText: false,
  },
}

export const LineCustomWidth: Story = {
  args: {
    percent: 45,
    progressShape: 'line',
    strokeWidth: 8,
    showText: true,
  },
}

export const CircleDefault: Story = {
  args: {
    percent: 75,
    progressShape: 'circle',
    showText: true,
  },
}

export const CircleSuccess: Story = {
  args: {
    percent: 100,
    progressShape: 'circle',
    status: 'success',
    showText: true,
  },
}

export const CircleError: Story = {
  args: {
    percent: 50,
    progressShape: 'circle',
    status: 'error',
    showText: true,
  },
}

export const CircleCustomSize: Story = {
  args: {
    percent: 60,
    progressShape: 'circle',
    circleSize: 80,
    showText: true,
  },
}

export const CustomFormat: Story = {
  render: () => (
    <Progress
      percent={85}
      progressShape="line"
      showText
      format={(p) => `剩余 ${p} 天`}
    />
  ),
}

export const StepsProgress: Story = {
  args: {
    percent: 60,
    progressShape: 'line',
    steps: 5,
    showText: true,
  },
}

export const DynamicProgress: Story = {
  render: () => {
    const [percent, setPercent] = useState(30)
    return (
      <div className="space-y-3 w-full max-w-md">
        <Progress percent={percent} progressShape="line" showText />
        <div className="flex gap-2">
          <Button onClick={() => setPercent((p) => Math.max(0, p - 10))}>-10%</Button>
          <Button onClick={() => setPercent((p) => Math.min(100, p + 10))}>+10%</Button>
        </div>
      </div>
    )
  },
}

export const DashboardProgress: Story = {
  render: () => {
    const [percent] = useState(75)
    const circleSize = 120
    const radius = (circleSize - 8) / 2
    const circumference = Math.PI * radius
    const strokeDashoffset = circumference - (percent / 100) * circumference

    return (
      <div className="space-y-4">
        <div className="relative inline-flex items-center justify-center" style={{ width: circleSize, height: circleSize / 2 + 10, overflow: 'hidden' }}>
          <svg width={circleSize} height={circleSize} className="-rotate-90" style={{ marginTop: 5 }}>
            <circle
              cx={circleSize / 2}
              cy={circleSize / 2}
              r={radius}
              fill="none"
              stroke="currentColor"
              strokeWidth={6}
              className="text-border"
              strokeDasharray={circumference}
              strokeLinecap="round"
            />
            <circle
              cx={circleSize / 2}
              cy={circleSize / 2}
              r={radius}
              fill="none"
              stroke="currentColor"
              strokeWidth={6}
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              className="text-primary-500 transition-all duration-300 ease-out"
            />
          </svg>
          <span className="absolute bottom-0 text-lg font-medium text-foreground">
            {percent}%
          </span>
        </div>
        <p className="text-sm text-muted-foreground">仪表盘/半圆样式进度条</p>
      </div>
    )
  },
}

export const GradientProgress: Story = {
  render: () => {
    const [percent] = useState(70)

    return (
      <div className="space-y-3 w-full max-w-md">
        <div className="flex items-center gap-3">
          <div className="h-2 flex-1 rounded-full bg-muted overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-300 ease-out"
              style={{
                width: `${percent}%`,
                background: 'linear-gradient(90deg, #6366f1, #ec4899, #f59e0b)',
              }}
            />
          </div>
          <span className="text-sm text-muted-foreground min-w-[3em] text-right">{percent}%</span>
        </div>
        <p className="text-sm text-muted-foreground">渐变色进度条（使用 CSS linear-gradient）</p>
      </div>
    )
  },
}