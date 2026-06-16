import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as Q}from"./index-GiUgBvb1.js";import{a as s}from"./utils-BEhiKRD9.js";import{B as U}from"./index-B27MKJIv.js";import{S as X}from"./index-DXkbWS1e.js";import{c as n}from"./index-C08JwjkN.js";import{B as m}from"./index-WhxK0hy4.js";import"./chevron-down-CY-YwltC.js";import"./createLucideIcon-CZe00VV7.js";import"./loader-circle-CulI208u.js";const Y=n("sui-page-container flex flex-col min-h-full bg-background",{variants:{},defaultVariants:{}}),Z=n("flex items-center justify-between gap-4 pb-4",{variants:{},defaultVariants:{}}),$=n("text-xl font-semibold text-foreground m-0",{variants:{},defaultVariants:{}}),ee=n("flex-1 py-4",{variants:{},defaultVariants:{}}),re=n("pb-3",{variants:{},defaultVariants:{}}),te=n("border-t border-border pt-4 pb-2",{variants:{},defaultVariants:{}});function ae(r){const t=r.map(a=>({title:a.title,href:a.path}));return e.jsx("div",{className:s(re()),children:e.jsx(U,{items:t})})}function se(r,t){return e.jsxs("div",{className:s(Z()),children:[r&&e.jsx("h2",{className:s($()),children:r}),t.length>0&&e.jsx("div",{className:"flex items-center gap-2 shrink-0",children:t.map((a,p)=>e.jsx("span",{children:a},p))})]})}const h=Q.forwardRef((r,t)=>{const{className:a,title:p,breadcrumb:u,headerActions:g,footer:f,loading:M=!1,children:z,...D}=r,G=u&&u.length>0,J=p||g&&g.length>0,K=g??[];return e.jsxs("div",{ref:t,className:s(Y(),a),...D,children:[G&&ae(u),J&&se(p,K),e.jsx("div",{className:s(ee()),children:e.jsx(X,{spinning:M,children:z})}),f&&e.jsx("div",{className:s(te()),children:f})]})});h.displayName="PageContainer";h.__docgenInfo={description:`PageContainer 页面容器组件

提供页面级布局容器，包含面包屑、标题、操作栏、内容区域和页脚。
内容区域自适应高度，支持 loading 遮罩。`,methods:[],displayName:"PageContainer",props:{title:{required:!1,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:"页面标题。字符串或自定义 ReactNode"},breadcrumb:{required:!1,tsType:{name:"Array",elements:[{name:"PageContainerBreadcrumbItem"}],raw:"PageContainerBreadcrumbItem[]"},description:"面包屑数据数组。提供后渲染面包屑导航"},headerActions:{required:!1,tsType:{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"},description:"头部操作区域，渲染在标题右侧"},footer:{required:!1,tsType:{name:"ReactNode"},description:"页脚内容"},loading:{required:!1,tsType:{name:"boolean"},description:"是否加载中。true 时内容区域显示 Spin 遮罩"},children:{required:!1,tsType:{name:"ReactNode"},description:"内容区域"},className:{required:!1,tsType:{name:"string"},description:"自定义 className，通过 cn() + twMerge 合并"}},composes:["Omit","VariantProps"]};const he={title:"布局/PageContainer 页面容器",component:h,tags:["autodocs"],parameters:{layout:"padded"},argTypes:{title:{control:"text"},loading:{control:"boolean"}}},i={args:{title:"页面标题",children:"这是页面内容区域，自适应高度。"}},o={args:{title:"用户管理",breadcrumb:[{title:"首页",path:"/"},{title:"系统设置",path:"/settings"},{title:"用户管理"}],children:"面包屑导航帮助用户了解当前页面在系统中的位置。"}},c={args:{title:"项目列表",headerActions:[e.jsx(m,{children:"导出"},"export"),e.jsx(m,{variant:"primary",children:"新建项目"},"create")],children:"标题右侧可以放置操作按钮，方便用户快速执行操作。"}},d={args:{title:"数据加载中",loading:!0,children:"当 loading 为 true 时，内容区域会显示加载遮罩。"}},l={args:{title:"订单详情",footer:e.jsxs("div",{className:"flex justify-end gap-2",children:[e.jsx(m,{children:"取消"}),e.jsx(m,{variant:"primary",children:"提交"})]}),children:"页脚区域通常用于放置操作按钮，如提交、取消等。"}};var x,b,y,B,N;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    title: '页面标题',
    children: '这是页面内容区域，自适应高度。'
  }
}`,...(y=(b=i.parameters)==null?void 0:b.docs)==null?void 0:y.source},description:{story:"基础页面容器",...(N=(B=i.parameters)==null?void 0:B.docs)==null?void 0:N.description}}};var j,v,C,V,R;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    title: '用户管理',
    breadcrumb: [{
      title: '首页',
      path: '/'
    }, {
      title: '系统设置',
      path: '/settings'
    }, {
      title: '用户管理'
    }],
    children: '面包屑导航帮助用户了解当前页面在系统中的位置。'
  }
}`,...(C=(v=o.parameters)==null?void 0:v.docs)==null?void 0:C.source},description:{story:"带面包屑导航",...(R=(V=o.parameters)==null?void 0:V.docs)==null?void 0:R.description}}};var T,A,P,S,q;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    title: '项目列表',
    headerActions: [<Button key="export">导出</Button>, <Button key="create" variant="primary">新建项目</Button>],
    children: '标题右侧可以放置操作按钮，方便用户快速执行操作。'
  }
}`,...(P=(A=c.parameters)==null?void 0:A.docs)==null?void 0:P.source},description:{story:"带操作栏",...(q=(S=c.parameters)==null?void 0:S.docs)==null?void 0:q.description}}};var w,W,k,I,_;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    title: '数据加载中',
    loading: true,
    children: '当 loading 为 true 时，内容区域会显示加载遮罩。'
  }
}`,...(k=(W=d.parameters)==null?void 0:W.docs)==null?void 0:k.source},description:{story:"加载状态",...(_=(I=d.parameters)==null?void 0:I.docs)==null?void 0:_.description}}};var E,F,H,L,O;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    title: '订单详情',
    footer: <div className="flex justify-end gap-2"><Button>取消</Button><Button variant="primary">提交</Button></div>,
    children: '页脚区域通常用于放置操作按钮，如提交、取消等。'
  }
}`,...(H=(F=l.parameters)==null?void 0:F.docs)==null?void 0:H.source},description:{story:"带页脚",...(O=(L=l.parameters)==null?void 0:L.docs)==null?void 0:O.description}}};const fe=["Basic","WithBreadcrumb","WithActions","Loading","WithFooter"];export{i as Basic,d as Loading,c as WithActions,o as WithBreadcrumb,l as WithFooter,fe as __namedExportsOrder,he as default};
