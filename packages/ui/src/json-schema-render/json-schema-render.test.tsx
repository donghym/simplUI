import { createRef } from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { JsonSchemaRender } from './index'

const schema = [
  { name: 'username', label: '用户名', type: 'string' as const, required: true },
  { name: 'age', label: '年龄', type: 'number' as const },
]

describe('JsonSchemaRender', () => {
  it('渲染默认状态', () => {
    render(<JsonSchemaRender schema={schema} />)
    expect(screen.getByText('用户名')).toBeInTheDocument()
    expect(screen.getByText('年龄')).toBeInTheDocument()
  })

  it('className 合并', () => {
    const { container } = render(<JsonSchemaRender schema={schema} className="custom-form" />)
    const form = container.firstChild as HTMLElement
    expect(form.className).toContain('custom-form')
  })

  it('ref 转发', () => {
    const ref = createRef<HTMLFormElement>()
    render(<JsonSchemaRender schema={schema} ref={ref} />)
    expect(ref.current).not.toBeNull()
    expect(ref.current?.tagName).toBe('FORM')
  })

  it('提交按钮文本可自定义', () => {
    render(<JsonSchemaRender schema={schema} submitText="保存" />)
    expect(screen.getByRole('button', { name: '保存' })).toBeInTheDocument()
  })

  it('必填字段显示星号', () => {
    render(<JsonSchemaRender schema={schema} />)
    expect(screen.getByText('*')).toBeInTheDocument()
  })

  it('showReset=false 不显示重置按钮', () => {
    render(<JsonSchemaRender schema={schema} showReset={false} />)
    expect(screen.queryByRole('button', { name: '重置' })).not.toBeInTheDocument()
  })
})
