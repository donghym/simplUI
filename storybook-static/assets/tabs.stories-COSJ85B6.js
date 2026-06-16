import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as p}from"./index-GiUgBvb1.js";import{a as A}from"./utils-BEhiKRD9.js";import{c as te}from"./index-C08JwjkN.js";const oe=te("flex gap-0",{variants:{variant:{line:"border-border",card:"",edgeless:""},tabPosition:{top:"flex-row",bottom:"flex-row",left:"flex-col",right:"flex-col"}},defaultVariants:{variant:"line",tabPosition:"top"}}),ie=te("inline-flex items-center justify-center cursor-pointer select-none whitespace-nowrap h-[40px] px-4 text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-1",{variants:{variant:{line:"border-b-2 border-transparent text-muted-foreground hover:text-foreground",card:"rounded-t-md border border-transparent text-muted-foreground hover:text-foreground",edgeless:"rounded-md text-muted-foreground hover:text-foreground hover:bg-muted"},active:{true:"",false:""},disabled:{true:"opacity-50 cursor-not-allowed pointer-events-none",false:""}},compoundVariants:[{variant:"line",active:!0,class:"border-primary-500 text-primary-500"},{variant:"card",active:!0,class:"border-border border-b-background bg-background text-primary-500 font-medium"},{variant:"edgeless",active:!0,class:"bg-primary-500/10 text-primary-500 font-medium"}],defaultVariants:{variant:"line",active:!1,disabled:!1}}),S="p-4 text-sm text-foreground";function de(t){const r=[];return p.Children.forEach(t,n=>{if(!p.isValidElement(n))return;const d=n.props;d.tab!==void 0&&r.push({key:String(n.key??""),tab:d.tab,disabled:!!d.disabled,children:d.children})}),r}function ce(t){return t==="left"||t==="right"?"flex-row":"flex-col"}const c=p.forwardRef(({variant:t,activeKey:r,defaultActiveKey:n,onChange:d,tabPosition:i="top",className:K,children:P},o)=>{var N;const l=de(P),f=((N=l[0])==null?void 0:N.key)??"",m=r!==void 0,[w,re]=p.useState(n??f),b=m?r:w,se=p.useCallback(s=>{m||re(s),d==null||d(s)},[m,d]),u=l.find(s=>s.key===b),ne=e.jsx("div",{role:"tablist","aria-orientation":i==="left"||i==="right"?"vertical":"horizontal",className:A(oe({variant:t,tabPosition:i}),t==="line"&&(i==="left"||i==="right"?"border-r":"border-b"),t==="card"&&"gap-1",t==="edgeless"&&"gap-1",(i==="left"||i==="right")&&"flex-col"),children:l.map(s=>e.jsx("button",{type:"button",role:"tab",id:`tab-${s.key}`,"aria-selected":s.key===b,"aria-disabled":s.disabled,"aria-controls":`tabpanel-${s.key}`,disabled:s.disabled,tabIndex:s.key===b?0:-1,onClick:()=>se(s.key),className:ie({variant:t,active:s.key===b,disabled:s.disabled}),children:s.tab},s.key))});return e.jsxs("div",{ref:o,className:A("sui-tabs","flex",ce(i),K),children:[i==="bottom"||i==="right"?e.jsx("div",{id:`tabpanel-${b}`,role:"tabpanel","aria-labelledby":`tab-${b}`,className:S,children:u==null?void 0:u.children}):null,ne,i==="top"||i==="left"?e.jsx("div",{id:`tabpanel-${b}`,role:"tabpanel","aria-labelledby":`tab-${b}`,className:S,children:u==null?void 0:u.children}):null]})});c.displayName="Tabs";const a=()=>null;a.displayName="TabPane";Object.assign(c,{TabPane:a});c.__docgenInfo={description:`Tabs 选项卡组件

提供多标签页切换功能，支持 line/card/edgeless 三种变体，
支持 top/bottom/left/right 四种位置排列，支持受控与非受控模式。`,methods:[],displayName:"Tabs",props:{variant:{required:!1,tsType:{name:"union",raw:"'line' | 'card' | 'edgeless'",elements:[{name:"literal",value:"'line'"},{name:"literal",value:"'card'"},{name:"literal",value:"'edgeless'"}]},description:"选项卡变体：line 带下划线指示器（默认）、card 卡片式带边框、edgeless 无边框按钮式"},activeKey:{required:!1,tsType:{name:"string"},description:"当前激活的选项卡 key，传入后进入受控模式，切换需配合 onChange 更新"},defaultActiveKey:{required:!1,tsType:{name:"string"},description:"默认激活的选项卡 key，仅在非受控模式下生效"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(activeKey: string) => void",signature:{arguments:[{type:{name:"string"},name:"activeKey"}],return:{name:"void"}}},description:"选项卡切换回调，参数为被激活的 tabPane 的 key"},tabPosition:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom' | 'left' | 'right'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"选项卡位置：top 顶部（默认）、bottom 底部、left 左侧、right 右侧",defaultValue:{value:"'top'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"自定义类名，通过 cn() + twMerge 合并，可覆盖默认样式"},children:{required:!1,tsType:{name:"ReactNode"},description:"子节点，使用 TabPane 组件定义每个选项卡"}},composes:["VariantProps"]};const ue={title:"导航/Tabs 标签页",component:c,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`选项卡切换组件，用于在同一区域展示不同内容面板。

- 内容分类：用于将同类信息分组展示，如商品详情、评价、规格。
- 多视图切换：用于表格、列表等不同视图的快速切换。
- 动态标签：支持增删标签，适用于多文档、多任务场景。`}}}},v={parameters:{docs:{description:{story:"线性样式的标签页，下方带有下划线指示器，适合大多数内容切换场景。"}}},render:()=>e.jsxs(c,{variant:"line",defaultActiveKey:"1",children:[e.jsx(a,{tab:"标签 1",children:"标签页 1 的内容"},"1"),e.jsx(a,{tab:"标签 2",children:"标签页 2 的内容"},"2"),e.jsx(a,{tab:"标签 3",children:"标签页 3 的内容"},"3")]})},x={parameters:{docs:{description:{story:"卡片样式的标签页，每个标签带有边框背景，视觉层次更分明。"}}},render:()=>e.jsxs(c,{variant:"card",defaultActiveKey:"overview",children:[e.jsx(a,{tab:"概览",children:"概览内容"},"overview"),e.jsx(a,{tab:"规格",children:"规格内容"},"specs"),e.jsx(a,{tab:"评价",children:"评价内容"},"reviews")]})},g={parameters:{docs:{description:{story:"无边框样式的标签页，风格更简洁，适合嵌入卡片或轻量场景。"}}},render:()=>e.jsxs(c,{variant:"edgeless",defaultActiveKey:"all",children:[e.jsx(a,{tab:"全部",children:"全部项目"},"all"),e.jsx(a,{tab:"启用",children:"启用项目"},"active"),e.jsx(a,{tab:"归档",children:"归档项目"},"archived")]})},h={parameters:{docs:{description:{story:"标签位于左侧的垂直布局，适用于标签数量较多或内容区域较宽的场景。"}}},render:()=>e.jsxs(c,{tabPosition:"left",defaultActiveKey:"1",children:[e.jsx(a,{tab:"个人资料",children:"个人资料内容"},"1"),e.jsx(a,{tab:"设置",children:"设置内容"},"2"),e.jsx(a,{tab:"通知",children:"通知内容"},"3")]})},T={parameters:{docs:{description:{story:"带禁用标签的示例，用于某些标签页暂时不可访问的场景。"}}},render:()=>e.jsxs(c,{defaultActiveKey:"active",children:[e.jsx(a,{tab:"启用",children:"启用标签"},"active"),e.jsx(a,{tab:"禁用",disabled:!0,children:"不可选择"},"disabled"),e.jsx(a,{tab:"结束",children:"结束标签"},"end")]})},k={parameters:{docs:{description:{story:"受控模式的标签页，通过外部状态管理当前激活的标签，可与其他组件联动。"}}},render:()=>{const[t,r]=p.useState("1");return e.jsxs("div",{className:"space-y-4",children:[e.jsxs(c,{activeKey:t,onChange:r,children:[e.jsx(a,{tab:"标签 1",children:"标签页 1 的内容"},"1"),e.jsx(a,{tab:"标签 2",children:"标签页 2 的内容"},"2"),e.jsx(a,{tab:"标签 3",children:"标签页 3 的内容"},"3")]}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["当前激活：",t]})]})}},y={parameters:{docs:{description:{story:"支持动态增删标签的示例，适用于多文档、多任务管理等需要灵活调整标签的场景。"}}},render:()=>{const[t,r]=p.useState("1"),[n,d]=p.useState([{key:"1",label:"标签 1",content:"标签页 1 的内容"},{key:"2",label:"标签 2",content:"标签页 2 的内容"},{key:"3",label:"标签 3",content:"标签页 3 的内容"}]);let i=4;const K=()=>{const o=String(i++);d([...n,{key:o,label:`标签 ${o}`,content:`标签页 ${o} 的内容`}]),r(o)},P=o=>{var f;const l=n.filter(m=>m.key!==o);if(l.length!==0&&(d(l),t===o)){const m=n.findIndex(w=>w.key===o)-1;r(((f=l[Math.max(m,0)])==null?void 0:f.key)??t)}};return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(c,{activeKey:t,onChange:r,variant:"card",children:n.map(o=>e.jsx(a,{tab:e.jsxs("span",{className:"flex items-center gap-1",children:[o.label,n.length>1&&e.jsx("button",{type:"button",className:"ml-1 inline-flex items-center justify-center w-4 h-4 text-xs rounded-sm hover:bg-muted-foreground/20",onClick:l=>{l.stopPropagation(),P(o.key)},children:"×"})]}),children:o.content},o.key))}),e.jsx("button",{type:"button",className:"flex items-center justify-center w-8 h-8 rounded border border-dashed border-border text-muted-foreground hover:text-foreground hover:border-foreground",onClick:K,children:"+"})]}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"点击 + 添加标签，点击 × 关闭标签"})]})}},j={parameters:{docs:{description:{story:"大量标签时的滚动示例，当标签数量超出容器宽度时支持左右滑动浏览。"}}},render:()=>{const t=Array.from({length:18},(r,n)=>({key:String(n+1),label:`标签 ${n+1}`,content:`标签页 ${n+1} 的内容`}));return e.jsxs("div",{className:"space-y-4",children:[e.jsx(c,{defaultActiveKey:"1",children:t.map(r=>e.jsx(a,{tab:r.label,children:r.content},r.key))}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"当标签数量超出容器宽度时，支持水平滚动浏览"})]})}};var C,$,E;v.parameters={...v.parameters,docs:{...(C=v.parameters)==null?void 0:C.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '线性样式的标签页，下方带有下划线指示器，适合大多数内容切换场景。'
      }
    }
  },
  render: () => <Tabs variant="line" defaultActiveKey="1">
      <TabPane key="1" tab="标签 1">标签页 1 的内容</TabPane>
      <TabPane key="2" tab="标签 2">标签页 2 的内容</TabPane>
      <TabPane key="3" tab="标签 3">标签页 3 的内容</TabPane>
    </Tabs>
}`,...(E=($=v.parameters)==null?void 0:$.docs)==null?void 0:E.source}}};var I,V,q;x.parameters={...x.parameters,docs:{...(I=x.parameters)==null?void 0:I.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '卡片样式的标签页，每个标签带有边框背景，视觉层次更分明。'
      }
    }
  },
  render: () => <Tabs variant="card" defaultActiveKey="overview">
      <TabPane key="overview" tab="概览">概览内容</TabPane>
      <TabPane key="specs" tab="规格">规格内容</TabPane>
      <TabPane key="reviews" tab="评价">评价内容</TabPane>
    </Tabs>
}`,...(q=(V=x.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var _,L,M;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '无边框样式的标签页，风格更简洁，适合嵌入卡片或轻量场景。'
      }
    }
  },
  render: () => <Tabs variant="edgeless" defaultActiveKey="all">
      <TabPane key="all" tab="全部">全部项目</TabPane>
      <TabPane key="active" tab="启用">启用项目</TabPane>
      <TabPane key="archived" tab="归档">归档项目</TabPane>
    </Tabs>
}`,...(M=(L=g.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var R,B,D;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '标签位于左侧的垂直布局，适用于标签数量较多或内容区域较宽的场景。'
      }
    }
  },
  render: () => <Tabs tabPosition="left" defaultActiveKey="1">
      <TabPane key="1" tab="个人资料">个人资料内容</TabPane>
      <TabPane key="2" tab="设置">设置内容</TabPane>
      <TabPane key="3" tab="通知">通知内容</TabPane>
    </Tabs>
}`,...(D=(B=h.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var O,W,z;T.parameters={...T.parameters,docs:{...(O=T.parameters)==null?void 0:O.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '带禁用标签的示例，用于某些标签页暂时不可访问的场景。'
      }
    }
  },
  render: () => <Tabs defaultActiveKey="active">
      <TabPane key="active" tab="启用">启用标签</TabPane>
      <TabPane key="disabled" tab="禁用" disabled>不可选择</TabPane>
      <TabPane key="end" tab="结束">结束标签</TabPane>
    </Tabs>
}`,...(z=(W=T.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};var F,G,H;k.parameters={...k.parameters,docs:{...(F=k.parameters)==null?void 0:F.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '受控模式的标签页，通过外部状态管理当前激活的标签，可与其他组件联动。'
      }
    }
  },
  render: () => {
    const [activeKey, setActiveKey] = useState('1');
    return <div className="space-y-4">
        <Tabs activeKey={activeKey} onChange={setActiveKey}>
          <TabPane key="1" tab="标签 1">标签页 1 的内容</TabPane>
          <TabPane key="2" tab="标签 2">标签页 2 的内容</TabPane>
          <TabPane key="3" tab="标签 3">标签页 3 的内容</TabPane>
        </Tabs>
        <p className="text-sm text-muted-foreground">当前激活：{activeKey}</p>
      </div>;
  }
}`,...(H=(G=k.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var J,Q,U,X,Y;y.parameters={...y.parameters,docs:{...(J=y.parameters)==null?void 0:J.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '支持动态增删标签的示例，适用于多文档、多任务管理等需要灵活调整标签的场景。'
      }
    }
  },
  render: () => {
    const [activeKey, setActiveKey] = useState('1');
    const [panes, setPanes] = useState([{
      key: '1',
      label: '标签 1',
      content: '标签页 1 的内容'
    }, {
      key: '2',
      label: '标签 2',
      content: '标签页 2 的内容'
    }, {
      key: '3',
      label: '标签 3',
      content: '标签页 3 的内容'
    }]);
    let nextKey = 4;
    const addTab = () => {
      const newKey = String(nextKey++);
      setPanes([...panes, {
        key: newKey,
        label: \`标签 \${newKey}\`,
        content: \`标签页 \${newKey} 的内容\`
      }]);
      setActiveKey(newKey);
    };
    const removeTab = (targetKey: string) => {
      const newPanes = panes.filter(p => p.key !== targetKey);
      if (newPanes.length === 0) return;
      setPanes(newPanes);
      if (activeKey === targetKey) {
        const lastIndex = panes.findIndex(p => p.key === targetKey) - 1;
        setActiveKey(newPanes[Math.max(lastIndex, 0)]?.key ?? activeKey);
      }
    };
    return <div className="space-y-4">
        <div className="flex items-center gap-1">
          <Tabs activeKey={activeKey} onChange={setActiveKey} variant="card">
            {panes.map(pane => <TabPane key={pane.key} tab={<span className="flex items-center gap-1">
                  {pane.label}
                  {panes.length > 1 && <button type="button" className="ml-1 inline-flex items-center justify-center w-4 h-4 text-xs rounded-sm hover:bg-muted-foreground/20" onClick={e => {
              e.stopPropagation();
              removeTab(pane.key);
            }}>
                      ×
                    </button>}
                </span>}>
                {pane.content}
              </TabPane>)}
          </Tabs>
          <button type="button" className="flex items-center justify-center w-8 h-8 rounded border border-dashed border-border text-muted-foreground hover:text-foreground hover:border-foreground" onClick={addTab}>
            +
          </button>
        </div>
        <p className="text-sm text-muted-foreground">点击 + 添加标签，点击 × 关闭标签</p>
      </div>;
  }
}`,...(U=(Q=y.parameters)==null?void 0:Q.docs)==null?void 0:U.source},description:{story:"可编辑标签页 - 动态增删",...(Y=(X=y.parameters)==null?void 0:X.docs)==null?void 0:Y.description}}};var Z,ee,ae;j.parameters={...j.parameters,docs:{...(Z=j.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '大量标签时的滚动示例，当标签数量超出容器宽度时支持左右滑动浏览。'
      }
    }
  },
  render: () => {
    const tabs = Array.from({
      length: 18
    }, (_, i) => ({
      key: String(i + 1),
      label: \`标签 \${i + 1}\`,
      content: \`标签页 \${i + 1} 的内容\`
    }));
    return <div className="space-y-4">
        <Tabs defaultActiveKey="1">
          {tabs.map(tab => <TabPane key={tab.key} tab={tab.label}>{tab.content}</TabPane>)}
        </Tabs>
        <p className="text-sm text-muted-foreground">当标签数量超出容器宽度时，支持水平滚动浏览</p>
      </div>;
  }
}`,...(ae=(ee=j.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};const ye=["Line","Card","Edgeless","PositionLeft","WithDisabled","Controlled","EditableTabs","ScrollableTabs"];export{x as Card,k as Controlled,g as Edgeless,y as EditableTabs,v as Line,h as PositionLeft,j as ScrollableTabs,T as WithDisabled,ye as __namedExportsOrder,ue as default};
