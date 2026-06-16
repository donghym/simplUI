import{j as s}from"./jsx-runtime-CDt2p4po.js";import{r as l}from"./index-GiUgBvb1.js";import{a as ye}from"./utils-BEhiKRD9.js";import{c as Ae}from"./index-C08JwjkN.js";import{c as ke}from"./client-B5L6vJYF.js";import{X as he}from"./x-B-5N0Ikz.js";import{L as ve}from"./loader-circle-CulI208u.js";import{I as be}from"./info-CjH-k_Hj.js";import{T as Ce,C as je}from"./triangle-alert-BCaP184V.js";import{C as Ne}from"./circle-check-5HUO4MLI.js";import{B as c}from"./index-WhxK0hy4.js";import{P as Be}from"./party-popper-DG_g59wV.js";import"./index-CROobee-.js";import"./createLucideIcon-CZe00VV7.js";const we=Ae("flex items-center gap-2 px-4 py-3 rounded-md shadow-lg text-sm border border-solid transition-all duration-300 max-w-md w-fit",{variants:{type:{success:"bg-success-50 text-success-800 border-success-200",error:"bg-danger-50 text-danger-800 border-danger-200",warning:"bg-warning-50 text-warning-800 border-warning-200",info:"bg-primary-50 text-primary-800 border-primary-200",loading:"bg-primary-50 text-primary-800 border-primary-200"}},defaultVariants:{type:"info"}}),Te={success:s.jsx(Ne,{className:"h-4 w-4 text-success-600","aria-hidden":"true"}),error:s.jsx(je,{className:"h-4 w-4 text-danger-600","aria-hidden":"true"}),warning:s.jsx(Ce,{className:"h-4 w-4 text-warning-600","aria-hidden":"true"}),info:s.jsx(be,{className:"h-4 w-4 text-primary-600","aria-hidden":"true"}),loading:s.jsx(ve,{className:"h-4 w-4 text-primary-600 animate-spin","aria-hidden":"true"})},E="simplui-message-container";function Me(){let r=document.getElementById(E);return r||(r=document.createElement("div"),r.id=E,r.className="fixed top-4 left-1/2 -translate-x-1/2 z-[9999] flex flex-col items-center gap-2 pointer-events-none",document.body.appendChild(r)),r}function p(r,t,e){const o=Me(),n=document.createElement("div");n.className="pointer-events-auto",o.appendChild(n);const a=ke(n),d=()=>{var u;a.unmount(),n.remove(),(u=e==null?void 0:e.onClose)==null||u.call(e)};return a.render(s.jsx(Re,{type:r,content:t,duration:(e==null?void 0:e.duration)??3e3,closable:(e==null?void 0:e.closable)??!0,icon:e==null?void 0:e.icon,onClose:d})),d}const Se={success(r,t,e){return p("success",r,{duration:t,onClose:e})},error(r,t,e){return p("error",r,{duration:t,onClose:e})},warning(r,t,e){return p("warning",r,{duration:t,onClose:e})},info(r,t,e){return p("info",r,{duration:t,onClose:e})},loading(r,t,e){return p("loading",r,{duration:t,onClose:e})}};function g(){return[Se,null]}function Re(r){const{className:t,type:e="info",content:o,duration:n=3e3,closable:a=!0,onClose:d,icon:u,...M}=r,[S,R]=l.useState(!0),m=l.useRef(d);m.current=d;const f=()=>{var i;R(!1),(i=m.current)==null||i.call(m)};return l.useEffect(()=>{if(n<=0)return;const i=setTimeout(f,n);return()=>clearTimeout(i)},[]),S?s.jsxs("div",{role:"alert","aria-live":"assertive",className:ye(we({type:e}),t),...M,children:[s.jsx("span",{"aria-hidden":"true",className:"shrink-0",children:u??Te[e]}),s.jsx("span",{className:"flex-1",children:o}),a&&s.jsx("button",{type:"button",onClick:f,"aria-label":"关闭消息",className:"ml-2 inline-flex items-center justify-center text-current opacity-60 hover:opacity-100 transition-opacity cursor-pointer shrink-0",children:s.jsx(he,{className:"h-3.5 w-3.5","aria-hidden":"true"})})]}):null}const He={success:s.jsx(Ne,{className:"h-4 w-4 text-success-600","aria-hidden":"true"}),error:s.jsx(je,{className:"h-4 w-4 text-danger-600","aria-hidden":"true"}),warning:s.jsx(Ce,{className:"h-4 w-4 text-warning-600","aria-hidden":"true"}),info:s.jsx(be,{className:"h-4 w-4 text-primary-600","aria-hidden":"true"}),loading:s.jsx(ve,{className:"h-4 w-4 text-primary-600 animate-spin","aria-hidden":"true"})},H=l.forwardRef((r,t)=>{const{className:e,type:o="info",content:n,duration:a=3e3,closable:d=!0,onClose:u,icon:M,visible:S=!0,...R}=r,[m,f]=l.useState(S),i=l.useRef(u);i.current=u;const I=()=>{var x;f(!1),(x=i.current)==null||x.call(i)};return l.useEffect(()=>{if(a<=0)return;const x=setTimeout(I,a);return()=>clearTimeout(x)},[]),m?s.jsxs("div",{ref:t,role:"alert","aria-live":"assertive",className:ye(we({type:o}),e),...R,children:[s.jsx("span",{"aria-hidden":"true",className:"shrink-0",children:M??He[o]}),s.jsx("span",{className:"flex-1",children:n}),d&&s.jsx("button",{type:"button",onClick:I,"aria-label":"关闭消息",className:"ml-2 inline-flex items-center justify-center text-current opacity-60 hover:opacity-100 transition-opacity cursor-pointer shrink-0",children:s.jsx(he,{className:"h-3.5 w-3.5","aria-hidden":"true"})})]}):null});H.displayName="Message";H.__docgenInfo={description:`Message 消息提示组件

在页面顶部居中展示操作反馈，支持 5 种消息类型、自动关闭和命令式 API。
使用 forwardRef 转发外层容器 div 元素的引用。`,methods:[],displayName:"Message",props:{type:{required:!1,tsType:{name:"union",raw:"'success' | 'error' | 'warning' | 'info' | 'loading'",elements:[{name:"literal",value:"'success'"},{name:"literal",value:"'error'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'info'"},{name:"literal",value:"'loading'"}]},description:"消息类型，控制图标、颜色风格。默认 'info'"},content:{required:!0,tsType:{name:"ReactNode"},description:"消息内容，支持 ReactNode"},visible:{required:!1,tsType:{name:"boolean"},description:"是否为可见状态。默认 true（内部管理，组件挂载时显示，关闭后隐藏）"},duration:{required:!1,tsType:{name:"number"},description:"自动关闭延时（毫秒），设为 0 则不自动关闭。默认 3000"},closable:{required:!1,tsType:{name:"boolean"},description:"是否显示关闭按钮。默认 true"},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"消息关闭时的回调，在动画结束后触发"},icon:{required:!1,tsType:{name:"ReactNode"},description:"自定义图标，不传则按 type 自动匹配默认图标"},className:{required:!1,tsType:{name:"string"},description:"自定义类名，通过 cn() 合并，用户可覆盖默认样式"}},composes:["VariantProps"]};const Ie=r=>s.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",width:"100%"},children:s.jsx(r,{})}),Ge={title:"反馈/Message 全局提示",component:H,tags:["autodocs"],decorators:[Ie],parameters:{layout:"padded",docs:{description:{component:`全局提示用于在页面顶部展示轻量级的操作反馈。

