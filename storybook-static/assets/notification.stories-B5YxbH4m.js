import{j as t}from"./jsx-runtime-CDt2p4po.js";import{r as p}from"./index-GiUgBvb1.js";import{c as ue}from"./client-B5L6vJYF.js";import{a as T}from"./utils-BEhiKRD9.js";import{c as se}from"./index-C08JwjkN.js";import{X as me}from"./x-B-5N0Ikz.js";import{I as fe}from"./info-CjH-k_Hj.js";import{T as ge,C as xe}from"./triangle-alert-BCaP184V.js";import{C as ye}from"./circle-check-5HUO4MLI.js";import{B as o}from"./index-WhxK0hy4.js";import"./index-CROobee-.js";import"./createLucideIcon-CZe00VV7.js";import"./loader-circle-CulI208u.js";const he=se("flex items-start gap-3 p-4 rounded-lg shadow-lg border border-solid bg-white w-80 max-w-full transition-all duration-300",{variants:{type:{success:"border-success-200",error:"border-danger-200",warning:"border-warning-200",info:"border-primary-200"}},defaultVariants:{type:"info"}}),be=se("shrink-0 flex items-center justify-center w-8 h-8 rounded-full",{variants:{type:{success:"bg-success-100 text-success-600",error:"bg-danger-100 text-danger-600",warning:"bg-warning-100 text-warning-600",info:"bg-primary-100 text-primary-600"}},defaultVariants:{type:"info"}}),Ne={success:t.jsx(ye,{className:"h-5 w-5","aria-hidden":"true"}),error:t.jsx(xe,{className:"h-5 w-5","aria-hidden":"true"}),warning:t.jsx(ge,{className:"h-5 w-5","aria-hidden":"true"}),info:t.jsx(fe,{className:"h-5 w-5","aria-hidden":"true"})},ve={"top-right":"fixed top-4 right-4 z-[9999] flex flex-col items-end gap-3 pointer-events-none","top-left":"fixed top-4 left-4 z-[9999] flex flex-col items-start gap-3 pointer-events-none","bottom-right":"fixed bottom-4 right-4 z-[9999] flex flex-col-reverse items-end gap-3 pointer-events-none","bottom-left":"fixed bottom-4 left-4 z-[9999] flex flex-col-reverse items-start gap-3 pointer-events-none"},c=p.forwardRef((r,e)=>{const{className:n,type:s="info",title:i,description:l,duration:d=4500,closable:u=!0,onClose:B,icon:ae,action:R,visible:ce=!0,...le}=r,[de,pe]=p.useState(ce),m=p.useRef(B);m.current=B;const A=()=>{var f;pe(!1),(f=m.current)==null||f.call(m)};return p.useEffect(()=>{if(d<=0)return;const f=setTimeout(A,d);return()=>clearTimeout(f)},[]),de?t.jsxs("div",{ref:e,role:"alert","aria-live":"polite",className:T(he({type:s}),n),...le,children:[t.jsx("span",{className:T(be({type:s})),"aria-hidden":"true",children:ae??Ne[s]}),t.jsxs("div",{className:"flex-1 min-w-0",children:[i&&t.jsx("div",{className:"font-medium text-foreground text-sm leading-5",children:i}),l&&t.jsx("div",{className:"mt-1 text-muted-foreground text-sm leading-5",children:l}),R&&t.jsx("div",{className:"mt-3 flex items-center gap-2",children:R})]}),u&&t.jsx("button",{type:"button",onClick:A,"aria-label":"关闭通知",className:`shrink-0 inline-flex items-center justify-center text-muted-foreground opacity-60
            hover:opacity-100 hover:text-foreground transition-opacity cursor-pointer`,children:t.jsx(me,{className:"h-4 w-4","aria-hidden":"true"})})]}):null});c.displayName="Notification";const we="simplui-notification-container";function je(r){const e=`${we}-${r}`;let n=document.getElementById(e);return n||(n=document.createElement("div"),n.id=e,n.className=ve[r],document.body.appendChild(n)),n}function g(r,e){const n=(e==null?void 0:e.placement)??"top-right",s=je(n),i=document.createElement("div");i.className="pointer-events-auto",s.appendChild(i);const l=ue(i),d=()=>{var u;l.unmount(),i.remove(),(u=e==null?void 0:e.onClose)==null||u.call(e)};return l.render(t.jsx(c,{type:r,title:e==null?void 0:e.title,description:e==null?void 0:e.description,duration:(e==null?void 0:e.duration)??4500,closable:(e==null?void 0:e.closable)??!0,icon:e==null?void 0:e.icon,action:e==null?void 0:e.action,onClose:d})),d}const a={success(r){return g("success",r)},error(r){return g("error",r)},warning(r){return g("warning",r)},info(r){return g("info",r)}};c.__docgenInfo={description:`Notification 通知提醒组件

在页面边缘展示通知提醒，支持 4 种通知类型、标题、描述、操作按钮和自动关闭。
使用 forwardRef 转发外层容器 div 元素的引用。`,methods:[],displayName:"Notification",props:{type:{required:!1,tsType:{name:"union",raw:"'success' | 'error' | 'warning' | 'info'",elements:[{name:"literal",value:"'success'"},{name:"literal",value:"'error'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'info'"}]},description:"通知类型，控制图标、颜色风格。默认 'info'"},title:{required:!1,tsType:{name:"ReactNode"},description:"通知标题"},description:{required:!1,tsType:{name:"ReactNode"},description:"通知描述内容，支持 ReactNode"},visible:{required:!1,tsType:{name:"boolean"},description:"是否为可见状态。默认 true（内部管理，组件挂载时显示，关闭后隐藏）"},duration:{required:!1,tsType:{name:"number"},description:"自动关闭延时（毫秒），设为 0 则不自动关闭。默认 4500"},closable:{required:!1,tsType:{name:"boolean"},description:"是否显示关闭按钮。默认 true"},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"通知关闭时的回调，在动画结束后触发"},icon:{required:!1,tsType:{name:"ReactNode"},description:"自定义图标，不传则按 type 自动匹配默认图标"},action:{required:!1,tsType:{name:"ReactNode"},description:"自定义操作按钮区域，显示在通知底部"},className:{required:!1,tsType:{name:"string"},description:"自定义类名，通过 cn() 合并，用户可覆盖默认样式"}},composes:["VariantProps"]};const Ce=r=>t.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",width:"100%"},children:t.jsx(r,{})}),Pe={title:"反馈/Notification 通知提醒框",component:c,tags:["autodocs"],decorators:[Ce],parameters:{layout:"padded",docs:{description:{component:`通知提醒框用于在页面角落弹出系统级的通知。

