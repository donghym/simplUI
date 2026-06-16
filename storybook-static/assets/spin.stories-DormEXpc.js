import{j as e}from"./jsx-runtime-CDt2p4po.js";import{S as l}from"./index-DXkbWS1e.js";import"./index-GiUgBvb1.js";import"./utils-BEhiKRD9.js";import"./index-C08JwjkN.js";import"./loader-circle-CulI208u.js";import"./createLucideIcon-CZe00VV7.js";const G={title:"反馈/Spin 加载中",component:l,tags:["autodocs"],parameters:{layout:"padded"},argTypes:{spinning:{control:"boolean",description:"加载状态，true 时显示加载动画，false 时隐藏，默认 true"},spinSize:{control:"select",options:["small","default","large"],description:"Spin 尺寸，可选 small、default、large"},delay:{control:"number",description:"加载延迟时间（毫秒），设置后 spinning 变为 true 时延迟指定时间后再显示，避免闪烁"},tip:{control:"text",description:"加载提示文字，显示在加载图标下方"}}},s={args:{spinning:!0}},n={args:{spinning:!0,spinSize:"small"}},r={args:{spinning:!0,spinSize:"large"}},a={args:{spinning:!0,tip:"加载中..."}},i={render:()=>e.jsx(l,{spinning:!0,indicator:e.jsxs("span",{className:"flex items-center gap-1",children:[e.jsx("span",{className:"h-2.5 w-2.5 rounded-full bg-primary-500 animate-pulse",style:{animationDelay:"0ms"}}),e.jsx("span",{className:"h-2.5 w-2.5 rounded-full bg-primary-500 animate-pulse",style:{animationDelay:"150ms"}}),e.jsx("span",{className:"h-2.5 w-2.5 rounded-full bg-primary-500 animate-pulse",style:{animationDelay:"300ms"}})]})})},t={render:()=>e.jsx(l,{spinning:!0,tip:"内容加载中...",children:e.jsxs("div",{className:"p-4 bg-gray-100 rounded",children:[e.jsx("p",{children:"此内容被 Spin 包裹。"}),e.jsx("p",{children:"加载时会出现遮罩层。"})]})})},p={render:()=>e.jsx(l,{spinning:!1,children:e.jsx("div",{className:"p-4 bg-gray-100 rounded",children:e.jsx("p",{children:"未加载时内容可见。"})})})},o={args:{spinning:!0,delay:500,tip:"延迟 500ms 以避免闪烁"}};var c,m,d;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    spinning: true
  }
}`,...(d=(m=s.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,g,S;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    spinning: true,
    spinSize: 'small'
  }
}`,...(S=(g=n.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var y,h,x;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    spinning: true,
    spinSize: 'large'
  }
}`,...(x=(h=r.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var f,j,N;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    spinning: true,
    tip: '加载中...'
  }
}`,...(N=(j=a.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};var b,D,v;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <Spin spinning indicator={<span className="flex items-center gap-1">
          <span className="h-2.5 w-2.5 rounded-full bg-primary-500 animate-pulse" style={{
      animationDelay: '0ms'
    }} />
          <span className="h-2.5 w-2.5 rounded-full bg-primary-500 animate-pulse" style={{
      animationDelay: '150ms'
    }} />
          <span className="h-2.5 w-2.5 rounded-full bg-primary-500 animate-pulse" style={{
      animationDelay: '300ms'
    }} />
        </span>} />
}`,...(v=(D=i.parameters)==null?void 0:D.docs)==null?void 0:v.source}}};var w,z,C;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <Spin spinning tip="内容加载中...">
      <div className="p-4 bg-gray-100 rounded">
        <p>此内容被 Spin 包裹。</p>
        <p>加载时会出现遮罩层。</p>
      </div>
    </Spin>
}`,...(C=(z=t.parameters)==null?void 0:z.docs)==null?void 0:C.source}}};var W,T,E;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <Spin spinning={false}>
      <div className="p-4 bg-gray-100 rounded">
        <p>未加载时内容可见。</p>
      </div>
    </Spin>
}`,...(E=(T=p.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};var I,L,_;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    spinning: true,
    delay: 500,
    tip: '延迟 500ms 以避免闪烁'
  }
}`,...(_=(L=o.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};const H=["Default","Small","Large","WithTip","CustomIndicator","WithChildren","NotSpinning","DelayedSpin"];export{i as CustomIndicator,s as Default,o as DelayedSpin,r as Large,p as NotSpinning,n as Small,t as WithChildren,a as WithTip,H as __namedExportsOrder,G as default};
