import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as s}from"./index-GiUgBvb1.js";import{a as ue}from"./utils-BEhiKRD9.js";import{c as ee}from"./index-C08JwjkN.js";import{H as b}from"./house-DR9pGCa3.js";import{S as f}from"./search-DufjXXN7.js";import{S as x}from"./shopping-cart-CpkgNqKj.js";import{U as i}from"./user-CXa3gJrY.js";import"./createLucideIcon-CZe00VV7.js";const pe=ee("sui-tab-bar flex items-stretch justify-around w-full bg-background",{variants:{variant:{default:"",primary:""},fixed:{true:"fixed bottom-0 left-0 right-0 z-50",false:""},bordered:{true:"border-t border-border",false:""}},compoundVariants:[{variant:"default",fixed:!0,bordered:!0,class:"safe-area-bottom"}],defaultVariants:{variant:"default",fixed:!1,bordered:!0}}),be=ee("flex flex-col items-center justify-center gap-0.5 flex-1 py-1.5 px-1 cursor-pointer select-none transition-colors duration-200 relative min-w-0",{variants:{active:{true:"text-primary-500",false:"text-muted-foreground"},disabled:{true:"text-muted-foreground/40 cursor-not-allowed pointer-events-none",false:""}},defaultVariants:{active:!1,disabled:!1}}),ye="absolute top-0.5 right-1/2 translate-x-4 w-1.5 h-1.5 rounded-full bg-danger-500",ve="absolute -top-0.5 right-1/2 translate-x-3 min-w-[16px] h-4 px-1 flex items-center justify-center rounded-full bg-danger-500 text-white text-[10px] leading-none font-medium";function fe(t){if(!t.badge)return null;if(t.badge.type==="dot")return e.jsx("span",{className:ye});const r=t.badge.count??0;return r<=0?null:e.jsx("span",{className:ve,children:r>99?"99+":r})}const n=s.forwardRef((t,r)=>{var j;const{className:o,items:K,activeKey:k,defaultActiveKey:re,onChange:y,fixed:ae=!1,bordered:se=!0,variant:ne,...oe}=t,g=k!==void 0,[ie,ce]=s.useState(re??((j=K[0])==null?void 0:j.key)??""),de=g?k:ie,le=s.useCallback(a=>{a.disabled||(g||ce(a.key),y==null||y(a.key))},[g,y]);return e.jsx("div",{ref:r,role:"tablist",className:ue(pe({variant:ne,fixed:ae,bordered:se}),o),...oe,children:K.map(a=>{const v=a.key===de,me=v&&a.activeIcon?a.activeIcon:a.icon;return e.jsxs("button",{type:"button",role:"tab","aria-selected":v,"aria-disabled":a.disabled,tabIndex:v?0:-1,onClick:()=>le(a),className:be({active:v,disabled:a.disabled}),children:[e.jsxs("span",{className:"relative inline-flex shrink-0",children:[me,fe(a)]}),e.jsx("span",{className:"text-[10px] leading-tight whitespace-nowrap",children:a.label})]},a.key)})})});n.displayName="TabBar";n.__docgenInfo={description:`TabBar 底部标签栏组件

提供图标+文字的底部标签栏，支持角标、受控/非受控模式、固定底部布局。`,methods:[],displayName:"TabBar",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"TabBarItem"}],raw:"TabBarItem[]"},description:"标签项配置数组"},activeKey:{required:!1,tsType:{name:"string"},description:"当前选中项 key（受控模式）"},defaultActiveKey:{required:!1,tsType:{name:"string"},description:"默认选中项 key（非受控模式）"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(activeKey: string) => void",signature:{arguments:[{type:{name:"string"},name:"activeKey"}],return:{name:"void"}}},description:"选中变化回调"},fixed:{required:!1,tsType:{name:"boolean"},description:"是否固定在底部，默认 false"},bordered:{required:!1,tsType:{name:"boolean"},description:"是否显示边框，默认 true"}},composes:["Omit","VariantProps"]};const Te={title:"导航/TabBar 底部标签栏",component:n,tags:["autodocs"],parameters:{layout:"padded"}},te=({children:t})=>e.jsx("div",{className:"relative h-[400px] w-full border border-gray-200 rounded-lg overflow-hidden",children:e.jsx("div",{className:"absolute bottom-0 left-0 right-0",children:t})}),h=[{key:"home",label:"首页",icon:e.jsx(b,{size:20}),activeIcon:e.jsx(b,{size:20})},{key:"search",label:"搜索",icon:e.jsx(f,{size:20})},{key:"cart",label:"购物车",icon:e.jsx(x,{size:20}),badge:{type:"number",count:5}},{key:"me",label:"我的",icon:e.jsx(i,{size:20}),activeIcon:e.jsx(i,{size:20})}],c={render:()=>{const[t,r]=s.useState("home");return e.jsx(te,{children:e.jsx(n,{items:h,activeKey:t,onChange:r})})}},d={render:()=>{const[t,r]=s.useState("home"),o=[{key:"home",label:"首页",icon:e.jsx(b,{size:20})},{key:"msg",label:"消息",icon:e.jsx(x,{size:20}),badge:{type:"number",count:3}},{key:"notify",label:"通知",icon:e.jsx(f,{size:20}),badge:{type:"dot"}},{key:"me",label:"我的",icon:e.jsx(i,{size:20})}];return e.jsx(te,{children:e.jsx(n,{items:o,activeKey:t,onChange:r})})}},l={render:()=>{const[t,r]=s.useState("home");return e.jsxs("div",{className:"relative h-64 border border-border rounded-lg overflow-hidden",children:[e.jsx("div",{className:"p-4 text-sm text-muted-foreground",children:"页面内容区域"}),e.jsx(n,{items:h,activeKey:t,onChange:r,fixed:!0})]})}},m={render:()=>{const[t,r]=s.useState("home"),o=[{key:"home",label:"首页",icon:e.jsx(b,{size:20})},{key:"search",label:"搜索",icon:e.jsx(f,{size:20})},{key:"locked",label:"锁定",icon:e.jsx(i,{size:20}),disabled:!0},{key:"me",label:"我的",icon:e.jsx(i,{size:20})}];return e.jsx(n,{items:o,activeKey:t,onChange:r})}},u={render:()=>{const[t,r]=s.useState("home");return e.jsx(n,{items:h,activeKey:t,onChange:r,bordered:!1})}},p={render:()=>{const[t,r]=s.useState("home"),o=[{key:"home",label:"首页",icon:e.jsx(b,{size:20})},{key:"msg",label:"消息",icon:e.jsx(x,{size:20}),badge:{type:"number",count:120}},{key:"cart",label:"购物车",icon:e.jsx(f,{size:20}),badge:{type:"number",count:0}},{key:"me",label:"我的",icon:e.jsx(i,{size:20})}];return e.jsx(n,{items:o,activeKey:t,onChange:r})}};var z,B,S,T,A;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => {
    const [activeKey, setActiveKey] = useState('home');
    return <TabBarWrapper>
        <TabBar items={baseItems} activeKey={activeKey} onChange={setActiveKey} />
      </TabBarWrapper>;
  }
}`,...(S=(B=c.parameters)==null?void 0:B.docs)==null?void 0:S.source},description:{story:"基础用法",...(A=(T=c.parameters)==null?void 0:T.docs)==null?void 0:A.description}}};var C,I,N,w,W;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => {
    const [activeKey, setActiveKey] = useState('home');
    const items: TabBarItem[] = [{
      key: 'home',
      label: '首页',
      icon: <Home size={20} />
    }, {
      key: 'msg',
      label: '消息',
      icon: <ShoppingCart size={20} />,
      badge: {
        type: 'number',
        count: 3
      }
    }, {
      key: 'notify',
      label: '通知',
      icon: <Search size={20} />,
      badge: {
        type: 'dot'
      }
    }, {
      key: 'me',
      label: '我的',
      icon: <User size={20} />
    }];
    return <TabBarWrapper>
        <TabBar items={items} activeKey={activeKey} onChange={setActiveKey} />
      </TabBarWrapper>;
  }
}`,...(N=(I=d.parameters)==null?void 0:I.docs)==null?void 0:N.source},description:{story:"带角标",...(W=(w=d.parameters)==null?void 0:w.docs)==null?void 0:W.description}}};var q,U,V,D,H;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => {
    const [activeKey, setActiveKey] = useState('home');
    return <div className="relative h-64 border border-border rounded-lg overflow-hidden">
        <div className="p-4 text-sm text-muted-foreground">页面内容区域</div>
        <TabBar items={baseItems} activeKey={activeKey} onChange={setActiveKey} fixed />
      </div>;
  }
}`,...(V=(U=l.parameters)==null?void 0:U.docs)==null?void 0:V.source},description:{story:"固定底部",...(H=(D=l.parameters)==null?void 0:D.docs)==null?void 0:H.description}}};var _,E,F,L,O;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => {
    const [activeKey, setActiveKey] = useState('home');
    const items: TabBarItem[] = [{
      key: 'home',
      label: '首页',
      icon: <Home size={20} />
    }, {
      key: 'search',
      label: '搜索',
      icon: <Search size={20} />
    }, {
      key: 'locked',
      label: '锁定',
      icon: <User size={20} />,
      disabled: true
    }, {
      key: 'me',
      label: '我的',
      icon: <User size={20} />
    }];
    return <TabBar items={items} activeKey={activeKey} onChange={setActiveKey} />;
  }
}`,...(F=(E=m.parameters)==null?void 0:E.docs)==null?void 0:F.source},description:{story:"禁用项",...(O=(L=m.parameters)==null?void 0:L.docs)==null?void 0:O.description}}};var R,P,G,J,M;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => {
    const [activeKey, setActiveKey] = useState('home');
    return <TabBar items={baseItems} activeKey={activeKey} onChange={setActiveKey} bordered={false} />;
  }
}`,...(G=(P=u.parameters)==null?void 0:P.docs)==null?void 0:G.source},description:{story:"无边框",...(M=(J=u.parameters)==null?void 0:J.docs)==null?void 0:M.description}}};var Q,X,Y,Z,$;p.parameters={...p.parameters,docs:{...(Q=p.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => {
    const [activeKey, setActiveKey] = useState('home');
    const items: TabBarItem[] = [{
      key: 'home',
      label: '首页',
      icon: <Home size={20} />
    }, {
      key: 'msg',
      label: '消息',
      icon: <ShoppingCart size={20} />,
      badge: {
        type: 'number',
        count: 120
      }
    }, {
      key: 'cart',
      label: '购物车',
      icon: <Search size={20} />,
      badge: {
        type: 'number',
        count: 0
      }
    }, {
      key: 'me',
      label: '我的',
      icon: <User size={20} />
    }];
    return <TabBar items={items} activeKey={activeKey} onChange={setActiveKey} />;
  }
}`,...(Y=(X=p.parameters)==null?void 0:X.docs)==null?void 0:Y.source},description:{story:"大数字角标",...($=(Z=p.parameters)==null?void 0:Z.docs)==null?void 0:$.description}}};const Ae=["Default","WithBadge","Fixed","WithDisabled","NoBorder","LargeBadge"];export{c as Default,l as Fixed,p as LargeBadge,u as NoBorder,d as WithBadge,m as WithDisabled,Ae as __namedExportsOrder,Te as default};
