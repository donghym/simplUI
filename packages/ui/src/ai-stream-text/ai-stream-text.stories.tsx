import type { Meta, StoryObj } from '@storybook/react'
import { useState, useEffect, useCallback } from 'react'
import { AIStreamText } from './index'

const meta: Meta<typeof AIStreamText> = {
  title: 'AI 对话/AIStreamText 流式文本',
  component: AIStreamText,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    speed: {
      control: 'number',
      description: '打字速度毫秒/字符，默认 30',
    },
    streaming: {
      control: 'boolean',
      description: '是否正在流式输出',
    },
    showCursor: {
      control: 'boolean',
      description: '是否显示光标，默认 true',
    },
  },
}

export default meta
type Story = StoryObj<typeof AIStreamText>

export const Static: Story = {
  args: {
    text: '这是一段静态文本，不会逐字输出。',
    streaming: false,
  },
}

export const Streaming: Story = {
  args: {
    text: '这是一段流式输出的文本，会逐字显示，模拟 AI 生成效果。',
    streaming: true,
    speed: 50,
  },
}

export const FastSpeed: Story = {
  args: {
    text: '快速打字效果，每字符 10 毫秒。',
    streaming: true,
    speed: 10,
  },
}

export const NoCursor: Story = {
  args: {
    text: '没有光标的流式文本。',
    streaming: true,
    speed: 30,
    showCursor: false,
  },
}

export const SimulatedStream: Story = {
  render: () => {
    const fullText = '你好！我是一个 AI 助手。我可以帮你回答问题、编写代码、分析数据等。请问有什么可以帮你的吗？'
    const [text, setText] = useState('')
    const [streaming, setStreaming] = useState(true)

    useEffect(() => {
      if (!streaming) return
      let index = 0
      const timer = setInterval(() => {
        index++
        setText(fullText.slice(0, index))
        if (index >= fullText.length) {
          clearInterval(timer)
          setStreaming(false)
        }
      }, 80)
      return () => clearInterval(timer)
    }, [streaming])

    const handleRestart = useCallback(() => {
      setText('')
      setStreaming(true)
    }, [])

    return (
      <div className="max-w-xl">
        <AIStreamText text={text} streaming={streaming} speed={20} />
        {!streaming && (
          <button
            type="button"
            onClick={handleRestart}
            className="mt-4 rounded-md bg-primary px-3 py-1.5 text-sm text-primary-foreground"
          >
            重新播放
          </button>
        )}
      </div>
    )
  },
}
