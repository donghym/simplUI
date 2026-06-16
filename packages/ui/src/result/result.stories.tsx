import type { Meta, StoryObj } from '@storybook/react'
import type { CSSProperties } from 'react'
import { useState } from 'react'
import { Result } from './index'
import { Steps } from '../steps/index'
import { PartyPopper } from 'lucide-react'

const btnStyle: CSSProperties = {
  padding: '4px 16px',
  borderRadius: 6,
  border: '1px solid #d9d9d9',
  background: '#fff',
  cursor: 'pointer',
  fontSize: 14,
  lineHeight: '22px',
}

const meta: Meta<typeof Result> = {
  title: '反馈/Result 结果',
  component: Result,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: '用于反馈一系列操作任务的处理结果。',
      },
    },
  },
  argTypes: {
    status: {
      control: 'select',
      options: ['success', 'error', 'info', 'warning', '404', '403', '500'],
    },
  },
}

export default meta

type Story = StoryObj<typeof Result>

export const Default: Story = {
  args: {
    status: 'info',
    title: 'Your operation has been executed',
    subTitle: 'This is a default result message.',
  },
}

export const Success: Story = {
  args: {
    status: 'success',
    title: 'Successfully Purchased Cloud Server ECS!',
    subTitle: 'Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait.',
    extra: (
      <div className="flex gap-2 justify-center">
        <button style={btnStyle}>Go Console</button>
        <button style={btnStyle}>Buy Again</button>
      </div>
    ),
  },
}

export const Error: Story = {
  args: {
    status: 'error',
    title: 'Submission Failed',
    subTitle: 'Please check and modify the following information before resubmitting.',
    extra: <button style={btnStyle}>Go Back</button>,
  },
}

export const Info: Story = {
  args: {
    status: 'info',
    title: 'Your operation has been executed',
    extra: <button style={btnStyle}>OK</button>,
  },
}

export const Warning: Story = {
  args: {
    status: 'warning',
    title: 'There are some problems with your operation.',
    extra: <button style={btnStyle}>OK</button>,
  },
}

export const NotFound: Story = {
  args: {
    status: '404',
    title: '404',
    subTitle: 'Sorry, the page you visited does not exist.',
    extra: <button style={btnStyle}>Back Home</button>,
  },
}

export const Forbidden: Story = {
  args: {
    status: '403',
    title: '403',
    subTitle: 'Sorry, you are not authorized to access this page.',
    extra: <button style={btnStyle}>Back Home</button>,
  },
}

export const ServerError: Story = {
  args: {
    status: '500',
    title: '500',
    subTitle: 'Sorry, something went wrong.',
    extra: <button style={btnStyle}>Back Home</button>,
  },
}

export const CustomIcon: Story = {
  args: {
    icon: <PartyPopper className="h-20 w-20" />,
    title: 'Great, we have done all the operations!',
    extra: <button style={btnStyle}>Go Console</button>,
  },
}

export const CompleteFlow: Story = {
  render: () => {
    const [current, setCurrent] = useState(1)
    return (
      <div className="flex flex-col gap-8">
        <Steps
          current={current}
          items={[
            { title: 'Order Submitted', description: 'Your order has been placed' },
            { title: 'Processing', description: 'Preparing your order' },
            { title: 'Complete', description: 'Order delivered successfully' },
          ]}
        />
        {current < 2 ? (
          <Result
            status={current === 0 ? 'info' : 'warning'}
            title={current === 0 ? 'Order Submitted' : 'Processing Order'}
            subTitle={current === 0 ? 'Your order #20241215001 has been submitted successfully.' : 'Your order is being prepared for shipping.'}
            extra={
              <button style={btnStyle} onClick={() => setCurrent((c) => c + 1)}>
                {current === 0 ? 'Track Order' : 'Confirm Delivery'}
              </button>
            }
          />
        ) : (
          <Result
            status="success"
            title="Order Complete!"
            subTitle="Your order has been delivered successfully. Thank you for your purchase!"
            extra={
              <div className="flex gap-2 justify-center">
                <button style={btnStyle} onClick={() => setCurrent(0)}>Start Over</button>
                <button style={{ ...btnStyle, background: '#1677ff', color: '#fff', border: 'none' }}>View Receipt</button>
              </div>
            }
          />
        )}
      </div>
    )
  },
}
