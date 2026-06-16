import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as s}from"./index-GiUgBvb1.js";import{a as Se}from"./utils-BEhiKRD9.js";import{c as B}from"./index-C08JwjkN.js";const ke=B("sui-transfer__list flex-1 border border-[#d9d9d9] rounded-lg flex flex-col"),Te=B("sui-transfer__header px-3 py-2 border-b border-[#d9d9d9] font-medium bg-gray-100"),be=B("sui-transfer__item px-3 py-1.5 rounded flex items-center gap-2",{variants:{selected:{true:"bg-[#e6f4ff]",false:"bg-transparent"},disabled:{true:"text-[#bfbfbf] cursor-not-allowed",false:"text-[#262626] cursor-pointer"}},defaultVariants:{selected:!1,disabled:!1}}),$=({items:l,selected:a,toggle:u,search:i,setSearch:o,title:c,showSearch:h,searchPlaceholder:S,disabled:x})=>e.jsxs("div",{className:ke(),children:[e.jsx("div",{className:Te(),children:c}),h&&e.jsx("div",{className:"p-2",children:e.jsx("input",{type:"text",placeholder:S,value:i,onChange:r=>o(r.target.value),className:"w-full px-2 py-1 border border-[#d9d9d9] rounded text-sm"})}),e.jsx("div",{className:"sui-transfer__body flex-1 overflow-auto p-1",children:l.map(r=>e.jsxs("div",{className:Se(be({selected:a.includes(r.key),disabled:r.disabled||x}),a.includes(r.key)&&"sui-transfer__item--selected",(r.disabled||x)&&"sui-transfer__item--disabled"),onClick:()=>!r.disabled&&u(r.key),children:[e.jsx("input",{type:"checkbox",checked:a.includes(r.key),readOnly:!0,disabled:r.disabled||x}),e.jsx("span",{children:r.title})]},r.key))})]}),L=s.forwardRef(({dataSource:l,targetKeys:a,defaultTargetKeys:u=[],onChange:i,showSearch:o=!1,searchPlaceholder:c="Search",titles:h=["Source","Target"],style:S,className:x,disabled:r=!1},O)=>{const f=a!==void 0,[D,w]=s.useState(u),[y,E]=s.useState([]),[m,N]=s.useState([]),[T,Y]=s.useState(""),[v,I]=s.useState(""),p=f?a:D,b=s.useMemo(()=>l.filter(n=>!p.includes(n.key)),[l,p]),t=s.useMemo(()=>l.filter(n=>p.includes(n.key)),[l,p]),d=s.useMemo(()=>T?b.filter(n=>String(n.title).toLowerCase().includes(T.toLowerCase())):b,[b,T]),k=s.useMemo(()=>v?t.filter(n=>String(n.title).toLowerCase().includes(v.toLowerCase())):t,[t,v]),K=s.useCallback(()=>{if(r||y.length===0)return;const n=[...p,...y];f||w(n),i==null||i(n,"right",y),E([])},[r,y,p,f,i]),W=s.useCallback(()=>{if(r||m.length===0)return;const n=p.filter(g=>!m.includes(g));f||w(n),i==null||i(n,"left",m),N([])},[r,m,p,f,i]),xe=s.useCallback(n=>{r||E(g=>g.includes(n)?g.filter(V=>V!==n):[...g,n])},[r]),ve=s.useCallback(n=>{r||N(g=>g.includes(n)?g.filter(V=>V!==n):[...g,n])},[r]);return e.jsxs("div",{ref:O,className:Se("sui-transfer flex items-center gap-4",r&&"sui-transfer--disabled",x),style:S,children:[$({items:d,selected:y,toggle:xe,search:T,setSearch:Y,title:h[0],showSearch:o,searchPlaceholder:c,disabled:r}),e.jsxs("div",{className:"sui-transfer__operation flex flex-col gap-2",children:[e.jsx("button",{type:"button",onClick:K,disabled:r||y.length===0,className:"px-3 py-1",children:">"}),e.jsx("button",{type:"button",onClick:W,disabled:r||m.length===0,className:"px-3 py-1",children:"<"})]}),$({items:k,selected:m,toggle:ve,search:v,setSearch:I,title:h[1],showSearch:o,searchPlaceholder:c,disabled:r})]})});L.displayName="Transfer";L.__docgenInfo={description:`Transfer 穿梭框组件
双栏穿梭选择框，用于在多个可选项中进行多选。`,methods:[],displayName:"Transfer",props:{dataSource:{required:!0,tsType:{name:"Array",elements:[{name:"TransferItem"}],raw:"TransferItem[]"},description:"数据源"},targetKeys:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"右侧已选中的 key"},defaultTargetKeys:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"默认已选中的 key",defaultValue:{value:"[]",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(targetKeys: string[], direction: 'left' | 'right', moveKeys: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"targetKeys"},{type:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},name:"direction"},{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"moveKeys"}],return:{name:"void"}}},description:"选中项变化回调"},showSearch:{required:!1,tsType:{name:"boolean"},description:"是否显示搜索框",defaultValue:{value:"false",computed:!1}},searchPlaceholder:{required:!1,tsType:{name:"string"},description:"搜索框占位符",defaultValue:{value:"'Search'",computed:!1}},titles:{required:!1,tsType:{name:"tuple",raw:"[ReactNode, ReactNode]",elements:[{name:"ReactNode"},{name:"ReactNode"}]},description:"左侧标题",defaultValue:{value:"['Source', 'Target']",computed:!1}},style:{required:!1,tsType:{name:"CSSProperties"},description:"自定义样式"},className:{required:!1,tsType:{name:"string"},description:"自定义类名"},disabled:{required:!1,tsType:{name:"boolean"},description:"是否禁用",defaultValue:{value:"false",computed:!1}}}};const Re={title:"数据录入/Transfer 穿梭框",component:L,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"双栏穿梭选择框，用于在多个可选项中进行多选。"}}},argTypes:{showSearch:{control:"boolean"},disabled:{control:"boolean"}}},_=Array.from({length:10}).map((l,a)=>({key:String(a+1),title:`Content ${a+1}`,description:`Description of content ${a+1}`})),A={args:{dataSource:_,titles:["Source","Target"]}},H={args:{dataSource:_,showSearch:!0,titles:["Source","Target"]}},P={args:{dataSource:_,disabled:!0,titles:["Source","Target"]}},q={render:()=>{const[l,a]=s.useState(["1","2"]);return e.jsxs("div",{children:[e.jsx(L,{dataSource:_,targetKeys:l,onChange:a,titles:["Source","Target"]}),e.jsxs("div",{className:"mt-4",children:["Selected: ",l.join(", ")]})]})}},j={render:()=>{const[l,a]=s.useState([]),u=(i,o)=>{o!=="left"&&a(i)};return e.jsxs("div",{children:[e.jsx(L,{dataSource:_,targetKeys:l,onChange:u,titles:["可选","已选"]}),e.jsx("p",{className:"mt-4 text-sm text-gray-500",children:"只能从左向右移动，不可退回"}),e.jsxs("div",{className:"mt-2 text-sm",children:["已选：",l.join(", ")||"无"]})]})}},C={render:()=>{const l=[{key:"1",title:"张三",description:"前端工程师"},{key:"2",title:"李四",description:"后端工程师"},{key:"3",title:"王五",description:"产品经理"},{key:"4",title:"赵六",description:"UI 设计师"},{key:"5",title:"孙七",description:"测试工程师"},{key:"6",title:"周八",description:"运维工程师"}],[a,u]=s.useState([]);return e.jsxs("div",{children:[e.jsx(L,{dataSource:l,targetKeys:a,onChange:u,titles:["候选人","团队成员"]}),e.jsxs("div",{className:"mt-4 text-sm text-gray-500",children:["已选成员：",a.length>0?a.map(i=>{const o=l.find(c=>c.key===i);return o?`${o.title}（${o.description}）`:i}).join("、"):"无"]})]})}},R={render:()=>{const l=[{key:"dept-1",title:"技术部",isParent:!0},{key:"dept-1-1",title:"前端组",parentKey:"dept-1"},{key:"dept-1-2",title:"后端组",parentKey:"dept-1"},{key:"dept-1-3",title:"测试组",parentKey:"dept-1"},{key:"dept-2",title:"产品部",isParent:!0},{key:"dept-2-1",title:"产品设计组",parentKey:"dept-2"},{key:"dept-2-2",title:"用户研究组",parentKey:"dept-2"},{key:"dept-3",title:"运营部",isParent:!0},{key:"dept-3-1",title:"市场推广组",parentKey:"dept-3"},{key:"dept-3-2",title:"内容运营组",parentKey:"dept-3"}],[a,u]=s.useState([]),[i,o]=s.useState([]),[c,h]=s.useState([]),[S,x]=s.useState(""),[r,O]=s.useState(""),f=l.filter(t=>!a.includes(t.key)),D=l.filter(t=>a.includes(t.key)),w=S?f.filter(t=>String(t.title).toLowerCase().includes(S.toLowerCase())):f,y=r?D.filter(t=>String(t.title).toLowerCase().includes(r.toLowerCase())):D,E=()=>{i.length!==0&&(u(t=>[...t,...i]),o([]))},m=()=>{c.length!==0&&(u(t=>t.filter(d=>!c.includes(d))),h([]))},N=t=>{o(d=>d.includes(t)?d.filter(k=>k!==t):[...d,t])},T=t=>{h(d=>d.includes(t)?d.filter(k=>k!==t):[...d,t])},Y=(t,d,k)=>{const K="parentKey"in t&&t.parentKey,W=K?24:0;return e.jsxs("div",{onClick:()=>k(t.key),style:{padding:"6px 12px",paddingLeft:12+W,cursor:"pointer",borderRadius:4,background:d?"#e6f4ff":"transparent",display:"flex",alignItems:"center",gap:8},children:[e.jsx("input",{type:"checkbox",checked:d,readOnly:!0}),e.jsxs("span",{style:{fontWeight:K?400:600,fontSize:K?13:14},children:[K&&e.jsx("span",{style:{marginRight:6,color:"#bfbfbf"},children:"└"}),t.title]})]},t.key)},v={flex:1,border:"1px solid #f0f0f0",borderRadius:8,display:"flex",flexDirection:"column",minWidth:200},I={padding:"8px 12px",borderBottom:"1px solid #f0f0f0",fontWeight:500,background:"#fafafa"},p={flex:1,overflow:"auto",padding:4,maxHeight:320},b={width:"100%",padding:"4px 8px",border:"1px solid #d9d9d9",borderRadius:4,fontSize:14};return e.jsxs("div",{children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16},children:[e.jsxs("div",{style:v,children:[e.jsx("div",{style:I,children:"可选部门"}),e.jsx("div",{style:{padding:8},children:e.jsx("input",{type:"text",placeholder:"搜索...",value:S,onChange:t=>x(t.target.value),style:b})}),e.jsx("div",{style:p,children:w.map(t=>Y(t,i.includes(t.key),N))})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx("button",{type:"button",onClick:E,disabled:i.length===0,style:{padding:"4px 12px"},children:">"}),e.jsx("button",{type:"button",onClick:m,disabled:c.length===0,style:{padding:"4px 12px"},children:"<"})]}),e.jsxs("div",{style:v,children:[e.jsx("div",{style:I,children:"已选部门"}),e.jsx("div",{style:{padding:8},children:e.jsx("input",{type:"text",placeholder:"搜索...",value:r,onChange:t=>O(t.target.value),style:b})}),e.jsx("div",{style:p,children:y.map(t=>Y(t,c.includes(t.key),T))})]})]}),e.jsx("p",{className:"mt-4 text-sm text-gray-500",children:"树形结构数据，子节点缩进显示，父节点加粗"})]})}};var z,M,U;A.parameters={...A.parameters,docs:{...(z=A.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    dataSource,
    titles: ['Source', 'Target']
  }
}`,...(U=(M=A.parameters)==null?void 0:M.docs)==null?void 0:U.source}}};var F,G,J;H.parameters={...H.parameters,docs:{...(F=H.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    dataSource,
    showSearch: true,
    titles: ['Source', 'Target']
  }
}`,...(J=(G=H.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var Q,X,Z;P.parameters={...P.parameters,docs:{...(Q=P.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    dataSource,
    disabled: true,
    titles: ['Source', 'Target']
  }
}`,...(Z=(X=P.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,te,re;q.parameters={...q.parameters,docs:{...(ee=q.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => {
    const [targetKeys, setTargetKeys] = useState<string[]>(['1', '2']);
    return <div>
        <Transfer dataSource={dataSource} targetKeys={targetKeys} onChange={setTargetKeys} titles={['Source', 'Target']} />
        <div className="mt-4">Selected: {targetKeys.join(', ')}</div>
      </div>;
  }
}`,...(re=(te=q.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var se,ae,ne,ie,le;j.parameters={...j.parameters,docs:{...(se=j.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => {
    const [targetKeys, setTargetKeys] = useState<string[]>([]);
    const handleChange = (nextTargetKeys: string[], direction: string) => {
      if (direction === 'left') return;
      setTargetKeys(nextTargetKeys);
    };
    return <div>
        <Transfer dataSource={dataSource} targetKeys={targetKeys} onChange={handleChange} titles={['可选', '已选']} />
        <p className="mt-4 text-sm text-gray-500">只能从左向右移动，不可退回</p>
        <div className="mt-2 text-sm">已选：{targetKeys.join(', ') || '无'}</div>
      </div>;
  }
}`,...(ne=(ae=j.parameters)==null?void 0:ae.docs)==null?void 0:ne.source},description:{story:"单向穿梭",...(le=(ie=j.parameters)==null?void 0:ie.docs)==null?void 0:le.description}}};var de,oe,ce,pe,ue;C.parameters={...C.parameters,docs:{...(de=C.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: () => {
    const customDataSource = [{
      key: '1',
      title: '张三',
      description: '前端工程师'
    }, {
      key: '2',
      title: '李四',
      description: '后端工程师'
    }, {
      key: '3',
      title: '王五',
      description: '产品经理'
    }, {
      key: '4',
      title: '赵六',
      description: 'UI 设计师'
    }, {
      key: '5',
      title: '孙七',
      description: '测试工程师'
    }, {
      key: '6',
      title: '周八',
      description: '运维工程师'
    }];
    const [targetKeys, setTargetKeys] = useState<string[]>([]);
    return <div>
        <Transfer dataSource={customDataSource} targetKeys={targetKeys} onChange={setTargetKeys} titles={['候选人', '团队成员']} />
        <div className="mt-4 text-sm text-gray-500">
          已选成员：{targetKeys.length > 0 ? targetKeys.map(k => {
          const item = customDataSource.find(d => d.key === k);
          return item ? \`\${item.title}（\${item.description}）\` : k;
        }).join('、') : '无'}
        </div>
      </div>;
  }
}`,...(ce=(oe=C.parameters)==null?void 0:oe.docs)==null?void 0:ce.source},description:{story:"自定义渲染",...(ue=(pe=C.parameters)==null?void 0:pe.docs)==null?void 0:ue.description}}};var ge,fe,ye,me,he;R.parameters={...R.parameters,docs:{...(ge=R.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render: () => {
    const treeData = [{
      key: 'dept-1',
      title: '技术部',
      isParent: true
    }, {
      key: 'dept-1-1',
      title: '前端组',
      parentKey: 'dept-1'
    }, {
      key: 'dept-1-2',
      title: '后端组',
      parentKey: 'dept-1'
    }, {
      key: 'dept-1-3',
      title: '测试组',
      parentKey: 'dept-1'
    }, {
      key: 'dept-2',
      title: '产品部',
      isParent: true
    }, {
      key: 'dept-2-1',
      title: '产品设计组',
      parentKey: 'dept-2'
    }, {
      key: 'dept-2-2',
      title: '用户研究组',
      parentKey: 'dept-2'
    }, {
      key: 'dept-3',
      title: '运营部',
      isParent: true
    }, {
      key: 'dept-3-1',
      title: '市场推广组',
      parentKey: 'dept-3'
    }, {
      key: 'dept-3-2',
      title: '内容运营组',
      parentKey: 'dept-3'
    }];
    const [targetKeys, setTargetKeys] = useState<string[]>([]);
    const [leftSelected, setLeftSelected] = useState<string[]>([]);
    const [rightSelected, setRightSelected] = useState<string[]>([]);
    const [leftSearch, setLeftSearch] = useState('');
    const [rightSearch, setRightSearch] = useState('');
    const leftData = treeData.filter(item => !targetKeys.includes(item.key));
    const rightData = treeData.filter(item => targetKeys.includes(item.key));
    const filteredLeft = leftSearch ? leftData.filter(item => String(item.title).toLowerCase().includes(leftSearch.toLowerCase())) : leftData;
    const filteredRight = rightSearch ? rightData.filter(item => String(item.title).toLowerCase().includes(rightSearch.toLowerCase())) : rightData;
    const moveToRight = () => {
      if (leftSelected.length === 0) return;
      setTargetKeys(prev => [...prev, ...leftSelected]);
      setLeftSelected([]);
    };
    const moveToLeft = () => {
      if (rightSelected.length === 0) return;
      setTargetKeys(prev => prev.filter(k => !rightSelected.includes(k)));
      setRightSelected([]);
    };
    const toggleLeft = (key: string) => {
      setLeftSelected(prev => prev.includes(key) ? prev.filter(k => k !== key) : [...prev, key]);
    };
    const toggleRight = (key: string) => {
      setRightSelected(prev => prev.includes(key) ? prev.filter(k => k !== key) : [...prev, key]);
    };
    const renderTreeItem = (item: typeof treeData[number], selected: boolean, toggle: (key: string) => void) => {
      const isChild = 'parentKey' in item && item.parentKey;
      const indent = isChild ? 24 : 0;
      return <div key={item.key} onClick={() => toggle(item.key)} style={{
        padding: '6px 12px',
        paddingLeft: 12 + indent,
        cursor: 'pointer',
        borderRadius: 4,
        background: selected ? '#e6f4ff' : 'transparent',
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }}>
          <input type="checkbox" checked={selected} readOnly />
          <span style={{
          fontWeight: isChild ? 400 : 600,
          fontSize: isChild ? 13 : 14
        }}>
            {isChild && <span style={{
            marginRight: 6,
            color: '#bfbfbf'
          }}>└</span>}
            {item.title}
          </span>
        </div>;
    };
    const LIST_STYLE: React.CSSProperties = {
      flex: 1,
      border: '1px solid #f0f0f0',
      borderRadius: 8,
      display: 'flex',
      flexDirection: 'column',
      minWidth: 200
    };
    const HEADER_STYLE: React.CSSProperties = {
      padding: '8px 12px',
      borderBottom: '1px solid #f0f0f0',
      fontWeight: 500,
      background: '#fafafa'
    };
    const BODY_STYLE: React.CSSProperties = {
      flex: 1,
      overflow: 'auto',
      padding: 4,
      maxHeight: 320
    };
    const SEARCH_STYLE: React.CSSProperties = {
      width: '100%',
      padding: '4px 8px',
      border: '1px solid #d9d9d9',
      borderRadius: 4,
      fontSize: 14
    };
    return <div>
        <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 16
      }}>
          <div style={LIST_STYLE}>
            <div style={HEADER_STYLE}>可选部门</div>
            <div style={{
            padding: 8
          }}>
              <input type="text" placeholder="搜索..." value={leftSearch} onChange={e => setLeftSearch(e.target.value)} style={SEARCH_STYLE} />
            </div>
            <div style={BODY_STYLE}>
              {filteredLeft.map(item => renderTreeItem(item, leftSelected.includes(item.key), toggleLeft))}
            </div>
          </div>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 8
        }}>
            <button type="button" onClick={moveToRight} disabled={leftSelected.length === 0} style={{
            padding: '4px 12px'
          }}>&gt;</button>
            <button type="button" onClick={moveToLeft} disabled={rightSelected.length === 0} style={{
            padding: '4px 12px'
          }}>&lt;</button>
          </div>
          <div style={LIST_STYLE}>
            <div style={HEADER_STYLE}>已选部门</div>
            <div style={{
            padding: 8
          }}>
              <input type="text" placeholder="搜索..." value={rightSearch} onChange={e => setRightSearch(e.target.value)} style={SEARCH_STYLE} />
            </div>
            <div style={BODY_STYLE}>
              {filteredRight.map(item => renderTreeItem(item, rightSelected.includes(item.key), toggleRight))}
            </div>
          </div>
        </div>
        <p className="mt-4 text-sm text-gray-500">树形结构数据，子节点缩进显示，父节点加粗</p>
      </div>;
  }
}`,...(ye=(fe=R.parameters)==null?void 0:fe.docs)==null?void 0:ye.source},description:{story:"树形穿梭框",...(he=(me=R.parameters)==null?void 0:me.docs)==null?void 0:he.description}}};const _e=["Basic","WithSearch","Disabled","Controlled","OneWay","CustomRender","TreeTransfer"];export{A as Basic,q as Controlled,C as CustomRender,P as Disabled,j as OneWay,R as TreeTransfer,H as WithSearch,_e as __namedExportsOrder,Re as default};
