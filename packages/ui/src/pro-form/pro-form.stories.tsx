import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { ProForm, ProFormText, ProFormSelect, ProFormList } from './index'

const meta: Meta<typeof ProForm> = {
  title: '数据录入/ProForm 高阶表单',
  component: ProForm,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: [
          'ProForm 是基于 Form 封装的高阶业务表单组件。',
          '',
          '### 与基础 Form 的区别',
          '',
          '| 特性 | Form（基础表单） | ProForm（高阶表单） |',
          '|------|-----------------|-------------------|',
          '| 定位 | 低级别 UI 容器 | 高阶业务封装 |',
          '| 状态管理 | 无，需自行管理 | 内置 formValues、errors、submitting |',
          '| 校验 | 需自行实现 | 内置 required/pattern/min/max 规则 |',
          '| 初始值 | 无 | initialValues 一键设置 |',
          '| 提交处理 | 简单 onSubmit | onFinish 支持 Promise，自动管理 loading |',
          '| 提交按钮 | 需手动添加 | submitter 配置内置提交/重置 |',
          '| 布局 | horizontal/vertical/inline | 同左 + grid 网格布局 |',
          '| 子组件 | Form.Item 通用容器 | ProFormText/Select/List 专用组件 |',
          '| 字段联动 | 需自行实现 | dependencies 依赖自动校验 |',
          '',
          '**选型建议**：快速搭建带校验的表单用 ProForm；需要完全自定义控件或特殊布局时用 Form。',
        ].join('\n'),
      },
    },
  },
  argTypes: {
    layout: {
      control: 'select',
      options: ['horizontal', 'vertical', 'inline'],
      description: '表单布局方式',
    },
    grid: {
      control: 'boolean',
      description: '是否启用网格布局',
    },
    submitter: {
      control: 'boolean',
      description: '是否显示提交按钮区域',
    },
  },
}

export default meta
type Story = StoryObj<typeof ProForm>

/* ------------------------------------------------------------------ */
/*  基础表单                                                            */
/* ------------------------------------------------------------------ */

export const Basic: Story = {
  render: () => (
    <ProForm
      layout="vertical"
      onFinish={fn()}
    >
      <ProFormText
        name="username"
        label="用户名"
        rules={[{ required: true, message: '请输入用户名' }]}
        placeholder="请输入用户名"
      />
      <ProFormText
        name="email"
        label="邮箱"
        rules={[
          { required: true, message: '请输入邮箱' },
          { pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: '邮箱格式不正确' },
        ]}
        placeholder="请输入邮箱"
      />
      <ProFormText
        name="password"
        label="密码"
        rules={[
          { required: true, message: '请输入密码' },
          { min: 6, message: '密码至少 6 个字符' },
        ]}
        placeholder="请输入密码"
      />
    </ProForm>
  ),
}

/* ------------------------------------------------------------------ */
/*  多列布局                                                            */
/* ------------------------------------------------------------------ */

export const GridLayout: Story = {
  render: () => (
    <ProForm
      layout="vertical"
      grid={{ columns: 2, gap: 16 }}
      onFinish={fn()}
    >
      <ProFormText name="firstName" label="姓" placeholder="请输入姓" rules={[{ required: true, message: '请输入姓' }]} />
      <ProFormText name="lastName" label="名" placeholder="请输入名" rules={[{ required: true, message: '请输入名' }]} />
      <ProFormText name="email" label="邮箱" placeholder="请输入邮箱" />
      <ProFormText name="phone" label="手机号码" placeholder="请输入手机号码" />
      <ProFormSelect
        name="city"
        label="城市"
        placeholder="请选择城市"
        options={[
          { label: '北京', value: 'beijing' },
          { label: '上海', value: 'shanghai' },
          { label: '杭州', value: 'hangzhou' },
        ]}
      />
      <ProFormSelect
        name="department"
        label="部门"
        placeholder="请选择部门"
        options={[
          { label: '研发部', value: 'dev' },
          { label: '产品部', value: 'product' },
          { label: '设计部', value: 'design' },
        ]}
      />
    </ProForm>
  ),
}

/* ------------------------------------------------------------------ */
/*  表单联动                                                            */
/* ------------------------------------------------------------------ */

export const Dependencies: Story = {
  render: () => (
    <ProForm
      layout="vertical"
      onFinish={fn()}
    >
      <ProFormSelect
        name="type"
        label="账户类型"
        rules={[{ required: true, message: '请选择账户类型' }]}
        placeholder="请选择账户类型"
        options={[
          { label: '个人账户', value: 'personal' },
          { label: '企业账户', value: 'business' },
        ]}
      />
      <ProFormText
        name="idCard"
        label="身份证号"
        dependencies={['type']}
        hidden={(values) => values.type !== 'personal'}
        placeholder="请输入身份证号"
      />
      <ProFormText
        name="creditCode"
        label="统一社会信用代码"
        dependencies={['type']}
        hidden={(values) => values.type !== 'business'}
        placeholder="请输入统一社会信用代码"
      />
      <ProFormText
        name="name"
        label="姓名"
        rules={[{ required: true, message: '请输入姓名' }]}
        placeholder="请输入姓名"
      />
    </ProForm>
  ),
}

/* ------------------------------------------------------------------ */
/*  动态表单项                                                          */
/* ------------------------------------------------------------------ */

