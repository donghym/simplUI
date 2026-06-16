import { createRef } from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { FormDesigner } from './index'

describe('FormDesigner', () => {
  it('渲染默认状态', () => {
    render(<FormDesigner />)
    expect(screen.getByText('组件面板')).toBeInTheDocument()
    expect(screen.getByText('设计区域')).toBeInTheDocument()
  })

  it('className 合并', () => {
    const { container } = render(<FormDesigner className="custom-designer" />)
    const el = container.firstChild as HTMLElement
    expect(el.className).toContain('custom-designer')
  })

  it('ref 转发', () => {
    const ref = createRef<HTMLDivElement>()
    render(<FormDesigner ref={ref} />)
    expect(ref.current).not.toBeNull()
    expect(ref.current?.tagName).toBe('DIV')
  })

  it('defaultItems 渲染已有表单项', () => {
    const items = [
      { id: '1', name: 'username', label: '用户名', type: 'input' as const },
    ]
    render(<FormDesigner defaultItems={items} />)
    expect(screen.getByText('用户名')).toBeInTheDocument()
  })

  it('availableTypes 控制面板显示的类型', () => {
    render(<FormDesigner availableTypes={['input', 'select']} />)
    expect(screen.getByText('输入框')).toBeInTheDocument()
    // 其他类型不应显示
    expect(screen.queryByText('复选框')).not.toBeInTheDocument()
  })

  it('空设计区域显示拖拽提示', () => {
    render(<FormDesigner defaultItems={[]} />)
    expect(screen.getByText('拖拽组件到此处')).toBeInTheDocument()
  })
})
