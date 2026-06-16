import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Transfer } from './index'

const meta: Meta<typeof Transfer> = {
  title: '数据录入/Transfer 穿梭框',
  component: Transfer,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: '双栏穿梭选择框，用于在多个可选项中进行多选。',
      },
    },
  },
  argTypes: {
    showSearch: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
}

export default meta

type Story = StoryObj<typeof Transfer>

const dataSource = Array.from({ length: 10 }).map((_, i) => ({
  key: String(i + 1),
  title: `Content ${i + 1}`,
  description: `Description of content ${i + 1}`,
}))

export const Basic: Story = {
  args: {
    dataSource,
    titles: ['Source', 'Target'],
  },
}

export const WithSearch: Story = {
  args: {
    dataSource,
    showSearch: true,
    titles: ['Source', 'Target'],
  },
}

export const Disabled: Story = {
  args: {
    dataSource,
    disabled: true,
    titles: ['Source', 'Target'],
  },
}

export const Controlled: Story = {
  render: () => {
    const [targetKeys, setTargetKeys] = useState<string[]>(['1', '2'])
    return (
      <div>
        <Transfer
          dataSource={dataSource}
          targetKeys={targetKeys}
          onChange={setTargetKeys}
          titles={['Source', 'Target']}
        />
        <div className="mt-4">Selected: {targetKeys.join(', ')}</div>
      </div>
    )
  },
}

/** 单向穿梭 */
export const OneWay: Story = {
  render: () => {
    const [targetKeys, setTargetKeys] = useState<string[]>([])

    const handleChange = (nextTargetKeys: string[], direction: string) => {
      if (direction === 'left') return
      setTargetKeys(nextTargetKeys)
    }

    return (
      <div>
        <Transfer
          dataSource={dataSource}
          targetKeys={targetKeys}
          onChange={handleChange}
          titles={['可选', '已选']}
        />
        <p className="mt-4 text-sm text-gray-500">只能从左向右移动，不可退回</p>
        <div className="mt-2 text-sm">已选：{targetKeys.join(', ') || '无'}</div>
      </div>
    )
  },
}

/** 自定义渲染 */
export const CustomRender: Story = {
  render: () => {
    const customDataSource = [
      { key: '1', title: '张三', description: '前端工程师' },
      { key: '2', title: '李四', description: '后端工程师' },
      { key: '3', title: '王五', description: '产品经理' },
      { key: '4', title: '赵六', description: 'UI 设计师' },
      { key: '5', title: '孙七', description: '测试工程师' },
      { key: '6', title: '周八', description: '运维工程师' },
    ]

    const [targetKeys, setTargetKeys] = useState<string[]>([])

    return (
      <div>
        <Transfer
          dataSource={customDataSource}
          targetKeys={targetKeys}
          onChange={setTargetKeys}
          titles={['候选人', '团队成员']}
        />
        <div className="mt-4 text-sm text-gray-500">
          已选成员：{targetKeys.length > 0
            ? targetKeys.map((k) => {
                const item = customDataSource.find((d) => d.key === k)
                return item ? `${item.title}（${item.description}）` : k
              }).join('、')
            : '无'}
        </div>
      </div>
    )
  },
}

