import type { Meta, StoryObj } from '@storybook/react'
import { PDFViewer } from './index'

const meta: Meta<typeof PDFViewer> = {
  title: '编辑器/PDFViewer PDF 预览',
  component: PDFViewer,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    src: {
      control: 'text',
      description: 'PDF 文件 URL',
    },
    fileName: {
      control: 'text',
      description: '文件名，用于下载时的默认文件名',
    },
    defaultScale: {
      control: 'number',
      description: '初始缩放比例',
    },
    showToolbar: {
      control: 'boolean',
      description: '是否显示工具栏',
    },
    showPageNumber: {
      control: 'boolean',
      description: '是否显示页码/文件名',
    },
  },
}

export default meta
type Story = StoryObj<typeof PDFViewer>

export const Default: Story = {
  args: {
    src: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    fileName: '示例文档.pdf',
  },
}

export const CustomScale: Story = {
  args: {
    src: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    fileName: '缩放示例.pdf',
    defaultScale: 150,
  },
}

export const NoToolbar: Story = {
  args: {
    src: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    showToolbar: false,
  },
}

export const NoPageNumber: Story = {
  args: {
    src: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    fileName: '无页码.pdf',
    showPageNumber: false,
  },
}

export const ErrorHandling: Story = {
  args: {
    src: 'https://example.com/nonexistent.pdf',
    fileName: '错误示例.pdf',
  },
}
