import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { CodeEditor } from './index'

const meta: Meta<typeof CodeEditor> = {
  title: '编辑器/CodeEditor 代码编辑器',
  component: CodeEditor,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    language: {
      control: 'select',
      options: ['javascript', 'typescript', 'python', 'json', 'html', 'css', 'plaintext'],
      description: '编程语言，用于语法高亮',
    },
    readonly: {
      control: 'boolean',
      description: '是否只读',
    },
    showLineNumbers: {
      control: 'boolean',
      description: '是否显示行号',
    },
    wordWrap: {
      control: 'boolean',
      description: '是否自动换行',
    },
    tabSize: {
      control: 'number',
      description: 'Tab 键空格数',
    },
  },
}

export default meta
type Story = StoryObj<typeof CodeEditor>

const jsCode = `function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// 计算前 10 个斐波那契数
const result = Array.from({ length: 10 }, (_, i) => fibonacci(i));
console.log(result);`

const tsCode = `interface User {
  id: number;
  name: string;
  email: string;
}

async function fetchUser(id: number): Promise<User> {
  const response = await fetch(\`/api/users/\${id}\`);
  return response.json();
}`

const pythonCode = `def quicksort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quicksort(left) + middle + quicksort(right)

# 测试
print(quicksort([3, 6, 8, 10, 1, 2, 1]))`

const jsonCode = `{
  "name": "simplUI",
  "version": "1.0.0",
  "description": "轻量级 UI 组件库",
  "dependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0"
  }
}`

export const Default: Story = {
  args: {
    defaultValue: jsCode,
    language: 'javascript',
  },
}

export const JavaScript: Story = {
  args: {
    defaultValue: jsCode,
    language: 'javascript',
  },
}

export const TypeScript: Story = {
  args: {
    defaultValue: tsCode,
    language: 'typescript',
  },
}

export const Python: Story = {
  args: {
    defaultValue: pythonCode,
    language: 'python',
  },
}

export const JSON: Story = {
  args: {
    defaultValue: jsonCode,
    language: 'json',
  },
}

export const Readonly: Story = {
  args: {
    defaultValue: jsCode,
    language: 'javascript',
    readonly: true,
  },
}

export const NoLineNumbers: Story = {
  args: {
    defaultValue: jsCode,
    language: 'javascript',
    showLineNumbers: false,
  },
}

export const WordWrap: Story = {
  args: {
    defaultValue: jsCode,
    language: 'javascript',
    wordWrap: true,
  },
}

export const Controlled: Story = {
  render: () => {
    const [code, setCode] = useState(tsCode)
    return (
      <div className="flex flex-col gap-3">
        <CodeEditor value={code} onChange={setCode} language="typescript" />
        <p className="text-xs text-muted-foreground">当前行数：{code.split('\n').length}</p>
      </div>
    )
  },
}
