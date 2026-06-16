import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { StaggerMenu } from './index'
import type { StaggerMenuItem } from './types'

const meta: Meta<typeof StaggerMenu> = {
  title: '动效/StaggerMenu 逐帧展开菜单',
  component: StaggerMenu,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    open: {
      control: 'boolean',
      description: '是否展开',
    },
    staggerDelay: {
      control: 'number',
      description: '每项动画延迟毫秒',
    },
    direction: {
      control: 'select',
      options: ['down', 'up', 'left', 'right'],
      description: '动画方向',
    },
  },
}

export default meta
type Story = StoryObj<typeof StaggerMenu>

const sampleItems: StaggerMenuItem[] = [
  { label: '新建文件', onClick: () => console.log('新建文件') },
  { label: '打开项目', onClick: () => console.log('打开项目') },
  { label: '保存', onClick: () => console.log('保存') },
  { label: '另存为', disabled: true },
  { label: '退出', onClick: () => console.log('退出') },
]

export const Default: Story = {
  args: {
    items: sampleItems,
  },
}

export const DirectionDown: Story = {
  args: {
    items: sampleItems,
    direction: 'down',
  },
}

export const DirectionUp: Story = {
  args: {
    items: sampleItems,
    direction: 'up',
  },
}

export const DirectionLeft: Story = {
  args: {
    items: sampleItems,
    direction: 'left',
  },
}

export const DirectionRight: Story = {
  args: {
    items: sampleItems,
    direction: 'right',
  },
}

export const ToggleOpen: Story = {
  render: () => {
    const [open, setOpen] = useState(true)
    return (
      <div className="space-y-4">
        <button
          type="button"
          className="px-3 py-1.5 text-sm rounded-md border border-border hover:bg-muted transition-colors"
          onClick={() => setOpen(!open)}
        >
          {open ? '收起' : '展开'}
        </button>
        <StaggerMenu items={sampleItems} open={open} staggerDelay={80} />
      </div>
    )
  },
}

export const SlowStagger: Story = {
  args: {
    items: sampleItems,
    staggerDelay: 150,
  },
}
