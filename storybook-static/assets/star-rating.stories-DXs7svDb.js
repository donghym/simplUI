import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as n}from"./index-GiUgBvb1.js";import{a as H}from"./utils-BEhiKRD9.js";import{c as le}from"./index-C08JwjkN.js";import{S as ve}from"./star-BW2nsu6a.js";import"./createLucideIcon-CZe00VV7.js";const he=le("inline-flex items-center gap-1 text-2xl select-none",{variants:{disabled:{true:"opacity-50 pointer-events-none",false:""}},defaultVariants:{disabled:!1}}),Ve=le("relative cursor-pointer transition-all duration-200",{variants:{readonly:{true:"cursor-default",false:""}},defaultVariants:{readonly:!1}}),t=n.forwardRef((d,c)=>{const{className:de,value:w,defaultValue:ce=0,onChange:u,allowHalf:y=!0,disabled:s,readonly:o,count:C=5,character:R,...ue}=d,S=w!==void 0,[ie,me]=n.useState(ce),[T,k]=n.useState(0),pe=S?w:ie,N=T>0?T:pe,q=n.useCallback(a=>{o||s||(S||me(a),u==null||u(a))},[S,u,o,s]),fe=n.useCallback(a=>{o||s||k(a)},[o,s]),ge=n.useMemo(()=>Array.from({length:C},(a,i)=>i),[C]),D=R?e.jsx("span",{className:"text-2xl leading-none",children:R}):e.jsx(ve,{className:"h-6 w-6 fill-current"});return e.jsx("div",{ref:c,role:"radiogroup","aria-label":"评分","aria-disabled":s,className:H("sui-star-rating",he({disabled:s}),de),onMouseLeave:()=>k(0),...ue,children:ge.map(a=>{const i=N>=a+1,M=y&&N>a&&N<a+1,xe=r=>{const l=r.currentTarget.getBoundingClientRect(),j=r.clientX-l.left<l.width/2;fe(j&&y?a+.5:a+1)},be=r=>{const l=r.currentTarget.getBoundingClientRect(),j=r.clientX-l.left<l.width/2;q(j&&y?a+.5:a+1)};return e.jsxs("span",{role:"radio","aria-checked":i,tabIndex:s||o?-1:0,onMouseMove:xe,onClick:be,onKeyDown:r=>{(r.key==="Enter"||r.key===" ")&&(r.preventDefault(),q(a+1))},className:H(Ve({readonly:o})),children:[e.jsx("span",{className:"block text-muted-foreground/30",children:D}),(i||M)&&e.jsx("span",{className:H("absolute inset-0 overflow-hidden text-warning-500",M&&"w-1/2"),children:e.jsx("span",{className:"transition-transform duration-200",children:D})})]},a)})})});t.displayName="StarRating";t.__docgenInfo={description:"",methods:[],displayName:"StarRating",props:{value:{required:!1,tsType:{name:"number"},description:"当前评分值（受控模式），0-5 支持小数"},defaultValue:{required:!1,tsType:{name:"number"},description:"默认评分值（非受控模式）"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:"评分变化回调"},allowHalf:{required:!1,tsType:{name:"boolean"},description:"是否允许半星，默认 true"},disabled:{required:!1,tsType:{name:"boolean"},description:"是否禁用"},readonly:{required:!1,tsType:{name:"boolean"},description:"是否只读"},count:{required:!1,tsType:{name:"number"},description:"星星总数，默认 5"},character:{required:!1,tsType:{name:"string"},description:"自定义字符"}},composes:["Omit","VariantProps"]};const Ce={title:"数据录入/StarRating 增强星级评分",component:t,tags:["autodocs"],parameters:{layout:"padded"},argTypes:{value:{control:"number",description:"当前评分值（受控模式）"},defaultValue:{control:"number",description:"默认评分值（非受控模式）"},allowHalf:{control:"boolean",description:"是否允许半星"},disabled:{control:"boolean",description:"是否禁用"},readonly:{control:"boolean",description:"是否只读"},count:{control:"number",description:"星星总数"},character:{control:"text",description:"自定义字符"}}},m={args:{defaultValue:3}},p={args:{defaultValue:2.5,allowHalf:!0}},f={args:{defaultValue:3,allowHalf:!1}},g={args:{defaultValue:3.5,readonly:!0,allowHalf:!0}},x={args:{defaultValue:2,disabled:!0}},b={args:{defaultValue:7,count:10}},v={args:{defaultValue:4,character:"A"}},h={render:()=>{const[d,c]=n.useState(3);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(t,{value:d,onChange:c,allowHalf:!0}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["当前评分：",e.jsx("span",{className:"font-semibold text-foreground",children:d})," / 5"]}),e.jsx("button",{type:"button",className:"px-3 py-1 text-sm rounded-md border border-border hover:bg-muted transition-colors",onClick:()=>c(0),children:"重置"})]})}},V={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-muted-foreground mb-1",children:"默认（3 星）"}),e.jsx(t,{defaultValue:3})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-muted-foreground mb-1",children:"半星（2.5 星）"}),e.jsx(t,{defaultValue:2.5,allowHalf:!0})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-muted-foreground mb-1",children:"只读（4 星）"}),e.jsx(t,{defaultValue:4,readonly:!0})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-muted-foreground mb-1",children:"禁用（1 星）"}),e.jsx(t,{defaultValue:1,disabled:!0})]})]})};var A,_,E;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    defaultValue: 3
  }
}`,...(E=(_=m.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};var I,O,L;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    defaultValue: 2.5,
    allowHalf: true
  }
}`,...(L=(O=p.parameters)==null?void 0:O.docs)==null?void 0:L.source}}};var B,P,X;f.parameters={...f.parameters,docs:{...(B=f.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    defaultValue: 3,
    allowHalf: false
  }
}`,...(X=(P=f.parameters)==null?void 0:P.docs)==null?void 0:X.source}}};var F,K,z;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    defaultValue: 3.5,
    readonly: true,
    allowHalf: true
  }
}`,...(z=(K=g.parameters)==null?void 0:K.docs)==null?void 0:z.source}}};var G,J,Q;x.parameters={...x.parameters,docs:{...(G=x.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    defaultValue: 2,
    disabled: true
  }
}`,...(Q=(J=x.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var U,W,Y;b.parameters={...b.parameters,docs:{...(U=b.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    defaultValue: 7,
    count: 10
  }
}`,...(Y=(W=b.parameters)==null?void 0:W.docs)==null?void 0:Y.source}}};var Z,$,ee;v.parameters={...v.parameters,docs:{...(Z=v.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    defaultValue: 4,
    character: 'A'
  }
}`,...(ee=($=v.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var ae,re,te;h.parameters={...h.parameters,docs:{...(ae=h.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(3);
    return <div className="space-y-4">
        <StarRating value={value} onChange={setValue} allowHalf />
        <p className="text-sm text-muted-foreground">
          当前评分：<span className="font-semibold text-foreground">{value}</span> / 5
        </p>
        <button type="button" className="px-3 py-1 text-sm rounded-md border border-border hover:bg-muted transition-colors" onClick={() => setValue(0)}>
          重置
        </button>
      </div>;
  }
}`,...(te=(re=h.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};var se,ne,oe;V.parameters={...V.parameters,docs:{...(se=V.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <div>
        <p className="text-sm text-muted-foreground mb-1">默认（3 星）</p>
        <StarRating defaultValue={3} />
      </div>
      <div>
        <p className="text-sm text-muted-foreground mb-1">半星（2.5 星）</p>
        <StarRating defaultValue={2.5} allowHalf />
      </div>
      <div>
        <p className="text-sm text-muted-foreground mb-1">只读（4 星）</p>
        <StarRating defaultValue={4} readonly />
      </div>
      <div>
        <p className="text-sm text-muted-foreground mb-1">禁用（1 星）</p>
        <StarRating defaultValue={1} disabled />
      </div>
    </div>
}`,...(oe=(ne=V.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};const Re=["Default","HalfStar","NoHalf","ReadOnly","Disabled","TenStars","CustomCharacter","Controlled","AllStates"];export{V as AllStates,h as Controlled,v as CustomCharacter,m as Default,x as Disabled,p as HalfStar,f as NoHalf,g as ReadOnly,b as TenStars,Re as __namedExportsOrder,Ce as default};
