import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as t}from"./index-GiUgBvb1.js";import{a as Oe}from"./utils-BEhiKRD9.js";import{c as ke}from"./index-C08JwjkN.js";import{B as r}from"./index-WhxK0hy4.js";import{I as _e}from"./index-BJCQqJ4b.js";import{I as We}from"./info-CjH-k_Hj.js";import"./loader-circle-CulI208u.js";import"./createLucideIcon-CZe00VV7.js";import"./x-B-5N0Ikz.js";const $e=ke("absolute z-50 px-3 py-1.5 text-xs text-white bg-foreground rounded-md shadow-md max-w-xs break-words pointer-events-none transition-opacity duration-150",{variants:{placement:{top:"bottom-full left-1/2 -translate-x-1/2 mb-1.5",bottom:"top-full left-1/2 -translate-x-1/2 mt-1.5",left:"right-full top-1/2 -translate-y-1/2 mr-1.5",right:"left-full top-1/2 -translate-y-1/2 ml-1.5"},visible:{true:"opacity-100",false:"opacity-0"}},defaultVariants:{placement:"top",visible:!1}}),ze=ke("absolute w-2 h-2 rotate-45 bg-foreground",{variants:{arrowPlacement:{top:"-bottom-1 left-1/2 -translate-x-1/2",bottom:"-top-1 left-1/2 -translate-x-1/2",left:"-right-1 top-1/2 -translate-y-1/2",right:"-left-1 top-1/2 -translate-y-1/2"}}});function Ke(s){return s==="top"?"bottom":s==="bottom"?"top":s==="left"?"right":"left"}const o=t.forwardRef(({content:s,placement:p="top",trigger:n="hover",arrow:Ne=!0,open:I,defaultOpen:Ce=!1,onOpenChange:d,openDelay:q=100,closeDelay:V=100,children:De,className:Se,...Pe},u)=>{const E=t.useRef(null),f=t.useRef(),h=t.useRef(),Re=t.useCallback(a=>{E.current=a,typeof u=="function"?u(a):u&&(u.current=a)},[u]),P=I!==void 0,[Ie,qe]=t.useState(Ce),i=P?I:Ie,l=t.useCallback(a=>{P||qe(a),d==null||d(a)},[P,d]),c=t.useCallback(()=>{f.current&&(clearTimeout(f.current),f.current=void 0),h.current&&(clearTimeout(h.current),h.current=void 0)},[]),x=t.useCallback(()=>{c(),f.current=setTimeout(()=>{l(!0)},q)},[c,q,l]),b=t.useCallback(()=>{c(),h.current=setTimeout(()=>{l(!1)},V)},[c,V,l]),A=t.useCallback(()=>{c(),l(!1)},[c,l]),Ve=t.useCallback(()=>{n==="hover"&&x()},[n,x]),Ee=t.useCallback(()=>{n==="hover"&&b()},[n,b]),Ae=t.useCallback(()=>{n==="focus"&&x()},[n,x]),Le=t.useCallback(a=>{var L;n==="focus"&&((L=E.current)!=null&&L.contains(a.relatedTarget)||b())},[n,b]),Fe=t.useCallback(()=>{n==="click"&&l(!i)},[n,i,l]),R=t.useCallback(a=>{a.key==="Escape"&&i&&A()},[i,A]);t.useEffect(()=>(document.addEventListener("keydown",R),()=>{document.removeEventListener("keydown",R),c()}),[R,c]);const Me=Ke(p);return e.jsxs("div",{ref:Re,className:"relative inline-block",onMouseEnter:Ve,onMouseLeave:Ee,onFocus:Ae,onBlur:Le,onClick:Fe,"aria-expanded":i,...Pe,children:[De,e.jsxs("div",{role:"tooltip",className:Oe($e({placement:p,visible:i}),Se),children:[s,Ne&&e.jsx("div",{className:ze({arrowPlacement:Me}),"aria-hidden":"true"})]})]})});o.displayName="Tooltip";o.__docgenInfo={description:`Tooltip 文字提示

鼠标悬停、聚焦或点击触发元素时显示文字提示气泡。
支持受控（open/onOpenChange）和非受控（defaultOpen）两种模式。
支持打开/关闭延迟，避免频繁闪烁。`,methods:[],displayName:"Tooltip",props:{content:{required:!0,tsType:{name:"ReactNode"},description:"提示内容，支持 React 节点"},placement:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom' | 'left' | 'right'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"气泡卡片弹出位置。默认 'top'",defaultValue:{value:"'top'",computed:!1}},trigger:{required:!1,tsType:{name:"union",raw:"'hover' | 'focus' | 'click'",elements:[{name:"literal",value:"'hover'"},{name:"literal",value:"'focus'"},{name:"literal",value:"'click'"}]},description:"触发方式。默认 'hover'",defaultValue:{value:"'hover'",computed:!1}},open:{required:!1,tsType:{name:"boolean"},description:"是否受控显示"},defaultOpen:{required:!1,tsType:{name:"boolean"},description:"非受控默认打开状态",defaultValue:{value:"false",computed:!1}},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:"打开/关闭变化时的回调"},arrow:{required:!1,tsType:{name:"boolean"},description:"箭头是否指向目标中心。默认 true",defaultValue:{value:"true",computed:!1}},openDelay:{required:!1,tsType:{name:"number"},description:"气泡卡片打开延迟（毫秒）。默认 100",defaultValue:{value:"100",computed:!1}},closeDelay:{required:!1,tsType:{name:"number"},description:"气泡卡片关闭延迟（毫秒）。默认 100",defaultValue:{value:"100",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"自定义 className，通过 cn() + twMerge 合并"},children:{required:!0,tsType:{name:"ReactNode"},description:"子元素，必须是单个可交互元素"}},composes:["Omit","VariantProps"]};const Ge=s=>e.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",width:"100%"},children:e.jsx(s,{})}),nt={title:"数据展示/Tooltip 文字提示",component:o,tags:["autodocs"],decorators:[Ge],parameters:{layout:"padded",docs:{description:{component:"文字提示用于在鼠标悬停、聚焦或点击时展示简短的辅助说明。适用于图标解释、按钮功能说明、表单提示等场景，支持多种触发方式和弹出位置。"}}},argTypes:{content:{control:"text",description:"提示内容，支持 React 节点"},placement:{control:"select",options:["top","bottom","left","right"],description:"气泡卡片弹出位置，默认 top"},trigger:{control:"select",options:["hover","focus","click"],description:"触发方式，默认 hover"},arrow:{control:"boolean",description:"是否显示箭头，默认 true"},openDelay:{control:"number",description:"气泡卡片打开延迟（毫秒），默认 100"},closeDelay:{control:"number",description:"气泡卡片关闭延迟（毫秒），默认 100"}}},T={render:()=>e.jsx(o,{content:"这是一个提示",children:e.jsx(r,{children:"悬停查看"})})},g={render:()=>e.jsx(o,{content:"上方提示",placement:"top",children:e.jsx(r,{children:"上方"})})},y={render:()=>e.jsx(o,{content:"下方提示",placement:"bottom",children:e.jsx(r,{children:"下方"})})},v={render:()=>e.jsx(o,{content:"左侧提示",placement:"left",children:e.jsx(r,{children:"左侧"})})},j={render:()=>e.jsx(o,{content:"右侧提示",placement:"right",children:e.jsx(r,{children:"右侧"})})},B={render:()=>e.jsx(o,{content:"聚焦触发",trigger:"focus",children:e.jsx(_e,{placeholder:"聚焦查看提示"})})},w={render:()=>e.jsx(o,{content:"点击触发",trigger:"click",children:e.jsx(r,{children:"点击我"})})},k={render:()=>e.jsx(o,{content:"无箭头提示",arrow:!1,children:e.jsx(r,{children:"无箭头"})})},N={render:()=>e.jsx(o,{content:"延迟 500ms 的提示",openDelay:500,closeDelay:500,children:e.jsx(r,{children:"延迟提示"})})},C={render:()=>e.jsx(o,{content:"信息提示",children:e.jsx(We,{className:"h-5 w-5 text-gray-500 cursor-help"})})},D={render:()=>e.jsx(o,{content:e.jsx("span",{className:"font-bold text-primary-500",children:"样式化提示"}),children:e.jsx(r,{children:"富文本内容"})})},S={render:()=>{const s=[{placement:"top",label:"上"},{placement:"bottom",label:"下"},{placement:"left",label:"左"},{placement:"right",label:"右"}];return e.jsx("div",{className:"flex gap-4 items-center justify-center",children:s.map(({placement:p,label:n})=>e.jsx(o,{content:`${n}方提示`,placement:p,children:e.jsx(r,{children:n})},p))})}},m={render:()=>e.jsxs("div",{className:"flex gap-4",children:[e.jsx(o,{content:"深色背景提示",className:"!bg-slate-800 !text-white",children:e.jsx(r,{children:"深色提示"})}),e.jsx(o,{content:"品牌色背景提示",className:"!bg-indigo-600 !text-white",children:e.jsx(r,{children:"品牌色提示"})}),e.jsx(o,{content:"成功色背景提示",className:"!bg-emerald-600 !text-white",children:e.jsx(r,{children:"成功色提示"})})]})};var F,M,O;T.parameters={...T.parameters,docs:{...(F=T.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <Tooltip content="这是一个提示">
      <Button>悬停查看</Button>
    </Tooltip>
}`,...(O=(M=T.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var _,W,$;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <Tooltip content="上方提示" placement="top">
      <Button>上方</Button>
    </Tooltip>
}`,...($=(W=g.parameters)==null?void 0:W.docs)==null?void 0:$.source}}};var z,K,G;y.parameters={...y.parameters,docs:{...(z=y.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <Tooltip content="下方提示" placement="bottom">
      <Button>下方</Button>
    </Tooltip>
}`,...(G=(K=y.parameters)==null?void 0:K.docs)==null?void 0:G.source}}};var H,J,Q;v.parameters={...v.parameters,docs:{...(H=v.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <Tooltip content="左侧提示" placement="left">
      <Button>左侧</Button>
    </Tooltip>
}`,...(Q=(J=v.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var U,X,Y;j.parameters={...j.parameters,docs:{...(U=j.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <Tooltip content="右侧提示" placement="right">
      <Button>右侧</Button>
    </Tooltip>
}`,...(Y=(X=j.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,te;B.parameters={...B.parameters,docs:{...(Z=B.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => <Tooltip content="聚焦触发" trigger="focus">
      <Input placeholder="聚焦查看提示" />
    </Tooltip>
}`,...(te=(ee=B.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var oe,ne,re;w.parameters={...w.parameters,docs:{...(oe=w.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => <Tooltip content="点击触发" trigger="click">
      <Button>点击我</Button>
    </Tooltip>
}`,...(re=(ne=w.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var ae,se,le;k.parameters={...k.parameters,docs:{...(ae=k.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => <Tooltip content="无箭头提示" arrow={false}>
      <Button>无箭头</Button>
    </Tooltip>
}`,...(le=(se=k.parameters)==null?void 0:se.docs)==null?void 0:le.source}}};var ce,ie,pe;N.parameters={...N.parameters,docs:{...(ce=N.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: () => <Tooltip content="延迟 500ms 的提示" openDelay={500} closeDelay={500}>
      <Button>延迟提示</Button>
    </Tooltip>
}`,...(pe=(ie=N.parameters)==null?void 0:ie.docs)==null?void 0:pe.source}}};var ue,me,de;C.parameters={...C.parameters,docs:{...(ue=C.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: () => <Tooltip content="信息提示">
      <Info className="h-5 w-5 text-gray-500 cursor-help" />
    </Tooltip>
}`,...(de=(me=C.parameters)==null?void 0:me.docs)==null?void 0:de.source}}};var fe,he,xe;D.parameters={...D.parameters,docs:{...(fe=D.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  render: () => <Tooltip content={<span className="font-bold text-primary-500">样式化提示</span>}>
      <Button>富文本内容</Button>
    </Tooltip>
}`,...(xe=(he=D.parameters)==null?void 0:he.docs)==null?void 0:xe.source}}};var be,Te,ge;S.parameters={...S.parameters,docs:{...(be=S.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: () => {
    const placements = [{
      placement: 'top' as const,
      label: '上'
    }, {
      placement: 'bottom' as const,
      label: '下'
    }, {
      placement: 'left' as const,
      label: '左'
    }, {
      placement: 'right' as const,
      label: '右'
    }];
    return <div className="flex gap-4 items-center justify-center">
        {placements.map(({
        placement,
        label
      }) => <Tooltip key={placement} content={\`\${label}方提示\`} placement={placement}>
            <Button>{label}</Button>
          </Tooltip>)}
      </div>;
  }
}`,...(ge=(Te=S.parameters)==null?void 0:Te.docs)==null?void 0:ge.source}}};var ye,ve,je,Be,we;m.parameters={...m.parameters,docs:{...(ye=m.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4">
      <Tooltip content="深色背景提示" className="!bg-slate-800 !text-white">
        <Button>深色提示</Button>
      </Tooltip>
      <Tooltip content="品牌色背景提示" className="!bg-indigo-600 !text-white">
        <Button>品牌色提示</Button>
      </Tooltip>
      <Tooltip content="成功色背景提示" className="!bg-emerald-600 !text-white">
        <Button>成功色提示</Button>
      </Tooltip>
    </div>
}`,...(je=(ve=m.parameters)==null?void 0:ve.docs)==null?void 0:je.source},description:{story:"自定义颜色",...(we=(Be=m.parameters)==null?void 0:Be.docs)==null?void 0:we.description}}};const rt=["Default","PlacementTop","PlacementBottom","PlacementLeft","PlacementRight","FocusTrigger","ClickTrigger","NoArrow","WithDelay","IconTrigger","RichContent","AllPlacements","CustomColor"];export{S as AllPlacements,w as ClickTrigger,m as CustomColor,T as Default,B as FocusTrigger,C as IconTrigger,k as NoArrow,y as PlacementBottom,v as PlacementLeft,j as PlacementRight,g as PlacementTop,D as RichContent,N as WithDelay,rt as __namedExportsOrder,nt as default};
