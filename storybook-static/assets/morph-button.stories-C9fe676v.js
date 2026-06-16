import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as _}from"./index-GiUgBvb1.js";import{a as k}from"./utils-BEhiKRD9.js";import{c as H}from"./index-C08JwjkN.js";const I=H("inline-flex items-center justify-center gap-2 font-medium select-none transition-all duration-300 ease-out whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-1 disabled:pointer-events-none disabled:opacity-50 h-[40px] px-4 text-sm rounded-md",{variants:{variant:{default:"bg-background text-foreground border border-solid border-border hover:scale-105 hover:rounded-xl hover:border-primary-500 hover:text-primary-500 active:scale-95 active:rounded-md",primary:"bg-primary-500 text-white border border-solid border-primary-500 hover:scale-105 hover:rounded-xl hover:bg-primary-600 active:scale-95 active:rounded-md active:bg-primary-700",outline:"bg-transparent text-primary-500 border-2 border-solid border-primary-500 hover:scale-105 hover:rounded-xl hover:bg-primary-50 active:scale-95 active:rounded-md"}},defaultVariants:{variant:"default"}}),r=_.forwardRef((T,E)=>{const{className:D,variant:R,children:S,htmlType:V="button",disabled:q,onClick:O,...X}=T;return e.jsx("button",{ref:E,type:V,disabled:q,onClick:O,className:k("sui-morph-button",I({variant:R}),D),...X,children:S})});r.displayName="MorphButton";r.__docgenInfo={description:"",methods:[],displayName:"MorphButton",props:{children:{required:!1,tsType:{name:"ReactNode"},description:"按钮内容"},htmlType:{required:!1,tsType:{name:"union",raw:"'button' | 'submit' | 'reset'",elements:[{name:"literal",value:"'button'"},{name:"literal",value:"'submit'"},{name:"literal",value:"'reset'"}]},description:"原生 button type，默认 'button'"},disabled:{required:!1,tsType:{name:"boolean"},description:"禁用状态"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"e"}],return:{name:"void"}}},description:"点击回调"}},composes:["Omit","VariantProps"]};const z={title:"动效/MorphButton 形变流体按钮",component:r,tags:["autodocs"],parameters:{layout:"padded"},argTypes:{variant:{control:"select",options:["default","primary","outline"],description:"按钮变体，决定视觉风格"},disabled:{control:"boolean",description:"禁用状态"},htmlType:{control:"select",options:["button","submit","reset"],description:"原生 button type 属性"}}},t={args:{children:"形变按钮"}},a={args:{variant:"primary",children:"主要形变"}},n={args:{variant:"outline",children:"描边形变"}},o={args:{disabled:!0,children:"禁用状态"}},s={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-4 items-center",children:[e.jsx(r,{variant:"default",children:"默认"}),e.jsx(r,{variant:"primary",children:"主要"}),e.jsx(r,{variant:"outline",children:"描边"})]})},i={render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsx("p",{className:"text-sm text-muted-foreground",children:"悬浮时 scaleX(1.05) + 圆角变化，点击时 scaleX(0.95)"}),e.jsxs("div",{className:"flex flex-wrap gap-4 items-center",children:[e.jsx(r,{variant:"primary",children:"悬浮我试试"}),e.jsx(r,{variant:"default",children:"点击我试试"}),e.jsx(r,{variant:"outline",children:"描边形变"})]})]})};var l,d,c;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: '形变按钮'
  }
}`,...(c=(d=t.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var p,u,m;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: '主要形变'
  }
}`,...(m=(u=a.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var v,h,f;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    variant: 'outline',
    children: '描边形变'
  }
}`,...(f=(h=n.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var b,x,g;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    disabled: true,
    children: '禁用状态'
  }
}`,...(g=(x=o.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var y,M,B;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-4 items-center">
      <MorphButton variant="default">默认</MorphButton>
      <MorphButton variant="primary">主要</MorphButton>
      <MorphButton variant="outline">描边</MorphButton>
    </div>
}`,...(B=(M=s.parameters)==null?void 0:M.docs)==null?void 0:B.source}}};var j,N,w;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      <p className="text-sm text-muted-foreground">悬浮时 scaleX(1.05) + 圆角变化，点击时 scaleX(0.95)</p>
      <div className="flex flex-wrap gap-4 items-center">
        <MorphButton variant="primary">悬浮我试试</MorphButton>
        <MorphButton variant="default">点击我试试</MorphButton>
        <MorphButton variant="outline">描边形变</MorphButton>
      </div>
    </div>
}`,...(w=(N=i.parameters)==null?void 0:N.docs)==null?void 0:w.source}}};const F=["Default","Primary","Outline","Disabled","AllVariants","InteractiveDemo"];export{s as AllVariants,t as Default,o as Disabled,i as InteractiveDemo,n as Outline,a as Primary,F as __namedExportsOrder,z as default};
