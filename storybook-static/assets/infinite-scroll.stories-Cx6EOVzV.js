import{j as r}from"./jsx-runtime-CDt2p4po.js";import{r as n}from"./index-GiUgBvb1.js";import{a as y}from"./utils-BEhiKRD9.js";import{c as $}from"./index-C08JwjkN.js";import{L as k}from"./loader-circle-CulI208u.js";import"./createLucideIcon-CZe00VV7.js";const C=$("w-full",{variants:{},defaultVariants:{}}),V=$("py-4 text-center text-sm text-muted-foreground",{variants:{},defaultVariants:{}}),c=n.forwardRef(({children:o,loading:s,hasMore:e,onLoadMore:i,loadingText:m="加载中...",noMoreText:u="没有更多了",threshold:d=100,className:t,...a},f)=>{const x=n.useRef(null),v=n.useRef(i);v.current=i;const M=n.useCallback(p=>{const l=p[0];l!=null&&l.isIntersecting&&e&&!s&&v.current()},[e,s]);return n.useEffect(()=>{const p=x.current;if(!p)return;const l=new IntersectionObserver(M,{rootMargin:`${d}px`});return l.observe(p),()=>{l.disconnect()}},[M,d]),r.jsxs("div",{ref:f,className:y(C(),t),...a,children:[o,r.jsxs("div",{className:y(V()),children:[s&&r.jsxs("span",{className:"flex items-center justify-center gap-2",children:[r.jsx(k,{className:"h-4 w-4 animate-spin text-primary"}),m]}),!s&&!e&&u]}),e&&r.jsx("div",{ref:x,className:"h-1","aria-hidden":"true"})]})});c.displayName="InfiniteScroll";c.__docgenInfo={description:`InfiniteScroll 无限滚动

Intersection Observer 监听底部哨兵元素进入视口时触发 onLoadMore。`,methods:[],displayName:"InfiniteScroll",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"子元素"},loading:{required:!0,tsType:{name:"boolean"},description:"是否正在加载"},hasMore:{required:!0,tsType:{name:"boolean"},description:"是否还有更多数据"},onLoadMore:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"加载更多回调"},loadingText:{required:!1,tsType:{name:"string"},description:"加载中提示文本，默认 '加载中...'",defaultValue:{value:"'加载中...'",computed:!1}},noMoreText:{required:!1,tsType:{name:"string"},description:"无更多数据提示文本，默认 '没有更多了'",defaultValue:{value:"'没有更多了'",computed:!1}},threshold:{required:!1,tsType:{name:"number"},description:"触发距离像素，默认 100",defaultValue:{value:"100",computed:!1}}},composes:["HTMLAttributes","VariantProps"]};const D={title:"数据展示/InfiniteScroll 无限滚动",component:c,tags:["autodocs"],parameters:{layout:"padded"},argTypes:{loading:{control:"boolean",description:"是否正在加载"},hasMore:{control:"boolean",description:"是否还有更多数据"},loadingText:{control:"text",description:"加载中提示文本"},noMoreText:{control:"text",description:"无更多数据提示文本"},threshold:{control:"number",description:"触发距离像素，默认 100"}}},g={render:()=>{const[o,s]=n.useState(()=>Array.from({length:10},(t,a)=>`项目 ${a+1}`)),[e,i]=n.useState(!1),[m,u]=n.useState(!0),d=n.useCallback(()=>{e||(i(!0),setTimeout(()=>{s(t=>[...t,...Array.from({length:5},(a,f)=>`项目 ${t.length+f+1}`)]),i(!1),o.length>=30&&u(!1)},1e3))},[e,o.length]);return r.jsx("div",{className:"h-96 overflow-auto border border-border rounded-lg",children:r.jsx(c,{loading:e,hasMore:m,onLoadMore:d,children:o.map((t,a)=>r.jsx("div",{className:"border-b border-border px-4 py-3 text-sm",children:t},a))})})}},b={render:()=>{const o=Array.from({length:5},(s,e)=>`项目 ${e+1}`);return r.jsx("div",{className:"h-64 overflow-auto border border-border rounded-lg",children:r.jsx(c,{loading:!1,hasMore:!1,onLoadMore:()=>{},children:o.map((s,e)=>r.jsx("div",{className:"border-b border-border px-4 py-3 text-sm",children:s},e))})})}},h={render:()=>{const[o,s]=n.useState(()=>Array.from({length:5},(t,a)=>`数据 ${a+1}`)),[e,i]=n.useState(!1),[m,u]=n.useState(!0),d=n.useCallback(()=>{e||(i(!0),setTimeout(()=>{s(t=>[...t,...Array.from({length:3},(a,f)=>`数据 ${t.length+f+1}`)]),i(!1),o.length>=15&&u(!1)},800))},[e,o.length]);return r.jsx("div",{className:"h-80 overflow-auto border border-border rounded-lg",children:r.jsx(c,{loading:e,hasMore:m,onLoadMore:d,loadingText:"正在获取数据...",noMoreText:"已加载全部数据",children:o.map((t,a)=>r.jsx("div",{className:"border-b border-border px-4 py-3 text-sm",children:t},a))})})}};var S,T,I;g.parameters={...g.parameters,docs:{...(S=g.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    const [items, setItems] = useState(() => Array.from({
      length: 10
    }, (_, i) => \`项目 \${i + 1}\`));
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const loadMore = useCallback(() => {
      if (loading) return;
      setLoading(true);
      setTimeout(() => {
        setItems(prev => [...prev, ...Array.from({
          length: 5
        }, (_, i) => \`项目 \${prev.length + i + 1}\`)]);
        setLoading(false);
        if (items.length >= 30) {
          setHasMore(false);
        }
      }, 1000);
    }, [loading, items.length]);
    return <div className="h-96 overflow-auto border border-border rounded-lg">
        <InfiniteScroll loading={loading} hasMore={hasMore} onLoadMore={loadMore}>
          {items.map((item, index) => <div key={index} className="border-b border-border px-4 py-3 text-sm">
              {item}
            </div>)}
        </InfiniteScroll>
      </div>;
  }
}`,...(I=(T=g.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};var N,L,j;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => {
    const items = Array.from({
      length: 5
    }, (_, i) => \`项目 \${i + 1}\`);
    return <div className="h-64 overflow-auto border border-border rounded-lg">
        <InfiniteScroll loading={false} hasMore={false} onLoadMore={() => {}}>
          {items.map((item, index) => <div key={index} className="border-b border-border px-4 py-3 text-sm">
              {item}
            </div>)}
        </InfiniteScroll>
      </div>;
  }
}`,...(j=(L=b.parameters)==null?void 0:L.docs)==null?void 0:j.source}}};var _,w,A;h.parameters={...h.parameters,docs:{...(_=h.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => {
    const [items, setItems] = useState(() => Array.from({
      length: 5
    }, (_, i) => \`数据 \${i + 1}\`));
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const loadMore = useCallback(() => {
      if (loading) return;
      setLoading(true);
      setTimeout(() => {
        setItems(prev => [...prev, ...Array.from({
          length: 3
        }, (_, i) => \`数据 \${prev.length + i + 1}\`)]);
        setLoading(false);
        if (items.length >= 15) {
          setHasMore(false);
        }
      }, 800);
    }, [loading, items.length]);
    return <div className="h-80 overflow-auto border border-border rounded-lg">
        <InfiniteScroll loading={loading} hasMore={hasMore} onLoadMore={loadMore} loadingText="正在获取数据..." noMoreText="已加载全部数据">
          {items.map((item, index) => <div key={index} className="border-b border-border px-4 py-3 text-sm">
              {item}
            </div>)}
        </InfiniteScroll>
      </div>;
  }
}`,...(A=(w=h.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};const P=["Basic","NoMoreData","CustomText"];export{g as Basic,h as CustomText,b as NoMoreData,P as __namedExportsOrder,D as default};
