import type { Meta, StoryObj } from '@storybook/react'
import { FloatButton } from './index'

const INFO_ICON = (
  <svg viewBox="64 64 896 896" width="1em" height="1em" fill="currentColor">
    <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" />
    <path d="M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z" />
  </svg>
)

const meta: Meta<typeof FloatButton> = {
  title: '通用/FloatButton 悬浮按钮',
  component: FloatButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: '用于在页面中悬浮展示的重要操作按钮。',
      },
    },
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['default', 'primary'],
      description: '按钮类型，default 为默认样式，primary 为主色样式',
    },
    shapeVariant: {
      control: 'select',
      options: ['circle', 'square'],
      description: '按钮形状，circle 为圆形，square 为方形',
    },
    tooltip: {
      control: 'text',
      description: '提示气泡内容',
    },
    description: {
      control: 'text',
      description: '按钮文字描述',
    },
  },
}

export default meta

type Story = StoryObj<typeof FloatButton>

export const Basic: Story = {
  args: {
    icon: INFO_ICON,
  },
}

export const Primary: Story = {
  args: {
    type: 'primary',
    icon: INFO_ICON,
  },
}

export const Square: Story = {
  args: {
    shapeVariant: 'square',
    description: '帮助',
    icon: INFO_ICON,
  },
}

export const WithTooltip: Story = {
  args: {
    tooltip: '客服支持',
    icon: INFO_ICON,
  },
}

export const Group: Story = {
  render: () => (
    <FloatButton.Group trigger="click" type="primary">
      <FloatButton icon={<span>1</span>} tooltip="操作一" />
      <FloatButton icon={<span>2</span>} tooltip="操作二" />
      <FloatButton icon={<span>3</span>} tooltip="操作三" />
    </FloatButton.Group>
  ),
}
