import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as t}from"./index-GiUgBvb1.js";import{a as E}from"./utils-BEhiKRD9.js";import{c as P}from"./index-C08JwjkN.js";const L=P("sui-float-button relative inline-flex items-center justify-center h-10 shadow-[0_2px_8px_rgba(0,0,0,0.15)] cursor-pointer gap-1",{variants:{type:{default:"bg-white text-[#262626] border border-[#f0f0f0]",primary:"bg-[#1677FF] text-white border-none"},shapeVariant:{circle:"w-10 rounded-full p-0",square:"w-auto rounded-lg px-3"}},defaultVariants:{type:"default",shapeVariant:"circle"}}),H=P("absolute bg-[#262626] text-white px-2 py-1 rounded text-xs whitespace-nowrap z-[1070]",{variants:{placement:{right:"left-full ml-2",left:"right-full mr-2",top:"bottom-full mb-2",bottom:"top-full mt-2"}},defaultVariants:{placement:"right"}}),f=t.forwardRef(({icon:a,description:s,type:n="default",shapeVariant:g="circle",onClick:v,style:y,className:x,tooltip:i,placement:r="right"},q)=>{const[b,l]=t.useState(!1),w=t.useCallback(()=>l(!0),[]),W=t.useCallback(()=>l(!1),[]);return e.jsxs("div",{ref:q,className:E(L({type:n,shapeVariant:g}),`sui-float-button--${n}`,x),style:y,onClick:v,onMouseEnter:w,onMouseLeave:W,children:[a,s&&e.jsx("span",{className:"text-xs whitespace-nowrap",children:s}),i&&b&&e.jsx("div",{className:H({placement:r}),children:i})]})});f.displayName="FloatButton";const N=t.forwardRef(({trigger:a,type:s="default",shapeVariant:n="circle",style:g,className:v,children:y},x)=>{const[i,r]=t.useState(!1),q=t.useCallback(()=>r(w=>!w),[]),b=t.useCallback(()=>r(!0),[]),l=t.useCallback(()=>r(!1),[]);return e.jsxs("div",{ref:x,className:E("sui-float-button-group relative inline-flex flex-col items-center gap-2",v),style:g,onMouseEnter:a==="hover"?b:void 0,onMouseLeave:a==="hover"?l:void 0,children:[i&&e.jsx("div",{className:"sui-float-button-group__menu flex flex-col gap-2 mb-2",children:y}),e.jsx(f,{icon:e.jsxs("svg",{viewBox:"64 64 896 896",width:"1em",height:"1em",fill:"currentColor",children:[e.jsx("path",{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}),e.jsx("path",{d:"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"})]}),type:s,shapeVariant:n,onClick:a==="click"?q:void 0})]})});N.displayName="FloatButtonGroup";const o=Object.assign(f,{Group:N});N.__docgenInfo={description:"FloatButton.Group 悬浮按钮组",methods:[],displayName:"FloatButtonGroup",props:{trigger:{required:!1,tsType:{name:"union",raw:"'click' | 'hover'",elements:[{name:"literal",value:"'click'"},{name:"literal",value:"'hover'"}]},description:"触发方式"},type:{required:!1,tsType:{name:"union",raw:"'default' | 'primary'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'primary'"}]},description:"设置按钮类型",defaultValue:{value:"'default'",computed:!1}},shapeVariant:{required:!1,tsType:{name:"union",raw:"'circle' | 'square'",elements:[{name:"literal",value:"'circle'"},{name:"literal",value:"'square'"}]},description:"设置按钮形状",defaultValue:{value:"'circle'",computed:!1}},style:{required:!1,tsType:{name:"CSSProperties"},description:"自定义样式"},className:{required:!1,tsType:{name:"string"},description:"自定义类名"},children:{required:!0,tsType:{name:"ReactNode"},description:"子按钮"}}};f.__docgenInfo={description:`FloatButton 悬浮按钮组件

用于在页面中悬浮展示的重要操作按钮。

### 何时使用
- 用于全局功能入口，如返回顶部、客服、反馈等
- 固定在页面可视区域的按钮

### 示例
\`\`\`tsx
<FloatButton icon={<CustomerServiceOutlined />} onClick={() => {}} />
\`\`\``,methods:[],displayName:"FloatButton",props:{icon:{required:!1,tsType:{name:"ReactNode"},description:"按钮图标"},description:{required:!1,tsType:{name:"ReactNode"},description:"按钮文字描述"},type:{required:!1,tsType:{name:"union",raw:"'default' | 'primary'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'primary'"}]},description:"设置按钮类型",defaultValue:{value:"'default'",computed:!1}},shapeVariant:{required:!1,tsType:{name:"union",raw:"'circle' | 'square'",elements:[{name:"literal",value:"'circle'"},{name:"literal",value:"'square'"}]},description:"设置按钮形状",defaultValue:{value:"'circle'",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"点击回调"},style:{required:!1,tsType:{name:"CSSProperties"},description:"自定义样式"},className:{required:!1,tsType:{name:"string"},description:"自定义类名"},tooltip:{required:!1,tsType:{name:"ReactNode"},description:"提示气泡"},placement:{required:!1,tsType:{name:"union",raw:"'top' | 'left' | 'right' | 'bottom'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"},{name:"literal",value:"'bottom'"}]},description:"按钮位置",defaultValue:{value:"'right'",computed:!1}}}};const h=e.jsxs("svg",{viewBox:"64 64 896 896",width:"1em",height:"1em",fill:"currentColor",children:[e.jsx("path",{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}),e.jsx("path",{d:"M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"})]}),K={title:"通用/FloatButton 悬浮按钮",component:o,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"用于在页面中悬浮展示的重要操作按钮。"}}},argTypes:{type:{control:"select",options:["default","primary"],description:"按钮类型，default 为默认样式，primary 为主色样式"},shapeVariant:{control:"select",options:["circle","square"],description:"按钮形状，circle 为圆形，square 为方形"},tooltip:{control:"text",description:"提示气泡内容"},description:{control:"text",description:"按钮文字描述"}}},c={args:{icon:h}},p={args:{type:"primary",icon:h}},u={args:{shapeVariant:"square",description:"帮助",icon:h}},d={args:{tooltip:"客服支持",icon:h}},m={render:()=>e.jsxs(o.Group,{trigger:"click",type:"primary",children:[e.jsx(o,{icon:e.jsx("span",{children:"1"}),tooltip:"操作一"}),e.jsx(o,{icon:e.jsx("span",{children:"2"}),tooltip:"操作二"}),e.jsx(o,{icon:e.jsx("span",{children:"3"}),tooltip:"操作三"})]})};var j,F,B;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    icon: INFO_ICON
  }
}`,...(B=(F=c.parameters)==null?void 0:F.docs)==null?void 0:B.source}}};var T,V,C;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    type: 'primary',
    icon: INFO_ICON
  }
}`,...(C=(V=p.parameters)==null?void 0:V.docs)==null?void 0:C.source}}};var _,S,O;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    shapeVariant: 'square',
    description: '帮助',
    icon: INFO_ICON
  }
}`,...(O=(S=u.parameters)==null?void 0:S.docs)==null?void 0:O.source}}};var k,I,G;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    tooltip: '客服支持',
    icon: INFO_ICON
  }
}`,...(G=(I=d.parameters)==null?void 0:I.docs)==null?void 0:G.source}}};var M,z,R;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <FloatButton.Group trigger="click" type="primary">
      <FloatButton icon={<span>1</span>} tooltip="操作一" />
      <FloatButton icon={<span>2</span>} tooltip="操作二" />
      <FloatButton icon={<span>3</span>} tooltip="操作三" />
    </FloatButton.Group>
}`,...(R=(z=m.parameters)==null?void 0:z.docs)==null?void 0:R.source}}};const Q=["Basic","Primary","Square","WithTooltip","Group"];export{c as Basic,m as Group,p as Primary,u as Square,d as WithTooltip,Q as __namedExportsOrder,K as default};
