import type { Meta, StoryObj } from '@storybook/react'
import { Popconfirm } from './index'
import { Button } from '../button/index'

const CenterDecorator = (Story: React.FC) => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '300px', width: '100%', padding: '40px' }}>
    <Story />
  </div>
)

const meta: Meta<typeof Popconfirm> = {
  title: '反馈/Popconfirm 气泡确认框',
  component: Popconfirm,
  tags: ['autodocs'],
  decorators: [CenterDecorator],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: '点击元素，弹出气泡式的确认框。',
      },
    },
  },
  argTypes: {
    trigger: {
      control: 'select',
      options: ['click', 'hover', 'focus'],
    },
    placement: {
      control: 'select',
      options: ['top', 'topLeft', 'topRight', 'bottom', 'bottomLeft', 'bottomRight', 'left', 'leftTop', 'leftBottom', 'right', 'rightTop', 'rightBottom'],
    },
    disabled: { control: 'boolean' },
  },
}

export default meta

type Story = StoryObj<typeof Popconfirm>

export const Basic: Story = {
  args: {
    title: '确定要删除这个任务吗？',
    children: <Button>删除</Button>,
  },
}

export const WithDescription: Story = {
  args: {
    title: '删除确认',
    description: '此操作将永久删除该文件，是否继续？',
    children: <Button>删除</Button>,
  },
}

export const CustomText: Story = {
  args: {
    title: 'Are you sure?',
    okText: 'Yes',
    cancelText: 'No',
    children: <Button>Delete</Button>,
  },
}

export const Placements: Story = {
  render: () => (
    <div className="flex flex-wrap gap-6 p-10">
      {(['top', 'topLeft', 'topRight', 'bottom', 'bottomLeft', 'bottomRight', 'left', 'leftTop', 'leftBottom', 'right', 'rightTop', 'rightBottom'] as const).map((p) => (
        <Popconfirm key={p} title={`Placement: ${p}`} placement={p}>
          <Button style={{ minWidth: 100 }}>{p}</Button>
        </Popconfirm>
      ))}
    </div>
  ),
}

export const TriggerHover: Story = {
  args: {
    title: 'Hover to confirm',
    trigger: 'hover',
    children: <Button>Hover me</Button>,
  },
}

export const Disabled: Story = {
  args: {
    title: 'Disabled',
    disabled: true,
    children: <Button disabled>Disabled</Button>,
  },
}

export const OnConfirm: Story = {
  args: {
    title: '确认删除？',
    children: <Button>Delete</Button>,
    onConfirm: () => alert('Confirmed'),
    onCancel: () => alert('Cancelled'),
  },
}
