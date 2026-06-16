import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { PullToRefresh } from './index'

const meta: Meta<typeof PullToRefresh> = {
  title: '操作反馈/PullToRefresh 下拉刷新',
  component: PullToRefresh,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
}

export default meta
type Story = StoryObj<typeof PullToRefresh>

/** 基础用法 */
export const Default: Story = {
  render: () => {
    const [refreshing, setRefreshing] = useState(false)
    const handleRefresh = () => {
      setRefreshing(true)
      setTimeout(() => setRefreshing(false), 2000)
    }

    return (
      <PullToRefresh refreshing={refreshing} onRefresh={handleRefresh}>
        <div className="space-y-3 p-4">
          {Array.from({ length: 8 }, (_, i) => (
            <div key={i} className="h-16 rounded-lg bg-muted flex items-center justify-center text-sm text-muted-foreground">
              列表项 {i + 1}
            </div>
          ))}
        </div>
      </PullToRefresh>
    )
  },
}

/** 自定义提示文本 */
export const CustomText: Story = {
  render: () => {
    const [refreshing, setRefreshing] = useState(false)
    const handleRefresh = () => {
      setRefreshing(true)
      setTimeout(() => setRefreshing(false), 1500)
    }

    return (
      <PullToRefresh
        refreshing={refreshing}
        onRefresh={handleRefresh}
        pullingText="继续下拉"
        canReleaseText="松手即可刷新"
        refreshingText="正在加载..."
      >
        <div className="space-y-3 p-4">
          {Array.from({ length: 5 }, (_, i) => (
            <div key={i} className="h-16 rounded-lg bg-muted flex items-center justify-center text-sm text-muted-foreground">
              数据项 {i + 1}
            </div>
          ))}
        </div>
      </PullToRefresh>
    )
  },
}

/** 自定义指示器 */
export const CustomIndicator: Story = {
  render: () => {
    const [refreshing, setRefreshing] = useState(false)
    const handleRefresh = () => {
      setRefreshing(true)
      setTimeout(() => setRefreshing(false), 2000)
    }

    return (
      <PullToRefresh
        refreshing={refreshing}
        onRefresh={handleRefresh}
        indicator={(status) => {
          const map = {
            pulling: '↓ 下拉刷新',
            canRelease: '↑ 释放刷新',
            refreshing: '⟳ 加载中...',
          }
          return <span className="text-primary-500 font-medium">{map[status]}</span>
        }}
      >
        <div className="space-y-3 p-4">
          {Array.from({ length: 5 }, (_, i) => (
            <div key={i} className="h-16 rounded-lg bg-muted flex items-center justify-center text-sm text-muted-foreground">
              卡片 {i + 1}
            </div>
          ))}
        </div>
      </PullToRefresh>
    )
  },
}

/** 禁用状态 */
export const Disabled: Story = {
  render: () => (
    <PullToRefresh refreshing={false} onRefresh={() => {}} disabled>
      <div className="space-y-3 p-4">
        {Array.from({ length: 5 }, (_, i) => (
          <div key={i} className="h-16 rounded-lg bg-muted flex items-center justify-center text-sm text-muted-foreground">
            不可下拉刷新 {i + 1}
          </div>
        ))}
      </div>
    </PullToRefresh>
  ),
}

/** 自定义阈值 */
export const CustomThreshold: Story = {
  render: () => {
    const [refreshing, setRefreshing] = useState(false)
    const handleRefresh = () => {
      setRefreshing(true)
      setTimeout(() => setRefreshing(false), 1500)
    }

    return (
      <PullToRefresh
        refreshing={refreshing}
        onRefresh={handleRefresh}
        threshold={50}
        maxDistance={100}
      >
        <div className="space-y-3 p-4">
          <p className="text-sm text-muted-foreground">阈值 50px，最大距离 100px</p>
          {Array.from({ length: 5 }, (_, i) => (
            <div key={i} className="h-16 rounded-lg bg-muted flex items-center justify-center text-sm text-muted-foreground">
              项目 {i + 1}
            </div>
          ))}
        </div>
      </PullToRefresh>
    )
  },
}
