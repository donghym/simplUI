import type { Meta, StoryObj } from '@storybook/react'
import { useState, useCallback } from 'react'
import { AutoComplete } from './index'
import type { AutoCompleteOption } from './types'
import { Button } from '../button/index'

const meta: Meta<typeof AutoComplete> = {
  title: '数据录入/AutoComplete 自动完成',
  component: AutoComplete,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: '自动完成用于根据用户输入提供实时建议。适用于搜索框、地址输入、标签补全等需要快速匹配选项的场景，支持本地过滤和远程搜索。',
      },
    },
  },
  argTypes: {
    options: {
      control: 'object',
      description: '选项数据源，可以是字符串数组或 AutoCompleteOption 数组',
    },
    disabled: {
      control: 'boolean',
      description: '是否禁用输入框',
    },
    allowClear: {
      control: 'boolean',
      description: '是否允许清空输入内容，true 时显示清空按钮',
    },
    onSearch: {
      control: 'text',
      description: '输入值变化时的回调，返回新的输入值',
    },
  },
}

export default meta
type Story = StoryObj<typeof AutoComplete>

const options = [
  { value: '苹果' },
  { value: '香蕉' },
  { value: '樱桃' },
  { value: '枣' },
  { value: '接骨木' },
]

export const Default: Story = {
  args: {
    options,
    placeholder: '输入以搜索...',
  },
}

export const WithDefaultValue: Story = {
  args: {
    options,
    defaultValue: '苹果',
  },
}

export const Disabled: Story = {
  args: {
    options,
    disabled: true,
  },
}

export const AllowClear: Story = {
  args: {
    options,
    allowClear: true,
    defaultValue: '香蕉',
  },
}

export const CustomOptions: Story = {
  args: {
    options: [
      { value: 'react', label: 'React - JavaScript 库' },
      { value: 'vue', label: 'Vue - 渐进式框架' },
      { value: 'angular', label: 'Angular - TypeScript 框架' },
    ],
    placeholder: '搜索框架...',
  },
}

export const Controlled: Story = {
  parameters: {
    docs: {
      description: {
        story: '受控模式示例，展示如何通过外部状态管理输入值。',
      },
    },
  },
  render: () => {
    const [value, setValue] = useState('')
    return (
      <div className="space-y-4">
        <p>当前值：{value}</p>
        <AutoComplete
          options={options}
          value={value}
          onChange={(v) => setValue(v)}
        />
      </div>
    )
  },
}

/** 远程搜索 */
export const RemoteSearch: Story = {
  parameters: {
    docs: {
      description: {
        story: '模拟远程搜索场景，输入后延迟加载匹配结果，适用于数据量大或需要实时检索服务端数据的场景。',
      },
    },
  },
  render: () => {
    const [value, setValue] = useState('')
    const [loading, setLoading] = useState(false)
    const [remoteOptions, setRemoteOptions] = useState<AutoCompleteOption[]>([])

    const allCities = [
      { value: '北京' },
      { value: '上海' },
      { value: '广州' },
      { value: '深圳' },
      { value: '杭州' },
      { value: '成都' },
      { value: '武汉' },
      { value: '南京' },
      { value: '重庆' },
      { value: '西安' },
      { value: '苏州' },
      { value: '天津' },
      { value: '长沙' },
      { value: '郑州' },
      { value: '东莞' },
    ]

    const handleSearch = useCallback((searchValue: string) => {
      if (!searchValue) {
        setRemoteOptions([])
        setLoading(false)
        return
      }
      setLoading(true)
      setTimeout(() => {
        const filtered = allCities.filter((c) => c.value.includes(searchValue))
        setRemoteOptions(filtered)
        setLoading(false)
      }, 800)
    }, [])

    return (
      <div className="space-y-4 w-72">
        <AutoComplete
          options={remoteOptions}
          value={value}
          onChange={(v) => setValue(v)}
          onSearch={handleSearch}
          placeholder="搜索城市..."
          suffix={loading ? <span className="text-xs text-muted-foreground animate-pulse">搜索中...</span> : undefined}
          filterOption={() => true}
        />
        <p className="text-sm text-gray-500">
          {loading ? '正在搜索...' : `共 ${remoteOptions.length} 个结果`}
        </p>
      </div>
    )
  },
}

/** 自定义输入框 */
export const CustomInput: Story = {
  parameters: {
    docs: {
      description: {
        story: '结合搜索图标和按钮实现自定义搜索输入框布局，适用于顶部搜索栏等复杂交互场景。',
      },
    },
  },
  render: () => {
    const [value, setValue] = useState('')
    const searchOptions = [
      { value: 'React 组件开发' },
      { value: 'React Hooks 教程' },
      { value: 'React 状态管理' },
      { value: 'React 路由配置' },
      { value: 'React 性能优化' },
      { value: 'Vue3 组合式 API' },
      { value: 'Vue3 状态管理 Pinia' },
      { value: 'Angular 依赖注入' },
    ].filter((opt) => !value || opt.value.toLowerCase().includes(value.toLowerCase()))

    const handleSearch = () => {
      if (value) {
        alert(`搜索：${value}`)
      }
    }

    return (
      <div className="space-y-4 w-96">
        <div style={{ display: 'flex', alignItems: 'center', gap: 0, border: '1px solid #d9d9d9', borderRadius: 6, overflow: 'hidden' }}>
          <span style={{ display: 'flex', alignItems: 'center', paddingLeft: 10, color: '#bfbfbf' }}>
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </span>
          <AutoComplete
            options={searchOptions}
            value={value}
            onChange={(v) => setValue(v)}
            placeholder="搜索技术文章..."
            style={{ flex: 1, border: 'none', outline: 'none' }}
          />
          <Button className="text-sm" onClick={handleSearch} style={{ margin: 2 }}>
            搜索
          </Button>
        </div>
        <p className="text-xs text-muted-foreground">带搜索图标前缀和搜索按钮后缀的自动完成输入框</p>
      </div>
    )
  },
}