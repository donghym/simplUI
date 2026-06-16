import { describe, it, expect, afterEach } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'
import { ConfigProvider, useConfig } from './index'

describe('ConfigProvider', () => {
  afterEach(() => {
    cleanup()
  })

  it('渲染子组件', () => {
    render(
      <ConfigProvider>
        <div data-testid="child">Child</div>
      </ConfigProvider>
    )
    expect(screen.getByTestId('child')).toBeInTheDocument()
  })

  it('默认主题为 light', () => {
    function TestComponent() {
      const { theme } = useConfig()
      return <div data-testid="theme">{theme}</div>
    }

    render(
      <ConfigProvider>
        <TestComponent />
      </ConfigProvider>
    )
    expect(screen.getByTestId('theme').textContent).toBe('light')
  })

  it('设置 dark 主题', () => {
    function TestComponent() {
      const { theme } = useConfig()
      return <div data-testid="theme">{theme}</div>
    }

    render(
      <ConfigProvider theme="dark">
        <TestComponent />
      </ConfigProvider>
    )
    expect(screen.getByTestId('theme').textContent).toBe('dark')
  })

  it('自定义 prefixCls', () => {
    function TestComponent() {
      const { prefixCls } = useConfig()
      return <div data-testid="prefix">{prefixCls}</div>
    }

    render(
      <ConfigProvider prefixCls="custom">
        <TestComponent />
      </ConfigProvider>
    )
    expect(screen.getByTestId('prefix').textContent).toBe('custom')
  })

  it('传递自定义配置', () => {
    function TestComponent() {
      const { config } = useConfig()
      return <div data-testid="config">{JSON.stringify(config)}</div>
    }

    render(
      <ConfigProvider config={{ customKey: 'customValue' }}>
        <TestComponent />
      </ConfigProvider>
    )
    expect(screen.getByTestId('config').textContent).toBe('{"customKey":"customValue"}')
  })

  it('主题同步到 data-theme 属性', () => {
    render(
      <ConfigProvider theme="dark">
        <div>Content</div>
      </ConfigProvider>
    )
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark')
  })

  it('通过 themeConfig 设置主题色', () => {
    function TestComponent() {
      const { themeConfig } = useConfig()
      return <div data-testid="primaryColor">{themeConfig.primaryColor}</div>
    }

    render(
      <ConfigProvider themeConfig={{ mode: 'light', primaryColor: '#00B42A' }}>
        <TestComponent />
      </ConfigProvider>
    )
    expect(screen.getByTestId('primaryColor').textContent).toBe('#00B42A')
  })

  it('themeConfig.mode 覆盖 theme 属性', () => {
    function TestComponent() {
      const { theme, themeConfig } = useConfig()
      return (
        <div>
          <div data-testid="theme">{theme}</div>
          <div data-testid="mode">{themeConfig.mode}</div>
        </div>
      )
    }

    render(
      <ConfigProvider theme="dark" themeConfig={{ mode: 'light' }}>
        <TestComponent />
      </ConfigProvider>
    )
    expect(screen.getByTestId('theme').textContent).toBe('light')
    expect(screen.getByTestId('mode').textContent).toBe('light')
  })

  it('主题色同步到 CSS 变量', () => {
    render(
      <ConfigProvider themeConfig={{ mode: 'light', primaryColor: '#FF7D00' }}>
        <div>Content</div>
      </ConfigProvider>
    )
    // 验证 CSS 变量被设置（CSS 变量值会被转为小写）
    const primary500 = document.documentElement.style.getPropertyValue('--color-primary-500')
    expect(primary500.toLowerCase()).toBe('#ff7d00')
  })
})
