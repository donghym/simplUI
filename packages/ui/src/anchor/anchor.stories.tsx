import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Anchor } from './index'

const meta: Meta<typeof Anchor> = {
  title: '导航/Anchor 锚点',
  component: Anchor,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `用于跳转到页面指定位置的锚点链接。\n\n- 长页导航：用于文档、说明页等长页面，快速定位到目标章节。\n- 层级锚点：支持多级嵌套，展示章节层级关系。\n- 滚动监听：自动高亮当前可见区域对应的锚点项。`,
      },
    },
  },
  argTypes: {
    items: {
      control: false,
      description: '锚点链接列表，每项包含 key、title 和可选的 children',
    },
    offsetTop: {
      control: 'number',
      description: '滚动偏移量，点击锚点跳转时目标位置额外偏移的像素值，默认 0',
    },
    activeKey: {
      control: 'text',
      description: '当前激活的锚点 key，受控模式',
    },
    onChange: {
      control: false,
      description: '激活锚点变化时的回调，参数为新的激活 key',
    },
  },
}

export default meta
type Story = StoryObj<typeof Anchor>

export const Default: Story = {
  render: () => (
    <div className="flex gap-8">
      <Anchor
        items={[
          { key: 'section1', title: '章节 1' },
          { key: 'section2', title: '章节 2' },
          { key: 'section3', title: '章节 3' },
        ]}
      />
      <div className="flex-1 space-y-4">
        <div id="section1" className="p-4 bg-muted rounded-md">
          <h3 className="text-lg font-medium">章节 1</h3>
          <p className="text-muted-foreground">这是章节 1 的内容区域。</p>
        </div>
        <div id="section2" className="p-4 bg-muted rounded-md">
          <h3 className="text-lg font-medium">章节 2</h3>
          <p className="text-muted-foreground">这是章节 2 的内容区域。</p>
        </div>
        <div id="section3" className="p-4 bg-muted rounded-md">
          <h3 className="text-lg font-medium">章节 3</h3>
          <p className="text-muted-foreground">这是章节 3 的内容区域。</p>
        </div>
      </div>
    </div>
  ),
}

export const WithChildren: Story = {
  render: () => (
    <div className="flex gap-8">
      <Anchor
        items={[
          {
            key: 'chapter1',
            title: '第一章',
            children: [
              { key: 'section1-1', title: '1.1 节' },
              { key: 'section1-2', title: '1.2 节' },
            ],
          },
          {
            key: 'chapter2',
            title: '第二章',
            children: [
              { key: 'section2-1', title: '2.1 节' },
              { key: 'section2-2', title: '2.2 节' },
            ],
          },
        ]}
      />
      <div className="flex-1 space-y-4">
        <div id="chapter1" className="p-4 bg-muted rounded-md">
          <h3 className="text-lg font-medium">第一章</h3>
          <p className="text-muted-foreground">这是第一章的内容区域。</p>
        </div>
        <div id="section1-1" className="p-4 bg-muted/50 rounded-md ml-4">
          <h4 className="font-medium">1.1 节</h4>
          <p className="text-muted-foreground">这是 1.1 节的内容。</p>
        </div>
        <div id="section1-2" className="p-4 bg-muted/50 rounded-md ml-4">
          <h4 className="font-medium">1.2 节</h4>
          <p className="text-muted-foreground">这是 1.2 节的内容。</p>
        </div>
        <div id="chapter2" className="p-4 bg-muted rounded-md">
          <h3 className="text-lg font-medium">第二章</h3>
          <p className="text-muted-foreground">这是第二章的内容区域。</p>
        </div>
        <div id="section2-1" className="p-4 bg-muted/50 rounded-md ml-4">
          <h4 className="font-medium">2.1 节</h4>
          <p className="text-muted-foreground">这是 2.1 节的内容。</p>
        </div>
        <div id="section2-2" className="p-4 bg-muted/50 rounded-md ml-4">
          <h4 className="font-medium">2.2 节</h4>
          <p className="text-muted-foreground">这是 2.2 节的内容。</p>
        </div>
      </div>
    </div>
  ),
}

export const CustomOffset: Story = {
  render: () => (
    <div className="flex gap-8">
      <Anchor
        items={[
          { key: 'part1', title: '部分 1' },
          { key: 'part2', title: '部分 2' },
          { key: 'part3', title: '部分 3' },
        ]}
        offsetTop={100}
      />
      <div className="flex-1 space-y-4">
        <div id="part1" className="p-4 bg-muted rounded-md">
          <h3 className="text-lg font-medium">部分 1</h3>
          <p className="text-muted-foreground">这是部分 1 的内容区域。</p>
        </div>
        <div id="part2" className="p-4 bg-muted rounded-md">
          <h3 className="text-lg font-medium">部分 2</h3>
          <p className="text-muted-foreground">这是部分 2 的内容区域。</p>
        </div>
        <div id="part3" className="p-4 bg-muted rounded-md">
          <h3 className="text-lg font-medium">部分 3</h3>
          <p className="text-muted-foreground">这是部分 3 的内容区域。</p>
        </div>
      </div>
    </div>
  ),
}

export const Controlled: Story = {
  parameters: {
    docs: {
      description: {
        story: '受控模式的锚点，通过外部状态管理当前激活项，可与其他交互逻辑联动。',
      },
    },
  },
  render: () => {
    const [activeKey, setActiveKey] = useState('section1')
    return (
      <div className="flex gap-8">
        <div className="space-y-4">
          <p>当前激活：{activeKey}</p>
          <Anchor
            activeKey={activeKey}
            onChange={setActiveKey}
            items={[
              { key: 'section1', title: '章节 1' },
              { key: 'section2', title: '章节 2' },
              { key: 'section3', title: '章节 3' },
            ]}
          />
        </div>
        <div className="flex-1 space-y-4">
          <div id="section1" className="p-4 bg-muted rounded-md">
            <h3 className="text-lg font-medium">章节 1</h3>
            <p className="text-muted-foreground">这是章节 1 的内容区域。</p>
          </div>
          <div id="section2" className="p-4 bg-muted rounded-md">
            <h3 className="text-lg font-medium">章节 2</h3>
            <p className="text-muted-foreground">这是章节 2 的内容区域。</p>
          </div>
          <div id="section3" className="p-4 bg-muted rounded-md">
            <h3 className="text-lg font-medium">章节 3</h3>
            <p className="text-muted-foreground">这是章节 3 的内容区域。</p>
          </div>
        </div>
      </div>
    )
  },
}