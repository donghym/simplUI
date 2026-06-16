import{j as s}from"./jsx-runtime-CDt2p4po.js";import{r as A}from"./index-GiUgBvb1.js";import{a as y}from"./utils-BEhiKRD9.js";import{c as U}from"./index-C08JwjkN.js";const F=U("flex flex-col",{variants:{open:{true:"",false:"hidden"}},defaultVariants:{open:!0}}),G=U("px-4 py-2 text-sm text-foreground transition-[opacity,transform] duration-300 ease-out hover:bg-muted cursor-pointer select-none",{variants:{disabled:{true:"opacity-50 pointer-events-none",false:""},open:{true:"opacity-100 translate-x-0 translate-y-0",false:""},direction:{down:"",up:"",left:"",right:""}},compoundVariants:[{open:!1,direction:"down",className:"opacity-0 -translate-y-2.5"},{open:!1,direction:"up",className:"opacity-0 translate-y-2.5"},{open:!1,direction:"left",className:"opacity-0 translate-x-2.5"},{open:!1,direction:"right",className:"opacity-0 -translate-x-2.5"}],defaultVariants:{disabled:!1,open:!0,direction:"down"}}),p=A.forwardRef((t,m)=>{const{className:H,items:P,open:u=!0,staggerDelay:$=50,direction:z="down",...B}=t;return s.jsx("div",{ref:m,className:y("sui-stagger-menu",F({open:u}),H),...B,children:P.map((e,g)=>s.jsx("div",{className:y(G({disabled:e.disabled,open:u,direction:z})),style:{transitionDelay:u?`${g*$}ms`:"0ms"},onClick:()=>{var f;e.disabled||(f=e.onClick)==null||f.call(e)},role:"menuitem","aria-disabled":e.disabled,children:e.label},g))})});p.displayName="StaggerMenu";p.__docgenInfo={description:"",methods:[],displayName:"StaggerMenu",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"StaggerMenuItem"}],raw:"StaggerMenuItem[]"},description:"菜单项数组"},open:{required:!1,tsType:{name:"boolean"},description:"是否展开，默认 true"},staggerDelay:{required:!1,tsType:{name:"number"},description:"每项动画延迟毫秒，默认 50"},direction:{required:!1,tsType:{name:"union",raw:"'down' | 'up' | 'left' | 'right'",elements:[{name:"literal",value:"'down'"},{name:"literal",value:"'up'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"动画方向，默认 'down'"}},composes:["HTMLAttributes","VariantProps"]};const X={title:"动效/StaggerMenu 逐帧展开菜单",component:p,tags:["autodocs"],parameters:{layout:"padded"},argTypes:{open:{control:"boolean",description:"是否展开"},staggerDelay:{control:"number",description:"每项动画延迟毫秒"},direction:{control:"select",options:["down","up","left","right"],description:"动画方向"}}},r=[{label:"新建文件",onClick:()=>console.log("新建文件")},{label:"打开项目",onClick:()=>console.log("打开项目")},{label:"保存",onClick:()=>console.log("保存")},{label:"另存为",disabled:!0},{label:"退出",onClick:()=>console.log("退出")}],a={args:{items:r}},o={args:{items:r,direction:"down"}},n={args:{items:r,direction:"up"}},i={args:{items:r,direction:"left"}},c={args:{items:r,direction:"right"}},l={render:()=>{const[t,m]=A.useState(!0);return s.jsxs("div",{className:"space-y-4",children:[s.jsx("button",{type:"button",className:"px-3 py-1.5 text-sm rounded-md border border-border hover:bg-muted transition-colors",onClick:()=>m(!t),children:t?"收起":"展开"}),s.jsx(p,{items:r,open:t,staggerDelay:80})]})}},d={args:{items:r,staggerDelay:150}};var b,x,D;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    items: sampleItems
  }
}`,...(D=(x=a.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};var S,h,w;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    items: sampleItems,
    direction: 'down'
  }
}`,...(w=(h=o.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};var v,N,I;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    items: sampleItems,
    direction: 'up'
  }
}`,...(I=(N=n.parameters)==null?void 0:N.docs)==null?void 0:I.source}}};var M,k,C;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    items: sampleItems,
    direction: 'left'
  }
}`,...(C=(k=i.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var T,j,O;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    items: sampleItems,
    direction: 'right'
  }
}`,...(O=(j=c.parameters)==null?void 0:j.docs)==null?void 0:O.source}}};var V,q,R;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(true);
    return <div className="space-y-4">
        <button type="button" className="px-3 py-1.5 text-sm rounded-md border border-border hover:bg-muted transition-colors" onClick={() => setOpen(!open)}>
          {open ? '收起' : '展开'}
        </button>
        <StaggerMenu items={sampleItems} open={open} staggerDelay={80} />
      </div>;
  }
}`,...(R=(q=l.parameters)==null?void 0:q.docs)==null?void 0:R.source}}};var _,E,L;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    items: sampleItems,
    staggerDelay: 150
  }
}`,...(L=(E=d.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};const Y=["Default","DirectionDown","DirectionUp","DirectionLeft","DirectionRight","ToggleOpen","SlowStagger"];export{a as Default,o as DirectionDown,i as DirectionLeft,c as DirectionRight,n as DirectionUp,d as SlowStagger,l as ToggleOpen,Y as __namedExportsOrder,X as default};
