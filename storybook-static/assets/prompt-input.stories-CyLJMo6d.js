import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as s}from"./index-GiUgBvb1.js";import{a as d}from"./utils-BEhiKRD9.js";import{c as p}from"./index-C08JwjkN.js";import{C as J}from"./chevron-up-CiCbXlai.js";import{c as Q}from"./createLucideIcon-CZe00VV7.js";/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X=Q("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]),Y=p("flex flex-col rounded-lg border border-border bg-background transition-colors focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20",{variants:{disabled:{true:"opacity-50 cursor-not-allowed",false:""}},defaultVariants:{disabled:!1}}),Z=p("w-full resize-none bg-transparent px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none",{variants:{},defaultVariants:{}}),ee=p("flex items-center justify-between border-t border-border px-3 py-2",{variants:{},defaultVariants:{}}),te=p("rounded-md px-3 py-1 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",{variants:{},defaultVariants:{}}),ae=p("absolute bottom-full left-0 mb-1 w-56 rounded-md border border-border bg-background shadow-lg z-10 overflow-hidden",{variants:{},defaultVariants:{}}),re=p("px-3 py-2 text-sm text-foreground hover:bg-muted cursor-pointer truncate",{variants:{},defaultVariants:{}});function se(a){a&&(a.style.height="auto",a.style.height=`${a.scrollHeight}px`)}const u=s.forwardRef(({value:a,defaultValue:n="",onChange:t,onSend:m,placeholder:K="输入提示词...",disabled:c=!1,maxLength:g,templates:b,sendText:M="发送",className:O,...W},_)=>{const[A,y]=s.useState(n),o=a!==void 0,l=o?a:A,V=s.useRef(null),[j,N]=s.useState(!1);s.useEffect(()=>{se(V.current)},[l]);const B=s.useCallback(r=>{const i=r.target.value;o||y(i),t==null||t(i)},[o,t]),w=s.useCallback(()=>{c||!l.trim()||(m==null||m(l),o||y(""))},[l,c,o,m]),H=s.useCallback(r=>{r.key==="Enter"&&(r.ctrlKey||r.metaKey)&&(r.preventDefault(),w())},[w]),U=s.useCallback(r=>{var T;const i=r.content;o||y(i),t==null||t(i),N(!1),(T=V.current)==null||T.focus()},[o,t]),F=l.length,G=g!==void 0;return e.jsxs("div",{ref:_,className:d(Y({disabled:c}),O),...W,children:[e.jsx("textarea",{ref:V,value:l,onChange:B,onKeyDown:H,placeholder:K,disabled:c,maxLength:g,rows:1,className:d(Z())}),e.jsxs("div",{className:d(ee()),children:[e.jsxs("div",{className:"flex items-center gap-2",children:[b&&b.length>0&&e.jsxs("div",{className:"relative",children:[e.jsxs("button",{type:"button",onClick:()=>N(r=>!r),disabled:c,className:"flex items-center gap-1 rounded px-2 py-1 text-xs text-muted-foreground hover:bg-muted transition-colors disabled:opacity-50",children:["模板",e.jsx(J,{className:d("h-3 w-3 transition-transform",j&&"rotate-180")})]}),j&&e.jsx("div",{className:d(ae()),children:b.map((r,i)=>e.jsx("div",{className:d(re()),onClick:()=>U(r),role:"option","aria-selected":!1,children:r.label},i))})]}),G&&e.jsxs("span",{className:"text-xs text-muted-foreground",children:[F," / ",g]})]}),e.jsx("button",{type:"button",onClick:w,disabled:c||!l.trim(),className:d(te()),children:e.jsxs("span",{className:"flex items-center gap-1",children:[e.jsx(X,{className:"h-3.5 w-3.5"}),M]})})]})]})});u.displayName="PromptInput";u.__docgenInfo={description:`PromptInput 提示词输入框

多行自适应高度，模板插入，Ctrl+Enter 发送。`,methods:[],displayName:"PromptInput",props:{value:{required:!1,tsType:{name:"string"},description:"当前值（受控模式）"},defaultValue:{required:!1,tsType:{name:"string"},description:"默认值（非受控模式）",defaultValue:{value:"''",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"值变化回调"},onSend:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"发送回调，按 Ctrl+Enter 或点击发送按钮触发"},placeholder:{required:!1,tsType:{name:"string"},description:"占位文本",defaultValue:{value:"'输入提示词...'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"是否禁用",defaultValue:{value:"false",computed:!1}},maxLength:{required:!1,tsType:{name:"number"},description:"最大字符数"},templates:{required:!1,tsType:{name:"Array",elements:[{name:"PromptTemplate"}],raw:"PromptTemplate[]"},description:"提示词模板列表"},sendText:{required:!1,tsType:{name:"string"},description:"发送按钮文本，默认 '发送'",defaultValue:{value:"'发送'",computed:!1}}},composes:["Omit","VariantProps"]};const pe={title:"AI 对话/PromptInput 提示词输入框",component:u,tags:["autodocs"],parameters:{layout:"padded"},argTypes:{placeholder:{control:"text",description:"占位文本"},disabled:{control:"boolean",description:"是否禁用"},maxLength:{control:"number",description:"最大字符数"},sendText:{control:"text",description:"发送按钮文本"}}},ne=[{label:"代码审查",content:`请审查以下代码，指出潜在问题并给出改进建议：
{code}`},{label:"翻译助手",content:`请将以下内容翻译为{language}：
{text}`},{label:"总结摘要",content:`请对以下内容进行总结，提取关键要点：
{content}`}],f={render:()=>{const[a,n]=s.useState("");return e.jsx("div",{className:"max-w-xl",children:e.jsx(u,{value:a,onChange:n,onSend:t=>{alert(`发送: ${t}`),n("")},placeholder:"输入提示词，Ctrl+Enter 发送..."})})}},x={render:()=>{const[a,n]=s.useState("");return e.jsx("div",{className:"max-w-xl",children:e.jsx(u,{value:a,onChange:n,onSend:t=>{alert(`发送: ${t}`),n("")},templates:ne})})}},v={render:()=>{const[a,n]=s.useState("");return e.jsx("div",{className:"max-w-xl",children:e.jsx(u,{value:a,onChange:n,onSend:t=>{alert(`发送: ${t}`),n("")},maxLength:200,placeholder:"最多输入 200 字符..."})})}},h={render:()=>e.jsx("div",{className:"max-w-xl",children:e.jsx(u,{value:"输入框已禁用",disabled:!0,onChange:()=>{}})})};var S,C,I;f.parameters={...f.parameters,docs:{...(S=f.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    return <div className="max-w-xl">
        <PromptInput value={value} onChange={setValue} onSend={v => {
        alert(\`发送: \${v}\`);
        setValue('');
      }} placeholder="输入提示词，Ctrl+Enter 发送..." />
      </div>;
  }
}`,...(I=(C=f.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var k,P,q;x.parameters={...x.parameters,docs:{...(k=x.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    return <div className="max-w-xl">
        <PromptInput value={value} onChange={setValue} onSend={v => {
        alert(\`发送: \${v}\`);
        setValue('');
      }} templates={templates} />
      </div>;
  }
}`,...(q=(P=x.parameters)==null?void 0:P.docs)==null?void 0:q.source}}};var E,D,$;v.parameters={...v.parameters,docs:{...(E=v.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    return <div className="max-w-xl">
        <PromptInput value={value} onChange={setValue} onSend={v => {
        alert(\`发送: \${v}\`);
        setValue('');
      }} maxLength={200} placeholder="最多输入 200 字符..." />
      </div>;
  }
}`,...($=(D=v.parameters)==null?void 0:D.docs)==null?void 0:$.source}}};var L,R,z;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div className="max-w-xl">
      <PromptInput value="输入框已禁用" disabled onChange={() => {}} />
    </div>
}`,...(z=(R=h.parameters)==null?void 0:R.docs)==null?void 0:z.source}}};const me=["Default","WithTemplates","WithMaxLength","Disabled"];export{f as Default,h as Disabled,v as WithMaxLength,x as WithTemplates,me as __namedExportsOrder,pe as default};
