import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Tree } from './index'
import type { TreeNodeData } from './types'

const simpleTreeData: TreeNodeData[] = [
  {
    key: '1',
    title: '节点 1',
    children: [
      { key: '1-1', title: '节点 1-1' },
      { key: '1-2', title: '节点 1-2' },
    ],
  },
  { key: '2', title: '节点 2' },
]

const multiLevelTreeData: TreeNodeData[] = [
  {
    key: '1',
    title: '根节点',
    children: [
      {
        key: '1-1',
        title: '子节点 1',
        children: [
          { key: '1-1-1', title: '孙节点 1' },
          { key: '1-1-2', title: '孙节点 2' },
        ],
      },
      { key: '1-2', title: '子节点 2' },
    ],
  },
]

describe('Tree', () => {
  it('renders tree nodes correctly', () => {
    render(<Tree treeData={simpleTreeData} />)
    expect(screen.getByText('节点 1')).toBeInTheDocument()
    expect(screen.getByText('节点 2')).toBeInTheDocument()
  })

  it('expands and collapses nodes when clicking expand icon', () => {
    render(<Tree treeData={simpleTreeData} />)
    expect(screen.queryByText('节点 1-1')).not.toBeInTheDocument()
    const expandIcon = screen.getByRole('treeitem', { name: /节点 1/ }).querySelector('span')
    if (expandIcon) fireEvent.click(expandIcon)
    expect(screen.getByText('节点 1-1')).toBeInTheDocument()
    expect(screen.getByText('节点 1-2')).toBeInTheDocument()
  })

  it('selects node in single select mode', () => {
    const handleSelect = vi.fn()
    render(<Tree treeData={simpleTreeData} selectMode="single" onSelect={handleSelect} />)
    fireEvent.click(screen.getByText('节点 1'))
    expect(handleSelect).toHaveBeenCalledTimes(1)
    expect(handleSelect).toHaveBeenCalledWith(
      ['1'],
      expect.objectContaining({ node: expect.objectContaining({ key: '1' }), selected: true }),
    )
  })

  it('checks node in multiple select mode', () => {
    const handleCheck = vi.fn()
    render(
      <Tree
        treeData={simpleTreeData}
        selectMode="multiple"
        defaultExpandedKeys={['1']}
        onCheck={handleCheck}
      />,
    )
    const checkboxes = screen.getAllByRole('checkbox')
    const firstCheckbox = checkboxes[0]
    if (firstCheckbox) fireEvent.click(firstCheckbox)
    expect(handleCheck).toHaveBeenCalledTimes(1)
  })

  it('renders search input when searchable is true', () => {
    render(<Tree treeData={simpleTreeData} searchable searchPlaceholder="搜索节点" />)
    expect(screen.getByPlaceholderText('搜索节点')).toBeInTheDocument()
  })

  it('filters nodes based on search value', () => {
    const filterFn = (node: TreeNodeData, searchValue: string) => String(node.title).includes(searchValue)
    render(<Tree treeData={simpleTreeData} searchable filterTreeNode={filterFn} />)
    const searchInput = screen.getByPlaceholderText('搜索')
    fireEvent.change(searchInput, { target: { value: '节点 2' } })
    expect(screen.getByText('节点 2')).toBeInTheDocument()
    expect(screen.queryByText('节点 1')).not.toBeInTheDocument()
  })

  it('applies showLine variant correctly', () => {
    const { container } = render(<Tree treeData={simpleTreeData} showLine />)
    expect(container.firstChild).toHaveClass('border-l')
  })

  it('merges user className via cn()', () => {
    const { container } = render(<Tree treeData={simpleTreeData} className="custom-class" />)
    expect(container.firstChild).toHaveClass('custom-class')
  })

  it('respects disabled prop on nodes', () => {
    const disabledTreeData: TreeNodeData[] = [
      { key: '1', title: '禁用节点', disabled: true },
      { key: '2', title: '正常节点' },
    ]
    const handleSelect = vi.fn()
    render(<Tree treeData={disabledTreeData} selectMode="single" onSelect={handleSelect} />)
    fireEvent.click(screen.getByText('禁用节点'))
    expect(handleSelect).not.toHaveBeenCalled()
  })

  it('expands all nodes when defaultExpandAll is true', () => {
    render(<Tree treeData={multiLevelTreeData} defaultExpandAll />)
    expect(screen.getByText('根节点')).toBeInTheDocument()
    expect(screen.getByText('子节点 1')).toBeInTheDocument()
    expect(screen.getByText('子节点 2')).toBeInTheDocument()
    expect(screen.getByText('孙节点 1')).toBeInTheDocument()
    expect(screen.getByText('孙节点 2')).toBeInTheDocument()
  })

  it('forwards ref to container element', () => {
    const ref = { current: null as HTMLDivElement | null }
    render(<Tree treeData={simpleTreeData} ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })

  it('supports controlled expandedKeys', () => {
    const { rerender } = render(<Tree treeData={simpleTreeData} expandedKeys={['1']} />)
    expect(screen.getByText('节点 1-1')).toBeInTheDocument()
    rerender(<Tree treeData={simpleTreeData} expandedKeys={[]} />)
    expect(screen.queryByText('节点 1-1')).not.toBeInTheDocument()
  })

  it('supports controlled selectedKeys', () => {
    render(<Tree treeData={simpleTreeData} selectMode="single" selectedKeys={['2']} />)
    const treeItem = screen.getByRole('treeitem', { name: /节点 2/ })
    expect(treeItem.querySelector('div')).toHaveClass('bg-primary-500/10')
  })
})
