import type { Meta, StoryObj } from '@storybook/react'
import { ThoughtChain } from './index'
import type { ThoughtStep } from './types'

const meta: Meta<typeof ThoughtChain> = {
  title: 'AI 对话/ThoughtChain 思维链',
  component: ThoughtChain,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    collapsible: {
      control: 'boolean',
      description: '是否可折叠每个步骤，默认 true',
    },
    defaultExpandAll: {
      control: 'boolean',
      description: '默认全部展开，默认 false',
    },
  },
}

export default meta
type Story = StoryObj<typeof ThoughtChain>

const sampleSteps: ThoughtStep[] = [
  { title: '理解用户问题', status: 'done', content: '用户询问了关于 React 性能优化的问题，需要从渲染优化、状态管理和代码分割三个方面分析。' },
  { title: '检索相关知识', status: 'done', content: '已检索到 React.memo、useMemo、useCallback、React.lazy 等相关知识点。' },
  { title: '组织回答结构', status: 'running', content: '正在按照"问题分析 → 解决方案 → 代码示例"的结构组织回答。' },
  { title: '生成最终回答', status: 'waiting' },
]

export const Default: Story = {
  args: {
    steps: sampleSteps,
  },
}

export const AllDone: Story = {
  args: {
    steps: [
      { title: '分析需求', status: 'done', content: '需求已分析完毕。' },
      { title: '设计方案', status: 'done', content: '方案设计完成，采用微服务架构。' },
      { title: '编写代码', status: 'done', content: '代码编写完成，已通过单元测试。' },
    ],
    defaultExpandAll: true,
  },
}

export const WithError: Story = {
  args: {
    steps: [
      { title: '解析输入', status: 'done', content: '输入解析成功。' },
      { title: '调用外部接口', status: 'error', content: '接口调用失败，返回 500 错误。' },
      { title: '生成结果', status: 'waiting' },
    ],
  },
}

export const NotCollapsible: Story = {
  args: {
    steps: sampleSteps,
    collapsible: false,
  },
}
