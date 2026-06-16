import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as T}from"./index-GiUgBvb1.js";import{a as ue}from"./utils-BEhiKRD9.js";import{c as x}from"./index-C08JwjkN.js";import{M as pe}from"./minus-DzxWgTKt.js";import{c as g}from"./createLucideIcon-CZe00VV7.js";import{D as ae}from"./dollar-sign-T_TAX4Kg.js";import{S as se}from"./shopping-cart-CpkgNqKj.js";import{E as ne}from"./eye-CBNVHkm6.js";/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const me=g("ArrowDownRight",[["path",{d:"m7 7 10 10",key:"1fmybs"}],["path",{d:"M17 7v10H7",key:"6fjiku"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fe=g("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ie=g("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]),xe=x("sui-statistic-card rounded-lg border border-border bg-background p-4 shadow-sm",{variants:{},defaultVariants:{}}),ge=x("text-sm text-muted-foreground",{variants:{},defaultVariants:{}}),he=x("text-2xl font-semibold text-foreground tabular-nums",{variants:{},defaultVariants:{}}),ve=x("inline-flex items-center gap-0.5 text-xs font-medium",{variants:{trend:{up:"text-success-600",down:"text-danger-600",flat:"text-muted-foreground"}},defaultVariants:{trend:"flat"}}),we={up:fe,down:me,flat:pe},Ne=(t,a)=>typeof t=="string"?t:a!==void 0&&a>0?t.toFixed(a):t.toLocaleString(),r=T.forwardRef((t,a)=>{const{className:oe,title:ce,value:h,suffix:v,prefix:w,trend:s,trendValue:N,precision:y,loading:j=!1,icon:V,footer:S,...de}=t,le=T.useMemo(()=>Ne(h,y),[h,y]),b=s?we[s]:null;return e.jsxs("div",{ref:a,className:ue(xe(),oe),...de,children:[e.jsxs("div",{className:"flex items-start justify-between",children:[e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx("div",{className:ge(),children:ce}),e.jsx("div",{className:he(),children:j?e.jsx("span",{className:"inline-block h-7 w-24 animate-pulse rounded bg-muted"}):e.jsxs(e.Fragment,{children:[w&&e.jsx("span",{className:"mr-1 text-base font-normal",children:w}),le,v&&e.jsx("span",{className:"ml-1 text-base font-normal text-muted-foreground",children:v})]})}),s&&!j&&e.jsxs("div",{className:ve({trend:s}),children:[b&&e.jsx(b,{className:"h-3.5 w-3.5"}),N&&e.jsx("span",{children:N})]})]}),V&&e.jsx("div",{className:"flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-500",children:V})]}),S&&e.jsx("div",{className:"mt-3 border-t border-border pt-3 text-sm text-muted-foreground",children:S})]})});r.displayName="StatisticCard";r.__docgenInfo={description:"统计卡片组件",methods:[],displayName:"StatisticCard",props:{title:{required:!0,tsType:{name:"string"},description:"卡片标题"},value:{required:!0,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"数值，支持数字或字符串"},suffix:{required:!1,tsType:{name:"string"},description:"数值后缀，如 '%'、'元'"},prefix:{required:!1,tsType:{name:"ReactNode"},description:"数值前缀，如 '¥'"},trend:{required:!1,tsType:{name:"union",raw:"'up' | 'down' | 'flat'",elements:[{name:"literal",value:"'up'"},{name:"literal",value:"'down'"},{name:"literal",value:"'flat'"}]},description:"趋势方向。up 显示上升箭头+涨色，down 显示下降箭头+跌色"},trendValue:{required:!1,tsType:{name:"string"},description:"趋势值文本，如 '+12.5%'"},precision:{required:!1,tsType:{name:"number"},description:"小数精度，默认 0"},loading:{required:!1,tsType:{name:"boolean"},description:"加载中状态"},icon:{required:!1,tsType:{name:"ReactNode"},description:"左侧图标"},footer:{required:!1,tsType:{name:"ReactNode"},description:"底部内容"}},composes:["Omit"]};const De={title:"数据展示/StatisticCard 统计卡片",component:r,tags:["autodocs"],parameters:{layout:"padded"},argTypes:{title:{control:"text",description:"卡片标题"},value:{control:"number",description:"数值，支持数字或字符串"},trend:{control:"select",options:["up","down","flat"],description:"趋势方向"},trendValue:{control:"text",description:"趋势值文本"},precision:{control:"number",description:"小数精度"},loading:{control:"boolean",description:"加载中状态"}}},n={args:{title:"总用户数",value:12893}},i={args:{title:"月收入",value:56820,prefix:"¥",trend:"up",trendValue:"+12.5%",icon:e.jsx(ae,{className:"h-5 w-5"})}},o={args:{title:"退货率",value:3.2,suffix:"%",precision:1,trend:"down",trendValue:"-2.1%",icon:e.jsx(se,{className:"h-5 w-5"})}},c={args:{title:"页面浏览量",value:45231,trend:"flat",trendValue:"0%",icon:e.jsx(ne,{className:"h-5 w-5"})}},d={args:{title:"账户余额",value:99999,prefix:"¥"}},l={args:{title:"转化率",value:68.5,suffix:"%",precision:1}},u={args:{title:"活跃用户",value:8846,icon:e.jsx(ie,{className:"h-5 w-5"}),trend:"up",trendValue:"+8.3%"}},p={args:{title:"加载中",value:0,loading:!0}},m={args:{title:"总销售额",value:126560,prefix:"¥",footer:"较上月增长 12%"}},f={render:()=>e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsx(r,{title:"总用户数",value:12893,icon:e.jsx(ie,{className:"h-5 w-5"}),trend:"up",trendValue:"+12.5%"}),e.jsx(r,{title:"月收入",value:56820,prefix:"¥",icon:e.jsx(ae,{className:"h-5 w-5"}),trend:"up",trendValue:"+8.2%"}),e.jsx(r,{title:"退货率",value:3.2,suffix:"%",precision:1,icon:e.jsx(se,{className:"h-5 w-5"}),trend:"down",trendValue:"-2.1%"}),e.jsx(r,{title:"页面浏览量",value:45231,icon:e.jsx(ne,{className:"h-5 w-5"}),trend:"flat",trendValue:"0%"})]})};var k,C,W;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    title: '总用户数',
    value: 12893
  }
}`,...(W=(C=n.parameters)==null?void 0:C.docs)==null?void 0:W.source}}};var D,q,M;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    title: '月收入',
    value: 56820,
    prefix: '¥',
    trend: 'up',
    trendValue: '+12.5%',
    icon: <DollarSign className="h-5 w-5" />
  }
}`,...(M=(q=i.parameters)==null?void 0:q.docs)==null?void 0:M.source}}};var R,U,E;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    title: '退货率',
    value: 3.2,
    suffix: '%',
    precision: 1,
    trend: 'down',
    trendValue: '-2.1%',
    icon: <ShoppingCart className="h-5 w-5" />
  }
}`,...(E=(U=o.parameters)==null?void 0:U.docs)==null?void 0:E.source}}};var F,I,A;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    title: '页面浏览量',
    value: 45231,
    trend: 'flat',
    trendValue: '0%',
    icon: <Eye className="h-5 w-5" />
  }
}`,...(A=(I=c.parameters)==null?void 0:I.docs)==null?void 0:A.source}}};var L,_,H;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    title: '账户余额',
    value: 99999,
    prefix: '¥'
  }
}`,...(H=(_=d.parameters)==null?void 0:_.docs)==null?void 0:H.source}}};var O,P,z;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    title: '转化率',
    value: 68.5,
    suffix: '%',
    precision: 1
  }
}`,...(z=(P=l.parameters)==null?void 0:P.docs)==null?void 0:z.source}}};var B,G,J;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    title: '活跃用户',
    value: 8846,
    icon: <Users className="h-5 w-5" />,
    trend: 'up',
    trendValue: '+8.3%'
  }
}`,...(J=(G=u.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,X;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    title: '加载中',
    value: 0,
    loading: true
  }
}`,...(X=(Q=p.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,$;m.parameters={...m.parameters,docs:{...(Y=m.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    title: '总销售额',
    value: 126560,
    prefix: '¥',
    footer: '较上月增长 12%'
  }
}`,...($=(Z=m.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,re,te;f.parameters={...f.parameters,docs:{...(ee=f.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-2 gap-4">
      <StatisticCard title="总用户数" value={12893} icon={<Users className="h-5 w-5" />} trend="up" trendValue="+12.5%" />
      <StatisticCard title="月收入" value={56820} prefix="¥" icon={<DollarSign className="h-5 w-5" />} trend="up" trendValue="+8.2%" />
      <StatisticCard title="退货率" value={3.2} suffix="%" precision={1} icon={<ShoppingCart className="h-5 w-5" />} trend="down" trendValue="-2.1%" />
      <StatisticCard title="页面浏览量" value={45231} icon={<Eye className="h-5 w-5" />} trend="flat" trendValue="0%" />
    </div>
}`,...(te=(re=f.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};const qe=["Default","WithTrendUp","WithTrendDown","WithTrendFlat","WithPrefix","WithSuffix","WithIcon","Loading","WithFooter","Dashboard"];export{f as Dashboard,n as Default,p as Loading,m as WithFooter,u as WithIcon,d as WithPrefix,l as WithSuffix,o as WithTrendDown,c as WithTrendFlat,i as WithTrendUp,qe as __namedExportsOrder,De as default};
