import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Tabs } from './index'
import { TabPane } from '../tabs/index'

const meta: Meta<typeof Tabs> = {
  title: '导航/Tabs 标签页',
  component: Tabs,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `选项卡切换组件，用于在同一区域展示不同内容面板。\n\n- 内容分类：用于将同类信息分组展示，如商品详情、评价、规格。\n- 多视图切换：用于表格、列表等不同视图的快速切换。\n- 动态标签：支持增删标签，适用于多文档、多任务场景。`,
      },
    },
  },
}

export default meta

export const Line: StoryObj = {
  parameters: {
    docs: {
      description: {
        story: '线性样式的标签页，下方带有下划线指示器，适合大多数内容切换场景。',
      },
    },
  },
  render: () => (
    <Tabs variant="line" defaultActiveKey="1">
      <TabPane key="1" tab="标签 1">标签页 1 的内容</TabPane>
      <TabPane key="2" tab="标签 2">标签页 2 的内容</TabPane>
      <TabPane key="3" tab="标签 3">标签页 3 的内容</TabPane>
    </Tabs>
  ),
}

export const Card: StoryObj = {
  parameters: {
    docs: {
      description: {
        story: '卡片样式的标签页，每个标签带有边框背景，视觉层次更分明。',
      },
    },
  },
  render: () => (
    <Tabs variant="card" defaultActiveKey="overview">
      <TabPane key="overview" tab="概览">概览内容</TabPane>
      <TabPane key="specs" tab="规格">规格内容</TabPane>
      <TabPane key="reviews" tab="评价">评价内容</TabPane>
    </Tabs>
  ),
}

export const Edgeless: StoryObj = {
  parameters: {
    docs: {
      description: {
        story: '无边框样式的标签页，风格更简洁，适合嵌入卡片或轻量场景。',
      },
    },
  },
  render: () => (
    <Tabs variant="edgeless" defaultActiveKey="all">
      <TabPane key="all" tab="全部">全部项目</TabPane>
      <TabPane key="active" tab="启用">启用项目</TabPane>
      <TabPane key="archived" tab="归档">归档项目</TabPane>
    </Tabs>
  ),
}

export const PositionLeft: StoryObj = {
  parameters: {
    docs: {
      description: {
        story: '标签位于左侧的垂直布局，适用于标签数量较多或内容区域较宽的场景。',
      },
    },
  },
  render: () => (
    <Tabs tabPosition="left" defaultActiveKey="1">
      <TabPane key="1" tab="个人资料">个人资料内容</TabPane>
      <TabPane key="2" tab="设置">设置内容</TabPane>
      <TabPane key="3" tab="通知">通知内容</TabPane>
    </Tabs>
  ),
}

export const WithDisabled: StoryObj = {
  parameters: {
    docs: {
      description: {
        story: '带禁用标签的示例，用于某些标签页暂时不可访问的场景。',
      },
    },
  },
  render: () => (
    <Tabs defaultActiveKey="active">
      <TabPane key="active" tab="启用">启用标签</TabPane>
      <TabPane key="disabled" tab="禁用" disabled>不可选择</TabPane>
      <TabPane key="end" tab="结束">结束标签</TabPane>
    </Tabs>
  ),
}

export const Controlled: StoryObj = {
  parameters: {
    docs: {
      description: {
        story: '受控模式的标签页，通过外部状态管理当前激活的标签，可与其他组件联动。',
      },
    },
  },
  render: () => {
    const [activeKey, setActiveKey] = useState('1')
    return (
      <div className="space-y-4">
        <Tabs activeKey={activeKey} onChange={setActiveKey}>
          <TabPane key="1" tab="标签 1">标签页 1 的内容</TabPane>
          <TabPane key="2" tab="标签 2">标签页 2 的内容</TabPane>
          <TabPane key="3" tab="标签 3">标签页 3 的内容</TabPane>
        </Tabs>
        <p className="text-sm text-muted-foreground">当前激活：{activeKey}</p>
      </div>
    )
  },
}

/** 可编辑标签页 - 动态增删 */
export const EditableTabs: StoryObj = {
  parameters: {
    docs: {
      description: {
        story: '支持动态增删标签的示例，适用于多文档、多任务管理等需要灵活调整标签的场景。',
      },
    },
  },
  render: () => {
    const [activeKey, setActiveKey] = useState('1')
    const [panes, setPanes] = useState([
      { key: '1', label: '标签 1', content: '标签页 1 的内容' },
      { key: '2', label: '标签 2', content: '标签页 2 的内容' },
      { key: '3', label: '标签 3', content: '标签页 3 的内容' },
    ])
    let nextKey = 4

    const addTab = () => {
      const newKey = String(nextKey++)
      setPanes([...panes, { key: newKey, label: `标签 ${newKey}`, content: `标签页 ${newKey} 的内容` }])
      setActiveKey(newKey)
    }

    const removeTab = (targetKey: string) => {
      const newPanes = panes.filter((p) => p.key !== targetKey)
      if (newPanes.length === 0) return
      setPanes(newPanes)
      if (activeKey === targetKey) {
        const lastIndex = panes.findIndex((p) => p.key === targetKey) - 1
        setActiveKey(newPanes[Math.max(lastIndex, 0)]?.key ?? activeKey)
      }
    }

    return (
      <div className="space-y-4">
        <div className="flex items-center gap-1">
          <Tabs activeKey={activeKey} onChange={setActiveKey} variant="card">
            {panes.map((pane) => (
              <TabPane key={pane.key} tab={
                <span className="flex items-center gap-1">
                  {pane.label}
                  {panes.length > 1 && (
                    <button
                      type="button"
                      className="ml-1 inline-flex items-center justify-center w-4 h-4 text-xs rounded-sm hover:bg-muted-foreground/20"
                      onClick={(e) => { e.stopPropagation(); removeTab(pane.key) }}
                    >
                      ×
                    </button>
                  )}
                </span>
              }>
                {pane.content}
              </TabPane>
            ))}
          </Tabs>
          <button
            type="button"
            className="flex items-center justify-center w-8 h-8 rounded border border-dashed border-border text-muted-foreground hover:text-foreground hover:border-foreground"
            onClick={addTab}
          >
            +
          </button>
        </div>
        <p className="text-sm text-muted-foreground">点击 + 添加标签，点击 × 关闭标签</p>
      </div>
    )
  },
}

export const ScrollableTabs: StoryObj = {
  parameters: {
    docs: {
      description: {
        story: '大量标签时的滚动示例，当标签数量超出容器宽度时支持左右滑动浏览。',
      },
    },
  },
  render: () => {
    const tabs = Array.from({ length: 18 }, (_, i) => ({
      key: String(i + 1),
      label: `标签 ${i + 1}`,
      content: `标签页 ${i + 1} 的内容`,
    }))

    return (
      <div className="space-y-4">
        <Tabs defaultActiveKey="1">
          {tabs.map((tab) => (
            <TabPane key={tab.key} tab={tab.label}>{tab.content}</TabPane>
          ))}
        </Tabs>
        <p className="text-sm text-muted-foreground">当标签数量超出容器宽度时，支持水平滚动浏览</p>
      </div>
    )
  },
}
