import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as p}from"./index-GiUgBvb1.js";import{a as c}from"./utils-BEhiKRD9.js";import{c as b}from"./index-C08JwjkN.js";import{C as oe}from"./chevron-down-CY-YwltC.js";import"./createLucideIcon-CZe00VV7.js";const de=b("sui-collapse",{variants:{bordered:{true:"border border-border rounded-md",false:"border-none"}},defaultVariants:{bordered:!0}}),te=b("sui-collapse-panel",{variants:{bordered:{true:"border-b border-border last:border-b-0",false:""}},defaultVariants:{bordered:!0}}),pe=b("sui-collapse-panel__content overflow-hidden transition-all duration-200",{variants:{expanded:{true:"max-h-auto",false:"max-h-0"}},defaultVariants:{expanded:!1}}),s=p.forwardRef((W,X)=>{const{activeKey:P,defaultActiveKey:Y=[],onChange:i,accordion:g=!1,bordered:N=!0,children:Z,className:ee,...ae}=W,[se,re]=p.useState(Y),K=P!==void 0,o=K?P:se,le=p.useCallback(l=>{let n;g?n=o.includes(l)?[]:[l]:o.includes(l)?n=o.filter(r=>r!==l):n=[...o,l],K||re(n),i==null||i(n)},[o,g,K,i]),ne=p.Children.toArray(Z).filter(p.isValidElement);return e.jsx("div",{ref:X,className:c(de({bordered:N}),ee),...ae,children:ne.map((l,n)=>{const r=l.props,t=r.panelKey||String(n),d=o.includes(t),v=r.disabled;return e.jsxs("div",{className:c(te({bordered:N}),r.className),style:r.style,children:[e.jsxs("button",{type:"button",className:"sui-collapse-panel__header w-full flex items-center justify-between px-4 py-3 text-left hover:bg-muted disabled:cursor-not-allowed disabled:opacity-50",onClick:()=>!v&&le(t),disabled:v,"aria-expanded":d,"aria-controls":`collapse-content-${t}`,children:[e.jsx("span",{className:"font-medium",children:r.header}),r.showArrow!==!1&&e.jsx(oe,{className:c("w-4 h-4 transition-transform duration-200",d&&"rotate-180"),"aria-hidden":"true"})]}),e.jsx("div",{id:`collapse-content-${t}`,className:c(pe({expanded:d}),d&&"py-3 px-4"),"aria-hidden":!d,children:d&&r.children})]},t)})})});s.displayName="Collapse";const a=()=>null;a.displayName="CollapsePanel";s.__docgenInfo={description:`Collapse 折叠面板组件

用于展示可折叠的内容区域。

### 何时使用
- 对复杂信息进行分组和隐藏
- 手风琴模式：只允许一个面板展开

### 示例
\`\`\`tsx
<Collapse accordion>
  <CollapsePanel panelKey="1" header="标题一">内容一</CollapsePanel>
  <CollapsePanel panelKey="2" header="标题二">内容二</CollapsePanel>
</Collapse>
\`\`\``,methods:[],displayName:"Collapse",props:{activeKey:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"当前激活的面板 key 数组（受控模式）"},defaultActiveKey:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"默认激活的面板 key 数组（非受控模式）"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(activeKey: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"activeKey"}],return:{name:"void"}}},description:"展开面板时的回调"},accordion:{required:!1,tsType:{name:"boolean"},description:"是否允许同时展开多个面板。默认 true"},children:{required:!1,tsType:{name:"ReactNode"},description:"子元素（CollapsePanel）"},bordered:{required:!1,tsType:{name:"boolean"},description:"是否显示边框。默认 true"},className:{required:!1,tsType:{name:"string"},description:"自定义类名，通过 cn() + twMerge 合并"}},composes:["Omit"]};const Ce={title:"数据展示/Collapse 折叠面板",component:s,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`Collapse 折叠面板组件用于将内容区域折叠或展开，节省页面空间并提升信息层级。

- 用于 FAQ 常见问题、帮助文档的展开收起
- 用于表单分组、设置项的折叠展示
- 用于长内容的分块展示，让用户按需查看
- 支持手风琴模式，同时仅展开一个面板`}}},argTypes:{accordion:{control:"boolean"},bordered:{control:"boolean"}}},h={parameters:{docs:{description:{story:"基础折叠面板，可同时展开多个面板，适用于内容分组展示场景。"}}},render:()=>e.jsxs(s,{children:[e.jsx(a,{header:"This is panel header 1",panelKey:"1",children:e.jsx("p",{children:"A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world."})}),e.jsx(a,{header:"This is panel header 2",panelKey:"2",children:e.jsx("p",{children:"This is panel content 2"})}),e.jsx(a,{header:"This is panel header 3",panelKey:"3",children:e.jsx("p",{children:"This is panel content 3"})})]})},m={parameters:{docs:{description:{story:"手风琴模式，同时只能展开一个面板，适用于需要互斥展开的内容分组场景。"}}},render:()=>e.jsxs(s,{accordion:!0,children:[e.jsx(a,{header:"This is panel header 1",panelKey:"1",children:e.jsx("p",{children:"Content 1"})}),e.jsx(a,{header:"This is panel header 2",panelKey:"2",children:e.jsx("p",{children:"Content 2"})}),e.jsx(a,{header:"This is panel header 3",panelKey:"3",children:e.jsx("p",{children:"Content 3"})})]})},y={parameters:{docs:{description:{story:"无边框样式，面板之间无分割线，适用于极简风格或嵌入卡片内的场景。"}}},render:()=>e.jsxs(s,{bordered:!1,children:[e.jsx(a,{header:"面板标题 1",panelKey:"1",children:e.jsx("p",{children:"内容 1"})}),e.jsx(a,{header:"面板标题 2",panelKey:"2",children:e.jsx("p",{children:"内容 2"})})]})},u={parameters:{docs:{description:{story:"默认展开指定面板，通过 defaultActiveKey 控制初始展开状态，适用于需要默认展示重点内容的场景。"}}},render:()=>e.jsxs(s,{defaultActiveKey:["1","2"],children:[e.jsx(a,{header:"面板标题 1",panelKey:"1",children:e.jsx("p",{children:"内容 1"})}),e.jsx(a,{header:"面板标题 2",panelKey:"2",children:e.jsx("p",{children:"内容 2"})}),e.jsx(a,{header:"面板标题 3",panelKey:"3",children:e.jsx("p",{children:"内容 3"})})]})},C={parameters:{docs:{description:{story:"禁用指定面板，用户无法展开被禁用的面板，适用于权限控制或未完成项的展示。"}}},render:()=>e.jsxs(s,{children:[e.jsx(a,{header:"This is panel header 1",panelKey:"1",children:e.jsx("p",{children:"Content 1"})}),e.jsx(a,{header:"This is panel header 2",panelKey:"2",disabled:!0,children:e.jsx("p",{children:"Content 2 (disabled)"})})]})},x={parameters:{docs:{description:{story:"默认全部收起状态，用户可手动展开面板，适用于节省空间的初始展示。"}}},render:()=>e.jsxs(s,{children:[e.jsx(a,{header:"面板标题 1",panelKey:"1",children:e.jsx("p",{children:"内容 1"})}),e.jsx(a,{header:"面板标题 2",panelKey:"2",children:e.jsx("p",{children:"内容 2"})})]})},f={parameters:{docs:{description:{story:"自定义面板标题样式，通过传入 ReactNode 实现带图标、彩色文字的个性化标题，适用于需要视觉强调的场景。"}}},render:()=>e.jsxs(s,{children:[e.jsx(a,{header:e.jsx("span",{className:"text-primary-500 font-bold text-base",children:"设计 自定义样式面板"}),panelKey:"1",children:e.jsx("p",{children:"此面板的标题使用了自定义样式，通过传入 ReactNode 实现个性化标题。"})}),e.jsx(a,{header:e.jsx("span",{className:"text-success-500 font-bold text-base",children:"完成 另一个自定义面板"}),panelKey:"2",children:e.jsx("p",{children:"每个面板都可以拥有不同的标题样式。"})}),e.jsx(a,{header:"普通面板",panelKey:"3",children:e.jsx("p",{children:"与普通面板对比效果。"})})]})},j={parameters:{docs:{description:{story:"幽灵样式面板，无背景、无边框，完全融入页面背景，适用于极简风格或嵌套在其他容器内的场景。"}}},render:()=>e.jsxs(s,{bordered:!1,className:"bg-transparent",children:[e.jsx(a,{header:"幽灵面板 1",panelKey:"1",className:"border-0 shadow-none",children:e.jsx("p",{children:"无边框、无背景的幽灵样式面板，适用于融入页面背景的场景。"})}),e.jsx(a,{header:"幽灵面板 2",panelKey:"2",className:"border-0 shadow-none",children:e.jsx("p",{children:"面板之间仅通过分割线或间距区分。"})}),e.jsx(a,{header:"幽灵面板 3",panelKey:"3",className:"border-0 shadow-none",children:e.jsx("p",{children:"适合极简风格的界面设计。"})})]})};var T,w,A;h.parameters={...h.parameters,docs:{...(T=h.parameters)==null?void 0:T.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '基础折叠面板，可同时展开多个面板，适用于内容分组展示场景。'
      }
    }
  },
  render: () => <Collapse>
      <CollapsePanel header="This is panel header 1" panelKey="1">
        <p>A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.</p>
      </CollapsePanel>
      <CollapsePanel header="This is panel header 2" panelKey="2">
        <p>This is panel content 2</p>
      </CollapsePanel>
      <CollapsePanel header="This is panel header 3" panelKey="3">
        <p>This is panel content 3</p>
      </CollapsePanel>
    </Collapse>
}`,...(A=(w=h.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var S,V,_;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '手风琴模式，同时只能展开一个面板，适用于需要互斥展开的内容分组场景。'
      }
    }
  },
  render: () => <Collapse accordion>
      <CollapsePanel header="This is panel header 1" panelKey="1">
        <p>Content 1</p>
      </CollapsePanel>
      <CollapsePanel header="This is panel header 2" panelKey="2">
        <p>Content 2</p>
      </CollapsePanel>
      <CollapsePanel header="This is panel header 3" panelKey="3">
        <p>Content 3</p>
      </CollapsePanel>
    </Collapse>
}`,...(_=(V=m.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var q,R,D;y.parameters={...y.parameters,docs:{...(q=y.parameters)==null?void 0:q.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '无边框样式，面板之间无分割线，适用于极简风格或嵌入卡片内的场景。'
      }
    }
  },
  render: () => <Collapse bordered={false}>
      <CollapsePanel header="面板标题 1" panelKey="1">
        <p>内容 1</p>
      </CollapsePanel>
      <CollapsePanel header="面板标题 2" panelKey="2">
        <p>内容 2</p>
      </CollapsePanel>
    </Collapse>
}`,...(D=(R=y.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};var B,E,G;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '默认展开指定面板，通过 defaultActiveKey 控制初始展开状态，适用于需要默认展示重点内容的场景。'
      }
    }
  },
  render: () => <Collapse defaultActiveKey={['1', '2']}>
      <CollapsePanel header="面板标题 1" panelKey="1">
        <p>内容 1</p>
      </CollapsePanel>
      <CollapsePanel header="面板标题 2" panelKey="2">
        <p>内容 2</p>
      </CollapsePanel>
      <CollapsePanel header="面板标题 3" panelKey="3">
        <p>内容 3</p>
      </CollapsePanel>
    </Collapse>
}`,...(G=(E=u.parameters)==null?void 0:E.docs)==null?void 0:G.source}}};var I,O,$;C.parameters={...C.parameters,docs:{...(I=C.parameters)==null?void 0:I.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '禁用指定面板，用户无法展开被禁用的面板，适用于权限控制或未完成项的展示。'
      }
    }
  },
  render: () => <Collapse>
      <CollapsePanel header="This is panel header 1" panelKey="1">
        <p>Content 1</p>
      </CollapsePanel>
      <CollapsePanel header="This is panel header 2" panelKey="2" disabled>
        <p>Content 2 (disabled)</p>
      </CollapsePanel>
    </Collapse>
}`,...($=(O=C.parameters)==null?void 0:O.docs)==null?void 0:$.source}}};var k,F,M;x.parameters={...x.parameters,docs:{...(k=x.parameters)==null?void 0:k.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '默认全部收起状态，用户可手动展开面板，适用于节省空间的初始展示。'
      }
    }
  },
  render: () => <Collapse>
      <CollapsePanel header="面板标题 1" panelKey="1">
        <p>内容 1</p>
      </CollapsePanel>
      <CollapsePanel header="面板标题 2" panelKey="2">
        <p>内容 2</p>
      </CollapsePanel>
    </Collapse>
}`,...(M=(F=x.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var Q,z,H;f.parameters={...f.parameters,docs:{...(Q=f.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '自定义面板标题样式，通过传入 ReactNode 实现带图标、彩色文字的个性化标题，适用于需要视觉强调的场景。'
      }
    }
  },
  render: () => <Collapse>
      <CollapsePanel header={<span className="text-primary-500 font-bold text-base">设计 自定义样式面板</span>} panelKey="1">
        <p>此面板的标题使用了自定义样式，通过传入 ReactNode 实现个性化标题。</p>
      </CollapsePanel>
      <CollapsePanel header={<span className="text-success-500 font-bold text-base">完成 另一个自定义面板</span>} panelKey="2">
        <p>每个面板都可以拥有不同的标题样式。</p>
      </CollapsePanel>
      <CollapsePanel header="普通面板" panelKey="3">
        <p>与普通面板对比效果。</p>
      </CollapsePanel>
    </Collapse>
}`,...(H=(z=f.parameters)==null?void 0:z.docs)==null?void 0:H.source}}};var J,L,U;j.parameters={...j.parameters,docs:{...(J=j.parameters)==null?void 0:J.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '幽灵样式面板，无背景、无边框，完全融入页面背景，适用于极简风格或嵌套在其他容器内的场景。'
      }
    }
  },
  render: () => <Collapse bordered={false} className="bg-transparent">
      <CollapsePanel header="幽灵面板 1" panelKey="1" className="border-0 shadow-none">
        <p>无边框、无背景的幽灵样式面板，适用于融入页面背景的场景。</p>
      </CollapsePanel>
      <CollapsePanel header="幽灵面板 2" panelKey="2" className="border-0 shadow-none">
        <p>面板之间仅通过分割线或间距区分。</p>
      </CollapsePanel>
      <CollapsePanel header="幽灵面板 3" panelKey="3" className="border-0 shadow-none">
        <p>适合极简风格的界面设计。</p>
      </CollapsePanel>
    </Collapse>
}`,...(U=(L=j.parameters)==null?void 0:L.docs)==null?void 0:U.source}}};const xe=["Basic","Accordion","NoBorder","DefaultActive","Disabled","AllCollapsed","CustomPanel","GhostVariant"];export{m as Accordion,x as AllCollapsed,h as Basic,f as CustomPanel,u as DefaultActive,C as Disabled,j as GhostVariant,y as NoBorder,xe as __namedExportsOrder,Ce as default};