- 适用于重要消息推送、任务完成提醒等需要持久展示的场景
- 支持标题、描述、操作按钮和多种弹出位置
- 可通过 notificationApi 全局调用，无需维护组件状态`}}},argTypes:{type:{control:"select",options:["success","error","warning","info"],description:"通知类型，控制图标和颜色风格，默认 info"},title:{control:"text",description:"通知标题"},description:{control:"text",description:"通知描述内容，支持 ReactNode"},action:{control:"text",description:"自定义操作按钮区域，显示在通知底部"}}},x={args:{type:"success",title:"成功",description:"您的操作已成功完成。"}},y={args:{type:"error",title:"错误",description:"出错了，请重试。"}},h={args:{type:"warning",title:"警告",description:"在继续之前，请检查您的更改。"}},b={args:{type:"info",title:"信息",description:"这里有一些对您有用的信息。"}},N={parameters:{docs:{description:{story:"带操作按钮的通知，适用于需要用户立即响应的场景。"}}},render:()=>t.jsx(c,{type:"info",title:"有可用更新",description:"有新版本可用，是否立即更新？",duration:0,action:t.jsx(o,{variant:"primary",children:"立即更新"})})},v={args:{type:"success",description:"没有标题的简单通知。"}},w={parameters:{docs:{description:{story:"通过 notificationApi 全局调用通知，无需在组件内维护状态。"}}},render:()=>t.jsxs("div",{className:"flex flex-col gap-4",children:[t.jsx(o,{onClick:()=>a.success({title:"成功",description:"操作完成！"}),children:"成功"}),t.jsx(o,{onClick:()=>a.error({title:"错误",description:"操作失败！"}),children:"错误"}),t.jsx(o,{onClick:()=>a.warning({title:"警告",description:"请注意！"}),children:"警告"}),t.jsx(o,{onClick:()=>a.info({title:"信息",description:"这里有一些信息。"}),children:"信息"})]})},j={render:()=>{const r=[{key:"top-left",label:"左上 (topLeft)"},{key:"top-right",label:"右上 (topRight)"},{key:"bottom-left",label:"左下 (bottomLeft)"},{key:"bottom-right",label:"右下 (bottomRight)"}];return t.jsx("div",{className:"flex flex-wrap gap-3",children:r.map(({key:e,label:n})=>t.jsx(o,{onClick:()=>a.info({title:`${n} 通知`,description:`此通知出现在${n}位置`,placement:e,duration:3e3}),children:n},e))})}},C={render:()=>t.jsx(c,{type:"info",title:"自定义样式通知",description:"此通知使用了自定义背景色、边框和图标。",duration:0,icon:t.jsx("span",{className:"flex h-5 w-5 items-center justify-center rounded-full bg-secondary text-white text-xs font-bold",children:"成功"}),className:"border-l-4 border-secondary bg-secondary/10"})},k={render:()=>{const r=p.useRef(null),e=()=>{r.current=a.info({title:"初始通知",description:"这是初始内容，将在 2 秒后更新。",duration:0})},n=()=>{var i;(i=r.current)==null||i.call(r),r.current=a.success({title:"已更新",description:"通知内容已更新为成功状态。",duration:0})},s=()=>{var i;(i=r.current)==null||i.call(r),r.current=null};return t.jsxs("div",{className:"flex flex-wrap gap-3",children:[t.jsx(o,{onClick:e,children:"打开通知"}),t.jsx(o,{onClick:n,children:"更新通知"}),t.jsx(o,{onClick:s,children:"关闭通知"})]})}};var S,I,E;x.parameters={...x.parameters,docs:{...(S=x.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    type: 'success',
    title: '成功',
    description: '您的操作已成功完成。'
  }
}`,...(E=(I=x.parameters)==null?void 0:I.docs)==null?void 0:E.source}}};var q,$,D;y.parameters={...y.parameters,docs:{...(q=y.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    type: 'error',
    title: '错误',
    description: '出错了，请重试。'
  }
}`,...(D=($=y.parameters)==null?void 0:$.docs)==null?void 0:D.source}}};var V,_,P;h.parameters={...h.parameters,docs:{...(V=h.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    type: 'warning',
    title: '警告',
    description: '在继续之前，请检查您的更改。'
  }
}`,...(P=(_=h.parameters)==null?void 0:_.docs)==null?void 0:P.source}}};var z,L,W;b.parameters={...b.parameters,docs:{...(z=b.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    type: 'info',
    title: '信息',
    description: '这里有一些对您有用的信息。'
  }
}`,...(W=(L=b.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};var X,O,U;N.parameters={...N.parameters,docs:{...(X=N.parameters)==null?void 0:X.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '带操作按钮的通知，适用于需要用户立即响应的场景。'
      }
    }
  },
  render: () => <Notification type="info" title="有可用更新" description="有新版本可用，是否立即更新？" duration={0} action={<Button variant="primary">立即更新</Button>} />
}`,...(U=(O=N.parameters)==null?void 0:O.docs)==null?void 0:U.source}}};var F,G,H;v.parameters={...v.parameters,docs:{...(F=v.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    type: 'success',
    description: '没有标题的简单通知。'
  }
}`,...(H=(G=v.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var J,K,M;w.parameters={...w.parameters,docs:{...(J=w.parameters)==null?void 0:J.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '通过 notificationApi 全局调用通知，无需在组件内维护状态。'
      }
    }
  },
  render: () => {
    return <div className="flex flex-col gap-4">
        <Button onClick={() => notificationApi.success({
        title: '成功',
        description: '操作完成！'
      })}>
          成功
        </Button>
        <Button onClick={() => notificationApi.error({
        title: '错误',
        description: '操作失败！'
      })}>
          错误
        </Button>
        <Button onClick={() => notificationApi.warning({
        title: '警告',
        description: '请注意！'
      })}>
          警告
        </Button>
        <Button onClick={() => notificationApi.info({
        title: '信息',
        description: '这里有一些信息。'
      })}>
          信息
        </Button>
      </div>;
  }
}`,...(M=(K=w.parameters)==null?void 0:K.docs)==null?void 0:M.source}}};var Q,Y,Z;j.parameters={...j.parameters,docs:{...(Q=j.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => {
    const placements = [{
      key: 'top-left' as const,
      label: '左上 (topLeft)'
    }, {
      key: 'top-right' as const,
      label: '右上 (topRight)'
    }, {
      key: 'bottom-left' as const,
      label: '左下 (bottomLeft)'
    }, {
      key: 'bottom-right' as const,
      label: '右下 (bottomRight)'
    }];
    return <div className="flex flex-wrap gap-3">
        {placements.map(({
        key,
        label
      }) => <Button key={key} onClick={() => notificationApi.info({
        title: \`\${label} 通知\`,
        description: \`此通知出现在\${label}位置\`,
        placement: key,
        duration: 3000
      })}>
            {label}
          </Button>)}
      </div>;
  }
}`,...(Z=(Y=j.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,te,re;C.parameters={...C.parameters,docs:{...(ee=C.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => <Notification type="info" title="自定义样式通知" description="此通知使用了自定义背景色、边框和图标。" duration={0} icon={<span className="flex h-5 w-5 items-center justify-center rounded-full bg-secondary text-white text-xs font-bold">
          成功
        </span>} className="border-l-4 border-secondary bg-secondary/10" />
}`,...(re=(te=C.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var ne,ie,oe;k.parameters={...k.parameters,docs:{...(ne=k.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: () => {
    const closeRef = useRef<(() => void) | null>(null);
    const openNotification = () => {
      closeRef.current = notificationApi.info({
        title: '初始通知',
        description: '这是初始内容，将在 2 秒后更新。',
        duration: 0
      });
    };
    const updateNotification = () => {
      closeRef.current?.();
      closeRef.current = notificationApi.success({
        title: '已更新',
        description: '通知内容已更新为成功状态。',
        duration: 0
      });
    };
    const closeNotification = () => {
      closeRef.current?.();
      closeRef.current = null;
    };
    return <div className="flex flex-wrap gap-3">
        <Button onClick={openNotification}>打开通知</Button>
        <Button onClick={updateNotification}>更新通知</Button>
        <Button onClick={closeNotification}>关闭通知</Button>
      </div>;
  }
}`,...(oe=(ie=k.parameters)==null?void 0:ie.docs)==null?void 0:oe.source}}};const ze=["Success","Error","Warning","Info","WithAction","NoTitle","NotificationApiDemo","PlacementDemo","CustomStyle","UpdateAndClose"];export{C as CustomStyle,y as Error,b as Info,v as NoTitle,w as NotificationApiDemo,j as PlacementDemo,x as Success,k as UpdateAndClose,h as Warning,N as WithAction,ze as __namedExportsOrder,Pe as default};
