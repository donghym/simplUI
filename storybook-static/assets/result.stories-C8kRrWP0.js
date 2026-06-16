import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as ee}from"./index-GiUgBvb1.js";import{a as s}from"./utils-BEhiKRD9.js";import{c as ae}from"./index-C08JwjkN.js";import{c as g}from"./createLucideIcon-CZe00VV7.js";import{T as oe,C as ne}from"./triangle-alert-BCaP184V.js";import{I as ie}from"./info-CjH-k_Hj.js";import{C as ue}from"./circle-check-5HUO4MLI.js";import{S as le}from"./index-DrsvZnyz.js";import{P as ce}from"./party-popper-DG_g59wV.js";import"./check-DytZnMFh.js";import"./loader-circle-CulI208u.js";/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const de=g("FileQuestion",[["path",{d:"M12 17h.01",key:"p32p05"}],["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z",key:"1mlx9k"}],["path",{d:"M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3",key:"mhlwft"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const me=g("ServerCrash",[["path",{d:"M6 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2",key:"4b9dqc"}],["path",{d:"M6 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2",key:"22nnkd"}],["path",{d:"M6 6h.01",key:"1utrut"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"m13 6-4 6h6l-4 6",key:"14hqih"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pe=g("ShieldX",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m14.5 9.5-5 5",key:"17q4r4"}],["path",{d:"m9.5 9.5 5 5",key:"18nt4w"}]]),be=ae("sui-result flex flex-col items-center justify-center py-12 px-4",{variants:{status:{success:"sui-result--success",error:"sui-result--error",info:"sui-result--info",warning:"sui-result--warning",404:"sui-result--404",403:"sui-result--403",500:"sui-result--500"}},defaultVariants:{status:"info"}}),a={success:"text-success-500",error:"text-danger-500",info:"text-primary-500",warning:"text-warning-500",404:"text-gray-500",403:"text-danger-500",500:"text-danger-500"},he={success:e.jsx(ue,{className:s("w-16 h-16",a.success),"aria-hidden":"true"}),error:e.jsx(ne,{className:s("w-16 h-16",a.error),"aria-hidden":"true"}),info:e.jsx(ie,{className:s("w-16 h-16",a.info),"aria-hidden":"true"}),warning:e.jsx(oe,{className:s("w-16 h-16",a.warning),"aria-hidden":"true"}),404:e.jsx(de,{className:s("w-16 h-16",a[404]),"aria-hidden":"true"}),403:e.jsx(pe,{className:s("w-16 h-16",a[403]),"aria-hidden":"true"}),500:e.jsx(me,{className:s("w-16 h-16",a[500]),"aria-hidden":"true"})},n=ee.forwardRef((r,i)=>{const{status:o="info",title:x,subTitle:S,icon:v,extra:w,style:te,className:re,...se}=r,C=v!==void 0?v:he[o];return e.jsxs("div",{ref:i,className:s(be({status:o}),re),style:te,role:"status","aria-label":`${o} result`,...se,children:[C&&e.jsx("div",{className:"sui-result__icon mb-6",children:C}),x&&e.jsx("div",{className:"sui-result__title text-xl font-semibold text-foreground mb-2",children:x}),S&&e.jsx("div",{className:"sui-result__subtitle text-sm text-muted-foreground mb-6",children:S}),w&&e.jsx("div",{className:"sui-result__extra flex gap-2",children:w})]})});n.displayName="Result";n.__docgenInfo={description:`Result 结果页组件

用于展示操作结果页面，如成功、失败、错误等状态。

### 何时使用
- 当用户完成一个操作后需要反馈结果时
- 展示错误页面（404、403、500 等）

### 示例
\`\`\`tsx
<Result status="success" title="操作成功" subTitle="您的数据已保存" />
<Result status="404" title="页面不存在" />
\`\`\``,methods:[],displayName:"Result",props:{status:{required:!1,tsType:{name:"union",raw:"'success' | 'error' | 'info' | 'warning' | '404' | '403' | '500'",elements:[{name:"literal",value:"'success'"},{name:"literal",value:"'error'"},{name:"literal",value:"'info'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'404'"},{name:"literal",value:"'403'"},{name:"literal",value:"'500'"}]},description:"结果状态，决定图标和颜色。默认 'info'"},title:{required:!1,tsType:{name:"ReactNode"},description:"标题内容"},subTitle:{required:!1,tsType:{name:"ReactNode"},description:"副标题/描述内容"},icon:{required:!1,tsType:{name:"ReactNode"},description:"自定义图标，覆盖默认图标"},extra:{required:!1,tsType:{name:"ReactNode"},description:"额外操作区，通常放置按钮"},style:{required:!1,tsType:{name:"CSSProperties"},description:"自定义样式"},className:{required:!1,tsType:{name:"string"},description:"自定义类名，通过 cn() + twMerge 合并"}},composes:["Omit"]};const t={padding:"4px 16px",borderRadius:6,border:"1px solid #d9d9d9",background:"#fff",cursor:"pointer",fontSize:14,lineHeight:"22px"},Oe={title:"反馈/Result 结果",component:n,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"用于反馈一系列操作任务的处理结果。"}}},argTypes:{status:{control:"select",options:["success","error","info","warning","404","403","500"]}}},u={args:{status:"info",title:"Your operation has been executed",subTitle:"This is a default result message."}},l={args:{status:"success",title:"Successfully Purchased Cloud Server ECS!",subTitle:"Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait.",extra:e.jsxs("div",{className:"flex gap-2 justify-center",children:[e.jsx("button",{style:t,children:"Go Console"}),e.jsx("button",{style:t,children:"Buy Again"})]})}},c={args:{status:"error",title:"Submission Failed",subTitle:"Please check and modify the following information before resubmitting.",extra:e.jsx("button",{style:t,children:"Go Back"})}},d={args:{status:"info",title:"Your operation has been executed",extra:e.jsx("button",{style:t,children:"OK"})}},m={args:{status:"warning",title:"There are some problems with your operation.",extra:e.jsx("button",{style:t,children:"OK"})}},p={args:{status:"404",title:"404",subTitle:"Sorry, the page you visited does not exist.",extra:e.jsx("button",{style:t,children:"Back Home"})}},b={args:{status:"403",title:"403",subTitle:"Sorry, you are not authorized to access this page.",extra:e.jsx("button",{style:t,children:"Back Home"})}},h={args:{status:"500",title:"500",subTitle:"Sorry, something went wrong.",extra:e.jsx("button",{style:t,children:"Back Home"})}},y={args:{icon:e.jsx(ce,{className:"h-20 w-20"}),title:"Great, we have done all the operations!",extra:e.jsx("button",{style:t,children:"Go Console"})}},f={render:()=>{const[r,i]=ee.useState(1);return e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsx(le,{current:r,items:[{title:"Order Submitted",description:"Your order has been placed"},{title:"Processing",description:"Preparing your order"},{title:"Complete",description:"Order delivered successfully"}]}),r<2?e.jsx(n,{status:r===0?"info":"warning",title:r===0?"Order Submitted":"Processing Order",subTitle:r===0?"Your order #20241215001 has been submitted successfully.":"Your order is being prepared for shipping.",extra:e.jsx("button",{style:t,onClick:()=>i(o=>o+1),children:r===0?"Track Order":"Confirm Delivery"})}):e.jsx(n,{status:"success",title:"Order Complete!",subTitle:"Your order has been delivered successfully. Thank you for your purchase!",extra:e.jsxs("div",{className:"flex gap-2 justify-center",children:[e.jsx("button",{style:t,onClick:()=>i(0),children:"Start Over"}),e.jsx("button",{style:{...t,background:"#1677ff",color:"#fff",border:"none"},children:"View Receipt"})]})})]})}};var j,k,T;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    status: 'info',
    title: 'Your operation has been executed',
    subTitle: 'This is a default result message.'
  }
}`,...(T=(k=u.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};var N,O,R;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    status: 'success',
    title: 'Successfully Purchased Cloud Server ECS!',
    subTitle: 'Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait.',
    extra: <div className="flex gap-2 justify-center">
        <button style={btnStyle}>Go Console</button>
        <button style={btnStyle}>Buy Again</button>
      </div>
  }
}`,...(R=(O=l.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var P,Y,_;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    status: 'error',
    title: 'Submission Failed',
    subTitle: 'Please check and modify the following information before resubmitting.',
    extra: <button style={btnStyle}>Go Back</button>
  }
}`,...(_=(Y=c.parameters)==null?void 0:Y.docs)==null?void 0:_.source}}};var q,B,F;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    status: 'info',
    title: 'Your operation has been executed',
    extra: <button style={btnStyle}>OK</button>
  }
}`,...(F=(B=d.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var H,M,E;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    status: 'warning',
    title: 'There are some problems with your operation.',
    extra: <button style={btnStyle}>OK</button>
  }
}`,...(E=(M=m.parameters)==null?void 0:M.docs)==null?void 0:E.source}}};var I,G,V;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    status: '404',
    title: '404',
    subTitle: 'Sorry, the page you visited does not exist.',
    extra: <button style={btnStyle}>Back Home</button>
  }
}`,...(V=(G=p.parameters)==null?void 0:G.docs)==null?void 0:V.source}}};var z,D,K;b.parameters={...b.parameters,docs:{...(z=b.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    status: '403',
    title: '403',
    subTitle: 'Sorry, you are not authorized to access this page.',
    extra: <button style={btnStyle}>Back Home</button>
  }
}`,...(K=(D=b.parameters)==null?void 0:D.docs)==null?void 0:K.source}}};var A,X,Q;h.parameters={...h.parameters,docs:{...(A=h.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    status: '500',
    title: '500',
    subTitle: 'Sorry, something went wrong.',
    extra: <button style={btnStyle}>Back Home</button>
  }
}`,...(Q=(X=h.parameters)==null?void 0:X.docs)==null?void 0:Q.source}}};var W,$,L;y.parameters={...y.parameters,docs:{...(W=y.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    icon: <PartyPopper className="h-20 w-20" />,
    title: 'Great, we have done all the operations!',
    extra: <button style={btnStyle}>Go Console</button>
  }
}`,...(L=($=y.parameters)==null?void 0:$.docs)==null?void 0:L.source}}};var J,U,Z;f.parameters={...f.parameters,docs:{...(J=f.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => {
    const [current, setCurrent] = useState(1);
    return <div className="flex flex-col gap-8">
        <Steps current={current} items={[{
        title: 'Order Submitted',
        description: 'Your order has been placed'
      }, {
        title: 'Processing',
        description: 'Preparing your order'
      }, {
        title: 'Complete',
        description: 'Order delivered successfully'
      }]} />
        {current < 2 ? <Result status={current === 0 ? 'info' : 'warning'} title={current === 0 ? 'Order Submitted' : 'Processing Order'} subTitle={current === 0 ? 'Your order #20241215001 has been submitted successfully.' : 'Your order is being prepared for shipping.'} extra={<button style={btnStyle} onClick={() => setCurrent(c => c + 1)}>
                {current === 0 ? 'Track Order' : 'Confirm Delivery'}
              </button>} /> : <Result status="success" title="Order Complete!" subTitle="Your order has been delivered successfully. Thank you for your purchase!" extra={<div className="flex gap-2 justify-center">
                <button style={btnStyle} onClick={() => setCurrent(0)}>Start Over</button>
                <button style={{
          ...btnStyle,
          background: '#1677ff',
          color: '#fff',
          border: 'none'
        }}>View Receipt</button>
              </div>} />}
      </div>;
  }
}`,...(Z=(U=f.parameters)==null?void 0:U.docs)==null?void 0:Z.source}}};const Re=["Default","Success","Error","Info","Warning","NotFound","Forbidden","ServerError","CustomIcon","CompleteFlow"];export{f as CompleteFlow,y as CustomIcon,u as Default,c as Error,b as Forbidden,d as Info,p as NotFound,h as ServerError,l as Success,m as Warning,Re as __namedExportsOrder,Oe as default};
