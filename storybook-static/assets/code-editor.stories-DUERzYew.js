import{j as o}from"./jsx-runtime-CDt2p4po.js";import{r as i}from"./index-GiUgBvb1.js";import{a as q}from"./utils-BEhiKRD9.js";import{c as ve}from"./index-C08JwjkN.js";const xe=ve("rounded-md border border-border bg-white overflow-hidden font-mono text-sm",{variants:{readonly:{true:"bg-muted",false:""}},defaultVariants:{readonly:!1}}),be={javascript:["const","let","var","function","return","if","else","for","while","class","import","export","default","new","this","typeof","instanceof","async","await","try","catch","finally","throw","switch","case","break","continue","true","false","null","undefined","of","in","yield","from"],typescript:["const","let","var","function","return","if","else","for","while","class","import","export","default","new","this","typeof","instanceof","async","await","try","catch","finally","throw","switch","case","break","continue","true","false","null","undefined","of","in","yield","from","type","interface","enum","extends","implements","as","is","keyof","infer","never","void","readonly","declare","namespace","abstract","public","private","protected"],python:["def","class","return","if","elif","else","for","while","import","from","as","try","except","finally","raise","with","lambda","pass","break","continue","and","or","not","in","is","True","False","None","yield","async","await","global","nonlocal","assert","del"],json:[],html:[],css:[],plaintext:[]},m="text-muted-foreground italic",u="text-success-700";function je(l){return l.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function we(l,r){let t=je(l);const d=be[r]??[],p=[],e=(h,n)=>{t=t.replace(h,T=>(p.push(`<span class="${n}">${T}</span>`),`\0${p.length-1}\0`))};return r==="javascript"||r==="typescript"?(e(/\/\/.*$/gm,m),e(/\/\*[\s\S]*?\*\//g,m),e(/(["'`])(?:(?!\1|\\).|\\.)*\1/g,u)):r==="python"?(e(/#.*$/gm,m),e(/("""|''')[\s\S]*?\1/g,u),e(/(["'])(?:(?!\1|\\).|\\.)*\1/g,u)):r==="json"?e(/(["'])(?:(?!\1|\\).|\\.)*\1/g,u):r==="html"?(e(/&lt;!--[\s\S]*?--&gt;/g,m),e(/(["'])(?:(?!\1|\\).|\\.)*\1/g,u)):r==="css"&&(e(/\/\*[\s\S]*?\*\//g,m),e(/(["'])(?:(?!\1|\\).|\\.)*\1/g,u)),d.length>0&&(t=t.replace(new RegExp(`\\b(${d.join("|")})\\b`,"g"),'<span class="text-primary-700 font-semibold">$1</span>')),t=t.replace(/\b(\d+\.?\d*)\b/g,'<span class="text-warning-700">$1</span>'),t=t.replace(/\x00(\d+)\x00/g,(h,n)=>p[Number(n)]??""),t}const V=i.forwardRef((l,r)=>{const{className:t,value:d,defaultValue:p="",onChange:e,language:h="plaintext",readonly:n=!1,showLineNumbers:T=!0,wordWrap:L=!1,tabSize:E=2,placeholder:ue,...de}=l,[pe,R]=i.useState(p),f=d!==void 0,c=f?d:pe,_=i.useRef(null),k=i.useRef(null),fe=i.useCallback(s=>{const a=s.target.value;f||R(a),e==null||e(a)},[f,e]),me=i.useCallback(s=>{if(s.key==="Tab"&&!n){s.preventDefault();const a=s.currentTarget,W=a.selectionStart,ye=" ".repeat(E),$=c.substring(0,W)+ye+c.substring(a.selectionEnd);f||R($),e==null||e($),requestAnimationFrame(()=>{a.selectionStart=a.selectionEnd=W+E})}},[c,f,e,n,E]),ge=c.split(`
`).length,he=we(c,h);return i.useEffect(()=>{const s=_.current;if(!s)return;const a=()=>{k.current&&(k.current.scrollTop=s.scrollTop)};return s.addEventListener("scroll",a),()=>s.removeEventListener("scroll",a)},[]),o.jsx("div",{ref:r,className:q(xe({readonly:n}),"h-[300px]",t),...de,children:o.jsxs("div",{className:"flex h-full",children:[T&&o.jsx("div",{ref:k,className:"flex-shrink-0 select-none overflow-hidden border-r border-border bg-muted/50 py-3 text-right h-full",children:Array.from({length:ge},(s,a)=>o.jsx("div",{className:"px-3 leading-[1.5] text-muted-foreground",children:a+1},a+1))}),o.jsxs("div",{className:"relative flex-1 h-full",children:[n&&o.jsx("div",{className:q("absolute inset-0 overflow-auto p-3 leading-[1.5] whitespace-pre h-full",!L&&"overflow-x-auto"),dangerouslySetInnerHTML:{__html:he||"&nbsp;"}}),o.jsx("textarea",{ref:_,className:q("w-full h-full resize-none p-3 leading-[1.5] outline-none placeholder:text-muted-foreground",n&&"invisible",L?"whitespace-pre-wrap":"whitespace-pre overflow-x-auto"),value:c,onChange:fe,onKeyDown:me,placeholder:ue,readOnly:n,spellCheck:!1,autoCapitalize:"off",autoCorrect:"off"})]})]})})});V.displayName="CodeEditor";V.__docgenInfo={description:"",methods:[],displayName:"CodeEditor",props:{value:{required:!1,tsType:{name:"string"},description:"当前代码内容（受控模式）"},defaultValue:{required:!1,tsType:{name:"string"},description:"默认代码内容（非受控模式）"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"内容变化回调"},language:{required:!1,tsType:{name:"union",raw:"'javascript' | 'typescript' | 'python' | 'json' | 'html' | 'css' | 'plaintext'",elements:[{name:"literal",value:"'javascript'"},{name:"literal",value:"'typescript'"},{name:"literal",value:"'python'"},{name:"literal",value:"'json'"},{name:"literal",value:"'html'"},{name:"literal",value:"'css'"},{name:"literal",value:"'plaintext'"}]},description:"编程语言，用于语法高亮，默认 plaintext"},readonly:{required:!1,tsType:{name:"boolean"},description:"是否只读，默认 false"},showLineNumbers:{required:!1,tsType:{name:"boolean"},description:"是否显示行号，默认 true"},wordWrap:{required:!1,tsType:{name:"boolean"},description:"是否自动换行，默认 false"},tabSize:{required:!1,tsType:{name:"number"},description:"Tab 键空格数，默认 2"},placeholder:{required:!1,tsType:{name:"string"},description:"占位文本"}},composes:["Omit","VariantProps"]};const ke={title:"编辑器/CodeEditor 代码编辑器",component:V,tags:["autodocs"],parameters:{layout:"padded"},argTypes:{language:{control:"select",options:["javascript","typescript","python","json","html","css","plaintext"],description:"编程语言，用于语法高亮"},readonly:{control:"boolean",description:"是否只读"},showLineNumbers:{control:"boolean",description:"是否显示行号"},wordWrap:{control:"boolean",description:"是否自动换行"},tabSize:{control:"number",description:"Tab 键空格数"}}},g=`function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// 计算前 10 个斐波那契数
const result = Array.from({ length: 10 }, (_, i) => fibonacci(i));
console.log(result);`,ce=`interface User {
  id: number;
  name: string;
  email: string;
}

async function fetchUser(id: number): Promise<User> {
  const response = await fetch(\`/api/users/\${id}\`);
  return response.json();
}`,Ce=`def quicksort(arr):
    if len(arr) <= 1:
        return arr
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    return quicksort(left) + middle + quicksort(right)

# 测试
print(quicksort([3, 6, 8, 10, 1, 2, 1]))`,Se=`{
  "name": "simplUI",
  "version": "1.0.0",
  "description": "轻量级 UI 组件库",
  "dependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0"
  }
}`,y={args:{defaultValue:g,language:"javascript"}},v={args:{defaultValue:g,language:"javascript"}},x={args:{defaultValue:ce,language:"typescript"}},b={args:{defaultValue:Ce,language:"python"}},j={args:{defaultValue:Se,language:"json"}},w={args:{defaultValue:g,language:"javascript",readonly:!0}},C={args:{defaultValue:g,language:"javascript",showLineNumbers:!1}},S={args:{defaultValue:g,language:"javascript",wordWrap:!0}},N={render:()=>{const[l,r]=i.useState(ce);return o.jsxs("div",{className:"flex flex-col gap-3",children:[o.jsx(V,{value:l,onChange:r,language:"typescript"}),o.jsxs("p",{className:"text-xs text-muted-foreground",children:["当前行数：",l.split(`
`).length]})]})}};var O,D,I;y.parameters={...y.parameters,docs:{...(O=y.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    defaultValue: jsCode,
    language: 'javascript'
  }
}`,...(I=(D=y.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var z,U,J;v.parameters={...v.parameters,docs:{...(z=v.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    defaultValue: jsCode,
    language: 'javascript'
  }
}`,...(J=(U=v.parameters)==null?void 0:U.docs)==null?void 0:J.source}}};var P,A,H;x.parameters={...x.parameters,docs:{...(P=x.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    defaultValue: tsCode,
    language: 'typescript'
  }
}`,...(H=(A=x.parameters)==null?void 0:A.docs)==null?void 0:H.source}}};var K,M,F;b.parameters={...b.parameters,docs:{...(K=b.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    defaultValue: pythonCode,
    language: 'python'
  }
}`,...(F=(M=b.parameters)==null?void 0:M.docs)==null?void 0:F.source}}};var G,Y,B;j.parameters={...j.parameters,docs:{...(G=j.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    defaultValue: jsonCode,
    language: 'json'
  }
}`,...(B=(Y=j.parameters)==null?void 0:Y.docs)==null?void 0:B.source}}};var Q,X,Z;w.parameters={...w.parameters,docs:{...(Q=w.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    defaultValue: jsCode,
    language: 'javascript',
    readonly: true
  }
}`,...(Z=(X=w.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,ae,re;C.parameters={...C.parameters,docs:{...(ee=C.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    defaultValue: jsCode,
    language: 'javascript',
    showLineNumbers: false
  }
}`,...(re=(ae=C.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var te,se,ne;S.parameters={...S.parameters,docs:{...(te=S.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    defaultValue: jsCode,
    language: 'javascript',
    wordWrap: true
  }
}`,...(ne=(se=S.parameters)==null?void 0:se.docs)==null?void 0:ne.source}}};var oe,le,ie;N.parameters={...N.parameters,docs:{...(oe=N.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => {
    const [code, setCode] = useState(tsCode);
    return <div className="flex flex-col gap-3">
        <CodeEditor value={code} onChange={setCode} language="typescript" />
        <p className="text-xs text-muted-foreground">当前行数：{code.split('\\n').length}</p>
      </div>;
  }
}`,...(ie=(le=N.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};const qe=["Default","JavaScript","TypeScript","Python","JSON","Readonly","NoLineNumbers","WordWrap","Controlled"];export{N as Controlled,y as Default,j as JSON,v as JavaScript,C as NoLineNumbers,b as Python,w as Readonly,x as TypeScript,S as WordWrap,qe as __namedExportsOrder,ke as default};
