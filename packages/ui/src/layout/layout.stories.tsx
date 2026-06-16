import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Layout } from './index'
import { Header } from '../layout/index'
import { Sider } from '../layout/index'
import { Content } from '../layout/index'
import { Footer } from '../layout/index'
import { Menu as MenuIcon } from 'lucide-react'
import { Menu } from '../menu/index'
import { MenuItem } from '../menu/index'
import { SubMenu } from '../menu/index'
import { Breadcrumb } from '../breadcrumb/index'
import { Button } from '../button/index'
import {
  Home, User, Settings, FileText,
  Monitor, Bell,
} from 'lucide-react'

const meta: Meta<typeof Layout> = {
  title: '布局/Layout 布局',
  component: Layout,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `协助进行页面级整体布局。\n\n- 页面整体布局：用于后台管理系统、仪表盘等复杂页面，搭建顶部导航、侧边栏、内容区和页脚。\n- 响应式适配：支持断点自动折叠侧边栏，适配不同屏幕尺寸。\n- 固定区域：支持固定头部或侧边栏，方便长页面下的导航操作。`,
      },
    },
  },
}

export default meta

/** 基本结构 - 典型的页面布局 */
export const Basic: StoryObj = {
  parameters: {
    docs: {
      description: {
        story: '典型的后台管理布局，包含可折叠侧边栏、顶部页头、内容区和页脚。',
      },
    },
  },
  render: () => (
    <Layout className="min-h-[400px]">
      <Sider collapsible>
        <div className="h-16 flex items-center justify-center text-white font-bold text-lg">
          simplUI
        </div>
        <Menu mode="vertical" defaultSelectedKey="1">
          <MenuItem itemKey="1" icon={<Home className="h-4 w-4" />}>导航一</MenuItem>
          <MenuItem itemKey="2" icon={<User className="h-4 w-4" />}>导航二</MenuItem>
          <MenuItem itemKey="3" icon={<FileText className="h-4 w-4" />}>导航三</MenuItem>
          <MenuItem itemKey="4" icon={<Settings className="h-4 w-4" />}>导航四</MenuItem>
        </Menu>
      </Sider>
      <Layout>
        <Header>页头</Header>
        <Content className="m-6 p-6 bg-white rounded-lg min-h-[280px]">
          <Breadcrumb
            items={[
              { title: '首页' },
              { title: '列表' },
              { title: '应用' },
            ]}
          />
          <div className="mt-4">内容区域</div>
        </Content>
        <Footer>simplUI ©2026 Created by simplUI</Footer>
      </Layout>
    </Layout>
  ),
}

/** 上中下布局 - 最基本的上-中-下布局 */
export const Top: StoryObj = {
  parameters: {
    docs: {
      description: {
        story: '最基本的上-中-下布局，顶部为导航栏，中间为内容区，底部为页脚。',
      },
    },
  },
  render: () => (
    <Layout className="min-h-[400px]">
      <Header>
        <div className="font-bold text-lg text-white mr-12">simplUI</div>
        <Menu mode="horizontal" defaultSelectedKey="2" className="flex-1 border-none bg-transparent">
          <MenuItem itemKey="1">导航一</MenuItem>
          <MenuItem itemKey="2">导航二</MenuItem>
          <MenuItem itemKey="3">导航三</MenuItem>
        </Menu>
      </Header>
      <Content className="px-12 py-6">
        <Breadcrumb
          className="mb-4"
          items={[
            { title: '首页' },
            { title: '列表' },
            { title: '应用' },
          ]}
        />
        <Layout className="bg-white rounded-lg p-6 min-h-[280px]">
          <Sider theme="light" width={200}>
            <Menu mode="vertical" defaultSelectedKey="1">
              <SubMenu itemKey="sub1" title="子导航一" icon={<User className="h-4 w-4" />}>
                <MenuItem itemKey="option1">选项一</MenuItem>
                <MenuItem itemKey="option2">选项二</MenuItem>
                <MenuItem itemKey="option3">选项三</MenuItem>
                <MenuItem itemKey="option4">选项四</MenuItem>
              </SubMenu>
              <SubMenu itemKey="sub2" title="子导航二" icon={<Monitor className="h-4 w-4" />}>
                <MenuItem itemKey="option5">选项五</MenuItem>
              </SubMenu>
              <SubMenu itemKey="sub3" title="子导航三" icon={<Bell className="h-4 w-4" />}>
                <MenuItem itemKey="option6">选项六</MenuItem>
              </SubMenu>
            </Menu>
          </Sider>
          <Content className="px-6">内容区域</Content>
        </Layout>
      </Content>
      <Footer>simplUI ©2026 Created by simplUI</Footer>
    </Layout>
  ),
}

