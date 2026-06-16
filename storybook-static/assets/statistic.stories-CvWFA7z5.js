import{j as t}from"./jsx-runtime-CDt2p4po.js";import{r as i}from"./index-GiUgBvb1.js";import{a as ce}from"./utils-BEhiKRD9.js";import{c as b}from"./index-C08JwjkN.js";import{A as ue}from"./arrow-down-C2u3D9px.js";import{A as le}from"./arrow-up-Cfl0ziE_.js";import{D as me}from"./dollar-sign-T_TAX4Kg.js";import"./createLucideIcon-CZe00VV7.js";const de=b("flex flex-col gap-1",{variants:{},defaultVariants:{}}),pe=b("text-sm text-muted-foreground",{variants:{},defaultVariants:{}}),fe=b("text-3xl font-semibold text-foreground",{variants:{},defaultVariants:{}}),ge=(c,s,u=",",r=".")=>{const n=s!==void 0?c.toFixed(s):String(c),[a,e]=n.split("."),o=(a??"").replace(/\B(?=(\d{3})+(?!\d))/g,u);return e!==void 0?`${o}${r}${e}`:o},p=i.forwardRef((c,s)=>{const{className:u,title:r,prefix:n,suffix:a,value:e,precision:o,groupSeparator:l=",",decimalSeparator:d=".",formatter:m,valueStyle:A,...oe}=c,ie=i.useMemo(()=>e==null?"-":m?m(e):typeof e=="string"?e:ge(e,o,l,d),[e,o,l,d,m]);return t.jsxs("div",{ref:s,role:"status","aria-label":typeof r=="string"?r:"统计数据",className:ce("sui-statistic",de(),u),...oe,children:[r&&t.jsx("div",{className:pe(),children:r}),t.jsxs("div",{className:fe(),style:A,children:[n&&t.jsx("span",{className:"mr-1",children:n}),ie,a&&t.jsx("span",{className:"ml-1",children:a})]})]})});p.displayName="Statistic";p.__docgenInfo={description:"统计数值组件",methods:[],displayName:"Statistic",props:{title:{required:!1,tsType:{name:"ReactNode"},description:"数值标题，显示在数值上方"},prefix:{required:!1,tsType:{name:"ReactNode"},description:"数值前缀，显示在数值左侧"},suffix:{required:!1,tsType:{name:"ReactNode"},description:"数值后缀，显示在数值右侧"},value:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"数值内容，可以是数字或字符串"},precision:{required:!1,tsType:{name:"number"},description:"数值精度，小数点后位数。仅当 value 为数字时生效"},groupSeparator:{required:!1,tsType:{name:"string"},description:"千分位分隔符，默认 ','"},decimalSeparator:{required:!1,tsType:{name:"string"},description:"小数点分隔符，默认 '.'"},formatter:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number | string) => ReactNode",signature:{arguments:[{type:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},name:"value"}],return:{name:"ReactNode"}}},description:"自定义格式化函数，优先级高于 precision/groupSeparator/decimalSeparator"},valueStyle:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"数值样式"},className:{required:!1,tsType:{name:"string"},description:"自定义 className，通过 cn() + twMerge 合并"}},composes:["Omit","VariantProps"]};const De={title:"数据展示/Statistic 统计数值",component:p,tags:["autodocs"],argTypes:{title:{control:"text",description:"数值标题，显示在数值上方"},value:{control:"number",description:"数值内容，可以是数字或字符串"},precision:{control:"number",description:"数值精度，小数点后位数，仅当 value 为数字时生效"},groupSeparator:{control:"text",description:'千分位分隔符，默认 ","'},decimalSeparator:{control:"text",description:'小数点分隔符，默认 "."'}},parameters:{layout:"padded"}},f={args:{title:"活跃用户",value:12345}},g={args:{title:"收入",value:5e4,prefix:t.jsx(me,{className:"h-4 w-4"})}},x={args:{title:"增长率",value:25,suffix:"%"}},v={args:{title:"增长",value:15,prefix:t.jsx(le,{className:"h-4 w-4 text-success-500"}),suffix:"%"}},S={args:{title:"下降",value:8,prefix:t.jsx(ue,{className:"h-4 w-4 text-danger-500"}),suffix:"%"}},w={args:{title:"平均分数",value:4.567,precision:2}},h={args:{title:"总销售额",value:1e6}},y={args:{title:"自定义样式",value:999,valueStyle:{color:"var(--color-primary)",fontSize:"32px"}}},R={args:{title:"加载中...",value:"-"}},N={render:()=>{const c=Date.now()+6e5,[s,u]=i.useState(c-Date.now()),r=i.useRef();i.useEffect(()=>(r.current=setInterval(()=>{const a=c-Date.now();a<=0?(u(0),clearInterval(r.current)):u(a)},1e3),()=>clearInterval(r.current)),[]);const n=a=>{const e=Math.max(0,Math.floor(a/1e3)),o=Math.floor(e/3600),l=Math.floor(e%3600/60),d=e%60,m=A=>String(A).padStart(2,"0");return`${m(o)}:${m(l)}:${m(d)}`};return t.jsxs("div",{className:"space-y-4",children:[t.jsx(p,{title:"倒计时",value:n(s),valueStyle:{color:s<=0?"var(--color-danger)":"var(--color-primary)",fontVariantNumeric:"tabular-nums"}}),t.jsx("p",{className:"text-sm text-muted-foreground",children:"10 分钟倒计时，每秒更新"})]})}},D={render:()=>{const[s,u]=i.useState(0),r=i.useRef(),n=i.useRef(),a=1500;return i.useEffect(()=>{n.current=Date.now();const e=()=>{const o=Date.now()-n.current,l=Math.min(o/a,1),d=1-Math.pow(1-l,3);u(Math.round(d*12345)),l<1&&(r.current=requestAnimationFrame(e))};return r.current=requestAnimationFrame(e),()=>{r.current&&cancelAnimationFrame(r.current)}},[]),t.jsxs("div",{className:"space-y-4",children:[t.jsx(p,{title:"活跃用户",value:s}),t.jsxs("p",{className:"text-sm text-muted-foreground",children:["数值从 0 动画到 ",12345 .toLocaleString(),"，使用 requestAnimationFrame 实现平滑计数"]})]})}};var V,T,j;f.parameters={...f.parameters,docs:{...(V=f.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    title: '活跃用户',
    value: 12345
  }
}`,...(j=(T=f.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};var q,M,C;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    title: '收入',
    value: 50000,
    prefix: <DollarSign className="h-4 w-4" />
  }
}`,...(C=(M=g.parameters)==null?void 0:M.docs)==null?void 0:C.source}}};var F,I,$;x.parameters={...x.parameters,docs:{...(F=x.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    title: '增长率',
    value: 25,
    suffix: '%'
  }
}`,...($=(I=x.parameters)==null?void 0:I.docs)==null?void 0:$.source}}};var W,E,P;v.parameters={...v.parameters,docs:{...(W=v.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    title: '增长',
    value: 15,
    prefix: <ArrowUp className="h-4 w-4 text-success-500" />,
    suffix: '%'
  }
}`,...(P=(E=v.parameters)==null?void 0:E.docs)==null?void 0:P.source}}};var L,U,_;S.parameters={...S.parameters,docs:{...(L=S.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    title: '下降',
    value: 8,
    prefix: <ArrowDown className="h-4 w-4 text-danger-500" />,
    suffix: '%'
  }
}`,...(_=(U=S.parameters)==null?void 0:U.docs)==null?void 0:_.source}}};var z,O,B;w.parameters={...w.parameters,docs:{...(z=w.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    title: '平均分数',
    value: 4.567,
    precision: 2
  }
}`,...(B=(O=w.parameters)==null?void 0:O.docs)==null?void 0:B.source}}};var k,G,H;h.parameters={...h.parameters,docs:{...(k=h.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    title: '总销售额',
    value: 1000000
  }
}`,...(H=(G=h.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var J,K,Q;y.parameters={...y.parameters,docs:{...(J=y.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    title: '自定义样式',
    value: 999,
    valueStyle: {
      color: 'var(--color-primary)',
      fontSize: '32px'
    }
  }
}`,...(Q=(K=y.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Y,Z;R.parameters={...R.parameters,docs:{...(X=R.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    title: '加载中...',
    value: '-'
  }
}`,...(Z=(Y=R.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,re,te;N.parameters={...N.parameters,docs:{...(ee=N.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => {
    const deadline = Date.now() + 10 * 60 * 1000; // 10 minutes from now
    const [remaining, setRemaining] = useState(deadline - Date.now());
    const timerRef = useRef<ReturnType<typeof setInterval>>();
    useEffect(() => {
      timerRef.current = setInterval(() => {
        const left = deadline - Date.now();
        if (left <= 0) {
          setRemaining(0);
          clearInterval(timerRef.current);
        } else {
          setRemaining(left);
        }
      }, 1000);
      return () => clearInterval(timerRef.current);
    }, []);
    const formatCountdown = (ms: number): string => {
      const totalSeconds = Math.max(0, Math.floor(ms / 1000));
      const hours = Math.floor(totalSeconds / 3600);
      const minutes = Math.floor(totalSeconds % 3600 / 60);
      const seconds = totalSeconds % 60;
      const pad = (n: number) => String(n).padStart(2, '0');
      return \`\${pad(hours)}:\${pad(minutes)}:\${pad(seconds)}\`;
    };
    return <div className="space-y-4">
        <Statistic title="倒计时" value={formatCountdown(remaining)} valueStyle={{
        color: remaining <= 0 ? 'var(--color-danger)' : 'var(--color-primary)',
        fontVariantNumeric: 'tabular-nums'
      }} />
        <p className="text-sm text-muted-foreground">10 分钟倒计时，每秒更新</p>
      </div>;
  }
}`,...(te=(re=N.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};var ae,se,ne;D.parameters={...D.parameters,docs:{...(ae=D.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => {
    const target = 12345;
    const [current, setCurrent] = useState(0);
    const rafRef = useRef<number>();
    const startTimeRef = useRef<number>();
    const duration = 1500;
    useEffect(() => {
      startTimeRef.current = Date.now();
      const animate = () => {
        const elapsed = Date.now() - startTimeRef.current!;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCurrent(Math.round(eased * target));
        if (progress < 1) {
          rafRef.current = requestAnimationFrame(animate);
        }
      };
      rafRef.current = requestAnimationFrame(animate);
      return () => {
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
      };
    }, []);
    return <div className="space-y-4">
        <Statistic title="活跃用户" value={current} />
        <p className="text-sm text-muted-foreground">数值从 0 动画到 {target.toLocaleString()}，使用 requestAnimationFrame 实现平滑计数</p>
      </div>;
  }
}`,...(ne=(se=D.parameters)==null?void 0:se.docs)==null?void 0:ne.source}}};const Ae=["Default","WithPrefix","WithSuffix","WithArrowUp","WithArrowDown","DecimalValue","LargeNumber","CustomValueStyle","Loading","Countdown","AnimatedValue"];export{D as AnimatedValue,N as Countdown,y as CustomValueStyle,w as DecimalValue,f as Default,h as LargeNumber,R as Loading,S as WithArrowDown,v as WithArrowUp,g as WithPrefix,x as WithSuffix,Ae as __namedExportsOrder,De as default};
