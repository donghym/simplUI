import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { TreeSelect } from './index'

const CenterDecorator = (Story: React.FC) => (
  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', minHeight: '500px', width: '100%', paddingTop: '40px' }}>
    <Story />
  </div>
)

const meta: Meta<typeof TreeSelect> = {
  title: '数据录入/TreeSelect 树选择',
  component: TreeSelect,
  tags: ['autodocs'],
  decorators: [CenterDecorator],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: '树选择用于在树形结构中进行选择。适用于部门选择、类目筛选、权限节点等具有层级关系的数据场景，支持多选、异步加载和虚拟滚动。',
      },
    },
  },
  argTypes: {
    treeData: {
      control: 'object',
      description: '树节点数据源，支持多级嵌套的树形结构',
    },
    multiple: {
      control: 'boolean',
      description: '是否多选模式，true 时允许多选（启用复选框）',
    },
  },
}

export default meta
type Story = StoryObj<typeof TreeSelect>

const treeData = [
  {
    value: 'parent1',
    title: '父节点 1',
    children: [
      { value: 'child1', title: '子节点 1' },
      { value: 'child2', title: '子节点 2' },
    ],
  },
  {
    value: 'parent2',
    title: '父节点 2',
    children: [
      { value: 'child3', title: '子节点 3' },
      { value: 'child4', title: '子节点 4' },
    ],
  },
]

export const Default: Story = {
  args: {
    treeData,
    placeholder: '请选择',
  },
}

export const WithDefaultValue: Story = {
  args: {
    treeData,
    defaultValue: 'child1',
  },
}

export const Multiple: Story = {
  args: {
    treeData,
    multiple: true,
    defaultValue: ['child1', 'child3'],
  },
}

export const AllowClear: Story = {
  args: {
    treeData,
    allowClear: true,
    defaultValue: 'child1',
  },
}

export const Disabled: Story = {
  args: {
    treeData,
    disabled: true,
  },
}

export const Searchable: Story = {
  args: {
    treeData,
    searchable: true,
    placeholder: '搜索并选择...',
  },
}

export const Controlled: Story = {
  parameters: {
    docs: {
      description: {
        story: '受控模式示例，展示如何通过外部状态管理树选择的值。',
      },
    },
  },
  render: () => {
    const [value, setValue] = useState<string | undefined>()
    return (
      <div className="space-y-4">
        <p>已选择：{value || '无'}</p>
        <TreeSelect
          treeData={treeData}
          value={value}
          onChange={(v) => setValue(v as string | undefined)}
        />
      </div>
    )
  },
}

export const Checkable: Story = {
  args: {
    treeData,
    multiple: true,
    defaultValue: ['child1', 'child3'],
    placeholder: '请勾选',
  },
}

export const AsyncLoad: Story = {
  render: () => {
    const [value, setValue] = useState<string | undefined>()

    const asyncTreeData = [
      { value: 'region-1', title: '华东地区', isLeaf: false },
      { value: 'region-2', title: '华南地区', isLeaf: false },
      { value: 'region-3', title: '华北地区', isLeaf: false },
    ]

    const loadData = async (node: { value: string; title: string }) => {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      const children: { value: string; title: string }[] = []
      for (let i = 1; i <= 3; i++) {
        children.push({
          value: `${node.value}-city-${i}`,
          title: `${node.title} - 城市 ${i}`,
        })
      }
      return children
    }

    return (
      <div className="space-y-4">
        <p>已选择：{value || '无'}</p>
        <TreeSelect
          treeData={asyncTreeData}
          value={value}
          onChange={(v) => setValue(v as string | undefined)}
          loadData={loadData}
          placeholder="点击展开节点异步加载"
        />
        <p className="text-xs text-gray-400">展开父节点后会模拟 1 秒延迟加载子节点</p>
      </div>
    )
  },
}

export const VirtualScroll: Story = {
  parameters: {
    docs: {
      description: {
        story: '大数据集下的虚拟滚动演示，支持 2000+ 节点流畅渲染，适用于超大规模树形数据的选择场景。',
      },
    },
  },
  render: () => {
    const [value, setValue] = useState<string | undefined>()

    // 生成 1000+ 节点的大数据集
    const generateLargeTreeData = () => {
      const data = []
      for (let i = 1; i <= 50; i++) {
        const children = []
        for (let j = 1; j <= 20; j++) {
          const grandChildren = []
          for (let k = 1; k <= 2; k++) {
            grandChildren.push({
              value: `node-${i}-${j}-${k}`,
              title: `节点 ${i}-${j}-${k}`,
            })
          }
          children.push({
            value: `node-${i}-${j}`,
            title: `节点 ${i}-${j}`,
            children: grandChildren,
          })
        }
        data.push({
          value: `node-${i}`,
          title: `节点 ${i}`,
          children,
        })
      }
      return data
    }

    const largeTreeData = generateLargeTreeData()

    return (
      <div className="space-y-4">
        <p>已选择：{value || '无'}</p>
        <TreeSelect
          treeData={largeTreeData}
          value={value}
          onChange={(v) => setValue(v as string | undefined)}
          placeholder="选择节点（共 2000+ 节点）"
          searchable
          maxDropdownHeight={300}
        />
        <p className="text-xs text-gray-400">大数据集演示：50 个父节点 × 20 个子节点 × 2 个孙节点 = 2000+ 节点</p>
      </div>
    )
  },
}