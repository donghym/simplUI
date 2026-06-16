import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as l}from"./index-GiUgBvb1.js";import{a as u}from"./utils-BEhiKRD9.js";import{c as f}from"./index-C08JwjkN.js";import{C as ge}from"./chevron-left-08BNpNZ8.js";import{C as fe}from"./chevron-right-V463yFHa.js";import"./createLucideIcon-CZe00VV7.js";const he=f("w-full bg-background rounded-lg border border-border overflow-hidden",{variants:{}}),De=f("flex items-center justify-between px-4 py-3 border-b border-border",{variants:{}}),be=f("text-base font-semibold text-foreground",{variants:{}}),q=f("inline-flex items-center justify-center w-8 h-8 rounded-md text-muted-foreground hover:bg-muted transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500",{variants:{disabled:{true:"opacity-50 pointer-events-none",false:""}},defaultVariants:{disabled:!1}}),E=f("grid grid-cols-7",{variants:{}}),ye=f("py-2 text-center text-xs font-medium text-muted-foreground",{variants:{}}),ve=f("relative h-24 p-1 border-b border-r border-muted cursor-pointer transition-colors duration-150 hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-inset",{variants:{isCurrentMonth:{true:"bg-background",false:"bg-muted/50 text-muted-foreground"},isToday:{true:"",false:""},isSelected:{true:"bg-primary-500/5",false:""},disabled:{true:"opacity-50 pointer-events-none cursor-not-allowed bg-muted",false:""}},defaultVariants:{isCurrentMonth:!0,isToday:!1,isSelected:!1,disabled:!1}}),xe=f("inline-flex items-center justify-center w-7 h-7 text-sm rounded-full",{variants:{isToday:{true:"bg-primary-500 text-white font-semibold",false:"text-foreground"},isSelected:{true:"ring-2 ring-primary-500 ring-offset-1",false:""}},defaultVariants:{isToday:!1,isSelected:!1}});function Ce(a,s,d,m,i){const p=new Date(a,s,1).getDay(),o=new Date(a,s+1,0).getDate(),h=new Date(a,s-1,0).getDate(),n=[],c=(r,T)=>{n.push({date:r,isCurrentMonth:T,isToday:r.getFullYear()===m.getFullYear()&&r.getMonth()===m.getMonth()&&r.getDate()===m.getDate(),isSelected:d?r.getFullYear()===d.getFullYear()&&r.getMonth()===d.getMonth()&&r.getDate()===d.getDate():!1,disabled:i?i(r):!1})};for(let r=p-1;r>=0;r--)c(new Date(a,s-1,h-r),!1);for(let r=1;r<=o;r++)c(new Date(a,s,r),!0);const R=42-n.length;for(let r=1;r<=R;r++)c(new Date(a,s+1,r),!1);return n}function W(a){return`${a.getFullYear()}年${a.getMonth()+1}月`}const Ne=["日","一","二","三","四","五","六"],y=l.forwardRef((a,s)=>{const{value:d,defaultValue:m,currentDate:i,defaultCurrentDate:v,onSelect:p,onPanelChange:o,disabledDate:h,dateCellRender:n,dateFullCellRender:c,headerRender:R=!0,className:r,...T}=a,D=l.useMemo(()=>{const t=new Date;return t.setHours(0,0,0,0),t},[]),re=v||D,[se,V]=l.useState(re),g=i||se,[oe,de]=l.useState(m),Y=d!==void 0?d:oe,[b]=l.useState("month"),k=g.getFullYear(),F=g.getMonth(),le=l.useMemo(()=>Ce(k,F,Y,D,h),[k,F,Y,D,h]),ie=l.useCallback(()=>{const t=new Date(g);t.setMonth(t.getMonth()-1),i||V(t),o==null||o(t,b)},[g,i,o,b]),ce=l.useCallback(()=>{const t=new Date(g);t.setMonth(t.getMonth()+1),i||V(t),o==null||o(t,b)},[g,i,o,b]),ue=l.useCallback(()=>{i||V(D),o==null||o(D,b)},[D,i,o,b]),me=l.useCallback(t=>{t.disabled||(d===void 0&&de(t.date),p==null||p(t.date))},[d,p]);return e.jsxs("div",{ref:s,className:u("sui-calendar",he(),r),...T,children:[R&&e.jsxs("div",{className:u(De()),children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{type:"button",onClick:ie,className:u(q()),"aria-label":"上个月",children:e.jsx(ge,{className:"w-4 h-4","aria-hidden":"true"})}),e.jsx("span",{className:u(be()),children:W(g)}),e.jsx("button",{type:"button",onClick:ce,className:u(q()),"aria-label":"下个月",children:e.jsx(fe,{className:"w-4 h-4","aria-hidden":"true"})})]}),e.jsx("button",{type:"button",onClick:ue,className:"text-sm text-primary-500 hover:text-primary-600 transition-colors","aria-label":"今天",children:"今天"})]}),e.jsx("div",{className:u(E()),children:Ne.map(t=>e.jsx("div",{className:u(ye()),children:t},t))}),e.jsx("div",{className:u(E()),role:"grid","aria-label":W(g),children:le.map((t,pe)=>e.jsx("div",{role:"button",tabIndex:t.disabled?-1:0,"aria-disabled":t.disabled||void 0,"aria-selected":t.isSelected||void 0,onClick:()=>me(t),className:u(ve({isCurrentMonth:t.isCurrentMonth,isToday:t.isToday,isSelected:t.isSelected,disabled:t.disabled})),children:c?c(t.date):e.jsxs(e.Fragment,{children:[e.jsx("span",{className:u(xe({isToday:t.isToday,isSelected:t.isSelected})),children:t.date.getDate()}),n&&e.jsx("div",{className:"mt-1",children:n(t.date)})]})},pe))})]})});y.displayName="Calendar";y.__docgenInfo={description:`Calendar 日历组件

按月展示日期，支持日期选择、禁用日期、自定义渲染。
支持受控（value）和非受控（defaultValue）两种模式。`,methods:[],displayName:"Calendar",props:{value:{required:!1,tsType:{name:"Date"},description:"当前选中的日期（受控）"},defaultValue:{required:!1,tsType:{name:"Date"},description:"默认选中的日期（非受控）"},currentDate:{required:!1,tsType:{name:"Date"},description:"当前显示的日期，决定日历展示哪年哪月"},defaultCurrentDate:{required:!1,tsType:{name:"Date"},description:"默认显示的日期"},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(date: Date) => void",signature:{arguments:[{type:{name:"Date"},name:"date"}],return:{name:"void"}}},description:"日期变化回调"},onPanelChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(date: Date, mode: CalendarMode) => void",signature:{arguments:[{type:{name:"Date"},name:"date"},{type:{name:"union",raw:"'month' | 'year'",elements:[{name:"literal",value:"'month'"},{name:"literal",value:"'year'"}]},name:"mode"}],return:{name:"void"}}},description:"月份/年份变化回调"},disabledDate:{required:!1,tsType:{name:"signature",type:"function",raw:"(date: Date) => boolean",signature:{arguments:[{type:{name:"Date"},name:"date"}],return:{name:"boolean"}}},description:"日期禁用函数，返回 true 则该日期不可选"},dateCellRender:{required:!1,tsType:{name:"signature",type:"function",raw:"(date: Date) => ReactNode",signature:{arguments:[{type:{name:"Date"},name:"date"}],return:{name:"ReactNode"}}},description:"自定义日期单元格渲染"},dateFullCellRender:{required:!1,tsType:{name:"signature",type:"function",raw:"(date: Date) => ReactNode",signature:{arguments:[{type:{name:"Date"},name:"date"}],return:{name:"ReactNode"}}},description:`自定义日期单元格内容渲染，优先级高于 dateCellRender
返回 ReactNode 替换默认日期数字`},headerRender:{required:!1,tsType:{name:"boolean"},description:"是否显示头部切换按钮。默认 true"},className:{required:!1,tsType:{name:"string"},description:"自定义 className，通过 cn() + twMerge 合并"}},composes:["Omit","VariantProps"]};const Ye={title:"数据展示/Calendar 日历",component:y,tags:["autodocs"],argTypes:{value:{control:"date",description:"当前选中的日期（受控）"},defaultValue:{control:"date",description:"默认选中的日期（非受控）"}},parameters:{layout:"padded"}},x={args:{}},C={args:{defaultValue:new Date}},N={args:{disabledDate:a=>{const s=a.getDay();return s===0||s===6}}},w={args:{dateCellRender:a=>a.getDate()===15?e.jsx("span",{className:"text-primary-500 font-bold",children:a.getDate()}):a.getDate()}},S={render:()=>{const[a,s]=l.useState(new Date);return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("p",{children:["已选择：",a.toLocaleDateString()]}),e.jsx(y,{value:a,onSelect:s})]})}},M={render:()=>{const a=[3,7,12,18,25];return e.jsx(y,{dateCellRender:s=>{const d=s.getDate(),m=a.includes(d);return e.jsxs("div",{className:"relative w-full",children:[e.jsx("span",{children:d}),m&&e.jsx("span",{className:"absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary-500"})]})}})}},j={render:()=>{const[a,s]=l.useState(new Date),[d,m]=l.useState(void 0),i=()=>{const n=new Date(a);n.setMonth(n.getMonth()-1),s(n)},v=()=>{const n=new Date(a);n.setMonth(n.getMonth()+1),s(n)},p=n=>{const c=new Date(a);c.setFullYear(n),s(c)},o=a.getFullYear(),h=Array.from({length:21},(n,c)=>o-10+c);return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("button",{type:"button",onClick:i,className:"px-3 py-1.5 border border-border rounded-md text-sm hover:bg-muted transition-colors",children:"上月"}),e.jsx("select",{value:o,onChange:n=>p(Number(n.target.value)),className:"px-2 py-1.5 border border-border rounded-md text-sm",children:h.map(n=>e.jsxs("option",{value:n,children:[n," 年"]},n))}),e.jsxs("span",{className:"text-sm font-medium",children:[a.getMonth()+1," 月"]}),e.jsx("button",{type:"button",onClick:v,className:"px-3 py-1.5 border border-border rounded-md text-sm hover:bg-muted transition-colors",children:"下月"})]}),e.jsx(y,{value:d,currentDate:a,onSelect:m,onPanelChange:n=>s(n),headerRender:!1}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["当前面板：",a.getFullYear()," 年 ",a.getMonth()+1," 月",d&&` | 已选择：${d.toLocaleDateString()}`]})]})}};var I,_,L;x.parameters={...x.parameters,docs:{...(I=x.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {}
}`,...(L=(_=x.parameters)==null?void 0:_.docs)==null?void 0:L.source}}};var P,$,A;C.parameters={...C.parameters,docs:{...(P=C.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    defaultValue: new Date()
  }
}`,...(A=($=C.parameters)==null?void 0:$.docs)==null?void 0:A.source}}};var O,H,B;N.parameters={...N.parameters,docs:{...(O=N.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    disabledDate: (date: Date) => {
      const day = date.getDay();
      return day === 0 || day === 6; // 禁用周末
    }
  }
}`,...(B=(H=N.parameters)==null?void 0:H.docs)==null?void 0:B.source}}};var G,K,z;w.parameters={...w.parameters,docs:{...(G=w.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    dateCellRender: (date: Date) => {
      if (date.getDate() === 15) {
        return <span className="text-primary-500 font-bold">{date.getDate()}</span>;
      }
      return date.getDate();
    }
  }
}`,...(z=(K=w.parameters)==null?void 0:K.docs)==null?void 0:z.source}}};var J,Q,U;S.parameters={...S.parameters,docs:{...(J=S.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(new Date());
    return <div className="space-y-4">
        <p>已选择：{value.toLocaleDateString()}</p>
        <Calendar value={value} onSelect={setValue} />
      </div>;
  }
}`,...(U=(Q=S.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Z,ee;M.parameters={...M.parameters,docs:{...(X=M.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => {
    const eventDays = [3, 7, 12, 18, 25];
    return <Calendar dateCellRender={(date: Date) => {
      const day = date.getDate();
      const hasEvent = eventDays.includes(day);
      return <div className="relative w-full">
              <span>{day}</span>
              {hasEvent && <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary-500" />}
            </div>;
    }} />;
  }
}`,...(ee=(Z=M.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ae,ne;j.parameters={...j.parameters,docs:{...(te=j.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
    const handlePrevMonth = () => {
      const d = new Date(currentDate);
      d.setMonth(d.getMonth() - 1);
      setCurrentDate(d);
    };
    const handleNextMonth = () => {
      const d = new Date(currentDate);
      d.setMonth(d.getMonth() + 1);
      setCurrentDate(d);
    };
    const handleYearChange = (year: number) => {
      const d = new Date(currentDate);
      d.setFullYear(year);
      setCurrentDate(d);
    };
    const currentYear = currentDate.getFullYear();
    const years = Array.from({
      length: 21
    }, (_, i) => currentYear - 10 + i);
    return <div className="space-y-4">
        <div className="flex items-center gap-3">
          <button type="button" onClick={handlePrevMonth} className="px-3 py-1.5 border border-border rounded-md text-sm hover:bg-muted transition-colors">
            上月
          </button>
          <select value={currentYear} onChange={e => handleYearChange(Number(e.target.value))} className="px-2 py-1.5 border border-border rounded-md text-sm">
            {years.map(y => <option key={y} value={y}>{y} 年</option>)}
          </select>
          <span className="text-sm font-medium">{currentDate.getMonth() + 1} 月</span>
          <button type="button" onClick={handleNextMonth} className="px-3 py-1.5 border border-border rounded-md text-sm hover:bg-muted transition-colors">
            下月
          </button>
        </div>
        <Calendar value={selectedDate} currentDate={currentDate} onSelect={setSelectedDate} onPanelChange={date => setCurrentDate(date)} headerRender={false} />
        <p className="text-sm text-muted-foreground">
          当前面板：{currentDate.getFullYear()} 年 {currentDate.getMonth() + 1} 月
          {selectedDate && \` | 已选择：\${selectedDate.toLocaleDateString()}\`}
        </p>
      </div>;
  }
}`,...(ne=(ae=j.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};const ke=["Default","WithDefaultValue","DisabledDate","CustomCellRender","Controlled","CalendarWithEvents","MonthYearSwitch"];export{M as CalendarWithEvents,S as Controlled,w as CustomCellRender,x as Default,N as DisabledDate,j as MonthYearSwitch,C as WithDefaultValue,ke as __namedExportsOrder,Ye as default};
