import type { Meta, StoryObj } from '@storybook/react'
import { useState, useRef } from 'react'
import { fn } from '@storybook/test'
import { Form, FormItem } from './index'
import { Input } from '../input/index'
import { Button } from '../button/index'
import { Select } from '../select/index'
import { Checkbox } from '../checkbox/index'
import { Radio, RadioGroup } from '../radio/index'
import { Switch } from '../switch/index'
import { InputNumber } from '../input-number/index'
import { Space } from '../space/index'
import { Row, Col } from '../grid/index'
import { Plus, Minus, Search } from 'lucide-react'

const meta: Meta<typeof Form> = {
  title: '数据录入/Form 表单',
  component: Form,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: [
          '表单用于收集、校验和提交用户输入的数据。适用于登录注册、信息录入、高级搜索等场景，支持多种布局、校验状态和动态增减表单项。',
          '',
          '### 与 ProForm 的区别',
          '',
          '| 特性 | Form（基础表单） | ProForm（高阶表单） |',
          '|------|-----------------|-------------------|',
          '| 定位 | 低级别 UI 容器 | 高阶业务封装 |',
          '| 状态管理 | 需自行管理 useState | 内置 formValues、errors、submitting |',
          '| 校验 | 需自行实现校验逻辑 | 内置 required/pattern/min/max 规则 |',
          '| 初始值 | 通过控件 defaultValue | initialValues 一键设置 |',
          '| 提交处理 | 简单 onSubmit 回调 | onFinish 支持 Promise，自动管理 loading |',
          '| 提交按钮 | 需手动添加 Button | submitter 配置内置提交/重置 |',
          '| 布局 | horizontal/vertical/inline | 同左 + grid 网格布局 |',
          '| 子组件 | Form.Item 通用容器 | ProFormText/Select/List 专用组件 |',
          '| 字段联动 | 需自行实现 | dependencies 依赖自动校验 |',
          '',
          '**选型建议**：需要完全自定义控件样式、特殊布局或已有状态管理方案时用 Form；快速搭建带校验的表单用 ProForm。',
        ].join('\n'),
      },
    },
  },
  argTypes: {
    layout: { control: 'select', options: ['horizontal', 'vertical', 'inline'], description: '表单布局方式，vertical 为垂直排列，horizontal 为水平排列，inline 为行内排列' },
    labelAlign: { control: 'select', options: ['left', 'right'], description: '标签对齐方式，left 为左对齐，right 为右对齐' },
    colon: { control: 'boolean', description: '是否在标签后显示冒号' },
    requiredMark: { control: 'select', options: ['start', 'end', 'hide'], description: '必填标记样式，start 为前置星号，end 为后置星号，hide 为隐藏' },
  },
}

export default meta
type Story = StoryObj<typeof Form>

/* ------------------------------------------------------------------ */
/*  基础示例                                                            */
/* ------------------------------------------------------------------ */

export const Vertical: Story = {
  parameters: {
    docs: {
      description: {
        story: '垂直布局表单，标签位于输入框上方，适用于大多数常规表单场景。',
      },
    },
  },
  render: () => (
    <Form layout="vertical" onSubmit={fn()} className="p-6">
      <FormItem label="用户名" name="username" required help="请输入用户名">
        <Input placeholder="请输入用户名" />
      </FormItem>
      <FormItem label="邮箱" name="email" required>
        <Input placeholder="请输入邮箱" />
      </FormItem>
      <FormItem extra="我们绝不会泄露您的邮箱信息">
        <Button variant="primary" htmlType="submit">提交</Button>
      </FormItem>
    </Form>
  ),
}

export const Horizontal: Story = {
  parameters: {
    docs: {
      description: {
        story: '水平布局表单，标签与输入框同行排列，适用于字段较少或需要紧凑排版的场景。',
      },
    },
  },
  render: () => (
    <Form
      layout="horizontal"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      colon
      labelAlign="right"
      onSubmit={fn()}
      className="p-6"
    >
      <FormItem label="姓名" name="name" required>
        <Input placeholder="请输入姓名" />
      </FormItem>
      <FormItem label="邮箱" name="email" required>
        <Input placeholder="请输入邮箱" />
      </FormItem>
      <FormItem label="密码" name="password" required validateStatus="error" help="请输入密码">
        <Input type="password" placeholder="请输入密码" />
      </FormItem>
      <FormItem wrapperCol={{ span: 16, offset: 8 }}>
        <Button variant="primary" htmlType="submit">保存</Button>
      </FormItem>
    </Form>
  ),
}

