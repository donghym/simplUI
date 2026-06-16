import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r}from"./index-GiUgBvb1.js";import{a as y}from"./utils-BEhiKRD9.js";import{c as qe}from"./index-C08JwjkN.js";import{C as Ye}from"./chevron-left-08BNpNZ8.js";import{C as Ze}from"./chevron-right-V463yFHa.js";import{M as l,a as t,S as h}from"./index-BCiNSAGB.js";import{B}from"./index-B27MKJIv.js";import{B as et}from"./index-WhxK0hy4.js";import{H as L}from"./house-DR9pGCa3.js";import{U as x}from"./user-CXa3gJrY.js";import{F as U,S as Be}from"./settings-BwcfsIuO.js";import{c as ze}from"./createLucideIcon-CZe00VV7.js";import{B as E}from"./bell-mOK_pRjr.js";import"./chevron-down-CY-YwltC.js";import"./loader-circle-CulI208u.js";/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tt=ze("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W=ze("Monitor",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]),st=qe("flex",{variants:{hasSider:{true:"flex-row",false:"flex-col"}},defaultVariants:{hasSider:!1}}),it=qe("relative transition-all duration-200 overflow-auto flex-shrink-0 min-h-full",{variants:{theme:{dark:"text-white bg-[#001529]",light:"text-foreground bg-background border-r border-border"}},defaultVariants:{theme:"dark"}}),rt={xs:480,sm:576,md:768,lg:992,xl:1200,xxl:1600},_e=r.createContext(null);function Re(){return r.useContext(_e)}const s=r.forwardRef(({hasSider:i,className:n,children:d,...j},z)=>{const k=Re(),[f,_]=r.useState(!1),T=k||{siderCollapsed:f,setSiderCollapsed:_};return e.jsx(_e.Provider,{value:T,children:e.jsx("div",{ref:z,className:y("sui-layout",st({hasSider:i}),"min-w-0",n),...j,children:d})})});s.displayName="Layout";const o=r.forwardRef(({className:i,...n},d)=>e.jsx("header",{ref:d,className:y("sui-layout-header","h-16 px-[50px] flex items-center bg-[#001529] text-white/85",i),...n}));o.displayName="Layout.Header";const a=r.forwardRef(({className:i,...n},d)=>e.jsx("main",{ref:d,className:y("sui-layout-content","flex-1 bg-[#f5f5f5]",i),...n}));a.displayName="Layout.Content";const p=r.forwardRef(({className:i,...n},d)=>e.jsx("footer",{ref:d,className:y("sui-layout-footer","text-center text-black/45 bg-[#f5f5f5] py-6 px-[50px]",i),...n}));p.displayName="Layout.Footer";const c=r.forwardRef(({width:i=200,collapsedWidth:n=80,collapsible:d=!1,collapsed:j,defaultCollapsed:z=!1,theme:k="dark",breakpoint:f,reverseArrow:_=!1,trigger:T,onCollapse:R,onBreakpoint:H,className:Ve,triggerClassName:Ae,children:Ee,style:We,...Pe},$e)=>{const m=Re(),[Oe,De]=r.useState(z),[F,Ge]=r.useState(!1),b=j!==void 0?j:Oe,V=b?n:i;r.useEffect(()=>{if(!f)return;const u=()=>{const q=rt[f],A=window.innerWidth<=q;A!==F&&(Ge(A),H==null||H(A))};return u(),window.addEventListener("resize",u),()=>window.removeEventListener("resize",u)},[f,F,H]),r.useEffect(()=>{var u;!F||!d||(u=m==null?void 0:m.setSiderCollapsed)==null||u.call(m,!0)},[F,d,m]);const Je=()=>{var q;const u=!b;j===void 0&&De(u),(q=m==null?void 0:m.setSiderCollapsed)==null||q.call(m,u),R==null||R(u)},Qe={width:typeof V=="number"?`${V}px`:V,...We||{}},Xe=d&&T!==null;return e.jsxs("aside",{ref:$e,className:y("sui-layout-sider",it({theme:k}),Ve),style:Qe,...Pe,children:[e.jsx("div",{className:"h-full flex flex-col",children:Ee}),Xe&&e.jsx("button",{type:"button",onClick:Je,className:y("sui-layout-sider-trigger","absolute bottom-0 left-0 w-full h-12 flex items-center justify-center",k==="dark"?"text-white hover:text-white bg-[#002140]":"text-muted-foreground hover:text-foreground border-t border-border bg-background",Ae),"aria-label":b?"展开侧边栏":"收起侧边栏","aria-expanded":!b,children:T||(_!==b?e.jsx(Ye,{size:16}):e.jsx(Ze,{size:16}))})]})});c.displayName="Layout.Sider";Object.assign(s,{Header:o,Sider:c,Content:a,Footer:p});s.__docgenInfo={description:"Layout 布局容器，支持嵌套，hasSider=true 时为水平布局，上下文管理 Sider 折叠状态",methods:[],displayName:"Layout",props:{hasSider:{required:!1,tsType:{name:"boolean"},description:"子元素中包含 Sider 时设为 true，帮助内部布局正确计算"}},composes:["HTMLAttributes"]};o.__docgenInfo={description:"Header 顶部区域，高度 64px，深色背景",methods:[],displayName:"Layout.Header",props:{className:{required:!1,tsType:{name:"string"},description:"自定义类名"}},composes:["HTMLAttributes"]};c.__docgenInfo={description:"Sider 侧边栏，支持折叠展开、响应式断点、亮暗主题",methods:[],displayName:"Layout.Sider",props:{width:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"侧边栏宽度，默认 200",defaultValue:{value:"200",computed:!1}},collapsedWidth:{required:!1,tsType:{name:"number"},description:"收起后的宽度，默认 80；设为 0 时会出现特殊 trigger",defaultValue:{value:"80",computed:!1}},collapsible:{required:!1,tsType:{name:"boolean"},description:"是否可收起，默认 false",defaultValue:{value:"false",computed:!1}},collapsed:{required:!1,tsType:{name:"boolean"},description:"当前收起状态（受控），不传时使用内部状态"},defaultCollapsed:{required:!1,tsType:{name:"boolean"},description:"是否默认收起（非受控），默认 false",defaultValue:{value:"false",computed:!1}},theme:{required:!1,tsType:{name:"union",raw:"'light' | 'dark'",elements:[{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"}]},description:"主题，'dark' 时深色背景白色文字，'light' 时白色背景深色文字，默认 'dark'",defaultValue:{value:"'dark'",computed:!1}},breakpoint:{required:!1,tsType:{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'xxl'"}]},description:"响应式断点，窗口宽度小于断点时自动收起"},reverseArrow:{required:!1,tsType:{name:"boolean"},description:"翻转折叠箭头方向，Sider 在右侧时使用，默认 false",defaultValue:{value:"false",computed:!1}},trigger:{required:!1,tsType:{name:"union",raw:"ReactNode | null",elements:[{name:"ReactNode"},{name:"null"}]},description:"自定义触发器，设为 null 时隐藏触发器"},onCollapse:{required:!1,tsType:{name:"signature",type:"function",raw:"(collapsed: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"collapsed"}],return:{name:"void"}}},description:"收起/展开回调"},onBreakpoint:{required:!1,tsType:{name:"signature",type:"function",raw:"(broken: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"broken"}],return:{name:"void"}}},description:"响应式断点触发回调"},className:{required:!1,tsType:{name:"string"},description:"自定义类名"},triggerClassName:{required:!1,tsType:{name:"string"},description:"触发器自定义类名"}},composes:["HTMLAttributes","VariantProps"]};a.__docgenInfo={description:"Content 主要内容区域",methods:[],displayName:"Layout.Content",props:{className:{required:!1,tsType:{name:"string"},description:"自定义类名"}},composes:["HTMLAttributes"]};p.__docgenInfo={description:"Footer 底部区域",methods:[],displayName:"Layout.Footer",props:{className:{required:!1,tsType:{name:"string"},description:"自定义类名"}},composes:["HTMLAttributes"]};const Mt={title:"布局/Layout 布局",component:s,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`协助进行页面级整体布局。

- 页面整体布局：用于后台管理系统、仪表盘等复杂页面，搭建顶部导航、侧边栏、内容区和页脚。
- 响应式适配：支持断点自动折叠侧边栏，适配不同屏幕尺寸。
- 固定区域：支持固定头部或侧边栏，方便长页面下的导航操作。`}}}},N={parameters:{docs:{description:{story:"典型的后台管理布局，包含可折叠侧边栏、顶部页头、内容区和页脚。"}}},render:()=>e.jsxs(s,{className:"min-h-[400px]",children:[e.jsxs(c,{collapsible:!0,children:[e.jsx("div",{className:"h-16 flex items-center justify-center text-white font-bold text-lg",children:"simplUI"}),e.jsxs(l,{mode:"vertical",defaultSelectedKey:"1",children:[e.jsx(t,{itemKey:"1",icon:e.jsx(L,{className:"h-4 w-4"}),children:"导航一"}),e.jsx(t,{itemKey:"2",icon:e.jsx(x,{className:"h-4 w-4"}),children:"导航二"}),e.jsx(t,{itemKey:"3",icon:e.jsx(U,{className:"h-4 w-4"}),children:"导航三"}),e.jsx(t,{itemKey:"4",icon:e.jsx(Be,{className:"h-4 w-4"}),children:"导航四"})]})]}),e.jsxs(s,{children:[e.jsx(o,{children:"页头"}),e.jsxs(a,{className:"m-6 p-6 bg-white rounded-lg min-h-[280px]",children:[e.jsx(B,{items:[{title:"首页"},{title:"列表"},{title:"应用"}]}),e.jsx("div",{className:"mt-4",children:"内容区域"})]}),e.jsx(p,{children:"simplUI ©2026 Created by simplUI"})]})]})},g={parameters:{docs:{description:{story:"最基本的上-中-下布局，顶部为导航栏，中间为内容区，底部为页脚。"}}},render:()=>e.jsxs(s,{className:"min-h-[400px]",children:[e.jsxs(o,{children:[e.jsx("div",{className:"font-bold text-lg text-white mr-12",children:"simplUI"}),e.jsxs(l,{mode:"horizontal",defaultSelectedKey:"2",className:"flex-1 border-none bg-transparent",children:[e.jsx(t,{itemKey:"1",children:"导航一"}),e.jsx(t,{itemKey:"2",children:"导航二"}),e.jsx(t,{itemKey:"3",children:"导航三"})]})]}),e.jsxs(a,{className:"px-12 py-6",children:[e.jsx(B,{className:"mb-4",items:[{title:"首页"},{title:"列表"},{title:"应用"}]}),e.jsxs(s,{className:"bg-white rounded-lg p-6 min-h-[280px]",children:[e.jsx(c,{theme:"light",width:200,children:e.jsxs(l,{mode:"vertical",defaultSelectedKey:"1",children:[e.jsxs(h,{itemKey:"sub1",title:"子导航一",icon:e.jsx(x,{className:"h-4 w-4"}),children:[e.jsx(t,{itemKey:"option1",children:"选项一"}),e.jsx(t,{itemKey:"option2",children:"选项二"}),e.jsx(t,{itemKey:"option3",children:"选项三"}),e.jsx(t,{itemKey:"option4",children:"选项四"})]}),e.jsx(h,{itemKey:"sub2",title:"子导航二",icon:e.jsx(W,{className:"h-4 w-4"}),children:e.jsx(t,{itemKey:"option5",children:"选项五"})}),e.jsx(h,{itemKey:"sub3",title:"子导航三",icon:e.jsx(E,{className:"h-4 w-4"}),children:e.jsx(t,{itemKey:"option6",children:"选项六"})})]})}),e.jsx(a,{className:"px-6",children:"内容区域"})]})]}),e.jsx(p,{children:"simplUI ©2026 Created by simplUI"})]})},M={parameters:{docs:{description:{story:"同时拥有顶部导航和侧边栏的布局，适用于功能模块较多的后台系统。"}}},render:()=>e.jsxs(s,{className:"min-h-[400px]",children:[e.jsxs(o,{children:[e.jsx("div",{className:"font-bold text-lg text-white mr-12",children:"simplUI"}),e.jsxs(l,{mode:"horizontal",defaultSelectedKey:"1",className:"flex-1 border-none bg-transparent",children:[e.jsx(t,{itemKey:"1",children:"导航一"}),e.jsx(t,{itemKey:"2",children:"导航二"}),e.jsx(t,{itemKey:"3",children:"导航三"})]})]}),e.jsxs(s,{hasSider:!0,children:[e.jsx(c,{theme:"light",children:e.jsxs(l,{mode:"vertical",defaultSelectedKey:"1",children:[e.jsxs(h,{itemKey:"sub1",title:"子导航一",icon:e.jsx(x,{className:"h-4 w-4"}),children:[e.jsx(t,{itemKey:"option1",children:"选项一"}),e.jsx(t,{itemKey:"option2",children:"选项二"}),e.jsx(t,{itemKey:"option3",children:"选项三"}),e.jsx(t,{itemKey:"option4",children:"选项四"})]}),e.jsx(h,{itemKey:"sub2",title:"子导航二",icon:e.jsx(W,{className:"h-4 w-4"}),children:e.jsx(t,{itemKey:"option5",children:"选项五"})}),e.jsx(h,{itemKey:"sub3",title:"子导航三",icon:e.jsx(E,{className:"h-4 w-4"}),children:e.jsx(t,{itemKey:"option6",children:"选项六"})})]})}),e.jsx(s,{children:e.jsxs(a,{className:"px-6 py-6 min-h-[280px]",children:[e.jsx(B,{className:"mb-4",items:[{title:"首页"},{title:"列表"},{title:"应用"}]}),e.jsx("div",{className:"bg-white rounded-lg p-6 min-h-[200px]",children:"内容区域"})]})})]})]})},I={parameters:{docs:{description:{story:"顶部-侧边布局的通栏版本，内容区域两边不留边距，视觉更紧凑。"}}},render:()=>e.jsxs(s,{className:"min-h-[400px]",children:[e.jsxs(o,{children:[e.jsx("div",{className:"font-bold text-lg text-white mr-12",children:"simplUI"}),e.jsxs(l,{mode:"horizontal",defaultSelectedKey:"1",className:"flex-1 border-none bg-transparent",children:[e.jsx(t,{itemKey:"1",children:"导航一"}),e.jsx(t,{itemKey:"2",children:"导航二"}),e.jsx(t,{itemKey:"3",children:"导航三"})]})]}),e.jsxs(s,{hasSider:!0,children:[e.jsx(c,{children:e.jsxs(l,{mode:"vertical",defaultSelectedKey:"1",children:[e.jsxs(h,{itemKey:"sub1",title:"子导航一",icon:e.jsx(x,{className:"h-4 w-4"}),children:[e.jsx(t,{itemKey:"option1",children:"选项一"}),e.jsx(t,{itemKey:"option2",children:"选项二"}),e.jsx(t,{itemKey:"option3",children:"选项三"}),e.jsx(t,{itemKey:"option4",children:"选项四"})]}),e.jsx(h,{itemKey:"sub2",title:"子导航二",icon:e.jsx(W,{className:"h-4 w-4"}),children:e.jsx(t,{itemKey:"option5",children:"选项五"})}),e.jsx(h,{itemKey:"sub3",title:"子导航三",icon:e.jsx(E,{className:"h-4 w-4"}),children:e.jsx(t,{itemKey:"option6",children:"选项六"})})]})}),e.jsx(s,{children:e.jsxs(a,{className:"px-6 py-6 min-h-[280px]",children:[e.jsx(B,{className:"mb-4",items:[{title:"首页"},{title:"列表"},{title:"应用"}]}),e.jsx("div",{className:"bg-white rounded-lg p-6 min-h-[200px]",children:"内容区域"})]})})]})]})},K={parameters:{docs:{description:{story:"侧边两列式布局，侧边栏支持折叠收起，适合导航项较少的场景。"}}},render:()=>e.jsxs(s,{hasSider:!0,className:"min-h-[400px]",children:[e.jsxs(c,{collapsible:!0,children:[e.jsx("div",{className:"h-16 flex items-center justify-center text-white font-bold text-lg",children:"simplUI"}),e.jsxs(l,{mode:"vertical",defaultSelectedKey:"1",children:[e.jsx(t,{itemKey:"1",icon:e.jsx(L,{className:"h-4 w-4"}),children:"导航一"}),e.jsx(t,{itemKey:"2",icon:e.jsx(x,{className:"h-4 w-4"}),children:"导航二"}),e.jsx(t,{itemKey:"3",icon:e.jsx(U,{className:"h-4 w-4"}),children:"导航三"})]})]}),e.jsxs(s,{children:[e.jsx(o,{children:"页头"}),e.jsx(a,{className:"m-6 p-6 bg-white rounded-lg min-h-[280px]",children:"内容区域"}),e.jsx(p,{children:"simplUI ©2026 Created by simplUI"})]})]})},w={render:()=>{const[i,n]=r.useState(!1);return e.jsxs(s,{hasSider:!0,className:"min-h-[400px]",children:[e.jsxs(c,{collapsible:!0,collapsed:i,onCollapse:n,trigger:null,children:[e.jsx("div",{className:`h-16 flex items-center text-white font-bold text-lg ${i?"justify-center px-2":"justify-center px-6"}`,children:i?"S":"simplUI"}),e.jsxs(l,{mode:"vertical",defaultSelectedKey:"1",children:[e.jsx(t,{itemKey:"1",icon:e.jsx(L,{className:"h-4 w-4"}),children:"导航一"}),e.jsx(t,{itemKey:"2",icon:e.jsx(x,{className:"h-4 w-4"}),children:"导航二"}),e.jsx(t,{itemKey:"3",icon:e.jsx(U,{className:"h-4 w-4"}),children:"导航三"}),e.jsx(t,{itemKey:"4",icon:e.jsx(Be,{className:"h-4 w-4"}),children:"导航四"})]})]}),e.jsxs(s,{children:[e.jsx(o,{className:"flex items-center justify-between",children:e.jsx(et,{onClick:()=>n(!i),className:"text-white/85 hover:text-white bg-transparent border border-white/20 hover:border-white/40",children:e.jsx(tt,{className:"h-4 w-4"})})}),e.jsx(a,{className:"m-6 p-6 bg-white rounded-lg min-h-[280px]",children:"内容区域"}),e.jsx(p,{children:"simplUI ©2026 Created by simplUI"})]})]})}},v={parameters:{docs:{description:{story:"配置 breakpoint 属性，当浏览器宽度小于指定断点时侧边栏自动收起。"}}},render:()=>e.jsxs(s,{hasSider:!0,className:"min-h-[400px]",children:[e.jsxs(c,{breakpoint:"lg",collapsedWidth:0,collapsible:!0,children:[e.jsx("div",{className:"h-16 flex items-center justify-center text-white font-bold text-lg",children:"simplUI"}),e.jsxs(l,{mode:"vertical",defaultSelectedKey:"1",children:[e.jsx(t,{itemKey:"1",icon:e.jsx(L,{className:"h-4 w-4"}),children:"导航一"}),e.jsx(t,{itemKey:"2",icon:e.jsx(x,{className:"h-4 w-4"}),children:"导航二"}),e.jsx(t,{itemKey:"3",icon:e.jsx(U,{className:"h-4 w-4"}),children:"导航三"})]})]}),e.jsxs(s,{children:[e.jsx(o,{children:"页头"}),e.jsx(a,{className:"m-6 p-6 bg-white rounded-lg min-h-[280px]",children:e.jsx("p",{children:"调整浏览器宽度至 992px 以下，侧边栏会自动收起"})}),e.jsx(p,{children:"simplUI ©2026 Created by simplUI"})]})]})},S={parameters:{docs:{description:{story:"使用 sticky 定位固定顶部导航，滚动页面时页头始终保持在视口顶部。"}}},render:()=>e.jsxs(s,{className:"min-h-[500px]",children:[e.jsxs(o,{className:"sticky top-0 z-10",children:[e.jsx("div",{className:"font-bold text-lg text-white mr-12",children:"simplUI"}),e.jsxs(l,{mode:"horizontal",defaultSelectedKey:"1",className:"flex-1 border-none bg-transparent",children:[e.jsx(t,{itemKey:"1",children:"导航一"}),e.jsx(t,{itemKey:"2",children:"导航二"}),e.jsx(t,{itemKey:"3",children:"导航三"})]})]}),e.jsx(a,{className:"px-12 py-6",children:e.jsxs("div",{className:"bg-white rounded-lg p-6",children:[e.jsx("p",{children:"固定头部内容"}),e.jsx("div",{style:{height:200},children:"占位内容"}),e.jsx("div",{style:{height:200},children:"占位内容"}),e.jsx("div",{style:{height:200},children:"占位内容"})]})}),e.jsx(p,{children:"simplUI ©2026 Created by simplUI"})]})},C={parameters:{docs:{description:{story:"当内容区域较长时，使用 sticky 固定侧边栏，方便随时进行导航操作。"}}},render:()=>e.jsxs(s,{hasSider:!0,className:"min-h-[500px]",children:[e.jsxs(c,{className:"sticky top-0 h-screen",children:[e.jsx("div",{className:"h-16 flex items-center justify-center text-white font-bold text-lg",children:"simplUI"}),e.jsxs(l,{mode:"vertical",defaultSelectedKey:"1",children:[e.jsx(t,{itemKey:"1",icon:e.jsx(L,{className:"h-4 w-4"}),children:"导航一"}),e.jsx(t,{itemKey:"2",icon:e.jsx(x,{className:"h-4 w-4"}),children:"导航二"}),e.jsx(t,{itemKey:"3",icon:e.jsx(U,{className:"h-4 w-4"}),children:"导航三"})]})]}),e.jsxs(s,{children:[e.jsx(o,{children:"页头"}),e.jsx(a,{className:"px-12 py-6",children:e.jsxs("div",{className:"bg-white rounded-lg p-6",children:[e.jsx("p",{children:"固定侧边栏内容"}),e.jsx("div",{style:{height:200},children:"占位内容"}),e.jsx("div",{style:{height:200},children:"占位内容"}),e.jsx("div",{style:{height:200},children:"占位内容"}),e.jsx("div",{style:{height:200},children:"占位内容"})]})}),e.jsx(p,{children:"simplUI ©2026 Created by simplUI"})]})]})};var P,$,O,D,G;N.parameters={...N.parameters,docs:{...(P=N.parameters)==null?void 0:P.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '典型的后台管理布局，包含可折叠侧边栏、顶部页头、内容区和页脚。'
      }
    }
  },
  render: () => <Layout className="min-h-[400px]">
      <Sider collapsible>
        <div className="h-16 flex items-center justify-center text-white font-bold text-lg">
          simplUI
        </div>
        <Menu mode="vertical" defaultSelectedKey="1">
          <MenuItem itemKey="1" icon={<Home className="h-4 w-4" />}>导航一</MenuItem>
          <MenuItem itemKey="2" icon={<User className="h-4 w-4" />}>导航二</MenuItem>
          <MenuItem itemKey="3" icon={<FileText className="h-4 w-4" />}>导航三</MenuItem>
          <MenuItem itemKey="4" icon={<Settings className="h-4 w-4" />}>导航四</MenuItem>
        </Menu>
      </Sider>
      <Layout>
        <Header>页头</Header>
        <Content className="m-6 p-6 bg-white rounded-lg min-h-[280px]">
          <Breadcrumb items={[{
          title: '首页'
        }, {
          title: '列表'
        }, {
          title: '应用'
        }]} />
          <div className="mt-4">内容区域</div>
        </Content>
        <Footer>simplUI ©2026 Created by simplUI</Footer>
      </Layout>
    </Layout>
}`,...(O=($=N.parameters)==null?void 0:$.docs)==null?void 0:O.source},description:{story:"基本结构 - 典型的页面布局",...(G=(D=N.parameters)==null?void 0:D.docs)==null?void 0:G.description}}};var J,Q,X,Y,Z;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '最基本的上-中-下布局，顶部为导航栏，中间为内容区，底部为页脚。'
      }
    }
  },
  render: () => <Layout className="min-h-[400px]">
      <Header>
        <div className="font-bold text-lg text-white mr-12">simplUI</div>
        <Menu mode="horizontal" defaultSelectedKey="2" className="flex-1 border-none bg-transparent">
          <MenuItem itemKey="1">导航一</MenuItem>
          <MenuItem itemKey="2">导航二</MenuItem>
          <MenuItem itemKey="3">导航三</MenuItem>
        </Menu>
      </Header>
      <Content className="px-12 py-6">
        <Breadcrumb className="mb-4" items={[{
        title: '首页'
      }, {
        title: '列表'
      }, {
        title: '应用'
      }]} />
        <Layout className="bg-white rounded-lg p-6 min-h-[280px]">
          <Sider theme="light" width={200}>
            <Menu mode="vertical" defaultSelectedKey="1">
              <SubMenu itemKey="sub1" title="子导航一" icon={<User className="h-4 w-4" />}>
                <MenuItem itemKey="option1">选项一</MenuItem>
                <MenuItem itemKey="option2">选项二</MenuItem>
                <MenuItem itemKey="option3">选项三</MenuItem>
                <MenuItem itemKey="option4">选项四</MenuItem>
              </SubMenu>
              <SubMenu itemKey="sub2" title="子导航二" icon={<Monitor className="h-4 w-4" />}>
                <MenuItem itemKey="option5">选项五</MenuItem>
              </SubMenu>
              <SubMenu itemKey="sub3" title="子导航三" icon={<Bell className="h-4 w-4" />}>
                <MenuItem itemKey="option6">选项六</MenuItem>
              </SubMenu>
            </Menu>
          </Sider>
          <Content className="px-6">内容区域</Content>
        </Layout>
      </Content>
      <Footer>simplUI ©2026 Created by simplUI</Footer>
    </Layout>
}`,...(X=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:X.source},description:{story:"上中下布局 - 最基本的上-中-下布局",...(Z=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:Z.description}}};var ee,te,se,ie,re;M.parameters={...M.parameters,docs:{...(ee=M.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '同时拥有顶部导航和侧边栏的布局，适用于功能模块较多的后台系统。'
      }
    }
  },
  render: () => <Layout className="min-h-[400px]">
      <Header>
        <div className="font-bold text-lg text-white mr-12">simplUI</div>
        <Menu mode="horizontal" defaultSelectedKey="1" className="flex-1 border-none bg-transparent">
          <MenuItem itemKey="1">导航一</MenuItem>
          <MenuItem itemKey="2">导航二</MenuItem>
          <MenuItem itemKey="3">导航三</MenuItem>
        </Menu>
      </Header>
      <Layout hasSider>
        <Sider theme="light">
          <Menu mode="vertical" defaultSelectedKey="1">
            <SubMenu itemKey="sub1" title="子导航一" icon={<User className="h-4 w-4" />}>
              <MenuItem itemKey="option1">选项一</MenuItem>
              <MenuItem itemKey="option2">选项二</MenuItem>
              <MenuItem itemKey="option3">选项三</MenuItem>
              <MenuItem itemKey="option4">选项四</MenuItem>
            </SubMenu>
            <SubMenu itemKey="sub2" title="子导航二" icon={<Monitor className="h-4 w-4" />}>
              <MenuItem itemKey="option5">选项五</MenuItem>
            </SubMenu>
            <SubMenu itemKey="sub3" title="子导航三" icon={<Bell className="h-4 w-4" />}>
              <MenuItem itemKey="option6">选项六</MenuItem>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Content className="px-6 py-6 min-h-[280px]">
            <Breadcrumb className="mb-4" items={[{
            title: '首页'
          }, {
            title: '列表'
          }, {
            title: '应用'
          }]} />
            <div className="bg-white rounded-lg p-6 min-h-[200px]">内容区域</div>
          </Content>
        </Layout>
      </Layout>
    </Layout>
}`,...(se=(te=M.parameters)==null?void 0:te.docs)==null?void 0:se.source},description:{story:"顶部-侧边布局 - 拥有顶部导航及侧边栏的页面",...(re=(ie=M.parameters)==null?void 0:ie.docs)==null?void 0:re.description}}};var ae,ne,le,oe,de;I.parameters={...I.parameters,docs:{...(ae=I.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '顶部-侧边布局的通栏版本，内容区域两边不留边距，视觉更紧凑。'
      }
    }
  },
  render: () => <Layout className="min-h-[400px]">
      <Header>
        <div className="font-bold text-lg text-white mr-12">simplUI</div>
        <Menu mode="horizontal" defaultSelectedKey="1" className="flex-1 border-none bg-transparent">
          <MenuItem itemKey="1">导航一</MenuItem>
          <MenuItem itemKey="2">导航二</MenuItem>
          <MenuItem itemKey="3">导航三</MenuItem>
        </Menu>
      </Header>
      <Layout hasSider>
        <Sider>
          <Menu mode="vertical" defaultSelectedKey="1">
            <SubMenu itemKey="sub1" title="子导航一" icon={<User className="h-4 w-4" />}>
              <MenuItem itemKey="option1">选项一</MenuItem>
              <MenuItem itemKey="option2">选项二</MenuItem>
              <MenuItem itemKey="option3">选项三</MenuItem>
              <MenuItem itemKey="option4">选项四</MenuItem>
            </SubMenu>
            <SubMenu itemKey="sub2" title="子导航二" icon={<Monitor className="h-4 w-4" />}>
              <MenuItem itemKey="option5">选项五</MenuItem>
            </SubMenu>
            <SubMenu itemKey="sub3" title="子导航三" icon={<Bell className="h-4 w-4" />}>
              <MenuItem itemKey="option6">选项六</MenuItem>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Content className="px-6 py-6 min-h-[280px]">
            <Breadcrumb className="mb-4" items={[{
            title: '首页'
          }, {
            title: '列表'
          }, {
            title: '应用'
          }]} />
            <div className="bg-white rounded-lg p-6 min-h-[200px]">内容区域</div>
          </Content>
        </Layout>
      </Layout>
    </Layout>
}`,...(le=(ne=I.parameters)==null?void 0:ne.docs)==null?void 0:le.source},description:{story:"顶部-侧边布局-通栏 - 两边未留边距",...(de=(oe=I.parameters)==null?void 0:oe.docs)==null?void 0:de.description}}};var me,ce,ue,pe,he;K.parameters={...K.parameters,docs:{...(me=K.parameters)==null?void 0:me.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '侧边两列式布局，侧边栏支持折叠收起，适合导航项较少的场景。'
      }
    }
  },
  render: () => <Layout hasSider className="min-h-[400px]">
      <Sider collapsible>
        <div className="h-16 flex items-center justify-center text-white font-bold text-lg">
          simplUI
        </div>
        <Menu mode="vertical" defaultSelectedKey="1">
          <MenuItem itemKey="1" icon={<Home className="h-4 w-4" />}>导航一</MenuItem>
          <MenuItem itemKey="2" icon={<User className="h-4 w-4" />}>导航二</MenuItem>
          <MenuItem itemKey="3" icon={<FileText className="h-4 w-4" />}>导航三</MenuItem>
        </Menu>
      </Sider>
      <Layout>
        <Header>页头</Header>
        <Content className="m-6 p-6 bg-white rounded-lg min-h-[280px]">
          内容区域
        </Content>
        <Footer>simplUI ©2026 Created by simplUI</Footer>
      </Layout>
    </Layout>
}`,...(ue=(ce=K.parameters)==null?void 0:ce.docs)==null?void 0:ue.source},description:{story:"侧边布局 - 侧边两列式布局，可收起",...(he=(pe=K.parameters)==null?void 0:pe.docs)==null?void 0:he.description}}};var xe,ye,je,fe,be;w.parameters={...w.parameters,docs:{...(xe=w.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  render: () => {
    const [collapsed, setCollapsed] = useState(false);
    return <Layout hasSider className="min-h-[400px]">
        <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed} trigger={null}>
          <div className={\`h-16 flex items-center text-white font-bold text-lg \${collapsed ? 'justify-center px-2' : 'justify-center px-6'}\`}>
            {collapsed ? 'S' : 'simplUI'}
          </div>
          <Menu mode="vertical" defaultSelectedKey="1">
            <MenuItem itemKey="1" icon={<Home className="h-4 w-4" />}>导航一</MenuItem>
            <MenuItem itemKey="2" icon={<User className="h-4 w-4" />}>导航二</MenuItem>
            <MenuItem itemKey="3" icon={<FileText className="h-4 w-4" />}>导航三</MenuItem>
            <MenuItem itemKey="4" icon={<Settings className="h-4 w-4" />}>导航四</MenuItem>
          </Menu>
        </Sider>
        <Layout>
          <Header className="flex items-center justify-between">
            <Button onClick={() => setCollapsed(!collapsed)} className="text-white/85 hover:text-white bg-transparent border border-white/20 hover:border-white/40">
              <MenuIcon className="h-4 w-4" />
            </Button>
          </Header>
          <Content className="m-6 p-6 bg-white rounded-lg min-h-[280px]">
            内容区域
          </Content>
          <Footer>simplUI ©2026 Created by simplUI</Footer>
        </Layout>
      </Layout>;
  }
}`,...(je=(ye=w.parameters)==null?void 0:ye.docs)==null?void 0:je.source},description:{story:"自定义触发器 - 使用 trigger={null} 隐藏默认触发器",...(be=(fe=w.parameters)==null?void 0:fe.docs)==null?void 0:be.description}}};var Ne,ge,Me,Ie,Ke;v.parameters={...v.parameters,docs:{...(Ne=v.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '配置 breakpoint 属性，当浏览器宽度小于指定断点时侧边栏自动收起。'
      }
    }
  },
  render: () => <Layout hasSider className="min-h-[400px]">
      <Sider breakpoint="lg" collapsedWidth={0} collapsible>
        <div className="h-16 flex items-center justify-center text-white font-bold text-lg">
          simplUI
        </div>
        <Menu mode="vertical" defaultSelectedKey="1">
          <MenuItem itemKey="1" icon={<Home className="h-4 w-4" />}>导航一</MenuItem>
          <MenuItem itemKey="2" icon={<User className="h-4 w-4" />}>导航二</MenuItem>
          <MenuItem itemKey="3" icon={<FileText className="h-4 w-4" />}>导航三</MenuItem>
        </Menu>
      </Sider>
      <Layout>
        <Header>页头</Header>
        <Content className="m-6 p-6 bg-white rounded-lg min-h-[280px]">
          <p>调整浏览器宽度至 992px 以下，侧边栏会自动收起</p>
        </Content>
        <Footer>simplUI ©2026 Created by simplUI</Footer>
      </Layout>
    </Layout>
}`,...(Me=(ge=v.parameters)==null?void 0:ge.docs)==null?void 0:Me.source},description:{story:"响应式布局 - 配置 breakpoint 属性实现响应式",...(Ke=(Ie=v.parameters)==null?void 0:Ie.docs)==null?void 0:Ke.description}}};var we,ve,Se,Ce,Le;S.parameters={...S.parameters,docs:{...(we=S.parameters)==null?void 0:we.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '使用 sticky 定位固定顶部导航，滚动页面时页头始终保持在视口顶部。'
      }
    }
  },
  render: () => <Layout className="min-h-[500px]">
      <Header className="sticky top-0 z-10">
        <div className="font-bold text-lg text-white mr-12">simplUI</div>
        <Menu mode="horizontal" defaultSelectedKey="1" className="flex-1 border-none bg-transparent">
          <MenuItem itemKey="1">导航一</MenuItem>
          <MenuItem itemKey="2">导航二</MenuItem>
          <MenuItem itemKey="3">导航三</MenuItem>
        </Menu>
      </Header>
      <Content className="px-12 py-6">
        <div className="bg-white rounded-lg p-6">
          <p>固定头部内容</p>
          <div style={{
          height: 200
        }}>占位内容</div>
          <div style={{
          height: 200
        }}>占位内容</div>
          <div style={{
          height: 200
        }}>占位内容</div>
        </div>
      </Content>
      <Footer>simplUI ©2026 Created by simplUI</Footer>
    </Layout>
}`,...(Se=(ve=S.parameters)==null?void 0:ve.docs)==null?void 0:Se.source},description:{story:"固定头部 - 使用 sticky 固定顶部导航",...(Le=(Ce=S.parameters)==null?void 0:Ce.docs)==null?void 0:Le.description}}};var Ue,ke,Te,He,Fe;C.parameters={...C.parameters,docs:{...(Ue=C.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '当内容区域较长时，使用 sticky 固定侧边栏，方便随时进行导航操作。'
      }
    }
  },
  render: () => <Layout hasSider className="min-h-[500px]">
      <Sider className="sticky top-0 h-screen">
        <div className="h-16 flex items-center justify-center text-white font-bold text-lg">
          simplUI
        </div>
        <Menu mode="vertical" defaultSelectedKey="1">
          <MenuItem itemKey="1" icon={<Home className="h-4 w-4" />}>导航一</MenuItem>
          <MenuItem itemKey="2" icon={<User className="h-4 w-4" />}>导航二</MenuItem>
          <MenuItem itemKey="3" icon={<FileText className="h-4 w-4" />}>导航三</MenuItem>
        </Menu>
      </Sider>
      <Layout>
        <Header>页头</Header>
        <Content className="px-12 py-6">
          <div className="bg-white rounded-lg p-6">
            <p>固定侧边栏内容</p>
            <div style={{
            height: 200
          }}>占位内容</div>
            <div style={{
            height: 200
          }}>占位内容</div>
            <div style={{
            height: 200
          }}>占位内容</div>
            <div style={{
            height: 200
          }}>占位内容</div>
          </div>
        </Content>
        <Footer>simplUI ©2026 Created by simplUI</Footer>
      </Layout>
    </Layout>
}`,...(Te=(ke=C.parameters)==null?void 0:ke.docs)==null?void 0:Te.source},description:{story:"固定侧边栏 - 当内容较长时使用固定侧边栏",...(Fe=(He=C.parameters)==null?void 0:He.docs)==null?void 0:Fe.description}}};const It=["Basic","Top","TopSide","TopSide2","Side","CustomTrigger","Responsive","Fixed","FixedSider"];export{N as Basic,w as CustomTrigger,S as Fixed,C as FixedSider,v as Responsive,K as Side,g as Top,M as TopSide,I as TopSide2,It as __namedExportsOrder,Mt as default};