export const DynamicList: Story = {
  render: () => (
    <ProForm
      layout="vertical"
      onFinish={fn()}
    >
      <ProFormText
        name="title"
        label="表单标题"
        rules={[{ required: true, message: '请输入表单标题' }]}
        placeholder="请输入表单标题"
      />
      <ProFormList
        name="members"
        label="成员列表"
        initialCount={1}
        maxItems={5}
        addButtonText="添加成员"
        removeButtonText="移除"
      >
        {(index, namePrefix) => (
          <div className="grid grid-cols-2 gap-3">
            <ProFormText
              name={`${namePrefix}.name`}
              label="姓名"
              rules={[{ required: true, message: '请输入姓名' }]}
              placeholder="请输入姓名"
            />
            <ProFormText
              name={`${namePrefix}.email`}
              label="邮箱"
              placeholder="请输入邮箱"
            />
          </div>
        )}
      </ProFormList>
    </ProForm>
  ),
}

/* ------------------------------------------------------------------ */
/*  提交与重置                                                          */
/* ------------------------------------------------------------------ */

export const SubmitAndReset: Story = {
  render: () => (
    <ProForm
      layout="vertical"
      initialValues={{ username: '张三', city: 'beijing' }}
      submitter={{
        submitText: '保存',
        resetText: '还原',
        showReset: true,
      }}
      onFinish={async (values) => {
        await new Promise((resolve) => setTimeout(resolve, 1500))
        console.log('提交数据:', values)
      }}
    >
      <ProFormText
        name="username"
        label="用户名"
        rules={[{ required: true, message: '请输入用户名' }]}
        placeholder="请输入用户名"
      />
      <ProFormSelect
        name="city"
        label="城市"
        rules={[{ required: true, message: '请选择城市' }]}
        placeholder="请选择城市"
        options={[
          { label: '北京', value: 'beijing' },
          { label: '上海', value: 'shanghai' },
          { label: '杭州', value: 'hangzhou' },
        ]}
      />
    </ProForm>
  ),
}

/* ------------------------------------------------------------------ */
/*  自定义提交按钮                                                      */
/* ------------------------------------------------------------------ */

export const CustomSubmitter: Story = {
  render: () => (
    <ProForm
      layout="vertical"
      submitter={{
        render: ({ onSubmit, onSubmitting }) => (
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 disabled:opacity-50"
              onClick={onSubmit}
              disabled={onSubmitting}
            >
              {onSubmitting ? '提交中...' : '确认提交'}
            </button>
          </div>
        ),
      }}
      onFinish={async (values) => {
        await new Promise((resolve) => setTimeout(resolve, 1000))
        console.log('提交数据:', values)
      }}
    >
      <ProFormText
        name="name"
        label="姓名"
        rules={[{ required: true, message: '请输入姓名' }]}
        placeholder="请输入姓名"
      />
    </ProForm>
  ),
}

/* ------------------------------------------------------------------ */
/*  三列布局                                                            */
/* ------------------------------------------------------------------ */

export const ThreeColumns: Story = {
  render: () => (
    <ProForm
      layout="vertical"
      grid={{ columns: 3, gap: 16 }}
      onFinish={fn()}
    >
      <ProFormText name="field1" label="字段 1" placeholder="请输入" />
      <ProFormText name="field2" label="字段 2" placeholder="请输入" />
      <ProFormText name="field3" label="字段 3" placeholder="请输入" />
      <ProFormText name="field4" label="字段 4" placeholder="请输入" />
      <ProFormSelect
        name="field5"
        label="字段 5"
        placeholder="请选择"
        options={[
          { label: '选项 A', value: 'a' },
          { label: '选项 B', value: 'b' },
        ]}
      />
      <ProFormText name="field6" label="字段 6" placeholder="请输入" />
    </ProForm>
  ),
}

/**
 * 与基础 Form 对比
 *
 * 同样的用户注册场景，分别用 Form（左）和 ProForm（右）实现。
 *
 * Form 需要手动管理状态、校验逻辑和提交按钮，代码量约 60-80 行。
 * ProForm 通过内置状态管理和校验规则，代码量约 20-30 行。
 *
 * 如果需要完全自定义控件样式或特殊布局，请使用基础 Form。
 */
export const ComparisonWithForm: Story = {
  parameters: {
    docs: {
      description: {
        story: [
          '对比示例：同样的注册表单场景',
          '',
          '- **Form**：需要手动管理 useState、校验函数、提交按钮，代码量 ~60 行',
          '- **ProForm**：内置状态管理、校验规则、提交按钮，代码量 ~20 行',
          '',
          'ProForm 适合快速开发，Form 适合精细控制。',
        ].join('\n'),
      },
    },
  },
  render: () => (
    <ProForm
      layout="vertical"
      initialValues={{ city: 'beijing' }}
      submitter={{ submitText: '注册', resetText: '清空' }}
      onFinish={async (values) => {
        console.log('注册数据:', values)
        await new Promise((resolve) => setTimeout(resolve, 1000))
      }}
    >
      <ProFormText
        name="username"
        label="用户名"
        rules={[{ required: true, message: '请输入用户名' }, { min: 3, message: '至少 3 个字符' }]}
        placeholder="请输入用户名"
      />
      <ProFormText
        name="email"
        label="邮箱"
        rules={[
          { required: true, message: '请输入邮箱' },
          { pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: '邮箱格式不正确' },
        ]}
        placeholder="请输入邮箱"
      />
      <ProFormText
        name="password"
        label="密码"
        rules={[{ required: true, message: '请输入密码' }, { min: 6, message: '至少 6 个字符' }]}
        placeholder="请输入密码"
      />
      <ProFormSelect
        name="city"
        label="城市"
        options={[
          { label: '北京', value: 'beijing' },
          { label: '上海', value: 'shanghai' },
          { label: '杭州', value: 'hangzhou' },
        ]}
      />
    </ProForm>
  ),
}
