import{j as a}from"./jsx-runtime-CDt2p4po.js";import{r as n}from"./index-GiUgBvb1.js";import{a as p}from"./utils-BEhiKRD9.js";import{c as ie}from"./index-C08JwjkN.js";const ce=ie("rounded-md border border-border bg-white overflow-hidden",{variants:{mode:{edit:"",preview:"",split:""},disabled:{true:"opacity-50 cursor-not-allowed",false:""}},defaultVariants:{mode:"split",disabled:!1}});function me(r){let e=r;return e=e.replace(/```(\w*)\n([\s\S]*?)```/g,'<pre class="rounded bg-muted p-3 text-sm overflow-x-auto"><code>$2</code></pre>'),e=e.replace(/`([^`]+)`/g,'<code class="rounded bg-muted px-1.5 py-0.5 text-sm text-danger-700">$1</code>'),e=e.replace(/^######\s+(.+)$/gm,'<h6 class="text-xs font-semibold mt-3 mb-1">$1</h6>'),e=e.replace(/^#####\s+(.+)$/gm,'<h5 class="text-sm font-semibold mt-3 mb-1">$1</h5>'),e=e.replace(/^####\s+(.+)$/gm,'<h4 class="text-base font-semibold mt-4 mb-1">$1</h4>'),e=e.replace(/^###\s+(.+)$/gm,'<h3 class="text-lg font-semibold mt-4 mb-1">$1</h3>'),e=e.replace(/^##\s+(.+)$/gm,'<h2 class="text-xl font-bold mt-5 mb-2">$1</h2>'),e=e.replace(/^#\s+(.+)$/gm,'<h1 class="text-2xl font-bold mt-5 mb-2">$1</h1>'),e=e.replace(/^---$/gm,'<hr class="my-4 border-border" />'),e=e.replace(/^>\s+(.+)$/gm,'<blockquote class="border-l-4 border-primary-300 pl-3 text-muted-foreground italic">$1</blockquote>'),e=e.replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>"),e=e.replace(/\*(.+?)\*/g,"<em>$1</em>"),e=e.replace(/\[([^\]]+)\]\(([^)]+)\)/g,'<a class="text-primary-600 underline" href="$2" target="_blank" rel="noopener noreferrer">$1</a>'),e=e.replace(/^[-*]\s+(.+)$/gm,'<li class="ml-4 list-disc">$1</li>'),e=e.replace(/^\d+\.\s+(.+)$/gm,'<li class="ml-4 list-decimal">$1</li>'),e=e.replace(/\n/g,"<br />"),e}function pe(){return[{label:"B",tooltip:"加粗",action:r=>r+"****"},{label:"I",tooltip:"斜体",action:r=>r+"**"},{label:"H",tooltip:"标题",action:r=>r+`
## `},{label:"</>",tooltip:"代码块",action:r=>r+"\n```\n\n```"},{label:"链接",tooltip:"链接",action:r=>r+"[](url)"},{label:"列表",tooltip:"无序列表",action:r=>r+`
- `},{label:"引用",tooltip:"引用",action:r=>r+`
> `}]}const y=n.forwardRef((r,e)=>{const{className:U,mode:X="split",value:M,defaultValue:Y="",onChange:o,placeholder:Z,disabled:m=!1,maxLength:k,toolbar:$,showToolbar:ee=!0,...re}=r,[ae,T]=n.useState(Y),i=M!==void 0,c=i?M:ae,te=n.useCallback(t=>{const l=t.target.value;i||T(l),o==null||o(l)},[i,o]),oe=n.useMemo(()=>$??pe(),[$]),se=n.useCallback(t=>{const l=t(c);i||T(l),o==null||o(l)},[c,i,o]),[s,le]=n.useState(X),ne=[{key:"edit",label:"编辑"},{key:"preview",label:"预览"},{key:"split",label:"分屏"}],de=c.length;return a.jsxs("div",{ref:e,className:p(ce({mode:s,disabled:m}),U),...re,children:[ee&&a.jsxs("div",{className:"flex items-center justify-between border-b border-border px-2 py-1",children:[a.jsx("div",{className:"flex items-center gap-1",children:oe.map((t,l)=>a.jsx("button",{type:"button",title:t.tooltip,disabled:m,className:"rounded px-2 py-1 text-xs font-medium text-foreground hover:bg-muted disabled:opacity-50",onClick:()=>se(t.action),children:t.label},l))}),a.jsx("div",{className:"flex items-center gap-1",children:ne.map(t=>a.jsx("button",{type:"button",disabled:m,className:p("rounded px-2 py-1 text-xs font-medium transition-colors",s===t.key?"bg-primary-100 text-primary-700":"text-muted-foreground hover:bg-muted"),onClick:()=>le(t.key),children:t.label},t.key))})]}),a.jsxs("div",{className:"flex min-h-[200px]",children:[(s==="edit"||s==="split")&&a.jsx("textarea",{className:p("flex-1 resize-none p-3 text-sm outline-none","placeholder:text-muted-foreground","disabled:cursor-not-allowed",s==="split"&&"border-r border-border"),value:c,onChange:te,placeholder:Z,disabled:m,maxLength:k}),(s==="preview"||s==="split")&&a.jsx("div",{className:p("flex-1 overflow-auto p-3 text-sm leading-relaxed",s==="preview"?"w-full":""),dangerouslySetInnerHTML:{__html:me(c)}})]}),k!==void 0&&a.jsxs("div",{className:"border-t border-border px-3 py-1 text-xs text-muted-foreground text-right",children:[de," / ",k]})]})});y.displayName="MarkdownEditor";y.__docgenInfo={description:"",methods:[],displayName:"MarkdownEditor",props:{value:{required:!1,tsType:{name:"string"},description:"当前内容（受控模式）"},defaultValue:{required:!1,tsType:{name:"string"},description:"默认内容（非受控模式）"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"内容变化回调"},mode:{required:!1,tsType:{name:"union",raw:"'edit' | 'preview' | 'split'",elements:[{name:"literal",value:"'edit'"},{name:"literal",value:"'preview'"},{name:"literal",value:"'split'"}]},description:"编辑器模式，默认 split"},placeholder:{required:!1,tsType:{name:"string"},description:"占位文本"},disabled:{required:!1,tsType:{name:"boolean"},description:"是否禁用"},maxLength:{required:!1,tsType:{name:"number"},description:"最大字符数"},toolbar:{required:!1,tsType:{name:"Array",elements:[{name:"ToolbarAction"}],raw:"ToolbarAction[]"},description:"工具栏按钮列表，不提供时使用默认工具栏"},showToolbar:{required:!1,tsType:{name:"boolean"},description:"是否显示工具栏，默认 true"}},composes:["Omit","VariantProps"]};const fe={title:"编辑器/MarkdownEditor Markdown 编辑器",component:y,tags:["autodocs"],parameters:{layout:"fullscreen"},argTypes:{mode:{control:"select",options:["edit","preview","split"],description:"编辑器模式：编辑、预览、分屏"},disabled:{control:"boolean",description:"是否禁用"},showToolbar:{control:"boolean",description:"是否显示工具栏"},placeholder:{control:"text",description:"占位文本"}}},d=`# 标题示例

