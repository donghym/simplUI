import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as o}from"./index-GiUgBvb1.js";import{a as A}from"./utils-BEhiKRD9.js";import{c as je}from"./index-C08JwjkN.js";import{X as Oe}from"./x-B-5N0Ikz.js";import{c as Ce}from"./createLucideIcon-CZe00VV7.js";import{C as Le}from"./chevron-left-08BNpNZ8.js";import{C as Fe}from"./chevron-right-V463yFHa.js";/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _e=Ce("CalendarDays",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ae=Ce("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]),Be=je("flex h-[40px] w-full rounded-md border border-gray-400 bg-white px-3 text-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 focus-visible:ring-primary-500",{variants:{status:{error:"border-danger-500 focus-visible:ring-danger-500",warning:"border-warning-500 focus-visible:ring-warning-500"}},defaultVariants:{}}),ze=je("aspect-square text-sm rounded flex items-center justify-center transition-colors",{variants:{selected:{true:"bg-primary-500 text-white hover:bg-primary-600",false:"hover:bg-muted"}},defaultVariants:{selected:!1}});function Ke(a,r){return new Date(a,r+1,0).getDate()}function He(a,r){return new Date(a,r,1).getDay()}function B(a,r,n,l,s,d){return a===l&&r===s&&n===d}function Xe(a,r,n){const l=String(r+1).padStart(2,"0"),s=String(n).padStart(2,"0");return`${a}-${l}-${s}`}function z(a){if(!a)return null;const r=a.split("-");if(r.length!==3)return null;const n=parseInt(r[0],10),l=parseInt(r[1],10)-1,s=parseInt(r[2],10);return isNaN(n)||isNaN(l)||isNaN(s)?null:{year:n,month:l,day:s}}const Ge=["日","一","二","三","四","五","六"];function Je(a,r){const n=Ke(a,r),l=He(a,r),s=[];for(let d=0;d<l;d++)s.push(null);for(let d=1;d<=n;d++)s.push(d);for(;s.length%7!==0;)s.push(null);return s}const u=o.forwardRef((a,r)=>{const{className:n,status:l,disabled:s,placeholder:d="请选择日期",allowClear:Ye,prefix:P,value:R,defaultValue:ke,onChange:m,...Me}=a,[E,v]=o.useState(!1),[Ve,W]=o.useState(ke??""),f=R!==void 0,h=f?R??"":Ve,$=new Date,O=$.getFullYear(),L=$.getMonth(),Pe=$.getDate(),c=z(h),[g,T]=o.useState((c==null?void 0:c.year)??O),[i,y]=o.useState((c==null?void 0:c.month)??L),q=o.useRef(null);o.useEffect(()=>{const t=x=>{q.current&&!q.current.contains(x.target)&&v(!1)};if(E)return document.addEventListener("mousedown",t),()=>document.removeEventListener("mousedown",t)},[E]),o.useEffect(()=>{const t=z(h);t&&(T(t.year),y(t.month))},[h]);const Ee=o.useCallback(()=>{s||v(t=>!t)},[s]),$e=o.useCallback(t=>{const x=Xe(g,i,t);f||W(x),m==null||m(x),v(!1)},[g,i,f,m]),Te=o.useCallback(t=>{t.stopPropagation(),!s&&(f||W(""),m==null||m(""))},[s,f,m]),qe=o.useCallback(()=>{i===0?(y(11),T(t=>t-1)):y(t=>t-1)},[i]),Ie=o.useCallback(()=>{i===11?(y(0),T(t=>t+1)):y(t=>t+1)},[i]),F=Ye&&h.length>0&&!s,Re=Je(g,i);return e.jsxs("div",{ref:q,className:"relative w-full",children:[e.jsxs("div",{className:"relative",children:[P&&e.jsx("span",{className:"pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground",children:P}),e.jsx("input",{ref:r,type:"text",readOnly:!0,value:h,placeholder:d,disabled:s,"aria-invalid":l==="error"||void 0,onClick:Ee,onKeyDown:t=>{t.key==="Escape"&&v(!1)},className:A("sui-date-picker",Be({status:l}),P&&"pl-9",F&&"pr-9","cursor-pointer",n),...Me}),e.jsx("span",{className:"absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground flex items-center",children:F?e.jsx("button",{type:"button","aria-label":"清空日期",onClick:Te,className:"hover:text-foreground",children:e.jsx(Oe,{className:"h-4 w-4"})}):e.jsx(Ae,{className:"h-4 w-4"})})]}),E&&!s&&e.jsxs("div",{className:"absolute z-50 mt-1 w-[280px] rounded-md border border-border bg-background p-3 shadow-lg",children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("button",{type:"button",onClick:qe,className:"p-1 rounded hover:bg-muted text-muted-foreground","aria-label":"上个月",children:e.jsx(Le,{className:"h-4 w-4"})}),e.jsxs("span",{className:"text-sm font-medium",children:[g,"年",i+1,"月"]}),e.jsx("button",{type:"button",onClick:Ie,className:"p-1 rounded hover:bg-muted text-muted-foreground","aria-label":"下个月",children:e.jsx(Fe,{className:"h-4 w-4"})})]}),e.jsx("div",{className:"grid grid-cols-7 mb-1",children:Ge.map(t=>e.jsx("div",{className:"text-center text-xs text-muted-foreground py-1",children:t},t))}),e.jsx("div",{className:"grid grid-cols-7",children:Re.map((t,x)=>{if(t===null)return e.jsx("div",{className:"aspect-square"},`empty-${x}`);const _=c?B(c.year,c.month,c.day,g,i,t):!1,We=B(O,L,Pe,g,i,t);return e.jsx("button",{type:"button",onClick:()=>$e(t),className:A(ze({selected:_}),We&&!_&&"text-primary-500 font-semibold"),children:t},t)})})]})]})});u.displayName="DatePicker";u.__docgenInfo={description:"",methods:[],displayName:"DatePicker",props:{value:{required:!1,tsType:{name:"string"},description:"当前选中日期（受控模式），格式为 YYYY-MM-DD"},defaultValue:{required:!1,tsType:{name:"string"},description:"默认选中日期（非受控模式），格式为 YYYY-MM-DD"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(date: string) => void",signature:{arguments:[{type:{name:"string"},name:"date"}],return:{name:"void"}}},description:"日期变化回调，参数为 YYYY-MM-DD 格式字符串，清空时为空字符串"},placeholder:{required:!1,tsType:{name:"string"},description:'占位文本，未选择日期时显示，默认为"请选择日期"'},status:{required:!1,tsType:{name:"union",raw:"'error' | 'warning'",elements:[{name:"literal",value:"'error'"},{name:"literal",value:"'warning'"}]},description:"状态变体：error 显示红色边框和 focus ring，warning 显示黄色边框和 focus ring"},disabled:{required:!1,tsType:{name:"boolean"},description:"是否禁用整个选择器，禁用后不可展开日历面板"},allowClear:{required:!1,tsType:{name:"boolean"},description:"是否显示清空按钮，仅在已选择日期且未禁用时显示"},prefix:{required:!1,tsType:{name:"ReactNode"},description:"输入框左侧前缀图标或文字"},className:{required:!1,tsType:{name:"string"},description:"自定义类名，通过 twMerge 合并覆盖默认样式"}},composes:["Omit","VariantProps"]};const I=new Date,p=`${I.getFullYear()}-${String(I.getMonth()+1).padStart(2,"0")}-${String(I.getDate()).padStart(2,"0")}`,Qe=a=>e.jsx("div",{style:{display:"flex",alignItems:"flex-start",justifyContent:"center",minHeight:"500px",width:"100%",paddingTop:"40px"},children:e.jsx(a,{})}),ot={title:"数据录入/DatePicker 日期选择框",component:u,tags:["autodocs"],decorators:[Qe],parameters:{layout:"padded",docs:{description:{component:"日期选择框用于选择或输入日期。适用于表单日期填写、时间范围筛选、日程安排等场景，支持日期、月份、年份等多种选择模式。"}}},argTypes:{status:{control:"select",options:["error","warning"],description:"校验状态，error 为错误，warning 为警告"}}},N={args:{placeholder:"请选择日期"}},D={args:{defaultValue:p}},S={parameters:{docs:{description:{story:"受控模式示例，展示如何通过外部状态管理日期值。"}}},render:()=>{const[a,r]=o.useState(p);return e.jsxs("div",{className:"flex flex-col gap-2 w-72",children:[e.jsx(u,{value:a,onChange:r}),e.jsxs("p",{className:"text-sm text-gray-500",children:["已选择：",a||"(空)"]})]})}},w={args:{status:"error",defaultValue:p}},b={args:{status:"warning",defaultValue:p}},j={args:{disabled:!0,defaultValue:p}},C={args:{allowClear:!0,defaultValue:p}},Y={args:{prefix:e.jsx(_e,{className:"h-4 w-4"}),defaultValue:p}},k={parameters:{docs:{description:{story:"通过受控模式限制不可选择未来日期，适用于需要禁用特定日期范围的业务场景。"}}},render:()=>{const[a,r]=o.useState(""),n=new Date,l=`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}-${String(n.getDate()).padStart(2,"0")}`;return e.jsxs("div",{className:"flex flex-col gap-2 w-72",children:[e.jsx(u,{value:a,onChange:s=>{s&&s>l||r(s)},placeholder:"不可选择未来日期"}),e.jsx("p",{className:"text-xs text-muted-foreground",children:"未来日期不可选（通过 onChange 过滤）"})]})}},M={parameters:{docs:{description:{story:"使用两个日期选择框组合实现日期范围选择，常用于报表筛选、活动周期设置等场景。"}}},render:()=>{const[a,r]=o.useState(""),[n,l]=o.useState("");return e.jsxs("div",{className:"flex flex-col gap-3 w-72",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(u,{value:a,onChange:r,placeholder:"开始日期"}),e.jsx("span",{className:"text-muted-foreground",children:"~"}),e.jsx(u,{value:n,onChange:l,placeholder:"结束日期"})]}),e.jsxs("p",{className:"text-xs text-muted-foreground",children:["当前范围：",a||"..."," ~ ",n||"..."]})]})}},V={parameters:{docs:{description:{story:"展示日期、月份、年份三种选择模式，根据业务需求选择合适的时间粒度。"}}},render:()=>{const[a,r]=o.useState(""),[n,l]=o.useState(""),[s,d]=o.useState("");return e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{children:[e.jsx("p",{className:"mb-2 text-xs text-muted-foreground",children:"日期选择（YYYY-MM-DD）"}),e.jsx("div",{className:"w-72",children:e.jsx(u,{value:a,onChange:r,placeholder:"选择日期"})}),e.jsxs("p",{className:"mt-1 text-xs text-muted-foreground",children:["已选择：",a||"(空)"]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"mb-2 text-xs text-muted-foreground",children:"月份选择（YYYY-MM）"}),e.jsx("div",{className:"w-72",children:e.jsx(u,{value:n,onChange:l,placeholder:"选择月份"})}),e.jsxs("p",{className:"mt-1 text-xs text-muted-foreground",children:["已选择：",n||"(空)"]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"mb-2 text-xs text-muted-foreground",children:"年份选择（YYYY）"}),e.jsx("div",{className:"w-72",children:e.jsx(u,{value:s,onChange:d,placeholder:"选择年份"})}),e.jsxs("p",{className:"mt-1 text-xs text-muted-foreground",children:["已选择：",s||"(空)"]})]})]})}};var K,H,X;N.parameters={...N.parameters,docs:{...(K=N.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    placeholder: '请选择日期'
  }
}`,...(X=(H=N.parameters)==null?void 0:H.docs)==null?void 0:X.source}}};var G,J,Q;D.parameters={...D.parameters,docs:{...(G=D.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    defaultValue: todayStr
  }
}`,...(Q=(J=D.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var U,Z,ee;S.parameters={...S.parameters,docs:{...(U=S.parameters)==null?void 0:U.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '受控模式示例，展示如何通过外部状态管理日期值。'
      }
    }
  },
  render: () => {
    const [date, setDate] = useState(todayStr);
    return <div className="flex flex-col gap-2 w-72">
        <DatePicker value={date} onChange={setDate} />
        <p className="text-sm text-gray-500">已选择：{date || '(空)'}</p>
      </div>;
  }
}`,...(ee=(Z=S.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ae,se;w.parameters={...w.parameters,docs:{...(te=w.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    status: 'error',
    defaultValue: todayStr
  }
}`,...(se=(ae=w.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var re,ne,oe;b.parameters={...b.parameters,docs:{...(re=b.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    status: 'warning',
    defaultValue: todayStr
  }
}`,...(oe=(ne=b.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var le,de,ce;j.parameters={...j.parameters,docs:{...(le=j.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultValue: todayStr
  }
}`,...(ce=(de=j.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var ie,ue,me;C.parameters={...C.parameters,docs:{...(ie=C.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    allowClear: true,
    defaultValue: todayStr
  }
}`,...(me=(ue=C.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var pe,ge,xe;Y.parameters={...Y.parameters,docs:{...(pe=Y.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    prefix: <CalendarDays className="h-4 w-4" />,
    defaultValue: todayStr
  }
}`,...(xe=(ge=Y.parameters)==null?void 0:ge.docs)==null?void 0:xe.source}}};var fe,he,ye;k.parameters={...k.parameters,docs:{...(fe=k.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '通过受控模式限制不可选择未来日期，适用于需要禁用特定日期范围的业务场景。'
      }
    }
  },
  render: () => {
    const [date, setDate] = useState('');
    const today = new Date();
    const todayStr = \`\${today.getFullYear()}-\${String(today.getMonth() + 1).padStart(2, '0')}-\${String(today.getDate()).padStart(2, '0')}\`;
    return <div className="flex flex-col gap-2 w-72">
        <DatePicker value={date} onChange={v => {
        if (v && v > todayStr) return;
        setDate(v);
      }} placeholder="不可选择未来日期" />
        <p className="text-xs text-muted-foreground">未来日期不可选（通过 onChange 过滤）</p>
      </div>;
  }
}`,...(ye=(he=k.parameters)==null?void 0:he.docs)==null?void 0:ye.source}}};var ve,Ne,De;M.parameters={...M.parameters,docs:{...(ve=M.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '使用两个日期选择框组合实现日期范围选择，常用于报表筛选、活动周期设置等场景。'
      }
    }
  },
  render: () => {
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');
    return <div className="flex flex-col gap-3 w-72">
        <div className="flex items-center gap-2">
          <DatePicker value={start} onChange={setStart} placeholder="开始日期" />
          <span className="text-muted-foreground">~</span>
          <DatePicker value={end} onChange={setEnd} placeholder="结束日期" />
        </div>
        <p className="text-xs text-muted-foreground">
          当前范围：{start || '...'} ~ {end || '...'}
        </p>
      </div>;
  }
}`,...(De=(Ne=M.parameters)==null?void 0:Ne.docs)==null?void 0:De.source}}};var Se,we,be;V.parameters={...V.parameters,docs:{...(Se=V.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '展示日期、月份、年份三种选择模式，根据业务需求选择合适的时间粒度。'
      }
    }
  },
  render: () => {
    const [date, setDate] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    return <div className="flex flex-col gap-6">
        <div>
          <p className="mb-2 text-xs text-muted-foreground">日期选择（YYYY-MM-DD）</p>
          <div className="w-72">
            <DatePicker value={date} onChange={setDate} placeholder="选择日期" />
          </div>
          <p className="mt-1 text-xs text-muted-foreground">已选择：{date || '(空)'}</p>
        </div>
        <div>
          <p className="mb-2 text-xs text-muted-foreground">月份选择（YYYY-MM）</p>
          <div className="w-72">
            <DatePicker value={month} onChange={setMonth} placeholder="选择月份" />
          </div>
          <p className="mt-1 text-xs text-muted-foreground">已选择：{month || '(空)'}</p>
        </div>
        <div>
          <p className="mb-2 text-xs text-muted-foreground">年份选择（YYYY）</p>
          <div className="w-72">
            <DatePicker value={year} onChange={setYear} placeholder="选择年份" />
          </div>
          <p className="mt-1 text-xs text-muted-foreground">已选择：{year || '(空)'}</p>
        </div>
      </div>;
  }
}`,...(be=(we=V.parameters)==null?void 0:we.docs)==null?void 0:be.source}}};const lt=["Basic","WithDefault","Controlled","ErrorStatus","WarningStatus","Disabled","AllowClear","WithPrefix","DisabledDate","RangePicker","DifferentModes"];export{C as AllowClear,N as Basic,S as Controlled,V as DifferentModes,j as Disabled,k as DisabledDate,w as ErrorStatus,M as RangePicker,b as WarningStatus,D as WithDefault,Y as WithPrefix,lt as __namedExportsOrder,ot as default};
