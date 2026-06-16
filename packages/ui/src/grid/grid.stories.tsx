import type { Meta, StoryObj } from '@storybook/react'
import type { ReactNode } from 'react'
import { Row, Col } from './index'

const meta: Meta<typeof Row> = {
  title: '布局/Grid 栅格',
  component: Row,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `24 栅格系统，用于页面元素的响应式布局与对齐。\n\n- 等分排列：将内容按 24 列等分进行横向排列，如表单、卡片列表。\n- 偏移与排序：通过偏移量调整列位置，或改变列的渲染顺序。\n- 响应式适配：支持 xs、sm、md、lg、xl 等断点，实现多端自适应布局。`,
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof Row>

const Box = ({ children }: { children: ReactNode }) => (
  <div className="bg-primary-50 border border-primary-200 rounded px-4 py-3 text-center text-primary-700 text-sm">
    {children}
  </div>
)

export const Basic: Story = {
  parameters: {
    docs: {
      description: {
        story: '基础栅格排列，将一行均分为两列，每列占据 12 格。',
      },
    },
  },
  render: () => (
    <Row gutter={16}>
      <Col span={12}><Box>列-12</Box></Col>
      <Col span={12}><Box>列-12</Box></Col>
    </Row>
  ),
}

export const ColumnSpacing: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Row gutter={16}>
        <Col span={6}><Box>列-6</Box></Col>
        <Col span={6}><Box>列-6</Box></Col>
        <Col span={6}><Box>列-6</Box></Col>
        <Col span={6}><Box>列-6</Box></Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={6}><Box>列-6</Box></Col>
        <Col span={6}><Box>列-6</Box></Col>
        <Col span={6}><Box>列-6</Box></Col>
        <Col span={6}><Box>列-6</Box></Col>
        <Col span={6}><Box>列-6</Box></Col>
        <Col span={6}><Box>列-6</Box></Col>
        <Col span={6}><Box>列-6</Box></Col>
        <Col span={6}><Box>列-6</Box></Col>
      </Row>
    </div>
  ),
}

export const ColumnOffset: Story = {
  parameters: {
    docs: {
      description: {
        story: '使用 offset 属性设置列的偏移量，实现非对称布局或留白效果。',
      },
    },
  },
  render: () => (
    <div className="flex flex-col gap-4">
      <Row gutter={16}>
        <Col span={8}><Box>列-8</Box></Col>
        <Col span={8} offset={8}><Box>列-8 偏移-8</Box></Col>
      </Row>
      <Row gutter={16}>
        <Col span={6} offset={6}><Box>列-6 偏移-6</Box></Col>
        <Col span={6} offset={6}><Box>列-6 偏移-6</Box></Col>
      </Row>
      <Row gutter={16}>
        <Col span={12} offset={6}><Box>列-12 偏移-6</Box></Col>
      </Row>
    </div>
  ),
}

export const Sort: Story = {
  render: () => (
    <Row gutter={16}>
      <Col span={18} order={2}><Box>列-18 顺序-2</Box></Col>
      <Col span={6} order={1}><Box>列-6 顺序-1</Box></Col>
    </Row>
  ),
}

export const Justify: Story = {
  parameters: {
    docs: {
      description: {
        story: '通过 justify 属性设置列在水平方向上的对齐方式，如起始、居中、两端对齐等。',
      },
    },
  },
  render: () => (
    <div className="flex flex-col gap-4">
      <Row justify="start" gutter={8}>
        <Col span={4}><Box>起始</Box></Col>
        <Col span={4}><Box>起始</Box></Col>
        <Col span={4}><Box>起始</Box></Col>
      </Row>
      <Row justify="center" gutter={8}>
        <Col span={4}><Box>居中</Box></Col>
        <Col span={4}><Box>居中</Box></Col>
        <Col span={4}><Box>居中</Box></Col>
      </Row>
      <Row justify="end" gutter={8}>
        <Col span={4}><Box>末尾</Box></Col>
        <Col span={4}><Box>末尾</Box></Col>
        <Col span={4}><Box>末尾</Box></Col>
      </Row>
      <Row justify="space-between" gutter={8}>
        <Col span={4}><Box>两端</Box></Col>
        <Col span={4}><Box>两端</Box></Col>
        <Col span={4}><Box>两端</Box></Col>
      </Row>
      <Row justify="space-around" gutter={8}>
        <Col span={4}><Box>环绕</Box></Col>
        <Col span={4}><Box>环绕</Box></Col>
        <Col span={4}><Box>环绕</Box></Col>
      </Row>
    </div>
  ),
}

