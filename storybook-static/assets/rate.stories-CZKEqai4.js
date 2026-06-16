import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as n}from"./index-GiUgBvb1.js";import{a as I}from"./utils-BEhiKRD9.js";import{c as he}from"./index-C08JwjkN.js";import{S as Ce}from"./star-BW2nsu6a.js";import{c as we}from"./createLucideIcon-CZe00VV7.js";/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Te=we("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]),Re=he("inline-flex items-center gap-1 text-2xl select-none",{variants:{disabled:{true:"opacity-50 pointer-events-none",false:""}},defaultVariants:{disabled:!1}}),_e=he("relative cursor-pointer transition-colors duration-150",{variants:{filled:{true:"text-warning-500",false:"text-muted-foreground/30"},readonly:{true:"cursor-default",false:""}},defaultVariants:{filled:!1,readonly:!1}});function qe({index:a,value:t,allowHalf:c,readonly:l,disabled:d,character:m,onHover:u,onClick:p}){const i=t>=a+1,s=c&&t>a&&t<a+1,q=o=>{if(l||d)return;const f=o.currentTarget.getBoundingClientRect(),v=o.clientX-f.left<f.width/2;u==null||u(v&&c?a+.5:a+1)},x=o=>{if(l||d)return;const f=o.currentTarget.getBoundingClientRect(),v=o.clientX-f.left<f.width/2;p==null||p(v&&c?a+.5:a+1)},M=o=>{l||d||(o.key==="Enter"||o.key===" ")&&(o.preventDefault(),p==null||p(a+1))},b=m??e.jsx(Ce,{className:"h-6 w-6 fill-current"});return e.jsxs("span",{role:"radio","aria-label":`${a+1}星`,"aria-checked":s?"mixed":i,tabIndex:d||l?-1:0,onMouseMove:q,onMouseLeave:()=>u==null?void 0:u(0),onClick:x,onKeyDown:M,className:I(_e({filled:i||s,readonly:l}),"relative"),children:[e.jsx("span",{className:"block",children:b}),(i||s)&&e.jsx("span",{className:I("absolute inset-0 overflow-hidden",s&&"w-1/2"),style:{clipPath:s?"inset(0 50% 0 0)":void 0},children:e.jsx("span",{className:"text-warning-500",children:b})})]})}const g=n.forwardRef((a,t)=>{const{className:c,value:l,defaultValue:d=0,onChange:m,count:u=5,allowHalf:p,readonly:i,disabled:s,character:q,tooltips:x,...M}=a,[b,o]=n.useState(d),[f,v]=n.useState(0),D=l!==void 0,be=D?l:b,H=f>0?f:be,Ve=n.useCallback(r=>{i||s||(D||o(r),m==null||m(r))},[D,m,i,s]),Ne=n.useCallback(r=>{i||s||v(r)},[i,s]),Se=n.useMemo(()=>Array.from({length:u},(r,je)=>je),[u]),k=n.useMemo(()=>{if(!x||x.length===0)return null;const r=Math.ceil(H)-1;return r>=0&&r<x.length?x[r]:null},[x,H]);return e.jsxs("div",{ref:t,role:"radiogroup","aria-label":"评分","aria-disabled":s,className:I("sui-rate",Re({disabled:s}),c),...M,children:[Se.map(r=>e.jsx(qe,{index:r,value:H,allowHalf:p,readonly:i,disabled:s,character:q,onHover:Ne,onClick:Ve},r)),k&&e.jsx("span",{className:"ml-2 text-sm text-muted-foreground",children:k})]})});g.displayName="Rate";g.__docgenInfo={description:"",methods:[],displayName:"Rate",props:{value:{required:!1,tsType:{name:"number"},description:"当前评分值（受控模式），范围 0 到 count"},defaultValue:{required:!1,tsType:{name:"number"},description:"默认评分值（非受控模式），范围 0 到 count"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:"评分变化回调，参数为新评分值"},count:{required:!1,tsType:{name:"number"},description:"星星总数，默认 5"},allowHalf:{required:!1,tsType:{name:"boolean"},description:"是否允许半星选择，默认 false"},readonly:{required:!1,tsType:{name:"boolean"},description:"是否只读，只读模式下不可交互，默认 false"},disabled:{required:!1,tsType:{name:"boolean"},description:"是否禁用，禁用后不可交互且显示灰色，默认 false"},character:{required:!1,tsType:{name:"ReactNode"},description:"自定义字符，用于替换默认星星图标"},tooltips:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"提示信息数组，鼠标悬停时显示对应提示"},className:{required:!1,tsType:{name:"string"},description:"自定义类名，通过 twMerge 合并覆盖默认样式"}},composes:["Omit","VariantProps"]};const Ee={title:"数据录入/Rate 评分",component:g,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"评分组件用于对事物进行等级评定。适用于商品评价、服务满意度、内容质量打分等场景，支持半星、自定义图标和提示文案。"}}},argTypes:{count:{control:"number",description:"星星总数，默认 5"},allowHalf:{control:"boolean",description:"是否允许半星选择，默认 false"},readonly:{control:"boolean",description:"是否只读，只读模式下不可交互，默认 false"},character:{control:!1,description:"自定义字符，用于替换默认星星图标"},tooltips:{control:"object",description:"提示信息数组，鼠标悬停时显示对应提示"}}},V={args:{defaultValue:3}},N={args:{defaultValue:2.5,allowHalf:!0}},S={args:{defaultValue:4,count:5}},j={args:{defaultValue:7,count:10}},C={args:{defaultValue:3.5,readonly:!0,allowHalf:!0}},w={args:{defaultValue:2,disabled:!0}},T={args:{defaultValue:4,character:e.jsx(Te,{className:"h-5 w-5"})}},R={args:{defaultValue:0,tooltips:["极差","较差","一般","不错","极好"]}},_={parameters:{docs:{description:{story:"受控模式示例，展示如何通过外部状态管理评分值。"}}},render:()=>{const[a,t]=n.useState(3);return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("p",{children:["当前评分：",a]}),e.jsx(g,{value:a,onChange:t})]})}},y={render:()=>{const[a,t]=n.useState(0),c=["","很差","较差","一般","满意","非常满意"];return e.jsxs("div",{className:"space-y-4",children:[e.jsx(g,{value:a,onChange:t}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsxs("p",{className:"text-sm text-gray-600",children:["当前评分：",e.jsx("span",{className:"font-semibold text-gray-900",children:a})," / 5",a>0&&e.jsx("span",{className:"ml-2 text-muted-foreground",children:c[a]})]}),e.jsx("button",{type:"button",className:"px-3 py-1 text-sm rounded-md border border-border hover:bg-muted transition-colors",onClick:()=>t(0),children:"重置"})]})]})}},h={parameters:{docs:{description:{story:"通过 CSS 覆盖实现多种主题色评分，适用于品牌定制或情感化评分场景。"}}},render:()=>{const[a,t]=n.useState(3),[c,l]=n.useState(4),[d,m]=n.useState(2);return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-gray-600 mb-1",children:"红色（text-danger）"}),e.jsx(g,{value:a,onChange:t,className:"[&_.text-warning-500]:!text-danger"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-gray-600 mb-1",children:"蓝色（text-primary）"}),e.jsx(g,{value:c,onChange:l,className:"[&_.text-warning-500]:!text-primary"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-gray-600 mb-1",children:"绿色（text-success）"}),e.jsx(g,{value:d,onChange:m,className:"[&_.text-warning-500]:!text-success"})]})]})}};var A,E,L;V.parameters={...V.parameters,docs:{...(A=V.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    defaultValue: 3
  }
}`,...(L=(E=V.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var O,F,B;N.parameters={...N.parameters,docs:{...(O=N.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    defaultValue: 2.5,
    allowHalf: true
  }
}`,...(B=(F=N.parameters)==null?void 0:F.docs)==null?void 0:B.source}}};var K,P,W;S.parameters={...S.parameters,docs:{...(K=S.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    defaultValue: 4,
    count: 5
  }
}`,...(W=(P=S.parameters)==null?void 0:P.docs)==null?void 0:W.source}}};var X,Z,$;j.parameters={...j.parameters,docs:{...(X=j.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    defaultValue: 7,
    count: 10
  }
}`,...($=(Z=j.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var z,G,J;C.parameters={...C.parameters,docs:{...(z=C.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    defaultValue: 3.5,
    readonly: true,
    allowHalf: true
  }
}`,...(J=(G=C.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var Q,U,Y;w.parameters={...w.parameters,docs:{...(Q=w.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    defaultValue: 2,
    disabled: true
  }
}`,...(Y=(U=w.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var ee,ae,se;T.parameters={...T.parameters,docs:{...(ee=T.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    defaultValue: 4,
    character: <Heart className="h-5 w-5" />
  }
}`,...(se=(ae=T.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var te,re,ne;R.parameters={...R.parameters,docs:{...(te=R.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    defaultValue: 0,
    tooltips: ['极差', '较差', '一般', '不错', '极好']
  }
}`,...(ne=(re=R.parameters)==null?void 0:re.docs)==null?void 0:ne.source}}};var oe,le,ce;_.parameters={..._.parameters,docs:{...(oe=_.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '受控模式示例，展示如何通过外部状态管理评分值。'
      }
    }
  },
  render: () => {
    const [value, setValue] = useState(3);
    return <div className="space-y-4">
        <p>当前评分：{value}</p>
        <Rate value={value} onChange={setValue} />
      </div>;
  }
}`,...(ce=(le=_.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var ue,ie,de,me,pe;y.parameters={...y.parameters,docs:{...(ue=y.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(0);
    const labels = ['', '很差', '较差', '一般', '满意', '非常满意'];
    return <div className="space-y-4">
        <Rate value={value} onChange={setValue} />
        <div className="flex items-center gap-4">
          <p className="text-sm text-gray-600">
            当前评分：<span className="font-semibold text-gray-900">{value}</span> / 5
            {value > 0 && <span className="ml-2 text-muted-foreground">{labels[value]}</span>}
          </p>
          <button type="button" className="px-3 py-1 text-sm rounded-md border border-border hover:bg-muted transition-colors" onClick={() => setValue(0)}>
            重置
          </button>
        </div>
      </div>;
  }
}`,...(de=(ie=y.parameters)==null?void 0:ie.docs)==null?void 0:de.source},description:{story:"交互式受控评分",...(pe=(me=y.parameters)==null?void 0:me.docs)==null?void 0:pe.description}}};var fe,ge,xe,ve,ye;h.parameters={...h.parameters,docs:{...(fe=h.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '通过 CSS 覆盖实现多种主题色评分，适用于品牌定制或情感化评分场景。'
      }
    }
  },
  render: () => {
    const [value1, setValue1] = useState(3);
    const [value2, setValue2] = useState(4);
    const [value3, setValue3] = useState(2);
    return <div className="space-y-6">
        <div>
          <p className="text-sm text-gray-600 mb-1">红色（text-danger）</p>
          <Rate value={value1} onChange={setValue1} className="[&_.text-warning-500]:!text-danger" />
        </div>
        <div>
          <p className="text-sm text-gray-600 mb-1">蓝色（text-primary）</p>
          <Rate value={value2} onChange={setValue2} className="[&_.text-warning-500]:!text-primary" />
        </div>
        <div>
          <p className="text-sm text-gray-600 mb-1">绿色（text-success）</p>
          <Rate value={value3} onChange={setValue3} className="[&_.text-warning-500]:!text-success" />
        </div>
      </div>;
  }
}`,...(xe=(ge=h.parameters)==null?void 0:ge.docs)==null?void 0:xe.source},description:{story:"自定义颜色",...(ye=(ve=h.parameters)==null?void 0:ve.docs)==null?void 0:ye.description}}};const Le=["Default","HalfStar","FiveStars","TenStars","ReadOnly","Disabled","CustomCharacter","WithTooltips","Controlled","InteractiveControlled","CustomColor"];export{_ as Controlled,T as CustomCharacter,h as CustomColor,V as Default,w as Disabled,S as FiveStars,N as HalfStar,y as InteractiveControlled,C as ReadOnly,j as TenStars,R as WithTooltips,Le as __namedExportsOrder,Ee as default};
