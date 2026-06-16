import type { CSSProperties } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Flex } from './index'

const meta: Meta<typeof Flex> = {
  title: '布局/Flex 弹性布局',
  component: Flex,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: '基于 CSS Flexbox 的容器组件，用于快速构建灵活的布局。',
      },
    },
  },
  argTypes: {
    vertical: { control: 'boolean' },
    justify: {
      control: 'select',
      options: ['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly'],
    },
    align: {
      control: 'select',
      options: ['flex-start', 'center', 'flex-end', 'stretch', 'baseline'],
    },
    wrap: {
      control: 'select',
      options: ['wrap', 'nowrap', 'wrap-reverse'],
    },
    gap: { control: 'number' },
  },
}

export default meta

type Story = StoryObj<typeof Flex>

const boxStyle: CSSProperties = {
  width: 80,
  height: 40,
  background: 'var(--color-primary-500, #3b82f6)',
  color: '#fff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 4,
}

export const Basic: Story = {
  args: {
    gap: 16,
    children: (
      <>
        <div style={boxStyle}>1</div>
        <div style={boxStyle}>2</div>
        <div style={boxStyle}>3</div>
      </>
    ),
  },
}

export const Vertical: Story = {
  args: {
    vertical: true,
    gap: 16,
    children: (
      <>
        <div style={boxStyle}>1</div>
        <div style={boxStyle}>2</div>
        <div style={boxStyle}>3</div>
      </>
    ),
  },
}

export const Justify: Story = {
  render: () => (
    <Flex vertical gap={24}>
      <Flex justify="flex-start" gap={8}>
        <div style={boxStyle}>1</div>
        <div style={boxStyle}>2</div>
      </Flex>
      <Flex justify="center" gap={8}>
        <div style={boxStyle}>1</div>
        <div style={boxStyle}>2</div>
      </Flex>
      <Flex justify="flex-end" gap={8}>
        <div style={boxStyle}>1</div>
        <div style={boxStyle}>2</div>
      </Flex>
      <Flex justify="space-between">
        <div style={boxStyle}>1</div>
        <div style={boxStyle}>2</div>
      </Flex>
    </Flex>
  ),
}

export const Align: Story = {
  render: () => (
    <Flex gap={24}>
      <Flex align="flex-start" style={{ height: 100 }} className="bg-gray-100">
        <div style={boxStyle}>start</div>
      </Flex>
      <Flex align="center" style={{ height: 100 }} className="bg-gray-100">
        <div style={boxStyle}>center</div>
      </Flex>
      <Flex align="flex-end" style={{ height: 100 }} className="bg-gray-100">
        <div style={boxStyle}>end</div>
      </Flex>
    </Flex>
  ),
}

export const Wrap: Story = {
  render: () => (
    <Flex wrap="wrap" gap={8} style={{ width: 200 }}>
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} style={{ ...boxStyle, width: 60 }}>
          {i + 1}
        </div>
      ))}
    </Flex>
  ),
}