/** 顶部-侧边布局 - 拥有顶部导航及侧边栏的页面 */
export const TopSide: StoryObj = {
  parameters: {
    docs: {
      description: {
        story: '同时拥有顶部导航和侧边栏的布局，适用于功能模块较多的后台系统。',
      },
    },
  },
  render: () => (
    <Layout className="min-h-[400px]">
      <Header>
        <div className="font-bold text-lg text-white mr-12">simplUI</div>
        <Menu mode="horizontal" defaultSelectedKey="1" className="flex-1 border-none bg-transparent">
          <MenuItem itemKey="1">导航一</MenuItem>
          <MenuItem itemKey="2">导航二</MenuItem>
          <MenuItem itemKey="3">导航三</MenuItem>
        </Menu>
      </Header>
      <Layout hasSider>
        <Sider theme="light">
          <Menu mode="vertical" defaultSelectedKey="1">
            <SubMenu itemKey="sub1" title="子导航一" icon={<User className="h-4 w-4" />}>
              <MenuItem itemKey="option1">选项一</MenuItem>
              <MenuItem itemKey="option2">选项二</MenuItem>
              <MenuItem itemKey="option3">选项三</MenuItem>
              <MenuItem itemKey="option4">选项四</MenuItem>
            </SubMenu>
            <SubMenu itemKey="sub2" title="子导航二" icon={<Monitor className="h-4 w-4" />}>
              <MenuItem itemKey="option5">选项五</MenuItem>
            </SubMenu>
            <SubMenu itemKey="sub3" title="子导航三" icon={<Bell className="h-4 w-4" />}>
              <MenuItem itemKey="option6">选项六</MenuItem>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Content className="px-6 py-6 min-h-[280px]">
            <Breadcrumb
              className="mb-4"
              items={[
                { title: '首页' },
                { title: '列表' },
                { title: '应用' },
              ]}
            />
            <div className="bg-white rounded-lg p-6 min-h-[200px]">内容区域</div>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  ),
}

/** 顶部-侧边布局-通栏 - 两边未留边距 */
export const TopSide2: StoryObj = {
  parameters: {
    docs: {
      description: {
        story: '顶部-侧边布局的通栏版本，内容区域两边不留边距，视觉更紧凑。',
      },
    },
  },
  render: () => (
    <Layout className="min-h-[400px]">
      <Header>
        <div className="font-bold text-lg text-white mr-12">simplUI</div>
        <Menu mode="horizontal" defaultSelectedKey="1" className="flex-1 border-none bg-transparent">
          <MenuItem itemKey="1">导航一</MenuItem>
          <MenuItem itemKey="2">导航二</MenuItem>
          <MenuItem itemKey="3">导航三</MenuItem>
        </Menu>
      </Header>
      <Layout hasSider>
        <Sider>
          <Menu mode="vertical" defaultSelectedKey="1">
            <SubMenu itemKey="sub1" title="子导航一" icon={<User className="h-4 w-4" />}>
              <MenuItem itemKey="option1">选项一</MenuItem>
              <MenuItem itemKey="option2">选项二</MenuItem>
              <MenuItem itemKey="option3">选项三</MenuItem>
              <MenuItem itemKey="option4">选项四</MenuItem>
            </SubMenu>
            <SubMenu itemKey="sub2" title="子导航二" icon={<Monitor className="h-4 w-4" />}>
              <MenuItem itemKey="option5">选项五</MenuItem>
            </SubMenu>
            <SubMenu itemKey="sub3" title="子导航三" icon={<Bell className="h-4 w-4" />}>
              <MenuItem itemKey="option6">选项六</MenuItem>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Content className="px-6 py-6 min-h-[280px]">
            <Breadcrumb
              className="mb-4"
              items={[
                { title: '首页' },
                { title: '列表' },
                { title: '应用' },
              ]}
            />
            <div className="bg-white rounded-lg p-6 min-h-[200px]">内容区域</div>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  ),
}

