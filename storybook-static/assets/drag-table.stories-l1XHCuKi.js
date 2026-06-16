import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as s}from"./index-GiUgBvb1.js";import{a as v}from"./utils-BEhiKRD9.js";import{c as h}from"./index-C08JwjkN.js";import{G as qe}from"./grip-vertical-B6enXEYp.js";import"./createLucideIcon-CZe00VV7.js";const Oe=h("w-full overflow-hidden",{variants:{bordered:{true:"border border-border rounded-md",false:""}},defaultVariants:{bordered:!0}}),Le=h("flex items-center bg-muted border-b border-border select-none"),G=h("font-medium text-foreground py-3 px-4"),Me=h("flex items-center border-b border-muted transition-colors",{variants:{dragging:{true:"opacity-50 bg-primary-50",false:"hover:bg-muted"},dragOver:{true:"border-t-2 border-t-primary",false:""},disabled:{true:"cursor-default",false:"cursor-grab active:cursor-grabbing"}},defaultVariants:{dragging:!1,dragOver:!1,disabled:!1}}),We=h("text-foreground py-3 px-4"),Ae=h("flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors",{variants:{disabled:{true:"opacity-30 cursor-default",false:"cursor-grab active:cursor-grabbing"}},defaultVariants:{disabled:!1}});function Be(a,r,l){const[p,c]=s.useState([]),[t,m]=s.useState(null),[y,f]=s.useState(null),o=s.useRef(a!==void 0),T=o.current?a??[]:p,R=s.useCallback((d,u)=>{const g=[...T],[W]=g.splice(d,1);return g.splice(u,0,W),g},[T]),O=s.useCallback(d=>u=>{m(d),u.dataTransfer.effectAllowed="move",u.dataTransfer.setData("text/plain",String(d))},[]),V=s.useCallback(d=>u=>{u.preventDefault(),u.dataTransfer.dropEffect="move",t!==null&&t!==d&&f(d)},[t]),N=s.useCallback(()=>{f(null)},[]),L=s.useCallback(d=>u=>{if(u.preventDefault(),f(null),t===null||t===d){m(null);return}const g=R(t,d);o.current||c(g),r&&r(g),l&&l(g),m(null)},[t,R,r,l]),M=s.useCallback(()=>{m(null),f(null)},[]);return{data:T,dragIndex:t,overIndex:y,isControlled:o.current,handleDragStart:O,handleDragOver:V,handleDragLeave:N,handleDrop:L,handleDragEnd:M}}function U(a,r){if(a&&typeof a=="object")return a[r]}function _e(a){if(a.width)return typeof a.width=="number"?`${a.width}px`:a.width}function $e(a,r){const{columns:l,dataSource:p,onChange:c,onDragEnd:t,rowKey:m="key",draggable:y=!0,dragHandle:f=!0,disabled:o=!1,bordered:T=!0,className:R,...O}=a,{data:V,dragIndex:N,overIndex:L,handleDragStart:M,handleDragOver:d,handleDragLeave:u,handleDrop:g,handleDragEnd:W}=Be(p,t,c),D=y===!0||y==="row",A=f!==!1,Re=A&&typeof f!="boolean",Ve=(i,n,B)=>{const q=U(n,i.dataIndex);return i.render?i.render(q,n,B):q},F=i=>{const n=_e(i);return n?{width:n,flexShrink:0}:{flex:1}};return e.jsxs("div",{ref:r,className:v(Oe({bordered:T}),R),...O,children:[e.jsxs("div",{className:Le(),children:[A&&e.jsx("div",{className:v(G(),"w-10 shrink-0")}),l.map(i=>e.jsx("div",{className:G(),style:F(i),children:i.title},i.dataIndex))]}),V.map((i,n)=>{const B=N===n,q=L===n&&N!==null&&N!==n;return e.jsxs("div",{draggable:D&&!o,onDragStart:!D||o?void 0:M(n),onDragOver:!D||o?void 0:d(n),onDragLeave:!D||o?void 0:u,onDrop:!D||o?void 0:g(n),onDragEnd:!D||o?void 0:W,className:v(Me({dragging:B,dragOver:q,disabled:o})),children:[A&&e.jsx("div",{className:v(Ae({disabled:o}),"w-10 shrink-0 py-3 px-2"),children:Re?f:e.jsx(qe,{className:"h-4 w-4"})}),l.map(_=>e.jsx("div",{className:We(),style:F(_),children:Ve(_,i,n)},_.dataIndex))]},String(U(i,m)??n))}),V.length===0&&e.jsx("div",{className:"text-center py-8 text-muted-foreground",children:"暂无数据"})]})}const $=s.forwardRef($e);$.displayName="DragTable";const x=$;$.__docgenInfo={description:"拖拽表格内部组件",methods:[],displayName:"DragTable",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"DragTableColumn",elements:[{name:"T"}],raw:"DragTableColumn<T>"}],raw:"DragTableColumn<T>[]"},description:"列配置数组"},dataSource:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:"数据源"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(newData: T[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"T"}],raw:"T[]"},name:"newData"}],return:{name:"void"}}},description:"数据变化回调，拖拽排序后触发（已废弃，请使用 onDragEnd）"},onDragEnd:{required:!1,tsType:{name:"signature",type:"function",raw:"(newData: T[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"T"}],raw:"T[]"},name:"newData"}],return:{name:"void"}}},description:"拖拽结束回调，参数为排序后的新数据"},rowKey:{required:!1,tsType:{name:"string"},description:"行数据唯一标识字段名，默认 'key'"},draggable:{required:!1,tsType:{name:"union",raw:"boolean | 'row' | 'column'",elements:[{name:"boolean"},{name:"literal",value:"'row'"},{name:"literal",value:"'column'"}]},description:"是否允许拖拽。false 禁用，'row' 仅行拖拽，'column' 仅列拖拽，true 全部启用，默认 true"},dragHandle:{required:!1,tsType:{name:"union",raw:"boolean | ReactNode",elements:[{name:"boolean"},{name:"ReactNode"}]},description:"是否显示拖拽手柄。true 时首列显示默认拖拽图标，也可传入自定义 ReactNode，默认 true"},disabled:{required:!1,tsType:{name:"boolean"},description:"是否禁用拖拽，默认 false"},bordered:{required:!1,tsType:{name:"boolean"},description:"是否显示边框，默认 true"},className:{required:!1,tsType:{name:"string"},description:"自定义 className"}},composes:["Omit","VariantProps"]};const Qe={title:"数据展示/DragTable 拖拽表格",component:x,tags:["autodocs"],parameters:{layout:"padded",actions:{argTypesRegex:"^on.*"}},argTypes:{columns:{control:"object",description:"列配置数组"},dataSource:{control:"object",description:"数据源"},bordered:{control:"boolean",description:"是否显示边框"},draggable:{control:"select",options:[!0,!1,"row","column"],description:"是否允许拖拽"},dragHandle:{control:"boolean",description:"是否显示拖拽手柄（或传入自定义 ReactNode）"},disabled:{control:"boolean",description:"是否禁用拖拽"}}},w=[{title:"任务名称",dataIndex:"name",width:200},{title:"负责人",dataIndex:"assignee",width:120},{title:"状态",dataIndex:"status",width:100},{title:"优先级",dataIndex:"priority",width:100}],b=[{key:"1",name:"需求评审",assignee:"张三",status:"进行中",priority:"高"},{key:"2",name:"UI 设计",assignee:"李四",status:"待开始",priority:"中"},{key:"3",name:"前端开发",assignee:"王五",status:"待开始",priority:"高"},{key:"4",name:"后端开发",assignee:"赵六",status:"进行中",priority:"高"},{key:"5",name:"测试验收",assignee:"钱七",status:"待开始",priority:"低"}],S={render:()=>{const[a,r]=s.useState(b);return e.jsx("div",{className:"w-full max-w-[700px]",children:e.jsx(x,{columns:w,dataSource:a,onDragEnd:r,rowKey:"key"})})}},k={render:()=>{const[a,r]=s.useState(b);return e.jsxs("div",{className:"w-full max-w-[700px] space-y-2",children:[e.jsx("div",{className:"text-sm text-muted-foreground",children:"拖拽左侧手柄图标可调整行顺序"}),e.jsx(x,{columns:w,dataSource:a,onDragEnd:r,rowKey:"key",dragHandle:!0})]})}},j={render:()=>{const[a,r]=s.useState(b);return e.jsxs("div",{className:"w-full max-w-[700px] space-y-2",children:[e.jsx("div",{className:"text-sm text-muted-foreground",children:"整行可拖拽，无需手柄"}),e.jsx(x,{columns:w,dataSource:a,onDragEnd:r,rowKey:"key",dragHandle:!1})]})}},C={render:()=>e.jsxs("div",{className:"w-full max-w-[700px] space-y-2",children:[e.jsx("div",{className:"text-sm text-muted-foreground",children:"拖拽已禁用，行不可拖动"}),e.jsx(x,{columns:w,dataSource:b,rowKey:"key",disabled:!0})]})},E={render:()=>{const[a,r]=s.useState(b),[l,p]=s.useState([]),c=t=>{r(t);const m=t.map(y=>y.name).join(" -> ");p(y=>[...y.slice(-4),`排序更新: ${m}`])};return e.jsxs("div",{className:"w-full max-w-[700px] space-y-4",children:[e.jsx(x,{columns:w,dataSource:a,onDragEnd:c,rowKey:"key"}),e.jsxs("div",{className:"space-y-1",children:[e.jsx("div",{className:"text-sm font-medium text-foreground",children:"变更日志"}),l.length===0&&e.jsx("div",{className:"text-sm text-muted-foreground",children:"拖拽行以查看回调日志"}),l.map((t,m)=>e.jsx("div",{className:"text-xs text-muted-foreground font-mono bg-muted rounded px-2 py-1",children:t},m))]})]})}},I={render:()=>{const[a,r]=s.useState(b),l=[{title:"任务名称",dataIndex:"name",width:200},{title:"负责人",dataIndex:"assignee",width:120},{title:"状态",dataIndex:"status",width:100,render:p=>{const c=p,t={进行中:"text-primary-600 bg-primary-50",待开始:"text-warning-600 bg-warning-50",已完成:"text-success-600 bg-success-50"};return e.jsx("span",{className:v("px-2 py-0.5 rounded text-xs font-medium",t[c]),children:c})}},{title:"优先级",dataIndex:"priority",width:100,render:p=>{const c=p,t={高:"text-danger-600",中:"text-warning-600",低:"text-muted-foreground"};return e.jsx("span",{className:v("font-medium",t[c]),children:c})}}];return e.jsx("div",{className:"w-full max-w-[700px]",children:e.jsx(x,{columns:l,dataSource:a,onDragEnd:r,rowKey:"key"})})}},K={render:()=>{const[a,r]=s.useState(b);return e.jsx("div",{className:"w-full max-w-[700px]",children:e.jsx(x,{columns:w,dataSource:a,onDragEnd:r,rowKey:"key",bordered:!1})})}},H={render:()=>e.jsx("div",{className:"w-full max-w-[700px]",children:e.jsx(x,{columns:w,dataSource:[],rowKey:"key"})})};var z,J,P,Q,X;S.parameters={...S.parameters,docs:{...(z=S.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => {
    const [data, setData] = useState<Task[]>(initialData);
    return <div className="w-full max-w-[700px]">
        <DragTable columns={baseColumns} dataSource={data} onDragEnd={setData} rowKey="key" />
      </div>;
  }
}`,...(P=(J=S.parameters)==null?void 0:J.docs)==null?void 0:P.source},description:{story:"基础行拖拽",...(X=(Q=S.parameters)==null?void 0:Q.docs)==null?void 0:X.description}}};var Y,Z,ee,ae,re;k.parameters={...k.parameters,docs:{...(Y=k.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => {
    const [data, setData] = useState<Task[]>(initialData);
    return <div className="w-full max-w-[700px] space-y-2">
        <div className="text-sm text-muted-foreground">
          拖拽左侧手柄图标可调整行顺序
        </div>
        <DragTable columns={baseColumns} dataSource={data} onDragEnd={setData} rowKey="key" dragHandle />
      </div>;
  }
}`,...(ee=(Z=k.parameters)==null?void 0:Z.docs)==null?void 0:ee.source},description:{story:"带拖拽手柄",...(re=(ae=k.parameters)==null?void 0:ae.docs)==null?void 0:re.description}}};var te,se,ne,oe,de;j.parameters={...j.parameters,docs:{...(te=j.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => {
    const [data, setData] = useState<Task[]>(initialData);
    return <div className="w-full max-w-[700px] space-y-2">
        <div className="text-sm text-muted-foreground">
          整行可拖拽，无需手柄
        </div>
        <DragTable columns={baseColumns} dataSource={data} onDragEnd={setData} rowKey="key" dragHandle={false} />
      </div>;
  }
}`,...(ne=(se=j.parameters)==null?void 0:se.docs)==null?void 0:ne.source},description:{story:"无拖拽手柄",...(de=(oe=j.parameters)==null?void 0:oe.docs)==null?void 0:de.description}}};var ie,le,ce,ue,me;C.parameters={...C.parameters,docs:{...(ie=C.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => <div className="w-full max-w-[700px] space-y-2">
      <div className="text-sm text-muted-foreground">
        拖拽已禁用，行不可拖动
      </div>
      <DragTable columns={baseColumns} dataSource={initialData} rowKey="key" disabled />
    </div>
}`,...(ce=(le=C.parameters)==null?void 0:le.docs)==null?void 0:ce.source},description:{story:"禁用拖拽",...(me=(ue=C.parameters)==null?void 0:ue.docs)==null?void 0:me.description}}};var pe,ge,xe,ye,fe;E.parameters={...E.parameters,docs:{...(pe=E.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: () => {
    const [data, setData] = useState<Task[]>(initialData);
    const [log, setLog] = useState<string[]>([]);
    const handleDragEnd = (newData: Task[]) => {
      setData(newData);
      const names = newData.map(d => d.name).join(' -> ');
      setLog(prev => [...prev.slice(-4), \`排序更新: \${names}\`]);
    };
    return <div className="w-full max-w-[700px] space-y-4">
        <DragTable columns={baseColumns} dataSource={data} onDragEnd={handleDragEnd} rowKey="key" />
        <div className="space-y-1">
          <div className="text-sm font-medium text-foreground">变更日志</div>
          {log.length === 0 && <div className="text-sm text-muted-foreground">拖拽行以查看回调日志</div>}
          {log.map((entry, i) => <div key={i} className="text-xs text-muted-foreground font-mono bg-muted rounded px-2 py-1">
              {entry}
            </div>)}
        </div>
      </div>;
  }
}`,...(xe=(ge=E.parameters)==null?void 0:ge.docs)==null?void 0:xe.source},description:{story:"拖拽回调",...(fe=(ye=E.parameters)==null?void 0:ye.docs)==null?void 0:fe.description}}};var we,be,De,ve,he;I.parameters={...I.parameters,docs:{...(we=I.parameters)==null?void 0:we.docs,source:{originalSource:`{
  render: () => {
    const [data, setData] = useState<Task[]>(initialData);
    const customColumns: DragTableColumn<Task>[] = [{
      title: '任务名称',
      dataIndex: 'name',
      width: 200
    }, {
      title: '负责人',
      dataIndex: 'assignee',
      width: 120
    }, {
      title: '状态',
      dataIndex: 'status',
      width: 100,
      render: value => {
        const status = value as string;
        const colorMap: Record<string, string> = {
          '进行中': 'text-primary-600 bg-primary-50',
          '待开始': 'text-warning-600 bg-warning-50',
          '已完成': 'text-success-600 bg-success-50'
        };
        return <span className={cn('px-2 py-0.5 rounded text-xs font-medium', colorMap[status])}>
              {status}
            </span>;
      }
    }, {
      title: '优先级',
      dataIndex: 'priority',
      width: 100,
      render: value => {
        const priority = value as string;
        const colorMap: Record<string, string> = {
          '高': 'text-danger-600',
          '中': 'text-warning-600',
          '低': 'text-muted-foreground'
        };
        return <span className={cn('font-medium', colorMap[priority])}>
              {priority}
            </span>;
      }
    }];
    return <div className="w-full max-w-[700px]">
        <DragTable columns={customColumns} dataSource={data} onDragEnd={setData} rowKey="key" />
      </div>;
  }
}`,...(De=(be=I.parameters)==null?void 0:be.docs)==null?void 0:De.source},description:{story:"自定义渲染",...(he=(ve=I.parameters)==null?void 0:ve.docs)==null?void 0:he.description}}};var Te,Ne,Se,ke,je;K.parameters={...K.parameters,docs:{...(Te=K.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  render: () => {
    const [data, setData] = useState<Task[]>(initialData);
    return <div className="w-full max-w-[700px]">
        <DragTable columns={baseColumns} dataSource={data} onDragEnd={setData} rowKey="key" bordered={false} />
      </div>;
  }
}`,...(Se=(Ne=K.parameters)==null?void 0:Ne.docs)==null?void 0:Se.source},description:{story:"无边框",...(je=(ke=K.parameters)==null?void 0:ke.docs)==null?void 0:je.description}}};var Ce,Ee,Ie,Ke,He;H.parameters={...H.parameters,docs:{...(Ce=H.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  render: () => <div className="w-full max-w-[700px]">
      <DragTable columns={baseColumns} dataSource={[]} rowKey="key" />
    </div>
}`,...(Ie=(Ee=H.parameters)==null?void 0:Ee.docs)==null?void 0:Ie.source},description:{story:"空数据",...(He=(Ke=H.parameters)==null?void 0:Ke.docs)==null?void 0:He.description}}};const Xe=["Basic","WithDragHandle","WithoutDragHandle","Disabled","DragCallback","CustomRender","NoBorder","Empty"];export{S as Basic,I as CustomRender,C as Disabled,E as DragCallback,H as Empty,K as NoBorder,k as WithDragHandle,j as WithoutDragHandle,Xe as __namedExportsOrder,Qe as default};
