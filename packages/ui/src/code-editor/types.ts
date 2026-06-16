import { HTMLAttributes } from 'react'
import type { VariantProps } from 'class-variance-authority'
import { codeEditorVariants } from './code-editor-variants'

/** 编程语言类型 */
export type CodeLanguage = 'javascript' | 'typescript' | 'python' | 'json' | 'html' | 'css' | 'plaintext'

/** CodeEditor 组件属性 */
export interface CodeEditorProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'>,
    VariantProps<typeof codeEditorVariants> {
  /** 当前代码内容（受控模式） */
  value?: string
  /** 默认代码内容（非受控模式） */
  defaultValue?: string
  /** 内容变化回调 */
  onChange?: (value: string) => void
  /** 编程语言，用于语法高亮，默认 plaintext */
  language?: CodeLanguage
  /** 是否只读，默认 false */
  readonly?: boolean
  /** 是否显示行号，默认 true */
  showLineNumbers?: boolean
  /** 是否自动换行，默认 false */
  wordWrap?: boolean
  /** Tab 键空格数，默认 2 */
  tabSize?: number
  /** 占位文本 */
  placeholder?: string
}
