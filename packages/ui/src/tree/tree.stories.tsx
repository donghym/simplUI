import type { Meta, StoryObj } from '@storybook/react'
import { useState, useRef } from 'react'
import { Tree } from './index'
import type { TreeNodeData } from './types'

const CenterDecorator = (Story: React.FC) => (
  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', minHeight: '500px', width: '100%', paddingTop: '40px' }}>
    <Story />
  </div>
)

const meta: Meta<typeof Tree> = {
  title: '数据展示/Tree 树形控件',
  component: Tree,
  tags: ['autodocs'],
  decorators: [CenterDecorator],
  argTypes: {
    selectMode: {
      control: 'radio',
      options: ['none', 'single', 'multiple'],
      description: '选中模式，none 不可选中，single 单选，multiple 多选，默认 none',
    },
    showLine: {
      control: 'boolean',
      description: '是否显示连接线',
    },
    defaultExpandAll: {
      control: 'boolean',
      description: '是否默认展开所有节点',
    },
    searchable: {
      control: 'boolean',
      description: '是否可搜索',
    },
  },
  parameters: {
    layout: 'padded',
  },
}

export default meta
type Story = StoryObj<typeof Tree>

const treeData = [
  {
    key: '0',
    title: '根节点',
    children: [
      {
        key: '0-0',
        title: '父节点 1',
        children: [
          { key: '0-0-0', title: '子节点 1' },
          { key: '0-0-1', title: '子节点 2' },
        ],
      },
      {
        key: '0-1',
        title: '父节点 2',
        children: [
          { key: '0-1-0', title: '子节点 3' },
        ],
      },
    ],
  },
]

export const Default: Story = {
  args: {
    treeData,
  },
}

export const Selectable: Story = {
  args: {
    treeData,
    selectMode: 'single',
  },
}

export const MultipleSelect: Story = {
  args: {
    treeData,
    selectMode: 'multiple',
    defaultCheckedKeys: ['0-0-0', '0-1-0'],
  },
}

export const WithLine: Story = {
  args: {
    treeData,
    showLine: true,
  },
}

export const ExpandAll: Story = {
  args: {
    treeData,
    defaultExpandAll: true,
  },
}

export const Searchable: Story = {
  args: {
    treeData,
    searchable: true,
    searchPlaceholder: '搜索树节点...',
  },
}

export const DisabledNode: Story = {
  args: {
    treeData: [
      {
        key: '0',
        title: '根节点',
        children: [
          { key: '0-0', title: '可用' },
          { key: '0-1', title: '禁用', disabled: true },
        ],
      },
    ],
  },
}

export const Controlled: Story = {
  render: () => {
    const [selectedKeys, setSelectedKeys] = useState<string[]>([])
    const [expandedKeys, setExpandedKeys] = useState<string[]>(['0'])
    return (
      <div className="space-y-4">
        <p>已选择：{selectedKeys.join(', ')}</p>
        <Tree
          treeData={treeData}
          selectMode="single"
          selectedKeys={selectedKeys}
          expandedKeys={expandedKeys}
          onSelect={(keys) => setSelectedKeys(keys as string[])}
          onExpand={(keys) => setExpandedKeys(keys as string[])}
        />
      </div>
    )
  },
}

export const Checkable: Story = {
  render: () => {
    const [checkedKeys, setCheckedKeys] = useState<string[]>(['0-0-0'])
    return (
      <div className="space-y-4">
        <p>已勾选：{checkedKeys.join(', ')}</p>
        <Tree
          treeData={treeData}
          selectMode="multiple"
          defaultCheckedKeys={['0-0-0']}
          defaultExpandAll
          onCheck={(keys) => setCheckedKeys(keys as string[])}
        />
      </div>
    )
  },
}

export const Draggable: Story = {
  render: () => {
    const [items, setItems] = useState<TreeNodeData[]>([
      { key: 'node-1', title: '节点 1' },
      { key: 'node-2', title: '节点 2' },
      { key: 'node-3', title: '节点 3' },
      { key: 'node-4', title: '节点 4' },
      { key: 'node-5', title: '节点 5' },
    ])
    const dragIndexRef = useRef<number | null>(null)

    const handleDragStart = (index: number) => {
      dragIndexRef.current = index
    }

    const handleDragOver = (e: React.DragEvent) => {
      e.preventDefault()
    }

    const handleDrop = (dropIndex: number) => {
      if (dragIndexRef.current === null || dragIndexRef.current === dropIndex) return
      const newItems = [...items]
      const [dragged] = newItems.splice(dragIndexRef.current, 1)
      if (!dragged) return
      newItems.splice(dropIndex, 0, dragged)
      setItems(newItems)
      dragIndexRef.current = null
    }

    return (
      <div className="space-y-4">
        <p className="text-sm text-muted-foreground">拖拽节点可重新排序</p>
        <div className="space-y-1">
          {items.map((item, index) => (
            <div
              key={item.key as string}
              draggable
              onDragStart={() => handleDragStart(index)}
              onDragOver={handleDragOver}
              onDrop={() => handleDrop(index)}
              className="flex items-center gap-2 px-3 py-2 border border-border rounded-md cursor-grab active:cursor-grabbing hover:bg-muted/50 transition-colors select-none"
            >
              <span className="text-muted-foreground">⠿</span>
              <span>{item.title}</span>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <p className="text-sm text-muted-foreground mb-2">当前排序：</p>
          <Tree treeData={[{ key: 'root', title: '根节点', children: items }]} defaultExpandAll />
        </div>
      </div>
    )
  },
}