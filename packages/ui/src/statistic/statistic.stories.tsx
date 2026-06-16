import type { Meta, StoryObj } from '@storybook/react'
import { useState, useEffect, useRef } from 'react'
import { Statistic } from './index'
import { ArrowUp, ArrowDown, DollarSign } from 'lucide-react'

const meta: Meta<typeof Statistic> = {
  title: '数据展示/Statistic 统计数值',
  component: Statistic,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: '数值标题，显示在数值上方',
    },
    value: {
      control: 'number',
      description: '数值内容，可以是数字或字符串',
    },
    precision: {
      control: 'number',
      description: '数值精度，小数点后位数，仅当 value 为数字时生效',
    },
    groupSeparator: {
      control: 'text',
      description: '千分位分隔符，默认 ","',
    },
    decimalSeparator: {
      control: 'text',
      description: '小数点分隔符，默认 "."',
    },
  },
  parameters: {
    layout: 'padded',
  },
}

export default meta
type Story = StoryObj<typeof Statistic>

export const Default: Story = {
  args: {
    title: '活跃用户',
    value: 12345,
  },
}

export const WithPrefix: Story = {
  args: {
    title: '收入',
    value: 50000,
    prefix: <DollarSign className="h-4 w-4" />,
  },
}

export const WithSuffix: Story = {
  args: {
    title: '增长率',
    value: 25,
    suffix: '%',
  },
}

export const WithArrowUp: Story = {
  args: {
    title: '增长',
    value: 15,
    prefix: <ArrowUp className="h-4 w-4 text-success-500" />,
    suffix: '%',
  },
}

export const WithArrowDown: Story = {
  args: {
    title: '下降',
    value: 8,
    prefix: <ArrowDown className="h-4 w-4 text-danger-500" />,
    suffix: '%',
  },
}

export const DecimalValue: Story = {
  args: {
    title: '平均分数',
    value: 4.567,
    precision: 2,
  },
}

export const LargeNumber: Story = {
  args: {
    title: '总销售额',
    value: 1000000,
  },
}

export const CustomValueStyle: Story = {
  args: {
    title: '自定义样式',
    value: 999,
    valueStyle: { color: 'var(--color-primary)', fontSize: '32px' },
  },
}

export const Loading: Story = {
  args: {
    title: '加载中...',
    value: '-',
  },
}

export const Countdown: Story = {
  render: () => {
    const deadline = Date.now() + 10 * 60 * 1000 // 10 minutes from now
    const [remaining, setRemaining] = useState(deadline - Date.now())
    const timerRef = useRef<ReturnType<typeof setInterval>>()

    useEffect(() => {
      timerRef.current = setInterval(() => {
        const left = deadline - Date.now()
        if (left <= 0) {
          setRemaining(0)
          clearInterval(timerRef.current)
        } else {
          setRemaining(left)
        }
      }, 1000)
      return () => clearInterval(timerRef.current)
    }, [])

    const formatCountdown = (ms: number): string => {
      const totalSeconds = Math.max(0, Math.floor(ms / 1000))
      const hours = Math.floor(totalSeconds / 3600)
      const minutes = Math.floor((totalSeconds % 3600) / 60)
      const seconds = totalSeconds % 60
      const pad = (n: number) => String(n).padStart(2, '0')
      return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`
    }

    return (
      <div className="space-y-4">
        <Statistic
          title="倒计时"
          value={formatCountdown(remaining)}
          valueStyle={{ color: remaining <= 0 ? 'var(--color-danger)' : 'var(--color-primary)', fontVariantNumeric: 'tabular-nums' }}
        />
        <p className="text-sm text-muted-foreground">10 分钟倒计时，每秒更新</p>
      </div>
    )
  },
}

export const AnimatedValue: Story = {
  render: () => {
    const target = 12345
    const [current, setCurrent] = useState(0)
    const rafRef = useRef<number>()
    const startTimeRef = useRef<number>()
    const duration = 1500

    useEffect(() => {
      startTimeRef.current = Date.now()
      const animate = () => {
        const elapsed = Date.now() - startTimeRef.current!
        const progress = Math.min(elapsed / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        setCurrent(Math.round(eased * target))
        if (progress < 1) {
          rafRef.current = requestAnimationFrame(animate)
        }
      }
      rafRef.current = requestAnimationFrame(animate)
      return () => {
        if (rafRef.current) cancelAnimationFrame(rafRef.current)
      }
    }, [])

    return (
      <div className="space-y-4">
        <Statistic
          title="活跃用户"
          value={current}
        />
        <p className="text-sm text-muted-foreground">数值从 0 动画到 {target.toLocaleString()}，使用 requestAnimationFrame 实现平滑计数</p>
      </div>
    )
  },
}