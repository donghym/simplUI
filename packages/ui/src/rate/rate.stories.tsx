import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Rate } from './index'
import { Heart } from 'lucide-react'

const meta: Meta<typeof Rate> = {
  title: '数据录入/Rate 评分',
  component: Rate,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: '评分组件用于对事物进行等级评定。适用于商品评价、服务满意度、内容质量打分等场景，支持半星、自定义图标和提示文案。',
      },
    },
  },
  argTypes: {
    count: {
      control: 'number',
      description: '星星总数，默认 5',
    },
    allowHalf: {
      control: 'boolean',
      description: '是否允许半星选择，默认 false',
    },
    readonly: {
      control: 'boolean',
      description: '是否只读，只读模式下不可交互，默认 false',
    },
    character: {
      control: false,
      description: '自定义字符，用于替换默认星星图标',
    },
    tooltips: {
      control: 'object',
      description: '提示信息数组，鼠标悬停时显示对应提示',
    },
  },
}

export default meta
type Story = StoryObj<typeof Rate>

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

export const FiveStars: Story = {
  args: {
    defaultValue: 4,
    count: 5,
  },
}

export const TenStars: Story = {
  args: {
    defaultValue: 7,
    count: 10,
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

export const CustomCharacter: Story = {
  args: {
    defaultValue: 4,
    character: <Heart className="h-5 w-5" />,
  },
}

export const WithTooltips: Story = {
  args: {
    defaultValue: 0,
    tooltips: ['极差', '较差', '一般', '不错', '极好'],
  },
}

export const Controlled: Story = {
  parameters: {
    docs: {
      description: {
        story: '受控模式示例，展示如何通过外部状态管理评分值。',
      },
    },
  },
  render: () => {
    const [value, setValue] = useState(3)
    return (
      <div className="space-y-4">
        <p>当前评分：{value}</p>
        <Rate value={value} onChange={setValue} />
      </div>
    )
  },
}

/** 交互式受控评分 */
export const InteractiveControlled: Story = {
  render: () => {
    const [value, setValue] = useState(0)
    const labels = ['', '很差', '较差', '一般', '满意', '非常满意']
    return (
      <div className="space-y-4">
        <Rate value={value} onChange={setValue} />
        <div className="flex items-center gap-4">
          <p className="text-sm text-gray-600">
            当前评分：<span className="font-semibold text-gray-900">{value}</span> / 5
            {value > 0 && <span className="ml-2 text-muted-foreground">{labels[value]}</span>}
          </p>
          <button
            type="button"
            className="px-3 py-1 text-sm rounded-md border border-border hover:bg-muted transition-colors"
            onClick={() => setValue(0)}
          >
            重置
          </button>
        </div>
      </div>
    )
  },
}

/** 自定义颜色 */
export const CustomColor: Story = {
  parameters: {
    docs: {
      description: {
        story: '通过 CSS 覆盖实现多种主题色评分，适用于品牌定制或情感化评分场景。',
      },
    },
  },
  render: () => {
    const [value1, setValue1] = useState(3)
    const [value2, setValue2] = useState(4)
    const [value3, setValue3] = useState(2)
    return (
      <div className="space-y-6">
        <div>
          <p className="text-sm text-gray-600 mb-1">红色（text-danger）</p>
          <Rate value={value1} onChange={setValue1} className="[&_.text-warning-500]:!text-danger" />
        </div>
        <div>
          <p className="text-sm text-gray-600 mb-1">蓝色（text-primary）</p>
          <Rate value={value2} onChange={setValue2} className="[&_.text-warning-500]:!text-primary" />
        </div>
        <div>
          <p className="text-sm text-gray-600 mb-1">绿色（text-success）</p>
          <Rate value={value3} onChange={setValue3} className="[&_.text-warning-500]:!text-success" />
        </div>
      </div>
    )
  },
}