import type { Meta, StoryObj } from '@storybook/react'
import { AnimateCountdown } from './index'

const meta: Meta<typeof AnimateCountdown> = {
  title: '动效/AnimateCountdown 动画倒计时',
  component: AnimateCountdown,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'danger'],
      description: '颜色变体',
    },
    targetDate: {
      control: 'date',
      description: '目标时间',
    },
  },
}

export default meta
type Story = StoryObj<typeof AnimateCountdown>

/** 默认 10 秒后 */
const future10s = new Date(Date.now() + 10 * 1000)
const future1h = new Date(Date.now() + 60 * 60 * 1000)
const future3d = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000)
const past = new Date(Date.now() - 1000)

export const Default: Story = {
  args: {
    targetDate: future1h,
  },
}

export const TenSeconds: Story = {
  args: {
    targetDate: future10s,
  },
}

export const WithDays: Story = {
  args: {
    targetDate: future3d,
  },
}

export const Finished: Story = {
  args: {
    targetDate: past,
  },
}

export const Primary: Story = {
  args: {
    targetDate: future1h,
    variant: 'primary',
  },
}

export const Danger: Story = {
  args: {
    targetDate: future10s,
    variant: 'danger',
  },
}

export const CustomFormat: Story = {
  args: {
    targetDate: future1h,
    format: ({ days, hours, minutes, seconds }) =>
      `${days}天 ${hours}时 ${minutes}分 ${seconds}秒`,
  },
}

export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div>
        <p className="text-sm text-muted-foreground mb-2">默认</p>
        <AnimateCountdown targetDate={future1h} variant="default" />
      </div>
      <div>
        <p className="text-sm text-muted-foreground mb-2">主要色</p>
        <AnimateCountdown targetDate={future1h} variant="primary" />
      </div>
      <div>
        <p className="text-sm text-muted-foreground mb-2">危险色</p>
        <AnimateCountdown targetDate={future1h} variant="danger" />
      </div>
    </div>
  ),
}
