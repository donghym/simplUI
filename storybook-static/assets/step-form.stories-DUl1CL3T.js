import{j as e}from"./jsx-runtime-CDt2p4po.js";import{fn as n}from"./index-DeN4tkzB.js";import{r as m}from"./index-GiUgBvb1.js";import{a as o}from"./utils-BEhiKRD9.js";import{c as v}from"./index-C08JwjkN.js";import{C as te}from"./check-DytZnMFh.js";import"./createLucideIcon-CZe00VV7.js";const se=v("sui-step-form w-full",{variants:{},defaultVariants:{}}),ne=v("sui-step-form-indicator flex items-center mb-6",{variants:{},defaultVariants:{}}),re=v("sui-step-form-content min-h-[120px] mb-6",{variants:{},defaultVariants:{}}),ie=v("sui-step-form-actions flex items-center justify-end gap-3",{variants:{},defaultVariants:{}}),oe=(d,a)=>e.jsx("div",{className:ne(),children:d.map((c,t)=>{const i=t<a,s=t===a;return e.jsxs("div",{className:"flex items-center flex-1 last:flex-initial",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:o("flex items-center justify-center rounded-full w-7 h-7 text-xs font-medium transition-colors duration-200",i&&"bg-primary-500 text-white",s&&"bg-primary-500 text-white ring-2 ring-primary-200",!i&&!s&&"bg-muted text-muted-foreground"),children:i?e.jsx(te,{size:14}):t+1}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("span",{className:o("text-sm font-medium",s&&"text-foreground",!s&&"text-muted-foreground"),children:c.title}),c.description&&e.jsx("span",{className:"text-xs text-muted-foreground",children:c.description})]})]}),t<d.length-1&&e.jsx("div",{className:o("flex-1 h-px mx-3",t<a?"bg-primary-500":"bg-border")})]},t)})}),y=m.forwardRef((d,a)=>{var F,l,w;const{className:c,steps:t,current:i,onStepChange:s,onFinish:b,prevText:O="上一步",nextText:G="下一步",finishText:J="提交",...K}=d,[Q,U]=m.useState(0),[N,W]=m.useState({}),r=i??Q,j=r===0,C=r===t.length-1,T=m.useCallback(p=>{i===void 0&&U(p),s==null||s(p)},[i,s]),X=()=>{j||T(r-1)},Y=()=>{C||T(r+1)},Z=()=>{b==null||b(N)},$=m.useCallback(p=>{W(ee=>({...ee,...p}))},[]);return e.jsxs("div",{ref:a,className:o("sui-step-form",se(),c),...K,children:[oe(t,r),e.jsx("div",{className:re(),children:typeof((F=t[r])==null?void 0:F.content)=="function"?((l=t[r])==null?void 0:l.content).call(l,{setStepValue:$,values:N}):(w=t[r])==null?void 0:w.content}),e.jsxs("div",{className:ie(),children:[!j&&e.jsx("button",{type:"button",onClick:X,className:o("px-4 py-2 text-sm rounded-md font-medium transition-colors duration-200","border border-border bg-background text-foreground","hover:border-primary-500 hover:text-primary-500","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-1"),children:O}),C?e.jsx("button",{type:"button",onClick:Z,className:o("px-4 py-2 text-sm rounded-md font-medium transition-colors duration-200","bg-primary-500 text-white border border-primary-500","hover:bg-primary-600 active:bg-primary-700","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-1"),children:J}):e.jsx("button",{type:"button",onClick:Y,className:o("px-4 py-2 text-sm rounded-md font-medium transition-colors duration-200","bg-primary-500 text-white border border-primary-500","hover:bg-primary-600 active:bg-primary-700","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-1"),children:G})]})]})});y.displayName="StepForm";y.__docgenInfo={description:"分步表单组件",methods:[],displayName:"StepForm",props:{steps:{required:!0,tsType:{name:"Array",elements:[{name:"StepFormStep"}],raw:"StepFormStep[]"},description:"步骤配置数组"},current:{required:!1,tsType:{name:"number"},description:"当前步骤索引（受控模式）"},onStepChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(current: number) => void",signature:{arguments:[{type:{name:"number"},name:"current"}],return:{name:"void"}}},description:"步骤变化回调"},onFinish:{required:!1,tsType:{name:"signature",type:"function",raw:"(values: Record<string, unknown>) => void",signature:{arguments:[{type:{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>"},name:"values"}],return:{name:"void"}}},description:"全部步骤完成回调，返回所有步骤的表单值"},prevText:{required:!1,tsType:{name:"string"},description:"上一步按钮文本，默认 '上一步'"},nextText:{required:!1,tsType:{name:"string"},description:"下一步按钮文本，默认 '下一步'"},finishText:{required:!1,tsType:{name:"string"},description:"完成按钮文本，默认 '提交'"}},composes:["HTMLAttributes","VariantProps"]};const xe={title:"表单/StepForm 分步表单",component:y,tags:["autodocs"],parameters:{layout:"padded"},argTypes:{current:{control:"number",description:"当前步骤索引（受控模式）"},prevText:{control:"text",description:"上一步按钮文本"},nextText:{control:"text",description:"下一步按钮文本"},finishText:{control:"text",description:"完成按钮文本"},onStepChange:{action:"步骤变化",description:"步骤变化回调"},onFinish:{action:"完成",description:"全部步骤完成回调"}}},S=[{title:"基本信息",description:"填写基础资料",content:e.jsxs("div",{className:"space-y-3",children:[e.jsx("input",{className:"w-full border rounded-md px-3 py-2 text-sm",placeholder:"请输入姓名"}),e.jsx("input",{className:"w-full border rounded-md px-3 py-2 text-sm",placeholder:"请输入邮箱"})]})},{title:"详细配置",description:"设置偏好选项",content:e.jsxs("div",{className:"space-y-3",children:[e.jsxs("select",{className:"w-full border rounded-md px-3 py-2 text-sm",children:[e.jsx("option",{children:"选项一"}),e.jsx("option",{children:"选项二"})]}),e.jsx("textarea",{className:"w-full border rounded-md px-3 py-2 text-sm",placeholder:"备注信息",rows:3})]})},{title:"确认提交",description:"核对信息并提交",content:e.jsx("div",{className:"text-sm text-muted-foreground",children:"请确认以上信息无误后提交。"})}],u={args:{steps:S,onStepChange:n(),onFinish:n()}},x={args:{steps:S,current:1,onStepChange:n(),onFinish:n()}},f={args:{steps:S,prevText:"返回",nextText:"继续",finishText:"确认提交",onStepChange:n(),onFinish:n()}},g={args:{steps:[{title:"完成",content:e.jsx("div",{className:"text-sm",children:"仅一步操作"})}],onFinish:n()}},h={args:{steps:[{title:"步骤一",content:e.jsx("div",{className:"text-sm",children:"第一步内容"})},{title:"步骤二",content:e.jsx("div",{className:"text-sm",children:"第二步内容"})},{title:"步骤三",content:e.jsx("div",{className:"text-sm",children:"第三步内容"})},{title:"步骤四",content:e.jsx("div",{className:"text-sm",children:"第四步内容"})},{title:"步骤五",content:e.jsx("div",{className:"text-sm",children:"第五步内容"})}],onStepChange:n(),onFinish:n()}};var V,k,q;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    steps: basicSteps,
    onStepChange: fn(),
    onFinish: fn()
  }
}`,...(q=(k=u.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};var R,I,_;x.parameters={...x.parameters,docs:{...(R=x.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    steps: basicSteps,
    current: 1,
    onStepChange: fn(),
    onFinish: fn()
  }
}`,...(_=(I=x.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};var A,E,M;f.parameters={...f.parameters,docs:{...(A=f.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    steps: basicSteps,
    prevText: '返回',
    nextText: '继续',
    finishText: '确认提交',
    onStepChange: fn(),
    onFinish: fn()
  }
}`,...(M=(E=f.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var B,D,L;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    steps: [{
      title: '完成',
      content: <div className="text-sm">仅一步操作</div>
    }],
    onFinish: fn()
  }
}`,...(L=(D=g.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};var P,z,H;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    steps: [{
      title: '步骤一',
      content: <div className="text-sm">第一步内容</div>
    }, {
      title: '步骤二',
      content: <div className="text-sm">第二步内容</div>
    }, {
      title: '步骤三',
      content: <div className="text-sm">第三步内容</div>
    }, {
      title: '步骤四',
      content: <div className="text-sm">第四步内容</div>
    }, {
      title: '步骤五',
      content: <div className="text-sm">第五步内容</div>
    }],
    onStepChange: fn(),
    onFinish: fn()
  }
}`,...(H=(z=h.parameters)==null?void 0:z.docs)==null?void 0:H.source}}};const fe=["Default","Controlled","CustomButtonText","SingleStep","ManySteps"];export{x as Controlled,f as CustomButtonText,u as Default,h as ManySteps,g as SingleStep,fe as __namedExportsOrder,xe as default};
