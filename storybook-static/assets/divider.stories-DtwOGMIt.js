import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as O}from"./index-GiUgBvb1.js";import{a}from"./utils-BEhiKRD9.js";import{c as P}from"./index-C08JwjkN.js";const b=P("shrink-0 border-border border",{variants:{type:{horizontal:"w-full border-t-0 border-l-0 border-r-0 my-4",vertical:"inline-block h-auto self-stretch border-t-0 border-r-0 border-b-0 mx-4 align-top"}},defaultVariants:{type:"horizontal"}}),g={solid:"border-solid",dashed:"border-dashed",dotted:"border-dotted"},t=O.forwardRef(({type:p="horizontal",variant:m="solid",orientation:r="center",className:h,children:f,...u},v)=>{if(p==="vertical")return e.jsx("div",{ref:v,role:"separator","aria-orientation":"vertical",className:a(b({type:p}),g[m],h),...u});if(!f)return e.jsx("div",{ref:v,role:"separator","aria-orientation":"horizontal",className:a(b({type:p}),g[m],h),...u});const x=a("flex-1 border border-t-0 border-l-0 border-r-0",g[m],"border-border");return e.jsxs("div",{ref:v,role:"separator","aria-orientation":"horizontal",className:a("flex items-center my-4",h),...u,children:[(r==="center"||r==="right")&&e.jsx("span",{className:x,"aria-hidden":"true"}),e.jsx("span",{className:a("text-sm text-muted-foreground whitespace-nowrap shrink-0",r==="center"&&"px-4",r==="left"&&"pr-4",r==="right"&&"pl-4"),children:f}),(r==="center"||r==="left")&&e.jsx("span",{className:x,"aria-hidden":"true"})]})});t.displayName="Divider";t.__docgenInfo={description:`Divider 分割线组件

用于分割页面内容区域。支持水平/垂直方向、三种线型和内嵌文字。
当 type='horizontal' 且有 children 时，文字将嵌入在分割线中间。`,methods:[],displayName:"Divider",props:{type:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"分割线方向，'horizontal' 为水平线、'vertical' 为竖线，默认 'horizontal'",defaultValue:{value:"'horizontal'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'solid' | 'dashed' | 'dotted'",elements:[{name:"literal",value:"'solid'"},{name:"literal",value:"'dashed'"},{name:"literal",value:"'dotted'"}]},description:"分割线样式，solid=实线 dashed=虚线 dotted=点线，默认 'solid'",defaultValue:{value:"'solid'",computed:!1}},orientation:{required:!1,tsType:{name:"union",raw:"'left' | 'center' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'center'"},{name:"literal",value:"'right'"}]},description:"文字位置，仅 type='horizontal' 且存在 children 时生效，默认 'center'",defaultValue:{value:"'center'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"自定义类名，会通过 cn() 合并到容器元素上"}},composes:["HTMLAttributes","VariantProps"]};const K={title:"布局/Divider 分割线",component:t,tags:["autodocs"],parameters:{layout:"padded"},argTypes:{type:{control:"select",options:["horizontal","vertical"],description:"分割线方向，horizontal 为水平线、vertical 为竖线，默认 horizontal"},variant:{control:"select",options:["solid","dashed","dotted"],description:"分割线样式，solid=实线 dashed=虚线 dotted=点线，默认 solid"},orientation:{control:"select",options:["left","center","right"],description:"文字位置，仅 type=horizontal 且存在 children 时生效，默认 center"}}},s={args:{type:"horizontal",variant:"solid"}},o={args:{children:"或"}},n={args:{children:"区域 A",orientation:"left"}},i={args:{children:"结束",orientation:"right"}},d={args:{variant:"dashed"}},l={args:{variant:"dotted"}},c={render:()=>e.jsxs("div",{className:"flex items-center gap-4 h-8",children:[e.jsx("span",{children:"首页"}),e.jsx(t,{type:"vertical"}),e.jsx("span",{children:"产品"}),e.jsx(t,{type:"vertical"}),e.jsx("span",{children:"关于"})]})};var y,z,j;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    type: 'horizontal',
    variant: 'solid'
  }
}`,...(j=(z=s.parameters)==null?void 0:z.docs)==null?void 0:j.source}}};var T,D,N;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    children: '或'
  }
}`,...(N=(D=o.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};var S,V,w;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    children: '区域 A',
    orientation: 'left'
  }
}`,...(w=(V=n.parameters)==null?void 0:V.docs)==null?void 0:w.source}}};var A,R,_;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    children: '结束',
    orientation: 'right'
  }
}`,...(_=(R=i.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};var q,L,k;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    variant: 'dashed'
  }
}`,...(k=(L=d.parameters)==null?void 0:L.docs)==null?void 0:k.source}}};var E,H,C;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    variant: 'dotted'
  }
}`,...(C=(H=l.parameters)==null?void 0:H.docs)==null?void 0:C.source}}};var I,W,M;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4 h-8">
      <span>首页</span>
      <Divider type="vertical" />
      <span>产品</span>
      <Divider type="vertical" />
      <span>关于</span>
    </div>
}`,...(M=(W=c.parameters)==null?void 0:W.docs)==null?void 0:M.source}}};const Q=["Horizontal","WithText","LeftText","RightText","Dashed","Dotted","Vertical"];export{d as Dashed,l as Dotted,s as Horizontal,n as LeftText,i as RightText,c as Vertical,o as WithText,Q as __namedExportsOrder,K as default};
