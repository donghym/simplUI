import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as o,R as se}from"./index-GiUgBvb1.js";import{a as J}from"./utils-BEhiKRD9.js";import{c as m}from"./index-C08JwjkN.js";import{S as te}from"./index-pixgFsiF.js";import"./x-B-5N0Ikz.js";import"./createLucideIcon-CZe00VV7.js";import"./chevron-down-CY-YwltC.js";import"./check-DytZnMFh.js";const re=m("sui-descriptions__title text-base font-medium mb-4 text-[#262626]"),S=m("sui-descriptions__label text-[#595959] text-sm mr-2 inline-block",{variants:{layout:{horizontal:"",vertical:"mb-1"}},defaultVariants:{layout:"horizontal"}}),_=m("sui-descriptions__content text-[#262626] text-sm"),ie=m("sui-descriptions__label px-4 py-2 border border-[#d9d9d9] bg-[#fafafa] text-[#595959] font-normal text-left"),le=m("sui-descriptions__content px-4 py-2 border border-[#d9d9d9] text-[#262626]"),f=o.forwardRef(({label:i,children:c,span:p=1,style:y,className:v},d)=>e.jsxs("td",{ref:d,className:J("sui-descriptions__item",v),colSpan:p*2,style:y,children:[e.jsx("span",{className:"sui-descriptions__label",children:i}),e.jsx("span",{className:"sui-descriptions__content",children:c})]}));f.displayName="DescriptionsItem";const N=o.forwardRef(({title:i,bordered:c=!1,column:p=3,componentSize:y="default",layout:v="horizontal",children:d,style:K,className:U,...X},Y)=>{const g=o.useMemo(()=>o.Children.toArray(d).filter(r=>o.isValidElement(r)&&r.type===f),[d]),Z=o.useMemo(()=>{const r=[];let t=[],l=0;return g.forEach(a=>{const n=a.props.span??1;l+n>p?(r.push(t),t=[a],l=n):(t.push(a),l+=n)}),t.length>0&&r.push(t),r},[g,p]),ee=(r,t)=>{const{label:l,children:a,span:n=1}=r.props;return c?e.jsxs(se.Fragment,{children:[e.jsx("th",{className:ie(),colSpan:1,children:l}),e.jsx("td",{className:le(),colSpan:n*2-1,children:a})]},t):v==="vertical"?e.jsxs("td",{colSpan:n*2,className:"pb-4",children:[e.jsx("div",{className:S({layout:"vertical"}),children:l}),e.jsx("div",{className:_(),children:a})]},t):e.jsxs("td",{colSpan:n*2,className:"pb-4",children:[e.jsx("span",{className:S({layout:"horizontal"}),children:l}),e.jsx("span",{className:_(),children:a})]},t)};return e.jsxs("div",{ref:Y,className:J("sui-descriptions",c&&"sui-descriptions--bordered",`sui-descriptions--${y}`,U),style:K,...X,children:[i&&e.jsx("div",{className:re(),children:i}),e.jsx("div",{className:"sui-descriptions__view",children:e.jsx("table",{className:"w-full table-auto border-collapse",children:e.jsx("tbody",{children:Z.map((r,t)=>e.jsx("tr",{children:r.map(ee)},t))})})})]})});N.displayName="Descriptions";const s=Object.assign(N,{Item:f});f.__docgenInfo={description:"DescriptionsItem 描述列表项",methods:[],displayName:"DescriptionsItem",props:{label:{required:!1,tsType:{name:"ReactNode"},description:"标签"},children:{required:!0,tsType:{name:"ReactNode"},description:"内容"},span:{required:!1,tsType:{name:"number"},description:"占据列数",defaultValue:{value:"1",computed:!1}},style:{required:!1,tsType:{name:"CSSProperties"},description:"自定义样式"},className:{required:!1,tsType:{name:"string"},description:"自定义类名"}}};N.__docgenInfo={description:`Descriptions 描述列表组件
成组展示多个只读字段，常见于详情页的信息展示。`,methods:[],displayName:"Descriptions",props:{title:{required:!1,tsType:{name:"ReactNode"},description:"标题"},bordered:{required:!1,tsType:{name:"boolean"},description:"是否显示边框",defaultValue:{value:"false",computed:!1}},column:{required:!1,tsType:{name:"number"},description:"一列的描述项数量",defaultValue:{value:"3",computed:!1}},componentSize:{required:!1,tsType:{name:"union",raw:"'default' | 'middle' | 'small'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'middle'"},{name:"literal",value:"'small'"}]},description:"列表的大小",defaultValue:{value:"'default'",computed:!1}},layout:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"描述布局",defaultValue:{value:"'horizontal'",computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:"子元素"},style:{required:!1,tsType:{name:"CSSProperties"},description:"自定义样式"},className:{required:!1,tsType:{name:"string"},description:"自定义类名"}}};const Ie={title:"数据展示/Descriptions 描述列表",component:s,tags:["autodocs"],parameters:{docs:{description:{component:`Descriptions 描述列表组件用于成组展示多个只读字段，以键值对的形式整齐排列。

- 用于详情页展示对象属性，如用户信息、订单详情
- 用于表单提交后的确认信息展示
- 用于后台管理的数据概览面板
- 支持横向、纵向布局和响应式列数调整`}}},argTypes:{bordered:{control:"boolean"},column:{control:"number"},componentSize:{control:"select",options:["default","middle","small"]},layout:{control:"select",options:["horizontal","vertical"]}}},u={parameters:{docs:{description:{story:"基础描述列表，横向排列标签和内容，适用于一般信息展示场景。"}}},render:()=>e.jsxs(s,{title:"用户信息",children:[e.jsx(s.Item,{label:"用户名",children:"周毛毛"}),e.jsx(s.Item,{label:"电话",children:"1810000000"}),e.jsx(s.Item,{label:"居住地",children:"浙江省杭州市"}),e.jsx(s.Item,{label:"备注",children:"空"}),e.jsx(s.Item,{label:"地址",children:"浙江省杭州市西湖区望塘路18号"})]})},b={parameters:{docs:{description:{story:"带边框的描述列表，通过边框清晰划分每个字段区域，适用于数据密集、需要严格对齐的详情展示。"}}},render:()=>e.jsxs(s,{title:"用户信息",bordered:!0,children:[e.jsx(s.Item,{label:"产品",children:"云数据库"}),e.jsx(s.Item,{label:"计费模式",children:"预付费"}),e.jsx(s.Item,{label:"自动续费",children:"是"}),e.jsx(s.Item,{label:"订单时间",children:"2018-04-24 18:00:00"}),e.jsx(s.Item,{label:"使用时间",span:2,children:"2019-04-24 18:00:00"}),e.jsx(s.Item,{label:"状态",span:3,children:e.jsx("span",{className:"text-success",children:"运行中"})}),e.jsx(s.Item,{label:"协商金额",children:"¥80.00"}),e.jsx(s.Item,{label:"折扣",children:"¥20.00"}),e.jsx(s.Item,{label:"官方收款",children:"¥60.00"}),e.jsxs(s.Item,{label:"配置信息",children:["数据盘类型：MongoDB",e.jsx("br",{}),"数据库版本：3.4",e.jsx("br",{}),"套餐：dds.mongo.mid",e.jsx("br",{}),"存储空间：10 GB",e.jsx("br",{}),"副本数：3",e.jsx("br",{}),"区域：华东1",e.jsx("br",{})]})]})},I={parameters:{docs:{description:{story:"纵向布局，标签在上内容在下，适用于标签较长或需要垂直阅读的场景。"}}},render:()=>e.jsxs(s,{title:"用户信息",layout:"vertical",children:[e.jsx(s.Item,{label:"用户名",children:"周毛毛"}),e.jsx(s.Item,{label:"电话",children:"1810000000"}),e.jsx(s.Item,{label:"居住地",children:"浙江省杭州市"}),e.jsx(s.Item,{label:"地址",children:"浙江省杭州市西湖区望塘路18号"})]})},x={parameters:{docs:{description:{story:"多列布局，通过 column 属性控制每行显示的字段数，适用于字段较多、需要紧凑排列的场景。"}}},render:()=>e.jsxs(s,{title:"用户信息",column:2,children:[e.jsx(s.Item,{label:"用户名",children:"周毛毛"}),e.jsx(s.Item,{label:"电话",children:"1810000000"}),e.jsx(s.Item,{label:"居住地",children:"浙江省杭州市"}),e.jsx(s.Item,{label:"备注",children:"空"}),e.jsx(s.Item,{label:"地址",children:"浙江省杭州市西湖区望塘路18号"})]})},h={parameters:{docs:{description:{story:"不同尺寸的描述列表对比，支持 default、middle、small 三种尺寸，适用于不同信息密度的页面。"}}},render:()=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs(s,{title:"默认尺寸",bordered:!0,children:[e.jsx(s.Item,{label:"产品",children:"云数据库"}),e.jsx(s.Item,{label:"计费模式",children:"预付费"}),e.jsx(s.Item,{label:"自动续费",children:"是"}),e.jsx(s.Item,{label:"订单时间",children:"2018-04-24 18:00:00"}),e.jsx(s.Item,{label:"状态",children:e.jsx("span",{className:"text-success",children:"运行中"})})]}),e.jsxs(s,{title:"小尺寸",bordered:!0,componentSize:"small",children:[e.jsx(s.Item,{label:"产品",children:"云数据库"}),e.jsx(s.Item,{label:"计费模式",children:"预付费"}),e.jsx(s.Item,{label:"自动续费",children:"是"}),e.jsx(s.Item,{label:"订单时间",children:"2018-04-24 18:00:00"}),e.jsx(s.Item,{label:"状态",children:e.jsx("span",{className:"text-success",children:"运行中"})})]})]})},D={parameters:{docs:{description:{story:"自定义标签样式，通过传入 ReactNode 实现带颜色、加粗等样式的个性化标签，适用于需要视觉分类的场景。"}}},render:()=>e.jsxs(s,{title:"自定义标签样式",bordered:!0,children:[e.jsx(s.Item,{label:e.jsx("span",{style:{fontWeight:700,color:"#1677ff"},children:"标记 产品名称"}),children:"云数据库 MySQL"}),e.jsx(s.Item,{label:e.jsx("span",{style:{fontWeight:700,color:"#52c41a"},children:"金额 计费模式"}),children:"预付费"}),e.jsx(s.Item,{label:e.jsx("span",{style:{fontWeight:700,color:"#faad14"},children:"计时 自动续费"}),children:"是"}),e.jsx(s.Item,{label:e.jsx("span",{style:{fontWeight:700,color:"#eb2f96"},children:"日期 订单时间"}),children:"2018-04-24 18:00:00"}),e.jsx(s.Item,{label:e.jsx("span",{style:{fontWeight:700,color:"#722ed1"},children:"刷新 运行状态"}),children:e.jsx("span",{className:"text-success",children:"运行中"})}),e.jsx(s.Item,{label:e.jsx("span",{style:{fontWeight:700,color:"#13c2c2"},children:"全球 所属区域"}),children:"华东1"})]})},j={parameters:{docs:{description:{story:"响应式列数调整，通过下拉选择动态切换列数，展示描述列表在不同列数下的自适应效果。"}}},render:()=>{const[i,c]=o.useState(3);return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-sm text-gray-600",children:"列数："}),e.jsx(te,{value:String(i),onChange:p=>c(Number(p)),options:[{value:"1",label:"1 列"},{value:"2",label:"2 列"},{value:"3",label:"3 列"}],style:{width:120}})]}),e.jsxs(s,{title:"响应式列数",column:i,bordered:!0,children:[e.jsx(s.Item,{label:"用户名",children:"周毛毛"}),e.jsx(s.Item,{label:"电话",children:"1810000000"}),e.jsx(s.Item,{label:"居住地",children:"浙江省杭州市"}),e.jsx(s.Item,{label:"备注",children:"空"}),e.jsx(s.Item,{label:"地址",children:"浙江省杭州市西湖区望塘路18号"}),e.jsx(s.Item,{label:"邮箱",children:"zhoumaomao@example.com"})]})]})}};var C,z,V;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '基础描述列表，横向排列标签和内容，适用于一般信息展示场景。'
      }
    }
  },
  render: () => <Descriptions title="用户信息">
      <Descriptions.Item label="用户名">周毛毛</Descriptions.Item>
      <Descriptions.Item label="电话">1810000000</Descriptions.Item>
      <Descriptions.Item label="居住地">浙江省杭州市</Descriptions.Item>
      <Descriptions.Item label="备注">空</Descriptions.Item>
      <Descriptions.Item label="地址">
        浙江省杭州市西湖区望塘路18号
      </Descriptions.Item>
    </Descriptions>
}`,...(V=(z=u.parameters)==null?void 0:z.docs)==null?void 0:V.source}}};var T,R,q;b.parameters={...b.parameters,docs:{...(T=b.parameters)==null?void 0:T.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '带边框的描述列表，通过边框清晰划分每个字段区域，适用于数据密集、需要严格对齐的详情展示。'
      }
    }
  },
  render: () => <Descriptions title="用户信息" bordered>
      <Descriptions.Item label="产品">云数据库</Descriptions.Item>
      <Descriptions.Item label="计费模式">预付费</Descriptions.Item>
      <Descriptions.Item label="自动续费">是</Descriptions.Item>
      <Descriptions.Item label="订单时间">2018-04-24 18:00:00</Descriptions.Item>
      <Descriptions.Item label="使用时间" span={2}>
        2019-04-24 18:00:00
      </Descriptions.Item>
      <Descriptions.Item label="状态" span={3}>
        <span className="text-success">运行中</span>
      </Descriptions.Item>
      <Descriptions.Item label="协商金额">¥80.00</Descriptions.Item>
      <Descriptions.Item label="折扣">¥20.00</Descriptions.Item>
      <Descriptions.Item label="官方收款">¥60.00</Descriptions.Item>
      <Descriptions.Item label="配置信息">
        数据盘类型：MongoDB
        <br />
        数据库版本：3.4
        <br />
        套餐：dds.mongo.mid
        <br />
        存储空间：10 GB
        <br />
        副本数：3
        <br />
        区域：华东1
        <br />
      </Descriptions.Item>
    </Descriptions>
}`,...(q=(R=b.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};var W,w,B;I.parameters={...I.parameters,docs:{...(W=I.parameters)==null?void 0:W.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '纵向布局，标签在上内容在下，适用于标签较长或需要垂直阅读的场景。'
      }
    }
  },
  render: () => <Descriptions title="用户信息" layout="vertical">
      <Descriptions.Item label="用户名">周毛毛</Descriptions.Item>
      <Descriptions.Item label="电话">1810000000</Descriptions.Item>
      <Descriptions.Item label="居住地">浙江省杭州市</Descriptions.Item>
      <Descriptions.Item label="地址">
        浙江省杭州市西湖区望塘路18号
      </Descriptions.Item>
    </Descriptions>
}`,...(B=(w=I.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};var L,M,E;x.parameters={...x.parameters,docs:{...(L=x.parameters)==null?void 0:L.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '多列布局，通过 column 属性控制每行显示的字段数，适用于字段较多、需要紧凑排列的场景。'
      }
    }
  },
  render: () => <Descriptions title="用户信息" column={2}>
      <Descriptions.Item label="用户名">周毛毛</Descriptions.Item>
      <Descriptions.Item label="电话">1810000000</Descriptions.Item>
      <Descriptions.Item label="居住地">浙江省杭州市</Descriptions.Item>
      <Descriptions.Item label="备注">空</Descriptions.Item>
      <Descriptions.Item label="地址">
        浙江省杭州市西湖区望塘路18号
      </Descriptions.Item>
    </Descriptions>
}`,...(E=(M=x.parameters)==null?void 0:M.docs)==null?void 0:E.source}}};var G,O,P;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '不同尺寸的描述列表对比，支持 default、middle、small 三种尺寸，适用于不同信息密度的页面。'
      }
    }
  },
  render: () => <div className="space-y-8">
      <Descriptions title="默认尺寸" bordered>
        <Descriptions.Item label="产品">云数据库</Descriptions.Item>
        <Descriptions.Item label="计费模式">预付费</Descriptions.Item>
        <Descriptions.Item label="自动续费">是</Descriptions.Item>
        <Descriptions.Item label="订单时间">2018-04-24 18:00:00</Descriptions.Item>
        <Descriptions.Item label="状态">
          <span className="text-success">运行中</span>
        </Descriptions.Item>
      </Descriptions>
      <Descriptions title="小尺寸" bordered componentSize="small">
        <Descriptions.Item label="产品">云数据库</Descriptions.Item>
        <Descriptions.Item label="计费模式">预付费</Descriptions.Item>
        <Descriptions.Item label="自动续费">是</Descriptions.Item>
        <Descriptions.Item label="订单时间">2018-04-24 18:00:00</Descriptions.Item>
        <Descriptions.Item label="状态">
          <span className="text-success">运行中</span>
        </Descriptions.Item>
      </Descriptions>
    </div>
}`,...(P=(O=h.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var Q,k,A;D.parameters={...D.parameters,docs:{...(Q=D.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '自定义标签样式，通过传入 ReactNode 实现带颜色、加粗等样式的个性化标签，适用于需要视觉分类的场景。'
      }
    }
  },
  render: () => <Descriptions title="自定义标签样式" bordered>
      <Descriptions.Item label={<span style={{
      fontWeight: 700,
      color: '#1677ff'
    }}>
            标记 产品名称
          </span>}>
        云数据库 MySQL
      </Descriptions.Item>
      <Descriptions.Item label={<span style={{
      fontWeight: 700,
      color: '#52c41a'
    }}>
            金额 计费模式
          </span>}>
        预付费
      </Descriptions.Item>
      <Descriptions.Item label={<span style={{
      fontWeight: 700,
      color: '#faad14'
    }}>
            计时 自动续费
          </span>}>
        是
      </Descriptions.Item>
      <Descriptions.Item label={<span style={{
      fontWeight: 700,
      color: '#eb2f96'
    }}>
            日期 订单时间
          </span>}>
        2018-04-24 18:00:00
      </Descriptions.Item>
      <Descriptions.Item label={<span style={{
      fontWeight: 700,
      color: '#722ed1'
    }}>
            刷新 运行状态
          </span>}>
        <span className="text-success">运行中</span>
      </Descriptions.Item>
      <Descriptions.Item label={<span style={{
      fontWeight: 700,
      color: '#13c2c2'
    }}>
            全球 所属区域
          </span>}>
        华东1
      </Descriptions.Item>
    </Descriptions>
}`,...(A=(k=D.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};var F,$,H;j.parameters={...j.parameters,docs:{...(F=j.parameters)==null?void 0:F.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '响应式列数调整，通过下拉选择动态切换列数，展示描述列表在不同列数下的自适应效果。'
      }
    }
  },
  render: () => {
    const [columns, setColumns] = useState(3);
    return <div className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-600">列数：</span>
          <Select value={String(columns)} onChange={(val: string) => setColumns(Number(val))} options={[{
          value: '1',
          label: '1 列'
        }, {
          value: '2',
          label: '2 列'
        }, {
          value: '3',
          label: '3 列'
        }]} style={{
          width: 120
        }} />
        </div>
        <Descriptions title="响应式列数" column={columns} bordered>
          <Descriptions.Item label="用户名">周毛毛</Descriptions.Item>
          <Descriptions.Item label="电话">1810000000</Descriptions.Item>
          <Descriptions.Item label="居住地">浙江省杭州市</Descriptions.Item>
          <Descriptions.Item label="备注">空</Descriptions.Item>
          <Descriptions.Item label="地址">浙江省杭州市西湖区望塘路18号</Descriptions.Item>
          <Descriptions.Item label="邮箱">zhoumaomao@example.com</Descriptions.Item>
        </Descriptions>
      </div>;
  }
}`,...(H=($=j.parameters)==null?void 0:$.docs)==null?void 0:H.source}}};const xe=["Basic","Bordered","Vertical","Column","SizeVariants","CustomLabel","ResponsiveColumns"];export{u as Basic,b as Bordered,x as Column,D as CustomLabel,j as ResponsiveColumns,h as SizeVariants,I as Vertical,xe as __namedExportsOrder,Ie as default};
