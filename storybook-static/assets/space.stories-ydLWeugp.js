import{j as e}from"./jsx-runtime-CDt2p4po.js";import{S as s}from"./index-CufUwuO2.js";import"./index-GiUgBvb1.js";import"./utils-BEhiKRD9.js";import"./index-C08JwjkN.js";const _={title:"布局/Space 间距",component:s,tags:["autodocs"],parameters:{layout:"padded"},argTypes:{direction:{control:"select",options:["horizontal","vertical"],description:"间距方向，默认 horizontal"},componentSize:{control:"select",options:["small","middle","large"],description:"间距大小，small=8px middle=16px large=24px，默认 small"},align:{control:"select",options:["start","end","center","baseline"],description:"对齐方式，默认 center"},wrap:{control:"boolean",description:"是否自动换行（仅 horizontal 有效），默认 false"},split:{control:!1,description:"分隔符，传入 ReactNode 作为子元素之间的分隔内容"}}},a={render:()=>e.jsxs(s,{children:[e.jsx("span",{children:"项目 1"}),e.jsx("span",{children:"项目 2"}),e.jsx("span",{children:"项目 3"})]})},r={render:()=>e.jsxs(s,{direction:"vertical",children:[e.jsx("span",{children:"行 1"}),e.jsx("span",{children:"行 2"}),e.jsx("span",{children:"行 3"})]})},n={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs(s,{componentSize:"small",children:[e.jsx("span",{children:"A"}),e.jsx("span",{children:"B"}),e.jsx("span",{children:"C"})]}),e.jsxs(s,{componentSize:"middle",children:[e.jsx("span",{children:"A"}),e.jsx("span",{children:"B"}),e.jsx("span",{children:"C"})]}),e.jsxs(s,{componentSize:"large",children:[e.jsx("span",{children:"A"}),e.jsx("span",{children:"B"}),e.jsx("span",{children:"C"})]})]})},p={render:()=>e.jsxs(s,{split:e.jsx("span",{className:"text-gray-300",children:"|"}),children:[e.jsx("a",{className:"cursor-pointer",children:"首页"}),e.jsx("a",{className:"cursor-pointer",children:"产品"}),e.jsx("a",{className:"cursor-pointer",children:"关于"})]})},c={render:()=>e.jsx(s,{wrap:!0,children:Array.from({length:12},(A,o)=>e.jsxs("span",{className:"px-2 py-1 bg-gray-100 rounded",children:["项目 ",o+1]},o))})};var i,t,l;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <Space>
      <span>项目 1</span>
      <span>项目 2</span>
      <span>项目 3</span>
    </Space>
}`,...(l=(t=a.parameters)==null?void 0:t.docs)==null?void 0:l.source}}};var d,m,x;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <Space direction="vertical">
      <span>行 1</span>
      <span>行 2</span>
      <span>行 3</span>
    </Space>
}`,...(x=(m=r.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};var h,S,j;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <Space componentSize="small"><span>A</span><span>B</span><span>C</span></Space>
      <Space componentSize="middle"><span>A</span><span>B</span><span>C</span></Space>
      <Space componentSize="large"><span>A</span><span>B</span><span>C</span></Space>
    </div>
}`,...(j=(S=n.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var u,g,z;p.parameters={...p.parameters,docs:{...(u=p.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <Space split={<span className="text-gray-300">|</span>}>
      <a className="cursor-pointer">首页</a>
      <a className="cursor-pointer">产品</a>
      <a className="cursor-pointer">关于</a>
    </Space>
}`,...(z=(g=p.parameters)==null?void 0:g.docs)==null?void 0:z.source}}};var N,f,y;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <Space wrap>
      {Array.from({
      length: 12
    }, (_, i) => <span key={i} className="px-2 py-1 bg-gray-100 rounded">项目 {i + 1}</span>)}
    </Space>
}`,...(y=(f=c.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const w=["Horizontal","Vertical","Sizes","WithSplit","Wrapping"];export{a as Horizontal,n as Sizes,r as Vertical,p as WithSplit,c as Wrapping,w as __namedExportsOrder,_ as default};
