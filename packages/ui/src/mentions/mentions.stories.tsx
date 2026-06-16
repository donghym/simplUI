import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Mentions } from './index'

const meta: Meta<typeof Mentions> = {
  title: '数据录入/Mentions 提及',
  component: Mentions,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: '提及组件用于在文本输入中通过特定前缀快速提及人或话题。适用于评论、协作编辑、社交互动等场景，支持多前缀、异步加载和自定义渲染。',
      },
    },
  },
  argTypes: {
    disabled: { control: 'boolean' },
    rows: { control: 'number' },
  },
}

export default meta

type Story = StoryObj<typeof Mentions>

const users = [
  { value: 'afc163', label: 'afc163' },
  { value: 'zombieJ', label: 'zombieJ' },
  { value: 'yesmeck', label: 'yesmeck' },
  { value: 'benjycui', label: 'benjycui' },
  { value: 'RaoHai', label: 'RaoHai' },
  { value: 'dqaria', label: 'dqaria' },
  { value: 'dengfuping', label: 'dengfuping' },
]

export const Basic: Story = {
  args: {
    options: users,
    placeholder: 'Type @ to mention someone',
  },
}

export const Disabled: Story = {
  args: {
    options: users,
    disabled: true,
    defaultValue: '@afc163',
  },
}

export const CustomPrefix: Story = {
  args: {
    prefix: '#',
    options: [
      { value: 'react', label: 'react' },
      { value: 'vue', label: 'vue' },
      { value: 'angular', label: 'angular' },
    ],
    placeholder: 'Type # to mention topic',
  },
}

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState('')
    return (
      <div>
        <Mentions value={value} onChange={setValue} options={users} placeholder="Type @ to mention" />
        <div className="mt-4">Value: {value}</div>
      </div>
    )
  },
}

export const MultiPrefix: Story = {
  parameters: {
    docs: {
      description: {
        story: '同时支持 @ 和 # 两种前缀，分别用于提及用户和话题，适用于评论、动态发布等多场景输入。',
      },
    },
  },
  render: () => {
    const [value, setValue] = useState('')
    return (
      <Mentions
        value={value}
        onChange={setValue}
        prefix={['@', '#']}
        options={[
          { value: 'afc163', label: '@ afc163' },
          { value: 'zombieJ', label: '@ zombieJ' },
          { value: 'yesmeck', label: '@ yesmeck' },
          { value: 'react', label: '# react' },
          { value: 'vue', label: '# vue' },
          { value: 'angular', label: '# angular' },
        ]}
        placeholder="Type @ to mention users, # to mention tags"
        rows={4}
      />
    )
  },
}

export const LoadingState: Story = {
  render: () => {
    const [value, setValue] = useState('')
    const [loading, setLoading] = useState(false)
    const [options, setOptions] = useState(users)

    const handleChange = (val: string) => {
      setValue(val)
      const lastAtIndex = val.lastIndexOf('@')
      if (lastAtIndex !== -1) {
        setLoading(true)
        setTimeout(() => {
          setOptions(users)
          setLoading(false)
        }, 1000)
      }
    }

    return (
      <div>
        <Mentions
          value={value}
          onChange={handleChange}
          options={loading ? [] : options}
          placeholder="Type @ to mention someone (simulates loading)"
          rows={3}
        />
        {loading && (
          <div className="mt-2 text-sm text-gray-400 flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 16 16" className="animate-spin">
              <circle cx="8" cy="8" r="6" fill="none" stroke="#d9d9d9" strokeWidth="2" />
              <path d="M8 2 A6 6 0 0 1 14 8" fill="none" stroke="#1677FF" strokeWidth="2" strokeLinecap="round" />
            </svg>
            Loading suggestions...
          </div>
        )}
      </div>
    )
  },
}

export const CustomRender: Story = {
  parameters: {
    docs: {
      description: {
        story: '自定义建议项渲染，展示头像、职位等丰富信息，适用于企业通讯录、团队协作等需要展示用户详情的场景。',
      },
    },
  },
  render: () => {
    const [value, setValue] = useState('')
    const customOptions = [
      {
        value: 'zhangsan',
        label: (
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 24, height: 24, borderRadius: '50%', background: '#1677ff', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, flexShrink: 0 }}>张</div>
            <div>
              <div style={{ fontWeight: 500, fontSize: 14 }}>张三</div>
              <div style={{ fontSize: 12, color: '#999' }}>前端工程师</div>
            </div>
          </div>
        ),
      },
      {
        value: 'lisi',
        label: (
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 24, height: 24, borderRadius: '50%', background: '#52c41a', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, flexShrink: 0 }}>李</div>
            <div>
              <div style={{ fontWeight: 500, fontSize: 14 }}>李四</div>
              <div style={{ fontSize: 12, color: '#999' }}>后端工程师</div>
            </div>
          </div>
        ),
      },
      {
        value: 'wangwu',
        label: (
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 24, height: 24, borderRadius: '50%', background: '#faad14', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, flexShrink: 0 }}>王</div>
            <div>
              <div style={{ fontWeight: 500, fontSize: 14 }}>王五</div>
              <div style={{ fontSize: 12, color: '#999' }}>产品经理</div>
            </div>
          </div>
        ),
      },
      {
        value: 'zhaoliu',
        label: (
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 24, height: 24, borderRadius: '50%', background: '#eb2f96', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, flexShrink: 0 }}>赵</div>
            <div>
              <div style={{ fontWeight: 500, fontSize: 14 }}>赵六</div>
              <div style={{ fontSize: 12, color: '#999' }}>UI 设计师</div>
            </div>
          </div>
        ),
      },
    ]
    return (
      <Mentions
        value={value}
        onChange={setValue}
        options={customOptions}
        placeholder="输入 @ 查看自定义渲染的建议项"
        rows={3}
      />
    )
  },
}
