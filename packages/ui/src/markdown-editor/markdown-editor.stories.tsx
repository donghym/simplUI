import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { MarkdownEditor } from './index'

const meta: Meta<typeof MarkdownEditor> = {
  title: '编辑器/MarkdownEditor Markdown 编辑器',
  component: MarkdownEditor,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    mode: {
      control: 'select',
      options: ['edit', 'preview', 'split'],
      description: '编辑器模式：编辑、预览、分屏',
    },
    disabled: {
      control: 'boolean',
      description: '是否禁用',
    },
    showToolbar: {
      control: 'boolean',
      description: '是否显示工具栏',
    },
    placeholder: {
      control: 'text',
      description: '占位文本',
    },
  },
}

export default meta
type Story = StoryObj<typeof MarkdownEditor>

const sampleMarkdown = `# 标题示例

这是一段 **加粗** 和 *斜体* 文本。

## 二级标题

- 列表项 1
- 列表项 2

> 引用文本

\`行内代码\`

\`\`\`
代码块示例
\`\`\`

[链接文本](https://example.com)

---`

export const Default: Story = {
  args: {
    defaultValue: sampleMarkdown,
  },
}

export const EditMode: Story = {
  args: {
    mode: 'edit',
    placeholder: '在此输入 Markdown 内容...',
  },
}

export const PreviewMode: Story = {
  args: {
    mode: 'preview',
    defaultValue: sampleMarkdown,
  },
}

export const SplitMode: Story = {
  args: {
    mode: 'split',
    defaultValue: sampleMarkdown,
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: sampleMarkdown,
  },
}

export const WithMaxLength: Story = {
  args: {
    maxLength: 500,
    defaultValue: sampleMarkdown,
  },
}

export const NoToolbar: Story = {
  args: {
    showToolbar: false,
    defaultValue: sampleMarkdown,
  },
}

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState('# 受控模式\n\n内容可被外部控制')
    return (
      <div className="flex flex-col gap-3">
        <MarkdownEditor value={value} onChange={setValue} mode="split" />
        <p className="text-xs text-muted-foreground">当前字数：{value.length}</p>
      </div>
    )
  },
}
