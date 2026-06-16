import { createRef } from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { Radio, RadioGroup } from './index'

describe('Radio', () => {
  it('默认渲染为未选中状态', () => {
    render(<Radio>Option A</Radio>)
    const radio = screen.getByRole('radio')
    expect(radio).toBeInTheDocument()
    expect(radio).not.toBeChecked()
    expect(screen.getByText('Option A')).toBeInTheDocument()
  })

  it('受控模式 checked prop 控制选中状态', () => {
    const { rerender } = render(<Radio checked={false}>Option A</Radio>)
    const radio = screen.getByRole('radio')
    expect(radio).not.toBeChecked()

    rerender(<Radio checked>Option A</Radio>)
    expect(radio).toBeChecked()
  })

  it('disabled 状态下不触发 onChange', () => {
    const handleChange = vi.fn()
    render(<Radio disabled onChange={handleChange}>Option A</Radio>)
    const radio = screen.getByRole('radio')

    fireEvent.click(radio)
    expect(radio).not.toBeChecked()
    expect(handleChange).not.toHaveBeenCalled()
  })

  it('独立使用时 onChange 回调返回 true', () => {
    const handleChange = vi.fn()
    render(<Radio onChange={handleChange}>Option A</Radio>)
    const radio = screen.getByRole('radio')

    fireEvent.click(radio)
    expect(handleChange).toHaveBeenCalledTimes(1)
    expect(handleChange).toHaveBeenCalledWith(true)
  })

  it('通过 cn() 和 twMerge 合并用户 className', () => {
    render(<Radio className="text-danger-500">Option A</Radio>)
    const radio = screen.getByRole('radio')
    const label = radio.closest('label')
    expect(label).not.toBeNull()
    expect(label!.className).toContain('text-danger-500')
  })

  it('ref 正确转发到 input 元素', () => {
    const ref = createRef<HTMLInputElement>()
    render(<Radio ref={ref}>Option A</Radio>)
    expect(ref.current).toBeInstanceOf(HTMLInputElement)
    expect(ref.current!.type).toBe('radio')
  })
})

describe('RadioGroup', () => {
  it('非受控模式下点击不同选项切换选中值', () => {
    render(
      <RadioGroup defaultValue="a">
        <Radio value="a">A</Radio>
        <Radio value="b">B</Radio>
        <Radio value="c">C</Radio>
      </RadioGroup>,
    )
    const radios = screen.getAllByRole('radio')
    const radio0 = radios[0]!
    const radio1 = radios[1]!
    const radio2 = radios[2]!
    expect(radio0).toBeChecked()
    expect(radio1).not.toBeChecked()
    expect(radio2).not.toBeChecked()

    fireEvent.click(radio1)
    expect(radio0).not.toBeChecked()
    expect(radio1).toBeChecked()
    expect(radio2).not.toBeChecked()
  })

  it('受控模式 value prop 控制选中值', () => {
    const { rerender } = render(
      <RadioGroup value="a">
        <Radio value="a">A</Radio>
        <Radio value="b">B</Radio>
      </RadioGroup>,
    )
    const radios = screen.getAllByRole('radio')
    const radio0 = radios[0]!
    const radio1 = radios[1]!
    expect(radio0).toBeChecked()
    expect(radio1).not.toBeChecked()

    rerender(
      <RadioGroup value="b">
        <Radio value="a">A</Radio>
        <Radio value="b">B</Radio>
      </RadioGroup>,
    )
    expect(radio0).not.toBeChecked()
    expect(radio1).toBeChecked()
  })

  it('受控模式下 onChange 回调返回选中值', () => {
    const handleChange = vi.fn()
    render(
      <RadioGroup value="a" onChange={handleChange}>
        <Radio value="a">A</Radio>
        <Radio value="b">B</Radio>
      </RadioGroup>,
    )
    // 点击 b 选项应触发 onChange('b')
    fireEvent.click(screen.getAllByRole('radio')[1]!)
    expect(handleChange).toHaveBeenCalledTimes(1)
    expect(handleChange).toHaveBeenCalledWith('b')
  })

  it('disabled 整组禁用时所有子 Radio 不可点击', () => {
    const handleChange = vi.fn()
    render(
      <RadioGroup disabled onChange={handleChange}>
        <Radio value="a">A</Radio>
        <Radio value="b">B</Radio>
      </RadioGroup>,
    )
    const radios = screen.getAllByRole('radio')
    const radio0 = radios[0]!
    const radio1 = radios[1]!

    fireEvent.click(radio0)
    fireEvent.click(radio1)

    expect(handleChange).not.toHaveBeenCalled()
    expect(radio0).not.toBeChecked()
    expect(radio1).not.toBeChecked()
  })

  it('options 数组快速生成 Radio 并正确切换', () => {
    const handleChange = vi.fn()
    render(
      <RadioGroup
        options={[
          { label: 'Apple', value: 'apple' },
          { label: 'Banana', value: 'banana' },
          { label: 'Cherry', value: 'cherry', disabled: true },
        ]}
        onChange={handleChange}
      />,
    )
    const radios = screen.getAllByRole('radio')
    const radio0 = radios[0]!
    const radio2 = radios[2]!
    expect(radios).toHaveLength(3)
    expect(screen.getByText('Apple')).toBeInTheDocument()
    expect(screen.getByText('Banana')).toBeInTheDocument()
    expect(screen.getByText('Cherry')).toBeInTheDocument()

    // 禁用项不可点击
    fireEvent.click(radio2)
    expect(radio2).not.toBeChecked()
    expect(handleChange).not.toHaveBeenCalled()

    // 正常项可点击
    fireEvent.click(radio0)
    expect(handleChange).toHaveBeenCalledWith('apple')
  })

  it('direction=horizontal 时应用行内排列样式', () => {
    const { container } = render(
      <RadioGroup direction="horizontal">
        <Radio value="a">A</Radio>
        <Radio value="b">B</Radio>
      </RadioGroup>,
    )
    const groupDiv = container.firstChild as HTMLElement
    expect(groupDiv.className).toContain('flex-row')
  })

  it('direction=vertical 为默认排列方向', () => {
    const { container } = render(
      <RadioGroup>
        <Radio value="a">A</Radio>
        <Radio value="b">B</Radio>
      </RadioGroup>,
    )
    const groupDiv = container.firstChild as HTMLElement
    expect(groupDiv.className).toContain('flex-col')
  })

  it('RadioGroup ref 正确转发到容器 div', () => {
    const ref = createRef<HTMLDivElement>()
    render(
      <RadioGroup ref={ref} data-testid="group">
        <Radio value="a">A</Radio>
        <Radio value="b">B</Radio>
      </RadioGroup>,
    )
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
    expect(ref.current).toBe(screen.getByTestId('group'))
  })

  it('RadioGroup 有 role="radiogroup"', () => {
    render(
      <RadioGroup>
        <Radio value="a">A</Radio>
        <Radio value="b">B</Radio>
      </RadioGroup>,
    )
    const group = screen.getByRole('radiogroup')
    expect(group).toBeInTheDocument()
  })
})