- 适用于提交结果、操作成功/失败提示等需要即时反馈的场景
- 支持 success、error、warning、info、loading 多种类型
- 可通过 useMessage Hook 在任意位置调用，无需维护 visible 状态`}}},argTypes:{type:{control:"select",options:["success","error","warning","info","loading"],description:"消息类型，控制图标和颜色风格，默认 info"},content:{control:"text",description:"消息内容，支持 ReactNode"},duration:{control:"number",description:"自动关闭延时（毫秒），设为 0 则不自动关闭，默认 3000"},closable:{control:"boolean",description:"是否显示关闭按钮，默认 true"},icon:{control:"text",description:"自定义图标，不传则按 type 自动匹配默认图标"}}},y={args:{type:"success",content:"操作成功完成！",visible:!0}},h={args:{type:"error",content:"出错了！",visible:!0}},v={args:{type:"warning",content:"请检查您的输入。",visible:!0}},b={args:{type:"info",content:"这是一条信息提示。",visible:!0}},C={args:{type:"loading",content:"加载中...",visible:!0,duration:0}},j={args:{type:"info",content:"点击 X 关闭此消息。",visible:!0,closable:!0,duration:0}},N={args:{type:"success",content:"自定义图标消息",visible:!0,icon:s.jsx(Be,{className:"h-5 w-5"})}},w={parameters:{docs:{description:{story:"通过 useMessage Hook 调用全局提示，无需手动管理显示状态。"}}},render:()=>{const[r,t]=g();return s.jsxs("div",{className:"flex flex-col gap-4",children:[t,s.jsx(c,{onClick:()=>r.success("成功！"),children:"成功"}),s.jsx(c,{onClick:()=>r.error("错误！"),children:"错误"}),s.jsx(c,{onClick:()=>r.warning("警告！"),children:"警告"}),s.jsx(c,{onClick:()=>r.info("信息！"),children:"信息"}),s.jsx(c,{onClick:()=>r.loading("加载中..."),children:"加载中"})]})}},A={parameters:{docs:{description:{story:"自定义提示持续时间，适用于需要用户仔细阅读的长文本提示。"}}},render:()=>{const[r,t]=g();return s.jsxs("div",{className:"flex flex-col gap-4",children:[t,s.jsx(c,{onClick:()=>r.info("此消息将持续 10 秒",1e4),children:"显示 10 秒消息"})]})}},k={parameters:{docs:{description:{story:"先显示 loading 提示，异步操作完成后自动关闭并显示成功提示。"}}},render:()=>{const[r,t]=g(),e=l.useRef(null),o=()=>{e.current=r.loading("正在加载中...",0),setTimeout(()=>{var n;(n=e.current)==null||n.call(e),e.current=null,r.success("加载完成！")},3e3)};return s.jsxs("div",{className:"flex flex-col gap-4",children:[t,s.jsx(c,{onClick:o,children:"加载后成功"})]})}},B={parameters:{docs:{description:{story:"模拟异步操作的结果反馈，根据成功或失败显示不同类型的提示。"}}},render:()=>{const[r,t]=g(),e=o=>{const n=r.loading("正在处理中...",0);setTimeout(()=>{n(),o?r.success("操作成功完成！"):r.error("操作失败，请重试！")},1e3)};return s.jsxs("div",{className:"flex flex-col gap-4",children:[t,s.jsx(c,{onClick:()=>e(!0),children:"异步操作（成功）"}),s.jsx(c,{onClick:()=>e(!1),children:"异步操作（失败）"})]})}},T={parameters:{docs:{description:{story:"手动更新或销毁提示消息，适用于需要动态反馈进度的场景。"}}},render:()=>{const[r,t]=g(),e=l.useRef(null),o=()=>{e.current=r.info("初始消息内容",0),setTimeout(()=>{var a;(a=e.current)==null||a.call(e),e.current=r.info("消息内容已更新",0)},1500)},n=()=>{var a;(a=e.current)==null||a.call(e),e.current=null};return s.jsxs("div",{className:"flex flex-col gap-4",children:[t,s.jsx(c,{onClick:o,children:"显示并更新消息"}),s.jsx(c,{onClick:n,children:"手动销毁消息"})]})}};var P,q,D;y.parameters={...y.parameters,docs:{...(P=y.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    type: 'success',
    content: '操作成功完成！',
    visible: true
  }
}`,...(D=(q=y.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};var L,U,V;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    type: 'error',
    content: '出错了！',
    visible: true
  }
}`,...(V=(U=h.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};var _,W,X;v.parameters={...v.parameters,docs:{...(_=v.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    type: 'warning',
    content: '请检查您的输入。',
    visible: true
  }
}`,...(X=(W=v.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var O,$,z;b.parameters={...b.parameters,docs:{...(O=b.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    type: 'info',
    content: '这是一条信息提示。',
    visible: true
  }
}`,...(z=($=b.parameters)==null?void 0:$.docs)==null?void 0:z.source}}};var F,G,J;C.parameters={...C.parameters,docs:{...(F=C.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    type: 'loading',
    content: '加载中...',
    visible: true,
    duration: 0
  }
}`,...(J=(G=C.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,Y;j.parameters={...j.parameters,docs:{...(K=j.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    type: 'info',
    content: '点击 X 关闭此消息。',
    visible: true,
    closable: true,
    duration: 0
  }
}`,...(Y=(Q=j.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var Z,ee,re;N.parameters={...N.parameters,docs:{...(Z=N.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    type: 'success',
    content: '自定义图标消息',
    visible: true,
    icon: <PartyPopper className="h-5 w-5" />
  }
}`,...(re=(ee=N.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var se,te,ne;w.parameters={...w.parameters,docs:{...(se=w.parameters)==null?void 0:se.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '通过 useMessage Hook 调用全局提示，无需手动管理显示状态。'
      }
    }
  },
  render: () => {
    const [messageApi, contextHolder] = useMessage();
    return <div className="flex flex-col gap-4">
        {contextHolder}
        <Button onClick={() => messageApi.success('成功！')}>成功</Button>
        <Button onClick={() => messageApi.error('错误！')}>错误</Button>
        <Button onClick={() => messageApi.warning('警告！')}>警告</Button>
        <Button onClick={() => messageApi.info('信息！')}>信息</Button>
        <Button onClick={() => messageApi.loading('加载中...')}>加载中</Button>
      </div>;
  }
}`,...(ne=(te=w.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var ae,oe,ce;A.parameters={...A.parameters,docs:{...(ae=A.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '自定义提示持续时间，适用于需要用户仔细阅读的长文本提示。'
      }
    }
  },
  render: () => {
    const [messageApi, contextHolder] = useMessage();
    return <div className="flex flex-col gap-4">
        {contextHolder}
        <Button onClick={() => messageApi.info('此消息将持续 10 秒', 10000)}>
          显示 10 秒消息
        </Button>
      </div>;
  }
}`,...(ce=(oe=A.parameters)==null?void 0:oe.docs)==null?void 0:ce.source}}};var ie,le,de;k.parameters={...k.parameters,docs:{...(ie=k.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '先显示 loading 提示，异步操作完成后自动关闭并显示成功提示。'
      }
    }
  },
  render: () => {
    const [messageApi, contextHolder] = useMessage();
    const destroyRef = useRef<(() => void) | null>(null);
    const handleClick = () => {
      destroyRef.current = messageApi.loading('正在加载中...', 0);
      setTimeout(() => {
        destroyRef.current?.();
        destroyRef.current = null;
        messageApi.success('加载完成！');
      }, 3000);
    };
    return <div className="flex flex-col gap-4">
        {contextHolder}
        <Button onClick={handleClick}>加载后成功</Button>
      </div>;
  }
}`,...(de=(le=k.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var ue,me,pe;B.parameters={...B.parameters,docs:{...(ue=B.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '模拟异步操作的结果反馈，根据成功或失败显示不同类型的提示。'
      }
    }
  },
  render: () => {
    const [messageApi, contextHolder] = useMessage();
    const simulateAsync = (shouldSucceed: boolean) => {
      const destroy = messageApi.loading('正在处理中...', 0);
      setTimeout(() => {
        destroy();
        if (shouldSucceed) {
          messageApi.success('操作成功完成！');
        } else {
          messageApi.error('操作失败，请重试！');
        }
      }, 1000);
    };
    return <div className="flex flex-col gap-4">
        {contextHolder}
        <Button onClick={() => simulateAsync(true)}>异步操作（成功）</Button>
        <Button onClick={() => simulateAsync(false)}>异步操作（失败）</Button>
      </div>;
  }
}`,...(pe=(me=B.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var ge,fe,xe;T.parameters={...T.parameters,docs:{...(ge=T.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '手动更新或销毁提示消息，适用于需要动态反馈进度的场景。'
      }
    }
  },
  render: () => {
    const [messageApi, contextHolder] = useMessage();
    const destroyRef = useRef<(() => void) | null>(null);
    const showAndUpdate = () => {
      destroyRef.current = messageApi.info('初始消息内容', 0);
      setTimeout(() => {
        destroyRef.current?.();
        destroyRef.current = messageApi.info('消息内容已更新', 0);
      }, 1500);
    };
    const destroyManual = () => {
      destroyRef.current?.();
      destroyRef.current = null;
    };
    return <div className="flex flex-col gap-4">
        {contextHolder}
        <Button onClick={showAndUpdate}>显示并更新消息</Button>
        <Button onClick={destroyManual}>手动销毁消息</Button>
      </div>;
  }
}`,...(xe=(fe=T.parameters)==null?void 0:fe.docs)==null?void 0:xe.source}}};const Je=["Success","Error","Warning","Info","Loading","Closable","WithCustomIcon","MessageApiDemo","CustomDuration","LoadingThenSuccess","PromiseInterface","UpdateAndDestroy"];export{j as Closable,A as CustomDuration,h as Error,b as Info,C as Loading,k as LoadingThenSuccess,w as MessageApiDemo,B as PromiseInterface,y as Success,T as UpdateAndDestroy,v as Warning,N as WithCustomIcon,Je as __namedExportsOrder,Ge as default};
