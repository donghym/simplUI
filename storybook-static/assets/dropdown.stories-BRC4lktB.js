import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r}from"./index-GiUgBvb1.js";import{a as y}from"./utils-BEhiKRD9.js";import{c as L}from"./index-C08JwjkN.js";import{B as d}from"./index-WhxK0hy4.js";import{T as be}from"./trash-2-C9wkjJ6S.js";import{c as ve}from"./createLucideIcon-CZe00VV7.js";import{C as q}from"./copy-DgomLDo4.js";import{C as Me}from"./chevron-right-V463yFHa.js";import{F as Te,I as Se}from"./image-DxP-mU61.js";import{F as z,S as O}from"./settings-BwcfsIuO.js";import{U as ke}from"./user-CXa3gJrY.js";import"./loader-circle-CulI208u.js";/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ce=ve("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V=ve("SquarePen",[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]]),Re=L("relative inline-block"),Be=L("absolute z-50 min-w-[120px] rounded-md border border-border bg-background shadow-lg py-1",{variants:{placement:{bottom:"top-full left-1/2 -translate-x-1/2 mt-2",bottomLeft:"top-full left-0 mt-2",bottomRight:"top-full right-0 mt-2",top:"bottom-full left-1/2 -translate-x-1/2 mb-2",topLeft:"bottom-full left-0 mb-2",topRight:"bottom-full right-0 mb-2"}},defaultVariants:{placement:"bottomLeft"}}),Le=L("cursor-pointer px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors select-none flex items-center gap-2",{variants:{disabled:{true:"opacity-50 cursor-not-allowed pointer-events-none",false:""},destructive:{true:"text-danger-500 hover:bg-danger-50/50",false:""}},defaultVariants:{disabled:!1,destructive:!1}}),s=r.forwardRef(({children:t,menu:n,placement:u="bottomLeft",open:c,onOpenChange:w,defaultOpen:D=!1,disabled:x=!1,className:k},l)=>{const j=r.useRef(null),E=r.useRef(null),Ie=r.useCallback(i=>{j.current=i,typeof l=="function"?l(i):l&&(l.current=i)},[l]),C=c!==void 0,[ge,Ne]=r.useState(D),p=C?c:ge,h=r.useCallback(i=>{C||Ne(i),w==null||w(i)},[C,w]),Ke=r.useCallback(()=>{x||h(!p)},[x,p,h]),R=r.useCallback(i=>{var P,F;if(!p)return;const _=i.target;(P=j.current)!=null&&P.contains(_)||(F=E.current)!=null&&F.contains(_)||h(!1)},[p,h]),B=r.useCallback(i=>{i.key==="Escape"&&p&&h(!1)},[p,h]);return r.useEffect(()=>(document.addEventListener("mousedown",R),document.addEventListener("keydown",B),()=>{document.removeEventListener("mousedown",R),document.removeEventListener("keydown",B)}),[R,B]),e.jsxs("div",{ref:Ie,className:y(Re(),k),onClick:Ke,"aria-haspopup":"menu","aria-expanded":p,children:[t,p&&n&&e.jsx("div",{ref:E,role:"menu",tabIndex:-1,className:y(Be({placement:u})),children:n})]})});s.displayName="Dropdown";const a=r.forwardRef(({children:t,className:n},u)=>e.jsx("div",{ref:u,className:y("flex flex-col",n),children:t}));a.displayName="DropdownMenu";const o=r.forwardRef(({itemKey:t,children:n,icon:u,disabled:c=!1,destructive:w=!1,onClick:D,className:x},k)=>{const l=j=>{if(c){j.preventDefault();return}D==null||D(t)};return e.jsxs("div",{ref:k,role:"menuitem",tabIndex:c?-1:0,className:y(Le({disabled:c,destructive:w}),x),onClick:l,"aria-disabled":c||void 0,children:[u&&e.jsx("span",{"aria-hidden":"true",children:u}),n]})});o.displayName="DropdownItem";const m=r.forwardRef(({className:t},n)=>e.jsx("div",{ref:n,role:"separator","aria-orientation":"horizontal",className:y("h-px bg-border my-1",t)}));m.displayName="DropdownDivider";Object.assign(s,{Menu:a,Item:o,Divider:m});s.__docgenInfo={description:`Dropdown 下拉菜单

点击触发元素后弹出菜单列表，支持受控和非受控两种模式。
点击菜单外部或按 ESC 键可关闭菜单。`,methods:[],displayName:"Dropdown",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"触发元素，Dropdown 会包裹此子元素作为触发区域"},menu:{required:!1,tsType:{name:"ReactNode"},description:"下拉菜单内容，通常为 DropdownMenu 组件"},placement:{required:!1,tsType:{name:"union",raw:"'bottom' | 'bottomLeft' | 'bottomRight' | 'top' | 'topLeft' | 'topRight'",elements:[{name:"literal",value:"'bottom'"},{name:"literal",value:"'bottomLeft'"},{name:"literal",value:"'bottomRight'"},{name:"literal",value:"'top'"},{name:"literal",value:"'topLeft'"},{name:"literal",value:"'topRight'"}]},description:"弹出位置，相对触发元素的方位，默认 'bottomLeft'",defaultValue:{value:"'bottomLeft'",computed:!1}},open:{required:!1,tsType:{name:"boolean"},description:"是否可见（受控模式），传入时接管 open 状态"},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:"可见性变化回调（受控模式），在弹出/关闭时触发"},defaultOpen:{required:!1,tsType:{name:"boolean"},description:"默认是否可见（非受控模式），默认 false",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"是否禁用下拉菜单，true 时点击触发元素不会打开菜单",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"自定义类名，通过 cn() 合并到下拉菜单容器上"}},composes:["VariantProps"]};a.__docgenInfo={description:`DropdownMenu 下拉菜单列表

包裹 DropdownItem 和 DropdownDivider 的容器组件。`,methods:[],displayName:"DropdownMenu",props:{children:{required:!1,tsType:{name:"ReactNode"},description:"菜单项列表"},className:{required:!1,tsType:{name:"string"},description:"自定义类名，通过 cn() 合并到菜单容器上"}},composes:["VariantProps"]};o.__docgenInfo={description:`DropdownItem 下拉菜单项

单个可点击的菜单项，支持图标、禁用、破坏性样式。`,methods:[],displayName:"DropdownItem",props:{itemKey:{required:!0,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"菜单项唯一标识"},children:{required:!1,tsType:{name:"ReactNode"},description:"菜单项文本内容"},icon:{required:!1,tsType:{name:"ReactNode"},description:"图标内容，显示在文本左侧"},disabled:{required:!1,tsType:{name:"boolean"},description:"是否禁用，true 时不可点击且视觉降级",defaultValue:{value:"false",computed:!1}},destructive:{required:!1,tsType:{name:"boolean"},description:"是否为破坏性操作样式，true 时文本显示危险色",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(key: DropdownItemKey) => void",signature:{arguments:[{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"key"}],return:{name:"void"}}},description:"点击回调，参数为 itemKey"},className:{required:!1,tsType:{name:"string"},description:"自定义类名，通过 cn() 合并到菜单项上"}},composes:["VariantProps"]};m.__docgenInfo={description:`DropdownDivider 下拉菜单分割线

用于分隔不同类型的菜单项。`,methods:[],displayName:"DropdownDivider",props:{className:{required:!1,tsType:{name:"string"},description:"自定义类名"}}};const qe=t=>e.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"500px",width:"100%"},children:e.jsx(t,{})}),Qe={title:"导航/Dropdown 下拉菜单",component:s,tags:["autodocs"],decorators:[qe],argTypes:{placement:{control:"select",options:["bottom","bottomLeft","bottomRight","top","topLeft","topRight"],description:"弹出位置，相对触发元素的方位，默认 bottomLeft"},disabled:{control:"boolean",description:"是否禁用下拉菜单，true 时点击触发元素不会打开菜单"},open:{control:"boolean",description:"是否可见（受控模式），传入时接管 open 状态"},defaultOpen:{control:"boolean",description:"默认是否可见（非受控模式），默认 false"}},parameters:{layout:"fullscreen",docs:{description:{component:`向下弹出的列表，用于展示一组操作命令。

- 操作集合：用于按钮旁展示更多相关操作，如编辑、复制、删除。
- 用户菜单：用于头像或用户名旁展示个人中心、设置、退出等入口。
- 级联选择：支持嵌套子菜单，用于层级较多的选项展示。`}}}},b={parameters:{docs:{description:{story:"基础下拉菜单，包含编辑、复制等常规操作项和危险操作项，通过分割线区分。"}}},render:()=>e.jsx(s,{menu:e.jsxs(a,{children:[e.jsx(o,{itemKey:"edit",icon:e.jsx(V,{className:"h-4 w-4"}),children:"编辑"}),e.jsx(o,{itemKey:"copy",icon:e.jsx(q,{className:"h-4 w-4"}),children:"复制"}),e.jsx(m,{}),e.jsx(o,{itemKey:"delete",destructive:!0,icon:e.jsx(be,{className:"h-4 w-4"}),children:"删除"})]}),children:e.jsx(d,{children:"点击我"})})},v={render:()=>e.jsx(s,{placement:"top",menu:e.jsxs(a,{children:[e.jsx(o,{itemKey:"1",children:"选项 1"}),e.jsx(o,{itemKey:"2",children:"选项 2"})]}),children:e.jsx(d,{children:"上方位置"})})},I={render:()=>e.jsx(s,{placement:"topRight",menu:e.jsxs(a,{children:[e.jsx(o,{itemKey:"1",children:"选项 1"}),e.jsx(o,{itemKey:"2",children:"选项 2"})]}),children:e.jsx(d,{children:"右上位置"})})},g={render:()=>e.jsx(s,{menu:e.jsxs(a,{children:[e.jsx(o,{itemKey:"settings",icon:e.jsx(O,{className:"h-4 w-4"}),children:"设置"}),e.jsx(o,{itemKey:"profile",icon:e.jsx(ke,{className:"h-4 w-4"}),children:"个人中心"}),e.jsx(m,{}),e.jsx(o,{itemKey:"logout",icon:e.jsx(Ce,{className:"h-4 w-4"}),children:"退出登录"})]}),children:e.jsx(d,{variant:"default",children:"用户菜单"})})},N={parameters:{docs:{description:{story:"带禁用项的下拉菜单，用于某些操作暂时不可用的场景。"}}},render:()=>e.jsx(s,{menu:e.jsxs(a,{children:[e.jsx(o,{itemKey:"1",children:"可用"}),e.jsx(o,{itemKey:"2",disabled:!0,children:"禁用"}),e.jsx(o,{itemKey:"3",children:"可用"})]}),children:e.jsx(d,{children:"带禁用项"})})},K={parameters:{docs:{description:{story:"带危险操作项的示例，通过 destructive 样式突出显示不可逆操作，如删除。"}}},render:()=>e.jsx(s,{menu:e.jsxs(a,{children:[e.jsx(o,{itemKey:"1",children:"普通操作"}),e.jsx(m,{}),e.jsx(o,{itemKey:"delete",destructive:!0,icon:e.jsx(be,{className:"h-4 w-4"}),children:"永久删除"})]}),children:e.jsx(d,{variant:"default",children:"操作"})})},M={render:()=>e.jsx(s,{disabled:!0,menu:e.jsx(a,{children:e.jsx(o,{itemKey:"1",children:"选项"})}),children:e.jsx(d,{disabled:!0,children:"禁用下拉菜单"})})},T={render:()=>{const[t,n]=r.useState(!1);return e.jsx(s,{open:t,onOpenChange:n,menu:e.jsxs(a,{children:[e.jsx(o,{itemKey:"1",onClick:()=>n(!1),children:"选项 1"}),e.jsx(o,{itemKey:"2",onClick:()=>n(!1),children:"选项 2"})]}),children:e.jsx(d,{children:t?"打开":"关闭"})})}},S={render:()=>e.jsx(s,{menu:e.jsxs(a,{children:[e.jsx(o,{itemKey:"new",icon:e.jsx(V,{className:"h-4 w-4"}),children:"新建文件"}),e.jsx(o,{itemKey:"open",icon:e.jsx(q,{className:"h-4 w-4"}),children:"打开文件"}),e.jsx(m,{}),e.jsx(o,{itemKey:"save",icon:e.jsx(O,{className:"h-4 w-4"}),children:"保存"})]}),children:e.jsx(d,{variant:"primary",children:"操作菜单"})})},f={parameters:{docs:{description:{story:"嵌套子菜单的示例，通过手动控制展开更多层级选项，适用于层级较多的操作场景。"}}},render:()=>{const[t,n]=r.useState(!1);return e.jsx(s,{menu:e.jsxs(a,{children:[e.jsx(o,{itemKey:"new",icon:e.jsx(V,{className:"h-4 w-4"}),children:"新建"}),e.jsx(m,{}),e.jsxs("div",{className:"relative",children:[e.jsxs(o,{itemKey:"new-from",icon:e.jsx(Te,{className:"h-4 w-4"}),onClick:()=>n(!t),children:[e.jsx("span",{className:"flex-1",children:"新建自模板"}),e.jsx(Me,{className:"h-4 w-4"})]}),t&&e.jsxs("div",{className:"absolute left-full top-0 ml-1 min-w-[140px] bg-popover text-popover-foreground border border-border rounded-md shadow-md py-1 z-50",children:[e.jsx(o,{itemKey:"template-doc",icon:e.jsx(z,{className:"h-4 w-4"}),children:"文档模板"}),e.jsx(o,{itemKey:"template-sheet",icon:e.jsx(z,{className:"h-4 w-4"}),children:"表格模板"}),e.jsx(o,{itemKey:"template-slide",icon:e.jsx(Se,{className:"h-4 w-4"}),children:"演示模板"})]})]}),e.jsx(m,{}),e.jsx(o,{itemKey:"open",icon:e.jsx(q,{className:"h-4 w-4"}),children:"打开"}),e.jsx(o,{itemKey:"save",icon:e.jsx(O,{className:"h-4 w-4"}),children:"保存"})]}),children:e.jsx(d,{children:"嵌套菜单"})})}};var W,H,U;b.parameters={...b.parameters,docs:{...(W=b.parameters)==null?void 0:W.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '基础下拉菜单，包含编辑、复制等常规操作项和危险操作项，通过分割线区分。'
      }
    }
  },
  render: () => <Dropdown menu={<DropdownMenu>
          <DropdownItem itemKey="edit" icon={<Edit className="h-4 w-4" />}>编辑</DropdownItem>
          <DropdownItem itemKey="copy" icon={<Copy className="h-4 w-4" />}>复制</DropdownItem>
          <DropdownDivider />
          <DropdownItem itemKey="delete" destructive icon={<Trash2 className="h-4 w-4" />}>删除</DropdownItem>
        </DropdownMenu>}>
      <Button>点击我</Button>
    </Dropdown>
}`,...(U=(H=b.parameters)==null?void 0:H.docs)==null?void 0:U.source}}};var A,G,J;v.parameters={...v.parameters,docs:{...(A=v.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <Dropdown placement="top" menu={<DropdownMenu>
          <DropdownItem itemKey="1">选项 1</DropdownItem>
          <DropdownItem itemKey="2">选项 2</DropdownItem>
        </DropdownMenu>}>
      <Button>上方位置</Button>
    </Dropdown>
}`,...(J=(G=v.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var Q,X,Y;I.parameters={...I.parameters,docs:{...(Q=I.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <Dropdown placement="topRight" menu={<DropdownMenu>
          <DropdownItem itemKey="1">选项 1</DropdownItem>
          <DropdownItem itemKey="2">选项 2</DropdownItem>
        </DropdownMenu>}>
      <Button>右上位置</Button>
    </Dropdown>
}`,...(Y=(X=I.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,ee;g.parameters={...g.parameters,docs:{...(Z=g.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => <Dropdown menu={<DropdownMenu>
          <DropdownItem itemKey="settings" icon={<Settings className="h-4 w-4" />}>设置</DropdownItem>
          <DropdownItem itemKey="profile" icon={<User className="h-4 w-4" />}>个人中心</DropdownItem>
          <DropdownDivider />
          <DropdownItem itemKey="logout" icon={<LogOut className="h-4 w-4" />}>退出登录</DropdownItem>
        </DropdownMenu>}>
      <Button variant="default">用户菜单</Button>
    </Dropdown>
}`,...(ee=($=g.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var oe,te,re;N.parameters={...N.parameters,docs:{...(oe=N.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '带禁用项的下拉菜单，用于某些操作暂时不可用的场景。'
      }
    }
  },
  render: () => <Dropdown menu={<DropdownMenu>
          <DropdownItem itemKey="1">可用</DropdownItem>
          <DropdownItem itemKey="2" disabled>禁用</DropdownItem>
          <DropdownItem itemKey="3">可用</DropdownItem>
        </DropdownMenu>}>
      <Button>带禁用项</Button>
    </Dropdown>
}`,...(re=(te=N.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var ne,se,ae;K.parameters={...K.parameters,docs:{...(ne=K.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '带危险操作项的示例，通过 destructive 样式突出显示不可逆操作，如删除。'
      }
    }
  },
  render: () => <Dropdown menu={<DropdownMenu>
          <DropdownItem itemKey="1">普通操作</DropdownItem>
          <DropdownDivider />
          <DropdownItem itemKey="delete" destructive icon={<Trash2 className="h-4 w-4" />}>永久删除</DropdownItem>
        </DropdownMenu>}>
      <Button variant="default">操作</Button>
    </Dropdown>
}`,...(ae=(se=K.parameters)==null?void 0:se.docs)==null?void 0:ae.source}}};var ie,de,me;M.parameters={...M.parameters,docs:{...(ie=M.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => <Dropdown disabled menu={<DropdownMenu><DropdownItem itemKey="1">选项</DropdownItem></DropdownMenu>}>
      <Button disabled>禁用下拉菜单</Button>
    </Dropdown>
}`,...(me=(de=M.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};var pe,ce,le;T.parameters={...T.parameters,docs:{...(pe=T.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <Dropdown open={open} onOpenChange={setOpen} menu={<DropdownMenu>
            <DropdownItem itemKey="1" onClick={() => setOpen(false)}>选项 1</DropdownItem>
            <DropdownItem itemKey="2" onClick={() => setOpen(false)}>选项 2</DropdownItem>
          </DropdownMenu>}>
        <Button>{open ? '打开' : '关闭'}</Button>
      </Dropdown>;
  }
}`,...(le=(ce=T.parameters)==null?void 0:ce.docs)==null?void 0:le.source}}};var ue,we,he;S.parameters={...S.parameters,docs:{...(ue=S.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: () => <Dropdown menu={<DropdownMenu>
          <DropdownItem itemKey="new" icon={<Edit className="h-4 w-4" />}>新建文件</DropdownItem>
          <DropdownItem itemKey="open" icon={<Copy className="h-4 w-4" />}>打开文件</DropdownItem>
          <DropdownDivider />
          <DropdownItem itemKey="save" icon={<Settings className="h-4 w-4" />}>保存</DropdownItem>
        </DropdownMenu>}>
      <Button variant="primary">操作菜单</Button>
    </Dropdown>
}`,...(he=(we=S.parameters)==null?void 0:we.docs)==null?void 0:he.source}}};var De,fe,ye,xe,je;f.parameters={...f.parameters,docs:{...(De=f.parameters)==null?void 0:De.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '嵌套子菜单的示例，通过手动控制展开更多层级选项，适用于层级较多的操作场景。'
      }
    }
  },
  render: () => {
    const [subOpen, setSubOpen] = useState(false);
    return <Dropdown menu={<DropdownMenu>
            <DropdownItem itemKey="new" icon={<Edit className="h-4 w-4" />}>新建</DropdownItem>
            <DropdownDivider />
            <div className="relative">
              <DropdownItem itemKey="new-from" icon={<Folder className="h-4 w-4" />} onClick={() => setSubOpen(!subOpen)}>
                <span className="flex-1">新建自模板</span>
                <ChevronRight className="h-4 w-4" />
              </DropdownItem>
              {subOpen && <div className="absolute left-full top-0 ml-1 min-w-[140px] bg-popover text-popover-foreground border border-border rounded-md shadow-md py-1 z-50">
                  <DropdownItem itemKey="template-doc" icon={<FileText className="h-4 w-4" />}>文档模板</DropdownItem>
                  <DropdownItem itemKey="template-sheet" icon={<FileText className="h-4 w-4" />}>表格模板</DropdownItem>
                  <DropdownItem itemKey="template-slide" icon={<Image className="h-4 w-4" />}>演示模板</DropdownItem>
                </div>}
            </div>
            <DropdownDivider />
            <DropdownItem itemKey="open" icon={<Copy className="h-4 w-4" />}>打开</DropdownItem>
            <DropdownItem itemKey="save" icon={<Settings className="h-4 w-4" />}>保存</DropdownItem>
          </DropdownMenu>}>
        <Button>嵌套菜单</Button>
      </Dropdown>;
  }
}`,...(ye=(fe=f.parameters)==null?void 0:fe.docs)==null?void 0:ye.source},description:{story:"嵌套子菜单",...(je=(xe=f.parameters)==null?void 0:xe.docs)==null?void 0:je.description}}};const Xe=["Default","PlacementTop","PlacementTopRight","WithIcons","DisabledItem","DangerItem","Disabled","Controlled","WithButton","NestedDropdown"];export{T as Controlled,K as DangerItem,b as Default,M as Disabled,N as DisabledItem,f as NestedDropdown,v as PlacementTop,I as PlacementTopRight,S as WithButton,g as WithIcons,Xe as __namedExportsOrder,Qe as default};
