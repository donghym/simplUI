import{j as a}from"./jsx-runtime-CDt2p4po.js";import{r as p}from"./index-GiUgBvb1.js";import{a as x}from"./utils-BEhiKRD9.js";import{c as E}from"./index-C08JwjkN.js";import{c as G}from"./createLucideIcon-CZe00VV7.js";/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ee=G("LayoutGrid",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ae=G("List",[["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 18h.01",key:"1tta3j"}],["path",{d:"M3 6h.01",key:"1rqtza"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 18h13",key:"1lx6n3"}],["path",{d:"M8 6h13",key:"ik3vkj"}]]),te=E("inline-flex rounded-md bg-[#f5f5f5] p-0.5"),se=E("flex items-center gap-1 whitespace-nowrap border-none rounded transition-all duration-200",{variants:{active:{true:"bg-white text-primary-600 font-medium shadow-[0_2px_4px_rgba(0,0,0,0.1)] ring-1 ring-gray-200",false:"bg-transparent text-[#595959] font-normal shadow-none"},disabled:{true:"cursor-not-allowed text-[#bfbfbf]",false:"cursor-pointer"},size:{large:"px-4 py-1.5 text-base",middle:"px-3 py-1 text-sm",small:"px-2 py-0.5 text-xs"}},compoundVariants:[{active:!0,disabled:!0,className:"bg-white text-[#bfbfbf]"}],defaultVariants:{active:!1,disabled:!1,size:"middle"}});function g(e){return typeof e=="string"}function S(e){return g(e)?e:e.value}function ne(e){return g(e)?e:e.label??e.value}function re(e){return g(e)?!1:!!e.disabled}function le(e){return g(e)?void 0:e.icon}const s=p.forwardRef(({options:e,value:r,defaultValue:A,onChange:l,disabled:n=!1,componentSize:v="middle",style:B,className:Q},R)=>{const f=r!==void 0,Y=e.length>0&&e[0]?S(e[0]):"",[P,F]=p.useState(A??Y),H=f?r:P,J=p.useCallback(t=>{n||(f||F(t),l==null||l(t))},[n,f,l]),U=v==="large"?"large":v==="small"?"small":"middle";return a.jsx("div",{ref:R,className:x(te(),n&&"sui-segmented--disabled",Q),style:B,children:e.map(t=>{const y=S(t),X=ne(t),b=re(t),Z=le(t),$=H===y;return a.jsxs("button",{type:"button",className:x(se({active:$,disabled:n||b,size:U})),onClick:()=>!b&&J(y),disabled:n||b,children:[Z,X]},y)})})});s.displayName="Segmented";s.__docgenInfo={description:`Segmented 分段控制器组件

用于展示多个选项并允许用户选择其中一项。

### 何时使用
- 用于在多个备选项中进行单选
- 切换选项时，关联区域的内容会发生变化

### 示例
\`\`\`tsx
<Segmented options={['Daily', 'Weekly', 'Monthly']} />
\`\`\``,methods:[],displayName:"Segmented",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(string | SegmentedOption)[]"},description:"选项"},value:{required:!1,tsType:{name:"string"},description:"当前选中的值"},defaultValue:{required:!1,tsType:{name:"string"},description:"默认选中的值"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"选中变化的回调"},disabled:{required:!1,tsType:{name:"boolean"},description:"是否禁用",defaultValue:{value:"false",computed:!1}},componentSize:{required:!1,tsType:{name:"union",raw:"'large' | 'middle' | 'small'",elements:[{name:"literal",value:"'large'"},{name:"literal",value:"'middle'"},{name:"literal",value:"'small'"}]},description:"尺寸",defaultValue:{value:"'middle'",computed:!1}},style:{required:!1,tsType:{name:"CSSProperties"},description:"自定义样式"},className:{required:!1,tsType:{name:"string"},description:"自定义类名"}}};const ue={title:"数据展示/Segmented 分段控制器",component:s,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"用于展示多个选项并允许用户选择其中一项。"}}},argTypes:{componentSize:{control:"select",options:["large","middle","small"]},disabled:{control:"boolean"}}},i={args:{options:["Daily","Weekly","Monthly","Quarterly","Yearly"],defaultValue:"Daily"}},o={render:()=>a.jsxs("div",{className:"flex flex-col gap-4",children:[a.jsx(s,{componentSize:"large",options:["Large","Segmented"]}),a.jsx(s,{componentSize:"middle",options:["Default","Segmented"]}),a.jsx(s,{componentSize:"small",options:["Small","Segmented"]})]})},d={args:{options:["Map","Transit","Satellite"],disabled:!0}},c={args:{options:[{label:"List",value:"list"},{label:"Map",value:"map",disabled:!0},{label:"Kanban",value:"kanban"}]}},m={args:{options:[{label:"List",value:"list",icon:a.jsx(ae,{className:"h-4 w-4"})},{label:"Kanban",value:"kanban",icon:a.jsx(ee,{className:"h-4 w-4"})}]}},u={render:()=>{const[e,r]=p.useState("Map");return a.jsxs("div",{children:[a.jsx(s,{options:["Map","Transit","Satellite"],value:e,onChange:r}),a.jsxs("div",{className:"mt-4",children:["Selected: ",e]})]})}};var h,k,w;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    options: ['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly'],
    defaultValue: 'Daily'
  }
}`,...(w=(k=i.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var z,M,V;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <Segmented componentSize="large" options={['Large', 'Segmented']} />
      <Segmented componentSize="middle" options={['Default', 'Segmented']} />
      <Segmented componentSize="small" options={['Small', 'Segmented']} />
    </div>
}`,...(V=(M=o.parameters)==null?void 0:M.docs)==null?void 0:V.source}}};var j,L,N;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    options: ['Map', 'Transit', 'Satellite'],
    disabled: true
  }
}`,...(N=(L=d.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var D,T,q;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    options: [{
      label: 'List',
      value: 'list'
    }, {
      label: 'Map',
      value: 'map',
      disabled: true
    }, {
      label: 'Kanban',
      value: 'kanban'
    }]
  }
}`,...(q=(T=c.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};var O,I,_;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    options: [{
      label: 'List',
      value: 'list',
      icon: <List className="h-4 w-4" />
    }, {
      label: 'Kanban',
      value: 'kanban',
      icon: <LayoutGrid className="h-4 w-4" />
    }]
  }
}`,...(_=(I=m.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};var C,W,K;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('Map');
    return <div>
        <Segmented options={['Map', 'Transit', 'Satellite']} value={value} onChange={setValue} />
        <div className="mt-4">Selected: {value}</div>
      </div>;
  }
}`,...(K=(W=u.parameters)==null?void 0:W.docs)==null?void 0:K.source}}};const pe=["Basic","Sizes","Disabled","DisabledOption","WithIcon","Controlled"];export{i as Basic,u as Controlled,d as Disabled,c as DisabledOption,o as Sizes,m as WithIcon,pe as __namedExportsOrder,ue as default};
