import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as R}from"./index-GiUgBvb1.js";import{a as C}from"./utils-BEhiKRD9.js";const E={"flex-start":"justify-start",center:"justify-center","flex-end":"justify-end","space-between":"justify-between","space-around":"justify-around","space-evenly":"justify-evenly"},k={"flex-start":"items-start",center:"items-center","flex-end":"items-end",stretch:"items-stretch",baseline:"items-baseline"},B={wrap:"flex-wrap",nowrap:"flex-nowrap","wrap-reverse":"flex-wrap-reverse"},r=R.forwardRef(({vertical:c=!1,justify:a="flex-start",align:N="flex-start",wrap:T="nowrap",gap:q,children:V,className:_,...A},M)=>e.jsx("div",{ref:M,className:C("flex",c?"flex-col":"flex-row",E[a],k[N],B[T],q,_),...A,children:V}));r.displayName="Flex";r.__docgenInfo={description:`Flex 弹性布局组件

基于 CSS Flexbox 的容器组件，用于快速构建灵活的布局。

### 何时使用
- 需要在不同方向上排列子元素
- 需要对齐和分布子元素
- 需要响应式布局

### 示例
\`\`\`tsx
<Flex justify="space-between" align="center" gap="gap-4">
  <div>左侧</div>
  <div>右侧</div>
</Flex>
\`\`\``,methods:[],displayName:"Flex",props:{vertical:{required:!1,tsType:{name:"boolean"},description:"垂直排列。true 时 flexDirection 为 column，默认 false",defaultValue:{value:"false",computed:!1}},justify:{required:!1,tsType:{name:"union",raw:"'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly'",elements:[{name:"literal",value:"'flex-start'"},{name:"literal",value:"'center'"},{name:"literal",value:"'flex-end'"},{name:"literal",value:"'space-between'"},{name:"literal",value:"'space-around'"},{name:"literal",value:"'space-evenly'"}]},description:"主轴对齐方式。对应 Tailwind justify-* 类，默认 'flex-start'",defaultValue:{value:"'flex-start'",computed:!1}},align:{required:!1,tsType:{name:"union",raw:"'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline'",elements:[{name:"literal",value:"'flex-start'"},{name:"literal",value:"'center'"},{name:"literal",value:"'flex-end'"},{name:"literal",value:"'stretch'"},{name:"literal",value:"'baseline'"}]},description:"交叉轴对齐方式。对应 Tailwind items-* 类，默认 'flex-start'",defaultValue:{value:"'flex-start'",computed:!1}},wrap:{required:!1,tsType:{name:"union",raw:"'wrap' | 'nowrap' | 'wrap-reverse'",elements:[{name:"literal",value:"'wrap'"},{name:"literal",value:"'nowrap'"},{name:"literal",value:"'wrap-reverse'"}]},description:"是否自动换行。对应 Tailwind flex-wrap/nowrap/wrap-reverse，默认 'nowrap'",defaultValue:{value:"'nowrap'",computed:!1}},gap:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"项目之间的间距。数字时转换为 px，字符串直接使用，用户也可通过 className 覆盖"},children:{required:!1,tsType:{name:"ReactNode"},description:"子元素"}},composes:["HTMLAttributes"]};const D={title:"布局/Flex 弹性布局",component:r,parameters:{layout:"padded",docs:{description:{component:"基于 CSS Flexbox 的容器组件，用于快速构建灵活的布局。"}}},argTypes:{vertical:{control:"boolean"},justify:{control:"select",options:["flex-start","center","flex-end","space-between","space-around","space-evenly"]},align:{control:"select",options:["flex-start","center","flex-end","stretch","baseline"]},wrap:{control:"select",options:["wrap","nowrap","wrap-reverse"]},gap:{control:"number"}}},t={width:80,height:40,background:"var(--color-primary-500, #3b82f6)",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:4},l={args:{gap:16,children:e.jsxs(e.Fragment,{children:[e.jsx("div",{style:t,children:"1"}),e.jsx("div",{style:t,children:"2"}),e.jsx("div",{style:t,children:"3"})]})}},s={args:{vertical:!0,gap:16,children:e.jsxs(e.Fragment,{children:[e.jsx("div",{style:t,children:"1"}),e.jsx("div",{style:t,children:"2"}),e.jsx("div",{style:t,children:"3"})]})}},n={render:()=>e.jsxs(r,{vertical:!0,gap:24,children:[e.jsxs(r,{justify:"flex-start",gap:8,children:[e.jsx("div",{style:t,children:"1"}),e.jsx("div",{style:t,children:"2"})]}),e.jsxs(r,{justify:"center",gap:8,children:[e.jsx("div",{style:t,children:"1"}),e.jsx("div",{style:t,children:"2"})]}),e.jsxs(r,{justify:"flex-end",gap:8,children:[e.jsx("div",{style:t,children:"1"}),e.jsx("div",{style:t,children:"2"})]}),e.jsxs(r,{justify:"space-between",children:[e.jsx("div",{style:t,children:"1"}),e.jsx("div",{style:t,children:"2"})]})]})},i={render:()=>e.jsxs(r,{gap:24,children:[e.jsx(r,{align:"flex-start",style:{height:100},className:"bg-gray-100",children:e.jsx("div",{style:t,children:"start"})}),e.jsx(r,{align:"center",style:{height:100},className:"bg-gray-100",children:e.jsx("div",{style:t,children:"center"})}),e.jsx(r,{align:"flex-end",style:{height:100},className:"bg-gray-100",children:e.jsx("div",{style:t,children:"end"})})]})},d={render:()=>e.jsx(r,{wrap:"wrap",gap:8,style:{width:200},children:Array.from({length:8}).map((c,a)=>e.jsx("div",{style:{...t,width:60},children:a+1},a))})};var o,p,x;l.parameters={...l.parameters,docs:{...(o=l.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    gap: 16,
    children: <>
        <div style={boxStyle}>1</div>
        <div style={boxStyle}>2</div>
        <div style={boxStyle}>3</div>
      </>
  }
}`,...(x=(p=l.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};var y,u,v;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    vertical: true,
    gap: 16,
    children: <>
        <div style={boxStyle}>1</div>
        <div style={boxStyle}>2</div>
        <div style={boxStyle}>3</div>
      </>
  }
}`,...(v=(u=s.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};var m,f,g;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <Flex vertical gap={24}>
      <Flex justify="flex-start" gap={8}>
        <div style={boxStyle}>1</div>
        <div style={boxStyle}>2</div>
      </Flex>
      <Flex justify="center" gap={8}>
        <div style={boxStyle}>1</div>
        <div style={boxStyle}>2</div>
      </Flex>
      <Flex justify="flex-end" gap={8}>
        <div style={boxStyle}>1</div>
        <div style={boxStyle}>2</div>
      </Flex>
      <Flex justify="space-between">
        <div style={boxStyle}>1</div>
        <div style={boxStyle}>2</div>
      </Flex>
    </Flex>
}`,...(g=(f=n.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var h,j,w;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <Flex gap={24}>
      <Flex align="flex-start" style={{
      height: 100
    }} className="bg-gray-100">
        <div style={boxStyle}>start</div>
      </Flex>
      <Flex align="center" style={{
      height: 100
    }} className="bg-gray-100">
        <div style={boxStyle}>center</div>
      </Flex>
      <Flex align="flex-end" style={{
      height: 100
    }} className="bg-gray-100">
        <div style={boxStyle}>end</div>
      </Flex>
    </Flex>
}`,...(w=(j=i.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var b,F,S;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <Flex wrap="wrap" gap={8} style={{
    width: 200
  }}>
      {Array.from({
      length: 8
    }).map((_, i) => <div key={i} style={{
      ...boxStyle,
      width: 60
    }}>
          {i + 1}
        </div>)}
    </Flex>
}`,...(S=(F=d.parameters)==null?void 0:F.docs)==null?void 0:S.source}}};const H=["Basic","Vertical","Justify","Align","Wrap"];export{i as Align,l as Basic,n as Justify,s as Vertical,d as Wrap,H as __namedExportsOrder,D as default};
