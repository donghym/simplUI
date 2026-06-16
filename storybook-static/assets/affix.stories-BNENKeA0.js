import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as n}from"./index-GiUgBvb1.js";import{a as ae}from"./utils-BEhiKRD9.js";import{B as i}from"./index-WhxK0hy4.js";import"./index-C08JwjkN.js";import"./loader-circle-CulI208u.js";import"./createLucideIcon-CZe00VV7.js";const o=n.forwardRef(({offsetTop:r,offsetBottom:t,onChange:a,children:S,style:B,className:d,target:l},x)=>{const[C,ee]=n.useState(!1),[re,R]=n.useState({}),T=n.useRef(null),u=n.useRef(null),v=n.useCallback(()=>l&&l()||window,[l]),p=n.useCallback(()=>{const s=v();if(!T.current||!u.current)return;const c=T.current.getBoundingClientRect();let f=!1,m;if(s===window?m={top:0,left:0,bottom:window.innerHeight,right:window.innerWidth,width:window.innerWidth,height:window.innerHeight,x:0,y:0,toJSON:()=>({})}:s instanceof HTMLElement?m=s.getBoundingClientRect():m={top:0,left:0,bottom:0,right:0,width:0,height:0,x:0,y:0,toJSON:()=>({})},r!==void 0?f=c.top-m.top<=r:t!==void 0&&(f=m.bottom-c.bottom<=t),f!==C&&(ee(f),a==null||a(f)),f){const ne=c.left-m.left,L=c.width;R({width:`${L}px`,height:`${c.height}px`}),u.current&&(u.current.style.left=`${ne}px`,u.current.style.width=`${L}px`)}else R({})},[r,t,C,a,v]);n.useEffect(()=>{const s=v();if(s)return s.addEventListener("scroll",p,{passive:!0}),window.addEventListener("resize",p),p(),()=>{s.removeEventListener("scroll",p),window.removeEventListener("resize",p)}},[p,v]);const te=C?{position:"fixed",top:r!==void 0?r:void 0,bottom:t!==void 0?t:void 0,zIndex:1e3}:{};return e.jsx("div",{ref:s=>{if(T.current=s,x)if(typeof x=="function")x(s);else{const c=x;c.current=s}},className:ae("sui-affix",d),style:{...B,...re},children:e.jsx("div",{ref:u,style:te,children:S})})});o.displayName="Affix";o.__docgenInfo={description:`Affix 固钉组件

将页面元素钉在可视范围。

### 何时使用
- 当内容区域比较长，需要滚动页面时，用于将区域标题固定在可视范围
- 常用于侧边菜单或返回顶部按钮

### 示例
\`\`\`tsx
<Affix offsetTop={64}>
  <Button>Fixed Button</Button>
</Affix>
\`\`\``,methods:[],displayName:"Affix",props:{offsetTop:{required:!1,tsType:{name:"number"},description:"距离窗口顶部达到指定偏移量后触发"},offsetBottom:{required:!1,tsType:{name:"number"},description:"距离窗口底部达到指定偏移量后触发"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(affixed: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"affixed"}],return:{name:"void"}}},description:"固定状态改变时触发的回调函数"},children:{required:!0,tsType:{name:"ReactNode"},description:"子元素"},style:{required:!1,tsType:{name:"CSSProperties"},description:"自定义样式"},className:{required:!1,tsType:{name:"string"},description:"自定义类名"},target:{required:!1,tsType:{name:"signature",type:"function",raw:"() => Window | HTMLElement | null",signature:{arguments:[],return:{name:"union",raw:"Window | HTMLElement | null",elements:[{name:"Window"},{name:"HTMLElement"},{name:"null"}]}}},description:"指定滚动容器"}}};const pe={title:"导航/Affix 固钉",component:o,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"将页面元素钉在可视范围。当内容区域比较长，需要滚动页面时，可将区域标题固定在可视范围，常用于侧边菜单或返回顶部按钮。"}}},argTypes:{offsetTop:{control:"number",description:"距离窗口顶部达到指定偏移量后触发"},offsetBottom:{control:"number",description:"距离窗口底部达到指定偏移量后触发"},onChange:{action:"changed",description:"固定状态改变时触发"}}},h=()=>e.jsx("div",{className:"mt-6",children:Array.from({length:40}).map((r,t)=>e.jsxs("div",{className:"py-2 border-b border-neutral-100 text-gray-400",children:["Line ",t+1]},t))}),b={render:()=>e.jsxs("div",{className:"h-[1000px] px-6",children:[e.jsx("div",{className:"mb-4 px-4 py-3 bg-neutral-50 rounded-md border border-neutral-200 text-gray-600 text-[13px]",children:"Scroll down to see the button fixed at top 10px."}),e.jsx(o,{offsetTop:10,children:e.jsx(i,{variant:"primary",children:"Affix top"})}),e.jsx(h,{})]})},y={render:()=>e.jsxs("div",{className:"h-[1000px] px-6",children:[e.jsx("div",{className:"mb-4 px-4 py-3 bg-neutral-50 rounded-md border border-neutral-200 text-gray-600 text-[13px]",children:"Scroll down to see the button fixed at bottom 20px."}),e.jsx(h,{}),e.jsx(o,{offsetBottom:20,children:e.jsx(i,{variant:"primary",children:"Affix bottom"})})]})},N={render:()=>{const[r,t]=n.useState(!1);return e.jsxs("div",{className:"h-[1000px] px-6",children:[e.jsxs("div",{className:"mb-4 px-4 py-3 bg-neutral-50 rounded-md border border-neutral-200 text-gray-600 text-[13px]",children:[e.jsx("span",{children:"Current state: "}),e.jsx("span",{style:{color:r?"var(--color-danger, #ef4444)":"var(--color-success, #22c55e)",fontWeight:600},children:r?"Affixed":"Not affixed"}),e.jsx("span",{className:"ml-2 text-xs text-gray-400",children:"(scroll to trigger onChange)"})]}),e.jsx(o,{offsetTop:80,onChange:t,children:e.jsx(i,{variant:r?"primary":"link",children:r?"Affixed - release to scroll up":"Not affixed - scroll down"})}),e.jsx(h,{})]})}},j={render:()=>{const r=n.useRef(null);return e.jsxs("div",{className:"px-6",children:[e.jsx("div",{className:"mb-4 px-4 py-3 bg-neutral-50 rounded-md border border-neutral-200 text-gray-600 text-[13px]",children:"Fixed at the top of container."}),e.jsx("div",{ref:r,className:"h-[300px] overflow-auto border border-neutral-300 rounded-md px-4 relative",children:e.jsxs("div",{className:"h-[600px]",children:[e.jsx(o,{target:()=>r.current,offsetTop:20,children:e.jsx(i,{variant:"primary",children:"Fixed at top 20px of container"})}),e.jsx("div",{className:"mt-15",children:Array.from({length:20}).map((t,a)=>e.jsxs("div",{className:"py-2 border-b border-neutral-100 text-gray-400",children:["Line ",a+1]},a))})]})})]})}},w={render:()=>e.jsxs("div",{className:"h-[1200px] px-6",children:[e.jsx("div",{className:"mb-4 px-4 py-3 bg-neutral-50 rounded-md border border-neutral-200 text-gray-600 text-[13px]",children:"Both top and bottom affixes."}),e.jsx(o,{offsetTop:10,children:e.jsx(i,{variant:"primary",className:"mb-2",children:"Affix top"})}),e.jsx(h,{}),e.jsx(o,{offsetBottom:20,children:e.jsx(i,{variant:"primary",children:"Affix bottom"})})]})},A={render:()=>{const[r,t]=n.useState([]),[a,S]=n.useState(0),B=d=>{const l=new Date().toLocaleTimeString();t(x=>[`[${l}] ${d?"Affixed":"Released"}`,...x].slice(0,5))};return e.jsxs("div",{className:"h-[1000px] px-6",children:[e.jsx(o,{offsetTop:60,onChange:B,children:e.jsxs(i,{variant:"primary",onClick:()=>S(d=>d+1),children:["Clicked ",a," times"]})}),e.jsxs("div",{className:"mt-6",children:[e.jsxs("div",{className:"mb-3 px-3 py-2 bg-success/10 border border-success rounded-md text-[13px] text-success",children:[e.jsx("strong",{children:"Callback log:"}),r.length===0?e.jsx("span",{className:"ml-2 text-gray-400",children:"No events yet (scroll to trigger)"}):e.jsx("ul",{className:"mt-1 pl-4",children:r.map((d,l)=>e.jsx("li",{children:d},l))})]}),e.jsx(h,{})]})]})}},g={render:()=>{const r=n.useRef(null);return e.jsxs("div",{className:"px-6",children:[e.jsx("div",{className:"mb-4 px-4 py-3 bg-neutral-50 rounded-md border border-neutral-200 text-gray-600 text-[13px]",children:"Affix pinned inside a scrollable container (not the whole page)."}),e.jsx("div",{ref:r,className:"h-[300px] overflow-y-auto border border-neutral-300 rounded-md px-4 relative",children:e.jsxs("div",{className:"h-[800px]",children:[e.jsx(o,{target:()=>r.current,offsetTop:10,children:e.jsx(i,{variant:"primary",children:"Fixed in scroll container"})}),e.jsx("div",{className:"mt-4",children:Array.from({length:30}).map((t,a)=>e.jsxs("div",{className:"py-2 border-b border-neutral-100 text-gray-400",children:["Line ",a+1]},a))})]})})]})}};var k,E,_;b.parameters={...b.parameters,docs:{...(k=b.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <div className="h-[1000px] px-6">
      <div className="mb-4 px-4 py-3 bg-neutral-50 rounded-md border border-neutral-200 text-gray-600 text-[13px]">
        Scroll down to see the button fixed at top 10px.
      </div>
      <Affix offsetTop={10}>
        <Button variant="primary">Affix top</Button>
      </Affix>
      <ScrollPadding />
    </div>
}`,...(_=(E=b.parameters)==null?void 0:E.docs)==null?void 0:_.source}}};var H,P,W;y.parameters={...y.parameters,docs:{...(H=y.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <div className="h-[1000px] px-6">
      <div className="mb-4 px-4 py-3 bg-neutral-50 rounded-md border border-neutral-200 text-gray-600 text-[13px]">
        Scroll down to see the button fixed at bottom 20px.
      </div>
      <ScrollPadding />
      <Affix offsetBottom={20}>
        <Button variant="primary">Affix bottom</Button>
      </Affix>
    </div>
}`,...(W=(P=y.parameters)==null?void 0:P.docs)==null?void 0:W.source}}};var $,q,F;N.parameters={...N.parameters,docs:{...($=N.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => {
    const [affixed, setAffixed] = useState(false);
    return <div className="h-[1000px] px-6">
        <div className="mb-4 px-4 py-3 bg-neutral-50 rounded-md border border-neutral-200 text-gray-600 text-[13px]">
          <span>Current state: </span>
          <span style={{
          color: affixed ? 'var(--color-danger, #ef4444)' : 'var(--color-success, #22c55e)',
          fontWeight: 600
        }}>
            {affixed ? 'Affixed' : 'Not affixed'}
          </span>
          <span className="ml-2 text-xs text-gray-400">
            (scroll to trigger onChange)
          </span>
        </div>
        <Affix offsetTop={80} onChange={setAffixed}>
          <Button variant={affixed ? 'primary' : 'link'}>
            {affixed ? 'Affixed - release to scroll up' : 'Not affixed - scroll down'}
          </Button>
        </Affix>
        <ScrollPadding />
      </div>;
  }
}`,...(F=(q=N.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};var M,O,D;j.parameters={...j.parameters,docs:{...(M=j.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => {
    const containerRef = useRef<HTMLDivElement>(null);
    return <div className="px-6">
        <div className="mb-4 px-4 py-3 bg-neutral-50 rounded-md border border-neutral-200 text-gray-600 text-[13px]">
          Fixed at the top of container.
        </div>
        <div ref={containerRef} className="h-[300px] overflow-auto border border-neutral-300 rounded-md px-4 relative">
          <div className="h-[600px]">
            <Affix target={() => containerRef.current} offsetTop={20}>
              <Button variant="primary">Fixed at top 20px of container</Button>
            </Affix>
            <div className="mt-15">
              {Array.from({
              length: 20
            }).map((_, i) => <div key={i} className="py-2 border-b border-neutral-100 text-gray-400">
                  Line {i + 1}
                </div>)}
            </div>
          </div>
        </div>
      </div>;
  }
}`,...(D=(O=j.parameters)==null?void 0:O.docs)==null?void 0:D.source}}};var z,I,J;w.parameters={...w.parameters,docs:{...(z=w.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div className="h-[1200px] px-6">
      <div className="mb-4 px-4 py-3 bg-neutral-50 rounded-md border border-neutral-200 text-gray-600 text-[13px]">
        Both top and bottom affixes.
      </div>
      <Affix offsetTop={10}>
        <Button variant="primary" className="mb-2">Affix top</Button>
      </Affix>
      <ScrollPadding />
      <Affix offsetBottom={20}>
        <Button variant="primary">Affix bottom</Button>
      </Affix>
    </div>
}`,...(J=(I=w.parameters)==null?void 0:I.docs)==null?void 0:J.source}}};var G,K,Q;A.parameters={...A.parameters,docs:{...(G=A.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => {
    const [log, setLog] = useState<string[]>([]);
    const [count, setCount] = useState(0);
    const handleChange = (affixed: boolean) => {
      const now = new Date().toLocaleTimeString();
      setLog(prev => [\`[\${now}] \${affixed ? 'Affixed' : 'Released'}\`, ...prev].slice(0, 5));
    };
    return <div className="h-[1000px] px-6">
        <Affix offsetTop={60} onChange={handleChange}>
          <Button variant="primary" onClick={() => setCount(c => c + 1)}>
            Clicked {count} times
          </Button>
        </Affix>
        <div className="mt-6">
          <div className="mb-3 px-3 py-2 bg-success/10 border border-success rounded-md text-[13px] text-success">
            <strong>Callback log:</strong>
            {log.length === 0 ? <span className="ml-2 text-gray-400">No events yet (scroll to trigger)</span> : <ul className="mt-1 pl-4">
                {log.map((entry, i) => <li key={i}>{entry}</li>)}
              </ul>}
          </div>
          <ScrollPadding />
        </div>
      </div>;
  }
}`,...(Q=(K=A.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,V,X,Y,Z;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => {
    const containerRef = useRef<HTMLDivElement>(null);
    return <div className="px-6">
        <div className="mb-4 px-4 py-3 bg-neutral-50 rounded-md border border-neutral-200 text-gray-600 text-[13px]">
          Affix pinned inside a scrollable container (not the whole page).
        </div>
        <div ref={containerRef} className="h-[300px] overflow-y-auto border border-neutral-300 rounded-md px-4 relative">
          <div className="h-[800px]">
            <Affix target={() => containerRef.current} offsetTop={10}>
              <Button variant="primary">Fixed in scroll container</Button>
            </Affix>
            <div className="mt-4">
              {Array.from({
              length: 30
            }).map((_, i) => <div key={i} className="py-2 border-b border-neutral-100 text-gray-400">
                  Line {i + 1}
                </div>)}
            </div>
          </div>
        </div>
      </div>;
  }
}`,...(X=(V=g.parameters)==null?void 0:V.docs)==null?void 0:X.source},description:{story:"滚动容器内的固钉",...(Z=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:Z.description}}};const fe=["Basic","OffsetBottom","Callback","CustomContainer","BothTopAndBottom","CallbackLog","ScrollContainer"];export{b as Basic,w as BothTopAndBottom,N as Callback,A as CallbackLog,j as CustomContainer,y as OffsetBottom,g as ScrollContainer,fe as __namedExportsOrder,pe as default};
