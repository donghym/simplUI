import{j as t}from"./jsx-runtime-CDt2p4po.js";import{r as c}from"./index-GiUgBvb1.js";import{a as i}from"./utils-BEhiKRD9.js";import{c as u}from"./index-C08JwjkN.js";import{C as ee}from"./chevron-left-08BNpNZ8.js";import{C as te}from"./chevron-right-V463yFHa.js";import"./createLucideIcon-CZe00VV7.js";const ae=u("w-full bg-background rounded-lg border border-border overflow-hidden",{variants:{}}),ne=u("flex items-center justify-between px-4 py-3 border-b border-border",{variants:{}}),re=u("text-base font-semibold text-foreground",{variants:{}}),Y=u("inline-flex items-center justify-center w-8 h-8 rounded-md text-muted-foreground hover:bg-muted transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500",{variants:{}}),F=u("grid grid-cols-7",{variants:{}}),se=u("py-2 text-center text-xs font-medium text-muted-foreground",{variants:{}}),oe=u("relative h-24 p-1 border-b border-r border-muted cursor-pointer transition-colors duration-150 hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-inset",{variants:{isCurrentMonth:{true:"bg-background",false:"bg-muted/50 text-muted-foreground"},isToday:{true:"",false:""},isSelected:{true:"bg-primary-500/5",false:""}},defaultVariants:{isCurrentMonth:!0,isToday:!1,isSelected:!1}}),ie=u("inline-flex items-center justify-center w-7 h-7 text-sm rounded-full",{variants:{isToday:{true:"bg-primary-500 text-white font-semibold",false:"text-foreground"},isSelected:{true:"ring-2 ring-primary-500 ring-offset-1",false:""}},defaultVariants:{isToday:!1,isSelected:!1}}),le=u("w-1.5 h-1.5 rounded-full",{variants:{}});function de(a,n,o,s,x){const b=new Date(a,n,1).getDay(),m=new Date(a,n+1,0).getDate(),j=new Date(a,n-1,0).getDate(),g=[],l=(r,p)=>{g.push({date:r,isCurrentMonth:p,isToday:q(r,s),isSelected:o?q(r,o):!1,events:x.get(ce(r))??[]})};for(let r=b-1;r>=0;r--)l(new Date(a,n-1,j-r),!1);for(let r=1;r<=m;r++)l(new Date(a,n,r),!0);const w=42-g.length;for(let r=1;r<=w;r++)l(new Date(a,n+1,r),!1);return g}function ce(a){const n=a.getFullYear(),o=String(a.getMonth()+1).padStart(2,"0"),s=String(a.getDate()).padStart(2,"0");return`${n}-${o}-${s}`}function ue(a){return`${a.getFullYear()}年${a.getMonth()+1}月`}function q(a,n){return a.getFullYear()===n.getFullYear()&&a.getMonth()===n.getMonth()&&a.getDate()===n.getDate()}const me=["日","一","二","三","四","五","六"],f=c.forwardRef((a,n)=>{const{value:o,onChange:s,events:x=[],dateCellRender:b,onSelect:m,className:j,...g}=a,l=c.useMemo(()=>{const e=new Date;return e.setHours(0,0,0,0),e},[]),[w,r]=c.useState(l),p=o??w,[M,S]=c.useState(void 0),T=p.getFullYear(),V=p.getMonth(),k=c.useMemo(()=>{const e=new Map;for(const d of x){const v=e.get(d.date)??[];v.push(d),e.set(d.date,v)}return e},[x]),U=c.useMemo(()=>de(T,V,M,l,k),[T,V,M,l,k]),R=c.useCallback(e=>{const d=new Date(p);d.setMonth(d.getMonth()+e),o||r(d),s==null||s(d)},[p,o,s]),X=c.useCallback(()=>{o||r(l),s==null||s(l)},[l,o,s]);return t.jsxs("div",{ref:n,className:i(ae(),j),...g,children:[t.jsxs("div",{className:i(ne()),children:[t.jsxs("div",{className:"flex items-center gap-2",children:[t.jsx("button",{type:"button",onClick:()=>R(-1),className:i(Y()),"aria-label":"上个月",children:t.jsx(ee,{className:"w-4 h-4","aria-hidden":"true"})}),t.jsx("span",{className:i(re()),children:ue(p)}),t.jsx("button",{type:"button",onClick:()=>R(1),className:i(Y()),"aria-label":"下个月",children:t.jsx(te,{className:"w-4 h-4","aria-hidden":"true"})})]}),t.jsx("button",{type:"button",onClick:X,className:"text-sm text-primary-500 hover:text-primary-600 transition-colors",children:"今天"})]}),t.jsx("div",{className:i(F()),children:me.map(e=>t.jsx("div",{className:i(se()),children:e},e))}),t.jsx("div",{className:i(F()),children:U.map((e,d)=>t.jsx("div",{role:"button",tabIndex:0,onClick:()=>{S(e.date),m==null||m(e.date)},onKeyDown:v=>{v.key==="Enter"&&(S(e.date),m==null||m(e.date))},className:i(oe({isCurrentMonth:e.isCurrentMonth,isToday:e.isToday,isSelected:e.isSelected})),children:b?b(e.date,e.events):t.jsxs(t.Fragment,{children:[t.jsx("span",{className:i(ie({isToday:e.isToday,isSelected:e.isSelected})),children:e.date.getDate()}),e.events.length>0&&t.jsx("div",{className:"flex gap-0.5 mt-1 flex-wrap",children:e.events.slice(0,3).map((v,Z)=>t.jsx("span",{className:i(le(),v.color?"":"bg-primary-500"),"data-color":v.color},Z))}),e.events.length>3&&t.jsxs("span",{className:"text-[10px] text-muted-foreground",children:["+",e.events.length-3]})]})},d))})]})});f.displayName="EventCalendar";f.__docgenInfo={description:"事件日历组件",methods:[],displayName:"EventCalendar",props:{value:{required:!1,tsType:{name:"Date"},description:"当前显示月份（受控模式）"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(date: Date) => void",signature:{arguments:[{type:{name:"Date"},name:"date"}],return:{name:"void"}}},description:"月份变化回调"},events:{required:!1,tsType:{name:"Array",elements:[{name:"CalendarEvent"}],raw:"CalendarEvent[]"},description:"事件列表"},dateCellRender:{required:!1,tsType:{name:"signature",type:"function",raw:"(date: Date, events: CalendarEvent[]) => ReactNode",signature:{arguments:[{type:{name:"Date"},name:"date"},{type:{name:"Array",elements:[{name:"CalendarEvent"}],raw:"CalendarEvent[]"},name:"events"}],return:{name:"ReactNode"}}},description:"日期单元格自定义渲染"},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(date: Date) => void",signature:{arguments:[{type:{name:"Date"},name:"date"}],return:{name:"void"}}},description:"日期点击回调"}},composes:["Omit","VariantProps"]};const ye={title:"增强组件/EventCalendar 事件日历",component:f,tags:["autodocs"],parameters:{layout:"padded"},argTypes:{events:{control:"object",description:"事件列表"}}},E=[{title:"团队周会",date:"2024-06-03",color:"#3b82f6"},{title:"需求评审",date:"2024-06-05",color:"#f59e0b"},{title:"版本发布",date:"2024-06-10",color:"#10b981"},{title:"技术分享",date:"2024-06-12",color:"#8b5cf6"},{title:"冲刺回顾",date:"2024-06-15",color:"#ef4444"},{title:"代码审查",date:"2024-06-18",color:"#3b82f6"},{title:"用户调研",date:"2024-06-20",color:"#f59e0b"},{title:"上线部署",date:"2024-06-25",color:"#10b981"},{title:"月度总结",date:"2024-06-28",color:"#8b5cf6"}],h={args:{events:E}},y={args:{}},C={render:()=>{const a=[{title:"晨会",date:"2024-06-10",color:"#3b82f6"},{title:"评审",date:"2024-06-10",color:"#f59e0b"},{title:"部署",date:"2024-06-10",color:"#10b981"},{title:"回顾",date:"2024-06-10",color:"#ef4444"},{title:"分享",date:"2024-06-15",color:"#8b5cf6"},{title:"培训",date:"2024-06-15",color:"#3b82f6"}];return t.jsx(f,{events:a})}},D={render:()=>t.jsx(f,{events:E,dateCellRender:(a,n)=>t.jsxs("div",{className:"w-full",children:[t.jsx("span",{className:"text-sm",children:a.getDate()}),n.length>0&&t.jsx("div",{className:"mt-0.5 space-y-0.5",children:n.map((o,s)=>t.jsx("div",{className:"text-[10px] truncate px-1 py-0.5 rounded text-white bg-primary-500","data-color":o.color,children:o.title},s))})]})})},N={render:()=>{const[a,n]=c.useState(new Date(2024,5,1));return t.jsxs("div",{className:"space-y-4",children:[t.jsxs("p",{className:"text-sm text-muted-foreground",children:["当前月份：",a.getFullYear(),"年",a.getMonth()+1,"月"]}),t.jsx(f,{value:a,onChange:n,events:E})]})}};var I,$,P;h.parameters={...h.parameters,docs:{...(I=h.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    events: sampleEvents
  }
}`,...(P=($=h.parameters)==null?void 0:$.docs)==null?void 0:P.source}}};var _,A,O;y.parameters={...y.parameters,docs:{...(_=y.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {}
}`,...(O=(A=y.parameters)==null?void 0:A.docs)==null?void 0:O.source}}};var W,H,K;C.parameters={...C.parameters,docs:{...(W=C.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => {
    const events: CalendarEvent[] = [{
      title: '晨会',
      date: '2024-06-10',
      color: '#3b82f6'
    }, {
      title: '评审',
      date: '2024-06-10',
      color: '#f59e0b'
    }, {
      title: '部署',
      date: '2024-06-10',
      color: '#10b981'
    }, {
      title: '回顾',
      date: '2024-06-10',
      color: '#ef4444'
    }, {
      title: '分享',
      date: '2024-06-15',
      color: '#8b5cf6'
    }, {
      title: '培训',
      date: '2024-06-15',
      color: '#3b82f6'
    }];
    return <EventCalendar events={events} />;
  }
}`,...(K=(H=C.parameters)==null?void 0:H.docs)==null?void 0:K.source}}};var G,L,z;D.parameters={...D.parameters,docs:{...(G=D.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <EventCalendar events={sampleEvents} dateCellRender={(date, cellEvents) => <div className="w-full">
          <span className="text-sm">{date.getDate()}</span>
          {cellEvents.length > 0 && <div className="mt-0.5 space-y-0.5">
              {cellEvents.map((evt, i) => <div key={i} className="text-[10px] truncate px-1 py-0.5 rounded text-white bg-primary-500" data-color={evt.color}>
                  {evt.title}
                </div>)}
            </div>}
        </div>} />
}`,...(z=(L=D.parameters)==null?void 0:L.docs)==null?void 0:z.source}}};var B,J,Q;N.parameters={...N.parameters,docs:{...(B=N.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => {
    const [currentDate, setCurrentDate] = useState(new Date(2024, 5, 1));
    return <div className="space-y-4">
        <p className="text-sm text-muted-foreground">
          当前月份：{currentDate.getFullYear()}年{currentDate.getMonth() + 1}月
        </p>
        <EventCalendar value={currentDate} onChange={setCurrentDate} events={sampleEvents} />
      </div>;
  }
}`,...(Q=(J=N.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};const Ce=["Default","NoEvents","MultiEventsPerDay","CustomCellRender","Controlled"];export{N as Controlled,D as CustomCellRender,h as Default,C as MultiEventsPerDay,y as NoEvents,Ce as __namedExportsOrder,ye as default};
