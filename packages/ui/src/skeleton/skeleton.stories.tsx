import type { Meta, StoryObj } from '@storybook/react'
import { Skeleton } from './index'
import { SkeletonElement } from '../skeleton/index'

const meta: Meta<typeof Skeleton> = {
  title: '反馈/Skeleton 骨架屏',
  component: Skeleton,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    active: { control: 'boolean', description: '是否显示动画' },
    avatar: { control: 'boolean', description: '是否显示头像占位' },
    title: { control: 'boolean', description: '是否显示标题占位' },
    paragraph: { control: 'boolean', description: '是否显示段落占位' },
    loading: { control: 'boolean', description: '是否处于加载状态' },
    avatarShape: { control: 'select', options: ['circle', 'square'], description: '头像形状' },
    avatarSize: { control: 'number', description: '头像尺寸' },
    paragraphRows: { control: 'number', description: '段落行数' },
  },
}

export default meta
type Story = StoryObj<typeof Skeleton>

/** 基础骨架屏 */
export const Default: Story = {
  args: {
    active: true,
  },
}

/** 带头像 */
export const WithAvatar: Story = {
  args: {
    active: true,
    avatar: true,
    avatarSize: 50,
  },
}

/** 方形头像 */
export const SquareAvatar: Story = {
  args: {
    active: true,
    avatar: true,
    avatarShape: 'square',
    avatarSize: 60,
  },
}

/** 无标题 */
export const NoTitle: Story = {
  args: {
    active: true,
    title: false,
    paragraphRows: 4,
  },
}

/** 无段落 */
export const NoParagraph: Story = {
  args: {
    active: true,
    paragraph: false,
  },
}

/** 自定义行数 */
export const CustomRows: Story = {
  args: {
    active: true,
    paragraphRows: 5,
    paragraphLastWidth: '40%',
  },
}

/** 卡片骨架 */
export const CardSkeleton: Story = {
  args: {
    active: true,
    avatar: true,
    avatarShape: 'square',
    avatarSize: 60,
    titleWidth: '50%',
    paragraphRows: 3,
  },
}

/** 无动画 */
export const Inactive: Story = {
  args: {
    active: false,
    avatar: true,
  },
}

/** 加载完成显示内容 */
export const WithChildren: Story = {
  render: () => (
    <Skeleton
      loading={false}
    >
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
          U
        </div>
        <div>
          <div className="font-medium text-gray-900">User Name</div>
          <div className="text-sm text-gray-500">user@example.com</div>
        </div>
      </div>
    </Skeleton>
  ),
}

// ========== SkeletonElement 示例 ==========

/** 文本元素 */
export const TextElement: Story = {
  render: () => (
    <div className="space-y-2 w-full max-w-64">
      <SkeletonElement variant="text" active width="100%" height={16} />
      <SkeletonElement variant="text" active width="75%" height={16} />
      <SkeletonElement variant="text" active width="50%" height={16} />
    </div>
  ),
}

/** 圆形元素 */
export const CircleElement: Story = {
  render: () => (
    <div className="flex gap-3">
      <SkeletonElement variant="circle" active width={48} height={48} />
      <SkeletonElement variant="circle" active width={32} height={32} />
      <SkeletonElement variant="circle" active width={64} height={64} />
    </div>
  ),
}

/** 矩形元素 */
export const RectElement: Story = {
  render: () => (
    <div className="space-y-3 w-full max-w-64">
      <SkeletonElement variant="rect" active width="100%" height={120} />
      <SkeletonElement variant="rect" active width="100%" height={80} />
    </div>
  ),
}

/** 列表骨架 */
export const ListSkeleton: Story = {
  render: () => (
    <div className="space-y-4 w-full max-w-80">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="flex items-center gap-3">
          <SkeletonElement variant="circle" active width={40} height={40} />
          <div className="flex-1 space-y-2">
            <SkeletonElement variant="text" active width="60%" height={16} />
            <SkeletonElement variant="text" active width="40%" height={12} />
          </div>
        </div>
      ))}
    </div>
  ),
}

/** 卡片列表骨架 */
export const CardListSkeleton: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-4 w-full max-w-[600px]">
      {[1, 2, 3].map((i) => (
        <div key={i} className="border rounded-lg p-4 space-y-3">
          <SkeletonElement variant="rect" active width="100%" height={100} />
          <SkeletonElement variant="text" active width="80%" height={16} />
          <SkeletonElement variant="text" active width="60%" height={12} />
        </div>
      ))}
    </div>
  ),
}

