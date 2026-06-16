import { createRef } from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { ThoughtChain } from './index'

const steps = [
  { title: '步骤一', content: '内容一', status: 'done' as const },
  { title: '步骤二', content: '内容二', status: 'running' as const },
  { title: '步骤三', status: 'waiting' as const },
]

describe('ThoughtChain', () => {
  it('渲染默认状态', () => {
    render(<ThoughtChain steps={steps} />)
    expect(screen.getByText('步骤一')).toBeInTheDocument()
    expect(screen.getByText('步骤二')).toBeInTheDocument()
    expect(screen.getByText('步骤三')).toBeInTheDocument()
  })

  it('className 合并', () => {
    const { container } = render(<ThoughtChain steps={steps} className="custom-chain" />)
    const el = container.firstChild as HTMLElement
    expect(el.className).toContain('custom-chain')
  })

  it('ref 转发', () => {
    const ref = createRef<HTMLDivElement>()
    render(<ThoughtChain steps={steps} ref={ref} />)
    expect(ref.current).not.toBeNull()
    expect(ref.current?.tagName).toBe('DIV')
  })

  it('defaultExpandAll 展开所有步骤内容', () => {
    render(<ThoughtChain steps={steps} defaultExpandAll />)
    expect(screen.getByText('内容一')).toBeInTheDocument()
    expect(screen.getByText('内容二')).toBeInTheDocument()
  })

  it('点击可折叠步骤切换展开/收起', () => {
    render(<ThoughtChain steps={steps} collapsible />)
    // 步骤一有内容，默认收起
    expect(screen.queryByText('内容一')).not.toBeInTheDocument()
    // 点击展开
    fireEvent.click(screen.getByText('步骤一'))
    expect(screen.getByText('内容一')).toBeInTheDocument()
  })

  it('无内容步骤不可点击展开', () => {
    render(<ThoughtChain steps={steps} collapsible />)
    // 步骤三无内容，不应有展开箭头
    const step3 = screen.getByText('步骤三')
    expect(step3.closest('[role="button"]')).toBeNull()
  })
})
