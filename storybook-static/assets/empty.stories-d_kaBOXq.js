import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as E}from"./index-GiUgBvb1.js";import{a as s}from"./utils-BEhiKRD9.js";import{c as p}from"./index-C08JwjkN.js";const Z=p("flex flex-col items-center justify-center text-center",{variants:{},defaultVariants:{}}),x=p("mb-4",{variants:{},defaultVariants:{}}),$=p("text-sm text-muted-foreground",{variants:{},defaultVariants:{}}),ee=p("mt-4",{variants:{},defaultVariants:{}}),te={PRESENTED_IMAGE_SIMPLE:"https://picsum.photos/200/130"},r=E.forwardRef((z,F)=>{const{image:t=te.PRESENTED_IMAGE_SIMPLE,imageStyle:f,description:u="暂无数据",imageClassName:g,descriptionClassName:H,contentClassName:J,children:h,className:K,...Q}=z,U=()=>t?E.isValidElement(t)?e.jsx("div",{className:s(x(),g),style:f,children:t}):typeof t=="string"?e.jsx("div",{className:s(x(),g),style:f,children:e.jsx("img",{src:t,alt:"empty",className:"h-auto max-w-full","aria-hidden":"true"})}):null:null,X=()=>u==null?null:e.jsx("div",{className:s($(),H),children:u}),Y=()=>h?e.jsx("div",{className:s(ee(),J),children:h}):null;return e.jsxs("div",{ref:F,role:"status","aria-label":"空状态",className:s("sui-empty",Z(),K),...Q,children:[U(),X(),Y()]})});r.displayName="Empty";r.__docgenInfo={description:`Empty 空状态组件
用于展示空状态，常用于列表、表格等无数据时的占位展示`,methods:[],displayName:"Empty",props:{image:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:"空状态图片地址。内置 PRESENTED_IMAGE_SIMPLE 和 PRESENTED_IMAGE_PAGE_SIMPLE 两种风格"},imageStyle:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"图片样式。通过 className 覆盖"},description:{required:!1,tsType:{name:"ReactNode"},description:'描述文字。不传则显示默认文案"暂无数据"'},imageClassName:{required:!1,tsType:{name:"string"},description:"自定义图片容器 className"},descriptionClassName:{required:!1,tsType:{name:"string"},description:"自定义描述容器 className"},contentClassName:{required:!1,tsType:{name:"string"},description:"自定义内容区域 className"},children:{required:!1,tsType:{name:"ReactNode"},description:"子元素，常用于放置操作按钮"},className:{required:!1,tsType:{name:"string"},description:"自定义 className，通过 cn() + twMerge 合并"}},composes:["Omit"]};const ie={title:"数据展示/Empty 空状态",component:r,tags:["autodocs"],argTypes:{description:{control:"text",description:'描述文字，不传则显示默认文案"暂无数据"'},image:{control:"text",description:"空状态图片地址，内置 PRESENTED_IMAGE_SIMPLE 和 PRESENTED_IMAGE_PAGE_SIMPLE 两种风格"}},parameters:{layout:"padded"}},a={args:{}},n={args:{description:"没有找到数据，请尝试调整筛选条件。"}},i={args:{image:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect fill='%23f3f4f6' width='100' height='100'/%3E%3Ctext fill='%239ca3af' font-family='sans-serif' font-size='14' x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle'%3EEmpty%3C/text%3E%3C/svg%3E",description:"自定义空状态图片"}},o={args:{description:"简洁空状态（小图）"}},c={render:()=>e.jsx(r,{description:"购物车中没有商品",children:e.jsx("button",{className:"mt-4 px-4 py-2 bg-primary-500 text-white rounded",children:"添加商品"})})},d={args:{description:"暂无数据"}},m={args:{description:"未找到搜索结果"}},l={render:()=>e.jsx(r,{image:e.jsxs("svg",{width:"120",height:"120",viewBox:"0 0 120 120",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("circle",{cx:"60",cy:"60",r:"50",fill:"#f0f5ff",stroke:"#d6e4ff",strokeWidth:"2"}),e.jsx("path",{d:"M40 55 L55 70 L80 45",stroke:"#1677ff",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round",fill:"none"}),e.jsx("circle",{cx:"60",cy:"60",r:"30",stroke:"#adc6ff",strokeWidth:"1.5",strokeDasharray:"4 3",fill:"none"})]}),description:"自定义 SVG 图标空状态",children:e.jsx("button",{className:"mt-4 px-4 py-2 bg-primary-500 text-white rounded",children:"重试"})})};var y,N,w;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {}
}`,...(w=(N=a.parameters)==null?void 0:N.docs)==null?void 0:w.source}}};var v,S,C;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    description: '没有找到数据，请尝试调整筛选条件。'
  }
}`,...(C=(S=n.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var I,j,k;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    image: 'data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'100\\' height=\\'100\\' viewBox=\\'0 0 100 100\\'%3E%3Crect fill=\\'%23f3f4f6\\' width=\\'100\\' height=\\'100\\'/%3E%3Ctext fill=\\'%239ca3af\\' font-family=\\'sans-serif\\' font-size=\\'14\\' x=\\'50%25\\' y=\\'50%25\\' dominant-baseline=\\'middle\\' text-anchor=\\'middle\\'%3EEmpty%3C/text%3E%3C/svg%3E',
    description: '自定义空状态图片'
  }
}`,...(k=(j=i.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var D,_,P;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    description: '简洁空状态（小图）'
  }
}`,...(P=(_=o.parameters)==null?void 0:_.docs)==null?void 0:P.source}}};var R,M,T;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <Empty description="购物车中没有商品">
      <button className="mt-4 px-4 py-2 bg-primary-500 text-white rounded">
        添加商品
      </button>
    </Empty>
}`,...(T=(M=c.parameters)==null?void 0:M.docs)==null?void 0:T.source}}};var b,L,W;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    description: '暂无数据'
  }
}`,...(W=(L=d.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};var V,G,q;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    description: '未找到搜索结果'
  }
}`,...(q=(G=m.parameters)==null?void 0:G.docs)==null?void 0:q.source}}};var A,B,O;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <Empty image={<svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="60" cy="60" r="50" fill="#f0f5ff" stroke="#d6e4ff" strokeWidth="2" />
          <path d="M40 55 L55 70 L80 45" stroke="#1677ff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <circle cx="60" cy="60" r="30" stroke="#adc6ff" strokeWidth="1.5" strokeDasharray="4 3" fill="none" />
        </svg>} description="自定义 SVG 图标空状态">
      <button className="mt-4 px-4 py-2 bg-primary-500 text-white rounded">
        重试
      </button>
    </Empty>
}`,...(O=(B=l.parameters)==null?void 0:B.docs)==null?void 0:O.source}}};const oe=["Default","WithDescription","CustomImage","WithDescriptionOnly","WithChildren","NoData","NoResults","CustomIcon"];export{l as CustomIcon,i as CustomImage,a as Default,d as NoData,m as NoResults,c as WithChildren,n as WithDescription,o as WithDescriptionOnly,oe as __namedExportsOrder,ie as default};
