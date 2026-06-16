import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  stories: [
    '../packages/ui/src/**/*.stories.@(ts|tsx)',
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/blocks',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: true,
    defaultName: 'Docs',
  },
  // 注入 iframe 的 html/body 样式
  previewHead: (head) => `
    ${head}
    <style>
      html, body {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
      }
      body {
        background: transparent;
      }
      #storybook-root {
        width: 100%;
        height: 100%;
      }
    </style>
  `,
  viteFinal: async (config) => {
    config.resolve = config.resolve || {}
    const existing = Array.isArray(config.resolve.alias)
      ? config.resolve.alias
      : Object.entries(config.resolve.alias || {}).map(([find, replacement]) => ({ find, replacement }))
    config.resolve.alias = [
      ...existing,
      { find: '@simplui/ui', replacement: '../packages/ui/src' },
      { find: '@simplui/ui/src', replacement: '../packages/ui/src' },
    ]
    return config
  },
}

export default config
