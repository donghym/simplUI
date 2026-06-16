import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { InputNumber } from './index'
import { DollarSign, Percent } from 'lucide-react'

const meta: Meta<typeof InputNumber> = {
  title: '数据录入/InputNumber 数字输入框',
  component: InputNumber,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: '数字输入框用于输入和编辑数值。适用于金额、数量、百分比等纯数字场景，支持步进、精度控制、范围限制和格式化展示。',
      },
    },
  },
  argTypes: {
    status: { control: 'select', options: ['error', 'warning'], description: '校验状态，error 为错误，warning 为警告' },
  },
}

export default meta
type Story = StoryObj<typeof InputNumber>

export const Basic: Story = {
  args: { placeholder: '请输入数字' },
}

export const WithDefault: Story = {
  args: { defaultValue: 42 },
}

export const WithStep: Story = {
  args: { defaultValue: 0, step: 5 },
}

export const MinMax: Story = {
  args: { defaultValue: 50, min: 0, max: 100, step: 1 },
}

export const WithPrecision: Story = {
  args: { defaultValue: 3.14159, precision: 2 },
}

export const Controlled: Story = {
  parameters: {
    docs: {
      description: {
        story: '受控模式示例，展示如何通过外部状态管理数值，并结合最小值和最大值限制。',
      },
    },
  },
  render: () => {
    const [val, setVal] = useState<number | null>(10)
    return (
      <div className="flex flex-col gap-2 w-72">
        <InputNumber value={val} onChange={setVal} min={0} max={100} />
        <p className="text-sm text-gray-500">当前值：{val}</p>
      </div>
    )
  },
}

export const ErrorStatus: Story = {
  args: { status: 'error', defaultValue: 5 },
}

export const WarningStatus: Story = {
  args: { status: 'warning', defaultValue: 5 },
}

export const AllowClear: Story = {
  args: { defaultValue: 100, allowClear: true },
}

export const WithPrefix: Story = {
  args: { prefix: <DollarSign className="h-4 w-4" />, defaultValue: 99 },
}

export const WithSuffix: Story = {
  args: { suffix: <Percent className="h-4 w-4" />, defaultValue: 25, precision: 0 },
}

export const Disabled: Story = {
  args: { disabled: true, defaultValue: 7 },
}

/** 格式化千分位 */
export const FormatterDemo: Story = {
  render: () => {
    const [value, setValue] = useState<number | null>(1000000)

    const formatWithThousand = (num: number | null): string => {
      if (num === null) return ''
      return num.toLocaleString('en-US')
    }

    const parseFormatted = (str: string): number | null => {
      const cleaned = str.replace(/,/g, '')
      const parsed = Number(cleaned)
      return isNaN(parsed) ? null : parsed
    }

    const [displayValue, setDisplayValue] = useState(() => formatWithThousand(value))

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const raw = e.target.value
      setDisplayValue(raw)
      const parsed = parseFormatted(raw)
      if (parsed !== null) {
        setValue(parsed)
      }
    }

    const handleBlur = () => {
      if (value !== null) {
        setDisplayValue(formatWithThousand(value))
      }
    }

    return (
      <div className="space-y-4 w-72">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">金额（千分位格式化）</label>
          <input
            type="text"
            inputMode="numeric"
            value={displayValue}
            onChange={handleInputChange}
            onBlur={handleBlur}
            placeholder="请输入金额"
            className="flex h-[40px] w-full rounded-md border border-input bg-white px-3 text-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-primary-500"
          />
        </div>
        <p className="text-sm text-gray-500">原始值：{value}</p>
        <p className="text-sm text-gray-500">格式化：{formatWithThousand(value)}</p>
      </div>
    )
  },
}

/** 尺寸变体 */
export const SizeVariants: Story = {
  parameters: {
    docs: {
      description: {
        story: '展示小、默认、大三种尺寸的数字输入框，适应不同布局密度的需求。',
      },
    },
  },
  render: () => (
    <div className="space-y-4 w-72">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">小尺寸</label>
        <InputNumber defaultValue={10} className="h-[28px] text-xs px-2" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">默认尺寸</label>
        <InputNumber defaultValue={10} />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">大尺寸</label>
        <InputNumber defaultValue={10} className="h-[48px] text-base px-4" />
      </div>
    </div>
  ),
}
