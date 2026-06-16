import{j as t}from"./jsx-runtime-CDt2p4po.js";import{r as x}from"./index-GiUgBvb1.js";import{a as r}from"./utils-BEhiKRD9.js";import{c as p}from"./index-C08JwjkN.js";import{C as _}from"./chevron-down-CY-YwltC.js";import{X as L}from"./x-B-5N0Ikz.js";import{C as M}from"./check-DytZnMFh.js";import{L as q}from"./loader-circle-CulI208u.js";import{M as z}from"./minus-DzxWgTKt.js";import"./createLucideIcon-CZe00VV7.js";const W=p("flex flex-col",{variants:{},defaultVariants:{}}),H=p("relative flex gap-3 pb-6",{variants:{},defaultVariants:{}}),O=p("relative z-10 flex shrink-0 w-7 h-7 items-center justify-center rounded-full border-2 text-xs font-medium",{variants:{status:{waiting:"border-muted bg-muted text-muted-foreground",running:"border-primary bg-primary/10 text-primary",done:"border-primary bg-primary text-primary-foreground",error:"border-danger bg-danger text-danger-foreground"}},defaultVariants:{status:"waiting"}}),P=p("flex-1 min-w-0 pt-0.5",{variants:{},defaultVariants:{}}),X={waiting:t.jsx(z,{className:"h-3.5 w-3.5"}),running:t.jsx(q,{className:"h-3.5 w-3.5 animate-spin"}),done:t.jsx(M,{className:"h-3.5 w-3.5"}),error:t.jsx(L,{className:"h-3.5 w-3.5"})};function B({step:e,isLast:g,collapsible:f,expanded:o,onToggle:h}){const i=e.content!==void 0,s=f&&i;return t.jsxs("div",{className:r(H()),children:[!g&&t.jsx("div",{className:"absolute left-[13px] top-7 h-[calc(100%-28px)] w-0.5 bg-border"}),t.jsx("div",{className:r(O({status:e.status})),children:X[e.status]}),t.jsxs("div",{className:r(P()),children:[t.jsx("div",{className:r("text-sm font-medium text-foreground",e.status==="waiting"&&"text-muted-foreground",s&&"cursor-pointer select-none"),onClick:s?h:void 0,role:s?"button":void 0,tabIndex:s?0:void 0,"aria-expanded":s?o:void 0,children:t.jsxs("span",{className:"flex items-center gap-2",children:[e.title,s&&t.jsx(_,{size:14,className:r("text-muted-foreground transition-transform",o&&"rotate-180")})]})}),i&&o&&t.jsx("div",{className:"mt-2 text-sm text-muted-foreground leading-relaxed",children:e.content})]})]})}const b=x.forwardRef(({steps:e,collapsible:g=!0,defaultExpandAll:f=!1,className:o,...h},i)=>{const[s,D]=x.useState(()=>f?new Set(e.map((n,a)=>a)):new Set),R=x.useCallback(n=>{D(a=>{const l=new Set(a);return l.has(n)?l.delete(n):l.add(n),l})},[]);return t.jsx("div",{ref:i,className:r(W(),o),...h,children:e.map((n,a)=>t.jsx(B,{step:n,isLast:a===e.length-1,collapsible:g,expanded:s.has(a),onToggle:()=>R(a)},a))})});b.displayName="ThoughtChain";b.__docgenInfo={description:`ThoughtChain AI 思维链

拆解 AI 思考步骤，支持分步加载、展开/收起。`,methods:[],displayName:"ThoughtChain",props:{steps:{required:!0,tsType:{name:"Array",elements:[{name:"ThoughtStep"}],raw:"ThoughtStep[]"},description:"思维步骤数组"},collapsible:{required:!1,tsType:{name:"boolean"},description:"是否可折叠每个步骤，默认 true",defaultValue:{value:"true",computed:!1}},defaultExpandAll:{required:!1,tsType:{name:"boolean"},description:"默认全部展开，默认 false",defaultValue:{value:"false",computed:!1}}},composes:["HTMLAttributes","VariantProps"]};const et={title:"AI 对话/ThoughtChain 思维链",component:b,tags:["autodocs"],parameters:{layout:"padded"},argTypes:{collapsible:{control:"boolean",description:"是否可折叠每个步骤，默认 true"},defaultExpandAll:{control:"boolean",description:"默认全部展开，默认 false"}}},k=[{title:"理解用户问题",status:"done",content:"用户询问了关于 React 性能优化的问题，需要从渲染优化、状态管理和代码分割三个方面分析。"},{title:"检索相关知识",status:"done",content:"已检索到 React.memo、useMemo、useCallback、React.lazy 等相关知识点。"},{title:"组织回答结构",status:"running",content:'正在按照"问题分析 → 解决方案 → 代码示例"的结构组织回答。'},{title:"生成最终回答",status:"waiting"}],c={args:{steps:k}},u={args:{steps:[{title:"分析需求",status:"done",content:"需求已分析完毕。"},{title:"设计方案",status:"done",content:"方案设计完成，采用微服务架构。"},{title:"编写代码",status:"done",content:"代码编写完成，已通过单元测试。"}],defaultExpandAll:!0}},d={args:{steps:[{title:"解析输入",status:"done",content:"输入解析成功。"},{title:"调用外部接口",status:"error",content:"接口调用失败，返回 500 错误。"},{title:"生成结果",status:"waiting"}]}},m={args:{steps:k,collapsible:!1}};var v,w,C;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    steps: sampleSteps
  }
}`,...(C=(w=c.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var S,j,N;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    steps: [{
      title: '分析需求',
      status: 'done',
      content: '需求已分析完毕。'
    }, {
      title: '设计方案',
      status: 'done',
      content: '方案设计完成，采用微服务架构。'
    }, {
      title: '编写代码',
      status: 'done',
      content: '代码编写完成，已通过单元测试。'
    }],
    defaultExpandAll: true
  }
}`,...(N=(j=u.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};var y,T,A;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    steps: [{
      title: '解析输入',
      status: 'done',
      content: '输入解析成功。'
    }, {
      title: '调用外部接口',
      status: 'error',
      content: '接口调用失败，返回 500 错误。'
    }, {
      title: '生成结果',
      status: 'waiting'
    }]
  }
}`,...(A=(T=d.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};var V,E,I;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    steps: sampleSteps,
    collapsible: false
  }
}`,...(I=(E=m.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};const st=["Default","AllDone","WithError","NotCollapsible"];export{u as AllDone,c as Default,m as NotCollapsible,d as WithError,st as __namedExportsOrder,et as default};
