import{j as n}from"./jsx-runtime-CDt2p4po.js";import{r as h}from"./index-GiUgBvb1.js";import{n as Qe}from"./index-DxgPyYqA.js";import{a as f}from"./utils-BEhiKRD9.js";import{c as j}from"./index-C08JwjkN.js";import{M as Ue}from"./minus-DzxWgTKt.js";import{C as Xe}from"./check-DytZnMFh.js";import{C as Ye}from"./chevron-right-V463yFHa.js";import"./index-CROobee-.js";import"./createLucideIcon-CZe00VV7.js";const Ze=j("w-full text-sm",{variants:{bordered:{true:"border border-gray-300 rounded-md",false:""}},defaultVariants:{bordered:!0}}),et=j("bg-muted font-medium text-foreground select-none"),Z=j("py-3 px-4 text-left border-b border-border"),tt=j("border-b border-muted transition-colors hover:bg-muted/50",{variants:{selected:{true:"bg-primary-50",false:""}},defaultVariants:{selected:!1}}),P=j("py-2.5 px-4 text-foreground"),rt=j("inline-flex items-center justify-center w-5 h-5 cursor-pointer text-muted-foreground transition-transform duration-200 hover:text-foreground",{variants:{expanded:{true:"rotate-90",false:""}},defaultVariants:{expanded:!1}}),at=j("inline-block");function We(r,t){return typeof t=="function"?t(r):r[t]}function He(r,t){return r[t]}function ee(r,t,i,c){const a=new Set(t),o=[];function d(u){for(const l of u){a.has(We(l,i))&&o.push(l);const m=He(l,c);Array.isArray(m)&&d(m)}}return d(r),o}function nt(r,t,i,c){const a=He(r,c);if(!Array.isArray(a)||a.length===0)return!1;const o=a.filter(d=>t.has(We(d,i))).length;return o>0&&o<a.length}const H=(r,t)=>typeof t=="function"?t(r):r[t],V=(r,t)=>r[t];function F(r,t,i,c){for(const a of r){if(H(a,i)===t)return a;const o=V(a,c);if(Array.isArray(o)){const d=F(o,t,i,c);if(d)return d}}}function st(r,t,i,c){const a=[];function o(d,u){for(const l of d){const m=H(l,i);if(m===t)return a.push(...u),!0;const e=V(l,c);if(Array.isArray(e)&&o(e,[...u,m]))return!0}return!1}return o(r,[]),a}function ot(r,t,i,c,a,o,d){if(d){const e=new Set(o);return a?e.add(c):e.delete(c),Array.from(e)}const u=new Set(o),l=F(i,c,r,t);if(!l)return Array.from(u);a?u.add(c):u.delete(c);const m=V(l,t);if(Array.isArray(m)){let e=function(g){for(const C of g){x.push(H(C,r));const _=V(C,t);Array.isArray(_)&&e(_)}};const x=[];e(m);for(const g of x)a?u.add(g):u.delete(g)}for(const e of st(i,c,r,t))if(a){const x=F(i,e,r,t),g=x?V(x,t):void 0;Array.isArray(g)&&g.every(C=>u.has(H(C,r)))&&u.add(e)}else u.delete(e);return Array.from(u)}function dt(r,t,i,c){const a=[];function o(d,u){for(const l of d){const m=typeof t=="function"?t(l):l[t],e=l[i],x=Array.isArray(e)&&e.length>0;a.push({record:l,key:m,indentLevel:u,hasChildren:x}),x&&c.has(m)&&o(e,u+1)}}return o(r,0),a}function ct(r,t,i){const c=[];function a(o){for(const d of o){const u=typeof t=="function"?t(d):d[t],l=d[i];Array.isArray(l)&&l.length>0&&(c.push(u),a(l))}}return a(r),c}function lt(r,t){const{columns:i,dataSource:c,rowKey:a,childrenKey:o="children",expandRowByClick:d=!1,defaultExpandAll:u=!1,defaultExpandedKeys:l,onExpand:m,rowSelection:e,bordered:x=!0,className:g,height:C,..._}=r,[S,Pe]=h.useState(u?ct(c,a,o):l??[]),K=h.useMemo(()=>new Set(S),[S]),[Fe,G]=h.useState((e==null?void 0:e.selectedRowKeys)??[]),A=(e==null?void 0:e.selectedRowKeys)!==void 0,J=A?e.selectedRowKeys:Fe,N=h.useMemo(()=>new Set(J),[J]),L=h.useMemo(()=>dt(c,a,o,K),[c,a,o,K]),W=h.useCallback(s=>{const p=K.has(s.key),b=p?S.filter(T=>T!==s.key):[...S,s.key];Pe(b),m==null||m(!p,s.record)},[S,K,m]),z=h.useCallback(s=>{d&&s.hasChildren&&W(s)},[d,W]),Q=h.useCallback((s,p)=>{var y;const b=(e==null?void 0:e.checkStrictly)??!1,T=ot(a,o,c,s.key,p,N,b);A||G(T),(y=e==null?void 0:e.onChange)==null||y.call(e,T,ee(c,T,a,o))},[a,o,c,N,e,A]),U=h.useCallback(s=>{var b;const p=[s.key];A||G(p),(b=e==null?void 0:e.onChange)==null||b.call(e,p,ee(c,p,a,o))},[a,c,e,A]),Oe=(e==null?void 0:e.type)==="checkbox"||(e==null?void 0:e.type)==="radio",Ge=C!==void 0&&L.length>100,X=h.useCallback(s=>{const p=N.has(s.key),b=(e==null?void 0:e.type)==="checkbox"&&nt(s.record,N,a,o),T=p||b;return n.jsxs("div",{className:f(tt({selected:p})),onClick:()=>z(s),role:"row",children:[(e==null?void 0:e.type)==="checkbox"&&n.jsx("div",{className:f(P(),"w-12"),role:"cell",children:n.jsx("button",{type:"button",className:f("inline-flex items-center justify-center h-4 w-4 rounded border border-solid transition-colors duration-200 select-none",T?"bg-primary-500 border-primary-500 text-white":"bg-background border-border hover:border-primary-500"),onClick:y=>{y.stopPropagation(),Q(s,!p)},children:b?n.jsx(Ue,{className:"h-3 w-3"}):p?n.jsx(Xe,{className:"h-3 w-3"}):null})}),(e==null?void 0:e.type)==="radio"&&n.jsx("div",{className:f(P(),"w-12"),role:"cell",children:n.jsx("button",{type:"button",className:f("inline-flex items-center justify-center h-4 w-4 rounded-full border border-solid transition-colors duration-200 select-none",p?"bg-primary-500 border-primary-500 text-white":"bg-background border-border hover:border-primary-500"),onClick:y=>{y.stopPropagation(),U(s)},children:p&&n.jsx("span",{className:"block h-1.5 w-1.5 rounded-full bg-white"})})}),i.map((y,Je)=>n.jsxs("div",{className:f(P()),style:y.width?{width:y.width}:void 0,role:"cell",children:[Je===0&&n.jsxs("span",{className:f("inline-flex items-center"),children:[Array.from({length:s.indentLevel}).map((Y,ze)=>n.jsx("span",{className:f(at(),"w-6")},ze)),s.hasChildren?n.jsx("span",{className:f(rt({expanded:K.has(s.key)})),onClick:Y=>{Y.stopPropagation(),W(s)},children:n.jsx(Ye,{className:"h-4 w-4"})}):n.jsx("span",{className:"inline-block w-5"})]}),y.render?y.render(s.record[y.dataIndex],s.record,s.indentLevel):String(s.record[y.dataIndex]??"")]},y.dataIndex))]})},[i,K,e,a,o,N,z,Q,U,W]);return n.jsxs("div",{ref:t,className:f("sui-tree-table",Ze({bordered:x}),g),..._,children:[n.jsxs("div",{className:f(et()),role:"row",children:[Oe&&n.jsx("div",{className:f(Z(),"w-12"),role:"columnheader"}),i.map(s=>n.jsx("div",{className:f(Z()),style:s.width?{width:s.width}:void 0,role:"columnheader",children:s.title},s.dataIndex))]}),Ge?n.jsx(Qe,{style:{height:C},data:L,itemContent:(s,p)=>X(p)}):n.jsx(n.Fragment,{children:L.map(s=>n.jsx("div",{children:X(s)},s.key))}),L.length===0&&n.jsx("div",{className:"text-center py-8 text-muted-foreground",children:"暂无数据"})]})}const O=h.forwardRef(lt);O.displayName="TreeTable";const B=O;O.__docgenInfo={description:"树形表格内部组件（保留泛型）",methods:[],displayName:"TreeTable",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"TreeTableColumn",elements:[{name:"T"}],raw:"TreeTableColumn<T>"}],raw:"TreeTableColumn<T>[]"},description:"列配置数组"},dataSource:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:"树形数据源，子节点通过 childrenKey 字段嵌套"},rowKey:{required:!0,tsType:{name:"union",raw:"string | ((record: T) => string | number)",elements:[{name:"string"},{name:"unknown"}]},description:"行数据唯一标识字段名，默认 'key'"},childrenKey:{required:!1,tsType:{name:"string"},description:"子节点字段名，默认 'children'"},expandRowByClick:{required:!1,tsType:{name:"boolean"},description:"点击行是否展开/收起，默认 false"},defaultExpandAll:{required:!1,tsType:{name:"boolean"},description:"默认展开所有节点，默认 false"},defaultExpandedKeys:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"(string | number)[]"},description:"默认展开的节点 key 数组"},onExpand:{required:!1,tsType:{name:"signature",type:"function",raw:"(expanded: boolean, record: T) => void",signature:{arguments:[{type:{name:"boolean"},name:"expanded"},{type:{name:"T"},name:"record"}],return:{name:"void"}}},description:"展开/收起变化回调"},rowSelection:{required:!1,tsType:{name:"TreeTableRowSelection",elements:[{name:"T"}],raw:"TreeTableRowSelection<T>"},description:"行选择配置"},bordered:{required:!1,tsType:{name:"boolean"},description:"是否显示边框，默认 true"},className:{required:!1,tsType:{name:"string"},description:"自定义 className"},height:{required:!1,tsType:{name:"number"},description:"表格高度，设置后启用虚拟滚动"}},composes:["Omit"]};const kt={title:"数据展示/TreeTable 树形表格",component:B,tags:["autodocs"],parameters:{layout:"padded"},argTypes:{bordered:{control:"boolean",description:"是否显示边框"},expandRowByClick:{control:"boolean",description:"点击行是否展开/收起"},defaultExpandAll:{control:"boolean",description:"默认展开所有节点"}}},k=[{title:"部门名称",dataIndex:"name",width:240},{title:"负责人",dataIndex:"manager",width:120},{title:"人数",dataIndex:"count",width:80},{title:"状态",dataIndex:"status"}],v=[{key:"1",name:"技术中心",manager:"张三",count:120,status:"正常",children:[{key:"1-1",name:"前端组",manager:"李四",count:40,status:"正常",children:[{key:"1-1-1",name:"Web 团队",manager:"王五",count:20,status:"正常"},{key:"1-1-2",name:"移动端团队",manager:"赵六",count:20,status:"正常"}]},{key:"1-2",name:"后端组",manager:"孙七",count:50,status:"正常",children:[{key:"1-2-1",name:"Java 团队",manager:"周八",count:30,status:"正常"},{key:"1-2-2",name:"Go 团队",manager:"吴九",count:20,status:"扩招中"}]},{key:"1-3",name:"测试组",manager:"郑十",count:30,status:"正常"}]},{key:"2",name:"产品中心",manager:"钱一",count:60,status:"正常",children:[{key:"2-1",name:"产品设计组",manager:"陈二",count:30,status:"正常"},{key:"2-2",name:"用户研究组",manager:"林三",count:30,status:"正常"}]}],w={args:{columns:k,dataSource:v,rowKey:"key",bordered:!0}},$={args:{columns:k,dataSource:v,rowKey:"key",defaultExpandAll:!0}},E={render:()=>{const[r,t]=h.useState([]);return n.jsxs("div",{className:"space-y-4",children:[n.jsxs("p",{className:"text-sm text-muted-foreground",children:["已选中：",r.join(", ")||"无"]}),n.jsx(B,{columns:k,dataSource:v,rowKey:"key",defaultExpandAll:!0,rowSelection:{type:"checkbox",selectedRowKeys:r,onChange:i=>t(i)}})]})}},R={render:()=>{const[r,t]=h.useState([]);return n.jsxs("div",{className:"space-y-4",children:[n.jsxs("p",{className:"text-sm text-muted-foreground",children:["已选中：",r.join(", ")||"无"]}),n.jsx(B,{columns:k,dataSource:v,rowKey:"key",defaultExpandAll:!0,rowSelection:{type:"checkbox",checkStrictly:!0,selectedRowKeys:r,onChange:i=>t(i)}})]})}},D={render:()=>{const[r,t]=h.useState([]);return n.jsxs("div",{className:"space-y-4",children:[n.jsxs("p",{className:"text-sm text-muted-foreground",children:["已选中：",r.join(", ")||"无"]}),n.jsx(B,{columns:k,dataSource:v,rowKey:"key",defaultExpandAll:!0,rowSelection:{type:"radio",selectedRowKeys:r,onChange:i=>t(i)}})]})}},M={args:{columns:k,dataSource:v,rowKey:"key",expandRowByClick:!0}},I={args:{columns:k,dataSource:v,rowKey:"key",bordered:!1,defaultExpandAll:!0}},q={render:()=>{function r(i,c,a){const o=[];for(let d=1;d<=i;d++){const u=[];for(let l=1;l<=c;l++){const m=[];for(let e=1;e<=a;e++)m.push({key:`${d}-${l}-${e}`,name:`部门 ${d}-${l}-${e}`,manager:`员工${d}${l}${e}`,count:Math.floor(Math.random()*50)+1,status:"正常"});u.push({key:`${d}-${l}`,name:`部门 ${d}-${l}`,manager:`经理${d}${l}`,count:Math.floor(Math.random()*200)+10,status:"正常",children:m})}o.push({key:`${d}`,name:`中心 ${d}`,manager:`总监${d}`,count:Math.floor(Math.random()*500)+50,status:"正常",children:u})}return o}const t=r(20,10,50);return n.jsxs("div",{className:"space-y-4",children:[n.jsx("p",{className:"text-sm text-muted-foreground",children:"共 20 x 10 x 50 = 10000+ 节点，设置 height=400 启用虚拟滚动"}),n.jsx(B,{columns:k,dataSource:t,rowKey:"key",defaultExpandAll:!1,height:400})]})}};var te,re,ae,ne,se;w.parameters={...w.parameters,docs:{...(te=w.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    columns,
    dataSource: treeData,
    rowKey: 'key',
    bordered: true
  }
}`,...(ae=(re=w.parameters)==null?void 0:re.docs)==null?void 0:ae.source},description:{story:"基础树形表格",...(se=(ne=w.parameters)==null?void 0:ne.docs)==null?void 0:se.description}}};var oe,de,ce,le,ie;$.parameters={...$.parameters,docs:{...(oe=$.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    columns,
    dataSource: treeData,
    rowKey: 'key',
    defaultExpandAll: true
  }
}`,...(ce=(de=$.parameters)==null?void 0:de.docs)==null?void 0:ce.source},description:{story:"默认展开所有",...(ie=(le=$.parameters)==null?void 0:le.docs)==null?void 0:ie.description}}};var ue,me,pe,ye,he;E.parameters={...E.parameters,docs:{...(ue=E.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: () => {
    const [selectedKeys, setSelectedKeys] = useState<(string | number)[]>([]);
    return <div className="space-y-4">
        <p className="text-sm text-muted-foreground">
          已选中：{selectedKeys.join(', ') || '无'}
        </p>
        <TreeTable columns={columns} dataSource={treeData} rowKey="key" defaultExpandAll rowSelection={{
        type: 'checkbox',
        selectedRowKeys: selectedKeys,
        onChange: keys => setSelectedKeys(keys)
      }} />
      </div>;
  }
}`,...(pe=(me=E.parameters)==null?void 0:me.docs)==null?void 0:pe.source},description:{story:"带勾选联动",...(he=(ye=E.parameters)==null?void 0:ye.docs)==null?void 0:he.description}}};var fe,xe,ge,be,ke;R.parameters={...R.parameters,docs:{...(fe=R.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  render: () => {
    const [selectedKeys, setSelectedKeys] = useState<(string | number)[]>([]);
    return <div className="space-y-4">
        <p className="text-sm text-muted-foreground">
          已选中：{selectedKeys.join(', ') || '无'}
        </p>
        <TreeTable columns={columns} dataSource={treeData} rowKey="key" defaultExpandAll rowSelection={{
        type: 'checkbox',
        checkStrictly: true,
        selectedRowKeys: selectedKeys,
        onChange: keys => setSelectedKeys(keys)
      }} />
      </div>;
  }
}`,...(ge=(xe=R.parameters)==null?void 0:xe.docs)==null?void 0:ge.source},description:{story:"勾选不联动（checkStrictly）",...(ke=(be=R.parameters)==null?void 0:be.docs)==null?void 0:ke.description}}};var Ce,Te,je,ve,Ke;D.parameters={...D.parameters,docs:{...(Ce=D.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  render: () => {
    const [selectedKeys, setSelectedKeys] = useState<(string | number)[]>([]);
    return <div className="space-y-4">
        <p className="text-sm text-muted-foreground">
          已选中：{selectedKeys.join(', ') || '无'}
        </p>
        <TreeTable columns={columns} dataSource={treeData} rowKey="key" defaultExpandAll rowSelection={{
        type: 'radio',
        selectedRowKeys: selectedKeys,
        onChange: keys => setSelectedKeys(keys)
      }} />
      </div>;
  }
}`,...(je=(Te=D.parameters)==null?void 0:Te.docs)==null?void 0:je.source},description:{story:"单选模式",...(Ke=(ve=D.parameters)==null?void 0:ve.docs)==null?void 0:Ke.description}}};var Se,Ae,Ne,we,$e;M.parameters={...M.parameters,docs:{...(Se=M.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  args: {
    columns,
    dataSource: treeData,
    rowKey: 'key',
    expandRowByClick: true
  }
}`,...(Ne=(Ae=M.parameters)==null?void 0:Ae.docs)==null?void 0:Ne.source},description:{story:"点击行展开",...($e=(we=M.parameters)==null?void 0:we.docs)==null?void 0:$e.description}}};var Ee,Re,De,Me,Ie;I.parameters={...I.parameters,docs:{...(Ee=I.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  args: {
    columns,
    dataSource: treeData,
    rowKey: 'key',
    bordered: false,
    defaultExpandAll: true
  }
}`,...(De=(Re=I.parameters)==null?void 0:Re.docs)==null?void 0:De.source},description:{story:"无边框",...(Ie=(Me=I.parameters)==null?void 0:Me.docs)==null?void 0:Ie.description}}};var qe,Ve,Be,_e,Le;q.parameters={...q.parameters,docs:{...(qe=q.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  render: () => {
    /* 生成大数据 */
    function generateData(parentCount: number, childCount: number, grandChildCount: number): Dept[] {
      const data: Dept[] = [];
      for (let i = 1; i <= parentCount; i++) {
        const children: Dept[] = [];
        for (let j = 1; j <= childCount; j++) {
          const grandChildren: Dept[] = [];
          for (let k = 1; k <= grandChildCount; k++) {
            grandChildren.push({
              key: \`\${i}-\${j}-\${k}\`,
              name: \`部门 \${i}-\${j}-\${k}\`,
              manager: \`员工\${i}\${j}\${k}\`,
              count: Math.floor(Math.random() * 50) + 1,
              status: '正常'
            });
          }
          children.push({
            key: \`\${i}-\${j}\`,
            name: \`部门 \${i}-\${j}\`,
            manager: \`经理\${i}\${j}\`,
            count: Math.floor(Math.random() * 200) + 10,
            status: '正常',
            children: grandChildren
          });
        }
        data.push({
          key: \`\${i}\`,
          name: \`中心 \${i}\`,
          manager: \`总监\${i}\`,
          count: Math.floor(Math.random() * 500) + 50,
          status: '正常',
          children
        });
      }
      return data;
    }
    const largeData = generateData(20, 10, 50);
    return <div className="space-y-4">
        <p className="text-sm text-muted-foreground">
          共 20 x 10 x 50 = 10000+ 节点，设置 height=400 启用虚拟滚动
        </p>
        <TreeTable columns={columns} dataSource={largeData} rowKey="key" defaultExpandAll={false} height={400} />
      </div>;
  }
}`,...(Be=(Ve=q.parameters)==null?void 0:Ve.docs)==null?void 0:Be.source},description:{story:"大数据测试（10000+ 节点，启用虚拟滚动）",...(Le=(_e=q.parameters)==null?void 0:_e.docs)==null?void 0:Le.description}}};const Ct=["Default","ExpandAll","WithCheckbox","CheckStrictly","WithRadio","ExpandByClick","NoBorder","LargeData"];export{R as CheckStrictly,w as Default,$ as ExpandAll,M as ExpandByClick,q as LargeData,I as NoBorder,E as WithCheckbox,D as WithRadio,Ct as __namedExportsOrder,kt as default};
