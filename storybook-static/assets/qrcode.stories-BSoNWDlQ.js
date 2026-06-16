import{j as e}from"./jsx-runtime-CDt2p4po.js";import{fn as ae}from"./index-DeN4tkzB.js";import{r as w}from"./index-GiUgBvb1.js";import{a as j}from"./utils-BEhiKRD9.js";import{c as te}from"./index-C08JwjkN.js";const oe=te("sui-qrcode relative inline-block",{variants:{bordered:{true:"p-3 border border-[#f0f0f0] rounded-lg",false:""}},defaultVariants:{bordered:!0}}),r=w.forwardRef(({value:v,size:s=160,color:g="#000",bgColor:a="#fff",bordered:x=!0,status:f="active",onRefresh:h,icon:y,iconSize:b=40,style:X,className:Y},Z)=>{const ee=w.useMemo(()=>{const re=encodeURIComponent(v);return`https://api.qrserver.com/v1/create-qr-code/?size=${s}x${s}&data=${re}&color=${g.replace("#","")}&bgcolor=${a.replace("#","")}`},[v,s,g,a]),t=f==="expired",se=f==="loading",C=f==="scanned";return e.jsx("div",{ref:Z,className:j(oe({bordered:x}),Y),style:{"--qr-bg":a,...X},children:se?e.jsx("div",{className:"flex items-center justify-center text-[#bfbfbf]",style:{width:s,height:s},children:e.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 32 32",children:[e.jsx("circle",{cx:"16",cy:"16",r:"12",fill:"none",stroke:"#d9d9d9",strokeWidth:"2"}),e.jsx("path",{d:"M16 4 A12 12 0 0 1 28 16",fill:"none",stroke:"#1677FF",strokeWidth:"2",strokeLinecap:"round",children:e.jsx("animateTransform",{attributeName:"transform",type:"rotate",from:"0 16 16",to:"360 16 16",dur:"1s",repeatCount:"indefinite"})})]})}):e.jsxs("div",{className:"relative",style:{width:s,height:s},children:[e.jsx("img",{src:ee,alt:"QR Code",className:j(t||C?"opacity-30":"opacity-100"),style:{width:s,height:s}}),y&&e.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded overflow-hidden border",style:{width:b,height:b,"--qr-bg":a,"--icon-border":x?"#f0f0f0":"transparent",background:"var(--qr-bg)",borderColor:"var(--icon-border)"},children:e.jsx("img",{src:y,alt:"icon",className:"w-full h-full object-cover"})}),(t||C)&&e.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center gap-2",children:[e.jsx("span",{className:"text-[#595959] text-sm",children:t?"二维码已过期":"已扫描"}),t&&h&&e.jsx("button",{type:"button",onClick:h,className:"px-3 py-1 border border-[#d9d9d9] rounded bg-white cursor-pointer text-sm",children:"点击刷新"})]})]})})});r.displayName="QRCode";r.__docgenInfo={description:`QRCode 二维码组件

用于生成和展示二维码。

### 何时使用
- 需要扫码支付、添加好友、下载应用等场景
- 需要将信息编码为二维码时

### 示例
\`\`\`tsx
<QRCode value="https://example.com" />
\`\`\``,methods:[],displayName:"QRCode",props:{value:{required:!0,tsType:{name:"string"},description:"二维码的值"},size:{required:!1,tsType:{name:"number"},description:"二维码尺寸",defaultValue:{value:"160",computed:!1}},color:{required:!1,tsType:{name:"string"},description:"二维码颜色",defaultValue:{value:"'#000'",computed:!1}},bgColor:{required:!1,tsType:{name:"string"},description:"背景颜色",defaultValue:{value:"'#fff'",computed:!1}},bordered:{required:!1,tsType:{name:"boolean"},description:"边框是否有留白",defaultValue:{value:"true",computed:!1}},status:{required:!1,tsType:{name:"union",raw:"'active' | 'expired' | 'loading' | 'scanned'",elements:[{name:"literal",value:"'active'"},{name:"literal",value:"'expired'"},{name:"literal",value:"'loading'"},{name:"literal",value:"'scanned'"}]},description:"是否显示状态",defaultValue:{value:"'active'",computed:!1}},onRefresh:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"点击刷新回调"},icon:{required:!1,tsType:{name:"string"},description:"自定义图标"},iconSize:{required:!1,tsType:{name:"number"},description:"图标尺寸",defaultValue:{value:"40",computed:!1}},style:{required:!1,tsType:{name:"CSSProperties"},description:"自定义样式"},className:{required:!1,tsType:{name:"string"},description:"自定义类名"}}};const pe={title:"数据展示/QRCode 二维码",component:r,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"用于生成和展示二维码。"}}},argTypes:{size:{control:"number"},status:{control:"select",options:["active","expired","loading","scanned"]},bordered:{control:"boolean"}}},o={args:{value:"https://simplui.dev"}},i={args:{value:"https://simplui.dev",size:200}},n={args:{value:"https://simplui.dev"}},d={args:{value:"https://simplui.dev",icon:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Crect fill='%23f3f4f6' width='40' height='40'/%3E%3Ctext fill='%239ca3af' font-family='sans-serif' font-size='10' x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle'%3EIcon%3C/text%3E%3C/svg%3E",iconSize:40}},l={args:{value:"https://simplui.dev",status:"expired",onRefresh:ae()}},c={args:{value:"https://simplui.dev",status:"loading"}},p={args:{value:"https://simplui.dev",status:"scanned"}},m={args:{value:"https://simplui.dev",bordered:!1}},u={render:()=>e.jsxs("div",{className:"flex gap-6",children:[e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(r,{value:"https://simplui.dev",size:160,color:"#7c3aed",bgColor:"#f5f3ff",style:{borderRadius:16}}),e.jsx("span",{className:"text-sm text-gray-500",children:"Gradient style"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(r,{value:"https://simplui.dev",size:160,color:"#0d9488",bgColor:"#f0fdfa",style:{borderRadius:16,border:"2px solid #99f6e4"}}),e.jsx("span",{className:"text-sm text-gray-500",children:"Rounded corners"})]})]})};var N,R,q;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    value: 'https://simplui.dev'
  }
}`,...(q=(R=o.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};var S,E,T;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    value: 'https://simplui.dev',
    size: 200
  }
}`,...(T=(E=i.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};var Q,k,V;n.parameters={...n.parameters,docs:{...(Q=n.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    value: 'https://simplui.dev'
  }
}`,...(V=(k=n.parameters)==null?void 0:k.docs)==null?void 0:V.source}}};var z,B,I;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    value: 'https://simplui.dev',
    icon: 'data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'40\\' height=\\'40\\' viewBox=\\'0 0 40 40\\'%3E%3Crect fill=\\'%23f3f4f6\\' width=\\'40\\' height=\\'40\\'/%3E%3Ctext fill=\\'%239ca3af\\' font-family=\\'sans-serif\\' font-size=\\'10\\' x=\\'50%25\\' y=\\'50%25\\' dominant-baseline=\\'middle\\' text-anchor=\\'middle\\'%3EIcon%3C/text%3E%3C/svg%3E',
    iconSize: 40
  }
}`,...(I=(B=d.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};var $,L,W;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    value: 'https://simplui.dev',
    status: 'expired',
    onRefresh: fn()
  }
}`,...(W=(L=l.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};var _,F,G;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    value: 'https://simplui.dev',
    status: 'loading'
  }
}`,...(G=(F=c.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var M,U,A;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    value: 'https://simplui.dev',
    status: 'scanned'
  }
}`,...(A=(U=p.parameters)==null?void 0:U.docs)==null?void 0:A.source}}};var D,O,P;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    value: 'https://simplui.dev',
    bordered: false
  }
}`,...(P=(O=m.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var H,J,K;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <div className="flex gap-6">
      <div className="flex flex-col items-center gap-2">
        <QRCode value="https://simplui.dev" size={160} color="#7c3aed" bgColor="#f5f3ff" style={{
        borderRadius: 16
      }} />
        <span className="text-sm text-gray-500">Gradient style</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <QRCode value="https://simplui.dev" size={160} color="#0d9488" bgColor="#f0fdfa" style={{
        borderRadius: 16,
        border: '2px solid #99f6e4'
      }} />
        <span className="text-sm text-gray-500">Rounded corners</span>
      </div>
    </div>
}`,...(K=(J=u.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const me=["Basic","CustomSize","CustomColor","WithIcon","Expired","Loading","Scanned","NoBorder","CustomRender"];export{o as Basic,n as CustomColor,u as CustomRender,i as CustomSize,l as Expired,c as Loading,m as NoBorder,p as Scanned,d as WithIcon,me as __namedExportsOrder,pe as default};