这是一段 **加粗** 和 *斜体* 文本。

## 二级标题

- 列表项 1
- 列表项 2

> 引用文本

\`行内代码\`

\`\`\`
代码块示例
\`\`\`

[链接文本](https://example.com)

---`,u={args:{defaultValue:d}},b={args:{mode:"edit",placeholder:"在此输入 Markdown 内容..."}},g={args:{mode:"preview",defaultValue:d}},x={args:{mode:"split",defaultValue:d}},f={args:{disabled:!0,defaultValue:d}},h={args:{maxLength:500,defaultValue:d}},v={args:{showToolbar:!1,defaultValue:d}},w={render:()=>{const[r,e]=n.useState(`# 受控模式

内容可被外部控制`);return a.jsxs("div",{className:"flex flex-col gap-3",children:[a.jsx(y,{value:r,onChange:e,mode:"split"}),a.jsxs("p",{className:"text-xs text-muted-foreground",children:["当前字数：",r.length]})]})}};var V,N,j;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    defaultValue: sampleMarkdown
  }
}`,...(j=(N=u.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var S,q,E;b.parameters={...b.parameters,docs:{...(S=b.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    mode: 'edit',
    placeholder: '在此输入 Markdown 内容...'
  }
}`,...(E=(q=b.parameters)==null?void 0:q.docs)==null?void 0:E.source}}};var C,L,_;g.parameters={...g.parameters,docs:{...(C=g.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    mode: 'preview',
    defaultValue: sampleMarkdown
  }
}`,...(_=(L=g.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};var A,D,I;x.parameters={...x.parameters,docs:{...(A=x.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    mode: 'split',
    defaultValue: sampleMarkdown
  }
}`,...(I=(D=x.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var P,B,H;f.parameters={...f.parameters,docs:{...(P=f.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultValue: sampleMarkdown
  }
}`,...(H=(B=f.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};var O,R,W;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    maxLength: 500,
    defaultValue: sampleMarkdown
  }
}`,...(W=(R=h.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var z,F,G;v.parameters={...v.parameters,docs:{...(z=v.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    showToolbar: false,
    defaultValue: sampleMarkdown
  }
}`,...(G=(F=v.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var J,K,Q;w.parameters={...w.parameters,docs:{...(J=w.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('# 受控模式\\n\\n内容可被外部控制');
    return <div className="flex flex-col gap-3">
        <MarkdownEditor value={value} onChange={setValue} mode="split" />
        <p className="text-xs text-muted-foreground">当前字数：{value.length}</p>
      </div>;
  }
}`,...(Q=(K=w.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};const he=["Default","EditMode","PreviewMode","SplitMode","Disabled","WithMaxLength","NoToolbar","Controlled"];export{w as Controlled,u as Default,f as Disabled,b as EditMode,v as NoToolbar,g as PreviewMode,x as SplitMode,h as WithMaxLength,he as __namedExportsOrder,fe as default};
