import type { Meta, StoryObj } from '@storybook/react'
import { MorphButton } from './index'

const meta: Meta<typeof MorphButton> = {
  title: '动效/MorphButton 形变流体按钮',
  component: MorphButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'outline'],
      description: '按钮变体，决定视觉风格',
    },
    disabled: {
      control: 'boolean',
      description: '禁用状态',
    },
    htmlType: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
      description: '原生 button type 属性',
    },
  },
}

export default meta
type Story = StoryObj<typeof MorphButton>

export const Default: Story = {
  args: {
    children: '形变按钮',
  },
}

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: '主要形变',
  },
}

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: '描边形变',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    children: '禁用状态',
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4 items-center">
      <MorphButton variant="default">默认</MorphButton>
      <MorphButton variant="primary">主要</MorphButton>
      <MorphButton variant="outline">描边</MorphButton>
    </div>
  ),
}

export const InteractiveDemo: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <p className="text-sm text-muted-foreground">悬浮时 scaleX(1.05) + 圆角变化，点击时 scaleX(0.95)</p>
      <div className="flex flex-wrap gap-4 items-center">
        <MorphButton variant="primary">悬浮我试试</MorphButton>
        <MorphButton variant="default">点击我试试</MorphButton>
        <MorphButton variant="outline">描边形变</MorphButton>
      </div>
    </div>
  ),
}
