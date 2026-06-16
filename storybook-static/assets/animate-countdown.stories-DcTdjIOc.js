import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as n}from"./index-GiUgBvb1.js";import{a as w}from"./utils-BEhiKRD9.js";import{c as ie}from"./index-C08JwjkN.js";const C=ie("inline-flex items-center gap-2 select-none",{variants:{variant:{default:"text-foreground",primary:"text-primary-500",danger:"text-danger-500"}},defaultVariants:{variant:"default"}}),ue="relative inline-flex items-center justify-center w-12 h-14 rounded-md bg-muted text-2xl font-bold overflow-hidden",ce="inline-block transition-transform duration-500 ease-out";function k(r){const a=Date.now(),t=r.getTime()-a;if(t<=0)return{days:0,hours:0,minutes:0,seconds:0,finished:!0};const s=Math.floor(t/(1e3*60*60*24)),i=Math.floor(t%(1e3*60*60*24)/(1e3*60*60)),u=Math.floor(t%(1e3*60*60)/(1e3*60)),o=Math.floor(t%(1e3*60)/1e3);return{days:s,hours:i,minutes:u,seconds:o,finished:!1}}function f({value:r,label:a}){const[t,s]=n.useState(r),[i,u]=n.useState(!1);return n.useEffect(()=>{if(r!==t){u(!0);const o=setTimeout(()=>{s(r),u(!1)},250);return()=>clearTimeout(o)}},[r,t]),e.jsxs("div",{className:"flex flex-col items-center gap-1",children:[e.jsx("div",{className:ue,children:e.jsx("span",{className:w(ce,i&&"animate-pulse"),children:String(t).padStart(2,"0")})}),e.jsx("span",{className:"text-xs text-muted-foreground",children:a})]})}function T(){return e.jsx("span",{className:"text-2xl font-bold text-muted-foreground self-start mt-3",children:":"})}const c=n.forwardRef((r,a)=>{const{className:t,variant:s,targetDate:i,format:u,onFinish:o,...b}=r,[se,ne]=n.useState(()=>k(i)),N=n.useRef(!1),m=n.useRef(null),S=n.useCallback(()=>{const F=k(i);ne(F),F.finished&&!N.current&&(N.current=!0,o==null||o(),m.current&&clearInterval(m.current))},[i,o]);n.useEffect(()=>(S(),N.current||(m.current=setInterval(S,1e3)),()=>{m.current&&clearInterval(m.current)}),[S]);const{days:l,hours:A,minutes:$,seconds:q,finished:oe}=se;return u?e.jsx("div",{ref:a,className:w("sui-animate-countdown",C({variant:s}),t),...b,children:u({days:l,hours:A,minutes:$,seconds:q})}):oe?e.jsx("div",{ref:a,className:w("sui-animate-countdown",C({variant:s}),t),...b,children:e.jsx("span",{className:"text-lg font-medium text-success-500",children:"已结束"})}):e.jsxs("div",{ref:a,className:w("sui-animate-countdown",C({variant:s}),t),...b,children:[l>0&&e.jsx(f,{value:l,label:"天"}),l>0&&e.jsx(T,{}),e.jsx(f,{value:A,label:"时"}),e.jsx(T,{}),e.jsx(f,{value:$,label:"分"}),e.jsx(T,{}),e.jsx(f,{value:q,label:"秒"})]})});c.displayName="AnimateCountdown";c.__docgenInfo={description:"",methods:[],displayName:"AnimateCountdown",props:{targetDate:{required:!0,tsType:{name:"Date"},description:"目标时间"},format:{required:!1,tsType:{name:"signature",type:"function",raw:"(diff: { days: number; hours: number; minutes: number; seconds: number }) => string",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ days: number; hours: number; minutes: number; seconds: number }",signature:{properties:[{key:"days",value:{name:"number",required:!0}},{key:"hours",value:{name:"number",required:!0}},{key:"minutes",value:{name:"number",required:!0}},{key:"seconds",value:{name:"number",required:!0}}]}},name:"diff"}],return:{name:"string"}}},description:"格式化函数"},onFinish:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"倒计时结束回调"}},composes:["HTMLAttributes","VariantProps"]};const xe={title:"动效/AnimateCountdown 动画倒计时",component:c,tags:["autodocs"],parameters:{layout:"padded"},argTypes:{variant:{control:"select",options:["default","primary","danger"],description:"颜色变体"},targetDate:{control:"date",description:"目标时间"}}},ae=new Date(Date.now()+10*1e3),d=new Date(Date.now()+60*60*1e3),de=new Date(Date.now()+3*24*60*60*1e3),me=new Date(Date.now()-1e3),p={args:{targetDate:d}},g={args:{targetDate:ae}},x={args:{targetDate:de}},h={args:{targetDate:me}},v={args:{targetDate:d,variant:"primary"}},D={args:{targetDate:ae,variant:"danger"}},y={args:{targetDate:d,format:({days:r,hours:a,minutes:t,seconds:s})=>`${r}天 ${a}时 ${t}分 ${s}秒`}},j={render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-muted-foreground mb-2",children:"默认"}),e.jsx(c,{targetDate:d,variant:"default"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-muted-foreground mb-2",children:"主要色"}),e.jsx(c,{targetDate:d,variant:"primary"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-muted-foreground mb-2",children:"危险色"}),e.jsx(c,{targetDate:d,variant:"danger"})]})]})};var R,E,M;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    targetDate: future1h
  }
}`,...(M=(E=p.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var V,I,_;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    targetDate: future10s
  }
}`,...(_=(I=g.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};var P,W,H;x.parameters={...x.parameters,docs:{...(P=x.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    targetDate: future3d
  }
}`,...(H=(W=x.parameters)==null?void 0:W.docs)==null?void 0:H.source}}};var L,O,z;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    targetDate: past
  }
}`,...(z=(O=h.parameters)==null?void 0:O.docs)==null?void 0:z.source}}};var B,G,J;v.parameters={...v.parameters,docs:{...(B=v.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    targetDate: future1h,
    variant: 'primary'
  }
}`,...(J=(G=v.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,U;D.parameters={...D.parameters,docs:{...(K=D.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    targetDate: future10s,
    variant: 'danger'
  }
}`,...(U=(Q=D.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,Z;y.parameters={...y.parameters,docs:{...(X=y.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    targetDate: future1h,
    format: ({
      days,
      hours,
      minutes,
      seconds
    }) => \`\${days}天 \${hours}时 \${minutes}分 \${seconds}秒\`
  }
}`,...(Z=(Y=y.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,te,re;j.parameters={...j.parameters,docs:{...(ee=j.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      <div>
        <p className="text-sm text-muted-foreground mb-2">默认</p>
        <AnimateCountdown targetDate={future1h} variant="default" />
      </div>
      <div>
        <p className="text-sm text-muted-foreground mb-2">主要色</p>
        <AnimateCountdown targetDate={future1h} variant="primary" />
      </div>
      <div>
        <p className="text-sm text-muted-foreground mb-2">危险色</p>
        <AnimateCountdown targetDate={future1h} variant="danger" />
      </div>
    </div>
}`,...(re=(te=j.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};const he=["Default","TenSeconds","WithDays","Finished","Primary","Danger","CustomFormat","Variants"];export{y as CustomFormat,D as Danger,p as Default,h as Finished,v as Primary,g as TenSeconds,j as Variants,x as WithDays,he as __namedExportsOrder,xe as default};
