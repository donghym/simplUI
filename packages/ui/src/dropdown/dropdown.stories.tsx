import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Dropdown } from './index'
import { DropdownMenu } from '../dropdown/index'
import { DropdownItem } from '../dropdown/index'
import { DropdownDivider } from '../dropdown/index'
import { Button } from '../button/index'
import { Settings, User, LogOut, Trash2, Edit, Copy, ChevronRight, Folder, FileText, Image } from 'lucide-react'

const CenterDecorator = (Story: React.FC) => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '500px', width: '100%' }}>
    <Story />
  </div>
)

const meta: Meta<typeof Dropdown> = {
  title: '导航/Dropdown 下拉菜单',
  component: Dropdown,
  tags: ['autodocs'],
  decorators: [CenterDecorator],
  argTypes: {
    placement: {
      control: 'select',
      options: ['bottom', 'bottomLeft', 'bottomRight', 'top', 'topLeft', 'topRight'],
      description: '弹出位置，相对触发元素的方位，默认 bottomLeft',
    },
    disabled: {
      control: 'boolean',
      description: '是否禁用下拉菜单，true 时点击触发元素不会打开菜单',
    },
    open: {
      control: 'boolean',
      description: '是否可见（受控模式），传入时接管 open 状态',
    },
    defaultOpen: {
      control: 'boolean',
      description: '默认是否可见（非受控模式），默认 false',
    },
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `向下弹出的列表，用于展示一组操作命令。\n\n- 操作集合：用于按钮旁展示更多相关操作，如编辑、复制、删除。\n- 用户菜单：用于头像或用户名旁展示个人中心、设置、退出等入口。\n- 级联选择：支持嵌套子菜单，用于层级较多的选项展示。`,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Dropdown>

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: '基础下拉菜单，包含编辑、复制等常规操作项和危险操作项，通过分割线区分。',
      },
    },
  },
  render: () => (
    <Dropdown
      menu={
        <DropdownMenu>
          <DropdownItem itemKey="edit" icon={<Edit className="h-4 w-4" />}>编辑</DropdownItem>
          <DropdownItem itemKey="copy" icon={<Copy className="h-4 w-4" />}>复制</DropdownItem>
          <DropdownDivider />
          <DropdownItem itemKey="delete" destructive icon={<Trash2 className="h-4 w-4" />}>删除</DropdownItem>
        </DropdownMenu>
      }
    >
      <Button>点击我</Button>
    </Dropdown>
  ),
}

export const PlacementTop: Story = {
  render: () => (
    <Dropdown
      placement="top"
      menu={
        <DropdownMenu>
          <DropdownItem itemKey="1">选项 1</DropdownItem>
          <DropdownItem itemKey="2">选项 2</DropdownItem>
        </DropdownMenu>
      }
    >
      <Button>上方位置</Button>
    </Dropdown>
  ),
}

export const PlacementTopRight: Story = {
  render: () => (
    <Dropdown
      placement="topRight"
      menu={
        <DropdownMenu>
          <DropdownItem itemKey="1">选项 1</DropdownItem>
          <DropdownItem itemKey="2">选项 2</DropdownItem>
        </DropdownMenu>
      }
    >
      <Button>右上位置</Button>
    </Dropdown>
  ),
}

export const WithIcons: Story = {
  render: () => (
    <Dropdown
      menu={
        <DropdownMenu>
          <DropdownItem itemKey="settings" icon={<Settings className="h-4 w-4" />}>设置</DropdownItem>
          <DropdownItem itemKey="profile" icon={<User className="h-4 w-4" />}>个人中心</DropdownItem>
          <DropdownDivider />
          <DropdownItem itemKey="logout" icon={<LogOut className="h-4 w-4" />}>退出登录</DropdownItem>
        </DropdownMenu>
      }
    >
      <Button variant="default">用户菜单</Button>
    </Dropdown>
  ),
}

export const DisabledItem: Story = {
  parameters: {
    docs: {
      description: {
        story: '带禁用项的下拉菜单，用于某些操作暂时不可用的场景。',
      },
    },
  },
  render: () => (
    <Dropdown
      menu={
        <DropdownMenu>
          <DropdownItem itemKey="1">可用</DropdownItem>
          <DropdownItem itemKey="2" disabled>禁用</DropdownItem>
          <DropdownItem itemKey="3">可用</DropdownItem>
        </DropdownMenu>
      }
    >
      <Button>带禁用项</Button>
    </Dropdown>
  ),
}

