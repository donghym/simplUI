import { defineConfig } from 'dumi';
import path from 'path';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import { categories } from './catalog';

const sidebar = [
  {
    title: '总览',
    children: [{ title: '组件总览', link: '/' }],
  },
  ...categories
    .map((category) => ({
      title: category.title,
      children: category.items
        .filter((item) => item.demo)
        .map((item) => ({ title: item.title, link: item.href })),
    }))
    .filter((category) => category.children.length > 0),
];

export default defineConfig({
  outputPath: 'dist',
  alias: {
    '@simplui/ui': path.resolve(__dirname, '../ui/src/index.ts'),
  },
  themeConfig: {
    name: 'simplUI',
    prefersColor: { default: 'light', switch: false },
    nav: [{ title: '组件', link: '/' }],
    sidebar: {
      '/': sidebar,
    },
    footer: 'simplUI · PC 组件',
  },
  extraPostCSSPlugins: [tailwindcss(), autoprefixer()],
});