/** 侧边布局 - 侧边两列式布局，可收起 */
export const Side: StoryObj = {
  parameters: {
    docs: {
      description: {
        story: '侧边两列式布局，侧边栏支持折叠收起，适合导航项较少的场景。',
      },
    },
  },
  render: () => (
    <Layout hasSider className="min-h-[400px]">
      <Sider collapsible>
        <div className="h-16 flex items-center justify-center text-white font-bold text-lg">
          simplUI
        </div>
        <Menu mode="vertical" defaultSelectedKey="1">
          <MenuItem itemKey="1" icon={<Home className="h-4 w-4" />}>导航一</MenuItem>
          <MenuItem itemKey="2" icon={<User className="h-4 w-4" />}>导航二</MenuItem>
          <MenuItem itemKey="3" icon={<FileText className="h-4 w-4" />}>导航三</MenuItem>
        </Menu>
      </Sider>
      <Layout>
        <Header>页头</Header>
        <Content className="m-6 p-6 bg-white rounded-lg min-h-[280px]">
          内容区域
        </Content>
        <Footer>simplUI ©2026 Created by simplUI</Footer>
      </Layout>
    </Layout>
  ),
}

/** 自定义触发器 - 使用 trigger={null} 隐藏默认触发器 */
export const CustomTrigger: StoryObj = {
  render: () => {
    const [collapsed, setCollapsed] = useState(false)
    return (
      <Layout hasSider className="min-h-[400px]">
        <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed} trigger={null}>
          <div className={`h-16 flex items-center text-white font-bold text-lg ${collapsed ? 'justify-center px-2' : 'justify-center px-6'}`}>
            {collapsed ? 'S' : 'simplUI'}
          </div>
          <Menu mode="vertical" defaultSelectedKey="1">
            <MenuItem itemKey="1" icon={<Home className="h-4 w-4" />}>导航一</MenuItem>
            <MenuItem itemKey="2" icon={<User className="h-4 w-4" />}>导航二</MenuItem>
            <MenuItem itemKey="3" icon={<FileText className="h-4 w-4" />}>导航三</MenuItem>
            <MenuItem itemKey="4" icon={<Settings className="h-4 w-4" />}>导航四</MenuItem>
          </Menu>
        </Sider>
        <Layout>
          <Header className="flex items-center justify-between">
            <Button
              onClick={() => setCollapsed(!collapsed)}
              className="text-white/85 hover:text-white bg-transparent border border-white/20 hover:border-white/40"
            >
              <MenuIcon className="h-4 w-4" />
            </Button>
          </Header>
          <Content className="m-6 p-6 bg-white rounded-lg min-h-[280px]">
            内容区域
          </Content>
          <Footer>simplUI ©2026 Created by simplUI</Footer>
        </Layout>
      </Layout>
    )
  },
}

