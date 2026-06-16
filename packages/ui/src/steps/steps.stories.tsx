import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { useState } from 'react'
import { Steps } from './index'
import { User, Mail, CreditCard, Smile } from 'lucide-react'

const meta: Meta<typeof Steps> = {
  title: '导航/Steps 步骤条',
  component: Steps,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    actions: {
      argTypesRegex: '^on.*',
    },
    docs: {
      description: {
        component: '引导用户按照流程完成任务的导航条。\n\n- 流程向导：用于表单填写、注册开户等需要分步完成的场景。\n- 状态反馈：展示每一步的完成、进行、等待或错误状态。\n- 进度展示：支持百分比进度，用于上传、处理等耗时任务。',
      },
    },
  },
  argTypes: {
    onChange: {
      action: 'onChange',
      description: '点击步骤时的回调',
    },
    current: {
      control: { type: 'number', min: 0 },
      description: '当前步骤索引（从 0 开始）',
    },
    status: {
      control: 'select',
      options: ['wait', 'process', 'finish', 'error'],
      description: '当前步骤的状态',
    },
    direction: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: '步骤条方向',
    },
    stepSize: {
      control: 'select',
      options: ['default', 'small'],
      description: '步骤条尺寸',
    },
    variant: {
      control: 'select',
      options: ['default', 'outlined', 'inline'],
      description: '步骤条变体',
    },
    progressDot: {
      control: 'boolean',
      description: '是否使用点状步骤条',
    },
    percent: {
      control: { type: 'number', min: 0, max: 100 },
      description: '当前步骤进度百分比',
    },
    labelPlacement: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: '标签放置位置',
    },
  },
}

export default meta
type Story = StoryObj<typeof Steps>

/** 基础用法 */
export const Default: Story = {
  args: {
    current: 1,
    onChange: fn(),
    items: [
      { title: '已完成', description: '步骤描述信息' },
      { title: '进行中', description: '步骤描述信息', subTitle: '剩余 00:00:08' },
      { title: '等待中', description: '步骤描述信息' },
    ],
  },
}

/** 迷你版 */
export const Small: Story = {
  args: {
    stepSize: 'small',
    current: 1,
    onChange: fn(),
    items: [
      { title: '已完成' },
      { title: '进行中' },
      { title: '等待中' },
    ],
  },
}

/** 带图标的步骤条 */
export const WithIcons: Story = {
  args: {
    current: 1,
    onChange: fn(),
    items: [
      { title: '登录', icon: <User className="h-4 w-4" /> },
      { title: '验证', icon: <Mail className="h-4 w-4" /> },
      { title: '支付', icon: <CreditCard className="h-4 w-4" /> },
      { title: '完成', icon: <Smile className="h-4 w-4" /> },
    ],
  },
}

/** 步骤切换 */
export const SwitchStep: Story = {
  parameters: {
    docs: {
      description: {
        story: '可手动切换步骤的示例，配合上一步/下一步按钮引导用户按流程操作。',
      },
    },
  },
  render: () => {
    const [current, setCurrent] = useState(0)
    const steps = [
      { title: '步骤 1', description: '描述 1' },
      { title: '步骤 2', description: '描述 2' },
      { title: '步骤 3', description: '描述 3' },
    ]

    return (
      <div className="space-y-4">
        <Steps current={current} items={steps} />
        <div className="p-4 bg-gray-50 rounded min-h-[100px] text-center">
          步骤 {current + 1} 内容
        </div>
        <div className="flex gap-2">
          <button
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
            onClick={() => setCurrent(Math.max(0, current - 1))}
            disabled={current === 0}
          >
            上一步
          </button>
          <button
            className="px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90 disabled:opacity-50"
            onClick={() => setCurrent(Math.min(steps.length - 1, current + 1))}
            disabled={current === steps.length - 1}
          >
            下一步
          </button>
        </div>
      </div>
    )
  },
}

/** 竖直方向的步骤条 */
export const Vertical: Story = {
  args: {
    current: 1,
    direction: 'vertical',
    onChange: fn(),
    items: [
      { title: '已完成', description: '步骤描述信息' },
      { title: '进行中', description: '步骤描述信息' },
      { title: '等待中', description: '步骤描述信息' },
    ],
  },
}

