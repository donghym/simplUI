import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as se}from"./index-GiUgBvb1.js";import{a as j}from"./utils-BEhiKRD9.js";import{c as ie}from"./index-C08JwjkN.js";import{B}from"./index-WhxK0hy4.js";import{M as t}from"./mail-CM1fAoIt.js";import{B as s}from"./bell-mOK_pRjr.js";import{S as le}from"./shopping-cart-CpkgNqKj.js";import{U as me}from"./user-CXa3gJrY.js";import"./loader-circle-CulI208u.js";import"./createLucideIcon-CZe00VV7.js";const ue=ie("absolute -top-1 -right-1 min-w-[20px] h-5 px-1.5 flex items-center justify-center rounded-full text-[11px] font-semibold leading-none text-white whitespace-nowrap pointer-events-none select-none z-10 shadow-sm ring-2 ring-white",{variants:{variant:{default:"bg-gray-500",primary:"bg-primary-500",success:"bg-success-500",warning:"bg-warning-500",danger:"bg-danger-500"}},defaultVariants:{variant:"danger"}}),a=se.forwardRef((r,d)=>{const{className:n,count:o,overflowCount:N=99,dot:c=!1,showZero:te=!1,variant:y,children:ne,...oe}=r,de=c||o!==void 0&&(te||o>0),ce=o!==void 0&&o>N?`${N}+`:o;return e.jsxs("span",{ref:d,className:j("sui-badge","relative inline-flex",n),...oe,children:[ne,de&&e.jsx("sup",{"aria-hidden":c?!0:void 0,className:j(ue(y?{variant:y}:void 0),c&&"min-w-0 w-2 h-2 p-0 text-[0px]"),children:c?null:ce})]})});a.displayName="Badge";a.__docgenInfo={description:`Badge 徽标组件

在子元素右上角显示数字徽标或状态圆点，用于通知数量、状态标记等场景。
支持 5 种语义变体、数字封顶、仅圆点模式、零值隐藏。
使用 forwardRef 转发 span 元素引用。`,methods:[],displayName:"Badge",props:{count:{required:!1,tsType:{name:"number"},description:'展示的数字。大于 overflowCount 时显示 "{overflowCount}+"。不传或 dot=true 时不显示数字'},overflowCount:{required:!1,tsType:{name:"number"},description:'封顶数字，超出后显示 "{overflowCount}+"。默认 99'},dot:{required:!1,tsType:{name:"boolean"},description:"不展示数字，只显示一个小红点。默认 false。dot=true 时 count 被忽略"},showZero:{required:!1,tsType:{name:"boolean"},description:"count 为 0 时是否显示徽标。默认 false（count=0 时隐藏）"},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'primary' | 'success' | 'warning' | 'danger'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'primary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'danger'"}]},description:"语义变体，控制徽标背景色。默认 'danger'"},children:{required:!1,tsType:{name:"ReactNode"},description:"徽标的子元素，徽标相对于子元素右上角定位。不传时徽标独立渲染"}},composes:["Omit","VariantProps"]};const be={title:"数据展示/Badge 徽标数",component:a,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"徽标数用于展示消息、通知或状态的数字标记。适用于图标角标、待办提醒、状态指示等场景，支持数字溢出、小红点和独立使用。"}}},argTypes:{variant:{control:"select",options:["default","primary","success","warning","danger"],description:"语义变体，控制徽标背景色，默认 danger"}}},i={args:{count:5},render:r=>e.jsx(a,{...r,children:e.jsx(t,{className:"h-6 w-6 text-gray-600"})})},l={args:{count:200,overflowCount:99},render:r=>e.jsx(a,{...r,children:e.jsx(s,{className:"h-6 w-6 text-gray-600"})})},m={args:{dot:!0},render:r=>e.jsx(a,{...r,children:e.jsx(t,{className:"h-6 w-6 text-gray-600"})})},u={args:{count:0,showZero:!0},render:r=>e.jsx(a,{...r,children:e.jsx(s,{className:"h-6 w-6 text-gray-600"})})},g={render:()=>e.jsxs("div",{className:"flex gap-8 items-center",children:[e.jsx(a,{count:5,variant:"default",children:e.jsx(s,{className:"h-6 w-6 text-gray-600"})}),e.jsx(a,{count:5,variant:"primary",children:e.jsx(s,{className:"h-6 w-6 text-gray-600"})}),e.jsx(a,{count:5,variant:"success",children:e.jsx(s,{className:"h-6 w-6 text-gray-600"})}),e.jsx(a,{count:5,variant:"warning",children:e.jsx(s,{className:"h-6 w-6 text-gray-600"})}),e.jsx(a,{count:5,variant:"danger",children:e.jsx(s,{className:"h-6 w-6 text-gray-600"})})]})},x={render:()=>e.jsxs("div",{className:"flex gap-6 items-center",children:[e.jsx(a,{count:25}),e.jsx(a,{count:4,variant:"primary"}),e.jsx(a,{count:0,showZero:!0}),e.jsx(a,{count:109,overflowCount:99}),e.jsx(a,{dot:!0})]})},p={render:()=>e.jsxs("div",{className:"flex gap-8 items-center",children:[e.jsx(a,{count:5,children:e.jsx(t,{className:"h-6 w-6 text-gray-600"})}),e.jsx(a,{count:0,showZero:!0,children:e.jsx(s,{className:"h-6 w-6 text-gray-600"})}),e.jsx(a,{dot:!0,children:e.jsx(le,{className:"h-6 w-6 text-gray-600"})}),e.jsx(a,{count:12,variant:"primary",children:e.jsx(me,{className:"h-6 w-6 text-gray-600"})})]})},h={render:()=>e.jsxs("div",{className:"flex gap-8 items-center",children:[e.jsx(a,{count:99,children:e.jsx(t,{className:"h-6 w-6 text-gray-600"})}),e.jsx(a,{count:100,children:e.jsx(t,{className:"h-6 w-6 text-gray-600"})}),e.jsx(a,{count:99,overflowCount:10,children:e.jsx(t,{className:"h-6 w-6 text-gray-600"})}),e.jsx(a,{count:1e3,overflowCount:999,children:e.jsx(t,{className:"h-6 w-6 text-gray-600"})})]})},v={render:()=>{const[r,d]=se.useState(5);return e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(a,{count:r,children:e.jsx(t,{className:"h-6 w-6 text-gray-600"})}),e.jsx(B,{onClick:()=>d(n=>Math.max(0,n-1)),children:"-"}),e.jsx(B,{onClick:()=>d(n=>n+1),children:"+"})]})}},f={render:()=>e.jsxs("div",{className:"flex gap-8 items-center",children:[e.jsx(a,{dot:!0,variant:"success",children:e.jsx("span",{className:"text-sm text-gray-700",children:"成功"})}),e.jsx(a,{dot:!0,variant:"primary",children:e.jsx("span",{className:"text-sm text-gray-700",children:"处理中"})}),e.jsx(a,{dot:!0,variant:"warning",children:e.jsx("span",{className:"text-sm text-gray-700",children:"警告"})}),e.jsx(a,{dot:!0,variant:"danger",children:e.jsx("span",{className:"text-sm text-gray-700",children:"错误"})})]})},w={render:()=>{const r={position:"absolute",top:12,right:-30,width:120,textAlign:"center",color:"#fff",fontSize:12,lineHeight:"20px",transform:"rotate(45deg)",borderRadius:2};return e.jsxs("div",{className:"flex flex-wrap gap-8",children:[e.jsxs("div",{className:"relative overflow-hidden w-64 rounded-lg border border-border shadow-sm",children:[e.jsx("div",{style:{...r,backgroundColor:"var(--color-primary, #3b82f6)"},children:"热销"}),e.jsxs("div",{className:"p-4",children:[e.jsx("h4",{className:"text-sm font-medium",children:"商品 A"}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:"这是带有热销角标的卡片"})]})]}),e.jsxs("div",{className:"relative overflow-hidden w-64 rounded-lg border border-border shadow-sm",children:[e.jsx("div",{style:{...r,backgroundColor:"var(--color-danger, #ef4444)"},children:"新品"}),e.jsxs("div",{className:"p-4",children:[e.jsx("h4",{className:"text-sm font-medium",children:"商品 B"}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:"这是带有新品角标的卡片"})]})]}),e.jsxs("div",{className:"relative overflow-hidden w-64 rounded-lg border border-border shadow-sm",children:[e.jsx("div",{style:{...r,backgroundColor:"var(--color-success, #22c55e)"},children:"折扣"}),e.jsxs("div",{className:"p-4",children:[e.jsx("h4",{className:"text-sm font-medium",children:"商品 C"}),e.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:"这是带有折扣角标的卡片"})]})]})]})}};var b,C,S;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    count: 5
  },
  render: args => <Badge {...args}>
      <Mail className="h-6 w-6 text-gray-600" />
    </Badge>
}`,...(S=(C=i.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var M,k,D;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    count: 200,
    overflowCount: 99
  },
  render: args => <Badge {...args}>
      <Bell className="h-6 w-6 text-gray-600" />
    </Badge>
}`,...(D=(k=l.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};var Z,R,T;m.parameters={...m.parameters,docs:{...(Z=m.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    dot: true
  },
  render: args => <Badge {...args}>
      <Mail className="h-6 w-6 text-gray-600" />
    </Badge>
}`,...(T=(R=m.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var q,O,V;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    count: 0,
    showZero: true
  },
  render: args => <Badge {...args}>
      <Bell className="h-6 w-6 text-gray-600" />
    </Badge>
}`,...(V=(O=u.parameters)==null?void 0:O.docs)==null?void 0:V.source}}};var A,W,_;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div className="flex gap-8 items-center">
      <Badge count={5} variant="default"><Bell className="h-6 w-6 text-gray-600" /></Badge>
      <Badge count={5} variant="primary"><Bell className="h-6 w-6 text-gray-600" /></Badge>
      <Badge count={5} variant="success"><Bell className="h-6 w-6 text-gray-600" /></Badge>
      <Badge count={5} variant="warning"><Bell className="h-6 w-6 text-gray-600" /></Badge>
      <Badge count={5} variant="danger"><Bell className="h-6 w-6 text-gray-600" /></Badge>
    </div>
}`,...(_=(W=g.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var z,E,I;x.parameters={...x.parameters,docs:{...(z=x.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div className="flex gap-6 items-center">
      <Badge count={25} />
      <Badge count={4} variant="primary" />
      <Badge count={0} showZero />
      <Badge count={109} overflowCount={99} />
      <Badge dot />
    </div>
}`,...(I=(E=x.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var U,H,P;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <div className="flex gap-8 items-center">
      <Badge count={5}>
        <Mail className="h-6 w-6 text-gray-600" />
      </Badge>
      <Badge count={0} showZero>
        <Bell className="h-6 w-6 text-gray-600" />
      </Badge>
      <Badge dot>
        <ShoppingCart className="h-6 w-6 text-gray-600" />
      </Badge>
      <Badge count={12} variant="primary">
        <User className="h-6 w-6 text-gray-600" />
      </Badge>
    </div>
}`,...(P=(H=p.parameters)==null?void 0:H.docs)==null?void 0:P.source}}};var $,F,G;h.parameters={...h.parameters,docs:{...($=h.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <div className="flex gap-8 items-center">
      <Badge count={99}>
        <Mail className="h-6 w-6 text-gray-600" />
      </Badge>
      <Badge count={100}>
        <Mail className="h-6 w-6 text-gray-600" />
      </Badge>
      <Badge count={99} overflowCount={10}>
        <Mail className="h-6 w-6 text-gray-600" />
      </Badge>
      <Badge count={1000} overflowCount={999}>
        <Mail className="h-6 w-6 text-gray-600" />
      </Badge>
    </div>
}`,...(G=(F=h.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var J,K,L;v.parameters={...v.parameters,docs:{...(J=v.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => {
    const [count, setCount] = useState(5);
    return <div className="flex items-center gap-4">
        <Badge count={count}>
          <Mail className="h-6 w-6 text-gray-600" />
        </Badge>
        <Button onClick={() => setCount(c => Math.max(0, c - 1))}>-</Button>
        <Button onClick={() => setCount(c => c + 1)}>+</Button>
      </div>;
  }
}`,...(L=(K=v.parameters)==null?void 0:K.docs)==null?void 0:L.source}}};var Q,X,Y;f.parameters={...f.parameters,docs:{...(Q=f.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <div className="flex gap-8 items-center">
      <Badge dot variant="success">
        <span className="text-sm text-gray-700">成功</span>
      </Badge>
      <Badge dot variant="primary">
        <span className="text-sm text-gray-700">处理中</span>
      </Badge>
      <Badge dot variant="warning">
        <span className="text-sm text-gray-700">警告</span>
      </Badge>
      <Badge dot variant="danger">
        <span className="text-sm text-gray-700">错误</span>
      </Badge>
    </div>
}`,...(Y=(X=f.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var ee,ae,re;w.parameters={...w.parameters,docs:{...(ee=w.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => {
    const ribbonStyle: React.CSSProperties = {
      position: 'absolute',
      top: 12,
      right: -30,
      width: 120,
      textAlign: 'center',
      color: '#fff',
      fontSize: 12,
      lineHeight: '20px',
      transform: 'rotate(45deg)',
      borderRadius: 2
    };
    return <div className="flex flex-wrap gap-8">
        <div className="relative overflow-hidden w-64 rounded-lg border border-border shadow-sm">
          <div style={{
          ...ribbonStyle,
          backgroundColor: 'var(--color-primary, #3b82f6)'
        }}>热销</div>
          <div className="p-4">
            <h4 className="text-sm font-medium">商品 A</h4>
            <p className="text-xs text-muted-foreground mt-1">这是带有热销角标的卡片</p>
          </div>
        </div>
        <div className="relative overflow-hidden w-64 rounded-lg border border-border shadow-sm">
          <div style={{
          ...ribbonStyle,
          backgroundColor: 'var(--color-danger, #ef4444)'
        }}>新品</div>
          <div className="p-4">
            <h4 className="text-sm font-medium">商品 B</h4>
            <p className="text-xs text-muted-foreground mt-1">这是带有新品角标的卡片</p>
          </div>
        </div>
        <div className="relative overflow-hidden w-64 rounded-lg border border-border shadow-sm">
          <div style={{
          ...ribbonStyle,
          backgroundColor: 'var(--color-success, #22c55e)'
        }}>折扣</div>
          <div className="p-4">
            <h4 className="text-sm font-medium">商品 C</h4>
            <p className="text-xs text-muted-foreground mt-1">这是带有折扣角标的卡片</p>
          </div>
        </div>
      </div>;
  }
}`,...(re=(ae=w.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};const Ce=["Default","WithOverflow","Dot","ShowZero","Variants","Standalone","WithDifferentIcons","OverflowThresholds","DynamicCount","StatusDot","Ribbon"];export{i as Default,m as Dot,v as DynamicCount,h as OverflowThresholds,w as Ribbon,u as ShowZero,x as Standalone,f as StatusDot,g as Variants,p as WithDifferentIcons,l as WithOverflow,Ce as __namedExportsOrder,be as default};
