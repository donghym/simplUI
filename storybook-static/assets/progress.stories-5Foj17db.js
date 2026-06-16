import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as w}from"./index-GiUgBvb1.js";import{P as v}from"./index-BGVNZTja.js";import{B as N}from"./index-WhxK0hy4.js";import"./utils-BEhiKRD9.js";import"./index-C08JwjkN.js";import"./loader-circle-CulI208u.js";import"./createLucideIcon-CZe00VV7.js";const we={title:"反馈/Progress 进度条",component:v,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"进度条用于展示操作的当前进度。适用于文件上传、数据加载、任务完成度等场景，支持线性和圆形两种样式以及成功/错误状态。"}}},argTypes:{progressShape:{control:"select",options:["line","circle"],description:"进度条形状，line 为线性进度条，circle 为圆形进度条"},status:{control:"select",options:["normal","success","error"],description:"进度条状态，normal 为默认色，success 为成功色，error 为错误色"},showText:{control:"boolean",description:"是否显示进度文字"}}},o={args:{percent:30,progressShape:"line",showText:!0}},n={args:{percent:100,progressShape:"line",status:"success",showText:!0}},c={args:{percent:70,progressShape:"line",status:"error",showText:!0}},i={args:{percent:50,progressShape:"line",showText:!1}},p={args:{percent:45,progressShape:"line",strokeWidth:8,showText:!0}},l={args:{percent:75,progressShape:"circle",showText:!0}},d={args:{percent:100,progressShape:"circle",status:"success",showText:!0}},u={args:{percent:50,progressShape:"circle",status:"error",showText:!0}},m={args:{percent:60,progressShape:"circle",circleSize:80,showText:!0}},h={render:()=>e.jsx(v,{percent:85,progressShape:"line",showText:!0,format:s=>`剩余 ${s} 天`})},g={args:{percent:60,progressShape:"line",steps:5,showText:!0}},x={render:()=>{const[s,r]=w.useState(30);return e.jsxs("div",{className:"space-y-3 w-full max-w-md",children:[e.jsx(v,{percent:s,progressShape:"line",showText:!0}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(N,{onClick:()=>r(t=>Math.max(0,t-10)),children:"-10%"}),e.jsx(N,{onClick:()=>r(t=>Math.min(100,t+10)),children:"+10%"})]})]})}},S={render:()=>{const[s]=w.useState(75),r=120,t=(r-8)/2,a=Math.PI*t,le=a-s/100*a;return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"relative inline-flex items-center justify-center",style:{width:r,height:r/2+10,overflow:"hidden"},children:[e.jsxs("svg",{width:r,height:r,className:"-rotate-90",style:{marginTop:5},children:[e.jsx("circle",{cx:r/2,cy:r/2,r:t,fill:"none",stroke:"currentColor",strokeWidth:6,className:"text-border",strokeDasharray:a,strokeLinecap:"round"}),e.jsx("circle",{cx:r/2,cy:r/2,r:t,fill:"none",stroke:"currentColor",strokeWidth:6,strokeLinecap:"round",strokeDasharray:a,strokeDashoffset:le,className:"text-primary-500 transition-all duration-300 ease-out"})]}),e.jsxs("span",{className:"absolute bottom-0 text-lg font-medium text-foreground",children:[s,"%"]})]}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"仪表盘/半圆样式进度条"})]})}},f={render:()=>{const[s]=w.useState(70);return e.jsxs("div",{className:"space-y-3 w-full max-w-md",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"h-2 flex-1 rounded-full bg-muted overflow-hidden",children:e.jsx("div",{className:"h-full rounded-full transition-all duration-300 ease-out",style:{width:`${s}%`,background:"linear-gradient(90deg, #6366f1, #ec4899, #f59e0b)"}})}),e.jsxs("span",{className:"text-sm text-muted-foreground min-w-[3em] text-right",children:[s,"%"]})]}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"渐变色进度条（使用 CSS linear-gradient）"})]})}};var T,k,y;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    percent: 30,
    progressShape: 'line',
    showText: true
  }
}`,...(y=(k=o.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};var C,j,P;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    percent: 100,
    progressShape: 'line',
    status: 'success',
    showText: true
  }
}`,...(P=(j=n.parameters)==null?void 0:j.docs)==null?void 0:P.source}}};var D,b,z;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    percent: 70,
    progressShape: 'line',
    status: 'error',
    showText: true
  }
}`,...(z=(b=c.parameters)==null?void 0:b.docs)==null?void 0:z.source}}};var L,W,E;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    percent: 50,
    progressShape: 'line',
    showText: false
  }
}`,...(E=(W=i.parameters)==null?void 0:W.docs)==null?void 0:E.source}}};var B,M,$;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    percent: 45,
    progressShape: 'line',
    strokeWidth: 8,
    showText: true
  }
}`,...($=(M=p.parameters)==null?void 0:M.docs)==null?void 0:$.source}}};var F,G,I;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    percent: 75,
    progressShape: 'circle',
    showText: true
  }
}`,...(I=(G=l.parameters)==null?void 0:G.docs)==null?void 0:I.source}}};var _,O,R;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    percent: 100,
    progressShape: 'circle',
    status: 'success',
    showText: true
  }
}`,...(R=(O=d.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var q,A,H;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    percent: 50,
    progressShape: 'circle',
    status: 'error',
    showText: true
  }
}`,...(H=(A=u.parameters)==null?void 0:A.docs)==null?void 0:H.source}}};var J,K,Q;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    percent: 60,
    progressShape: 'circle',
    circleSize: 80,
    showText: true
  }
}`,...(Q=(K=m.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,V,X;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:'{\n  render: () => <Progress percent={85} progressShape="line" showText format={p => `剩余 ${p} 天`} />\n}',...(X=(V=h.parameters)==null?void 0:V.docs)==null?void 0:X.source}}};var Y,Z,ee;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    percent: 60,
    progressShape: 'line',
    steps: 5,
    showText: true
  }
}`,...(ee=(Z=g.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var re,se,te;x.parameters={...x.parameters,docs:{...(re=x.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => {
    const [percent, setPercent] = useState(30);
    return <div className="space-y-3 w-full max-w-md">
        <Progress percent={percent} progressShape="line" showText />
        <div className="flex gap-2">
          <Button onClick={() => setPercent(p => Math.max(0, p - 10))}>-10%</Button>
          <Button onClick={() => setPercent(p => Math.min(100, p + 10))}>+10%</Button>
        </div>
      </div>;
  }
}`,...(te=(se=x.parameters)==null?void 0:se.docs)==null?void 0:te.source}}};var ae,oe,ne;S.parameters={...S.parameters,docs:{...(ae=S.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => {
    const [percent] = useState(75);
    const circleSize = 120;
    const radius = (circleSize - 8) / 2;
    const circumference = Math.PI * radius;
    const strokeDashoffset = circumference - percent / 100 * circumference;
    return <div className="space-y-4">
        <div className="relative inline-flex items-center justify-center" style={{
        width: circleSize,
        height: circleSize / 2 + 10,
        overflow: 'hidden'
      }}>
          <svg width={circleSize} height={circleSize} className="-rotate-90" style={{
          marginTop: 5
        }}>
            <circle cx={circleSize / 2} cy={circleSize / 2} r={radius} fill="none" stroke="currentColor" strokeWidth={6} className="text-border" strokeDasharray={circumference} strokeLinecap="round" />
            <circle cx={circleSize / 2} cy={circleSize / 2} r={radius} fill="none" stroke="currentColor" strokeWidth={6} strokeLinecap="round" strokeDasharray={circumference} strokeDashoffset={strokeDashoffset} className="text-primary-500 transition-all duration-300 ease-out" />
          </svg>
          <span className="absolute bottom-0 text-lg font-medium text-foreground">
            {percent}%
          </span>
        </div>
        <p className="text-sm text-muted-foreground">仪表盘/半圆样式进度条</p>
      </div>;
  }
}`,...(ne=(oe=S.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};var ce,ie,pe;f.parameters={...f.parameters,docs:{...(ce=f.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: () => {
    const [percent] = useState(70);
    return <div className="space-y-3 w-full max-w-md">
        <div className="flex items-center gap-3">
          <div className="h-2 flex-1 rounded-full bg-muted overflow-hidden">
            <div className="h-full rounded-full transition-all duration-300 ease-out" style={{
            width: \`\${percent}%\`,
            background: 'linear-gradient(90deg, #6366f1, #ec4899, #f59e0b)'
          }} />
          </div>
          <span className="text-sm text-muted-foreground min-w-[3em] text-right">{percent}%</span>
        </div>
        <p className="text-sm text-muted-foreground">渐变色进度条（使用 CSS linear-gradient）</p>
      </div>;
  }
}`,...(pe=(ie=f.parameters)==null?void 0:ie.docs)==null?void 0:pe.source}}};const ve=["LineDefault","LineSuccess","LineError","LineNoText","LineCustomWidth","CircleDefault","CircleSuccess","CircleError","CircleCustomSize","CustomFormat","StepsProgress","DynamicProgress","DashboardProgress","GradientProgress"];export{m as CircleCustomSize,l as CircleDefault,u as CircleError,d as CircleSuccess,h as CustomFormat,S as DashboardProgress,x as DynamicProgress,f as GradientProgress,p as LineCustomWidth,o as LineDefault,c as LineError,i as LineNoText,n as LineSuccess,g as StepsProgress,ve as __namedExportsOrder,we as default};
