import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { FormDesigner } from './index'
import type { FormItemConfig } from './types'

const meta: Meta<typeof FormDesigner> = {
  title: '表单/FormDesigner 表单设计器',
  component: FormDesigner,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    showPreview: {
      control: 'boolean',
      description: '是否显示预览区域',
    },
    showExport: {
      control: 'boolean',
      description: '是否显示 JSON 导出按钮',
    },
  },
}

export default meta
type Story = StoryObj<typeof FormDesigner>

export const Default: Story = {
  args: {},
}

export const WithInitialItems: Story = {
  args: {
    defaultItems: [
      { id: 'f1', name: 'username', label: '用户名', type: 'input', required: true, placeholder: '请输入用户名' },
      { id: 'f2', name: 'gender', label: '性别', type: 'radio', options: [{ label: '男', value: 'male' }, { label: '女', value: 'female' }] },
      { id: 'f3', name: 'subscribe', label: '订阅通知', type: 'switch' },
    ],
  },
}

export const LimitedTypes: Story = {
  args: {
    availableTypes: ['input', 'select', 'textarea'],
  },
}

export const NoExport: Story = {
  args: {
    showExport: false,
  },
}

export const ControlledMode: Story = {
  render: () => {
    const ControlledDemo = () => {
      const [items, setItems] = useState<FormItemConfig[]>([
        { id: 'c1', name: 'email', label: '邮箱', type: 'input', required: true },
      ])
      return (
        <div className="flex flex-col gap-3">
          <FormDesigner items={items} onChange={setItems} />
          <pre className="rounded bg-muted p-2 text-xs max-h-40 overflow-auto">
            {JSON.stringify(items, null, 2)}
          </pre>
        </div>
      )
    }
    return <ControlledDemo />
  },
}
