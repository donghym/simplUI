import type { Meta, StoryObj } from '@storybook/react'
import type { ReactNode } from 'react'
import { useMemo } from 'react'
import { Watermark } from './index'

const meta: Meta<typeof Watermark> = {
  title: '反馈/Watermark 水印',
  component: Watermark,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: '用于在页面上添加水印，保护内容版权或标识文档状态。',
      },
    },
  },
  argTypes: {
    opacity: { control: { type: 'range', min: 0, max: 1, step: 0.1 } },
    rotate: { control: 'number' },
    fontSize: { control: 'number' },
    fullScreen: { control: 'boolean' },
    gapX: { control: 'number' },
    gapY: { control: 'number' },
  },
}

export default meta

type Story = StoryObj<typeof Watermark>

const Container = ({ children }: { children: ReactNode }) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: 320,
      borderRadius: 8,
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: '#fff',
      fontSize: 18,
    }}
  >
    {children}
  </div>
)

export const Basic: Story = {
  render: () => (
    <Watermark content="Internal Use">
      <Container>
        <div className="text-center">
          <h2 className="text-2xl m-0">Confidential Document</h2>
          <p className="mt-2 opacity-85">This content is protected by a watermark.</p>
        </div>
      </Container>
    </Watermark>
  ),
}

export const MultiLine: Story = {
  render: () => (
    <Watermark content={['Top Secret', 'Do Not Distribute']}>
      <Container>
        <div className="text-center">
          <h2 className="text-2xl m-0">Sensitive Information</h2>
          <p className="mt-2 opacity-85">Multi-line watermark for extra protection.</p>
        </div>
      </Container>
    </Watermark>
  ),
}

export const CustomStyle: Story = {
  render: () => (
    <Watermark content="DRAFT" fontSize={28} rotate={-15} opacity={0.15} gapX={150} gapY={150}>
      <Container>
        <div className="text-center">
          <h2 className="text-2xl m-0">Draft Document</h2>
          <p className="mt-2 opacity-85">Blue watermark with custom size and spacing.</p>
        </div>
      </Container>
    </Watermark>
  ),
}

export const DenseWatermark: Story = {
  name: 'Dense Spacing',
  render: () => (
    <Watermark content="CONFIDENTIAL" color="#ff4d4f" fontSize={14} rotate={-30} opacity={0.08} gapX={80} gapY={60}>
      <Container>
        <div className="text-center">
          <h2 className="text-2xl m-0">High Security</h2>
          <p className="mt-2 opacity-85">Tighter watermark spacing for higher security.</p>
        </div>
      </Container>
    </Watermark>
  ),
}

export const FullScreen: Story = {
  render: () => (
    <Watermark content="SAMPLE" fullScreen>
      <Container>
        <div className="text-center">
          <h2 className="text-2xl m-0">Full Screen Watermark</h2>
          <p className="mt-2 opacity-85">
            The watermark covers the entire viewport on scroll.
          </p>
        </div>
      </Container>
    </Watermark>
  ),
}

function generateImageDataUrl(): string {
  const canvas = document.createElement('canvas')
  canvas.width = 80
  canvas.height = 80
  const ctx = canvas.getContext('2d')
  if (!ctx) return ''
  ctx.fillStyle = 'rgba(0,0,0,0.08)'
  ctx.beginPath()
  ctx.arc(40, 30, 20, 0, Math.PI * 2)
  ctx.fill()
  ctx.fillRect(25, 55, 30, 8)
  return canvas.toDataURL()
}

export const ImageWatermark: Story = {
  render: () => {
    const imageUrl = useMemo(() => generateImageDataUrl(), [])
    return (
      <div
        style={{
          position: 'relative',
          height: 320,
          borderRadius: 8,
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: '#fff',
          fontSize: 18,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        <div className="text-center">
          <h2 className="text-2xl m-0">Image Watermark</h2>
          <p className="mt-2 opacity-85">使用图片作为水印内容</p>
        </div>
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${imageUrl})`,
            backgroundRepeat: 'repeat',
            pointerEvents: 'none',
            zIndex: 9999,
          }}
        />
      </div>
    )
  },
}
