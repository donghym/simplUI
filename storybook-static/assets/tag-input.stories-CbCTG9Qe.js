import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as l}from"./index-GiUgBvb1.js";import{a as De}from"./utils-BEhiKRD9.js";import{c as We}from"./index-C08JwjkN.js";import{X as $}from"./x-B-5N0Ikz.js";import"./createLucideIcon-CZe00VV7.js";const Xe=We("flex flex-wrap items-center gap-1.5 min-h-[38px] w-full rounded-md border border-gray-400 bg-white px-3 py-1.5 text-sm transition-colors focus-within:outline-none focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50",{variants:{status:{error:"border-danger focus-within:ring-danger",warning:"border-warning focus-within:ring-warning"}},defaultVariants:{}});function He(a,r,o){const m=l.useCallback((s,u)=>{s.dataTransfer.effectAllowed="move",s.dataTransfer.setData("text/plain",String(u)),s.currentTarget.style.opacity="0.5"},[]),b=l.useCallback(s=>{s.currentTarget.style.opacity="1",o(null)},[o]),h=l.useCallback((s,u)=>{s.preventDefault(),s.dataTransfer.dropEffect="move",o(u)},[o]),i=l.useCallback((s,u)=>{s.preventDefault();const g=Number(s.dataTransfer.getData("text/plain"));if(g===u||Number.isNaN(g)){o(null);return}const n=[...a],[f]=n.splice(g,1);f!==void 0&&(n.splice(u,0,f),r(n)),o(null)},[a,r,o]);return{handleDragStart:m,handleDragEnd:b,handleDragOver:h,handleDrop:i}}function Se({tag:a,index:r,disabled:o,readonly:m,draggable:b,dragOverIndex:h,dragHandlers:i,onRemove:s}){const u=()=>{!o&&!m&&s(r)},g=b&&!o&&!m;return e.jsxs("span",{draggable:g,onDragStart:n=>i.handleDragStart(n,r),onDragEnd:i.handleDragEnd,onDragOver:n=>i.handleDragOver(n,r),onDrop:n=>i.handleDrop(n,r),className:De("inline-flex items-center gap-1 rounded bg-primary-50 px-2 py-0.5 text-xs font-medium text-primary-700 border border-primary-200 select-none",g&&"cursor-move",h===r&&"border-dashed border-primary-400"),children:[e.jsx("span",{children:a}),!o&&!m&&e.jsx("button",{type:"button",onClick:u,"aria-label":`删除标签 ${a}`,className:"inline-flex items-center justify-center w-3.5 h-3.5 rounded-full hover:bg-black/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1 transition-colors cursor-pointer",children:e.jsx($,{className:"h-3 w-3","aria-hidden":"true"})})]},`${a}-${r}`)}Se.__docgenInfo={description:"默认标签渲染组件",methods:[],displayName:"DefaultTagRender",props:{tag:{required:!0,tsType:{name:"string"},description:""},index:{required:!0,tsType:{name:"number"},description:""},disabled:{required:!0,tsType:{name:"boolean"},description:""},readonly:{required:!0,tsType:{name:"boolean"},description:""},draggable:{required:!0,tsType:{name:"boolean"},description:""},dragOverIndex:{required:!0,tsType:{name:"union",raw:"number | null",elements:[{name:"number"},{name:"null"}]},description:""},dragHandlers:{required:!0,tsType:{name:"DragHandlers"},description:""},onRemove:{required:!0,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""}}};const Pe=["Enter",","],d=l.forwardRef((a,r)=>{const{className:o,status:m,value:b,defaultValue:h,onChange:i,maxTags:s,placeholder:u="请输入标签",delimiter:g=Pe,disabled:n=!1,readonly:f=!1,tagRender:M,allowDuplicate:F=!1,allowClear:Ve=!1,draggable:Re=!1,...ke}=a,[qe,Ie]=l.useState(h??[]),[w,A]=l.useState(""),[Ee,Ae]=l.useState(null),_=b!==void 0,c=_?b:qe,y=s!==void 0&&c.length>=s,_e=n||f||y,x=l.useCallback(t=>{_||Ie(t),i==null||i(t)},[_,i]),K=l.useCallback(t=>{const p=t.trim();p&&(!F&&c.includes(p)||y||x([...c,p]))},[c,F,y,x]),B=l.useCallback(t=>{const p=c.filter((Ue,Oe)=>Oe!==t);x(p)},[c,x]),Be=l.useCallback(()=>{x([])},[x]),$e=He(c,x,Ae),Me=t=>{if(t.key==="Backspace"&&w===""&&c.length>0&&!f){B(c.length-1);return}g.includes(t.key)&&(t.preventDefault(),K(w),A(""))},Fe=()=>{w.trim()&&(K(w),A(""))},Ke=(t,p)=>M?M(t,()=>B(p)):e.jsx(Se,{tag:t,index:p,disabled:n,readonly:f,draggable:Re,dragOverIndex:Ee,dragHandlers:$e,onRemove:B}),Le=Ve&&c.length>0&&!n&&!f;return e.jsxs("div",{ref:r,className:De(Xe({status:m}),n&&"cursor-not-allowed opacity-50",f&&"bg-muted",o),"aria-invalid":m==="error"||void 0,...ke,children:[c.map((t,p)=>Ke(t,p)),e.jsx("input",{type:"text",value:w,onChange:t=>A(t.target.value),onKeyDown:Me,onBlur:Fe,disabled:_e,placeholder:y?"已达标签上限":u,className:"flex-1 min-w-[80px] border-0 bg-transparent p-0 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed"}),Le&&e.jsx("button",{type:"button",onClick:Be,"aria-label":"清空所有标签",className:"ml-1 inline-flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors cursor-pointer",children:e.jsx($,{className:"h-4 w-4","aria-hidden":"true"})})]})});d.displayName="TagInput";d.__docgenInfo={description:`TagInput 标签输入框组件

输入框与标签展示区组合，支持 Enter/逗号分割生成标签、删除标签、数量限制等。
使用 forwardRef 转发容器 div 引用。`,methods:[],displayName:"TagInput",props:{value:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"当前标签值数组（受控模式）"},defaultValue:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"默认标签值数组（非受控模式）"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(tags: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"tags"}],return:{name:"void"}}},description:"标签变化回调，参数为新的标签数组"},maxTags:{required:!1,tsType:{name:"number"},description:"最大标签数量限制。达到上限后输入框禁用，默认无限制"},placeholder:{required:!1,tsType:{name:"string"},description:"输入框占位文本"},delimiter:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"触发创建标签的分隔符。默认按 Enter 和逗号创建"},disabled:{required:!1,tsType:{name:"boolean"},description:"是否禁用。禁用后不可输入和删除标签"},readonly:{required:!1,tsType:{name:"boolean"},description:"是否只读。只读时标签不可删除、不可新增"},status:{required:!1,tsType:{name:"union",raw:"'error' | 'warning'",elements:[{name:"literal",value:"'error'"},{name:"literal",value:"'warning'"}]},description:"输入框状态。error 时边框 danger 色 + aria-invalid，warning 时边框 warning 色"},tagRender:{required:!1,tsType:{name:"signature",type:"function",raw:"(tag: string, onClose: () => void) => ReactNode",signature:{arguments:[{type:{name:"string"},name:"tag"},{type:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},name:"onClose"}],return:{name:"ReactNode"}}},description:"自定义标签渲染函数"},allowDuplicate:{required:!1,tsType:{name:"boolean"},description:"是否允许重复标签。默认 false，重复时忽略"},allowClear:{required:!1,tsType:{name:"boolean"},description:"是否显示清空所有标签的按钮"},draggable:{required:!1,tsType:{name:"boolean"},description:"是否允许拖拽排序标签"}},composes:["Omit","VariantProps"]};const ea={title:"数据录入/TagInput 标签输入框",component:d,tags:["autodocs"],parameters:{layout:"padded"},argTypes:{status:{control:"select",options:["error","warning"],description:"输入框状态，error 时边框 danger 色，warning 时边框 warning 色"},disabled:{control:"boolean",description:"是否禁用"},readonly:{control:"boolean",description:"是否只读"},allowClear:{control:"boolean",description:"是否显示清空所有标签的按钮"},allowDuplicate:{control:"boolean",description:"是否允许重复标签"},maxTags:{control:"number",description:"最大标签数量限制"},placeholder:{control:"text",description:"输入框占位文本"}}},T={args:{placeholder:"输入后按 Enter 创建标签"}},v={args:{defaultValue:["React","TypeScript","Tailwind"],placeholder:"继续添加标签"}},j={render:()=>{const[a,r]=l.useState(["标签一","标签二"]);return e.jsxs("div",{className:"flex flex-col gap-2 max-w-md",children:[e.jsx(d,{value:a,onChange:r,placeholder:"受控模式"}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["当前标签：",a.length>0?a.join("、"):"(空)"]})]})}},N={render:()=>e.jsxs("div",{className:"flex flex-col gap-4 max-w-md",children:[e.jsx(d,{maxTags:3,placeholder:"最多 3 个标签"}),e.jsx(d,{defaultValue:["已有标签"],maxTags:3,placeholder:"还可添加 2 个标签"})]})},C={args:{defaultValue:["不可删除","不可新增"],disabled:!0,placeholder:"禁用状态"}},D={args:{defaultValue:["只读标签一","只读标签二"],readonly:!0,placeholder:"只读状态"}},S={args:{status:"error",defaultValue:["错误标签"],placeholder:"错误状态"}},V={args:{status:"warning",defaultValue:["警告标签"],placeholder:"警告状态"}},R={args:{defaultValue:["标签A","标签B","标签C"],allowClear:!0,placeholder:"点击右侧清空按钮"}},k={render:()=>e.jsxs("div",{className:"flex flex-col gap-4 max-w-md",children:[e.jsxs("div",{children:[e.jsx("p",{className:"mb-1 text-xs text-muted-foreground",children:"不允许重复（默认）"}),e.jsx(d,{defaultValue:["React"],placeholder:"输入 React 试试"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"mb-1 text-xs text-muted-foreground",children:"允许重复"}),e.jsx(d,{allowDuplicate:!0,defaultValue:["React"],placeholder:"输入 React 试试"})]})]})},q={render:()=>e.jsx(d,{defaultValue:["自定义","标签"],placeholder:"自定义标签渲染",tagRender:(a,r)=>e.jsxs("span",{className:"inline-flex items-center gap-1 rounded-full bg-danger-50 px-2.5 py-0.5 text-xs font-medium text-danger-700 border border-danger-200 select-none",children:[a,e.jsx("button",{type:"button",onClick:r,"aria-label":`删除标签 ${a}`,className:"inline-flex items-center justify-center w-3.5 h-3.5 rounded-full hover:bg-black/10 transition-colors cursor-pointer",children:e.jsx($,{className:"h-3 w-3","aria-hidden":"true"})})]})})},I={render:()=>{const[a,r]=l.useState(["设计","前端","后端","测试"]);return e.jsxs("div",{className:"flex flex-col gap-2 max-w-md",children:[e.jsx(d,{value:a,onChange:r,draggable:!0,placeholder:"拖拽标签进行排序"}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["当前顺序：",a.join(" > ")]})]})}},E={render:()=>e.jsxs("div",{className:"flex flex-col gap-4 max-w-md",children:[e.jsxs("div",{children:[e.jsx("label",{className:"mb-1 block text-xs text-muted-foreground",children:"错误状态 + 可清空"}),e.jsx(d,{status:"error",allowClear:!0,defaultValue:["无效标签"],placeholder:"错误 + 清空"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"mb-1 block text-xs text-muted-foreground",children:"警告状态 + 数量限制"}),e.jsx(d,{status:"warning",maxTags:5,defaultValue:["警告"],placeholder:"最多 5 个标签"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"mb-1 block text-xs text-muted-foreground",children:"可清空 + 允许重复"}),e.jsx(d,{allowClear:!0,allowDuplicate:!0,placeholder:"可重复 + 可清空"})]})]})};var L,O,W;T.parameters={...T.parameters,docs:{...(L=T.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    placeholder: '输入后按 Enter 创建标签'
  }
}`,...(W=(O=T.parameters)==null?void 0:O.docs)==null?void 0:W.source}}};var X,H,P;v.parameters={...v.parameters,docs:{...(X=v.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    defaultValue: ['React', 'TypeScript', 'Tailwind'],
    placeholder: '继续添加标签'
  }
}`,...(P=(H=v.parameters)==null?void 0:H.docs)==null?void 0:P.source}}};var U,z,G;j.parameters={...j.parameters,docs:{...(U=j.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => {
    const [tags, setTags] = useState<string[]>(['标签一', '标签二']);
    return <div className="flex flex-col gap-2 max-w-md">
        <TagInput value={tags} onChange={setTags} placeholder="受控模式" />
        <p className="text-sm text-muted-foreground">
          当前标签：{tags.length > 0 ? tags.join('、') : '(空)'}
        </p>
      </div>;
  }
}`,...(G=(z=j.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var J,Q,Y;N.parameters={...N.parameters,docs:{...(J=N.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 max-w-md">
      <TagInput maxTags={3} placeholder="最多 3 个标签" />
      <TagInput defaultValue={['已有标签']} maxTags={3} placeholder="还可添加 2 个标签" />
    </div>
}`,...(Y=(Q=N.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var Z,ee,ae;C.parameters={...C.parameters,docs:{...(Z=C.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    defaultValue: ['不可删除', '不可新增'],
    disabled: true,
    placeholder: '禁用状态'
  }
}`,...(ae=(ee=C.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var re,te,se;D.parameters={...D.parameters,docs:{...(re=D.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    defaultValue: ['只读标签一', '只读标签二'],
    readonly: true,
    placeholder: '只读状态'
  }
}`,...(se=(te=D.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};var ne,le,oe;S.parameters={...S.parameters,docs:{...(ne=S.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    status: 'error',
    defaultValue: ['错误标签'],
    placeholder: '错误状态'
  }
}`,...(oe=(le=S.parameters)==null?void 0:le.docs)==null?void 0:oe.source}}};var de,ie,ce;V.parameters={...V.parameters,docs:{...(de=V.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    status: 'warning',
    defaultValue: ['警告标签'],
    placeholder: '警告状态'
  }
}`,...(ce=(ie=V.parameters)==null?void 0:ie.docs)==null?void 0:ce.source}}};var ue,pe,me;R.parameters={...R.parameters,docs:{...(ue=R.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    defaultValue: ['标签A', '标签B', '标签C'],
    allowClear: true,
    placeholder: '点击右侧清空按钮'
  }
}`,...(me=(pe=R.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var ge,fe,xe;k.parameters={...k.parameters,docs:{...(ge=k.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 max-w-md">
      <div>
        <p className="mb-1 text-xs text-muted-foreground">不允许重复（默认）</p>
        <TagInput defaultValue={['React']} placeholder="输入 React 试试" />
      </div>
      <div>
        <p className="mb-1 text-xs text-muted-foreground">允许重复</p>
        <TagInput allowDuplicate defaultValue={['React']} placeholder="输入 React 试试" />
      </div>
    </div>
}`,...(xe=(fe=k.parameters)==null?void 0:fe.docs)==null?void 0:xe.source}}};var be,he,we;q.parameters={...q.parameters,docs:{...(be=q.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: () => <TagInput defaultValue={['自定义', '标签']} placeholder="自定义标签渲染" tagRender={(tag, onClose) => <span className="inline-flex items-center gap-1 rounded-full bg-danger-50 px-2.5 py-0.5 text-xs font-medium text-danger-700 border border-danger-200 select-none">
          {tag}
          <button type="button" onClick={onClose} aria-label={\`删除标签 \${tag}\`} className="inline-flex items-center justify-center w-3.5 h-3.5 rounded-full hover:bg-black/10 transition-colors cursor-pointer">
            <X className="h-3 w-3" aria-hidden="true" />
          </button>
        </span>} />
}`,...(we=(he=q.parameters)==null?void 0:he.docs)==null?void 0:we.source}}};var ye,Te,ve;I.parameters={...I.parameters,docs:{...(ye=I.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  render: () => {
    const [tags, setTags] = useState<string[]>(['设计', '前端', '后端', '测试']);
    return <div className="flex flex-col gap-2 max-w-md">
        <TagInput value={tags} onChange={setTags} draggable placeholder="拖拽标签进行排序" />
        <p className="text-sm text-muted-foreground">
          当前顺序：{tags.join(' > ')}
        </p>
      </div>;
  }
}`,...(ve=(Te=I.parameters)==null?void 0:Te.docs)==null?void 0:ve.source}}};var je,Ne,Ce;E.parameters={...E.parameters,docs:{...(je=E.parameters)==null?void 0:je.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 max-w-md">
      <div>
        <label className="mb-1 block text-xs text-muted-foreground">错误状态 + 可清空</label>
        <TagInput status="error" allowClear defaultValue={['无效标签']} placeholder="错误 + 清空" />
      </div>
      <div>
        <label className="mb-1 block text-xs text-muted-foreground">警告状态 + 数量限制</label>
        <TagInput status="warning" maxTags={5} defaultValue={['警告']} placeholder="最多 5 个标签" />
      </div>
      <div>
        <label className="mb-1 block text-xs text-muted-foreground">可清空 + 允许重复</label>
        <TagInput allowClear allowDuplicate placeholder="可重复 + 可清空" />
      </div>
    </div>
}`,...(Ce=(Ne=E.parameters)==null?void 0:Ne.docs)==null?void 0:Ce.source}}};const aa=["Basic","DefaultValue","Controlled","MaxTags","Disabled","Readonly","StatusError","StatusWarning","AllowClear","AllowDuplicate","CustomTagRender","DragSort","CombinedFeatures"];export{R as AllowClear,k as AllowDuplicate,T as Basic,E as CombinedFeatures,j as Controlled,q as CustomTagRender,v as DefaultValue,C as Disabled,I as DragSort,N as MaxTags,D as Readonly,S as StatusError,V as StatusWarning,aa as __namedExportsOrder,ea as default};
