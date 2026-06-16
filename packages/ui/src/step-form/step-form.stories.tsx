import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { StepForm } from './index'

const meta: Meta<typeof StepForm> = {
  title: '表单/StepForm 分步表单',
  component: StepForm,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    current: { control: 'number', description: '当前步骤索引（受控模式）' },
    prevText: { control: 'text', description: '上一步按钮文本' },
    nextText: { control: 'text', description: '下一步按钮文本' },
    finishText: { control: 'text', description: '完成按钮文本' },
    onStepChange: { action: '步骤变化', description: '步骤变化回调' },
    onFinish: { action: '完成', description: '全部步骤完成回调' },
  },
}

export default meta
type Story = StoryObj<typeof StepForm>

const basicSteps = [
  { title: '基本信息', description: '填写基础资料', content: <div className="space-y-3"><input className="w-full border rounded-md px-3 py-2 text-sm" placeholder="请输入姓名" /><input className="w-full border rounded-md px-3 py-2 text-sm" placeholder="请输入邮箱" /></div> },
  { title: '详细配置', description: '设置偏好选项', content: <div className="space-y-3"><select className="w-full border rounded-md px-3 py-2 text-sm"><option>选项一</option><option>选项二</option></select><textarea className="w-full border rounded-md px-3 py-2 text-sm" placeholder="备注信息" rows={3} /></div> },
  { title: '确认提交', description: '核对信息并提交', content: <div className="text-sm text-muted-foreground">请确认以上信息无误后提交。</div> },
]

export const Default: Story = {
  args: {
    steps: basicSteps,
    onStepChange: fn(),
    onFinish: fn(),
  },
}

export const Controlled: Story = {
  args: {
    steps: basicSteps,
    current: 1,
    onStepChange: fn(),
    onFinish: fn(),
  },
}

export const CustomButtonText: Story = {
  args: {
    steps: basicSteps,
    prevText: '返回',
    nextText: '继续',
    finishText: '确认提交',
    onStepChange: fn(),
    onFinish: fn(),
  },
}

export const SingleStep: Story = {
  args: {
    steps: [{ title: '完成', content: <div className="text-sm">仅一步操作</div> }],
    onFinish: fn(),
  },
}

export const ManySteps: Story = {
  args: {
    steps: [
      { title: '步骤一', content: <div className="text-sm">第一步内容</div> },
      { title: '步骤二', content: <div className="text-sm">第二步内容</div> },
      { title: '步骤三', content: <div className="text-sm">第三步内容</div> },
      { title: '步骤四', content: <div className="text-sm">第四步内容</div> },
      { title: '步骤五', content: <div className="text-sm">第五步内容</div> },
    ],
    onStepChange: fn(),
    onFinish: fn(),
  },
}
