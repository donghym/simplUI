import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as s}from"./index-GiUgBvb1.js";import{a as i}from"./utils-BEhiKRD9.js";import{c as p}from"./index-C08JwjkN.js";const _=p("fixed inset-0 z-40 bg-black/50 transition-opacity",{variants:{visible:{true:"opacity-100",false:"opacity-0 pointer-events-none"}},defaultVariants:{visible:!0}}),D=p("fixed inset-x-0 bottom-0 z-50 rounded-t-xl bg-background shadow-xl transition-transform duration-300",{variants:{visible:{true:"translate-y-0",false:"translate-y-full"}},defaultVariants:{visible:!0}}),M=p("flex w-full items-center justify-center px-4 py-3.5 text-base transition-colors",{variants:{danger:{true:"text-danger-500",false:"text-foreground"},disabled:{true:"opacity-50 cursor-not-allowed",false:"active:bg-muted cursor-pointer"}},defaultVariants:{danger:!1,disabled:!1}}),z=p("flex w-full items-center justify-center rounded-none px-4 py-3.5 text-base font-semibold text-foreground active:bg-muted cursor-pointer",{variants:{},defaultVariants:{}}),o=s.forwardRef(({open:n,onClose:t,actions:T,title:b,cancelText:w="取消",maskClosable:f=!0,className:V,...q},I)=>{s.useEffect(()=>(n?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[n]);const E=s.useCallback(()=>{f&&t()},[f,t]),W=s.useCallback(r=>{var a;r.disabled||((a=r.onClick)==null||a.call(r),t())},[t]);return n?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:i(_({visible:n})),onClick:E,"aria-hidden":"true"}),e.jsxs("div",{ref:I,role:"dialog","aria-modal":"true",className:i(D({visible:n}),V),onClick:r=>r.stopPropagation(),...q,children:[b&&e.jsx("div",{className:"border-b border-border px-4 py-3 text-center text-sm text-muted-foreground",children:b}),e.jsx("div",{className:"divide-y divide-border",children:T.map((r,a)=>e.jsx("button",{type:"button",disabled:r.disabled,className:i(M({danger:r.danger,disabled:r.disabled})),onClick:()=>W(r),children:r.label},a))}),e.jsx("div",{className:"h-2 bg-muted"}),e.jsx("button",{type:"button",className:i(z()),onClick:t,children:w})]})]}):null});o.displayName="ActionSheet";o.__docgenInfo={description:`ActionSheet 底部动作面板

iOS 风格底部弹出选项列表，支持标题、操作区和取消按钮。`,methods:[],displayName:"ActionSheet",props:{open:{required:!0,tsType:{name:"boolean"},description:"是否可见"},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"关闭回调"},actions:{required:!0,tsType:{name:"Array",elements:[{name:"ActionSheetItem"}],raw:"ActionSheetItem[]"},description:"选项列表"},title:{required:!1,tsType:{name:"string"},description:"标题"},cancelText:{required:!1,tsType:{name:"string"},description:"取消按钮文本，默认 '取消'",defaultValue:{value:"'取消'",computed:!1}},maskClosable:{required:!1,tsType:{name:"boolean"},description:"点击遮罩是否关闭，默认 true",defaultValue:{value:"true",computed:!1}}},composes:["Omit","VariantProps"]};const B=n=>e.jsx("div",{style:{display:"flex",alignItems:"flex-start",justifyContent:"center",minHeight:"500px",width:"100%",paddingTop:"40px"},children:e.jsx(n,{})}),G={title:"反馈/ActionSheet 底部动作面板",component:o,tags:["autodocs"],decorators:[B],parameters:{layout:"padded"},argTypes:{title:{control:"text",description:"标题"},cancelText:{control:"text",description:"取消按钮文本"},maskClosable:{control:"boolean",description:"点击遮罩是否关闭，默认 true"}}},m=[{label:"拍照",onClick:()=>{console.log("拍照")}},{label:"从相册选择",onClick:()=>{console.log("从相册选择")}},{label:"删除",danger:!0,onClick:()=>{console.log("删除")}}],l={render:()=>{const[n,t]=s.useState(!1);return e.jsxs("div",{children:[e.jsx("button",{type:"button",onClick:()=>t(!0),className:"rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground",children:"打开面板"}),e.jsx(o,{open:n,onClose:()=>t(!1),actions:m})]})}},d={render:()=>{const[n,t]=s.useState(!1);return e.jsxs("div",{children:[e.jsx("button",{type:"button",onClick:()=>t(!0),className:"rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground",children:"带标题面板"}),e.jsx(o,{open:n,onClose:()=>t(!1),title:"请选择操作",actions:m})]})}},c={render:()=>{const[n,t]=s.useState(!1);return e.jsxs("div",{children:[e.jsx("button",{type:"button",onClick:()=>t(!0),className:"rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground",children:"含禁用选项"}),e.jsx(o,{open:n,onClose:()=>t(!1),actions:[{label:"编辑",onClick:()=>{}},{label:"分享",onClick:()=>{},disabled:!0},{label:"删除",danger:!0,onClick:()=>{}}]})]})}},u={render:()=>{const[n,t]=s.useState(!1);return e.jsxs("div",{children:[e.jsx("button",{type:"button",onClick:()=>t(!0),className:"rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground",children:"遮罩不可关闭"}),e.jsx(o,{open:n,onClose:()=>t(!1),actions:m,maskClosable:!1})]})}};var x,y,g;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <div>
        <button type="button" onClick={() => setOpen(true)} className="rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground">
          打开面板
        </button>
        <ActionSheet open={open} onClose={() => setOpen(false)} actions={basicActions} />
      </div>;
  }
}`,...(g=(y=l.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var h,v,C;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <div>
        <button type="button" onClick={() => setOpen(true)} className="rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground">
          带标题面板
        </button>
        <ActionSheet open={open} onClose={() => setOpen(false)} title="请选择操作" actions={basicActions} />
      </div>;
  }
}`,...(C=(v=d.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var k,S,j;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <div>
        <button type="button" onClick={() => setOpen(true)} className="rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground">
          含禁用选项
        </button>
        <ActionSheet open={open} onClose={() => setOpen(false)} actions={[{
        label: '编辑',
        onClick: () => {}
      }, {
        label: '分享',
        onClick: () => {},
        disabled: true
      }, {
        label: '删除',
        danger: true,
        onClick: () => {}
      }]} />
      </div>;
  }
}`,...(j=(S=c.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var O,N,A;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <div>
        <button type="button" onClick={() => setOpen(true)} className="rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground">
          遮罩不可关闭
        </button>
        <ActionSheet open={open} onClose={() => setOpen(false)} actions={basicActions} maskClosable={false} />
      </div>;
  }
}`,...(A=(N=u.parameters)==null?void 0:N.docs)==null?void 0:A.source}}};const J=["Basic","WithTitle","WithDisabled","MaskNotClosable"];export{l as Basic,u as MaskNotClosable,c as WithDisabled,d as WithTitle,J as __namedExportsOrder,G as default};
