import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Select } from './index'
import { Search } from 'lucide-react'
import { cn } from '../lib/utils'

const FRUITS = [
  { label: '苹果', value: 'apple' },
  { label: '香蕉', value: 'banana' },
  { label: '樱桃', value: 'cherry' },
  { label: '枣', value: 'date' },
  { label: '接骨木', value: 'elderberry' },
  { label: '无花果', value: 'fig' },
  { label: '葡萄', value: 'grape', disabled: true },
]

const CenterDecorator = (Story: React.FC) => (
  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', minHeight: '500px', width: '100%', paddingTop: '40px' }}>
    <Story />
  </div>
)

const meta: Meta<typeof Select> = {
  title: '数据录入/Select 选择器',
  component: Select,
  tags: ['autodocs'],
  decorators: [CenterDecorator],
  parameters: {
    layout: 'padded',
    actions: {
      argTypesRegex: '^on.*',
    },
    docs: {
      description: {
        component: '选择器用于从一组预设选项中进行选择。适用于筛选条件、表单填写、状态切换等场景，支持单选、多选、搜索和分组。',
      },
    },
  },
  argTypes: {
    componentSize: {
      control: 'select',
      options: ['large', 'default', 'small'],
      description: '选择器尺寸',
    },
    status: {
      control: 'select',
      options: ['error', 'warning'],
      description: '状态变体',
    },
    allowClear: {
      control: 'boolean',
      description: '是否显示清空按钮',
    },
    disabled: {
      control: 'boolean',
      description: '是否禁用',
    },
  },
}

export default meta
type Story = StoryObj<typeof Select>

/** 基础用法 */
export const Basic: Story = {
  args: {
    options: FRUITS,
    placeholder: '请选择水果',
  },
}

/** 大尺寸 */
export const Large: Story = {
  args: {
    componentSize: 'large',
    options: FRUITS,
    placeholder: '请选择水果',
  },
}

/** 小尺寸 */
export const Small: Story = {
  args: {
    componentSize: 'small',
    options: FRUITS,
    placeholder: '请选择水果',
  },
}

/** 带默认值 */
export const WithDefault: Story = {
  args: {
    options: FRUITS,
    defaultValue: 'banana',
  },
}

/** 错误状态 */
export const ErrorStatus: Story = {
  args: {
    options: FRUITS,
    status: 'error',
    placeholder: '必填项',
  },
}

/** 警告状态 */
export const WarningStatus: Story = {
  args: {
    options: FRUITS,
    status: 'warning',
    placeholder: '请核对',
  },
}

/** 可清空 */
export const AllowClear: Story = {
  args: {
    options: FRUITS,
    defaultValue: 'cherry',
    allowClear: true,
  },
}

/** 带前缀图标 */
export const WithPrefix: Story = {
  args: {
    options: FRUITS,
    prefix: <Search className="h-4 w-4" />,
    placeholder: '搜索水果',
  },
}

/** 禁用状态 */
export const Disabled: Story = {
  args: {
    options: FRUITS,
    disabled: true,
    defaultValue: 'apple',
  },
}

/** 各尺寸对比 */
export const AllSizes: Story = {
  parameters: {
    docs: {
      description: {
        story: '并排展示大、默认、小三种尺寸的选择器，便于根据布局空间选择合适的组件大小。',
      },
    },
  },
  render: () => {
    const sizes = ['large', 'default', 'small'] as const
    const sizeLabels: Record<string, string> = { large: '大', default: '默认', small: '小' }
    return (
      <div className="space-y-6 w-72">
        {sizes.map((componentSize) => (
          <div key={componentSize}>
            <label className="block text-sm font-medium text-gray-700 mb-1 capitalize">
              {sizeLabels[componentSize]} 尺寸
            </label>
            <Select
              componentSize={componentSize}
              options={FRUITS}
              placeholder="请选择水果"
              allowClear
            />
          </div>
        ))}
      </div>
    )
  },
}

