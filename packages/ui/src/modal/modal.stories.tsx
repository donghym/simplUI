import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { fn } from '@storybook/test'
import { Modal } from './index'
import { Button } from '../button/index'

const CenterDecorator = (Story: React.FC) => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '500px', width: '100%' }}>
    <Story />
  </div>
)

const meta: Meta<typeof Modal> = {
  title: '反馈/Modal 对话框',
  component: Modal,
  tags: ['autodocs'],
  decorators: [CenterDecorator],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: '对话框用于在当前页面之上弹出一个浮层，承载需要用户确认或操作的重要信息。\n\n- 适用于需要用户立即关注或响应的场景，如二次确认、表单编辑、信息展示等\n- 支持自定义底部操作区、宽度、关闭行为等\n- 提供受控与非受控两种使用方式',
      },
    },
  },
  argTypes: {
    open: {
      control: 'boolean',
      description: '弹窗是否可见，受控模式',
    },
    onClose: {
      control: 'text',
      description: '关闭回调',
    },
    title: {
      control: 'text',
      description: '弹窗标题',
    },
    footer: {
      control: 'text',
      description: '底部内容，不传时为空',
    },
    width: {
      control: 'number',
      description: '弹窗宽度，默认 520',
    },
    closable: {
      control: 'boolean',
      description: '是否显示关闭按钮，默认 true',
    },
  },
}

export default meta
type Story = StoryObj<typeof Modal>

const handleConfirm = fn()
const handleDelete = fn()

export const Basic: Story = {
  parameters: {
    docs: {
      description: {
        story: '最基础的弹窗用法，通过按钮控制弹窗的显示与隐藏。',
      },
    },
  },
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <Button onClick={() => setOpen(true)}>打开弹窗</Button>
        <Modal open={open} onClose={() => setOpen(false)} title="基础弹窗">
          <p>弹窗内容区域。按 ESC 或点击遮罩层可关闭。</p>
        </Modal>
      </>
    )
  },
}

export const WithFooter: Story = {
  parameters: {
    docs: {
      description: {
        story: '自定义底部操作区，常用于二次确认场景。',
      },
    },
  },
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <Button onClick={() => setOpen(true)}>带底部按钮</Button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title="确认操作"
          footer={
            <>
              <Button variant="default" onClick={() => setOpen(false)}>取消</Button>
              <Button onClick={() => { handleConfirm('已确认'); setOpen(false) }}>确认</Button>
            </>
          }
        >
          <p>确定要继续执行该操作吗？</p>
        </Modal>
      </>
    )
  },
}

export const CustomWidth: Story = {
  parameters: {
    docs: {
      description: {
        story: '通过 width 属性自定义弹窗宽度，适用于内容较宽的场景。',
      },
    },
  },
  render: () => {
    const [open, setOpen] = useState(false)
    // Default width for demo; could be made dynamic via a slider/input control
    const modalWidth = 800
    return (
      <>
        <Button onClick={() => setOpen(true)}>宽弹窗</Button>
        <Modal open={open} onClose={() => setOpen(false)} title="宽弹窗" width={modalWidth}>
          <p>此弹窗宽度为 {modalWidth}px。</p>
        </Modal>
      </>
    )
  },
}

export const NotClosable: Story = {
  parameters: {
    docs: {
      description: {
        story: '禁止点击遮罩层关闭弹窗，适用于必须用户明确操作才能关闭的场景。',
      },
    },
  },
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <Button onClick={() => setOpen(true)}>点击遮罩不可关闭</Button>
        <Modal open={open} onClose={() => setOpen(false)} title="点击遮罩不可关闭" maskClosable={false}>
          <p>必须使用按钮来关闭此弹窗。</p>
        </Modal>
      </>
    )
  },
}

export const NoTitle: Story = {
  parameters: {
    docs: {
      description: {
        story: '不显示标题栏的简洁弹窗，适用于纯内容展示场景。',
      },
    },
  },
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <Button onClick={() => setOpen(true)}>无标题弹窗</Button>
        <Modal open={open} onClose={() => setOpen(false)}>
          <p>不显示标题栏。</p>
        </Modal>
      </>
    )
  },
}

export const ConfirmModal: Story = {
  parameters: {
    docs: {
      description: {
        story: '典型的删除确认弹窗，使用危险色按钮强调操作风险。',
      },
    },
  },
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <Button onClick={() => setOpen(true)}>确认对话框</Button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          title="确认删除"
          footer={
            <>
              <Button variant="default" onClick={() => setOpen(false)}>取消</Button>
              <Button className="bg-danger-500 hover:bg-danger-600" onClick={() => { handleDelete('已删除'); setOpen(false) }}>删除</Button>
            </>
          }
        >
          <p>确定要删除该项目吗？此操作不可撤销。</p>
        </Modal>
      </>
    )
  },
}

export const AsyncClose: Story = {
  parameters: {
    docs: {
      description: {
        story: '模拟异步操作的弹窗，提交时显示加载状态并在完成后关闭。',
      },
    },
  },
  render: () => {
    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(false)
    const handleOk = () => {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
        setOpen(false)
      }, 2000)
    }
    return (
      <>
        <Button onClick={() => setOpen(true)}>异步关闭</Button>
        <Modal
          open={open}
          onClose={() => { if (!loading) setOpen(false) }}
          title="异步操作"
          footer={
            <>
              <Button variant="default" onClick={() => setOpen(false)} disabled={loading}>取消</Button>
              <Button onClick={handleOk} disabled={loading}>{loading ? '提交中...' : '确认'}</Button>
            </>
          }
        >
          <p>点击确认后模拟异步操作，2 秒后自动关闭。</p>
        </Modal>
      </>
    )
  },
}

export const Centered: Story = {
  parameters: {
    docs: {
      description: {
        story: '弹窗在屏幕正中显示，适用于需要突出展示的重要信息。',
      },
    },
  },
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <Button onClick={() => setOpen(true)}>居中弹窗</Button>
        <Modal open={open} onClose={() => setOpen(false)} title="居中对话框">
          <p>此弹窗在屏幕正中显示。</p>
        </Modal>
      </>
    )
  },
}
