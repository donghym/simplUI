import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Alert } from './index'

const meta: Meta<typeof Alert> = {
  title: '反馈/Alert 警告提示',
  component: Alert,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: '警告提示用于向用户传递需要关注的信息。适用于操作反馈、系统通知、异常提醒等场景，支持成功、信息、警告、错误四种类型。',
      },
    },
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['success', 'info', 'warning', 'error'],
    },
    showIcon: { control: 'boolean' },
    closable: { control: 'boolean' },
    banner: { control: 'boolean' },
  },
}

export default meta

type Story = StoryObj<typeof Alert>

export const Basic: Story = {
  args: {
    message: 'Success Text',
    type: 'success',
  },
}

export const Types: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Alert message="Success Text" type="success" />
      <Alert message="Info Text" type="info" />
      <Alert message="Warning Text" type="warning" />
      <Alert message="Error Text" type="error" />
    </div>
  ),
}

export const WithIcon: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Alert message="Success Tips" type="success" showIcon />
      <Alert message="Informational Notes" type="info" showIcon />
      <Alert message="Warning" type="warning" showIcon />
      <Alert message="Error" type="error" showIcon />
    </div>
  ),
}

export const WithDescription: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Alert
        message="Success Text"
        description="Detailed description and advice about successful copywriting."
        type="success"
        showIcon
      />
      <Alert
        message="Info Text"
        description="Additional description and information about copywriting."
        type="info"
        showIcon
      />
      <Alert
        message="Warning Text"
        description="This is a warning notice about copywriting."
        type="warning"
        showIcon
      />
      <Alert
        message="Error Text"
        description="This is an error message about copywriting."
        type="error"
        showIcon
      />
    </div>
  ),
}

export const Closable: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Alert message="Warning Text" type="warning" closable />
      <Alert
        message="Error Text"
        description="Error Description"
        type="error"
        closable
      />
    </div>
  ),
}

export const WithAction: Story = {
  render: () => (
    <Alert
      message="Success Tips"
      type="success"
      showIcon
      action={<a href="#" className="text-primary-500">Detail &gt;</a>}
    />
  ),
}

export const Banner: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Alert message="Warning text" banner />
      <Alert message="Very long warning text" banner closable />
    </div>
  ),
}

export const ClosableWithAnimation: Story = {
  render: () => {
    const [visible, setVisible] = useState(true)
    const [closing, setClosing] = useState(false)

    const handleClose = () => {
      setClosing(true)
      setTimeout(() => {
        setVisible(false)
        setClosing(false)
      }, 300)
    }

    if (!visible) {
      return (
        <button
          type="button"
          className="px-3 py-1.5 border border-gray-300 rounded-md text-sm hover:bg-gray-50"
          onClick={() => setVisible(true)}
        >
          Show Alert Again
        </button>
      )
    }

    return (
      <div
        style={{
          transition: 'opacity 0.3s, transform 0.3s',
          opacity: closing ? 0 : 1,
          transform: closing ? 'translateY(-10px)' : 'translateY(0)',
        }}
      >
        <Alert
          message="This alert can be closed with animation"
          type="warning"
          showIcon
          closable
          onClose={handleClose}
        />
      </div>
    )
  },
}

export const ActionInteraction: Story = {
  render: () => {
    const [clicked, setClicked] = useState(false)
    return (
      <div className="flex flex-col gap-4">
        <Alert
          message="New version available"
          description="A new version of the application is ready to install."
          type="info"
          showIcon
          action={
            <button
              type="button"
              className="px-3 py-1 text-sm font-medium text-primary-500 hover:text-primary-600 border border-primary-500 rounded-md hover:bg-primary-50 transition-colors"
              onClick={() => setClicked(true)}
            >
              Update Now
            </button>
          }
        />
        {clicked && (
          <Alert
            message="Update started!"
            type="success"
            showIcon
            closable
            onClose={() => setClicked(false)}
          />
        )}
      </div>
    )
  },
}