/** 竖直方向的小型步骤条 */
export const VerticalSmall: Story = {
  args: {
    current: 1,
    direction: 'vertical',
    stepSize: 'small',
    onChange: fn(),
    items: [
      { title: '已完成', description: '步骤描述信息' },
      { title: '进行中', description: '步骤描述信息' },
      { title: '等待中', description: '步骤描述信息' },
    ],
  },
}

/** 步骤运行错误 */
export const ErrorStatus: Story = {
  args: {
    current: 1,
    status: 'error',
    onChange: fn(),
    items: [
      { title: '已完成', description: '步骤描述信息' },
      { title: '处理中', description: '步骤描述信息' },
      { title: '等待中', description: '步骤描述信息' },
    ],
  },
}

/** 点状步骤条 */
export const ProgressDot: Story = {
  args: {
    current: 1,
    progressDot: true,
    onChange: fn(),
    items: [
      { title: '已完成', description: '步骤描述信息' },
      { title: '进行中', description: '步骤描述信息' },
      { title: '等待中', description: '步骤描述信息' },
    ],
  },
}

/** 点状步骤条（竖直方向） */
export const ProgressDotVertical: Story = {
  args: {
    current: 1,
    progressDot: true,
    direction: 'vertical',
    onChange: fn(),
    items: [
      { title: '已完成', description: '步骤描述信息' },
      { title: '进行中', description: '步骤描述信息' },
      { title: '等待中', description: '步骤描述信息' },
    ],
  },
}

/** 可点击 */
export const Clickable: Story = {
  parameters: {
    docs: {
      description: {
        story: '可点击的步骤条，用户可直接跳转到已完成的步骤，提升操作效率。',
      },
    },
  },
  render: () => {
    const [current, setCurrent] = useState(0)

    return (
      <Steps
        current={current}
        onChange={setCurrent}
        items={[
          { title: '步骤 1', description: '点击跳转' },
          { title: '步骤 2', description: '点击跳转' },
          { title: '步骤 3', description: '点击跳转' },
        ]}
      />
    )
  },
}

/** 导航步骤（inline 变体） */
export const InlineVariant: Story = {
  parameters: {
    docs: {
      description: {
        story: '行内样式的步骤条，视觉更轻量，适用于步骤数较少且空间紧凑的场景。',
      },
    },
  },
  render: () => {
    const [current, setCurrent] = useState(0)

    return (
      <Steps
        current={current}
        variant="inline"
        onChange={setCurrent}
        items={[
          { title: '步骤 1' },
          { title: '步骤 2' },
          { title: '步骤 3' },
        ]}
      />
    )
  },
}

/** outlined 变体 */
export const OutlinedVariant: Story = {
  args: {
    current: 1,
    variant: 'outlined',
    onChange: fn(),
    items: [
      { title: '已完成', description: '步骤描述信息' },
      { title: '进行中', description: '步骤描述信息' },
      { title: '等待中', description: '步骤描述信息' },
    ],
  },
}

/** 带有进度的步骤 */
export const WithProgress: Story = {
  parameters: {
    docs: {
      description: {
        story: '带百分比进度的步骤条，适用于上传、处理等需要展示具体完成度的场景。',
      },
    },
  },
  render: () => {
    const [percent, setPercent] = useState(30)

    return (
      <div className="space-y-4">
        <Steps
          current={0}
          percent={percent}
          items={[
            { title: '步骤 1', description: '处理中...' },
            { title: '步骤 2', description: '等待中' },
            { title: '步骤 3', description: '等待中' },
          ]}
        />
        <div className="flex gap-2">
          <button
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
            onClick={() => setPercent(Math.max(0, percent - 10))}
          >
            -10%
          </button>
          <button
            className="px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90"
            onClick={() => setPercent(Math.min(100, percent + 10))}
          >
            +10%
          </button>
        </div>
      </div>
    )
  },
}

/** 标签放置位置 */
export const LabelPlacementVertical: Story = {
  args: {
    current: 1,
    labelPlacement: 'vertical',
    onChange: fn(),
    items: [
      { title: '已完成', description: '步骤描述信息' },
      { title: '进行中', description: '步骤描述信息' },
      { title: '等待中', description: '步骤描述信息' },
    ],
  },
}

