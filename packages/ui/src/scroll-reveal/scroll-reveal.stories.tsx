import type { Meta, StoryObj } from '@storybook/react'
import { ScrollReveal } from './index'

const meta: Meta<typeof ScrollReveal> = {
  title: '动效/ScrollReveal 滚动显隐',
  component: ScrollReveal,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    direction: {
      control: 'select',
      options: ['up', 'down', 'left', 'right', 'none'],
      description: '进入动画方向',
    },
    duration: {
      control: 'number',
      description: '动画持续时间毫秒',
    },
    delay: {
      control: 'number',
      description: '动画延迟毫秒',
    },
    threshold: {
      control: { type: 'range', min: 0, max: 1, step: 0.1 },
      description: '触发阈值',
    },
    once: {
      control: 'boolean',
      description: '是否只触发一次',
    },
    distance: {
      control: 'number',
      description: '位移距离像素',
    },
  },
}

export default meta
type Story = StoryObj<typeof ScrollReveal>

export const Default: Story = {
  render: () => (
    <div className="space-y-8">
      <div className="h-[100vh] flex items-center justify-center text-muted-foreground">
        向下滚动查看动画效果
      </div>
      <ScrollReveal direction="up">
        <div className="rounded-lg border border-border bg-background p-6 text-center">
          从下方滑入的内容
        </div>
      </ScrollReveal>
    </div>
  ),
}

export const Directions: Story = {
  render: () => (
    <div className="space-y-8">
      <div className="h-[100vh] flex items-center justify-center text-muted-foreground">
        向下滚动查看不同方向
      </div>
      <div className="grid grid-cols-2 gap-4">
        <ScrollReveal direction="up">
          <div className="rounded-lg border border-border bg-background p-4 text-center">从下向上</div>
        </ScrollReveal>
        <ScrollReveal direction="down">
          <div className="rounded-lg border border-border bg-background p-4 text-center">从上向下</div>
        </ScrollReveal>
        <ScrollReveal direction="left">
          <div className="rounded-lg border border-border bg-background p-4 text-center">从右向左</div>
        </ScrollReveal>
        <ScrollReveal direction="right">
          <div className="rounded-lg border border-border bg-background p-4 text-center">从左向右</div>
        </ScrollReveal>
      </div>
    </div>
  ),
}

export const Staggered: Story = {
  render: () => (
    <div className="space-y-8">
      <div className="h-[100vh] flex items-center justify-center text-muted-foreground">
        向下滚动查看逐帧出现
      </div>
      {[0, 100, 200, 300, 400].map((delay) => (
        <ScrollReveal key={delay} direction="up" delay={delay}>
          <div className="rounded-lg border border-border bg-background p-4 text-center">
            延迟 {delay}ms 出现
          </div>
        </ScrollReveal>
      ))}
    </div>
  ),
}

export const Repeatable: Story = {
  render: () => (
    <div className="space-y-8">
      <div className="h-[100vh] flex items-center justify-center text-muted-foreground">
        滚动出视口再回来会重新触发
      </div>
      <ScrollReveal direction="up" once={false}>
        <div className="rounded-lg border border-primary-500 bg-primary-50 p-6 text-center text-primary-700">
          反复触发的动画
        </div>
      </ScrollReveal>
      <div className="h-[100vh]" />
    </div>
  ),
}
