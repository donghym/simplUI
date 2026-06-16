import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as n}from"./index-GiUgBvb1.js";import{a as R}from"./utils-BEhiKRD9.js";import{c as be}from"./index-C08JwjkN.js";import{X as De}from"./x-B-5N0Ikz.js";import{C as ye}from"./clock-DfpgUEEf.js";import"./createLucideIcon-CZe00VV7.js";const Ee=be("flex h-[40px] w-full rounded-md border border-gray-400 bg-white px-3 text-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 focus-visible:ring-primary-500",{variants:{status:{error:"border-danger-500 focus-visible:ring-danger-500",warning:"border-warning-500 focus-visible:ring-warning-500"}},defaultVariants:{}}),qe=be("px-3 py-2 text-sm rounded flex items-center justify-center transition-colors cursor-pointer",{variants:{selected:{true:"bg-primary-500 text-white hover:bg-primary-600",false:"hover:bg-muted"}},defaultVariants:{selected:!1}});function Oe(r){if(!r||typeof r!="string")return null;const t=r.match(/^(\d{1,2}):(\d{2})$/);if(!t||!t[1]||!t[2])return null;const s=parseInt(t[1],10),a=parseInt(t[2],10);return s<0||s>23||a<0||a>59?null:{hour:s,minute:a}}function Ie(r,t){const s=r.toString().padStart(2,"0"),a=t.toString().padStart(2,"0");return`${s}:${a}`}function Re(r=30){const t=[];for(let s=0;s<24;s++)for(let a=0;a<60;a+=r)t.push(Ie(s,a));return t}function W(r){const t=Oe(r);if(!t)return r;const{hour:s,minute:a}=t,i=s>=12?"PM":"AM",p=s%12||12,j=a.toString().padStart(2,"0");return`${p.toString().padStart(2,"0")}:${j} ${i}`}const c=n.forwardRef((r,t)=>{const{className:s,status:a,disabled:i,placeholder:p="请选择时间",allowClear:j,prefix:k,value:E,defaultValue:Se,onChange:l,format:H="24",step:q=30,...Te}=r,[P,m]=n.useState(!1),[Ce,O]=n.useState(Se??""),d=E!==void 0,u=d?E??"":Ce,D=n.useRef(null),Ve=n.useMemo(()=>Re(q),[q]);n.useEffect(()=>{const o=f=>{D.current&&!D.current.contains(f.target)&&m(!1)};if(P)return document.addEventListener("mousedown",o),()=>document.removeEventListener("mousedown",o)},[P]);const Ne=n.useCallback(()=>{i||m(o=>!o)},[i]),je=n.useCallback(o=>{d||O(o),l==null||l(o),m(!1)},[d,l]),ke=n.useCallback(o=>{o.stopPropagation(),!i&&(d||O(""),l==null||l(""))},[i,d,l]),I=j&&u.length>0&&!i,He=n.useMemo(()=>u?H==="12"?W(u):u:"",[u,H]);return e.jsxs("div",{ref:D,className:"relative w-full",children:[e.jsxs("div",{className:"relative",children:[k&&e.jsx("span",{className:"pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground",children:k}),e.jsx("input",{ref:t,type:"text",readOnly:!0,value:He,placeholder:p,disabled:i,"aria-invalid":a==="error"||void 0,onClick:Ne,onKeyDown:o=>{o.key==="Escape"&&m(!1)},className:R("sui-time-picker",Ee({status:a}),k&&"pl-9",I&&"pr-9","cursor-pointer",s),...Te}),e.jsx("span",{className:"absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground flex items-center",children:I?e.jsx("button",{type:"button","aria-label":"清空时间",onClick:ke,className:"hover:text-foreground",children:e.jsx(De,{className:"h-4 w-4"})}):e.jsx(ye,{className:"h-4 w-4"})})]}),P&&!i&&e.jsx("div",{className:"absolute z-50 mt-1 w-full max-h-[240px] rounded-md border border-border bg-background shadow-lg overflow-y-auto",children:e.jsx("div",{role:"listbox",className:"py-1",children:Ve.map(o=>{const f=u===o,Pe=H==="12"?W(o):o;return e.jsx("button",{type:"button",role:"option","aria-selected":f,onClick:()=>je(o),className:R(qe({selected:f}),"w-full text-left"),children:Pe},o)})})})]})});c.displayName="TimePicker";c.__docgenInfo={description:"",methods:[],displayName:"TimePicker",props:{value:{required:!1,tsType:{name:"string"},description:"当前选中时间（受控模式），格式为 HH:mm（24小时制）"},defaultValue:{required:!1,tsType:{name:"string"},description:"默认选中时间（非受控模式），格式为 HH:mm（24小时制）"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(time: string) => void",signature:{arguments:[{type:{name:"string"},name:"time"}],return:{name:"void"}}},description:"时间变化回调，参数为 HH:mm 格式字符串，清空时为空字符串"},placeholder:{required:!1,tsType:{name:"string"},description:'占位文本，未选择时间时显示，默认为"请选择时间"'},status:{required:!1,tsType:{name:"union",raw:"'error' | 'warning'",elements:[{name:"literal",value:"'error'"},{name:"literal",value:"'warning'"}]},description:"状态变体：error 显示红色边框和 focus ring，warning 显示黄色边框和 focus ring"},disabled:{required:!1,tsType:{name:"boolean"},description:"是否禁用整个选择器，禁用后不可展开时间面板"},allowClear:{required:!1,tsType:{name:"boolean"},description:"是否显示清空按钮，仅在已选择时间且未禁用时显示"},prefix:{required:!1,tsType:{name:"ReactNode"},description:"输入框左侧前缀图标或文字"},format:{required:!1,tsType:{name:"union",raw:"'12' | '24'",elements:[{name:"literal",value:"'12'"},{name:"literal",value:"'24'"}]},description:"时间格式：12 小时制或 24 小时制，默认 24 小时制"},step:{required:!1,tsType:{name:"number"},description:"时间间隔（分钟），默认 30 分钟，用于生成可选时间列表"},className:{required:!1,tsType:{name:"string"},description:"自定义类名，通过 twMerge 合并覆盖默认样式"}},composes:["Omit","VariantProps"]};const We=r=>e.jsx("div",{style:{display:"flex",alignItems:"flex-start",justifyContent:"center",minHeight:"500px",width:"100%",paddingTop:"40px"},children:e.jsx(r,{})}),Ke={title:"数据录入/TimePicker 时间选择框",component:c,tags:["autodocs"],decorators:[We],parameters:{layout:"padded",docs:{description:{component:"时间选择框用于选择或输入时间。适用于预约时间、日程提醒、班次设置等场景，支持 12/24 小时制和自定义时间间隔。"}}},argTypes:{format:{control:"radio",options:["12","24"],description:"时间格式，12 小时制或 24 小时制，默认 24 小时制"},step:{control:"number",description:"时间间隔（分钟），用于生成可选时间列表，默认 30 分钟"},status:{control:"select",options:["error","warning"],description:"状态变体：error 显示红色边框，warning 显示黄色边框"},allowClear:{control:"boolean",description:"是否显示清空按钮，仅在已选择时间且未禁用时显示"},prefix:{control:"text",description:"输入框左侧前缀图标或文字"}}},g={args:{placeholder:"请选择时间"}},x={args:{defaultValue:"09:30"}},h={args:{prefix:e.jsx(ye,{className:"h-4 w-4"}),placeholder:"时间"}},v={args:{allowClear:!0,defaultValue:"14:00"}},w={args:{disabled:!0,defaultValue:"12:00"}},b={args:{status:"error",defaultValue:"08:00"}},y={args:{status:"warning",defaultValue:"10:00"}},S={args:{format:"12",defaultValue:"09:30"}},T={args:{step:15,placeholder:"15 分钟间隔"}},C={render:()=>{const[r,t]=n.useState("");return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("p",{children:["已选择时间：",r||"无"]}),e.jsx(c,{value:r,onChange:s=>t(s)})]})}},V={render:()=>{const[r,t]=n.useState(""),[s,a]=n.useState("");return e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(c,{value:r,onChange:t,placeholder:"开始时间"}),e.jsx("span",{className:"text-muted-foreground",children:"~"}),e.jsx(c,{value:s,onChange:a,placeholder:"结束时间"})]}),e.jsxs("p",{className:"text-xs text-muted-foreground",children:["已选范围：",r||"--:--"," ~ ",s||"--:--"]})]})}},N={parameters:{docs:{description:{story:"通过受控模式限制不可选择过去时间，适用于预约、排班等需要禁用历史时段的场景。"}}},render:()=>{const[r,t]=n.useState(""),a=new Date().getHours();return e.jsxs("div",{className:"flex flex-col gap-3 w-72",children:[e.jsx(c,{value:r,onChange:i=>{parseInt(i.split(":")[0]??"0",10)<a||t(i)},placeholder:"不可选择过去时间"}),e.jsxs("p",{className:"text-xs text-muted-foreground",children:["当前小时之前的时段不可选（通过 onChange 过滤，当前小时：",String(a).padStart(2,"0"),":00）"]})]})}};var $,M,_;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    placeholder: '请选择时间'
  }
}`,...(_=(M=g.parameters)==null?void 0:M.docs)==null?void 0:_.source}}};var A,F,L;x.parameters={...x.parameters,docs:{...(A=x.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    defaultValue: '09:30'
  }
}`,...(L=(F=x.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};var z,K,X;h.parameters={...h.parameters,docs:{...(z=h.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    prefix: <Clock className="h-4 w-4" />,
    placeholder: '时间'
  }
}`,...(X=(K=h.parameters)==null?void 0:K.docs)==null?void 0:X.source}}};var B,G,J;v.parameters={...v.parameters,docs:{...(B=v.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    allowClear: true,
    defaultValue: '14:00'
  }
}`,...(J=(G=v.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var Q,U,Y;w.parameters={...w.parameters,docs:{...(Q=w.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultValue: '12:00'
  }
}`,...(Y=(U=w.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var Z,ee,re;b.parameters={...b.parameters,docs:{...(Z=b.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    status: 'error',
    defaultValue: '08:00'
  }
}`,...(re=(ee=b.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var te,se,ae;y.parameters={...y.parameters,docs:{...(te=y.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    status: 'warning',
    defaultValue: '10:00'
  }
}`,...(ae=(se=y.parameters)==null?void 0:se.docs)==null?void 0:ae.source}}};var oe,ne,ie;S.parameters={...S.parameters,docs:{...(oe=S.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    format: '12',
    defaultValue: '09:30'
  }
}`,...(ie=(ne=S.parameters)==null?void 0:ne.docs)==null?void 0:ie.source}}};var le,ce,ue;T.parameters={...T.parameters,docs:{...(le=T.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    step: 15,
    placeholder: '15 分钟间隔'
  }
}`,...(ue=(ce=T.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};var de,pe,me;C.parameters={...C.parameters,docs:{...(de=C.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    return <div className="space-y-4">
        <p>已选择时间：{value || '无'}</p>
        <TimePicker value={value} onChange={(t: string) => setValue(t)} />
      </div>;
  }
}`,...(me=(pe=C.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var fe,ge,xe;V.parameters={...V.parameters,docs:{...(fe=V.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  render: () => {
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    return <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <TimePicker value={startTime} onChange={setStartTime} placeholder="开始时间" />
          <span className="text-muted-foreground">~</span>
          <TimePicker value={endTime} onChange={setEndTime} placeholder="结束时间" />
        </div>
        <p className="text-xs text-muted-foreground">
          已选范围：{startTime || '--:--'} ~ {endTime || '--:--'}
        </p>
      </div>;
  }
}`,...(xe=(ge=V.parameters)==null?void 0:ge.docs)==null?void 0:xe.source}}};var he,ve,we;N.parameters={...N.parameters,docs:{...(he=N.parameters)==null?void 0:he.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '通过受控模式限制不可选择过去时间，适用于预约、排班等需要禁用历史时段的场景。'
      }
    }
  },
  render: () => {
    const [value, setValue] = useState('');
    const now = new Date();
    const currentHour = now.getHours();
    return <div className="flex flex-col gap-3 w-72">
        <TimePicker value={value} onChange={(t: string) => {
        const hour = parseInt(t.split(':')[0] ?? '0', 10);
        if (hour < currentHour) return;
        setValue(t);
      }} placeholder="不可选择过去时间" />
        <p className="text-xs text-muted-foreground">
          当前小时之前的时段不可选（通过 onChange 过滤，当前小时：{String(currentHour).padStart(2, '0')}:00）
        </p>
      </div>;
  }
}`,...(we=(ve=N.parameters)==null?void 0:ve.docs)==null?void 0:we.source}}};const Xe=["Default","WithDefaultValue","WithPrefix","AllowClear","Disabled","StatusError","StatusWarning","Format12Hour","CustomStep","Controlled","TimeRange","DisabledTime"];export{v as AllowClear,C as Controlled,T as CustomStep,g as Default,w as Disabled,N as DisabledTime,S as Format12Hour,b as StatusError,y as StatusWarning,V as TimeRange,x as WithDefaultValue,h as WithPrefix,Xe as __namedExportsOrder,Ke as default};
