import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as w}from"./index-GiUgBvb1.js";import{a as u}from"./utils-BEhiKRD9.js";import{c as v}from"./index-C08JwjkN.js";const k=v("flex gap-3 max-w-[80%]",{variants:{role:{user:"ml-auto flex-row-reverse",assistant:"mr-auto",system:"mx-auto max-w-[90%]"}},defaultVariants:{role:"assistant"}}),N=v("rounded-2xl px-4 py-3 text-sm leading-relaxed break-words",{variants:{role:{user:"bg-primary text-primary-foreground rounded-br-sm",assistant:"bg-muted text-foreground rounded-bl-sm",system:"bg-muted/50 text-muted-foreground text-center italic rounded-lg"}},defaultVariants:{role:"assistant"}}),K=v("shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium border border-gray-400",{variants:{role:{user:"bg-primary text-primary-foreground",assistant:"bg-muted text-muted-foreground",system:"hidden"}},defaultVariants:{role:"assistant"}}),j=v("inline-block w-2 h-2 rounded-full bg-muted-foreground/50 animate-bounce");function P(s,a=!1){const o=[];let n=0;const r=s.split(/(```[\s\S]*?```)/g);for(const t of r){const l=t.match(/^```([\w]*)(?:\n|)([\s\S]*?)```$/);if(l){const c=(l[1]??"").trim(),d=(l[2]??"").trim();o.push(e.jsx("pre",{className:"my-2 rounded-md bg-foreground/10 p-3 overflow-x-auto text-xs",children:a?e.jsx("code",{className:c?`language-${c}`:void 0,children:F(d)}):e.jsx("code",{children:d})},n++));continue}const i=t.split(`
`);for(let c=0;c<i.length;c++){const d=i[c]??"",p=d.match(/^[-*]\s+(.*)$/);if(p){o.push(e.jsxs("div",{className:"flex gap-2 ml-2",children:[e.jsx("span",{className:"text-muted-foreground",children:"-"}),e.jsx("span",{children:B(p[1]??"",n)})]},n++)),n++;continue}d.trim()&&(o.push(e.jsx("p",{children:B(d,n)},n++)),n++)}}return o}function F(s){return s.split(`
`).map((o,n)=>e.jsx("div",{className:"whitespace-pre",children:G(o)},n))}function G(s){var l;const a=[],o=/(\b(?:const|let|var|function|return|if|else|for|while|class|import|from|export|default|async|await|try|catch|new|this|typeof|instanceof)\b)|("(?:[^"\\]|\\.)*")|('(?:[^'\\]|\\.)*')|(`(?:[^`\\]|\\.)*`|\/\/.*|\/\*[\s\S]*?\*\/|\b\d+(?:\.\d+)?\b|(?:\{|\}|\(|\)|\[|\]))/g;let n=0,r,t=0;for(;(r=o.exec(s))!==null;){r.index>n&&a.push(e.jsx("span",{children:s.slice(n,r.index)},t++));const i=r[0];r[1]?a.push(e.jsx("span",{className:"text-purple-600 dark:text-purple-400 font-semibold",children:i},t++)):r[2]||r[3]||(l=r[4])!=null&&l.startsWith("`")?a.push(e.jsx("span",{className:"text-green-700 dark:text-green-400",children:i},t++)):i.startsWith("//")||i.startsWith("/*")?a.push(e.jsx("span",{className:"text-gray-500 dark:text-gray-400 italic",children:i},t++)):/^\d/.test(i)?a.push(e.jsx("span",{className:"text-orange-600 dark:text-orange-400",children:i},t++)):a.push(e.jsx("span",{className:"text-yellow-700 dark:text-yellow-400",children:i},t++)),n=r.index+i.length}return n<s.length&&a.push(e.jsx("span",{children:s.slice(n)},t++)),a}function B(s,a){const o=[],n=/(\*\*(.+?)\*\*|`(.+?)`)/g;let r=0,t,l=a*100;for(;(t=n.exec(s))!==null;)t.index>r&&o.push(s.slice(r,t.index)),t[2]?o.push(e.jsx("strong",{children:t[2]},l++)):t[3]&&o.push(e.jsx("code",{className:"rounded bg-foreground/10 px-1.5 py-0.5 text-xs font-mono",children:t[3]},l++)),r=t.index+t[0].length;return r<s.length&&o.push(s.slice(r)),o}const H={user:"U",assistant:"A",system:""},m=w.forwardRef(({role:s,content:a,avatar:o,loading:n=!1,timestamp:r,markdown:t=!1,codeHighlight:l=!1,className:i,...c},d)=>{const p=w.useMemo(()=>n&&s==="assistant"?e.jsxs("div",{className:"flex items-center gap-1 py-1",children:[e.jsx("span",{className:u(j,"animate-[bounce_1.4s_ease-in-out_infinite]")}),e.jsx("span",{className:u(j,"animate-[bounce_1.4s_ease-in-out_0.2s_infinite]")}),e.jsx("span",{className:u(j,"animate-[bounce_1.4s_ease-in-out_0.4s_infinite]")})]}):typeof a=="string"&&t?P(a,l):a,[a,n,t,l,s]);return s==="system"?e.jsx("div",{ref:d,className:u(k({role:s}),i),...c,children:e.jsx("div",{className:u(N({role:s})),children:p})}):e.jsxs("div",{ref:d,className:u(k({role:s}),i),...c,children:[e.jsx("div",{className:u(K({role:s})),children:o??H[s]}),e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("div",{className:u(N({role:s})),children:p}),r&&e.jsx("span",{className:u("text-xs text-muted-foreground",s==="user"?"text-right":"text-left"),children:r})]})]})});m.displayName="ChatBubble";m.__docgenInfo={description:`ChatBubble AI 消息气泡