/** 禁用步骤 */
export const DisabledStep: Story = {
  render: () => {
    const [current, setCurrent] = useState(0)

    return (
      <Steps
        current={current}
        onChange={setCurrent}
        items={[
          { title: '步骤 1', description: '可用' },
          { title: '步骤 2', description: '禁用', disabled: true },
          { title: '步骤 3', description: '可用' },
        ]}
      />
    )
  },
}

/** 自定义状态 */
export const CustomStatus: Story = {
  args: {
    onChange: fn(),
    items: [
      { title: '等待', status: 'wait', description: '等待开始' },
      { title: '处理中', status: 'process', description: '正在处理' },
      { title: '已完成', status: 'finish', description: '已经完成' },
      { title: '错误', status: 'error', description: '发生错误' },
    ],
  },
}

/** 完整功能示例 */
export const CompleteExample: Story = {
  parameters: {
    docs: {
      description: {
        story: '综合展示多种变体、进度控制和步骤切换的完整示例，便于对比不同样式效果。',
      },
    },
  },
  render: () => {
    const [current, setCurrent] = useState(0)
    const [percent, setPercent] = useState(0)

    const steps = [
      { title: '选择商品', description: '选择您想要的商品' },
      { title: '确认订单', description: '查看并确认您的订单' },
      { title: '支付', description: '完成支付流程' },
      { title: '完成', description: '订单成功完成' },
    ]

    return (
      <div className="space-y-8">
        {/* Default variant */}
        <div>
          <h4 className="mb-2 font-medium">默认变体</h4>
          <Steps current={current} onChange={setCurrent} items={steps} />
        </div>

        {/* Outlined variant */}
        <div>
          <h4 className="mb-2 font-medium">边框变体</h4>
          <Steps current={current} variant="outlined" onChange={setCurrent} items={steps} />
        </div>

        {/* Inline variant */}
        <div>
          <h4 className="mb-2 font-medium">行内变体</h4>
          <Steps current={current} variant="inline" onChange={setCurrent} items={steps} />
        </div>

        {/* Progress dot */}
        <div>
          <h4 className="mb-2 font-medium">点状步骤条</h4>
          <Steps current={current} progressDot onChange={setCurrent} items={steps} />
        </div>

        {/* With progress */}
        <div>
          <h4 className="mb-2 font-medium">带进度（步骤 {current + 1}）</h4>
          <Steps current={current} percent={percent} items={steps} />
          <div className="mt-2 flex gap-2">
            <button
              className="px-3 py-1 bg-gray-200 rounded text-sm"
              onClick={() => setPercent(Math.max(0, percent - 10))}
            >
              -10%
            </button>
            <button
              className="px-3 py-1 bg-primary text-primary-foreground rounded text-sm"
              onClick={() => setPercent(Math.min(100, percent + 10))}
            >
              +10%
            </button>
          </div>
        </div>

        {/* Controls */}
        <div className="flex gap-2">
          <button
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
            onClick={() => setCurrent(Math.max(0, current - 1))}
            disabled={current === 0}
          >
            上一步
          </button>
          <button
            className="px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90 disabled:opacity-50"
            onClick={() => setCurrent(Math.min(steps.length - 1, current + 1))}
            disabled={current === steps.length - 1}
          >
            下一步
          </button>
        </div>
      </div>
    )
  },
}

/** 简单步骤导航 */
export const SimpleSteps: Story = {
  parameters: {
    docs: {
      description: {
        story: '简洁的步骤导航示例，仅展示标题，适合步骤简单、无需描述信息的场景。',
      },
    },
  },
  render: () => {
    const [current, setCurrent] = useState(0)
    return (
      <div className="space-y-4">
        <Steps
          current={current}
          onChange={setCurrent}
          items={[
            { title: '第一步' },
            { title: '第二步' },
            { title: '第三步' },
          ]}
        />
        <div className="flex gap-2">
          <button
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
            onClick={() => setCurrent(Math.max(0, current - 1))}
            disabled={current === 0}
          >
            上一步
          </button>
          <button
            className="px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90 disabled:opacity-50"
            onClick={() => setCurrent(Math.min(2, current + 1))}
            disabled={current === 2}
          >
            下一步
          </button>
        </div>
      </div>
    )
  },
}