import{j as o}from"./jsx-runtime-CDt2p4po.js";import{r as t}from"./index-GiUgBvb1.js";import{a as v}from"./utils-BEhiKRD9.js";import{c as H}from"./index-C08JwjkN.js";const P=H("text-sm leading-relaxed text-foreground whitespace-pre-wrap break-words",{variants:{},defaultVariants:{}}),z=H("inline-block w-[2px] h-[1em] align-text-bottom bg-foreground ml-0.5 animate-[blink_1s_step-end_infinite]",{variants:{},defaultVariants:{}}),S=t.forwardRef(({text:e,speed:i=30,streaming:r=!1,onComplete:s,showCursor:u=!0,className:h,...n},c)=>{const[a,T]=t.useState(0),l=t.useRef(s);l.current=s;const y=t.useRef();t.useEffect(()=>{r||T(e.length)},[r,e.length]),t.useEffect(()=>{if(r)return a<e.length&&(y.current=setTimeout(()=>{T(m=>m+1)},i)),()=>{y.current&&clearTimeout(y.current)}},[r,a,e.length,i]),t.useEffect(()=>{var m;a>=e.length&&e.length>0&&r&&((m=l.current)==null||m.call(l))},[a,e.length,r]);const b=t.useRef(e.length);t.useEffect(()=>{e.length<b.current&&T(0),b.current=e.length},[e.length]);const M=r?e.slice(0,a):e,O=r&&a<e.length;return o.jsxs("div",{ref:c,className:v(P(),h),...n,children:[M,u&&(O||r)&&o.jsx("span",{className:v(z()),"aria-hidden":"true"})]})});S.displayName="AIStreamText";S.__docgenInfo={description:`AIStreamText 流式文本渲染

streaming=true 时逐字显示 text，streaming=false 时直接显示全部。光标用闪烁动画。`,methods:[],displayName:"AIStreamText",props:{text:{required:!0,tsType:{name:"string"},description:"要渲染的文本内容"},speed:{required:!1,tsType:{name:"number"},description:"打字速度毫秒/字符，默认 30",defaultValue:{value:"30",computed:!1}},streaming:{required:!1,tsType:{name:"boolean"},description:"是否正在流式输出",defaultValue:{value:"false",computed:!1}},onComplete:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"输出完成回调"},showCursor:{required:!1,tsType:{name:"boolean"},description:"是否显示光标，默认 true",defaultValue:{value:"true",computed:!1}}},composes:["HTMLAttributes","VariantProps"]};const U={title:"AI 对话/AIStreamText 流式文本",component:S,tags:["autodocs"],parameters:{layout:"padded"},argTypes:{speed:{control:"number",description:"打字速度毫秒/字符，默认 30"},streaming:{control:"boolean",description:"是否正在流式输出"},showCursor:{control:"boolean",description:"是否显示光标，默认 true"}}},d={args:{text:"这是一段静态文本，不会逐字输出。",streaming:!1}},p={args:{text:"这是一段流式输出的文本，会逐字显示，模拟 AI 生成效果。",streaming:!0,speed:50}},f={args:{text:"快速打字效果，每字符 10 毫秒。",streaming:!0,speed:10}},g={args:{text:"没有光标的流式文本。",streaming:!0,speed:30,showCursor:!1}},x={render:()=>{const e="你好！我是一个 AI 助手。我可以帮你回答问题、编写代码、分析数据等。请问有什么可以帮你的吗？",[i,r]=t.useState(""),[s,u]=t.useState(!0);t.useEffect(()=>{if(!s)return;let n=0;const c=setInterval(()=>{n++,r(e.slice(0,n)),n>=e.length&&(clearInterval(c),u(!1))},80);return()=>clearInterval(c)},[s]);const h=t.useCallback(()=>{r(""),u(!0)},[]);return o.jsxs("div",{className:"max-w-xl",children:[o.jsx(S,{text:i,streaming:s,speed:20}),!s&&o.jsx("button",{type:"button",onClick:h,className:"mt-4 rounded-md bg-primary px-3 py-1.5 text-sm text-primary-foreground",children:"重新播放"})]})}};var I,w,A;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    text: '这是一段静态文本，不会逐字输出。',
    streaming: false
  }
}`,...(A=(w=d.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var C,N,E;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    text: '这是一段流式输出的文本，会逐字显示，模拟 AI 生成效果。',
    streaming: true,
    speed: 50
  }
}`,...(E=(N=p.parameters)==null?void 0:N.docs)==null?void 0:E.source}}};var R,V,j;f.parameters={...f.parameters,docs:{...(R=f.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    text: '快速打字效果，每字符 10 毫秒。',
    streaming: true,
    speed: 10
  }
}`,...(j=(V=f.parameters)==null?void 0:V.docs)==null?void 0:j.source}}};var k,_,q;g.parameters={...g.parameters,docs:{...(k=g.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    text: '没有光标的流式文本。',
    streaming: true,
    speed: 30,
    showCursor: false
  }
}`,...(q=(_=g.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var L,F,D;x.parameters={...x.parameters,docs:{...(L=x.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => {
    const fullText = '你好！我是一个 AI 助手。我可以帮你回答问题、编写代码、分析数据等。请问有什么可以帮你的吗？';
    const [text, setText] = useState('');
    const [streaming, setStreaming] = useState(true);
    useEffect(() => {
      if (!streaming) return;
      let index = 0;
      const timer = setInterval(() => {
        index++;
        setText(fullText.slice(0, index));
        if (index >= fullText.length) {
          clearInterval(timer);
          setStreaming(false);
        }
      }, 80);
      return () => clearInterval(timer);
    }, [streaming]);
    const handleRestart = useCallback(() => {
      setText('');
      setStreaming(true);
    }, []);
    return <div className="max-w-xl">
        <AIStreamText text={text} streaming={streaming} speed={20} />
        {!streaming && <button type="button" onClick={handleRestart} className="mt-4 rounded-md bg-primary px-3 py-1.5 text-sm text-primary-foreground">
            重新播放
          </button>}
      </div>;
  }
}`,...(D=(F=x.parameters)==null?void 0:F.docs)==null?void 0:D.source}}};const W=["Static","Streaming","FastSpeed","NoCursor","SimulatedStream"];export{f as FastSpeed,g as NoCursor,x as SimulatedStream,d as Static,p as Streaming,W as __namedExportsOrder,U as default};
