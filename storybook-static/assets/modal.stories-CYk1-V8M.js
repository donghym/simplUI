import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as o}from"./index-GiUgBvb1.js";import{fn as Q}from"./index-DeN4tkzB.js";import{a as C}from"./utils-BEhiKRD9.js";import{c as U}from"./index-C08JwjkN.js";import{X as re}from"./x-B-5N0Ikz.js";import{B as n}from"./index-WhxK0hy4.js";import"./createLucideIcon-CZe00VV7.js";import"./loader-circle-CulI208u.js";const ne=U("fixed inset-y-0 z-50 flex items-center justify-center",{variants:{centered:{true:"items-center",false:"items-start pt-[10vh]"}},defaultVariants:{centered:!0}}),ae=U("fixed inset-0 z-40 bg-black/50 transition-opacity",{variants:{visible:{true:"opacity-100",false:"opacity-0 pointer-events-none"}},defaultVariants:{visible:!0}}),a=o.forwardRef(({open:s,onClose:t,title:r,width:l=520,footer:i,maskClosable:Y=!0,closable:O=!0,afterClose:B,className:Z,children:ee,...te},se)=>{const g=o.useRef(B);g.current=B,o.useEffect(()=>(s?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[s]);const j=o.useCallback(d=>{d.key==="Escape"&&s&&t()},[s,t]);if(o.useEffect(()=>(document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)),[j]),o.useEffect(()=>{if(!s&&g.current){const d=setTimeout(g.current,200);return()=>clearTimeout(d)}},[s]),!s)return null;const oe=()=>{Y&&t()};return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:ae({visible:s}),onClick:oe}),e.jsx("div",{className:ne({centered:!0}),...te,children:e.jsxs("div",{ref:se,role:"dialog","aria-modal":"true",style:{width:typeof l=="number"?`${l}px`:l},className:C("relative bg-background rounded-lg shadow-xl z-50 flex flex-col max-h-[90vh]",Z),onClick:d=>d.stopPropagation(),children:[(r||O)&&e.jsxs("div",{className:"flex items-center justify-between px-6 py-4 border-b border-border",children:[e.jsx("h3",{className:"text-lg font-semibold text-foreground",children:r}),O&&e.jsx("button",{type:"button",onClick:t,"aria-label":"关闭",className:"ml-auto text-muted-foreground hover:text-foreground transition-colors",children:e.jsx(re,{size:20})})]}),e.jsx("div",{className:"px-6 py-4 overflow-auto",children:ee}),i!==void 0&&e.jsx("div",{className:"flex items-center justify-end gap-2 px-6 py-4 border-t border-border",children:i})]})})]})});a.displayName="Modal";const b=o.forwardRef(({className:s,...t},r)=>e.jsx("div",{ref:r,className:C("flex items-center justify-between px-6 py-4 border-b border-border",s),...t}));b.displayName="ModalHeader";const v=o.forwardRef(({className:s,...t},r)=>e.jsx("div",{ref:r,className:C("px-6 py-4",s),...t}));v.displayName="ModalBody";const k=o.forwardRef(({className:s,...t},r)=>e.jsx("div",{ref:r,className:C("flex items-center justify-end gap-2 px-6 py-4 border-t border-border",s),...t}));k.displayName="ModalFooter";Object.assign(a,{Header:b,Body:v,Footer:k});a.__docgenInfo={description:`Modal 模态对话框

弹窗遮盖层 + 居中内容面板，支持 ESC 关闭和遮罩点击关闭。`,methods:[],displayName:"Modal",props:{open:{required:!0,tsType:{name:"boolean"},description:"弹窗是否可见，受控"},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"关闭回调（点击遮罩或关闭按钮时触发）"},title:{required:!1,tsType:{name:"ReactNode"},description:"弹窗标题"},width:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"弹窗宽度，默认 520",defaultValue:{value:"520",computed:!1}},footer:{required:!1,tsType:{name:"ReactNode"},description:"底部内容，不传时为空"},maskClosable:{required:!1,tsType:{name:"boolean"},description:"点击遮罩层是否关闭，默认 true",defaultValue:{value:"true",computed:!1}},closable:{required:!1,tsType:{name:"boolean"},description:"是否显示关闭按钮，默认 true",defaultValue:{value:"true",computed:!1}},afterClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"关闭后的回调"},className:{required:!1,tsType:{name:"string"},description:"自定义类名"}},composes:["Omit","VariantProps"]};b.__docgenInfo={description:"ModalHeader 自定义头部",methods:[],displayName:"ModalHeader"};v.__docgenInfo={description:"ModalBody 自定义内容区",methods:[],displayName:"ModalBody"};k.__docgenInfo={description:"ModalFooter 自定义底部",methods:[],displayName:"ModalFooter"};const le=s=>e.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"500px",width:"100%"},children:e.jsx(s,{})}),ge={title:"反馈/Modal 对话框",component:a,tags:["autodocs"],decorators:[le],parameters:{layout:"padded",docs:{description:{component:`对话框用于在当前页面之上弹出一个浮层，承载需要用户确认或操作的重要信息。

- 适用于需要用户立即关注或响应的场景，如二次确认、表单编辑、信息展示等
- 支持自定义底部操作区、宽度、关闭行为等
- 提供受控与非受控两种使用方式`}}},argTypes:{open:{control:"boolean",description:"弹窗是否可见，受控模式"},onClose:{control:"text",description:"关闭回调"},title:{control:"text",description:"弹窗标题"},footer:{control:"text",description:"底部内容，不传时为空"},width:{control:"number",description:"弹窗宽度，默认 520"},closable:{control:"boolean",description:"是否显示关闭按钮，默认 true"}}},de=Q(),ie=Q(),c={parameters:{docs:{description:{story:"最基础的弹窗用法，通过按钮控制弹窗的显示与隐藏。"}}},render:()=>{const[s,t]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(n,{onClick:()=>t(!0),children:"打开弹窗"}),e.jsx(a,{open:s,onClose:()=>t(!1),title:"基础弹窗",children:e.jsx("p",{children:"弹窗内容区域。按 ESC 或点击遮罩层可关闭。"})})]})}},p={parameters:{docs:{description:{story:"自定义底部操作区，常用于二次确认场景。"}}},render:()=>{const[s,t]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(n,{onClick:()=>t(!0),children:"带底部按钮"}),e.jsx(a,{open:s,onClose:()=>t(!1),title:"确认操作",footer:e.jsxs(e.Fragment,{children:[e.jsx(n,{variant:"default",onClick:()=>t(!1),children:"取消"}),e.jsx(n,{onClick:()=>{de("已确认"),t(!1)},children:"确认"})]}),children:e.jsx("p",{children:"确定要继续执行该操作吗？"})})]})}},u={parameters:{docs:{description:{story:"通过 width 属性自定义弹窗宽度，适用于内容较宽的场景。"}}},render:()=>{const[s,t]=o.useState(!1),r=800;return e.jsxs(e.Fragment,{children:[e.jsx(n,{onClick:()=>t(!0),children:"宽弹窗"}),e.jsx(a,{open:s,onClose:()=>t(!1),title:"宽弹窗",width:r,children:e.jsxs("p",{children:["此弹窗宽度为 ",r,"px。"]})})]})}},m={parameters:{docs:{description:{story:"禁止点击遮罩层关闭弹窗，适用于必须用户明确操作才能关闭的场景。"}}},render:()=>{const[s,t]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(n,{onClick:()=>t(!0),children:"点击遮罩不可关闭"}),e.jsx(a,{open:s,onClose:()=>t(!1),title:"点击遮罩不可关闭",maskClosable:!1,children:e.jsx("p",{children:"必须使用按钮来关闭此弹窗。"})})]})}},f={parameters:{docs:{description:{story:"不显示标题栏的简洁弹窗，适用于纯内容展示场景。"}}},render:()=>{const[s,t]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(n,{onClick:()=>t(!0),children:"无标题弹窗"}),e.jsx(a,{open:s,onClose:()=>t(!1),children:e.jsx("p",{children:"不显示标题栏。"})})]})}},x={parameters:{docs:{description:{story:"典型的删除确认弹窗，使用危险色按钮强调操作风险。"}}},render:()=>{const[s,t]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(n,{onClick:()=>t(!0),children:"确认对话框"}),e.jsx(a,{open:s,onClose:()=>t(!1),title:"确认删除",footer:e.jsxs(e.Fragment,{children:[e.jsx(n,{variant:"default",onClick:()=>t(!1),children:"取消"}),e.jsx(n,{className:"bg-danger-500 hover:bg-danger-600",onClick:()=>{ie("已删除"),t(!1)},children:"删除"})]}),children:e.jsx("p",{children:"确定要删除该项目吗？此操作不可撤销。"})})]})}},h={parameters:{docs:{description:{story:"模拟异步操作的弹窗，提交时显示加载状态并在完成后关闭。"}}},render:()=>{const[s,t]=o.useState(!1),[r,l]=o.useState(!1),i=()=>{l(!0),setTimeout(()=>{l(!1),t(!1)},2e3)};return e.jsxs(e.Fragment,{children:[e.jsx(n,{onClick:()=>t(!0),children:"异步关闭"}),e.jsx(a,{open:s,onClose:()=>{r||t(!1)},title:"异步操作",footer:e.jsxs(e.Fragment,{children:[e.jsx(n,{variant:"default",onClick:()=>t(!1),disabled:r,children:"取消"}),e.jsx(n,{onClick:i,disabled:r,children:r?"提交中...":"确认"})]}),children:e.jsx("p",{children:"点击确认后模拟异步操作，2 秒后自动关闭。"})})]})}},y={parameters:{docs:{description:{story:"弹窗在屏幕正中显示，适用于需要突出展示的重要信息。"}}},render:()=>{const[s,t]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(n,{onClick:()=>t(!0),children:"居中弹窗"}),e.jsx(a,{open:s,onClose:()=>t(!1),title:"居中对话框",children:e.jsx("p",{children:"此弹窗在屏幕正中显示。"})})]})}};var M,S,N;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '最基础的弹窗用法，通过按钮控制弹窗的显示与隐藏。'
      }
    }
  },
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>打开弹窗</Button>
        <Modal open={open} onClose={() => setOpen(false)} title="基础弹窗">
          <p>弹窗内容区域。按 ESC 或点击遮罩层可关闭。</p>
        </Modal>
      </>;
  }
}`,...(N=(S=c.parameters)==null?void 0:S.docs)==null?void 0:N.source}}};var w,F,T;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '自定义底部操作区，常用于二次确认场景。'
      }
    }
  },
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>带底部按钮</Button>
        <Modal open={open} onClose={() => setOpen(false)} title="确认操作" footer={<>
              <Button variant="default" onClick={() => setOpen(false)}>取消</Button>
              <Button onClick={() => {
          handleConfirm('已确认');
          setOpen(false);
        }}>确认</Button>
            </>}>
          <p>确定要继续执行该操作吗？</p>
        </Modal>
      </>;
  }
}`,...(T=(F=p.parameters)==null?void 0:F.docs)==null?void 0:T.source}}};var E,_,q;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '通过 width 属性自定义弹窗宽度，适用于内容较宽的场景。'
      }
    }
  },
  render: () => {
    const [open, setOpen] = useState(false);
    // Default width for demo; could be made dynamic via a slider/input control
    const modalWidth = 800;
    return <>
        <Button onClick={() => setOpen(true)}>宽弹窗</Button>
        <Modal open={open} onClose={() => setOpen(false)} title="宽弹窗" width={modalWidth}>
          <p>此弹窗宽度为 {modalWidth}px。</p>
        </Modal>
      </>;
  }
}`,...(q=(_=u.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var R,V,W;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '禁止点击遮罩层关闭弹窗，适用于必须用户明确操作才能关闭的场景。'
      }
    }
  },
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>点击遮罩不可关闭</Button>
        <Modal open={open} onClose={() => setOpen(false)} title="点击遮罩不可关闭" maskClosable={false}>
          <p>必须使用按钮来关闭此弹窗。</p>
        </Modal>
      </>;
  }
}`,...(W=(V=m.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var H,L,D;f.parameters={...f.parameters,docs:{...(H=f.parameters)==null?void 0:H.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '不显示标题栏的简洁弹窗，适用于纯内容展示场景。'
      }
    }
  },
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>无标题弹窗</Button>
        <Modal open={open} onClose={() => setOpen(false)}>
          <p>不显示标题栏。</p>
        </Modal>
      </>;
  }
}`,...(D=(L=f.parameters)==null?void 0:L.docs)==null?void 0:D.source}}};var I,z,A;x.parameters={...x.parameters,docs:{...(I=x.parameters)==null?void 0:I.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '典型的删除确认弹窗，使用危险色按钮强调操作风险。'
      }
    }
  },
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>确认对话框</Button>
        <Modal open={open} onClose={() => setOpen(false)} title="确认删除" footer={<>
              <Button variant="default" onClick={() => setOpen(false)}>取消</Button>
              <Button className="bg-danger-500 hover:bg-danger-600" onClick={() => {
          handleDelete('已删除');
          setOpen(false);
        }}>删除</Button>
            </>}>
          <p>确定要删除该项目吗？此操作不可撤销。</p>
        </Modal>
      </>;
  }
}`,...(A=(z=x.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var P,K,X;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '模拟异步操作的弹窗，提交时显示加载状态并在完成后关闭。'
      }
    }
  },
  render: () => {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const handleOk = () => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setOpen(false);
      }, 2000);
    };
    return <>
        <Button onClick={() => setOpen(true)}>异步关闭</Button>
        <Modal open={open} onClose={() => {
        if (!loading) setOpen(false);
      }} title="异步操作" footer={<>
              <Button variant="default" onClick={() => setOpen(false)} disabled={loading}>取消</Button>
              <Button onClick={handleOk} disabled={loading}>{loading ? '提交中...' : '确认'}</Button>
            </>}>
          <p>点击确认后模拟异步操作，2 秒后自动关闭。</p>
        </Modal>
      </>;
  }
}`,...(X=(K=h.parameters)==null?void 0:K.docs)==null?void 0:X.source}}};var $,G,J;y.parameters={...y.parameters,docs:{...($=y.parameters)==null?void 0:$.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '弹窗在屏幕正中显示，适用于需要突出展示的重要信息。'
      }
    }
  },
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>居中弹窗</Button>
        <Modal open={open} onClose={() => setOpen(false)} title="居中对话框">
          <p>此弹窗在屏幕正中显示。</p>
        </Modal>
      </>;
  }
}`,...(J=(G=y.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};const je=["Basic","WithFooter","CustomWidth","NotClosable","NoTitle","ConfirmModal","AsyncClose","Centered"];export{h as AsyncClose,c as Basic,y as Centered,x as ConfirmModal,u as CustomWidth,f as NoTitle,m as NotClosable,p as WithFooter,je as __namedExportsOrder,ge as default};
