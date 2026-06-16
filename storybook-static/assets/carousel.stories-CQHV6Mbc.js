import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as l}from"./index-GiUgBvb1.js";import{a as m}from"./utils-BEhiKRD9.js";import{c as C}from"./index-C08JwjkN.js";import{C as Q}from"./chevron-left-08BNpNZ8.js";import{C as U}from"./chevron-right-V463yFHa.js";import"./createLucideIcon-CZe00VV7.js";const W=C("sui-carousel relative w-full overflow-hidden",{variants:{},defaultVariants:{}}),Y=C("sui-carousel__slide absolute inset-0 transition-opacity duration-300",{variants:{active:{true:"opacity-100 z-10",false:"opacity-0 z-0"}},defaultVariants:{active:!1}}),Z=C("sui-carousel__dot w-2 h-2 rounded-full transition-colors cursor-pointer",{variants:{active:{true:"bg-primary",false:"bg-muted-foreground/30 hover:bg-muted-foreground/50"}},defaultVariants:{active:!1}}),_=l.forwardRef((a,u)=>{const{autoplay:n=!1,autoplayInterval:o=3e3,dots:r=!0,arrows:i=!1,initialIndex:c=0,onChange:b,children:G,className:L,...H}=a,N=l.Children.toArray(G),t=N.length,[d,J]=l.useState(Math.min(c,t-1)),h=l.useCallback(x=>{const s=Math.max(0,Math.min(x,t-1));J(s),b==null||b(s)},[t,b]),j=l.useCallback(()=>{h((d+1)%t)},[d,t,h]),K=l.useCallback(()=>{h((d-1+t)%t)},[d,t,h]);return l.useEffect(()=>{if(!n||t<=1)return;const x=setInterval(j,o);return()=>clearInterval(x)},[n,o,j,t]),e.jsxs("div",{ref:u,className:m(W(),L),role:"region","aria-roledescription":"carousel","aria-label":"Carousel",...H,children:[e.jsx("div",{className:"sui-carousel__track relative aspect-video",children:N.map((x,s)=>e.jsx("div",{className:m(Y({active:s===d})),role:"group","aria-roledescription":"slide","aria-label":`Slide ${s+1} of ${t}`,"aria-hidden":s!==d,children:x},s))}),i&&t>1&&e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",className:"sui-carousel__arrow sui-carousel__arrow--prev absolute left-2 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/80 hover:bg-white shadow-md",onClick:K,"aria-label":"Previous slide",children:e.jsx(Q,{className:"w-5 h-5","aria-hidden":"true"})}),e.jsx("button",{type:"button",className:"sui-carousel__arrow sui-carousel__arrow--next absolute right-2 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/80 hover:bg-white shadow-md",onClick:j,"aria-label":"Next slide",children:e.jsx(U,{className:"w-5 h-5","aria-hidden":"true"})})]}),r&&t>1&&e.jsx("div",{className:"sui-carousel__dots absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2",children:N.map((x,s)=>e.jsx("button",{type:"button",className:m(Z({active:s===d})),onClick:()=>h(s),"aria-label":`Go to slide ${s+1}`,"aria-current":s===d?"true":void 0},s))})]})});_.displayName="Carousel";_.__docgenInfo={description:`Carousel 走马灯组件

用于展示一组内容，支持自动播放、手动切换。

### 何时使用
- 展示图片轮播
- 展示一组卡片内容

### 示例
\`\`\`tsx
<Carousel autoplay dots arrows>
  <div>幻灯片 1</div>
  <div>幻灯片 2</div>
  <div>幻灯片 3</div>
</Carousel>
\`\`\``,methods:[],displayName:"Carousel",props:{autoplay:{required:!1,tsType:{name:"boolean"},description:"自动播放。默认 false"},autoplayInterval:{required:!1,tsType:{name:"number"},description:"自动播放间隔时间（毫秒）。默认 3000"},dots:{required:!1,tsType:{name:"boolean"},description:"是否显示指示器。默认 true"},arrows:{required:!1,tsType:{name:"boolean"},description:"是否显示左右切换箭头。默认 false"},initialIndex:{required:!1,tsType:{name:"number"},description:"初始激活的幻灯片索引。默认 0"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:"切换幻灯片时的回调"},children:{required:!1,tsType:{name:"ReactNode"},description:"子元素（幻灯片内容）"},style:{required:!1,tsType:{name:"CSSProperties"},description:"自定义样式"},className:{required:!1,tsType:{name:"string"},description:"自定义类名，通过 cn() + twMerge 合并"}},composes:["Omit"]};const ne={title:"数据展示/Carousel 走马灯",component:_,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`Carousel 走马灯组件用于循环播放一组内容，支持自动播放、指示器和手势拖拽。

- 用于首页 Banner 轮播、广告位展示
- 用于图片相册、作品集的滑动浏览
- 用于公告、新闻的滚动展示
- 支持自动播放和手动切换两种交互模式`}}},argTypes:{autoplay:{control:"boolean"},autoplayInterval:{control:"number"},dots:{control:"boolean"},arrows:{control:"boolean"}}},g={args:{children:e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"h-40 bg-slate-700 text-white flex items-center justify-center text-2xl",children:"1"}),e.jsx("div",{className:"h-40 bg-slate-700 text-white flex items-center justify-center text-2xl",children:"2"}),e.jsx("div",{className:"h-40 bg-slate-700 text-white flex items-center justify-center text-2xl",children:"3"}),e.jsx("div",{className:"h-40 bg-slate-700 text-white flex items-center justify-center text-2xl",children:"4"})]})}},p={args:{autoplay:!0,autoplayInterval:2e3,children:e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"h-40 bg-slate-700 text-white flex items-center justify-center text-2xl",children:"1"}),e.jsx("div",{className:"h-40 bg-slate-700 text-white flex items-center justify-center text-2xl",children:"2"}),e.jsx("div",{className:"h-40 bg-slate-700 text-white flex items-center justify-center text-2xl",children:"3"})]})}},v={args:{dots:!1,children:e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"h-40 bg-slate-700 text-white flex items-center justify-center text-2xl",children:"1"}),e.jsx("div",{className:"h-40 bg-slate-700 text-white flex items-center justify-center text-2xl",children:"2"}),e.jsx("div",{className:"h-40 bg-slate-700 text-white flex items-center justify-center text-2xl",children:"3"})]})}},f={args:{draggable:!0,children:e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"h-40 bg-slate-700 text-white flex items-center justify-center text-2xl",children:"1"}),e.jsx("div",{className:"h-40 bg-slate-700 text-white flex items-center justify-center text-2xl",children:"2"}),e.jsx("div",{className:"h-40 bg-slate-700 text-white flex items-center justify-center text-2xl",children:"3"})]})}},y={render:()=>{const a=[{bg:"bg-indigo-700",label:"1"},{bg:"bg-emerald-700",label:"2"},{bg:"bg-amber-700",label:"3"}],[u,n]=l.useState(0);return e.jsxs("div",{className:"relative h-40 overflow-hidden rounded-lg",children:[a.map((o,r)=>e.jsx("div",{className:"absolute inset-0 flex items-center justify-center text-2xl text-white transition-opacity duration-500",style:{opacity:r===u?1:0},children:e.jsxs("div",{className:m("h-40 w-full",o.bg,"flex items-center justify-center"),children:["Slide ",o.label]})},r)),e.jsx("div",{className:"absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2",children:a.map((o,r)=>e.jsx("button",{type:"button",className:m("w-2.5 h-2.5 rounded-full transition-colors",r===u?"bg-white":"bg-white/40"),onClick:()=>n(r)},r))})]})}},w={parameters:{docs:{description:{story:"演示自定义导航控制，包含上一页/下一页按钮和底部指示点，展示如何完全自定义走马灯的导航交互。"}}},render:()=>{const a=[{bg:"bg-slate-700",label:"1"},{bg:"bg-slate-600",label:"2"},{bg:"bg-slate-500",label:"3"}],[u,n]=l.useState(0),o=()=>n(i=>(i+1)%a.length),r=()=>n(i=>(i-1+a.length)%a.length);return e.jsxs("div",{className:"relative h-40 overflow-hidden rounded-lg",children:[a.map((i,c)=>e.jsxs("div",{className:m("h-40 w-full",i.bg,"flex items-center justify-center text-2xl text-white transition-transform duration-300"),style:{transform:`translateX(${(c-u)*100}%)`},children:["Slide ",i.label]},c)),e.jsx("button",{type:"button",onClick:r,className:"absolute left-3 top-1/2 -translate-y-1/2 z-20 px-3 py-1.5 bg-white/90 hover:bg-white rounded-md shadow text-sm font-medium text-gray-700",children:"← Prev"}),e.jsx("button",{type:"button",onClick:o,className:"absolute right-3 top-1/2 -translate-y-1/2 z-20 px-3 py-1.5 bg-white/90 hover:bg-white rounded-md shadow text-sm font-medium text-gray-700",children:"Next →"}),e.jsx("div",{className:"absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2",children:a.map((i,c)=>e.jsx("button",{type:"button",className:m("w-2.5 h-2.5 rounded-full transition-colors",c===u?"bg-white":"bg-white/40"),onClick:()=>n(c)},c))})]})}};var S,k,z;g.parameters={...g.parameters,docs:{...(S=g.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    children: <>
        <div className="h-40 bg-slate-700 text-white flex items-center justify-center text-2xl">1</div>
        <div className="h-40 bg-slate-700 text-white flex items-center justify-center text-2xl">2</div>
        <div className="h-40 bg-slate-700 text-white flex items-center justify-center text-2xl">3</div>
        <div className="h-40 bg-slate-700 text-white flex items-center justify-center text-2xl">4</div>
      </>
  }
}`,...(z=(k=g.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};var A,I,T;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    autoplay: true,
    autoplayInterval: 2000,
    children: <>
        <div className="h-40 bg-slate-700 text-white flex items-center justify-center text-2xl">1</div>
        <div className="h-40 bg-slate-700 text-white flex items-center justify-center text-2xl">2</div>
        <div className="h-40 bg-slate-700 text-white flex items-center justify-center text-2xl">3</div>
      </>
  }
}`,...(T=(I=p.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var q,P,F;v.parameters={...v.parameters,docs:{...(q=v.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    dots: false,
    children: <>
        <div className="h-40 bg-slate-700 text-white flex items-center justify-center text-2xl">1</div>
        <div className="h-40 bg-slate-700 text-white flex items-center justify-center text-2xl">2</div>
        <div className="h-40 bg-slate-700 text-white flex items-center justify-center text-2xl">3</div>
      </>
  }
}`,...(F=(P=v.parameters)==null?void 0:P.docs)==null?void 0:F.source}}};var V,D,$;f.parameters={...f.parameters,docs:{...(V=f.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    draggable: true,
    children: <>
        <div className="h-40 bg-slate-700 text-white flex items-center justify-center text-2xl">1</div>
        <div className="h-40 bg-slate-700 text-white flex items-center justify-center text-2xl">2</div>
        <div className="h-40 bg-slate-700 text-white flex items-center justify-center text-2xl">3</div>
      </>
  }
}`,...($=(D=f.parameters)==null?void 0:D.docs)==null?void 0:$.source}}};var E,M,R;y.parameters={...y.parameters,docs:{...(E=y.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    const slides = [{
      bg: 'bg-indigo-700',
      label: '1'
    }, {
      bg: 'bg-emerald-700',
      label: '2'
    }, {
      bg: 'bg-amber-700',
      label: '3'
    }];
    const [active, setActive] = useState(0);
    return <div className="relative h-40 overflow-hidden rounded-lg">
        {slides.map((slide, i) => <div key={i} className="absolute inset-0 flex items-center justify-center text-2xl text-white transition-opacity duration-500" style={{
        opacity: i === active ? 1 : 0
      }}>
            <div className={cn('h-40 w-full', slide.bg, 'flex items-center justify-center')}>
              Slide {slide.label}
            </div>
          </div>)}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {slides.map((_, i) => <button key={i} type="button" className={cn('w-2.5 h-2.5 rounded-full transition-colors', i === active ? 'bg-white' : 'bg-white/40')} onClick={() => setActive(i)} />)}
        </div>
      </div>;
  }
}`,...(R=(M=y.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};var B,O,X;w.parameters={...w.parameters,docs:{...(B=w.parameters)==null?void 0:B.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '演示自定义导航控制，包含上一页/下一页按钮和底部指示点，展示如何完全自定义走马灯的导航交互。'
      }
    }
  },
  render: () => {
    const slides = [{
      bg: 'bg-slate-700',
      label: '1'
    }, {
      bg: 'bg-slate-600',
      label: '2'
    }, {
      bg: 'bg-slate-500',
      label: '3'
    }];
    const [active, setActive] = useState(0);
    const goNext = () => setActive(prev => (prev + 1) % slides.length);
    const goPrev = () => setActive(prev => (prev - 1 + slides.length) % slides.length);
    return <div className="relative h-40 overflow-hidden rounded-lg">
        {slides.map((slide, i) => <div key={i} className={cn('h-40 w-full', slide.bg, 'flex items-center justify-center text-2xl text-white transition-transform duration-300')} style={{
        transform: \`translateX(\${(i - active) * 100}%)\`
      }}>
            Slide {slide.label}
          </div>)}
        <button type="button" onClick={goPrev} className="absolute left-3 top-1/2 -translate-y-1/2 z-20 px-3 py-1.5 bg-white/90 hover:bg-white rounded-md shadow text-sm font-medium text-gray-700">
          ← Prev
        </button>
        <button type="button" onClick={goNext} className="absolute right-3 top-1/2 -translate-y-1/2 z-20 px-3 py-1.5 bg-white/90 hover:bg-white rounded-md shadow text-sm font-medium text-gray-700">
          Next →
        </button>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {slides.map((_, i) => <button key={i} type="button" className={cn('w-2.5 h-2.5 rounded-full transition-colors', i === active ? 'bg-white' : 'bg-white/40')} onClick={() => setActive(i)} />)}
        </div>
      </div>;
  }
}`,...(X=(O=w.parameters)==null?void 0:O.docs)==null?void 0:X.source}}};const oe=["Basic","Autoplay","NoDots","Draggable","FadeTransition","CustomNavigation"];export{p as Autoplay,g as Basic,w as CustomNavigation,f as Draggable,y as FadeTransition,v as NoDots,oe as __namedExportsOrder,ne as default};
