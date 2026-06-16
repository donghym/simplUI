import type { Meta, StoryObj } from '@storybook/react'
import { useRef } from 'react'
import { Notification } from './index'
import { notificationApi } from './index'
import { Button } from '../button/index'

const CenterDecorator = (Story: React.FC) => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', width: '100%' }}>
    <Story />
  </div>
)

const meta: Meta<typeof Notification> = {
  title: '反馈/Notification 通知提醒框',
  component: Notification,
  tags: ['autodocs'],
  decorators: [CenterDecorator],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: '通知提醒框用于在页面角落弹出系统级的通知。\n\n- 适用于重要消息推送、任务完成提醒等需要持久展示的场景\n- 支持标题、描述、操作按钮和多种弹出位置\n- 可通过 notificationApi 全局调用，无需维护组件状态',
      },
    },
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['success', 'error', 'warning', 'info'],
      description: '通知类型，控制图标和颜色风格，默认 info',
    },
    title: {
      control: 'text',
      description: '通知标题',
    },
    description: {
      control: 'text',
      description: '通知描述内容，支持 ReactNode',
    },
    action: {
      control: 'text',
      description: '自定义操作按钮区域，显示在通知底部',
    },
  },
}

export default meta
type Story = StoryObj<typeof Notification>

export const Success: Story = {
  args: {
    type: 'success',
    title: '成功',
    description: '您的操作已成功完成。',
  },
}

export const Error: Story = {
  args: {
    type: 'error',
    title: '错误',
    description: '出错了，请重试。',
  },
}

export const Warning: Story = {
  args: {
    type: 'warning',
    title: '警告',
    description: '在继续之前，请检查您的更改。',
  },
}

export const Info: Story = {
  args: {
    type: 'info',
    title: '信息',
    description: '这里有一些对您有用的信息。',
  },
}

export const WithAction: Story = {
  parameters: {
    docs: {
      description: {
        story: '带操作按钮的通知，适用于需要用户立即响应的场景。',
      },
    },
  },
  render: () => (
    <Notification
      type="info"
      title="有可用更新"
      description="有新版本可用，是否立即更新？"
      duration={0}
      action={
        <Button variant="primary">立即更新</Button>
      }
    />
  ),
}

export const NoTitle: Story = {
  args: {
    type: 'success',
    description: '没有标题的简单通知。',
  },
}

export const NotificationApiDemo: Story = {
  parameters: {
    docs: {
      description: {
        story: '通过 notificationApi 全局调用通知，无需在组件内维护状态。',
      },
    },
  },
  render: () => {
    return (
      <div className="flex flex-col gap-4">
        <Button onClick={() => notificationApi.success({ title: '成功', description: '操作完成！' })}>
          成功
        </Button>
        <Button onClick={() => notificationApi.error({ title: '错误', description: '操作失败！' })}>
          错误
        </Button>
        <Button onClick={() => notificationApi.warning({ title: '警告', description: '请注意！' })}>
          警告
        </Button>
        <Button onClick={() => notificationApi.info({ title: '信息', description: '这里有一些信息。' })}>
          信息
        </Button>
      </div>
    )
  },
}

export const PlacementDemo: Story = {
  render: () => {
    const placements = [
      { key: 'top-left' as const, label: '左上 (topLeft)' },
      { key: 'top-right' as const, label: '右上 (topRight)' },
      { key: 'bottom-left' as const, label: '左下 (bottomLeft)' },
      { key: 'bottom-right' as const, label: '右下 (bottomRight)' },
    ]

    return (
      <div className="flex flex-wrap gap-3">
        {placements.map(({ key, label }) => (
          <Button
            key={key}
            onClick={() =>
              notificationApi.info({
                title: `${label} 通知`,
                description: `此通知出现在${label}位置`,
                placement: key,
                duration: 3000,
              })
            }
          >
            {label}
          </Button>
        ))}
      </div>
    )
  },
}

export const CustomStyle: Story = {
  render: () => (
    <Notification
      type="info"
      title="自定义样式通知"
      description="此通知使用了自定义背景色、边框和图标。"
      duration={0}
      icon={
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-secondary text-white text-xs font-bold">
          成功
        </span>
      }
      className="border-l-4 border-secondary bg-secondary/10"
    />
  ),
}

export const UpdateAndClose: Story = {
  render: () => {
    const closeRef = useRef<(() => void) | null>(null)

    const openNotification = () => {
      closeRef.current = notificationApi.info({
        title: '初始通知',
        description: '这是初始内容，将在 2 秒后更新。',
        duration: 0,
      })
    }

    const updateNotification = () => {
      closeRef.current?.()
      closeRef.current = notificationApi.success({
        title: '已更新',
        description: '通知内容已更新为成功状态。',
        duration: 0,
      })
    }

    const closeNotification = () => {
      closeRef.current?.()
      closeRef.current = null
    }

    return (
      <div className="flex flex-wrap gap-3">
        <Button onClick={openNotification}>打开通知</Button>
        <Button onClick={updateNotification}>更新通知</Button>
        <Button onClick={closeNotification}>关闭通知</Button>
      </div>
    )
  },
}