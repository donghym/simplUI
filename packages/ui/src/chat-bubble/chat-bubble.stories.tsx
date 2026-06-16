import type { Meta, StoryObj } from '@storybook/react'
import { ChatBubble } from './index'

const meta: Meta<typeof ChatBubble> = {
  title: 'AI 对话/ChatBubble 消息气泡',
  component: ChatBubble,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    role: {
      control: 'select',
      options: ['user', 'assistant', 'system'],
      description: '消息角色，决定气泡样式和位置',
    },
    loading: {
      control: 'boolean',
      description: '加载中状态，assistant 角色时显示打字动画',
    },
    markdown: {
      control: 'boolean',
      description: '是否渲染 markdown 格式',
    },
    timestamp: {
      control: 'text',
      description: '时间戳文本',
    },
  },
}

export default meta
type Story = StoryObj<typeof ChatBubble>

export const UserMessage: Story = {
  args: {
    role: 'user',
    content: '你好，请帮我写一段排序算法。',
    timestamp: '14:30',
  },
}

export const AssistantMessage: Story = {
  args: {
    role: 'assistant',
    content: '好的，这是一个快速排序算法的实现：\n```python\ndef quicksort(arr):\n    if len(arr) <= 1:\n        return arr\n    pivot = arr[0]\n    left = [x for x in arr[1:] if x <= pivot]\n    right = [x for x in arr[1:] if x > pivot]\n    return quicksort(left) + [pivot] + quicksort(right)\n```',
    markdown: true,
    timestamp: '14:31',
  },
}

export const SystemMessage: Story = {
  args: {
    role: 'system',
    content: '对话已切换为代码助手模式',
  },
}

export const Loading: Story = {
  args: {
    role: 'assistant',
    content: '',
    loading: true,
  },
}

export const MarkdownRender: Story = {
  args: {
    role: 'assistant',
    content: '这是一段 **加粗文字** 和 `行内代码`。\n\n- 列表项一\n- 列表项二\n- 列表项三',
    markdown: true,
  },
}

export const Conversation: Story = {
  render: () => (
    <div className="flex flex-col gap-4 max-w-2xl">
      <ChatBubble role="user" content="解释一下什么是闭包？" timestamp="10:00" />
      <ChatBubble
        role="assistant"
        content="闭包是指一个函数可以**记住并访问**其词法作用域中的变量，即使该函数在其词法作用域之外执行。\n\n例如：\n```javascript\nfunction outer() {\n  let count = 0;\n  return function inner() {\n    count++;\n    return count;\n  };\n}\n```"
        markdown
        timestamp="10:01"
      />
      <ChatBubble role="user" content="能再举个例子吗？" timestamp="10:02" />
      <ChatBubble role="assistant" content="" loading />
    </div>
  ),
}