export const Inline: Story = {
  render: () => (
    <Form layout="inline" onSubmit={fn()} className="p-6">
      <FormItem label="姓名" name="name" required>
        <Input placeholder="请输入姓名" />
      </FormItem>
      <FormItem label="邮箱" name="email">
        <Input placeholder="请输入邮箱" />
      </FormItem>
      <Button variant="primary" htmlType="submit" icon={<Search className="h-4 w-4" />}>搜索</Button>
    </Form>
  ),
}

/* ------------------------------------------------------------------ */
/*  校验状态                                                            */
/* ------------------------------------------------------------------ */

export const WithValidation: Story = {
  parameters: {
    docs: {
      description: {
        story: '展示成功、错误、警告、校验中四种校验状态，适用于需要即时反馈的表单校验场景。',
      },
    },
  },
  render: () => (
    <Form layout="vertical" onSubmit={fn()} className="p-6">
      <FormItem label="用户名" name="username" required validateStatus="success" help="用户名可用">
        <Input defaultValue="alice" />
      </FormItem>
      <FormItem label="密码" name="password" required validateStatus="error" help="请输入密码">
        <Input type="password" placeholder="请输入密码" />
      </FormItem>
      <FormItem label="邮箱" name="email" validateStatus="warning" help="邮箱格式不正确">
        <Input defaultValue="not-an-email" />
      </FormItem>
      <FormItem label="验证码" name="captcha" validateStatus="validating" help="正在校验...">
        <Input placeholder="请输入验证码" />
      </FormItem>
    </Form>
  ),
}

/* ------------------------------------------------------------------ */
/*  登录表单（参照 antd）                                               */
/* ------------------------------------------------------------------ */

export const LoginForm: Story = {
  render: () => (
    <div className="w-full max-w-sm mx-auto p-8 border rounded-xl shadow-sm">
      <h2 className="text-xl font-semibold text-center mb-6">登录</h2>
      <Form
        layout="vertical"
        onSubmit={fn()}
      >
        <FormItem label="用户名" name="username" required>
          <Input placeholder="请输入用户名" />
        </FormItem>
        <FormItem label="密码" name="password" required>
          <Input type="password" placeholder="请输入密码" />
        </FormItem>
        <FormItem>
          <div className="flex items-center justify-between">
            <Checkbox defaultChecked>记住我</Checkbox>
            <a className="text-primary-500 hover:text-primary-600 text-sm">忘记密码？</a>
          </div>
        </FormItem>
        <FormItem>
          <Button variant="primary" block htmlType="submit">登录</Button>
        </FormItem>
        <div className="text-center text-sm text-gray-500">
          还没有账号？<a className="text-primary-500 hover:text-primary-600">立即注册！</a>
        </div>
      </Form>
    </div>
  ),
}

/* ------------------------------------------------------------------ */
/*  注册表单（参照 antd）                                               */
/* ------------------------------------------------------------------ */

export const RegisterForm: Story = {
  parameters: {
    docs: {
      description: {
        story: '典型的注册表单示例，包含多种输入类型和校验提示，适用于用户信息收集场景。',
      },
    },
  },
  render: () => (
    <Form
      layout="vertical"
      className="max-w-lg p-6"
      onSubmit={fn()}
    >
      <FormItem label="邮箱" name="email" required validateStatus="error" help="请输入有效的邮箱！">
        <Input placeholder="请输入邮箱" />
      </FormItem>
      <FormItem label="密码" name="password" required help="应为数字和字母的组合">
        <Input type="password" placeholder="请输入密码" />
      </FormItem>
      <FormItem label="确认密码" name="confirm" required>
        <Input type="password" placeholder="请再次输入密码" />
      </FormItem>
      <FormItem label="昵称" name="nickname" required help="希望别人怎么称呼你？">
        <Input placeholder="请输入昵称" />
      </FormItem>
      <FormItem label="常住地" name="residence" required>
        <Select
          placeholder="请选择常住地"
          options={[
            { value: 'beijing', label: '北京' },
            { value: 'shanghai', label: '上海' },
            { value: 'hangzhou', label: '杭州' },
          ]}
        />
      </FormItem>
      <FormItem label="手机号码" name="phone" required>
        <Input placeholder="请输入手机号码" />
      </FormItem>
      <FormItem label="捐赠金额" name="donation" required>
        <InputNumber prefix="¥" placeholder="0.00" className="w-full" />
      </FormItem>
      <FormItem label="个人网站" name="website" required>
        <Input placeholder="请输入网站地址" />
      </FormItem>
      <FormItem label="验证码" name="captcha" required extra="我们需要确认你是人类">
        <div className="flex gap-2">
          <Input placeholder="请输入验证码" className="flex-1" />
          <Button>获取验证码</Button>
        </div>
      </FormItem>
      <FormItem name="agreement" required>
        <Checkbox>
          我已阅读并同意 <a className="text-primary-500 hover:text-primary-600">用户协议</a>
        </Checkbox>
      </FormItem>
      <FormItem>
        <Space>
          <Button variant="primary" htmlType="submit">注册</Button>
          <Button htmlType="reset">重置</Button>
        </Space>
      </FormItem>
    </Form>
  ),
}

