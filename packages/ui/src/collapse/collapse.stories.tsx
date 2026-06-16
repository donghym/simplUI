import type { Meta, StoryObj } from '@storybook/react'
import { Collapse, CollapsePanel } from './index'

const meta: Meta<typeof Collapse> = {
  title: '数据展示/Collapse 折叠面板',
  component: Collapse,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Collapse 折叠面板组件用于将内容区域折叠或展开，节省页面空间并提升信息层级。\n\n- 用于 FAQ 常见问题、帮助文档的展开收起\n- 用于表单分组、设置项的折叠展示\n- 用于长内容的分块展示，让用户按需查看\n- 支持手风琴模式，同时仅展开一个面板',
      },
    },
  },
  argTypes: {
    accordion: { control: 'boolean' },
    bordered: { control: 'boolean' },
  },
}

export default meta

type Story = StoryObj<typeof Collapse>

export const Basic: Story = {
  parameters: {
    docs: {
      description: {
        story: '基础折叠面板，可同时展开多个面板，适用于内容分组展示场景。',
      },
    },
  },
  render: () => (
    <Collapse>
      <CollapsePanel header="This is panel header 1" panelKey="1">
        <p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>
      </CollapsePanel>
      <CollapsePanel header="This is panel header 2" panelKey="2">
        <p>This is panel content 2</p>
      </CollapsePanel>
      <CollapsePanel header="This is panel header 3" panelKey="3">
        <p>This is panel content 3</p>
      </CollapsePanel>
    </Collapse>
  ),
}

export const Accordion: Story = {
  parameters: {
    docs: {
      description: {
        story: '手风琴模式，同时只能展开一个面板，适用于需要互斥展开的内容分组场景。',
      },
    },
  },
  render: () => (
    <Collapse accordion>
      <CollapsePanel header="This is panel header 1" panelKey="1">
        <p>Content 1</p>
      </CollapsePanel>
      <CollapsePanel header="This is panel header 2" panelKey="2">
        <p>Content 2</p>
      </CollapsePanel>
      <CollapsePanel header="This is panel header 3" panelKey="3">
        <p>Content 3</p>
      </CollapsePanel>
    </Collapse>
  ),
}

export const NoBorder: Story = {
  parameters: {
    docs: {
      description: {
        story: '无边框样式，面板之间无分割线，适用于极简风格或嵌入卡片内的场景。',
      },
    },
  },
  render: () => (
    <Collapse bordered={false}>
      <CollapsePanel header="面板标题 1" panelKey="1">
        <p>内容 1</p>
      </CollapsePanel>
      <CollapsePanel header="面板标题 2" panelKey="2">
        <p>内容 2</p>
      </CollapsePanel>
    </Collapse>
  ),
}

export const DefaultActive: Story = {
  parameters: {
    docs: {
      description: {
        story: '默认展开指定面板，通过 defaultActiveKey 控制初始展开状态，适用于需要默认展示重点内容的场景。',
      },
    },
  },
  render: () => (
    <Collapse defaultActiveKey={['1', '2']}>
      <CollapsePanel header="面板标题 1" panelKey="1">
        <p>内容 1</p>
      </CollapsePanel>
      <CollapsePanel header="面板标题 2" panelKey="2">
        <p>内容 2</p>
      </CollapsePanel>
      <CollapsePanel header="面板标题 3" panelKey="3">
        <p>内容 3</p>
      </CollapsePanel>
    </Collapse>
  ),
}

export const Disabled: Story = {
  parameters: {
    docs: {
      description: {
        story: '禁用指定面板，用户无法展开被禁用的面板，适用于权限控制或未完成项的展示。',
      },
    },
  },
  render: () => (
    <Collapse>
      <CollapsePanel header="This is panel header 1" panelKey="1">
        <p>Content 1</p>
      </CollapsePanel>
      <CollapsePanel header="This is panel header 2" panelKey="2" disabled>
        <p>Content 2 (disabled)</p>
      </CollapsePanel>
    </Collapse>
  ),
}

export const AllCollapsed: Story = {
  parameters: {
    docs: {
      description: {
        story: '默认全部收起状态，用户可手动展开面板，适用于节省空间的初始展示。',
      },
    },
  },
  render: () => (
    <Collapse>
      <CollapsePanel header="面板标题 1" panelKey="1">
        <p>内容 1</p>
      </CollapsePanel>
      <CollapsePanel header="面板标题 2" panelKey="2">
        <p>内容 2</p>
      </CollapsePanel>
    </Collapse>
  ),
}

export const CustomPanel: Story = {
  parameters: {
    docs: {
      description: {
        story: '自定义面板标题样式，通过传入 ReactNode 实现带图标、彩色文字的个性化标题，适用于需要视觉强调的场景。',
      },
    },
  },
  render: () => (
    <Collapse>
      <CollapsePanel
        header={<span className="text-primary-500 font-bold text-base">设计 自定义样式面板</span>}
        panelKey="1"
      >
        <p>此面板的标题使用了自定义样式，通过传入 ReactNode 实现个性化标题。</p>
      </CollapsePanel>
      <CollapsePanel
        header={<span className="text-success-500 font-bold text-base">完成 另一个自定义面板</span>}
        panelKey="2"
      >
        <p>每个面板都可以拥有不同的标题样式。</p>
      </CollapsePanel>
      <CollapsePanel header="普通面板" panelKey="3">
        <p>与普通面板对比效果。</p>
      </CollapsePanel>
    </Collapse>
  ),
}

export const GhostVariant: Story = {
  parameters: {
    docs: {
      description: {
        story: '幽灵样式面板，无背景、无边框，完全融入页面背景，适用于极简风格或嵌套在其他容器内的场景。',
      },
    },
  },
  render: () => (
    <Collapse bordered={false} className="bg-transparent">
      <CollapsePanel header="幽灵面板 1" panelKey="1" className="border-0 shadow-none">
        <p>无边框、无背景的幽灵样式面板，适用于融入页面背景的场景。</p>
      </CollapsePanel>
      <CollapsePanel header="幽灵面板 2" panelKey="2" className="border-0 shadow-none">
        <p>面板之间仅通过分割线或间距区分。</p>
      </CollapsePanel>
      <CollapsePanel header="幽灵面板 3" panelKey="3" className="border-0 shadow-none">
        <p>适合极简风格的界面设计。</p>
      </CollapsePanel>
    </Collapse>
  ),
}
