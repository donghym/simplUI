import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { List, ListItem, ListItemMeta, ListDivider } from './index'

describe('List', () => {
  it('renders with default props', () => {
    render(<List data-testid="list">Content</List>)
    expect(screen.getByTestId('list')).toBeInTheDocument()
    expect(screen.getByText('Content')).toBeInTheDocument()
  })

  it('renders header and footer', () => {
    render(<List header="Header" footer="Footer" data-testid="list">Content</List>)
    expect(screen.getByText('Header')).toBeInTheDocument()
    expect(screen.getByText('Footer')).toBeInTheDocument()
  })

  it('renders bordered list with correct class', () => {
    render(<List bordered data-testid="list">Content</List>)
    const list = screen.getByTestId('list')
    expect(list.className).toContain('border')
  })

  it('shows loading spinner when loading is true', () => {
    render(<List loading data-testid="list">Content</List>)
    expect(screen.getByRole('status')).toBeInTheDocument()
    expect(screen.queryByText('Content')).not.toBeInTheDocument()
  })

  it('shows empty content when dataSource is empty', () => {
    render(<List dataSource={[]} emptyContent="No data" data-testid="list" />)
    expect(screen.getByText('No data')).toBeInTheDocument()
  })

  it('renders items from dataSource with renderItem', () => {
    const data = ['Item 1', 'Item 2', 'Item 3']
    render(<List dataSource={data} renderItem={(item) => <div key={String(item)}>{String(item)}</div>} />)
    expect(screen.getByText('Item 1')).toBeInTheDocument()
    expect(screen.getByText('Item 2')).toBeInTheDocument()
    expect(screen.getByText('Item 3')).toBeInTheDocument()
  })

  it('merges user className via cn()', () => {
    render(<List className="custom-class" data-testid="list">Content</List>)
    const list = screen.getByTestId('list')
    expect(list.className).toContain('custom-class')
    expect(list.className).toContain('flex')
  })

  it('forwards ref to list element', () => {
    const ref = vi.fn()
    render(<List ref={ref}>Content</List>)
    expect(ref).toHaveBeenCalled()
  })
})

describe('ListItem', () => {
  it('renders with children', () => {
    render(<ListItem data-testid="item">Item Content</ListItem>)
    expect(screen.getByTestId('item')).toBeInTheDocument()
  })

  it('renders prefix and suffix', () => {
    render(<ListItem prefix="Pre" suffix="Suf" data-testid="item">Content</ListItem>)
    expect(screen.getByText('Pre')).toBeInTheDocument()
    expect(screen.getByText('Suf')).toBeInTheDocument()
  })

  it('calls onClick when clicked', () => {
    const onClick = vi.fn()
    render(<ListItem onClick={onClick} data-testid="item">Content</ListItem>)
    fireEvent.click(screen.getByTestId('item'))
    expect(onClick).toHaveBeenCalled()
  })

  it('does not call onClick when disabled', () => {
    const onClick = vi.fn()
    render(<ListItem disabled onClick={onClick} data-testid="item">Content</ListItem>)
    fireEvent.click(screen.getByTestId('item'))
    expect(onClick).not.toHaveBeenCalled()
  })

  it('has correct role when clickable', () => {
    render(<ListItem onClick={() => {}} data-testid="item">Content</ListItem>)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('triggers click on Enter key', () => {
    const onClick = vi.fn()
    render(<ListItem onClick={onClick} data-testid="item">Content</ListItem>)
    fireEvent.keyDown(screen.getByTestId('item'), { key: 'Enter' })
    expect(onClick).toHaveBeenCalled()
  })

  it('merges user className via cn()', () => {
    render(<ListItem className="custom-item" data-testid="item">Content</ListItem>)
    const item = screen.getByTestId('item')
    expect(item.className).toContain('custom-item')
  })

  it('forwards ref to item element', () => {
    const ref = vi.fn()
    render(<ListItem ref={ref}>Content</ListItem>)
    expect(ref).toHaveBeenCalled()
  })
})

describe('ListItemMeta', () => {
  it('renders title and description', () => {
    render(<ListItemMeta title="Title" description="Description" data-testid="meta" />)
    expect(screen.getByText('Title')).toBeInTheDocument()
    expect(screen.getByText('Description')).toBeInTheDocument()
  })

  it('renders avatar', () => {
    render(<ListItemMeta avatar={<span>Avatar</span>} title="Title" data-testid="meta" />)
    expect(screen.getByText('Avatar')).toBeInTheDocument()
  })

  it('merges user className via cn()', () => {
    render(<ListItemMeta className="custom-meta" title="Title" data-testid="meta" />)
    const meta = screen.getByTestId('meta')
    expect(meta.className).toContain('custom-meta')
  })

  it('forwards ref to meta element', () => {
    const ref = vi.fn()
    render(<ListItemMeta ref={ref} title="Title" />)
    expect(ref).toHaveBeenCalled()
  })
})

describe('ListDivider', () => {
  it('renders divider element', () => {
    render(<ListDivider data-testid="divider" />)
    const divider = screen.getByTestId('divider')
    expect(divider.className).toContain('h-px')
  })

  it('merges user className via cn()', () => {
    render(<ListDivider className="custom-divider" data-testid="divider" />)
    const divider = screen.getByTestId('divider')
    expect(divider.className).toContain('custom-divider')
  })

  it('forwards ref to divider element', () => {
    const ref = vi.fn()
    render(<ListDivider ref={ref} />)
    expect(ref).toHaveBeenCalled()
  })
})