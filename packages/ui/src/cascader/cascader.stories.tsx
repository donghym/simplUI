import type { Meta, StoryObj } from '@storybook/react'
import { useState, useEffect } from 'react'
import { Cascader } from './index'
import type { CascaderOption } from './types'

const CenterDecorator = (Story: React.FC) => (
  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', minHeight: '500px', width: '100%', paddingTop: '40px' }}>
    <Story />
  </div>
)

const meta: Meta<typeof Cascader> = {
  title: '数据录入/Cascader 级联选择',
  component: Cascader,
  tags: ['autodocs'],
  decorators: [CenterDecorator],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: '级联选择用于从一组相关联的数据层级中进行选择。适用于省市区选择、组织架构、分类目录等具有层级关系的数据场景，支持动态加载和自定义展示。',
      },
    },
  },
  argTypes: {
    options: {
      control: 'object',
      description: '选项数据源，支持多级嵌套的级联选项',
    },
    status: {
      control: 'select',
      options: ['error', 'warning'],
      description: '输入框状态：error 显示红色边框，warning 显示黄色边框',
    },
    allowClear: {
      control: 'boolean',
      description: '是否允许清空已选内容',
    },
    disabled: {
      control: 'boolean',
      description: '是否禁用',
    },
    placeholder: {
      control: 'text',
      description: '占位文本',
    },
  },
}

export default meta
type Story = StoryObj<typeof Cascader>

