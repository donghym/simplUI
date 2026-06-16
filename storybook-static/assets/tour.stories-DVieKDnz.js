import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as n}from"./index-GiUgBvb1.js";import{a as i}from"./utils-BEhiKRD9.js";import{c}from"./index-C08JwjkN.js";const ie=c("sui-tour__mask fixed inset-0 bg-black/50 z-[1070]"),ce=c("fixed z-[1071] pointer-events-none rounded"),le=c("bg-background rounded-lg p-4 min-w-[240px] max-w-[320px] shadow-[0_3px_6px_-4px_rgba(0,0,0,0.12),0_6px_16px_rgba(0,0,0,0.08)]"),ue=c("text-base font-medium mb-2 text-foreground"),de=c("text-sm text-muted-foreground mb-4"),pe=c("flex justify-between items-center"),me=c("text-xs text-muted-foreground/60"),fe=c("flex gap-2"),O=c("px-3 py-1 rounded cursor-pointer text-sm border transition-colors",{variants:{variant:{default:"border-border bg-background text-foreground hover:bg-muted",primary:"border-primary-500 bg-primary-500 text-primary-foreground hover:bg-primary-600"}},defaultVariants:{variant:"default"}}),ge=c("sui-tour__progress-track w-full h-1 bg-muted rounded-full overflow-hidden mb-3"),xe=c("h-full rounded-full bg-primary-500 transition-all duration-300");function be(t){return t?typeof t=="string"?document.querySelector(t):t():null}function he(t){if(!t)return!1;try{return localStorage.getItem(t)==="finished"}catch{return!1}}function ye(t){if(t)try{localStorage.setItem(t,"finished")}catch{}}const d=n.forwardRef(({steps:t,open:r=!1,current:y,defaultCurrent:v=0,onChange:l,onClose:p,onFinish:S,storageKey:j,showProgress:Z=!0,className:ee},te)=>{const m=y!==void 0,[re,C]=n.useState(v),[o,k]=n.useState(null),a=m?y:re,s=t[a],T=r&&!he(j);n.useEffect(()=>{if(!T||!(s!=null&&s.target)){k(null);return}const u=be(s.target);u&&k(u.getBoundingClientRect())},[T,a,s]);const se=n.useCallback(()=>{if(a<t.length-1){const u=a+1;m||C(u),l==null||l(u)}else ye(j),S==null||S(),p==null||p()},[a,t.length,m,l,S,p,j]),ne=n.useCallback(()=>{if(a>0){const u=a-1;m||C(u),l==null||l(u)}},[a,m,l]),oe=n.useMemo(()=>o?{position:"fixed",left:o.left+o.width/2,top:o.bottom+8,transform:"translateX(-50%)",zIndex:1080}:{position:"fixed",left:"50%",top:"50%",transform:"translate(-50%, -50%)",zIndex:1080},[o]),N=n.useMemo(()=>o?{position:"fixed",left:o.left-4,top:o.top-4,width:o.width+8,height:o.height+8,zIndex:1071}:null,[o]),ae=(a+1)/t.length*100;return T?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:i(ie()),onClick:p}),o&&N&&e.jsx("div",{className:i(ce(),"shadow-[0_0_0_9999px_rgba(0,0,0,0.5)]"),style:N}),e.jsxs("div",{ref:te,className:i(le(),ee),style:oe,children:[Z&&e.jsx("div",{className:i(ge()),children:e.jsx("div",{className:i(xe()),style:{width:`${ae}%`}})}),(s==null?void 0:s.title)&&e.jsx("div",{className:i(ue(),s.className),children:s.title}),(s==null?void 0:s.description)&&e.jsx("div",{className:i(de()),children:s.description}),e.jsxs("div",{className:i(pe()),children:[e.jsxs("span",{className:i(me()),children:[a+1," / ",t.length]}),e.jsxs("div",{className:i(fe()),children:[a>0&&e.jsx("button",{type:"button",className:i(O({variant:"default"})),onClick:ne,children:"上一步"}),e.jsx("button",{type:"button",className:i(O({variant:"primary"})),onClick:se,children:a===t.length-1?"完成":"下一步"})]})]})]})]}):null});d.displayName="Tour";d.__docgenInfo={description:`Tour 漫游式引导组件
用于引导用户了解产品功能的新手引导。`,methods:[],displayName:"Tour",props:{steps:{required:!0,tsType:{name:"Array",elements:[{name:"TourStep"}],raw:"TourStep[]"},description:"步骤配置数组"},open:{required:!1,tsType:{name:"boolean"},description:"是否打开导览",defaultValue:{value:"false",computed:!1}},current:{required:!1,tsType:{name:"number"},description:"当前步骤索引（受控模式）"},defaultCurrent:{required:!1,tsType:{name:"number"},description:"默认当前步骤索引，默认 0",defaultValue:{value:"0",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(current: number) => void",signature:{arguments:[{type:{name:"number"},name:"current"}],return:{name:"void"}}},description:"步骤变化回调"},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"关闭回调"},onFinish:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"全部步骤完成回调"},storageKey:{required:!1,tsType:{name:"string"},description:"localStorage 存储键。提供后，完成导览时记录状态，下次不再自动弹出"},showProgress:{required:!1,tsType:{name:"boolean"},description:"是否显示步骤进度条，默认 true",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"自定义类名"}}};const ve=t=>e.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",width:"100%"},children:e.jsx(t,{})}),ke={title:"反馈/Tour 漫游式引导",component:d,tags:["autodocs"],decorators:[ve],parameters:{layout:"padded",docs:{description:{component:"用于引导用户了解产品功能的新手引导组件，支持步骤进度条和 localStorage 记忆。"}}}},f={render:()=>{const[t,r]=n.useState(!1);return e.jsxs("div",{children:[e.jsx("button",{id:"tour-btn-1",onClick:()=>r(!0),className:"mr-4",children:"开始引导"}),e.jsx("button",{id:"tour-btn-2",children:"另一个按钮"}),e.jsx(d,{open:t,onClose:()=>r(!1),steps:[{target:"#tour-btn-1",title:"欢迎",description:"这是引导的第一步。"},{target:"#tour-btn-2",title:"下一步",description:"这是引导的第二步。"}]})]})}},g={render:()=>{const[t,r]=n.useState(!1);return e.jsxs("div",{children:[e.jsx("button",{onClick:()=>r(!0),children:"打开引导"}),e.jsx(d,{open:t,onClose:()=>r(!1),steps:[{title:"居中引导",description:"此引导步骤居中显示，无目标元素。"}]})]})}},x={render:()=>{const[t,r]=n.useState(!1),[y,v]=n.useState(0);return e.jsxs("div",{children:[e.jsx("button",{onClick:()=>{r(!0),v(0)},children:"重新开始"}),e.jsx(d,{open:t,current:y,onChange:v,onClose:()=>r(!1),steps:[{title:"步骤 1",description:"第一步"},{title:"步骤 2",description:"第二步"},{title:"步骤 3",description:"第三步"}]})]})}},b={render:()=>{const[t,r]=n.useState(!1);return e.jsxs("div",{children:[e.jsx("button",{onClick:()=>r(!0),children:"打开带记忆的引导"}),e.jsx("p",{className:"text-sm text-gray-500 mt-2",children:"完成后刷新页面，导览不会再次弹出。清除 localStorage 可重置。"}),e.jsx(d,{open:t,onClose:()=>r(!1),storageKey:"tour-story-storage-demo",steps:[{title:"带记忆的引导",description:"完成后会记录到 localStorage，下次不再弹出。"}]})]})}},h={render:()=>{const[t,r]=n.useState(!1);return e.jsxs("div",{children:[e.jsx("button",{onClick:()=>r(!0),children:"打开无进度条引导"}),e.jsx(d,{open:t,onClose:()=>r(!1),showProgress:!1,steps:[{title:"无进度条",description:"此导览不显示顶部进度条。"},{title:"第二步",description:"仍然可以正常导航。"}]})]})}};var w,_,V,q,I;f.parameters={...f.parameters,docs:{...(w=f.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <div>
        <button id="tour-btn-1" onClick={() => setOpen(true)} className="mr-4">
          开始引导
        </button>
        <button id="tour-btn-2">另一个按钮</button>
        <Tour open={open} onClose={() => setOpen(false)} steps={[{
        target: '#tour-btn-1',
        title: '欢迎',
        description: '这是引导的第一步。'
      }, {
        target: '#tour-btn-2',
        title: '下一步',
        description: '这是引导的第二步。'
      }]} />
      </div>;
  }
}`,...(V=(_=f.parameters)==null?void 0:_.docs)==null?void 0:V.source},description:{story:"基础用法",...(I=(q=f.parameters)==null?void 0:q.docs)==null?void 0:I.description}}};var P,z,E,R,M;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <div>
        <button onClick={() => setOpen(true)}>打开引导</button>
        <Tour open={open} onClose={() => setOpen(false)} steps={[{
        title: '居中引导',
        description: '此引导步骤居中显示，无目标元素。'
      }]} />
      </div>;
  }
}`,...(E=(z=g.parameters)==null?void 0:z.docs)==null?void 0:E.source},description:{story:"居中引导（无目标元素）",...(M=(R=g.parameters)==null?void 0:R.docs)==null?void 0:M.description}}};var B,W,A,D,G;x.parameters={...x.parameters,docs:{...(B=x.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    const [current, setCurrent] = useState(0);
    return <div>
        <button onClick={() => {
        setOpen(true);
        setCurrent(0);
      }}>重新开始</button>
        <Tour open={open} current={current} onChange={setCurrent} onClose={() => setOpen(false)} steps={[{
        title: '步骤 1',
        description: '第一步'
      }, {
        title: '步骤 2',
        description: '第二步'
      }, {
        title: '步骤 3',
        description: '第三步'
      }]} />
      </div>;
  }
}`,...(A=(W=x.parameters)==null?void 0:W.docs)==null?void 0:A.source},description:{story:"受控模式多步骤",...(G=(D=x.parameters)==null?void 0:D.docs)==null?void 0:G.description}}};var K,X,$,F,H;b.parameters={...b.parameters,docs:{...(K=b.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <div>
        <button onClick={() => setOpen(true)}>打开带记忆的引导</button>
        <p className="text-sm text-gray-500 mt-2">
          完成后刷新页面，导览不会再次弹出。清除 localStorage 可重置。
        </p>
        <Tour open={open} onClose={() => setOpen(false)} storageKey="tour-story-storage-demo" steps={[{
        title: '带记忆的引导',
        description: '完成后会记录到 localStorage，下次不再弹出。'
      }]} />
      </div>;
  }
}`,...($=(X=b.parameters)==null?void 0:X.docs)==null?void 0:$.source},description:{story:"localStorage 记忆（完成后不再弹出）",...(H=(F=b.parameters)==null?void 0:F.docs)==null?void 0:H.description}}};var J,L,Q,U,Y;h.parameters={...h.parameters,docs:{...(J=h.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <div>
        <button onClick={() => setOpen(true)}>打开无进度条引导</button>
        <Tour open={open} onClose={() => setOpen(false)} showProgress={false} steps={[{
        title: '无进度条',
        description: '此导览不显示顶部进度条。'
      }, {
        title: '第二步',
        description: '仍然可以正常导航。'
      }]} />
      </div>;
  }
}`,...(Q=(L=h.parameters)==null?void 0:L.docs)==null?void 0:Q.source},description:{story:"隐藏进度条",...(Y=(U=h.parameters)==null?void 0:U.docs)==null?void 0:Y.description}}};const Ne=["Basic","Centered","MultipleSteps","WithStorageKey","NoProgress"];export{f as Basic,g as Centered,x as MultipleSteps,h as NoProgress,b as WithStorageKey,Ne as __namedExportsOrder,ke as default};
