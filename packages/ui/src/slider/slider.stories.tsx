import type { Meta, StoryObj } from '@storybook/react'
import type { ReactNode } from 'react'
import { useState } from 'react'
import { Slider } from './index'

const meta: Meta<typeof Slider> = {
  title: '数据录入/Slider 滑动输入条',
  component: Slider,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: '滑动输入条用于通过拖动滑块在范围内选择数值。适用于音量调节、价格区间筛选、评分设置等场景，支持单值和范围选择以及刻度标记。',
      },
    },
  },
  argTypes: {
    min: { control: 'number', description: '最小值' },
    max: { control: 'number', description: '最大值' },
    step: { control: 'number', description: '步长' },
    disabled: { control: 'boolean', description: '是否禁用' },
    range: { control: 'boolean', description: '是否范围选择' },
    showTooltip: { control: 'boolean', description: '是否显示 tooltip' },
    componentSize: { control: 'select', options: ['small', 'middle', 'large'], description: '滑动条尺寸，控制轨道高度和手柄大小' },
  },
}

export default meta
type Story = StoryObj<typeof Slider>

const Wrapper = ({ children }: { children: ReactNode }) => (
  <div className="w-full max-w-80 py-4">{children}</div>
)

/** 基础用法 */
export const Default: Story = {
  render: () => (
    <Wrapper>
      <Slider defaultValue={30} />
    </Wrapper>
  ),
}

/** 自定义范围 */
export const WithMinMax: Story = {
  parameters: {
    docs: {
      description: {
        story: '自定义最小值和最大值，适用于非 0-100 标准范围的数值选择场景。',
      },
    },
  },
  render: () => (
    <Wrapper>
      <Slider defaultValue={50} min={0} max={200} />
    </Wrapper>
  ),
}

/** 带步长 */
export const WithStep: Story = {
  render: () => (
    <Wrapper>
      <Slider defaultValue={20} step={10} min={0} max={100} />
    </Wrapper>
  ),
}

/** 范围选择 */
export const Range: Story = {
  parameters: {
    docs: {
      description: {
        story: '双滑块范围选择，适用于价格区间、时间范围等需要同时设定上下限的场景。',
      },
    },
  },
  render: () => (
    <Wrapper>
      <Slider defaultValue={[20, 80]} range />
    </Wrapper>
  ),
}

/** 禁用状态 */
export const Disabled: Story = {
  parameters: {
    docs: {
      description: {
        story: '禁用状态下的滑动条不可交互，适用于数值已固定或权限受限的场景。',
      },
    },
  },
  render: () => (
    <Wrapper>
      <Slider defaultValue={50} disabled />
    </Wrapper>
  ),
}

/** 带刻度 */
export const WithMarks: Story = {
  parameters: {
    docs: {
      description: {
        story: '在滑动条上显示刻度标签，帮助用户理解数值含义，适用于温度、进度等有明确刻度的场景。',
      },
    },
  },
  render: () => (
    <Wrapper>
      <Slider
        defaultValue={50}
        marks={[
          { value: 0, label: '0°C' },
          { value: 25, label: '25°C' },
          { value: 50, label: '50°C' },
          { value: 75, label: '75°C' },
          { value: 100, label: '100°C' },
        ]}
      />
    </Wrapper>
  ),
}

/** 范围选择 + 刻度 */
export const RangeWithMarks: Story = {
  render: () => (
    <Wrapper>
      <Slider
        defaultValue={[20, 60]}
        range
        marks={[
          { value: 0, label: '开始' },
          { value: 50, label: '中间' },
          { value: 100, label: '结束' },
        ]}
      />
    </Wrapper>
  ),
}

/** 受控模式 */
export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState(30)
    return (
      <Wrapper>
        <div className="space-y-4">
          <p>当前值：{value}</p>
          <Slider value={value} onChange={(v) => setValue(v as number)} />
        </div>
      </Wrapper>
    )
  },
}

/** 不同尺寸 */
export const Sizes: Story = {
  parameters: {
    docs: {
      description: {
        story: '展示小、中、大三种尺寸的滑动条，适应不同布局密度的需求。',
      },
    },
  },
  render: () => (
    <div className="w-full max-w-80 space-y-8 py-4">
      <div>
        <label className="block text-sm text-gray-600 mb-2">小尺寸（componentSize="small"）</label>
        <Slider defaultValue={30} componentSize="small" />
      </div>
      <div>
        <label className="block text-sm text-gray-600 mb-2">中尺寸（默认）</label>
        <Slider defaultValue={50} />
      </div>
      <div>
        <label className="block text-sm text-gray-600 mb-2">大尺寸（componentSize="large"）</label>
        <Slider defaultValue={70} componentSize="large" />
      </div>
    </div>
  ),
}
