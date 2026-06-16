import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as h}from"./index-GiUgBvb1.js";import{a as s}from"./utils-BEhiKRD9.js";import{c as re}from"./index-C08JwjkN.js";import{B as ae}from"./index-WhxK0hy4.js";import"./loader-circle-CulI208u.js";import"./createLucideIcon-CZe00VV7.js";const se=re("rounded-lg",{variants:{variant:{default:"border border-solid border-border bg-background",filled:"bg-muted",borderless:""}},defaultVariants:{variant:"default"}}),te="flex items-center justify-between px-4 py-3 font-medium",ie="w-full object-cover",de="px-4 py-3 text-sm text-foreground",g="h-4 animate-pulse rounded bg-muted",le="flex items-center divide-x divide-border border-t border-border",r=h.forwardRef(({variant:O,title:a,extra:u,cover:x,actions:f,hoverable:P=!1,loading:U=!1,children:J,className:K,...X},Y)=>{const Z=!!a||!!u;return e.jsxs("div",{ref:Y,className:s("sui-card",se({variant:O}),P&&"cursor-pointer transition-shadow duration-200 hover:shadow-md",K),...X,children:[Z&&e.jsxs("div",{className:te,children:[a?e.jsx("span",{className:"text-base text-foreground",children:a}):e.jsx("span",{}),u?e.jsx("span",{className:"text-sm text-muted-foreground",children:u}):null]}),x&&e.jsx("img",{src:x,alt:typeof a=="string"?a:"cover",className:ie}),e.jsx("div",{className:de,children:U?e.jsxs("div",{className:"flex flex-col gap-3","aria-busy":"true",children:[e.jsx("div",{className:s(g,"w-3/4")}),e.jsx("div",{className:s(g,"w-full")}),e.jsx("div",{className:s(g,"w-1/2")})]}):J}),f&&f.length>0&&e.jsx("div",{className:le,children:h.Children.toArray(f).map(($,ee)=>e.jsx("span",{className:"flex flex-1 items-center justify-center py-3 text-sm text-muted-foreground transition-colors hover:bg-muted",children:$},ee))})]})});r.displayName="Card";r.__docgenInfo={description:`Card 卡片组件

通用内容容器，用于信息展示与分组。
支持标题、封面图、底部操作区、加载骨架屏与悬停阴影效果。`,methods:[],displayName:"Card",props:{variant:{required:!1,tsType:{name:"union",raw:"'default' | 'filled' | 'borderless'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'filled'"},{name:"literal",value:"'borderless'"}]},description:"卡片变体：default 带边框白色背景、filled 浅灰背景、borderless 无边框无背景"},title:{required:!1,tsType:{name:"ReactNode"},description:"卡片标题，显示在卡片头部左侧"},extra:{required:!1,tsType:{name:"ReactNode"},description:"卡片头部右侧操作区，放置链接或操作按钮"},cover:{required:!1,tsType:{name:"string"},description:"封面图片 URL，显示在头部与主体内容之间，宽度撑满卡片"},actions:{required:!1,tsType:{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"},description:"底部操作区，数组每项对应一个操作按钮/链接，等分布局"},hoverable:{required:!1,tsType:{name:"boolean"},description:"鼠标悬停时显示阴影效果，暗示可交互，默认 false",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"加载中状态，true 时内容区显示脉冲骨架屏占位",defaultValue:{value:"false",computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:"卡片主体内容，任意 React 节点"},className:{required:!1,tsType:{name:"string"},description:"自定义类名，通过 cn() + twMerge 合并，可覆盖默认样式"}},composes:["VariantProps"]};const ge={title:"数据展示/Card 卡片",component:r,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"卡片用于将信息聚合在容器中展示。适用于概览页面、数据面板、商品展示等场景，支持封面、操作区和多种变体样式。"}}},argTypes:{variant:{control:"select",options:["default","filled","borderless"]}}},t={args:{title:"卡片标题",children:"这是卡片的主体内容。卡片用于将相关信息进行分组展示。"}},i={args:{title:"项目 Alpha",extra:e.jsx(ae,{variant:"link",children:"更多"}),children:"该项目按计划推进，预计 Q3 完成交付。"}},d={args:{title:"山景",cover:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='200' viewBox='0 0 400 200'%3E%3Crect fill='%23f3f4f6' width='400' height='200'/%3E%3Ctext fill='%239ca3af' font-family='sans-serif' font-size='14' x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle'%3ECard Cover%3C/text%3E%3C/svg%3E",children:"日出时分拍摄的壮美山景。"}},l={args:{title:"可悬停卡片",hoverable:!0,children:"悬停此卡片可看到阴影效果。"}},n={args:{title:"加载中卡片",loading:!0}},o={args:{title:"文章标题",children:"这篇文章收到了 42 个赞和 8 条评论。",actions:[e.jsx("span",{children:"点赞"},"a"),e.jsx("span",{children:"评论"},"b"),e.jsx("span",{children:"分享"},"c")]}},c={render:()=>e.jsxs("div",{className:"flex gap-4 flex-wrap",children:[e.jsx(r,{variant:"default",title:"默认",className:"w-64",children:"带边框的默认卡片"}),e.jsx(r,{variant:"filled",title:"填充",className:"w-64",children:"灰色背景填充"}),e.jsx(r,{variant:"borderless",title:"无边框",className:"w-64",children:"无边框无背景"})]})},m={render:()=>e.jsxs(r,{title:"外层卡片",className:"max-w-lg",children:[e.jsx("p",{className:"mb-4 text-sm text-gray-600",children:"外层卡片内容，包含一个嵌套的内层卡片："}),e.jsx(r,{variant:"filled",title:"内层卡片",className:"mt-2",children:"这是嵌套在内层的卡片内容，适用于分组展示关联信息。"})]})},p={render:()=>e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:[e.jsx(r,{title:"卡片 A",children:"卡片 A 的内容"}),e.jsx(r,{title:"卡片 B",children:"卡片 B 的内容"}),e.jsx(r,{title:"卡片 C",children:"卡片 C 的内容"}),e.jsx(r,{title:"卡片 D",children:"卡片 D 的内容"}),e.jsx(r,{title:"卡片 E",children:"卡片 E 的内容"}),e.jsx(r,{title:"卡片 F",children:"卡片 F 的内容"})]})};var v,C,b;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    title: '卡片标题',
    children: '这是卡片的主体内容。卡片用于将相关信息进行分组展示。'
  }
}`,...(b=(C=t.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};var j,N,w;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    title: '项目 Alpha',
    extra: <Button variant="link">更多</Button>,
    children: '该项目按计划推进，预计 Q3 完成交付。'
  }
}`,...(w=(N=i.parameters)==null?void 0:N.docs)==null?void 0:w.source}}};var y,E,B;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    title: '山景',
    cover: 'data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'400\\' height=\\'200\\' viewBox=\\'0 0 400 200\\'%3E%3Crect fill=\\'%23f3f4f6\\' width=\\'400\\' height=\\'200\\'/%3E%3Ctext fill=\\'%239ca3af\\' font-family=\\'sans-serif\\' font-size=\\'14\\' x=\\'50%25\\' y=\\'50%25\\' dominant-baseline=\\'middle\\' text-anchor=\\'middle\\'%3ECard Cover%3C/text%3E%3C/svg%3E',
    children: '日出时分拍摄的壮美山景。'
  }
}`,...(B=(E=d.parameters)==null?void 0:E.docs)==null?void 0:B.source}}};var A,T,q;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    title: '可悬停卡片',
    hoverable: true,
    children: '悬停此卡片可看到阴影效果。'
  }
}`,...(q=(T=l.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};var R,S,k;n.parameters={...n.parameters,docs:{...(R=n.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    title: '加载中卡片',
    loading: true
  }
}`,...(k=(S=n.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var V,W,D;o.parameters={...o.parameters,docs:{...(V=o.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    title: '文章标题',
    children: '这篇文章收到了 42 个赞和 8 条评论。',
    actions: [<span key="a">点赞</span>, <span key="b">评论</span>, <span key="c">分享</span>]
  }
}`,...(D=(W=o.parameters)==null?void 0:W.docs)==null?void 0:D.source}}};var F,_,H;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4 flex-wrap">
      <Card variant="default" title="默认" className="w-64">带边框的默认卡片</Card>
      <Card variant="filled" title="填充" className="w-64">灰色背景填充</Card>
      <Card variant="borderless" title="无边框" className="w-64">无边框无背景</Card>
    </div>
}`,...(H=(_=c.parameters)==null?void 0:_.docs)==null?void 0:H.source}}};var I,L,z;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <Card title="外层卡片" className="max-w-lg">
      <p className="mb-4 text-sm text-gray-600">外层卡片内容，包含一个嵌套的内层卡片：</p>
      <Card variant="filled" title="内层卡片" className="mt-2">
        这是嵌套在内层的卡片内容，适用于分组展示关联信息。
      </Card>
    </Card>
}`,...(z=(L=m.parameters)==null?void 0:L.docs)==null?void 0:z.source}}};var G,Q,M;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <Card title="卡片 A">卡片 A 的内容</Card>
      <Card title="卡片 B">卡片 B 的内容</Card>
      <Card title="卡片 C">卡片 C 的内容</Card>
      <Card title="卡片 D">卡片 D 的内容</Card>
      <Card title="卡片 E">卡片 E 的内容</Card>
      <Card title="卡片 F">卡片 F 的内容</Card>
    </div>
}`,...(M=(Q=p.parameters)==null?void 0:Q.docs)==null?void 0:M.source}}};const xe=["Basic","WithExtra","WithCover","Hoverable","Loading","WithActions","Variants","InnerCard","GridCards"];export{t as Basic,p as GridCards,l as Hoverable,m as InnerCard,n as Loading,c as Variants,o as WithActions,d as WithCover,i as WithExtra,xe as __namedExportsOrder,ge as default};
