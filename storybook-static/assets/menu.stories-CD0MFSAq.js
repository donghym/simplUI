import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as E}from"./index-GiUgBvb1.js";import{M as r,a as s,S as l}from"./index-BCiNSAGB.js";import{B as D}from"./index-WhxK0hy4.js";import{H as u}from"./house-DR9pGCa3.js";import{U as B}from"./user-CXa3gJrY.js";import{F as p,S as o}from"./settings-BwcfsIuO.js";import{I as _,F as T}from"./image-DxP-mU61.js";import"./utils-BEhiKRD9.js";import"./index-C08JwjkN.js";import"./chevron-down-CY-YwltC.js";import"./createLucideIcon-CZe00VV7.js";import"./loader-circle-CulI208u.js";const se={title:"导航/Menu 导航菜单",component:r,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`为页面和功能提供导航的菜单列表。

- 顶部导航：用于网站顶部，展示主要页面入口。
- 侧边导航：用于管理后台，展示功能模块，支持折叠收起。
- 内联菜单：用于内容区域内部，支持子菜单展开收起。`}}}},i={parameters:{docs:{description:{story:"垂直菜单，常用于侧边栏导航，配合图标展示功能入口。"}}},render:()=>e.jsxs(r,{mode:"vertical",defaultSelectedKey:"home",className:"w-48 border rounded",children:[e.jsx(s,{itemKey:"home",icon:e.jsx(u,{className:"h-4 w-4"}),children:"首页"}),e.jsx(s,{itemKey:"profile",icon:e.jsx(B,{className:"h-4 w-4"}),children:"个人中心"}),e.jsx(s,{itemKey:"settings",icon:e.jsx(o,{className:"h-4 w-4"}),children:"设置"})]})},m={parameters:{docs:{description:{story:"水平菜单，常用于网站顶部导航栏，展示主要页面入口。"}}},render:()=>e.jsxs(r,{mode:"horizontal",defaultSelectedKey:"docs",className:"border-b",children:[e.jsx(s,{itemKey:"docs",icon:e.jsx(p,{className:"h-4 w-4"}),children:"文档"}),e.jsx(s,{itemKey:"gallery",icon:e.jsx(_,{className:"h-4 w-4"}),children:"图库"}),e.jsx(s,{itemKey:"settings",icon:e.jsx(o,{className:"h-4 w-4"}),children:"设置"})]})},n={parameters:{docs:{description:{story:"带子菜单的垂直菜单，用于功能模块较多且需要层级归类的场景。"}}},render:()=>e.jsxs(r,{mode:"vertical",defaultSelectedKey:"react",className:"w-56 border rounded",children:[e.jsxs(l,{itemKey:"frameworks",title:"框架",icon:e.jsx(T,{className:"h-4 w-4"}),children:[e.jsx(s,{itemKey:"react",children:"React"}),e.jsx(s,{itemKey:"vue",children:"Vue"}),e.jsx(s,{itemKey:"svelte",children:"Svelte"})]}),e.jsxs(l,{itemKey:"tools",title:"工具",icon:e.jsx(o,{className:"h-4 w-4"}),children:[e.jsx(s,{itemKey:"vite",children:"Vite"}),e.jsx(s,{itemKey:"webpack",children:"Webpack"})]})]})},d={render:()=>e.jsxs(r,{mode:"vertical",defaultSelectedKey:"enabled",className:"w-48 border rounded",children:[e.jsx(s,{itemKey:"enabled",children:"启用"}),e.jsx(s,{itemKey:"disabled",disabled:!0,children:"禁用"}),e.jsx(s,{itemKey:"another",children:"其他"})]})},a={parameters:{docs:{description:{story:"内联菜单，子菜单可展开收起，适用于内容区域内的层级导航。"}}},render:()=>e.jsxs(r,{mode:"inline",defaultSelectedKey:"react",className:"w-56 border rounded",children:[e.jsx(s,{itemKey:"home",icon:e.jsx(u,{className:"h-4 w-4"}),children:"首页"}),e.jsxs(l,{itemKey:"frameworks",title:"框架",icon:e.jsx(T,{className:"h-4 w-4"}),children:[e.jsx(s,{itemKey:"react",children:"React"}),e.jsx(s,{itemKey:"vue",children:"Vue"}),e.jsx(s,{itemKey:"svelte",children:"Svelte"})]}),e.jsxs(l,{itemKey:"tools",title:"工具",icon:e.jsx(o,{className:"h-4 w-4"}),children:[e.jsx(s,{itemKey:"vite",children:"Vite"}),e.jsx(s,{itemKey:"webpack",children:"Webpack"})]}),e.jsx(s,{itemKey:"docs",icon:e.jsx(p,{className:"h-4 w-4"}),children:"文档"})]})},c={parameters:{docs:{description:{story:"仅图标模式的折叠菜单，通过外部按钮控制展开收起，节省侧边栏空间。"}}},render:()=>{const[t,U]=E.useState(!1);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(D,{className:"text-sm",onClick:()=>U(!t),children:t?"展开菜单":"折叠菜单"}),e.jsx("div",{className:t?"w-16":"w-48",children:e.jsxs(r,{mode:"vertical",defaultSelectedKey:"home",className:"border rounded",children:[e.jsx(s,{itemKey:"home",icon:e.jsx(u,{className:"h-4 w-4"}),children:t?"":"首页"}),e.jsx(s,{itemKey:"profile",icon:e.jsx(B,{className:"h-4 w-4"}),children:t?"":"个人中心"}),e.jsx(s,{itemKey:"docs",icon:e.jsx(p,{className:"h-4 w-4"}),children:t?"":"文档"}),e.jsx(s,{itemKey:"settings",icon:e.jsx(o,{className:"h-4 w-4"}),children:t?"":"设置"})]})})]})}};var h,y,M;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '垂直菜单，常用于侧边栏导航，配合图标展示功能入口。'
      }
    }
  },
  render: () => <Menu mode="vertical" defaultSelectedKey="home" className="w-48 border rounded">
      <MenuItem itemKey="home" icon={<Home className="h-4 w-4" />}>首页</MenuItem>
      <MenuItem itemKey="profile" icon={<User className="h-4 w-4" />}>个人中心</MenuItem>
      <MenuItem itemKey="settings" icon={<Settings className="h-4 w-4" />}>设置</MenuItem>
    </Menu>
}`,...(M=(y=i.parameters)==null?void 0:y.docs)==null?void 0:M.source}}};var K,x,j;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '水平菜单，常用于网站顶部导航栏，展示主要页面入口。'
      }
    }
  },
  render: () => <Menu mode="horizontal" defaultSelectedKey="docs" className="border-b">
      <MenuItem itemKey="docs" icon={<FileText className="h-4 w-4" />}>文档</MenuItem>
      <MenuItem itemKey="gallery" icon={<Image className="h-4 w-4" />}>图库</MenuItem>
      <MenuItem itemKey="settings" icon={<Settings className="h-4 w-4" />}>设置</MenuItem>
    </Menu>
}`,...(j=(x=m.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};var I,w,N;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '带子菜单的垂直菜单，用于功能模块较多且需要层级归类的场景。'
      }
    }
  },
  render: () => <Menu mode="vertical" defaultSelectedKey="react" className="w-56 border rounded">
      <SubMenu itemKey="frameworks" title="框架" icon={<Folder className="h-4 w-4" />}>
        <MenuItem itemKey="react">React</MenuItem>
        <MenuItem itemKey="vue">Vue</MenuItem>
        <MenuItem itemKey="svelte">Svelte</MenuItem>
      </SubMenu>
      <SubMenu itemKey="tools" title="工具" icon={<Settings className="h-4 w-4" />}>
        <MenuItem itemKey="vite">Vite</MenuItem>
        <MenuItem itemKey="webpack">Webpack</MenuItem>
      </SubMenu>
    </Menu>
}`,...(N=(w=n.parameters)==null?void 0:w.docs)==null?void 0:N.source}}};var b,S,f;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <Menu mode="vertical" defaultSelectedKey="enabled" className="w-48 border rounded">
      <MenuItem itemKey="enabled">启用</MenuItem>
      <MenuItem itemKey="disabled" disabled>禁用</MenuItem>
      <MenuItem itemKey="another">其他</MenuItem>
    </Menu>
}`,...(f=(S=d.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var v,g,k,V,F;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '内联菜单，子菜单可展开收起，适用于内容区域内的层级导航。'
      }
    }
  },
  render: () => <Menu mode="inline" defaultSelectedKey="react" className="w-56 border rounded">
      <MenuItem itemKey="home" icon={<Home className="h-4 w-4" />}>首页</MenuItem>
      <SubMenu itemKey="frameworks" title="框架" icon={<Folder className="h-4 w-4" />}>
        <MenuItem itemKey="react">React</MenuItem>
        <MenuItem itemKey="vue">Vue</MenuItem>
        <MenuItem itemKey="svelte">Svelte</MenuItem>
      </SubMenu>
      <SubMenu itemKey="tools" title="工具" icon={<Settings className="h-4 w-4" />}>
        <MenuItem itemKey="vite">Vite</MenuItem>
        <MenuItem itemKey="webpack">Webpack</MenuItem>
      </SubMenu>
      <MenuItem itemKey="docs" icon={<FileText className="h-4 w-4" />}>文档</MenuItem>
    </Menu>
}`,...(k=(g=a.parameters)==null?void 0:g.docs)==null?void 0:k.source},description:{story:"内联菜单 - 可折叠子菜单",...(F=(V=a.parameters)==null?void 0:V.docs)==null?void 0:F.description}}};var W,C,H,R,z;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '仅图标模式的折叠菜单，通过外部按钮控制展开收起，节省侧边栏空间。'
      }
    }
  },
  render: () => {
    const [collapsed, setCollapsed] = useState(false);
    return <div className="space-y-4">
        <Button className="text-sm" onClick={() => setCollapsed(!collapsed)}>
          {collapsed ? '展开菜单' : '折叠菜单'}
        </Button>
        <div className={collapsed ? 'w-16' : 'w-48'}>
          <Menu mode="vertical" defaultSelectedKey="home" className="border rounded">
            <MenuItem itemKey="home" icon={<Home className="h-4 w-4" />}>{collapsed ? '' : '首页'}</MenuItem>
            <MenuItem itemKey="profile" icon={<User className="h-4 w-4" />}>{collapsed ? '' : '个人中心'}</MenuItem>
            <MenuItem itemKey="docs" icon={<FileText className="h-4 w-4" />}>{collapsed ? '' : '文档'}</MenuItem>
            <MenuItem itemKey="settings" icon={<Settings className="h-4 w-4" />}>{collapsed ? '' : '设置'}</MenuItem>
          </Menu>
        </div>
      </div>;
  }
}`,...(H=(C=c.parameters)==null?void 0:C.docs)==null?void 0:H.source},description:{story:"折叠菜单 - 仅图标模式",...(z=(R=c.parameters)==null?void 0:R.docs)==null?void 0:z.description}}};const te=["Vertical","Horizontal","WithSubMenu","WithDisabled","InlineMenu","CollapsedMenu"];export{c as CollapsedMenu,m as Horizontal,a as InlineMenu,i as Vertical,d as WithDisabled,n as WithSubMenu,te as __namedExportsOrder,se as default};
