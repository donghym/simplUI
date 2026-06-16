import type { Meta, StoryObj } from '@storybook/react'
import { PageContainer } from './index'
import { Button } from '../button/index'

const meta: Meta<typeof PageContainer> = {
  title: '布局/PageContainer 页面容器',
  component: PageContainer,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    title: { control: 'text' },
    loading: { control: 'boolean' },
  },
}

export default meta
type Story = StoryObj<typeof PageContainer>

/** 基础页面容器 */
export const Basic: Story = {
  args: {
    title: '页面标题',
    children: '这是页面内容区域，自适应高度。',
  },
}

/** 带面包屑导航 */
export const WithBreadcrumb: Story = {
  args: {
    title: '用户管理',
    breadcrumb: [
      { title: '首页', path: '/' },
      { title: '系统设置', path: '/settings' },
      { title: '用户管理' },
    ],
    children: '面包屑导航帮助用户了解当前页面在系统中的位置。',
  },
}

/** 带操作栏 */
export const WithActions: Story = {
  args: {
    title: '项目列表',
    headerActions: [
      <Button key="export">导出</Button>,
      <Button key="create" variant="primary">新建项目</Button>,
    ],
    children: '标题右侧可以放置操作按钮，方便用户快速执行操作。',
  },
}

/** 加载状态 */
export const Loading: Story = {
  args: {
    title: '数据加载中',
    loading: true,
    children: '当 loading 为 true 时，内容区域会显示加载遮罩。',
  },
}

/** 带页脚 */
export const WithFooter: Story = {
  args: {
    title: '订单详情',
    footer: <div className="flex justify-end gap-2"><Button>取消</Button><Button variant="primary">提交</Button></div>,
    children: '页脚区域通常用于放置操作按钮，如提交、取消等。',
  },
}
