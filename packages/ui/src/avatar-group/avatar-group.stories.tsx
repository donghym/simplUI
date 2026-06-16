import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { AvatarGroup } from './index'
import { User } from 'lucide-react'
import type { AvatarItem } from './types'

const sampleAvatars: AvatarItem[] = [
  { src: 'https://picsum.photos/300/300?random=1', name: '张三' },
  { src: 'https://picsum.photos/300/300?random=2', name: '李四' },
  { src: 'https://picsum.photos/300/300?random=3', name: '王五' },
  { src: 'https://picsum.photos/300/300?random=4', name: '赵六' },
  { src: 'https://picsum.photos/300/300?random=5', name: '孙七' },
  { src: 'https://picsum.photos/300/300?random=6', name: '周八' },
]

const meta: Meta<typeof AvatarGroup> = {
  title: '数据展示/AvatarGroup 堆叠头像组',
  component: AvatarGroup,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    maxCount: {
      control: 'number',
      description: '最大显示数量，超出部分显示 +N',
    },
    onExcessClick: {
      description: '超出数量点击回调',
    },
  },
}

export default meta
type Story = StoryObj<typeof AvatarGroup>

export const Default: Story = {
  args: {
    avatars: sampleAvatars,
    maxCount: 4,
  },
}

export const WithNameFallback: Story = {
  args: {
    avatars: [
      { name: '张三' },
      { name: '李四' },
      { name: '王五' },
    ],
  },
}

export const WithIconFallback: Story = {
  args: {
    avatars: [
      { icon: <User className="h-5 w-5" /> },
      { name: '李四' },
      { src: 'https://api.dicebear.com/7.x/avataaars/svg?seed=3', name: '王五' },
    ],
  },
}

export const ExcessClick: Story = {
  args: {
    avatars: sampleAvatars,
    maxCount: 3,
    onExcessClick: fn(),
  },
}

export const NoExcess: Story = {
  args: {
    avatars: sampleAvatars.slice(0, 3),
    maxCount: 4,
  },
}

export const SingleAvatar: Story = {
  args: {
    avatars: [{ src: 'https://api.dicebear.com/7.x/avataaars/svg?seed=1', name: '张三' }],
  },
}

export const CustomSize: Story = {
  render: () => (
    <AvatarGroup
      avatars={sampleAvatars}
      className="[&_*]:h-8 [&_*]:w-8 [&_*]:text-xs"
    />
  ),
}
