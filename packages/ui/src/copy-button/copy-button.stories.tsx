import type { Meta, StoryObj } from '@storybook/react'
import { CopyButton } from './index'

const meta: Meta<typeof CopyButton> = {
  title: '通用/CopyButton 一键复制',
  component: CopyButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    text: {
      control: 'text',
      description: '要复制的文本内容',
    },
    variant: {
      control: 'select',
      options: ['default', 'primary', 'ghost'],
      description: '按钮变体，决定视觉风格',
    },
    showTooltip: {
      control: 'boolean',
      description: '是否显示 tooltip 提示',
    },
    successDuration: {
      control: 'number',
      description: '成功状态持续时间毫秒',
    },
  },
}

export default meta
type Story = StoryObj<typeof CopyButton>

export const Default: Story = {
  args: {
    text: 'Hello, SimplUI!',
  },
}

export const Primary: Story = {
  args: {
    text: '主要复制按钮',
    variant: 'primary',
  },
}

export const Ghost: Story = {
  args: {
    text: '幽灵复制按钮',
    variant: 'ghost',
  },
}

export const NoTooltip: Story = {
  args: {
    text: '无提示复制',
    showTooltip: false,
  },
}

export const CustomTooltip: Story = {
  args: {
    text: '自定义提示文本',
    tooltipText: { success: '复制成功啦', error: '哎呀失败了', default: '点我复制' },
  },
}

export const Variants: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <CopyButton text="默认变体" variant="default" />
      <CopyButton text="主要变体" variant="primary" />
      <CopyButton text="幽灵变体" variant="ghost" />
    </div>
  ),
}

export const LongText: Story = {
  args: {
    text: '这是一段很长的文本内容，用于测试复制功能的稳定性与可靠性。',
  },
}
