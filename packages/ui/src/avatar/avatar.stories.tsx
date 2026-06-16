import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Avatar } from './index'
import { User } from 'lucide-react'

const meta: Meta<typeof Avatar> = {
  title: '数据展示/Avatar 头像',
  component: Avatar,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Avatar 头像组件用于展示用户或事物的缩略图，支持图片、文字和图标三种形式。\n\n- 用于用户中心、个人信息页展示用户头像\n- 用于评论列表、消息列表标识发送者\n- 用于团队成员展示、组织架构图\n- 当图片加载失败时自动回退为文字或图标',
      },
    },
  },
  argTypes: {
    src: {
      control: 'text',
      description: '图片源地址，传入后渲染为 img 元素',
    },
    alt: {
      control: 'text',
      description: '图片的 alt 属性，同时作为文字回退源：不传 src 或图片加载失败时取 alt 首字符显示',
    },
    icon: {
      control: 'text',
      description: '回退图标，当 src 未传入或图片加载失败时显示的图标',
    },
    size: {
      control: 'select',
      options: ['small', 'default', 'large'],
      description: '头像尺寸：small(24px)、default(40px)、large(56px)',
    },
    shape: {
      control: 'select',
      options: ['circle', 'square'],
      description: '头像形状：circle 为圆形，square 为圆角方形',
    },
    children: {
      control: 'text',
      description: '头像内容，优先级高于 icon 和 alt',
    },
    onError: {
      description: '图片加载失败回调，返回 false 可阻止默认回退行为',
    },
    srcSet: {
      control: 'text',
      description: '响应式图片的 srcSet 属性，用于不同分辨率下加载不同尺寸的图片',
    },
  },
}

export default meta
type Story = StoryObj<typeof Avatar>

export const WithImage: Story = {
  args: {
    src: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'40\' height=\'40\' viewBox=\'0 0 40 40\'%3E%3Crect fill=\'%23e5e7eb\' width=\'40\' height=\'40\' rx=\'20\'/%3E%3Ctext fill=\'%236b7280\' font-family=\'sans-serif\' font-size=\'16\' x=\'50%25\' y=\'55%25\' dominant-baseline=\'middle\' text-anchor=\'middle\'%3EF%3C/text%3E%3C/svg%3E',
    alt: '用户头像',
  },
}

export const WithText: Story = {
  args: { children: 'JD' },
}

export const WithIcon: Story = {
  args: { icon: <User className="h-5 w-5" /> },
}

export const WithAltFallback: Story = {
  args: { alt: 'Jane Doe' },
}

export const RoundedSquare: Story = {
  args: {
    src: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'40\' height=\'40\' viewBox=\'0 0 40 40\'%3E%3Crect fill=\'%23e5e7eb\' width=\'40\' height=\'40\' rx=\'20\'/%3E%3Ctext fill=\'%236b7280\' font-family=\'sans-serif\' font-size=\'16\' x=\'50%25\' y=\'55%25\' dominant-baseline=\'middle\' text-anchor=\'middle\'%3ES%3C/text%3E%3C/svg%3E',
    alt: '方形',
    shape: 'square',
  },
}

export const Large: Story = {
  args: {
    src: 'data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'40\' height=\'40\' viewBox=\'0 0 40 40\'%3E%3Crect fill=\'%23e5e7eb\' width=\'40\' height=\'40\' rx=\'20\'/%3E%3Ctext fill=\'%236b7280\' font-family=\'sans-serif\' font-size=\'16\' x=\'50%25\' y=\'55%25\' dominant-baseline=\'middle\' text-anchor=\'middle\'%3EL%3C/text%3E%3C/svg%3E',
    alt: '大尺寸',
    size: 'large',
  },
}

export const AvatarGroup: Story = {
  render: () => (
    <div className="flex -space-x-2">
      {['Felix', 'Mia', 'Zoe', 'Leo'].map((seed) => (
        <Avatar
          key={seed}
          src={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Crect fill='%23e5e7eb' width='40' height='40' rx='20'/%3E%3Ctext fill='%236b7280' font-family='sans-serif' font-size='16' x='50%25' y='55%25' dominant-baseline='middle' text-anchor='middle'%3E${seed[0]}%3C/text%3E%3C/svg%3E`}
          alt={seed}
          className="border-2 border-white"
        />
      ))}
    </div>
  ),
}

export const ResponsiveSize: Story = {
  render: () => {
    const [large, setLarge] = useState(false)
    return (
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <Avatar
            size={large ? 'large' : 'small'}
            className="transition-all duration-300"
          >
            {large ? 'LG' : 'SM'}
          </Avatar>
          <Avatar
            size={large ? 'large' : 'small'}
            icon={<User className="transition-all duration-300" />}
            className="transition-all duration-300"
          />
        </div>
        <button
          type="button"
          className="px-3 py-1.5 border border-gray-300 rounded-md text-sm hover:bg-gray-50"
          onClick={() => setLarge((v) => !v)}
        >
          Toggle Size: {large ? 'Large' : 'Small'}
        </button>
      </div>
    )
  },
}

export const AutoScaleText: Story = {
  parameters: {
    docs: {
      description: {
        story: '演示头像内文字根据字符数自动缩放的效果，1 字符显示大号、2 字符中号、3+ 字符小号，确保不同长度文本都能清晰展示。',
      },
    },
  },
  render: () => {
    const names = ['A', 'AB', 'ABC', 'ABCD', 'ABCDE']

    return (
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          {names.map((name) => (
            <div key={name} className="flex flex-col items-center gap-1">
              <Avatar size="large">
                {name}
              </Avatar>
              <span className="text-xs text-muted-foreground">{name.length} 字符</span>
            </div>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">
          根据字符数自动缩放文字大小：1 字符 = 大号，2 字符 = 中号，3+ 字符 = 小号
        </p>
      </div>
    )
  },
}
