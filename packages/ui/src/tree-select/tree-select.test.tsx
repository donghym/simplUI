import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { TreeSelect } from './index'
import type { TreeNode } from './types'

const mockTreeData: TreeNode[] = [
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
    children: [{ value: 'child3', title: '子节点 3' }],
  },
  { value: 'leaf', title: '独立节点', isLeaf: true },
]

describe('TreeSelect', () => {
  it('renders with placeholder when no value selected', () => {
    render(<TreeSelect treeData={mockTreeData} placeholder="请选择节点" />)
    expect(screen.getByText('请选择节点')).toBeInTheDocument()
  })

  it('opens dropdown when clicked', () => {
    render(<TreeSelect treeData={mockTreeData} />)
    const selector = screen.getByRole('combobox')
    fireEvent.click(selector)
    expect(screen.getByRole('tree')).toBeInTheDocument()
  })

  it('selects leaf node directly', () => {
    const handleChange = vi.fn()
    render(<TreeSelect treeData={mockTreeData} onChange={handleChange} />)
    const selector = screen.getByRole('combobox')
    fireEvent.click(selector)
    const leafNode = screen.getByText('独立节点')
    fireEvent.click(leafNode)
    expect(handleChange).toHaveBeenCalledWith('leaf', expect.any(Object))
  })

  it('expands and selects child node in single mode', () => {
    const handleChange = vi.fn()
    render(
      <TreeSelect
        treeData={mockTreeData}
        onChange={handleChange}
        defaultExpandedKeys={['parent1']}
      />
    )
    const selector = screen.getByRole('combobox')
    fireEvent.click(selector)
    const childNode = screen.getByText('子节点 1')
    fireEvent.click(childNode)
    expect(handleChange).toHaveBeenCalledWith('child1', expect.any(Object))
  })

  it('selects multiple nodes in multiple mode', () => {
    const handleChange = vi.fn()
    render(
      <TreeSelect
        treeData={mockTreeData}
        multiple
        onChange={handleChange}
        defaultExpandedKeys={['parent1']}
      />
    )
    const selector = screen.getByRole('combobox')
    fireEvent.click(selector)
    const node1 = screen.getByText('子节点 1')
    fireEvent.click(node1)
    expect(handleChange).toHaveBeenCalledTimes(1)
  })

  it('expands parent node when clicking expand icon', () => {
    render(<TreeSelect treeData={mockTreeData} defaultExpandedKeys={[]} />)
    const selector = screen.getByRole('combobox')
    fireEvent.click(selector)
    expect(screen.queryByText('子节点 1')).not.toBeInTheDocument()
    const treeItems = screen.getAllByRole('treeitem')
    const firstItem = treeItems[0]
    if (firstItem) {
      const firstExpandIcon = firstItem.querySelector('span')
      if (firstExpandIcon) {
        fireEvent.click(firstExpandIcon)
        expect(screen.getByText('子节点 1')).toBeInTheDocument()
      }
    }
  })

  it('filters nodes when searching', () => {
    render(
      <TreeSelect
        treeData={mockTreeData}
        searchable
        defaultExpandedKeys={['parent1']}
      />
    )
    const selector = screen.getByRole('combobox')
    fireEvent.click(selector)
    const searchInput = screen.getByPlaceholderText('搜索')
    fireEvent.change(searchInput, { target: { value: '子节点 1' } })
    expect(screen.getByText('子节点 1')).toBeInTheDocument()
  })

  it('clears value when clicking clear button', () => {
    const handleChange = vi.fn()
    render(
      <TreeSelect
        treeData={mockTreeData}
        value="leaf"
        onChange={handleChange}
        allowClear
      />
    )
    const container = screen.getByRole('combobox')
    const clearIcon = container.querySelector('.lucide-x')
    if (clearIcon) {
      fireEvent.click(clearIcon)
      expect(handleChange).toHaveBeenCalled()
    }
  })

  it('disables interaction when disabled prop is true', () => {
    render(<TreeSelect treeData={mockTreeData} disabled />)
    const selector = screen.getByRole('combobox')
    expect(selector).toHaveAttribute('aria-disabled', 'true')
    fireEvent.click(selector)
    expect(screen.queryByRole('tree')).not.toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(<TreeSelect treeData={mockTreeData} className="custom-class" />)
    const selector = screen.getByRole('combobox')
    expect(selector).toHaveClass('custom-class')
  })

  it('renders not found content when tree is empty', () => {
    render(<TreeSelect treeData={[]} notFoundContent="暂无数据" />)
    const selector = screen.getByRole('combobox')
    fireEvent.click(selector)
    expect(screen.getByText('暂无数据')).toBeInTheDocument()
  })
})
