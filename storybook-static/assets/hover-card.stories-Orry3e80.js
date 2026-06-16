import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as k}from"./index-GiUgBvb1.js";import{a as z}from"./utils-BEhiKRD9.js";import{c as B}from"./index-C08JwjkN.js";const D=B("rounded-lg border border-solid border-border bg-background p-4 transition-all duration-300 ease-out cursor-pointer",{variants:{shadow:{sm:"hover:shadow-sm",md:"hover:shadow-md",lg:"hover:shadow-lg",xl:"hover:shadow-xl"}},defaultVariants:{shadow:"lg"}}),r=k.forwardRef((o,R)=>{const{className:q,children:W,lift:_=8,shadow:A="lg",rotate:V=0,...a}=o;return e.jsx("div",{ref:R,className:z("sui-hover-card",D({shadow:A}),q),style:{"--hover-lift":`${_}px`,"--hover-rotate":`${V}deg`},onMouseEnter:s=>{var t;const p=s.currentTarget;p.style.transform="translateY(calc(-1 * var(--hover-lift))) rotate(var(--hover-rotate))",(t=a.onMouseEnter)==null||t.call(a,s)},onMouseLeave:s=>{var t;const p=s.currentTarget;p.style.transform="translateY(0) rotate(0deg)",(t=a.onMouseLeave)==null||t.call(a,s)},...a,children:W})});r.displayName="HoverCard";r.__docgenInfo={description:"",methods:[],displayName:"HoverCard",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"卡片内容"},lift:{required:!1,tsType:{name:"number"},description:"上浮距离像素，默认 8"},shadow:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg' | 'xl'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},description:"阴影大小，默认 'lg'"},rotate:{required:!1,tsType:{name:"number"},description:"旋转角度，默认 0"}},composes:["HTMLAttributes","VariantProps"]};const O={title:"动效/HoverCard 悬浮动效卡片",component:r,tags:["autodocs"],parameters:{layout:"padded"},argTypes:{lift:{control:"number",description:"上浮距离像素"},shadow:{control:"select",options:["sm","md","lg","xl"],description:"阴影大小"},rotate:{control:"number",description:"旋转角度"}}},d={args:{children:e.jsx("div",{className:"p-4 text-center",children:"悬浮我试试"})}},n={args:{lift:16,children:e.jsx("div",{className:"p-4 text-center",children:"上浮 16px"})}},c={args:{rotate:3,children:e.jsx("div",{className:"p-4 text-center",children:"旋转 3 度"})}},i={render:()=>e.jsxs("div",{className:"flex gap-6 flex-wrap",children:[e.jsx(r,{shadow:"sm",children:e.jsx("div",{className:"p-4 text-center w-40",children:"小阴影"})}),e.jsx(r,{shadow:"md",children:e.jsx("div",{className:"p-4 text-center w-40",children:"中阴影"})}),e.jsx(r,{shadow:"lg",children:e.jsx("div",{className:"p-4 text-center w-40",children:"大阴影"})}),e.jsx(r,{shadow:"xl",children:e.jsx("div",{className:"p-4 text-center w-40",children:"超大阴影"})})]})},l={render:()=>e.jsx("div",{className:"grid grid-cols-3 gap-4",children:["项目 A","项目 B","项目 C"].map(o=>e.jsx(r,{lift:8,rotate:1,children:e.jsxs("div",{className:"p-4",children:[e.jsx("h3",{className:"font-medium text-foreground",children:o}),e.jsx("p",{className:"mt-2 text-sm text-muted-foreground",children:"悬浮查看动效"})]})},o))})},m={args:{lift:12,rotate:2,shadow:"xl",children:e.jsx("div",{className:"p-6 text-center",children:"上浮 + 旋转 + 大阴影"})}};var v,h,x;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: <div className="p-4 text-center">悬浮我试试</div>
  }
}`,...(x=(h=d.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var u,g,f;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    lift: 16,
    children: <div className="p-4 text-center">上浮 16px</div>
  }
}`,...(f=(g=n.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var w,N,j;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    rotate: 3,
    children: <div className="p-4 text-center">旋转 3 度</div>
  }
}`,...(j=(N=c.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var C,H,b;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div className="flex gap-6 flex-wrap">
      <HoverCard shadow="sm">
        <div className="p-4 text-center w-40">小阴影</div>
      </HoverCard>
      <HoverCard shadow="md">
        <div className="p-4 text-center w-40">中阴影</div>
      </HoverCard>
      <HoverCard shadow="lg">
        <div className="p-4 text-center w-40">大阴影</div>
      </HoverCard>
      <HoverCard shadow="xl">
        <div className="p-4 text-center w-40">超大阴影</div>
      </HoverCard>
    </div>
}`,...(b=(H=i.parameters)==null?void 0:H.docs)==null?void 0:b.source}}};var y,S,T;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-3 gap-4">
      {['项目 A', '项目 B', '项目 C'].map(name => <HoverCard key={name} lift={8} rotate={1}>
          <div className="p-4">
            <h3 className="font-medium text-foreground">{name}</h3>
            <p className="mt-2 text-sm text-muted-foreground">悬浮查看动效</p>
          </div>
        </HoverCard>)}
    </div>
}`,...(T=(S=l.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var E,L,M;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    lift: 12,
    rotate: 2,
    shadow: 'xl',
    children: <div className="p-6 text-center">上浮 + 旋转 + 大阴影</div>
  }
}`,...(M=(L=m.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};const P=["Default","WithLift","WithRotate","ShadowSizes","CardGrid","Combined"];export{l as CardGrid,m as Combined,d as Default,i as ShadowSizes,n as WithLift,c as WithRotate,P as __namedExportsOrder,O as default};
