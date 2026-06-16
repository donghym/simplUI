import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as a}from"./index-GiUgBvb1.js";import{a as b}from"./utils-BEhiKRD9.js";import{c as T}from"./index-C08JwjkN.js";const G=T("relative flex flex-col gap-1",{variants:{},defaultVariants:{}}),J=T("text-sm text-muted-foreground hover:text-primary-500 transition-colors duration-200 cursor-pointer",{variants:{active:{true:"text-primary-500 font-medium",false:""},disabled:{true:"pointer-events-none opacity-50 cursor-not-allowed",false:""}},defaultVariants:{active:!1,disabled:!1}}),Q=T("flex flex-col gap-1 pl-4 mt-1",{variants:{},defaultVariants:{}}),U=T("absolute left-0 w-0.5 bg-primary-500 transition-all duration-200",{variants:{},defaultVariants:{}}),K=a.forwardRef((r,c)=>{const{href:p,title:w,active:l,disabled:m,onClick:d,className:h,...f}=r,o=x=>{m||(x.preventDefault(),d==null||d(x,p))};return e.jsx("a",{ref:c,href:`#${p}`,className:b(J({active:l,disabled:m}),h),onClick:o,"aria-current":l?"true":void 0,"aria-disabled":m||void 0,...f,children:w})});K.displayName="AnchorLink";const n=a.forwardRef((r,c)=>{const{className:p,items:w,activeKey:l,defaultActiveKey:m,onChange:d,offsetTop:h=0,smooth:f=!0,getContainer:o,...x}=r,[P,Y]=a.useState(m??""),A=l!==void 0,C=A?l:P,R=a.useRef(new Map),g=a.useRef(null),L=a.useCallback(s=>{A||Y(s),d==null||d(s)},[A,d]),z=a.useCallback(s=>{const i=document.getElementById(s);if(!i)return;const t=(o==null?void 0:o())||window,u=i.getBoundingClientRect().top,F=t===window?0:t.getBoundingClientRect().top,N=(t===window?window.scrollY:t.scrollTop)+u-F-h;f?t===window?window.scrollTo({top:N,behavior:"smooth"}):t.scrollTo({top:N,behavior:"smooth"}):t===window?window.scrollTo(0,N):t.scrollTop=N,L(s)},[h,f,o,L]);a.useEffect(()=>{var i;const s=R.current.get(C);if(s&&g.current){const t=s.getBoundingClientRect();((i=s.parentElement)==null?void 0:i.getBoundingClientRect())&&(g.current.style.top=`${s.offsetTop}px`,g.current.style.height=`${t.height}px`)}},[C]);const E=(s,i=0)=>s.map(t=>e.jsxs("div",{children:[e.jsx(K,{ref:u=>{u&&R.current.set(t.key,u)},href:t.key,title:t.title,active:C===t.key,onClick:()=>z(t.key)}),t.children&&t.children.length>0&&e.jsx("div",{className:b(Q()),children:E(t.children,i+1)})]},t.key));return e.jsxs("div",{ref:c,role:"navigation","aria-label":"锚点导航",className:b("sui-anchor",G(),p),...x,children:[e.jsx("div",{ref:g,className:b(U()),"aria-hidden":"true"}),E(w)]})});n.displayName="Anchor";n.__docgenInfo={description:`Anchor 锚点导航

用于页面内快速导航，支持监听滚动自动高亮当前锚点。
点击锚点平滑滚动到对应位置。`,methods:[],displayName:"Anchor",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"AnchorLinkItem"}],raw:"AnchorLinkItem[]"},description:"锚点链接列表"},activeKey:{required:!1,tsType:{name:"string"},description:"当前激活的锚点 key。受控模式"},defaultActiveKey:{required:!1,tsType:{name:"string"},description:"默认激活的锚点 key。非受控模式"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(key: string) => void",signature:{arguments:[{type:{name:"string"},name:"key"}],return:{name:"void"}}},description:"激活锚点变化时的回调"},offsetTop:{required:!1,tsType:{name:"number"},description:"滚动偏移量。点击锚点跳转时，目标位置额外偏移的像素值。默认 0"},smooth:{required:!1,tsType:{name:"boolean"},description:"是否平滑滚动。默认 true"},getContainer:{required:!1,tsType:{name:"signature",type:"function",raw:"() => HTMLElement | Window",signature:{arguments:[],return:{name:"union",raw:"HTMLElement | Window",elements:[{name:"HTMLElement"},{name:"Window"}]}}},description:"容器获取方式。提供时监听该容器的滚动事件"},className:{required:!1,tsType:{name:"string"},description:"自定义 className，通过 cn() + twMerge 合并"}},composes:["Omit","VariantProps"]};K.__docgenInfo={description:"AnchorLink 锚点链接子组件",methods:[],displayName:"AnchorLink",props:{href:{required:!0,tsType:{name:"string"},description:"锚点 ID"},title:{required:!0,tsType:{name:"ReactNode"},description:"显示文字"},active:{required:!1,tsType:{name:"boolean"},description:"是否激活"},disabled:{required:!1,tsType:{name:"boolean"},description:"是否禁用"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent<HTMLAnchorElement>, href: string) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLAnchorElement>",elements:[{name:"HTMLAnchorElement"}]},name:"e"},{type:{name:"string"},name:"href"}],return:{name:"void"}}},description:"点击回调"},className:{required:!1,tsType:{name:"string"},description:"自定义 className"}},composes:["Omit"]};const ae={title:"导航/Anchor 锚点",component:n,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`用于跳转到页面指定位置的锚点链接。

- 长页导航：用于文档、说明页等长页面，快速定位到目标章节。
- 层级锚点：支持多级嵌套，展示章节层级关系。
- 滚动监听：自动高亮当前可见区域对应的锚点项。`}}},argTypes:{items:{control:!1,description:"锚点链接列表，每项包含 key、title 和可选的 children"},offsetTop:{control:"number",description:"滚动偏移量，点击锚点跳转时目标位置额外偏移的像素值，默认 0"},activeKey:{control:"text",description:"当前激活的锚点 key，受控模式"},onChange:{control:!1,description:"激活锚点变化时的回调，参数为新的激活 key"}}},v={render:()=>e.jsxs("div",{className:"flex gap-8",children:[e.jsx(n,{items:[{key:"section1",title:"章节 1"},{key:"section2",title:"章节 2"},{key:"section3",title:"章节 3"}]}),e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{id:"section1",className:"p-4 bg-muted rounded-md",children:[e.jsx("h3",{className:"text-lg font-medium",children:"章节 1"}),e.jsx("p",{className:"text-muted-foreground",children:"这是章节 1 的内容区域。"})]}),e.jsxs("div",{id:"section2",className:"p-4 bg-muted rounded-md",children:[e.jsx("h3",{className:"text-lg font-medium",children:"章节 2"}),e.jsx("p",{className:"text-muted-foreground",children:"这是章节 2 的内容区域。"})]}),e.jsxs("div",{id:"section3",className:"p-4 bg-muted rounded-md",children:[e.jsx("h3",{className:"text-lg font-medium",children:"章节 3"}),e.jsx("p",{className:"text-muted-foreground",children:"这是章节 3 的内容区域。"})]})]})]})},y={render:()=>e.jsxs("div",{className:"flex gap-8",children:[e.jsx(n,{items:[{key:"chapter1",title:"第一章",children:[{key:"section1-1",title:"1.1 节"},{key:"section1-2",title:"1.2 节"}]},{key:"chapter2",title:"第二章",children:[{key:"section2-1",title:"2.1 节"},{key:"section2-2",title:"2.2 节"}]}]}),e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{id:"chapter1",className:"p-4 bg-muted rounded-md",children:[e.jsx("h3",{className:"text-lg font-medium",children:"第一章"}),e.jsx("p",{className:"text-muted-foreground",children:"这是第一章的内容区域。"})]}),e.jsxs("div",{id:"section1-1",className:"p-4 bg-muted/50 rounded-md ml-4",children:[e.jsx("h4",{className:"font-medium",children:"1.1 节"}),e.jsx("p",{className:"text-muted-foreground",children:"这是 1.1 节的内容。"})]}),e.jsxs("div",{id:"section1-2",className:"p-4 bg-muted/50 rounded-md ml-4",children:[e.jsx("h4",{className:"font-medium",children:"1.2 节"}),e.jsx("p",{className:"text-muted-foreground",children:"这是 1.2 节的内容。"})]}),e.jsxs("div",{id:"chapter2",className:"p-4 bg-muted rounded-md",children:[e.jsx("h3",{className:"text-lg font-medium",children:"第二章"}),e.jsx("p",{className:"text-muted-foreground",children:"这是第二章的内容区域。"})]}),e.jsxs("div",{id:"section2-1",className:"p-4 bg-muted/50 rounded-md ml-4",children:[e.jsx("h4",{className:"font-medium",children:"2.1 节"}),e.jsx("p",{className:"text-muted-foreground",children:"这是 2.1 节的内容。"})]}),e.jsxs("div",{id:"section2-2",className:"p-4 bg-muted/50 rounded-md ml-4",children:[e.jsx("h4",{className:"font-medium",children:"2.2 节"}),e.jsx("p",{className:"text-muted-foreground",children:"这是 2.2 节的内容。"})]})]})]})},j={render:()=>e.jsxs("div",{className:"flex gap-8",children:[e.jsx(n,{items:[{key:"part1",title:"部分 1"},{key:"part2",title:"部分 2"},{key:"part3",title:"部分 3"}],offsetTop:100}),e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{id:"part1",className:"p-4 bg-muted rounded-md",children:[e.jsx("h3",{className:"text-lg font-medium",children:"部分 1"}),e.jsx("p",{className:"text-muted-foreground",children:"这是部分 1 的内容区域。"})]}),e.jsxs("div",{id:"part2",className:"p-4 bg-muted rounded-md",children:[e.jsx("h3",{className:"text-lg font-medium",children:"部分 2"}),e.jsx("p",{className:"text-muted-foreground",children:"这是部分 2 的内容区域。"})]}),e.jsxs("div",{id:"part3",className:"p-4 bg-muted rounded-md",children:[e.jsx("h3",{className:"text-lg font-medium",children:"部分 3"}),e.jsx("p",{className:"text-muted-foreground",children:"这是部分 3 的内容区域。"})]})]})]})},k={parameters:{docs:{description:{story:"受控模式的锚点，通过外部状态管理当前激活项，可与其他交互逻辑联动。"}}},render:()=>{const[r,c]=a.useState("section1");return e.jsxs("div",{className:"flex gap-8",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("p",{children:["当前激活：",r]}),e.jsx(n,{activeKey:r,onChange:c,items:[{key:"section1",title:"章节 1"},{key:"section2",title:"章节 2"},{key:"section3",title:"章节 3"}]})]}),e.jsxs("div",{className:"flex-1 space-y-4",children:[e.jsxs("div",{id:"section1",className:"p-4 bg-muted rounded-md",children:[e.jsx("h3",{className:"text-lg font-medium",children:"章节 1"}),e.jsx("p",{className:"text-muted-foreground",children:"这是章节 1 的内容区域。"})]}),e.jsxs("div",{id:"section2",className:"p-4 bg-muted rounded-md",children:[e.jsx("h3",{className:"text-lg font-medium",children:"章节 2"}),e.jsx("p",{className:"text-muted-foreground",children:"这是章节 2 的内容区域。"})]}),e.jsxs("div",{id:"section3",className:"p-4 bg-muted rounded-md",children:[e.jsx("h3",{className:"text-lg font-medium",children:"章节 3"}),e.jsx("p",{className:"text-muted-foreground",children:"这是章节 3 的内容区域。"})]})]})]})}};var q,M,V;v.parameters={...v.parameters,docs:{...(q=v.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <div className="flex gap-8">
      <Anchor items={[{
      key: 'section1',
      title: '章节 1'
    }, {
      key: 'section2',
      title: '章节 2'
    }, {
      key: 'section3',
      title: '章节 3'
    }]} />
      <div className="flex-1 space-y-4">
        <div id="section1" className="p-4 bg-muted rounded-md">
          <h3 className="text-lg font-medium">章节 1</h3>
          <p className="text-muted-foreground">这是章节 1 的内容区域。</p>
        </div>
        <div id="section2" className="p-4 bg-muted rounded-md">
          <h3 className="text-lg font-medium">章节 2</h3>
          <p className="text-muted-foreground">这是章节 2 的内容区域。</p>
        </div>
        <div id="section3" className="p-4 bg-muted rounded-md">
          <h3 className="text-lg font-medium">章节 3</h3>
          <p className="text-muted-foreground">这是章节 3 的内容区域。</p>
        </div>
      </div>
    </div>
}`,...(V=(M=v.parameters)==null?void 0:M.docs)==null?void 0:V.source}}};var I,S,H;y.parameters={...y.parameters,docs:{...(I=y.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <div className="flex gap-8">
      <Anchor items={[{
      key: 'chapter1',
      title: '第一章',
      children: [{
        key: 'section1-1',
        title: '1.1 节'
      }, {
        key: 'section1-2',
        title: '1.2 节'
      }]
    }, {
      key: 'chapter2',
      title: '第二章',
      children: [{
        key: 'section2-1',
        title: '2.1 节'
      }, {
        key: 'section2-2',
        title: '2.2 节'
      }]
    }]} />
      <div className="flex-1 space-y-4">
        <div id="chapter1" className="p-4 bg-muted rounded-md">
          <h3 className="text-lg font-medium">第一章</h3>
          <p className="text-muted-foreground">这是第一章的内容区域。</p>
        </div>
        <div id="section1-1" className="p-4 bg-muted/50 rounded-md ml-4">
          <h4 className="font-medium">1.1 节</h4>
          <p className="text-muted-foreground">这是 1.1 节的内容。</p>
        </div>
        <div id="section1-2" className="p-4 bg-muted/50 rounded-md ml-4">
          <h4 className="font-medium">1.2 节</h4>
          <p className="text-muted-foreground">这是 1.2 节的内容。</p>
        </div>
        <div id="chapter2" className="p-4 bg-muted rounded-md">
          <h3 className="text-lg font-medium">第二章</h3>
          <p className="text-muted-foreground">这是第二章的内容区域。</p>
        </div>
        <div id="section2-1" className="p-4 bg-muted/50 rounded-md ml-4">
          <h4 className="font-medium">2.1 节</h4>
          <p className="text-muted-foreground">这是 2.1 节的内容。</p>
        </div>
        <div id="section2-2" className="p-4 bg-muted/50 rounded-md ml-4">
          <h4 className="font-medium">2.2 节</h4>
          <p className="text-muted-foreground">这是 2.2 节的内容。</p>
        </div>
      </div>
    </div>
}`,...(H=(S=y.parameters)==null?void 0:S.docs)==null?void 0:H.source}}};var _,B,O;j.parameters={...j.parameters,docs:{...(_=j.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <div className="flex gap-8">
      <Anchor items={[{
      key: 'part1',
      title: '部分 1'
    }, {
      key: 'part2',
      title: '部分 2'
    }, {
      key: 'part3',
      title: '部分 3'
    }]} offsetTop={100} />
      <div className="flex-1 space-y-4">
        <div id="part1" className="p-4 bg-muted rounded-md">
          <h3 className="text-lg font-medium">部分 1</h3>
          <p className="text-muted-foreground">这是部分 1 的内容区域。</p>
        </div>
        <div id="part2" className="p-4 bg-muted rounded-md">
          <h3 className="text-lg font-medium">部分 2</h3>
          <p className="text-muted-foreground">这是部分 2 的内容区域。</p>
        </div>
        <div id="part3" className="p-4 bg-muted rounded-md">
          <h3 className="text-lg font-medium">部分 3</h3>
          <p className="text-muted-foreground">这是部分 3 的内容区域。</p>
        </div>
      </div>
    </div>
}`,...(O=(B=j.parameters)==null?void 0:B.docs)==null?void 0:O.source}}};var W,D,$;k.parameters={...k.parameters,docs:{...(W=k.parameters)==null?void 0:W.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '受控模式的锚点，通过外部状态管理当前激活项，可与其他交互逻辑联动。'
      }
    }
  },
  render: () => {
    const [activeKey, setActiveKey] = useState('section1');
    return <div className="flex gap-8">
        <div className="space-y-4">
          <p>当前激活：{activeKey}</p>
          <Anchor activeKey={activeKey} onChange={setActiveKey} items={[{
          key: 'section1',
          title: '章节 1'
        }, {
          key: 'section2',
          title: '章节 2'
        }, {
          key: 'section3',
          title: '章节 3'
        }]} />
        </div>
        <div className="flex-1 space-y-4">
          <div id="section1" className="p-4 bg-muted rounded-md">
            <h3 className="text-lg font-medium">章节 1</h3>
            <p className="text-muted-foreground">这是章节 1 的内容区域。</p>
          </div>
          <div id="section2" className="p-4 bg-muted rounded-md">
            <h3 className="text-lg font-medium">章节 2</h3>
            <p className="text-muted-foreground">这是章节 2 的内容区域。</p>
          </div>
          <div id="section3" className="p-4 bg-muted rounded-md">
            <h3 className="text-lg font-medium">章节 3</h3>
            <p className="text-muted-foreground">这是章节 3 的内容区域。</p>
          </div>
        </div>
      </div>;
  }
}`,...($=(D=k.parameters)==null?void 0:D.docs)==null?void 0:$.source}}};const de=["Default","WithChildren","CustomOffset","Controlled"];export{k as Controlled,j as CustomOffset,v as Default,y as WithChildren,de as __namedExportsOrder,ae as default};
