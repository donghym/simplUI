import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as l}from"./index-GiUgBvb1.js";import{a as C}from"./utils-BEhiKRD9.js";import{c as de}from"./index-C08JwjkN.js";const ce=de("",{variants:{type:{secondary:"text-muted-foreground",success:"text-success-500",warning:"text-warning-500",danger:"text-danger-500"}}}),q={1:"text-4xl font-bold leading-tight",2:"text-3xl font-semibold leading-tight",3:"text-2xl font-semibold leading-snug",4:"text-xl font-medium leading-snug",5:"text-lg font-medium leading-normal"},E=l.forwardRef(({type:t,delete:s,underline:n,strong:a,italic:o,mark:d,code:c,keyboard:u,className:m,children:k,...N},i)=>{const ie=c?"code":u?"kbd":s?"del":d?"mark":"span";return l.createElement(ie,{ref:i,className:C("sui-typography-text",ce({type:t}),n&&"underline",a&&"font-bold",o&&"italic",c&&"font-mono bg-muted text-danger-500 px-1 py-0.5 rounded text-sm",u&&"font-mono bg-muted text-foreground px-1 py-0.5 rounded text-xs border border-border",d&&"bg-warning-200 px-0.5",m),...N},k)});E.displayName="Text";const D=l.forwardRef(({level:t=1,className:s,...n},a)=>{const o=`h${t}`;return l.createElement(o,{ref:a,className:C("sui-typography-title",q[t]||q[1],s),...n})});D.displayName="Title";const S=l.forwardRef(({ellipsis:t,className:s,...n},a)=>{const o=t===!0?"overflow-hidden text-ellipsis whitespace-nowrap":typeof t=="number"?"overflow-hidden text-ellipsis":"";return e.jsx("p",{ref:a,className:C("sui-typography-paragraph","mb-4 text-base leading-relaxed",o,typeof t=="number"?`[display:-webkit-box] [-webkit-line-clamp:${t}] [-webkit-box-orient:vertical]`:"",s),...n})});S.displayName="Paragraph";const pe={Text:E,Title:D,Paragraph:S};E.__docgenInfo={description:`Text 行内文本

支持 4 种文本类型（secondary/success/warning/danger）及 6 种内联样式。
根据内联样式动态渲染不同 HTML 标签：code -> <code>, keyboard -> <kbd>, delete -> <del>, mark -> <mark>, 默认 -> <span>`,methods:[],displayName:"Text",props:{type:{required:!1,tsType:{name:"union",raw:"'secondary' | 'success' | 'warning' | 'danger'",elements:[{name:"literal",value:"'secondary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'danger'"}]},description:"文本类型，控制颜色，默认不传为默认文字颜色"},delete:{required:!1,tsType:{name:"boolean"},description:"删除线样式"},underline:{required:!1,tsType:{name:"boolean"},description:"下划线样式"},strong:{required:!1,tsType:{name:"boolean"},description:"加粗"},italic:{required:!1,tsType:{name:"boolean"},description:"斜体"},mark:{required:!1,tsType:{name:"boolean"},description:"标记样式（黄色背景）"},code:{required:!1,tsType:{name:"boolean"},description:"代码样式"},keyboard:{required:!1,tsType:{name:"boolean"},description:"键盘样式"},className:{required:!1,tsType:{name:"string"},description:"自定义类名"}},composes:["HTMLAttributes","VariantProps"]};D.__docgenInfo={description:`Title 标题

对应 h1-h5，不同级别有不同的字号和字重。`,methods:[],displayName:"Title",props:{level:{required:!1,tsType:{name:"union",raw:"1 | 2 | 3 | 4 | 5",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"}]},description:"标题级别，对应 h1-h5，默认 1",defaultValue:{value:"1",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"自定义类名"}},composes:["HTMLAttributes"]};S.__docgenInfo={description:`Paragraph 段落

支持省略号截断。`,methods:[],displayName:"Paragraph",props:{ellipsis:{required:!1,tsType:{name:"union",raw:"boolean | number",elements:[{name:"boolean"},{name:"number"}]},description:"省略号截断，为 true 时单行截断，为数字时多行截断"},className:{required:!1,tsType:{name:"string"},description:"自定义类名"}},composes:["HTMLAttributes"]};const{Text:r,Title:p,Paragraph:P}=pe,fe={title:"通用/Typography 排版",component:r,tags:["autodocs"],parameters:{layout:"padded"},argTypes:{type:{control:"select",options:["default","secondary","success","warning","danger"],description:"文本类型，决定颜色语义"},strong:{control:"boolean",description:"是否加粗"},italic:{control:"boolean",description:"是否斜体"},underline:{control:"boolean",description:"是否下划线"},delete:{control:"boolean",description:"是否删除线"},mark:{control:"boolean",description:"是否标记高亮"},code:{control:"boolean",description:"是否代码样式"},keyboard:{control:"boolean",description:"是否键盘样式"}}},x={render:()=>e.jsx(r,{children:"默认文本"})},g={render:()=>e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(r,{children:"默认文本"}),e.jsx(r,{type:"secondary",children:"次要文本"}),e.jsx(r,{type:"success",children:"成功文本"}),e.jsx(r,{type:"warning",children:"警告文本"}),e.jsx(r,{type:"danger",children:"危险文本"})]})},f={render:()=>e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(r,{strong:!0,children:"加粗文本"}),e.jsx(r,{italic:!0,children:"斜体文本"}),e.jsx(r,{underline:!0,children:"下划线文本"}),e.jsx(r,{delete:!0,children:"删除线文本"}),e.jsx(r,{mark:!0,children:"标记文本"}),e.jsx(r,{code:!0,children:"代码文本"}),e.jsx(r,{keyboard:!0,children:"键盘文本"})]})},h={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(p,{level:1,children:"h1 标题"}),e.jsx(p,{level:2,children:"h2 标题"}),e.jsx(p,{level:3,children:"h3 标题"}),e.jsx(p,{level:4,children:"h4 标题"}),e.jsx(p,{level:5,children:"h5 标题"})]})},T={render:()=>e.jsx(P,{children:"这是一段普通段落文本。用于展示文章内容或说明信息。 段落组件支持自定义样式和省略号截断功能。"})},y={render:()=>e.jsx("div",{className:"w-full max-w-[300px]",children:e.jsx(P,{ellipsis:!0,children:"这是一段很长的文本，超出容器宽度时会显示省略号截断。"})})},b={render:()=>e.jsx("div",{className:"w-full max-w-[300px]",children:e.jsx(P,{ellipsis:2,children:"这是一段很长的文本，支持多行截断。当文本超过指定行数时会显示省略号。 这里继续添加更多文字以确保内容足够长来触发截断效果。"})})},v={args:{children:"可交互文本",type:void 0,strong:!1,italic:!1,underline:!1,delete:!1,mark:!1,code:!1},argTypes:{type:{control:"select",options:[void 0,"secondary","success","warning","danger"]},strong:{control:"boolean"},italic:{control:"boolean"},underline:{control:"boolean"},delete:{control:"boolean"},mark:{control:"boolean"},code:{control:"boolean"}},render:t=>e.jsx(r,{...t})},w={render:()=>{const t=()=>{const[s,n]=l.useState(!1),a="这是一段可复制的文本内容",o=()=>{navigator.clipboard.writeText(a).then(()=>{n(!0),setTimeout(()=>n(!1),2e3)})};return e.jsxs("div",{className:"inline-flex items-center gap-2",children:[e.jsx(r,{children:a}),e.jsx("button",{type:"button",onClick:o,className:"rounded px-2 py-0.5 text-xs border border-border hover:bg-muted transition-colors",children:s?"已复制":"复制"})]})};return e.jsx(t,{})}},j={render:()=>{const t=()=>{const[s,n]=l.useState(!1),[a,o]=l.useState("双击编辑此文本"),[d,c]=l.useState(""),u=()=>{c(a),n(!0)},m=()=>{o(d),n(!1)},k=()=>{n(!1)},N=i=>{i.key==="Enter"&&m(),i.key==="Escape"&&k()};return s?e.jsx("input",{autoFocus:!0,value:d,onChange:i=>c(i.target.value),onKeyDown:N,onBlur:m,className:"rounded border border-primary-500 px-2 py-0.5 text-sm outline-none"}):e.jsx(r,{onDoubleClick:u,className:"cursor-text",children:a})};return e.jsx(t,{})}};var L,_,I;x.parameters={...x.parameters,docs:{...(L=x.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <Text>默认文本</Text>
}`,...(I=(_=x.parameters)==null?void 0:_.docs)==null?void 0:I.source}}};var M,K,H;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-2">
      <Text>默认文本</Text>
      <Text type="secondary">次要文本</Text>
      <Text type="success">成功文本</Text>
      <Text type="warning">警告文本</Text>
      <Text type="danger">危险文本</Text>
    </div>
}`,...(H=(K=g.parameters)==null?void 0:K.docs)==null?void 0:H.source}}};var R,$,A;f.parameters={...f.parameters,docs:{...(R=f.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-2">
      <Text strong>加粗文本</Text>
      <Text italic>斜体文本</Text>
      <Text underline>下划线文本</Text>
      <Text delete>删除线文本</Text>
      <Text mark>标记文本</Text>
      <Text code>代码文本</Text>
      <Text keyboard>键盘文本</Text>
    </div>
}`,...(A=($=f.parameters)==null?void 0:$.docs)==null?void 0:A.source}}};var V,B,F;h.parameters={...h.parameters,docs:{...(V=h.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <Title level={1}>h1 标题</Title>
      <Title level={2}>h2 标题</Title>
      <Title level={3}>h3 标题</Title>
      <Title level={4}>h4 标题</Title>
      <Title level={5}>h5 标题</Title>
    </div>
}`,...(F=(B=h.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var O,Z,z;T.parameters={...T.parameters,docs:{...(O=T.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <Paragraph>
      这是一段普通段落文本。用于展示文章内容或说明信息。
      段落组件支持自定义样式和省略号截断功能。
    </Paragraph>
}`,...(z=(Z=T.parameters)==null?void 0:Z.docs)==null?void 0:z.source}}};var G,J,Q;y.parameters={...y.parameters,docs:{...(G=y.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => (/* Truncation width is constrained to demonstrate ellipsis behavior */
  <div className="w-full max-w-[300px]">
      <Paragraph ellipsis>
        这是一段很长的文本，超出容器宽度时会显示省略号截断。
      </Paragraph>
    </div>)
}`,...(Q=(J=y.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var U,W,X;b.parameters={...b.parameters,docs:{...(U=b.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => (/* Truncation width is constrained to demonstrate multi-line ellipsis behavior */
  <div className="w-full max-w-[300px]">
      <Paragraph ellipsis={2}>
        这是一段很长的文本，支持多行截断。当文本超过指定行数时会显示省略号。
        这里继续添加更多文字以确保内容足够长来触发截断效果。
      </Paragraph>
    </div>)
}`,...(X=(W=b.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Y,ee,re;v.parameters={...v.parameters,docs:{...(Y=v.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    children: '可交互文本',
    type: undefined,
    strong: false,
    italic: false,
    underline: false,
    delete: false,
    mark: false,
    code: false
  },
  argTypes: {
    type: {
      control: 'select',
      options: [undefined, 'secondary', 'success', 'warning', 'danger']
    },
    strong: {
      control: 'boolean'
    },
    italic: {
      control: 'boolean'
    },
    underline: {
      control: 'boolean'
    },
    delete: {
      control: 'boolean'
    },
    mark: {
      control: 'boolean'
    },
    code: {
      control: 'boolean'
    }
  },
  render: args => <Text {...args} />
}`,...(re=(ee=v.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var te,ne,ae;w.parameters={...w.parameters,docs:{...(te=w.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => {
    const CopyableDemo = () => {
      const [copied, setCopied] = useState(false);
      const text = '这是一段可复制的文本内容';
      const handleCopy = () => {
        navigator.clipboard.writeText(text).then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        });
      };
      return <div className="inline-flex items-center gap-2">
          <Text>{text}</Text>
          <button type="button" onClick={handleCopy} className="rounded px-2 py-0.5 text-xs border border-border hover:bg-muted transition-colors">
            {copied ? '已复制' : '复制'}
          </button>
        </div>;
    };
    return <CopyableDemo />;
  }
}`,...(ae=(ne=w.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var se,oe,le;j.parameters={...j.parameters,docs:{...(se=j.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => {
    const EditableDemo = () => {
      const [editing, setEditing] = useState(false);
      const [text, setText] = useState('双击编辑此文本');
      const [draft, setDraft] = useState('');
      const handleDoubleClick = () => {
        setDraft(text);
        setEditing(true);
      };
      const handleConfirm = () => {
        setText(draft);
        setEditing(false);
      };
      const handleCancel = () => {
        setEditing(false);
      };
      const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') handleConfirm();
        if (e.key === 'Escape') handleCancel();
      };
      if (editing) {
        return <input autoFocus value={draft} onChange={e => setDraft(e.target.value)} onKeyDown={handleKeyDown} onBlur={handleConfirm} className="rounded border border-primary-500 px-2 py-0.5 text-sm outline-none" />;
      }
      return <Text onDoubleClick={handleDoubleClick} className="cursor-text">
          {text}
        </Text>;
    };
    return <EditableDemo />;
  }
}`,...(le=(oe=j.parameters)==null?void 0:oe.docs)==null?void 0:le.source}}};const he=["Default","TextTypes","TextStyles","TitleLevels","ParagraphDefault","ParagraphEllipsis","ParagraphMultiLineEllipsis","InteractiveText","CopyableText","EditableText"];export{w as CopyableText,x as Default,j as EditableText,v as InteractiveText,T as ParagraphDefault,y as ParagraphEllipsis,b as ParagraphMultiLineEllipsis,f as TextStyles,g as TextTypes,h as TitleLevels,he as __namedExportsOrder,fe as default};
