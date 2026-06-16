import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { PromptInput } from './index'

const meta: Meta<typeof PromptInput> = {
  title: 'AI 对话/PromptInput 提示词输入框',
  component: PromptInput,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    placeholder: {
      control: 'text',
      description: '占位文本',
    },
    disabled: {
      control: 'boolean',
      description: '是否禁用',
    },
    maxLength: {
      control: 'number',
      description: '最大字符数',
    },
    sendText: {
      control: 'text',
      description: '发送按钮文本',
    },
  },
}

export default meta
type Story = StoryObj<typeof PromptInput>

const templates = [
  { label: '代码审查', content: '请审查以下代码，指出潜在问题并给出改进建议：\n{code}' },
  { label: '翻译助手', content: '请将以下内容翻译为{language}：\n{text}' },
  { label: '总结摘要', content: '请对以下内容进行总结，提取关键要点：\n{content}' },
]

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState('')
    return (
      <div className="max-w-xl">
        <PromptInput
          value={value}
          onChange={setValue}
          onSend={(v) => { alert(`发送: ${v}`); setValue('') }}
          placeholder="输入提示词，Ctrl+Enter 发送..."
        />
      </div>
    )
  },
}

export const WithTemplates: Story = {
  render: () => {
    const [value, setValue] = useState('')
    return (
      <div className="max-w-xl">
        <PromptInput
          value={value}
          onChange={setValue}
          onSend={(v) => { alert(`发送: ${v}`); setValue('') }}
          templates={templates}
        />
      </div>
    )
  },
}

export const WithMaxLength: Story = {
  render: () => {
    const [value, setValue] = useState('')
    return (
      <div className="max-w-xl">
        <PromptInput
          value={value}
          onChange={setValue}
          onSend={(v) => { alert(`发送: ${v}`); setValue('') }}
          maxLength={200}
          placeholder="最多输入 200 字符..."
        />
      </div>
    )
  },
}

export const Disabled: Story = {
  render: () => (
    <div className="max-w-xl">
      <PromptInput
        value="输入框已禁用"
        disabled
        onChange={() => {}}
      />
    </div>
  ),
}
