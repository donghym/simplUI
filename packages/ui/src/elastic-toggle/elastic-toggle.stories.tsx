import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { ElasticToggle } from './index'

const meta: Meta<typeof ElasticToggle> = {
  title: '动效/ElasticToggle 弹性开关',
  component: ElasticToggle,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    checked: {
      control: 'boolean',
      description: '受控模式下的选中状态',
    },
    defaultChecked: {
      control: 'boolean',
      description: '非受控模式下的初始选中状态',
    },
    disabled: {
      control: 'boolean',
      description: '禁用状态',
    },
    onChange: {
      control: false,
      description: '变化回调',
    },
  },
}

export default meta
type Story = StoryObj<typeof ElasticToggle>

export const Default: Story = {}

export const Checked: Story = {
  args: { defaultChecked: true },
}

export const Disabled: Story = {
  args: { disabled: true },
}

export const DisabledChecked: Story = {
  args: { disabled: true, defaultChecked: true },
}

export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <ElasticToggle />
      <ElasticToggle defaultChecked />
      <ElasticToggle disabled />
      <ElasticToggle disabled defaultChecked />
    </div>
  ),
}

export const Controlled: Story = {
  render: () => {
    const [checked, setChecked] = useState(false)
    return (
      <div className="flex flex-col gap-3">
        <ElasticToggle checked={checked} onChange={setChecked} />
        <p className="text-sm text-muted-foreground">当前状态：{checked ? '开启' : '关闭'}</p>
      </div>
    )
  },
}
