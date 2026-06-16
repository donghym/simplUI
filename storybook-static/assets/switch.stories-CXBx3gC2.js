import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as G}from"./index-GiUgBvb1.js";import{S as r}from"./index-CMCvWDhG.js";import"./utils-BEhiKRD9.js";import"./index-C08JwjkN.js";import"./loader-circle-CulI208u.js";import"./createLucideIcon-CZe00VV7.js";const U={title:"数据录入/Switch 开关",component:r,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"开关用于在两种状态之间进行切换。适用于功能启用/禁用、模式切换等场景，支持加载状态和自定义开关文字。"}}},argTypes:{checked:{control:"boolean",description:"受控模式下的选中状态，true 为开启"},defaultChecked:{control:"boolean",description:"非受控模式下的初始选中状态，默认 false"},disabled:{control:"boolean",description:"禁用状态，true 时不可交互、透明度降低"},loading:{control:"boolean",description:"加载状态，true 时显示旋转图标、禁止交互"},onChange:{control:!1,description:"选中状态变化时触发，参数为变化后的 checked 值"}}},s={},a={args:{defaultChecked:!0}},t={args:{disabled:!0}},c={args:{disabled:!0,defaultChecked:!0}},o={args:{loading:!0}},d={args:{defaultChecked:!0,checkedChildren:"开"}},n={args:{defaultChecked:!0,checkedChildren:"开",unCheckedChildren:"关"}},i={parameters:{docs:{description:{story:"展示开关的未选中、选中、禁用三种状态对比，便于快速了解组件外观差异。"}}},render:()=>e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(r,{}),e.jsx(r,{defaultChecked:!0}),e.jsx(r,{disabled:!0,defaultChecked:!0})]})},l={parameters:{docs:{description:{story:"受控模式示例，展示如何通过外部状态管理开关的开启/关闭状态。"}}},render:()=>{const[u,F]=G.useState(!1);return e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(r,{checked:u,onChange:F}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["当前状态：",u?"开启":"关闭"]})]})}};var p,m,h;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(h=(m=s.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var g,k,C;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    defaultChecked: true
  }
}`,...(C=(k=a.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var f,x,S;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(S=(x=t.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var b,j,v;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultChecked: true
  }
}`,...(v=(j=c.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};var w,y,N;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    loading: true
  }
}`,...(N=(y=o.parameters)==null?void 0:y.docs)==null?void 0:N.source}}};var T,B,D;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    defaultChecked: true,
    checkedChildren: '开'
  }
}`,...(D=(B=d.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var W,E,L;n.parameters={...n.parameters,docs:{...(W=n.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    defaultChecked: true,
    checkedChildren: '开',
    unCheckedChildren: '关'
  }
}`,...(L=(E=n.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var _,O,R;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '展示开关的未选中、选中、禁用三种状态对比，便于快速了解组件外观差异。'
      }
    }
  },
  render: () => <div className="flex flex-col gap-3">
      <Switch />
      <Switch defaultChecked />
      <Switch disabled defaultChecked />
    </div>
}`,...(R=(O=i.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var q,z,A;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '受控模式示例，展示如何通过外部状态管理开关的开启/关闭状态。'
      }
    }
  },
  render: () => {
    const [checked, setChecked] = useState(false);
    return <div className="flex flex-col gap-3">
        <Switch checked={checked} onChange={setChecked} />
        <p className="text-sm text-muted-foreground">当前状态：{checked ? '开启' : '关闭'}</p>
      </div>;
  }
}`,...(A=(z=l.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};const V=["Basic","Checked","Disabled","DisabledChecked","Loading","WithCheckedText","WithBothText","States","Controlled"];export{s as Basic,a as Checked,l as Controlled,t as Disabled,c as DisabledChecked,o as Loading,i as States,n as WithBothText,d as WithCheckedText,V as __namedExportsOrder,U as default};
