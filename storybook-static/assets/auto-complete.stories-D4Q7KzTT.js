import{j as t}from"./jsx-runtime-CDt2p4po.js";import{r as o}from"./index-GiUgBvb1.js";import{a as H}from"./utils-BEhiKRD9.js";import{c as J}from"./index-C08JwjkN.js";import{X as Me}from"./x-B-5N0Ikz.js";import{B as _e}from"./index-WhxK0hy4.js";import"./createLucideIcon-CZe00VV7.js";import"./loader-circle-CulI208u.js";const ze=J("flex h-[40px] w-full rounded-md border border-gray-400 bg-white px-3 text-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50",{variants:{status:{error:"border-danger-500 focus-visible:ring-danger-500",warning:"border-warning-500 focus-visible:ring-warning-500"}},defaultVariants:{}}),We=J("absolute z-50 w-full mt-1 rounded-md border border-border bg-background shadow-lg overflow-y-auto py-1",{variants:{open:{true:"opacity-100 translate-y-0",false:"opacity-0 translate-y-[-4px] pointer-events-none"}},defaultVariants:{open:!1}}),$e=J("px-3 py-2 text-sm cursor-pointer transition-colors select-none flex items-center justify-between gap-2",{variants:{highlighted:{true:"bg-muted"},selected:{true:"bg-primary-500/10 text-primary-500"},disabled:{true:"opacity-50 cursor-not-allowed pointer-events-none"}},compoundVariants:[{highlighted:!0,selected:!0,className:"bg-primary-500/20"}],defaultVariants:{}});function Je(r){return r?r.map(a=>typeof a=="string"?{value:a,label:a}:a):[]}function Ke(r,a){return(typeof a.label=="string"?a.label:a.value).toLowerCase().includes(r.toLowerCase())}function Re({options:r,currentValue:a,highlightedIndex:l,notFoundContent:p,maxDropdownHeight:i,dropdownClassName:g,optionRender:u,onSelect:c,onHighlight:d,dropdownRef:v}){return t.jsx("div",{ref:v,role:"listbox",style:{maxHeight:i},className:H(We({open:!0}),g),children:r.length===0?t.jsx("div",{className:"px-3 py-2 text-sm text-muted-foreground",children:p}):r.map((s,b)=>{const x=s.value===a,w=b===l,E={option:s,index:b,isSelected:x,isHighlighted:w};return t.jsx("div",{role:"option","aria-selected":x,"aria-disabled":s.disabled,className:H($e({highlighted:w,selected:x,disabled:s.disabled})),onClick:()=>c(s),onMouseEnter:()=>d(b),children:u?u(E):s.label??s.value},s.value)})})}Re.__docgenInfo={description:"下拉菜单组件",methods:[],displayName:"AutoCompleteDropdown",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"AutoCompleteOption"}],raw:"AutoCompleteOption[]"},description:""},currentValue:{required:!0,tsType:{name:"string"},description:""},highlightedIndex:{required:!0,tsType:{name:"number"},description:""},notFoundContent:{required:!0,tsType:{name:"ReactNode"},description:""},maxDropdownHeight:{required:!0,tsType:{name:"number"},description:""},dropdownClassName:{required:!1,tsType:{name:"string"},description:""},optionRender:{required:!1,tsType:{name:"signature",type:"function",raw:"(props: AutoCompleteOptionRenderProps) => ReactNode",signature:{arguments:[{type:{name:"AutoCompleteOptionRenderProps"},name:"props"}],return:{name:"ReactNode"}}},description:""},onSelect:{required:!0,tsType:{name:"signature",type:"function",raw:"(option: AutoCompleteOption) => void",signature:{arguments:[{type:{name:"AutoCompleteOption"},name:"option"}],return:{name:"void"}}},description:""},onHighlight:{required:!0,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""},dropdownRef:{required:!0,tsType:{name:"ReactRefObject",raw:"React.RefObject<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:""}}};const y=o.forwardRef((r,a)=>{const{className:l,dropdownClassName:p,status:i,options:g=[],onSearch:u,onSelect:c,onChange:d,open:v,onOpenChange:s,defaultOpen:b=!1,defaultValue:x="",value:w,allowClear:E,disabled:C,optionRender:Ne,notFoundContent:Ae="无匹配结果",maxDropdownHeight:Se=256,minSearchLength:O=0,clearOnSelect:Ve=!1,filterOption:K=Ke,prefix:P,suffix:B,placeholder:Te,...je}=r,T=o.useRef(null),F=o.useRef(null),[qe,ke]=o.useState(x),[De,Le]=o.useState(b),[M,R]=o.useState(-1),_=w!==void 0,z=v!==void 0,m=_?w:qe,N=z?v:De,U=Je(g),h=U.filter(e=>m.length<O?!1:K(m,e)),f=o.useCallback(e=>{z||Le(e),s==null||s(e)},[z,s]),W=o.useCallback(e=>{_||ke(e),d==null||d(e)},[_,d]),Ie=e=>{const n=e.target.value;W(n),u==null||u(n);const Be=U.filter(Fe=>n.length<O?!1:K(n,Fe));n.length>=O&&Be.length>0&&f(!0),R(-1)},X=e=>{e.disabled||(W(Ve?"":e.value),c==null||c(e.value,e),f(!1),R(-1))},He=()=>{var e;C||(W(""),u==null||u(""),(e=T.current)==null||e.focus())},Ee=e=>{if(!N||h.length===0){(e.key==="ArrowDown"||e.key==="ArrowUp")&&(e.preventDefault(),f(!0));return}switch(e.key){case"ArrowDown":e.preventDefault(),R(n=>n<h.length-1?n+1:0);break;case"ArrowUp":e.preventDefault(),R(n=>n>0?n-1:h.length-1);break;case"Enter":if(e.preventDefault(),M>=0){const n=h[M];n&&X(n)}break;case"Escape":e.preventDefault(),f(!1);break}};o.useEffect(()=>{if(!N)return;const e=n=>{T.current&&!T.current.contains(n.target)&&F.current&&!F.current.contains(n.target)&&f(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[N,f]);const $=E&&m.length>0&&!C,Pe=N&&!C&&m.length>=O;return t.jsxs("div",{className:H("sui-auto-complete","relative w-full",l),children:[P&&t.jsx("span",{className:"pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground",children:P}),t.jsx("input",{ref:e=>{T.current=e,typeof a=="function"?a(e):a&&(a.current=e)},type:"text",value:m,onChange:Ie,onFocus:()=>{!C&&m.length>=O&&h.length>0&&f(!0)},onKeyDown:Ee,disabled:C,placeholder:Te,"aria-invalid":i==="error"||void 0,"aria-expanded":N,"aria-autocomplete":"list",role:"combobox",className:H(ze({status:i}),P&&"pl-9",(B||$)&&"pr-9"),...je}),(B||$)&&t.jsxs("span",{className:"pointer-events-auto absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 text-muted-foreground",children:[$&&t.jsx("button",{type:"button",onClick:He,"aria-label":"清空",className:"hover:text-foreground",children:t.jsx(Me,{className:"h-4 w-4"})}),B]}),Pe&&t.jsx(Re,{options:h,currentValue:m,highlightedIndex:M,notFoundContent:Ae,maxDropdownHeight:Se,dropdownClassName:p,optionRender:Ne,onSelect:X,onHighlight:R,dropdownRef:F})]})});y.displayName="AutoComplete";y.__docgenInfo={description:"",methods:[],displayName:"AutoComplete",props:{status:{required:!1,tsType:{name:"union",raw:"'error' | 'warning'",elements:[{name:"literal",value:"'error'"},{name:"literal",value:"'warning'"}]},description:"输入框状态。error 时边框 danger 色 + aria-invalid，warning 时边框 warning 色"},options:{required:!1,tsType:{name:"Array",elements:[{name:"union",raw:"string | AutoCompleteOption",elements:[{name:"string"},{name:"AutoCompleteOption"}]}],raw:"Array<string | AutoCompleteOption>"},description:"选项数据源，可以是字符串数组或 AutoCompleteOption 数组"},onSearch:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"输入值变化时的回调，返回新的输入值"},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string, option: AutoCompleteOption) => void",signature:{arguments:[{type:{name:"string"},name:"value"},{type:{name:"AutoCompleteOption"},name:"option"}],return:{name:"void"}}},description:"选中选项时的回调，返回选中的值"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"输入值变化时的回调"},open:{required:!1,tsType:{name:"boolean"},description:"下拉菜单是否可见，受控模式"},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:"下拉菜单显隐变化回调"},defaultOpen:{required:!1,tsType:{name:"boolean"},description:"默认下拉菜单是否可见，非受控模式"},defaultValue:{required:!1,tsType:{name:"string"},description:"输入框默认值，非受控模式"},value:{required:!1,tsType:{name:"string"},description:"输入框值，受控模式"},allowClear:{required:!1,tsType:{name:"boolean"},description:"是否允许清空，true 时显示清空按钮"},disabled:{required:!1,tsType:{name:"boolean"},description:"是否禁用"},optionRender:{required:!1,tsType:{name:"signature",type:"function",raw:"(props: AutoCompleteOptionRenderProps) => ReactNode",signature:{arguments:[{type:{name:"AutoCompleteOptionRenderProps"},name:"props"}],return:{name:"ReactNode"}}},description:"自定义选项渲染函数"},notFoundContent:{required:!1,tsType:{name:"ReactNode"},description:"下拉菜单为空时的提示内容"},maxDropdownHeight:{required:!1,tsType:{name:"number"},description:"下拉菜单最大高度，默认 256px"},minSearchLength:{required:!1,tsType:{name:"number"},description:"触发搜索的最小字符数，默认 0"},clearOnSelect:{required:!1,tsType:{name:"boolean"},description:"是否在选中后清空输入框，默认 false"},filterOption:{required:!1,tsType:{name:"signature",type:"function",raw:"(inputValue: string, option: AutoCompleteOption) => boolean",signature:{arguments:[{type:{name:"string"},name:"inputValue"},{type:{name:"AutoCompleteOption"},name:"option"}],return:{name:"boolean"}}},description:"自定义过滤函数，返回 true 表示匹配"},prefix:{required:!1,tsType:{name:"ReactNode"},description:"输入框前缀内容"},suffix:{required:!1,tsType:{name:"ReactNode"},description:"输入框后缀内容"},className:{required:!1,tsType:{name:"string"},description:"自定义 className，通过 cn() + twMerge 合并"},dropdownClassName:{required:!1,tsType:{name:"string"},description:"下拉菜单的 className"}},composes:["Omit","VariantProps"]};const at={title:"数据录入/AutoComplete 自动完成",component:y,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"自动完成用于根据用户输入提供实时建议。适用于搜索框、地址输入、标签补全等需要快速匹配选项的场景，支持本地过滤和远程搜索。"}}},argTypes:{options:{control:"object",description:"选项数据源，可以是字符串数组或 AutoCompleteOption 数组"},disabled:{control:"boolean",description:"是否禁用输入框"},allowClear:{control:"boolean",description:"是否允许清空输入内容，true 时显示清空按钮"},onSearch:{control:"text",description:"输入值变化时的回调，返回新的输入值"}}},V=[{value:"苹果"},{value:"香蕉"},{value:"樱桃"},{value:"枣"},{value:"接骨木"}],j={args:{options:V,placeholder:"输入以搜索..."}},q={args:{options:V,defaultValue:"苹果"}},k={args:{options:V,disabled:!0}},D={args:{options:V,allowClear:!0,defaultValue:"香蕉"}},L={args:{options:[{value:"react",label:"React - JavaScript 库"},{value:"vue",label:"Vue - 渐进式框架"},{value:"angular",label:"Angular - TypeScript 框架"}],placeholder:"搜索框架..."}},I={parameters:{docs:{description:{story:"受控模式示例，展示如何通过外部状态管理输入值。"}}},render:()=>{const[r,a]=o.useState("");return t.jsxs("div",{className:"space-y-4",children:[t.jsxs("p",{children:["当前值：",r]}),t.jsx(y,{options:V,value:r,onChange:l=>a(l)})]})}},A={parameters:{docs:{description:{story:"模拟远程搜索场景，输入后延迟加载匹配结果，适用于数据量大或需要实时检索服务端数据的场景。"}}},render:()=>{const[r,a]=o.useState(""),[l,p]=o.useState(!1),[i,g]=o.useState([]),u=[{value:"北京"},{value:"上海"},{value:"广州"},{value:"深圳"},{value:"杭州"},{value:"成都"},{value:"武汉"},{value:"南京"},{value:"重庆"},{value:"西安"},{value:"苏州"},{value:"天津"},{value:"长沙"},{value:"郑州"},{value:"东莞"}],c=o.useCallback(d=>{if(!d){g([]),p(!1);return}p(!0),setTimeout(()=>{const v=u.filter(s=>s.value.includes(d));g(v),p(!1)},800)},[]);return t.jsxs("div",{className:"space-y-4 w-72",children:[t.jsx(y,{options:i,value:r,onChange:d=>a(d),onSearch:c,placeholder:"搜索城市...",suffix:l?t.jsx("span",{className:"text-xs text-muted-foreground animate-pulse",children:"搜索中..."}):void 0,filterOption:()=>!0}),t.jsx("p",{className:"text-sm text-gray-500",children:l?"正在搜索...":`共 ${i.length} 个结果`})]})}},S={parameters:{docs:{description:{story:"结合搜索图标和按钮实现自定义搜索输入框布局，适用于顶部搜索栏等复杂交互场景。"}}},render:()=>{const[r,a]=o.useState(""),l=[{value:"React 组件开发"},{value:"React Hooks 教程"},{value:"React 状态管理"},{value:"React 路由配置"},{value:"React 性能优化"},{value:"Vue3 组合式 API"},{value:"Vue3 状态管理 Pinia"},{value:"Angular 依赖注入"}].filter(i=>!r||i.value.toLowerCase().includes(r.toLowerCase())),p=()=>{r&&alert(`搜索：${r}`)};return t.jsxs("div",{className:"space-y-4 w-96",children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:0,border:"1px solid #d9d9d9",borderRadius:6,overflow:"hidden"},children:[t.jsx("span",{style:{display:"flex",alignItems:"center",paddingLeft:10,color:"#bfbfbf"},children:t.jsx("svg",{className:"h-4 w-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"})})}),t.jsx(y,{options:l,value:r,onChange:i=>a(i),placeholder:"搜索技术文章...",style:{flex:1,border:"none",outline:"none"}}),t.jsx(_e,{className:"text-sm",onClick:p,style:{margin:2},children:"搜索"})]}),t.jsx("p",{className:"text-xs text-muted-foreground",children:"带搜索图标前缀和搜索按钮后缀的自动完成输入框"})]})}};var G,Q,Y;j.parameters={...j.parameters,docs:{...(G=j.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    options,
    placeholder: '输入以搜索...'
  }
}`,...(Y=(Q=j.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var Z,ee,te;q.parameters={...q.parameters,docs:{...(Z=q.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    options,
    defaultValue: '苹果'
  }
}`,...(te=(ee=q.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ae,re,ne;k.parameters={...k.parameters,docs:{...(ae=k.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    options,
    disabled: true
  }
}`,...(ne=(re=k.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};var se,oe,le;D.parameters={...D.parameters,docs:{...(se=D.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    options,
    allowClear: true,
    defaultValue: '香蕉'
  }
}`,...(le=(oe=D.parameters)==null?void 0:oe.docs)==null?void 0:le.source}}};var ie,ue,de;L.parameters={...L.parameters,docs:{...(ie=L.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    options: [{
      value: 'react',
      label: 'React - JavaScript 库'
    }, {
      value: 'vue',
      label: 'Vue - 渐进式框架'
    }, {
      value: 'angular',
      label: 'Angular - TypeScript 框架'
    }],
    placeholder: '搜索框架...'
  }
}`,...(de=(ue=L.parameters)==null?void 0:ue.docs)==null?void 0:de.source}}};var pe,ce,me;I.parameters={...I.parameters,docs:{...(pe=I.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '受控模式示例，展示如何通过外部状态管理输入值。'
      }
    }
  },
  render: () => {
    const [value, setValue] = useState('');
    return <div className="space-y-4">
        <p>当前值：{value}</p>
        <AutoComplete options={options} value={value} onChange={v => setValue(v)} />
      </div>;
  }
}`,...(me=(ce=I.parameters)==null?void 0:ce.docs)==null?void 0:me.source}}};var fe,ge,ve,he,ye;A.parameters={...A.parameters,docs:{...(fe=A.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '模拟远程搜索场景，输入后延迟加载匹配结果，适用于数据量大或需要实时检索服务端数据的场景。'
      }
    }
  },
  render: () => {
    const [value, setValue] = useState('');
    const [loading, setLoading] = useState(false);
    const [remoteOptions, setRemoteOptions] = useState<AutoCompleteOption[]>([]);
    const allCities = [{
      value: '北京'
    }, {
      value: '上海'
    }, {
      value: '广州'
    }, {
      value: '深圳'
    }, {
      value: '杭州'
    }, {
      value: '成都'
    }, {
      value: '武汉'
    }, {
      value: '南京'
    }, {
      value: '重庆'
    }, {
      value: '西安'
    }, {
      value: '苏州'
    }, {
      value: '天津'
    }, {
      value: '长沙'
    }, {
      value: '郑州'
    }, {
      value: '东莞'
    }];
    const handleSearch = useCallback((searchValue: string) => {
      if (!searchValue) {
        setRemoteOptions([]);
        setLoading(false);
        return;
      }
      setLoading(true);
      setTimeout(() => {
        const filtered = allCities.filter(c => c.value.includes(searchValue));
        setRemoteOptions(filtered);
        setLoading(false);
      }, 800);
    }, []);
    return <div className="space-y-4 w-72">
        <AutoComplete options={remoteOptions} value={value} onChange={v => setValue(v)} onSearch={handleSearch} placeholder="搜索城市..." suffix={loading ? <span className="text-xs text-muted-foreground animate-pulse">搜索中...</span> : undefined} filterOption={() => true} />
        <p className="text-sm text-gray-500">
          {loading ? '正在搜索...' : \`共 \${remoteOptions.length} 个结果\`}
        </p>
      </div>;
  }
}`,...(ve=(ge=A.parameters)==null?void 0:ge.docs)==null?void 0:ve.source},description:{story:"远程搜索",...(ye=(he=A.parameters)==null?void 0:he.docs)==null?void 0:ye.description}}};var be,xe,we,Ce,Oe;S.parameters={...S.parameters,docs:{...(be=S.parameters)==null?void 0:be.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '结合搜索图标和按钮实现自定义搜索输入框布局，适用于顶部搜索栏等复杂交互场景。'
      }
    }
  },
  render: () => {
    const [value, setValue] = useState('');
    const searchOptions = [{
      value: 'React 组件开发'
    }, {
      value: 'React Hooks 教程'
    }, {
      value: 'React 状态管理'
    }, {
      value: 'React 路由配置'
    }, {
      value: 'React 性能优化'
    }, {
      value: 'Vue3 组合式 API'
    }, {
      value: 'Vue3 状态管理 Pinia'
    }, {
      value: 'Angular 依赖注入'
    }].filter(opt => !value || opt.value.toLowerCase().includes(value.toLowerCase()));
    const handleSearch = () => {
      if (value) {
        alert(\`搜索：\${value}\`);
      }
    };
    return <div className="space-y-4 w-96">
        <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 0,
        border: '1px solid #d9d9d9',
        borderRadius: 6,
        overflow: 'hidden'
      }}>
          <span style={{
          display: 'flex',
          alignItems: 'center',
          paddingLeft: 10,
          color: '#bfbfbf'
        }}>
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </span>
          <AutoComplete options={searchOptions} value={value} onChange={v => setValue(v)} placeholder="搜索技术文章..." style={{
          flex: 1,
          border: 'none',
          outline: 'none'
        }} />
          <Button className="text-sm" onClick={handleSearch} style={{
          margin: 2
        }}>
            搜索
          </Button>
        </div>
        <p className="text-xs text-muted-foreground">带搜索图标前缀和搜索按钮后缀的自动完成输入框</p>
      </div>;
  }
}`,...(we=(xe=S.parameters)==null?void 0:xe.docs)==null?void 0:we.source},description:{story:"自定义输入框",...(Oe=(Ce=S.parameters)==null?void 0:Ce.docs)==null?void 0:Oe.description}}};const rt=["Default","WithDefaultValue","Disabled","AllowClear","CustomOptions","Controlled","RemoteSearch","CustomInput"];export{D as AllowClear,I as Controlled,S as CustomInput,L as CustomOptions,j as Default,k as Disabled,A as RemoteSearch,q as WithDefaultValue,rt as __namedExportsOrder,at as default};
