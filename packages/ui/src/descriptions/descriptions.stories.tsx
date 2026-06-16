import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Descriptions } from './index'
import { Select } from '../select/index'

const meta: Meta<typeof Descriptions> = {
  title: '数据展示/Descriptions 描述列表',
  component: Descriptions,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Descriptions 描述列表组件用于成组展示多个只读字段，以键值对的形式整齐排列。\n\n- 用于详情页展示对象属性，如用户信息、订单详情\n- 用于表单提交后的确认信息展示\n- 用于后台管理的数据概览面板\n- 支持横向、纵向布局和响应式列数调整',
      },
    },
  },
  argTypes: {
    bordered: { control: 'boolean' },
    column: { control: 'number' },
    componentSize: {
      control: 'select',
      options: ['default', 'middle', 'small'],
    },
    layout: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
  },
}

export default meta

type Story = StoryObj<typeof Descriptions>

export const Basic: Story = {
  parameters: {
    docs: {
      description: {
        story: '基础描述列表，横向排列标签和内容，适用于一般信息展示场景。',
      },
    },
  },
  render: () => (
    <Descriptions title="用户信息">
      <Descriptions.Item label="用户名">周毛毛</Descriptions.Item>
      <Descriptions.Item label="电话">1810000000</Descriptions.Item>
      <Descriptions.Item label="居住地">浙江省杭州市</Descriptions.Item>
      <Descriptions.Item label="备注">空</Descriptions.Item>
      <Descriptions.Item label="地址">
        浙江省杭州市西湖区望塘路18号
      </Descriptions.Item>
    </Descriptions>
  ),
}

export const Bordered: Story = {
  parameters: {
    docs: {
      description: {
        story: '带边框的描述列表，通过边框清晰划分每个字段区域，适用于数据密集、需要严格对齐的详情展示。',
      },
    },
  },
  render: () => (
    <Descriptions title="用户信息" bordered>
      <Descriptions.Item label="产品">云数据库</Descriptions.Item>
      <Descriptions.Item label="计费模式">预付费</Descriptions.Item>
      <Descriptions.Item label="自动续费">是</Descriptions.Item>
      <Descriptions.Item label="订单时间">2018-04-24 18:00:00</Descriptions.Item>
      <Descriptions.Item label="使用时间" span={2}>
        2019-04-24 18:00:00
      </Descriptions.Item>
      <Descriptions.Item label="状态" span={3}>
        <span className="text-success">运行中</span>
      </Descriptions.Item>
      <Descriptions.Item label="协商金额">¥80.00</Descriptions.Item>
      <Descriptions.Item label="折扣">¥20.00</Descriptions.Item>
      <Descriptions.Item label="官方收款">¥60.00</Descriptions.Item>
      <Descriptions.Item label="配置信息">
        数据盘类型：MongoDB
        <br />
        数据库版本：3.4
        <br />
        套餐：dds.mongo.mid
        <br />
        存储空间：10 GB
        <br />
        副本数：3
        <br />
        区域：华东1
        <br />
      </Descriptions.Item>
    </Descriptions>
  ),
}

export const Vertical: Story = {
  parameters: {
    docs: {
      description: {
        story: '纵向布局，标签在上内容在下，适用于标签较长或需要垂直阅读的场景。',
      },
    },
  },
  render: () => (
    <Descriptions title="用户信息" layout="vertical">
      <Descriptions.Item label="用户名">周毛毛</Descriptions.Item>
      <Descriptions.Item label="电话">1810000000</Descriptions.Item>
      <Descriptions.Item label="居住地">浙江省杭州市</Descriptions.Item>
      <Descriptions.Item label="地址">
        浙江省杭州市西湖区望塘路18号
      </Descriptions.Item>
    </Descriptions>
  ),
}

export const Column: Story = {
  parameters: {
    docs: {
      description: {
        story: '多列布局，通过 column 属性控制每行显示的字段数，适用于字段较多、需要紧凑排列的场景。',
      },
    },
  },
  render: () => (
    <Descriptions title="用户信息" column={2}>
      <Descriptions.Item label="用户名">周毛毛</Descriptions.Item>
      <Descriptions.Item label="电话">1810000000</Descriptions.Item>
      <Descriptions.Item label="居住地">浙江省杭州市</Descriptions.Item>
      <Descriptions.Item label="备注">空</Descriptions.Item>
      <Descriptions.Item label="地址">
        浙江省杭州市西湖区望塘路18号
      </Descriptions.Item>
    </Descriptions>
  ),
}

