import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { Form, FormItem } from './index'

describe('Form', () => {
  it('渲染基本的表单结构', () => {
    render(
      <Form>
        <FormItem label="用户名" name="username">
          <input data-testid="input" />
        </FormItem>
      </Form>,
    )

    expect(screen.getByText('用户名')).toBeInTheDocument()
    expect(screen.getByTestId('input')).toBeInTheDocument()
  })

  it('默认 layout 为 vertical', () => {
    render(
      <Form data-testid="form">
        <FormItem label="Name">
          <input />
        </FormItem>
      </Form>,
    )

    const form = screen.getByTestId('form')
    expect(form.className).toContain('gap-6')
  })

  it('horizontal 布局生效', () => {
    render(
      <Form layout="horizontal" labelCol={{ span: 6 }}>
        <FormItem label="Name" data-testid="item">
          <input />
        </FormItem>
      </Form>,
    )

    const item = screen.getByTestId('item')
    expect(item.className).toContain('flex-row')
  })

  it('必填项显示红色星号', () => {
    render(
      <Form>
        <FormItem label="Name" required>
          <input />
        </FormItem>
      </Form>,
    )

    expect(screen.getByText('*')).toBeInTheDocument()
  })

  it('validateStatus 和 help 显示校验反馈', () => {
    render(
      <Form>
        <FormItem label="Name" validateStatus="error" help="请输入名称">
          <input />
        </FormItem>
      </Form>,
    )

    expect(screen.getByText('请输入名称')).toBeInTheDocument()
    expect(screen.getByText('请输入名称').className).toContain('text-danger-500')
  })

  it('onSubmit 回调获取表单数据', () => {
    const onSubmit = vi.fn()

    render(
      <Form onSubmit={onSubmit}>
        <FormItem label="Name">
          <input data-testid="input" defaultValue="test" />
        </FormItem>
        <button type="submit" data-testid="submit">
          提交
        </button>
      </Form>,
    )

    fireEvent.click(screen.getByTestId('submit'))
    expect(onSubmit).toHaveBeenCalled()
  })

  it('用户 className 合并', () => {
    render(
      <Form className="bg-white p-4" data-testid="form">
        <FormItem label="Name">
          <input />
        </FormItem>
      </Form>,
    )

    expect(screen.getByTestId('form').className).toContain('bg-white')
  })

  it('FormItem 独立使用时抛出错误', () => {
    // 抑制 console.error
    const spy = vi.spyOn(console, 'error').mockImplementation(() => {})

    expect(() => {
      render(
        <FormItem label="Name">
          <input />
        </FormItem>,
      )
    }).toThrow('FormItem must be used within Form')

    spy.mockRestore()
  })

  it('colon 添加标签冒号', () => {
    render(
      <Form colon>
        <FormItem label="Name">
          <input />
        </FormItem>
      </Form>,
    )

    expect(screen.getByText(':', { exact: false })).toBeInTheDocument()
  })
})