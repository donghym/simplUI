import { createRef } from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { StepForm } from './index'
import type { StepFormStep } from './types'

const steps: StepFormStep[] = [
  { title: '基本信息', description: '填写基本资料', content: <div>第一步内容</div> },
  { title: '详细信息', description: '填写详细资料', content: <div>第二步内容</div> },
  { title: '确认提交', content: <div>第三步内容</div> },
]

describe('StepForm', () => {
  it('渲染默认状态 - 显示第一步内容和步骤指示器', () => {
    render(<StepForm steps={steps} />)
    expect(screen.getByText('基本信息')).toBeInTheDocument()
    expect(screen.getByText('第一步内容')).toBeInTheDocument()
    expect(screen.getByText('下一步')).toBeInTheDocument()
  })

  it('className 合并', () => {
    const { container } = render(
      <StepForm steps={steps} className="custom-step-form" />,
    )
    const root = container.firstChild as HTMLElement
    expect(root.classList.contains('custom-step-form')).toBe(true)
  })

  it('ref 转发到根 div', () => {
    const ref = createRef<HTMLDivElement>()
    render(<StepForm steps={steps} ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })

  it('点击下一步切换步骤', () => {
    render(<StepForm steps={steps} />)
    fireEvent.click(screen.getByText('下一步'))
    expect(screen.getByText('第二步内容')).toBeInTheDocument()
  })

  it('最后一步显示提交按钮', () => {
    render(<StepForm steps={steps} current={2} />)
    expect(screen.getByText('提交')).toBeInTheDocument()
  })

  it('onFinish 回调在点击提交时触发', () => {
    const onFinish = vi.fn()
    render(<StepForm steps={steps} current={2} onFinish={onFinish} />)
    fireEvent.click(screen.getByText('提交'))
    expect(onFinish).toHaveBeenCalledTimes(1)
  })

  it('onStepChange 回调在步骤切换时触发', () => {
    const onStepChange = vi.fn()
    render(<StepForm steps={steps} onStepChange={onStepChange} />)
    fireEvent.click(screen.getByText('下一步'))
    expect(onStepChange).toHaveBeenCalledWith(1)
  })

  it('自定义按钮文本', () => {
    render(
      <StepForm steps={steps} prevText="返回" nextText="继续" finishText="确认" current={1} />,
    )
    expect(screen.getByText('返回')).toBeInTheDocument()
    expect(screen.getByText('继续')).toBeInTheDocument()
  })

  it('步骤描述正确显示', () => {
    render(<StepForm steps={steps} />)
    expect(screen.getByText('填写基本资料')).toBeInTheDocument()
  })
})
