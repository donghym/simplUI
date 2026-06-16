import type { Meta, StoryObj } from '@storybook/react'
import { EnhanceDescriptions } from './index'
import type { EnhanceDescriptionsItem } from './types'

const meta: Meta<typeof EnhanceDescriptions> = {
  title: '增强组件/EnhanceDescriptions 增强详情面板',
  component: EnhanceDescriptions,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    columns: { control: 'number', description: '列数' },
    bordered: { control: 'boolean', description: '是否显示边框' },
    collapsible: { control: 'boolean', description: '是否可折叠' },
  },
}

export default meta
type Story = StoryObj<typeof EnhanceDescriptions>

const basicItems: EnhanceDescriptionsItem[] = [
  { label: '用户名', value: '张三' },
  { label: '手机号', value: '13800138000', copyable: true },
  { label: '邮箱', value: 'zhangsan@example.com', copyable: true },
  { label: '居住地', value: '北京市朝阳区' },
  { label: '职业', value: '前端工程师', editable: true, onEdit: (v) => console.log('编辑职业:', v) },
  { label: '备注', value: '无' },
]

export const Default: Story = {
  args: {
    title: '用户信息',
    items: basicItems,
    columns: 3,
    bordered: true,
  },
}

export const WithCopyAndEdit: Story = {
  render: () => (
    <EnhanceDescriptions
      title="可复制与可编辑"
      items={[
        { label: '订单号', value: 'ORD-2024-001234', copyable: true },
        { label: '收货地址', value: '浙江省杭州市西湖区望塘路18号', copyable: true },
        { label: '联系人', value: '李四', editable: true, onEdit: (v) => console.log('新联系人:', v) },
        { label: '手机号', value: '13900139000', copyable: true, editable: true, onEdit: (v) => console.log('新手机号:', v) },
        { label: '状态', value: '已发货' },
        { label: '备注', value: '请尽快送达' },
      ]}
    />
  ),
}

export const Collapsible: Story = {
  render: () => (
    <EnhanceDescriptions
      title="折叠详情"
      items={[
        { label: '产品', value: '云数据库 MySQL' },
        { label: '版本', value: '8.0' },
        { label: '区域', value: '华东1' },
        { label: '规格', value: '4核8G' },
        { label: '存储', value: '100GB SSD' },
        { label: '网络', value: '专有网络' },
        { label: '计费', value: '按量付费' },
        { label: '创建时间', value: '2024-01-15 10:30:00' },
        { label: '到期时间', value: '2025-01-15 10:30:00' },
      ]}
      collapsible
      defaultCollapsedRows={2}
    />
  ),
}

export const TwoColumns: Story = {
  render: () => (
    <EnhanceDescriptions
      title="两列布局"
      items={basicItems}
      columns={2}
    />
  ),
}

export const NoBorder: Story = {
  render: () => (
    <EnhanceDescriptions
      title="无边框模式"
      items={basicItems}
      bordered={false}
    />
  ),
}