/* ------------------------------------------------------------------ */
/*  高级搜索（参照 antd）                                               */
/* ------------------------------------------------------------------ */

export const AdvancedSearch: Story = {
  parameters: {
    docs: {
      description: {
        story: '可展开收起的高级搜索表单，适用于后台管理系统中的复杂筛选查询场景。',
      },
    },
  },
  render: () => {
    const [expand, setExpand] = useState(false)
    return (
      <div className="border rounded-lg p-6 bg-gray-50/50">
        <Form
          layout="horizontal"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 18 }}
          onSubmit={fn()}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
            <FormItem label="姓名" name="name">
              <Input placeholder="请输入姓名" />
            </FormItem>
            <FormItem label="状态" name="status">
              <Select
                placeholder="请选择"
                options={[
                  { value: 'all', label: '全部' },
                  { value: 'active', label: '启用' },
                  { value: 'inactive', label: '禁用' },
                ]}
              />
            </FormItem>
            <FormItem label="手机号码" name="phone">
              <Input placeholder="请输入手机号码" />
            </FormItem>
            <FormItem label="邮箱" name="email">
              <Input placeholder="请输入邮箱" />
            </FormItem>
            {expand && (
              <>
                <FormItem label="日期" name="date">
                  <Input placeholder="请选择日期" />
                </FormItem>
                <FormItem label="地址" name="address">
                  <Input placeholder="请输入地址" />
                </FormItem>
                <FormItem label="城市" name="city">
                  <Select
                    placeholder="请选择"
                    options={[
                      { value: 'bj', label: '北京' },
                      { value: 'sh', label: '上海' },
                    ]}
                  />
                </FormItem>
                <FormItem label="国家" name="country">
                  <Input placeholder="请输入国家" />
                </FormItem>
              </>
            )}
          </div>
          <div className="flex justify-end gap-2 mt-4">
            <Button variant="primary" htmlType="submit" icon={<Search className="h-4 w-4" />}>搜索</Button>
            <Button>清空</Button>
            <Button variant="link" onClick={() => setExpand(!expand)}>
              {expand ? '收起' : '展开'}
            </Button>
          </div>
        </Form>
      </div>
    )
  },
}

/* ------------------------------------------------------------------ */
/*  动态增减表单项（参照 antd）                                          */
/* ------------------------------------------------------------------ */

export const DynamicFormItems: Story = {
  parameters: {
    docs: {
      description: {
        story: '动态增减表单项示例，适用于乘客信息录入、规格参数配置等数量不固定的场景。',
      },
    },
  },
  render: () => {
    const [fields, setFields] = useState([{ id: 0, name: '', nickname: '' }])
    const nextId = useRef(1)

    const addField = () => {
      setFields([...fields, { id: nextId.current, name: '', nickname: '' }])
      nextId.current += 1
    }

    const removeField = (id: number) => {
      setFields(fields.filter((f) => f.id !== id))
    }

    return (
      <Form
        layout="horizontal"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 20 }}
        className="max-w-2xl p-6"
        onSubmit={fn()}
      >
        {fields.map((field, index) => (
          <div key={field.id} className="flex gap-2 items-start">
            <div className="flex-1 grid grid-cols-2 gap-2">
              <FormItem label={index === 0 ? '乘客' : ''} required={index === 0}>
                <Input placeholder="姓名" name={`name-${field.id}`} />
              </FormItem>
              <FormItem>
                <Input placeholder="昵称" name={`nickname-${field.id}`} />
              </FormItem>
            </div>
            {fields.length > 1 && (
              <Button
                variant="link"
                className="mt-1 text-danger-500"
                onClick={() => removeField(field.id)}
                icon={<Minus className="h-4 w-4" />}
              >
                删除
              </Button>
            )}
          </div>
        ))}
        <FormItem wrapperCol={{ span: 20, offset: 4 }}>
          <Button variant="dashed" block onClick={addField} icon={<Plus className="h-4 w-4" />}>
            添加字段
          </Button>
        </FormItem>
        <FormItem wrapperCol={{ span: 20, offset: 4 }}>
          <Space>
            <Button variant="primary" htmlType="submit">提交</Button>
          </Space>
        </FormItem>
      </Form>
    )
  },
}

