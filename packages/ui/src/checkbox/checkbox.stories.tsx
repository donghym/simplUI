import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Checkbox } from './index'

const meta: Meta<typeof Checkbox> = {
  title: '数据录入/Checkbox 多选框',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: '多选框用于在一组选项中进行多项选择。适用于表单配置、批量操作、筛选条件等场景，支持全选、半选和禁用状态。',
      },
    },
  },
  argTypes: {
    checked: {
      control: 'boolean',
      description: '受控模式下的选中状态，true 为选中，false 为未选中',
    },
    defaultChecked: {
      control: 'boolean',
      description: '非受控模式下的初始选中状态，默认 false',
    },
    disabled: {
      control: 'boolean',
      description: '禁用状态，true 时不可交互、灰色半透明显示',
    },
    indeterminate: {
      control: 'boolean',
      description: '半选状态，显示横线图标，优先级高于 checked 的视觉表现',
    },
    onChange: {
      control: false,
      description: '选中状态变化时触发，参数为变化后的 checked 值',
    },
  },
}

export default meta
type Story = StoryObj<typeof Checkbox>

export const Basic: Story = {
  args: { children: '苹果' },
}

export const DefaultChecked: Story = {
  args: { children: '香蕉', defaultChecked: true },
}

export const Indeterminate: Story = {
  args: { children: '全选', indeterminate: true },
}

export const Disabled: Story = {
  args: { children: '禁用选项', disabled: true },
}

export const DisabledChecked: Story = {
  args: { children: '禁用且选中', disabled: true, defaultChecked: true },
}

export const Group: Story = {
  parameters: {
    docs: {
      description: {
        story: '多个复选框组合使用，适用于表单中的多项配置或兴趣标签选择等场景。',
      },
    },
  },
  render: () => (
    <div className="flex flex-col gap-2">
      <Checkbox defaultChecked>React</Checkbox>
      <Checkbox defaultChecked>TypeScript</Checkbox>
      <Checkbox>Tailwind CSS</Checkbox>
      <Checkbox>Vite</Checkbox>
    </div>
  ),
}

export const Controlled: Story = {
  parameters: {
    docs: {
      description: {
        story: '受控模式示例，展示如何通过外部状态管理复选框的选中状态。',
      },
    },
  },
  render: () => {
    const [checked, setChecked] = useState(false)
    return (
      <div className="flex flex-col gap-2">
        <Checkbox checked={checked} onChange={setChecked}>
          受控复选框
        </Checkbox>
        <p className="text-sm text-muted-foreground">当前状态：{checked ? '选中' : '未选中'}</p>
      </div>
    )
  },
}

export const CheckAll: Story = {
  parameters: {
    docs: {
      description: {
        story: '实现全选/半选/取消全选功能，适用于批量操作、列表多选等需要统一控制选项状态的场景。',
      },
    },
  },
  render: () => {
    const items = ['苹果', '香蕉', '橘子']
    const [checkedList, setCheckedList] = useState<boolean[]>([true, false, false])

    const allChecked = checkedList.every(Boolean)
    const someChecked = checkedList.some(Boolean) && !allChecked

    const handleCheckAll = (checked: boolean) => {
      setCheckedList(items.map(() => checked))
    }

    const handleItemChange = (index: number, checked: boolean) => {
      const next = [...checkedList]
      next[index] = checked
      setCheckedList(next)
    }

    return (
      <div className="flex flex-col gap-2">
        <Checkbox
          checked={allChecked}
          indeterminate={someChecked}
          onChange={handleCheckAll}
        >
          全选
        </Checkbox>
        <div className="ml-4 flex flex-col gap-2">
          {items.map((item, index) => (
            <Checkbox
              key={item}
              checked={checkedList[index]}
              onChange={(checked) => handleItemChange(index, checked)}
            >
              {item}
            </Checkbox>
          ))}
        </div>
      </div>
    )
  },
}