const options = [
  {
    value: 'zhejiang',
    label: '浙江',
    children: [
      {
        value: 'hangzhou',
        label: '杭州',
        children: [
          { value: 'xihu', label: '西湖' },
          { value: 'xiasha', label: '下沙' },
        ],
      },
      {
        value: 'ningbo',
        label: '宁波',
        children: [
          { value: 'jiangbei', label: '江北' },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: '江苏',
    children: [
      {
        value: 'nanjing',
        label: '南京',
        children: [
          { value: 'zhonghuamen', label: '中华门' },
        ],
      },
    ],
  },
]

export const Default: Story = {
  args: {
    options,
    placeholder: '请选择',
  },
}

export const WithDefaultValue: Story = {
  args: {
    options,
    defaultValue: ['zhejiang', 'hangzhou', 'xihu'],
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
    defaultValue: ['zhejiang', 'hangzhou', 'xihu'],
  },
}

export const StatusError: Story = {
  args: {
    options,
    status: 'error',
  },
}

export const StatusWarning: Story = {
  args: {
    options,
    status: 'warning',
  },
}

export const CustomDisplay: Story = {
  args: {
    options,
    displayRender: (labels) => labels.join(' > '),
  },
}

export const Controlled: Story = {
  parameters: {
    docs: {
      description: {
        story: '受控模式示例，展示如何通过外部状态管理级联选择值。',
      },
    },
  },
  render: () => {
    const [value, setValue] = useState<string[]>([])
    return (
      <div className="space-y-4">
        <p>已选择：{value.join('/')}</p>
        <Cascader
          options={options}
          value={value}
          onChange={(v) => setValue(v)}
        />
      </div>
    )
  },
}

export const Searchable: Story = {
  parameters: {
    docs: {
      description: {
        story: '通过外部搜索框过滤级联选项，适用于选项较多时需要快速定位的场景。',
      },
    },
  },
  render: () => {
    const [search, setSearch] = useState('')
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState<string[]>([])

    const filterOptions = (opts: typeof options, keyword: string): typeof options => {
      if (!keyword) return opts
      return opts
        .map((opt) => {
          const childMatch = opt.children?.filter((child) =>
            child.label.toString().includes(keyword) ||
            child.children?.some((grand) => grand.label.toString().includes(keyword))
          )
          if (opt.label.toString().includes(keyword) || (childMatch && childMatch.length > 0)) {
            return { ...opt, children: childMatch }
          }
          return null
        })
        .filter(Boolean) as typeof options
    }

    const filtered = filterOptions(options, search)

    return (
      <div className="space-y-4 w-72">
        <Cascader
          options={filtered}
          value={value}
          onChange={(v) => { setValue(v); setOpen(false) }}
          open={open}
          onOpenChange={setOpen}
          placeholder="搜索并选择..."
        />
        <input
          type="text"
          value={search}
          onChange={(e) => { setSearch(e.target.value); setOpen(true) }}
          placeholder="输入关键词搜索选项"
          className="w-full rounded-md border border-border px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
        <p className="text-xs text-muted-foreground">在搜索框中输入关键词过滤级联选项</p>
      </div>
    )
  },
}

export const MultipleSelect: Story = {
  parameters: {
    docs: {
      description: {
        story: '实现多选级联功能，选择后添加到标签列表，适用于需要同时选择多个层级路径的场景。',
      },
    },
  },
  render: () => {
    const [selections, setSelections] = useState<string[][]>([])
    const addSelection = (value: string[]) => {
      if (value.length === 0) return
      setSelections((prev) => {
        const exists = prev.some((s) => s.join('/') === value.join('/'))
        if (exists) return prev.filter((s) => s.join('/') !== value.join('/'))
        return [...prev, value]
      })
    }
    return (
      <div className="space-y-4 w-72">
        <Cascader
          options={options}
          onChange={(v) => addSelection(v)}
          placeholder="选择后添加到列表"
        />
        <div className="flex flex-wrap gap-1">
          {selections.map((s) => (
            <span key={s.join('/')} className="inline-flex items-center gap-1 rounded bg-primary-50 px-2 py-0.5 text-xs text-primary-600">
              {s.join(' / ')}
              <button
                type="button"
                onClick={() => addSelection(s)}
                className="hover:text-danger-500"
              >
                ×
              </button>
            </span>
          ))}
        </div>
        {selections.length === 0 && (
          <p className="text-xs text-muted-foreground">选择选项后可多选，点击标签移除</p>
        )}
      </div>
    )
  },
}

/** 动态加载选项 */
export const DynamicLoading: Story = {
  parameters: {
    docs: {
      description: {
        story: '模拟异步加载级联数据，展开下一级时延迟加载，适用于数据量大或需要服务端分页的层级数据。',
      },
    },
  },
  render: () => {
    const [dynamicOptions, setDynamicOptions] = useState<CascaderOption[]>([
      { value: 'china', label: '中国' },
      { value: 'usa', label: '美国' },
    ])
    const [loading, setLoading] = useState(false)
    const [value, setValue] = useState<string[]>([])

    useEffect(() => {
      if (value.length === 1 && !dynamicOptions.find((o) => o.value === value[0])?.children) {
        setLoading(true)
        const timer = setTimeout(() => {
          setDynamicOptions((prev) =>
            prev.map((opt) => {
              if (opt.value === value[0]) {
                if (value[0] === 'china') {
                  return {
                    ...opt,
                    children: [
                      { value: 'beijing', label: '北京' },
                      { value: 'shanghai', label: '上海' },
                      { value: 'guangzhou', label: '广州' },
                    ],
                  }
                }
                return {
                  ...opt,
                  children: [
                    { value: 'newyork', label: '纽约' },
                    { value: 'losangeles', label: '洛杉矶' },
                  ],
                }
              }
              return opt
            })
          )
          setLoading(false)
        }, 1000)
        return () => clearTimeout(timer)
      }
    }, [value, dynamicOptions])

    useEffect(() => {
      if (value.length === 2) {
        const parent = dynamicOptions.find((o) => o.value === value[0])
        const child = parent?.children?.find((c) => c.value === value[1])
        if (parent?.children && !child?.children) {
          setLoading(true)
          const timer = setTimeout(() => {
            setDynamicOptions((prev) =>
              prev.map((opt) => {
                if (opt.value === value[0]) {
                  return {
                    ...opt,
                    children: opt.children?.map((child) => {
                      if (child.value === value[1]) {
                        if (value[1] === 'beijing') {
                          return { ...child, children: [{ value: 'chaoyang', label: '朝阳区' }, { value: 'haidian', label: '海淀区' }] }
                        }
                        if (value[1] === 'shanghai') {
                          return { ...child, children: [{ value: 'pudong', label: '浦东新区' }, { value: 'jingan', label: '静安区' }] }
                        }
                        return { ...child, children: [{ value: 'downtown', label: '市中心' }] }
                      }
                      return child
                    }),
                  }
                }
                return opt
              })
            )
            setLoading(false)
          }, 1000)
          return () => clearTimeout(timer)
        }
      }
    }, [value, dynamicOptions])

    return (
      <div className="space-y-4 w-72">
        <Cascader
          options={dynamicOptions}
          value={value}
          onChange={(v) => setValue(v)}
          placeholder="请选择（展开后动态加载）"
        />
        {loading && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-primary-500 border-t-transparent" />
            加载中...
          </div>
        )}
        <p className="text-xs text-muted-foreground">展开下一级时会模拟 1 秒网络延迟动态加载选项</p>
      </div>
    )
  },
}