import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { ConfigProvider } from './index'
import { Button } from '../button/index'
import { Input } from '../input/index'

const meta: Meta<typeof ConfigProvider> = {
  title: '其他/ConfigProvider 全局化配置',
  component: ConfigProvider,
  tags: ['autodocs'],
  argTypes: {
    theme: {
      control: 'radio',
      options: ['light', 'dark'],
      description: '主题模式，可选 light 或 dark',
    },
    prefixCls: {
      control: 'text',
      description: '组件 CSS 类名前缀，默认 simplui',
    },
  },
  parameters: {
    layout: 'padded',
  },
}

export default meta
type Story = StoryObj<typeof ConfigProvider>

export const Default: Story = {
  render: () => (
    <ConfigProvider>
      <div className="space-y-4">
        <Button>默认主题按钮</Button>
        <Input placeholder="默认主题输入框" />
      </div>
    </ConfigProvider>
  ),
}

export const DarkTheme: Story = {
  render: () => (
    <ConfigProvider theme="dark">
      <div className="bg-gray-900 p-4 space-y-4 rounded">
        <Button>暗色主题按钮</Button>
        <Input placeholder="暗色主题输入框" />
      </div>
    </ConfigProvider>
  ),
}

export const CustomPrefix: Story = {
  render: () => (
    <ConfigProvider prefixCls="custom">
      <div className="space-y-4">
        <Button>自定义前缀按钮</Button>
        <Input placeholder="自定义前缀输入框" />
      </div>
    </ConfigProvider>
  ),
}

export const NestedProviders: Story = {
  render: () => (
    <ConfigProvider theme="light">
      <div className="space-y-4">
        <Button>亮色主题</Button>
        <ConfigProvider theme="dark">
          <div className="bg-gray-900 p-4 rounded">
            <Button>暗色主题（嵌套）</Button>
          </div>
        </ConfigProvider>
      </div>
    </ConfigProvider>
  ),
}

export const WithConfig: Story = {
  render: () => (
    <ConfigProvider config={{ buttonSize: 'large', inputRadius: 'full' }}>
      <div className="space-y-4">
        <Button>大尺寸按钮</Button>
        <Input placeholder="自定义配置输入框" />
      </div>
    </ConfigProvider>
  ),
}

export const LocaleDemo: Story = {
  render: () => {
    const [locale, setLocale] = useState<'zh' | 'en'>('zh')
    const localeMap = {
      zh: {
        title: '全局化配置示例',
        button: '点击按钮',
        input: '请输入内容',
        switchTo: '切换到英文',
      },
      en: {
        title: 'Locale Config Demo',
        button: 'Click Me',
        input: 'Please enter',
        switchTo: 'Switch to Chinese',
      },
    }
    const t = localeMap[locale]
    return (
      <ConfigProvider config={{ locale }}>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">{t.title}</h3>
          <div className="flex gap-3">
            <Button>{t.button}</Button>
            <Input placeholder={t.input} style={{ width: 200 }} />
          </div>
          <button
            type="button"
            className="px-3 py-1.5 border border-gray-300 rounded-md text-sm hover:bg-gray-50"
            onClick={() => setLocale((l) => (l === 'zh' ? 'en' : 'zh'))}
          >
            {t.switchTo}
          </button>
        </div>
      </ConfigProvider>
    )
  },
}

/** 主题颜色切换 */
export const PrimaryColorSwitch: Story = {
  render: () => {
    const [primaryColor, setPrimaryColor] = useState('#1677FF')
    const colors = ['#1677FF', '#00B42A', '#FF7D00', '#F53F3F', '#722ED1', '#F7BA1E']

    return (
      <ConfigProvider themeConfig={{ mode: 'light', primaryColor }}>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">主题颜色切换</h3>
          <p className="text-gray-500">点击下方色块切换主题颜色</p>
          <div className="flex gap-2">
            {colors.map((color) => (
              <button
                key={color}
                type="button"
                onClick={() => setPrimaryColor(color)}
                className={`w-8 h-8 rounded-full border-2 transition-all ${
                  primaryColor === color ? 'border-gray-800 scale-110' : 'border-transparent'
                }`}
                style={{ backgroundColor: color }}
                title={color}
              />
            ))}
          </div>
          <div className="flex gap-3 pt-4">
            <Button variant="primary">主要按钮</Button>
            <Button>默认按钮</Button>
          </div>
          <div className="pt-2">
            <Input placeholder="主题色输入框" style={{ width: 200 }} />
          </div>
          <p className="text-sm text-gray-400">当前主题色: {primaryColor}</p>
        </div>
      </ConfigProvider>
    )
  },
}