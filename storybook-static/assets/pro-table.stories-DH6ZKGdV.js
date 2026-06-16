import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as o}from"./index-GiUgBvb1.js";import{a as A}from"./utils-BEhiKRD9.js";import{T as Et}from"./index-Bj-LNP2D.js";import{P as At}from"./index-DxlAc9Gc.js";import{I as ft}from"./index-BJCQqJ4b.js";import{B as G}from"./index-WhxK0hy4.js";import{P as Lt}from"./index-Cko5bnEN.js";import{C as Bt}from"./index-SScp5wZW.js";import{c as L}from"./index-C08JwjkN.js";import{S as Kt}from"./search-DufjXXN7.js";import{c as wt}from"./createLucideIcon-CZe00VV7.js";import{S as _t}from"./index-pixgFsiF.js";import"./index-DxgPyYqA.js";import"./index-CROobee-.js";import"./arrow-up-Cfl0ziE_.js";import"./arrow-down-C2u3D9px.js";import"./loader-circle-CulI208u.js";import"./chevron-left-08BNpNZ8.js";import"./chevron-right-V463yFHa.js";import"./x-B-5N0Ikz.js";import"./minus-DzxWgTKt.js";import"./check-DytZnMFh.js";import"./chevron-down-CY-YwltC.js";/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wt=wt("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ht=wt("Settings2",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]),$t=L("w-full flex flex-col border border-border rounded-md",{variants:{},defaultVariants:{}}),Ot=L("flex items-center justify-between py-2 px-4 border-b border-border bg-background",{variants:{},defaultVariants:{}}),Gt=L("flex items-center gap-2 py-2 px-4 border-b border-border bg-muted/30",{variants:{collapsed:{true:"hidden",false:""}},defaultVariants:{collapsed:!1}}),Jt=L("flex items-center justify-end py-2 px-4 border-t border-border",{variants:{},defaultVariants:{}});function Qt(a,n){return a==null?"-":{money:()=>`¥${Number(a).toLocaleString()}`,number:()=>Number(a).toLocaleString(),date:()=>String(a),select:()=>String(a),text:()=>String(a)}[n]()}function Xt(a,n){return a.filter(t=>!t.hideInTable&&n.has(t.dataIndex)).map(t=>{const r={title:t.title,dataIndex:t.dataIndex,key:t.dataIndex,width:t.width,sorter:typeof t.sorter=="boolean"?t.sorter:void 0,filters:t.filters,editable:t.editable,renderEdit:t.renderFormItem?(d,c,M,w)=>t.renderFormItem({value:d,onChange:w}):void 0};return t.render?r.render=t.render:t.valueType&&t.valueType!=="text"&&(r.render=d=>Qt(d,t.valueType)),r})}function Yt(a,n){var te;const{className:t,request:r,columns:d,dataSource:c,search:M=!1,toolbar:w=!1,manualRequest:Q=!1,polling:B,defaultPageSize:K=10,rowKey:gt="id",onLoadingChange:b,...vt}=a,[Tt,X]=o.useState(!1),[_,It]=o.useState([]),[St,Pt]=o.useState(0),[g,W]=o.useState(1),[h,qt]=o.useState(K),[m,jt]=o.useState(""),[H,Ct]=o.useState(""),[V,Nt]=o.useState(()=>new Set(d.filter(s=>!s.hideInTable).map(s=>s.dataIndex))),$=o.useRef(),p=o.useCallback(async(s,i,y)=>{if(r){X(!0),b==null||b(!0);try{const v=await r({current:s,pageSize:i,keyword:y||void 0});v.success&&(It(v.data),Pt(v.total))}finally{X(!1),b==null||b(!1)}}},[r,b]);o.useEffect(()=>{r&&!Q&&p(1,K,"")},[r,Q,p,K]),o.useEffect(()=>{if(!(!B||!r))return $.current=setInterval(()=>p(g,h,m),B),()=>{$.current&&clearInterval($.current)}},[B,r,p,g,h,m]);const Y=()=>{jt(H),W(1),r&&p(1,h,H)},Rt=()=>{r&&p(g,h,m)},kt=(s,i)=>{W(s),r&&p(s,i,m)},zt=s=>{qt(s),W(1),r&&p(1,s,m)},E=!!r,Z=o.useMemo(()=>{const s=c??_;if(!m||E)return s;const i=m.toLowerCase();return s.filter(y=>Object.values(y).some(v=>String(v).toLowerCase().includes(i)))},[c,_,m,E]),O=E?St:Z.length,ee=(g-1)*h,Ut=E?_:Z.slice(ee,ee+h),Dt=o.useMemo(()=>Xt(d,V),[d,V]),Ft=M!==!1,Mt=w!==!1,Vt=typeof M=="object"?M.defaultCollapsed:!1;return e.jsxs("div",{ref:n,className:A($t(),t),...vt,children:[Ft&&e.jsxs("div",{className:A(Gt({collapsed:Vt})),children:[e.jsx(ft,{prefix:e.jsx(Kt,{className:"h-4 w-4"}),placeholder:"搜索关键词...",value:H,onChange:s=>Ct(s.target.value),onKeyDown:s=>{s.key==="Enter"&&Y()}}),e.jsx(G,{variant:"primary",onClick:Y,children:"搜索"})]}),Mt&&e.jsxs("div",{className:A(Ot()),children:[e.jsxs("span",{className:"text-sm text-muted-foreground",children:["共 ",O," 条记录"]}),e.jsxs("div",{className:"flex items-center gap-2",children:[typeof w=="object"&&((te=w.actions)==null?void 0:te.map((s,i)=>e.jsx("span",{children:s},i))),e.jsx(G,{variant:"text",icon:e.jsx(Wt,{className:"h-4 w-4"}),onClick:Rt}),e.jsx(Lt,{trigger:"click",content:e.jsx("div",{className:"py-1 space-y-0.5",children:d.map(s=>e.jsxs("label",{className:"flex items-center gap-2 px-2 py-1 hover:bg-muted cursor-pointer",children:[e.jsx(Bt,{checked:V.has(s.dataIndex),onChange:i=>{const y=new Set(V);i?y.add(s.dataIndex):y.delete(s.dataIndex),Nt(y)}}),e.jsx("span",{className:"text-sm",children:s.title})]},s.dataIndex))}),children:e.jsx(G,{variant:"text",icon:e.jsx(Ht,{className:"h-4 w-4"})})})]})]}),e.jsx(Et,{columns:Dt,dataSource:Ut,rowKey:gt,height:400,loading:Tt,bordered:!1,pagination:!1}),O>0&&e.jsx("div",{className:A(Jt()),children:e.jsx(At,{current:g,pageSize:h,total:O,onChange:kt,onPageSizeChange:zt,showTotal:!0,showSizeChanger:!0})})]})}const J=o.forwardRef(Yt);J.displayName="ProTable";const l=J;J.__docgenInfo={description:"ProTable 核心逻辑",methods:[],displayName:"ProTable",props:{request:{required:!1,tsType:{name:"signature",type:"function",raw:"(params: ProTableRequestParams) => Promise<ProTableRequestResult<T>>",signature:{arguments:[{type:{name:"ProTableRequestParams"},name:"params"}],return:{name:"Promise",elements:[{name:"ProTableRequestResult",elements:[{name:"T"}],raw:"ProTableRequestResult<T>"}],raw:"Promise<ProTableRequestResult<T>>"}}},description:"异步数据请求函数。提供后自动管理 loading 和分页"},columns:{required:!0,tsType:{name:"Array",elements:[{name:"ProTableColumn",elements:[{name:"T"}],raw:"ProTableColumn<T>"}],raw:"ProTableColumn<T>[]"},description:"列配置数组，定义表格的列信息和行为"},dataSource:{required:!1,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:"静态数据源。与 request 互斥，提供 request 时忽略"},search:{required:!1,tsType:{name:"union",raw:"boolean | { defaultCollapsed?: boolean }",elements:[{name:"boolean"},{name:"signature",type:"object",raw:"{ defaultCollapsed?: boolean }",signature:{properties:[{key:"defaultCollapsed",value:{name:"boolean",required:!1}}]}}]},description:"是否显示搜索栏。true 显示默认搜索框，对象形式可配置折叠"},toolbar:{required:!1,tsType:{name:"union",raw:"boolean | { actions?: ReactNode[] }",elements:[{name:"boolean"},{name:"signature",type:"object",raw:"{ actions?: ReactNode[] }",signature:{properties:[{key:"actions",value:{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]",required:!1}}]}}]},description:"工具栏配置。true 显示默认工具栏（刷新/列设置），对象形式可自定义操作"},manualRequest:{required:!1,tsType:{name:"boolean"},description:"是否手动触发请求。true 时不自动请求，需调用 reload"},polling:{required:!1,tsType:{name:"number"},description:"轮询间隔毫秒数。大于 0 时定时刷新数据"},defaultPageSize:{required:!1,tsType:{name:"number"},description:"默认每页条数，默认 10"},rowKey:{required:!1,tsType:{name:"string"},description:"行数据的唯一标识字段名，默认 'id'"},onLoadingChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(loading: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"loading"}],return:{name:"void"}}},description:"数据加载中回调"}},composes:["Omit"]};const Zt=["技术部","产品部","设计部","运营部"],ea=["在职","离职","试用期"],f=Array.from({length:46},(a,n)=>({id:n+1,name:`用户${n+1}`,age:20+n%30,department:Zt[n%4],status:ea[n%3],salary:8e3+n*500,joinDate:`2024-${String(n%12+1).padStart(2,"0")}-${String(n%28+1).padStart(2,"0")}`}));async function u(a){await new Promise(r=>setTimeout(r,600));let n=[...f];if(a.keyword){const r=a.keyword.toLowerCase();n=n.filter(d=>d.name.toLowerCase().includes(r)||d.department.toLowerCase().includes(r))}const t=(a.current-1)*a.pageSize;return{data:n.slice(t,t+a.pageSize),total:n.length,success:!0}}const x=[{title:"ID",dataIndex:"id",width:60},{title:"姓名",dataIndex:"name",width:100},{title:"年龄",dataIndex:"age",width:80,valueType:"number"},{title:"部门",dataIndex:"department",width:120,filters:[{text:"技术部",value:"技术部"},{text:"产品部",value:"产品部"},{text:"设计部",value:"设计部"},{text:"运营部",value:"运营部"}]},{title:"状态",dataIndex:"status",width:100,filters:[{text:"在职",value:"在职"},{text:"离职",value:"离职"},{text:"试用期",value:"试用期"}]},{title:"薪资",dataIndex:"salary",width:120,valueType:"money",sorter:!0},{title:"入职日期",dataIndex:"joinDate",width:120,valueType:"date"}],Pa={title:"数据展示/ProTable 高级表格",component:l,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:["ProTable 是基于 Table 封装的**高阶业务表格**，专为中后台管理系统设计。","","### 与基础 Table 的区别","","| 特性 | Table（基础表格） | ProTable（高级表格） |","|------|-----------------|-------------------|","| 定位 | 低级别构建块 | 高阶业务封装 |","| 数据源 | 仅 dataSource 静态数据 | request 异步请求 + dataSource 静态数据 |","| 搜索 | 需手动实现 | 内置搜索栏（search prop） |","| 工具栏 | 无 | 内置刷新/列显隐/自定义操作（toolbar prop） |","| 分页 | 手动配置 Pagination | 自动管理（request 模式内置） |","| 值类型 | 需自定义 render | 内置 money/number/date/text/select 格式化 |","| 轮询刷新 | 需手动 setInterval | polling prop 一行配置 |","| 列显隐 | 需手动管理 | hideInTable + 工具栏设置面板 |","| 行内编辑 | editable + renderEdit | editable + renderFormItem |","| 虚拟滚动 | react-virtuoso（内置） | 通过 Table 继承 |","| 固定列/展开行/行选择 | 完整支持 | 通过 Table 继承 |","","**选型建议**：中后台列表页（搜索 + 分页 + 筛选 + 工具栏）用 ProTable；","需要精细控制虚拟滚动、固定列、行选择等底层能力时用 Table。"].join(`
`)}}},argTypes:{columns:{control:"object",description:"列配置数组，支持 hideInTable / valueType / editable / renderFormItem / filters / sorter 等增强配置"},request:{description:"异步数据请求函数。传入后自动管理 loading、分页和数据，与 dataSource 互斥"},dataSource:{control:"object",description:"静态数据源。与 request 互斥，request 存在时忽略"},search:{control:"boolean",description:"搜索栏配置。true 显示默认搜索框；对象形式可配置 defaultCollapsed 折叠"},toolbar:{control:"boolean",description:"工具栏配置。true 显示刷新/列设置；对象形式可通过 actions 注入自定义操作按钮"},manualRequest:{control:"boolean",description:"是否手动触发首次请求。true 时组件挂载不自动请求，需通过搜索/刷新触发"},polling:{control:"number",description:"轮询间隔（毫秒）。设置后按间隔自动重新请求数据，适用于实时监控场景"},defaultPageSize:{control:"number",description:"默认每页条数，默认 10"},rowKey:{control:"text",description:'行数据唯一标识字段名，默认 "id"'},onLoadingChange:{description:"加载状态变化回调，参数为 boolean"}}},T={render:()=>e.jsx("div",{className:"w-full min-w-[700px]",children:e.jsx(l,{columns:x,dataSource:f.slice(0,10),defaultPageSize:5})})},I={render:()=>e.jsx("div",{className:"w-full min-w-[700px]",children:e.jsx(l,{columns:x,request:u,defaultPageSize:5})})},S={render:()=>e.jsx("div",{className:"w-full min-w-[700px]",children:e.jsx(l,{columns:x,request:u,search:!0,defaultPageSize:5})})},P={render:()=>e.jsx("div",{className:"w-full min-w-[700px]",children:e.jsx(l,{columns:x,request:u,toolbar:!0,defaultPageSize:5})})},q={render:()=>e.jsx("div",{className:"w-full min-w-[700px]",children:e.jsx(l,{columns:x,request:u,search:!0,toolbar:{actions:[e.jsx("button",{type:"button",className:"text-sm text-primary-500 hover:text-primary-600",children:"新增用户"},"add")]},defaultPageSize:5})})},j={render:()=>{const a=[{title:"ID",dataIndex:"id",width:60,sorter:!0},{title:"姓名",dataIndex:"name",width:100},{title:"部门",dataIndex:"department",width:120,filters:[{text:"技术部",value:"技术部"},{text:"产品部",value:"产品部"},{text:"设计部",value:"设计部"},{text:"运营部",value:"运营部"}]},{title:"薪资",dataIndex:"salary",width:120,valueType:"money",sorter:!0},{title:"入职日期",dataIndex:"joinDate",width:120,valueType:"date"}];return e.jsx("div",{className:"w-full min-w-[700px]",children:e.jsx(l,{columns:a,request:u,toolbar:!0,defaultPageSize:5})})}},C={render:()=>{const a=[{title:"姓名",dataIndex:"name",width:100},{title:"部门",dataIndex:"department",width:120},{title:"薪资",dataIndex:"salary",width:120,valueType:"money"},{title:"隐藏列",dataIndex:"status",width:100,hideInTable:!0}];return e.jsx("div",{className:"w-full min-w-[500px]",children:e.jsx(l,{columns:a,dataSource:f.slice(0,5),toolbar:!0})})}},N={render:()=>{const a=[{title:"姓名(text)",dataIndex:"name",width:120,valueType:"text"},{title:"年龄(number)",dataIndex:"age",width:100,valueType:"number"},{title:"薪资(money)",dataIndex:"salary",width:120,valueType:"money"},{title:"入职日期(date)",dataIndex:"joinDate",width:140,valueType:"date"},{title:"状态(select)",dataIndex:"status",width:100,valueType:"select"}];return e.jsx("div",{className:"w-full min-w-[600px]",children:e.jsx(l,{columns:a,dataSource:f.slice(0,5)})})}},R={render:()=>{const a=[{title:"ID",dataIndex:"id",width:60},{title:"姓名（可编辑）",dataIndex:"name",width:160,editable:!0,renderFormItem:({value:n,onChange:t})=>e.jsx(ft,{defaultValue:String(n??""),onBlur:r=>t(r.target.value),autoFocus:!0})},{title:"部门（可编辑）",dataIndex:"department",width:160,editable:!0,renderFormItem:({value:n,onChange:t})=>e.jsx(_t,{defaultValue:String(n??""),onChange:r=>t(r),options:[{label:"技术部",value:"技术部"},{label:"产品部",value:"产品部"},{label:"设计部",value:"设计部"},{label:"运营部",value:"运营部"}]})},{title:"薪资",dataIndex:"salary",width:120,valueType:"money"},{title:"状态",dataIndex:"status",width:100}];return e.jsx("div",{className:"w-full min-w-[700px]",children:e.jsx(l,{columns:a,dataSource:f.slice(0,8),toolbar:{actions:[e.jsx("span",{className:"text-xs text-muted-foreground",children:"双击姓名或部门列进入编辑"},"tip")]},onLoadingChange:()=>{}})})}},k={render:()=>{const a=async t=>{await new Promise(c=>setTimeout(c,300));const r=f.slice(0,10).map(c=>({...c,salary:c.salary+Math.floor(Math.random()*1e3-500)})),d=(t.current-1)*t.pageSize;return{data:r.slice(d,d+t.pageSize),total:r.length,success:!0}},n=[{title:"ID",dataIndex:"id",width:60},{title:"姓名",dataIndex:"name",width:100},{title:"部门",dataIndex:"department",width:120},{title:"薪资（实时）",dataIndex:"salary",width:140,valueType:"money"},{title:"状态",dataIndex:"status",width:100}];return e.jsx("div",{className:"w-full min-w-[700px]",children:e.jsx(l,{columns:n,request:a,polling:3e3,toolbar:!0,defaultPageSize:5})})}},z={render:()=>e.jsx("div",{className:"w-full min-w-[700px]",children:e.jsx(l,{columns:x,request:u,manualRequest:!0,search:!0,toolbar:!0,defaultPageSize:5})})},U={render:()=>e.jsx("div",{className:"w-full min-w-[700px]",children:e.jsx(l,{columns:x,request:u,search:{defaultCollapsed:!0},toolbar:!0,defaultPageSize:5})})},D={render:()=>e.jsx("div",{className:"w-full min-w-[700px]",children:e.jsx(l,{columns:x,request:u,search:!0,toolbar:{actions:[e.jsx("button",{type:"button",className:"text-sm px-3 py-1 rounded border border-border hover:bg-muted",children:"导出"},"export"),e.jsx("button",{type:"button",className:"text-sm px-3 py-1 rounded border border-border hover:bg-muted text-danger-500",children:"批量删除"},"batch-delete"),e.jsx("button",{type:"button",className:"text-sm px-3 py-1 rounded bg-primary-500 text-white hover:bg-primary-600",children:"新增用户"},"add")]},defaultPageSize:5})})},F={render:()=>{const a=[{title:"ID",dataIndex:"id",width:60,sorter:!0},{title:"姓名",dataIndex:"name",width:100},{title:"部门",dataIndex:"department",width:120,filters:[{text:"技术部",value:"技术部"},{text:"产品部",value:"产品部"}]},{title:"薪资",dataIndex:"salary",width:120,valueType:"money",sorter:!0},{title:"状态",dataIndex:"status",width:100}];return e.jsxs("div",{className:"w-full min-w-[700px]",children:[e.jsx("div",{className:"mb-2 text-sm text-muted-foreground",children:"ProTable 模式：request + search + toolbar 即可覆盖搜索/分页/刷新/列配置场景"}),e.jsx(l,{columns:a,request:u,search:!0,toolbar:{actions:[e.jsx("button",{type:"button",className:"text-sm text-primary-500 hover:text-primary-600",children:"+ 新增"},"add")]},defaultPageSize:5})]})}};var ae,re,se,ne,oe;T.parameters={...T.parameters,docs:{...(ae=T.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => <div className="w-full min-w-[700px]">
      <ProTable<User> columns={baseColumns} dataSource={mockUsers.slice(0, 10)} defaultPageSize={5} />
    </div>
}`,...(se=(re=T.parameters)==null?void 0:re.docs)==null?void 0:se.source},description:{story:"基础用法（静态数据）",...(oe=(ne=T.parameters)==null?void 0:ne.docs)==null?void 0:oe.description}}};var le,de,ie,ue,ce;I.parameters={...I.parameters,docs:{...(le=I.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => <div className="w-full min-w-[700px]">
      <ProTable<User> columns={baseColumns} request={mockRequest} defaultPageSize={5} />
    </div>
}`,...(ie=(de=I.parameters)==null?void 0:de.docs)==null?void 0:ie.source},description:{story:"异步请求",...(ce=(ue=I.parameters)==null?void 0:ue.docs)==null?void 0:ce.description}}};var me,pe,xe,be,he;S.parameters={...S.parameters,docs:{...(me=S.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: () => <div className="w-full min-w-[700px]">
      <ProTable<User> columns={baseColumns} request={mockRequest} search defaultPageSize={5} />
    </div>
}`,...(xe=(pe=S.parameters)==null?void 0:pe.docs)==null?void 0:xe.source},description:{story:"带搜索栏",...(he=(be=S.parameters)==null?void 0:be.docs)==null?void 0:he.description}}};var ye,fe,we,ge,ve;P.parameters={...P.parameters,docs:{...(ye=P.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  render: () => <div className="w-full min-w-[700px]">
      <ProTable<User> columns={baseColumns} request={mockRequest} toolbar defaultPageSize={5} />
    </div>
}`,...(we=(fe=P.parameters)==null?void 0:fe.docs)==null?void 0:we.source},description:{story:"带工具栏",...(ve=(ge=P.parameters)==null?void 0:ge.docs)==null?void 0:ve.description}}};var Te,Ie,Se,Pe,qe;q.parameters={...q.parameters,docs:{...(Te=q.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  render: () => <div className="w-full min-w-[700px]">
      <ProTable<User> columns={baseColumns} request={mockRequest} search toolbar={{
      actions: [<button key="add" type="button" className="text-sm text-primary-500 hover:text-primary-600">新增用户</button>]
    }} defaultPageSize={5} />
    </div>
}`,...(Se=(Ie=q.parameters)==null?void 0:Ie.docs)==null?void 0:Se.source},description:{story:"完整功能（搜索 + 工具栏 + 异步请求）",...(qe=(Pe=q.parameters)==null?void 0:Pe.docs)==null?void 0:qe.description}}};var je,Ce,Ne,Re,ke;j.parameters={...j.parameters,docs:{...(je=j.parameters)==null?void 0:je.docs,source:{originalSource:`{
  render: () => {
    const columns: ProTableColumn<User>[] = [{
      title: 'ID',
      dataIndex: 'id',
      width: 60,
      sorter: true
    }, {
      title: '姓名',
      dataIndex: 'name',
      width: 100
    }, {
      title: '部门',
      dataIndex: 'department',
      width: 120,
      filters: [{
        text: '技术部',
        value: '技术部'
      }, {
        text: '产品部',
        value: '产品部'
      }, {
        text: '设计部',
        value: '设计部'
      }, {
        text: '运营部',
        value: '运营部'
      }]
    }, {
      title: '薪资',
      dataIndex: 'salary',
      width: 120,
      valueType: 'money',
      sorter: true
    }, {
      title: '入职日期',
      dataIndex: 'joinDate',
      width: 120,
      valueType: 'date'
    }];
    return <div className="w-full min-w-[700px]">
        <ProTable<User> columns={columns} request={mockRequest} toolbar defaultPageSize={5} />
      </div>;
  }
}`,...(Ne=(Ce=j.parameters)==null?void 0:Ce.docs)==null?void 0:Ne.source},description:{story:"列筛选与排序",...(ke=(Re=j.parameters)==null?void 0:Re.docs)==null?void 0:ke.description}}};var ze,Ue,De,Fe,Me;C.parameters={...C.parameters,docs:{...(ze=C.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  render: () => {
    const columns: ProTableColumn<User>[] = [{
      title: '姓名',
      dataIndex: 'name',
      width: 100
    }, {
      title: '部门',
      dataIndex: 'department',
      width: 120
    }, {
      title: '薪资',
      dataIndex: 'salary',
      width: 120,
      valueType: 'money'
    }, {
      title: '隐藏列',
      dataIndex: 'status',
      width: 100,
      hideInTable: true
    }];
    return <div className="w-full min-w-[500px]">
        <ProTable<User> columns={columns} dataSource={mockUsers.slice(0, 5)} toolbar />
      </div>;
  }
}`,...(De=(Ue=C.parameters)==null?void 0:Ue.docs)==null?void 0:De.source},description:{story:"隐藏列",...(Me=(Fe=C.parameters)==null?void 0:Fe.docs)==null?void 0:Me.description}}};var Ve,Ee,Ae,Le,Be;N.parameters={...N.parameters,docs:{...(Ve=N.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  render: () => {
    const columns: ProTableColumn<User>[] = [{
      title: '姓名(text)',
      dataIndex: 'name',
      width: 120,
      valueType: 'text'
    }, {
      title: '年龄(number)',
      dataIndex: 'age',
      width: 100,
      valueType: 'number'
    }, {
      title: '薪资(money)',
      dataIndex: 'salary',
      width: 120,
      valueType: 'money'
    }, {
      title: '入职日期(date)',
      dataIndex: 'joinDate',
      width: 140,
      valueType: 'date'
    }, {
      title: '状态(select)',
      dataIndex: 'status',
      width: 100,
      valueType: 'select'
    }];
    return <div className="w-full min-w-[600px]">
        <ProTable<User> columns={columns} dataSource={mockUsers.slice(0, 5)} />
      </div>;
  }
}`,...(Ae=(Ee=N.parameters)==null?void 0:Ee.docs)==null?void 0:Ae.source},description:{story:"值类型展示",...(Be=(Le=N.parameters)==null?void 0:Le.docs)==null?void 0:Be.description}}};var Ke,_e,We,He,$e;R.parameters={...R.parameters,docs:{...(Ke=R.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
  render: () => {
    const columns: ProTableColumn<User>[] = [{
      title: 'ID',
      dataIndex: 'id',
      width: 60
    }, {
      title: '姓名（可编辑）',
      dataIndex: 'name',
      width: 160,
      editable: true,
      renderFormItem: ({
        value,
        onChange
      }) => <Input defaultValue={String(value ?? '')} onBlur={e => onChange(e.target.value)} autoFocus />
    }, {
      title: '部门（可编辑）',
      dataIndex: 'department',
      width: 160,
      editable: true,
      renderFormItem: ({
        value,
        onChange
      }) => <Select defaultValue={String(value ?? '')} onChange={val => onChange(val)} options={[{
        label: '技术部',
        value: '技术部'
      }, {
        label: '产品部',
        value: '产品部'
      }, {
        label: '设计部',
        value: '设计部'
      }, {
        label: '运营部',
        value: '运营部'
      }]} />
    }, {
      title: '薪资',
      dataIndex: 'salary',
      width: 120,
      valueType: 'money'
    }, {
      title: '状态',
      dataIndex: 'status',
      width: 100
    }];
    return <div className="w-full min-w-[700px]">
        <ProTable<User> columns={columns} dataSource={mockUsers.slice(0, 8)} toolbar={{
        actions: [<span key="tip" className="text-xs text-muted-foreground">双击姓名或部门列进入编辑</span>]
      }} onLoadingChange={() => {}} />
      </div>;
  }
}`,...(We=(_e=R.parameters)==null?void 0:_e.docs)==null?void 0:We.source},description:{story:`行内编辑

通过 editable + renderFormItem 实现双击单元格进入编辑态。
renderFormItem 接收 { value, onChange } 用于控制编辑值，
失焦或回车后自动保存并退出编辑态。`,...($e=(He=R.parameters)==null?void 0:He.docs)==null?void 0:$e.description}}};var Oe,Ge,Je,Qe,Xe;k.parameters={...k.parameters,docs:{...(Oe=k.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  render: () => {
    const pollingRequest = async (params: ProTableRequestParams): Promise<ProTableRequestResult<User>> => {
      await new Promise(resolve => setTimeout(resolve, 300));
      const data = mockUsers.slice(0, 10).map(u => ({
        ...u,
        salary: u.salary + Math.floor(Math.random() * 1000 - 500)
      }));
      const start = (params.current - 1) * params.pageSize;
      return {
        data: data.slice(start, start + params.pageSize),
        total: data.length,
        success: true
      };
    };
    const columns: ProTableColumn<User>[] = [{
      title: 'ID',
      dataIndex: 'id',
      width: 60
    }, {
      title: '姓名',
      dataIndex: 'name',
      width: 100
    }, {
      title: '部门',
      dataIndex: 'department',
      width: 120
    }, {
      title: '薪资（实时）',
      dataIndex: 'salary',
      width: 140,
      valueType: 'money'
    }, {
      title: '状态',
      dataIndex: 'status',
      width: 100
    }];
    return <div className="w-full min-w-[700px]">
        <ProTable<User> columns={columns} request={pollingRequest} polling={3000} toolbar defaultPageSize={5} />
      </div>;
  }
}`,...(Je=(Ge=k.parameters)==null?void 0:Ge.docs)==null?void 0:Je.source},description:{story:`轮询自动刷新

设置 polling 属性（毫秒）后，ProTable 会按照指定间隔自动重新请求数据。
适用于监控面板、实时状态等需要持续刷新数据的场景。
本示例每 3 秒刷新一次（模拟薪资随机波动）。`,...(Xe=(Qe=k.parameters)==null?void 0:Qe.docs)==null?void 0:Xe.description}}};var Ye,Ze,et,tt,at;z.parameters={...z.parameters,docs:{...(Ye=z.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
  render: () => <div className="w-full min-w-[700px]">
      <ProTable<User> columns={baseColumns} request={mockRequest} manualRequest search toolbar defaultPageSize={5} />
    </div>
}`,...(et=(Ze=z.parameters)==null?void 0:Ze.docs)==null?void 0:et.source},description:{story:`手动触发请求

设置 manualRequest 为 true 后，组件不会在挂载时自动请求数据。
需要用户通过搜索或刷新按钮手动触发第一次请求。
适用于需要先填写筛选条件再查询的场景。`,...(at=(tt=z.parameters)==null?void 0:tt.docs)==null?void 0:at.description}}};var rt,st,nt,ot,lt;U.parameters={...U.parameters,docs:{...(rt=U.parameters)==null?void 0:rt.docs,source:{originalSource:`{
  render: () => <div className="w-full min-w-[700px]">
      <ProTable<User> columns={baseColumns} request={mockRequest} search={{
      defaultCollapsed: true
    }} toolbar defaultPageSize={5} />
    </div>
}`,...(nt=(st=U.parameters)==null?void 0:st.docs)==null?void 0:nt.source},description:{story:`搜索栏折叠

通过 search={{ defaultCollapsed: true }} 初始折叠搜索栏，
节省页面空间。用户可展开后输入搜索关键词。`,...(lt=(ot=U.parameters)==null?void 0:ot.docs)==null?void 0:lt.description}}};var dt,it,ut,ct,mt;D.parameters={...D.parameters,docs:{...(dt=D.parameters)==null?void 0:dt.docs,source:{originalSource:`{
  render: () => <div className="w-full min-w-[700px]">
      <ProTable<User> columns={baseColumns} request={mockRequest} search toolbar={{
      actions: [<button key="export" type="button" className="text-sm px-3 py-1 rounded border border-border hover:bg-muted">
              导出
            </button>, <button key="batch-delete" type="button" className="text-sm px-3 py-1 rounded border border-border hover:bg-muted text-danger-500">
              批量删除
            </button>, <button key="add" type="button" className="text-sm px-3 py-1 rounded bg-primary-500 text-white hover:bg-primary-600">
              新增用户
            </button>]
    }} defaultPageSize={5} />
    </div>
}`,...(ut=(it=D.parameters)==null?void 0:it.docs)==null?void 0:ut.source},description:{story:`自定义工具栏操作

通过 toolbar.actions 数组注入自定义操作按钮，
如新增、批量删除、导出等。操作按钮显示在工具栏右侧，
与刷新和列设置按钮并排。`,...(mt=(ct=D.parameters)==null?void 0:ct.docs)==null?void 0:mt.description}}};var pt,xt,bt,ht,yt;F.parameters={...F.parameters,docs:{...(pt=F.parameters)==null?void 0:pt.docs,source:{originalSource:`{
  render: () => {
    const columns: ProTableColumn<User>[] = [{
      title: 'ID',
      dataIndex: 'id',
      width: 60,
      sorter: true
    }, {
      title: '姓名',
      dataIndex: 'name',
      width: 100
    }, {
      title: '部门',
      dataIndex: 'department',
      width: 120,
      filters: [{
        text: '技术部',
        value: '技术部'
      }, {
        text: '产品部',
        value: '产品部'
      }]
    }, {
      title: '薪资',
      dataIndex: 'salary',
      width: 120,
      valueType: 'money',
      sorter: true
    }, {
      title: '状态',
      dataIndex: 'status',
      width: 100
    }];
    return <div className="w-full min-w-[700px]">
        <div className="mb-2 text-sm text-muted-foreground">
          ProTable 模式：request + search + toolbar 即可覆盖搜索/分页/刷新/列配置场景
        </div>
        <ProTable<User> columns={columns} request={mockRequest} search toolbar={{
        actions: [<button key="add" type="button" className="text-sm text-primary-500 hover:text-primary-600">+ 新增</button>]
      }} defaultPageSize={5} />
      </div>;
  }
}`,...(bt=(xt=F.parameters)==null?void 0:xt.docs)==null?void 0:bt.source},description:{story:`与基础 Table 对比

同样的用户管理场景，分别用 Table（左）和 ProTable（右）实现。

Table 需要手动管理 loading、分页、搜索过滤、列配置等状态，代码量约 80-120 行。
ProTable 通过 request + search + toolbar 三行配置即可实现同等效果，代码量约 20-30 行。

如果需要虚拟滚动、固定列、行选择、展开行等底层能力，请使用 Table。`,...(yt=(ht=F.parameters)==null?void 0:ht.docs)==null?void 0:yt.description}}};const qa=["Basic","AsyncRequest","WithSearch","WithToolbar","FullFeatured","FilterAndSort","HideInTable","ValueTypes","InlineEdit","Polling","ManualRequest","SearchCollapsed","CustomActions","ComparisonWithTable"];export{I as AsyncRequest,T as Basic,F as ComparisonWithTable,D as CustomActions,j as FilterAndSort,q as FullFeatured,C as HideInTable,R as InlineEdit,z as ManualRequest,k as Polling,U as SearchCollapsed,N as ValueTypes,S as WithSearch,P as WithToolbar,qa as __namedExportsOrder,Pa as default};
