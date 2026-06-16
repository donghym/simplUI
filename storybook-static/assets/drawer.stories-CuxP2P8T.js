import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as s}from"./index-GiUgBvb1.js";import{a as G}from"./utils-BEhiKRD9.js";import{c as $}from"./index-C08JwjkN.js";import{X as J}from"./x-B-5N0Ikz.js";import{B as o}from"./index-WhxK0hy4.js";import"./createLucideIcon-CZe00VV7.js";import"./loader-circle-CulI208u.js";const Q=$("fixed z-50 bg-white shadow-xl flex flex-col transition-transform duration-300",{variants:{placement:{left:"inset-y-0 left-0 rounded-r-lg",right:"inset-y-0 right-0 rounded-l-lg",top:"inset-x-0 top-0 rounded-b-lg",bottom:"inset-x-0 bottom-0 rounded-t-lg"}},defaultVariants:{placement:"right"}}),U=$("fixed inset-0 z-40 bg-black/50 transition-opacity",{variants:{visible:{true:"opacity-100",false:"opacity-0 pointer-events-none"}},defaultVariants:{visible:!0}}),n=s.forwardRef(({open:r,onClose:t,title:l,placement:i="right",width:h=378,height:x=378,footer:v,maskClosable:M=!0,closable:j=!0,afterClose:b,className:I,children:P,...W},K)=>{const g=s.useRef(b);g.current=b,s.useEffect(()=>(r?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[r]);const y=s.useCallback(a=>{a.key==="Escape"&&r&&t()},[r,t]);if(s.useEffect(()=>(document.addEventListener("keydown",y),()=>document.removeEventListener("keydown",y)),[y]),s.useEffect(()=>{if(!r&&g.current){const a=setTimeout(g.current,200);return()=>clearTimeout(a)}},[r]),!r)return null;const X=()=>{M&&t()},A=i==="left"||i==="right"?typeof h=="number"?`w-[${h}px]`:`w-[${String(h)}]`:typeof x=="number"?`h-[${x}px]`:`h-[${String(x)}]`;return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:U({visible:r}),onClick:X}),e.jsxs("div",{ref:K,role:"dialog","aria-modal":"true",className:G(Q({placement:i}),A,I),onClick:a=>a.stopPropagation(),...W,children:[(l||j)&&e.jsxs("div",{className:"flex items-center justify-between px-6 py-4 border-b border-border shrink-0",children:[e.jsx("h3",{className:"text-lg font-semibold text-foreground",children:l}),j&&e.jsx("button",{type:"button",onClick:t,"aria-label":"关闭",className:"ml-auto text-muted-foreground hover:text-foreground transition-colors",children:e.jsx(J,{size:20})})]}),e.jsx("div",{className:"flex-1 px-6 py-4 overflow-auto",children:P}),v!==void 0&&e.jsx("div",{className:"flex items-center justify-end gap-2 px-6 py-4 border-t border-border shrink-0",children:v})]})]})});n.displayName="Drawer";n.__docgenInfo={description:`Drawer 抽屉面板

从屏幕边缘滑入的面板，支持四个方向弹出、ESC 关闭和遮罩点击关闭。`,methods:[],displayName:"Drawer",props:{open:{required:!0,tsType:{name:"boolean"},description:"抽屉是否可见，受控"},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"关闭回调（点击遮罩层或关闭按钮时触发）"},title:{required:!1,tsType:{name:"ReactNode"},description:"抽屉标题"},placement:{required:!1,tsType:{name:"union",raw:"'left' | 'right' | 'top' | 'bottom'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"},{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"}]},description:"抽屉弹出位置，默认 right",defaultValue:{value:"'right'",computed:!1}},width:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"抽屉宽度（left/right 放置时生效），默认 378",defaultValue:{value:"378",computed:!1}},height:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"抽屉高度（top/bottom 放置时生效），默认 378",defaultValue:{value:"378",computed:!1}},footer:{required:!1,tsType:{name:"ReactNode"},description:"底部操作区内容，不传时为空"},maskClosable:{required:!1,tsType:{name:"boolean"},description:"点击遮罩层是否关闭，默认 true",defaultValue:{value:"true",computed:!1}},closable:{required:!1,tsType:{name:"boolean"},description:"是否显示关闭按钮，默认 true",defaultValue:{value:"true",computed:!1}},afterClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"关闭动画完成后的回调，延迟 200ms 触发"},className:{required:!1,tsType:{name:"string"},description:"自定义类名"}},composes:["Omit","VariantProps"]};const Y=r=>e.jsx("div",{style:{display:"flex",alignItems:"flex-start",justifyContent:"center",minHeight:"500px",width:"100%",paddingTop:"40px"},children:e.jsx(r,{})}),le={title:"反馈/Drawer 抽屉",component:n,tags:["autodocs"],decorators:[Y],parameters:{layout:"padded",docs:{description:{component:`抽屉用于从屏幕边缘滑出的浮层面板，承载复杂的表单或详情信息。

- 适用于设置面板、详情查看、多层导航等需要侧向空间的场景
- 支持 left、right、top、bottom 四个方向弹出
- 可自定义宽高、底部操作区及遮罩层关闭行为`}}},argTypes:{placement:{control:"select",options:["left","right","top","bottom"],description:"抽屉弹出位置，默认 right"},open:{control:"boolean",description:"抽屉是否可见，受控"},title:{control:"text",description:"抽屉标题"},width:{control:"number",description:"抽屉宽度（left/right 放置时生效），默认 378"},height:{control:"number",description:"抽屉高度（top/bottom 放置时生效），默认 378"},maskClosable:{control:"boolean",description:"点击遮罩层是否关闭，默认 true"},closable:{control:"boolean",description:"是否显示关闭按钮，默认 true"}}},c={parameters:{docs:{description:{story:"最基础的抽屉用法，从右侧滑出，适用于大多数详情展示场景。"}}},render:()=>{const[r,t]=s.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(o,{onClick:()=>t(!0),children:"打开抽屉"}),e.jsx(n,{open:r,onClose:()=>t(!1),title:"基础抽屉",placement:"right",children:e.jsx("div",{style:{minHeight:"500px"},children:e.jsx("p",{children:"抽屉内容从右侧滑入。"})})})]})}},p={parameters:{docs:{description:{story:"从左侧滑出的抽屉，适用于导航菜单或层级选择场景。"}}},render:()=>{const[r,t]=s.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(o,{onClick:()=>t(!0),children:"从左侧打开"}),e.jsx(n,{open:r,onClose:()=>t(!1),title:"左侧抽屉",placement:"left",children:e.jsx("div",{style:{minHeight:"500px"},children:e.jsx("p",{children:"从屏幕左侧滑入。"})})})]})}},d={parameters:{docs:{description:{story:"从顶部滑出的抽屉，适用于搜索面板或筛选条件展示。"}}},render:()=>{const[r,t]=s.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(o,{onClick:()=>t(!0),children:"从顶部打开"}),e.jsx(n,{open:r,onClose:()=>t(!1),title:"顶部抽屉",placement:"top",height:300,children:e.jsx("div",{style:{minHeight:"500px"},children:e.jsx("p",{children:"从屏幕顶部滑入。"})})})]})}},u={parameters:{docs:{description:{story:"带底部操作按钮的抽屉，常用于表单编辑后的保存与取消操作。"}}},render:()=>{const[r,t]=s.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(o,{onClick:()=>t(!0),children:"带底部按钮"}),e.jsx(n,{open:r,onClose:()=>t(!1),title:"设置",footer:e.jsxs(e.Fragment,{children:[e.jsx(o,{variant:"default",onClick:()=>t(!1),children:"取消"}),e.jsx(o,{onClick:()=>t(!1),children:"保存"})]}),children:e.jsx("div",{style:{minHeight:"500px"},children:e.jsx("p",{children:"抽屉主体内容，底部带有操作按钮。"})})})]})}},m={parameters:{docs:{description:{story:"从底部滑出的抽屉，适用于移动端操作面板或底部表单。"}}},render:()=>{const[r,t]=s.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(o,{onClick:()=>t(!0),children:"从底部打开"}),e.jsx(n,{open:r,onClose:()=>t(!1),title:"底部抽屉",placement:"bottom",height:300,children:e.jsx("div",{style:{minHeight:"500px"},children:e.jsx("p",{children:"从屏幕底部滑入。"})})})]})}},f={parameters:{docs:{description:{story:"多层抽屉嵌套，适用于复杂的多级详情或设置场景。"}}},render:()=>{const[r,t]=s.useState(!1),[l,i]=s.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(o,{onClick:()=>t(!0),children:"打开抽屉"}),e.jsx(n,{open:r,onClose:()=>t(!1),title:"第一层抽屉",placement:"right",children:e.jsxs("div",{style:{minHeight:"500px"},children:[e.jsx("p",{children:"这是第一层抽屉的内容。"}),e.jsx(o,{onClick:()=>i(!0),className:"mt-4",children:"打开第二层"})]})}),e.jsx(n,{open:l,onClose:()=>i(!1),title:"第二层抽屉",placement:"right",children:e.jsx("div",{style:{minHeight:"500px"},children:e.jsx("p",{children:"这是第二层抽屉的内容，关闭后回到第一层。"})})})]})}};var C,w,k;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '最基础的抽屉用法，从右侧滑出，适用于大多数详情展示场景。'
      }
    }
  },
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>打开抽屉</Button>
        <Drawer open={open} onClose={() => setOpen(false)} title="基础抽屉" placement="right">
          <div style={{
          minHeight: '500px'
        }}>
            <p>抽屉内容从右侧滑入。</p>
          </div>
        </Drawer>
      </>;
  }
}`,...(k=(w=c.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var O,S,B;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '从左侧滑出的抽屉，适用于导航菜单或层级选择场景。'
      }
    }
  },
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>从左侧打开</Button>
        <Drawer open={open} onClose={() => setOpen(false)} title="左侧抽屉" placement="left">
          <div style={{
          minHeight: '500px'
        }}>
            <p>从屏幕左侧滑入。</p>
          </div>
        </Drawer>
      </>;
  }
}`,...(B=(S=p.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};var D,H,T;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '从顶部滑出的抽屉，适用于搜索面板或筛选条件展示。'
      }
    }
  },
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>从顶部打开</Button>
        <Drawer open={open} onClose={() => setOpen(false)} title="顶部抽屉" placement="top" height={300}>
          <div style={{
          minHeight: '500px'
        }}>
            <p>从屏幕顶部滑入。</p>
          </div>
        </Drawer>
      </>;
  }
}`,...(T=(H=d.parameters)==null?void 0:H.docs)==null?void 0:T.source}}};var N,q,E;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '带底部操作按钮的抽屉，常用于表单编辑后的保存与取消操作。'
      }
    }
  },
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>带底部按钮</Button>
        <Drawer open={open} onClose={() => setOpen(false)} title="设置" footer={<>
              <Button variant="default" onClick={() => setOpen(false)}>取消</Button>
              <Button onClick={() => setOpen(false)}>保存</Button>
            </>}>
          <div style={{
          minHeight: '500px'
        }}>
            <p>抽屉主体内容，底部带有操作按钮。</p>
          </div>
        </Drawer>
      </>;
  }
}`,...(E=(q=u.parameters)==null?void 0:q.docs)==null?void 0:E.source}}};var F,V,R;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '从底部滑出的抽屉，适用于移动端操作面板或底部表单。'
      }
    }
  },
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>从底部打开</Button>
        <Drawer open={open} onClose={() => setOpen(false)} title="底部抽屉" placement="bottom" height={300}>
          <div style={{
          minHeight: '500px'
        }}>
            <p>从屏幕底部滑入。</p>
          </div>
        </Drawer>
      </>;
  }
}`,...(R=(V=m.parameters)==null?void 0:V.docs)==null?void 0:R.source}}};var L,z,_;f.parameters={...f.parameters,docs:{...(L=f.parameters)==null?void 0:L.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '多层抽屉嵌套，适用于复杂的多级详情或设置场景。'
      }
    }
  },
  render: () => {
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    return <>
        <Button onClick={() => setOpen1(true)}>打开抽屉</Button>
        <Drawer open={open1} onClose={() => setOpen1(false)} title="第一层抽屉" placement="right">
          <div style={{
          minHeight: '500px'
        }}>
            <p>这是第一层抽屉的内容。</p>
            <Button onClick={() => setOpen2(true)} className="mt-4">打开第二层</Button>
          </div>
        </Drawer>
        <Drawer open={open2} onClose={() => setOpen2(false)} title="第二层抽屉" placement="right">
          <div style={{
          minHeight: '500px'
        }}>
            <p>这是第二层抽屉的内容，关闭后回到第一层。</p>
          </div>
        </Drawer>
      </>;
  }
}`,...(_=(z=f.parameters)==null?void 0:z.docs)==null?void 0:_.source}}};const ce=["Right","Left","Top","WithFooter","Bottom","MultiLayer"];export{m as Bottom,p as Left,f as MultiLayer,c as Right,d as Top,u as WithFooter,ce as __namedExportsOrder,le as default};
