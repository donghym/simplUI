import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { QRCode } from './index'

const meta: Meta<typeof QRCode> = {
  title: '数据展示/QRCode 二维码',
  component: QRCode,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: '用于生成和展示二维码。',
      },
    },
  },
  argTypes: {
    size: { control: 'number' },
    status: {
      control: 'select',
      options: ['active', 'expired', 'loading', 'scanned'],
    },
    bordered: { control: 'boolean' },
  },
}

export default meta

type Story = StoryObj<typeof QRCode>

export const Basic: Story = {
  args: {
    value: 'https://simplui.dev',
  },
}

export const CustomSize: Story = {
  args: {
    value: 'https://simplui.dev',
    size: 200,
  },
}

export const CustomColor: Story = {
  args: {
    value: 'https://simplui.dev',
  },
}

export const WithIcon: Story = {
  args: {
    value: 'https://simplui.dev',
    icon: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'40\' height=\'40\' viewBox=\'0 0 40 40\'%3E%3Crect fill=\'%23f3f4f6\' width=\'40\' height=\'40\'/%3E%3Ctext fill=\'%239ca3af\' font-family=\'sans-serif\' font-size=\'10\' x=\'50%25\' y=\'50%25\' dominant-baseline=\'middle\' text-anchor=\'middle\'%3EIcon%3C/text%3E%3C/svg%3E',
    iconSize: 40,
  },
}

export const Expired: Story = {
  args: {
    value: 'https://simplui.dev',
    status: 'expired',
    onRefresh: fn(),
  },
}

export const Loading: Story = {
  args: {
    value: 'https://simplui.dev',
    status: 'loading',
  },
}

export const Scanned: Story = {
  args: {
    value: 'https://simplui.dev',
    status: 'scanned',
  },
}

export const NoBorder: Story = {
  args: {
    value: 'https://simplui.dev',
    bordered: false,
  },
}

export const CustomRender: Story = {
  render: () => (
    <div className="flex gap-6">
      <div className="flex flex-col items-center gap-2">
        <QRCode
          value="https://simplui.dev"
          size={160}
          color="#7c3aed"
          bgColor="#f5f3ff"
          style={{ borderRadius: 16 }}
        />
        <span className="text-sm text-gray-500">Gradient style</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <QRCode
          value="https://simplui.dev"
          size={160}
          color="#0d9488"
          bgColor="#f0fdfa"
          style={{ borderRadius: 16, border: '2px solid #99f6e4' }}
        />
        <span className="text-sm text-gray-500">Rounded corners</span>
      </div>
    </div>
  ),
}
