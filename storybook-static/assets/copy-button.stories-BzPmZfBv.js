import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as a}from"./index-GiUgBvb1.js";import{a as Q}from"./utils-BEhiKRD9.js";import{c as W}from"./index-C08JwjkN.js";import{C as Y}from"./check-DytZnMFh.js";import{X as Z}from"./x-B-5N0Ikz.js";import{C as $}from"./copy-DgomLDo4.js";import"./createLucideIcon-CZe00VV7.js";const ee=W("inline-flex items-center justify-center gap-1.5 rounded-md px-3 py-1.5 text-sm transition-colors duration-200 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-1",{variants:{variant:{default:"bg-background text-foreground border border-solid border-border hover:border-primary-500 hover:text-primary-500",primary:"bg-primary-500 text-white border border-solid border-primary-500 hover:bg-primary-600",ghost:"bg-transparent text-muted-foreground border border-transparent hover:bg-muted hover:text-foreground"},copied:{true:"border-success-500 text-success-500",false:""},error:{true:"border-danger-500 text-danger-500",false:""}},defaultVariants:{variant:"default",copied:!1,error:!1}}),s=a.forwardRef((U,X)=>{const{className:z,variant:A,text:x,onCopy:r,showTooltip:y=!0,tooltipText:F,icon:n,successDuration:h=2e3,...J}=U,[t,f]=a.useState("idle"),o=a.useRef(null);a.useEffect(()=>()=>{o.current&&clearTimeout(o.current)},[]);const g=F??{success:"已复制",error:"复制失败",default:"点击复制"},K=a.useCallback(async()=>{try{await navigator.clipboard.writeText(x),f("success"),r==null||r(!0)}catch{f("error"),r==null||r(!1)}o.current&&clearTimeout(o.current),o.current=setTimeout(()=>f("idle"),h)},[x,r,h]),M=()=>n&&t==="idle"?e.jsx("span",{"aria-hidden":!0,children:n}):t==="success"?e.jsx(Y,{className:"h-4 w-4","aria-hidden":!0}):t==="error"?e.jsx(Z,{className:"h-4 w-4","aria-hidden":!0}):n?e.jsx("span",{"aria-hidden":!0,children:n}):e.jsx($,{className:"h-4 w-4","aria-hidden":!0}),b=t==="success"?g.success:t==="error"?g.error:g.default;return e.jsxs("button",{ref:X,type:"button",onClick:K,title:y?b:void 0,className:Q("sui-copy-button",ee({variant:A,copied:t==="success",error:t==="error"}),z),...J,children:[M(),y&&e.jsx("span",{children:b})]})});s.displayName="CopyButton";s.__docgenInfo={description:"",methods:[],displayName:"CopyButton",props:{text:{required:!0,tsType:{name:"string"},description:"要复制的文本内容"},onCopy:{required:!1,tsType:{name:"signature",type:"function",raw:"(success: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"success"}],return:{name:"void"}}},description:"复制结果回调，参数为是否成功"},showTooltip:{required:!1,tsType:{name:"boolean"},description:"是否显示 tooltip 提示，默认 true"},tooltipText:{required:!1,tsType:{name:"signature",type:"object",raw:"{ success: string; error: string; default: string }",signature:{properties:[{key:"success",value:{name:"string",required:!0}},{key:"error",value:{name:"string",required:!0}},{key:"default",value:{name:"string",required:!0}}]}},description:"tooltip 文本配置"},icon:{required:!1,tsType:{name:"ReactNode"},description:"自定义图标"},successDuration:{required:!1,tsType:{name:"number"},description:"成功状态持续时间毫秒，默认 2000"}},composes:["Omit","VariantProps"]};const pe={title:"通用/CopyButton 一键复制",component:s,tags:["autodocs"],parameters:{layout:"padded"},argTypes:{text:{control:"text",description:"要复制的文本内容"},variant:{control:"select",options:["default","primary","ghost"],description:"按钮变体，决定视觉风格"},showTooltip:{control:"boolean",description:"是否显示 tooltip 提示"},successDuration:{control:"number",description:"成功状态持续时间毫秒"}}},i={args:{text:"Hello, SimplUI!"}},c={args:{text:"主要复制按钮",variant:"primary"}},u={args:{text:"幽灵复制按钮",variant:"ghost"}},p={args:{text:"无提示复制",showTooltip:!1}},d={args:{text:"自定义提示文本",tooltipText:{success:"复制成功啦",error:"哎呀失败了",default:"点我复制"}}},l={render:()=>e.jsxs("div",{className:"flex gap-4 items-center",children:[e.jsx(s,{text:"默认变体",variant:"default"}),e.jsx(s,{text:"主要变体",variant:"primary"}),e.jsx(s,{text:"幽灵变体",variant:"ghost"})]})},m={args:{text:"这是一段很长的文本内容，用于测试复制功能的稳定性与可靠性。"}};var v,T,j;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    text: 'Hello, SimplUI!'
  }
}`,...(j=(T=i.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};var C,w,N;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    text: '主要复制按钮',
    variant: 'primary'
  }
}`,...(N=(w=c.parameters)==null?void 0:w.docs)==null?void 0:N.source}}};var S,q,B;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    text: '幽灵复制按钮',
    variant: 'ghost'
  }
}`,...(B=(q=u.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};var k,D,R;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    text: '无提示复制',
    showTooltip: false
  }
}`,...(R=(D=p.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var V,E,I;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    text: '自定义提示文本',
    tooltipText: {
      success: '复制成功啦',
      error: '哎呀失败了',
      default: '点我复制'
    }
  }
}`,...(I=(E=d.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var _,L,P;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4 items-center">
      <CopyButton text="默认变体" variant="default" />
      <CopyButton text="主要变体" variant="primary" />
      <CopyButton text="幽灵变体" variant="ghost" />
    </div>
}`,...(P=(L=l.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};var G,H,O;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    text: '这是一段很长的文本内容，用于测试复制功能的稳定性与可靠性。'
  }
}`,...(O=(H=m.parameters)==null?void 0:H.docs)==null?void 0:O.source}}};const de=["Default","Primary","Ghost","NoTooltip","CustomTooltip","Variants","LongText"];export{d as CustomTooltip,i as Default,u as Ghost,m as LongText,p as NoTooltip,c as Primary,l as Variants,de as __namedExportsOrder,pe as default};
