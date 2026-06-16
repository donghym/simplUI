import { createRef } from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { PDFViewer } from './index'

describe('PDFViewer', () => {
  it('渲染默认状态', () => {
    render(<PDFViewer src="test.pdf" />)
    expect(screen.getByTitle('PDF 预览')).toBeInTheDocument()
  })

  it('className 合并', () => {
    const { container } = render(<PDFViewer src="test.pdf" className="custom-viewer" />)
    const el = container.firstChild as HTMLElement
    expect(el.className).toContain('custom-viewer')
  })

  it('ref 转发', () => {
    const ref = createRef<HTMLDivElement>()
    render(<PDFViewer src="test.pdf" ref={ref} />)
    expect(ref.current).not.toBeNull()
    expect(ref.current?.tagName).toBe('DIV')
  })

  it('工具栏显示缩放按钮', () => {
    render(<PDFViewer src="test.pdf" />)
    expect(screen.getByLabelText('缩小')).toBeInTheDocument()
    expect(screen.getByLabelText('放大')).toBeInTheDocument()
    expect(screen.getByLabelText('适应宽度')).toBeInTheDocument()
  })

  it('showToolbar=false 不显示工具栏', () => {
    render(<PDFViewer src="test.pdf" showToolbar={false} />)
    expect(screen.queryByLabelText('缩小')).not.toBeInTheDocument()
  })

  it('fileName 属性显示文件名', () => {
    render(<PDFViewer src="test.pdf" fileName="报告.pdf" />)
    expect(screen.getByText('报告.pdf')).toBeInTheDocument()
  })
})
