import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { ColorPicker } from './index'

const CenterDecorator = (Story: React.FC) => (
  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', minHeight: '500px', width: '100%', paddingTop: '40px' }}>
    <Story />
  </div>
)

const meta: Meta<typeof ColorPicker> = {
  title: '数据录入/ColorPicker 颜色选择器',
  component: ColorPicker,
  tags: ['autodocs'],
  decorators: [CenterDecorator],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: '提供颜色选取的交互方式。支持 HEX / RGB / HSB 格式切换，预设颜色，透明度选择等功能。',
      },
    },
  },
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    placement: { control: 'select', options: ['bottomLeft', 'bottomRight', 'topLeft', 'topRight'] },
    showText: { control: 'boolean' },
    disabled: { control: 'boolean' },
    disabledAlpha: { control: 'boolean' },
    allowClear: { control: 'boolean' },
    format: { control: 'select', options: ['hex', 'rgb', 'hsb'] },
    trigger: { control: 'select', options: ['click', 'hover'] },
  },
}

export default meta

type Story = StoryObj<typeof ColorPicker>

export const Basic: Story = {
  args: {
    defaultValue: '#1677FF',
  },
}

export const Controlled: Story = {
  render: () => {
    const [color, setColor] = useState('#1677ff')
    return (
      <div className="flex flex-col gap-4">
        <ColorPicker value={color} onChange={setColor} />
        <div className="flex gap-3 items-center px-3 py-2 border border-gray-200 rounded-lg bg-gray-50">
          <div style={{ width: 24, height: 24, borderRadius: 4, background: color, border: '1px solid #d9d9d9', flexShrink: 0 }} />
          <span style={{ color: 'var(--color-gray-500, #6b7280)', fontSize: 13 }}>Color:</span>
          <span style={{ fontFamily: 'SF Mono, Monaco, monospace', fontSize: 14, fontWeight: 500, color: '#333' }}>{color.toUpperCase()}</span>
        </div>
      </div>
    )
  },
}

export const Size: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <ColorPicker defaultValue="#f5222d" size="small" />
      <ColorPicker defaultValue="#52c41a" size="medium" />
      <ColorPicker defaultValue="#1890ff" size="large" />
    </div>
  ),
}

export const Disabled: Story = {
  args: {
    defaultValue: '#ff4d4f',
    disabled: true,
  },
}

export const NoText: Story = {
  args: {
    defaultValue: '#722ed1',
    showText: false,
  },
}

export const AllowClear: Story = {
  args: {
    defaultValue: '#eb2f96',
    allowClear: true,
  },
}

export const FormatSwitch: Story = {
  render: () => {
    const [color, setColor] = useState('#1677FF')
    return (
      <div className="flex flex-col gap-4">
        <ColorPicker value={color} onChange={setColor} />
        <div style={{ fontFamily: 'monospace', fontSize: 13, color: 'var(--color-gray-500, #6b7280)' }}>
          HEX: {color}
        </div>
      </div>
    )
  },
}

export const Placement: Story = {
  parameters: {
    docs: {
      description: {
        story: '展示弹出面板的不同定位方式，适用于页面边缘或特殊布局下的颜色选择器摆放。',
      },
    },
  },
  render: () => (
    <div style={{ display: 'flex', gap: 24, paddingTop: 80 }}>
      <ColorPicker defaultValue="#13c2c2" placement="topLeft" />
      <ColorPicker defaultValue="#722ed1" placement="topRight" />
    </div>
  ),
}

