import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as a}from"./index-GiUgBvb1.js";import{a as H}from"./utils-BEhiKRD9.js";import{c as L}from"./index-C08JwjkN.js";const M=L("transition-all ease-out",{variants:{visible:{true:"opacity-100 translate-x-0 translate-y-0",false:"opacity-0"}},defaultVariants:{visible:!1}});function P(n){return{up:"translate-y-[var(--reveal-distance)]",down:"-translate-y-[var(--reveal-distance)]",left:"translate-x-[var(--reveal-distance)]",right:"-translate-x-[var(--reveal-distance)]",none:""}[n]}const r=a.forwardRef((n,s)=>{const{className:D,children:E,direction:V="up",duration:_=600,delay:I=0,threshold:m=.1,once:l=!0,distance:$=30,...C}=n,[p,v]=a.useState(!1),b=a.useRef(null),O=a.useCallback(t=>{b.current=t,typeof s=="function"?s(t):s&&(s.current=t)},[s]);return a.useEffect(()=>{const t=b.current;if(!t)return;const u=new IntersectionObserver(A=>{const g=A[0];g&&(g.isIntersecting?(v(!0),l&&u.unobserve(t)):l||v(!1))},{threshold:m});return u.observe(t),()=>u.disconnect()},[m,l]),e.jsx("div",{ref:O,className:H("sui-scroll-reveal",M({visible:p}),!p&&P(V),D),style:{"--reveal-distance":`${$}px`,transitionDuration:`${_}ms`,transitionDelay:`${I}ms`},...C,children:E})});r.displayName="ScrollReveal";r.__docgenInfo={description:"",methods:[],displayName:"ScrollReveal",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"子元素"},direction:{required:!1,tsType:{name:"union",raw:"'up' | 'down' | 'left' | 'right' | 'none'",elements:[{name:"literal",value:"'up'"},{name:"literal",value:"'down'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"},{name:"literal",value:"'none'"}]},description:"进入动画方向，默认 'up'"},duration:{required:!1,tsType:{name:"number"},description:"动画持续时间毫秒，默认 600"},delay:{required:!1,tsType:{name:"number"},description:"动画延迟毫秒，默认 0"},threshold:{required:!1,tsType:{name:"number"},description:"触发阈值 0-1，默认 0.1"},once:{required:!1,tsType:{name:"boolean"},description:"是否只触发一次，默认 true"},distance:{required:!1,tsType:{name:"number"},description:"位移距离像素，默认 30"}},composes:["HTMLAttributes","VariantProps"]};const J={title:"动效/ScrollReveal 滚动显隐",component:r,tags:["autodocs"],parameters:{layout:"padded"},argTypes:{direction:{control:"select",options:["up","down","left","right","none"],description:"进入动画方向"},duration:{control:"number",description:"动画持续时间毫秒"},delay:{control:"number",description:"动画延迟毫秒"},threshold:{control:{type:"range",min:0,max:1,step:.1},description:"触发阈值"},once:{control:"boolean",description:"是否只触发一次"},distance:{control:"number",description:"位移距离像素"}}},d={render:()=>e.jsxs("div",{className:"space-y-8",children:[e.jsx("div",{className:"h-[100vh] flex items-center justify-center text-muted-foreground",children:"向下滚动查看动画效果"}),e.jsx(r,{direction:"up",children:e.jsx("div",{className:"rounded-lg border border-border bg-background p-6 text-center",children:"从下方滑入的内容"})})]})},o={render:()=>e.jsxs("div",{className:"space-y-8",children:[e.jsx("div",{className:"h-[100vh] flex items-center justify-center text-muted-foreground",children:"向下滚动查看不同方向"}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsx(r,{direction:"up",children:e.jsx("div",{className:"rounded-lg border border-border bg-background p-4 text-center",children:"从下向上"})}),e.jsx(r,{direction:"down",children:e.jsx("div",{className:"rounded-lg border border-border bg-background p-4 text-center",children:"从上向下"})}),e.jsx(r,{direction:"left",children:e.jsx("div",{className:"rounded-lg border border-border bg-background p-4 text-center",children:"从右向左"})}),e.jsx(r,{direction:"right",children:e.jsx("div",{className:"rounded-lg border border-border bg-background p-4 text-center",children:"从左向右"})})]})]})},i={render:()=>e.jsxs("div",{className:"space-y-8",children:[e.jsx("div",{className:"h-[100vh] flex items-center justify-center text-muted-foreground",children:"向下滚动查看逐帧出现"}),[0,100,200,300,400].map(n=>e.jsx(r,{direction:"up",delay:n,children:e.jsxs("div",{className:"rounded-lg border border-border bg-background p-4 text-center",children:["延迟 ",n,"ms 出现"]})},n))]})},c={render:()=>e.jsxs("div",{className:"space-y-8",children:[e.jsx("div",{className:"h-[100vh] flex items-center justify-center text-muted-foreground",children:"滚动出视口再回来会重新触发"}),e.jsx(r,{direction:"up",once:!1,children:e.jsx("div",{className:"rounded-lg border border-primary-500 bg-primary-50 p-6 text-center text-primary-700",children:"反复触发的动画"})}),e.jsx("div",{className:"h-[100vh]"})]})};var x,f,h;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div className="space-y-8">
      <div className="h-[100vh] flex items-center justify-center text-muted-foreground">
        向下滚动查看动画效果
      </div>
      <ScrollReveal direction="up">
        <div className="rounded-lg border border-border bg-background p-6 text-center">
          从下方滑入的内容
        </div>
      </ScrollReveal>
    </div>
}`,...(h=(f=d.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var y,N,j;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div className="space-y-8">
      <div className="h-[100vh] flex items-center justify-center text-muted-foreground">
        向下滚动查看不同方向
      </div>
      <div className="grid grid-cols-2 gap-4">
        <ScrollReveal direction="up">
          <div className="rounded-lg border border-border bg-background p-4 text-center">从下向上</div>
        </ScrollReveal>
        <ScrollReveal direction="down">
          <div className="rounded-lg border border-border bg-background p-4 text-center">从上向下</div>
        </ScrollReveal>
        <ScrollReveal direction="left">
          <div className="rounded-lg border border-border bg-background p-4 text-center">从右向左</div>
        </ScrollReveal>
        <ScrollReveal direction="right">
          <div className="rounded-lg border border-border bg-background p-4 text-center">从左向右</div>
        </ScrollReveal>
      </div>
    </div>
}`,...(j=(N=o.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var R,S,k;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div className="space-y-8">
      <div className="h-[100vh] flex items-center justify-center text-muted-foreground">
        向下滚动查看逐帧出现
      </div>
      {[0, 100, 200, 300, 400].map(delay => <ScrollReveal key={delay} direction="up" delay={delay}>
          <div className="rounded-lg border border-border bg-background p-4 text-center">
            延迟 {delay}ms 出现
          </div>
        </ScrollReveal>)}
    </div>
}`,...(k=(S=i.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var w,T,q;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div className="space-y-8">
      <div className="h-[100vh] flex items-center justify-center text-muted-foreground">
        滚动出视口再回来会重新触发
      </div>
      <ScrollReveal direction="up" once={false}>
        <div className="rounded-lg border border-primary-500 bg-primary-50 p-6 text-center text-primary-700">
          反复触发的动画
        </div>
      </ScrollReveal>
      <div className="h-[100vh]" />
    </div>
}`,...(q=(T=c.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};const K=["Default","Directions","Staggered","Repeatable"];export{d as Default,o as Directions,c as Repeatable,i as Staggered,K as __namedExportsOrder,J as default};
