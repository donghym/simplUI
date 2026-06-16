import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { StarRating } from './index'

const meta: Meta<typeof StarRating> = {
  title: '数据录入/StarRating 增强星级评分',
  component: StarRating,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    value: {
      control: 'number',
      description: '当前评分值（受控模式）',
    },
    defaultValue: {
      control: 'number',
      description: '默认评分值（非受控模式）',
    },
    allowHalf: {
      control: 'boolean',
      description: '是否允许半星',
    },
    disabled: {
      control: 'boolean',
      description: '是否禁用',
    },
    readonly: {
      control: 'boolean',
      description: '是否只读',
    },
    count: {
      control: 'number',
      description: '星星总数',
    },
    character: {
      control: 'text',
      description: '自定义字符',
    },
  },
}

export default meta
type Story = StoryObj<typeof StarRating>

export const Default: Story = {
  args: {
    defaultValue: 3,
  },
}

export const HalfStar: Story = {
  args: {
    defaultValue: 2.5,
    allowHalf: true,
  },
}

export const NoHalf: Story = {
  args: {
    defaultValue: 3,
    allowHalf: false,
  },
}

export const ReadOnly: Story = {
  args: {
    defaultValue: 3.5,
    readonly: true,
    allowHalf: true,
  },
}

export const Disabled: Story = {
  args: {
    defaultValue: 2,
    disabled: true,
  },
}

export const TenStars: Story = {
  args: {
    defaultValue: 7,
    count: 10,
  },
}

export const CustomCharacter: Story = {
  args: {
    defaultValue: 4,
    character: 'A',
  },
}

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState(3)
    return (
      <div className="space-y-4">
        <StarRating value={value} onChange={setValue} allowHalf />
        <p className="text-sm text-muted-foreground">
          当前评分：<span className="font-semibold text-foreground">{value}</span> / 5
        </p>
        <button
          type="button"
          className="px-3 py-1 text-sm rounded-md border border-border hover:bg-muted transition-colors"
          onClick={() => setValue(0)}
        >
          重置
        </button>
      </div>
    )
  },
}

export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div>
        <p className="text-sm text-muted-foreground mb-1">默认（3 星）</p>
        <StarRating defaultValue={3} />
      </div>
      <div>
        <p className="text-sm text-muted-foreground mb-1">半星（2.5 星）</p>
        <StarRating defaultValue={2.5} allowHalf />
      </div>
      <div>
        <p className="text-sm text-muted-foreground mb-1">只读（4 星）</p>
        <StarRating defaultValue={4} readonly />
      </div>
      <div>
        <p className="text-sm text-muted-foreground mb-1">禁用（1 星）</p>
        <StarRating defaultValue={1} disabled />
      </div>
    </div>
  ),
}
