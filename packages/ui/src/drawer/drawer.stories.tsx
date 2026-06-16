import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Drawer } from './index'
import { Button } from '../button/index'

const CenterDecorator = (Story: React.FC) => (
  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', minHeight: '500px', width: '100%', paddingTop: '40px' }}>
    <Story />
  </div>
)

const meta: Meta<typeof Drawer> = {
  title: '反馈/Drawer 抽屉',
  component: Drawer,
  tags: ['autodocs'],
  decorators: [CenterDecorator],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: '抽屉用于从屏幕边缘滑出的浮层面板，承载复杂的表单或详情信息。\n\n- 适用于设置面板、详情查看、多层导航等需要侧向空间的场景\n- 支持 left、right、top、bottom 四个方向弹出\n- 可自定义宽高、底部操作区及遮罩层关闭行为',
      },
    },
  },
  argTypes: {
    placement: {
      control: 'select',
      options: ['left', 'right', 'top', 'bottom'],
      description: '抽屉弹出位置，默认 right',
    },
    open: {
      control: 'boolean',
      description: '抽屉是否可见，受控',
    },
    title: {
      control: 'text',
      description: '抽屉标题',
    },
    width: {
      control: 'number',
      description: '抽屉宽度（left/right 放置时生效），默认 378',
    },
    height: {
      control: 'number',
      description: '抽屉高度（top/bottom 放置时生效），默认 378',
    },
    maskClosable: {
      control: 'boolean',
      description: '点击遮罩层是否关闭，默认 true',
    },
    closable: {
      control: 'boolean',
      description: '是否显示关闭按钮，默认 true',
    },
  },
}

export default meta
type Story = StoryObj<typeof Drawer>

export const Right: Story = {
  parameters: {
    docs: {
      description: {
        story: '最基础的抽屉用法，从右侧滑出，适用于大多数详情展示场景。',
      },
    },
  },
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <Button onClick={() => setOpen(true)}>打开抽屉</Button>
        <Drawer open={open} onClose={() => setOpen(false)} title="基础抽屉" placement="right">
          <div style={{ minHeight: '500px' }}>
            <p>抽屉内容从右侧滑入。</p>
          </div>
        </Drawer>
      </>
    )
  },
}

export const Left: Story = {
  parameters: {
    docs: {
      description: {
        story: '从左侧滑出的抽屉，适用于导航菜单或层级选择场景。',
      },
    },
  },
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <Button onClick={() => setOpen(true)}>从左侧打开</Button>
        <Drawer open={open} onClose={() => setOpen(false)} title="左侧抽屉" placement="left">
          <div style={{ minHeight: '500px' }}>
            <p>从屏幕左侧滑入。</p>
          </div>
        </Drawer>
      </>
    )
  },
}

export const Top: Story = {
  parameters: {
    docs: {
      description: {
        story: '从顶部滑出的抽屉，适用于搜索面板或筛选条件展示。',
      },
    },
  },
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <Button onClick={() => setOpen(true)}>从顶部打开</Button>
        <Drawer open={open} onClose={() => setOpen(false)} title="顶部抽屉" placement="top" height={300}>
          <div style={{ minHeight: '500px' }}>
            <p>从屏幕顶部滑入。</p>
          </div>
        </Drawer>
      </>
    )
  },
}

export const WithFooter: Story = {
  parameters: {
    docs: {
      description: {
        story: '带底部操作按钮的抽屉，常用于表单编辑后的保存与取消操作。',
      },
    },
  },
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <Button onClick={() => setOpen(true)}>带底部按钮</Button>
        <Drawer
          open={open}
          onClose={() => setOpen(false)}
          title="设置"
          footer={
            <>
              <Button variant="default" onClick={() => setOpen(false)}>取消</Button>
              <Button onClick={() => setOpen(false)}>保存</Button>
            </>
          }
        >
          <div style={{ minHeight: '500px' }}>
            <p>抽屉主体内容，底部带有操作按钮。</p>
          </div>
        </Drawer>
      </>
    )
  },
}

export const Bottom: Story = {
  parameters: {
    docs: {
      description: {
        story: '从底部滑出的抽屉，适用于移动端操作面板或底部表单。',
      },
    },
  },
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <Button onClick={() => setOpen(true)}>从底部打开</Button>
        <Drawer open={open} onClose={() => setOpen(false)} title="底部抽屉" placement="bottom" height={300}>
          <div style={{ minHeight: '500px' }}>
            <p>从屏幕底部滑入。</p>
          </div>
        </Drawer>
      </>
    )
  },
}

export const MultiLayer: Story = {
  parameters: {
    docs: {
      description: {
        story: '多层抽屉嵌套，适用于复杂的多级详情或设置场景。',
      },
    },
  },
  render: () => {
    const [open1, setOpen1] = useState(false)
    const [open2, setOpen2] = useState(false)
    return (
      <>
        <Button onClick={() => setOpen1(true)}>打开抽屉</Button>
        <Drawer open={open1} onClose={() => setOpen1(false)} title="第一层抽屉" placement="right">
          <div style={{ minHeight: '500px' }}>
            <p>这是第一层抽屉的内容。</p>
            <Button onClick={() => setOpen2(true)} className="mt-4">打开第二层</Button>
          </div>
        </Drawer>
        <Drawer open={open2} onClose={() => setOpen2(false)} title="第二层抽屉" placement="right">
          <div style={{ minHeight: '500px' }}>
            <p>这是第二层抽屉的内容，关闭后回到第一层。</p>
          </div>
        </Drawer>
      </>
    )
  },
}
