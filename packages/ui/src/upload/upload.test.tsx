import { createRef } from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { Upload } from './index'
import type { UploadFile } from './types'

/** 创建模拟文件对象 */
function createMockFile(name = 'test.txt', size = 1024, type = 'text/plain'): File {
  const content = new Array(size).fill('x').join('')
  return new File([content], name, { type })
}

describe('Upload', () => {
  it('默认渲染上传区域和文件输入', () => {
    const { container } = render(<Upload />)
    const area = screen.getByRole('button')
    expect(area).toBeInTheDocument()
    expect(area).toHaveTextContent('点击或拖拽文件到此区域上传')
    const input = container.querySelector('input[type="file"]')
    expect(input).toBeInTheDocument()
    expect(input).toHaveClass('hidden')
  })

  it('禁用状态阻止点击交互，设置 aria-disabled', () => {
    render(<Upload disabled />)
    const area = screen.getByRole('button')
    expect(area).toHaveAttribute('aria-disabled', 'true')
    expect(area.tabIndex).toBe(-1)
  })

  it('文件选择后将文件添加到列表，无 customRequest 时自动标记 done', async () => {
    const onChange = vi.fn()
    const { container } = render(<Upload onChange={onChange} />)
    const input = container.querySelector('input[type="file"]')!
    const file = createMockFile('example.txt')
    fireEvent.change(input, { target: { files: [file] } })
    await waitFor(() => {
      expect(screen.getByText('example.txt')).toBeInTheDocument()
    })
    expect(onChange).toHaveBeenCalled()
    const lastCall = onChange.mock.lastCall?.[0]
    expect(lastCall?.fileList[0]?.status).toBe('done')
  })

  it('beforeUpload 返回 false 时阻止文件添加', async () => {
    const beforeUpload = vi.fn().mockResolvedValue(false)
    render(<Upload beforeUpload={beforeUpload} />)
    const input = document.querySelector('input[type="file"]')!
    fireEvent.change(input, { target: { files: [createMockFile('blocked.txt')] } })
    await waitFor(() => {
      expect(beforeUpload).toHaveBeenCalledTimes(1)
    })
    expect(screen.queryByText('blocked.txt')).not.toBeInTheDocument()
  })

  it('移除按钮点击后文件从列表消失，触发 onChange', async () => {
    const onChange = vi.fn()
    render(<Upload onChange={onChange} />)
    const input = document.querySelector('input[type="file"]')!
    fireEvent.change(input, { target: { files: [createMockFile('remove-me.txt')] } })
    await waitFor(() => {
      expect(screen.getByText('remove-me.txt')).toBeInTheDocument()
    })
    fireEvent.click(screen.getByLabelText('Remove file'))
    expect(screen.queryByText('remove-me.txt')).not.toBeInTheDocument()
  })

  it('通过 cn() 和 twMerge 合并用户 className', () => {
    const { container } = render(<Upload className="bg-danger-500 max-w-md" />)
    const wrapper = container.firstChild as HTMLElement
    expect(wrapper.className).toContain('bg-danger-500')
    expect(wrapper.className).toContain('max-w-md')
    // 默认的 w-full 应保留
    expect(wrapper.className).toContain('w-full')
  })

  it('ref 正确转发到外层 div 元素', () => {
    const ref = createRef<HTMLDivElement>()
    render(<Upload ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
    expect(ref.current?.querySelector('input[type="file"]')).toBeInTheDocument()
  })

  it('maxCount=1 时仅保留第一个文件', async () => {
    render(<Upload maxCount={1} />)
    const input = document.querySelector('input[type="file"]')!
    fireEvent.change(input, {
      target: { files: [createMockFile('first.txt'), createMockFile('second.txt')] },
    })
    await waitFor(() => {
      expect(screen.getByText('first.txt')).toBeInTheDocument()
    })
    expect(screen.queryByText('second.txt')).not.toBeInTheDocument()
  })

  it('maxSize 过滤超过大小限制的文件，仅保留合规文件', async () => {
    render(<Upload maxSize={500} />)
    const input = document.querySelector('input[type="file"]')!
    const small = createMockFile('small.txt', 100)
    const large = createMockFile('large.txt', 2000)
    fireEvent.change(input, { target: { files: [small, large] } })
    await waitFor(() => {
      expect(screen.getByText('small.txt')).toBeInTheDocument()
    })
    expect(screen.queryByText('large.txt')).not.toBeInTheDocument()
  })

  it('picture-card 模式渲染卡片布局', async () => {
    const { container } = render(<Upload listType="picture-card" />)
    const input = container.querySelector('input[type="file"]')!
    fireEvent.change(input, { target: { files: [createMockFile('card.txt')] } })
    await waitFor(() => {
      expect(screen.getByText('card.txt')).toBeInTheDocument()
    })
    // 图片卡片模式下文件列表容器使用 flex-row flex-wrap
    const listContainer = container.querySelector('.flex-row.flex-wrap')
    expect(listContainer).toBeInTheDocument()
  })

  it('受控模式通过 fileList prop 控制文件列表', () => {
    const fileList: UploadFile[] = [{
      uid: '1', name: 'controlled.txt', size: 100, type: 'text/plain',
    }]
    render(<Upload fileList={fileList} />)
    expect(screen.getByText('controlled.txt')).toBeInTheDocument()
    // 上传区域仍可见（未设置 maxCount）
    const buttons = screen.getAllByRole('button')
    expect(buttons.length).toBeGreaterThanOrEqual(2)
  })

  it('onRemove 返回 false 时阻止文件删除', async () => {
    const fileList: UploadFile[] = [{
      uid: '1', name: 'no-remove.txt', size: 100, type: 'text/plain',
    }]
    const onRemove = vi.fn().mockReturnValue(false)
    const onChange = vi.fn()
    render(<Upload fileList={fileList} onRemove={onRemove} onChange={onChange} />)
    expect(screen.getByText('no-remove.txt')).toBeInTheDocument()
    fireEvent.click(screen.getByLabelText('Remove file'))
    expect(onRemove).toHaveBeenCalledTimes(1)
    // 删除被阻止，文件仍在列表中
    expect(screen.getByText('no-remove.txt')).toBeInTheDocument()
    expect(onChange).not.toHaveBeenCalled()
  })

  it('customRequest 接收文件并回调进度与完成', async () => {
    const customRequest = vi.fn(({ onSuccess }) => { onSuccess({ url: '/uploaded' }) })
    const onChange = vi.fn()
    render(<Upload customRequest={customRequest} onChange={onChange} />)
    const input = document.querySelector('input[type="file"]')!
    fireEvent.change(input, { target: { files: [createMockFile('upload.txt')] } })
    await waitFor(() => {
      expect(customRequest).toHaveBeenCalledTimes(1)
    })
    expect(customRequest.mock.calls[0]![0].file.name).toBe('upload.txt')
    // 上传完成后文件状态应为 done
    await waitFor(() => {
      const lastCall = onChange.mock.lastCall?.[0]
      expect(lastCall?.fileList[0]?.status).toBe('done')
    })
  })
})