import type { Meta, StoryObj } from '@storybook/react'
import { ImageEditor } from './index'

const meta: Meta<typeof ImageEditor> = {
  title: '媒体/ImageEditor 图片编辑器',
  component: ImageEditor,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    showToolbar: {
      control: 'boolean',
      description: '是否显示工具栏',
    },
    rotateStep: {
      control: 'number',
      description: '旋转角度步长',
    },
    zoomStep: {
      control: 'number',
      description: '缩放步长',
    },
    cropMode: {
      control: 'boolean',
      description: '是否启用裁剪模式',
    },
  },
}

export default meta
type Story = StoryObj<typeof ImageEditor>

const SAMPLE_IMG = 'https://picsum.photos/id/10/800/600'

export const Default: Story = {
  args: {
    src: SAMPLE_IMG,
  },
}

export const CropMode: Story = {
  args: {
    src: SAMPLE_IMG,
    cropMode: true,
  },
}

export const NoToolbar: Story = {
  args: {
    src: SAMPLE_IMG,
    showToolbar: false,
  },
}

export const CustomSteps: Story = {
  args: {
    src: SAMPLE_IMG,
    rotateStep: 45,
    zoomStep: 0.2,
  },
}

export const WithExport: Story = {
  render: () => {
    const handleChange = (dataUrl: string) => {
      console.log('导出数据:', dataUrl.substring(0, 50) + '...')
    }
    return <ImageEditor src={SAMPLE_IMG} onChange={handleChange} />
  },
}
