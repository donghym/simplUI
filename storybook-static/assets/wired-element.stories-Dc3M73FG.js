import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as m}from"./index-GiUgBvb1.js";import{a as y}from"./utils-BEhiKRD9.js";import{c as ye}from"./index-C08JwjkN.js";const I=ye("relative inline-block select-none",{variants:{elementType:{button:"px-5 py-2.5 text-sm font-medium text-foreground cursor-pointer transition-transform duration-100 active:scale-[0.98]",card:"p-5 text-foreground",input:"w-full text-sm text-foreground focus:outline-none"},sketchy:{true:"",false:""}},defaultVariants:{elementType:"card",sketchy:!1}});function n(i,c){return Math.random()*(c-i)+i}function ve(i,c,d=2,u=1){const r=i,a=c,t=d,s=u,p=n(-t,t),h=`M ${n(-t,t)} ${p} Q ${r*.25+n(-s,s)} ${p+n(-t,t)} ${r*.5+n(-s,s)} ${p+n(-t,t)} T ${r+n(-t,t)} ${n(-t,t)}`,v=r+n(-t,t),f=`Q ${v+n(-t,t)} ${a*.25+n(-s,s)} ${v+n(-t,t)} ${a*.5+n(-s,s)} T ${r+n(-t,t)} ${a+n(-t,t)}`,b=a+n(-t,t),g=`Q ${r*.75+n(-s,s)} ${b+n(-t,t)} ${r*.5+n(-s,s)} ${b+n(-t,t)} T ${n(-t,t)} ${a+n(-t,t)}`,l=n(-t,t),x=`Q ${l+n(-t,t)} ${a*.75+n(-s,s)} ${l+n(-t,t)} ${a*.5+n(-s,s)} T ${n(-t,t)} ${n(-t,t)}`;return`${h} ${f} ${g} ${x}`}function be(i,c,d=8){let u="";const r=Math.min(i,c)/d;for(let a=r;a<c-r;a+=r*1.5){const t=r+n(-r*.3,r*.3),s=i-r+n(-r*.3,r*.3),p=a+n(-r*.5,r*.5);u+=`M ${t} ${a} Q ${(t+s)/2+n(-r,r)} ${p} ${s} ${a+n(-2,2)} `}return u}function V({width:i,height:c,fill:d,stroke:u,strokeWidth:r,roughness:a,sketchy:t,children:s,className:p}){const[h,v]=m.useState(""),[f,b]=m.useState(""),g=m.useRef(null),[l,x]=m.useState({width:0,height:0}),N=m.useCallback(()=>{l.width>0&&l.height>0&&(v(ve(l.width,l.height,a)),d&&b(be(l.width,l.height)))},[l.width,l.height,a,d]);m.useEffect(()=>{if(g.current){const T=g.current.getBoundingClientRect();x({width:T.width,height:T.height})}},[i,c]),m.useEffect(()=>{N()},[N]);const j=t?"6 4":void 0;return e.jsxs("div",{ref:g,className:y("relative",p),children:[e.jsxs("svg",{className:"absolute inset-0 w-full h-full pointer-events-none",style:{overflow:"visible"},"aria-hidden":"true",children:[d&&f&&e.jsx("path",{d:f,fill:"none",stroke:d,strokeWidth:r*2,strokeLinecap:"round",opacity:.15}),e.jsx("path",{d:h,fill:"none",stroke:u,strokeWidth:r,strokeLinecap:"round",strokeLinejoin:"round",strokeDasharray:j,opacity:.6}),e.jsx("path",{d:h,fill:"none",stroke:u,strokeWidth:r*.6,strokeLinecap:"round",strokeLinejoin:"round",strokeDasharray:j,opacity:.8,style:{transform:"translate(0.5px, 0.5px)"}})]}),e.jsx("div",{className:"relative z-10",children:s})]})}V.__docgenInfo={description:"手绘风 SVG 背景装饰组件",methods:[],displayName:"WiredBackground",props:{width:{required:!0,tsType:{name:"number"},description:"容器宽度"},height:{required:!0,tsType:{name:"number"},description:"容器高度"},fill:{required:!1,tsType:{name:"string"},description:"填充颜色"},stroke:{required:!0,tsType:{name:"string"},description:"线条颜色"},strokeWidth:{required:!0,tsType:{name:"number"},description:"线条粗细"},roughness:{required:!0,tsType:{name:"number"},description:"粗糙度"},sketchy:{required:!1,tsType:{name:"union",raw:"boolean | null",elements:[{name:"boolean"},{name:"null"}]},description:"是否草图风格"},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"子元素"},className:{required:!1,tsType:{name:"string"},description:"自定义类名"}}};const o=m.forwardRef((i,c)=>{const{className:d,elementType:u,children:r,onClick:a,value:t,onChange:s,placeholder:p,sketchy:h=!1,fill:v,stroke:f="#1a1a1a",strokeWidth:b=1.5,roughness:g=2,...l}=i,x=m.useRef(null),[N,j]=m.useState({width:0,height:0});m.useEffect(()=>{const k=x.current;if(!k)return;const _=new ResizeObserver(he=>{for(const xe of he){const{width:fe,height:ge}=xe.contentRect;j({width:fe,height:ge})}});return _.observe(k),()=>_.disconnect()},[]);const T={width:N.width,height:N.height,fill:v||(u==="button"?f:void 0),stroke:f,strokeWidth:b,roughness:g,sketchy:h};return u==="input"?e.jsx("div",{ref:c,className:y("sui-wired-element",d),...l,children:e.jsxs("div",{ref:x,className:"relative",children:[e.jsx(V,{...T,className:"absolute inset-0",children:e.jsx("span",{})}),e.jsx("input",{type:"text",value:t,onChange:k=>s==null?void 0:s(k.target.value),placeholder:p,className:y(I({elementType:"input",sketchy:h}),"relative z-10 bg-transparent w-full px-3 py-2")})]})}):u==="button"?e.jsx("div",{ref:c,className:y("sui-wired-element",d),...l,children:e.jsx("div",{ref:x,className:"relative inline-block",children:e.jsx(V,{...T,children:e.jsx("button",{type:"button",onClick:a,className:y(I({elementType:"button",sketchy:h}),"relative z-10 bg-transparent"),children:r})})})}):e.jsx("div",{ref:c,className:y("sui-wired-element",d),...l,children:e.jsx("div",{ref:x,className:"relative",children:e.jsx(V,{...T,children:e.jsx("div",{className:y(I({elementType:"card",sketchy:h}),"relative z-10 bg-transparent"),children:r})})})})});o.displayName="WiredElement";o.__docgenInfo={description:`WiredElement 手绘风组件集

提供手绘/草图风格的 Button、Card、Input 元素。
使用 SVG 生成不规则的手绘线条边框，呈现真实的"草图"质感。`,methods:[],displayName:"WiredElement",props:{elementType:{required:!0,tsType:{name:"union",raw:"'button' | 'card' | 'input'",elements:[{name:"literal",value:"'button'"},{name:"literal",value:"'card'"},{name:"literal",value:"'input'"}]},description:"手绘风元素类型"},children:{required:!1,tsType:{name:"ReactNode"},description:"元素内容"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"点击回调（button 类型时）"},value:{required:!1,tsType:{name:"string"},description:"输入值（input 类型时）"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"输入变化回调（input 类型时）"},placeholder:{required:!1,tsType:{name:"string"},description:"占位文本（input 类型时）"},fill:{required:!1,tsType:{name:"string"},description:"手绘填充色，不传时 button 默认使用 stroke 色"},stroke:{required:!1,tsType:{name:"string"},description:"手绘线条颜色，默认 #1a1a1a"},strokeWidth:{required:!1,tsType:{name:"number"},description:"线条粗细，默认 1.5"},roughness:{required:!1,tsType:{name:"number"},description:"线条粗糙度，默认 2"}},composes:["Omit","VariantProps"]};const we={title:"动效/WiredElement 手绘风组件集",component:o,tags:["autodocs"],parameters:{layout:"padded"},argTypes:{elementType:{control:"select",options:["button","card","input"],description:"手绘风元素类型"},sketchy:{control:"boolean",description:"是否使用虚线边框风格"},stroke:{control:"color",description:"手绘线条颜色"},strokeWidth:{control:{type:"range",min:.5,max:4,step:.5},description:"线条粗细"},roughness:{control:{type:"range",min:0,max:5,step:.5},description:"线条粗糙度"},fill:{control:"color",description:"手绘填充色"}}},w={args:{elementType:"button",children:"手绘按钮"}},E={args:{elementType:"card",children:e.jsx("p",{className:"text-sm",children:"手绘风格卡片内容"})}},$={args:{elementType:"input",placeholder:"请输入内容..."}},W={args:{elementType:"button",sketchy:!0,children:"虚线手绘按钮"}},S={args:{elementType:"card",sketchy:!0,children:e.jsx("p",{className:"text-sm",children:"虚线手绘卡片"})}},q={render:()=>e.jsxs("div",{className:"flex flex-col gap-6 max-w-sm",children:[e.jsx(o,{elementType:"button",children:"手绘按钮"}),e.jsxs(o,{elementType:"card",children:[e.jsx("h3",{className:"font-medium text-foreground mb-2",children:"手绘卡片"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"这是一个手绘风格的卡片组件"})]}),e.jsx(o,{elementType:"input",placeholder:"手绘输入框..."})]})},C={render:()=>{const[i,c]=m.useState("");return e.jsxs("div",{className:"flex flex-col gap-4 max-w-sm",children:[e.jsx(o,{elementType:"input",value:i,onChange:c,placeholder:"输入试试..."}),i&&e.jsxs("p",{className:"text-sm text-muted-foreground",children:["输入内容：",i]})]})}},R={render:()=>e.jsxs("div",{className:"flex gap-3",children:[e.jsx(o,{elementType:"button",onClick:()=>console.log("确认"),children:"确认"}),e.jsx(o,{elementType:"button",sketchy:!0,children:"取消"})]})},P={render:()=>e.jsxs("div",{className:"flex flex-col gap-4 max-w-sm",children:[e.jsx(o,{elementType:"button",stroke:"#e74c3c",fill:"#e74c3c",children:"红色手绘按钮"}),e.jsx(o,{elementType:"button",stroke:"#3498db",fill:"#3498db",children:"蓝色手绘按钮"}),e.jsx(o,{elementType:"button",stroke:"#2ecc71",fill:"#2ecc71",children:"绿色手绘按钮"}),e.jsxs(o,{elementType:"card",stroke:"#9b59b6",children:[e.jsx("h3",{className:"font-medium mb-2",children:"紫色手绘卡片"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"自定义线条颜色"})]})]})},B={render:()=>e.jsxs("div",{className:"flex flex-col gap-4 max-w-sm",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(o,{elementType:"button",roughness:.5,children:"细腻 (0.5)"}),e.jsx("span",{className:"text-sm text-muted-foreground",children:"线条较平滑"})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(o,{elementType:"button",roughness:2,children:"标准 (2)"}),e.jsx("span",{className:"text-sm text-muted-foreground",children:"默认粗糙度"})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(o,{elementType:"button",roughness:4,children:"粗犷 (4)"}),e.jsx("span",{className:"text-sm text-muted-foreground",children:"线条更抖动"})]})]})};var z,L,Q;w.parameters={...w.parameters,docs:{...(z=w.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    elementType: 'button',
    children: '手绘按钮'
  }
}`,...(Q=(L=w.parameters)==null?void 0:L.docs)==null?void 0:Q.source}}};var D,G,M;E.parameters={...E.parameters,docs:{...(D=E.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    elementType: 'card',
    children: <p className="text-sm">手绘风格卡片内容</p>
  }
}`,...(M=(G=E.parameters)==null?void 0:G.docs)==null?void 0:M.source}}};var X,A,O;$.parameters={...$.parameters,docs:{...(X=$.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    elementType: 'input',
    placeholder: '请输入内容...'
  }
}`,...(O=(A=$.parameters)==null?void 0:A.docs)==null?void 0:O.source}}};var Y,F,H;W.parameters={...W.parameters,docs:{...(Y=W.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    elementType: 'button',
    sketchy: true,
    children: '虚线手绘按钮'
  }
}`,...(H=(F=W.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var J,K,U;S.parameters={...S.parameters,docs:{...(J=S.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    elementType: 'card',
    sketchy: true,
    children: <p className="text-sm">虚线手绘卡片</p>
  }
}`,...(U=(K=S.parameters)==null?void 0:K.docs)==null?void 0:U.source}}};var Z,ee,te;q.parameters={...q.parameters,docs:{...(Z=q.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6 max-w-sm">
      <WiredElement elementType="button">手绘按钮</WiredElement>
      <WiredElement elementType="card">
        <h3 className="font-medium text-foreground mb-2">手绘卡片</h3>
        <p className="text-sm text-muted-foreground">这是一个手绘风格的卡片组件</p>
      </WiredElement>
      <WiredElement elementType="input" placeholder="手绘输入框..." />
    </div>
}`,...(te=(ee=q.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ne,re,se;C.parameters={...C.parameters,docs:{...(ne=C.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    return <div className="flex flex-col gap-4 max-w-sm">
        <WiredElement elementType="input" value={value} onChange={setValue} placeholder="输入试试..." />
        {value && <p className="text-sm text-muted-foreground">输入内容：{value}</p>}
      </div>;
  }
}`,...(se=(re=C.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var ae,oe,ie;R.parameters={...R.parameters,docs:{...(ae=R.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => <div className="flex gap-3">
      <WiredElement elementType="button" onClick={() => console.log('确认')}>
        确认
      </WiredElement>
      <WiredElement elementType="button" sketchy>
        取消
      </WiredElement>
    </div>
}`,...(ie=(oe=R.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var le,ce,de;P.parameters={...P.parameters,docs:{...(le=P.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 max-w-sm">
      <WiredElement elementType="button" stroke="#e74c3c" fill="#e74c3c">
        红色手绘按钮
      </WiredElement>
      <WiredElement elementType="button" stroke="#3498db" fill="#3498db">
        蓝色手绘按钮
      </WiredElement>
      <WiredElement elementType="button" stroke="#2ecc71" fill="#2ecc71">
        绿色手绘按钮
      </WiredElement>
      <WiredElement elementType="card" stroke="#9b59b6">
        <h3 className="font-medium mb-2">紫色手绘卡片</h3>
        <p className="text-sm text-muted-foreground">自定义线条颜色</p>
      </WiredElement>
    </div>
}`,...(de=(ce=P.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var me,ue,pe;B.parameters={...B.parameters,docs:{...(me=B.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 max-w-sm">
      <div className="flex items-center gap-4">
        <WiredElement elementType="button" roughness={0.5}>
          细腻 (0.5)
        </WiredElement>
        <span className="text-sm text-muted-foreground">线条较平滑</span>
      </div>
      <div className="flex items-center gap-4">
        <WiredElement elementType="button" roughness={2}>
          标准 (2)
        </WiredElement>
        <span className="text-sm text-muted-foreground">默认粗糙度</span>
      </div>
      <div className="flex items-center gap-4">
        <WiredElement elementType="button" roughness={4}>
          粗犷 (4)
        </WiredElement>
        <span className="text-sm text-muted-foreground">线条更抖动</span>
      </div>
    </div>
}`,...(pe=(ue=B.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};const Ee=["Button","Card","Input","SketchyButton","SketchyCard","AllTypes","InteractiveInput","ButtonGroup","ColorVariants","RoughnessComparison"];export{q as AllTypes,w as Button,R as ButtonGroup,E as Card,P as ColorVariants,$ as Input,C as InteractiveInput,B as RoughnessComparison,W as SketchyButton,S as SketchyCard,Ee as __namedExportsOrder,we as default};
