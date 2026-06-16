import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { WiredElement } from './index'

const meta: Meta<typeof WiredElement> = {
  title: '动效/WiredElement 手绘风组件集',
  component: WiredElement,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    elementType: {
      control: 'select',
      options: ['button', 'card', 'input'],
      description: '手绘风元素类型',
    },
    sketchy: {
      control: 'boolean',
      description: '是否使用虚线边框风格',
    },
    stroke: {
      control: 'color',
      description: '手绘线条颜色',
    },
    strokeWidth: {
      control: { type: 'range', min: 0.5, max: 4, step: 0.5 },
      description: '线条粗细',
    },
    roughness: {
      control: { type: 'range', min: 0, max: 5, step: 0.5 },
      description: '线条粗糙度',
    },
    fill: {
      control: 'color',
      description: '手绘填充色',
    },
  },
}

export default meta
type Story = StoryObj<typeof WiredElement>

export const Button: Story = {
  args: {
    elementType: 'button',
    children: '手绘按钮',
  },
}

export const Card: Story = {
  args: {
    elementType: 'card',
    children: <p className="text-sm">手绘风格卡片内容</p>,
  },
}

export const Input: Story = {
  args: {
    elementType: 'input',
    placeholder: '请输入内容...',
  },
}

export const SketchyButton: Story = {
  args: {
    elementType: 'button',
    sketchy: true,
    children: '虚线手绘按钮',
  },
}

export const SketchyCard: Story = {
  args: {
    elementType: 'card',
    sketchy: true,
    children: <p className="text-sm">虚线手绘卡片</p>,
  },
}

export const AllTypes: Story = {
  render: () => (
    <div className="flex flex-col gap-6 max-w-sm">
      <WiredElement elementType="button">手绘按钮</WiredElement>
      <WiredElement elementType="card">
        <h3 className="font-medium text-foreground mb-2">手绘卡片</h3>
        <p className="text-sm text-muted-foreground">这是一个手绘风格的卡片组件</p>
      </WiredElement>
      <WiredElement elementType="input" placeholder="手绘输入框..." />
    </div>
  ),
}

export const InteractiveInput: Story = {
  render: () => {
    const [value, setValue] = useState('')
    return (
      <div className="flex flex-col gap-4 max-w-sm">
        <WiredElement
          elementType="input"
          value={value}
          onChange={setValue}
          placeholder="输入试试..."
        />
        {value && <p className="text-sm text-muted-foreground">输入内容：{value}</p>}
      </div>
    )
  },
}

export const ButtonGroup: Story = {
  render: () => (
    <div className="flex gap-3">
      <WiredElement elementType="button" onClick={() => console.log('确认')}>
        确认
      </WiredElement>
      <WiredElement elementType="button" sketchy>
        取消
      </WiredElement>
    </div>
  ),
}

export const ColorVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4 max-w-sm">
      <WiredElement elementType="button" stroke="#e74c3c" fill="#e74c3c">
        红色手绘按钮
      </WiredElement>
      <WiredElement elementType="button" stroke="#3498db" fill="#3498db">
        蓝色手绘按钮
      </WiredElement>
      <WiredElement elementType="button" stroke="#2ecc71" fill="#2ecc71">
        绿色手绘按钮
      </WiredElement>
      <WiredElement elementType="card" stroke="#9b59b6">
        <h3 className="font-medium mb-2">紫色手绘卡片</h3>
        <p className="text-sm text-muted-foreground">自定义线条颜色</p>
      </WiredElement>
    </div>
  ),
}

export const RoughnessComparison: Story = {
  render: () => (
    <div className="flex flex-col gap-4 max-w-sm">
      <div className="flex items-center gap-4">
        <WiredElement elementType="button" roughness={0.5}>
          细腻 (0.5)
        </WiredElement>
        <span className="text-sm text-muted-foreground">线条较平滑</span>
      </div>
      <div className="flex items-center gap-4">
        <WiredElement elementType="button" roughness={2}>
          标准 (2)
        </WiredElement>
        <span className="text-sm text-muted-foreground">默认粗糙度</span>
      </div>
      <div className="flex items-center gap-4">
        <WiredElement elementType="button" roughness={4}>
          粗犷 (4)
        </WiredElement>
        <span className="text-sm text-muted-foreground">线条更抖动</span>
      </div>
    </div>
  ),
}
