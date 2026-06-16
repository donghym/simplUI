import type { Meta, StoryObj } from '@storybook/react'
import { useState, useRef } from 'react'
import { Affix } from './index'
import { Button } from '../button/index'

const meta: Meta<typeof Affix> = {
  title: '导航/Affix 固钉',
  component: Affix,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: '将页面元素钉在可视范围。当内容区域比较长，需要滚动页面时，可将区域标题固定在可视范围，常用于侧边菜单或返回顶部按钮。',
      },
    },
  },
  argTypes: {
    offsetTop: {
      control: 'number',
      description: '距离窗口顶部达到指定偏移量后触发',
    },
    offsetBottom: {
      control: 'number',
      description: '距离窗口底部达到指定偏移量后触发',
    },
    onChange: {
      action: 'changed',
      description: '固定状态改变时触发',
    },
  },
}

export default meta
type Story = StoryObj<typeof Affix>

/** 滚动填充内容，用于产生足够的页面高度以触发 Affix */
const ScrollPadding = () => (
  <div className="mt-6">
    {Array.from({ length: 40 }).map((_, i) => (
      <div key={i} className="py-2 border-b border-neutral-100 text-gray-400">
        Line {i + 1}
      </div>
    ))}
  </div>
)

export const Basic: Story = {
  render: () => (
    <div className="h-[1000px] px-6">
      <div className="mb-4 px-4 py-3 bg-neutral-50 rounded-md border border-neutral-200 text-gray-600 text-[13px]">
        Scroll down to see the button fixed at top 10px.
      </div>
      <Affix offsetTop={10}>
        <Button variant="primary">Affix top</Button>
      </Affix>
      <ScrollPadding />
    </div>
  ),
}

export const OffsetBottom: Story = {
  render: () => (
    <div className="h-[1000px] px-6">
      <div className="mb-4 px-4 py-3 bg-neutral-50 rounded-md border border-neutral-200 text-gray-600 text-[13px]">
        Scroll down to see the button fixed at bottom 20px.
      </div>
      <ScrollPadding />
      <Affix offsetBottom={20}>
        <Button variant="primary">Affix bottom</Button>
      </Affix>
    </div>
  ),
}

export const Callback: Story = {
  render: () => {
    const [affixed, setAffixed] = useState(false)
    return (
      <div className="h-[1000px] px-6">
        <div className="mb-4 px-4 py-3 bg-neutral-50 rounded-md border border-neutral-200 text-gray-600 text-[13px]">
          <span>Current state: </span>
          <span style={{ color: affixed ? 'var(--color-danger, #ef4444)' : 'var(--color-success, #22c55e)', fontWeight: 600 }}>
            {affixed ? 'Affixed' : 'Not affixed'}
          </span>
          <span className="ml-2 text-xs text-gray-400">
            (scroll to trigger onChange)
          </span>
        </div>
        <Affix offsetTop={80} onChange={setAffixed}>
          <Button variant={affixed ? 'primary' : 'link'}>
            {affixed ? 'Affixed - release to scroll up' : 'Not affixed - scroll down'}
          </Button>
        </Affix>
        <ScrollPadding />
      </div>
    )
  },
}

export const CustomContainer: Story = {
  render: () => {
    const containerRef = useRef<HTMLDivElement>(null)
    return (
      <div className="px-6">
        <div className="mb-4 px-4 py-3 bg-neutral-50 rounded-md border border-neutral-200 text-gray-600 text-[13px]">
          Fixed at the top of container.
        </div>
        <div
          ref={containerRef}
          className="h-[300px] overflow-auto border border-neutral-300 rounded-md px-4 relative"
        >
          <div className="h-[600px]">
            <Affix target={() => containerRef.current} offsetTop={20}>
              <Button variant="primary">Fixed at top 20px of container</Button>
            </Affix>
            <div className="mt-15">
              {Array.from({ length: 20 }).map((_, i) => (
                <div key={i} className="py-2 border-b border-neutral-100 text-gray-400">
                  Line {i + 1}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  },
}

export const BothTopAndBottom: Story = {
  render: () => (
    <div className="h-[1200px] px-6">
      <div className="mb-4 px-4 py-3 bg-neutral-50 rounded-md border border-neutral-200 text-gray-600 text-[13px]">
        Both top and bottom affixes.
      </div>
      <Affix offsetTop={10}>
        <Button variant="primary" className="mb-2">Affix top</Button>
      </Affix>
      <ScrollPadding />
      <Affix offsetBottom={20}>
        <Button variant="primary">Affix bottom</Button>
      </Affix>
    </div>
  ),
}

export const CallbackLog: Story = {
  render: () => {
    const [log, setLog] = useState<string[]>([])
    const [count, setCount] = useState(0)

    const handleChange = (affixed: boolean) => {
      const now = new Date().toLocaleTimeString()
      setLog((prev) => [`[${now}] ${affixed ? 'Affixed' : 'Released'}`, ...prev].slice(0, 5))
    }

    return (
      <div className="h-[1000px] px-6">
        <Affix offsetTop={60} onChange={handleChange}>
          <Button
            variant="primary"
            onClick={() => setCount((c) => c + 1)}
          >
            Clicked {count} times
          </Button>
        </Affix>
        <div className="mt-6">
          <div className="mb-3 px-3 py-2 bg-success/10 border border-success rounded-md text-[13px] text-success">
            <strong>Callback log:</strong>
            {log.length === 0 ? (
              <span className="ml-2 text-gray-400">No events yet (scroll to trigger)</span>
            ) : (
              <ul className="mt-1 pl-4">
                {log.map((entry, i) => (
                  <li key={i}>{entry}</li>
                ))}
              </ul>
            )}
          </div>
          <ScrollPadding />
        </div>
      </div>
    )
  },
}

/** 滚动容器内的固钉 */
export const ScrollContainer: Story = {
  render: () => {
    const containerRef = useRef<HTMLDivElement>(null)
    return (
      <div className="px-6">
        <div className="mb-4 px-4 py-3 bg-neutral-50 rounded-md border border-neutral-200 text-gray-600 text-[13px]">
          Affix pinned inside a scrollable container (not the whole page).
        </div>
        <div
          ref={containerRef}
          className="h-[300px] overflow-y-auto border border-neutral-300 rounded-md px-4 relative"
        >
          <div className="h-[800px]">
            <Affix target={() => containerRef.current} offsetTop={10}>
              <Button variant="primary">Fixed in scroll container</Button>
            </Affix>
            <div className="mt-4">
              {Array.from({ length: 30 }).map((_, i) => (
                <div key={i} className="py-2 border-b border-neutral-100 text-gray-400">
                  Line {i + 1}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  },
}
