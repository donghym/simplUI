import{j as a}from"./jsx-runtime-CDt2p4po.js";import{r as p}from"./index-GiUgBvb1.js";import{a as C}from"./utils-BEhiKRD9.js";import{c as X}from"./index-C08JwjkN.js";import{C as ke}from"./chevron-down-CY-YwltC.js";import{C as Be}from"./chevron-right-V463yFHa.js";import{C as Xe}from"./check-DytZnMFh.js";import{X as ee}from"./x-B-5N0Ikz.js";import{S as ze}from"./search-DufjXXN7.js";import"./createLucideIcon-CZe00VV7.js";const Ge=X("relative flex h-[40px] w-full cursor-pointer items-center justify-between rounded-md border border-border bg-background px-3 text-sm transition-colors duration-200 focus-within:outline-none focus-within:ring-2 focus-within:ring-primary-500 focus-within:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50",{variants:{disabled:{true:"pointer-events-none"},open:{true:"ring-2 ring-primary-500 ring-offset-1"}},defaultVariants:{disabled:!1,open:!1}}),Ue=X("absolute left-0 top-full z-50 mt-1 w-full overflow-auto rounded-md border border-border bg-background shadow-lg",{variants:{open:{true:"animate-in fade-in-0 slide-in-from-top-1 duration-200",false:"animate-out fade-out-0 slide-out-to-top-1 duration-200"}},defaultVariants:{open:!0}}),Je=X("flex cursor-pointer items-center gap-1 px-2 py-1.5 text-sm transition-colors hover:bg-muted",{variants:{selected:{true:"bg-primary-500/10 text-primary-500 font-medium",false:"text-foreground"},disabled:{true:"cursor-not-allowed opacity-50 pointer-events-none",false:""},expanded:{true:"",false:""}},defaultVariants:{selected:!1,disabled:!1,expanded:!1}}),Qe=X("w-full border-b border-border p-2");function qe(r,n,s=0){return r.map(o=>{const t={...o,_key:n?`${n._key}-${o.value}`:o.value,_parent:n,_depth:s};return o.children&&(t.children=qe(o.children,t,s+1)),t})}function Ee(r,n){for(const s of r){if(s.value===n)return s;if(s.children){const o=Ee(s.children,n);if(o)return o}}}function _e(r,n,s=[]){return r.forEach(o=>{(o._inSearchResult===!0||o._inSearchResult===void 0)&&(s.push(o),o.children&&n.has(o.value)&&(o._inSearchResult===!0||o._inSearchResult===void 0)&&_e(o.children,n,s))}),s}function Ye(r,n,s){const t=s||((l,d)=>l.title.toLowerCase().includes(d.toLowerCase())),c=l=>{let d=!1;return l.forEach(i=>{const m=t(i,n);let f=!1;i.children&&(f=c(i.children)),i._matched=m,i._inSearchResult=m||f,i._inSearchResult&&(d=!0)}),d};return c(r),r}function Le(r){return r.map(n=>{const s={...n,_parent:void 0};return n.children&&(s.children=Le(n.children)),s})}function Ze(r){const{value:n,defaultValue:s,treeData:o,filterTreeNode:t,defaultExpandedKeys:c=[],onExpand:l,loadData:d}=r,i=p.useRef(null),m=p.useRef(null),[f,S]=p.useState(!1),[h,z]=p.useState(""),[v,G]=p.useState(new Set(c)),[E,_]=p.useState(new Set),N=n!==void 0?n:s,$=p.useMemo(()=>N===void 0?[]:Array.isArray(N)?N:[N],[N]),y=p.useMemo(()=>qe(o),[o]),U=p.useMemo(()=>{let u=y;return h&&(u=Ye(Le(y),h,t)),_e(u,v)},[y,h,t,v]),J=p.useMemo(()=>$.map(u=>Ee(y,u)).filter(Boolean),[$,y]),T=p.useCallback(async u=>{if(u.disabled)return;const k=v.has(u.value),j=new Set(v);if(k)j.delete(u.value);else if(j.add(u.value),d&&!u.children&&!u.isLeaf){_(q=>new Set(q).add(u.value));try{await d(u)}finally{_(q=>{const L=new Set(q);return L.delete(u.value),L})}}G(j),l==null||l(Array.from(j))},[v,d,l]);return p.useEffect(()=>{const u=k=>{i.current&&!i.current.contains(k.target)&&S(!1)};return document.addEventListener("mousedown",u),()=>document.removeEventListener("mousedown",u)},[]),p.useEffect(()=>{f&&m.current&&m.current.focus()},[f]),{open:f,setOpen:S,searchValue:h,setSearchValue:z,expandedKeys:v,loadingKeys:E,selectedValues:$,internalTreeData:y,visibleNodes:U,selectedNodes:J,handleExpand:T,containerRef:i,searchInputRef:m}}function Ae({node:r,isSelected:n,isExpanded:s,isLoading:o,multiple:t,showExpand:c,onSelect:l,onExpand:d,treeNodeRender:i}){const m=r.children&&r.children.length>0,f=r.isLeaf??!m,S={node:r,depth:r._depth,expanded:s,selected:n,disabled:!!r.disabled};return a.jsxs("div",{className:C(Je({selected:n,disabled:!!r.disabled}),`pl-${r._depth*2+2}`),onClick:h=>{h.stopPropagation(),l(r)},role:"treeitem","aria-selected":n,"aria-expanded":m?s:void 0,children:[c&&!f&&a.jsx("span",{className:"flex-shrink-0 cursor-pointer p-0.5 hover:bg-muted rounded",onClick:h=>{h.stopPropagation(),d(r)},children:o?a.jsx("span",{className:"h-4 w-4 animate-spin rounded-full border-2 border-border border-t-primary-500"}):s?a.jsx(ke,{className:"h-4 w-4"}):a.jsx(Be,{className:"h-4 w-4"})}),t&&a.jsx("span",{className:C("flex h-4 w-4 flex-shrink-0 items-center justify-center rounded border",n?"border-primary-500 bg-primary-500 text-white":"border-border"),children:n&&a.jsx(Xe,{className:"h-3 w-3"})}),a.jsx("span",{className:"flex-1 truncate",children:i?i(S):r.title})]},r._key)}Ae.__docgenInfo={description:"树节点组件",methods:[],displayName:"TreeNodeComponent",props:{node:{required:!0,tsType:{name:"InternalTreeNode"},description:""},isSelected:{required:!0,tsType:{name:"boolean"},description:""},isExpanded:{required:!0,tsType:{name:"boolean"},description:""},isLoading:{required:!0,tsType:{name:"boolean"},description:""},multiple:{required:!0,tsType:{name:"boolean"},description:""},showExpand:{required:!0,tsType:{name:"boolean"},description:""},onSelect:{required:!0,tsType:{name:"signature",type:"function",raw:"(node: InternalTreeNode) => void",signature:{arguments:[{type:{name:"InternalTreeNode"},name:"node"}],return:{name:"void"}}},description:""},onExpand:{required:!0,tsType:{name:"signature",type:"function",raw:"(node: InternalTreeNode) => void",signature:{arguments:[{type:{name:"InternalTreeNode"},name:"node"}],return:{name:"void"}}},description:""},treeNodeRender:{required:!1,tsType:{name:"signature",type:"function",raw:"(props: TreeNodeRenderProps) => React.ReactNode",signature:{arguments:[{type:{name:"TreeNodeRenderProps"},name:"props"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:""}}};const er=256,R=p.forwardRef((r,n)=>{const{value:s,defaultValue:o,onChange:t,treeData:c,placeholder:l="请选择",disabled:d=!1,multiple:i=!1,searchable:m=!1,filterTreeNode:f,defaultExpandedKeys:S=[],onExpand:h,loadData:z,maxDropdownHeight:v=er,treeNodeRender:G,tagRender:E,showExpand:_=!0,className:N,dropdownClassName:$,notFoundContent:y="暂无数据",allowClear:U=!1}=r,J=p.useRef(null),{open:T,setOpen:u,searchValue:k,setSearchValue:j,expandedKeys:q,loadingKeys:L,selectedValues:D,visibleNodes:Y,selectedNodes:g,handleExpand:Pe,containerRef:Ie,searchInputRef:Ke}=Ze({value:s,defaultValue:o,treeData:c,filterTreeNode:f,defaultExpandedKeys:S,onExpand:h,loadData:z}),Me=p.useMemo(()=>{var e;return g.length===0?l:i?`${g.length} 项已选`:((e=g[0])==null?void 0:e.title)||l},[g,i,l]),He=()=>{d||u(e=>!e)},Fe=e=>{if(!(e.disabled||e.disableCheckbox))if(i){const V=D.includes(e.value),Q=V?D.filter(b=>b!==e.value):[...D,e.value],w=V?g.filter(b=>b.value!==e.value).map(b=>b):[...g,e].map(b=>b);t==null||t(Q,w)}else t==null||t(e.value,e),u(!1)},Oe=e=>{e.stopPropagation(),i?t==null||t([],[]):t==null||t(void 0,void 0)},Z=e=>{if(!i)return;const V=D.filter(w=>w!==e),Q=g.filter(w=>w.value!==e).map(w=>w);t==null||t(V,Q)},We=e=>{J.current=e,Ie.current=e,typeof n=="function"&&n(e)};return a.jsxs("div",{ref:We,className:C(Ge({disabled:d,open:T}),N),onClick:He,"aria-expanded":T,"aria-disabled":d,role:"combobox",children:[a.jsx("div",{className:"flex flex-1 items-center gap-1 overflow-hidden",children:i&&g.length>0?a.jsx("div",{className:"flex flex-wrap gap-1",children:g.map(e=>E?E(e,()=>Z(e.value)):a.jsxs("span",{className:"inline-flex items-center gap-1 rounded bg-muted px-1.5 py-0.5 text-xs",children:[e.title,a.jsx(ee,{className:"h-3 w-3 cursor-pointer hover:text-danger-500",onClick:V=>{V.stopPropagation(),Z(e.value)}})]},e.value))}):a.jsx("span",{className:C("truncate",g.length===0?"text-muted-foreground":"text-foreground"),children:Me})}),U&&D.length>0&&!d&&a.jsx(ee,{className:"h-4 w-4 flex-shrink-0 cursor-pointer text-muted-foreground hover:text-foreground",onClick:Oe}),a.jsx(ke,{className:C("h-4 w-4 flex-shrink-0 text-muted-foreground transition-transform",T&&"rotate-180")}),T&&a.jsxs("div",{className:C(Ue({open:T}),$),style:{maxHeight:v},onClick:e=>e.stopPropagation(),role:"tree",children:[m&&a.jsx("div",{className:Qe(),children:a.jsxs("div",{className:"flex items-center gap-2 rounded border border-border px-2 py-1",children:[a.jsx(ze,{className:"h-4 w-4 text-muted-foreground"}),a.jsx("input",{ref:Ke,value:k,onChange:e=>j(e.target.value),placeholder:"搜索",className:"flex-1 outline-none text-sm"})]})}),a.jsx("div",{className:"p-1",children:Y.length>0?Y.map(e=>a.jsx(Ae,{node:e,isSelected:D.includes(e.value),isExpanded:q.has(e.value),isLoading:L.has(e.value),multiple:i,showExpand:_,onSelect:Fe,onExpand:Pe,treeNodeRender:G},e._key)):a.jsx("div",{className:"py-8 text-center text-sm text-muted-foreground",children:y})})]})]})});R.displayName="TreeSelect";R.__docgenInfo={description:"",methods:[],displayName:"TreeSelect",props:{value:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:"选中值（受控）。单选 string，多选 string[]"},defaultValue:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:"默认选中值（非受控）。单选 string，多选 string[]"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | string[] | undefined, nodes: TreeNode | TreeNode[] | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"string | string[] | undefined",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"},{name:"undefined"}]},name:"value"},{type:{name:"union",raw:"TreeNode | TreeNode[] | undefined",elements:[{name:"TreeNode"},{name:"Array",elements:[{name:"TreeNode"}],raw:"TreeNode[]"},{name:"undefined"}]},name:"nodes"}],return:{name:"void"}}},description:"选中值变化回调"},treeData:{required:!0,tsType:{name:"Array",elements:[{name:"TreeNode"}],raw:"TreeNode[]"},description:"树节点数据源"},placeholder:{required:!1,tsType:{name:"string"},description:"占位文本"},disabled:{required:!1,tsType:{name:"boolean"},description:"是否禁用"},multiple:{required:!1,tsType:{name:"boolean"},description:"是否多选模式"},searchable:{required:!1,tsType:{name:"boolean"},description:"是否可搜索"},filterTreeNode:{required:!1,tsType:{name:"signature",type:"function",raw:"(node: TreeNode, searchValue: string) => boolean",signature:{arguments:[{type:{name:"TreeNode"},name:"node"},{type:{name:"string"},name:"searchValue"}],return:{name:"boolean"}}},description:"搜索过滤函数"},defaultExpandedKeys:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"默认展开的节点 value 数组"},onExpand:{required:!1,tsType:{name:"signature",type:"function",raw:"(expandedKeys: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"expandedKeys"}],return:{name:"void"}}},description:"展开节点变化回调"},loadData:{required:!1,tsType:{name:"signature",type:"function",raw:"(node: TreeNode) => Promise<TreeNode[]>",signature:{arguments:[{type:{name:"TreeNode"},name:"node"}],return:{name:"Promise",elements:[{name:"Array",elements:[{name:"TreeNode"}],raw:"TreeNode[]"}],raw:"Promise<TreeNode[]>"}}},description:"异步加载子节点"},maxDropdownHeight:{required:!1,tsType:{name:"number"},description:"下拉面板最大高度，默认 256px"},treeNodeRender:{required:!1,tsType:{name:"signature",type:"function",raw:"(props: TreeNodeRenderProps) => ReactNode",signature:{arguments:[{type:{name:"TreeNodeRenderProps"},name:"props"}],return:{name:"ReactNode"}}},description:"自定义节点渲染函数"},tagRender:{required:!1,tsType:{name:"signature",type:"function",raw:"(node: TreeNode, onClose: () => void) => ReactNode",signature:{arguments:[{type:{name:"TreeNode"},name:"node"},{type:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},name:"onClose"}],return:{name:"ReactNode"}}},description:"自定义选中项渲染（多选模式标签）"},showExpand:{required:!1,tsType:{name:"boolean"},description:"是否显示展开图标，默认 true"},className:{required:!1,tsType:{name:"string"},description:"自定义 className"},dropdownClassName:{required:!1,tsType:{name:"string"},description:"下拉面板 className"},notFoundContent:{required:!1,tsType:{name:"ReactNode"},description:"无数据时显示的内容"},allowClear:{required:!1,tsType:{name:"boolean"},description:"允许清空"}},composes:["VariantProps"]};const rr=r=>a.jsx("div",{style:{display:"flex",alignItems:"flex-start",justifyContent:"center",minHeight:"500px",width:"100%",paddingTop:"40px"},children:a.jsx(r,{})}),pr={title:"数据录入/TreeSelect 树选择",component:R,tags:["autodocs"],decorators:[rr],parameters:{layout:"padded",docs:{description:{component:"树选择用于在树形结构中进行选择。适用于部门选择、类目筛选、权限节点等具有层级关系的数据场景，支持多选、异步加载和虚拟滚动。"}}},argTypes:{treeData:{control:"object",description:"树节点数据源，支持多级嵌套的树形结构"},multiple:{control:"boolean",description:"是否多选模式，true 时允许多选（启用复选框）"}}},x=[{value:"parent1",title:"父节点 1",children:[{value:"child1",title:"子节点 1"},{value:"child2",title:"子节点 2"}]},{value:"parent2",title:"父节点 2",children:[{value:"child3",title:"子节点 3"},{value:"child4",title:"子节点 4"}]}],A={args:{treeData:x,placeholder:"请选择"}},P={args:{treeData:x,defaultValue:"child1"}},I={args:{treeData:x,multiple:!0,defaultValue:["child1","child3"]}},K={args:{treeData:x,allowClear:!0,defaultValue:"child1"}},M={args:{treeData:x,disabled:!0}},H={args:{treeData:x,searchable:!0,placeholder:"搜索并选择..."}},F={parameters:{docs:{description:{story:"受控模式示例，展示如何通过外部状态管理树选择的值。"}}},render:()=>{const[r,n]=p.useState();return a.jsxs("div",{className:"space-y-4",children:[a.jsxs("p",{children:["已选择：",r||"无"]}),a.jsx(R,{treeData:x,value:r,onChange:s=>n(s)})]})}},O={args:{treeData:x,multiple:!0,defaultValue:["child1","child3"],placeholder:"请勾选"}},W={render:()=>{const[r,n]=p.useState(),s=[{value:"region-1",title:"华东地区",isLeaf:!1},{value:"region-2",title:"华南地区",isLeaf:!1},{value:"region-3",title:"华北地区",isLeaf:!1}],o=async t=>{await new Promise(l=>setTimeout(l,1e3));const c=[];for(let l=1;l<=3;l++)c.push({value:`${t.value}-city-${l}`,title:`${t.title} - 城市 ${l}`});return c};return a.jsxs("div",{className:"space-y-4",children:[a.jsxs("p",{children:["已选择：",r||"无"]}),a.jsx(R,{treeData:s,value:r,onChange:t=>n(t),loadData:o,placeholder:"点击展开节点异步加载"}),a.jsx("p",{className:"text-xs text-gray-400",children:"展开父节点后会模拟 1 秒延迟加载子节点"})]})}},B={parameters:{docs:{description:{story:"大数据集下的虚拟滚动演示，支持 2000+ 节点流畅渲染，适用于超大规模树形数据的选择场景。"}}},render:()=>{const[r,n]=p.useState(),o=(()=>{const t=[];for(let c=1;c<=50;c++){const l=[];for(let d=1;d<=20;d++){const i=[];for(let m=1;m<=2;m++)i.push({value:`node-${c}-${d}-${m}`,title:`节点 ${c}-${d}-${m}`});l.push({value:`node-${c}-${d}`,title:`节点 ${c}-${d}`,children:i})}t.push({value:`node-${c}`,title:`节点 ${c}`,children:l})}return t})();return a.jsxs("div",{className:"space-y-4",children:[a.jsxs("p",{children:["已选择：",r||"无"]}),a.jsx(R,{treeData:o,value:r,onChange:t=>n(t),placeholder:"选择节点（共 2000+ 节点）",searchable:!0,maxDropdownHeight:300}),a.jsx("p",{className:"text-xs text-gray-400",children:"大数据集演示：50 个父节点 × 20 个子节点 × 2 个孙节点 = 2000+ 节点"})]})}};var re,ae,te;A.parameters={...A.parameters,docs:{...(re=A.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    treeData,
    placeholder: '请选择'
  }
}`,...(te=(ae=A.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var ne,se,oe;P.parameters={...P.parameters,docs:{...(ne=P.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    treeData,
    defaultValue: 'child1'
  }
}`,...(oe=(se=P.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var le,ie,de;I.parameters={...I.parameters,docs:{...(le=I.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    treeData,
    multiple: true,
    defaultValue: ['child1', 'child3']
  }
}`,...(de=(ie=I.parameters)==null?void 0:ie.docs)==null?void 0:de.source}}};var ce,ue,pe;K.parameters={...K.parameters,docs:{...(ce=K.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    treeData,
    allowClear: true,
    defaultValue: 'child1'
  }
}`,...(pe=(ue=K.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};var me,fe,he;M.parameters={...M.parameters,docs:{...(me=M.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    treeData,
    disabled: true
  }
}`,...(he=(fe=M.parameters)==null?void 0:fe.docs)==null?void 0:he.source}}};var ge,ve,ye;H.parameters={...H.parameters,docs:{...(ge=H.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    treeData,
    searchable: true,
    placeholder: '搜索并选择...'
  }
}`,...(ye=(ve=H.parameters)==null?void 0:ve.docs)==null?void 0:ye.source}}};var xe,Ne,Te;F.parameters={...F.parameters,docs:{...(xe=F.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '受控模式示例，展示如何通过外部状态管理树选择的值。'
      }
    }
  },
  render: () => {
    const [value, setValue] = useState<string | undefined>();
    return <div className="space-y-4">
        <p>已选择：{value || '无'}</p>
        <TreeSelect treeData={treeData} value={value} onChange={v => setValue(v as string | undefined)} />
      </div>;
  }
}`,...(Te=(Ne=F.parameters)==null?void 0:Ne.docs)==null?void 0:Te.source}}};var we,be,Se;O.parameters={...O.parameters,docs:{...(we=O.parameters)==null?void 0:we.docs,source:{originalSource:`{
  args: {
    treeData,
    multiple: true,
    defaultValue: ['child1', 'child3'],
    placeholder: '请勾选'
  }
}`,...(Se=(be=O.parameters)==null?void 0:be.docs)==null?void 0:Se.source}}};var je,De,Ve;W.parameters={...W.parameters,docs:{...(je=W.parameters)==null?void 0:je.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string | undefined>();
    const asyncTreeData = [{
      value: 'region-1',
      title: '华东地区',
      isLeaf: false
    }, {
      value: 'region-2',
      title: '华南地区',
      isLeaf: false
    }, {
      value: 'region-3',
      title: '华北地区',
      isLeaf: false
    }];
    const loadData = async (node: {
      value: string;
      title: string;
    }) => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      const children: {
        value: string;
        title: string;
      }[] = [];
      for (let i = 1; i <= 3; i++) {
        children.push({
          value: \`\${node.value}-city-\${i}\`,
          title: \`\${node.title} - 城市 \${i}\`
        });
      }
      return children;
    };
    return <div className="space-y-4">
        <p>已选择：{value || '无'}</p>
        <TreeSelect treeData={asyncTreeData} value={value} onChange={v => setValue(v as string | undefined)} loadData={loadData} placeholder="点击展开节点异步加载" />
        <p className="text-xs text-gray-400">展开父节点后会模拟 1 秒延迟加载子节点</p>
      </div>;
  }
}`,...(Ve=(De=W.parameters)==null?void 0:De.docs)==null?void 0:Ve.source}}};var Ce,Re,$e;B.parameters={...B.parameters,docs:{...(Ce=B.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '大数据集下的虚拟滚动演示，支持 2000+ 节点流畅渲染，适用于超大规模树形数据的选择场景。'
      }
    }
  },
  render: () => {
    const [value, setValue] = useState<string | undefined>();

    // 生成 1000+ 节点的大数据集
    const generateLargeTreeData = () => {
      const data = [];
      for (let i = 1; i <= 50; i++) {
        const children = [];
        for (let j = 1; j <= 20; j++) {
          const grandChildren = [];
          for (let k = 1; k <= 2; k++) {
            grandChildren.push({
              value: \`node-\${i}-\${j}-\${k}\`,
              title: \`节点 \${i}-\${j}-\${k}\`
            });
          }
          children.push({
            value: \`node-\${i}-\${j}\`,
            title: \`节点 \${i}-\${j}\`,
            children: grandChildren
          });
        }
        data.push({
          value: \`node-\${i}\`,
          title: \`节点 \${i}\`,
          children
        });
      }
      return data;
    };
    const largeTreeData = generateLargeTreeData();
    return <div className="space-y-4">
        <p>已选择：{value || '无'}</p>
        <TreeSelect treeData={largeTreeData} value={value} onChange={v => setValue(v as string | undefined)} placeholder="选择节点（共 2000+ 节点）" searchable maxDropdownHeight={300} />
        <p className="text-xs text-gray-400">大数据集演示：50 个父节点 × 20 个子节点 × 2 个孙节点 = 2000+ 节点</p>
      </div>;
  }
}`,...($e=(Re=B.parameters)==null?void 0:Re.docs)==null?void 0:$e.source}}};const mr=["Default","WithDefaultValue","Multiple","AllowClear","Disabled","Searchable","Controlled","Checkable","AsyncLoad","VirtualScroll"];export{K as AllowClear,W as AsyncLoad,O as Checkable,F as Controlled,A as Default,M as Disabled,I as Multiple,H as Searchable,B as VirtualScroll,P as WithDefaultValue,mr as __namedExportsOrder,pr as default};
