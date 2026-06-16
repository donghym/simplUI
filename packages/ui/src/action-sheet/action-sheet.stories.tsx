import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { ActionSheet } from './index'
import type { ActionSheetItem } from './types'

const CenterDecorator = (Story: React.FC) => (
  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', minHeight: '500px', width: '100%', paddingTop: '40px' }}>
    <Story />
  </div>
)

const meta: Meta<typeof ActionSheet> = {
  title: '反馈/ActionSheet 底部动作面板',
  component: ActionSheet,
  tags: ['autodocs'],
  decorators: [CenterDecorator],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    title: {
      control: 'text',
      description: '标题',
    },
    cancelText: {
      control: 'text',
      description: '取消按钮文本',
    },
    maskClosable: {
      control: 'boolean',
      description: '点击遮罩是否关闭，默认 true',
    },
  },
}

export default meta
type Story = StoryObj<typeof ActionSheet>

const basicActions: ActionSheetItem[] = [
  { label: '拍照', onClick: () => { console.log('拍照') } },
  { label: '从相册选择', onClick: () => { console.log('从相册选择') } },
  { label: '删除', danger: true, onClick: () => { console.log('删除') } },
]

export const Basic: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <div>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground"
        >
          打开面板
        </button>
        <ActionSheet
          open={open}
          onClose={() => setOpen(false)}
          actions={basicActions}
        />
      </div>
    )
  },
}

export const WithTitle: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <div>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground"
        >
          带标题面板
        </button>
        <ActionSheet
          open={open}
          onClose={() => setOpen(false)}
          title="请选择操作"
          actions={basicActions}
        />
      </div>
    )
  },
}

export const WithDisabled: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <div>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground"
        >
          含禁用选项
        </button>
        <ActionSheet
          open={open}
          onClose={() => setOpen(false)}
          actions={[
            { label: '编辑', onClick: () => {} },
            { label: '分享', onClick: () => {}, disabled: true },
            { label: '删除', danger: true, onClick: () => {} },
          ]}
        />
      </div>
    )
  },
}

export const MaskNotClosable: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <div>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground"
        >
          遮罩不可关闭
        </button>
        <ActionSheet
          open={open}
          onClose={() => setOpen(false)}
          actions={basicActions}
          maskClosable={false}
        />
      </div>
    )
  },
}
