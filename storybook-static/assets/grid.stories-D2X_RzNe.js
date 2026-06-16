import{j as s}from"./jsx-runtime-CDt2p4po.js";import{R as n,C as o}from"./index-DRqjia59.js";import"./index-GiUgBvb1.js";import"./utils-BEhiKRD9.js";const W={title:"布局/Grid 栅格",component:n,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`24 栅格系统，用于页面元素的响应式布局与对齐。

- 等分排列：将内容按 24 列等分进行横向排列，如表单、卡片列表。
- 偏移与排序：通过偏移量调整列位置，或改变列的渲染顺序。
- 响应式适配：支持 xs、sm、md、lg、xl 等断点，实现多端自适应布局。`}}}},e=({children:j})=>s.jsx("div",{className:"bg-primary-50 border border-primary-200 rounded px-4 py-3 text-center text-primary-700 text-sm",children:j}),l={parameters:{docs:{description:{story:"基础栅格排列，将一行均分为两列，每列占据 12 格。"}}},render:()=>s.jsxs(n,{gutter:16,children:[s.jsx(o,{span:12,children:s.jsx(e,{children:"列-12"})}),s.jsx(o,{span:12,children:s.jsx(e,{children:"列-12"})})]})},x={render:()=>s.jsxs("div",{className:"flex flex-col gap-4",children:[s.jsxs(n,{gutter:16,children:[s.jsx(o,{span:6,children:s.jsx(e,{children:"列-6"})}),s.jsx(o,{span:6,children:s.jsx(e,{children:"列-6"})}),s.jsx(o,{span:6,children:s.jsx(e,{children:"列-6"})}),s.jsx(o,{span:6,children:s.jsx(e,{children:"列-6"})})]}),s.jsxs(n,{gutter:[16,16],children:[s.jsx(o,{span:6,children:s.jsx(e,{children:"列-6"})}),s.jsx(o,{span:6,children:s.jsx(e,{children:"列-6"})}),s.jsx(o,{span:6,children:s.jsx(e,{children:"列-6"})}),s.jsx(o,{span:6,children:s.jsx(e,{children:"列-6"})}),s.jsx(o,{span:6,children:s.jsx(e,{children:"列-6"})}),s.jsx(o,{span:6,children:s.jsx(e,{children:"列-6"})}),s.jsx(o,{span:6,children:s.jsx(e,{children:"列-6"})}),s.jsx(o,{span:6,children:s.jsx(e,{children:"列-6"})})]})]})},a={parameters:{docs:{description:{story:"使用 offset 属性设置列的偏移量，实现非对称布局或留白效果。"}}},render:()=>s.jsxs("div",{className:"flex flex-col gap-4",children:[s.jsxs(n,{gutter:16,children:[s.jsx(o,{span:8,children:s.jsx(e,{children:"列-8"})}),s.jsx(o,{span:8,offset:8,children:s.jsx(e,{children:"列-8 偏移-8"})})]}),s.jsxs(n,{gutter:16,children:[s.jsx(o,{span:6,offset:6,children:s.jsx(e,{children:"列-6 偏移-6"})}),s.jsx(o,{span:6,offset:6,children:s.jsx(e,{children:"列-6 偏移-6"})})]}),s.jsx(n,{gutter:16,children:s.jsx(o,{span:12,offset:6,children:s.jsx(e,{children:"列-12 偏移-6"})})})]})},d={render:()=>s.jsxs(n,{gutter:16,children:[s.jsx(o,{span:18,order:2,children:s.jsx(e,{children:"列-18 顺序-2"})}),s.jsx(o,{span:6,order:1,children:s.jsx(e,{children:"列-6 顺序-1"})})]})},c={parameters:{docs:{description:{story:"通过 justify 属性设置列在水平方向上的对齐方式，如起始、居中、两端对齐等。"}}},render:()=>s.jsxs("div",{className:"flex flex-col gap-4",children:[s.jsxs(n,{justify:"start",gutter:8,children:[s.jsx(o,{span:4,children:s.jsx(e,{children:"起始"})}),s.jsx(o,{span:4,children:s.jsx(e,{children:"起始"})}),s.jsx(o,{span:4,children:s.jsx(e,{children:"起始"})})]}),s.jsxs(n,{justify:"center",gutter:8,children:[s.jsx(o,{span:4,children:s.jsx(e,{children:"居中"})}),s.jsx(o,{span:4,children:s.jsx(e,{children:"居中"})}),s.jsx(o,{span:4,children:s.jsx(e,{children:"居中"})})]}),s.jsxs(n,{justify:"end",gutter:8,children:[s.jsx(o,{span:4,children:s.jsx(e,{children:"末尾"})}),s.jsx(o,{span:4,children:s.jsx(e,{children:"末尾"})}),s.jsx(o,{span:4,children:s.jsx(e,{children:"末尾"})})]}),s.jsxs(n,{justify:"space-between",gutter:8,children:[s.jsx(o,{span:4,children:s.jsx(e,{children:"两端"})}),s.jsx(o,{span:4,children:s.jsx(e,{children:"两端"})}),s.jsx(o,{span:4,children:s.jsx(e,{children:"两端"})})]}),s.jsxs(n,{justify:"space-around",gutter:8,children:[s.jsx(o,{span:4,children:s.jsx(e,{children:"环绕"})}),s.jsx(o,{span:4,children:s.jsx(e,{children:"环绕"})}),s.jsx(o,{span:4,children:s.jsx(e,{children:"环绕"})})]})]})},i={parameters:{docs:{description:{story:"通过 align 属性设置列在垂直方向上的对齐方式，如顶部、居中、底部对齐。"}}},render:()=>s.jsxs("div",{className:"flex flex-col gap-4",children:[s.jsxs(n,{justify:"center",align:"top",className:"bg-gray-100 h-20",gutter:8,children:[s.jsx(o,{span:4,children:s.jsx(e,{children:"顶部"})}),s.jsx(o,{span:4,children:s.jsx(e,{children:"顶部"})}),s.jsx(o,{span:4,children:s.jsx(e,{children:"顶部"})})]}),s.jsxs(n,{justify:"center",align:"middle",className:"bg-gray-100 h-20",gutter:8,children:[s.jsx(o,{span:4,children:s.jsx(e,{children:"居中"})}),s.jsx(o,{span:4,children:s.jsx(e,{children:"居中"})}),s.jsx(o,{span:4,children:s.jsx(e,{children:"居中"})})]}),s.jsxs(n,{justify:"center",align:"bottom",className:"bg-gray-100 h-20",gutter:8,children:[s.jsx(o,{span:4,children:s.jsx(e,{children:"底部"})}),s.jsx(o,{span:4,children:s.jsx(e,{children:"底部"})}),s.jsx(o,{span:4,children:s.jsx(e,{children:"底部"})})]})]})},t={render:()=>s.jsxs(n,{gutter:[16,16],children:[s.jsx(o,{xs:24,sm:12,md:8,lg:6,xl:4,children:s.jsx(e,{children:"列"})}),s.jsx(o,{xs:24,sm:12,md:8,lg:6,xl:4,children:s.jsx(e,{children:"列"})}),s.jsx(o,{xs:24,sm:12,md:8,lg:6,xl:4,children:s.jsx(e,{children:"列"})}),s.jsx(o,{xs:24,sm:12,md:8,lg:6,xl:4,children:s.jsx(e,{children:"列"})}),s.jsx(o,{xs:24,sm:12,md:8,lg:6,xl:4,children:s.jsx(e,{children:"列"})}),s.jsx(o,{xs:24,sm:12,md:8,lg:6,xl:4,children:s.jsx(e,{children:"列"})})]})},p={parameters:{docs:{description:{story:"对象形式的响应式配置，可更精细地控制每个断点下的 span 值。"}}},render:()=>s.jsxs(n,{gutter:[16,16],children:[s.jsx(o,{xs:{span:24},sm:{span:12},md:{span:8},children:s.jsx(e,{children:"列"})}),s.jsx(o,{xs:{span:24},sm:{span:12},md:{span:8},children:s.jsx(e,{children:"列"})}),s.jsx(o,{xs:{span:24},sm:{span:12},md:{span:8},children:s.jsx(e,{children:"列"})}),s.jsx(o,{xs:{span:24},sm:{span:12},md:{span:8},children:s.jsx(e,{children:"列"})}),s.jsx(o,{xs:{span:24},sm:{span:12},md:{span:8},children:s.jsx(e,{children:"列"})}),s.jsx(o,{xs:{span:24},sm:{span:12},md:{span:8},children:s.jsx(e,{children:"列"})})]})},m=({children:j,color:P})=>s.jsx("div",{className:"rounded px-4 py-3 text-center text-white text-sm font-medium",style:{backgroundColor:P},children:j}),r={parameters:{docs:{description:{story:"带颜色区分的响应式栅格示例，直观展示不同断点下的列宽变化。"}}},render:()=>s.jsxs(n,{gutter:[16,16],children:[s.jsx(o,{xs:24,sm:12,md:8,lg:6,children:s.jsx(m,{color:"#6366f1",children:"xs:24 sm:12 md:8 lg:6"})}),s.jsx(o,{xs:24,sm:12,md:8,lg:6,children:s.jsx(m,{color:"#8b5cf6",children:"xs:24 sm:12 md:8 lg:6"})}),s.jsx(o,{xs:24,sm:12,md:8,lg:6,children:s.jsx(m,{color:"#a78bfa",children:"xs:24 sm:12 md:8 lg:6"})}),s.jsx(o,{xs:24,sm:12,md:8,lg:6,children:s.jsx(m,{color:"#c4b5fd",children:"xs:24 sm:12 md:8 lg:6"})})]})};var h,C,B;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '基础栅格排列，将一行均分为两列，每列占据 12 格。'
      }
    }
  },
  render: () => <Row gutter={16}>
      <Col span={12}><Box>列-12</Box></Col>
      <Col span={12}><Box>列-12</Box></Col>
    </Row>
}`,...(B=(C=l.parameters)==null?void 0:C.docs)==null?void 0:B.source}}};var g,u,f;x.parameters={...x.parameters,docs:{...(g=x.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <Row gutter={16}>
        <Col span={6}><Box>列-6</Box></Col>
        <Col span={6}><Box>列-6</Box></Col>
        <Col span={6}><Box>列-6</Box></Col>
        <Col span={6}><Box>列-6</Box></Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col span={6}><Box>列-6</Box></Col>
        <Col span={6}><Box>列-6</Box></Col>
        <Col span={6}><Box>列-6</Box></Col>
        <Col span={6}><Box>列-6</Box></Col>
        <Col span={6}><Box>列-6</Box></Col>
        <Col span={6}><Box>列-6</Box></Col>
        <Col span={6}><Box>列-6</Box></Col>
        <Col span={6}><Box>列-6</Box></Col>
      </Row>
    </div>
}`,...(f=(u=x.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var y,R,w;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '使用 offset 属性设置列的偏移量，实现非对称布局或留白效果。'
      }
    }
  },
  render: () => <div className="flex flex-col gap-4">
      <Row gutter={16}>
        <Col span={8}><Box>列-8</Box></Col>
        <Col span={8} offset={8}><Box>列-8 偏移-8</Box></Col>
      </Row>
      <Row gutter={16}>
        <Col span={6} offset={6}><Box>列-6 偏移-6</Box></Col>
        <Col span={6} offset={6}><Box>列-6 偏移-6</Box></Col>
      </Row>
      <Row gutter={16}>
        <Col span={12} offset={6}><Box>列-12 偏移-6</Box></Col>
      </Row>
    </div>
}`,...(w=(R=a.parameters)==null?void 0:R.docs)==null?void 0:w.source}}};var b,v,N;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <Row gutter={16}>
      <Col span={18} order={2}><Box>列-18 顺序-2</Box></Col>
      <Col span={6} order={1}><Box>列-6 顺序-1</Box></Col>
    </Row>
}`,...(N=(v=d.parameters)==null?void 0:v.docs)==null?void 0:N.source}}};var S,G,O;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '通过 justify 属性设置列在水平方向上的对齐方式，如起始、居中、两端对齐等。'
      }
    }
  },
  render: () => <div className="flex flex-col gap-4">
      <Row justify="start" gutter={8}>
        <Col span={4}><Box>起始</Box></Col>
        <Col span={4}><Box>起始</Box></Col>
        <Col span={4}><Box>起始</Box></Col>
      </Row>
      <Row justify="center" gutter={8}>
        <Col span={4}><Box>居中</Box></Col>
        <Col span={4}><Box>居中</Box></Col>
        <Col span={4}><Box>居中</Box></Col>
      </Row>
      <Row justify="end" gutter={8}>
        <Col span={4}><Box>末尾</Box></Col>
        <Col span={4}><Box>末尾</Box></Col>
        <Col span={4}><Box>末尾</Box></Col>
      </Row>
      <Row justify="space-between" gutter={8}>
        <Col span={4}><Box>两端</Box></Col>
        <Col span={4}><Box>两端</Box></Col>
        <Col span={4}><Box>两端</Box></Col>
      </Row>
      <Row justify="space-around" gutter={8}>
        <Col span={4}><Box>环绕</Box></Col>
        <Col span={4}><Box>环绕</Box></Col>
        <Col span={4}><Box>环绕</Box></Col>
      </Row>
    </div>
}`,...(O=(G=c.parameters)==null?void 0:G.docs)==null?void 0:O.source}}};var A,E,J;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '通过 align 属性设置列在垂直方向上的对齐方式，如顶部、居中、底部对齐。'
      }
    }
  },
  render: () => <div className="flex flex-col gap-4">
      <Row justify="center" align="top" className="bg-gray-100 h-20" gutter={8}>
        <Col span={4}><Box>顶部</Box></Col>
        <Col span={4}><Box>顶部</Box></Col>
        <Col span={4}><Box>顶部</Box></Col>
      </Row>
      <Row justify="center" align="middle" className="bg-gray-100 h-20" gutter={8}>
        <Col span={4}><Box>居中</Box></Col>
        <Col span={4}><Box>居中</Box></Col>
        <Col span={4}><Box>居中</Box></Col>
      </Row>
      <Row justify="center" align="bottom" className="bg-gray-100 h-20" gutter={8}>
        <Col span={4}><Box>底部</Box></Col>
        <Col span={4}><Box>底部</Box></Col>
        <Col span={4}><Box>底部</Box></Col>
      </Row>
    </div>
}`,...(J=(E=i.parameters)==null?void 0:E.docs)==null?void 0:J.source}}};var M,_,k;t.parameters={...t.parameters,docs:{...(M=t.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <Row gutter={[16, 16]}>
      <Col xs={24} sm={12} md={8} lg={6} xl={4}><Box>列</Box></Col>
      <Col xs={24} sm={12} md={8} lg={6} xl={4}><Box>列</Box></Col>
      <Col xs={24} sm={12} md={8} lg={6} xl={4}><Box>列</Box></Col>
      <Col xs={24} sm={12} md={8} lg={6} xl={4}><Box>列</Box></Col>
      <Col xs={24} sm={12} md={8} lg={6} xl={4}><Box>列</Box></Col>
      <Col xs={24} sm={12} md={8} lg={6} xl={4}><Box>列</Box></Col>
    </Row>
}`,...(k=(_=t.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};var q,z,D;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '对象形式的响应式配置，可更精细地控制每个断点下的 span 值。'
      }
    }
  },
  render: () => <Row gutter={[16, 16]}>
      <Col xs={{
      span: 24
    }} sm={{
      span: 12
    }} md={{
      span: 8
    }}><Box>列</Box></Col>
      <Col xs={{
      span: 24
    }} sm={{
      span: 12
    }} md={{
      span: 8
    }}><Box>列</Box></Col>
      <Col xs={{
      span: 24
    }} sm={{
      span: 12
    }} md={{
      span: 8
    }}><Box>列</Box></Col>
      <Col xs={{
      span: 24
    }} sm={{
      span: 12
    }} md={{
      span: 8
    }}><Box>列</Box></Col>
      <Col xs={{
      span: 24
    }} sm={{
      span: 12
    }} md={{
      span: 8
    }}><Box>列</Box></Col>
      <Col xs={{
      span: 24
    }} sm={{
      span: 12
    }} md={{
      span: 8
    }}><Box>列</Box></Col>
    </Row>
}`,...(D=(z=p.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};var F,H,I,K,L;r.parameters={...r.parameters,docs:{...(F=r.parameters)==null?void 0:F.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '带颜色区分的响应式栅格示例，直观展示不同断点下的列宽变化。'
      }
    }
  },
  render: () => <Row gutter={[16, 16]}>
      <Col xs={24} sm={12} md={8} lg={6}>
        <ColorBox color="#6366f1">xs:24 sm:12 md:8 lg:6</ColorBox>
      </Col>
      <Col xs={24} sm={12} md={8} lg={6}>
        <ColorBox color="#8b5cf6">xs:24 sm:12 md:8 lg:6</ColorBox>
      </Col>
      <Col xs={24} sm={12} md={8} lg={6}>
        <ColorBox color="#a78bfa">xs:24 sm:12 md:8 lg:6</ColorBox>
      </Col>
      <Col xs={24} sm={12} md={8} lg={6}>
        <ColorBox color="#c4b5fd">xs:24 sm:12 md:8 lg:6</ColorBox>
      </Col>
    </Row>
}`,...(I=(H=r.parameters)==null?void 0:H.docs)==null?void 0:I.source},description:{story:"响应式栅格",...(L=(K=r.parameters)==null?void 0:K.docs)==null?void 0:L.description}}};const X=["Basic","ColumnSpacing","ColumnOffset","Sort","Justify","Align","Responsive","MoreResponsive","ResponsiveGrid"];export{i as Align,l as Basic,a as ColumnOffset,x as ColumnSpacing,c as Justify,p as MoreResponsive,t as Responsive,r as ResponsiveGrid,d as Sort,X as __namedExportsOrder,W as default};