export const SizeVariants: Story = {
  parameters: {
    docs: {
      description: {
        story: '不同尺寸的描述列表对比，支持 default、middle、small 三种尺寸，适用于不同信息密度的页面。',
      },
    },
  },
  render: () => (
    <div className="space-y-8">
      <Descriptions title="默认尺寸" bordered>
        <Descriptions.Item label="产品">云数据库</Descriptions.Item>
        <Descriptions.Item label="计费模式">预付费</Descriptions.Item>
        <Descriptions.Item label="自动续费">是</Descriptions.Item>
        <Descriptions.Item label="订单时间">2018-04-24 18:00:00</Descriptions.Item>
        <Descriptions.Item label="状态">
          <span className="text-success">运行中</span>
        </Descriptions.Item>
      </Descriptions>
      <Descriptions title="小尺寸" bordered componentSize="small">
        <Descriptions.Item label="产品">云数据库</Descriptions.Item>
        <Descriptions.Item label="计费模式">预付费</Descriptions.Item>
        <Descriptions.Item label="自动续费">是</Descriptions.Item>
        <Descriptions.Item label="订单时间">2018-04-24 18:00:00</Descriptions.Item>
        <Descriptions.Item label="状态">
          <span className="text-success">运行中</span>
        </Descriptions.Item>
      </Descriptions>
    </div>
  ),
}

export const CustomLabel: Story = {
  parameters: {
    docs: {
      description: {
        story: '自定义标签样式，通过传入 ReactNode 实现带颜色、加粗等样式的个性化标签，适用于需要视觉分类的场景。',
      },
    },
  },
  render: () => (
    <Descriptions title="自定义标签样式" bordered>
      <Descriptions.Item
        label={
          <span style={{ fontWeight: 700, color: '#1677ff' }}>
            标记 产品名称
          </span>
        }
      >
        云数据库 MySQL
      </Descriptions.Item>
      <Descriptions.Item
        label={
          <span style={{ fontWeight: 700, color: '#52c41a' }}>
            金额 计费模式
          </span>
        }
      >
        预付费
      </Descriptions.Item>
      <Descriptions.Item
        label={
          <span style={{ fontWeight: 700, color: '#faad14' }}>
            计时 自动续费
          </span>
        }
      >
        是
      </Descriptions.Item>
      <Descriptions.Item
        label={
          <span style={{ fontWeight: 700, color: '#eb2f96' }}>
            日期 订单时间
          </span>
        }
      >
        2018-04-24 18:00:00
      </Descriptions.Item>
      <Descriptions.Item
        label={
          <span style={{ fontWeight: 700, color: '#722ed1' }}>
            刷新 运行状态
          </span>
        }
      >
        <span className="text-success">运行中</span>
      </Descriptions.Item>
      <Descriptions.Item
        label={
          <span style={{ fontWeight: 700, color: '#13c2c2' }}>
            全球 所属区域
          </span>
        }
      >
        华东1
      </Descriptions.Item>
    </Descriptions>
  ),
}

export const ResponsiveColumns: Story = {
  parameters: {
    docs: {
      description: {
        story: '响应式列数调整，通过下拉选择动态切换列数，展示描述列表在不同列数下的自适应效果。',
      },
    },
  },
  render: () => {
    const [columns, setColumns] = useState(3)

    return (
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-600">列数：</span>
          <Select
            value={String(columns)}
            onChange={(val: string) => setColumns(Number(val))}
            options={[
              { value: '1', label: '1 列' },
              { value: '2', label: '2 列' },
              { value: '3', label: '3 列' },
            ]}
            style={{ width: 120 }}
          />
        </div>
        <Descriptions title="响应式列数" column={columns} bordered>
          <Descriptions.Item label="用户名">周毛毛</Descriptions.Item>
          <Descriptions.Item label="电话">1810000000</Descriptions.Item>
          <Descriptions.Item label="居住地">浙江省杭州市</Descriptions.Item>
          <Descriptions.Item label="备注">空</Descriptions.Item>
          <Descriptions.Item label="地址">浙江省杭州市西湖区望塘路18号</Descriptions.Item>
          <Descriptions.Item label="邮箱">zhoumaomao@example.com</Descriptions.Item>
        </Descriptions>
      </div>
    )
  },
}
