import type { CSSProperties } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Splitter } from './index'

const meta: Meta<typeof Splitter> = {
  title: '布局/Splitter 分隔面板',
  component: Splitter,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: '用于分割页面区域，支持拖拽调整大小。',
      },
    },
  },
  argTypes: {
    layout: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
  },
}

export default meta

type Story = StoryObj<typeof Splitter>

const panelStyle: CSSProperties = {
  padding: 16,
  background: 'var(--color-gray-100, #f3f4f6)',
  height: '100%',
}

export const Basic: Story = {
  render: () => (
    <div className="h-[300px]">
      <Splitter>
        <Splitter.Panel>
          <div style={panelStyle}>Left Panel</div>
        </Splitter.Panel>
        <Splitter.Panel>
          <div style={panelStyle}>Right Panel</div>
        </Splitter.Panel>
      </Splitter>
    </div>
  ),
}

export const Vertical: Story = {
  render: () => (
    <div className="h-[300px]">
      <Splitter layout="vertical">
        <Splitter.Panel>
          <div style={panelStyle}>Top Panel</div>
        </Splitter.Panel>
        <Splitter.Panel>
          <div style={panelStyle}>Bottom Panel</div>
        </Splitter.Panel>
      </Splitter>
    </div>
  ),
}

export const ThreePanels: Story = {
  render: () => (
    <div className="h-[300px]">
      <Splitter>
        <Splitter.Panel>
          <div style={panelStyle}>Panel 1</div>
        </Splitter.Panel>
        <Splitter.Panel>
          <div style={panelStyle}>Panel 2</div>
        </Splitter.Panel>
        <Splitter.Panel>
          <div style={panelStyle}>Panel 3</div>
        </Splitter.Panel>
      </Splitter>
    </div>
  ),
}
