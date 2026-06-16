import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as L}from"./index-GiUgBvb1.js";import{B as l,a as d}from"./index-B27MKJIv.js";import{C as O}from"./chevron-right-V463yFHa.js";import{H as q}from"./house-DR9pGCa3.js";import{c as A}from"./createLucideIcon-CZe00VV7.js";import"./utils-BEhiKRD9.js";import"./index-C08JwjkN.js";import"./chevron-down-CY-YwltC.js";/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F=A("Ellipsis",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]]),Z={title:"导航/Breadcrumb 面包屑",component:l,tags:["autodocs"],argTypes:{separator:{control:"text",description:'分隔符，默认 "/"，可以是字符串或 ReactNode（如图标）'}},parameters:{layout:"padded",docs:{description:{component:`显示当前页面在系统层级结构中的位置，并可向上返回。

- 路径导航：用于多级页面，帮助用户了解当前位置并快速返回上级。
- 自定义分隔符：支持使用图标或文字作为层级分隔符。
- 层级收起：当路径层级过多时，支持收起中间层级以节省空间。`}}}},r={args:{items:[{title:"首页",href:"/"},{title:"产品",href:"/products"},{title:"电子产品",href:"/products/electronics"},{title:"手机"}]}},s={args:{items:[{title:"首页",href:"/"},{title:"分类",href:"/category"},{title:"商品"}],separator:e.jsx(O,{className:"h-4 w-4"})}},a={args:{items:[{title:e.jsx(q,{className:"h-4 w-4"}),href:"/"},{title:"仪表盘",href:"/dashboard"},{title:"分析"}]}},o={args:{items:[{title:"首页",href:"/"},{title:"产品",dropdownMenu:e.jsxs("div",{className:"p-2 bg-white shadow rounded",children:[e.jsx("a",{href:"/products/electronics",children:"电子产品"}),e.jsx("a",{href:"/products/clothing",children:"服装"})]})},{title:"当前页面"}]}},c={args:{items:[{title:"首页",href:"/"},{title:"禁用",disabled:!0},{title:"激活"}]}},i={parameters:{docs:{description:{story:"使用子组件方式组合面包屑，适用于需要更灵活控制每项内容和样式的场景。"}}},render:()=>e.jsxs(l,{separator:"/",children:[e.jsx(d,{href:"/",children:"首页"}),e.jsx(d,{href:"/products",children:"产品"}),e.jsx(d,{children:"当前"})]})},n={parameters:{docs:{description:{story:"当路径层级过多时，通过收起中间层级并显示省略号，节省展示空间。"}}},render:()=>{const t=[{title:"首页",href:"/"},{title:"产品中心",href:"/products"},{title:"电子产品",href:"/products/electronics"},{title:"手机",href:"/products/electronics/phones"},{title:"智能手机"}],R=3,[m,p]=L.useState(!1);let u=t;if(!m&&t.length>R){const z=t[0],_=t.slice(-2);u=[z,{title:e.jsx("span",{className:"inline-flex items-center gap-1 cursor-pointer text-muted-foreground hover:text-foreground",onClick:()=>p(!0),children:e.jsx(F,{className:"h-4 w-4"})})},..._]}return e.jsxs("div",{className:"space-y-2",children:[e.jsx(l,{items:u,separator:"/"}),m&&e.jsx("button",{type:"button",className:"text-xs text-muted-foreground hover:text-foreground",onClick:()=>p(!1),children:"收起"})]})}};var h,f,x;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    items: [{
      title: '首页',
      href: '/'
    }, {
      title: '产品',
      href: '/products'
    }, {
      title: '电子产品',
      href: '/products/electronics'
    }, {
      title: '手机'
    }]
  }
}`,...(x=(f=r.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var g,b,y;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    items: [{
      title: '首页',
      href: '/'
    }, {
      title: '分类',
      href: '/category'
    }, {
      title: '商品'
    }],
    separator: <ChevronRight className="h-4 w-4" />
  }
}`,...(y=(b=s.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var I,j,B;a.parameters={...a.parameters,docs:{...(I=a.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    items: [{
      title: <Home className="h-4 w-4" />,
      href: '/'
    }, {
      title: '仪表盘',
      href: '/dashboard'
    }, {
      title: '分析'
    }]
  }
}`,...(B=(j=a.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};var C,w,N;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    items: [{
      title: '首页',
      href: '/'
    }, {
      title: '产品',
      dropdownMenu: <div className="p-2 bg-white shadow rounded">
            <a href="/products/electronics">电子产品</a>
            <a href="/products/clothing">服装</a>
          </div>
    }, {
      title: '当前页面'
    }]
  }
}`,...(N=(w=o.parameters)==null?void 0:w.docs)==null?void 0:N.source}}};var v,S,W;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    items: [{
      title: '首页',
      href: '/'
    }, {
      title: '禁用',
      disabled: true
    }, {
      title: '激活'
    }]
  }
}`,...(W=(S=c.parameters)==null?void 0:S.docs)==null?void 0:W.source}}};var E,k,D;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '使用子组件方式组合面包屑，适用于需要更灵活控制每项内容和样式的场景。'
      }
    }
  },
  render: () => <Breadcrumb separator="/">
      <BreadcrumbItem href="/">首页</BreadcrumbItem>
      <BreadcrumbItem href="/products">产品</BreadcrumbItem>
      <BreadcrumbItem>当前</BreadcrumbItem>
    </Breadcrumb>
}`,...(D=(k=i.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};var M,T,H;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '当路径层级过多时，通过收起中间层级并显示省略号，节省展示空间。'
      }
    }
  },
  render: () => {
    const allItems: BreadcrumbItemType[] = [{
      title: '首页',
      href: '/'
    }, {
      title: '产品中心',
      href: '/products'
    }, {
      title: '电子产品',
      href: '/products/electronics'
    }, {
      title: '手机',
      href: '/products/electronics/phones'
    }, {
      title: '智能手机'
    }];
    const maxCount = 3;
    const [expanded, setExpanded] = useState(false);
    let displayItems: BreadcrumbItemType[] = allItems;
    if (!expanded && allItems.length > maxCount) {
      const head: BreadcrumbItemType = allItems[0]!;
      const tail: BreadcrumbItemType[] = allItems.slice(-2);
      displayItems = [head, {
        title: <span className="inline-flex items-center gap-1 cursor-pointer text-muted-foreground hover:text-foreground" onClick={() => setExpanded(true)}>
              <MoreHorizontal className="h-4 w-4" />
            </span>
      }, ...tail];
    }
    return <div className="space-y-2">
        <Breadcrumb items={displayItems} separator="/" />
        {expanded && <button type="button" className="text-xs text-muted-foreground hover:text-foreground" onClick={() => setExpanded(false)}>
            收起
          </button>}
      </div>;
  }
}`,...(H=(T=n.parameters)==null?void 0:T.docs)==null?void 0:H.source}}};const $=["Default","WithCustomSeparator","WithIcon","WithDropdown","DisabledItem","WithChildren","WithMaxCount"];export{r as Default,c as DisabledItem,i as WithChildren,s as WithCustomSeparator,o as WithDropdown,a as WithIcon,n as WithMaxCount,$ as __namedExportsOrder,Z as default};
