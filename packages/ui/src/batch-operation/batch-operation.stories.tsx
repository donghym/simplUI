import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { BatchOperation } from './index'

const meta: Meta<typeof BatchOperation> = {
  title: '数据展示/BatchOperation 批量操作栏',
  component: BatchOperation,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    selectedCount: { control: 'number', description: '已选中数量' },
    position: { control: 'select', options: ['top', 'bottom'], description: '操作栏位置' },
    onClear: { action: '清空选择', description: '清空选择回调' },
  },
}

export default meta
type Story = StoryObj<typeof BatchOperation>

export const Default: Story = {
  args: {
    selectedCount: 3,
    actions: [
      { label: '批量删除', onClick: fn(), danger: true },
      { label: '批量导出', onClick: fn() },
      { label: '批量移动', onClick: fn() },
    ],
    onClear: fn(),
  },
}

export const TopPosition: Story = {
  args: {
    selectedCount: 5,
    position: 'top',
    actions: [
      { label: '批量删除', onClick: fn(), danger: true },
      { label: '批量导出', onClick: fn() },
    ],
    onClear: fn(),
  },
}

export const WithDisabledAction: Story = {
  args: {
    selectedCount: 2,
    actions: [
      { label: '批量删除', onClick: fn(), danger: true },
      { label: '批量导出', onClick: fn(), disabled: true },
      { label: '批量移动', onClick: fn() },
    ],
    onClear: fn(),
  },
}

export const MultipleDangerActions: Story = {
  args: {
    selectedCount: 10,
    actions: [
      { label: '批量删除', onClick: fn(), danger: true },
      { label: '批量归档', onClick: fn(), danger: true },
      { label: '批量导出', onClick: fn() },
    ],
    onClear: fn(),
  },
}

export const ZeroSelected: Story = {
  args: {
    selectedCount: 0,
    actions: [
      { label: '批量删除', onClick: fn(), danger: true },
    ],
    onClear: fn(),
  },
}
