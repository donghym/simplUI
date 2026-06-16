import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Tour } from './index'

const CenterDecorator = (Story: React.FC) => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', width: '100%' }}>
    <Story />
  </div>
)

const meta: Meta<typeof Tour> = {
  title: '反馈/Tour 漫游式引导',
  component: Tour,
  tags: ['autodocs'],
  decorators: [CenterDecorator],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: '用于引导用户了解产品功能的新手引导组件，支持步骤进度条和 localStorage 记忆。',
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof Tour>

/** 基础用法 */
export const Basic: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <div>
        <button id="tour-btn-1" onClick={() => setOpen(true)} className="mr-4">
          开始引导
        </button>
        <button id="tour-btn-2">另一个按钮</button>
        <Tour
          open={open}
          onClose={() => setOpen(false)}
          steps={[
            {
              target: '#tour-btn-1',
              title: '欢迎',
              description: '这是引导的第一步。',
            },
            {
              target: '#tour-btn-2',
              title: '下一步',
              description: '这是引导的第二步。',
            },
          ]}
        />
      </div>
    )
  },
}

/** 居中引导（无目标元素） */
export const Centered: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <div>
        <button onClick={() => setOpen(true)}>打开引导</button>
        <Tour
          open={open}
          onClose={() => setOpen(false)}
          steps={[
            {
              title: '居中引导',
              description: '此引导步骤居中显示，无目标元素。',
            },
          ]}
        />
      </div>
    )
  },
}

/** 受控模式多步骤 */
export const MultipleSteps: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    const [current, setCurrent] = useState(0)
    return (
      <div>
        <button onClick={() => { setOpen(true); setCurrent(0) }}>重新开始</button>
        <Tour
          open={open}
          current={current}
          onChange={setCurrent}
          onClose={() => setOpen(false)}
          steps={[
            { title: '步骤 1', description: '第一步' },
            { title: '步骤 2', description: '第二步' },
            { title: '步骤 3', description: '第三步' },
          ]}
        />
      </div>
    )
  },
}

/** localStorage 记忆（完成后不再弹出） */
export const WithStorageKey: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <div>
        <button onClick={() => setOpen(true)}>打开带记忆的引导</button>
        <p className="text-sm text-gray-500 mt-2">
          完成后刷新页面，导览不会再次弹出。清除 localStorage 可重置。
        </p>
        <Tour
          open={open}
          onClose={() => setOpen(false)}
          storageKey="tour-story-storage-demo"
          steps={[
            { title: '带记忆的引导', description: '完成后会记录到 localStorage，下次不再弹出。' },
          ]}
        />
      </div>
    )
  },
}

/** 隐藏进度条 */
export const NoProgress: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <div>
        <button onClick={() => setOpen(true)}>打开无进度条引导</button>
        <Tour
          open={open}
          onClose={() => setOpen(false)}
          showProgress={false}
          steps={[
            { title: '无进度条', description: '此导览不显示顶部进度条。' },
            { title: '第二步', description: '仍然可以正常导航。' },
          ]}
        />
      </div>
    )
  },
}
