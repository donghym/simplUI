import type { Meta, StoryObj } from '@storybook/react'
import { Card } from './index'
import { Button } from '../button/index'

const meta: Meta<typeof Card> = {
  title: '数据展示/Card 卡片',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: '卡片用于将信息聚合在容器中展示。适用于概览页面、数据面板、商品展示等场景，支持封面、操作区和多种变体样式。',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'filled', 'borderless'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Card>

export const Basic: Story = {
  args: {
    title: '卡片标题',
    children: '这是卡片的主体内容。卡片用于将相关信息进行分组展示。',
  },
}

export const WithExtra: Story = {
  args: {
    title: '项目 Alpha',
    extra: <Button variant="link">更多</Button>,
    children: '该项目按计划推进，预计 Q3 完成交付。',
  },
}

export const WithCover: Story = {
  args: {
    title: '山景',
    cover: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'400\' height=\'200\' viewBox=\'0 0 400 200\'%3E%3Crect fill=\'%23f3f4f6\' width=\'400\' height=\'200\'/%3E%3Ctext fill=\'%239ca3af\' font-family=\'sans-serif\' font-size=\'14\' x=\'50%25\' y=\'50%25\' dominant-baseline=\'middle\' text-anchor=\'middle\'%3ECard Cover%3C/text%3E%3C/svg%3E',
    children: '日出时分拍摄的壮美山景。',
  },
}

export const Hoverable: Story = {
  args: {
    title: '可悬停卡片',
    hoverable: true,
    children: '悬停此卡片可看到阴影效果。',
  },
}

export const Loading: Story = {
  args: {
    title: '加载中卡片',
    loading: true,
  },
}

export const WithActions: Story = {
  args: {
    title: '文章标题',
    children: '这篇文章收到了 42 个赞和 8 条评论。',
    actions: [<span key="a">点赞</span>, <span key="b">评论</span>, <span key="c">分享</span>],
  },
}

export const Variants: Story = {
  render: () => (
    <div className="flex gap-4 flex-wrap">
      <Card variant="default" title="默认" className="w-64">带边框的默认卡片</Card>
      <Card variant="filled" title="填充" className="w-64">灰色背景填充</Card>
      <Card variant="borderless" title="无边框" className="w-64">无边框无背景</Card>
    </div>
  ),
}

export const InnerCard: Story = {
  render: () => (
    <Card title="外层卡片" className="max-w-lg">
      <p className="mb-4 text-sm text-gray-600">外层卡片内容，包含一个嵌套的内层卡片：</p>
      <Card variant="filled" title="内层卡片" className="mt-2">
        这是嵌套在内层的卡片内容，适用于分组展示关联信息。
      </Card>
    </Card>
  ),
}

export const GridCards: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <Card title="卡片 A">卡片 A 的内容</Card>
      <Card title="卡片 B">卡片 B 的内容</Card>
      <Card title="卡片 C">卡片 C 的内容</Card>
      <Card title="卡片 D">卡片 D 的内容</Card>
      <Card title="卡片 E">卡片 E 的内容</Card>
      <Card title="卡片 F">卡片 F 的内容</Card>
    </div>
  ),
}
