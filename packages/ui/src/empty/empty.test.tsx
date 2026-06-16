import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Empty, EmptyImage } from './index'

describe('Empty', () => {
  // 测试 1: 默认渲染
  it('renders with default props', () => {
    render(<Empty />)
    expect(screen.getByText('暂无数据')).toBeInTheDocument()
  })

  // 测试 2: 自定义描述文字
  it('renders with custom description', () => {
    render(<Empty description="自定义空状态文案" />)
    expect(screen.getByText('自定义空状态文案')).toBeInTheDocument()
  })

  // 测试 3: 不显示描述文字
  it('hides description when null', () => {
    const { container } = render(<Empty description={null} />)
    expect(container.querySelector('.text-sm')).toBeNull()
  })

  // 测试 4: 使用内置图片
  it('renders with PRESENTED_IMAGE_SIMPLE', () => {
    const { container } = render(<Empty image={EmptyImage.PRESENTED_IMAGE_SIMPLE} />)
    const img = container.querySelector('img')
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', EmptyImage.PRESENTED_IMAGE_SIMPLE)
  })

  // 测试 5: 使用自定义图片 URL
  it('renders with custom image URL', () => {
    const customImage = 'https://example.com/empty.png'
    const { container } = render(<Empty image={customImage} />)
    const img = container.querySelector('img')
    expect(img).toBeInTheDocument()
    expect(img).toHaveAttribute('src', customImage)
  })

  // 测试 6: 使用 React 元素作为图片
  it('renders with React element as image', () => {
    const customElement = <div data-testid="custom-image">Custom</div>
    render(<Empty image={customElement} />)
    expect(screen.getByTestId('custom-image')).toBeInTheDocument()
  })

  // 测试 7: 渲染子元素
  it('renders children', () => {
    render(
      <Empty>
        <button>刷新</button>
      </Empty>
    )
    expect(screen.getByRole('button', { name: '刷新' })).toBeInTheDocument()
  })

  // 测试 8: 用户 className 正确合并
  it('merges user className', () => {
    const { container } = render(<Empty className="custom-class" />)
    expect(container.firstChild).toHaveClass('custom-class')
    expect(container.firstChild).toHaveClass('flex')
  })

  // 测试 9: forwardRef 转发到根元素
  it('forwards ref to root element', () => {
    const ref = { current: null as HTMLDivElement | null }
    render(<Empty ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })

  // 测试 10: imageStyle 应用到图片容器
  it('applies imageStyle to image container', () => {
    const { container } = render(
      <Empty image={EmptyImage.PRESENTED_IMAGE_SIMPLE} imageStyle={{ width: '100px' }} />
    )
    const imageContainer = container.querySelector('.mb-4')
    expect(imageContainer).toHaveStyle({ width: '100px' })
  })

  // 测试 11: imageClassName 应用到图片容器
  it('applies imageClassName to image container', () => {
    const { container } = render(
      <Empty image={EmptyImage.PRESENTED_IMAGE_SIMPLE} imageClassName="custom-image-class" />
    )
    const imageContainer = container.querySelector('.mb-4')
    expect(imageContainer).toHaveClass('custom-image-class')
  })

  // 测试 12: descriptionClassName 应用到描述容器
  it('applies descriptionClassName to description container', () => {
    const { container } = render(<Empty descriptionClassName="custom-desc-class" />)
    const descContainer = container.querySelector('.text-sm')
    expect(descContainer).toHaveClass('custom-desc-class')
  })

  // 测试 13: contentClassName 应用到内容容器
  it('applies contentClassName to content container', () => {
    const { container } = render(
      <Empty contentClassName="custom-content-class">
        <span>child</span>
      </Empty>
    )
    const contentContainer = container.querySelector('.mt-4')
    expect(contentContainer).toHaveClass('custom-content-class')
  })

  // 测试 14: 不传 image 时不渲染图片
  it('does not render image when image is null', () => {
    const { container } = render(<Empty image={null as unknown as string} />)
    expect(container.querySelector('img')).toBeNull()
  })

  // 测试 15: aria-hidden 属性在装饰性图片上
  it('sets aria-hidden on decorative image', () => {
    const { container } = render(<Empty image={EmptyImage.PRESENTED_IMAGE_SIMPLE} />)
    const img = container.querySelector('img')
    expect(img).toHaveAttribute('aria-hidden', 'true')
  })
})
