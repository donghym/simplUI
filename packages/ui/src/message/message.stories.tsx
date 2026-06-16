import type { Meta, StoryObj } from '@storybook/react'
import { useRef } from 'react'
import { Message } from './index'
import { useMessage } from '../message/index'
import { Button } from '../button/index'
import { PartyPopper } from 'lucide-react'

const CenterDecorator = (Story: React.FC) => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', width: '100%' }}>
    <Story />
  </div>
)

const meta: Meta<typeof Message> = {
  title: '反馈/Message 全局提示',
  component: Message,
  tags: ['autodocs'],
  decorators: [CenterDecorator],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: '全局提示用于在页面顶部展示轻量级的操作反馈。\n\n- 适用于提交结果、操作成功/失败提示等需要即时反馈的场景\n- 支持 success、error、warning、info、loading 多种类型\n- 可通过 useMessage Hook 在任意位置调用，无需维护 visible 状态',
      },
    },
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['success', 'error', 'warning', 'info', 'loading'],
      description: '消息类型，控制图标和颜色风格，默认 info',
    },
    content: {
      control: 'text',
      description: '消息内容，支持 ReactNode',
    },
    duration: {
      control: 'number',
      description: '自动关闭延时（毫秒），设为 0 则不自动关闭，默认 3000',
    },
    closable: {
      control: 'boolean',
      description: '是否显示关闭按钮，默认 true',
    },
    icon: {
      control: 'text',
      description: '自定义图标，不传则按 type 自动匹配默认图标',
    },
  },
}

export default meta
type Story = StoryObj<typeof Message>

export const Success: Story = {
  args: {
    type: 'success',
    content: '操作成功完成！',
    visible: true,
  },
}

export const Error: Story = {
  args: {
    type: 'error',
    content: '出错了！',
    visible: true,
  },
}

export const Warning: Story = {
  args: {
    type: 'warning',
    content: '请检查您的输入。',
    visible: true,
  },
}

export const Info: Story = {
  args: {
    type: 'info',
    content: '这是一条信息提示。',
    visible: true,
  },
}

export const Loading: Story = {
  args: {
    type: 'loading',
    content: '加载中...',
    visible: true,
    duration: 0,
  },
}

export const Closable: Story = {
  args: {
    type: 'info',
    content: '点击 X 关闭此消息。',
    visible: true,
    closable: true,
    duration: 0,
  },
}

export const WithCustomIcon: Story = {
  args: {
    type: 'success',
    content: '自定义图标消息',
    visible: true,
    icon: <PartyPopper className="h-5 w-5" />,
  },
}

export const MessageApiDemo: Story = {
  parameters: {
    docs: {
      description: {
        story: '通过 useMessage Hook 调用全局提示，无需手动管理显示状态。',
      },
    },
  },
  render: () => {
    const [messageApi, contextHolder] = useMessage()

    return (
      <div className="flex flex-col gap-4">
        {contextHolder}
        <Button onClick={() => messageApi.success('成功！')}>成功</Button>
        <Button onClick={() => messageApi.error('错误！')}>错误</Button>
        <Button onClick={() => messageApi.warning('警告！')}>警告</Button>
        <Button onClick={() => messageApi.info('信息！')}>信息</Button>
        <Button onClick={() => messageApi.loading('加载中...')}>加载中</Button>
      </div>
    )
  },
}

export const CustomDuration: Story = {
  parameters: {
    docs: {
      description: {
        story: '自定义提示持续时间，适用于需要用户仔细阅读的长文本提示。',
      },
    },
  },
  render: () => {
    const [messageApi, contextHolder] = useMessage()

    return (
      <div className="flex flex-col gap-4">
        {contextHolder}
        <Button onClick={() => messageApi.info('此消息将持续 10 秒', 10000)}>
          显示 10 秒消息
        </Button>
      </div>
    )
  },
}

export const LoadingThenSuccess: Story = {
  parameters: {
    docs: {
      description: {
        story: '先显示 loading 提示，异步操作完成后自动关闭并显示成功提示。',
      },
    },
  },
  render: () => {
    const [messageApi, contextHolder] = useMessage()
    const destroyRef = useRef<(() => void) | null>(null)

    const handleClick = () => {
      destroyRef.current = messageApi.loading('正在加载中...', 0)
      setTimeout(() => {
        destroyRef.current?.()
        destroyRef.current = null
        messageApi.success('加载完成！')
      }, 3000)
    }

    return (
      <div className="flex flex-col gap-4">
        {contextHolder}
        <Button onClick={handleClick}>加载后成功</Button>
      </div>
    )
  },
}

export const PromiseInterface: Story = {
  parameters: {
    docs: {
      description: {
        story: '模拟异步操作的结果反馈，根据成功或失败显示不同类型的提示。',
      },
    },
  },
  render: () => {
    const [messageApi, contextHolder] = useMessage()

    const simulateAsync = (shouldSucceed: boolean) => {
      const destroy = messageApi.loading('正在处理中...', 0)
      setTimeout(() => {
        destroy()
        if (shouldSucceed) {
          messageApi.success('操作成功完成！')
        } else {
          messageApi.error('操作失败，请重试！')
        }
      }, 1000)
    }

    return (
      <div className="flex flex-col gap-4">
        {contextHolder}
        <Button onClick={() => simulateAsync(true)}>异步操作（成功）</Button>
        <Button onClick={() => simulateAsync(false)}>异步操作（失败）</Button>
      </div>
    )
  },
}

export const UpdateAndDestroy: Story = {
  parameters: {
    docs: {
      description: {
        story: '手动更新或销毁提示消息，适用于需要动态反馈进度的场景。',
      },
    },
  },
  render: () => {
    const [messageApi, contextHolder] = useMessage()
    const destroyRef = useRef<(() => void) | null>(null)

    const showAndUpdate = () => {
      destroyRef.current = messageApi.info('初始消息内容', 0)
      setTimeout(() => {
        destroyRef.current?.()
        destroyRef.current = messageApi.info('消息内容已更新', 0)
      }, 1500)
    }

    const destroyManual = () => {
      destroyRef.current?.()
      destroyRef.current = null
    }

    return (
      <div className="flex flex-col gap-4">
        {contextHolder}
        <Button onClick={showAndUpdate}>显示并更新消息</Button>
        <Button onClick={destroyManual}>手动销毁消息</Button>
      </div>
    )
  },
}