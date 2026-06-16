import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { TagInput } from './index'
import { X } from 'lucide-react'

const meta: Meta<typeof TagInput> = {
  title: '数据录入/TagInput 标签输入框',
  component: TagInput,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    status: {
      control: 'select',
      options: ['error', 'warning'],
      description: '输入框状态，error 时边框 danger 色，warning 时边框 warning 色',
    },
    disabled: {
      control: 'boolean',
      description: '是否禁用',
    },
    readonly: {
      control: 'boolean',
      description: '是否只读',
    },
    allowClear: {
      control: 'boolean',
      description: '是否显示清空所有标签的按钮',
    },
    allowDuplicate: {
      control: 'boolean',
      description: '是否允许重复标签',
    },
    maxTags: {
      control: 'number',
      description: '最大标签数量限制',
    },
    placeholder: {
      control: 'text',
      description: '输入框占位文本',
    },
  },
}

export default meta
type Story = StoryObj<typeof TagInput>

export const Basic: Story = {
  args: {
    placeholder: '输入后按 Enter 创建标签',
  },
}

export const DefaultValue: Story = {
  args: {
    defaultValue: ['React', 'TypeScript', 'Tailwind'],
    placeholder: '继续添加标签',
  },
}

export const Controlled: Story = {
  render: () => {
    const [tags, setTags] = useState<string[]>(['标签一', '标签二'])
    return (
      <div className="flex flex-col gap-2 max-w-md">
        <TagInput
          value={tags}
          onChange={setTags}
          placeholder="受控模式"
        />
        <p className="text-sm text-muted-foreground">
          当前标签：{tags.length > 0 ? tags.join('、') : '(空)'}
        </p>
      </div>
    )
  },
}

export const MaxTags: Story = {
  render: () => (
    <div className="flex flex-col gap-4 max-w-md">
      <TagInput maxTags={3} placeholder="最多 3 个标签" />
      <TagInput
        defaultValue={['已有标签']}
        maxTags={3}
        placeholder="还可添加 2 个标签"
      />
    </div>
  ),
}

export const Disabled: Story = {
  args: {
    defaultValue: ['不可删除', '不可新增'],
    disabled: true,
    placeholder: '禁用状态',
  },
}

export const Readonly: Story = {
  args: {
    defaultValue: ['只读标签一', '只读标签二'],
    readonly: true,
    placeholder: '只读状态',
  },
}

export const StatusError: Story = {
  args: {
    status: 'error',
    defaultValue: ['错误标签'],
    placeholder: '错误状态',
  },
}

export const StatusWarning: Story = {
  args: {
    status: 'warning',
    defaultValue: ['警告标签'],
    placeholder: '警告状态',
  },
}

export const AllowClear: Story = {
  args: {
    defaultValue: ['标签A', '标签B', '标签C'],
    allowClear: true,
    placeholder: '点击右侧清空按钮',
  },
}

export const AllowDuplicate: Story = {
  render: () => (
    <div className="flex flex-col gap-4 max-w-md">
      <div>
        <p className="mb-1 text-xs text-muted-foreground">不允许重复（默认）</p>
        <TagInput defaultValue={['React']} placeholder="输入 React 试试" />
      </div>
      <div>
        <p className="mb-1 text-xs text-muted-foreground">允许重复</p>
        <TagInput allowDuplicate defaultValue={['React']} placeholder="输入 React 试试" />
      </div>
    </div>
  ),
}

export const CustomTagRender: Story = {
  render: () => (
    <TagInput
      defaultValue={['自定义', '标签']}
      placeholder="自定义标签渲染"
      tagRender={(tag, onClose) => (
        <span className="inline-flex items-center gap-1 rounded-full bg-danger-50 px-2.5 py-0.5 text-xs font-medium text-danger-700 border border-danger-200 select-none">
          {tag}
          <button
            type="button"
            onClick={onClose}
            aria-label={`删除标签 ${tag}`}
            className="inline-flex items-center justify-center w-3.5 h-3.5 rounded-full hover:bg-black/10 transition-colors cursor-pointer"
          >
            <X className="h-3 w-3" aria-hidden="true" />
          </button>
        </span>
      )}
    />
  ),
}

export const DragSort: Story = {
  render: () => {
    const [tags, setTags] = useState<string[]>(['设计', '前端', '后端', '测试'])
    return (
      <div className="flex flex-col gap-2 max-w-md">
        <TagInput
          value={tags}
          onChange={setTags}
          draggable
          placeholder="拖拽标签进行排序"
        />
        <p className="text-sm text-muted-foreground">
          当前顺序：{tags.join(' > ')}
        </p>
      </div>
    )
  },
}

export const CombinedFeatures: Story = {
  render: () => (
    <div className="flex flex-col gap-4 max-w-md">
      <div>
        <label className="mb-1 block text-xs text-muted-foreground">错误状态 + 可清空</label>
        <TagInput
          status="error"
          allowClear
          defaultValue={['无效标签']}
          placeholder="错误 + 清空"
        />
      </div>
      <div>
        <label className="mb-1 block text-xs text-muted-foreground">警告状态 + 数量限制</label>
        <TagInput
          status="warning"
          maxTags={5}
          defaultValue={['警告']}
          placeholder="最多 5 个标签"
        />
      </div>
      <div>
        <label className="mb-1 block text-xs text-muted-foreground">可清空 + 允许重复</label>
        <TagInput
          allowClear
          allowDuplicate
          placeholder="可重复 + 可清空"
        />
      </div>
    </div>
  ),
}
