import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as a}from"./index-GiUgBvb1.js";import{a as P}from"./utils-BEhiKRD9.js";import{c as Z}from"./index-C08JwjkN.js";import{B as s}from"./index-WhxK0hy4.js";import"./loader-circle-CulI208u.js";import"./createLucideIcon-CZe00VV7.js";const ue=Z("absolute z-50 min-w-[240px] max-w-[360px] rounded-lg border border-border bg-background shadow-lg",{variants:{placement:{top:"bottom-full left-1/2 -translate-x-1/2 mb-2.5",topLeft:"bottom-full left-0 mb-2.5",topRight:"bottom-full right-0 mb-2.5",bottom:"top-full left-1/2 -translate-x-1/2 mt-2.5",bottomLeft:"top-full left-0 mt-2.5",bottomRight:"top-full right-0 mt-2.5",left:"right-full top-1/2 -translate-y-1/2 mr-2.5",leftTop:"right-full top-0 mr-2.5",leftBottom:"right-full bottom-0 mr-2.5",right:"left-full top-1/2 -translate-y-1/2 ml-2.5",rightTop:"left-full top-0 ml-2.5",rightBottom:"left-full bottom-0 ml-2.5"}},defaultVariants:{placement:"top"}}),fe=Z("absolute w-2.5 h-2.5 rotate-45 bg-background border-border",{variants:{arrowPlacement:{top:"-bottom-[5px] left-1/2 -translate-x-1/2 border-t-0 border-l-0",bottom:"-top-[5px] left-1/2 -translate-x-1/2 border-b-0 border-r-0",left:"-right-[5px] top-1/2 -translate-y-1/2 border-l-0 border-b-0",right:"-left-[5px] top-1/2 -translate-y-1/2 border-r-0 border-t-0"}}});function he(t){return t.startsWith("top")?"bottom":t.startsWith("bottom")?"top":t.startsWith("left")?"right":"left"}const y=a.forwardRef(({title:t,description:B,okText:ee="确定",cancelText:te="取消",onConfirm:c,onCancel:p,open:j,onOpenChange:m,trigger:i="click",icon:_=e.jsx("svg",{viewBox:"64 64 896 896",width:"16",height:"16",fill:"#faad14",children:e.jsx("path",{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"})}),disabled:re=!1,children:oe,style:ae,className:se,placement:w="top"},l)=>{const[ne,ie]=a.useState(!1),T=j!==void 0,d=T?j:ne,k=a.useRef(null),N=a.useRef(null),r=a.useCallback(o=>{T||ie(o),m==null||m(o)},[T,m]),le=a.useCallback(()=>{r(!1),c==null||c()},[r,c]),ce=a.useCallback(()=>{r(!1),p==null||p()},[r,p]);a.useEffect(()=>{if(i!=="click")return;const o=de=>{var C,D;if(!d)return;const R=de.target;(C=k.current)!=null&&C.contains(R)||(D=N.current)!=null&&D.contains(R)||r(!1)};return document.addEventListener("mousedown",o),()=>document.removeEventListener("mousedown",o)},[d,i,r]);const n={};re||(i==="click"?n.onClick=o=>{o.stopPropagation(),r(!d)}:i==="hover"?(n.onMouseEnter=()=>r(!0),n.onMouseLeave=()=>r(!1)):i==="focus"&&(n.onFocus=()=>r(!0),n.onBlur=()=>r(!1)));const pe=a.useCallback(o=>{k.current=o,l&&(typeof l=="function"?l(o):Object.assign(l,{current:o}))},[l]),me=he(w);return e.jsxs("span",{ref:pe,className:"sui-popconfirm-trigger relative inline-block",children:[e.jsx("span",{...n,children:oe}),d&&e.jsxs("div",{ref:N,className:P("sui-popconfirm",ue({placement:w}),se),style:ae,children:[e.jsxs("div",{className:"sui-popconfirm__inner",children:[e.jsxs("div",{className:"sui-popconfirm__body",children:[_&&e.jsx("span",{className:"sui-popconfirm__icon",children:_}),e.jsxs("div",{className:"sui-popconfirm__content",children:[t&&e.jsx("div",{className:"sui-popconfirm__title",children:t}),B&&e.jsx("div",{className:"sui-popconfirm__description",children:B})]})]}),e.jsxs("div",{className:"sui-popconfirm__footer",children:[e.jsx("button",{type:"button",className:"sui-popconfirm__btn sui-popconfirm__btn--cancel",onClick:ce,children:te}),e.jsx("button",{type:"button",className:"sui-popconfirm__btn sui-popconfirm__btn--ok",onClick:le,children:ee})]})]}),e.jsx("div",{className:P("sui-popconfirm__arrow",fe({arrowPlacement:me})),"aria-hidden":"true"})]})]})});y.displayName="Popconfirm";y.__docgenInfo={description:"",methods:[],displayName:"Popconfirm",props:{title:{required:!1,tsType:{name:"ReactNode"},description:"确认框标题，显示在气泡顶部"},description:{required:!1,tsType:{name:"ReactNode"},description:"确认框描述内容，显示在标题下方"},okText:{required:!1,tsType:{name:"ReactNode"},description:"确认按钮文字。默认 '确定'",defaultValue:{value:"'确定'",computed:!1}},cancelText:{required:!1,tsType:{name:"ReactNode"},description:"取消按钮文字。默认 '取消'",defaultValue:{value:"'取消'",computed:!1}},onConfirm:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"点击确认按钮时的回调函数"},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"点击取消按钮时的回调函数"},open:{required:!1,tsType:{name:"boolean"},description:"是否显示气泡确认框。受控模式下使用"},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:"气泡确认框显示/隐藏状态变化时的回调函数"},trigger:{required:!1,tsType:{name:"union",raw:"'click' | 'hover' | 'focus'",elements:[{name:"literal",value:"'click'"},{name:"literal",value:"'hover'"},{name:"literal",value:"'focus'"}]},description:"触发方式。'click' 点击触发，'hover' 悬停触发，'focus' 焦点触发。默认 'click'",defaultValue:{value:"'click'",computed:!1}},icon:{required:!1,tsType:{name:"ReactNode"},description:"自定义图标，显示在标题左侧。默认为警告图标",defaultValue:{value:`<svg viewBox="64 64 896 896" width="16" height="16" fill="#faad14">
  <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" />
</svg>`,computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"是否禁用。true 时无法触发气泡确认框",defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:"触发气泡确认框的子元素，必须为单个可交互元素"},style:{required:!1,tsType:{name:"CSSProperties"},description:"自定义内联样式"},className:{required:!1,tsType:{name:"string"},description:"自定义类名，通过 cn() + twMerge 合并"},placement:{required:!1,tsType:{name:"union",raw:`| 'top'
| 'topLeft'
| 'topRight'
| 'bottom'
| 'bottomLeft'
| 'bottomRight'
| 'left'
| 'leftTop'
| 'leftBottom'
| 'right'
| 'rightTop'
| 'rightBottom'`,elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'topLeft'"},{name:"literal",value:"'topRight'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'bottomLeft'"},{name:"literal",value:"'bottomRight'"},{name:"literal",value:"'left'"},{name:"literal",value:"'leftTop'"},{name:"literal",value:"'leftBottom'"},{name:"literal",value:"'right'"},{name:"literal",value:"'rightTop'"},{name:"literal",value:"'rightBottom'"}]},description:"气泡确认框弹出位置。默认 'top'",defaultValue:{value:"'top'",computed:!1}}},composes:["VariantProps"]};const ge=t=>e.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"300px",width:"100%",padding:"40px"},children:e.jsx(t,{})}),_e={title:"反馈/Popconfirm 气泡确认框",component:y,tags:["autodocs"],decorators:[ge],parameters:{layout:"padded",docs:{description:{component:"点击元素，弹出气泡式的确认框。"}}},argTypes:{trigger:{control:"select",options:["click","hover","focus"]},placement:{control:"select",options:["top","topLeft","topRight","bottom","bottomLeft","bottomRight","left","leftTop","leftBottom","right","rightTop","rightBottom"]},disabled:{control:"boolean"}}},u={args:{title:"确定要删除这个任务吗？",children:e.jsx(s,{children:"删除"})}},f={args:{title:"删除确认",description:"此操作将永久删除该文件，是否继续？",children:e.jsx(s,{children:"删除"})}},h={args:{title:"Are you sure?",okText:"Yes",cancelText:"No",children:e.jsx(s,{children:"Delete"})}},g={render:()=>e.jsx("div",{className:"flex flex-wrap gap-6 p-10",children:["top","topLeft","topRight","bottom","bottomLeft","bottomRight","left","leftTop","leftBottom","right","rightTop","rightBottom"].map(t=>e.jsx(y,{title:`Placement: ${t}`,placement:t,children:e.jsx(s,{style:{minWidth:100},children:t})},t))})},b={args:{title:"Hover to confirm",trigger:"hover",children:e.jsx(s,{children:"Hover me"})}},v={args:{title:"Disabled",disabled:!0,children:e.jsx(s,{disabled:!0,children:"Disabled"})}},x={args:{title:"确认删除？",children:e.jsx(s,{children:"Delete"}),onConfirm:()=>alert("Confirmed"),onCancel:()=>alert("Cancelled")}};var q,L,S;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    title: '确定要删除这个任务吗？',
    children: <Button>删除</Button>
  }
}`,...(S=(L=u.parameters)==null?void 0:L.docs)==null?void 0:S.source}}};var V,z,E;f.parameters={...f.parameters,docs:{...(V=f.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    title: '删除确认',
    description: '此操作将永久删除该文件，是否继续？',
    children: <Button>删除</Button>
  }
}`,...(E=(z=f.parameters)==null?void 0:z.docs)==null?void 0:E.source}}};var H,W,M;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    title: 'Are you sure?',
    okText: 'Yes',
    cancelText: 'No',
    children: <Button>Delete</Button>
  }
}`,...(M=(W=h.parameters)==null?void 0:W.docs)==null?void 0:M.source}}};var A,I,O;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-6 p-10">
      {(['top', 'topLeft', 'topRight', 'bottom', 'bottomLeft', 'bottomRight', 'left', 'leftTop', 'leftBottom', 'right', 'rightTop', 'rightBottom'] as const).map(p => <Popconfirm key={p} title={\`Placement: \${p}\`} placement={p}>
          <Button style={{
        minWidth: 100
      }}>{p}</Button>
        </Popconfirm>)}
    </div>
}`,...(O=(I=g.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var Y,$,F;b.parameters={...b.parameters,docs:{...(Y=b.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    title: 'Hover to confirm',
    trigger: 'hover',
    children: <Button>Hover me</Button>
  }
}`,...(F=($=b.parameters)==null?void 0:$.docs)==null?void 0:F.source}}};var G,J,K;v.parameters={...v.parameters,docs:{...(G=v.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    title: 'Disabled',
    disabled: true,
    children: <Button disabled>Disabled</Button>
  }
}`,...(K=(J=v.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,U,X;x.parameters={...x.parameters,docs:{...(Q=x.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    title: '确认删除？',
    children: <Button>Delete</Button>,
    onConfirm: () => alert('Confirmed'),
    onCancel: () => alert('Cancelled')
  }
}`,...(X=(U=x.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};const we=["Basic","WithDescription","CustomText","Placements","TriggerHover","Disabled","OnConfirm"];export{u as Basic,h as CustomText,v as Disabled,x as OnConfirm,g as Placements,b as TriggerHover,f as WithDescription,we as __namedExportsOrder,_e as default};
