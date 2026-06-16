import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { useState } from 'react'
import { Popover } from './index'
import { Button } from '../button/index'

const CenterDecorator = (Story: React.FC) => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', minHeight: '400px', width: '100%' }}>
    <Story />
  </div>
)

const meta: Meta<typeof Popover> = {
  title: '数据展示/Popover 气泡卡片',
  component: Popover,
  tags: ['autodocs'],
  decorators: [CenterDecorator],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: '气泡卡片用于展示比文字提示更丰富的内容，可包含标题、文本和操作。适用于信息确认、快捷操作、内容预览等场景，支持点击和悬停触发。',
      },
    },
  },
  argTypes: {
    title: {
      control: 'text',
      description: '气泡卡片标题，不传则无标题栏',
    },
    content: {
      control: 'text',
      description: '气泡卡片中展示的内容',
    },
    trigger: {
      control: 'select',
      options: ['click', 'hover'],
      description: '触发方式，默认 click',
    },
    placement: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right', 'topLeft', 'topRight', 'bottomLeft', 'bottomRight'],
      description: '弹出位置，相对触发元素的方位，默认 top',
    },
    arrow: {
      control: 'boolean',
      description: '是否显示箭头，默认 true',
    },
  },
}

export default meta
type Story = StoryObj<typeof Popover>

export const Default: Story = {
  render: () => (
    <Popover content="这是一个简单的气泡卡片内容">
      <Button>点击显示</Button>
    </Popover>
  ),
}

export const WithTitle: Story = {
  render: () => (
    <Popover
      title="气泡卡片标题"
      content="这个气泡卡片有标题和下方的内容。"
    >
      <Button>带标题</Button>
    </Popover>
  ),
}

export const HoverTrigger: Story = {
  render: () => (
    <Popover
      trigger="hover"
      title="悬停气泡卡片"
      content="这个气泡卡片在悬停时出现，而不是点击。"
    >
      <Button>悬停我</Button>
    </Popover>
  ),
}

export const PlacementBottom: Story = {
  render: () => (
    <Popover
      placement="bottom"
      content="下方的气泡卡片"
    >
      <Button>下方位置</Button>
    </Popover>
  ),
}

export const PlacementLeft: Story = {
  render: () => (
    <Popover
      placement="left"
      content="左侧的气泡卡片"
    >
      <Button>左侧位置</Button>
    </Popover>
  ),
}

export const PlacementRight: Story = {
  render: () => (
    <Popover
      placement="right"
      content="右侧的气泡卡片"
    >
      <Button>右侧位置</Button>
    </Popover>
  ),
}

export const NoArrow: Story = {
  render: () => (
    <Popover
      arrow={false}
      title="无箭头"
      content="这个气泡卡片没有指向触发元素的箭头。"
    >
      <Button>无箭头</Button>
    </Popover>
  ),
}

export const RichContent: Story = {
  render: () => (
    <Popover
      title="富文本内容"
      content={
        <div className="space-y-2">
          <p>这个气泡卡片包含富文本内容。</p>
          <Button>操作按钮</Button>
        </div>
      }
    >
      <Button>富文本内容</Button>
    </Popover>
  ),
}

export const Controlled: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <Popover
        open={open}
        onOpenChange={setOpen}
        title="受控模式"
        content="这个气泡卡片由外部控制。"
      >
        <Button onClick={() => setOpen(!open)}>{open ? '关闭' : '打开'}</Button>
      </Popover>
    )
  },
}

export const PlacementTop: Story = {
  render: () => (
    <Popover
      placement="top"
      title="顶部气泡卡片"
      content="从顶部弹出的气泡卡片。"
    >
      <Button>顶部位置</Button>
    </Popover>
  ),
}

/** 富文本内容带操作 */
export const RichContentWithAction: Story = {
  render: () => {
    const [clicked, setClicked] = useState(false)
    const handleAction = fn()
    return (
      <Popover
        title="确认操作"
        content={
          <div className="space-y-3">
            <p className="text-sm text-gray-600">确定要执行此操作吗？</p>
            {clicked && <p className="text-sm text-success font-medium">操作已执行！</p>}
            <div className="flex gap-2">
              <Button
                className="h-[28px] text-xs px-3"
                onClick={() => {
                  handleAction()
                  setClicked(true)
                }}
              >
                确认
              </Button>
              <Button className="h-[28px] text-xs px-3" variant="dashed" onClick={() => setClicked(false)}>
                重置
              </Button>
            </div>
          </div>
        }
      >
        <Button>点击打开</Button>
      </Popover>
    )
  },
}