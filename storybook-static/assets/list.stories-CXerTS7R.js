import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as f}from"./index-GiUgBvb1.js";import{fn as ve}from"./index-DeN4tkzB.js";import{a as x}from"./utils-BEhiKRD9.js";import{c as L}from"./index-C08JwjkN.js";import{L as je}from"./loader-circle-CulI208u.js";import{A}from"./index-DPLdZRWH.js";import{B as ye}from"./index-WhxK0hy4.js";import"./createLucideIcon-CZe00VV7.js";const Ne=L("flex flex-col",{variants:{bordered:{true:"border border-solid border-border rounded-md",false:""},loading:{true:"pointer-events-none"}},defaultVariants:{bordered:!1,loading:!1}}),be=L("flex items-center gap-3 px-4 py-3 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-1",{variants:{disabled:{true:"pointer-events-none opacity-50"},clickable:{true:"cursor-pointer hover:bg-muted active:bg-muted"}},defaultVariants:{disabled:!1,clickable:!1}}),Se=L("flex items-start gap-3",{variants:{},defaultVariants:{}}),ke=L("px-4 py-2 text-foreground font-medium border-b border-solid border-border",{variants:{},defaultVariants:{}}),Te=L("px-4 py-2 text-muted-foreground border-t border-solid border-border",{variants:{},defaultVariants:{}}),we=L("h-px bg-border",{variants:{},defaultVariants:{}}),h=f.forwardRef((s,c)=>{const{className:l,title:a,description:n,avatar:m,...r}=s;return e.jsxs("div",{ref:c,className:x(Se(),l),...r,children:[m&&e.jsx("div",{className:"flex-shrink-0",children:m}),e.jsxs("div",{className:"flex flex-col gap-1 min-w-0",children:[a&&e.jsx("div",{className:"text-foreground font-medium truncate",children:a}),n&&e.jsx("div",{className:"text-muted-foreground text-sm truncate",children:n})]})]})});h.displayName="ListItemMeta";const t=f.forwardRef((s,c)=>{const{className:l,prefix:a,suffix:n,children:m,disabled:r,onClick:o,...u}=s,d=!!o&&!r,g=p=>{r||o==null||o(p)},R=p=>{d&&(p.key==="Enter"||p.key===" ")&&(p.preventDefault(),o==null||o(p))};return e.jsxs("div",{ref:c,role:d?"button":void 0,tabIndex:d?0:void 0,"aria-disabled":r||void 0,onClick:g,onKeyDown:R,className:x(be({disabled:r,clickable:d}),l),...u,children:[a&&e.jsx("div",{className:"flex-shrink-0",children:a}),e.jsx("div",{className:"flex-1 min-w-0",children:m}),n&&e.jsx("div",{className:"flex-shrink-0",children:n})]})});t.displayName="ListItem";const i=f.forwardRef((s,c)=>{const{className:l,dataSource:a,renderItem:n,header:m,footer:r,bordered:o,loading:u,emptyContent:d,children:g,...R}=s,p=!g&&(!a||a.length===0),Le=a&&n?a.map((ge,Ie)=>n(ge,Ie)):g;return e.jsxs("div",{ref:c,role:"list",className:x(Ne({bordered:o,loading:u}),l),...R,children:[m&&e.jsx("div",{className:x(ke()),children:m}),u?e.jsx("div",{className:"flex items-center justify-center py-8",role:"status",children:e.jsx(je,{className:"h-6 w-6 animate-spin text-primary-500","aria-hidden":"true"})}):p?e.jsx("div",{className:"flex items-center justify-center py-8 text-muted-foreground",children:d||"暂无数据"}):e.jsx("div",{className:"flex flex-col",children:Le}),r&&!u&&e.jsx("div",{className:x(Te()),children:r})]})});i.displayName="List";const he=f.forwardRef((s,c)=>{const{className:l,...a}=s;return e.jsx("div",{ref:c,className:x(we(),l),...a})});he.displayName="ListDivider";h.__docgenInfo={description:"",methods:[],displayName:"ListItemMeta",props:{title:{required:!1,tsType:{name:"ReactNode"},description:"列表项标题"},description:{required:!1,tsType:{name:"ReactNode"},description:"列表项描述"},avatar:{required:!1,tsType:{name:"ReactNode"},description:"列表项头像或图标"},className:{required:!1,tsType:{name:"string"},description:"自定义 className，通过 cn() + twMerge 合并"}},composes:["Omit"]};t.__docgenInfo={description:"",methods:[],displayName:"ListItem",props:{prefix:{required:!1,tsType:{name:"ReactNode"},description:"列表项左侧内容"},suffix:{required:!1,tsType:{name:"ReactNode"},description:"列表项右侧内容"},children:{required:!1,tsType:{name:"ReactNode"},description:"列表项主内容"},disabled:{required:!1,tsType:{name:"boolean"},description:"是否禁用该列表项。默认 false"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent<HTMLDivElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},name:"e"}],return:{name:"void"}}},description:"点击回调函数"},className:{required:!1,tsType:{name:"string"},description:"自定义 className，通过 cn() + twMerge 合并"}},composes:["Omit","VariantProps"]};i.__docgenInfo={description:"",methods:[],displayName:"List",props:{dataSource:{required:!1,tsType:{name:"Array",elements:[{name:"unknown"}],raw:"unknown[]"},description:"列表数据源，配合 renderItem 渲染列表项"},renderItem:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: unknown, index: number) => ReactNode",signature:{arguments:[{type:{name:"unknown"},name:"item"},{type:{name:"number"},name:"index"}],return:{name:"ReactNode"}}},description:"自定义渲染列表项的函数，接收 item 和 index 参数"},header:{required:!1,tsType:{name:"ReactNode"},description:"列表头部内容"},footer:{required:!1,tsType:{name:"ReactNode"},description:"列表底部内容"},bordered:{required:!1,tsType:{name:"boolean"},description:"是否显示分割线。默认 false"},loading:{required:!1,tsType:{name:"boolean"},description:"是否显示加载状态。默认 false"},emptyContent:{required:!1,tsType:{name:"ReactNode"},description:"空状态时显示的内容"},className:{required:!1,tsType:{name:"string"},description:"自定义 className，通过 cn() + twMerge 合并"}},composes:["Omit","VariantProps"]};he.__docgenInfo={description:"",methods:[],displayName:"ListDivider"};const We={title:"数据展示/List 列表",component:i,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"列表用于展示一系列同类内容的条目。适用于消息通知、文章列表、用户评论等场景，支持头像、描述、前缀后缀和加载状态。"}}},argTypes:{header:{control:"text",description:"列表头部内容"},footer:{control:"text",description:"列表底部内容"},bordered:{control:"boolean",description:"是否显示分割线，默认 false"},loading:{control:"boolean",description:"是否显示加载状态，默认 false"},dataSource:{control:"object",description:"列表数据源，配合 renderItem 渲染列表项"}}},q=ve(),I={render:()=>e.jsxs(i,{children:[e.jsx(t,{children:"列表项 1"}),e.jsx(t,{children:"列表项 2"}),e.jsx(t,{children:"列表项 3"})]})},v={render:()=>e.jsxs(i,{header:"列表标题",children:[e.jsx(t,{children:"列表项 1"}),e.jsx(t,{children:"列表项 2"}),e.jsx(t,{children:"列表项 3"})]})},j={render:()=>e.jsxs(i,{footer:"列表底部",children:[e.jsx(t,{children:"列表项 1"}),e.jsx(t,{children:"列表项 2"}),e.jsx(t,{children:"列表项 3"})]})},y={render:()=>e.jsxs(i,{bordered:!0,children:[e.jsx(t,{children:"列表项 1"}),e.jsx(t,{children:"列表项 2"}),e.jsx(t,{children:"列表项 3"})]})},N={render:()=>e.jsxs(i,{children:[e.jsx(t,{children:e.jsx(h,{avatar:e.jsx(A,{children:"U"}),title:"用户 1",description:"用户 1 的描述"})}),e.jsx(t,{children:e.jsx(h,{avatar:e.jsx(A,{children:"A"}),title:"用户 2",description:"用户 2 的描述"})})]})},b={render:()=>e.jsxs(i,{children:[e.jsx(t,{prefix:e.jsx("span",{className:"text-primary-500",children:"→"}),suffix:e.jsx("span",{className:"text-gray-400",children:"3"}),children:"带前缀和后缀的列表项"}),e.jsx(t,{prefix:e.jsx("span",{className:"text-primary-500",children:"→"}),children:"仅带前缀的列表项"}),e.jsx(t,{suffix:e.jsx("span",{className:"text-gray-400",children:"5"}),children:"仅带后缀的列表项"})]})},S={render:()=>e.jsxs(i,{children:[e.jsx(t,{onClick:q,children:"可点击列表项 1"}),e.jsx(t,{onClick:q,children:"可点击列表项 2"}),e.jsx(t,{disabled:!0,onClick:q,children:"禁用列表项"})]})},k={render:()=>e.jsx(i,{loading:!0,children:e.jsx(t,{children:"加载中..."})})},T={render:()=>e.jsx(i,{dataSource:[],renderItem:s=>e.jsx(t,{children:String(s)})})},w={render:()=>e.jsx(i,{dataSource:["苹果","香蕉","樱桃"],renderItem:s=>e.jsx(t,{children:String(s)},String(s))})},C={render:()=>e.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",children:["项目 A","项目 B","项目 C","项目 D","项目 E","项目 F"].map(s=>e.jsx(i,{bordered:!0,children:e.jsx(t,{children:e.jsx(h,{avatar:e.jsx(A,{children:s.slice(-1)}),title:s,description:`${s}的描述信息`})})},s))})},M={render:()=>{const s=(r,o)=>Array.from({length:o},(u,d)=>({id:r+d,title:`项目 ${r+d}`,description:`这是项目 ${r+d} 的描述信息`})),[c,l]=f.useState(()=>s(1,5)),[a,n]=f.useState(!1),m=()=>{n(!0),setTimeout(()=>{l(r=>[...r,...s(r.length+1,5)]),n(!1)},1e3)};return e.jsxs("div",{children:[e.jsx(i,{header:"无限滚动列表",footer:e.jsx("div",{className:"text-center",children:e.jsx(ye,{onClick:m,loading:a,variant:"link",children:"加载更多"})}),children:c.map(r=>e.jsx(t,{children:e.jsx(h,{avatar:e.jsx(A,{children:r.id}),title:r.title,description:r.description})},r.id))}),e.jsx("p",{className:"text-xs text-gray-400 mt-2",children:'点击"加载更多"按钮追加列表项（模拟 1 秒延迟）'})]})}};var D,E,V;I.parameters={...I.parameters,docs:{...(D=I.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <List>
      <ListItem>列表项 1</ListItem>
      <ListItem>列表项 2</ListItem>
      <ListItem>列表项 3</ListItem>
    </List>
}`,...(V=(E=I.parameters)==null?void 0:E.docs)==null?void 0:V.source}}};var _,W,B;v.parameters={...v.parameters,docs:{...(_=v.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <List header="列表标题">
      <ListItem>列表项 1</ListItem>
      <ListItem>列表项 2</ListItem>
      <ListItem>列表项 3</ListItem>
    </List>
}`,...(B=(W=v.parameters)==null?void 0:W.docs)==null?void 0:B.source}}};var H,$,F;j.parameters={...j.parameters,docs:{...(H=j.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <List footer="列表底部">
      <ListItem>列表项 1</ListItem>
      <ListItem>列表项 2</ListItem>
      <ListItem>列表项 3</ListItem>
    </List>
}`,...(F=($=j.parameters)==null?void 0:$.docs)==null?void 0:F.source}}};var O,P,G;y.parameters={...y.parameters,docs:{...(O=y.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <List bordered>
      <ListItem>列表项 1</ListItem>
      <ListItem>列表项 2</ListItem>
      <ListItem>列表项 3</ListItem>
    </List>
}`,...(G=(P=y.parameters)==null?void 0:P.docs)==null?void 0:G.source}}};var K,U,z;N.parameters={...N.parameters,docs:{...(K=N.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <List>
      <ListItem>
        <ListItemMeta avatar={<Avatar>U</Avatar>} title="用户 1" description="用户 1 的描述" />
      </ListItem>
      <ListItem>
        <ListItemMeta avatar={<Avatar>A</Avatar>} title="用户 2" description="用户 2 的描述" />
      </ListItem>
    </List>
}`,...(z=(U=N.parameters)==null?void 0:U.docs)==null?void 0:z.source}}};var J,Q,X;b.parameters={...b.parameters,docs:{...(J=b.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <List>
      <ListItem prefix={<span className="text-primary-500">→</span>} suffix={<span className="text-gray-400">3</span>}>
        带前缀和后缀的列表项
      </ListItem>
      <ListItem prefix={<span className="text-primary-500">→</span>}>
        仅带前缀的列表项
      </ListItem>
      <ListItem suffix={<span className="text-gray-400">5</span>}>
        仅带后缀的列表项
      </ListItem>
    </List>
}`,...(X=(Q=b.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,ee;S.parameters={...S.parameters,docs:{...(Y=S.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <List>
      <ListItem onClick={handleItemClick}>可点击列表项 1</ListItem>
      <ListItem onClick={handleItemClick}>可点击列表项 2</ListItem>
      <ListItem disabled onClick={handleItemClick}>禁用列表项</ListItem>
    </List>
}`,...(ee=(Z=S.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,re,se;k.parameters={...k.parameters,docs:{...(te=k.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => <List loading>
      <ListItem>加载中...</ListItem>
    </List>
}`,...(se=(re=k.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var ie,ae,ne;T.parameters={...T.parameters,docs:{...(ie=T.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => <List dataSource={[]} renderItem={item => <ListItem>{String(item)}</ListItem>} />
}`,...(ne=(ae=T.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var oe,de,ce;w.parameters={...w.parameters,docs:{...(oe=w.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => <List dataSource={['苹果', '香蕉', '樱桃']} renderItem={item => <ListItem key={String(item)}>{String(item)}</ListItem>} />
}`,...(ce=(de=w.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var le,me,pe;C.parameters={...C.parameters,docs:{...(le=C.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {['项目 A', '项目 B', '项目 C', '项目 D', '项目 E', '项目 F'].map(item => <List key={item} bordered>
          <ListItem>
            <ListItemMeta avatar={<Avatar>{item.slice(-1)}</Avatar>} title={item} description={\`\${item}的描述信息\`} />
          </ListItem>
        </List>)}
    </div>
}`,...(pe=(me=C.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var ue,xe,fe;M.parameters={...M.parameters,docs:{...(ue=M.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: () => {
    const generateItems = (start: number, count: number) => Array.from({
      length: count
    }, (_, i) => ({
      id: start + i,
      title: \`项目 \${start + i}\`,
      description: \`这是项目 \${start + i} 的描述信息\`
    }));
    const [items, setItems] = useState(() => generateItems(1, 5));
    const [loading, setLoading] = useState(false);
    const loadMore = () => {
      setLoading(true);
      setTimeout(() => {
        setItems(prev => [...prev, ...generateItems(prev.length + 1, 5)]);
        setLoading(false);
      }, 1000);
    };
    return <div>
        <List header="无限滚动列表" footer={<div className="text-center">
              <Button onClick={loadMore} loading={loading} variant="link">
                加载更多
              </Button>
            </div>}>
          {items.map(item => <ListItem key={item.id}>
              <ListItemMeta avatar={<Avatar>{item.id}</Avatar>} title={item.title} description={item.description} />
            </ListItem>)}
        </List>
        <p className="text-xs text-gray-400 mt-2">点击"加载更多"按钮追加列表项（模拟 1 秒延迟）</p>
      </div>;
  }
}`,...(fe=(xe=M.parameters)==null?void 0:xe.docs)==null?void 0:fe.source}}};const Be=["Default","WithHeader","WithFooter","Bordered","WithAvatar","WithPrefixSuffix","Clickable","Loading","Empty","WithDataSource","GridList","InfiniteScroll"];export{y as Bordered,S as Clickable,I as Default,T as Empty,C as GridList,M as InfiniteScroll,k as Loading,N as WithAvatar,w as WithDataSource,j as WithFooter,v as WithHeader,b as WithPrefixSuffix,Be as __namedExportsOrder,We as default};