/** 可搜索 */
export const Searchable: Story = {
  parameters: {
    docs: {
      description: {
        story: '结合外部输入框实现选项过滤，适用于选项较多时需要快速定位目标项的场景。',
      },
    },
  },
  render: () => {
    const [searchText, setSearchText] = useState('')
    const filtered = FRUITS.filter((item) =>
      item.label.includes(searchText) || item.value.toLowerCase().includes(searchText.toLowerCase())
    )
    return (
      <div className="space-y-2 w-72">
        <input
          className="w-full h-8 px-3 rounded-md border border-border bg-background text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
          placeholder="输入关键词过滤..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <Select
          options={filtered}
          placeholder="请选择水果"
          prefix={<Search className="h-4 w-4" />}
          allowClear
        />
      </div>
    )
  },
}

/** 多选模式 */
export const Multiple: Story = {
  parameters: {
    docs: {
      description: {
        story: '自定义实现多选标签展示，支持添加和移除选项，适用于需要同时选择多个值的场景。',
      },
    },
  },
  render: () => {
    const [selectedValues, setSelectedValues] = useState<string[]>([])
    const [open, setOpen] = useState(false)

    const handleToggle = (value: string) => {
      setSelectedValues((prev) =>
        prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
      )
    }

    const handleRemove = (value: string) => {
      setSelectedValues((prev) => prev.filter((v) => v !== value))
    }

    return (
      <div className="w-72">
        <div
          className="flex flex-wrap items-center gap-1 min-h-[36px] px-3 py-1.5 rounded-md border border-border bg-background cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {selectedValues.length === 0 && (
            <span className="text-muted-foreground text-sm">请选择水果</span>
          )}
          {selectedValues.map((val) => {
            const opt = FRUITS.find((f) => f.value === val)
            return (
              <span
                key={val}
                className="inline-flex items-center gap-1 px-2 py-0.5 text-xs rounded bg-primary-100 text-primary-700"
              >
                {opt?.label}
                <button
                  type="button"
                  className="text-primary-500 hover:text-primary-700"
                  onClick={(e) => {
                    e.stopPropagation()
                    handleRemove(val)
                  }}
                >
                  ×
                </button>
              </span>
            )
          })}
        </div>
        {open && (
          <ul className="mt-1 w-full rounded-md border border-border bg-white shadow-md max-h-60 overflow-auto z-10">
            {FRUITS.map((opt) => (
              <li
                key={opt.value}
                className={cn('px-3 py-2 text-sm cursor-pointer hover:bg-muted',
                  selectedValues.includes(opt.value) ? 'bg-primary-50 text-primary-700' : '',
                  opt.disabled ? 'opacity-50 pointer-events-none' : '')}
                onClick={() => {
                  if (!opt.disabled) handleToggle(opt.value)
                }}
              >
                {opt.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    )
  },
}

/** 分组选项 */
export const GroupedOptions: Story = {
  parameters: {
    docs: {
      description: {
        story: '通过禁用项模拟分组标题，实现选项分组展示，适用于需要对选项进行分类组织的场景。',
      },
    },
  },
  render: () => {
    const groups = [
      {
        label: '水果',
        options: [
          { label: '苹果', value: 'apple' },
          { label: '香蕉', value: 'banana' },
          { label: '樱桃', value: 'cherry' },
        ],
      },
      {
        label: '蔬菜',
        options: [
          { label: '胡萝卜', value: 'carrot' },
          { label: '西兰花', value: 'broccoli' },
          { label: '菠菜', value: 'spinach' },
        ],
      },
      {
        label: '饮品',
        options: [
          { label: '咖啡', value: 'coffee' },
          { label: '茶', value: 'tea' },
          { label: '果汁', value: 'juice' },
        ],
      },
    ]

    const flatOptions = groups.flatMap((group) => [
      { label: `── ${group.label} ──`, value: `__group_${group.label}`, disabled: true },
      ...group.options,
    ])

    const [selected, setSelected] = useState('')

    return (
      <div className="w-72">
        <Select
          options={flatOptions}
          value={selected}
          onChange={setSelected}
          placeholder="请选择"
          allowClear
        />
      </div>
    )
  },
}
