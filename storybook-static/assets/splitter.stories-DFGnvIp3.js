import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r,R as C}from"./index-GiUgBvb1.js";import{a as X}from"./utils-BEhiKRD9.js";import{c as Y}from"./index-C08JwjkN.js";const U=Y("sui-splitter flex w-full h-full",{variants:{layout:{horizontal:"sui-splitter--horizontal flex-row",vertical:"sui-splitter--vertical flex-col"}},defaultVariants:{layout:"horizontal"}}),W=Y("sui-splitter__bar shrink-0 bg-[#f0f0f0] transition-[background] duration-200",{variants:{layout:{horizontal:"w-1 cursor-col-resize",vertical:"h-1 cursor-row-resize"}},defaultVariants:{layout:"horizontal"}}),x=r.forwardRef(({children:o,style:m,className:g},j)=>e.jsx("div",{ref:j,className:X("sui-splitter-panel flex-1 overflow-auto",g),style:m,children:o}));x.displayName="SplitterPanel";const q=r.forwardRef(({layout:o="horizontal",children:m,style:g,className:j},h)=>{const i=o==="horizontal",c=r.useRef(null),[d,$]=r.useState([]),b=r.useRef(null),v=r.useMemo(()=>r.Children.toArray(m).filter(t=>r.isValidElement(t)&&t.type===x),[m]),S=v.length,A=r.useCallback((t,n)=>{if(!c.current)return;const l=c.current.getBoundingClientRect(),N=i?l.width:l.height,p=v.map((R,u)=>d[u]!==void 0?d[u]:N/S);b.current={index:t,startPos:i?n.clientX:n.clientY,startSizes:p}},[i,v,S,d]),z=r.useCallback(t=>{const n=b.current;if(!n||!c.current)return;const{index:l,startPos:N,startSizes:p}=n,R=c.current.getBoundingClientRect(),u=i?R.width:R.height,M=(i?t.clientX:t.clientY)-N,T=[...p],F=p[l]??0,H=p[l+1]??0;T[l]=Math.max(50,Math.min(u-50,F+M)),T[l+1]=Math.max(50,Math.min(u-50,H-M)),$(T)},[i]),w=r.useCallback(()=>{b.current=null},[]);return C.useEffect(()=>(document.addEventListener("mousemove",z),document.addEventListener("mouseup",w),()=>{document.removeEventListener("mousemove",z),document.removeEventListener("mouseup",w)}),[z,w]),e.jsx("div",{ref:t=>{if(c.current=t,h)if(typeof h=="function")h(t);else{const n=h;n.current=t}},className:X(U({layout:o}),j),style:g,children:v.map((t,n)=>e.jsxs(C.Fragment,{children:[e.jsx("div",{className:"sui-splitter-panel-wrap overflow-auto",style:{flex:d[n]!==void 0?`0 0 ${d[n]}px`:`1 1 ${100/S}%`},children:t}),n<S-1&&e.jsx("div",{className:W({layout:o}),onMouseDown:l=>A(n,l)})]},n))})});q.displayName="Splitter";const a=Object.assign(q,{Panel:x});x.__docgenInfo={description:"SplitterPanel 分隔面板项",methods:[],displayName:"SplitterPanel",props:{defaultSize:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"面板默认尺寸"},min:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"面板最小尺寸"},max:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"面板最大尺寸"},collapsible:{required:!1,tsType:{name:"union",raw:"boolean | { start?: boolean; end?: boolean }",elements:[{name:"boolean"},{name:"signature",type:"object",raw:"{ start?: boolean; end?: boolean }",signature:{properties:[{key:"start",value:{name:"boolean",required:!1}},{key:"end",value:{name:"boolean",required:!1}}]}}]},description:"是否可折叠"},children:{required:!0,tsType:{name:"ReactNode"},description:"面板内容"},style:{required:!1,tsType:{name:"CSSProperties"},description:"自定义样式"},className:{required:!1,tsType:{name:"string"},description:"自定义类名"}}};q.__docgenInfo={description:`Splitter 分隔面板组件

用于分割页面区域，支持拖拽调整大小。

### 何时使用
- 需要拖拽调整区域大小时
- 需要并排或上下排列多个面板时

### 示例
\`\`\`tsx
<Splitter>
  <Splitter.Panel>Left</Splitter.Panel>
  <Splitter.Panel>Right</Splitter.Panel>
</Splitter>
\`\`\``,methods:[],displayName:"Splitter",props:{layout:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"布局方向",defaultValue:{value:"'horizontal'",computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:"子面板"},style:{required:!1,tsType:{name:"CSSProperties"},description:"自定义样式"},className:{required:!1,tsType:{name:"string"},description:"自定义类名"}}};const Z={title:"布局/Splitter 分隔面板",component:a,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"用于分割页面区域，支持拖拽调整大小。"}}},argTypes:{layout:{control:"select",options:["horizontal","vertical"]}}},s={padding:16,background:"var(--color-gray-100, #f3f4f6)",height:"100%"},f={render:()=>e.jsx("div",{className:"h-[300px]",children:e.jsxs(a,{children:[e.jsx(a.Panel,{children:e.jsx("div",{style:s,children:"Left Panel"})}),e.jsx(a.Panel,{children:e.jsx("div",{style:s,children:"Right Panel"})})]})})},y={render:()=>e.jsx("div",{className:"h-[300px]",children:e.jsxs(a,{layout:"vertical",children:[e.jsx(a.Panel,{children:e.jsx("div",{style:s,children:"Top Panel"})}),e.jsx(a.Panel,{children:e.jsx("div",{style:s,children:"Bottom Panel"})})]})})},P={render:()=>e.jsx("div",{className:"h-[300px]",children:e.jsxs(a,{children:[e.jsx(a.Panel,{children:e.jsx("div",{style:s,children:"Panel 1"})}),e.jsx(a.Panel,{children:e.jsx("div",{style:s,children:"Panel 2"})}),e.jsx(a.Panel,{children:e.jsx("div",{style:s,children:"Panel 3"})})]})})};var E,_,k;f.parameters={...f.parameters,docs:{...(E=f.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div className="h-[300px]">
      <Splitter>
        <Splitter.Panel>
          <div style={panelStyle}>Left Panel</div>
        </Splitter.Panel>
        <Splitter.Panel>
          <div style={panelStyle}>Right Panel</div>
        </Splitter.Panel>
      </Splitter>
    </div>
}`,...(k=(_=f.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};var V,B,L;y.parameters={...y.parameters,docs:{...(V=y.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <div className="h-[300px]">
      <Splitter layout="vertical">
        <Splitter.Panel>
          <div style={panelStyle}>Top Panel</div>
        </Splitter.Panel>
        <Splitter.Panel>
          <div style={panelStyle}>Bottom Panel</div>
        </Splitter.Panel>
      </Splitter>
    </div>
}`,...(L=(B=y.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};var D,I,O;P.parameters={...P.parameters,docs:{...(D=P.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div className="h-[300px]">
      <Splitter>
        <Splitter.Panel>
          <div style={panelStyle}>Panel 1</div>
        </Splitter.Panel>
        <Splitter.Panel>
          <div style={panelStyle}>Panel 2</div>
        </Splitter.Panel>
        <Splitter.Panel>
          <div style={panelStyle}>Panel 3</div>
        </Splitter.Panel>
      </Splitter>
    </div>
}`,...(O=(I=P.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};const ee=["Basic","Vertical","ThreePanels"];export{f as Basic,P as ThreePanels,y as Vertical,ee as __namedExportsOrder,Z as default};
