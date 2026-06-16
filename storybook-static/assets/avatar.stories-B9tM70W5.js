import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as U}from"./index-GiUgBvb1.js";import{A as t}from"./index-DPLdZRWH.js";import{U as J}from"./user-CXa3gJrY.js";import"./utils-BEhiKRD9.js";import"./index-C08JwjkN.js";import"./createLucideIcon-CZe00VV7.js";const Q={title:"数据展示/Avatar 头像",component:t,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`Avatar 头像组件用于展示用户或事物的缩略图，支持图片、文字和图标三种形式。

- 用于用户中心、个人信息页展示用户头像
- 用于评论列表、消息列表标识发送者
- 用于团队成员展示、组织架构图
- 当图片加载失败时自动回退为文字或图标`}}},argTypes:{src:{control:"text",description:"图片源地址，传入后渲染为 img 元素"},alt:{control:"text",description:"图片的 alt 属性，同时作为文字回退源：不传 src 或图片加载失败时取 alt 首字符显示"},icon:{control:"text",description:"回退图标，当 src 未传入或图片加载失败时显示的图标"},size:{control:"select",options:["small","default","large"],description:"头像尺寸：small(24px)、default(40px)、large(56px)"},shape:{control:"select",options:["circle","square"],description:"头像形状：circle 为圆形，square 为圆角方形"},children:{control:"text",description:"头像内容，优先级高于 icon 和 alt"},onError:{description:"图片加载失败回调，返回 false 可阻止默认回退行为"},srcSet:{control:"text",description:"响应式图片的 srcSet 属性，用于不同分辨率下加载不同尺寸的图片"}}},r={args:{src:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Crect fill='%23e5e7eb' width='40' height='40' rx='20'/%3E%3Ctext fill='%236b7280' font-family='sans-serif' font-size='16' x='50%25' y='55%25' dominant-baseline='middle' text-anchor='middle'%3EF%3C/text%3E%3C/svg%3E",alt:"用户头像"}},i={args:{children:"JD"}},o={args:{icon:e.jsx(J,{className:"h-5 w-5"})}},l={args:{alt:"Jane Doe"}},n={args:{src:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Crect fill='%23e5e7eb' width='40' height='40' rx='20'/%3E%3Ctext fill='%236b7280' font-family='sans-serif' font-size='16' x='50%25' y='55%25' dominant-baseline='middle' text-anchor='middle'%3ES%3C/text%3E%3C/svg%3E",alt:"方形",shape:"square"}},c={args:{src:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Crect fill='%23e5e7eb' width='40' height='40' rx='20'/%3E%3Ctext fill='%236b7280' font-family='sans-serif' font-size='16' x='50%25' y='55%25' dominant-baseline='middle' text-anchor='middle'%3EL%3C/text%3E%3C/svg%3E",alt:"大尺寸",size:"large"}},d={render:()=>e.jsx("div",{className:"flex -space-x-2",children:["Felix","Mia","Zoe","Leo"].map(s=>e.jsx(t,{src:`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Crect fill='%23e5e7eb' width='40' height='40' rx='20'/%3E%3Ctext fill='%236b7280' font-family='sans-serif' font-size='16' x='50%25' y='55%25' dominant-baseline='middle' text-anchor='middle'%3E${s[0]}%3C/text%3E%3C/svg%3E`,alt:s,className:"border-2 border-white"},s))})},m={render:()=>{const[s,a]=U.useState(!1);return e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(t,{size:s?"large":"small",className:"transition-all duration-300",children:s?"LG":"SM"}),e.jsx(t,{size:s?"large":"small",icon:e.jsx(J,{className:"transition-all duration-300"}),className:"transition-all duration-300"})]}),e.jsxs("button",{type:"button",className:"px-3 py-1.5 border border-gray-300 rounded-md text-sm hover:bg-gray-50",onClick:()=>a(M=>!M),children:["Toggle Size: ",s?"Large":"Small"]})]})}},g={parameters:{docs:{description:{story:"演示头像内文字根据字符数自动缩放的效果，1 字符显示大号、2 字符中号、3+ 字符小号，确保不同长度文本都能清晰展示。"}}},render:()=>{const s=["A","AB","ABC","ABCD","ABCDE"];return e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"flex items-center gap-4",children:s.map(a=>e.jsxs("div",{className:"flex flex-col items-center gap-1",children:[e.jsx(t,{size:"large",children:a}),e.jsxs("span",{className:"text-xs text-muted-foreground",children:[a.length," 字符"]})]},a))}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"根据字符数自动缩放文字大小：1 字符 = 大号，2 字符 = 中号，3+ 字符 = 小号"})]})}};var x,p,h;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    src: 'data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'40\\' height=\\'40\\' viewBox=\\'0 0 40 40\\'%3E%3Crect fill=\\'%23e5e7eb\\' width=\\'40\\' height=\\'40\\' rx=\\'20\\'/%3E%3Ctext fill=\\'%236b7280\\' font-family=\\'sans-serif\\' font-size=\\'16\\' x=\\'50%25\\' y=\\'55%25\\' dominant-baseline=\\'middle\\' text-anchor=\\'middle\\'%3EF%3C/text%3E%3C/svg%3E',
    alt: '用户头像'
  }
}`,...(h=(p=r.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var f,v,u;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: 'JD'
  }
}`,...(u=(v=i.parameters)==null?void 0:v.docs)==null?void 0:u.source}}};var w,C,E;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    icon: <User className="h-5 w-5" />
  }
}`,...(E=(C=o.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var b,y,N;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    alt: 'Jane Doe'
  }
}`,...(N=(y=l.parameters)==null?void 0:y.docs)==null?void 0:N.source}}};var S,A,z;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    src: 'data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'40\\' height=\\'40\\' viewBox=\\'0 0 40 40\\'%3E%3Crect fill=\\'%23e5e7eb\\' width=\\'40\\' height=\\'40\\' rx=\\'20\\'/%3E%3Ctext fill=\\'%236b7280\\' font-family=\\'sans-serif\\' font-size=\\'16\\' x=\\'50%25\\' y=\\'55%25\\' dominant-baseline=\\'middle\\' text-anchor=\\'middle\\'%3ES%3C/text%3E%3C/svg%3E',
    alt: '方形',
    shape: 'square'
  }
}`,...(z=(A=n.parameters)==null?void 0:A.docs)==null?void 0:z.source}}};var j,B,L;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    src: 'data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'40\\' height=\\'40\\' viewBox=\\'0 0 40 40\\'%3E%3Crect fill=\\'%23e5e7eb\\' width=\\'40\\' height=\\'40\\' rx=\\'20\\'/%3E%3Ctext fill=\\'%236b7280\\' font-family=\\'sans-serif\\' font-size=\\'16\\' x=\\'50%25\\' y=\\'55%25\\' dominant-baseline=\\'middle\\' text-anchor=\\'middle\\'%3EL%3C/text%3E%3C/svg%3E',
    alt: '大尺寸',
    size: 'large'
  }
}`,...(L=(B=c.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};var D,W,T;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div className="flex -space-x-2">
      {['Felix', 'Mia', 'Zoe', 'Leo'].map(seed => <Avatar key={seed} src={\`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Crect fill='%23e5e7eb' width='40' height='40' rx='20'/%3E%3Ctext fill='%236b7280' font-family='sans-serif' font-size='16' x='50%25' y='55%25' dominant-baseline='middle' text-anchor='middle'%3E\${seed[0]}%3C/text%3E%3C/svg%3E\`} alt={seed} className="border-2 border-white" />)}
    </div>
}`,...(T=(W=d.parameters)==null?void 0:W.docs)==null?void 0:T.source}}};var k,q,F;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => {
    const [large, setLarge] = useState(false);
    return <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <Avatar size={large ? 'large' : 'small'} className="transition-all duration-300">
            {large ? 'LG' : 'SM'}
          </Avatar>
          <Avatar size={large ? 'large' : 'small'} icon={<User className="transition-all duration-300" />} className="transition-all duration-300" />
        </div>
        <button type="button" className="px-3 py-1.5 border border-gray-300 rounded-md text-sm hover:bg-gray-50" onClick={() => setLarge(v => !v)}>
          Toggle Size: {large ? 'Large' : 'Small'}
        </button>
      </div>;
  }
}`,...(F=(q=m.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};var R,G,I;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '演示头像内文字根据字符数自动缩放的效果，1 字符显示大号、2 字符中号、3+ 字符小号，确保不同长度文本都能清晰展示。'
      }
    }
  },
  render: () => {
    const names = ['A', 'AB', 'ABC', 'ABCD', 'ABCDE'];
    return <div className="space-y-4">
        <div className="flex items-center gap-4">
          {names.map(name => <div key={name} className="flex flex-col items-center gap-1">
              <Avatar size="large">
                {name}
              </Avatar>
              <span className="text-xs text-muted-foreground">{name.length} 字符</span>
            </div>)}
        </div>
        <p className="text-sm text-muted-foreground">
          根据字符数自动缩放文字大小：1 字符 = 大号，2 字符 = 中号，3+ 字符 = 小号
        </p>
      </div>;
  }
}`,...(I=(G=g.parameters)==null?void 0:G.docs)==null?void 0:I.source}}};const V=["WithImage","WithText","WithIcon","WithAltFallback","RoundedSquare","Large","AvatarGroup","ResponsiveSize","AutoScaleText"];export{g as AutoScaleText,d as AvatarGroup,c as Large,m as ResponsiveSize,n as RoundedSquare,l as WithAltFallback,o as WithIcon,r as WithImage,i as WithText,V as __namedExportsOrder,Q as default};
