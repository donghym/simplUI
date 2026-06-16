import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as o,R as H}from"./index-GiUgBvb1.js";import{a as c}from"./utils-BEhiKRD9.js";import{c as d}from"./index-C08JwjkN.js";import{C as U}from"./chevron-up-CiCbXlai.js";import{C as J}from"./chevron-down-CY-YwltC.js";import{C as X}from"./check-DytZnMFh.js";import{C as Y}from"./copy-DgomLDo4.js";import{c as Z}from"./createLucideIcon-CZe00VV7.js";/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=Z("Pencil",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]),ee=d("w-full bg-background rounded-lg",{variants:{bordered:{true:"border border-border",false:""}},defaultVariants:{bordered:!0}}),ae=d("text-base font-semibold text-foreground mb-4 px-4 pt-4",{variants:{}}),se=d("grid gap-0",{variants:{}}),re=d("text-sm text-muted-foreground px-4 py-2.5",{variants:{bordered:{true:"border-b border-r border-border bg-muted/50",false:""}},defaultVariants:{bordered:!0}}),te=d("text-sm text-foreground px-4 py-2.5 flex items-center gap-2",{variants:{bordered:{true:"border-b border-border",false:""}},defaultVariants:{bordered:!0}}),V=d("inline-flex items-center justify-center w-6 h-6 rounded text-muted-foreground hover:text-primary-500 hover:bg-muted transition-colors duration-150",{variants:{}}),le=d("flex items-center justify-center py-2 text-sm text-primary-500 hover:text-primary-600 cursor-pointer transition-colors duration-150",{variants:{}});function oe(a,b){const n=[];let r=[],l=0;for(const t of a){const i=t.span??1;l+i>b?(n.push(r),r=[t],l=i):(r.push(t),l+=i)}return r.length>0&&n.push(r),n}function ne({item:a,bordered:b}){const[n,r]=o.useState(!1),[l,t]=o.useState(""),[i,v]=o.useState(!1),j=o.useCallback(async()=>{const s=typeof a.value=="string"?a.value:String(a.value);await navigator.clipboard.writeText(s),v(!0),setTimeout(()=>v(!1),1500)},[a.value]),E=o.useCallback(()=>{const s=typeof a.value=="string"?a.value:String(a.value);t(s),r(!0)},[a.value]),p=o.useCallback(()=>{var s;(s=a.onEdit)==null||s.call(a,l),r(!1)},[a,l]),f=o.useCallback(s=>{s.key==="Enter"&&p(),s.key==="Escape"&&r(!1)},[p]);return e.jsx("td",{colSpan:(a.span??1)*2-1,className:c(te({bordered:b})),children:n?e.jsx("input",{type:"text",value:l,onChange:s=>t(s.target.value),onKeyDown:f,onBlur:p,autoFocus:!0,className:"w-full px-1 py-0.5 text-sm border border-primary-500 rounded outline-none bg-background text-foreground"}):e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"flex-1",children:a.value}),a.copyable&&e.jsx("button",{type:"button",onClick:j,className:c(V()),"aria-label":"复制",children:i?e.jsx(X,{className:"w-3.5 h-3.5 text-success-500"}):e.jsx(Y,{className:"w-3.5 h-3.5"})}),a.editable&&e.jsx("button",{type:"button",onClick:E,className:c(V()),"aria-label":"编辑",children:e.jsx($,{className:"w-3.5 h-3.5"})})]})})}const u=o.forwardRef((a,b)=>{const{title:n,items:r,columns:l=3,bordered:t=!0,collapsible:i=!1,defaultCollapsedRows:v,className:j,...E}=a,[p,f]=o.useState(!1),s=oe(r,l),N=v??s.length,S=i&&s.length>N,Q=S&&!p?s.slice(0,N):s;return e.jsxs("div",{ref:b,className:c(ee({bordered:t}),j),...E,children:[n&&e.jsx("div",{className:c(ae()),children:n}),e.jsx("div",{className:c(se()),children:e.jsx("table",{className:"w-full border-collapse",children:e.jsx("tbody",{children:Q.map((m,w)=>e.jsx("tr",{children:m.map((k,W)=>e.jsxs(H.Fragment,{children:[e.jsx("th",{className:c(re({bordered:t})),children:k.label}),e.jsx(ne,{item:k,bordered:t})]},W))},w))})})}),S&&e.jsx("div",{role:"button",tabIndex:0,className:c(le()),onClick:()=>f(m=>!m),onKeyDown:m=>{m.key==="Enter"&&f(w=>!w)},children:p?e.jsxs(e.Fragment,{children:["收起 ",e.jsx(U,{className:"w-4 h-4"})]}):e.jsxs(e.Fragment,{children:["展开更多 ",e.jsx(J,{className:"w-4 h-4"})]})})]})});u.displayName="EnhanceDescriptions";u.__docgenInfo={description:"增强详情面板组件",methods:[],displayName:"EnhanceDescriptions",props:{title:{required:!1,tsType:{name:"string"},description:"标题"},items:{required:!0,tsType:{name:"Array",elements:[{name:"EnhanceDescriptionsItem"}],raw:"EnhanceDescriptionsItem[]"},description:"详情项数组"},columns:{required:!1,tsType:{name:"number"},description:"列数，默认 3"},bordered:{required:!1,tsType:{name:"boolean"},description:"是否显示边框，默认 true"},collapsible:{required:!1,tsType:{name:"boolean"},description:"是否可折叠，默认 false"},defaultCollapsedRows:{required:!1,tsType:{name:"number"},description:"默认折叠行数，超过此行数折叠，默认不折叠"}},composes:["HTMLAttributes","VariantProps"]};const he={title:"增强组件/EnhanceDescriptions 增强详情面板",component:u,tags:["autodocs"],parameters:{layout:"padded"},argTypes:{columns:{control:"number",description:"列数"},bordered:{control:"boolean",description:"是否显示边框"},collapsible:{control:"boolean",description:"是否可折叠"}}},D=[{label:"用户名",value:"张三"},{label:"手机号",value:"13800138000",copyable:!0},{label:"邮箱",value:"zhangsan@example.com",copyable:!0},{label:"居住地",value:"北京市朝阳区"},{label:"职业",value:"前端工程师",editable:!0,onEdit:a=>console.log("编辑职业:",a)},{label:"备注",value:"无"}],h={args:{title:"用户信息",items:D,columns:3,bordered:!0}},x={render:()=>e.jsx(u,{title:"可复制与可编辑",items:[{label:"订单号",value:"ORD-2024-001234",copyable:!0},{label:"收货地址",value:"浙江省杭州市西湖区望塘路18号",copyable:!0},{label:"联系人",value:"李四",editable:!0,onEdit:a=>console.log("新联系人:",a)},{label:"手机号",value:"13900139000",copyable:!0,editable:!0,onEdit:a=>console.log("新手机号:",a)},{label:"状态",value:"已发货"},{label:"备注",value:"请尽快送达"}]})},y={render:()=>e.jsx(u,{title:"折叠详情",items:[{label:"产品",value:"云数据库 MySQL"},{label:"版本",value:"8.0"},{label:"区域",value:"华东1"},{label:"规格",value:"4核8G"},{label:"存储",value:"100GB SSD"},{label:"网络",value:"专有网络"},{label:"计费",value:"按量付费"},{label:"创建时间",value:"2024-01-15 10:30:00"},{label:"到期时间",value:"2025-01-15 10:30:00"}],collapsible:!0,defaultCollapsedRows:2})},g={render:()=>e.jsx(u,{title:"两列布局",items:D,columns:2})},C={render:()=>e.jsx(u,{title:"无边框模式",items:D,bordered:!1})};var R,T,I;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    title: '用户信息',
    items: basicItems,
    columns: 3,
    bordered: true
  }
}`,...(I=(T=h.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};var q,L,A;x.parameters={...x.parameters,docs:{...(q=x.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <EnhanceDescriptions title="可复制与可编辑" items={[{
    label: '订单号',
    value: 'ORD-2024-001234',
    copyable: true
  }, {
    label: '收货地址',
    value: '浙江省杭州市西湖区望塘路18号',
    copyable: true
  }, {
    label: '联系人',
    value: '李四',
    editable: true,
    onEdit: v => console.log('新联系人:', v)
  }, {
    label: '手机号',
    value: '13900139000',
    copyable: true,
    editable: true,
    onEdit: v => console.log('新手机号:', v)
  }, {
    label: '状态',
    value: '已发货'
  }, {
    label: '备注',
    value: '请尽快送达'
  }]} />
}`,...(A=(L=x.parameters)==null?void 0:L.docs)==null?void 0:A.source}}};var B,F,G;y.parameters={...y.parameters,docs:{...(B=y.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <EnhanceDescriptions title="折叠详情" items={[{
    label: '产品',
    value: '云数据库 MySQL'
  }, {
    label: '版本',
    value: '8.0'
  }, {
    label: '区域',
    value: '华东1'
  }, {
    label: '规格',
    value: '4核8G'
  }, {
    label: '存储',
    value: '100GB SSD'
  }, {
    label: '网络',
    value: '专有网络'
  }, {
    label: '计费',
    value: '按量付费'
  }, {
    label: '创建时间',
    value: '2024-01-15 10:30:00'
  }, {
    label: '到期时间',
    value: '2025-01-15 10:30:00'
  }]} collapsible defaultCollapsedRows={2} />
}`,...(G=(F=y.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var M,_,z;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <EnhanceDescriptions title="两列布局" items={basicItems} columns={2} />
}`,...(z=(_=g.parameters)==null?void 0:_.docs)==null?void 0:z.source}}};var K,O,P;C.parameters={...C.parameters,docs:{...(K=C.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <EnhanceDescriptions title="无边框模式" items={basicItems} bordered={false} />
}`,...(P=(O=C.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};const xe=["Default","WithCopyAndEdit","Collapsible","TwoColumns","NoBorder"];export{y as Collapsible,h as Default,C as NoBorder,g as TwoColumns,x as WithCopyAndEdit,xe as __namedExportsOrder,he as default};
