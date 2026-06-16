import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as v}from"./index-GiUgBvb1.js";import{I as r}from"./index-BJCQqJ4b.js";import{B as fe}from"./index-WhxK0hy4.js";import{M as me}from"./mail-CM1fAoIt.js";import{c as xe}from"./createLucideIcon-CZe00VV7.js";import{S as N}from"./search-DufjXXN7.js";import{E as ge}from"./eye-CBNVHkm6.js";import"./utils-BEhiKRD9.js";import"./index-C08JwjkN.js";import"./x-B-5N0Ikz.js";import"./loader-circle-CulI208u.js";/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const we=xe("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const he=xe("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]),Me={title:"数据录入/Input 输入框",component:r,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`输入框用于接收用户的文本输入。

- 表单填写：用于收集用户信息，如邮箱、密码、地址等。
- 搜索过滤：配合前缀图标实现搜索框，快速定位内容。
- 状态反馈：通过 error / warning 状态提示校验结果。
- 受控场景：需要实时获取输入值或进行联动校验时使用。`}}},argTypes:{status:{control:"select",options:["error","warning"],description:"输入框状态，error 时边框 danger 色，warning 时边框 warning 色"},allowClear:{control:"boolean",description:"是否显示清空按钮"},showCount:{control:"boolean",description:"是否显示字数统计，需配合 maxLength 使用"},disabled:{control:"boolean",description:"是否禁用"},prefix:{control:!1,description:"前缀内容，插入输入框左侧"},suffix:{control:!1,description:"后缀内容，插入输入框右侧"}}},o={args:{placeholder:"请输入内容"}},l={args:{prefix:e.jsx(me,{className:"h-4 w-4"}),placeholder:"请输入邮箱"}},c={args:{suffix:e.jsx(N,{className:"h-4 w-4"}),placeholder:"搜索..."}},n={args:{prefix:e.jsx(he,{className:"h-4 w-4"}),suffix:e.jsx(N,{className:"h-4 w-4"}),placeholder:"请输入密码"}},d={args:{allowClear:!0,placeholder:"可清空的输入框",defaultValue:"一些文本"}},i={args:{showCount:!0,maxLength:50,placeholder:"最多 50 个字符"}},p={args:{status:"error",placeholder:"错误状态",defaultValue:"无效的值"}},u={args:{status:"warning",placeholder:"警告状态",defaultValue:"请检查此值"}},m={args:{disabled:!0,placeholder:"禁用状态",defaultValue:"不可编辑"}},x={parameters:{docs:{description:{story:"此示例展示了密码输入框的实现方式。适用于登录注册、安全设置等需要隐藏输入内容的场景。"}}},render:()=>{const s=()=>{const[a,t]=v.useState(!1);return e.jsx(r,{type:a?"text":"password",placeholder:"请输入密码",suffix:e.jsx("button",{type:"button",onClick:()=>t(!a),className:"text-gray-400 hover:text-gray-600","aria-label":a?"隐藏密码":"显示密码",children:a?e.jsx(we,{className:"h-4 w-4"}):e.jsx(ge,{className:"h-4 w-4"})})})};return e.jsx(s,{})}},h={render:()=>e.jsx(r,{placeholder:"搜索关键词",prefix:e.jsx(N,{className:"h-4 w-4"}),allowClear:!0})},f={parameters:{docs:{description:{story:"此示例展示了输入框多种特性组合的使用场景。适用于复杂表单中需要同时展示状态、清空和计数的情况。"}}},render:()=>e.jsxs("div",{className:"flex flex-col gap-4 max-w-sm",children:[e.jsx(r,{prefix:e.jsx(me,{className:"h-4 w-4"}),status:"error",allowClear:!0,placeholder:"邮箱（错误状态 + 可清空）"}),e.jsx(r,{prefix:e.jsx(he,{className:"h-4 w-4"}),status:"warning",showCount:!0,maxLength:20,placeholder:"密码（警告状态 + 计数）"})]})},g={parameters:{docs:{description:{story:"此示例展示了受控输入框的使用方式。适用于需要实时获取输入值、进行联动校验或数据处理的场景。"}}},render:()=>{const[s,a]=v.useState("");return e.jsxs("div",{className:"flex flex-col gap-2 max-w-sm",children:[e.jsx(r,{value:s,onChange:t=>a(t.target.value),placeholder:"受控输入框",allowClear:!0}),e.jsxs("p",{className:"text-sm text-gray-500",children:["当前值：",s||"(空)"]})]})}},w={render:()=>e.jsxs("div",{className:"flex flex-col gap-4 max-w-sm",children:[e.jsxs("div",{children:[e.jsx("label",{className:"mb-1 block text-xs text-muted-foreground",children:"小号 (h-7)"}),e.jsx(r,{placeholder:"小号输入框",className:"h-7 text-xs"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"mb-1 block text-xs text-muted-foreground",children:"默认 (h-8)"}),e.jsx(r,{placeholder:"默认输入框"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"mb-1 block text-xs text-muted-foreground",children:"大号 (h-10)"}),e.jsx(r,{placeholder:"大号输入框",className:"h-10 text-base"})]})]})},b={parameters:{docs:{description:{story:"通过 ref 可以编程式控制输入框的聚焦。适用于表单校验失败自动聚焦、快捷操作等场景。"}}},render:()=>{const s=()=>{const a=v.useRef(null);return e.jsxs("div",{className:"flex flex-col gap-3 max-w-sm",children:[e.jsx(r,{ref:a,placeholder:"点击按钮聚焦此输入框"}),e.jsx(fe,{onClick:()=>{var t;return(t=a.current)==null?void 0:t.focus()},children:"聚焦输入框"})]})};return e.jsx(s,{})}};var S,j,y;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    placeholder: '请输入内容'
  }
}`,...(y=(j=o.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};var C,I,k;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    prefix: <Mail className="h-4 w-4" />,
    placeholder: '请输入邮箱'
  }
}`,...(k=(I=l.parameters)==null?void 0:I.docs)==null?void 0:k.source}}};var V,E,L;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    suffix: <Search className="h-4 w-4" />,
    placeholder: '搜索...'
  }
}`,...(L=(E=c.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var M,P,W;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    prefix: <Lock className="h-4 w-4" />,
    suffix: <Search className="h-4 w-4" />,
    placeholder: '请输入密码'
  }
}`,...(W=(P=n.parameters)==null?void 0:P.docs)==null?void 0:W.source}}};var D,F,R;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    allowClear: true,
    placeholder: '可清空的输入框',
    defaultValue: '一些文本'
  }
}`,...(R=(F=d.parameters)==null?void 0:F.docs)==null?void 0:R.source}}};var B,A,O;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    showCount: true,
    maxLength: 50,
    placeholder: '最多 50 个字符'
  }
}`,...(O=(A=i.parameters)==null?void 0:A.docs)==null?void 0:O.source}}};var z,T,_;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    status: 'error',
    placeholder: '错误状态',
    defaultValue: '无效的值'
  }
}`,...(_=(T=p.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};var H,q,G;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    status: 'warning',
    placeholder: '警告状态',
    defaultValue: '请检查此值'
  }
}`,...(G=(q=u.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};var J,K,Q;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    disabled: true,
    placeholder: '禁用状态',
    defaultValue: '不可编辑'
  }
}`,...(Q=(K=m.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,X,Y;x.parameters={...x.parameters,docs:{...(U=x.parameters)==null?void 0:U.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '此示例展示了密码输入框的实现方式。适用于登录注册、安全设置等需要隐藏输入内容的场景。'
      }
    }
  },
  render: () => {
    const PasswordInput = () => {
      const [visible, setVisible] = useState(false);
      return <Input type={visible ? 'text' : 'password'} placeholder="请输入密码" suffix={<button type="button" onClick={() => setVisible(!visible)} className="text-gray-400 hover:text-gray-600" aria-label={visible ? '隐藏密码' : '显示密码'}>
              {visible ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>} />;
    };
    return <PasswordInput />;
  }
}`,...(Y=(X=x.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,ee;h.parameters={...h.parameters,docs:{...(Z=h.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => <Input placeholder="搜索关键词" prefix={<Search className="h-4 w-4" />} allowClear />
}`,...(ee=($=h.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var re,ae,se;f.parameters={...f.parameters,docs:{...(re=f.parameters)==null?void 0:re.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '此示例展示了输入框多种特性组合的使用场景。适用于复杂表单中需要同时展示状态、清空和计数的情况。'
      }
    }
  },
  render: () => <div className="flex flex-col gap-4 max-w-sm">
      <Input prefix={<Mail className="h-4 w-4" />} status="error" allowClear placeholder="邮箱（错误状态 + 可清空）" />
      <Input prefix={<Lock className="h-4 w-4" />} status="warning" showCount maxLength={20} placeholder="密码（警告状态 + 计数）" />
    </div>
}`,...(se=(ae=f.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var te,oe,le;g.parameters={...g.parameters,docs:{...(te=g.parameters)==null?void 0:te.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '此示例展示了受控输入框的使用方式。适用于需要实时获取输入值、进行联动校验或数据处理的场景。'
      }
    }
  },
  render: () => {
    const [value, setValue] = useState('');
    return <div className="flex flex-col gap-2 max-w-sm">
        <Input value={value} onChange={e => setValue(e.target.value)} placeholder="受控输入框" allowClear />
        <p className="text-sm text-gray-500">当前值：{value || '(空)'}</p>
      </div>;
  }
}`,...(le=(oe=g.parameters)==null?void 0:oe.docs)==null?void 0:le.source}}};var ce,ne,de;w.parameters={...w.parameters,docs:{...(ce=w.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 max-w-sm">
      <div>
        <label className="mb-1 block text-xs text-muted-foreground">小号 (h-7)</label>
        <Input placeholder="小号输入框" className="h-7 text-xs" />
      </div>
      <div>
        <label className="mb-1 block text-xs text-muted-foreground">默认 (h-8)</label>
        <Input placeholder="默认输入框" />
      </div>
      <div>
        <label className="mb-1 block text-xs text-muted-foreground">大号 (h-10)</label>
        <Input placeholder="大号输入框" className="h-10 text-base" />
      </div>
    </div>
}`,...(de=(ne=w.parameters)==null?void 0:ne.docs)==null?void 0:de.source}}};var ie,pe,ue;b.parameters={...b.parameters,docs:{...(ie=b.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '通过 ref 可以编程式控制输入框的聚焦。适用于表单校验失败自动聚焦、快捷操作等场景。'
      }
    }
  },
  render: () => {
    const FocusDemo = () => {
      const inputRef = useRef<HTMLInputElement>(null);
      return <div className="flex flex-col gap-3 max-w-sm">
          <Input ref={inputRef} placeholder="点击按钮聚焦此输入框" />
          <Button onClick={() => inputRef.current?.focus()}>聚焦输入框</Button>
        </div>;
    };
    return <FocusDemo />;
  }
}`,...(ue=(pe=b.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};const Pe=["Default","WithPrefix","WithSuffix","WithPrefixAndSuffix","AllowClear","ShowCount","StatusError","StatusWarning","Disabled","Password","SearchInput","CombinedFeatures","ControlledInput","SizeVariants","FocusBehavior"];export{d as AllowClear,f as CombinedFeatures,g as ControlledInput,o as Default,m as Disabled,b as FocusBehavior,x as Password,h as SearchInput,i as ShowCount,w as SizeVariants,p as StatusError,u as StatusWarning,l as WithPrefix,n as WithPrefixAndSuffix,c as WithSuffix,Pe as __namedExportsOrder,Me as default};
