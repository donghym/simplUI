import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Switch } from './index'

const meta: Meta<typeof Switch> = {
  title: '数据录入/Switch 开关',
  component: Switch,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: '开关用于在两种状态之间进行切换。适用于功能启用/禁用、模式切换等场景，支持加载状态和自定义开关文字。',
      },
    },
  },
  argTypes: {
    checked: {
      control: 'boolean',
      description: '受控模式下的选中状态，true 为开启',
    },
    defaultChecked: {
      control: 'boolean',
      description: '非受控模式下的初始选中状态，默认 false',
    },
    disabled: {
      control: 'boolean',
      description: '禁用状态，true 时不可交互、透明度降低',
    },
    loading: {
      control: 'boolean',
      description: '加载状态，true 时显示旋转图标、禁止交互',
    },
    onChange: {
      control: false,
      description: '选中状态变化时触发，参数为变化后的 checked 值',
    },
  },
}

export default meta
type Story = StoryObj<typeof Switch>

export const Basic: Story = {}

export const Checked: Story = {
  args: { defaultChecked: true },
}

export const Disabled: Story = {
  args: { disabled: true },
}

export const DisabledChecked: Story = {
  args: { disabled: true, defaultChecked: true },
}

export const Loading: Story = {
  args: { loading: true },
}

export const WithCheckedText: Story = {
  args: { defaultChecked: true, checkedChildren: '开' },
}

export const WithBothText: Story = {
  args: {
    defaultChecked: true,
    checkedChildren: '开',
    unCheckedChildren: '关',
  },
}

export const States: Story = {
  parameters: {
    docs: {
      description: {
        story: '展示开关的未选中、选中、禁用三种状态对比，便于快速了解组件外观差异。',
      },
    },
  },
  render: () => (
    <div className="flex flex-col gap-3">
      <Switch />
      <Switch defaultChecked />
      <Switch disabled defaultChecked />
    </div>
  ),
}

export const Controlled: Story = {
  parameters: {
    docs: {
      description: {
        story: '受控模式示例，展示如何通过外部状态管理开关的开启/关闭状态。',
      },
    },
  },
  render: () => {
    const [checked, setChecked] = useState(false)
    return (
      <div className="flex flex-col gap-3">
        <Switch checked={checked} onChange={setChecked} />
        <p className="text-sm text-muted-foreground">当前状态：{checked ? '开启' : '关闭'}</p>
      </div>
    )
  },
}
