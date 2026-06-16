import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Skeleton, SkeletonElement } from './index'

describe('Skeleton', () => {
  it('默认状态渲染正确', () => {
    const { container } = render(<Skeleton />)
    // 默认显示标题和段落
    expect(container.querySelector('.flex.gap-4')).toBeInTheDocument()
  })

  it('loading=false 时渲染 children', () => {
    render(
      <Skeleton loading={false}>
        <div data-testid="content">实际内容</div>
      </Skeleton>
    )
    expect(screen.getByTestId('content')).toBeInTheDocument()
    expect(screen.getByText('实际内容')).toBeInTheDocument()
  })

  it('loading=true 时不渲染 children', () => {
    render(
      <Skeleton loading={true}>
        <div data-testid="content">实际内容</div>
      </Skeleton>
    )
    expect(screen.queryByTestId('content')).not.toBeInTheDocument()
  })

  it('显示头像占位符', () => {
    const { container } = render(<Skeleton avatar />)
    // 应该有头像元素
    const avatarElement = container.querySelector('.rounded-full')
    expect(avatarElement).toBeInTheDocument()
  })

  it('显示标题占位符', () => {
    const { container } = render(<Skeleton title />)
    // 标题应该有 mb-2 类
    const titleElement = container.querySelector('.mb-2')
    expect(titleElement).toBeInTheDocument()
  })

  it('显示段落占位符，指定行数', () => {
    const { container } = render(<Skeleton paragraph paragraphRows={4} />)
    // 段落行应该有 mb-2 类
    const paragraphElements = container.querySelectorAll('.mb-2')
    // 4 行段落 + 1 行标题（默认显示）
    expect(paragraphElements.length).toBe(5)
  })

  it('active=true 时显示动画', () => {
    const { container } = render(<Skeleton active />)
    const animatedElement = container.querySelector('.animate-pulse')
    expect(animatedElement).toBeInTheDocument()
  })

  it('active=false 时不显示动画', () => {
    const { container } = render(<Skeleton active={false} />)
    const animatedElement = container.querySelector('.animate-pulse')
    expect(animatedElement).not.toBeInTheDocument()
  })

  it('用户 className 正确合并', () => {
    const { container } = render(<Skeleton className="custom-class" />)
    const root = container.querySelector('.custom-class')
    expect(root).toBeInTheDocument()
  })

  it('ref 转发到根元素', () => {
    const ref = { current: null as HTMLDivElement | null }
    render(<Skeleton ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })

  it('不显示标题时正确渲染', () => {
    const { container } = render(<Skeleton title={false} paragraph={false} />)
    // 只有根容器和内容区域 div
    const root = container.querySelector('.flex.gap-4')
    expect(root).toBeInTheDocument()
    // 内容区域 div 仍然存在，但为空
    expect(root?.children.length).toBe(1)
  })

  it('不显示段落时正确渲染', () => {
    const { container } = render(<Skeleton title paragraph={false} />)
    // 只有标题
    const titleElement = container.querySelector('.mb-2')
    expect(titleElement).toBeInTheDocument()
  })
})

describe('SkeletonElement', () => {
  it('默认渲染文本形状', () => {
    const { container } = render(<SkeletonElement />)
    const element = container.querySelector('.h-4')
    expect(element).toBeInTheDocument()
  })

  it('渲染圆形形状', () => {
    const { container } = render(<SkeletonElement variant="circle" />)
    const element = container.querySelector('.rounded-full')
    expect(element).toBeInTheDocument()
  })

  it('渲染矩形形状', () => {
    const { container } = render(<SkeletonElement variant="rect" />)
    const element = container.querySelector('.rounded-md')
    expect(element).toBeInTheDocument()
  })

  it('设置宽度和高度', () => {
    const { container } = render(<SkeletonElement width={100} height={50} />)
    const element = container.firstChild as HTMLElement
    expect(element.style.width).toBe('100px')
    expect(element.style.height).toBe('50px')
  })

  it('用户 className 正确合并', () => {
    const { container } = render(<SkeletonElement className="custom-class" />)
    const element = container.querySelector('.custom-class')
    expect(element).toBeInTheDocument()
  })

  it('ref 转发到元素', () => {
    const ref = { current: null as HTMLDivElement | null }
    render(<SkeletonElement ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })
})
