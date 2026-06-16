import { createRef } from 'react'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { PageContainer } from './index'

describe('PageContainer', () => {
  it('渲染默认状态 - 显示子内容', () => {
    render(<PageContainer>页面内容</PageContainer>)
    expect(screen.getByText('页面内容')).toBeInTheDocument()
  })

  it('className 合并', () => {
    const { container } = render(
      <PageContainer className="custom-page">内容</PageContainer>,
    )
    const root = container.firstChild as HTMLElement
    expect(root.classList.contains('custom-page')).toBe(true)
  })

  it('ref 转发到根 div', () => {
    const ref = createRef<HTMLDivElement>()
    render(<PageContainer ref={ref}>内容</PageContainer>)
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })

  it('title 标题正确渲染', () => {
    render(<PageContainer title="用户管理">内容</PageContainer>)
    expect(screen.getByText('用户管理')).toBeInTheDocument()
  })

  it('headerActions 头部操作区域渲染', () => {
    render(
      <PageContainer title="页面" headerActions={[<span key="a">操作按钮</span>]}>
        内容
      </PageContainer>,
    )
    expect(screen.getByText('操作按钮')).toBeInTheDocument()
  })

  it('footer 页脚内容渲染', () => {
    render(<PageContainer footer="页脚信息">内容</PageContainer>)
    expect(screen.getByText('页脚信息')).toBeInTheDocument()
  })

  it('loading 状态显示加载遮罩', () => {
    const { container } = render(<PageContainer loading>内容</PageContainer>)
    // Spin 组件在 loading 时渲染 role="status" 的加载指示器
    expect(container.querySelector('[role="status"]')).toBeInTheDocument()
  })

  it('breadcrumb 面包屑渲染', () => {
    render(
      <PageContainer
        breadcrumb={[
          { title: '首页', path: '/' },
          { title: '用户管理' },
        ]}
      >
        内容
      </PageContainer>,
    )
    expect(screen.getByText('首页')).toBeInTheDocument()
    expect(screen.getByText('用户管理')).toBeInTheDocument()
  })

  it('无标题无操作时不渲染头部区域', () => {
    const { container } = render(<PageContainer>内容</PageContainer>)
    // 没有 title 和 headerActions 时不应渲染 header
    const header = container.querySelector('.sui-page-container-header')
    expect(header).toBeNull()
  })
})
