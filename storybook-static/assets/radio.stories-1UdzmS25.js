import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as H}from"./index-GiUgBvb1.js";import{R as a,a as r}from"./index-DCDztqEz.js";import"./utils-BEhiKRD9.js";import"./index-C08JwjkN.js";const J={title:"数据录入/Radio 单选框",component:a,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"单选框用于在多个互斥选项中选择一项。适用于性别选择、支付方式、视图切换等场景，支持组合使用和按钮样式。"}}}},o={parameters:{docs:{description:{story:"单选框组合的基础用法，适用于在多个互斥选项中选择一项的场景。"}}},render:()=>e.jsxs(r,{defaultValue:"a",children:[e.jsx(a,{value:"a",children:"选项 A"}),e.jsx(a,{value:"b",children:"选项 B"}),e.jsx(a,{value:"c",children:"选项 C"})]})},d={parameters:{docs:{description:{story:"整组禁用状态下的单选框，适用于选项暂时不可选或权限受限的场景。"}}},render:()=>e.jsxs(r,{defaultValue:"a",disabled:!0,children:[e.jsx(a,{value:"a",children:"选项 A"}),e.jsx(a,{value:"b",children:"选项 B"})]})},i={parameters:{docs:{description:{story:"水平排列的单选框组，适用于选项较少且需要节省垂直空间的场景。"}}},render:()=>e.jsxs(r,{defaultValue:"react",direction:"horizontal",children:[e.jsx(a,{value:"react",children:"React"}),e.jsx(a,{value:"vue",children:"Vue"}),e.jsx(a,{value:"svelte",children:"Svelte"})]})},t={render:()=>e.jsx(r,{defaultValue:"m",options:[{label:"男",value:"m"},{label:"女",value:"f"},{label:"其他",value:"o"}]})},l={render:()=>e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(a,{defaultChecked:!0,children:"默认选中"}),e.jsx(a,{children:"未选中"}),e.jsx(a,{disabled:!0,children:"禁用"})]})},c={render:()=>e.jsx(r,{defaultValue:"react",direction:"horizontal",children:["React","Vue","Svelte"].map(s=>e.jsxs("label",{className:"inline-flex cursor-pointer items-center rounded-md border border-border px-4 py-1.5 text-sm transition-colors has-[:checked]:border-primary-500 has-[:checked]:bg-primary-50 has-[:checked]:text-primary-600 hover:border-primary-300",children:[e.jsx(a,{value:s.toLowerCase(),className:"sr-only"}),s]},s))})},u={render:()=>{const[s,D]=H.useState("a");return e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsxs(r,{value:s,onChange:D,children:[e.jsx(a,{value:"a",children:"选项 A"}),e.jsx(a,{value:"b",children:"选项 B"}),e.jsx(a,{value:"c",children:"选项 C"})]}),e.jsxs("p",{className:"text-sm text-gray-500",children:["当前选中：",s]})]})}},n={parameters:{docs:{description:{story:"通过 CSS 覆盖实现小、默认、大三种尺寸，适应不同布局密度的需求。"}}},render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{children:[e.jsx("p",{className:"mb-2 text-xs text-muted-foreground",children:"小号"}),e.jsxs(r,{defaultValue:"a",className:"text-xs [&_span]:text-xs [&_span.sui-radio_span]:w-3 [&_span.sui-radio_span]:h-3",children:[e.jsx(a,{value:"a",children:"选项 A"}),e.jsx(a,{value:"b",children:"选项 B"}),e.jsx(a,{value:"c",children:"选项 C"})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"mb-2 text-xs text-muted-foreground",children:"默认"}),e.jsxs(r,{defaultValue:"a",children:[e.jsx(a,{value:"a",children:"选项 A"}),e.jsx(a,{value:"b",children:"选项 B"}),e.jsx(a,{value:"c",children:"选项 C"})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"mb-2 text-xs text-muted-foreground",children:"大号"}),e.jsxs(r,{defaultValue:"a",className:"text-base [&_span]:text-base [&_span.sui-radio_span]:w-5 [&_span.sui-radio_span]:h-5",children:[e.jsx(a,{value:"a",children:"选项 A"}),e.jsx(a,{value:"b",children:"选项 B"}),e.jsx(a,{value:"c",children:"选项 C"})]})]})]})};var p,m,x;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '单选框组合的基础用法，适用于在多个互斥选项中选择一项的场景。'
      }
    }
  },
  render: () => <RadioGroup defaultValue="a">
      <Radio value="a">选项 A</Radio>
      <Radio value="b">选项 B</Radio>
      <Radio value="c">选项 C</Radio>
    </RadioGroup>
}`,...(x=(m=o.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};var v,R,h;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '整组禁用状态下的单选框，适用于选项暂时不可选或权限受限的场景。'
      }
    }
  },
  render: () => <RadioGroup defaultValue="a" disabled>
      <Radio value="a">选项 A</Radio>
      <Radio value="b">选项 B</Radio>
    </RadioGroup>
}`,...(h=(R=d.parameters)==null?void 0:R.docs)==null?void 0:h.source}}};var b,j,f;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '水平排列的单选框组，适用于选项较少且需要节省垂直空间的场景。'
      }
    }
  },
  render: () => <RadioGroup defaultValue="react" direction="horizontal">
      <Radio value="react">React</Radio>
      <Radio value="vue">Vue</Radio>
      <Radio value="svelte">Svelte</Radio>
    </RadioGroup>
}`,...(f=(j=i.parameters)==null?void 0:j.docs)==null?void 0:f.source}}};var g,y,V;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <RadioGroup defaultValue="m" options={[{
    label: '男',
    value: 'm'
  }, {
    label: '女',
    value: 'f'
  }, {
    label: '其他',
    value: 'o'
  }]} />
}`,...(V=(y=t.parameters)==null?void 0:y.docs)==null?void 0:V.source}}};var S,N,_;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-2">
      <Radio defaultChecked>默认选中</Radio>
      <Radio>未选中</Radio>
      <Radio disabled>禁用</Radio>
    </div>
}`,...(_=(N=l.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};var C,G,B;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <RadioGroup defaultValue="react" direction="horizontal">
      {['React', 'Vue', 'Svelte'].map(item => <label key={item} className="inline-flex cursor-pointer items-center rounded-md border border-border px-4 py-1.5 text-sm transition-colors has-[:checked]:border-primary-500 has-[:checked]:bg-primary-50 has-[:checked]:text-primary-600 hover:border-primary-300">
          <Radio value={item.toLowerCase()} className="sr-only" />
          {item}
        </label>)}
    </RadioGroup>
}`,...(B=(G=c.parameters)==null?void 0:G.docs)==null?void 0:B.source}}};var A,k,z;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('a');
    return <div className="flex flex-col gap-3">
        <RadioGroup value={value} onChange={setValue}>
          <Radio value="a">选项 A</Radio>
          <Radio value="b">选项 B</Radio>
          <Radio value="c">选项 C</Radio>
        </RadioGroup>
        <p className="text-sm text-gray-500">当前选中：{value}</p>
      </div>;
  }
}`,...(z=(k=u.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};var w,E,O;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '通过 CSS 覆盖实现小、默认、大三种尺寸，适应不同布局密度的需求。'
      }
    }
  },
  render: () => <div className="flex flex-col gap-6">
      <div>
        <p className="mb-2 text-xs text-muted-foreground">小号</p>
        <RadioGroup defaultValue="a" className="text-xs [&_span]:text-xs [&_span.sui-radio_span]:w-3 [&_span.sui-radio_span]:h-3">
          <Radio value="a">选项 A</Radio>
          <Radio value="b">选项 B</Radio>
          <Radio value="c">选项 C</Radio>
        </RadioGroup>
      </div>
      <div>
        <p className="mb-2 text-xs text-muted-foreground">默认</p>
        <RadioGroup defaultValue="a">
          <Radio value="a">选项 A</Radio>
          <Radio value="b">选项 B</Radio>
          <Radio value="c">选项 C</Radio>
        </RadioGroup>
      </div>
      <div>
        <p className="mb-2 text-xs text-muted-foreground">大号</p>
        <RadioGroup defaultValue="a" className="text-base [&_span]:text-base [&_span.sui-radio_span]:w-5 [&_span.sui-radio_span]:h-5">
          <Radio value="a">选项 A</Radio>
          <Radio value="b">选项 B</Radio>
          <Radio value="c">选项 C</Radio>
        </RadioGroup>
      </div>
    </div>
}`,...(O=(E=n.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};const K=["Basic","Disabled","Horizontal","WithOptions","Standalone","RadioButtonStyle","ControlledRadio","SizeVariants"];export{o as Basic,u as ControlledRadio,d as Disabled,i as Horizontal,c as RadioButtonStyle,n as SizeVariants,l as Standalone,t as WithOptions,K as __namedExportsOrder,J as default};
