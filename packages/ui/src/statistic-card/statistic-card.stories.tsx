import type { Meta, StoryObj } from '@storybook/react'
import { StatisticCard } from './index'
import { DollarSign, Users, ShoppingCart, Eye } from 'lucide-react'

const meta: Meta<typeof StatisticCard> = {
  title: '数据展示/StatisticCard 统计卡片',
  component: StatisticCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    title: {
      control: 'text',
      description: '卡片标题',
    },
    value: {
      control: 'number',
      description: '数值，支持数字或字符串',
    },
    trend: {
      control: 'select',
      options: ['up', 'down', 'flat'],
      description: '趋势方向',
    },
    trendValue: {
      control: 'text',
      description: '趋势值文本',
    },
    precision: {
      control: 'number',
      description: '小数精度',
    },
    loading: {
      control: 'boolean',
      description: '加载中状态',
    },
  },
}

export default meta
type Story = StoryObj<typeof StatisticCard>

export const Default: Story = {
  args: {
    title: '总用户数',
    value: 12893,
  },
}

export const WithTrendUp: Story = {
  args: {
    title: '月收入',
    value: 56820,
    prefix: '¥',
    trend: 'up',
    trendValue: '+12.5%',
    icon: <DollarSign className="h-5 w-5" />,
  },
}

export const WithTrendDown: Story = {
  args: {
    title: '退货率',
    value: 3.2,
    suffix: '%',
    precision: 1,
    trend: 'down',
    trendValue: '-2.1%',
    icon: <ShoppingCart className="h-5 w-5" />,
  },
}

export const WithTrendFlat: Story = {
  args: {
    title: '页面浏览量',
    value: 45231,
    trend: 'flat',
    trendValue: '0%',
    icon: <Eye className="h-5 w-5" />,
  },
}

export const WithPrefix: Story = {
  args: {
    title: '账户余额',
    value: 99999,
    prefix: '¥',
  },
}

export const WithSuffix: Story = {
  args: {
    title: '转化率',
    value: 68.5,
    suffix: '%',
    precision: 1,
  },
}

export const WithIcon: Story = {
  args: {
    title: '活跃用户',
    value: 8846,
    icon: <Users className="h-5 w-5" />,
    trend: 'up',
    trendValue: '+8.3%',
  },
}

export const Loading: Story = {
  args: {
    title: '加载中',
    value: 0,
    loading: true,
  },
}

export const WithFooter: Story = {
  args: {
    title: '总销售额',
    value: 126560,
    prefix: '¥',
    footer: '较上月增长 12%',
  },
}

export const Dashboard: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4">
      <StatisticCard
        title="总用户数"
        value={12893}
        icon={<Users className="h-5 w-5" />}
        trend="up"
        trendValue="+12.5%"
      />
      <StatisticCard
        title="月收入"
        value={56820}
        prefix="¥"
        icon={<DollarSign className="h-5 w-5" />}
        trend="up"
        trendValue="+8.2%"
      />
      <StatisticCard
        title="退货率"
        value={3.2}
        suffix="%"
        precision={1}
        icon={<ShoppingCart className="h-5 w-5" />}
        trend="down"
        trendValue="-2.1%"
      />
      <StatisticCard
        title="页面浏览量"
        value={45231}
        icon={<Eye className="h-5 w-5" />}
        trend="flat"
        trendValue="0%"
      />
    </div>
  ),
}
