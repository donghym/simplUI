import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as i}from"./index-GiUgBvb1.js";import{a as b}from"./utils-BEhiKRD9.js";import{c as N}from"./index-C08JwjkN.js";import{C as Be}from"./chevron-right-V463yFHa.js";import{S as We}from"./search-DufjXXN7.js";import"./createLucideIcon-CZe00VV7.js";const He=N("relative w-full text-sm text-foreground select-none",{variants:{showLine:{true:"border-l border-border ml-3 pl-3",false:""}},defaultVariants:{showLine:!1}}),$e=N("relative flex items-center py-1.5 px-2 rounded-md cursor-pointer transition-colors duration-150 hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500",{variants:{selected:{true:"bg-primary-500/10 text-primary-500 font-medium",false:""},disabled:{true:"opacity-50 pointer-events-none cursor-not-allowed",false:""}},defaultVariants:{selected:!1,disabled:!1}}),ze=N("flex items-center gap-1.5 flex-1 min-w-0",{variants:{}}),Ge=N("flex-shrink-0 w-4 h-4 text-muted-foreground transition-transform duration-200",{variants:{expanded:{true:"rotate-90",false:""}},defaultVariants:{expanded:!1}}),Je=N("mb-2 w-full",{variants:{}});function W({node:t,level:o,expanded:r,selected:a,checked:s,halfChecked:y,showLine:l,selectMode:c,onNodeClick:h,onToggleExpand:v,onToggleCheck:w}){const g=t.children&&t.children.length>0,x=t.isLeaf??!g;return e.jsxs("div",{role:"treeitem","aria-selected":a,"aria-expanded":g?r:void 0,children:[e.jsxs("div",{onClick:d=>h(t,d),className:b($e({selected:a,disabled:t.disabled})),style:{paddingLeft:`${o*20+8}px`},children:[!x&&e.jsx("span",{onClick:d=>{d.stopPropagation(),v(t)},className:b(Ge({expanded:r}),"cursor-pointer hover:bg-muted rounded"),role:"button","aria-label":r?"收起":"展开",children:e.jsx(Be,{className:"h-4 w-4"})}),x&&e.jsx("span",{className:"w-4"}),c==="multiple"&&e.jsx("input",{type:"checkbox",checked:s,ref:d=>{d&&(d.indeterminate=y)},onChange:()=>w(t),onClick:d=>d.stopPropagation(),disabled:t.disabled,className:"mr-1.5 h-4 w-4 rounded border-border text-primary-500 focus:ring-primary-500"}),e.jsxs("div",{className:b(ze()),children:[t.icon&&e.jsx("span",{"aria-hidden":"true",children:t.icon}),e.jsx("span",{className:"truncate",children:t.title})]})]}),g&&r&&e.jsx("div",{role:"group",className:b(l&&"border-l border-border ml-4"),children:t.children.map(d=>e.jsx(W,{node:d,level:o+1,expanded:r,selected:a,checked:s,halfChecked:y,showLine:l,selectMode:c,onNodeClick:h,onToggleExpand:v,onToggleCheck:w},d.key))})]})}W.__docgenInfo={description:"树节点组件",methods:[],displayName:"TreeNode",props:{node:{required:!0,tsType:{name:"TreeNodeData"},description:""},level:{required:!0,tsType:{name:"number"},description:""},expanded:{required:!0,tsType:{name:"boolean"},description:""},selected:{required:!0,tsType:{name:"boolean"},description:""},checked:{required:!0,tsType:{name:"boolean"},description:""},halfChecked:{required:!0,tsType:{name:"boolean"},description:""},showLine:{required:!0,tsType:{name:"boolean"},description:""},selectMode:{required:!0,tsType:{name:"TreeProps['selectMode']",raw:"TreeProps['selectMode']"},description:""},onNodeClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(node: TreeNodeData, e: React.MouseEvent) => void",signature:{arguments:[{type:{name:"TreeNodeData"},name:"node"},{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"e"}],return:{name:"void"}}},description:""},onToggleExpand:{required:!0,tsType:{name:"signature",type:"function",raw:"(node: TreeNodeData) => void",signature:{arguments:[{type:{name:"TreeNodeData"},name:"node"}],return:{name:"void"}}},description:""},onToggleCheck:{required:!0,tsType:{name:"signature",type:"function",raw:"(node: TreeNodeData) => void",signature:{arguments:[{type:{name:"TreeNodeData"},name:"node"}],return:{name:"void"}}},description:""}}};function B(t,o){for(const r of t){if(r.key===o)return r;if(r.children){const a=B(r.children,o);if(a)return a}}}function Qe(t){const o=[];function r(a){for(const s of a)o.push(s.key),s.children&&r(s.children)}return r(t),o}function Ke(t,o){return t.map(r=>{const a=o(r),s=r.children?Ke(r.children,o):[];return a||s.length>0?{...r,children:s.length>0?s:r.children}:null}).filter(r=>r!==null)}const k=i.forwardRef((t,o)=>{const{className:r,treeData:a,selectMode:s="none",selectedKeys:y,defaultSelectedKeys:l=[],checkedKeys:c,defaultCheckedKeys:h=[],expandedKeys:v,defaultExpandedKeys:w=[],onSelect:g,onCheck:x,onExpand:d,showLine:H=!1,defaultExpandAll:Ne=!1,searchable:we=!1,filterTreeNode:L,searchPlaceholder:De="搜索",...Se}=t,[Ce,je]=i.useState(l),[Ee,Ie]=i.useState(h),[qe,Ae]=i.useState(Ne?Qe(a):w),[D,Re]=i.useState(""),Me=i.useRef(null),P=y!==void 0,O=c!==void 0,_=v!==void 0,Ve=P?y:Ce,T=O?c:Ee,K=_?v:qe,Le=i.useMemo(()=>!D||!L?a:Ke(a,n=>L(n,D)),[a,D,L]),$=i.useRef({handleToggleCheck:null}),Pe=i.useCallback(n=>{if(n.disabled)return;const p=K.includes(n.key),u=p?K.filter(m=>m!==n.key):[...K,n.key];_||Ae(u),d==null||d(u,{node:n,expanded:!p,expandedNodes:u.map(m=>B(a,m)).filter(Boolean)})},[K,_,d,a]),z=i.useCallback(n=>{if(n.disabled||s!=="multiple")return;const p=T.includes(n.key),u=p?T.filter(m=>m!==n.key):[...T,n.key];O||Ie(u),x==null||x(u,{node:n,checked:!p,checkedNodes:u.map(m=>B(a,m)).filter(Boolean),halfCheckedKeys:[]})},[T,O,x,s,a]);$.current.handleToggleCheck=z;const Oe=i.useCallback((n,p)=>{var u,m;if(!(n.disabled||s==="none"))if(s==="single"){const G=[n.key];P||je(G),g==null||g(G,{node:n,selected:!0,selectedNodes:[n],nativeEvent:p})}else s==="multiple"&&((m=(u=$.current).handleToggleCheck)==null||m.call(u,n))},[s,P,g]),_e=(n,p)=>e.jsx(W,{node:n,level:p,expanded:K.includes(n.key),selected:Ve.includes(n.key),checked:T.includes(n.key),halfChecked:!1,showLine:H,selectMode:s,onNodeClick:Oe,onToggleExpand:Pe,onToggleCheck:z},n.key);return e.jsxs("div",{ref:o||Me,className:b("sui-tree",He({showLine:H}),r),...Se,children:[we&&e.jsx("div",{className:b(Je()),children:e.jsxs("div",{className:"relative",children:[e.jsx(We,{className:"absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"}),e.jsx("input",{type:"text",value:D,onChange:n=>Re(n.target.value),placeholder:De,"aria-label":"搜索",className:"h-[40px] w-full rounded-md border border-border pl-9 pr-3 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"})]})}),e.jsx("div",{role:"tree",className:"w-full",children:Le.map(n=>_e(n,0))})]})});k.displayName="Tree";k.__docgenInfo={description:"树组件",methods:[],displayName:"Tree",props:{treeData:{required:!0,tsType:{name:"Array",elements:[{name:"TreeNodeData"}],raw:"TreeNodeData[]"},description:"树节点数据源，必填"},selectMode:{required:!1,tsType:{name:"union",raw:"'none' | 'single' | 'multiple'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'single'"},{name:"literal",value:"'multiple'"}]},description:"选中模式。none 不可选中，single 单选，multiple 多选。默认 'none'"},selectedKeys:{required:!1,tsType:{name:"Array",elements:[{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]}],raw:"TreeKey[]"},description:"当前选中的节点 key（受控）"},defaultSelectedKeys:{required:!1,tsType:{name:"Array",elements:[{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]}],raw:"TreeKey[]"},description:"默认选中的节点 key（非受控）"},checkedKeys:{required:!1,tsType:{name:"Array",elements:[{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]}],raw:"TreeKey[]"},description:"当前勾选的节点 key（受控，多选模式）"},defaultCheckedKeys:{required:!1,tsType:{name:"Array",elements:[{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]}],raw:"TreeKey[]"},description:"默认勾选的节点 key（非受控，多选模式）"},expandedKeys:{required:!1,tsType:{name:"Array",elements:[{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]}],raw:"TreeKey[]"},description:"当前展开的节点 key（受控）"},defaultExpandedKeys:{required:!1,tsType:{name:"Array",elements:[{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]}],raw:"TreeKey[]"},description:"默认展开的节点 key（非受控）"},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(selectedKeys: TreeKey[], info: TreeSelectInfo) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]}],raw:"TreeKey[]"},name:"selectedKeys"},{type:{name:"TreeSelectInfo"},name:"info"}],return:{name:"void"}}},description:"选中节点变化回调"},onCheck:{required:!1,tsType:{name:"signature",type:"function",raw:"(checkedKeys: TreeKey[], info: TreeCheckInfo) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]}],raw:"TreeKey[]"},name:"checkedKeys"},{type:{name:"TreeCheckInfo"},name:"info"}],return:{name:"void"}}},description:"勾选节点变化回调"},onExpand:{required:!1,tsType:{name:"signature",type:"function",raw:"(expandedKeys: TreeKey[], info: TreeExpandInfo) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]}],raw:"TreeKey[]"},name:"expandedKeys"},{type:{name:"TreeExpandInfo"},name:"info"}],return:{name:"void"}}},description:"展开节点变化回调"},showLine:{required:!1,tsType:{name:"boolean"},description:"是否显示连接线"},defaultExpandAll:{required:!1,tsType:{name:"boolean"},description:"是否默认展开所有节点"},searchable:{required:!1,tsType:{name:"boolean"},description:"是否可搜索"},filterTreeNode:{required:!1,tsType:{name:"signature",type:"function",raw:"(node: TreeNodeData, searchValue: string) => boolean",signature:{arguments:[{type:{name:"TreeNodeData"},name:"node"},{type:{name:"string"},name:"searchValue"}],return:{name:"boolean"}}},description:"搜索过滤函数"},searchPlaceholder:{required:!1,tsType:{name:"string"},description:"搜索框 placeholder"},className:{required:!1,tsType:{name:"string"},description:"自定义 className"}},composes:["Omit","VariantProps"]};const Ue=t=>e.jsx("div",{style:{display:"flex",alignItems:"flex-start",justifyContent:"center",minHeight:"500px",width:"100%",paddingTop:"40px"},children:e.jsx(t,{})}),nr={title:"数据展示/Tree 树形控件",component:k,tags:["autodocs"],decorators:[Ue],argTypes:{selectMode:{control:"radio",options:["none","single","multiple"],description:"选中模式，none 不可选中，single 单选，multiple 多选，默认 none"},showLine:{control:"boolean",description:"是否显示连接线"},defaultExpandAll:{control:"boolean",description:"是否默认展开所有节点"},searchable:{control:"boolean",description:"是否可搜索"}},parameters:{layout:"padded"}},f=[{key:"0",title:"根节点",children:[{key:"0-0",title:"父节点 1",children:[{key:"0-0-0",title:"子节点 1"},{key:"0-0-1",title:"子节点 2"}]},{key:"0-1",title:"父节点 2",children:[{key:"0-1-0",title:"子节点 3"}]}]}],S={args:{treeData:f}},C={args:{treeData:f,selectMode:"single"}},j={args:{treeData:f,selectMode:"multiple",defaultCheckedKeys:["0-0-0","0-1-0"]}},E={args:{treeData:f,showLine:!0}},I={args:{treeData:f,defaultExpandAll:!0}},q={args:{treeData:f,searchable:!0,searchPlaceholder:"搜索树节点..."}},A={args:{treeData:[{key:"0",title:"根节点",children:[{key:"0-0",title:"可用"},{key:"0-1",title:"禁用",disabled:!0}]}]}},R={render:()=>{const[t,o]=i.useState([]),[r,a]=i.useState(["0"]);return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("p",{children:["已选择：",t.join(", ")]}),e.jsx(k,{treeData:f,selectMode:"single",selectedKeys:t,expandedKeys:r,onSelect:s=>o(s),onExpand:s=>a(s)})]})}},M={render:()=>{const[t,o]=i.useState(["0-0-0"]);return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("p",{children:["已勾选：",t.join(", ")]}),e.jsx(k,{treeData:f,selectMode:"multiple",defaultCheckedKeys:["0-0-0"],defaultExpandAll:!0,onCheck:r=>o(r)})]})}},V={render:()=>{const[t,o]=i.useState([{key:"node-1",title:"节点 1"},{key:"node-2",title:"节点 2"},{key:"node-3",title:"节点 3"},{key:"node-4",title:"节点 4"},{key:"node-5",title:"节点 5"}]),r=i.useRef(null),a=l=>{r.current=l},s=l=>{l.preventDefault()},y=l=>{if(r.current===null||r.current===l)return;const c=[...t],[h]=c.splice(r.current,1);h&&(c.splice(l,0,h),o(c),r.current=null)};return e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-sm text-muted-foreground",children:"拖拽节点可重新排序"}),e.jsx("div",{className:"space-y-1",children:t.map((l,c)=>e.jsxs("div",{draggable:!0,onDragStart:()=>a(c),onDragOver:s,onDrop:()=>y(c),className:"flex items-center gap-2 px-3 py-2 border border-border rounded-md cursor-grab active:cursor-grabbing hover:bg-muted/50 transition-colors select-none",children:[e.jsx("span",{className:"text-muted-foreground",children:"⠿"}),e.jsx("span",{children:l.title})]},l.key))}),e.jsxs("div",{className:"mt-4",children:[e.jsx("p",{className:"text-sm text-muted-foreground mb-2",children:"当前排序："}),e.jsx(k,{treeData:[{key:"root",title:"根节点",children:t}],defaultExpandAll:!0})]})]})}};var J,Q,U;S.parameters={...S.parameters,docs:{...(J=S.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    treeData
  }
}`,...(U=(Q=S.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var X,Y,Z;C.parameters={...C.parameters,docs:{...(X=C.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    treeData,
    selectMode: 'single'
  }
}`,...(Z=(Y=C.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var F,ee,re;j.parameters={...j.parameters,docs:{...(F=j.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    treeData,
    selectMode: 'multiple',
    defaultCheckedKeys: ['0-0-0', '0-1-0']
  }
}`,...(re=(ee=j.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var te,ne,se;E.parameters={...E.parameters,docs:{...(te=E.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    treeData,
    showLine: true
  }
}`,...(se=(ne=E.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var ae,oe,de;I.parameters={...I.parameters,docs:{...(ae=I.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    treeData,
    defaultExpandAll: true
  }
}`,...(de=(oe=I.parameters)==null?void 0:oe.docs)==null?void 0:de.source}}};var ie,le,ce;q.parameters={...q.parameters,docs:{...(ie=q.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    treeData,
    searchable: true,
    searchPlaceholder: '搜索树节点...'
  }
}`,...(ce=(le=q.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var ue,me,pe;A.parameters={...A.parameters,docs:{...(ue=A.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    treeData: [{
      key: '0',
      title: '根节点',
      children: [{
        key: '0-0',
        title: '可用'
      }, {
        key: '0-1',
        title: '禁用',
        disabled: true
      }]
    }]
  }
}`,...(pe=(me=A.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var ye,ge,fe;R.parameters={...R.parameters,docs:{...(ye=R.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  render: () => {
    const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
    const [expandedKeys, setExpandedKeys] = useState<string[]>(['0']);
    return <div className="space-y-4">
        <p>已选择：{selectedKeys.join(', ')}</p>
        <Tree treeData={treeData} selectMode="single" selectedKeys={selectedKeys} expandedKeys={expandedKeys} onSelect={keys => setSelectedKeys(keys as string[])} onExpand={keys => setExpandedKeys(keys as string[])} />
      </div>;
  }
}`,...(fe=(ge=R.parameters)==null?void 0:ge.docs)==null?void 0:fe.source}}};var he,xe,be;M.parameters={...M.parameters,docs:{...(he=M.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: () => {
    const [checkedKeys, setCheckedKeys] = useState<string[]>(['0-0-0']);
    return <div className="space-y-4">
        <p>已勾选：{checkedKeys.join(', ')}</p>
        <Tree treeData={treeData} selectMode="multiple" defaultCheckedKeys={['0-0-0']} defaultExpandAll onCheck={keys => setCheckedKeys(keys as string[])} />
      </div>;
  }
}`,...(be=(xe=M.parameters)==null?void 0:xe.docs)==null?void 0:be.source}}};var ke,ve,Te;V.parameters={...V.parameters,docs:{...(ke=V.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  render: () => {
    const [items, setItems] = useState<TreeNodeData[]>([{
      key: 'node-1',
      title: '节点 1'
    }, {
      key: 'node-2',
      title: '节点 2'
    }, {
      key: 'node-3',
      title: '节点 3'
    }, {
      key: 'node-4',
      title: '节点 4'
    }, {
      key: 'node-5',
      title: '节点 5'
    }]);
    const dragIndexRef = useRef<number | null>(null);
    const handleDragStart = (index: number) => {
      dragIndexRef.current = index;
    };
    const handleDragOver = (e: React.DragEvent) => {
      e.preventDefault();
    };
    const handleDrop = (dropIndex: number) => {
      if (dragIndexRef.current === null || dragIndexRef.current === dropIndex) return;
      const newItems = [...items];
      const [dragged] = newItems.splice(dragIndexRef.current, 1);
      if (!dragged) return;
      newItems.splice(dropIndex, 0, dragged);
      setItems(newItems);
      dragIndexRef.current = null;
    };
    return <div className="space-y-4">
        <p className="text-sm text-muted-foreground">拖拽节点可重新排序</p>
        <div className="space-y-1">
          {items.map((item, index) => <div key={item.key as string} draggable onDragStart={() => handleDragStart(index)} onDragOver={handleDragOver} onDrop={() => handleDrop(index)} className="flex items-center gap-2 px-3 py-2 border border-border rounded-md cursor-grab active:cursor-grabbing hover:bg-muted/50 transition-colors select-none">
              <span className="text-muted-foreground">⠿</span>
              <span>{item.title}</span>
            </div>)}
        </div>
        <div className="mt-4">
          <p className="text-sm text-muted-foreground mb-2">当前排序：</p>
          <Tree treeData={[{
          key: 'root',
          title: '根节点',
          children: items
        }]} defaultExpandAll />
        </div>
      </div>;
  }
}`,...(Te=(ve=V.parameters)==null?void 0:ve.docs)==null?void 0:Te.source}}};const sr=["Default","Selectable","MultipleSelect","WithLine","ExpandAll","Searchable","DisabledNode","Controlled","Checkable","Draggable"];export{M as Checkable,R as Controlled,S as Default,A as DisabledNode,V as Draggable,I as ExpandAll,j as MultipleSelect,q as Searchable,C as Selectable,E as WithLine,sr as __namedExportsOrder,nr as default};