/* ------------------------------------------------------------------ */
/*  禁用表单                                                            */
/* ------------------------------------------------------------------ */

export const DisabledForm: Story = {
  parameters: {
    docs: {
      description: {
        story: '整表禁用状态示例，适用于表单数据只读或提交后锁定等场景。',
      },
    },
  },
  render: () => (
    <Form
      layout="horizontal"
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 18 }}
      className="max-w-xl p-6"
      onSubmit={fn()}
    >
      <FormItem label="输入框" name="input">
        <Input placeholder="输入框" disabled defaultValue="Hello" />
      </FormItem>
      <FormItem label="选择器" name="select">
        <Select
          disabled
          defaultValue="option1"
          options={[
            { value: 'option1', label: '选项 1' },
            { value: 'option2', label: '选项 2' },
          ]}
        />
      </FormItem>
      <FormItem label="复选框" name="checkbox">
        <Checkbox disabled defaultChecked>复选框</Checkbox>
      </FormItem>
      <FormItem label="单选框" name="radio">
        <RadioGroup disabled defaultValue="a">
          <Radio value="a">苹果</Radio>
          <Radio value="b">梨</Radio>
        </RadioGroup>
      </FormItem>
      <FormItem label="开关" name="switch">
        <Switch disabled defaultChecked />
      </FormItem>
      <FormItem label="数字输入框" name="number">
        <InputNumber disabled defaultValue={3} />
      </FormItem>
    </Form>
  ),
}

/* ------------------------------------------------------------------ */
/*  多种控件组合                                                        */
/* ------------------------------------------------------------------ */

export const FormControls: Story = {
  parameters: {
    docs: {
      description: {
        story: '多种表单控件组合使用，展示 Input、Select、InputNumber、Checkbox、Radio、Switch 等组件在表单中的协同用法。',
      },
    },
  },
  render: () => (
    <Form
      layout="horizontal"
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 18 }}
      className="max-w-xl p-6"
      onSubmit={fn()}
    >
      <FormItem label="输入框" name="input" required>
        <Input placeholder="请输入内容" />
      </FormItem>
      <FormItem label="选择器" name="select" required>
        <Select
          placeholder="请选择"
          options={[
            { value: 'china', label: '中国' },
            { value: 'usa', label: '美国' },
            { value: 'uk', label: '英国' },
          ]}
        />
      </FormItem>
      <FormItem label="数字输入框" name="number">
        <InputNumber min={1} max={100} defaultValue={3} />
      </FormItem>
      <FormItem label="复选框" name="checkbox">
        <Checkbox>复选框</Checkbox>
      </FormItem>
      <FormItem label="单选框" name="radio">
        <RadioGroup defaultValue="a">
          <Radio value="a">选项 A</Radio>
          <Radio value="b">选项 B</Radio>
          <Radio value="c">选项 C</Radio>
        </RadioGroup>
      </FormItem>
      <FormItem label="开关" name="switch">
        <Switch />
      </FormItem>
      <FormItem wrapperCol={{ span: 18, offset: 6 }}>
        <Space>
          <Button variant="primary" htmlType="submit">提交</Button>
          <Button htmlType="reset">重置</Button>
        </Space>
      </FormItem>
    </Form>
  ),
}

/* ------------------------------------------------------------------ */
/*  自定义异步校验                                                      */
/* ------------------------------------------------------------------ */

export const CustomValidation: Story = {
  render: () => {
    const [username, setUsername] = useState('')
    const [validateStatus, setValidateStatus] = useState<'' | 'validating' | 'success' | 'error'>('')
    const [help, setHelp] = useState('')

    const checkUsername = async (value: string) => {
      if (!value) {
        setValidateStatus('')
        setHelp('')
        return
      }
      setValidateStatus('validating')
      setHelp('正在检查用户名...')
      await new Promise((resolve) => setTimeout(resolve, 1000))
      const taken = ['admin', 'test', 'user'].includes(value.toLowerCase())
      if (taken) {
        setValidateStatus('error')
        setHelp('该用户名已被占用')
      } else {
        setValidateStatus('success')
        setHelp('用户名可用')
      }
    }

    return (
      <Form layout="vertical" className="max-w-md p-6" onSubmit={fn()}>
        <FormItem
          label="用户名"
          name="username"
          required
          validateStatus={validateStatus || undefined}
          help={help || undefined}
        >
          <Input
            placeholder="请输入用户名（试试 admin、test）"
            value={username}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setUsername(e.target.value)
              checkUsername(e.target.value)
            }}
          />
        </FormItem>
        <FormItem label="邮箱" name="email" required>
          <Input placeholder="请输入邮箱" />
        </FormItem>
        <FormItem>
          <Button variant="primary" htmlType="submit">提交</Button>
        </FormItem>
      </Form>
    )
  },
}

