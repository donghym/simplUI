import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Radio } from './index'
import { RadioGroup } from '../radio/index'

const meta: Meta<typeof Radio> = {
  title: '数据录入/Radio 单选框',
  component: Radio,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: '单选框用于在多个互斥选项中选择一项。适用于性别选择、支付方式、视图切换等场景，支持组合使用和按钮样式。',
      },
    },
  },
}

export default meta

export const Basic: StoryObj = {
  parameters: {
    docs: {
      description: {
        story: '单选框组合的基础用法，适用于在多个互斥选项中选择一项的场景。',
      },
    },
  },
  render: () => (
    <RadioGroup defaultValue="a">
      <Radio value="a">选项 A</Radio>
      <Radio value="b">选项 B</Radio>
      <Radio value="c">选项 C</Radio>
    </RadioGroup>
  ),
}

export const Disabled: StoryObj = {
  parameters: {
    docs: {
      description: {
        story: '整组禁用状态下的单选框，适用于选项暂时不可选或权限受限的场景。',
      },
    },
  },
  render: () => (
    <RadioGroup defaultValue="a" disabled>
      <Radio value="a">选项 A</Radio>
      <Radio value="b">选项 B</Radio>
    </RadioGroup>
  ),
}

export const Horizontal: StoryObj = {
  parameters: {
    docs: {
      description: {
        story: '水平排列的单选框组，适用于选项较少且需要节省垂直空间的场景。',
      },
    },
  },
  render: () => (
    <RadioGroup defaultValue="react" direction="horizontal">
      <Radio value="react">React</Radio>
      <Radio value="vue">Vue</Radio>
      <Radio value="svelte">Svelte</Radio>
    </RadioGroup>
  ),
}

export const WithOptions: StoryObj = {
  render: () => (
    <RadioGroup
      defaultValue="m"
      options={[
        { label: '男', value: 'm' },
        { label: '女', value: 'f' },
        { label: '其他', value: 'o' },
      ]}
    />
  ),
}

export const Standalone: StoryObj = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Radio defaultChecked>默认选中</Radio>
      <Radio>未选中</Radio>
      <Radio disabled>禁用</Radio>
    </div>
  ),
}

export const RadioButtonStyle: StoryObj = {
  render: () => (
    <RadioGroup defaultValue="react" direction="horizontal">
      {['React', 'Vue', 'Svelte'].map((item) => (
        <label
          key={item}
          className="inline-flex cursor-pointer items-center rounded-md border border-border px-4 py-1.5 text-sm transition-colors has-[:checked]:border-primary-500 has-[:checked]:bg-primary-50 has-[:checked]:text-primary-600 hover:border-primary-300"
        >
          <Radio value={item.toLowerCase()} className="sr-only" />
          {item}
        </label>
      ))}
    </RadioGroup>
  ),
}

export const ControlledRadio: StoryObj = {
  render: () => {
    const [value, setValue] = useState('a')
    return (
      <div className="flex flex-col gap-3">
        <RadioGroup value={value} onChange={setValue}>
          <Radio value="a">选项 A</Radio>
          <Radio value="b">选项 B</Radio>
          <Radio value="c">选项 C</Radio>
        </RadioGroup>
        <p className="text-sm text-gray-500">当前选中：{value}</p>
      </div>
    )
  },
}

export const SizeVariants: StoryObj = {
  parameters: {
    docs: {
      description: {
        story: '通过 CSS 覆盖实现小、默认、大三种尺寸，适应不同布局密度的需求。',
      },
    },
  },
  render: () => (
    <div className="flex flex-col gap-6">
      <div>
        <p className="mb-2 text-xs text-muted-foreground">小号</p>
        <RadioGroup defaultValue="a" className="text-xs [&_span]:text-xs [&_span.sui-radio_span]:w-3 [&_span.sui-radio_span]:h-3">
          <Radio value="a">选项 A</Radio>
          <Radio value="b">选项 B</Radio>
          <Radio value="c">选项 C</Radio>
        </RadioGroup>
      </div>
      <div>
        <p className="mb-2 text-xs text-muted-foreground">默认</p>
        <RadioGroup defaultValue="a">
          <Radio value="a">选项 A</Radio>
          <Radio value="b">选项 B</Radio>
          <Radio value="c">选项 C</Radio>
        </RadioGroup>
      </div>
      <div>
        <p className="mb-2 text-xs text-muted-foreground">大号</p>
        <RadioGroup defaultValue="a" className="text-base [&_span]:text-base [&_span.sui-radio_span]:w-5 [&_span.sui-radio_span]:h-5">
          <Radio value="a">选项 A</Radio>
          <Radio value="b">选项 B</Radio>
          <Radio value="c">选项 C</Radio>
        </RadioGroup>
      </div>
    </div>
  ),
}
