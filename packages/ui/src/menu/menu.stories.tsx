import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Menu } from './index'
import { MenuItem } from '../menu/index'
import { SubMenu } from '../menu/index'
import { Button } from '../button/index'
import { Home, Settings, User, FileText, Folder, Image } from 'lucide-react'

const meta: Meta<typeof Menu> = {
  title: '导航/Menu 导航菜单',
  component: Menu,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `为页面和功能提供导航的菜单列表。\n\n- 顶部导航：用于网站顶部，展示主要页面入口。\n- 侧边导航：用于管理后台，展示功能模块，支持折叠收起。\n- 内联菜单：用于内容区域内部，支持子菜单展开收起。`,
      },
    },
  },
}

export default meta

export const Vertical: StoryObj = {
  parameters: {
    docs: {
      description: {
        story: '垂直菜单，常用于侧边栏导航，配合图标展示功能入口。',
      },
    },
  },
  render: () => (
    <Menu mode="vertical" defaultSelectedKey="home" className="w-48 border rounded">
      <MenuItem itemKey="home" icon={<Home className="h-4 w-4" />}>首页</MenuItem>
      <MenuItem itemKey="profile" icon={<User className="h-4 w-4" />}>个人中心</MenuItem>
      <MenuItem itemKey="settings" icon={<Settings className="h-4 w-4" />}>设置</MenuItem>
    </Menu>
  ),
}

export const Horizontal: StoryObj = {
  parameters: {
    docs: {
      description: {
        story: '水平菜单，常用于网站顶部导航栏，展示主要页面入口。',
      },
    },
  },
  render: () => (
    <Menu mode="horizontal" defaultSelectedKey="docs" className="border-b">
      <MenuItem itemKey="docs" icon={<FileText className="h-4 w-4" />}>文档</MenuItem>
      <MenuItem itemKey="gallery" icon={<Image className="h-4 w-4" />}>图库</MenuItem>
      <MenuItem itemKey="settings" icon={<Settings className="h-4 w-4" />}>设置</MenuItem>
    </Menu>
  ),
}

export const WithSubMenu: StoryObj = {
  parameters: {
    docs: {
      description: {
        story: '带子菜单的垂直菜单，用于功能模块较多且需要层级归类的场景。',
      },
    },
  },
  render: () => (
    <Menu mode="vertical" defaultSelectedKey="react" className="w-56 border rounded">
      <SubMenu itemKey="frameworks" title="框架" icon={<Folder className="h-4 w-4" />}>
        <MenuItem itemKey="react">React</MenuItem>
        <MenuItem itemKey="vue">Vue</MenuItem>
        <MenuItem itemKey="svelte">Svelte</MenuItem>
      </SubMenu>
      <SubMenu itemKey="tools" title="工具" icon={<Settings className="h-4 w-4" />}>
        <MenuItem itemKey="vite">Vite</MenuItem>
        <MenuItem itemKey="webpack">Webpack</MenuItem>
      </SubMenu>
    </Menu>
  ),
}

export const WithDisabled: StoryObj = {
  render: () => (
    <Menu mode="vertical" defaultSelectedKey="enabled" className="w-48 border rounded">
      <MenuItem itemKey="enabled">启用</MenuItem>
      <MenuItem itemKey="disabled" disabled>禁用</MenuItem>
      <MenuItem itemKey="another">其他</MenuItem>
    </Menu>
  ),
}

/** 内联菜单 - 可折叠子菜单 */
export const InlineMenu: StoryObj = {
  parameters: {
    docs: {
      description: {
        story: '内联菜单，子菜单可展开收起，适用于内容区域内的层级导航。',
      },
    },
  },
  render: () => (
    <Menu mode="inline" defaultSelectedKey="react" className="w-56 border rounded">
      <MenuItem itemKey="home" icon={<Home className="h-4 w-4" />}>首页</MenuItem>
      <SubMenu itemKey="frameworks" title="框架" icon={<Folder className="h-4 w-4" />}>
        <MenuItem itemKey="react">React</MenuItem>
        <MenuItem itemKey="vue">Vue</MenuItem>
        <MenuItem itemKey="svelte">Svelte</MenuItem>
      </SubMenu>
      <SubMenu itemKey="tools" title="工具" icon={<Settings className="h-4 w-4" />}>
        <MenuItem itemKey="vite">Vite</MenuItem>
        <MenuItem itemKey="webpack">Webpack</MenuItem>
      </SubMenu>
      <MenuItem itemKey="docs" icon={<FileText className="h-4 w-4" />}>文档</MenuItem>
    </Menu>
  ),
}

/** 折叠菜单 - 仅图标模式 */
export const CollapsedMenu: StoryObj = {
  parameters: {
    docs: {
      description: {
        story: '仅图标模式的折叠菜单，通过外部按钮控制展开收起，节省侧边栏空间。',
      },
    },
  },
  render: () => {
    const [collapsed, setCollapsed] = useState(false)
    return (
      <div className="space-y-4">
        <Button className="text-sm" onClick={() => setCollapsed(!collapsed)}>
          {collapsed ? '展开菜单' : '折叠菜单'}
        </Button>
        <div className={collapsed ? 'w-16' : 'w-48'}>
          <Menu mode="vertical" defaultSelectedKey="home" className="border rounded">
            <MenuItem itemKey="home" icon={<Home className="h-4 w-4" />}>{collapsed ? '' : '首页'}</MenuItem>
            <MenuItem itemKey="profile" icon={<User className="h-4 w-4" />}>{collapsed ? '' : '个人中心'}</MenuItem>
            <MenuItem itemKey="docs" icon={<FileText className="h-4 w-4" />}>{collapsed ? '' : '文档'}</MenuItem>
            <MenuItem itemKey="settings" icon={<Settings className="h-4 w-4" />}>{collapsed ? '' : '设置'}</MenuItem>
          </Menu>
        </div>
      </div>
    )
  },
}
