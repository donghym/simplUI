import { createRef } from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import ProForm from './index'
import { ProFormText, ProFormSelect } from './index'

describe('ProForm', () => {
  it('渲染默认状态 - 包含提交和重置按钮', () => {
    render(
      <ProForm>
        <ProFormText name="username" label="用户名" />
      </ProForm>,
    )
    expect(screen.getByText('提交')).toBeInTheDocument()
    expect(screen.getByText('重置')).toBeInTheDocument()
  })

  it('className 合并', () => {
    const { container } = render(
      <ProForm className="custom-form">
        <ProFormText name="name" label="名称" />
      </ProForm>,
    )
    const form = container.querySelector('form')
    expect(form?.classList.contains('custom-form')).toBe(true)
  })

  it('ref 转发到 form 元素', () => {
    const ref = createRef<HTMLFormElement>()
    render(
      <ProForm ref={ref}>
        <ProFormText name="name" label="名称" />
      </ProForm>,
    )
    expect(ref.current).toBeInstanceOf(HTMLFormElement)
  })

  it('onFinish 回调在提交时触发', async () => {
    const onFinish = vi.fn().mockResolvedValue(undefined)
    render(
      <ProForm onFinish={onFinish} initialValues={{ name: '测试' }}>
        <ProFormText name="name" label="名称" />
      </ProForm>,
    )
    fireEvent.click(screen.getByText('提交'))
    await waitFor(() => {
      expect(onFinish).toHaveBeenCalledTimes(1)
      expect(onFinish).toHaveBeenCalledWith({ name: '测试' })
    })
  })

  it('submitter 为 false 时不显示按钮', () => {
    render(
      <ProForm submitter={false}>
        <ProFormText name="name" label="名称" />
      </ProForm>,
    )
    expect(screen.queryByText('提交')).not.toBeInTheDocument()
    expect(screen.queryByText('重置')).not.toBeInTheDocument()
  })

  it('ProFormSelect 渲染选项', () => {
    render(
      <ProForm>
        <ProFormSelect
          name="gender"
          label="性别"
          options={[
            { label: '男', value: 'male' },
            { label: '女', value: 'female' },
          ]}
        />
      </ProForm>,
    )
    expect(screen.getByText('性别')).toBeInTheDocument()
  })

  it('layout 为 vertical 时垂直布局', () => {
    const { container } = render(
      <ProForm layout="vertical">
        <ProFormText name="name" label="名称" />
      </ProForm>,
    )
    const form = container.querySelector('form')
    expect(form).toBeInTheDocument()
  })

  it('initialValues 设置初始值', () => {
    render(
      <ProForm initialValues={{ username: 'admin' }}>
        <ProFormText name="username" label="用户名" />
      </ProForm>,
    )
    const input = screen.getByLabelText('用户名')
    expect(input).toHaveValue('admin')
  })

  it('自定义 submitter 配置', () => {
    render(
      <ProForm submitter={{ submitText: '保存', resetText: '取消', showReset: true }}>
        <ProFormText name="name" label="名称" />
      </ProForm>,
    )
    expect(screen.getByText('保存')).toBeInTheDocument()
    expect(screen.getByText('取消')).toBeInTheDocument()
  })
})
