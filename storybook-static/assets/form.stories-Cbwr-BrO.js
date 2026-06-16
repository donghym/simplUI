import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as i}from"./index-GiUgBvb1.js";import{fn as m}from"./index-DeN4tkzB.js";import{a as F}from"./utils-BEhiKRD9.js";import{c as Le}from"./index-C08JwjkN.js";import{I as r}from"./index-BJCQqJ4b.js";import{B as t}from"./index-WhxK0hy4.js";import{S as I}from"./index-pixgFsiF.js";import{C as _}from"./index-SScp5wZW.js";import{a as Ae,R as w}from"./index-DCDztqEz.js";import{S as Ee}from"./index-CMCvWDhG.js";import{I as G}from"./index-SE3XbDQQ.js";import{S as $}from"./index-CufUwuO2.js";import{R as q,C as b}from"./index-DRqjia59.js";import{S as He}from"./search-DufjXXN7.js";import{M as Ue}from"./minus-DzxWgTKt.js";import{P as Ge}from"./plus-CkYWZh8A.js";import"./x-B-5N0Ikz.js";import"./createLucideIcon-CZe00VV7.js";import"./loader-circle-CulI208u.js";import"./chevron-down-CY-YwltC.js";import"./check-DytZnMFh.js";import"./chevron-up-CiCbXlai.js";const We=Le("",{variants:{layout:{horizontal:"flex flex-col gap-6",vertical:"flex flex-col gap-6",inline:"flex flex-wrap items-center gap-4"}},defaultVariants:{layout:"vertical"}}),Je=Le("flex",{variants:{layout:{horizontal:"flex-row items-center w-full",vertical:"flex-col",inline:"flex-col"}},defaultVariants:{layout:"vertical"}}),Ke={success:"text-success-600",warning:"text-warning-600",error:"text-danger-500",validating:"text-primary-500","":""},Qe={success:"border-success-500",warning:"border-warning-500",error:"border-danger-500",validating:"border-primary-500","":""},De=()=>e.jsx("span",{className:"text-danger-500 mr-1 select-none","aria-hidden":"true",children:"*"});function K(l,o){return l==null?{span:o,offset:0}:typeof l=="number"?{span:l,offset:0}:{span:l.span??o,offset:l.offset??0}}De.__docgenInfo={description:"必填星号",methods:[],displayName:"RequiredMark"};const Me=i.createContext(null);function Xe(){const l=i.useContext(Me);if(!l)throw new Error("FormItem must be used within Form");return l}const s=i.forwardRef(({layout:l="vertical",labelCol:o={span:5},wrapperCol:u={span:19},colon:p=!1,labelAlign:v="right",requiredMark:n="start",onSubmit:d,className:x,children:C,...y},O)=>{const g=i.useRef([]),j=i.useCallback((h,f)=>{const c=g.current.find(U=>U.name===h);c?c.ref=f:g.current.push({name:h,ref:f})},[]),S=i.useCallback(()=>{const h={};return g.current.forEach(({name:f,ref:c})=>{c&&("checked"in c&&c.type==="checkbox"?h[f]=c.checked:h[f]=c.value)}),h},[]),P=h=>{h.preventDefault(),d==null||d(S())};return e.jsx(Me.Provider,{value:{layout:l,labelCol:o,wrapperCol:u,colon:p,labelAlign:v,requiredMark:n,registerField:j,getValues:S},children:e.jsx("form",{ref:O,className:F(We({layout:l}),x),onSubmit:P,...y,children:C})})});s.displayName="Form";const a=i.forwardRef(({label:l,name:o,required:u=!1,validateStatus:p="",help:v,extra:n,labelCol:d,wrapperCol:x,className:C,children:y,...O},g)=>{const{layout:j,labelCol:S,wrapperCol:P,colon:h,labelAlign:f,requiredMark:c}=Xe(),U=K(d??S,8),W=K(x??P,16),_e={width:`${U.span/24*100}%`},$e={width:`${W.span/24*100}%`,maxWidth:`${W.span/24*100}%`},J=u&&c!=="hide"?e.jsx(De,{}):null,Oe=j==="horizontal"?F("shrink-0 self-start pt-1 text-sm text-foreground flex items-center",f==="right"?"justify-end pr-3":"justify-start pr-3"):"text-sm text-foreground mb-1.5 flex items-center",Pe=j==="horizontal"?"flex-1 min-w-0":"w-full";return e.jsxs("div",{ref:g,className:F(Je({layout:j}),C),...O,children:[l!=null&&e.jsxs("label",{className:Oe,style:j==="horizontal"?_e:void 0,htmlFor:o,children:[c==="start"&&J,e.jsx("span",{children:l}),h&&e.jsx("span",{className:"ml-0.5",children:":"}),c==="end"&&J]}),e.jsxs("div",{className:F(Pe,j==="horizontal"?"":"w-full"),style:j==="horizontal"?$e:void 0,children:[e.jsx("div",{className:F("min-w-0",Qe[p]),children:y}),n&&e.jsx("div",{className:"text-xs text-muted-foreground mt-1",children:n}),v&&e.jsx("div",{className:F("text-xs mt-1",Ke[p]||"text-muted-foreground"),children:v})]})]})});a.displayName="FormItem";Object.assign(s,{Item:a});s.__docgenInfo={description:`Form 表单容器

样式对齐 antd Form：
- horizontal 模式：label 在左、控件在右，按 24 栅格分配列宽
- vertical 模式：label 在上、控件在下
- inline 模式：所有控件水平排列`,methods:[],displayName:"Form",props:{layout:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical' | 'inline'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"},{name:"literal",value:"'inline'"}]},description:"表单布局方向\n\n- `horizontal`：label 在左，控件在右（antd 风格）\n- `vertical`：label 在上，控件在下\n- `inline`：所有控件水平排列\n\n默认 `'vertical'`。",defaultValue:{value:"'vertical'",computed:!1}},labelCol:{required:!1,tsType:{name:"ResponsiveCol"},description:"标签列宽度配置（horizontal 模式下生效）\n\nantd 默认 `{ span: 5 }`，本组件为了视觉平衡默认 `{ span: 8 }`。\n可传 `8` 简写，等价于 `{ span: 8 }`。",defaultValue:{value:"{ span: 5 }",computed:!1}},wrapperCol:{required:!1,tsType:{name:"ResponsiveCol"},description:"控件列宽度配置（horizontal 模式下生效）\n\nantd 默认 `{ span: 19 }`，本组件默认 `{ span: 16 }`（与 labelCol 互补到 24）。",defaultValue:{value:"{ span: 19 }",computed:!1}},colon:{required:!1,tsType:{name:"boolean"},description:"label 文本后是否显示冒号\n\n默认 `false`。中文场景下建议设为 `true`。",defaultValue:{value:"false",computed:!1}},labelAlign:{required:!1,tsType:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"label 文本对齐方向（horizontal 模式）\n\n默认 `'right'`（antd 风格）。",defaultValue:{value:"'right'",computed:!1}},requiredMark:{required:!1,tsType:{name:"union",raw:"'start' | 'end' | 'hide'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'end'"},{name:"literal",value:"'hide'"}]},description:"必填标记位置\n\n- `start`：红星在 label 文字前（antd 风格）\n- `end`：红星在 label 文字后\n- `hide`：不显示红星",defaultValue:{value:"'start'",computed:!1}},onSubmit:{required:!1,tsType:{name:"signature",type:"function",raw:"(values: Record<string, unknown>) => void",signature:{arguments:[{type:{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>"},name:"values"}],return:{name:"void"}}},description:"提交回调\n\n接收 FormItem 注册收集的 `{ [name]: value }` 对象。"}},composes:["Omit"]};a.__docgenInfo={description:`FormItem 表单项

提供标签、必填标记、校验反馈，布局遵循 antd Form 规范。`,methods:[],displayName:"FormItem",props:{label:{required:!1,tsType:{name:"ReactNode"},description:"标签文本"},name:{required:!1,tsType:{name:"string"},description:"字段名，用于表单数据收集"},required:{required:!1,tsType:{name:"boolean"},description:"是否必填，显示红色星号",defaultValue:{value:"false",computed:!1}},validateStatus:{required:!1,tsType:{name:"union",raw:"'success' | 'warning' | 'error' | 'validating' | ''",elements:[{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"},{name:"literal",value:"'validating'"},{name:"literal",value:"''"}]},description:"校验状态\n\n- `success` / `warning` / `error` / `validating`：边框/帮助文字带状态色\n- `''`：不展示状态",defaultValue:{value:"''",computed:!1}},help:{required:!1,tsType:{name:"ReactNode"},description:"帮助信息/错误提示"},extra:{required:!1,tsType:{name:"ReactNode"},description:"额外说明，置于 help 之上"},labelCol:{required:!1,tsType:{name:"ResponsiveCol"},description:"单独覆盖当前 FormItem 的 labelCol（不传则用 Form 上的）"},wrapperCol:{required:!1,tsType:{name:"ResponsiveCol"},description:"单独覆盖当前 FormItem 的 wrapperCol（不传则用 Form 上的）"},className:{required:!1,tsType:{name:"string"},description:"自定义类名"},children:{required:!1,tsType:{name:"ReactNode"},description:""}},composes:["HTMLAttributes"]};const ya={title:"数据录入/Form 表单",component:s,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"表单用于收集、校验和提交用户输入的数据。适用于登录注册、信息录入、高级搜索等场景，支持多种布局、校验状态和动态增减表单项。"}}},argTypes:{layout:{control:"select",options:["horizontal","vertical","inline"],description:"表单布局方式，vertical 为垂直排列，horizontal 为水平排列，inline 为行内排列"},labelAlign:{control:"select",options:["left","right"],description:"标签对齐方式，left 为左对齐，right 为右对齐"},colon:{control:"boolean",description:"是否在标签后显示冒号"},requiredMark:{control:"select",options:["start","end","hide"],description:"必填标记样式，start 为前置星号，end 为后置星号，hide 为隐藏"}}},N={parameters:{docs:{description:{story:"垂直布局表单，标签位于输入框上方，适用于大多数常规表单场景。"}}},render:()=>e.jsxs(s,{layout:"vertical",onSubmit:m(),className:"p-6",children:[e.jsx(a,{label:"用户名",name:"username",required:!0,help:"请输入用户名",children:e.jsx(r,{placeholder:"请输入用户名"})}),e.jsx(a,{label:"邮箱",name:"email",required:!0,children:e.jsx(r,{placeholder:"请输入邮箱"})}),e.jsx(a,{extra:"我们绝不会泄露您的邮箱信息",children:e.jsx(t,{variant:"primary",htmlType:"submit",children:"提交"})})]})},k={parameters:{docs:{description:{story:"水平布局表单，标签与输入框同行排列，适用于字段较少或需要紧凑排版的场景。"}}},render:()=>e.jsxs(s,{layout:"horizontal",labelCol:{span:8},wrapperCol:{span:16},colon:!0,labelAlign:"right",onSubmit:m(),className:"p-6",children:[e.jsx(a,{label:"姓名",name:"name",required:!0,children:e.jsx(r,{placeholder:"请输入姓名"})}),e.jsx(a,{label:"邮箱",name:"email",required:!0,children:e.jsx(r,{placeholder:"请输入邮箱"})}),e.jsx(a,{label:"密码",name:"password",required:!0,validateStatus:"error",help:"请输入密码",children:e.jsx(r,{type:"password",placeholder:"请输入密码"})}),e.jsx(a,{wrapperCol:{span:16,offset:8},children:e.jsx(t,{variant:"primary",htmlType:"submit",children:"保存"})})]})},R={render:()=>e.jsxs(s,{layout:"inline",onSubmit:m(),className:"p-6",children:[e.jsx(a,{label:"姓名",name:"name",required:!0,children:e.jsx(r,{placeholder:"请输入姓名"})}),e.jsx(a,{label:"邮箱",name:"email",children:e.jsx(r,{placeholder:"请输入邮箱"})}),e.jsx(t,{variant:"primary",htmlType:"submit",icon:e.jsx(He,{className:"h-4 w-4"}),children:"搜索"})]})},T={parameters:{docs:{description:{story:"展示成功、错误、警告、校验中四种校验状态，适用于需要即时反馈的表单校验场景。"}}},render:()=>e.jsxs(s,{layout:"vertical",onSubmit:m(),className:"p-6",children:[e.jsx(a,{label:"用户名",name:"username",required:!0,validateStatus:"success",help:"用户名可用",children:e.jsx(r,{defaultValue:"alice"})}),e.jsx(a,{label:"密码",name:"password",required:!0,validateStatus:"error",help:"请输入密码",children:e.jsx(r,{type:"password",placeholder:"请输入密码"})}),e.jsx(a,{label:"邮箱",name:"email",validateStatus:"warning",help:"邮箱格式不正确",children:e.jsx(r,{defaultValue:"not-an-email"})}),e.jsx(a,{label:"验证码",name:"captcha",validateStatus:"validating",help:"正在校验...",children:e.jsx(r,{placeholder:"请输入验证码"})})]})},B={render:()=>e.jsxs("div",{className:"w-full max-w-sm mx-auto p-8 border rounded-xl shadow-sm",children:[e.jsx("h2",{className:"text-xl font-semibold text-center mb-6",children:"登录"}),e.jsxs(s,{layout:"vertical",onSubmit:m(),children:[e.jsx(a,{label:"用户名",name:"username",required:!0,children:e.jsx(r,{placeholder:"请输入用户名"})}),e.jsx(a,{label:"密码",name:"password",required:!0,children:e.jsx(r,{type:"password",placeholder:"请输入密码"})}),e.jsx(a,{children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(_,{defaultChecked:!0,children:"记住我"}),e.jsx("a",{className:"text-primary-500 hover:text-primary-600 text-sm",children:"忘记密码？"})]})}),e.jsx(a,{children:e.jsx(t,{variant:"primary",block:!0,htmlType:"submit",children:"登录"})}),e.jsxs("div",{className:"text-center text-sm text-gray-500",children:["还没有账号？",e.jsx("a",{className:"text-primary-500 hover:text-primary-600",children:"立即注册！"})]})]})]})},V={parameters:{docs:{description:{story:"典型的注册表单示例，包含多种输入类型和校验提示，适用于用户信息收集场景。"}}},render:()=>e.jsxs(s,{layout:"vertical",className:"max-w-lg p-6",onSubmit:m(),children:[e.jsx(a,{label:"邮箱",name:"email",required:!0,validateStatus:"error",help:"请输入有效的邮箱！",children:e.jsx(r,{placeholder:"请输入邮箱"})}),e.jsx(a,{label:"密码",name:"password",required:!0,help:"应为数字和字母的组合",children:e.jsx(r,{type:"password",placeholder:"请输入密码"})}),e.jsx(a,{label:"确认密码",name:"confirm",required:!0,children:e.jsx(r,{type:"password",placeholder:"请再次输入密码"})}),e.jsx(a,{label:"昵称",name:"nickname",required:!0,help:"希望别人怎么称呼你？",children:e.jsx(r,{placeholder:"请输入昵称"})}),e.jsx(a,{label:"常住地",name:"residence",required:!0,children:e.jsx(I,{placeholder:"请选择常住地",options:[{value:"beijing",label:"北京"},{value:"shanghai",label:"上海"},{value:"hangzhou",label:"杭州"}]})}),e.jsx(a,{label:"手机号码",name:"phone",required:!0,children:e.jsx(r,{placeholder:"请输入手机号码"})}),e.jsx(a,{label:"捐赠金额",name:"donation",required:!0,children:e.jsx(G,{prefix:"¥",placeholder:"0.00",className:"w-full"})}),e.jsx(a,{label:"个人网站",name:"website",required:!0,children:e.jsx(r,{placeholder:"请输入网站地址"})}),e.jsx(a,{label:"验证码",name:"captcha",required:!0,extra:"我们需要确认你是人类",children:e.jsxs("div",{className:"flex gap-2",children:[e.jsx(r,{placeholder:"请输入验证码",className:"flex-1"}),e.jsx(t,{children:"获取验证码"})]})}),e.jsx(a,{name:"agreement",required:!0,children:e.jsxs(_,{children:["我已阅读并同意 ",e.jsx("a",{className:"text-primary-500 hover:text-primary-600",children:"用户协议"})]})}),e.jsx(a,{children:e.jsxs($,{children:[e.jsx(t,{variant:"primary",htmlType:"submit",children:"注册"}),e.jsx(t,{htmlType:"reset",children:"重置"})]})})]})},z={parameters:{docs:{description:{story:"可展开收起的高级搜索表单，适用于后台管理系统中的复杂筛选查询场景。"}}},render:()=>{const[l,o]=i.useState(!1);return e.jsx("div",{className:"border rounded-lg p-6 bg-gray-50/50",children:e.jsxs(s,{layout:"horizontal",labelCol:{span:6},wrapperCol:{span:18},onSubmit:m(),children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-x-6",children:[e.jsx(a,{label:"姓名",name:"name",children:e.jsx(r,{placeholder:"请输入姓名"})}),e.jsx(a,{label:"状态",name:"status",children:e.jsx(I,{placeholder:"请选择",options:[{value:"all",label:"全部"},{value:"active",label:"启用"},{value:"inactive",label:"禁用"}]})}),e.jsx(a,{label:"手机号码",name:"phone",children:e.jsx(r,{placeholder:"请输入手机号码"})}),e.jsx(a,{label:"邮箱",name:"email",children:e.jsx(r,{placeholder:"请输入邮箱"})}),l&&e.jsxs(e.Fragment,{children:[e.jsx(a,{label:"日期",name:"date",children:e.jsx(r,{placeholder:"请选择日期"})}),e.jsx(a,{label:"地址",name:"address",children:e.jsx(r,{placeholder:"请输入地址"})}),e.jsx(a,{label:"城市",name:"city",children:e.jsx(I,{placeholder:"请选择",options:[{value:"bj",label:"北京"},{value:"sh",label:"上海"}]})}),e.jsx(a,{label:"国家",name:"country",children:e.jsx(r,{placeholder:"请输入国家"})})]})]}),e.jsxs("div",{className:"flex justify-end gap-2 mt-4",children:[e.jsx(t,{variant:"primary",htmlType:"submit",icon:e.jsx(He,{className:"h-4 w-4"}),children:"搜索"}),e.jsx(t,{children:"清空"}),e.jsx(t,{variant:"link",onClick:()=>o(!l),children:l?"收起":"展开"})]})]})})}},L={parameters:{docs:{description:{story:"动态增减表单项示例，适用于乘客信息录入、规格参数配置等数量不固定的场景。"}}},render:()=>{const[l,o]=i.useState([{id:0,name:"",nickname:""}]),u=i.useRef(1),p=()=>{o([...l,{id:u.current,name:"",nickname:""}]),u.current+=1},v=n=>{o(l.filter(d=>d.id!==n))};return e.jsxs(s,{layout:"horizontal",labelCol:{span:4},wrapperCol:{span:20},className:"max-w-2xl p-6",onSubmit:m(),children:[l.map((n,d)=>e.jsxs("div",{className:"flex gap-2 items-start",children:[e.jsxs("div",{className:"flex-1 grid grid-cols-2 gap-2",children:[e.jsx(a,{label:d===0?"乘客":"",required:d===0,children:e.jsx(r,{placeholder:"姓名",name:`name-${n.id}`})}),e.jsx(a,{children:e.jsx(r,{placeholder:"昵称",name:`nickname-${n.id}`})})]}),l.length>1&&e.jsx(t,{variant:"link",className:"mt-1 text-danger-500",onClick:()=>v(n.id),icon:e.jsx(Ue,{className:"h-4 w-4"}),children:"删除"})]},n.id)),e.jsx(a,{wrapperCol:{span:20,offset:4},children:e.jsx(t,{variant:"dashed",block:!0,onClick:p,icon:e.jsx(Ge,{className:"h-4 w-4"}),children:"添加字段"})}),e.jsx(a,{wrapperCol:{span:20,offset:4},children:e.jsx($,{children:e.jsx(t,{variant:"primary",htmlType:"submit",children:"提交"})})})]})}},A={parameters:{docs:{description:{story:"整表禁用状态示例，适用于表单数据只读或提交后锁定等场景。"}}},render:()=>e.jsxs(s,{layout:"horizontal",labelCol:{span:6},wrapperCol:{span:18},className:"max-w-xl p-6",onSubmit:m(),children:[e.jsx(a,{label:"输入框",name:"input",children:e.jsx(r,{placeholder:"输入框",disabled:!0,defaultValue:"Hello"})}),e.jsx(a,{label:"选择器",name:"select",children:e.jsx(I,{disabled:!0,defaultValue:"option1",options:[{value:"option1",label:"选项 1"},{value:"option2",label:"选项 2"}]})}),e.jsx(a,{label:"复选框",name:"checkbox",children:e.jsx(_,{disabled:!0,defaultChecked:!0,children:"复选框"})}),e.jsx(a,{label:"单选框",name:"radio",children:e.jsxs(Ae,{disabled:!0,defaultValue:"a",children:[e.jsx(w,{value:"a",children:"苹果"}),e.jsx(w,{value:"b",children:"梨"})]})}),e.jsx(a,{label:"开关",name:"switch",children:e.jsx(Ee,{disabled:!0,defaultChecked:!0})}),e.jsx(a,{label:"数字输入框",name:"number",children:e.jsx(G,{disabled:!0,defaultValue:3})})]})},E={parameters:{docs:{description:{story:"多种表单控件组合使用，展示 Input、Select、InputNumber、Checkbox、Radio、Switch 等组件在表单中的协同用法。"}}},render:()=>e.jsxs(s,{layout:"horizontal",labelCol:{span:6},wrapperCol:{span:18},className:"max-w-xl p-6",onSubmit:m(),children:[e.jsx(a,{label:"输入框",name:"input",required:!0,children:e.jsx(r,{placeholder:"请输入内容"})}),e.jsx(a,{label:"选择器",name:"select",required:!0,children:e.jsx(I,{placeholder:"请选择",options:[{value:"china",label:"中国"},{value:"usa",label:"美国"},{value:"uk",label:"英国"}]})}),e.jsx(a,{label:"数字输入框",name:"number",children:e.jsx(G,{min:1,max:100,defaultValue:3})}),e.jsx(a,{label:"复选框",name:"checkbox",children:e.jsx(_,{children:"复选框"})}),e.jsx(a,{label:"单选框",name:"radio",children:e.jsxs(Ae,{defaultValue:"a",children:[e.jsx(w,{value:"a",children:"选项 A"}),e.jsx(w,{value:"b",children:"选项 B"}),e.jsx(w,{value:"c",children:"选项 C"})]})}),e.jsx(a,{label:"开关",name:"switch",children:e.jsx(Ee,{})}),e.jsx(a,{wrapperCol:{span:18,offset:6},children:e.jsxs($,{children:[e.jsx(t,{variant:"primary",htmlType:"submit",children:"提交"}),e.jsx(t,{htmlType:"reset",children:"重置"})]})})]})},H={render:()=>{const[l,o]=i.useState(""),[u,p]=i.useState(""),[v,n]=i.useState(""),d=async x=>{if(!x){p(""),n("");return}p("validating"),n("正在检查用户名..."),await new Promise(y=>setTimeout(y,1e3)),["admin","test","user"].includes(x.toLowerCase())?(p("error"),n("该用户名已被占用")):(p("success"),n("用户名可用"))};return e.jsxs(s,{layout:"vertical",className:"max-w-md p-6",onSubmit:m(),children:[e.jsx(a,{label:"用户名",name:"username",required:!0,validateStatus:u||void 0,help:v||void 0,children:e.jsx(r,{placeholder:"请输入用户名（试试 admin、test）",value:l,onChange:x=>{o(x.target.value),d(x.target.value)}})}),e.jsx(a,{label:"邮箱",name:"email",required:!0,children:e.jsx(r,{placeholder:"请输入邮箱"})}),e.jsx(a,{children:e.jsx(t,{variant:"primary",htmlType:"submit",children:"提交"})})]})}},D={parameters:{docs:{description:{story:"根据账户类型动态切换校验规则，适用于个人/企业、国内/海外等需要条件渲染的复杂表单场景。"}}},render:()=>{const[l,o]=i.useState("personal");return e.jsxs(s,{layout:"vertical",className:"max-w-md p-6",onSubmit:m(),children:[e.jsx(a,{label:"账户类型",name:"type",required:!0,children:e.jsx(I,{value:l,onChange:u=>o(u),options:[{value:"personal",label:"个人账户"},{value:"business",label:"企业账户"}]})}),l==="personal"?e.jsxs(e.Fragment,{children:[e.jsx(a,{label:"姓名",name:"name",required:!0,help:"请输入您的真实姓名",children:e.jsx(r,{placeholder:"请输入姓名"})}),e.jsx(a,{label:"身份证号",name:"idCard",required:!0,help:"请输入18位身份证号",children:e.jsx(r,{placeholder:"请输入身份证号",maxLength:18})})]}):e.jsxs(e.Fragment,{children:[e.jsx(a,{label:"企业名称",name:"companyName",required:!0,help:"请输入企业全称",children:e.jsx(r,{placeholder:"请输入企业名称"})}),e.jsx(a,{label:"统一社会信用代码",name:"creditCode",required:!0,help:"请输入18位统一社会信用代码",children:e.jsx(r,{placeholder:"请输入统一社会信用代码",maxLength:18})})]}),e.jsx(a,{label:"邮箱",name:"email",required:!0,children:e.jsx(r,{placeholder:"请输入邮箱"})}),e.jsx(a,{children:e.jsx(t,{variant:"primary",htmlType:"submit",children:"提交"})})]})}},M={parameters:{docs:{description:{story:"结合栅格系统实现嵌套布局，适用于地址、联系人等需要多列并排的信息录入场景。"}}},render:()=>e.jsxs(s,{layout:"vertical",className:"max-w-3xl p-6",onSubmit:m(),children:[e.jsxs(q,{gutter:16,children:[e.jsx(b,{span:12,children:e.jsx(a,{label:"姓",name:"lastName",required:!0,children:e.jsx(r,{placeholder:"请输入姓"})})}),e.jsx(b,{span:12,children:e.jsx(a,{label:"名",name:"firstName",required:!0,children:e.jsx(r,{placeholder:"请输入名"})})})]}),e.jsxs(q,{gutter:16,children:[e.jsx(b,{span:12,children:e.jsx(a,{label:"邮箱",name:"email",required:!0,children:e.jsx(r,{placeholder:"请输入邮箱"})})}),e.jsx(b,{span:12,children:e.jsx(a,{label:"手机号码",name:"phone",required:!0,children:e.jsx(r,{placeholder:"请输入手机号码"})})})]}),e.jsx(a,{label:"地址",name:"address",children:e.jsx(r,{placeholder:"请输入地址"})}),e.jsxs(q,{gutter:16,children:[e.jsx(b,{span:8,children:e.jsx(a,{label:"省/市",name:"province",children:e.jsx(I,{placeholder:"请选择",options:[{value:"beijing",label:"北京"},{value:"shanghai",label:"上海"},{value:"guangdong",label:"广东"}]})})}),e.jsx(b,{span:8,children:e.jsx(a,{label:"城市",name:"city",children:e.jsx(r,{placeholder:"请输入城市"})})}),e.jsx(b,{span:8,children:e.jsx(a,{label:"邮编",name:"zipCode",children:e.jsx(r,{placeholder:"请输入邮编"})})})]}),e.jsxs(q,{gutter:16,children:[e.jsx(b,{span:12,children:e.jsx(a,{label:"职位",name:"position",children:e.jsx(r,{placeholder:"请输入职位"})})}),e.jsx(b,{span:12,children:e.jsx(a,{label:"部门",name:"department",children:e.jsx(I,{placeholder:"请选择部门",options:[{value:"dev",label:"研发部"},{value:"product",label:"产品部"},{value:"design",label:"设计部"},{value:"marketing",label:"市场部"}]})})})]}),e.jsx(a,{children:e.jsxs($,{children:[e.jsx(t,{variant:"primary",htmlType:"submit",children:"提交"}),e.jsx(t,{htmlType:"reset",children:"重置"})]})})]})};var Q,X,Y;N.parameters={...N.parameters,docs:{...(Q=N.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '垂直布局表单，标签位于输入框上方，适用于大多数常规表单场景。'
      }
    }
  },
  render: () => <Form layout="vertical" onSubmit={fn()} className="p-6">
      <FormItem label="用户名" name="username" required help="请输入用户名">
        <Input placeholder="请输入用户名" />
      </FormItem>
      <FormItem label="邮箱" name="email" required>
        <Input placeholder="请输入邮箱" />
      </FormItem>
      <FormItem extra="我们绝不会泄露您的邮箱信息">
        <Button variant="primary" htmlType="submit">提交</Button>
      </FormItem>
    </Form>
}`,...(Y=(X=N.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ae;k.parameters={...k.parameters,docs:{...(Z=k.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '水平布局表单，标签与输入框同行排列，适用于字段较少或需要紧凑排版的场景。'
      }
    }
  },
  render: () => <Form layout="horizontal" labelCol={{
    span: 8
  }} wrapperCol={{
    span: 16
  }} colon labelAlign="right" onSubmit={fn()} className="p-6">
      <FormItem label="姓名" name="name" required>
        <Input placeholder="请输入姓名" />
      </FormItem>
      <FormItem label="邮箱" name="email" required>
        <Input placeholder="请输入邮箱" />
      </FormItem>
      <FormItem label="密码" name="password" required validateStatus="error" help="请输入密码">
        <Input type="password" placeholder="请输入密码" />
      </FormItem>
      <FormItem wrapperCol={{
      span: 16,
      offset: 8
    }}>
        <Button variant="primary" htmlType="submit">保存</Button>
      </FormItem>
    </Form>
}`,...(ae=(ee=k.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var re,le,te;R.parameters={...R.parameters,docs:{...(re=R.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => <Form layout="inline" onSubmit={fn()} className="p-6">
      <FormItem label="姓名" name="name" required>
        <Input placeholder="请输入姓名" />
      </FormItem>
      <FormItem label="邮箱" name="email">
        <Input placeholder="请输入邮箱" />
      </FormItem>
      <Button variant="primary" htmlType="submit" icon={<Search className="h-4 w-4" />}>搜索</Button>
    </Form>
}`,...(te=(le=R.parameters)==null?void 0:le.docs)==null?void 0:te.source}}};var se,ne,oe;T.parameters={...T.parameters,docs:{...(se=T.parameters)==null?void 0:se.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '展示成功、错误、警告、校验中四种校验状态，适用于需要即时反馈的表单校验场景。'
      }
    }
  },
  render: () => <Form layout="vertical" onSubmit={fn()} className="p-6">
      <FormItem label="用户名" name="username" required validateStatus="success" help="用户名可用">
        <Input defaultValue="alice" />
      </FormItem>
      <FormItem label="密码" name="password" required validateStatus="error" help="请输入密码">
        <Input type="password" placeholder="请输入密码" />
      </FormItem>
      <FormItem label="邮箱" name="email" validateStatus="warning" help="邮箱格式不正确">
        <Input defaultValue="not-an-email" />
      </FormItem>
      <FormItem label="验证码" name="captcha" validateStatus="validating" help="正在校验...">
        <Input placeholder="请输入验证码" />
      </FormItem>
    </Form>
}`,...(oe=(ne=T.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var ie,me,de;B.parameters={...B.parameters,docs:{...(ie=B.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => <div className="w-full max-w-sm mx-auto p-8 border rounded-xl shadow-sm">
      <h2 className="text-xl font-semibold text-center mb-6">登录</h2>
      <Form layout="vertical" onSubmit={fn()}>
        <FormItem label="用户名" name="username" required>
          <Input placeholder="请输入用户名" />
        </FormItem>
        <FormItem label="密码" name="password" required>
          <Input type="password" placeholder="请输入密码" />
        </FormItem>
        <FormItem>
          <div className="flex items-center justify-between">
            <Checkbox defaultChecked>记住我</Checkbox>
            <a className="text-primary-500 hover:text-primary-600 text-sm">忘记密码？</a>
          </div>
        </FormItem>
        <FormItem>
          <Button variant="primary" block htmlType="submit">登录</Button>
        </FormItem>
        <div className="text-center text-sm text-gray-500">
          还没有账号？<a className="text-primary-500 hover:text-primary-600">立即注册！</a>
        </div>
      </Form>
    </div>
}`,...(de=(me=B.parameters)==null?void 0:me.docs)==null?void 0:de.source}}};var ce,pe,ue;V.parameters={...V.parameters,docs:{...(ce=V.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '典型的注册表单示例，包含多种输入类型和校验提示，适用于用户信息收集场景。'
      }
    }
  },
  render: () => <Form layout="vertical" className="max-w-lg p-6" onSubmit={fn()}>
      <FormItem label="邮箱" name="email" required validateStatus="error" help="请输入有效的邮箱！">
        <Input placeholder="请输入邮箱" />
      </FormItem>
      <FormItem label="密码" name="password" required help="应为数字和字母的组合">
        <Input type="password" placeholder="请输入密码" />
      </FormItem>
      <FormItem label="确认密码" name="confirm" required>
        <Input type="password" placeholder="请再次输入密码" />
      </FormItem>
      <FormItem label="昵称" name="nickname" required help="希望别人怎么称呼你？">
        <Input placeholder="请输入昵称" />
      </FormItem>
      <FormItem label="常住地" name="residence" required>
        <Select placeholder="请选择常住地" options={[{
        value: 'beijing',
        label: '北京'
      }, {
        value: 'shanghai',
        label: '上海'
      }, {
        value: 'hangzhou',
        label: '杭州'
      }]} />
      </FormItem>
      <FormItem label="手机号码" name="phone" required>
        <Input placeholder="请输入手机号码" />
      </FormItem>
      <FormItem label="捐赠金额" name="donation" required>
        <InputNumber prefix="¥" placeholder="0.00" className="w-full" />
      </FormItem>
      <FormItem label="个人网站" name="website" required>
        <Input placeholder="请输入网站地址" />
      </FormItem>
      <FormItem label="验证码" name="captcha" required extra="我们需要确认你是人类">
        <div className="flex gap-2">
          <Input placeholder="请输入验证码" className="flex-1" />
          <Button>获取验证码</Button>
        </div>
      </FormItem>
      <FormItem name="agreement" required>
        <Checkbox>
          我已阅读并同意 <a className="text-primary-500 hover:text-primary-600">用户协议</a>
        </Checkbox>
      </FormItem>
      <FormItem>
        <Space>
          <Button variant="primary" htmlType="submit">注册</Button>
          <Button htmlType="reset">重置</Button>
        </Space>
      </FormItem>
    </Form>
}`,...(ue=(pe=V.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};var he,xe,be;z.parameters={...z.parameters,docs:{...(he=z.parameters)==null?void 0:he.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '可展开收起的高级搜索表单，适用于后台管理系统中的复杂筛选查询场景。'
      }
    }
  },
  render: () => {
    const [expand, setExpand] = useState(false);
    return <div className="border rounded-lg p-6 bg-gray-50/50">
        <Form layout="horizontal" labelCol={{
        span: 6
      }} wrapperCol={{
        span: 18
      }} onSubmit={fn()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
            <FormItem label="姓名" name="name">
              <Input placeholder="请输入姓名" />
            </FormItem>
            <FormItem label="状态" name="status">
              <Select placeholder="请选择" options={[{
              value: 'all',
              label: '全部'
            }, {
              value: 'active',
              label: '启用'
            }, {
              value: 'inactive',
              label: '禁用'
            }]} />
            </FormItem>
            <FormItem label="手机号码" name="phone">
              <Input placeholder="请输入手机号码" />
            </FormItem>
            <FormItem label="邮箱" name="email">
              <Input placeholder="请输入邮箱" />
            </FormItem>
            {expand && <>
                <FormItem label="日期" name="date">
                  <Input placeholder="请选择日期" />
                </FormItem>
                <FormItem label="地址" name="address">
                  <Input placeholder="请输入地址" />
                </FormItem>
                <FormItem label="城市" name="city">
                  <Select placeholder="请选择" options={[{
                value: 'bj',
                label: '北京'
              }, {
                value: 'sh',
                label: '上海'
              }]} />
                </FormItem>
                <FormItem label="国家" name="country">
                  <Input placeholder="请输入国家" />
                </FormItem>
              </>}
          </div>
          <div className="flex justify-end gap-2 mt-4">
            <Button variant="primary" htmlType="submit" icon={<Search className="h-4 w-4" />}>搜索</Button>
            <Button>清空</Button>
            <Button variant="link" onClick={() => setExpand(!expand)}>
              {expand ? '收起' : '展开'}
            </Button>
          </div>
        </Form>
      </div>;
  }
}`,...(be=(xe=z.parameters)==null?void 0:xe.docs)==null?void 0:be.source}}};var ve,je,Ie;L.parameters={...L.parameters,docs:{...(ve=L.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '动态增减表单项示例，适用于乘客信息录入、规格参数配置等数量不固定的场景。'
      }
    }
  },
  render: () => {
    const [fields, setFields] = useState([{
      id: 0,
      name: '',
      nickname: ''
    }]);
    const nextId = useRef(1);
    const addField = () => {
      setFields([...fields, {
        id: nextId.current,
        name: '',
        nickname: ''
      }]);
      nextId.current += 1;
    };
    const removeField = (id: number) => {
      setFields(fields.filter(f => f.id !== id));
    };
    return <Form layout="horizontal" labelCol={{
      span: 4
    }} wrapperCol={{
      span: 20
    }} className="max-w-2xl p-6" onSubmit={fn()}>
        {fields.map((field, index) => <div key={field.id} className="flex gap-2 items-start">
            <div className="flex-1 grid grid-cols-2 gap-2">
              <FormItem label={index === 0 ? '乘客' : ''} required={index === 0}>
                <Input placeholder="姓名" name={\`name-\${field.id}\`} />
              </FormItem>
              <FormItem>
                <Input placeholder="昵称" name={\`nickname-\${field.id}\`} />
              </FormItem>
            </div>
            {fields.length > 1 && <Button variant="link" className="mt-1 text-danger-500" onClick={() => removeField(field.id)} icon={<Minus className="h-4 w-4" />}>
                删除
              </Button>}
          </div>)}
        <FormItem wrapperCol={{
        span: 20,
        offset: 4
      }}>
          <Button variant="dashed" block onClick={addField} icon={<Plus className="h-4 w-4" />}>
            添加字段
          </Button>
        </FormItem>
        <FormItem wrapperCol={{
        span: 20,
        offset: 4
      }}>
          <Space>
            <Button variant="primary" htmlType="submit">提交</Button>
          </Space>
        </FormItem>
      </Form>;
  }
}`,...(Ie=(je=L.parameters)==null?void 0:je.docs)==null?void 0:Ie.source}}};var fe,Fe,ye;A.parameters={...A.parameters,docs:{...(fe=A.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '整表禁用状态示例，适用于表单数据只读或提交后锁定等场景。'
      }
    }
  },
  render: () => <Form layout="horizontal" labelCol={{
    span: 6
  }} wrapperCol={{
    span: 18
  }} className="max-w-xl p-6" onSubmit={fn()}>
      <FormItem label="输入框" name="input">
        <Input placeholder="输入框" disabled defaultValue="Hello" />
      </FormItem>
      <FormItem label="选择器" name="select">
        <Select disabled defaultValue="option1" options={[{
        value: 'option1',
        label: '选项 1'
      }, {
        value: 'option2',
        label: '选项 2'
      }]} />
      </FormItem>
      <FormItem label="复选框" name="checkbox">
        <Checkbox disabled defaultChecked>复选框</Checkbox>
      </FormItem>
      <FormItem label="单选框" name="radio">
        <RadioGroup disabled defaultValue="a">
          <Radio value="a">苹果</Radio>
          <Radio value="b">梨</Radio>
        </RadioGroup>
      </FormItem>
      <FormItem label="开关" name="switch">
        <Switch disabled defaultChecked />
      </FormItem>
      <FormItem label="数字输入框" name="number">
        <InputNumber disabled defaultValue={3} />
      </FormItem>
    </Form>
}`,...(ye=(Fe=A.parameters)==null?void 0:Fe.docs)==null?void 0:ye.source}}};var ge,we,Ce;E.parameters={...E.parameters,docs:{...(ge=E.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '多种表单控件组合使用，展示 Input、Select、InputNumber、Checkbox、Radio、Switch 等组件在表单中的协同用法。'
      }
    }
  },
  render: () => <Form layout="horizontal" labelCol={{
    span: 6
  }} wrapperCol={{
    span: 18
  }} className="max-w-xl p-6" onSubmit={fn()}>
      <FormItem label="输入框" name="input" required>
        <Input placeholder="请输入内容" />
      </FormItem>
      <FormItem label="选择器" name="select" required>
        <Select placeholder="请选择" options={[{
        value: 'china',
        label: '中国'
      }, {
        value: 'usa',
        label: '美国'
      }, {
        value: 'uk',
        label: '英国'
      }]} />
      </FormItem>
      <FormItem label="数字输入框" name="number">
        <InputNumber min={1} max={100} defaultValue={3} />
      </FormItem>
      <FormItem label="复选框" name="checkbox">
        <Checkbox>复选框</Checkbox>
      </FormItem>
      <FormItem label="单选框" name="radio">
        <RadioGroup defaultValue="a">
          <Radio value="a">选项 A</Radio>
          <Radio value="b">选项 B</Radio>
          <Radio value="c">选项 C</Radio>
        </RadioGroup>
      </FormItem>
      <FormItem label="开关" name="switch">
        <Switch />
      </FormItem>
      <FormItem wrapperCol={{
      span: 18,
      offset: 6
    }}>
        <Space>
          <Button variant="primary" htmlType="submit">提交</Button>
          <Button htmlType="reset">重置</Button>
        </Space>
      </FormItem>
    </Form>
}`,...(Ce=(we=E.parameters)==null?void 0:we.docs)==null?void 0:Ce.source}}};var Se,qe,Ne;H.parameters={...H.parameters,docs:{...(Se=H.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  render: () => {
    const [username, setUsername] = useState('');
    const [validateStatus, setValidateStatus] = useState<'' | 'validating' | 'success' | 'error'>('');
    const [help, setHelp] = useState('');
    const checkUsername = async (value: string) => {
      if (!value) {
        setValidateStatus('');
        setHelp('');
        return;
      }
      setValidateStatus('validating');
      setHelp('正在检查用户名...');
      await new Promise(resolve => setTimeout(resolve, 1000));
      const taken = ['admin', 'test', 'user'].includes(value.toLowerCase());
      if (taken) {
        setValidateStatus('error');
        setHelp('该用户名已被占用');
      } else {
        setValidateStatus('success');
        setHelp('用户名可用');
      }
    };
    return <Form layout="vertical" className="max-w-md p-6" onSubmit={fn()}>
        <FormItem label="用户名" name="username" required validateStatus={validateStatus || undefined} help={help || undefined}>
          <Input placeholder="请输入用户名（试试 admin、test）" value={username} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setUsername(e.target.value);
          checkUsername(e.target.value);
        }} />
        </FormItem>
        <FormItem label="邮箱" name="email" required>
          <Input placeholder="请输入邮箱" />
        </FormItem>
        <FormItem>
          <Button variant="primary" htmlType="submit">提交</Button>
        </FormItem>
      </Form>;
  }
}`,...(Ne=(qe=H.parameters)==null?void 0:qe.docs)==null?void 0:Ne.source}}};var ke,Re,Te;D.parameters={...D.parameters,docs:{...(ke=D.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '根据账户类型动态切换校验规则，适用于个人/企业、国内/海外等需要条件渲染的复杂表单场景。'
      }
    }
  },
  render: () => {
    const [type, setType] = useState<'personal' | 'business'>('personal');
    return <Form layout="vertical" className="max-w-md p-6" onSubmit={fn()}>
        <FormItem label="账户类型" name="type" required>
          <Select value={type} onChange={(val: string) => setType(val as 'personal' | 'business')} options={[{
          value: 'personal',
          label: '个人账户'
        }, {
          value: 'business',
          label: '企业账户'
        }]} />
        </FormItem>
        {type === 'personal' ? <>
            <FormItem label="姓名" name="name" required help="请输入您的真实姓名">
              <Input placeholder="请输入姓名" />
            </FormItem>
            <FormItem label="身份证号" name="idCard" required help="请输入18位身份证号">
              <Input placeholder="请输入身份证号" maxLength={18} />
            </FormItem>
          </> : <>
            <FormItem label="企业名称" name="companyName" required help="请输入企业全称">
              <Input placeholder="请输入企业名称" />
            </FormItem>
            <FormItem label="统一社会信用代码" name="creditCode" required help="请输入18位统一社会信用代码">
              <Input placeholder="请输入统一社会信用代码" maxLength={18} />
            </FormItem>
          </>}
        <FormItem label="邮箱" name="email" required>
          <Input placeholder="请输入邮箱" />
        </FormItem>
        <FormItem>
          <Button variant="primary" htmlType="submit">提交</Button>
        </FormItem>
      </Form>;
  }
}`,...(Te=(Re=D.parameters)==null?void 0:Re.docs)==null?void 0:Te.source}}};var Be,Ve,ze;M.parameters={...M.parameters,docs:{...(Be=M.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '结合栅格系统实现嵌套布局，适用于地址、联系人等需要多列并排的信息录入场景。'
      }
    }
  },
  render: () => <Form layout="vertical" className="max-w-3xl p-6" onSubmit={fn()}>
      <Row gutter={16}>
        <Col span={12}>
          <FormItem label="姓" name="lastName" required>
            <Input placeholder="请输入姓" />
          </FormItem>
        </Col>
        <Col span={12}>
          <FormItem label="名" name="firstName" required>
            <Input placeholder="请输入名" />
          </FormItem>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <FormItem label="邮箱" name="email" required>
            <Input placeholder="请输入邮箱" />
          </FormItem>
        </Col>
        <Col span={12}>
          <FormItem label="手机号码" name="phone" required>
            <Input placeholder="请输入手机号码" />
          </FormItem>
        </Col>
      </Row>
      <FormItem label="地址" name="address">
        <Input placeholder="请输入地址" />
      </FormItem>
      <Row gutter={16}>
        <Col span={8}>
          <FormItem label="省/市" name="province">
            <Select placeholder="请选择" options={[{
            value: 'beijing',
            label: '北京'
          }, {
            value: 'shanghai',
            label: '上海'
          }, {
            value: 'guangdong',
            label: '广东'
          }]} />
          </FormItem>
        </Col>
        <Col span={8}>
          <FormItem label="城市" name="city">
            <Input placeholder="请输入城市" />
          </FormItem>
        </Col>
        <Col span={8}>
          <FormItem label="邮编" name="zipCode">
            <Input placeholder="请输入邮编" />
          </FormItem>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={12}>
          <FormItem label="职位" name="position">
            <Input placeholder="请输入职位" />
          </FormItem>
        </Col>
        <Col span={12}>
          <FormItem label="部门" name="department">
            <Select placeholder="请选择部门" options={[{
            value: 'dev',
            label: '研发部'
          }, {
            value: 'product',
            label: '产品部'
          }, {
            value: 'design',
            label: '设计部'
          }, {
            value: 'marketing',
            label: '市场部'
          }]} />
          </FormItem>
        </Col>
      </Row>
      <FormItem>
        <Space>
          <Button variant="primary" htmlType="submit">提交</Button>
          <Button htmlType="reset">重置</Button>
        </Space>
      </FormItem>
    </Form>
}`,...(ze=(Ve=M.parameters)==null?void 0:Ve.docs)==null?void 0:ze.source}}};const ga=["Vertical","Horizontal","Inline","WithValidation","LoginForm","RegisterForm","AdvancedSearch","DynamicFormItems","DisabledForm","FormControls","CustomValidation","DynamicRules","NestedLayout"];export{z as AdvancedSearch,H as CustomValidation,A as DisabledForm,L as DynamicFormItems,D as DynamicRules,E as FormControls,k as Horizontal,R as Inline,B as LoginForm,M as NestedLayout,V as RegisterForm,N as Vertical,T as WithValidation,ga as __namedExportsOrder,ya as default};
