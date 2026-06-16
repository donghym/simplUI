import type { Meta, StoryObj } from '@storybook/react'
import { Spin } from './index'

const meta: Meta<typeof Spin> = {
  title: '反馈/Spin 加载中',
  component: Spin,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    spinning: {
      control: 'boolean',
      description: '加载状态，true 时显示加载动画，false 时隐藏，默认 true',
    },
    spinSize: {
      control: 'select',
      options: ['small', 'default', 'large'],
      description: 'Spin 尺寸，可选 small、default、large',
    },
    delay: {
      control: 'number',
      description: '加载延迟时间（毫秒），设置后 spinning 变为 true 时延迟指定时间后再显示，避免闪烁',
    },
    tip: {
      control: 'text',
      description: '加载提示文字，显示在加载图标下方',
    },
  },
}

export default meta
type Story = StoryObj<typeof Spin>

export const Default: Story = {
  args: {
    spinning: true,
  },
}

export const Small: Story = {
  args: {
    spinning: true,
    spinSize: 'small',
  },
}

export const Large: Story = {
  args: {
    spinning: true,
    spinSize: 'large',
  },
}

export const WithTip: Story = {
  args: {
    spinning: true,
    tip: '加载中...',
  },
}

export const CustomIndicator: Story = {
  render: () => (
    <Spin
      spinning
      indicator={
        <span className="flex items-center gap-1">
          <span className="h-2.5 w-2.5 rounded-full bg-primary-500 animate-pulse" style={{ animationDelay: '0ms' }} />
          <span className="h-2.5 w-2.5 rounded-full bg-primary-500 animate-pulse" style={{ animationDelay: '150ms' }} />
          <span className="h-2.5 w-2.5 rounded-full bg-primary-500 animate-pulse" style={{ animationDelay: '300ms' }} />
        </span>
      }
    />
  ),
}

export const WithChildren: Story = {
  render: () => (
    <Spin
      spinning
      tip="内容加载中..."
    >
      <div className="p-4 bg-gray-100 rounded">
        <p>此内容被 Spin 包裹。</p>
        <p>加载时会出现遮罩层。</p>
      </div>
    </Spin>
  ),
}

export const NotSpinning: Story = {
  render: () => (
    <Spin
      spinning={false}
    >
      <div className="p-4 bg-gray-100 rounded">
        <p>未加载时内容可见。</p>
      </div>
    </Spin>
  ),
}

export const DelayedSpin: Story = {
  args: {
    spinning: true,
    delay: 500,
    tip: '延迟 500ms 以避免闪烁',
  },
}