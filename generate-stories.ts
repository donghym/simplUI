#!/usr/bin/env tsx

import { readdirSync, writeFileSync, existsSync, readFileSync } from 'fs'
import { join } from 'path'

const COMPONENTS_DIR = join(__dirname, 'packages/ui/src')
const EXCLUDED = ['lib', 'test-setup.ts', 'index.ts', 'index.css', '.DS_Store']

// Components that already have stories
const EXISTING_STORIES = new Set([
  'button', 'input', 'layout', 'grid', 'typography',
  'form', 'table', 'modal', 'menu', 'space'
])

function getComponentDirs(): string[] {
  const entries = readdirSync(COMPONENTS_DIR, { withFileTypes: true })
  return entries
    .filter((e) => e.isDirectory() && !EXCLUDED.includes(e.name))
    .map((e) => e.name)
    .filter((name) => !EXISTING_STORIES.has(name))
}

function readComponentIndex(componentName: string): string | null {
  const indexPath = join(COMPONENTS_DIR, componentName, 'index.tsx')
  if (!existsSync(indexPath)) return null
  return readFileSync(indexPath, 'utf-8')
}

function extractExports(content: string): string[] {
  const exports: string[] = []
  const exportRegex = /export\s+(?:const|function|class|type|interface)\s+(\w+)/g
  let match
  while ((match = exportRegex.exec(content)) !== null) {
    exports.push(match[1])
  }
  return exports
}

function getMainComponentName(componentName: string, exports: string[]): string {
  // Common patterns
  const pascalName = componentName
    .split('-')
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join('')

  if (exports.includes(pascalName)) return pascalName
  if (exports.includes(componentName)) return componentName
  // Try to find a component-like export
  const componentExport = exports.find((e) => e[0] === e[0].toUpperCase() && !e.startsWith('use') && !e.endsWith('Props') && !e.endsWith('Variants'))
  return componentExport || pascalName
}

function generateStory(componentName: string, mainExport: string, allExports: string[]): string {
  const titleCategory = getCategory(componentName)
  const subcomponents = allExports.filter((e) => e !== mainExport && e[0] === e[0].toUpperCase() && !e.endsWith('Props') && !e.endsWith('Variants')).slice(0, 5)

  const subcomponentImports = subcomponents.length > 0
    ? `, ${subcomponents.join(', ')}`
    : ''

  const subcomponentDoc = subcomponents.length > 0
    ? `  subcomponents: { ${subcomponents.join(', ')} },`
    : ''

  return `import type { Meta, StoryObj } from '@storybook/react'
import { ${mainExport}${subcomponentImports} } from './index'

const meta: Meta<typeof ${mainExport}> = {
  title: '${titleCategory}/${pascalCase(componentName)}',
  component: ${mainExport},
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
${subcomponentDoc}
}

export default meta
type Story = StoryObj<typeof ${mainExport}>

export const Default: Story = {
  render: () => <${mainExport} />,
}
`
}

function pascalCase(str: string): string {
  return str
    .split('-')
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join('')
}

function getCategory(componentName: string): string {
  const categories: Record<string, string> = {
    // General
    button: '通用', icon: '通用', typography: '通用', floatButton: '通用',
    // Layout
    divider: '布局', flex: '布局', grid: '布局', layout: '布局', space: '布局', splitter: '布局',
    // Navigation
    anchor: '导航', breadcrumb: '导航', dropdown: '导航', menu: '导航', pagination: '导航', steps: '导航', tabs: '导航',
    // Data Entry
    autoComplete: '数据录入', cascader: '数据录入', checkbox: '数据录入', colorPicker: '数据录入', datePicker: '数据录入', form: '数据录入', input: '数据录入', inputNumber: '数据录入', mentions: '数据录入', radio: '数据录入', rate: '数据录入', select: '数据录入', slider: '数据录入', switch: '数据录入', timePicker: '数据录入', transfer: '数据录入', treeSelect: '数据录入', upload: '数据录入',
    // Data Display
    avatar: '数据展示', badge: '数据展示', calendar: '数据展示', card: '数据展示', carousel: '数据展示', collapse: '数据展示', descriptions: '数据展示', empty: '数据展示', image: '数据展示', list: '数据展示', popover: '数据展示', qrcode: '数据展示', segmented: '数据展示', statistic: '数据展示', table: '数据展示', tag: '数据展示', timeline: '数据展示', tooltip: '数据展示', tour: '数据展示', tree: '数据展示',
    // Feedback
    alert: '反馈', drawer: '反馈', message: '反馈', modal: '反馈', notification: '反馈', popconfirm: '反馈', progress: '反馈', result: '反馈', skeleton: '反馈', spin: '反馈', watermark: '反馈',
    // Other
    affix: '其他', app: '其他', configProvider: '其他',
    // Charts
    chart: '图表',
  }
  return categories[componentName] || '组件'
}

function main() {
  const components = getComponentDirs()
  console.log(`Found ${components.length} components without stories`)

  for (const component of components) {
    const content = readComponentIndex(component)
    if (!content) {
      console.log(`Skipping ${component}: no index.tsx`)
      continue
    }

    const exports = extractExports(content)
    const mainExport = getMainComponentName(component, exports)

    const storyContent = generateStory(component, mainExport, exports)
    const storyPath = join(COMPONENTS_DIR, component, `${component}.stories.tsx`)

    writeFileSync(storyPath, storyContent)
    console.log(`Generated story for ${component} (main export: ${mainExport})`)
  }

  console.log('Done!')
}

main()