/* ------------------------------------------------------------------ */
/*  动态校验规则                                                        */
/* ------------------------------------------------------------------ */

export const DynamicRules: Story = {
  parameters: {
    docs: {
      description: {
        story: '根据账户类型动态切换校验规则，适用于个人/企业、国内/海外等需要条件渲染的复杂表单场景。',
      },
    },
  },
  render: () => {
    const [type, setType] = useState<'personal' | 'business'>('personal')

    return (
      <Form layout="vertical" className="max-w-md p-6" onSubmit={fn()}>
        <FormItem label="账户类型" name="type" required>
          <Select
            value={type}
            onChange={(val: string) => setType(val as 'personal' | 'business')}
            options={[
              { value: 'personal', label: '个人账户' },
              { value: 'business', label: '企业账户' },
            ]}
          />
        </FormItem>
        {type === 'personal' ? (
          <>
            <FormItem label="姓名" name="name" required help="请输入您的真实姓名">
              <Input placeholder="请输入姓名" />
            </FormItem>
            <FormItem label="身份证号" name="idCard" required help="请输入18位身份证号">
              <Input placeholder="请输入身份证号" maxLength={18} />
            </FormItem>
          </>
        ) : (
          <>
            <FormItem label="企业名称" name="companyName" required help="请输入企业全称">
              <Input placeholder="请输入企业名称" />
            </FormItem>
            <FormItem label="统一社会信用代码" name="creditCode" required help="请输入18位统一社会信用代码">
              <Input placeholder="请输入统一社会信用代码" maxLength={18} />
            </FormItem>
          </>
        )}
        <FormItem label="邮箱" name="email" required>
          <Input placeholder="请输入邮箱" />
        </FormItem>
        <FormItem>
          <Button variant="primary" htmlType="submit">提交</Button>
        </FormItem>
      </Form>
    )
  },
}

/* ------------------------------------------------------------------ */
/*  嵌套栅格布局                                                        */
/* ------------------------------------------------------------------ */

export const NestedLayout: Story = {
  parameters: {
    docs: {
      description: {
        story: '结合栅格系统实现嵌套布局，适用于地址、联系人等需要多列并排的信息录入场景。',
      },
    },
  },
  render: () => (
    <Form layout="vertical" className="max-w-3xl p-6" onSubmit={fn()}>
      <Row gutter={16}>
        <Col span={12}>
          <FormItem label="姓" name="lastName" required>
            <Input placeholder="请输入姓" />
          </FormItem>
        </Col>
        <Col span={12}>
          <FormItem label="名" name="firstName" required>
            <Input placeholder="请输入名" />
          </FormItem>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <FormItem label="邮箱" name="email" required>
            <Input placeholder="请输入邮箱" />
          </FormItem>
        </Col>
        <Col span={12}>
          <FormItem label="手机号码" name="phone" required>
            <Input placeholder="请输入手机号码" />
          </FormItem>
        </Col>
      </Row>
      <FormItem label="地址" name="address">
        <Input placeholder="请输入地址" />
      </FormItem>
      <Row gutter={16}>
        <Col span={8}>
          <FormItem label="省/市" name="province">
            <Select
              placeholder="请选择"
              options={[
                { value: 'beijing', label: '北京' },
                { value: 'shanghai', label: '上海' },
                { value: 'guangdong', label: '广东' },
              ]}
            />
          </FormItem>
        </Col>
        <Col span={8}>
          <FormItem label="城市" name="city">
            <Input placeholder="请输入城市" />
          </FormItem>
        </Col>
        <Col span={8}>
          <FormItem label="邮编" name="zipCode">
            <Input placeholder="请输入邮编" />
          </FormItem>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <FormItem label="职位" name="position">
            <Input placeholder="请输入职位" />
          </FormItem>
        </Col>
        <Col span={12}>
          <FormItem label="部门" name="department">
            <Select
              placeholder="请选择部门"
              options={[
                { value: 'dev', label: '研发部' },
                { value: 'product', label: '产品部' },
                { value: 'design', label: '设计部' },
                { value: 'marketing', label: '市场部' },
              ]}
            />
          </FormItem>
        </Col>
      </Row>
      <FormItem>
        <Space>
          <Button variant="primary" htmlType="submit">提交</Button>
          <Button htmlType="reset">重置</Button>
        </Space>
      </FormItem>
    </Form>
  ),
}