export const PresetColors: Story = {
  render: () => {
    const [color, setColor] = useState('#1677ff')
    return (
      <div className="flex flex-col gap-4">
        <ColorPicker
          value={color}
          onChange={setColor}
          presets={[
            { label: 'Recommended', colors: ['#1677ff', '#0958d9', '#003eb3', '#722ed1', '#531dab', '#391085'], defaultOpen: true },
            { label: 'Recent', colors: ['#f5222d', '#fa541c', '#fa8c16', '#fadb14', '#52c41a', '#13c2c2'] },
          ]}
        />
        <div className="flex gap-3 items-center px-3 py-2 border border-gray-200 rounded-lg bg-gray-50">
          <div style={{ width: 24, height: 24, borderRadius: 4, background: color, border: '1px solid #d9d9d9', flexShrink: 0 }} />
          <span style={{ fontFamily: 'SF Mono, Monaco, monospace', fontSize: 14, fontWeight: 500, color: '#333' }}>{color.toUpperCase()}</span>
        </div>
      </div>
    )
  },
}

export const TriggerMode: Story = {
  render: () => {
    const [clickColor, setClickColor] = useState('#1677ff')
    const [hoverColor, setHoverColor] = useState('#52c41a')
    return (
      <div className="flex flex-col gap-6">
        <div>
          <div className="mb-2 text-sm text-gray-500">Click trigger (default)</div>
          <ColorPicker value={clickColor} onChange={setClickColor} trigger="click" />
        </div>
        <div>
          <div className="mb-2 text-sm text-gray-500">Hover trigger</div>
          <ColorPicker value={hoverColor} onChange={setHoverColor} trigger="hover" />
        </div>
      </div>
    )
  },
}

/** 带透明度通道 */
export const WithAlpha: Story = {
  render: () => {
    const [color, setColor] = useState('#1677ff')
    const [alpha, setAlpha] = useState(100)
    const rgbaColor = (() => {
      const r = parseInt(color.slice(1, 3), 16)
      const g = parseInt(color.slice(3, 5), 16)
      const b = parseInt(color.slice(5, 7), 16)
      return `rgba(${r}, ${g}, ${b}, ${alpha / 100})`
    })()

    return (
      <div className="flex flex-col gap-4">
        <ColorPicker value={color} onChange={setColor} disabledAlpha={false} />
        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-500">透明度：</span>
          <input
            type="range"
            min={0}
            max={100}
            value={alpha}
            onChange={(e) => setAlpha(Number(e.target.value))}
            className="w-40"
          />
          <span className="text-sm font-mono">{alpha}%</span>
        </div>
        <div className="flex gap-3 items-center px-3 py-2 border border-gray-200 rounded-lg bg-gray-50">
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 4,
              background: rgbaColor,
              border: '1px solid #d9d9d9',
              backgroundImage: 'linear-gradient(45deg, #ccc 25%, transparent 25%), linear-gradient(-45deg, #ccc 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ccc 75%), linear-gradient(-45deg, transparent 75%, #ccc 75%)',
              backgroundSize: '8px 8px',
              backgroundPosition: '0 0, 0 4px, 4px -4px, -4px 0px',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div style={{ position: 'absolute', inset: 0, background: rgbaColor, borderRadius: 3 }} />
          </div>
          <div>
            <div style={{ fontFamily: 'monospace', fontSize: 13, color: '#333' }}>{rgbaColor}</div>
            <div style={{ fontSize: 11, color: '#999' }}>Alpha: {alpha}%</div>
          </div>
        </div>
      </div>
    )
  },
}

/** 不同尺寸并排展示 */
export const SizeVariants: Story = {
  parameters: {
    docs: {
      description: {
        story: '并排对比三种尺寸的颜色选择器，便于直观选择合适的组件大小。',
      },
    },
  },
  render: () => (
    <div className="flex items-end gap-6">
      <div className="flex flex-col items-center gap-2">
        <ColorPicker defaultValue="#f5222d" size="small" />
        <span className="text-xs text-gray-500">Small</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <ColorPicker defaultValue="#52c41a" size="medium" />
        <span className="text-xs text-gray-500">Medium</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <ColorPicker defaultValue="#1890ff" size="large" />
        <span className="text-xs text-gray-500">Large</span>
      </div>
    </div>
  ),
}