/** 树形穿梭框 */
export const TreeTransfer: Story = {
  render: () => {
    const treeData = [
      { key: 'dept-1', title: '技术部', isParent: true },
      { key: 'dept-1-1', title: '前端组', parentKey: 'dept-1' },
      { key: 'dept-1-2', title: '后端组', parentKey: 'dept-1' },
      { key: 'dept-1-3', title: '测试组', parentKey: 'dept-1' },
      { key: 'dept-2', title: '产品部', isParent: true },
      { key: 'dept-2-1', title: '产品设计组', parentKey: 'dept-2' },
      { key: 'dept-2-2', title: '用户研究组', parentKey: 'dept-2' },
      { key: 'dept-3', title: '运营部', isParent: true },
      { key: 'dept-3-1', title: '市场推广组', parentKey: 'dept-3' },
      { key: 'dept-3-2', title: '内容运营组', parentKey: 'dept-3' },
    ]

    const [targetKeys, setTargetKeys] = useState<string[]>([])
    const [leftSelected, setLeftSelected] = useState<string[]>([])
    const [rightSelected, setRightSelected] = useState<string[]>([])
    const [leftSearch, setLeftSearch] = useState('')
    const [rightSearch, setRightSearch] = useState('')

    const leftData = treeData.filter((item) => !targetKeys.includes(item.key))
    const rightData = treeData.filter((item) => targetKeys.includes(item.key))

    const filteredLeft = leftSearch
      ? leftData.filter((item) => String(item.title).toLowerCase().includes(leftSearch.toLowerCase()))
      : leftData
    const filteredRight = rightSearch
      ? rightData.filter((item) => String(item.title).toLowerCase().includes(rightSearch.toLowerCase()))
      : rightData

    const moveToRight = () => {
      if (leftSelected.length === 0) return
      setTargetKeys((prev) => [...prev, ...leftSelected])
      setLeftSelected([])
    }
    const moveToLeft = () => {
      if (rightSelected.length === 0) return
      setTargetKeys((prev) => prev.filter((k) => !rightSelected.includes(k)))
      setRightSelected([])
    }

    const toggleLeft = (key: string) => {
      setLeftSelected((prev) => prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key])
    }
    const toggleRight = (key: string) => {
      setRightSelected((prev) => prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key])
    }

    const renderTreeItem = (item: typeof treeData[number], selected: boolean, toggle: (key: string) => void) => {
      const isChild = 'parentKey' in item && item.parentKey
      const indent = isChild ? 24 : 0
      return (
        <div
          key={item.key}
          onClick={() => toggle(item.key)}
          style={{
            padding: '6px 12px',
            paddingLeft: 12 + indent,
            cursor: 'pointer',
            borderRadius: 4,
            background: selected ? '#e6f4ff' : 'transparent',
            display: 'flex',
            alignItems: 'center',
            gap: 8,
          }}
        >
          <input type="checkbox" checked={selected} readOnly />
          <span style={{ fontWeight: isChild ? 400 : 600, fontSize: isChild ? 13 : 14 }}>
            {isChild && <span style={{ marginRight: 6, color: '#bfbfbf' }}>└</span>}
            {item.title}
          </span>
        </div>
      )
    }

    const LIST_STYLE: React.CSSProperties = { flex: 1, border: '1px solid #f0f0f0', borderRadius: 8, display: 'flex', flexDirection: 'column', minWidth: 200 }
    const HEADER_STYLE: React.CSSProperties = { padding: '8px 12px', borderBottom: '1px solid #f0f0f0', fontWeight: 500, background: '#fafafa' }
    const BODY_STYLE: React.CSSProperties = { flex: 1, overflow: 'auto', padding: 4, maxHeight: 320 }
    const SEARCH_STYLE: React.CSSProperties = { width: '100%', padding: '4px 8px', border: '1px solid #d9d9d9', borderRadius: 4, fontSize: 14 }

    return (
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={LIST_STYLE}>
            <div style={HEADER_STYLE}>可选部门</div>
            <div style={{ padding: 8 }}>
              <input type="text" placeholder="搜索..." value={leftSearch} onChange={(e) => setLeftSearch(e.target.value)} style={SEARCH_STYLE} />
            </div>
            <div style={BODY_STYLE}>
              {filteredLeft.map((item) => renderTreeItem(item, leftSelected.includes(item.key), toggleLeft))}
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <button type="button" onClick={moveToRight} disabled={leftSelected.length === 0} style={{ padding: '4px 12px' }}>&gt;</button>
            <button type="button" onClick={moveToLeft} disabled={rightSelected.length === 0} style={{ padding: '4px 12px' }}>&lt;</button>
          </div>
          <div style={LIST_STYLE}>
            <div style={HEADER_STYLE}>已选部门</div>
            <div style={{ padding: 8 }}>
              <input type="text" placeholder="搜索..." value={rightSearch} onChange={(e) => setRightSearch(e.target.value)} style={SEARCH_STYLE} />
            </div>
            <div style={BODY_STYLE}>
              {filteredRight.map((item) => renderTreeItem(item, rightSelected.includes(item.key), toggleRight))}
            </div>
          </div>
        </div>
        <p className="mt-4 text-sm text-gray-500">树形结构数据，子节点缩进显示，父节点加粗</p>
      </div>
    )
  },
}