/** 响应式布局 - 配置 breakpoint 属性实现响应式 */
export const Responsive: StoryObj = {
  parameters: {
    docs: {
      description: {
        story: '配置 breakpoint 属性，当浏览器宽度小于指定断点时侧边栏自动收起。',
      },
    },
  },
  render: () => (
    <Layout hasSider className="min-h-[400px]">
      <Sider
        breakpoint="lg"
        collapsedWidth={0}
        collapsible
      >
        <div className="h-16 flex items-center justify-center text-white font-bold text-lg">
          simplUI
        </div>
        <Menu mode="vertical" defaultSelectedKey="1">
          <MenuItem itemKey="1" icon={<Home className="h-4 w-4" />}>导航一</MenuItem>
          <MenuItem itemKey="2" icon={<User className="h-4 w-4" />}>导航二</MenuItem>
          <MenuItem itemKey="3" icon={<FileText className="h-4 w-4" />}>导航三</MenuItem>
        </Menu>
      </Sider>
      <Layout>
        <Header>页头</Header>
        <Content className="m-6 p-6 bg-white rounded-lg min-h-[280px]">
          <p>调整浏览器宽度至 992px 以下，侧边栏会自动收起</p>
        </Content>
        <Footer>simplUI ©2026 Created by simplUI</Footer>
      </Layout>
    </Layout>
  ),
}

/** 固定头部 - 使用 sticky 固定顶部导航 */
export const Fixed: StoryObj = {
  parameters: {
    docs: {
      description: {
        story: '使用 sticky 定位固定顶部导航，滚动页面时页头始终保持在视口顶部。',
      },
    },
  },
  render: () => (
    <Layout className="min-h-[500px]">
      <Header className="sticky top-0 z-10">
        <div className="font-bold text-lg text-white mr-12">simplUI</div>
        <Menu mode="horizontal" defaultSelectedKey="1" className="flex-1 border-none bg-transparent">
          <MenuItem itemKey="1">导航一</MenuItem>
          <MenuItem itemKey="2">导航二</MenuItem>
          <MenuItem itemKey="3">导航三</MenuItem>
        </Menu>
      </Header>
      <Content className="px-12 py-6">
        <div className="bg-white rounded-lg p-6">
          <p>固定头部内容</p>
          <div style={{ height: 200 }}>占位内容</div>
          <div style={{ height: 200 }}>占位内容</div>
          <div style={{ height: 200 }}>占位内容</div>
        </div>
      </Content>
      <Footer>simplUI ©2026 Created by simplUI</Footer>
    </Layout>
  ),
}

/** 固定侧边栏 - 当内容较长时使用固定侧边栏 */
export const FixedSider: StoryObj = {
  parameters: {
    docs: {
      description: {
        story: '当内容区域较长时，使用 sticky 固定侧边栏，方便随时进行导航操作。',
      },
    },
  },
  render: () => (
    <Layout hasSider className="min-h-[500px]">
      <Sider className="sticky top-0 h-screen">
        <div className="h-16 flex items-center justify-center text-white font-bold text-lg">
          simplUI
        </div>
        <Menu mode="vertical" defaultSelectedKey="1">
          <MenuItem itemKey="1" icon={<Home className="h-4 w-4" />}>导航一</MenuItem>
          <MenuItem itemKey="2" icon={<User className="h-4 w-4" />}>导航二</MenuItem>
          <MenuItem itemKey="3" icon={<FileText className="h-4 w-4" />}>导航三</MenuItem>
        </Menu>
      </Sider>
      <Layout>
        <Header>页头</Header>
        <Content className="px-12 py-6">
          <div className="bg-white rounded-lg p-6">
            <p>固定侧边栏内容</p>
            <div style={{ height: 200 }}>占位内容</div>
            <div style={{ height: 200 }}>占位内容</div>
            <div style={{ height: 200 }}>占位内容</div>
            <div style={{ height: 200 }}>占位内容</div>
          </div>
        </Content>
        <Footer>simplUI ©2026 Created by simplUI</Footer>
      </Layout>
    </Layout>
  ),
}
