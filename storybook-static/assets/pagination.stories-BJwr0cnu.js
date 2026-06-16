import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as I}from"./index-GiUgBvb1.js";import{fn as K}from"./index-DeN4tkzB.js";import{P as d}from"./index-DxlAc9Gc.js";import"./utils-BEhiKRD9.js";import"./index-C08JwjkN.js";import"./chevron-left-08BNpNZ8.js";import"./createLucideIcon-CZe00VV7.js";import"./chevron-right-V463yFHa.js";const te={title:"导航/Pagination 分页",component:d,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`采用分页的形式分隔长列表，每次只加载一页数据。

- 数据列表：用于表格、列表等大量数据的分页展示。
- 快速跳转：支持输入页码直接跳转，提升浏览效率。
- 条数调整：支持切换每页显示条数，灵活控制数据加载量。`}}},argTypes:{total:{control:"number",description:"数据总数，用于计算总页数"},pageSize:{control:"number",description:"每页条数，受控模式下必须提供"},current:{control:"number",description:"当前页码，从 1 开始计数，受控模式下必须提供"},showSizeChanger:{control:"boolean",description:"是否显示每页条数切换器，默认 false"},showQuickJumper:{control:"boolean",description:"是否显示快速跳转输入框，默认 false"},disabled:{control:"boolean",description:"是否禁用分页，默认 false"},simple:{control:"boolean",description:"是否使用简洁模式，只显示当前页和总页数，默认 false"}}},t={args:{total:100,defaultCurrent:1}},a={args:{total:500,defaultCurrent:1,showSizeChanger:!0,pageSizeOptions:[10,20,50,100]}},s={args:{total:200,defaultCurrent:5,showQuickJumper:!0}},o={args:{total:150,defaultCurrent:3,showTotal:!0}},n={args:{total:500,defaultCurrent:5,pageSize:20,showSizeChanger:!0,showQuickJumper:!0,showTotal:!0}},c={args:{total:30,defaultCurrent:1,pageSize:10}},u={args:{total:100,defaultCurrent:5,disabled:!0}},i={args:{total:100,defaultCurrent:5,simple:!0}},l={parameters:{docs:{description:{story:"受控模式的分页，通过外部状态管理当前页码，可与其他数据展示组件联动。"}}},render:()=>{const[r,G]=I.useState(1);return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("p",{children:["当前页：",r]}),e.jsx(d,{current:r,total:100,onChange:H=>G(H)})]})}},p={parameters:{docs:{description:{story:"带切换回调的分页示例，切换页码时可在 Actions 面板查看触发事件。"}}},render:()=>{const r=K();return e.jsxs("div",{className:"space-y-4",children:[e.jsx(d,{total:200,defaultCurrent:1,onChange:r}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"切换页码时查看 Actions 面板"})]})}};var m,g,h;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    total: 100,
    defaultCurrent: 1
  }
}`,...(h=(g=t.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var C,f,S;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    total: 500,
    defaultCurrent: 1,
    showSizeChanger: true,
    pageSizeOptions: [10, 20, 50, 100]
  }
}`,...(S=(f=a.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var x,w,z;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    total: 200,
    defaultCurrent: 5,
    showQuickJumper: true
  }
}`,...(z=(w=s.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};var b,y,T;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    total: 150,
    defaultCurrent: 3,
    showTotal: true
  }
}`,...(T=(y=o.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};var j,W,k;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    total: 500,
    defaultCurrent: 5,
    pageSize: 20,
    showSizeChanger: true,
    showQuickJumper: true,
    showTotal: true
  }
}`,...(k=(W=n.parameters)==null?void 0:W.docs)==null?void 0:k.source}}};var J,P,Q;c.parameters={...c.parameters,docs:{...(J=c.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    total: 30,
    defaultCurrent: 1,
    pageSize: 10
  }
}`,...(Q=(P=c.parameters)==null?void 0:P.docs)==null?void 0:Q.source}}};var v,A,N;u.parameters={...u.parameters,docs:{...(v=u.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    total: 100,
    defaultCurrent: 5,
    disabled: true
  }
}`,...(N=(A=u.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};var O,D,E;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    total: 100,
    defaultCurrent: 5,
    simple: true
  }
}`,...(E=(D=i.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var F,M,_;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '受控模式的分页，通过外部状态管理当前页码，可与其他数据展示组件联动。'
      }
    }
  },
  render: () => {
    const [current, setCurrent] = useState(1);
    return <div className="space-y-4">
        <p>当前页：{current}</p>
        <Pagination current={current} total={100} onChange={page => setCurrent(page)} />
      </div>;
  }
}`,...(_=(M=l.parameters)==null?void 0:M.docs)==null?void 0:_.source}}};var R,q,B;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '带切换回调的分页示例，切换页码时可在 Actions 面板查看触发事件。'
      }
    }
  },
  render: () => {
    const handleChange = fn();
    return <div className="space-y-4">
        <Pagination total={200} defaultCurrent={1} onChange={handleChange} />
        <p className="text-sm text-muted-foreground">切换页码时查看 Actions 面板</p>
      </div>;
  }
}`,...(B=(q=p.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};const ae=["Default","WithPageSizeChanger","WithQuickJumper","WithTotal","AllFeatures","SmallTotal","Disabled","SimpleMode","Controlled","WithOnChange"];export{n as AllFeatures,l as Controlled,t as Default,u as Disabled,i as SimpleMode,c as SmallTotal,p as WithOnChange,a as WithPageSizeChanger,s as WithQuickJumper,o as WithTotal,ae as __namedExportsOrder,te as default};
