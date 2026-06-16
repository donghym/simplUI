import{j as e}from"./jsx-runtime-CDt2p4po.js";import{fn as A}from"./index-DeN4tkzB.js";import{r as s}from"./index-GiUgBvb1.js";import{a as v}from"./utils-BEhiKRD9.js";import{c as z}from"./index-C08JwjkN.js";import{I as ye}from"./index-BJCQqJ4b.js";import{S as Fe}from"./index-pixgFsiF.js";import{B as G}from"./index-WhxK0hy4.js";import{T as Pe}from"./trash-2-C9wkjJ6S.js";import{P as Te}from"./plus-CkYWZh8A.js";import"./x-B-5N0Ikz.js";import"./createLucideIcon-CZe00VV7.js";import"./chevron-down-CY-YwltC.js";import"./check-DytZnMFh.js";import"./loader-circle-CulI208u.js";const je=z("",{variants:{layout:{horizontal:"flex flex-col gap-6",vertical:"flex flex-col gap-6",inline:"flex flex-wrap items-center gap-4"}},defaultVariants:{layout:"horizontal"}}),qe=z("grid",{variants:{columns:{1:"grid-cols-1",2:"grid-cols-2",3:"grid-cols-3",4:"grid-cols-4"},gap:{8:"gap-2",12:"gap-3",16:"gap-4",20:"gap-5",24:"gap-6",32:"gap-8"}},defaultVariants:{columns:2,gap:16}}),we=z("flex items-center gap-3 pt-4",{variants:{layout:{horizontal:"",vertical:"",inline:""}},defaultVariants:{layout:"horizontal"}}),fe=z("flex",{variants:{layout:{horizontal:"flex-row items-center w-full",vertical:"flex-col",inline:"flex-col"}},defaultVariants:{layout:"horizontal"}}),Ne=z("border border-border rounded-lg p-4 mb-3 relative"),Se=z("flex items-center gap-2"),l=s.forwardRef(({name:r,label:t,rules:d=[],dependencies:c=[],hidden:n=!1,placeholder:F,disabled:j=!1},S)=>{const{formValues:h,errors:g,setFieldValue:q,layout:T,registerDependencies:i,registerRules:m}=he();if(s.useEffect(()=>{m(r,d)},[r,d,m]),s.useEffect(()=>{c.length>0&&i(r,c)},[r,c,i]),typeof n=="function"?n(h):n)return null;const R=h[r],P=g[r],b=d.some(V=>V.required);return e.jsxs("div",{ref:S,className:v(fe({layout:T})),children:[t!==void 0&&e.jsxs("label",{className:v("text-sm text-foreground flex items-center",T==="horizontal"?"shrink-0 self-start pt-1 justify-end pr-3":"mb-1.5"),htmlFor:r,children:[b&&e.jsx("span",{className:"text-danger-500 mr-1",children:"*"}),e.jsx("span",{children:t})]}),e.jsxs("div",{className:v(T==="horizontal"?"flex-1 min-w-0":"w-full"),children:[e.jsx(ye,{id:r,value:R??"",placeholder:F,disabled:j,status:P?"error":void 0,onChange:V=>{q(r,V.target.value)}}),P&&e.jsx("div",{className:"text-xs text-danger-500 mt-1",children:P})]})]})});l.displayName="ProFormText";l.__docgenInfo={description:"ProFormText 文本输入表单项",methods:[],displayName:"ProFormText",props:{name:{required:!0,tsType:{name:"string"},description:"字段名，对应表单值的 key"},label:{required:!1,tsType:{name:"string"},description:"标签文本"},rules:{required:!1,tsType:{name:"Array",elements:[{name:"ProFormRule"}],raw:"ProFormRule[]"},description:"校验规则数组",defaultValue:{value:"[]",computed:!1}},dependencies:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"依赖的其他字段名，依赖字段变化时重新校验当前字段",defaultValue:{value:"[]",computed:!1}},hidden:{required:!1,tsType:{name:"union",raw:"boolean | ((values: Record<string, unknown>) => boolean)",elements:[{name:"boolean"},{name:"unknown"}]},description:"是否隐藏，函数形式时根据表单值动态判断",defaultValue:{value:"false",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"输入框占位文本"},disabled:{required:!1,tsType:{name:"boolean"},description:"是否禁用",defaultValue:{value:"false",computed:!1}}}};const N=s.forwardRef(({name:r,label:t,rules:d=[],dependencies:c=[],hidden:n=!1,placeholder:F,disabled:j=!1,options:S},h)=>{const{formValues:g,errors:q,setFieldValue:T,layout:i,registerDependencies:m,registerRules:p}=he();if(s.useEffect(()=>{p(r,d)},[r,d,p]),s.useEffect(()=>{c.length>0&&m(r,c)},[r,c,m]),typeof n=="function"?n(g):n)return null;const P=g[r],b=q[r],V=d.some(w=>w.required),$=S.map(w=>({label:w.label,value:String(w.value)}));return e.jsxs("div",{ref:h,className:v(fe({layout:i})),children:[t!==void 0&&e.jsxs("label",{className:v("text-sm text-foreground flex items-center",i==="horizontal"?"shrink-0 self-start pt-1 justify-end pr-3":"mb-1.5"),htmlFor:r,children:[V&&e.jsx("span",{className:"text-danger-500 mr-1",children:"*"}),e.jsx("span",{children:t})]}),e.jsxs("div",{className:v(i==="horizontal"?"flex-1 min-w-0":"w-full"),children:[e.jsx(Fe,{id:r,value:P??"",placeholder:F,disabled:j,status:b?"error":void 0,options:$,onChange:w=>{T(r,w)}}),b&&e.jsx("div",{className:"text-xs text-danger-500 mt-1",children:b})]})]})});N.displayName="ProFormSelect";N.__docgenInfo={description:"ProFormSelect 下拉选择表单项",methods:[],displayName:"ProFormSelect",props:{name:{required:!0,tsType:{name:"string"},description:"字段名，对应表单值的 key"},label:{required:!1,tsType:{name:"string"},description:"标签文本"},rules:{required:!1,tsType:{name:"Array",elements:[{name:"ProFormRule"}],raw:"ProFormRule[]"},description:"校验规则数组",defaultValue:{value:"[]",computed:!1}},dependencies:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"依赖的其他字段名，依赖字段变化时重新校验当前字段",defaultValue:{value:"[]",computed:!1}},hidden:{required:!1,tsType:{name:"union",raw:"boolean | ((values: Record<string, unknown>) => boolean)",elements:[{name:"boolean"},{name:"unknown"}]},description:"是否隐藏，函数形式时根据表单值动态判断",defaultValue:{value:"false",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"输入框占位文本"},disabled:{required:!1,tsType:{name:"boolean"},description:"是否禁用",defaultValue:{value:"false",computed:!1}},options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ label: string; value: string | number }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}],required:!0}}]}}],raw:"Array<{ label: string; value: string | number }>"},description:"选项列表"}}};const H=s.forwardRef(({name:r,label:t,initialCount:d=1,addButtonText:c="添加一项",removeButtonText:n="删除",maxItems:F,children:j},S)=>{const[h,g]=s.useState(()=>Array.from({length:d},(m,p)=>({key:p}))),q=s.useState(d)[0],T=()=>{F!==void 0&&h.length>=F||g(m=>[...m,{key:m.length+q}])},i=m=>{h.length<=1||g(p=>p.filter((R,P)=>P!==m))};return e.jsxs("div",{ref:S,children:[t&&e.jsx("div",{className:"text-sm text-foreground mb-2 font-medium",children:t}),h.map((m,p)=>e.jsxs("div",{className:v(Ne()),children:[e.jsx("div",{className:"flex-1",children:j(p,`${r}[${p}]`)}),h.length>1&&e.jsx("div",{className:v(Se(),"ml-3 self-start"),children:e.jsx(G,{variant:"link",className:"text-danger-500",onClick:()=>i(p),icon:e.jsx(Pe,{className:"h-4 w-4"}),children:n})})]},m.key)),F===void 0||h.length<F?e.jsx(G,{variant:"dashed",className:"w-full mt-2",onClick:T,icon:e.jsx(Te,{className:"h-4 w-4"}),children:c}):null]})});H.displayName="ProFormList";H.__docgenInfo={description:"ProFormList 动态表单项列表",methods:[],displayName:"ProFormList",props:{name:{required:!0,tsType:{name:"string"},description:"字段名前缀"},label:{required:!1,tsType:{name:"string"},description:"标签文本"},initialCount:{required:!1,tsType:{name:"number"},description:"初始项数量，默认 1",defaultValue:{value:"1",computed:!1}},addButtonText:{required:!1,tsType:{name:"string"},description:"新增按钮文本，默认 '添加一项'",defaultValue:{value:"'添加一项'",computed:!1}},removeButtonText:{required:!1,tsType:{name:"string"},description:"删除按钮文本，默认 '删除'",defaultValue:{value:"'删除'",computed:!1}},maxItems:{required:!1,tsType:{name:"number"},description:"最大项数"},children:{required:!0,tsType:{name:"signature",type:"function",raw:"(index: number, namePrefix: string) => ReactNode",signature:{arguments:[{type:{name:"number"},name:"index"},{type:{name:"string"},name:"namePrefix"}],return:{name:"ReactNode"}}},description:"渲染每一项的内容"}}};const ge=s.createContext(null);function he(){const r=s.useContext(ge);if(!r)throw new Error("ProForm 子组件必须在 ProForm 内使用");return r}const y=s.forwardRef(({onFinish:r,initialValues:t={},layout:d="horizontal",grid:c=!1,submitter:n=!0,className:F,children:j,...S},h)=>{const[g,q]=s.useState({...t}),[T,i]=s.useState({}),[m,p]=s.useState(!1),R=s.useRef({}),P=s.useRef({}),b=s.useCallback(a=>{const x=R.current[a];if(!x||x.length===0)return;const u=g[a];for(const o of x){if(o.required&&(u==null||u==="")){const f=o.message||`${a} 为必填项`;return i(C=>({...C,[a]:f})),f}if(o.pattern&&typeof u=="string"&&!o.pattern.test(u)){const f=o.message||`${a} 格式不正确`;return i(C=>({...C,[a]:f})),f}if(o.min!==void 0&&typeof u=="string"&&u.length<o.min){const f=o.message||`${a} 最少 ${o.min} 个字符`;return i(C=>({...C,[a]:f})),f}if(o.max!==void 0&&typeof u=="string"&&u.length>o.max){const f=o.message||`${a} 最多 ${o.max} 个字符`;return i(C=>({...C,[a]:f})),f}}i(o=>{const f={...o};return delete f[a],f})},[g]),V=s.useCallback((a,x)=>{q(u=>({...u,[a]:x})),i(u=>{const o={...u};return delete o[a],o}),Object.entries(P.current).forEach(([u,o])=>{o.includes(a)&&b(u)})},[b]),$=s.useCallback(()=>{let a=!1;return Object.keys(R.current).forEach(x=>{b(x)&&(a=!0)}),!a},[b]),w=s.useCallback((a,x)=>{P.current[a]=x},[]),be=s.useCallback((a,x)=>{R.current[a]=x},[]),K=s.useCallback(async a=>{if(a.preventDefault(),!!r&&$()){p(!0);try{await r(g)}finally{p(!1)}}},[r,g,$]),xe=s.useCallback(()=>{q({...t}),i({})},[t]),ve={formValues:g,errors:T,setFieldValue:V,validateField:b,layout:d,registerDependencies:w,registerRules:be},M=c===!0?{columns:2,gap:16}:c===!1?null:{columns:Math.min(Math.max(c.columns,1),4),gap:c.gap??16},k=n===!1?null:n===!0?{submitText:"提交",resetText:"重置",showReset:!0,render:void 0}:{submitText:n.submitText??"提交",resetText:n.resetText??"重置",showReset:n.showReset??!0,render:n.render};return e.jsx(ge.Provider,{value:ve,children:e.jsxs("form",{ref:h,className:v(je({layout:d}),F),onSubmit:K,onReset:xe,...S,children:[M?e.jsx("div",{className:v(qe({columns:M.columns,gap:M.gap})),children:j}):j,k&&e.jsx("div",{className:v(we({layout:d})),children:k.render?k.render({onSubmit:()=>K({preventDefault:()=>{}}),onSubmitting:m}):e.jsxs(e.Fragment,{children:[e.jsx(G,{variant:"primary",htmlType:"submit",loading:m,children:k.submitText}),k.showReset&&e.jsx(G,{variant:"default",htmlType:"reset",children:k.resetText})]})})]})})});y.displayName="ProForm";Object.assign(y,{Text:l,Select:N,List:H});y.__docgenInfo={description:"ProForm 高阶表单组件",methods:[],displayName:"ProForm",props:{onFinish:{required:!1,tsType:{name:"signature",type:"function",raw:"(values: Record<string, unknown>) => Promise<void> | void",signature:{arguments:[{type:{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>"},name:"values"}],return:{name:"union",raw:"Promise<void> | void",elements:[{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"},{name:"void"}]}}},description:"表单提交回调，返回 Promise 时自动管理 submitting 状态"},initialValues:{required:!1,tsType:{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>"},description:"表单初始值",defaultValue:{value:"{}",computed:!1}},layout:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical' | 'inline'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"},{name:"literal",value:"'inline'"}]},description:"布局模式，默认 'horizontal'",defaultValue:{value:"'horizontal'",computed:!1}},grid:{required:!1,tsType:{name:"union",raw:"boolean | ProFormGridConfig",elements:[{name:"boolean"},{name:"ProFormGridConfig"}]},description:"网格布局配置，启用后表单项按列数自动排列",defaultValue:{value:"false",computed:!1}},submitter:{required:!1,tsType:{name:"union",raw:"boolean | ProFormSubmitterConfig",elements:[{name:"boolean"},{name:"ProFormSubmitterConfig"}]},description:"提交按钮配置，false 时不显示提交按钮",defaultValue:{value:"true",computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:"表单项"},className:{required:!1,tsType:{name:"string"},description:"自定义 className"}},composes:["Omit","VariantProps"]};const He={title:"数据录入/ProForm 高阶表单",component:y,tags:["autodocs"],parameters:{layout:"padded"},argTypes:{layout:{control:"select",options:["horizontal","vertical","inline"],description:"表单布局方式"},grid:{control:"boolean",description:"是否启用网格布局"},submitter:{control:"boolean",description:"是否显示提交按钮区域"}}},L={render:()=>e.jsxs(y,{layout:"vertical",onFinish:A(),children:[e.jsx(l,{name:"username",label:"用户名",rules:[{required:!0,message:"请输入用户名"}],placeholder:"请输入用户名"}),e.jsx(l,{name:"email",label:"邮箱",rules:[{required:!0,message:"请输入邮箱"},{pattern:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,message:"邮箱格式不正确"}],placeholder:"请输入邮箱"}),e.jsx(l,{name:"password",label:"密码",rules:[{required:!0,message:"请输入密码"},{min:6,message:"密码至少 6 个字符"}],placeholder:"请输入密码"})]})},B={render:()=>e.jsxs(y,{layout:"vertical",grid:{columns:2,gap:16},onFinish:A(),children:[e.jsx(l,{name:"firstName",label:"姓",placeholder:"请输入姓",rules:[{required:!0,message:"请输入姓"}]}),e.jsx(l,{name:"lastName",label:"名",placeholder:"请输入名",rules:[{required:!0,message:"请输入名"}]}),e.jsx(l,{name:"email",label:"邮箱",placeholder:"请输入邮箱"}),e.jsx(l,{name:"phone",label:"手机号码",placeholder:"请输入手机号码"}),e.jsx(N,{name:"city",label:"城市",placeholder:"请选择城市",options:[{label:"北京",value:"beijing"},{label:"上海",value:"shanghai"},{label:"杭州",value:"hangzhou"}]}),e.jsx(N,{name:"department",label:"部门",placeholder:"请选择部门",options:[{label:"研发部",value:"dev"},{label:"产品部",value:"product"},{label:"设计部",value:"design"}]})]})},E={render:()=>e.jsxs(y,{layout:"vertical",onFinish:A(),children:[e.jsx(N,{name:"type",label:"账户类型",rules:[{required:!0,message:"请选择账户类型"}],placeholder:"请选择账户类型",options:[{label:"个人账户",value:"personal"},{label:"企业账户",value:"business"}]}),e.jsx(l,{name:"idCard",label:"身份证号",dependencies:["type"],hidden:r=>r.type!=="personal",placeholder:"请输入身份证号"}),e.jsx(l,{name:"creditCode",label:"统一社会信用代码",dependencies:["type"],hidden:r=>r.type!=="business",placeholder:"请输入统一社会信用代码"}),e.jsx(l,{name:"name",label:"姓名",rules:[{required:!0,message:"请输入姓名"}],placeholder:"请输入姓名"})]})},_={render:()=>e.jsxs(y,{layout:"vertical",onFinish:A(),children:[e.jsx(l,{name:"title",label:"表单标题",rules:[{required:!0,message:"请输入表单标题"}],placeholder:"请输入表单标题"}),e.jsx(H,{name:"members",label:"成员列表",initialCount:1,maxItems:5,addButtonText:"添加成员",removeButtonText:"移除",children:(r,t)=>e.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[e.jsx(l,{name:`${t}.name`,label:"姓名",rules:[{required:!0,message:"请输入姓名"}],placeholder:"请输入姓名"}),e.jsx(l,{name:`${t}.email`,label:"邮箱",placeholder:"请输入邮箱"})]})})]})},I={render:()=>e.jsxs(y,{layout:"vertical",initialValues:{username:"张三",city:"beijing"},submitter:{submitText:"保存",resetText:"还原",showReset:!0},onFinish:async r=>{await new Promise(t=>setTimeout(t,1500)),console.log("提交数据:",r)},children:[e.jsx(l,{name:"username",label:"用户名",rules:[{required:!0,message:"请输入用户名"}],placeholder:"请输入用户名"}),e.jsx(N,{name:"city",label:"城市",rules:[{required:!0,message:"请选择城市"}],placeholder:"请选择城市",options:[{label:"北京",value:"beijing"},{label:"上海",value:"shanghai"},{label:"杭州",value:"hangzhou"}]})]})},D={render:()=>e.jsx(y,{layout:"vertical",submitter:{render:({onSubmit:r,onSubmitting:t})=>e.jsx("div",{className:"flex items-center gap-3",children:e.jsx("button",{type:"button",className:"px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 disabled:opacity-50",onClick:r,disabled:t,children:t?"提交中...":"确认提交"})})},onFinish:async r=>{await new Promise(t=>setTimeout(t,1e3)),console.log("提交数据:",r)},children:e.jsx(l,{name:"name",label:"姓名",rules:[{required:!0,message:"请输入姓名"}],placeholder:"请输入姓名"})})},O={render:()=>e.jsxs(y,{layout:"vertical",grid:{columns:3,gap:16},onFinish:A(),children:[e.jsx(l,{name:"field1",label:"字段 1",placeholder:"请输入"}),e.jsx(l,{name:"field2",label:"字段 2",placeholder:"请输入"}),e.jsx(l,{name:"field3",label:"字段 3",placeholder:"请输入"}),e.jsx(l,{name:"field4",label:"字段 4",placeholder:"请输入"}),e.jsx(N,{name:"field5",label:"字段 5",placeholder:"请选择",options:[{label:"选项 A",value:"a"},{label:"选项 B",value:"b"}]}),e.jsx(l,{name:"field6",label:"字段 6",placeholder:"请输入"})]})};var J,Q,U;L.parameters={...L.parameters,docs:{...(J=L.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <ProForm layout="vertical" onFinish={fn()}>
      <ProFormText name="username" label="用户名" rules={[{
      required: true,
      message: '请输入用户名'
    }]} placeholder="请输入用户名" />
      <ProFormText name="email" label="邮箱" rules={[{
      required: true,
      message: '请输入邮箱'
    }, {
      pattern: /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/,
      message: '邮箱格式不正确'
    }]} placeholder="请输入邮箱" />
      <ProFormText name="password" label="密码" rules={[{
      required: true,
      message: '请输入密码'
    }, {
      min: 6,
      message: '密码至少 6 个字符'
    }]} placeholder="请输入密码" />
    </ProForm>
}`,...(U=(Q=L.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var W,X,Y;B.parameters={...B.parameters,docs:{...(W=B.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <ProForm layout="vertical" grid={{
    columns: 2,
    gap: 16
  }} onFinish={fn()}>
      <ProFormText name="firstName" label="姓" placeholder="请输入姓" rules={[{
      required: true,
      message: '请输入姓'
    }]} />
      <ProFormText name="lastName" label="名" placeholder="请输入名" rules={[{
      required: true,
      message: '请输入名'
    }]} />
      <ProFormText name="email" label="邮箱" placeholder="请输入邮箱" />
      <ProFormText name="phone" label="手机号码" placeholder="请输入手机号码" />
      <ProFormSelect name="city" label="城市" placeholder="请选择城市" options={[{
      label: '北京',
      value: 'beijing'
    }, {
      label: '上海',
      value: 'shanghai'
    }, {
      label: '杭州',
      value: 'hangzhou'
    }]} />
      <ProFormSelect name="department" label="部门" placeholder="请选择部门" options={[{
      label: '研发部',
      value: 'dev'
    }, {
      label: '产品部',
      value: 'product'
    }, {
      label: '设计部',
      value: 'design'
    }]} />
    </ProForm>
}`,...(Y=(X=B.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,re;E.parameters={...E.parameters,docs:{...(Z=E.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => <ProForm layout="vertical" onFinish={fn()}>
      <ProFormSelect name="type" label="账户类型" rules={[{
      required: true,
      message: '请选择账户类型'
    }]} placeholder="请选择账户类型" options={[{
      label: '个人账户',
      value: 'personal'
    }, {
      label: '企业账户',
      value: 'business'
    }]} />
      <ProFormText name="idCard" label="身份证号" dependencies={['type']} hidden={values => values.type !== 'personal'} placeholder="请输入身份证号" />
      <ProFormText name="creditCode" label="统一社会信用代码" dependencies={['type']} hidden={values => values.type !== 'business'} placeholder="请输入统一社会信用代码" />
      <ProFormText name="name" label="姓名" rules={[{
      required: true,
      message: '请输入姓名'
    }]} placeholder="请输入姓名" />
    </ProForm>
}`,...(re=(ee=E.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var ae,se,le;_.parameters={..._.parameters,docs:{...(ae=_.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => <ProForm layout="vertical" onFinish={fn()}>
      <ProFormText name="title" label="表单标题" rules={[{
      required: true,
      message: '请输入表单标题'
    }]} placeholder="请输入表单标题" />
      <ProFormList name="members" label="成员列表" initialCount={1} maxItems={5} addButtonText="添加成员" removeButtonText="移除">
        {(index, namePrefix) => <div className="grid grid-cols-2 gap-3">
            <ProFormText name={\`\${namePrefix}.name\`} label="姓名" rules={[{
          required: true,
          message: '请输入姓名'
        }]} placeholder="请输入姓名" />
            <ProFormText name={\`\${namePrefix}.email\`} label="邮箱" placeholder="请输入邮箱" />
          </div>}
      </ProFormList>
    </ProForm>
}`,...(le=(se=_.parameters)==null?void 0:se.docs)==null?void 0:le.source}}};var te,oe,ne;I.parameters={...I.parameters,docs:{...(te=I.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => <ProForm layout="vertical" initialValues={{
    username: '张三',
    city: 'beijing'
  }} submitter={{
    submitText: '保存',
    resetText: '还原',
    showReset: true
  }} onFinish={async values => {
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('提交数据:', values);
  }}>
      <ProFormText name="username" label="用户名" rules={[{
      required: true,
      message: '请输入用户名'
    }]} placeholder="请输入用户名" />
      <ProFormSelect name="city" label="城市" rules={[{
      required: true,
      message: '请选择城市'
    }]} placeholder="请选择城市" options={[{
      label: '北京',
      value: 'beijing'
    }, {
      label: '上海',
      value: 'shanghai'
    }, {
      label: '杭州',
      value: 'hangzhou'
    }]} />
    </ProForm>
}`,...(ne=(oe=I.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};var ie,me,ue;D.parameters={...D.parameters,docs:{...(ie=D.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => <ProForm layout="vertical" submitter={{
    render: ({
      onSubmit,
      onSubmitting
    }) => <div className="flex items-center gap-3">
            <button type="button" className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 disabled:opacity-50" onClick={onSubmit} disabled={onSubmitting}>
              {onSubmitting ? '提交中...' : '确认提交'}
            </button>
          </div>
  }} onFinish={async values => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('提交数据:', values);
  }}>
      <ProFormText name="name" label="姓名" rules={[{
      required: true,
      message: '请输入姓名'
    }]} placeholder="请输入姓名" />
    </ProForm>
}`,...(ue=(me=D.parameters)==null?void 0:me.docs)==null?void 0:ue.source}}};var de,ce,pe;O.parameters={...O.parameters,docs:{...(de=O.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: () => <ProForm layout="vertical" grid={{
    columns: 3,
    gap: 16
  }} onFinish={fn()}>
      <ProFormText name="field1" label="字段 1" placeholder="请输入" />
      <ProFormText name="field2" label="字段 2" placeholder="请输入" />
      <ProFormText name="field3" label="字段 3" placeholder="请输入" />
      <ProFormText name="field4" label="字段 4" placeholder="请输入" />
      <ProFormSelect name="field5" label="字段 5" placeholder="请选择" options={[{
      label: '选项 A',
      value: 'a'
    }, {
      label: '选项 B',
      value: 'b'
    }]} />
      <ProFormText name="field6" label="字段 6" placeholder="请输入" />
    </ProForm>
}`,...(pe=(ce=O.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}};const Me=["Basic","GridLayout","Dependencies","DynamicList","SubmitAndReset","CustomSubmitter","ThreeColumns"];export{L as Basic,D as CustomSubmitter,E as Dependencies,_ as DynamicList,B as GridLayout,I as SubmitAndReset,O as ThreeColumns,Me as __namedExportsOrder,He as default};
