import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as t}from"./index-GiUgBvb1.js";import{a as b}from"./utils-BEhiKRD9.js";import{c as A}from"./index-C08JwjkN.js";const L=A("relative inline-flex items-center rounded-full cursor-pointer transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1",{variants:{checked:{true:"bg-success-500",false:"bg-danger-500"},disabled:{true:"cursor-not-allowed opacity-50",false:""}},defaultVariants:{checked:!1,disabled:!1}}),M=A("absolute top-[2px] left-[2px] h-5 w-5 rounded-full bg-white shadow-md transition-transform duration-300 ease-out",{variants:{checked:{true:"translate-x-4",false:"translate-x-0"},animating:{true:"scale-x-110",false:"scale-x-100"}},defaultVariants:{checked:!1,animating:!1}}),s=t.forwardRef((r,m)=>{const{className:H,checked:g,defaultChecked:z=!1,disabled:o,onChange:c,...B}=r,f=g!==void 0,[F,G]=t.useState(z),[J,h]=t.useState(!1),a=f?g:F,K=t.useCallback(()=>{if(o)return;const k=!a;f||G(k),h(!0),c==null||c(k),setTimeout(()=>h(!1),400)},[a,o,f,c]);return e.jsx("button",{ref:m,type:"button",role:"switch","aria-checked":a,disabled:o,onClick:K,className:b("sui-elastic-toggle",L({checked:a,disabled:o}),"h-6 w-10",H),...B,children:e.jsx("span",{className:b(M({checked:a,animating:J}))})})});s.displayName="ElasticToggle";s.__docgenInfo={description:"",methods:[],displayName:"ElasticToggle",props:{checked:{required:!1,tsType:{name:"boolean"},description:"当前值（受控模式）"},defaultChecked:{required:!1,tsType:{name:"boolean"},description:"默认值（非受控模式）"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:"变化回调"},disabled:{required:!1,tsType:{name:"boolean"},description:"禁用状态"}},composes:["Omit","VariantProps"]};const Y={title:"动效/ElasticToggle 弹性开关",component:s,tags:["autodocs"],parameters:{layout:"padded"},argTypes:{checked:{control:"boolean",description:"受控模式下的选中状态"},defaultChecked:{control:"boolean",description:"非受控模式下的初始选中状态"},disabled:{control:"boolean",description:"禁用状态"},onChange:{control:!1,description:"变化回调"}}},d={},n={args:{defaultChecked:!0}},l={args:{disabled:!0}},i={args:{disabled:!0,defaultChecked:!0}},u={render:()=>e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(s,{}),e.jsx(s,{defaultChecked:!0}),e.jsx(s,{disabled:!0}),e.jsx(s,{disabled:!0,defaultChecked:!0})]})},p={render:()=>{const[r,m]=t.useState(!1);return e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx(s,{checked:r,onChange:m}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["当前状态：",r?"开启":"关闭"]})]})}};var x,C,v;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(v=(C=d.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};var T,y,j;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    defaultChecked: true
  }
}`,...(j=(y=n.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var E,S,N;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(N=(S=l.parameters)==null?void 0:S.docs)==null?void 0:N.source}}};var w,D,V;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultChecked: true
  }
}`,...(V=(D=i.parameters)==null?void 0:D.docs)==null?void 0:V.source}}};var q,_,I;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-3">
      <ElasticToggle />
      <ElasticToggle defaultChecked />
      <ElasticToggle disabled />
      <ElasticToggle disabled defaultChecked />
    </div>
}`,...(I=(_=u.parameters)==null?void 0:_.docs)==null?void 0:I.source}}};var O,P,R;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(false);
    return <div className="flex flex-col gap-3">
        <ElasticToggle checked={checked} onChange={setChecked} />
        <p className="text-sm text-muted-foreground">当前状态：{checked ? '开启' : '关闭'}</p>
      </div>;
  }
}`,...(R=(P=p.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};const Z=["Default","Checked","Disabled","DisabledChecked","States","Controlled"];export{n as Checked,p as Controlled,d as Default,l as Disabled,i as DisabledChecked,u as States,Z as __namedExportsOrder,Y as default};
