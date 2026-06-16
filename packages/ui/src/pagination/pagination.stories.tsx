import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { fn } from '@storybook/test'
import { Pagination } from './index'

const meta: Meta<typeof Pagination> = {
  title: '导航/Pagination 分页',
  component: Pagination,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: '采用分页的形式分隔长列表，每次只加载一页数据。\n\n- 数据列表：用于表格、列表等大量数据的分页展示。\n- 快速跳转：支持输入页码直接跳转，提升浏览效率。\n- 条数调整：支持切换每页显示条数，灵活控制数据加载量。',
      },
    },
  },
  argTypes: {
    total: {
      control: 'number',
      description: '数据总数，用于计算总页数',
    },
    pageSize: {
      control: 'number',
      description: '每页条数，受控模式下必须提供',
    },
    current: {
      control: 'number',
      description: '当前页码，从 1 开始计数，受控模式下必须提供',
    },
    showSizeChanger: {
      control: 'boolean',
      description: '是否显示每页条数切换器，默认 false',
    },
    showQuickJumper: {
      control: 'boolean',
      description: '是否显示快速跳转输入框，默认 false',
    },
    disabled: {
      control: 'boolean',
      description: '是否禁用分页，默认 false',
    },
    simple: {
      control: 'boolean',
      description: '是否使用简洁模式，只显示当前页和总页数，默认 false',
    },
  },
}

export default meta
type Story = StoryObj<typeof Pagination>

export const Default: Story = {
  args: {
    total: 100,
    defaultCurrent: 1,
  },
}

export const WithPageSizeChanger: Story = {
  args: {
    total: 500,
    defaultCurrent: 1,
    showSizeChanger: true,
    pageSizeOptions: [10, 20, 50, 100],
  },
}

export const WithQuickJumper: Story = {
  args: {
    total: 200,
    defaultCurrent: 5,
    showQuickJumper: true,
  },
}

export const WithTotal: Story = {
  args: {
    total: 150,
    defaultCurrent: 3,
    showTotal: true,
  },
}

export const AllFeatures: Story = {
  args: {
    total: 500,
    defaultCurrent: 5,
    pageSize: 20,
    showSizeChanger: true,
    showQuickJumper: true,
    showTotal: true,
  },
}

export const SmallTotal: Story = {
  args: {
    total: 30,
    defaultCurrent: 1,
    pageSize: 10,
  },
}

export const Disabled: Story = {
  args: {
    total: 100,
    defaultCurrent: 5,
    disabled: true,
  },
}

export const SimpleMode: Story = {
  args: {
    total: 100,
    defaultCurrent: 5,
    simple: true,
  },
}

export const Controlled: Story = {
  parameters: {
    docs: {
      description: {
        story: '受控模式的分页，通过外部状态管理当前页码，可与其他数据展示组件联动。',
      },
    },
  },
  render: () => {
    const [current, setCurrent] = useState(1)
    return (
      <div className="space-y-4">
        <p>当前页：{current}</p>
        <Pagination
          current={current}
          total={100}
          onChange={(page) => setCurrent(page)}
        />
      </div>
    )
  },
}

export const WithOnChange: Story = {
  parameters: {
    docs: {
      description: {
        story: '带切换回调的分页示例，切换页码时可在 Actions 面板查看触发事件。',
      },
    },
  },
  render: () => {
    const handleChange = fn()
    return (
      <div className="space-y-4">
        <Pagination
          total={200}
          defaultCurrent={1}
          onChange={handleChange}
        />
        <p className="text-sm text-muted-foreground">切换页码时查看 Actions 面板</p>
      </div>
    )
  },
}