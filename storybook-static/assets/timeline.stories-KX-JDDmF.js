import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as Y}from"./index-GiUgBvb1.js";import{a as s}from"./utils-BEhiKRD9.js";import{c as n}from"./index-C08JwjkN.js";import{C as $}from"./check-DytZnMFh.js";import"./createLucideIcon-CZe00VV7.js";const ee=n("relative bg-white rounded-xl p-8 shadow-[0_4px_12px_rgba(0,0,0,0.05)]",{variants:{mode:{left:"",right:"",alternate:""}},defaultVariants:{mode:"left"}}),te=n("relative flex mb-8 last:mb-0",{variants:{status:{completed:"",active:"",pending:""}},defaultVariants:{status:"pending"}}),ie=n("w-10 h-10 rounded-full flex items-center justify-center mr-4 z-10 shrink-0 text-sm font-medium",{variants:{status:{completed:"bg-slate-900 text-white",active:"border-2 border-slate-900 text-slate-900 bg-white",pending:"border-2 border-gray-200 text-gray-400 bg-white"}},defaultVariants:{status:"pending"}}),se=n("absolute left-[19px] top-10 bottom-[-32px] w-0.5 bg-gray-200 z-0",{variants:{status:{completed:"bg-slate-900",active:"bg-gray-200",pending:"bg-gray-200"}},defaultVariants:{status:"pending"}}),ne=n("flex-1"),ae=n("font-semibold mb-1",{variants:{status:{completed:"text-slate-900",active:"text-slate-900",pending:"text-gray-400"}},defaultVariants:{status:"pending"}}),re=n("text-xs inline-block px-2 py-0.5 rounded-full mt-1",{variants:{status:{completed:"bg-green-100 text-green-700",active:"bg-blue-100 text-blue-700",pending:"bg-gray-100 text-gray-500"}},defaultVariants:{status:"pending"}}),de=n("text-xs text-gray-400 mt-1"),h=Y.forwardRef((f,v)=>{const{className:x,status:t="pending",title:a,description:u,time:g,icon:y,index:i,isLast:r,...Z}=f;return e.jsxs("div",{ref:v,role:"listitem",className:s(te({status:t}),x),...Z,children:[!r&&e.jsx("div",{className:s(se({status:t}))}),e.jsx("div",{className:s(ie({status:t})),children:t==="completed"?y||e.jsx($,{className:"w-4 h-4"}):y||(i!==void 0?i+1:null)}),e.jsxs("div",{className:s(ne()),children:[a&&e.jsx("div",{className:s(ae({status:t})),children:a}),u&&e.jsx("div",{className:s(re({status:t})),children:u}),g&&e.jsx("div",{className:s(de()),children:g})]})]})});h.displayName="TimelineItem";const P=Y.forwardRef((f,v)=>{const{className:x,mode:t="left",items:a,children:u,...g}=f,y=()=>a&&a.length>0?a.map((i,r)=>e.jsx(h,{status:i.status,title:i.title,description:i.description,time:i.time,icon:i.icon,index:r,isLast:r===a.length-1},r)):u;return e.jsx("div",{ref:v,role:"list",className:s(ee({mode:t}),x),...g,children:y()})});P.displayName="Timeline";P.__docgenInfo={description:"时间线组件",methods:[],displayName:"Timeline",props:{mode:{required:!1,tsType:{name:"union",raw:"'left' | 'right' | 'alternate'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"},{name:"literal",value:"'alternate'"}]},description:"时间线节点位置模式"},items:{required:!1,tsType:{name:"Array",elements:[{name:"TimelineItem"}],raw:"TimelineItem[]"},description:"时间线项数组"},children:{required:!1,tsType:{name:"ReactNode"},description:"子元素（TimelineItem）"},className:{required:!1,tsType:{name:"string"},description:"自定义 className"}},composes:["Omit","VariantProps"]};h.__docgenInfo={description:"时间线项组件",methods:[],displayName:"TimelineItem",props:{status:{required:!1,tsType:{name:"union",raw:"'completed' | 'active' | 'pending'",elements:[{name:"literal",value:"'completed'"},{name:"literal",value:"'active'"},{name:"literal",value:"'pending'"}]},description:"节点状态"},title:{required:!1,tsType:{name:"ReactNode"},description:"标题"},description:{required:!1,tsType:{name:"ReactNode"},description:"描述/状态标签"},time:{required:!1,tsType:{name:"ReactNode"},description:"时间"},icon:{required:!1,tsType:{name:"ReactNode"},description:"自定义图标"},index:{required:!1,tsType:{name:"number"},description:"索引"},isLast:{required:!1,tsType:{name:"boolean"},description:"是否为最后一项"},className:{required:!1,tsType:{name:"string"},description:"自定义 className"}},composes:["Omit","VariantProps"]};const ge={title:"数据展示/Timeline 时间轴",component:P,tags:["autodocs"],parameters:{layout:"padded"}},d={args:{items:[{status:"completed",title:"Order Placed",description:"Completed",time:"May 28, 10:24 AM"},{status:"active",title:"Processing",description:"In Progress",time:"May 29, 02:15 PM"},{status:"pending",title:"Shipping",description:"Pending",time:"Estimated: May 30"}]}},o={args:{items:[{status:"completed",title:"Order Placed",description:"Completed",time:"May 28, 10:24 AM"},{status:"completed",title:"Processing",description:"Completed",time:"May 29, 02:15 PM"},{status:"completed",title:"Shipping",description:"Completed",time:"May 30, 09:00 AM"},{status:"completed",title:"Delivered",description:"Completed",time:"May 31, 14:30 PM"}]}},l={args:{items:[{status:"pending",title:"Order Placed",description:"Pending",time:"Waiting..."},{status:"pending",title:"Processing",description:"Pending",time:"Waiting..."},{status:"pending",title:"Shipping",description:"Pending",time:"Waiting..."}]}},m={args:{items:[{status:"completed",title:"需求分析",description:"已完成",time:"2024-01-15"},{status:"completed",title:"UI设计",description:"已完成",time:"2024-01-20"},{status:"active",title:"前端开发",description:"进行中",time:"2024-01-25"},{status:"pending",title:"后端开发",description:"待开始",time:"预计 2024-02-01"},{status:"pending",title:"测试上线",description:"待开始",time:"预计 2024-02-15"}]}},c={args:{items:[{status:"completed",title:"步骤一"},{status:"completed",title:"步骤二"},{status:"active",title:"步骤三"},{status:"pending",title:"步骤四"}]}},p={args:{items:[{status:"completed",title:"项目启动",time:"2024-01-01"},{status:"completed",title:"需求评审",time:"2024-01-15"},{status:"active",title:"开发阶段",time:"2024-02-01"},{status:"pending",title:"测试阶段",time:"2024-03-01"}]}};var M,b,T,N,S;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    items: [{
      status: 'completed',
      title: 'Order Placed',
      description: 'Completed',
      time: 'May 28, 10:24 AM'
    }, {
      status: 'active',
      title: 'Processing',
      description: 'In Progress',
      time: 'May 29, 02:15 PM'
    }, {
      status: 'pending',
      title: 'Shipping',
      description: 'Pending',
      time: 'Estimated: May 30'
    }]
  }
}`,...(T=(b=d.parameters)==null?void 0:b.docs)==null?void 0:T.source},description:{story:"基础用法 - 使用 items 数组",...(S=(N=d.parameters)==null?void 0:N.docs)==null?void 0:S.description}}};var V,C,I,j,w;o.parameters={...o.parameters,docs:{...(V=o.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    items: [{
      status: 'completed',
      title: 'Order Placed',
      description: 'Completed',
      time: 'May 28, 10:24 AM'
    }, {
      status: 'completed',
      title: 'Processing',
      description: 'Completed',
      time: 'May 29, 02:15 PM'
    }, {
      status: 'completed',
      title: 'Shipping',
      description: 'Completed',
      time: 'May 30, 09:00 AM'
    }, {
      status: 'completed',
      title: 'Delivered',
      description: 'Completed',
      time: 'May 31, 14:30 PM'
    }]
  }
}`,...(I=(C=o.parameters)==null?void 0:C.docs)==null?void 0:I.source},description:{story:"全部完成状态",...(w=(j=o.parameters)==null?void 0:j.docs)==null?void 0:w.description}}};var q,A,O,_,R;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    items: [{
      status: 'pending',
      title: 'Order Placed',
      description: 'Pending',
      time: 'Waiting...'
    }, {
      status: 'pending',
      title: 'Processing',
      description: 'Pending',
      time: 'Waiting...'
    }, {
      status: 'pending',
      title: 'Shipping',
      description: 'Pending',
      time: 'Waiting...'
    }]
  }
}`,...(O=(A=l.parameters)==null?void 0:A.docs)==null?void 0:O.source},description:{story:"待处理状态",...(R=(_=l.parameters)==null?void 0:_.docs)==null?void 0:R.description}}};var W,D,E,L,k;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    items: [{
      status: 'completed',
      title: '需求分析',
      description: '已完成',
      time: '2024-01-15'
    }, {
      status: 'completed',
      title: 'UI设计',
      description: '已完成',
      time: '2024-01-20'
    }, {
      status: 'active',
      title: '前端开发',
      description: '进行中',
      time: '2024-01-25'
    }, {
      status: 'pending',
      title: '后端开发',
      description: '待开始',
      time: '预计 2024-02-01'
    }, {
      status: 'pending',
      title: '测试上线',
      description: '待开始',
      time: '预计 2024-02-15'
    }]
  }
}`,...(E=(D=m.parameters)==null?void 0:D.docs)==null?void 0:E.source},description:{story:"混合状态",...(k=(L=m.parameters)==null?void 0:L.docs)==null?void 0:k.description}}};var z,U,B,F,G;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    items: [{
      status: 'completed',
      title: '步骤一'
    }, {
      status: 'completed',
      title: '步骤二'
    }, {
      status: 'active',
      title: '步骤三'
    }, {
      status: 'pending',
      title: '步骤四'
    }]
  }
}`,...(B=(U=c.parameters)==null?void 0:U.docs)==null?void 0:B.source},description:{story:"无描述和时间",...(G=(F=c.parameters)==null?void 0:F.docs)==null?void 0:G.description}}};var H,J,K,Q,X;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    items: [{
      status: 'completed',
      title: '项目启动',
      time: '2024-01-01'
    }, {
      status: 'completed',
      title: '需求评审',
      time: '2024-01-15'
    }, {
      status: 'active',
      title: '开发阶段',
      time: '2024-02-01'
    }, {
      status: 'pending',
      title: '测试阶段',
      time: '2024-03-01'
    }]
  }
}`,...(K=(J=p.parameters)==null?void 0:J.docs)==null?void 0:K.source},description:{story:"只有标题和时间",...(X=(Q=p.parameters)==null?void 0:Q.docs)==null?void 0:X.description}}};const ye=["Default","AllCompleted","AllPending","MixedStatus","Simple","WithTimeOnly"];export{o as AllCompleted,l as AllPending,d as Default,m as MixedStatus,c as Simple,p as WithTimeOnly,ye as __namedExportsOrder,ge as default};
