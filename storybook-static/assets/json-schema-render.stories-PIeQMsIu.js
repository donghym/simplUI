import{j as r}from"./jsx-runtime-CDt2p4po.js";import{r as i}from"./index-GiUgBvb1.js";import{a as le}from"./utils-BEhiKRD9.js";import{c as N}from"./index-C08JwjkN.js";const oe=N("rounded-lg border border-border bg-background p-4",{variants:{layout:{vertical:"",horizontal:""}},defaultVariants:{layout:"vertical"}}),ce=N("flex flex-col gap-1",{variants:{layout:{vertical:"",horizontal:"flex-row items-start gap-3"}},defaultVariants:{layout:"vertical"}}),ie=N("text-sm font-medium text-foreground",{variants:{layout:{vertical:"",horizontal:"w-28 flex-shrink-0 pt-1.5 text-right"}},defaultVariants:{layout:"vertical"}}),me=N("text-xs text-danger-500 mt-0.5");function ue(e,a){if(e.required&&(a==null||a===""))return`${e.label}为必填项`;if(a==null||a==="")return"";if(e.type==="string"||e.type==="textarea"){const s=String(a);if(e.min!==void 0&&s.length<e.min)return`${e.label}最少${e.min}个字符`;if(e.max!==void 0&&s.length>e.max)return`${e.label}最多${e.max}个字符`;if(e.pattern&&!new RegExp(e.pattern).test(s))return e.patternMessage??`${e.label}格式不正确`}if(e.type==="number"){const s=Number(a);if(Number.isNaN(s))return`${e.label}必须为数字`;if(e.min!==void 0&&s<e.min)return`${e.label}不能小于${e.min}`;if(e.max!==void 0&&s>e.max)return`${e.label}不能大于${e.max}`}return""}function M(e,a){const s={};for(const n of e)s[n.name]=(a==null?void 0:a[n.name])??n.defaultValue??de(n.type);return s}function de(e){switch(e){case"boolean":return!1;case"number":return"";case"multi-select":return[];default:return""}}const R=i.forwardRef((e,a)=>{const{className:s,schema:n,initialValues:o,onSubmit:m,onChange:u,submitText:t="提交",showReset:V=!0,resetText:$="重置",layout:c="vertical",...h}=e,re=i.useMemo(()=>M(n,o),[n,o]),[g,C]=i.useState(re),[A,q]=i.useState({}),te=i.useCallback((l,d)=>{C(p=>{const b={...p,[l]:d};return q(se=>{const E={...se};return delete E[l],E}),u==null||u(b),b})},[u]),ne=i.useCallback(l=>{l.preventDefault();const d={};for(const p of n){const b=ue(p,g[p.name]);b&&(d[p.name]=b)}q(d),Object.keys(d).length===0&&(m==null||m(g))},[n,g,m]),T=i.useCallback(()=>{C(M(n,o)),q({})},[n,o]);return r.jsxs("form",{ref:a,className:le(oe({layout:c}),s),onSubmit:ne,onReset:T,...h,children:[r.jsx("div",{className:"flex flex-col gap-4",children:n.map(l=>r.jsxs("div",{className:ce({layout:c}),children:[r.jsxs("label",{className:ie({layout:c}),htmlFor:`jsr-${l.name}`,children:[l.label,l.required&&r.jsx("span",{className:"ml-0.5 text-danger-500",children:"*"})]}),r.jsxs("div",{className:"flex-1 flex flex-col gap-0.5",children:[pe(l,g[l.name],d=>te(l.name,d)),l.description&&r.jsx("span",{className:"text-xs text-muted-foreground",children:l.description}),A[l.name]&&r.jsx("span",{className:me(),children:A[l.name]})]})]},l.name))}),r.jsxs("div",{className:"mt-6 flex gap-2",children:[r.jsx("button",{type:"submit",className:"rounded-md bg-primary-500 px-4 py-2 text-sm text-white hover:bg-primary-600 transition-colors",children:t}),V&&r.jsx("button",{type:"button",className:"rounded-md border border-border px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors",onClick:T,children:$})]})]})});function pe(e,a,s){var m,u;const n=e.disabled??!1,o="h-8 w-full rounded-md border border-border bg-white px-2 text-sm disabled:opacity-50 disabled:cursor-not-allowed";switch(e.type){case"string":return r.jsx("input",{id:`jsr-${e.name}`,className:o,placeholder:e.placeholder,value:String(a??""),disabled:n,onChange:t=>s(t.target.value)});case"number":return r.jsx("input",{id:`jsr-${e.name}`,type:"number",className:o,placeholder:e.placeholder,value:a===""?"":Number(a),disabled:n,onChange:t=>s(t.target.value===""?"":Number(t.target.value))});case"textarea":return r.jsx("textarea",{id:`jsr-${e.name}`,className:"w-full rounded-md border border-border bg-white px-2 py-1 text-sm disabled:opacity-50 disabled:cursor-not-allowed",placeholder:e.placeholder,rows:3,value:String(a??""),disabled:n,onChange:t=>s(t.target.value)});case"boolean":return r.jsxs("label",{className:"flex items-center gap-2 text-sm",children:[r.jsx("input",{type:"checkbox",checked:!!a,disabled:n,onChange:t=>s(t.target.checked)})," ",e.placeholder??"是"]});case"select":return r.jsxs("select",{id:`jsr-${e.name}`,className:o,value:String(a??""),disabled:n,onChange:t=>s(t.target.value),children:[r.jsx("option",{value:"",children:e.placeholder??"请选择"}),(m=e.options)==null?void 0:m.map(t=>r.jsx("option",{value:t.value,children:t.label},t.value))]});case"multi-select":return r.jsx("div",{className:"flex flex-col gap-1",children:(u=e.options)==null?void 0:u.map(t=>{const V=Array.isArray(a)?a.includes(t.value):!1;return r.jsxs("label",{className:"flex items-center gap-2 text-sm",children:[r.jsx("input",{type:"checkbox",checked:V,disabled:n,onChange:$=>{const c=Array.isArray(a)?[...a]:[];if($.target.checked)c.push(t.value);else{const h=c.indexOf(t.value);h>-1&&c.splice(h,1)}s(c)}}),t.label]},t.value)})});case"date":return r.jsx("input",{id:`jsr-${e.name}`,type:"date",className:o,value:String(a??""),disabled:n,onChange:t=>s(t.target.value)});default:return null}}R.displayName="JsonSchemaRender";R.__docgenInfo={description:"",methods:[],displayName:"JsonSchemaRender",props:{schema:{required:!0,tsType:{name:"Array",elements:[{name:"SchemaField"}],raw:"SchemaField[]"},description:"JSON Schema 字段定义数组"},initialValues:{required:!1,tsType:{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>"},description:"表单初始值"},onSubmit:{required:!1,tsType:{name:"signature",type:"function",raw:"(values: Record<string, unknown>) => void",signature:{arguments:[{type:{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>"},name:"values"}],return:{name:"void"}}},description:"表单提交回调"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(values: Record<string, unknown>) => void",signature:{arguments:[{type:{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>"},name:"values"}],return:{name:"void"}}},description:"值变化回调"},submitText:{required:!1,tsType:{name:"string"},description:"提交按钮文本，默认 '提交'"},showReset:{required:!1,tsType:{name:"boolean"},description:"是否显示重置按钮，默认 true"},resetText:{required:!1,tsType:{name:"string"},description:"重置按钮文本，默认 '重置'"},layout:{required:!1,tsType:{name:"union",raw:"'vertical' | 'horizontal'",elements:[{name:"literal",value:"'vertical'"},{name:"literal",value:"'horizontal'"}]},description:"布局模式，默认 'vertical'"}},composes:["Omit","VariantProps"]};const ye={title:"表单/JsonSchemaRender JSON 表单渲染器",component:R,tags:["autodocs"],parameters:{layout:"fullscreen"},argTypes:{layout:{control:"select",options:["vertical","horizontal"],description:"布局模式"},submitText:{control:"text",description:"提交按钮文本"},showReset:{control:"boolean",description:"是否显示重置按钮"}}},k=[{name:"name",label:"姓名",type:"string",required:!0,placeholder:"请输入姓名"},{name:"age",label:"年龄",type:"number",required:!0,min:0,max:150,placeholder:"请输入年龄"},{name:"gender",label:"性别",type:"select",options:[{label:"男",value:"male"},{label:"女",value:"female"}],placeholder:"请选择性别"},{name:"bio",label:"简介",type:"textarea",placeholder:"请输入简介",max:200},{name:"birthday",label:"生日",type:"date"},{name:"agree",label:"同意协议",type:"boolean",required:!0}],x={args:{schema:k}},y={args:{schema:k,layout:"horizontal"}},v={args:{schema:[{name:"email",label:"邮箱",type:"string",required:!0,pattern:"^[\\w.-]+@[\\w.-]+\\.\\w+$",patternMessage:"请输入有效的邮箱地址",placeholder:"example@mail.com"},{name:"phone",label:"手机号",type:"string",required:!0,pattern:"^1[3-9]\\d{9}$",patternMessage:"请输入有效的手机号",placeholder:"请输入手机号"},{name:"score",label:"分数",type:"number",min:0,max:100,placeholder:"0-100"}]}},S={args:{schema:[{name:"hobbies",label:"爱好",type:"multi-select",options:[{label:"阅读",value:"reading"},{label:"运动",value:"sports"},{label:"音乐",value:"music"},{label:"旅行",value:"travel"}],placeholder:"请选择爱好"},{name:"city",label:"城市",type:"select",options:[{label:"北京",value:"bj"},{label:"上海",value:"sh"},{label:"广州",value:"gz"}],placeholder:"请选择城市"}]}},w={args:{schema:k,initialValues:{name:"张三",age:25,gender:"male",agree:!0}}},f={args:{schema:[{name:"readonly_field",label:"只读字段",type:"string",disabled:!0,defaultValue:"不可编辑"},{name:"editable_field",label:"可编辑字段",type:"string",placeholder:"可编辑"}]}},j={render:()=>{const e=()=>{const[a,s]=i.useState(null);return r.jsxs("div",{className:"max-w-md",children:[r.jsx(R,{schema:k,onSubmit:n=>s(n)}),a&&r.jsx("pre",{className:"mt-4 rounded bg-muted p-2 text-xs max-h-40 overflow-auto",children:JSON.stringify(a,null,2)})]})};return r.jsx(e,{})}};var _,z,H;x.parameters={...x.parameters,docs:{...(_=x.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    schema: BASIC_SCHEMA
  }
}`,...(H=(z=x.parameters)==null?void 0:z.docs)==null?void 0:H.source}}};var I,J,D;y.parameters={...y.parameters,docs:{...(I=y.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    schema: BASIC_SCHEMA,
    layout: 'horizontal'
  }
}`,...(D=(J=y.parameters)==null?void 0:J.docs)==null?void 0:D.source}}};var O,B,F;v.parameters={...v.parameters,docs:{...(O=v.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    schema: [{
      name: 'email',
      label: '邮箱',
      type: 'string',
      required: true,
      pattern: '^[\\\\w.-]+@[\\\\w.-]+\\\\.\\\\w+$',
      patternMessage: '请输入有效的邮箱地址',
      placeholder: 'example@mail.com'
    }, {
      name: 'phone',
      label: '手机号',
      type: 'string',
      required: true,
      pattern: '^1[3-9]\\\\d{9}$',
      patternMessage: '请输入有效的手机号',
      placeholder: '请输入手机号'
    }, {
      name: 'score',
      label: '分数',
      type: 'number',
      min: 0,
      max: 100,
      placeholder: '0-100'
    }]
  }
}`,...(F=(B=v.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var W,L,P;S.parameters={...S.parameters,docs:{...(W=S.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    schema: [{
      name: 'hobbies',
      label: '爱好',
      type: 'multi-select',
      options: [{
        label: '阅读',
        value: 'reading'
      }, {
        label: '运动',
        value: 'sports'
      }, {
        label: '音乐',
        value: 'music'
      }, {
        label: '旅行',
        value: 'travel'
      }],
      placeholder: '请选择爱好'
    }, {
      name: 'city',
      label: '城市',
      type: 'select',
      options: [{
        label: '北京',
        value: 'bj'
      }, {
        label: '上海',
        value: 'sh'
      }, {
        label: '广州',
        value: 'gz'
      }],
      placeholder: '请选择城市'
    }]
  }
}`,...(P=(L=S.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};var G,K,Q;w.parameters={...w.parameters,docs:{...(G=w.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    schema: BASIC_SCHEMA,
    initialValues: {
      name: '张三',
      age: 25,
      gender: 'male',
      agree: true
    }
  }
}`,...(Q=(K=w.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,X,Y;f.parameters={...f.parameters,docs:{...(U=f.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    schema: [{
      name: 'readonly_field',
      label: '只读字段',
      type: 'string',
      disabled: true,
      defaultValue: '不可编辑'
    }, {
      name: 'editable_field',
      label: '可编辑字段',
      type: 'string',
      placeholder: '可编辑'
    }]
  }
}`,...(Y=(X=f.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ae;j.parameters={...j.parameters,docs:{...(Z=j.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => {
    const SubmitDemo = () => {
      const [result, setResult] = useState<Record<string, unknown> | null>(null);
      return <div className="max-w-md">
          <JsonSchemaRender schema={BASIC_SCHEMA} onSubmit={vals => setResult(vals)} />
          {result && <pre className="mt-4 rounded bg-muted p-2 text-xs max-h-40 overflow-auto">
              {JSON.stringify(result, null, 2)}
            </pre>}
        </div>;
    };
    return <SubmitDemo />;
  }
}`,...(ae=(ee=j.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};const ve=["Default","HorizontalLayout","WithValidation","MultiSelect","WithInitialValues","DisabledFields","SubmitHandler"];export{x as Default,f as DisabledFields,y as HorizontalLayout,S as MultiSelect,j as SubmitHandler,w as WithInitialValues,v as WithValidation,ve as __namedExportsOrder,ye as default};
