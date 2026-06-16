import{j as t}from"./jsx-runtime-CDt2p4po.js";import{r as T}from"./index-GiUgBvb1.js";import{a as i}from"./utils-BEhiKRD9.js";import{c as l}from"./index-C08JwjkN.js";import{C as H}from"./chevron-up-CiCbXlai.js";import{C as K}from"./chevron-down-CY-YwltC.js";import{U as O}from"./user-CXa3gJrY.js";import{c as P}from"./createLucideIcon-CZe00VV7.js";import{T as G,C as J}from"./triangle-alert-BCaP184V.js";import{L as Q}from"./loader-circle-CulI208u.js";/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y=P("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]),Z=l("relative w-full",{variants:{mode:{left:"",alternate:""}},defaultVariants:{mode:"left"}}),$=l("relative pb-8 last:pb-0",{variants:{mode:{left:"pl-8",alternate:"pl-0"}},defaultVariants:{mode:"left"}}),tt=l("absolute left-0 top-1 w-3 h-3 rounded-full border-2 border-background z-10",{variants:{status:{default:"bg-muted-foreground",success:"bg-success-500",warning:"bg-warning-500",danger:"bg-danger-500",processing:"bg-primary-500 animate-pulse"}},defaultVariants:{status:"default"}}),et=l("absolute left-[5px] top-3 w-0.5 bg-border",{variants:{}}),st=l("min-h-0",{variants:{mode:{left:"",alternate:""}},defaultVariants:{mode:"left"}}),nt=l("flex items-center gap-1 text-sm text-primary-500 hover:text-primary-600 cursor-pointer transition-colors duration-150 mt-2",{variants:{}}),at={default:"text-muted-foreground",success:"text-success-500",warning:"text-warning-500",danger:"text-danger-500",processing:"text-primary-500"};function it({item:e,index:h,isLast:r,mode:s}){const o=e.status??"default",a=s==="alternate"&&h%2===0;return t.jsxs("div",{className:i($({mode:s})),children:[t.jsx("div",{className:i(tt({status:o}),e.icon&&"flex items-center justify-center w-auto h-auto p-1 bg-transparent border-0",s==="alternate"&&(a?"left-auto right-[calc(50%-6px)]":"left-[calc(50%-6px)]")),children:e.icon}),!r&&t.jsx("div",{className:i(et(),s==="alternate"&&(a?"left-auto right-[calc(50%-1px)]":"left-[calc(50%-1px)]"))}),t.jsxs("div",{className:i(st({mode:s}),s==="alternate"&&(a?"pr-[calc(50%+20px)] text-right":"pl-[calc(50%+20px)]")),children:[t.jsxs("div",{className:"flex items-baseline gap-2",children:[t.jsx("span",{className:i("text-sm font-medium text-foreground",at[o]),children:e.title}),e.time&&t.jsx("span",{className:"text-xs text-muted-foreground",children:e.time})]}),e.content&&t.jsx("div",{className:"text-sm text-muted-foreground mt-1",children:e.content})]})]})}const n=T.forwardRef((e,h)=>{const{items:r,mode:s="left",collapsible:o=!1,collapseCount:a=3,className:F,...M}=e,[C,R]=T.useState(!1),x=o&&r.length>a,w=x&&!C?r.slice(0,a):r,j=T.useCallback(()=>R(c=>!c),[]);return t.jsxs("div",{ref:h,className:i(Z({mode:s}),F),...M,children:[w.map((c,b)=>t.jsx(it,{item:c,index:b,isLast:b===w.length-1&&!x,mode:s},b)),x&&t.jsx("div",{role:"button",tabIndex:0,className:i(nt()),onClick:j,onKeyDown:c=>{c.key==="Enter"&&j()},children:C?t.jsxs(t.Fragment,{children:["收起 ",t.jsx(H,{className:"w-4 h-4"})]}):t.jsxs(t.Fragment,{children:["展开更多 (",r.length-a,") ",t.jsx(K,{className:"w-4 h-4"})]})})]})});n.displayName="EnhanceTimeline";n.__docgenInfo={description:"高级时间线组件",methods:[],displayName:"EnhanceTimeline",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"EnhanceTimelineItem"}],raw:"EnhanceTimelineItem[]"},description:"时间线节点数组"},mode:{required:!1,tsType:{name:"union",raw:"'left' | 'alternate'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'alternate'"}]},description:"布局模式。left 为左侧时间线，alternate 为左右交替，默认 'left'"},collapsible:{required:!1,tsType:{name:"boolean"},description:"是否可折叠。true 时超过指定数量后折叠，默认 false"},collapseCount:{required:!1,tsType:{name:"number"},description:"折叠前显示的节点数量，默认 3"}},composes:["HTMLAttributes","VariantProps"]};const xt={title:"增强组件/EnhanceTimeline 高级时间线",component:n,tags:["autodocs"],parameters:{layout:"padded"},argTypes:{mode:{control:"radio",options:["left","alternate"],description:"布局模式"},collapsible:{control:"boolean",description:"是否可折叠"},collapseCount:{control:"number",description:"折叠前显示的节点数量"}}},rt=[{title:"创建订单",time:"2024-01-01 09:00",status:"success"},{title:"支付成功",time:"2024-01-01 09:05",status:"success"},{title:"仓库拣货",time:"2024-01-01 14:00",status:"processing"},{title:"物流配送",time:"2024-01-02 08:00",status:"default"},{title:"签收确认",time:"2024-01-03 10:00",status:"default"}],m={args:{items:rt,mode:"left"}},u={render:()=>t.jsx(n,{items:[{title:"需求评审",content:"完成产品需求文档评审，确认开发范围",time:"2024-03-01",status:"success"},{title:"技术方案",content:"确定微服务架构方案，选型 Spring Cloud",time:"2024-03-05",status:"success"},{title:"开发中",content:"核心模块开发进行中，预计下周完成",time:"2024-03-10",status:"processing"},{title:"测试阶段",content:"待开发完成后进入集成测试",status:"default"}]})},d={render:()=>t.jsx(n,{items:[{title:"已完成步骤",status:"success",time:"10:00"},{title:"进行中步骤",status:"processing",time:"11:00"},{title:"警告步骤",status:"warning",content:"需要人工确认",time:"12:00"},{title:"失败步骤",status:"danger",content:"操作超时，请重试",time:"13:00"},{title:"待处理步骤",status:"default",time:"14:00"}]})},p={render:()=>t.jsx(n,{items:[{title:"用户注册",icon:t.jsx(O,{className:"w-4 h-4"}),status:"success",time:"09:00"},{title:"审核通过",icon:t.jsx(Y,{className:"w-4 h-4"}),status:"success",time:"10:00"},{title:"异常告警",icon:t.jsx(G,{className:"w-4 h-4"}),status:"warning",time:"11:00"},{title:"操作失败",icon:t.jsx(J,{className:"w-4 h-4"}),status:"danger",time:"12:00"},{title:"处理中",icon:t.jsx(Q,{className:"w-4 h-4 animate-spin"}),status:"processing",time:"13:00"}]})},f={render:()=>t.jsx(n,{mode:"alternate",items:[{title:"项目启动",content:"确定项目目标和时间表",time:"2024-01-01",status:"success"},{title:"需求分析",content:"完成用户调研和需求文档",time:"2024-01-15",status:"success"},{title:"设计阶段",content:"UI 设计与架构设计同步进行",time:"2024-02-01",status:"success"},{title:"开发阶段",content:"前后端并行开发",time:"2024-02-15",status:"processing"},{title:"测试上线",content:"集成测试与灰度发布",status:"default"}]})},g={render:()=>t.jsx(n,{collapsible:!0,collapseCount:3,items:[{title:"步骤 1",status:"success",time:"09:00"},{title:"步骤 2",status:"success",time:"10:00"},{title:"步骤 3",status:"processing",time:"11:00"},{title:"步骤 4",status:"default",time:"12:00"},{title:"步骤 5",status:"default",time:"13:00"},{title:"步骤 6",status:"default",time:"14:00"},{title:"步骤 7",status:"default",time:"15:00"}]})};var N,v,y;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    items: basicItems,
    mode: 'left'
  }
}`,...(y=(v=m.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var E,I,S;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <EnhanceTimeline items={[{
    title: '需求评审',
    content: '完成产品需求文档评审，确认开发范围',
    time: '2024-03-01',
    status: 'success'
  }, {
    title: '技术方案',
    content: '确定微服务架构方案，选型 Spring Cloud',
    time: '2024-03-05',
    status: 'success'
  }, {
    title: '开发中',
    content: '核心模块开发进行中，预计下周完成',
    time: '2024-03-10',
    status: 'processing'
  }, {
    title: '测试阶段',
    content: '待开发完成后进入集成测试',
    status: 'default'
  }]} />
}`,...(S=(I=u.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var V,k,A;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <EnhanceTimeline items={[{
    title: '已完成步骤',
    status: 'success',
    time: '10:00'
  }, {
    title: '进行中步骤',
    status: 'processing',
    time: '11:00'
  }, {
    title: '警告步骤',
    status: 'warning',
    content: '需要人工确认',
    time: '12:00'
  }, {
    title: '失败步骤',
    status: 'danger',
    content: '操作超时，请重试',
    time: '13:00'
  }, {
    title: '待处理步骤',
    status: 'default',
    time: '14:00'
  }]} />
}`,...(A=(k=d.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};var L,U,W;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <EnhanceTimeline items={[{
    title: '用户注册',
    icon: <User className="w-4 h-4" />,
    status: 'success',
    time: '09:00'
  }, {
    title: '审核通过',
    icon: <CheckCircle className="w-4 h-4" />,
    status: 'success',
    time: '10:00'
  }, {
    title: '异常告警',
    icon: <AlertTriangle className="w-4 h-4" />,
    status: 'warning',
    time: '11:00'
  }, {
    title: '操作失败',
    icon: <XCircle className="w-4 h-4" />,
    status: 'danger',
    time: '12:00'
  }, {
    title: '处理中',
    icon: <Loader2 className="w-4 h-4 animate-spin" />,
    status: 'processing',
    time: '13:00'
  }]} />
}`,...(W=(U=p.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};var D,_,q;f.parameters={...f.parameters,docs:{...(D=f.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <EnhanceTimeline mode="alternate" items={[{
    title: '项目启动',
    content: '确定项目目标和时间表',
    time: '2024-01-01',
    status: 'success'
  }, {
    title: '需求分析',
    content: '完成用户调研和需求文档',
    time: '2024-01-15',
    status: 'success'
  }, {
    title: '设计阶段',
    content: 'UI 设计与架构设计同步进行',
    time: '2024-02-01',
    status: 'success'
  }, {
    title: '开发阶段',
    content: '前后端并行开发',
    time: '2024-02-15',
    status: 'processing'
  }, {
    title: '测试上线',
    content: '集成测试与灰度发布',
    status: 'default'
  }]} />
}`,...(q=(_=f.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var X,z,B;g.parameters={...g.parameters,docs:{...(X=g.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <EnhanceTimeline collapsible collapseCount={3} items={[{
    title: '步骤 1',
    status: 'success',
    time: '09:00'
  }, {
    title: '步骤 2',
    status: 'success',
    time: '10:00'
  }, {
    title: '步骤 3',
    status: 'processing',
    time: '11:00'
  }, {
    title: '步骤 4',
    status: 'default',
    time: '12:00'
  }, {
    title: '步骤 5',
    status: 'default',
    time: '13:00'
  }, {
    title: '步骤 6',
    status: 'default',
    time: '14:00'
  }, {
    title: '步骤 7',
    status: 'default',
    time: '15:00'
  }]} />
}`,...(B=(z=g.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};const bt=["Default","WithContent","WithStatus","WithIcon","Alternate","Collapsible"];export{f as Alternate,g as Collapsible,m as Default,u as WithContent,p as WithIcon,d as WithStatus,bt as __namedExportsOrder,xt as default};
