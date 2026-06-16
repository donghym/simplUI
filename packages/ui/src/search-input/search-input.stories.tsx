import type { Meta, StoryObj } from '@storybook/react'
import { useState, useCallback } from 'react'
import { SearchInput } from './index'

const meta: Meta<typeof SearchInput> = {
  title: '数据录入/SearchInput 智能搜索框',
  component: SearchInput,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    disabled: {
      control: 'boolean',
      description: '是否禁用',
    },
    allowClear: {
      control: 'boolean',
      description: '是否显示清空按钮',
    },
    showHistory: {
      control: 'boolean',
      description: '是否显示搜索历史',
    },
    highlightMatch: {
      control: 'boolean',
      description: '是否高亮匹配关键词',
    },
  },
}

export default meta
type Story = StoryObj<typeof SearchInput>

/** 基础搜索框 */
export const Default: Story = {
  args: {
    placeholder: '搜索...',
  },
}

/** 静态建议列表 */
export const StaticSuggestions: Story = {
  render: () => {
    const [value, setValue] = useState('')
    return (
      <div className="w-96">
        <SearchInput
          value={value}
          onChange={setValue}
          suggestions={['React', 'React Native', 'Vue', 'Vue Router', 'Angular', 'Svelte', 'SolidJS', 'Next.js', 'Nuxt.js', 'Astro']}
          placeholder="搜索前端框架..."
          showHistory={false}
        />
      </div>
    )
  },
}

/** 异步建议 */
export const AsyncSuggestions: Story = {
  render: () => {
    const [value, setValue] = useState('')
    const fetchSuggestions = useCallback(async (input: string): Promise<string[]> => {
      // 模拟异步请求
      await new Promise((resolve) => setTimeout(resolve, 600))
      const allCities = [
        '北京', '上海', '广州', '深圳', '杭州', '成都', '武汉', '南京',
        '重庆', '西安', '苏州', '天津', '长沙', '郑州', '东莞',
      ]
      return allCities.filter((city) => city.includes(input))
    }, [])

    return (
      <div className="w-96">
        <SearchInput
          value={value}
          onChange={setValue}
          suggestions={fetchSuggestions}
          placeholder="搜索城市..."
          showHistory={false}
        />
      </div>
    )
  },
}

/** 搜索历史 */
export const WithHistory: Story = {
  render: () => {
    const [value, setValue] = useState('')
    return (
      <div className="w-96">
        <SearchInput
          value={value}
          onChange={setValue}
          onSearch={(v) => console.log('搜索:', v)}
          suggestions={['React 组件', 'React Hooks', 'Vue3 组合式 API', 'TypeScript 泛型']}
          placeholder="搜索技术文章..."
          showHistory={true}
          maxHistory={5}
        />
        <p className="mt-2 text-xs text-muted-foreground">
          输入内容后按 Enter 提交搜索，搜索记录会保存到历史中
        </p>
      </div>
    )
  },
}

/** 关键词高亮 */
export const HighlightMatch: Story = {
  render: () => {
    const [value, setValue] = useState('')
    return (
      <div className="w-96">
        <SearchInput
          value={value}
          onChange={setValue}
          suggestions={[
            'JavaScript 基础教程',
            'JavaScript 高级编程',
            'TypeScript 入门指南',
            'TypeScript 类型体操',
            'Java 编程思想',
            'Python 数据分析',
          ]}
          placeholder="输入关键词查看高亮效果..."
          highlightMatch={true}
          showHistory={false}
        />
      </div>
    )
  },
}

/** 禁用状态 */
export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: '已禁用',
  },
}

/** 受控模式 */
export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState('')
    return (
      <div className="space-y-4 w-96">
        <SearchInput
          value={value}
          onChange={setValue}
          onSearch={(v) => console.log('搜索:', v)}
          suggestions={['苹果', '香蕉', '樱桃', '枣', '接骨木']}
          placeholder="受控模式..."
        />
        <p className="text-sm text-muted-foreground">当前值：{value || '(空)'}</p>
      </div>
    )
  },
}

/** 无清空按钮 */
export const NoClear: Story = {
  args: {
    allowClear: false,
    defaultValue: '不可清空',
    placeholder: '搜索...',
  },
}

/** 错误状态 */
export const ErrorStatus: Story = {
  args: {
    status: 'error',
    placeholder: '搜索...',
  },
}
