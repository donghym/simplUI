import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as V}from"./index-GiUgBvb1.js";import{I as l}from"./index-SE3XbDQQ.js";import{D as ye}from"./dollar-sign-T_TAX4Kg.js";import{c as Ne}from"./createLucideIcon-CZe00VV7.js";import"./utils-BEhiKRD9.js";import"./index-C08JwjkN.js";import"./chevron-up-CiCbXlai.js";import"./chevron-down-CY-YwltC.js";import"./x-B-5N0Ikz.js";/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ve=Ne("Percent",[["line",{x1:"19",x2:"5",y1:"5",y2:"19",key:"1x9vlm"}],["circle",{cx:"6.5",cy:"6.5",r:"2.5",key:"4mh3h7"}],["circle",{cx:"17.5",cy:"17.5",r:"2.5",key:"1mdrzq"}]]),Me={title:"数据录入/InputNumber 数字输入框",component:l,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"数字输入框用于输入和编辑数值。适用于金额、数量、百分比等纯数字场景，支持步进、精度控制、范围限制和格式化展示。"}}},argTypes:{status:{control:"select",options:["error","warning"],description:"校验状态，error 为错误，warning 为警告"}}},c={args:{placeholder:"请输入数字"}},u={args:{defaultValue:42}},i={args:{defaultValue:0,step:5}},d={args:{defaultValue:50,min:0,max:100,step:1}},m={args:{defaultValue:3.14159,precision:2}},p={parameters:{docs:{description:{story:"受控模式示例，展示如何通过外部状态管理数值，并结合最小值和最大值限制。"}}},render:()=>{const[a,y]=V.useState(10);return e.jsxs("div",{className:"flex flex-col gap-2 w-72",children:[e.jsx(l,{value:a,onChange:y,min:0,max:100}),e.jsxs("p",{className:"text-sm text-gray-500",children:["当前值：",a]})]})}},x={args:{status:"error",defaultValue:5}},g={args:{status:"warning",defaultValue:5}},f={args:{defaultValue:100,allowClear:!0}},h={args:{prefix:e.jsx(ye,{className:"h-4 w-4"}),defaultValue:99}},b={args:{suffix:e.jsx(Ve,{className:"h-4 w-4"}),defaultValue:25,precision:0}},v={args:{disabled:!0,defaultValue:7}},t={render:()=>{const[a,y]=V.useState(1e6),N=r=>r===null?"":r.toLocaleString("en-US"),fe=r=>{const n=r.replace(/,/g,""),s=Number(n);return isNaN(s)?null:s},[he,S]=V.useState(()=>N(a)),be=r=>{const n=r.target.value;S(n);const s=fe(n);s!==null&&y(s)},ve=()=>{a!==null&&S(N(a))};return e.jsxs("div",{className:"space-y-4 w-72",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"金额（千分位格式化）"}),e.jsx("input",{type:"text",inputMode:"numeric",value:he,onChange:be,onBlur:ve,placeholder:"请输入金额",className:"flex h-[40px] w-full rounded-md border border-input bg-white px-3 text-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-primary-500"})]}),e.jsxs("p",{className:"text-sm text-gray-500",children:["原始值：",a]}),e.jsxs("p",{className:"text-sm text-gray-500",children:["格式化：",N(a)]})]})}},o={parameters:{docs:{description:{story:"展示小、默认、大三种尺寸的数字输入框，适应不同布局密度的需求。"}}},render:()=>e.jsxs("div",{className:"space-y-4 w-72",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"小尺寸"}),e.jsx(l,{defaultValue:10,className:"h-[28px] text-xs px-2"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"默认尺寸"}),e.jsx(l,{defaultValue:10})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1",children:"大尺寸"}),e.jsx(l,{defaultValue:10,className:"h-[48px] text-base px-4"})]})]})};var w,j,W;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    placeholder: '请输入数字'
  }
}`,...(W=(j=c.parameters)==null?void 0:j.docs)==null?void 0:W.source}}};var C,D,I;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    defaultValue: 42
  }
}`,...(I=(D=u.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var k,B,E;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    defaultValue: 0,
    step: 5
  }
}`,...(E=(B=i.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var M,P,T;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    defaultValue: 50,
    min: 0,
    max: 100,
    step: 1
  }
}`,...(T=(P=d.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};var F,L,z;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    defaultValue: 3.14159,
    precision: 2
  }
}`,...(z=(L=m.parameters)==null?void 0:L.docs)==null?void 0:z.source}}};var A,R,U;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '受控模式示例，展示如何通过外部状态管理数值，并结合最小值和最大值限制。'
      }
    }
  },
  render: () => {
    const [val, setVal] = useState<number | null>(10);
    return <div className="flex flex-col gap-2 w-72">
        <InputNumber value={val} onChange={setVal} min={0} max={100} />
        <p className="text-sm text-gray-500">当前值：{val}</p>
      </div>;
  }
}`,...(U=(R=p.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};var _,q,H;x.parameters={...x.parameters,docs:{...(_=x.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    status: 'error',
    defaultValue: 5
  }
}`,...(H=(q=x.parameters)==null?void 0:q.docs)==null?void 0:H.source}}};var O,G,J;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    status: 'warning',
    defaultValue: 5
  }
}`,...(J=(G=g.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,X;f.parameters={...f.parameters,docs:{...(K=f.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    defaultValue: 100,
    allowClear: true
  }
}`,...(X=(Q=f.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,$;h.parameters={...h.parameters,docs:{...(Y=h.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    prefix: <DollarSign className="h-4 w-4" />,
    defaultValue: 99
  }
}`,...($=(Z=h.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,ae,re;b.parameters={...b.parameters,docs:{...(ee=b.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    suffix: <Percent className="h-4 w-4" />,
    defaultValue: 25,
    precision: 0
  }
}`,...(re=(ae=b.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var se,te,oe;v.parameters={...v.parameters,docs:{...(se=v.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultValue: 7
  }
}`,...(oe=(te=v.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var le,ne,ce,ue,ie;t.parameters={...t.parameters,docs:{...(le=t.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<number | null>(1000000);
    const formatWithThousand = (num: number | null): string => {
      if (num === null) return '';
      return num.toLocaleString('en-US');
    };
    const parseFormatted = (str: string): number | null => {
      const cleaned = str.replace(/,/g, '');
      const parsed = Number(cleaned);
      return isNaN(parsed) ? null : parsed;
    };
    const [displayValue, setDisplayValue] = useState(() => formatWithThousand(value));
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const raw = e.target.value;
      setDisplayValue(raw);
      const parsed = parseFormatted(raw);
      if (parsed !== null) {
        setValue(parsed);
      }
    };
    const handleBlur = () => {
      if (value !== null) {
        setDisplayValue(formatWithThousand(value));
      }
    };
    return <div className="space-y-4 w-72">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">金额（千分位格式化）</label>
          <input type="text" inputMode="numeric" value={displayValue} onChange={handleInputChange} onBlur={handleBlur} placeholder="请输入金额" className="flex h-[40px] w-full rounded-md border border-input bg-white px-3 text-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-primary-500" />
        </div>
        <p className="text-sm text-gray-500">原始值：{value}</p>
        <p className="text-sm text-gray-500">格式化：{formatWithThousand(value)}</p>
      </div>;
  }
}`,...(ce=(ne=t.parameters)==null?void 0:ne.docs)==null?void 0:ce.source},description:{story:"格式化千分位",...(ie=(ue=t.parameters)==null?void 0:ue.docs)==null?void 0:ie.description}}};var de,me,pe,xe,ge;o.parameters={...o.parameters,docs:{...(de=o.parameters)==null?void 0:de.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '展示小、默认、大三种尺寸的数字输入框，适应不同布局密度的需求。'
      }
    }
  },
  render: () => <div className="space-y-4 w-72">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">小尺寸</label>
        <InputNumber defaultValue={10} className="h-[28px] text-xs px-2" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">默认尺寸</label>
        <InputNumber defaultValue={10} />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">大尺寸</label>
        <InputNumber defaultValue={10} className="h-[48px] text-base px-4" />
      </div>
    </div>
}`,...(pe=(me=o.parameters)==null?void 0:me.docs)==null?void 0:pe.source},description:{story:"尺寸变体",...(ge=(xe=o.parameters)==null?void 0:xe.docs)==null?void 0:ge.description}}};const Pe=["Basic","WithDefault","WithStep","MinMax","WithPrecision","Controlled","ErrorStatus","WarningStatus","AllowClear","WithPrefix","WithSuffix","Disabled","FormatterDemo","SizeVariants"];export{f as AllowClear,c as Basic,p as Controlled,v as Disabled,x as ErrorStatus,t as FormatterDemo,d as MinMax,o as SizeVariants,g as WarningStatus,u as WithDefault,m as WithPrecision,h as WithPrefix,i as WithStep,b as WithSuffix,Pe as __namedExportsOrder,Me as default};
