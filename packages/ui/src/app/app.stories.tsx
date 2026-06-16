import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { App } from './index'
import { ConfigProvider } from '../config-provider/index'
import { Button } from '../button/index'

const meta: Meta<typeof App> = {
  title: '通用/App 应用容器',
  component: App,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: '用于包裹整个应用，提供全局上下文。',
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof App>

export const Basic: Story = {
  render: () => (
    <App>
      <div className="p-6 bg-gray-100 min-h-[200px]">
        <h2>Application Content</h2>
        <p>This is wrapped in the App container.</p>
      </div>
    </App>
  ),
}

export const WithCustomStyle: Story = {
  render: () => (
    <App style={{ background: '#e6f4ff', padding: 24 }}>
      <div>
        <h2>Styled App</h2>
        <p>This App container has custom styles.</p>
      </div>
    </App>
  ),
}

/** 主题切换 */
export const ThemeSwitch: Story = {
  render: () => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light')
    return (
      <ConfigProvider theme={theme}>
        <App>
          <div className="p-6 space-y-4" style={{ background: theme === 'dark' ? '#1e293b' : '#f8fafc', minHeight: 200, transition: 'background 0.3s' }}>
            <h2 className="text-lg font-semibold" style={{ color: theme === 'dark' ? '#f1f5f9' : '#1e293b' }}>
              当前主题：{theme === 'light' ? '亮色' : '暗色'}
            </h2>
            <p style={{ color: theme === 'dark' ? '#94a3b8' : '#64748b' }}>
              点击按钮切换 ConfigProvider 的主题。
            </p>
            <Button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
              切换为{theme === 'light' ? '暗色' : '亮色'}主题
            </Button>
          </div>
        </App>
      </ConfigProvider>
    )
  },
}
