import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Segmented } from './index'
import { List, LayoutGrid } from 'lucide-react'

const meta: Meta<typeof Segmented> = {
  title: '数据展示/Segmented 分段控制器',
  component: Segmented,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: '用于展示多个选项并允许用户选择其中一项。',
      },
    },
  },
  argTypes: {
    componentSize: {
      control: 'select',
      options: ['large', 'middle', 'small'],
    },
    disabled: { control: 'boolean' },
  },
}

export default meta

type Story = StoryObj<typeof Segmented>

export const Basic: Story = {
  args: {
    options: ['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly'],
    defaultValue: 'Daily',
  },
}

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Segmented componentSize="large" options={['Large', 'Segmented']} />
      <Segmented componentSize="middle" options={['Default', 'Segmented']} />
      <Segmented componentSize="small" options={['Small', 'Segmented']} />
    </div>
  ),
}

export const Disabled: Story = {
  args: {
    options: ['Map', 'Transit', 'Satellite'],
    disabled: true,
  },
}

export const DisabledOption: Story = {
  args: {
    options: [
      { label: 'List', value: 'list' },
      { label: 'Map', value: 'map', disabled: true },
      { label: 'Kanban', value: 'kanban' },
    ],
  },
}

export const WithIcon: Story = {
  args: {
    options: [
      { label: 'List', value: 'list', icon: <List className="h-4 w-4" /> },
      { label: 'Kanban', value: 'kanban', icon: <LayoutGrid className="h-4 w-4" /> },
    ],
  },
}

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState('Map')
    return (
      <div>
        <Segmented options={['Map', 'Transit', 'Satellite']} value={value} onChange={setValue} />
        <div className="mt-4">Selected: {value}</div>
      </div>
    )
  },
}