export const Align: Story = {
  parameters: {
    docs: {
      description: {
        story: '通过 align 属性设置列在垂直方向上的对齐方式，如顶部、居中、底部对齐。',
      },
    },
  },
  render: () => (
    <div className="flex flex-col gap-4">
      <Row justify="center" align="top" className="bg-gray-100 h-20" gutter={8}>
        <Col span={4}><Box>顶部</Box></Col>
        <Col span={4}><Box>顶部</Box></Col>
        <Col span={4}><Box>顶部</Box></Col>
      </Row>
      <Row justify="center" align="middle" className="bg-gray-100 h-20" gutter={8}>
        <Col span={4}><Box>居中</Box></Col>
        <Col span={4}><Box>居中</Box></Col>
        <Col span={4}><Box>居中</Box></Col>
      </Row>
      <Row justify="center" align="bottom" className="bg-gray-100 h-20" gutter={8}>
        <Col span={4}><Box>底部</Box></Col>
        <Col span={4}><Box>底部</Box></Col>
        <Col span={4}><Box>底部</Box></Col>
      </Row>
    </div>
  ),
}

export const Responsive: Story = {
  render: () => (
    <Row gutter={[16, 16]}>
      <Col xs={24} sm={12} md={8} lg={6} xl={4}><Box>列</Box></Col>
      <Col xs={24} sm={12} md={8} lg={6} xl={4}><Box>列</Box></Col>
      <Col xs={24} sm={12} md={8} lg={6} xl={4}><Box>列</Box></Col>
      <Col xs={24} sm={12} md={8} lg={6} xl={4}><Box>列</Box></Col>
      <Col xs={24} sm={12} md={8} lg={6} xl={4}><Box>列</Box></Col>
      <Col xs={24} sm={12} md={8} lg={6} xl={4}><Box>列</Box></Col>
    </Row>
  ),
}

export const MoreResponsive: Story = {
  parameters: {
    docs: {
      description: {
        story: '对象形式的响应式配置，可更精细地控制每个断点下的 span 值。',
      },
    },
  },
  render: () => (
    <Row gutter={[16, 16]}>
      <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}><Box>列</Box></Col>
      <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}><Box>列</Box></Col>
      <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}><Box>列</Box></Col>
      <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}><Box>列</Box></Col>
      <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}><Box>列</Box></Col>
      <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}><Box>列</Box></Col>
    </Row>
  ),
}

const ColorBox = ({ children, color }: { children: ReactNode; color: string }) => (
  <div
    className="rounded px-4 py-3 text-center text-white text-sm font-medium"
    style={{ backgroundColor: color }}
  >
    {children}
  </div>
)

/** 响应式栅格 */
export const ResponsiveGrid: Story = {
  parameters: {
    docs: {
      description: {
        story: '带颜色区分的响应式栅格示例，直观展示不同断点下的列宽变化。',
      },
    },
  },
  render: () => (
    <Row gutter={[16, 16]}>
      <Col xs={24} sm={12} md={8} lg={6}>
        <ColorBox color="#6366f1">xs:24 sm:12 md:8 lg:6</ColorBox>
      </Col>
      <Col xs={24} sm={12} md={8} lg={6}>
        <ColorBox color="#8b5cf6">xs:24 sm:12 md:8 lg:6</ColorBox>
      </Col>
      <Col xs={24} sm={12} md={8} lg={6}>
        <ColorBox color="#a78bfa">xs:24 sm:12 md:8 lg:6</ColorBox>
      </Col>
      <Col xs={24} sm={12} md={8} lg={6}>
        <ColorBox color="#c4b5fd">xs:24 sm:12 md:8 lg:6</ColorBox>
      </Col>
    </Row>
  ),
}
