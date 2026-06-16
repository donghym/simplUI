import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { createRef } from 'react'
import Layout from './index'

describe('Layout', () => {
  it('渲染包含所有子组件的完整布局', () => {
    render(
      <Layout>
        <Layout.Header data-testid="header">Header</Layout.Header>
        <Layout>
          <Layout.Sider data-testid="sider" theme="dark">
            Sider
          </Layout.Sider>
          <Layout.Content data-testid="content">Content</Layout.Content>
        </Layout>
        <Layout.Footer data-testid="footer">Footer</Layout.Footer>
      </Layout>,
    )

    expect(screen.getByTestId('header')).toBeInTheDocument()
    expect(screen.getByTestId('header').tagName).toBe('HEADER')
    expect(screen.getByTestId('sider')).toBeInTheDocument()
    expect(screen.getByTestId('sider').tagName).toBe('ASIDE')
    expect(screen.getByTestId('content')).toBeInTheDocument()
    expect(screen.getByTestId('content').tagName).toBe('MAIN')
    expect(screen.getByTestId('footer')).toBeInTheDocument()
    expect(screen.getByTestId('footer').tagName).toBe('FOOTER')
  })

  it('hasSider 为 true 时使用水平布局', () => {
    const { container } = render(
      <Layout hasSider>
        <Layout.Sider theme="dark">Sider</Layout.Sider>
        <Layout.Content>Content</Layout.Content>
      </Layout>,
    )

    const layout = container.firstElementChild!
    expect(layout.className).toContain('flex-row')
  })

  it('默认使用垂直布局（无 hasSider）', () => {
    const { container } = render(
      <Layout>
        <Layout.Header>Header</Layout.Header>
        <Layout.Content>Content</Layout.Content>
      </Layout>,
    )

    const layout = container.firstElementChild!
    expect(layout.className).toContain('flex-col')
  })

  it('Sider 深色主题时有深色背景', () => {
    render(
      <Layout>
        <Layout.Sider theme="dark" data-testid="sider">
          Sider
        </Layout.Sider>
      </Layout>,
    )

    const sider = screen.getByTestId('sider')
    expect(sider.className).toContain('bg-gray-900')
  })

  it('Sider 浅色主题时有白色背景', () => {
    render(
      <Layout>
        <Layout.Sider theme="light" data-testid="sider">
          Sider
        </Layout.Sider>
      </Layout>,
    )

    const sider = screen.getByTestId('sider')
    expect(sider.className).toContain('bg-background')
  })

  it('collapsible 模式下点击触发器切换折叠状态', () => {
    const onCollapse = vi.fn()
    render(
      <Layout>
        <Layout.Sider
          collapsible
          width={200}
          collapsedWidth={80}
          data-testid="sider"
          onCollapse={onCollapse}
        >
          Sider Content
        </Layout.Sider>
      </Layout>,
    )

    const sider = screen.getByTestId('sider')
    const trigger = screen.getByRole('button', { name: '收起侧边栏' })

    // 初始宽度 200px
    expect(sider.style.width).toBe('200px')

    // 点击触发器收起
    fireEvent.click(trigger)
    expect(onCollapse).toHaveBeenCalledWith(true)
    expect(sider.style.width).toBe('80px')

    // 再次点击展开
    fireEvent.click(trigger)
    expect(onCollapse).toHaveBeenCalledWith(false)
  })

  it('受控模式下 collapsed 状态由外部控制', () => {
    const { rerender } = render(
      <Layout>
        <Layout.Sider collapsed={false} collapsible width={200} collapsedWidth={80} data-testid="sider">
          Sider
        </Layout.Sider>
      </Layout>,
    )

    expect(screen.getByTestId('sider').style.width).toBe('200px')

    // 外部更新为 collapsed
    rerender(
      <Layout>
        <Layout.Sider collapsed={true} collapsible width={200} collapsedWidth={80} data-testid="sider">
          Sider
        </Layout.Sider>
      </Layout>,
    )

    expect(screen.getByTestId('sider').style.width).toBe('80px')
  })

  it('用户 className 通过 cn() 合并，可覆盖默认样式', () => {
    render(
      <Layout>
        <Layout.Header className="bg-primary-500" data-testid="header">
          Header
        </Layout.Header>
      </Layout>,
    )

    const header = screen.getByTestId('header')
    expect(header.className).toContain('bg-primary-500')
  })

  it('trigger 设为 null 时隐藏触发器', () => {
    render(
      <Layout>
        <Layout.Sider collapsible trigger={null} data-testid="sider">
          Sider
        </Layout.Sider>
      </Layout>,
    )

    // 触发器不应该存在
    expect(screen.queryByRole('button', { name: '收起侧边栏' })).not.toBeInTheDocument()
  })

  it('非 collapsible 模式下不显示触发器', () => {
    render(
      <Layout>
        <Layout.Sider data-testid="sider">Sider</Layout.Sider>
      </Layout>,
    )

    // 默认 collapsible=false，触发器不应该存在
    expect(screen.queryByRole('button')).not.toBeInTheDocument()
  })

  it('ref 正确转发到 Layout 容器 div', () => {
    const ref = createRef<HTMLDivElement>()
    render(
      <Layout ref={ref} data-testid="layout">
        <Layout.Content>Content</Layout.Content>
      </Layout>,
    )
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
    expect(ref.current).toBe(screen.getByTestId('layout'))
  })

  it('ref 正确转发到 Header 元素', () => {
    const ref = createRef<HTMLElement>()
    render(
      <Layout>
        <Layout.Header ref={ref} data-testid="header">Header</Layout.Header>
      </Layout>,
    )
    expect(ref.current).toBeInstanceOf(HTMLElement)
    expect(ref.current?.tagName).toBe('HEADER')
  })

  it('ref 正确转发到 Content 元素', () => {
    const ref = createRef<HTMLElement>()
    render(
      <Layout>
        <Layout.Content ref={ref} data-testid="content">Content</Layout.Content>
      </Layout>,
    )
    expect(ref.current).toBeInstanceOf(HTMLElement)
    expect(ref.current?.tagName).toBe('MAIN')
  })

  it('ref 正确转发到 Footer 元素', () => {
    const ref = createRef<HTMLElement>()
    render(
      <Layout>
        <Layout.Footer ref={ref} data-testid="footer">Footer</Layout.Footer>
      </Layout>,
    )
    expect(ref.current).toBeInstanceOf(HTMLElement)
    expect(ref.current?.tagName).toBe('FOOTER')
  })

  it('ref 正确转发到 Sider 元素', () => {
    const ref = createRef<HTMLElement>()
    render(
      <Layout>
        <Layout.Sider ref={ref} data-testid="sider">Sider</Layout.Sider>
      </Layout>,
    )
    expect(ref.current).toBeInstanceOf(HTMLElement)
    expect(ref.current?.tagName).toBe('ASIDE')
  })
})