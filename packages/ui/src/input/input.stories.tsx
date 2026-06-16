import type { Meta, StoryObj } from '@storybook/react'
import { useState, useRef } from 'react'
import { Input } from './index'
import { Search, Mail, Lock, Eye, EyeOff } from 'lucide-react'
import { Button } from '../button/index'

const meta: Meta<typeof Input> = {
  title: '数据录入/Input 输入框',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: '输入框用于接收用户的文本输入。\n\n- 表单填写：用于收集用户信息，如邮箱、密码、地址等。\n- 搜索过滤：配合前缀图标实现搜索框，快速定位内容。\n- 状态反馈：通过 error / warning 状态提示校验结果。\n- 受控场景：需要实时获取输入值或进行联动校验时使用。',
      },
    },
  },
  argTypes: {
    status: {
      control: 'select',
      options: ['error', 'warning'],
      description: '输入框状态，error 时边框 danger 色，warning 时边框 warning 色',
    },
    allowClear: {
      control: 'boolean',
      description: '是否显示清空按钮',
    },
    showCount: {
      control: 'boolean',
      description: '是否显示字数统计，需配合 maxLength 使用',
    },
    disabled: {
      control: 'boolean',
      description: '是否禁用',
    },
    prefix: {
      control: false,
      description: '前缀内容，插入输入框左侧',
    },
    suffix: {
      control: false,
      description: '后缀内容，插入输入框右侧',
    },
  },
}

export default meta
type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: {
    placeholder: '请输入内容',
  },
}

export const WithPrefix: Story = {
  args: {
    prefix: <Mail className="h-4 w-4" />,
    placeholder: '请输入邮箱',
  },
}

export const WithSuffix: Story = {
  args: {
    suffix: <Search className="h-4 w-4" />,
    placeholder: '搜索...',
  },
}

export const WithPrefixAndSuffix: Story = {
  args: {
    prefix: <Lock className="h-4 w-4" />,
    suffix: <Search className="h-4 w-4" />,
    placeholder: '请输入密码',
  },
}

export const AllowClear: Story = {
  args: {
    allowClear: true,
    placeholder: '可清空的输入框',
    defaultValue: '一些文本',
  },
}

export const ShowCount: Story = {
  args: {
    showCount: true,
    maxLength: 50,
    placeholder: '最多 50 个字符',
  },
}

export const StatusError: Story = {
  args: {
    status: 'error',
    placeholder: '错误状态',
    defaultValue: '无效的值',
  },
}

export const StatusWarning: Story = {
  args: {
    status: 'warning',
    placeholder: '警告状态',
    defaultValue: '请检查此值',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: '禁用状态',
    defaultValue: '不可编辑',
  },
}

export const Password: Story = {
  parameters: {
    docs: {
      description: {
        story: '此示例展示了密码输入框的实现方式。适用于登录注册、安全设置等需要隐藏输入内容的场景。',
      },
    },
  },
  render: () => {
    const PasswordInput = () => {
      const [visible, setVisible] = useState(false)
      return (
        <Input
          type={visible ? 'text' : 'password'}
          placeholder="请输入密码"
          suffix={
            <button
              type="button"
              onClick={() => setVisible(!visible)}
              className="text-gray-400 hover:text-gray-600"
              aria-label={visible ? '隐藏密码' : '显示密码'}
            >
              {visible ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          }
        />
      )
    }
    return <PasswordInput />
  },
}

export const SearchInput: Story = {
  render: () => (
    <Input
      placeholder="搜索关键词"
      prefix={<Search className="h-4 w-4" />}
      allowClear
    />
  ),
}

export const CombinedFeatures: Story = {
  parameters: {
    docs: {
      description: {
        story: '此示例展示了输入框多种特性组合的使用场景。适用于复杂表单中需要同时展示状态、清空和计数的情况。',
      },
    },
  },
  render: () => (
    <div className="flex flex-col gap-4 max-w-sm">
      <Input
        prefix={<Mail className="h-4 w-4" />}
        status="error"
        allowClear
        placeholder="邮箱（错误状态 + 可清空）"
      />
      <Input
        prefix={<Lock className="h-4 w-4" />}
        status="warning"
        showCount
        maxLength={20}
        placeholder="密码（警告状态 + 计数）"
      />
    </div>
  ),
}

export const ControlledInput: Story = {
  parameters: {
    docs: {
      description: {
        story: '此示例展示了受控输入框的使用方式。适用于需要实时获取输入值、进行联动校验或数据处理的场景。',
      },
    },
  },
  render: () => {
    const [value, setValue] = useState('')
    return (
      <div className="flex flex-col gap-2 max-w-sm">
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="受控输入框"
          allowClear
        />
        <p className="text-sm text-gray-500">当前值：{value || '(空)'}</p>
      </div>
    )
  },
}

export const SizeVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4 max-w-sm">
      <div>
        <label className="mb-1 block text-xs text-muted-foreground">小号 (h-7)</label>
        <Input placeholder="小号输入框" className="h-7 text-xs" />
      </div>
      <div>
        <label className="mb-1 block text-xs text-muted-foreground">默认 (h-8)</label>
        <Input placeholder="默认输入框" />
      </div>
      <div>
        <label className="mb-1 block text-xs text-muted-foreground">大号 (h-10)</label>
        <Input placeholder="大号输入框" className="h-10 text-base" />
      </div>
    </div>
  ),
}

export const FocusBehavior: Story = {
  parameters: {
    docs: {
      description: {
        story: '通过 ref 可以编程式控制输入框的聚焦。适用于表单校验失败自动聚焦、快捷操作等场景。',
      },
    },
  },
  render: () => {
    const FocusDemo = () => {
      const inputRef = useRef<HTMLInputElement>(null)
      return (
        <div className="flex flex-col gap-3 max-w-sm">
          <Input ref={inputRef} placeholder="点击按钮聚焦此输入框" />
          <Button onClick={() => inputRef.current?.focus()}>聚焦输入框</Button>
        </div>
      )
    }
    return <FocusDemo />
  },
}
