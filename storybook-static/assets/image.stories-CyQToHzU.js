import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r}from"./index-GiUgBvb1.js";import{a as S}from"./utils-BEhiKRD9.js";import{c as ie}from"./index-C08JwjkN.js";const j=ie("sui-image relative inline-block",{variants:{preview:{true:"sui-image--preview",false:""},error:{true:"sui-image--error",false:""}},defaultVariants:{preview:!1,error:!1}}),n=r.forwardRef(({src:l,alt:c="",width:a,height:s,placeholder:t,preview:i=!1,previewSrc:v,fallback:d,style:C,className:E,onLoad:o,onError:m,...Q},U)=>{const[W,X]=r.useState(!1),[Y,Z]=r.useState(!1),[ee,N]=r.useState(!1),te=r.useCallback(b=>{X(!0),o==null||o(b)},[o]),se=r.useCallback(b=>{Z(!0),m==null||m(b)},[m]),re=r.useCallback(()=>{i&&N(!0)},[i]),ae=r.useCallback(()=>{N(!1)},[]);return Y&&d?e.jsx("div",{className:S(j({error:!0}),"flex items-center justify-center bg-[#f5f5f5]",E),style:{width:a,height:s,...C},children:d}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{ref:U,className:S(j({preview:i}),E),style:{width:a,height:s,...C},children:[!W&&t&&e.jsx("div",{className:"sui-image__placeholder absolute inset-0 flex items-center justify-center bg-[#f5f5f5]",children:t}),e.jsx("img",{src:l,alt:c,className:"object-cover",style:{width:a,height:s},onLoad:te,onError:se,onClick:re,...Q})]}),ee&&e.jsx("div",{className:"sui-image-preview fixed inset-0 z-[1080] bg-[rgba(0,0,0,0.45)] flex items-center justify-center cursor-zoom-out",onClick:ae,children:e.jsx("img",{src:v||l,alt:c,className:"max-w-[90vw] max-h-[90vh] object-contain"})})]})});n.displayName="Image";n.__docgenInfo={description:`Image 图片组件

可预览的图片。

### 何时使用
- 需要展示图片时
- 需要图片预览功能时

### 示例
\`\`\`tsx
<Image src="https://example.com/image.jpg" alt="example" preview />
\`\`\``,methods:[],displayName:"Image",props:{src:{required:!0,tsType:{name:"string"},description:"图片地址"},alt:{required:!1,tsType:{name:"string"},description:"图片描述",defaultValue:{value:"''",computed:!1}},width:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"图片宽度"},height:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"图片高度"},placeholder:{required:!1,tsType:{name:"ReactNode"},description:"加载占位"},preview:{required:!1,tsType:{name:"boolean"},description:"是否可预览",defaultValue:{value:"false",computed:!1}},previewSrc:{required:!1,tsType:{name:"string"},description:"预览图片地址"},fallback:{required:!1,tsType:{name:"ReactNode"},description:"加载失败时显示的内容"},style:{required:!1,tsType:{name:"CSSProperties"},description:"自定义样式"},className:{required:!1,tsType:{name:"string"},description:"自定义类名"}},composes:["Omit"]};const pe={title:"数据展示/Image 图片",component:n,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`Image 图片组件用于展示图片内容，支持预览、懒加载、占位图和加载失败回退等功能。

- 用于需要预览大图的商品图、相册展示
- 用于图片懒加载优化长列表页面性能
- 用于需要加载状态或失败回退的图片场景
- 支持自定义预览源图，实现缩略图与高清图分离`}}},argTypes:{preview:{control:"boolean"},width:{control:"number"},height:{control:"number"}}},y="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect fill='%23f3f4f6' width='300' height='200'/%3E%3Ctext fill='%239ca3af' font-family='sans-serif' font-size='14' x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle'%3EPlaceholder%3C/text%3E%3C/svg%3E",g={args:{src:y,width:300,height:200}},f={args:{src:y,width:300,height:200,preview:!0}},h={args:{src:y,width:300,height:200,placeholder:e.jsx("span",{className:"text-gray-400",children:"Loading..."})}},p={args:{src:"invalid-url",width:300,height:200,fallback:e.jsx("span",{className:"text-gray-400",children:"Load Failed"})}},x={args:{src:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect fill='%23f3f4f6' width='300' height='200'/%3E%3Ctext fill='%239ca3af' font-family='sans-serif' font-size='14' x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle'%3EPlaceholder%3C/text%3E%3C/svg%3E",previewSrc:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Crect fill='%23f3f4f6' width='800' height='600'/%3E%3Ctext fill='%239ca3af' font-family='sans-serif' font-size='14' x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle'%3EPlaceholder%3C/text%3E%3C/svg%3E",width:300,height:200,preview:!0}},ne="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect fill='%23dbeafe' width='300' height='200'/%3E%3Ctext fill='%233b82f6' font-family='sans-serif' font-size='16' x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle'%3EImage 1%3C/text%3E%3C/svg%3E",le="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect fill='%23dcfce7' width='300' height='200'/%3E%3Ctext fill='%2322c55e' font-family='sans-serif' font-size='16' x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle'%3EImage 2%3C/text%3E%3C/svg%3E",ce="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect fill='%23fef9c3' width='300' height='200'/%3E%3Ctext fill='%23eab308' font-family='sans-serif' font-size='16' x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle'%3EImage 3%3C/text%3E%3C/svg%3E",u={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-4",children:[e.jsx(n,{src:ne,width:200,height:140,preview:!0}),e.jsx(n,{src:le,width:200,height:140,preview:!0}),e.jsx(n,{src:ce,width:200,height:140,preview:!0})]})},de=[{bg:"%23dbeafe",text:"%233b82f6",label:"Lazy 1"},{bg:"%23dcfce7",text:"%2322c55e",label:"Lazy 2"},{bg:"%23fef9c3",text:"%23eab308",label:"Lazy 3"},{bg:"%23fce7f3",text:"%23ec4899",label:"Lazy 4"},{bg:"%23e0e7ff",text:"%236366f1",label:"Lazy 5"},{bg:"%23fecaca",text:"%23ef4444",label:"Lazy 6"},{bg:"%23d1fae5",text:"%23059669",label:"Lazy 7"},{bg:"%23bfdbfe",text:"%232563eb",label:"Lazy 8"}],oe=(l,c,a)=>`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect fill='${l}' width='300' height='200'/%3E%3Ctext fill='${c}' font-family='sans-serif' font-size='16' x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle'%3E${a}%3C/text%3E%3C/svg%3E`,w={parameters:{docs:{description:{story:"演示图片懒加载效果，使用 IntersectionObserver 监听图片进入视口时才加载，适用于长列表或大量图片的页面优化。"}}},render:()=>{const[l,c]=r.useState(new Set),a=r.useRef([]);return r.useEffect(()=>{const s=new IntersectionObserver(t=>{t.forEach(i=>{const v=Number(i.target.getAttribute("data-index"));i.isIntersecting&&c(d=>new Set(d).add(v))})},{rootMargin:"100px"});return a.current.forEach(t=>{t&&s.observe(t)}),()=>s.disconnect()},[]),e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-sm text-muted-foreground",children:"向下滚动查看图片懒加载效果（IntersectionObserver）"}),e.jsx("div",{className:"space-y-6 max-h-[400px] overflow-y-auto p-2 border border-border rounded-md",children:de.map((s,t)=>e.jsxs("div",{ref:i=>{a.current[t]=i},"data-index":t,className:"flex items-center gap-4",children:[l.has(t)?e.jsx(n,{src:oe(s.bg,s.text,s.label),width:200,height:130,placeholder:e.jsx("span",{className:"text-gray-400 text-sm",children:"Loading..."})}):e.jsx("div",{className:"flex items-center justify-center bg-gray-100 text-gray-400 text-sm rounded",style:{width:200,height:130},children:"Loading..."}),e.jsx("span",{className:"text-sm text-muted-foreground",children:s.label})]},t))})]})}};var I,z,L;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    src: placeholderSrc,
    width: 300,
    height: 200
  }
}`,...(L=(z=g.parameters)==null?void 0:z.docs)==null?void 0:L.source}}};var P,k,T;f.parameters={...f.parameters,docs:{...(P=f.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    src: placeholderSrc,
    width: 300,
    height: 200,
    preview: true
  }
}`,...(T=(k=f.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};var B,q,O;h.parameters={...h.parameters,docs:{...(B=h.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    src: placeholderSrc,
    width: 300,
    height: 200,
    placeholder: <span className="text-gray-400">Loading...</span>
  }
}`,...(O=(q=h.parameters)==null?void 0:q.docs)==null?void 0:O.source}}};var R,V,_;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    src: 'invalid-url',
    width: 300,
    height: 200,
    fallback: <span className="text-gray-400">Load Failed</span>
  }
}`,...(_=(V=p.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var F,M,$;x.parameters={...x.parameters,docs:{...(F=x.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    src: 'data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'300\\' height=\\'200\\' viewBox=\\'0 0 300 200\\'%3E%3Crect fill=\\'%23f3f4f6\\' width=\\'300\\' height=\\'200\\'/%3E%3Ctext fill=\\'%239ca3af\\' font-family=\\'sans-serif\\' font-size=\\'14\\' x=\\'50%25\\' y=\\'50%25\\' dominant-baseline=\\'middle\\' text-anchor=\\'middle\\'%3EPlaceholder%3C/text%3E%3C/svg%3E',
    previewSrc: 'data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'800\\' height=\\'600\\' viewBox=\\'0 0 800 600\\'%3E%3Crect fill=\\'%23f3f4f6\\' width=\\'800\\' height=\\'600\\'/%3E%3Ctext fill=\\'%239ca3af\\' font-family=\\'sans-serif\\' font-size=\\'14\\' x=\\'50%25\\' y=\\'50%25\\' dominant-baseline=\\'middle\\' text-anchor=\\'middle\\'%3EPlaceholder%3C/text%3E%3C/svg%3E',
    width: 300,
    height: 200,
    preview: true
  }
}`,...($=(M=x.parameters)==null?void 0:M.docs)==null?void 0:$.source}}};var A,G,D;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-4">
      <Image src={img1} width={200} height={140} preview />
      <Image src={img2} width={200} height={140} preview />
      <Image src={img3} width={200} height={140} preview />
    </div>
}`,...(D=(G=u.parameters)==null?void 0:G.docs)==null?void 0:D.source}}};var H,J,K;w.parameters={...w.parameters,docs:{...(H=w.parameters)==null?void 0:H.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '演示图片懒加载效果，使用 IntersectionObserver 监听图片进入视口时才加载，适用于长列表或大量图片的页面优化。'
      }
    }
  },
  render: () => {
    const [visibleIndices, setVisibleIndices] = useState<Set<number>>(new Set());
    const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
    useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          const index = Number(entry.target.getAttribute('data-index'));
          if (entry.isIntersecting) {
            setVisibleIndices(prev => new Set(prev).add(index));
          }
        });
      }, {
        rootMargin: '100px'
      });
      itemRefs.current.forEach(el => {
        if (el) observer.observe(el);
      });
      return () => observer.disconnect();
    }, []);
    return <div className="space-y-4">
        <p className="text-sm text-muted-foreground">向下滚动查看图片懒加载效果（IntersectionObserver）</p>
        <div className="space-y-6 max-h-[400px] overflow-y-auto p-2 border border-border rounded-md">
          {lazyColors.map((item, index) => <div key={index} ref={el => {
          itemRefs.current[index] = el;
        }} data-index={index} className="flex items-center gap-4">
              {visibleIndices.has(index) ? <Image src={makeSvgSrc(item.bg, item.text, item.label)} width={200} height={130} placeholder={<span className="text-gray-400 text-sm">Loading...</span>} /> : <div className="flex items-center justify-center bg-gray-100 text-gray-400 text-sm rounded" style={{
            width: 200,
            height: 130
          }}>
                  Loading...
                </div>}
              <span className="text-sm text-muted-foreground">{item.label}</span>
            </div>)}
        </div>
      </div>;
  }
}`,...(K=(J=w.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const xe=["Basic","Preview","Placeholder","Fallback","CustomPreviewSrc","PreviewGroup","LazyLoad"];export{g as Basic,x as CustomPreviewSrc,p as Fallback,w as LazyLoad,h as Placeholder,f as Preview,u as PreviewGroup,xe as __namedExportsOrder,pe as default};
