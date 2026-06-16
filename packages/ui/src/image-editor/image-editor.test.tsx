import { createRef } from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { ImageEditor } from './index'

describe('ImageEditor', () => {
  it('渲染默认状态', () => {
    render(<ImageEditor src="test.png" />)
    expect(screen.getByLabelText('向左旋转')).toBeInTheDocument()
    expect(screen.getByLabelText('向右旋转')).toBeInTheDocument()
  })

  it('className 合并', () => {
    const { container } = render(<ImageEditor src="test.png" className="custom-editor" />)
    const el = container.firstChild as HTMLElement
    expect(el.className).toContain('custom-editor')
  })

  it('ref 转发', () => {
    const ref = createRef<HTMLDivElement>()
    render(<ImageEditor src="test.png" ref={ref} />)
    expect(ref.current).not.toBeNull()
    expect(ref.current?.tagName).toBe('DIV')
  })

  it('showToolbar=false 不显示工具栏', () => {
    render(<ImageEditor src="test.png" showToolbar={false} />)
    expect(screen.queryByLabelText('向左旋转')).not.toBeInTheDocument()
  })

  it('工具栏包含所有操作按钮', () => {
    render(<ImageEditor src="test.png" />)
    expect(screen.getByLabelText('水平翻转')).toBeInTheDocument()
    expect(screen.getByLabelText('垂直翻转')).toBeInTheDocument()
    expect(screen.getByLabelText('放大')).toBeInTheDocument()
    expect(screen.getByLabelText('缩小')).toBeInTheDocument()
    expect(screen.getByLabelText('裁剪')).toBeInTheDocument()
  })

  it('导出按钮存在', () => {
    render(<ImageEditor src="test.png" />)
    expect(screen.getByLabelText('导出')).toBeInTheDocument()
  })
})
