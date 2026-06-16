import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { Button } from './index'
import { Mail, Search, ArrowRight } from 'lucide-react'

const meta: Meta<typeof Button> = {
  title: '通用/Button 按钮',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: '按钮用于触发一个即时操作或事件。\n\n- 主按钮：用于主行动点，一个操作区域只能有一个主按钮。\n- 默认按钮：用于没有主次之分的一组行动点。\n- 虚线按钮：常用于添加、导入等次要操作。\n- 文字按钮：用于最次要的操作，或与其他文本混排。\n- 链接按钮：用于页面跳转或外部链接。',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'dashed', 'link', 'text'],
      description: '按钮变体，决定视觉风格',
    },
    loading: {
      control: 'boolean',
      description: '加载状态，true 时显示 spinner、禁止交互',
    },
    disabled: {
      control: 'boolean',
      description: '禁用状态，true 时不可点击',
    },
    block: {
      control: 'boolean',
      description: '撑满父容器宽度',
    },
    icon: {
      control: false,
      description: '前置/后置图标，使用 lucide-react 图标',
    },
    iconPosition: {
      control: 'radio',
      options: ['left', 'right'],
      description: '图标位置，默认 left',
    },
    asChild: {
      control: 'boolean',
      description: '使用 Radix Slot 透传 props 到子元素',
    },
    htmlType: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
      description: '原生 button type 属性，默认 button',
    },
    href: {
      control: 'text',
      description: '提供时渲染为 <a> 标签',
    },
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    children: '按钮',
  },
}

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: '主要按钮',
  },
}

export const Dashed: Story = {
  args: {
    variant: 'dashed',
    children: '虚线按钮',
  },
}

export const Text: Story = {
  args: {
    variant: 'text',
    children: '文字按钮',
  },
}

export const Link: Story = {
  args: {
    variant: 'link',
    children: '链接按钮',
  },
}

export const WithIcon: Story = {
  parameters: {
    docs: {
      description: {
        story: '此示例展示了带图标按钮的使用场景。适用于需要图文结合引导用户操作的场景，如社交登录、功能入口等。',
      },
    },
  },
  args: {
    variant: 'primary',
    icon: <Mail size={16} />,
    children: '邮箱登录',
  },
}

export const Loading: Story = {
  args: {
    loading: true,
    children: '请稍候',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    children: '禁用按钮',
  },
}

export const Block: Story = {
  args: {
    block: true,
    children: '全宽按钮',
  },
}

export const IconPosition: Story = {
  parameters: {
    docs: {
      description: {
        story: '图标位置用于调整图标在按钮中的左右分布。适用于需要明确操作流向的场景，如搜索（左图标）和下一步（右图标）。',
      },
    },
  },
  render: () => (
    <div className="flex gap-4 items-center">
      <Button variant="primary" icon={<Search size={16} />} iconPosition="left">
        搜索
      </Button>
      <Button variant="primary" icon={<ArrowRight size={16} />} iconPosition="right">
        下一步
      </Button>
    </div>
  ),
}

export const Href: Story = {
  args: {
    href: 'https://example.com',
    target: '_blank',
    children: '外部链接',
  },
}

export const AsChild: Story = {
  parameters: {
    docs: {
      description: {
        story: '使用 asChild 可以将按钮样式透传到子元素。适用于需要保持按钮外观但底层渲染为链接或其他元素的场景。',
      },
    },
  },
  render: () => (
    <Button asChild>
      <a href="https://example.com" target="_blank" rel="noopener noreferrer">
        Slot 透传链接
      </a>
    </Button>
  ),
}

export const HtmlType: Story = {
  parameters: {
    docs: {
      description: {
        story: '原生按钮类型用于控制表单内的默认行为。submit 用于提交表单，reset 用于重置表单，button 为普通按钮。',
      },
    },
  },
  render: () => (
    <div className="flex gap-4 items-center">
      <Button htmlType="button">button</Button>
      <Button htmlType="submit" variant="primary">
        submit
      </Button>
      <Button htmlType="reset">reset</Button>
    </div>
  ),
}

export const LoadingVariants: Story = {
  parameters: {
    docs: {
      description: {
        story: '此示例展示了按钮加载状态的使用场景。适用于异步操作提交、数据加载等需要防止重复点击的情况。',
      },
    },
  },
  render: () => (
    <div className="flex flex-wrap gap-4 items-center">
      <Button loading>默认加载</Button>
      <Button loading variant="primary">
        主要加载
      </Button>
      <Button loading variant="dashed">
        虚线加载
      </Button>
      <Button loading variant="link">
        链接加载
      </Button>
      <Button loading variant="text">
        文字加载
      </Button>
    </div>
  ),
}

export const ButtonGroup: Story = {
  parameters: {
    docs: {
      description: {
        story: '此示例展示了按钮组合的使用场景。适用于对话框底部操作、表单提交等需要主次操作并列的情况。',
      },
    },
  },
  render: () => (
    <div className="flex gap-3 items-center">
      <Button variant="primary" onClick={fn()}>
        确认提交
      </Button>
      <Button onClick={fn()}>取消</Button>
    </div>
  ),
}

export const AllVariants: Story = {
  parameters: {
    docs: {
      description: {
        story: '此示例展示了所有按钮变体的并排对比。便于快速查看不同风格在相同场景下的视觉效果。',
      },
    },
  },
  render: () => (
    <div className="flex flex-wrap gap-4 items-center">
      <Button variant="default">默认</Button>
      <Button variant="primary">主要</Button>
      <Button variant="dashed">虚线</Button>
      <Button variant="text">文字</Button>
      <Button variant="link">链接</Button>
    </div>
  ),
}
