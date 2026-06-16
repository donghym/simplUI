import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as R}from"./index-GiUgBvb1.js";import{C as t}from"./index-B5BFfTsL.js";import{B as o}from"./index-WhxK0hy4.js";import{I as a}from"./index-BJCQqJ4b.js";import"./utils-BEhiKRD9.js";import"./index-C08JwjkN.js";import"./loader-circle-CulI208u.js";import"./createLucideIcon-CZe00VV7.js";import"./x-B-5N0Ikz.js";const V={title:"其他/ConfigProvider 全局化配置",component:t,tags:["autodocs"],argTypes:{theme:{control:"radio",options:["light","dark"],description:"主题模式，可选 light 或 dark"},prefixCls:{control:"text",description:"组件 CSS 类名前缀，默认 simplui"}},parameters:{layout:"padded"}},i={render:()=>e.jsx(t,{children:e.jsxs("div",{className:"space-y-4",children:[e.jsx(o,{children:"默认主题按钮"}),e.jsx(a,{placeholder:"默认主题输入框"})]})})},c={render:()=>e.jsx(t,{theme:"dark",children:e.jsxs("div",{className:"bg-gray-900 p-4 space-y-4 rounded",children:[e.jsx(o,{children:"暗色主题按钮"}),e.jsx(a,{placeholder:"暗色主题输入框"})]})})},l={render:()=>e.jsx(t,{prefixCls:"custom",children:e.jsxs("div",{className:"space-y-4",children:[e.jsx(o,{children:"自定义前缀按钮"}),e.jsx(a,{placeholder:"自定义前缀输入框"})]})})},d={render:()=>e.jsx(t,{theme:"light",children:e.jsxs("div",{className:"space-y-4",children:[e.jsx(o,{children:"亮色主题"}),e.jsx(t,{theme:"dark",children:e.jsx("div",{className:"bg-gray-900 p-4 rounded",children:e.jsx(o,{children:"暗色主题（嵌套）"})})})]})})},p={render:()=>e.jsx(t,{config:{buttonSize:"large",inputRadius:"full"},children:e.jsxs("div",{className:"space-y-4",children:[e.jsx(o,{children:"大尺寸按钮"}),e.jsx(a,{placeholder:"自定义配置输入框"})]})})},m={render:()=>{const[s,u]=R.useState("zh"),r={zh:{title:"全局化配置示例",button:"点击按钮",input:"请输入内容",switchTo:"切换到英文"},en:{title:"Locale Config Demo",button:"Click Me",input:"Please enter",switchTo:"Switch to Chinese"}}[s];return e.jsx(t,{config:{locale:s},children:e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-lg font-semibold",children:r.title}),e.jsxs("div",{className:"flex gap-3",children:[e.jsx(o,{children:r.button}),e.jsx(a,{placeholder:r.input,style:{width:200}})]}),e.jsx("button",{type:"button",className:"px-3 py-1.5 border border-gray-300 rounded-md text-sm hover:bg-gray-50",onClick:()=>u(W=>W==="zh"?"en":"zh"),children:r.switchTo})]})})}},n={render:()=>{const[s,u]=R.useState("#1677FF"),h=["#1677FF","#00B42A","#FF7D00","#F53F3F","#722ED1","#F7BA1E"];return e.jsx(t,{themeConfig:{mode:"light",primaryColor:s},children:e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-lg font-semibold",children:"主题颜色切换"}),e.jsx("p",{className:"text-gray-500",children:"点击下方色块切换主题颜色"}),e.jsx("div",{className:"flex gap-2",children:h.map(r=>e.jsx("button",{type:"button",onClick:()=>u(r),className:`w-8 h-8 rounded-full border-2 transition-all ${s===r?"border-gray-800 scale-110":"border-transparent"}`,style:{backgroundColor:r},title:r},r))}),e.jsxs("div",{className:"flex gap-3 pt-4",children:[e.jsx(o,{variant:"primary",children:"主要按钮"}),e.jsx(o,{children:"默认按钮"})]}),e.jsx("div",{className:"pt-2",children:e.jsx(a,{placeholder:"主题色输入框",style:{width:200}})}),e.jsxs("p",{className:"text-sm text-gray-400",children:["当前主题色: ",s]})]})})}};var g,x,v;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <ConfigProvider>
      <div className="space-y-4">
        <Button>默认主题按钮</Button>
        <Input placeholder="默认主题输入框" />
      </div>
    </ConfigProvider>
}`,...(v=(x=i.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var y,f,C;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <ConfigProvider theme="dark">
      <div className="bg-gray-900 p-4 space-y-4 rounded">
        <Button>暗色主题按钮</Button>
        <Input placeholder="暗色主题输入框" />
      </div>
    </ConfigProvider>
}`,...(C=(f=c.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var j,b,N;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <ConfigProvider prefixCls="custom">
      <div className="space-y-4">
        <Button>自定义前缀按钮</Button>
        <Input placeholder="自定义前缀输入框" />
      </div>
    </ConfigProvider>
}`,...(N=(b=l.parameters)==null?void 0:b.docs)==null?void 0:N.source}}};var P,B,F;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <ConfigProvider theme="light">
      <div className="space-y-4">
        <Button>亮色主题</Button>
        <ConfigProvider theme="dark">
          <div className="bg-gray-900 p-4 rounded">
            <Button>暗色主题（嵌套）</Button>
          </div>
        </ConfigProvider>
      </div>
    </ConfigProvider>
}`,...(F=(B=d.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var S,k,w;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <ConfigProvider config={{
    buttonSize: 'large',
    inputRadius: 'full'
  }}>
      <div className="space-y-4">
        <Button>大尺寸按钮</Button>
        <Input placeholder="自定义配置输入框" />
      </div>
    </ConfigProvider>
}`,...(w=(k=p.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var D,z,T;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => {
    const [locale, setLocale] = useState<'zh' | 'en'>('zh');
    const localeMap = {
      zh: {
        title: '全局化配置示例',
        button: '点击按钮',
        input: '请输入内容',
        switchTo: '切换到英文'
      },
      en: {
        title: 'Locale Config Demo',
        button: 'Click Me',
        input: 'Please enter',
        switchTo: 'Switch to Chinese'
      }
    };
    const t = localeMap[locale];
    return <ConfigProvider config={{
      locale
    }}>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">{t.title}</h3>
          <div className="flex gap-3">
            <Button>{t.button}</Button>
            <Input placeholder={t.input} style={{
            width: 200
          }} />
          </div>
          <button type="button" className="px-3 py-1.5 border border-gray-300 rounded-md text-sm hover:bg-gray-50" onClick={() => setLocale(l => l === 'zh' ? 'en' : 'zh')}>
            {t.switchTo}
          </button>
        </div>
      </ConfigProvider>;
  }
}`,...(T=(z=m.parameters)==null?void 0:z.docs)==null?void 0:T.source}}};var I,E,L,M,A;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => {
    const [primaryColor, setPrimaryColor] = useState('#1677FF');
    const colors = ['#1677FF', '#00B42A', '#FF7D00', '#F53F3F', '#722ED1', '#F7BA1E'];
    return <ConfigProvider themeConfig={{
      mode: 'light',
      primaryColor
    }}>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">主题颜色切换</h3>
          <p className="text-gray-500">点击下方色块切换主题颜色</p>
          <div className="flex gap-2">
            {colors.map(color => <button key={color} type="button" onClick={() => setPrimaryColor(color)} className={\`w-8 h-8 rounded-full border-2 transition-all \${primaryColor === color ? 'border-gray-800 scale-110' : 'border-transparent'}\`} style={{
            backgroundColor: color
          }} title={color} />)}
          </div>
          <div className="flex gap-3 pt-4">
            <Button variant="primary">主要按钮</Button>
            <Button>默认按钮</Button>
          </div>
          <div className="pt-2">
            <Input placeholder="主题色输入框" style={{
            width: 200
          }} />
          </div>
          <p className="text-sm text-gray-400">当前主题色: {primaryColor}</p>
        </div>
      </ConfigProvider>;
  }
}`,...(L=(E=n.parameters)==null?void 0:E.docs)==null?void 0:L.source},description:{story:"主题颜色切换",...(A=(M=n.parameters)==null?void 0:M.docs)==null?void 0:A.description}}};const X=["Default","DarkTheme","CustomPrefix","NestedProviders","WithConfig","LocaleDemo","PrimaryColorSwitch"];export{l as CustomPrefix,c as DarkTheme,i as Default,m as LocaleDemo,d as NestedProviders,n as PrimaryColorSwitch,p as WithConfig,X as __namedExportsOrder,V as default};
