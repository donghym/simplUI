import{fn as e}from"./index-DeN4tkzB.js";import{j as n}from"./jsx-runtime-CDt2p4po.js";import{r as q}from"./index-GiUgBvb1.js";import{a as B}from"./utils-BEhiKRD9.js";import{c as _}from"./index-C08JwjkN.js";const E=_("sui-batch-operation fixed left-0 right-0 z-50 flex items-center justify-between px-6 py-3 bg-background border shadow-lg transition-all duration-300",{variants:{position:{top:"top-0 border-b",bottom:"bottom-0 border-t"}},defaultVariants:{position:"bottom"}}),M=(c,d)=>{const{label:u,onClick:t,danger:p=!1,disabled:o=!1}=c;return n.jsx("button",{type:"button",disabled:o,onClick:t,className:B("sui-batch-operation-action px-3 py-1.5 text-sm rounded-md font-medium transition-colors duration-200","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-1","disabled:pointer-events-none disabled:opacity-50",p?"bg-danger-500 text-white hover:bg-danger-600 active:bg-danger-700":"bg-primary-500 text-white hover:bg-primary-600 active:bg-primary-700"),children:u},d)},m=q.forwardRef((c,d)=>{const{className:u,selectedCount:t,actions:p,onClear:o,position:D="bottom",...O}=c;return t<=0?null:n.jsxs("div",{ref:d,role:"toolbar","aria-label":`已选中 ${t} 项，批量操作栏`,className:B("sui-batch-operation",E({position:D}),u),...O,children:[n.jsxs("div",{className:"flex items-center gap-2",children:[n.jsxs("span",{className:"text-sm text-muted-foreground",children:["已选择 ",n.jsx("span",{className:"font-semibold text-primary-500",children:t})," 项"]}),o&&n.jsx("button",{type:"button",onClick:o,className:"text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 underline underline-offset-2",children:"清空"})]}),n.jsx("div",{className:"flex items-center gap-2",children:p.map(M)})]})});m.displayName="BatchOperation";m.__docgenInfo={description:"批量操作栏组件",methods:[],displayName:"BatchOperation",props:{selectedCount:{required:!0,tsType:{name:"number"},description:"已选中数量"},actions:{required:!0,tsType:{name:"Array",elements:[{name:"BatchAction"}],raw:"BatchAction[]"},description:"操作按钮列表"},onClear:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"清空选择回调"},position:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"}]},description:"位置，默认 'bottom'"}},composes:["HTMLAttributes","VariantProps"]};const z={title:"数据展示/BatchOperation 批量操作栏",component:m,tags:["autodocs"],parameters:{layout:"padded"},argTypes:{selectedCount:{control:"number",description:"已选中数量"},position:{control:"select",options:["top","bottom"],description:"操作栏位置"},onClear:{action:"清空选择",description:"清空选择回调"}}},r={args:{selectedCount:3,actions:[{label:"批量删除",onClick:e(),danger:!0},{label:"批量导出",onClick:e()},{label:"批量移动",onClick:e()}],onClear:e()}},a={args:{selectedCount:5,position:"top",actions:[{label:"批量删除",onClick:e(),danger:!0},{label:"批量导出",onClick:e()}],onClear:e()}},s={args:{selectedCount:2,actions:[{label:"批量删除",onClick:e(),danger:!0},{label:"批量导出",onClick:e(),disabled:!0},{label:"批量移动",onClick:e()}],onClear:e()}},i={args:{selectedCount:10,actions:[{label:"批量删除",onClick:e(),danger:!0},{label:"批量归档",onClick:e(),danger:!0},{label:"批量导出",onClick:e()}],onClear:e()}},l={args:{selectedCount:0,actions:[{label:"批量删除",onClick:e(),danger:!0}],onClear:e()}};var b,g,f;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    selectedCount: 3,
    actions: [{
      label: '批量删除',
      onClick: fn(),
      danger: true
    }, {
      label: '批量导出',
      onClick: fn()
    }, {
      label: '批量移动',
      onClick: fn()
    }],
    onClear: fn()
  }
}`,...(f=(g=r.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var C,h,k;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    selectedCount: 5,
    position: 'top',
    actions: [{
      label: '批量删除',
      onClick: fn(),
      danger: true
    }, {
      label: '批量导出',
      onClick: fn()
    }],
    onClear: fn()
  }
}`,...(k=(h=a.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var x,y,v;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    selectedCount: 2,
    actions: [{
      label: '批量删除',
      onClick: fn(),
      danger: true
    }, {
      label: '批量导出',
      onClick: fn(),
      disabled: true
    }, {
      label: '批量移动',
      onClick: fn()
    }],
    onClear: fn()
  }
}`,...(v=(y=s.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var j,N,A;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    selectedCount: 10,
    actions: [{
      label: '批量删除',
      onClick: fn(),
      danger: true
    }, {
      label: '批量归档',
      onClick: fn(),
      danger: true
    }, {
      label: '批量导出',
      onClick: fn()
    }],
    onClear: fn()
  }
}`,...(A=(N=i.parameters)==null?void 0:N.docs)==null?void 0:A.source}}};var w,T,S;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    selectedCount: 0,
    actions: [{
      label: '批量删除',
      onClick: fn(),
      danger: true
    }],
    onClear: fn()
  }
}`,...(S=(T=l.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};const H=["Default","TopPosition","WithDisabledAction","MultipleDangerActions","ZeroSelected"];export{r as Default,i as MultipleDangerActions,a as TopPosition,s as WithDisabledAction,l as ZeroSelected,H as __namedExportsOrder,z as default};