支持用户/助手/系统三种角色样式，简化版 markdown 渲染，加载中打字动画。`,methods:[],displayName:"ChatBubble",props:{role:{required:!0,tsType:{name:"union",raw:"'user' | 'assistant' | 'system'",elements:[{name:"literal",value:"'user'"},{name:"literal",value:"'assistant'"},{name:"literal",value:"'system'"}]},description:"消息角色，决定气泡样式和位置"},content:{required:!0,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:"消息内容，字符串或自定义 ReactNode"},avatar:{required:!1,tsType:{name:"ReactNode"},description:"头像"},loading:{required:!1,tsType:{name:"boolean"},description:"加载中状态，assistant 角色时显示打字动画",defaultValue:{value:"false",computed:!1}},timestamp:{required:!1,tsType:{name:"string"},description:"时间戳文本"},markdown:{required:!1,tsType:{name:"boolean"},description:"是否渲染 markdown 格式（简化版：支持加粗/代码块/列表），默认 false",defaultValue:{value:"false",computed:!1}},codeHighlight:{required:!1,tsType:{name:"boolean"},description:"是否对代码块进行语法高亮，默认 false",defaultValue:{value:"false",computed:!1}}},composes:["Omit","VariantProps"]};const Z={title:"AI 对话/ChatBubble 消息气泡",component:m,tags:["autodocs"],parameters:{layout:"padded"},argTypes:{role:{control:"select",options:["user","assistant","system"],description:"消息角色，决定气泡样式和位置"},loading:{control:"boolean",description:"加载中状态，assistant 角色时显示打字动画"},markdown:{control:"boolean",description:"是否渲染 markdown 格式"},timestamp:{control:"text",description:"时间戳文本"}}},x={args:{role:"user",content:"你好，请帮我写一段排序算法。",timestamp:"14:30"}},f={args:{role:"assistant",content:`好的，这是一个快速排序算法的实现：
\`\`\`python
def quicksort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[0]
    left = [x for x in arr[1:] if x <= pivot]
    right = [x for x in arr[1:] if x > pivot]
    return quicksort(left) + [pivot] + quicksort(right)
\`\`\``,markdown:!0,timestamp:"14:31"}},g={args:{role:"system",content:"对话已切换为代码助手模式"}},h={args:{role:"assistant",content:"",loading:!0}},b={args:{role:"assistant",content:`这是一段 **加粗文字** 和 \`行内代码\`。

- 列表项一
- 列表项二
- 列表项三`,markdown:!0}},y={render:()=>e.jsxs("div",{className:"flex flex-col gap-4 max-w-2xl",children:[e.jsx(m,{role:"user",content:"解释一下什么是闭包？",timestamp:"10:00"}),e.jsx(m,{role:"assistant",content:"闭包是指一个函数可以**记住并访问**其词法作用域中的变量，即使该函数在其词法作用域之外执行。\\n\\n例如：\\n```javascript\\nfunction outer() {\\n  let count = 0;\\n  return function inner() {\\n    count++;\\n    return count;\\n  };\\n}\\n```",markdown:!0,timestamp:"10:01"}),e.jsx(m,{role:"user",content:"能再举个例子吗？",timestamp:"10:02"}),e.jsx(m,{role:"assistant",content:"",loading:!0})]})};var _,C,q;x.parameters={...x.parameters,docs:{...(_=x.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    role: 'user',
    content: '你好，请帮我写一段排序算法。',
    timestamp: '14:30'
  }
}`,...(q=(C=x.parameters)==null?void 0:C.docs)==null?void 0:q.source}}};var M,S,V;f.parameters={...f.parameters,docs:{...(M=f.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    role: 'assistant',
    content: '好的，这是一个快速排序算法的实现：\\n\`\`\`python\\ndef quicksort(arr):\\n    if len(arr) <= 1:\\n        return arr\\n    pivot = arr[0]\\n    left = [x for x in arr[1:] if x <= pivot]\\n    right = [x for x in arr[1:] if x > pivot]\\n    return quicksort(left) + [pivot] + quicksort(right)\\n\`\`\`',
    markdown: true,
    timestamp: '14:31'
  }
}`,...(V=(S=f.parameters)==null?void 0:S.docs)==null?void 0:V.source}}};var R,T,A;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    role: 'system',
    content: '对话已切换为代码助手模式'
  }
}`,...(A=(T=g.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};var I,L,E;h.parameters={...h.parameters,docs:{...(I=h.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    role: 'assistant',
    content: '',
    loading: true
  }
}`,...(E=(L=h.parameters)==null?void 0:L.docs)==null?void 0:E.source}}};var U,W,$;b.parameters={...b.parameters,docs:{...(U=b.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    role: 'assistant',
    content: '这是一段 **加粗文字** 和 \`行内代码\`。\\n\\n- 列表项一\\n- 列表项二\\n- 列表项三',
    markdown: true
  }
}`,...($=(W=b.parameters)==null?void 0:W.docs)==null?void 0:$.source}}};var O,z,D;y.parameters={...y.parameters,docs:{...(O=y.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 max-w-2xl">
      <ChatBubble role="user" content="解释一下什么是闭包？" timestamp="10:00" />
      <ChatBubble role="assistant" content="闭包是指一个函数可以**记住并访问**其词法作用域中的变量，即使该函数在其词法作用域之外执行。\\n\\n例如：\\n\`\`\`javascript\\nfunction outer() {\\n  let count = 0;\\n  return function inner() {\\n    count++;\\n    return count;\\n  };\\n}\\n\`\`\`" markdown timestamp="10:01" />
      <ChatBubble role="user" content="能再举个例子吗？" timestamp="10:02" />
      <ChatBubble role="assistant" content="" loading />
    </div>
}`,...(D=(z=y.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};const ee=["UserMessage","AssistantMessage","SystemMessage","Loading","MarkdownRender","Conversation"];export{f as AssistantMessage,y as Conversation,h as Loading,b as MarkdownRender,g as SystemMessage,x as UserMessage,ee as __namedExportsOrder,Z as default};