export const DangerItem: Story = {
  parameters: {
    docs: {
      description: {
        story: '带危险操作项的示例，通过 destructive 样式突出显示不可逆操作，如删除。',
      },
    },
  },
  render: () => (
    <Dropdown
      menu={
        <DropdownMenu>
          <DropdownItem itemKey="1">普通操作</DropdownItem>
          <DropdownDivider />
          <DropdownItem itemKey="delete" destructive icon={<Trash2 className="h-4 w-4" />}>永久删除</DropdownItem>
        </DropdownMenu>
      }
    >
      <Button variant="default">操作</Button>
    </Dropdown>
  ),
}

export const Disabled: Story = {
  render: () => (
    <Dropdown disabled menu={<DropdownMenu><DropdownItem itemKey="1">选项</DropdownItem></DropdownMenu>}>
      <Button disabled>禁用下拉菜单</Button>
    </Dropdown>
  ),
}

export const Controlled: Story = {
  render: () => {
    const [open, setOpen] = useState(false)
    return (
      <Dropdown
        open={open}
        onOpenChange={setOpen}
        menu={
          <DropdownMenu>
            <DropdownItem itemKey="1" onClick={() => setOpen(false)}>选项 1</DropdownItem>
            <DropdownItem itemKey="2" onClick={() => setOpen(false)}>选项 2</DropdownItem>
          </DropdownMenu>
        }
      >
        <Button>{open ? '打开' : '关闭'}</Button>
      </Dropdown>
    )
  },
}

export const WithButton: Story = {
  render: () => (
    <Dropdown
      menu={
        <DropdownMenu>
          <DropdownItem itemKey="new" icon={<Edit className="h-4 w-4" />}>新建文件</DropdownItem>
          <DropdownItem itemKey="open" icon={<Copy className="h-4 w-4" />}>打开文件</DropdownItem>
          <DropdownDivider />
          <DropdownItem itemKey="save" icon={<Settings className="h-4 w-4" />}>保存</DropdownItem>
        </DropdownMenu>
      }
    >
      <Button variant="primary">操作菜单</Button>
    </Dropdown>
  ),
}

/** 嵌套子菜单 */
export const NestedDropdown: Story = {
  parameters: {
    docs: {
      description: {
        story: '嵌套子菜单的示例，通过手动控制展开更多层级选项，适用于层级较多的操作场景。',
      },
    },
  },
  render: () => {
    const [subOpen, setSubOpen] = useState(false)
    return (
      <Dropdown
        menu={
          <DropdownMenu>
            <DropdownItem itemKey="new" icon={<Edit className="h-4 w-4" />}>新建</DropdownItem>
            <DropdownDivider />
            <div className="relative">
              <DropdownItem itemKey="new-from" icon={<Folder className="h-4 w-4" />} onClick={() => setSubOpen(!subOpen)}>
                <span className="flex-1">新建自模板</span>
                <ChevronRight className="h-4 w-4" />
              </DropdownItem>
              {subOpen && (
                <div className="absolute left-full top-0 ml-1 min-w-[140px] bg-popover text-popover-foreground border border-border rounded-md shadow-md py-1 z-50">
                  <DropdownItem itemKey="template-doc" icon={<FileText className="h-4 w-4" />}>文档模板</DropdownItem>
                  <DropdownItem itemKey="template-sheet" icon={<FileText className="h-4 w-4" />}>表格模板</DropdownItem>
                  <DropdownItem itemKey="template-slide" icon={<Image className="h-4 w-4" />}>演示模板</DropdownItem>
                </div>
              )}
            </div>
            <DropdownDivider />
            <DropdownItem itemKey="open" icon={<Copy className="h-4 w-4" />}>打开</DropdownItem>
            <DropdownItem itemKey="save" icon={<Settings className="h-4 w-4" />}>保存</DropdownItem>
          </DropdownMenu>
        }
      >
        <Button>嵌套菜单</Button>
      </Dropdown>
    )
  },
}