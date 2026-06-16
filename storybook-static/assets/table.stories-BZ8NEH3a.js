import{j as e}from"./jsx-runtime-CDt2p4po.js";import{fn as m}from"./index-DeN4tkzB.js";import{T as d}from"./index-Bj-LNP2D.js";import{T as F}from"./index-40oP6IOU.js";import{B as p}from"./index-WhxK0hy4.js";import{A as qt}from"./index-DPLdZRWH.js";import{P as Jt}from"./index-BGVNZTja.js";import{S as Qt}from"./index-CMCvWDhG.js";import{r as c}from"./index-GiUgBvb1.js";import"./index-DxgPyYqA.js";import"./index-CROobee-.js";import"./utils-BEhiKRD9.js";import"./index-DxlAc9Gc.js";import"./index-C08JwjkN.js";import"./chevron-left-08BNpNZ8.js";import"./createLucideIcon-CZe00VV7.js";import"./chevron-right-V463yFHa.js";import"./arrow-up-Cfl0ziE_.js";import"./arrow-down-C2u3D9px.js";import"./loader-circle-CulI208u.js";import"./x-B-5N0Ikz.js";const Kr={title:"数据展示/Table 表格",component:d,tags:["autodocs"],parameters:{layout:"padded",actions:{argTypesRegex:"^on.*"},docs:{description:{component:"表格用于展示结构化数据，支持排序、筛选、分页、行选择等高级功能。适用于数据管理、信息展示、后台列表等场景，内置虚拟滚动可流畅渲染万级数据。"}}},args:{onRow:m()},argTypes:{columns:{control:"object",description:"列配置数组，定义每列的标题、数据字段、宽度等"},dataSource:{control:"object",description:"数据源数组，表格渲染的数据"},bordered:{control:"boolean",description:"是否显示边框"},loading:{control:"boolean",description:"是否显示加载状态"},tableSize:{control:"radio",options:["default","middle","small"],description:"表格尺寸：default 默认、middle 中等、small 紧凑"},rowSelection:{control:"object",description:"行选择配置，支持 checkbox 和 radio 两种选择模式"}}};function l(s){const r=["技术部","产品部","设计部","运营部","市场部","财务部","人事部"],t=["工程师","设计师","产品经理","运营专员","市场经理","财务专员","HR"],a=["active","inactive","pending"];return Array.from({length:s},(n,o)=>({id:o+1,name:`用户${o+1}`,email:`user${o+1}@example.com`,department:r[o%r.length],role:t[o%t.length],status:a[o%3],joinDate:`2024-${String(o%12+1).padStart(2,"0")}-${String(o%28+1).padStart(2,"0")}`,avatar:`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Crect fill='%23e5e7eb' width='40' height='40' rx='20'/%3E%3Ctext fill='%236b7280' font-family='sans-serif' font-size='16' x='50%25' y='55%25' dominant-baseline='middle' text-anchor='middle'%3E${String.fromCharCode(65+o%26)}%3C/text%3E%3C/svg%3E`,progress:Math.floor(Math.random()*100)}))}const $=[{id:"ORD-001",customer:"张三",product:"MacBook Pro",amount:12999,status:"completed",createTime:"2024-01-15 10:30",paymentMethod:"支付宝"},{id:"ORD-002",customer:"李四",product:"iPhone 15 Pro",amount:8999,status:"processing",createTime:"2024-01-15 11:20",paymentMethod:"微信支付"},{id:"ORD-003",customer:"王五",product:"AirPods Pro",amount:1999,status:"pending",createTime:"2024-01-15 12:00",paymentMethod:"信用卡"},{id:"ORD-004",customer:"赵六",product:"iPad Air",amount:4599,status:"cancelled",createTime:"2024-01-15 13:30",paymentMethod:"支付宝"},{id:"ORD-005",customer:"钱七",product:"Apple Watch",amount:2999,status:"completed",createTime:"2024-01-15 14:00",paymentMethod:"微信支付"},{id:"ORD-006",customer:"孙八",product:"Magic Keyboard",amount:999,status:"processing",createTime:"2024-01-15 15:20",paymentMethod:"支付宝"},{id:"ORD-007",customer:"周九",product:"Studio Display",amount:11499,status:"pending",createTime:"2024-01-15 16:00",paymentMethod:"信用卡"},{id:"ORD-008",customer:"吴十",product:"Mac Mini",amount:4499,status:"completed",createTime:"2024-01-15 17:30",paymentMethod:"微信支付"}],Vt=[{id:1,name:"MacBook Pro 14寸",category:"电脑",price:14999,stock:50,sales:128,rating:4.8,status:"on-sale"},{id:2,name:"iPhone 15 Pro Max",category:"手机",price:9999,stock:100,sales:256,rating:4.9,status:"on-sale"},{id:3,name:"AirPods Pro 2",category:"配件",price:1899,stock:200,sales:512,rating:4.7,status:"on-sale"},{id:4,name:"iPad Pro 12.9寸",category:"平板",price:8999,stock:30,sales:64,rating:4.6,status:"off-sale"},{id:5,name:"Apple Watch Ultra",category:"穿戴",price:6299,stock:0,sales:32,rating:4.5,status:"sold-out"},{id:6,name:"Studio Display",category:"显示器",price:11499,stock:20,sales:16,rating:4.4,status:"on-sale"},{id:7,name:"Mac Studio",category:"电脑",price:14999,stock:15,sales:8,rating:4.8,status:"on-sale"},{id:8,name:"Magic Keyboard",category:"配件",price:999,stock:300,sales:1024,rating:4.3,status:"on-sale"}],_={active:"success",completed:"success","on-sale":"success",inactive:"warning",pending:"warning",processing:"primary",cancelled:"danger","sold-out":"danger","off-sale":"warning"},E={active:"活跃",inactive:"离线",pending:"待审核",completed:"已完成",processing:"处理中",cancelled:"已取消","on-sale":"在售","off-sale":"下架","sold-out":"售罄"},i=[{title:"ID",dataIndex:"id",key:"id",width:80,align:"center"},{title:"用户",key:"user",width:200,render:(s,r)=>{const t=r;return e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(qt,{src:t.avatar,alt:t.name}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium",children:t.name}),e.jsx("div",{className:"text-xs text-gray-500",children:t.email})]})]})}},{title:"部门",dataIndex:"department",key:"department",width:120},{title:"角色",dataIndex:"role",key:"role",width:120},{title:"状态",dataIndex:"status",key:"status",width:100,align:"center",render:(s,r)=>{const t=r;return e.jsx(F,{variant:_[t.status],children:E[t.status]})}},{title:"入职日期",dataIndex:"joinDate",key:"joinDate",width:120},{title:"任务进度",dataIndex:"progress",key:"progress",width:150,render:(s,r)=>{const t=r;return e.jsx(Jt,{percent:t.progress})}}],z=[{title:"订单号",dataIndex:"id",key:"id",width:120,fixed:"left"},{title:"客户",dataIndex:"customer",key:"customer",width:100,fixed:"left"},{title:"商品",dataIndex:"product",key:"product",width:180,ellipsis:!0},{title:"金额",dataIndex:"amount",key:"amount",width:120,align:"right",sorter:!0,render:(s,r)=>{const t=r;return e.jsxs("span",{className:"font-medium",children:["¥",t.amount.toLocaleString()]})}},{title:"状态",dataIndex:"status",key:"status",width:100,align:"center",render:(s,r)=>{const t=r;return e.jsx(F,{variant:_[t.status],children:E[t.status]})}},{title:"支付方式",dataIndex:"paymentMethod",key:"paymentMethod",width:100},{title:"创建时间",dataIndex:"createTime",key:"createTime",width:160},{title:"操作",key:"action",width:150,fixed:"right",render:()=>e.jsxs("div",{className:"flex gap-1",children:[e.jsx(p,{variant:"primary",children:"查看"}),e.jsx(p,{variant:"default",children:"编辑"})]})}],Xt=[{title:"ID",dataIndex:"id",key:"id",width:60,align:"center"},{title:"商品名称",dataIndex:"name",key:"name",width:200,ellipsis:!0},{title:"分类",dataIndex:"category",key:"category",width:80},{title:"价格",dataIndex:"price",key:"price",width:100,align:"right",sorter:!0,render:(s,r)=>{const t=r;return e.jsxs("span",{className:"text-danger-500 font-medium",children:["¥",t.price.toLocaleString()]})}},{title:"库存",dataIndex:"stock",key:"stock",width:80,align:"center",sorter:!0,render:(s,r)=>{const t=r,a=t.stock===0?"text-danger-500":t.stock<50?"text-warning-500":"text-success-500";return e.jsx("span",{className:a,children:t.stock})}},{title:"销量",dataIndex:"sales",key:"sales",width:80,align:"center",sorter:!0},{title:"评分",dataIndex:"rating",key:"rating",width:100,align:"center",render:(s,r)=>{const t=r;return e.jsxs("span",{className:"flex items-center gap-1",children:[e.jsx("span",{className:"text-warning-500",children:"收藏"}),t.rating]})}},{title:"状态",dataIndex:"status",key:"status",width:80,align:"center",render:(s,r)=>{const t=r;return e.jsx(F,{variant:_[t.status],children:E[t.status]})}},{title:"上架",key:"switch",width:80,align:"center",render:(s,r)=>{const t=r;return e.jsx(Qt,{checked:t.status==="on-sale",disabled:t.status==="sold-out"})}}],Yt=m(),Zt=m(),er=m(),tr=m(),rr=m(),sr=m(),ar=m(),or=m(),H=m(),h={render:()=>e.jsx("div",{className:"w-full min-w-[600px]",children:e.jsx(d,{columns:i.slice(0,4),dataSource:l(5),rowKey:"id",height:300})})},y={render:()=>e.jsx("div",{className:"w-full min-w-[900px]",children:e.jsx(d,{columns:i,dataSource:l(500),rowKey:"id",height:500,bordered:!0})})},w={render:()=>{const[s]=c.useState(()=>l(5e3));return e.jsxs("div",{className:"w-full min-w-[900px] space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between px-1",children:[e.jsxs("div",{className:"space-y-1",children:[e.jsx("div",{className:"text-lg font-semibold text-gray-900",children:"万级数据表格"}),e.jsxs("div",{className:"text-sm text-gray-500",children:["总数据量：",e.jsx("span",{className:"font-mono font-medium text-primary-600",children:s.length.toLocaleString()})," 行"," | ","渲染方式：",e.jsx("span",{className:"text-success-600",children:"虚拟滚动"})," | ","实际 DOM 节点：仅视口内约 ",e.jsx("span",{className:"font-mono",children:"20"})," 行"]})]}),e.jsxs("div",{className:"text-right",children:[e.jsx("div",{className:"text-xs text-gray-400",children:"基于 react-virtuoso"}),e.jsx("div",{className:"text-xs text-gray-400",children:"滚动流畅无卡顿"})]})]}),e.jsx(d,{columns:i,dataSource:s,rowKey:"id",height:600,bordered:!0,pagination:!1}),e.jsxs("div",{className:"text-xs text-gray-400 px-1",children:["提示：无分页，直接使用鼠标滚轮或拖拽滚动条浏览全部 ",s.length.toLocaleString()," 行数据"]})]})}},v={render:()=>{const[s]=c.useState(()=>l(5e3)),[r,t]=c.useState([]),[a,n]=c.useState(),[o,x]=c.useState(),u={type:"checkbox",selectedRowKeys:r,onChange:(g,U)=>{Yt(g,U),t(g)}};return e.jsxs("div",{className:"w-full min-w-[900px] space-y-3",children:[e.jsx("div",{className:"flex items-center justify-between px-1",children:e.jsxs("div",{children:[e.jsx("div",{className:"text-lg font-semibold text-gray-900",children:"万级数据 + 完整功能"}),e.jsxs("div",{className:"text-sm text-gray-500",children:["数据量：",e.jsx("span",{className:"font-mono font-medium text-primary-600",children:s.length.toLocaleString()})," 行"," | ","已选择：",e.jsx("span",{className:"font-mono",children:r.length})," 行",a&&` | 当前排序：${a} ${o||""}`]})]})}),e.jsx(d,{columns:i,dataSource:s,rowKey:"id",height:500,bordered:!0,pagination:!1,rowSelection:u,sorter:{field:a,order:o,onChange:(g,U)=>{Zt(g,U),n(g),x(U)}}})]})}},S={render:()=>{const[s,r]=c.useState([]),t={type:"checkbox",selectedRowKeys:s,onChange:(a,n)=>{er(a,n),r(a)}};return e.jsxs("div",{className:"w-full min-w-[700px] space-y-2",children:[e.jsxs("div",{className:"text-sm text-gray-500",children:["已选择 ",s.length," 项"]}),e.jsx(d,{columns:i.slice(0,5),dataSource:l(20),rowKey:"id",height:400,rowSelection:t,bordered:!0})]})}},f={render:()=>{const[s,r]=c.useState(),t={type:"radio",selectedRowKeys:s?[s]:[],onChange:(a,n)=>{tr(a,n),r(a[0])}};return e.jsxs("div",{className:"w-full min-w-[700px] space-y-2",children:[e.jsxs("div",{className:"text-sm text-gray-500",children:["当前选择：",s||"无"]}),e.jsx(d,{columns:i.slice(0,5),dataSource:l(10),rowKey:"id",height:300,rowSelection:t,bordered:!0})]})}},b={render:()=>{const[s,r]=c.useState(),[t,a]=c.useState();return e.jsxs("div",{className:"w-full min-w-[700px] space-y-2",children:[e.jsxs("div",{className:"text-sm text-gray-500",children:["排序：",s?`${s} ${t||"无序"}`:"无"]}),e.jsx(d,{columns:z.filter(n=>n.key!=="action"),dataSource:$,rowKey:"id",height:350,bordered:!0,sorter:{field:s,order:t,onChange:(n,o)=>{rr(n,o),r(n),a(o)}}})]})}},k={render:()=>e.jsx("div",{className:"w-full min-w-[800px]",children:e.jsx(d,{columns:z,dataSource:$,rowKey:"id",height:350,bordered:!0})})},N={render:()=>{const[s,r]=c.useState([]),t={type:"checkbox",selectedRowKeys:s,onChange:(a,n)=>{sr(a,n),r(a)},getCheckboxProps:a=>({disabled:a.status==="inactive"})};return e.jsxs("div",{className:"w-full min-w-[900px] space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"text-sm text-gray-500",children:["已选择 ",s.length," 项"]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(p,{variant:"primary",children:"批量导出"}),e.jsx(p,{variant:"primary",className:"bg-danger-500 hover:bg-danger-600",children:"批量删除"})]})]}),e.jsx(d,{columns:i,dataSource:l(50),rowKey:"id",height:500,bordered:!0,rowSelection:t,rowClassName:a=>a.status==="inactive"?"opacity-50":""})]})}},j={render:()=>e.jsx("div",{className:"w-full min-w-[800px]",children:e.jsx(d,{columns:z,dataSource:$,rowKey:"id",height:400,bordered:!0,rowClassName:s=>s.status==="cancelled"?"bg-gray-50":""})})},C={render:()=>{const[s,r]=c.useState([]),t={type:"checkbox",selectedRowKeys:s,onChange:(a,n)=>{ar(a,n),r(a)}};return e.jsxs("div",{className:"w-full min-w-[900px] space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"text-sm text-gray-500",children:["已选择 ",s.length," 项"]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(p,{variant:"primary",children:"新增商品"}),e.jsx(p,{variant:"default",children:"批量上架"}),e.jsx(p,{variant:"default",children:"批量下架"})]})]}),e.jsx(d,{columns:Xt,dataSource:Vt,rowKey:"id",height:400,bordered:!0,rowSelection:t})]})}},K={render:()=>{const s=["default","middle","small"],r={default:"默认",middle:"中等",small:"紧凑"};return e.jsx("div",{className:"w-full min-w-[600px] space-y-4",children:s.map(t=>e.jsxs("div",{children:[e.jsx("div",{className:"text-sm font-medium mb-2",children:r[t]}),e.jsx(d,{columns:i.slice(0,4),dataSource:l(3),rowKey:"id",height:t==="small"?150:t==="middle"?180:200,tableSize:t,bordered:!0})]},t))})}},R={render:()=>e.jsx("div",{className:"w-full min-w-[900px]",children:e.jsx(d,{columns:i,dataSource:l(10),rowKey:"id",height:400,loading:!0,bordered:!0})})},I={render:()=>e.jsx("div",{className:"w-full min-w-[600px]",children:e.jsx(d,{columns:i,dataSource:[],rowKey:"id",height:300,emptyText:"暂无用户数据",bordered:!0})})},M={render:()=>e.jsx("div",{className:"w-full min-w-[600px]",children:e.jsx(d,{columns:i,dataSource:[],rowKey:"id",height:300,emptyText:e.jsxs("div",{className:"text-center py-8",children:[e.jsx("div",{className:"text-gray-400 mb-2",children:"没有找到相关数据"}),e.jsx(p,{variant:"primary",children:"添加用户"})]}),bordered:!0})})},T={render:()=>e.jsx("div",{className:"w-full min-w-[700px]",children:e.jsx(d,{columns:i.slice(0,5),dataSource:l(5),rowKey:"id",height:300,bordered:!0})})},O={render:()=>e.jsx("div",{className:"w-full min-w-[600px]",children:e.jsx(d,{columns:i.slice(0,4),dataSource:l(5),rowKey:"id",height:250,showHeader:!1,bordered:!0})})},P={render:()=>{const[s,r]=c.useState(),[t,a]=c.useState();return e.jsxs("div",{className:"w-full min-w-[600px] space-y-2",children:[e.jsxs("div",{className:"text-sm text-gray-500",children:["点击：",s||"无"," | 悬停：",t||"无"]}),e.jsx(d,{columns:i.slice(0,4),dataSource:l(10),rowKey:"id",height:350,bordered:!0,onRow:n=>{const o=n;return{onClick:()=>{or("onClick",n),r(`用户${o.id}`)},onMouseEnter:()=>{H("onMouseEnter",n),a(`用户${o.id}`)},onMouseLeave:()=>{H("onMouseLeave",n),a(void 0)}}},rowClassName:n=>t===`用户${n.id}`?"bg-primary-50":""})]})}},D={render:()=>e.jsx("div",{className:"w-full min-w-[500px]",children:e.jsx(d,{columns:[{title:"ID",dataIndex:"id",key:"id",width:60},{title:"商品名称（超长文本省略）",dataIndex:"name",key:"name",width:150,ellipsis:!0},{title:"详细描述（超长文本省略）",dataIndex:"description",key:"description",ellipsis:!0}],dataSource:[{id:1,name:"这是一段非常长的商品名称用于测试省略功能显示效果",description:"这是一段非常长的详细描述文本用于测试省略功能在实际场景中的显示效果，通常会包含很多信息"},{id:2,name:"MacBook Pro 14寸 M3 Pro芯片",description:"全新MacBook Pro配备M3 Pro芯片，性能强劲，续航持久"},{id:3,name:"iPhone 15 Pro Max 256GB",description:"iPhone 15 Pro Max采用钛金属设计，A17 Pro芯片，专业级摄像头系统"}],rowKey:"id",height:200,bordered:!0})})},A={render:()=>{const s=[{title:"ID",dataIndex:"id",key:"id",width:80,align:"center"},{title:"商品名称",dataIndex:"name",key:"name",width:200,ellipsis:!0},{title:"分类",dataIndex:"category",key:"category",width:100,filters:[{text:"电脑",value:"电脑"},{text:"手机",value:"手机"},{text:"配件",value:"配件"},{text:"平板",value:"平板"},{text:"穿戴",value:"穿戴"},{text:"显示器",value:"显示器"}],onFilter:(r,t)=>t.category===r},{title:"状态",dataIndex:"status",key:"status",width:100,align:"center",filters:[{text:"在售",value:"on-sale"},{text:"下架",value:"off-sale"},{text:"售罄",value:"sold-out"}],onFilter:(r,t)=>t.status===r,render:(r,t)=>{const a=t;return e.jsx(F,{variant:_[a.status],children:E[a.status]})}},{title:"价格",dataIndex:"price",key:"price",width:100,align:"right",render:(r,t)=>{const a=t;return e.jsxs("span",{className:"text-danger-500 font-medium",children:["¥",a.price.toLocaleString()]})}}];return e.jsx("div",{className:"w-full min-w-[700px]",children:e.jsx(d,{columns:s,dataSource:Vt,rowKey:"id",height:350,bordered:!0})})}},B={render:()=>{const s=[{title:"订单号",dataIndex:"id",key:"id",width:120},{title:"客户",dataIndex:"customer",key:"customer",width:100},{title:"商品",dataIndex:"product",key:"product",width:180},{title:"金额",dataIndex:"amount",key:"amount",width:120,align:"right",render:(r,t)=>{const a=t;return e.jsxs("span",{className:"font-medium",children:["¥",a.amount.toLocaleString()]})}},{title:"状态",dataIndex:"status",key:"status",width:100,align:"center",render:(r,t)=>{const a=t;return e.jsx(F,{variant:_[a.status],children:E[a.status]})}}];return e.jsx("div",{className:"w-full min-w-[700px]",children:e.jsx(d,{columns:s,dataSource:$,rowKey:"id",height:400,bordered:!0,expandable:{expandedRowRender:r=>{const t=r;return e.jsxs("div",{className:"p-2 space-y-1 text-sm text-gray-600",children:[e.jsxs("p",{children:["支付方式：",t.paymentMethod]}),e.jsxs("p",{children:["创建时间：",t.createTime]}),e.jsxs("p",{children:["订单金额：¥",t.amount.toLocaleString()]})]})}}})})}},L={render:()=>{const s=[{title:"姓名",dataIndex:"name",key:"name",width:120},{title:"年龄",dataIndex:"age",key:"age",width:80,align:"center"},{title:"住址",dataIndex:"address",key:"address"}],r=[{id:1,name:"张三",age:32,address:"北京市朝阳区望京路1号"},{id:2,name:"张三",age:32,address:"北京市海淀区中关村路2号"},{id:3,name:"李四",age:28,address:"上海市浦东新区世纪大道3号"},{id:4,name:"李四",age:28,address:"上海市徐汇区漕河泾4号"},{id:5,name:"王五",age:35,address:"广州市天河区天河路5号"}];return e.jsxs("div",{className:"w-full min-w-[600px] space-y-2",children:[e.jsx("div",{className:"text-sm text-gray-500",children:"通过 onCell 返回 rowSpan/colSpan 实现单元格合并"}),e.jsx(d,{columns:s.map(t=>t.key==="name"?{...t,onCell:(a,n)=>{const o=n??0;if(o>0&&r[o].name===r[o-1].name)return{rowSpan:0};let x=1;for(let u=o+1;u<r.length&&r[u].name===r[o].name;u++)x++;return{rowSpan:x}}}:t.key==="age"?{...t,onCell:(a,n)=>{const o=n??0;if(o>0&&r[o].name===r[o-1].name)return{rowSpan:0};let x=1;for(let u=o+1;u<r.length&&r[u].name===r[o].name;u++)x++;return{rowSpan:x}}}:t),dataSource:r,rowKey:"id",height:300,bordered:!0})]})}};var W,G,V,q,J;h.parameters={...h.parameters,docs:{...(W=h.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <div className="w-full min-w-[600px]">
      <Table columns={userColumns.slice(0, 4)} dataSource={generateUsers(5)} rowKey="id" height={300} />
    </div>
}`,...(V=(G=h.parameters)==null?void 0:G.docs)==null?void 0:V.source},description:{story:"基础表格",...(J=(q=h.parameters)==null?void 0:q.docs)==null?void 0:J.description}}};var Q,X,Y,Z,ee;y.parameters={...y.parameters,docs:{...(Q=y.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <div className="w-full min-w-[900px]">
      <Table columns={userColumns} dataSource={generateUsers(500)} rowKey="id" height={500} bordered />
    </div>
}`,...(Y=(X=y.parameters)==null?void 0:X.docs)==null?void 0:Y.source},description:{story:"大数据量虚拟滚动（500行）",...(ee=(Z=y.parameters)==null?void 0:Z.docs)==null?void 0:ee.description}}};var te,re,se,ae,oe;w.parameters={...w.parameters,docs:{...(te=w.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => {
    const [dataSource] = useState(() => generateUsers(5000));
    return <div className="w-full min-w-[900px] space-y-3">
        <div className="flex items-center justify-between px-1">
          <div className="space-y-1">
            <div className="text-lg font-semibold text-gray-900">万级数据表格</div>
            <div className="text-sm text-gray-500">
              总数据量：<span className="font-mono font-medium text-primary-600">{dataSource.length.toLocaleString()}</span> 行
              {' | '}
              渲染方式：<span className="text-success-600">虚拟滚动</span>
              {' | '}
              实际 DOM 节点：仅视口内约 <span className="font-mono">20</span> 行
            </div>
          </div>
          <div className="text-right">
            <div className="text-xs text-gray-400">基于 react-virtuoso</div>
            <div className="text-xs text-gray-400">滚动流畅无卡顿</div>
          </div>
        </div>
        <Table columns={userColumns} dataSource={dataSource} rowKey="id" height={600} bordered pagination={false} />
        <div className="text-xs text-gray-400 px-1">
          提示：无分页，直接使用鼠标滚轮或拖拽滚动条浏览全部 {dataSource.length.toLocaleString()} 行数据
        </div>
      </div>;
  }
}`,...(se=(re=w.parameters)==null?void 0:re.docs)==null?void 0:se.source},description:{story:"万级数据虚拟滚动 - 展示性能",...(oe=(ae=w.parameters)==null?void 0:ae.docs)==null?void 0:oe.description}}};var ne,de,ie,ce,le;v.parameters={...v.parameters,docs:{...(ne=v.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: () => {
    const [dataSource] = useState(() => generateUsers(5000));
    const [selectedKeys, setSelectedKeys] = useState<(string | number)[]>([]);
    const [sortField, setSortField] = useState<string>();
    const [sortOrder, setSortOrder] = useState<SortOrder>();
    const rowSelection: RowSelectionConfig<unknown> = {
      type: 'checkbox',
      selectedRowKeys: selectedKeys,
      onChange: (keys, rows) => {
        largeDataOnChangeAction(keys, rows);
        setSelectedKeys(keys);
      }
    };
    return <div className="w-full min-w-[900px] space-y-3">
        <div className="flex items-center justify-between px-1">
          <div>
            <div className="text-lg font-semibold text-gray-900">万级数据 + 完整功能</div>
            <div className="text-sm text-gray-500">
              数据量：<span className="font-mono font-medium text-primary-600">{dataSource.length.toLocaleString()}</span> 行
              {' | '}
              已选择：<span className="font-mono">{selectedKeys.length}</span> 行
              {sortField && \` | 当前排序：\${sortField} \${sortOrder || ''}\`}
            </div>
          </div>
        </div>
        <Table columns={userColumns} dataSource={dataSource} rowKey="id" height={500} bordered pagination={false} rowSelection={rowSelection} sorter={{
        field: sortField,
        order: sortOrder,
        onChange: (field, order) => {
          largeDataOnSortAction(field, order);
          setSortField(field);
          setSortOrder(order);
        }
      }} />
      </div>;
  }
}`,...(ie=(de=v.parameters)==null?void 0:de.docs)==null?void 0:ie.source},description:{story:"万级数据 + 行选择 + 排序",...(le=(ce=v.parameters)==null?void 0:ce.docs)==null?void 0:le.description}}};var me,ue,pe,xe,ge;S.parameters={...S.parameters,docs:{...(me=S.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: () => {
    const [selectedKeys, setSelectedKeys] = useState<(string | number)[]>([]);
    const rowSelection: RowSelectionConfig<unknown> = {
      type: 'checkbox',
      selectedRowKeys: selectedKeys,
      onChange: (keys, rows) => {
        checkboxOnChangeAction(keys, rows);
        setSelectedKeys(keys);
      }
    };
    return <div className="w-full min-w-[700px] space-y-2">
        <div className="text-sm text-gray-500">
          已选择 {selectedKeys.length} 项
        </div>
        <Table columns={userColumns.slice(0, 5)} dataSource={generateUsers(20)} rowKey="id" height={400} rowSelection={rowSelection} bordered />
      </div>;
  }
}`,...(pe=(ue=S.parameters)==null?void 0:ue.docs)==null?void 0:pe.source},description:{story:"行选择 - Checkbox",...(ge=(xe=S.parameters)==null?void 0:xe.docs)==null?void 0:ge.description}}};var he,ye,we,ve,Se;f.parameters={...f.parameters,docs:{...(he=f.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: () => {
    const [selectedKey, setSelectedKey] = useState<string | number>();
    const rowSelection: RowSelectionConfig<unknown> = {
      type: 'radio',
      selectedRowKeys: selectedKey ? [selectedKey] : [],
      onChange: (keys, rows) => {
        radioOnChangeAction(keys, rows);
        setSelectedKey(keys[0]);
      }
    };
    return <div className="w-full min-w-[700px] space-y-2">
        <div className="text-sm text-gray-500">
          当前选择：{selectedKey || '无'}
        </div>
        <Table columns={userColumns.slice(0, 5)} dataSource={generateUsers(10)} rowKey="id" height={300} rowSelection={rowSelection} bordered />
      </div>;
  }
}`,...(we=(ye=f.parameters)==null?void 0:ye.docs)==null?void 0:we.source},description:{story:"行选择 - Radio",...(Se=(ve=f.parameters)==null?void 0:ve.docs)==null?void 0:Se.description}}};var fe,be,ke,Ne,je;b.parameters={...b.parameters,docs:{...(fe=b.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  render: () => {
    const [sortField, setSortField] = useState<string>();
    const [sortOrder, setSortOrder] = useState<SortOrder>();
    return <div className="w-full min-w-[700px] space-y-2">
        <div className="text-sm text-gray-500">
          排序：{sortField ? \`\${sortField} \${sortOrder || '无序'}\` : '无'}
        </div>
        <Table columns={orderColumns.filter(c => c.key !== 'action')} dataSource={orders} rowKey="id" height={350} bordered sorter={{
        field: sortField,
        order: sortOrder,
        onChange: (field, order) => {
          sorterOnSortAction(field, order);
          setSortField(field);
          setSortOrder(order);
        }
      }} />
      </div>;
  }
}`,...(ke=(be=b.parameters)==null?void 0:be.docs)==null?void 0:ke.source},description:{story:"排序功能",...(je=(Ne=b.parameters)==null?void 0:Ne.docs)==null?void 0:je.description}}};var Ce,Ke,Re,Ie,Me;k.parameters={...k.parameters,docs:{...(Ce=k.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  render: () => <div className="w-full min-w-[800px]">
      <Table columns={orderColumns} dataSource={orders} rowKey="id" height={350} bordered />
    </div>
}`,...(Re=(Ke=k.parameters)==null?void 0:Ke.docs)==null?void 0:Re.source},description:{story:"固定列",...(Me=(Ie=k.parameters)==null?void 0:Ie.docs)==null?void 0:Me.description}}};var Te,Oe,Pe,De,Ae;N.parameters={...N.parameters,docs:{...(Te=N.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  render: () => {
    const [selectedKeys, setSelectedKeys] = useState<(string | number)[]>([]);
    const rowSelection: RowSelectionConfig<unknown> = {
      type: 'checkbox',
      selectedRowKeys: selectedKeys,
      onChange: (keys, rows) => {
        userMgmtOnChangeAction(keys, rows);
        setSelectedKeys(keys);
      },
      getCheckboxProps: record => {
        const user = record as User;
        return {
          disabled: user.status === 'inactive'
        };
      }
    };
    return <div className="w-full min-w-[900px] space-y-3">
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-500">
            已选择 {selectedKeys.length} 项
          </div>
          <div className="flex gap-2">
            <Button variant="primary">批量导出</Button>
            <Button variant="primary" className="bg-danger-500 hover:bg-danger-600">批量删除</Button>
          </div>
        </div>
        <Table columns={userColumns} dataSource={generateUsers(50)} rowKey="id" height={500} bordered rowSelection={rowSelection} rowClassName={record => {
        const user = record as User;
        return user.status === 'inactive' ? 'opacity-50' : '';
      }} />
      </div>;
  }
}`,...(Pe=(Oe=N.parameters)==null?void 0:Oe.docs)==null?void 0:Pe.source},description:{story:"复杂业务场景 - 用户管理",...(Ae=(De=N.parameters)==null?void 0:De.docs)==null?void 0:Ae.description}}};var Be,Le,Fe,_e,Ee;j.parameters={...j.parameters,docs:{...(Be=j.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  render: () => <div className="w-full min-w-[800px]">
      <Table columns={orderColumns} dataSource={orders} rowKey="id" height={400} bordered rowClassName={record => {
      const order = record as Order;
      return order.status === 'cancelled' ? 'bg-gray-50' : '';
    }} />
    </div>
}`,...(Fe=(Le=j.parameters)==null?void 0:Le.docs)==null?void 0:Fe.source},description:{story:"复杂业务场景 - 订单列表",...(Ee=(_e=j.parameters)==null?void 0:_e.docs)==null?void 0:Ee.description}}};var Ue,$e,ze,He,We;C.parameters={...C.parameters,docs:{...(Ue=C.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
  render: () => {
    const [selectedKeys, setSelectedKeys] = useState<(string | number)[]>([]);
    const rowSelection: RowSelectionConfig<unknown> = {
      type: 'checkbox',
      selectedRowKeys: selectedKeys,
      onChange: (keys, rows) => {
        productMgmtOnChangeAction(keys, rows);
        setSelectedKeys(keys);
      }
    };
    return <div className="w-full min-w-[900px] space-y-3">
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-500">
            已选择 {selectedKeys.length} 项
          </div>
          <div className="flex gap-2">
            <Button variant="primary">新增商品</Button>
            <Button variant="default">批量上架</Button>
            <Button variant="default">批量下架</Button>
          </div>
        </div>
        <Table columns={productColumns} dataSource={products} rowKey="id" height={400} bordered rowSelection={rowSelection} />
      </div>;
  }
}`,...(ze=($e=C.parameters)==null?void 0:$e.docs)==null?void 0:ze.source},description:{story:"复杂业务场景 - 商品管理",...(We=(He=C.parameters)==null?void 0:He.docs)==null?void 0:We.description}}};var Ge,Ve,qe,Je,Qe;K.parameters={...K.parameters,docs:{...(Ge=K.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
  render: () => {
    const sizes: TableSize[] = ['default', 'middle', 'small'];
    const sizeLabels = {
      default: '默认',
      middle: '中等',
      small: '紧凑'
    };
    return <div className="w-full min-w-[600px] space-y-4">
        {sizes.map(size => <div key={size}>
            <div className="text-sm font-medium mb-2">{sizeLabels[size]}</div>
            <Table columns={userColumns.slice(0, 4)} dataSource={generateUsers(3)} rowKey="id" height={size === 'small' ? 150 : size === 'middle' ? 180 : 200} tableSize={size} bordered />
          </div>)}
      </div>;
  }
}`,...(qe=(Ve=K.parameters)==null?void 0:Ve.docs)==null?void 0:qe.source},description:{story:"不同尺寸",...(Qe=(Je=K.parameters)==null?void 0:Je.docs)==null?void 0:Qe.description}}};var Xe,Ye,Ze,et,tt;R.parameters={...R.parameters,docs:{...(Xe=R.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
  render: () => <div className="w-full min-w-[900px]">
      <Table columns={userColumns} dataSource={generateUsers(10)} rowKey="id" height={400} loading bordered />
    </div>
}`,...(Ze=(Ye=R.parameters)==null?void 0:Ye.docs)==null?void 0:Ze.source},description:{story:"加载状态",...(tt=(et=R.parameters)==null?void 0:et.docs)==null?void 0:tt.description}}};var rt,st,at,ot,nt;I.parameters={...I.parameters,docs:{...(rt=I.parameters)==null?void 0:rt.docs,source:{originalSource:`{
  render: () => <div className="w-full min-w-[600px]">
      <Table columns={userColumns} dataSource={[]} rowKey="id" height={300} emptyText="暂无用户数据" bordered />
    </div>
}`,...(at=(st=I.parameters)==null?void 0:st.docs)==null?void 0:at.source},description:{story:"空数据",...(nt=(ot=I.parameters)==null?void 0:ot.docs)==null?void 0:nt.description}}};var dt,it,ct,lt,mt;M.parameters={...M.parameters,docs:{...(dt=M.parameters)==null?void 0:dt.docs,source:{originalSource:`{
  render: () => <div className="w-full min-w-[600px]">
      <Table columns={userColumns} dataSource={[]} rowKey="id" height={300} emptyText={<div className="text-center py-8">
            <div className="text-gray-400 mb-2">没有找到相关数据</div>
            <Button variant="primary">添加用户</Button>
          </div>} bordered />
    </div>
}`,...(ct=(it=M.parameters)==null?void 0:it.docs)==null?void 0:ct.source},description:{story:"自定义空数据提示",...(mt=(lt=M.parameters)==null?void 0:lt.docs)==null?void 0:mt.description}}};var ut,pt,xt,gt,ht;T.parameters={...T.parameters,docs:{...(ut=T.parameters)==null?void 0:ut.docs,source:{originalSource:`{
  render: () => <div className="w-full min-w-[700px]">
      <Table columns={userColumns.slice(0, 5)} dataSource={generateUsers(5)} rowKey="id" height={300} bordered />
    </div>
}`,...(xt=(pt=T.parameters)==null?void 0:pt.docs)==null?void 0:xt.source},description:{story:"边框样式",...(ht=(gt=T.parameters)==null?void 0:gt.docs)==null?void 0:ht.description}}};var yt,wt,vt,St,ft;O.parameters={...O.parameters,docs:{...(yt=O.parameters)==null?void 0:yt.docs,source:{originalSource:`{
  render: () => <div className="w-full min-w-[600px]">
      <Table columns={userColumns.slice(0, 4)} dataSource={generateUsers(5)} rowKey="id" height={250} showHeader={false} bordered />
    </div>
}`,...(vt=(wt=O.parameters)==null?void 0:wt.docs)==null?void 0:vt.source},description:{story:"无表头",...(ft=(St=O.parameters)==null?void 0:St.docs)==null?void 0:ft.description}}};var bt,kt,Nt,jt,Ct;P.parameters={...P.parameters,docs:{...(bt=P.parameters)==null?void 0:bt.docs,source:{originalSource:`{
  render: () => {
    const [clickedRow, setClickedRow] = useState<string>();
    const [hoveredRow, setHoveredRow] = useState<string>();
    return <div className="w-full min-w-[600px] space-y-2">
        <div className="text-sm text-gray-500">
          点击：{clickedRow || '无'} | 悬停：{hoveredRow || '无'}
        </div>
        <Table columns={userColumns.slice(0, 4)} dataSource={generateUsers(10)} rowKey="id" height={350} bordered onRow={record => {
        const user = record as User;
        return {
          onClick: () => {
            rowClickAction('onClick', record);
            setClickedRow(\`用户\${user.id}\`);
          },
          onMouseEnter: () => {
            rowHoverAction('onMouseEnter', record);
            setHoveredRow(\`用户\${user.id}\`);
          },
          onMouseLeave: () => {
            rowHoverAction('onMouseLeave', record);
            setHoveredRow(undefined);
          }
        };
      }} rowClassName={record => {
        const user = record as User;
        return hoveredRow === \`用户\${user.id}\` ? 'bg-primary-50' : '';
      }} />
      </div>;
  }
}`,...(Nt=(kt=P.parameters)==null?void 0:kt.docs)==null?void 0:Nt.source},description:{story:"行事件交互",...(Ct=(jt=P.parameters)==null?void 0:jt.docs)==null?void 0:Ct.description}}};var Kt,Rt,It,Mt,Tt;D.parameters={...D.parameters,docs:{...(Kt=D.parameters)==null?void 0:Kt.docs,source:{originalSource:`{
  render: () => <div className="w-full min-w-[500px]">
      <Table columns={[{
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      width: 60
    }, {
      title: '商品名称（超长文本省略）',
      dataIndex: 'name',
      key: 'name',
      width: 150,
      ellipsis: true
    }, {
      title: '详细描述（超长文本省略）',
      dataIndex: 'description',
      key: 'description',
      ellipsis: true
    }]} dataSource={[{
      id: 1,
      name: '这是一段非常长的商品名称用于测试省略功能显示效果',
      description: '这是一段非常长的详细描述文本用于测试省略功能在实际场景中的显示效果，通常会包含很多信息'
    }, {
      id: 2,
      name: 'MacBook Pro 14寸 M3 Pro芯片',
      description: '全新MacBook Pro配备M3 Pro芯片，性能强劲，续航持久'
    }, {
      id: 3,
      name: 'iPhone 15 Pro Max 256GB',
      description: 'iPhone 15 Pro Max采用钛金属设计，A17 Pro芯片，专业级摄像头系统'
    }]} rowKey="id" height={200} bordered />
    </div>
}`,...(It=(Rt=D.parameters)==null?void 0:Rt.docs)==null?void 0:It.source},description:{story:"单元格省略",...(Tt=(Mt=D.parameters)==null?void 0:Mt.docs)==null?void 0:Tt.description}}};var Ot,Pt,Dt,At,Bt;A.parameters={...A.parameters,docs:{...(Ot=A.parameters)==null?void 0:Ot.docs,source:{originalSource:`{
  render: () => {
    const filterColumns: ColumnType<unknown>[] = [{
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      width: 80,
      align: 'center'
    }, {
      title: '商品名称',
      dataIndex: 'name',
      key: 'name',
      width: 200,
      ellipsis: true
    }, {
      title: '分类',
      dataIndex: 'category',
      key: 'category',
      width: 100,
      filters: [{
        text: '电脑',
        value: '电脑'
      }, {
        text: '手机',
        value: '手机'
      }, {
        text: '配件',
        value: '配件'
      }, {
        text: '平板',
        value: '平板'
      }, {
        text: '穿戴',
        value: '穿戴'
      }, {
        text: '显示器',
        value: '显示器'
      }],
      onFilter: (value, record) => (record as Product).category === value
    }, {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      width: 100,
      align: 'center',
      filters: [{
        text: '在售',
        value: 'on-sale'
      }, {
        text: '下架',
        value: 'off-sale'
      }, {
        text: '售罄',
        value: 'sold-out'
      }],
      onFilter: (value, record) => (record as Product).status === value,
      render: (_, record) => {
        const product = record as Product;
        return <Tag variant={statusColors[product.status]}>{statusText[product.status]}</Tag>;
      }
    }, {
      title: '价格',
      dataIndex: 'price',
      key: 'price',
      width: 100,
      align: 'right',
      render: (_, record) => {
        const product = record as Product;
        return <span className="text-danger-500 font-medium">¥{product.price.toLocaleString()}</span>;
      }
    }];
    return <div className="w-full min-w-[700px]">
        <Table columns={filterColumns} dataSource={products} rowKey="id" height={350} bordered />
      </div>;
  }
}`,...(Dt=(Pt=A.parameters)==null?void 0:Pt.docs)==null?void 0:Dt.source},description:{story:"列筛选",...(Bt=(At=A.parameters)==null?void 0:At.docs)==null?void 0:Bt.description}}};var Lt,Ft,_t,Et,Ut;B.parameters={...B.parameters,docs:{...(Lt=B.parameters)==null?void 0:Lt.docs,source:{originalSource:`{
  render: () => {
    const expandableColumns: ColumnType<unknown>[] = [{
      title: '订单号',
      dataIndex: 'id',
      key: 'id',
      width: 120
    }, {
      title: '客户',
      dataIndex: 'customer',
      key: 'customer',
      width: 100
    }, {
      title: '商品',
      dataIndex: 'product',
      key: 'product',
      width: 180
    }, {
      title: '金额',
      dataIndex: 'amount',
      key: 'amount',
      width: 120,
      align: 'right',
      render: (_, record) => {
        const order = record as Order;
        return <span className="font-medium">¥{order.amount.toLocaleString()}</span>;
      }
    }, {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      width: 100,
      align: 'center',
      render: (_, record) => {
        const order = record as Order;
        return <Tag variant={statusColors[order.status]}>{statusText[order.status]}</Tag>;
      }
    }];
    return <div className="w-full min-w-[700px]">
        <Table columns={expandableColumns} dataSource={orders} rowKey="id" height={400} bordered expandable={{
        expandedRowRender: record => {
          const order = record as Order;
          return <div className="p-2 space-y-1 text-sm text-gray-600">
                  <p>支付方式：{order.paymentMethod}</p>
                  <p>创建时间：{order.createTime}</p>
                  <p>订单金额：¥{order.amount.toLocaleString()}</p>
                </div>;
        }
      }} />
      </div>;
  }
}`,...(_t=(Ft=B.parameters)==null?void 0:Ft.docs)==null?void 0:_t.source},description:{story:"可展开行",...(Ut=(Et=B.parameters)==null?void 0:Et.docs)==null?void 0:Ut.description}}};var $t,zt,Ht,Wt,Gt;L.parameters={...L.parameters,docs:{...($t=L.parameters)==null?void 0:$t.docs,source:{originalSource:`{
  render: () => {
    const mergedColumns: ColumnType<unknown>[] = [{
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      width: 120
    }, {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
      width: 80,
      align: 'center'
    }, {
      title: '住址',
      dataIndex: 'address',
      key: 'address'
    }];
    const mergedData = [{
      id: 1,
      name: '张三',
      age: 32,
      address: '北京市朝阳区望京路1号'
    }, {
      id: 2,
      name: '张三',
      age: 32,
      address: '北京市海淀区中关村路2号'
    }, {
      id: 3,
      name: '李四',
      age: 28,
      address: '上海市浦东新区世纪大道3号'
    }, {
      id: 4,
      name: '李四',
      age: 28,
      address: '上海市徐汇区漕河泾4号'
    }, {
      id: 5,
      name: '王五',
      age: 35,
      address: '广州市天河区天河路5号'
    }];
    return <div className="w-full min-w-[600px] space-y-2">
        <div className="text-sm text-gray-500">
          通过 onCell 返回 rowSpan/colSpan 实现单元格合并
        </div>
        <Table columns={mergedColumns.map(col => {
        if (col.key === 'name') {
          return {
            ...col,
            onCell: (_record: unknown, index?: number) => {
              const idx = index ?? 0;
              if (idx > 0 && mergedData[idx]!.name === mergedData[idx - 1]!.name) {
                return {
                  rowSpan: 0
                } as CellProps;
              }
              let span = 1;
              for (let i = idx + 1; i < mergedData.length && mergedData[i]!.name === mergedData[idx]!.name; i++) {
                span++;
              }
              return {
                rowSpan: span
              } as CellProps;
            }
          };
        }
        if (col.key === 'age') {
          return {
            ...col,
            onCell: (_record: unknown, index?: number) => {
              const idx = index ?? 0;
              if (idx > 0 && mergedData[idx]!.name === mergedData[idx - 1]!.name) {
                return {
                  rowSpan: 0
                } as CellProps;
              }
              let span = 1;
              for (let i = idx + 1; i < mergedData.length && mergedData[i]!.name === mergedData[idx]!.name; i++) {
                span++;
              }
              return {
                rowSpan: span
              } as CellProps;
            }
          };
        }
        return col;
      })} dataSource={mergedData} rowKey="id" height={300} bordered />
      </div>;
  }
}`,...(Ht=(zt=L.parameters)==null?void 0:zt.docs)==null?void 0:Ht.source},description:{story:"合并单元格",...(Gt=(Wt=L.parameters)==null?void 0:Wt.docs)==null?void 0:Gt.description}}};const Rr=["Basic","VirtualScroll","MillionRows","LargeDataWithFeatures","RowSelectionCheckbox","RowSelectionRadio","WithSorter","FixedColumns","UserManagement","OrderList","ProductManagement","Sizes","Loading","Empty","CustomEmpty","Bordered","NoHeader","RowEvents","Ellipsis","WithFilter","ExpandableRow","MergedCells"];export{h as Basic,T as Bordered,M as CustomEmpty,D as Ellipsis,I as Empty,B as ExpandableRow,k as FixedColumns,v as LargeDataWithFeatures,R as Loading,L as MergedCells,w as MillionRows,O as NoHeader,j as OrderList,C as ProductManagement,P as RowEvents,S as RowSelectionCheckbox,f as RowSelectionRadio,K as Sizes,N as UserManagement,y as VirtualScroll,A as WithFilter,b as WithSorter,Rr as __namedExportsOrder,Kr as default};
