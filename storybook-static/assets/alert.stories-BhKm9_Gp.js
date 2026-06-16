import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as n}from"./index-GiUgBvb1.js";import{c as te}from"./index-C08JwjkN.js";import{a as ae}from"./utils-BEhiKRD9.js";const ne=te("sui-alert sui-alert--with-description",{variants:{type:{success:"sui-alert--success",info:"sui-alert--info",warning:"sui-alert--warning",error:"sui-alert--error"}},defaultVariants:{type:"info"}}),oe={success:e.jsx("svg",{viewBox:"64 64 896 896",width:"1em",height:"1em",fill:"currentColor",children:e.jsx("path",{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"})}),info:e.jsx("svg",{viewBox:"64 64 896 896",width:"1em",height:"1em",fill:"currentColor",children:e.jsx("path",{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"})}),warning:e.jsx("svg",{viewBox:"64 64 896 896",width:"1em",height:"1em",fill:"currentColor",children:e.jsx("path",{d:"M464 720a48 48 0 1096 0 48 48 0 10-96 0zm16-304v184c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V416c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8zm475.7 440l-418.7-726.6a15.9 15.9 0 00-27.4 0L80.9 856a15.9 15.9 0 0013.7 23.7h736.8c12.6 0 20.5-13.6 13.7-23.7zM512 144c1.7 0 3.3.4 4.8 1.2l418.7 726.6c2.6 4.5.8 10.3-4 12.1H92.5c-4.8-1.8-6.6-7.6-4-12.1l418.7-726.6c1.5-.8 3.1-1.2 4.8-1.2z"})}),error:e.jsx("svg",{viewBox:"64 64 896 896",width:"1em",height:"1em",fill:"currentColor",children:e.jsx("path",{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130.1 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"})})},s=n.forwardRef(({type:a="info",showIcon:r=!1,closable:o=!1,onClose:t,action:i,closeIcon:F,message:y,description:h,icon:G,banner:J=!1,style:K,className:Q,...X},Z)=>{const[$,ee]=n.useState(!1),se=n.useCallback(()=>{ee(!0),t==null||t()},[t]);if($)return null;const re=!!h;return e.jsxs("div",{ref:Z,className:ae(ne({type:a}),J&&"sui-alert--banner",re&&"sui-alert--with-description",Q),style:K,role:"alert",...X,children:[r&&e.jsx("span",{className:"sui-alert__icon",children:G||oe[a]}),e.jsxs("div",{className:"sui-alert__content",children:[y&&e.jsx("div",{className:"sui-alert__message",children:y}),h&&e.jsx("div",{className:"sui-alert__description",children:h})]}),i&&e.jsx("div",{className:"sui-alert__action",children:i}),o&&e.jsx("button",{type:"button",className:"sui-alert__close",onClick:se,"aria-label":"Close",children:F||e.jsx("svg",{viewBox:"64 64 896 896",width:"1em",height:"1em",fill:"currentColor",children:e.jsx("path",{d:"M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"})})})]})});s.displayName="Alert";s.__docgenInfo={description:`Alert 警告提示组件

用于页面中展示重要的提示信息。

### 何时使用
- 用于显示网页中需要引起用户注意的提示信息
- 不会自动消失，用户可以点击关闭

### 示例
\`\`\`tsx
<Alert message="成功提示" type="success" />
<Alert message="警告提示" type="warning" showIcon />
\`\`\``,methods:[],displayName:"Alert",props:{type:{required:!1,tsType:{name:"union",raw:"'success' | 'info' | 'warning' | 'error'",elements:[{name:"literal",value:"'success'"},{name:"literal",value:"'info'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"}]},description:"警告提示样式",defaultValue:{value:"'info'",computed:!1}},showIcon:{required:!1,tsType:{name:"boolean"},description:"是否显示图标",defaultValue:{value:"false",computed:!1}},closable:{required:!1,tsType:{name:"boolean"},description:"可关闭",defaultValue:{value:"false",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"关闭时的回调"},action:{required:!1,tsType:{name:"ReactNode"},description:"自定义操作区"},closeIcon:{required:!1,tsType:{name:"ReactNode"},description:"自定义关闭按钮"},message:{required:!1,tsType:{name:"ReactNode"},description:"提示内容"},description:{required:!1,tsType:{name:"ReactNode"},description:"辅助性文字介绍"},icon:{required:!1,tsType:{name:"ReactNode"},description:"自定义图标，showIcon 为 true 时有效"},banner:{required:!1,tsType:{name:"boolean"},description:"顶部公告",defaultValue:{value:"false",computed:!1}},style:{required:!1,tsType:{name:"CSSProperties"},description:"自定义样式"},className:{required:!1,tsType:{name:"string"},description:"自定义类名"}}};const pe={title:"反馈/Alert 警告提示",component:s,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"警告提示用于向用户传递需要关注的信息。适用于操作反馈、系统通知、异常提醒等场景，支持成功、信息、警告、错误四种类型。"}}},argTypes:{type:{control:"select",options:["success","info","warning","error"]},showIcon:{control:"boolean"},closable:{control:"boolean"},banner:{control:"boolean"}}},c={args:{message:"Success Text",type:"success"}},l={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(s,{message:"Success Text",type:"success"}),e.jsx(s,{message:"Info Text",type:"info"}),e.jsx(s,{message:"Warning Text",type:"warning"}),e.jsx(s,{message:"Error Text",type:"error"})]})},d={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(s,{message:"Success Tips",type:"success",showIcon:!0}),e.jsx(s,{message:"Informational Notes",type:"info",showIcon:!0}),e.jsx(s,{message:"Warning",type:"warning",showIcon:!0}),e.jsx(s,{message:"Error",type:"error",showIcon:!0})]})},p={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(s,{message:"Success Text",description:"Detailed description and advice about successful copywriting.",type:"success",showIcon:!0}),e.jsx(s,{message:"Info Text",description:"Additional description and information about copywriting.",type:"info",showIcon:!0}),e.jsx(s,{message:"Warning Text",description:"This is a warning notice about copywriting.",type:"warning",showIcon:!0}),e.jsx(s,{message:"Error Text",description:"This is an error message about copywriting.",type:"error",showIcon:!0})]})},m={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(s,{message:"Warning Text",type:"warning",closable:!0}),e.jsx(s,{message:"Error Text",description:"Error Description",type:"error",closable:!0})]})},u={render:()=>e.jsx(s,{message:"Success Tips",type:"success",showIcon:!0,action:e.jsx("a",{href:"#",className:"text-primary-500",children:"Detail >"})})},g={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(s,{message:"Warning text",banner:!0}),e.jsx(s,{message:"Very long warning text",banner:!0,closable:!0})]})},x={render:()=>{const[a,r]=n.useState(!0),[o,t]=n.useState(!1),i=()=>{t(!0),setTimeout(()=>{r(!1),t(!1)},300)};return a?e.jsx("div",{style:{transition:"opacity 0.3s, transform 0.3s",opacity:o?0:1,transform:o?"translateY(-10px)":"translateY(0)"},children:e.jsx(s,{message:"This alert can be closed with animation",type:"warning",showIcon:!0,closable:!0,onClose:i})}):e.jsx("button",{type:"button",className:"px-3 py-1.5 border border-gray-300 rounded-md text-sm hover:bg-gray-50",onClick:()=>r(!0),children:"Show Alert Again"})}},f={render:()=>{const[a,r]=n.useState(!1);return e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(s,{message:"New version available",description:"A new version of the application is ready to install.",type:"info",showIcon:!0,action:e.jsx("button",{type:"button",className:"px-3 py-1 text-sm font-medium text-primary-500 hover:text-primary-600 border border-primary-500 rounded-md hover:bg-primary-50 transition-colors",onClick:()=>r(!0),children:"Update Now"})}),a&&e.jsx(s,{message:"Update started!",type:"success",showIcon:!0,closable:!0,onClose:()=>r(!1)})]})}};var w,b,v;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    message: 'Success Text',
    type: 'success'
  }
}`,...(v=(b=c.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var j,T,A;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <Alert message="Success Text" type="success" />
      <Alert message="Info Text" type="info" />
      <Alert message="Warning Text" type="warning" />
      <Alert message="Error Text" type="error" />
    </div>
}`,...(A=(T=l.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};var I,N,C;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <Alert message="Success Tips" type="success" showIcon />
      <Alert message="Informational Notes" type="info" showIcon />
      <Alert message="Warning" type="warning" showIcon />
      <Alert message="Error" type="error" showIcon />
    </div>
}`,...(C=(N=d.parameters)==null?void 0:N.docs)==null?void 0:C.source}}};var S,W,_;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <Alert message="Success Text" description="Detailed description and advice about successful copywriting." type="success" showIcon />
      <Alert message="Info Text" description="Additional description and information about copywriting." type="info" showIcon />
      <Alert message="Warning Text" description="This is a warning notice about copywriting." type="warning" showIcon />
      <Alert message="Error Text" description="This is an error message about copywriting." type="error" showIcon />
    </div>
}`,...(_=(W=p.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var V,k,E;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <Alert message="Warning Text" type="warning" closable />
      <Alert message="Error Text" description="Error Description" type="error" closable />
    </div>
}`,...(E=(k=m.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var q,z,B;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <Alert message="Success Tips" type="success" showIcon action={<a href="#" className="text-primary-500">Detail &gt;</a>} />
}`,...(B=(z=u.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var D,L,M;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <Alert message="Warning text" banner />
      <Alert message="Very long warning text" banner closable />
    </div>
}`,...(M=(L=g.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var R,U,Y;x.parameters={...x.parameters,docs:{...(R=x.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => {
    const [visible, setVisible] = useState(true);
    const [closing, setClosing] = useState(false);
    const handleClose = () => {
      setClosing(true);
      setTimeout(() => {
        setVisible(false);
        setClosing(false);
      }, 300);
    };
    if (!visible) {
      return <button type="button" className="px-3 py-1.5 border border-gray-300 rounded-md text-sm hover:bg-gray-50" onClick={() => setVisible(true)}>
          Show Alert Again
        </button>;
    }
    return <div style={{
      transition: 'opacity 0.3s, transform 0.3s',
      opacity: closing ? 0 : 1,
      transform: closing ? 'translateY(-10px)' : 'translateY(0)'
    }}>
        <Alert message="This alert can be closed with animation" type="warning" showIcon closable onClose={handleClose} />
      </div>;
  }
}`,...(Y=(U=x.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var H,O,P;f.parameters={...f.parameters,docs:{...(H=f.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => {
    const [clicked, setClicked] = useState(false);
    return <div className="flex flex-col gap-4">
        <Alert message="New version available" description="A new version of the application is ready to install." type="info" showIcon action={<button type="button" className="px-3 py-1 text-sm font-medium text-primary-500 hover:text-primary-600 border border-primary-500 rounded-md hover:bg-primary-50 transition-colors" onClick={() => setClicked(true)}>
              Update Now
            </button>} />
        {clicked && <Alert message="Update started!" type="success" showIcon closable onClose={() => setClicked(false)} />}
      </div>;
  }
}`,...(P=(O=f.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};const me=["Basic","Types","WithIcon","WithDescription","Closable","WithAction","Banner","ClosableWithAnimation","ActionInteraction"];export{f as ActionInteraction,g as Banner,c as Basic,m as Closable,x as ClosableWithAnimation,l as Types,u as WithAction,p as WithDescription,d as WithIcon,me as __namedExportsOrder,pe as default};
