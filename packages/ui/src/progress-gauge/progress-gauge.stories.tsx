import type { Meta, StoryObj } from '@storybook/react'
import { ProgressGauge } from './index'

const CenterDecorator = (Story: React.FC) => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '500px', width: '100%' }}>
    <Story />
  </div>
)

const meta: Meta<typeof ProgressGauge> = {
  title: '反馈/ProgressGauge 仪表盘进度',
  component: ProgressGauge,
  tags: ['autodocs'],
  decorators: [CenterDecorator],
  parameters: {
    layout: 'padded',
    docs: {
      story: {
        height: '400px',
      },
    },
  },
  argTypes: {
    value: { control: 'number', description: '当前值，0-100' },
    max: { control: 'number', description: '最大值' },
    type: { control: 'select', options: ['arc', 'circle'], description: '仪表盘类型' },
    showScale: { control: 'boolean', description: '是否显示刻度线' },
    width: { control: 'number', description: '仪表盘宽度像素' },
    strokeWidth: { control: 'number', description: '线条宽度像素' },
  },
}

export default meta
type Story = StoryObj<typeof ProgressGauge>

export const ArcDefault: Story = {
  args: {
    value: 65,
    type: 'arc',
  },
}

export const CircleDefault: Story = {
  args: {
    value: 72,
    type: 'circle',
  },
}

export const ArcWithScale: Story = {
  args: {
    value: 45,
    type: 'arc',
    showScale: true,
  },
}

export const CircleWithScale: Story = {
  args: {
    value: 80,
    type: 'circle',
    showScale: true,
  },
}

export const ArcGradient: Story = {
  args: {
    value: 70,
    type: 'arc',
    gradient: { from: '#6366f1', to: '#ec4899' },
  },
}

export const CircleGradient: Story = {
  args: {
    value: 55,
    type: 'circle',
    gradient: { from: '#10b981', to: '#3b82f6' },
  },
}

export const CustomFormat: Story = {
  args: {
    value: 88,
    type: 'arc',
    format: (v) => `${v} 分`,
  },
}

export const CustomSize: Story = {
  args: {
    value: 60,
    type: 'arc',
    width: 280,
    strokeWidth: 12,
  },
}

export const ZeroValue: Story = {
  args: {
    value: 0,
    type: 'arc',
  },
}

export const FullValue: Story = {
  args: {
    value: 100,
    type: 'arc',
  },
}

export const CustomMax: Story = {
  args: {
    value: 150,
    max: 200,
    type: 'circle',
    format: (v) => `${v}/200`,
  },
}
