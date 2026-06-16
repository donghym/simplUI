import{j as s}from"./jsx-runtime-CDt2p4po.js";import{fn as K}from"./index-DeN4tkzB.js";import{r as t}from"./index-GiUgBvb1.js";import{a as X}from"./utils-BEhiKRD9.js";import{c as Z}from"./index-C08JwjkN.js";import{C as $}from"./chevron-up-CiCbXlai.js";import{A as ee}from"./arrow-up-Cfl0ziE_.js";import"./createLucideIcon-CZe00VV7.js";const re=Z("fixed bottom-12 right-12 z-50 h-10 w-10 rounded-full bg-background border border-solid border-border shadow-md flex items-center justify-center text-muted-foreground hover:text-primary-500 hover:border-primary-500 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500",{variants:{visible:{true:"opacity-100 translate-y-0 pointer-events-auto",false:"opacity-0 translate-y-4 pointer-events-none"},disabled:{true:"pointer-events-none opacity-50 cursor-not-allowed",false:""}},defaultVariants:{visible:!1,disabled:!1}}),a=t.forwardRef((I,P)=>{const{className:V,visibilityHeight:w=400,onClick:o,getContainer:c,duration:v=450,icon:_,disabled:l,...F}=I,[O,U]=t.useState(!1),d=t.useRef(0),i=t.useCallback(()=>(c==null?void 0:c())||window,[c]),m=t.useCallback(()=>{const e=i();return e===window?window.scrollY||document.documentElement.scrollTop||document.body.scrollTop||0:e.scrollTop},[i]),y=t.useCallback(e=>{const r=i();r===window?(window.scrollTo(0,e),document.documentElement.scrollTop=e,document.body.scrollTop=e):r.scrollTop=e},[i]);t.useEffect(()=>{const e=i(),r=()=>{const h=m();U(h>=w)};return r(),e===window?(window.addEventListener("scroll",r),()=>window.removeEventListener("scroll",r)):(e.addEventListener("scroll",r),()=>e.removeEventListener("scroll",r))},[w,i,m]);const z=t.useCallback(()=>{const e=m();if(v===0){y(0),o==null||o();return}const r=Date.now(),h=e,Y=n=>n<.5?2*n*n:-1+(4-2*n)*n,T=()=>{const n=Date.now()-r,x=Math.min(n/v,1),G=Y(x),J=h*(1-G);y(J),x<1?d.current=requestAnimationFrame(T):o==null||o()};d.current=requestAnimationFrame(T)},[v,i,m,y,o]);t.useEffect(()=>()=>{d.current&&cancelAnimationFrame(d.current)},[]);const Q=()=>{l||z()};return s.jsx("button",{ref:P,type:"button","aria-label":"回到顶部","aria-disabled":l||void 0,disabled:l,className:X(re({visible:O,disabled:l}),V),onClick:Q,...F,children:_||s.jsx($,{className:"h-5 w-5","aria-hidden":"true"})})});a.displayName="BackTop";a.__docgenInfo={description:`BackTop 回到顶部

当页面滚动到一定高度时显示，点击平滑滚动回页面顶部。
支持自定义容器、滚动持续时间、显示阈值。`,methods:[],displayName:"BackTop",props:{visibilityHeight:{required:!1,tsType:{name:"number"},description:"显示回到顶部按钮的滚动高度阈值。默认 400"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"点击时的回调函数"},getContainer:{required:!1,tsType:{name:"signature",type:"function",raw:"() => HTMLElement | Window",signature:{arguments:[],return:{name:"union",raw:"HTMLElement | Window",elements:[{name:"HTMLElement"},{name:"Window"}]}}},description:"滚动到顶部的目标容器。默认 window"},duration:{required:!1,tsType:{name:"number"},description:"滚动持续时间（毫秒）。默认 450"},disabled:{required:!1,tsType:{name:"boolean"},description:"是否禁用"},icon:{required:!1,tsType:{name:"ReactNode"},description:"自定义图标"},className:{required:!1,tsType:{name:"string"},description:"自定义 className，通过 cn() + twMerge 合并"}},composes:["Omit","VariantProps"]};const de={title:"其他/BackTop 回到顶部",component:a,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`返回页面顶部的操作按钮。

- 长页辅助：用于内容较长的页面，方便用户快速回到顶部。
- 自定义阈值：可设置滚动距离阈值，控制按钮的显示时机。
- 平滑滚动：支持配置滚动动画时长，提升交互体验。`}}},argTypes:{visibilityHeight:{control:"number",description:"显示回到顶部按钮的滚动高度阈值，默认 400"},duration:{control:"number",description:"滚动持续时间（毫秒），默认 450"},getContainer:{control:!1,description:"滚动到顶部的目标容器，默认 window"}}},p={parameters:{docs:{description:{story:"基础用法，页面滚动超过指定高度后，右下角出现返回顶部按钮。"}}},render:()=>s.jsxs("div",{children:[s.jsx("div",{className:"h-[2000px] p-4",children:s.jsx("p",{className:"text-center text-gray-500",children:"向下滚动查看回到顶部按钮"})}),s.jsx(a,{visibilityHeight:400})]})},u={args:{visibilityHeight:200,icon:s.jsx(ee,{className:"h-5 w-5"})}},f={args:{visibilityHeight:100,duration:300}},b={args:{visibilityHeight:100,onClick:K()}},g={parameters:{docs:{description:{story:"模拟长页面的完整示例，向下滚动可查看回到顶部按钮的显示与交互效果。"}}},render:()=>s.jsxs("div",{className:"h-[200vh] p-4",children:[s.jsx("p",{className:"text-center",children:"向下滚动查看返回顶部按钮"}),s.jsx(a,{visibilityHeight:200})]})};var k,C,N;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '基础用法，页面滚动超过指定高度后，右下角出现返回顶部按钮。'
      }
    }
  },
  render: () => <div>
      <div className="h-[2000px] p-4">
        <p className="text-center text-gray-500">向下滚动查看回到顶部按钮</p>
      </div>
      <BackTop visibilityHeight={400} />
    </div>
}`,...(N=(C=p.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};var H,E,j;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    visibilityHeight: 200,
    icon: <ArrowUp className="h-5 w-5" />
  }
}`,...(j=(E=u.parameters)==null?void 0:E.docs)==null?void 0:j.source}}};var S,q,D;f.parameters={...f.parameters,docs:{...(S=f.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    visibilityHeight: 100,
    duration: 300
  }
}`,...(D=(q=f.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};var B,L,A;b.parameters={...b.parameters,docs:{...(B=b.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    visibilityHeight: 100,
    onClick: fn()
  }
}`,...(A=(L=b.parameters)==null?void 0:L.docs)==null?void 0:A.source}}};var M,R,W;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '模拟长页面的完整示例，向下滚动可查看回到顶部按钮的显示与交互效果。'
      }
    }
  },
  render: () => <div className="h-[200vh] p-4">
      <p className="text-center">向下滚动查看返回顶部按钮</p>
      <BackTop visibilityHeight={200} />
    </div>
}`,...(W=(R=g.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};const me=["Default","CustomIcon","CustomDuration","WithClickCallback","DemoPage"];export{f as CustomDuration,u as CustomIcon,p as Default,g as DemoPage,b as WithClickCallback,me as __namedExportsOrder,de as default};
