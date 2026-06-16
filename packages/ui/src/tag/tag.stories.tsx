import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Tag } from './index'
import { Github } from 'lucide-react'
import { Button } from '../button/index'

const meta: Meta<typeof Tag> = {
  title: '数据展示/Tag 标签',
  component: Tag,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: '标签用于对信息进行分类、标记和筛选。适用于状态展示、属性标记、关键词筛选等场景，支持多种语义色和可关闭样式。',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'success', 'warning', 'danger'],
      description: '标签语义变体，控制背景色和文字色，默认 default',
    },
    closable: {
      control: 'boolean',
      description: '是否可关闭，true 时右侧显示关闭按钮，默认 false',
    },
    icon: {
      control: 'text',
      description: '前置图标，显示在文字左侧',
    },
    onClose: {
      description: '关闭按钮的回调，仅在 closable=true 时触发',
    },
  },
}

export default meta
type Story = StoryObj<typeof Tag>

export const Basic: Story = {
  args: { children: '标签 1' },
}

export const Primary: Story = {
  args: { variant: 'primary', children: '主要' },
}

export const Success: Story = {
  args: { variant: 'success', children: '成功' },
}

export const Warning: Story = {
  args: { variant: 'warning', children: '警告' },
}

export const Danger: Story = {
  args: { variant: 'danger', children: '危险' },
}

export const Closable: Story = {
  args: { closable: true, children: '可关闭' },
}

export const WithIcon: Story = {
  args: { icon: <Github className="h-3 w-3" />, children: 'GitHub' },
}

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Tag>默认</Tag>
      <Tag variant="primary">主要</Tag>
      <Tag variant="success">成功</Tag>
      <Tag variant="warning">警告</Tag>
      <Tag variant="danger">危险</Tag>
    </div>
  ),
}

export const DynamicTags: Story = {
  render: () => {
    const [tags, setTags] = useState<{ key: number; label: string }[]>([
      { key: 1, label: '标签一' },
      { key: 2, label: '标签二' },
      { key: 3, label: '标签三' },
    ])
    const [nextKey, setNextKey] = useState(4)

    const handleRemove = (key: number) => {
      setTags((prev) => prev.filter((t) => t.key !== key))
    }

    const handleAdd = () => {
      setTags((prev) => [...prev, { key: nextKey, label: `标签${nextKey}` }])
      setNextKey((k) => k + 1)
    }

    return (
      <div className="flex flex-wrap gap-2 items-center">
        {tags.map((tag) => (
          <Tag key={tag.key} closable onClose={() => handleRemove(tag.key)}>
            {tag.label}
          </Tag>
        ))}
        <Button onClick={handleAdd}>+ 添加标签</Button>
      </div>
    )
  },
}

export const PresetColors: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Tag variant="default">灰色</Tag>
      <Tag variant="primary">蓝色</Tag>
      <Tag variant="success">绿色</Tag>
      <Tag variant="warning">橙色</Tag>
      <Tag variant="danger">红色</Tag>
    </div>
  ),
}

export const NoBorderTag: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Tag className="border-0 bg-transparent text-gray-700">无边框默认</Tag>
      <Tag className="border-0 bg-transparent text-primary-600">无边框主要</Tag>
      <Tag className="border-0 bg-transparent text-success-600">无边框成功</Tag>
      <Tag className="border-0 bg-transparent text-warning-600">无边框警告</Tag>
      <Tag className="border-0 bg-transparent text-danger-600">无边框危险</Tag>
    </div>
  ),
}
