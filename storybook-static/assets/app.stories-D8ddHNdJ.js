import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as x}from"./index-GiUgBvb1.js";import{a as j}from"./utils-BEhiKRD9.js";import{C as k}from"./index-B5BFfTsL.js";import{B as v}from"./index-WhxK0hy4.js";import"./index-C08JwjkN.js";import"./loader-circle-CulI208u.js";import"./createLucideIcon-CZe00VV7.js";const t=x.forwardRef(({children:r,style:o,className:A},b)=>e.jsx("div",{ref:b,className:j("sui-app w-full min-h-screen",A),style:o,children:r}));t.displayName="App";t.__docgenInfo={description:`App 应用容器组件

用于包裹整个应用，提供全局上下文。

### 何时使用
- 作为应用的根容器
- 需要全局配置时

### 示例
\`\`\`tsx
<App>
  <Layout>
    <Content />
  </Layout>
</App>
\`\`\``,methods:[],displayName:"App",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"子元素"},style:{required:!1,tsType:{name:"CSSProperties"},description:"自定义样式"},className:{required:!1,tsType:{name:"string"},description:"自定义类名"}}};const q={title:"通用/App 应用容器",component:t,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"用于包裹整个应用，提供全局上下文。"}}}},n={render:()=>e.jsx(t,{children:e.jsxs("div",{className:"p-6 bg-gray-100 min-h-[200px]",children:[e.jsx("h2",{children:"Application Content"}),e.jsx("p",{children:"This is wrapped in the App container."})]})})},i={render:()=>e.jsx(t,{style:{background:"#e6f4ff",padding:24},children:e.jsxs("div",{children:[e.jsx("h2",{children:"Styled App"}),e.jsx("p",{children:"This App container has custom styles."})]})})},s={render:()=>{const[r,o]=x.useState("light");return e.jsx(k,{theme:r,children:e.jsx(t,{children:e.jsxs("div",{className:"p-6 space-y-4",style:{background:r==="dark"?"#1e293b":"#f8fafc",minHeight:200,transition:"background 0.3s"},children:[e.jsxs("h2",{className:"text-lg font-semibold",style:{color:r==="dark"?"#f1f5f9":"#1e293b"},children:["当前主题：",r==="light"?"亮色":"暗色"]}),e.jsx("p",{style:{color:r==="dark"?"#94a3b8":"#64748b"},children:"点击按钮切换 ConfigProvider 的主题。"}),e.jsxs(v,{onClick:()=>o(r==="light"?"dark":"light"),children:["切换为",r==="light"?"暗色":"亮色","主题"]})]})})})}};var a,p,d;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => <App>
      <div className="p-6 bg-gray-100 min-h-[200px]">
        <h2>Application Content</h2>
        <p>This is wrapped in the App container.</p>
      </div>
    </App>
}`,...(d=(p=n.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var c,l,m;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <App style={{
    background: '#e6f4ff',
    padding: 24
  }}>
      <div>
        <h2>Styled App</h2>
        <p>This App container has custom styles.</p>
      </div>
    </App>
}`,...(m=(l=i.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var h,u,g,f,y;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');
    return <ConfigProvider theme={theme}>
        <App>
          <div className="p-6 space-y-4" style={{
          background: theme === 'dark' ? '#1e293b' : '#f8fafc',
          minHeight: 200,
          transition: 'background 0.3s'
        }}>
            <h2 className="text-lg font-semibold" style={{
            color: theme === 'dark' ? '#f1f5f9' : '#1e293b'
          }}>
              当前主题：{theme === 'light' ? '亮色' : '暗色'}
            </h2>
            <p style={{
            color: theme === 'dark' ? '#94a3b8' : '#64748b'
          }}>
              点击按钮切换 ConfigProvider 的主题。
            </p>
            <Button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
              切换为{theme === 'light' ? '暗色' : '亮色'}主题
            </Button>
          </div>
        </App>
      </ConfigProvider>;
  }
}`,...(g=(u=s.parameters)==null?void 0:u.docs)==null?void 0:g.source},description:{story:"主题切换",...(y=(f=s.parameters)==null?void 0:f.docs)==null?void 0:y.description}}};const E=["Basic","WithCustomStyle","ThemeSwitch"];export{n as Basic,s as ThemeSwitch,i as WithCustomStyle,E as __namedExportsOrder,q as default};