/** 表格骨架 */
export const TableSkeleton: Story = {
  render: () => (
    <div className="w-full max-w-[600px] space-y-2">
      {/* 表头 */}
      <div className="flex gap-4 pb-2 border-b">
        <SkeletonElement variant="text" active width="25%" height={20} />
        <SkeletonElement variant="text" active width="25%" height={20} />
        <SkeletonElement variant="text" active width="25%" height={20} />
        <SkeletonElement variant="text" active width="25%" height={20} />
      </div>
      {/* 行 */}
      {[1, 2, 3, 4, 5].map((i) => (
        <div key={i} className="flex gap-4 py-2">
          <SkeletonElement variant="text" active width="25%" height={16} />
          <SkeletonElement variant="text" active width="25%" height={16} />
          <SkeletonElement variant="text" active width="25%" height={16} />
          <SkeletonElement variant="text" active width="25%" height={16} />
        </div>
      ))}
    </div>
  ),
}

/** 文章骨架 */
export const ArticleSkeleton: Story = {
  render: () => (
    <div className="w-full max-w-[500px] space-y-4">
      <SkeletonElement variant="text" active width="70%" height={32} />
      <div className="flex items-center gap-3">
        <SkeletonElement variant="circle" active width={36} height={36} />
        <div className="flex-1 space-y-1">
          <SkeletonElement variant="text" active width="30%" height={16} />
          <SkeletonElement variant="text" active width="20%" height={12} />
        </div>
      </div>
      <SkeletonElement variant="rect" active width="100%" height={200} />
      <div className="space-y-2">
        <SkeletonElement variant="text" active width="100%" height={16} />
        <SkeletonElement variant="text" active width="100%" height={16} />
        <SkeletonElement variant="text" active width="90%" height={16} />
        <SkeletonElement variant="text" active width="95%" height={16} />
        <SkeletonElement variant="text" active width="60%" height={16} />
      </div>
    </div>
  ),
}

/** 复杂场景 - 用户资料卡片 */
export const UserProfileSkeleton: Story = {
  render: () => (
    <div className="w-full max-w-80 border rounded-xl p-6 space-y-4">
      <div className="flex flex-col items-center space-y-3">
        <SkeletonElement variant="circle" active width={80} height={80} />
        <SkeletonElement variant="text" active width="60%" height={20} />
        <SkeletonElement variant="text" active width="40%" height={16} />
      </div>
      <div className="flex justify-center gap-6 py-2">
        <div className="text-center space-y-1">
          <SkeletonElement variant="text" active width={40} height={20} className="mx-auto" />
          <SkeletonElement variant="text" active width={50} height={12} className="mx-auto" />
        </div>
        <div className="text-center space-y-1">
          <SkeletonElement variant="text" active width={40} height={20} className="mx-auto" />
          <SkeletonElement variant="text" active width={50} height={12} className="mx-auto" />
        </div>
        <div className="text-center space-y-1">
          <SkeletonElement variant="text" active width={40} height={20} className="mx-auto" />
          <SkeletonElement variant="text" active width={50} height={12} className="mx-auto" />
        </div>
      </div>
      <div className="space-y-2 pt-2">
        <SkeletonElement variant="text" active width="100%" height={16} />
        <SkeletonElement variant="text" active width="100%" height={16} />
        <SkeletonElement variant="text" active width="80%" height={16} />
      </div>
    </div>
  ),
}

/** 按钮骨架 */
export const ButtonSkeleton: Story = {
  render: () => (
    <div className="flex gap-3">
      <SkeletonElement variant="rect" active width={80} height={32} className="rounded-md" />
      <SkeletonElement variant="rect" active width={100} height={32} className="rounded-md" />
      <SkeletonElement variant="rect" active width={64} height={32} className="rounded-md" />
    </div>
  ),
}

/** 图片骨架 */
export const ImageSkeleton: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-full max-w-64">
      <SkeletonElement variant="rect" active width="100%" height={160} className="rounded-lg" />
      <div className="space-y-2">
        <SkeletonElement variant="text" active width="70%" height={16} />
        <SkeletonElement variant="text" active width="50%" height={12} />
      </div>
    </div>
  ),
}
