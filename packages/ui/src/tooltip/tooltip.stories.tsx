import type { Meta, StoryObj } from '@storybook/react'
import { Tooltip } from './index'
import { Button } from '../button/index'
import { Input } from '../input/index'
import { Info } from 'lucide-react'

const CenterDecorator = (Story: React.FC) => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', width: '100%' }}>
    <Story />
  </div>
)

const meta: Meta<typeof Tooltip> = {
  title: '数据展示/Tooltip 文字提示',
  component: Tooltip,
  tags: ['autodocs'],
  decorators: [CenterDecorator],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: '文字提示用于在鼠标悬停、聚焦或点击时展示简短的辅助说明。适用于图标解释、按钮功能说明、表单提示等场景，支持多种触发方式和弹出位置。',
      },
    },
  },
  argTypes: {
    content: {
      control: 'text',
      description: '提示内容，支持 React 节点',
    },
    placement: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
      description: '气泡卡片弹出位置，默认 top',
    },
    trigger: {
      control: 'select',
      options: ['hover', 'focus', 'click'],
      description: '触发方式，默认 hover',
    },
    arrow: {
      control: 'boolean',
      description: '是否显示箭头，默认 true',
    },
    openDelay: {
      control: 'number',
      description: '气泡卡片打开延迟（毫秒），默认 100',
    },
    closeDelay: {
      control: 'number',
      description: '气泡卡片关闭延迟（毫秒），默认 100',
    },
  },
}

export default meta
type Story = StoryObj<typeof Tooltip>

export const Default: Story = {
  render: () => (
    <Tooltip content="这是一个提示">
      <Button>悬停查看</Button>
    </Tooltip>
  ),
}

export const PlacementTop: Story = {
  render: () => (
    <Tooltip content="上方提示" placement="top">
      <Button>上方</Button>
    </Tooltip>
  ),
}

export const PlacementBottom: Story = {
  render: () => (
    <Tooltip content="下方提示" placement="bottom">
      <Button>下方</Button>
    </Tooltip>
  ),
}

export const PlacementLeft: Story = {
  render: () => (
    <Tooltip content="左侧提示" placement="left">
      <Button>左侧</Button>
    </Tooltip>
  ),
}

export const PlacementRight: Story = {
  render: () => (
    <Tooltip content="右侧提示" placement="right">
      <Button>右侧</Button>
    </Tooltip>
  ),
}

export const FocusTrigger: Story = {
  render: () => (
    <Tooltip content="聚焦触发" trigger="focus">
      <Input placeholder="聚焦查看提示" />
    </Tooltip>
  ),
}

export const ClickTrigger: Story = {
  render: () => (
    <Tooltip content="点击触发" trigger="click">
      <Button>点击我</Button>
    </Tooltip>
  ),
}

export const NoArrow: Story = {
  render: () => (
    <Tooltip content="无箭头提示" arrow={false}>
      <Button>无箭头</Button>
    </Tooltip>
  ),
}

export const WithDelay: Story = {
  render: () => (
    <Tooltip content="延迟 500ms 的提示" openDelay={500} closeDelay={500}>
      <Button>延迟提示</Button>
    </Tooltip>
  ),
}

export const IconTrigger: Story = {
  render: () => (
    <Tooltip content="信息提示">
      <Info className="h-5 w-5 text-gray-500 cursor-help" />
    </Tooltip>
  ),
}

export const RichContent: Story = {
  render: () => (
    <Tooltip content={<span className="font-bold text-primary-500">样式化提示</span>}>
      <Button>富文本内容</Button>
    </Tooltip>
  ),
}

export const AllPlacements: Story = {
  render: () => {
    const placements = [
      { placement: 'top' as const, label: '上' },
      { placement: 'bottom' as const, label: '下' },
      { placement: 'left' as const, label: '左' },
      { placement: 'right' as const, label: '右' },
    ]
    return (
      <div className="flex gap-4 items-center justify-center">
        {placements.map(({ placement, label }) => (
          <Tooltip key={placement} content={`${label}方提示`} placement={placement}>
            <Button>{label}</Button>
          </Tooltip>
        ))}
      </div>
    )
  },
}

/** 自定义颜色 */
export const CustomColor: Story = {
  render: () => (
    <div className="flex gap-4">
      <Tooltip
        content="深色背景提示"
        className="!bg-slate-800 !text-white"
      >
        <Button>深色提示</Button>
      </Tooltip>
      <Tooltip
        content="品牌色背景提示"
        className="!bg-indigo-600 !text-white"
      >
        <Button>品牌色提示</Button>
      </Tooltip>
      <Tooltip
        content="成功色背景提示"
        className="!bg-emerald-600 !text-white"
      >
        <Button>成功色提示</Button>
      </Tooltip>
    </div>
  ),
}