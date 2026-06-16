import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { fn } from '@storybook/test'
import { List } from './index'
import { ListItem } from '../list/index'
import { ListItemMeta } from '../list/index'
import { Avatar } from '../avatar/index'
import { Button } from '../button/index'

const meta: Meta<typeof List> = {
  title: '数据展示/List 列表',
  component: List,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: '列表用于展示一系列同类内容的条目。适用于消息通知、文章列表、用户评论等场景，支持头像、描述、前缀后缀和加载状态。',
      },
    },
  },
  argTypes: {
    header: {
      control: 'text',
      description: '列表头部内容',
    },
    footer: {
      control: 'text',
      description: '列表底部内容',
    },
    bordered: {
      control: 'boolean',
      description: '是否显示分割线，默认 false',
    },
    loading: {
      control: 'boolean',
      description: '是否显示加载状态，默认 false',
    },
    dataSource: {
      control: 'object',
      description: '列表数据源，配合 renderItem 渲染列表项',
    },
  },
}

export default meta
type Story = StoryObj<typeof List>

const handleItemClick = fn()

export const Default: Story = {
  render: () => (
    <List>
      <ListItem>列表项 1</ListItem>
      <ListItem>列表项 2</ListItem>
      <ListItem>列表项 3</ListItem>
    </List>
  ),
}

export const WithHeader: Story = {
  render: () => (
    <List header="列表标题">
      <ListItem>列表项 1</ListItem>
      <ListItem>列表项 2</ListItem>
      <ListItem>列表项 3</ListItem>
    </List>
  ),
}

export const WithFooter: Story = {
  render: () => (
    <List footer="列表底部">
      <ListItem>列表项 1</ListItem>
      <ListItem>列表项 2</ListItem>
      <ListItem>列表项 3</ListItem>
    </List>
  ),
}

export const Bordered: Story = {
  render: () => (
    <List bordered>
      <ListItem>列表项 1</ListItem>
      <ListItem>列表项 2</ListItem>
      <ListItem>列表项 3</ListItem>
    </List>
  ),
}

export const WithAvatar: Story = {
  render: () => (
    <List>
      <ListItem>
        <ListItemMeta
          avatar={<Avatar>U</Avatar>}
          title="用户 1"
          description="用户 1 的描述"
        />
      </ListItem>
      <ListItem>
        <ListItemMeta
          avatar={<Avatar>A</Avatar>}
          title="用户 2"
          description="用户 2 的描述"
        />
      </ListItem>
    </List>
  ),
}

export const WithPrefixSuffix: Story = {
  render: () => (
    <List>
      <ListItem prefix={<span className="text-primary-500">→</span>} suffix={<span className="text-gray-400">3</span>}>
        带前缀和后缀的列表项
      </ListItem>
      <ListItem prefix={<span className="text-primary-500">→</span>}>
        仅带前缀的列表项
      </ListItem>
      <ListItem suffix={<span className="text-gray-400">5</span>}>
        仅带后缀的列表项
      </ListItem>
    </List>
  ),
}

export const Clickable: Story = {
  render: () => (
    <List>
      <ListItem onClick={handleItemClick}>可点击列表项 1</ListItem>
      <ListItem onClick={handleItemClick}>可点击列表项 2</ListItem>
      <ListItem disabled onClick={handleItemClick}>禁用列表项</ListItem>
    </List>
  ),
}

export const Loading: Story = {
  render: () => (
    <List loading>
      <ListItem>加载中...</ListItem>
    </List>
  ),
}

export const Empty: Story = {
  render: () => (
    <List dataSource={[]} renderItem={(item) => <ListItem>{String(item)}</ListItem>} />
  ),
}

export const WithDataSource: Story = {
  render: () => (
    <List
      dataSource={['苹果', '香蕉', '樱桃']}
      renderItem={(item) => <ListItem key={String(item)}>{String(item)}</ListItem>}
    />
  ),
}

export const GridList: Story = {
  render: () => (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {['项目 A', '项目 B', '项目 C', '项目 D', '项目 E', '项目 F'].map((item) => (
        <List key={item} bordered>
          <ListItem>
            <ListItemMeta
              avatar={<Avatar>{item.slice(-1)}</Avatar>}
              title={item}
              description={`${item}的描述信息`}
            />
          </ListItem>
        </List>
      ))}
    </div>
  ),
}

export const InfiniteScroll: Story = {
  render: () => {
    const generateItems = (start: number, count: number) =>
      Array.from({ length: count }, (_, i) => ({
        id: start + i,
        title: `项目 ${start + i}`,
        description: `这是项目 ${start + i} 的描述信息`,
      }))

    const [items, setItems] = useState(() => generateItems(1, 5))
    const [loading, setLoading] = useState(false)

    const loadMore = () => {
      setLoading(true)
      setTimeout(() => {
        setItems((prev) => [...prev, ...generateItems(prev.length + 1, 5)])
        setLoading(false)
      }, 1000)
    }

    return (
      <div>
        <List
          header="无限滚动列表"
          footer={
            <div className="text-center">
              <Button onClick={loadMore} loading={loading} variant="link">
                加载更多
              </Button>
            </div>
          }
        >
          {items.map((item) => (
            <ListItem key={item.id}>
              <ListItemMeta
                avatar={<Avatar>{item.id}</Avatar>}
                title={item.title}
                description={item.description}
              />
            </ListItem>
          ))}
        </List>
        <p className="text-xs text-gray-400 mt-2">点击"加载更多"按钮追加列表项（模拟 1 秒延迟）</p>
      </div>
    )
  },
}