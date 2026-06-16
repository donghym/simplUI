import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Breadcrumb } from './index'
import { BreadcrumbItem } from '../breadcrumb/index'
import type { BreadcrumbItemType } from '../breadcrumb/index'
import { Home, ChevronRight, MoreHorizontal } from 'lucide-react'

const meta: Meta<typeof Breadcrumb> = {
  title: '导航/Breadcrumb 面包屑',
  component: Breadcrumb,
  tags: ['autodocs'],
  argTypes: {
    separator: {
      control: 'text',
      description: '分隔符，默认 "/"，可以是字符串或 ReactNode（如图标）',
    },
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `显示当前页面在系统层级结构中的位置，并可向上返回。\n\n- 路径导航：用于多级页面，帮助用户了解当前位置并快速返回上级。\n- 自定义分隔符：支持使用图标或文字作为层级分隔符。\n- 层级收起：当路径层级过多时，支持收起中间层级以节省空间。`,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Breadcrumb>

export const Default: Story = {
  args: {
    items: [
      { title: '首页', href: '/' },
      { title: '产品', href: '/products' },
      { title: '电子产品', href: '/products/electronics' },
      { title: '手机' },
    ],
  },
}

export const WithCustomSeparator: Story = {
  args: {
    items: [
      { title: '首页', href: '/' },
      { title: '分类', href: '/category' },
      { title: '商品' },
    ],
    separator: <ChevronRight className="h-4 w-4" />,
  },
}

export const WithIcon: Story = {
  args: {
    items: [
      { title: <Home className="h-4 w-4" />, href: '/' },
      { title: '仪表盘', href: '/dashboard' },
      { title: '分析' },
    ],
  },
}

export const WithDropdown: Story = {
  args: {
    items: [
      { title: '首页', href: '/' },
      {
        title: '产品',
        dropdownMenu: (
          <div className="p-2 bg-white shadow rounded">
            <a href="/products/electronics">电子产品</a>
            <a href="/products/clothing">服装</a>
          </div>
        ),
      },
      { title: '当前页面' },
    ],
  },
}

export const DisabledItem: Story = {
  args: {
    items: [
      { title: '首页', href: '/' },
      { title: '禁用', disabled: true },
      { title: '激活' },
    ],
  },
}

export const WithChildren: Story = {
  parameters: {
    docs: {
      description: {
        story: '使用子组件方式组合面包屑，适用于需要更灵活控制每项内容和样式的场景。',
      },
    },
  },
  render: () => (
    <Breadcrumb separator="/">
      <BreadcrumbItem href="/">首页</BreadcrumbItem>
      <BreadcrumbItem href="/products">产品</BreadcrumbItem>
      <BreadcrumbItem>当前</BreadcrumbItem>
    </Breadcrumb>
  ),
}

export const WithMaxCount: Story = {
  parameters: {
    docs: {
      description: {
        story: '当路径层级过多时，通过收起中间层级并显示省略号，节省展示空间。',
      },
    },
  },
  render: () => {
    const allItems: BreadcrumbItemType[] = [
      { title: '首页', href: '/' },
      { title: '产品中心', href: '/products' },
      { title: '电子产品', href: '/products/electronics' },
      { title: '手机', href: '/products/electronics/phones' },
      { title: '智能手机' },
    ]
    const maxCount = 3
    const [expanded, setExpanded] = useState(false)

    let displayItems: BreadcrumbItemType[] = allItems
    if (!expanded && allItems.length > maxCount) {
      const head: BreadcrumbItemType = allItems[0]!
      const tail: BreadcrumbItemType[] = allItems.slice(-2)
      displayItems = [
        head,
        {
          title: (
            <span
              className="inline-flex items-center gap-1 cursor-pointer text-muted-foreground hover:text-foreground"
              onClick={() => setExpanded(true)}
            >
              <MoreHorizontal className="h-4 w-4" />
            </span>
          ),
        },
        ...tail,
      ]
    }

    return (
      <div className="space-y-2">
        <Breadcrumb items={displayItems} separator="/" />
        {expanded && (
          <button
            type="button"
            className="text-xs text-muted-foreground hover:text-foreground"
            onClick={() => setExpanded(false)}
          >
            收起
          </button>
        )}
      </div>
    )
  },
}