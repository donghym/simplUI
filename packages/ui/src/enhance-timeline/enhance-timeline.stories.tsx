import type { Meta, StoryObj } from '@storybook/react'
import { EnhanceTimeline } from './index'
import type { EnhanceTimelineItem } from './types'
import { CheckCircle, AlertTriangle, XCircle, Loader2, User } from 'lucide-react'

const meta: Meta<typeof EnhanceTimeline> = {
  title: '增强组件/EnhanceTimeline 高级时间线',
  component: EnhanceTimeline,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    mode: {
      control: 'radio',
      options: ['left', 'alternate'],
      description: '布局模式',
    },
    collapsible: {
      control: 'boolean',
      description: '是否可折叠',
    },
    collapseCount: {
      control: 'number',
      description: '折叠前显示的节点数量',
    },
  },
}

export default meta
type Story = StoryObj<typeof EnhanceTimeline>

const basicItems: EnhanceTimelineItem[] = [
  { title: '创建订单', time: '2024-01-01 09:00', status: 'success' },
  { title: '支付成功', time: '2024-01-01 09:05', status: 'success' },
  { title: '仓库拣货', time: '2024-01-01 14:00', status: 'processing' },
  { title: '物流配送', time: '2024-01-02 08:00', status: 'default' },
  { title: '签收确认', time: '2024-01-03 10:00', status: 'default' },
]

export const Default: Story = {
  args: {
    items: basicItems,
    mode: 'left',
  },
}

export const WithContent: Story = {
  render: () => (
    <EnhanceTimeline
      items={[
        { title: '需求评审', content: '完成产品需求文档评审，确认开发范围', time: '2024-03-01', status: 'success' },
        { title: '技术方案', content: '确定微服务架构方案，选型 Spring Cloud', time: '2024-03-05', status: 'success' },
        { title: '开发中', content: '核心模块开发进行中，预计下周完成', time: '2024-03-10', status: 'processing' },
        { title: '测试阶段', content: '待开发完成后进入集成测试', status: 'default' },
      ]}
    />
  ),
}

export const WithStatus: Story = {
  render: () => (
    <EnhanceTimeline
      items={[
        { title: '已完成步骤', status: 'success', time: '10:00' },
        { title: '进行中步骤', status: 'processing', time: '11:00' },
        { title: '警告步骤', status: 'warning', content: '需要人工确认', time: '12:00' },
        { title: '失败步骤', status: 'danger', content: '操作超时，请重试', time: '13:00' },
        { title: '待处理步骤', status: 'default', time: '14:00' },
      ]}
    />
  ),
}

export const WithIcon: Story = {
  render: () => (
    <EnhanceTimeline
      items={[
        { title: '用户注册', icon: <User className="w-4 h-4" />, status: 'success', time: '09:00' },
        { title: '审核通过', icon: <CheckCircle className="w-4 h-4" />, status: 'success', time: '10:00' },
        { title: '异常告警', icon: <AlertTriangle className="w-4 h-4" />, status: 'warning', time: '11:00' },
        { title: '操作失败', icon: <XCircle className="w-4 h-4" />, status: 'danger', time: '12:00' },
        { title: '处理中', icon: <Loader2 className="w-4 h-4 animate-spin" />, status: 'processing', time: '13:00' },
      ]}
    />
  ),
}

export const Alternate: Story = {
  render: () => (
    <EnhanceTimeline
      mode="alternate"
      items={[
        { title: '项目启动', content: '确定项目目标和时间表', time: '2024-01-01', status: 'success' },
        { title: '需求分析', content: '完成用户调研和需求文档', time: '2024-01-15', status: 'success' },
        { title: '设计阶段', content: 'UI 设计与架构设计同步进行', time: '2024-02-01', status: 'success' },
        { title: '开发阶段', content: '前后端并行开发', time: '2024-02-15', status: 'processing' },
        { title: '测试上线', content: '集成测试与灰度发布', status: 'default' },
      ]}
    />
  ),
}

export const Collapsible: Story = {
  render: () => (
    <EnhanceTimeline
      collapsible
      collapseCount={3}
      items={[
        { title: '步骤 1', status: 'success', time: '09:00' },
        { title: '步骤 2', status: 'success', time: '10:00' },
        { title: '步骤 3', status: 'processing', time: '11:00' },
        { title: '步骤 4', status: 'default', time: '12:00' },
        { title: '步骤 5', status: 'default', time: '13:00' },
        { title: '步骤 6', status: 'default', time: '14:00' },
        { title: '步骤 7', status: 'default', time: '15:00' },
      ]}
    />
  ),
}
