import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Typography } from './index'

const { Text, Title, Paragraph } = Typography

const meta: Meta<typeof Text> = {
  title: '通用/Typography 排版',
  component: Text,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['default', 'secondary', 'success', 'warning', 'danger'],
      description: '文本类型，决定颜色语义',
    },
    strong: {
      control: 'boolean',
      description: '是否加粗',
    },
    italic: {
      control: 'boolean',
      description: '是否斜体',
    },
    underline: {
      control: 'boolean',
      description: '是否下划线',
    },
    delete: {
      control: 'boolean',
      description: '是否删除线',
    },
    mark: {
      control: 'boolean',
      description: '是否标记高亮',
    },
    code: {
      control: 'boolean',
      description: '是否代码样式',
    },
    keyboard: {
      control: 'boolean',
      description: '是否键盘样式',
    },
  },
}

export default meta

type Story = StoryObj<typeof Text>

export const Default: Story = {
  render: () => <Text>默认文本</Text>,
}

export const TextTypes: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Text>默认文本</Text>
      <Text type="secondary">次要文本</Text>
      <Text type="success">成功文本</Text>
      <Text type="warning">警告文本</Text>
      <Text type="danger">危险文本</Text>
    </div>
  ),
}

export const TextStyles: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Text strong>加粗文本</Text>
      <Text italic>斜体文本</Text>
      <Text underline>下划线文本</Text>
      <Text delete>删除线文本</Text>
      <Text mark>标记文本</Text>
      <Text code>代码文本</Text>
      <Text keyboard>键盘文本</Text>
    </div>
  ),
}

export const TitleLevels: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Title level={1}>h1 标题</Title>
      <Title level={2}>h2 标题</Title>
      <Title level={3}>h3 标题</Title>
      <Title level={4}>h4 标题</Title>
      <Title level={5}>h5 标题</Title>
    </div>
  ),
}

export const ParagraphDefault: Story = {
  render: () => (
    <Paragraph>
      这是一段普通段落文本。用于展示文章内容或说明信息。
      段落组件支持自定义样式和省略号截断功能。
    </Paragraph>
  ),
}

export const ParagraphEllipsis: Story = {
  render: () => (
    /* Truncation width is constrained to demonstrate ellipsis behavior */
    <div className="w-full max-w-[300px]">
      <Paragraph ellipsis>
        这是一段很长的文本，超出容器宽度时会显示省略号截断。
      </Paragraph>
    </div>
  ),
}

export const ParagraphMultiLineEllipsis: Story = {
  render: () => (
    /* Truncation width is constrained to demonstrate multi-line ellipsis behavior */
    <div className="w-full max-w-[300px]">
      <Paragraph ellipsis={2}>
        这是一段很长的文本，支持多行截断。当文本超过指定行数时会显示省略号。
        这里继续添加更多文字以确保内容足够长来触发截断效果。
      </Paragraph>
    </div>
  ),
}

export const InteractiveText: StoryObj<typeof Text> = {
  args: {
    children: '可交互文本',
    type: undefined,
    strong: false,
    italic: false,
    underline: false,
    delete: false,
    mark: false,
    code: false,
  },
  argTypes: {
    type: {
      control: 'select',
      options: [undefined, 'secondary', 'success', 'warning', 'danger'],
    },
    strong: { control: 'boolean' },
    italic: { control: 'boolean' },
    underline: { control: 'boolean' },
    delete: { control: 'boolean' },
    mark: { control: 'boolean' },
    code: { control: 'boolean' },
  },
  render: (args) => <Text {...args} />,
}

export const CopyableText: Story = {
  render: () => {
    const CopyableDemo = () => {
      const [copied, setCopied] = useState(false)
      const text = '这是一段可复制的文本内容'
      const handleCopy = () => {
        navigator.clipboard.writeText(text).then(() => {
          setCopied(true)
          setTimeout(() => setCopied(false), 2000)
        })
      }
      return (
        <div className="inline-flex items-center gap-2">
          <Text>{text}</Text>
          <button
            type="button"
            onClick={handleCopy}
            className="rounded px-2 py-0.5 text-xs border border-border hover:bg-muted transition-colors"
          >
            {copied ? '已复制' : '复制'}
          </button>
        </div>
      )
    }
    return <CopyableDemo />
  },
}

export const EditableText: Story = {
  render: () => {
    const EditableDemo = () => {
      const [editing, setEditing] = useState(false)
      const [text, setText] = useState('双击编辑此文本')
      const [draft, setDraft] = useState('')

      const handleDoubleClick = () => {
        setDraft(text)
        setEditing(true)
      }

      const handleConfirm = () => {
        setText(draft)
        setEditing(false)
      }

      const handleCancel = () => {
        setEditing(false)
      }

      const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') handleConfirm()
        if (e.key === 'Escape') handleCancel()
      }

      if (editing) {
        return (
          <input
            autoFocus
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={handleKeyDown}
            onBlur={handleConfirm}
            className="rounded border border-primary-500 px-2 py-0.5 text-sm outline-none"
          />
        )
      }

      return (
        <Text onDoubleClick={handleDoubleClick} className="cursor-text">
          {text}
        </Text>
      )
    }
    return <EditableDemo />
  },
}
