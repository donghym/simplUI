import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { JsonSchemaRender } from './index'
import type { SchemaField } from './types'

const meta: Meta<typeof JsonSchemaRender> = {
  title: '表单/JsonSchemaRender JSON 表单渲染器',
  component: JsonSchemaRender,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    layout: {
      control: 'select',
      options: ['vertical', 'horizontal'],
      description: '布局模式',
    },
    submitText: {
      control: 'text',
      description: '提交按钮文本',
    },
    showReset: {
      control: 'boolean',
      description: '是否显示重置按钮',
    },
  },
}

export default meta
type Story = StoryObj<typeof JsonSchemaRender>

const BASIC_SCHEMA: SchemaField[] = [
  { name: 'name', label: '姓名', type: 'string', required: true, placeholder: '请输入姓名' },
  { name: 'age', label: '年龄', type: 'number', required: true, min: 0, max: 150, placeholder: '请输入年龄' },
  { name: 'gender', label: '性别', type: 'select', options: [{ label: '男', value: 'male' }, { label: '女', value: 'female' }], placeholder: '请选择性别' },
  { name: 'bio', label: '简介', type: 'textarea', placeholder: '请输入简介', max: 200 },
  { name: 'birthday', label: '生日', type: 'date' },
  { name: 'agree', label: '同意协议', type: 'boolean', required: true },
]

export const Default: Story = {
  args: {
    schema: BASIC_SCHEMA,
  },
}

export const HorizontalLayout: Story = {
  args: {
    schema: BASIC_SCHEMA,
    layout: 'horizontal',
  },
}

export const WithValidation: Story = {
  args: {
    schema: [
      { name: 'email', label: '邮箱', type: 'string', required: true, pattern: '^[\\w.-]+@[\\w.-]+\\.\\w+$', patternMessage: '请输入有效的邮箱地址', placeholder: 'example@mail.com' },
      { name: 'phone', label: '手机号', type: 'string', required: true, pattern: '^1[3-9]\\d{9}$', patternMessage: '请输入有效的手机号', placeholder: '请输入手机号' },
      { name: 'score', label: '分数', type: 'number', min: 0, max: 100, placeholder: '0-100' },
    ],
  },
}

export const MultiSelect: Story = {
  args: {
    schema: [
      { name: 'hobbies', label: '爱好', type: 'multi-select', options: [{ label: '阅读', value: 'reading' }, { label: '运动', value: 'sports' }, { label: '音乐', value: 'music' }, { label: '旅行', value: 'travel' }], placeholder: '请选择爱好' },
      { name: 'city', label: '城市', type: 'select', options: [{ label: '北京', value: 'bj' }, { label: '上海', value: 'sh' }, { label: '广州', value: 'gz' }], placeholder: '请选择城市' },
    ],
  },
}

export const WithInitialValues: Story = {
  args: {
    schema: BASIC_SCHEMA,
    initialValues: { name: '张三', age: 25, gender: 'male', agree: true },
  },
}

export const DisabledFields: Story = {
  args: {
    schema: [
      { name: 'readonly_field', label: '只读字段', type: 'string', disabled: true, defaultValue: '不可编辑' },
      { name: 'editable_field', label: '可编辑字段', type: 'string', placeholder: '可编辑' },
    ],
  },
}

export const SubmitHandler: Story = {
  render: () => {
    const SubmitDemo = () => {
      const [result, setResult] = useState<Record<string, unknown> | null>(null)
      return (
        <div className="max-w-md">
          <JsonSchemaRender
            schema={BASIC_SCHEMA}
            onSubmit={(vals) => setResult(vals)}
          />
          {result && (
            <pre className="mt-4 rounded bg-muted p-2 text-xs max-h-40 overflow-auto">
              {JSON.stringify(result, null, 2)}
            </pre>
          )}
        </div>
      )
    }
    return <SubmitDemo />
  },
}
