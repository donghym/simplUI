import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as j}from"./index-GiUgBvb1.js";import{a as Y}from"./utils-BEhiKRD9.js";function H(t,r,i,m,d,p,u){const s=document.createElement("canvas"),a=s.getContext("2d");if(!a)return"";const o=Array.isArray(t)?t.join(" "):t;a.font=`${i}px ${m}`;const x=a.measureText(o).width,f=i,c=d*Math.PI/180,h=Math.abs(Math.sin(c)),W=Math.abs(Math.cos(c)),w=x*W+f*h+p,T=x*h+f*W+u;return s.width=w,s.height=T,a.font=`${i}px ${m}`,a.fillStyle=r,a.textAlign="center",a.textBaseline="middle",a.save(),a.translate(w/2,T/2),a.rotate(c),a.fillText(o,0,0),a.restore(),s.toDataURL()}const n=j.forwardRef(({content:t="Watermark",children:r,style:i,className:m,color:d="rgba(0,0,0,0.12)",fontSize:p=16,fontFamily:u="sans-serif",rotate:s=-22,gapX:a=100,gapY:o=100,opacity:S=1,fullScreen:x=!1},f)=>{const c=j.useMemo(()=>H(t,d,p,u,s,a,o),[t,d,p,u,s,a,o]),h={position:x?"fixed":"absolute",inset:0,backgroundImage:`url(${c})`,backgroundRepeat:"repeat",pointerEvents:"none",zIndex:9999,opacity:S};return e.jsxs("div",{ref:f,className:Y("sui-watermark relative inline-block w-full",m),style:i,children:[r,e.jsx("div",{className:"sui-watermark__overlay",style:h})]})});n.displayName="Watermark";n.__docgenInfo={description:`Watermark 水印组件

用于在页面上添加水印。

### 何时使用
- 需要保护页面内容，防止截图泄露
- 需要标识页面来源或版权信息

### 示例
\`\`\`tsx
<Watermark content="Confidential">
  <div>Page content</div>
</Watermark>
\`\`\``,methods:[],displayName:"Watermark",props:{content:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:"水印文字",defaultValue:{value:"'Watermark'",computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:"子元素"},style:{required:!1,tsType:{name:"CSSProperties"},description:"自定义样式"},className:{required:!1,tsType:{name:"string"},description:"自定义类名"},color:{required:!1,tsType:{name:"string"},description:"水印文字颜色",defaultValue:{value:"'rgba(0,0,0,0.12)'",computed:!1}},fontSize:{required:!1,tsType:{name:"number"},description:"水印文字大小",defaultValue:{value:"16",computed:!1}},fontFamily:{required:!1,tsType:{name:"string"},description:"水印文字字体",defaultValue:{value:"'sans-serif'",computed:!1}},rotate:{required:!1,tsType:{name:"number"},description:"水印旋转角度",defaultValue:{value:"-22",computed:!1}},gapX:{required:!1,tsType:{name:"number"},description:"水印之间的水平间距",defaultValue:{value:"100",computed:!1}},gapY:{required:!1,tsType:{name:"number"},description:"水印之间的垂直间距",defaultValue:{value:"100",computed:!1}},opacity:{required:!1,tsType:{name:"number"},description:"水印不透明度",defaultValue:{value:"1",computed:!1}},fullScreen:{required:!1,tsType:{name:"boolean"},description:"是否全屏",defaultValue:{value:"false",computed:!1}}}};const Q={title:"反馈/Watermark 水印",component:n,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"用于在页面上添加水印，保护内容版权或标识文档状态。"}}},argTypes:{opacity:{control:{type:"range",min:0,max:1,step:.1}},rotate:{control:"number"},fontSize:{control:"number"},fullScreen:{control:"boolean"},gapX:{control:"number"},gapY:{control:"number"}}},l=({children:t})=>e.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:320,borderRadius:8,background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",color:"#fff",fontSize:18},children:t}),g={render:()=>e.jsx(n,{content:"Internal Use",children:e.jsx(l,{children:e.jsxs("div",{className:"text-center",children:[e.jsx("h2",{className:"text-2xl m-0",children:"Confidential Document"}),e.jsx("p",{className:"mt-2 opacity-85",children:"This content is protected by a watermark."})]})})})},y={render:()=>e.jsx(n,{content:["Top Secret","Do Not Distribute"],children:e.jsx(l,{children:e.jsxs("div",{className:"text-center",children:[e.jsx("h2",{className:"text-2xl m-0",children:"Sensitive Information"}),e.jsx("p",{className:"mt-2 opacity-85",children:"Multi-line watermark for extra protection."})]})})})},v={render:()=>e.jsx(n,{content:"DRAFT",fontSize:28,rotate:-15,opacity:.15,gapX:150,gapY:150,children:e.jsx(l,{children:e.jsxs("div",{className:"text-center",children:[e.jsx("h2",{className:"text-2xl m-0",children:"Draft Document"}),e.jsx("p",{className:"mt-2 opacity-85",children:"Blue watermark with custom size and spacing."})]})})})},k={name:"Dense Spacing",render:()=>e.jsx(n,{content:"CONFIDENTIAL",color:"#ff4d4f",fontSize:14,rotate:-30,opacity:.08,gapX:80,gapY:60,children:e.jsx(l,{children:e.jsxs("div",{className:"text-center",children:[e.jsx("h2",{className:"text-2xl m-0",children:"High Security"}),e.jsx("p",{className:"mt-2 opacity-85",children:"Tighter watermark spacing for higher security."})]})})})},N={render:()=>e.jsx(n,{content:"SAMPLE",fullScreen:!0,children:e.jsx(l,{children:e.jsxs("div",{className:"text-center",children:[e.jsx("h2",{className:"text-2xl m-0",children:"Full Screen Watermark"}),e.jsx("p",{className:"mt-2 opacity-85",children:"The watermark covers the entire viewport on scroll."})]})})})};function O(){const t=document.createElement("canvas");t.width=80,t.height=80;const r=t.getContext("2d");return r?(r.fillStyle="rgba(0,0,0,0.08)",r.beginPath(),r.arc(40,30,20,0,Math.PI*2),r.fill(),r.fillRect(25,55,30,8),t.toDataURL()):""}const b={render:()=>{const t=j.useMemo(()=>O(),[]);return e.jsxs("div",{style:{position:"relative",height:320,borderRadius:8,background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",color:"#fff",fontSize:18,display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden"},children:[e.jsxs("div",{className:"text-center",children:[e.jsx("h2",{className:"text-2xl m-0",children:"Image Watermark"}),e.jsx("p",{className:"mt-2 opacity-85",children:"使用图片作为水印内容"})]}),e.jsx("div",{style:{position:"absolute",inset:0,backgroundImage:`url(${t})`,backgroundRepeat:"repeat",pointerEvents:"none",zIndex:9999}})]})}};var I,C,D;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <Watermark content="Internal Use">
      <Container>
        <div className="text-center">
          <h2 className="text-2xl m-0">Confidential Document</h2>
          <p className="mt-2 opacity-85">This content is protected by a watermark.</p>
        </div>
      </Container>
    </Watermark>
}`,...(D=(C=g.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var M,R,q;y.parameters={...y.parameters,docs:{...(M=y.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <Watermark content={['Top Secret', 'Do Not Distribute']}>
      <Container>
        <div className="text-center">
          <h2 className="text-2xl m-0">Sensitive Information</h2>
          <p className="mt-2 opacity-85">Multi-line watermark for extra protection.</p>
        </div>
      </Container>
    </Watermark>
}`,...(q=(R=y.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};var E,z,U;v.parameters={...v.parameters,docs:{...(E=v.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <Watermark content="DRAFT" fontSize={28} rotate={-15} opacity={0.15} gapX={150} gapY={150}>
      <Container>
        <div className="text-center">
          <h2 className="text-2xl m-0">Draft Document</h2>
          <p className="mt-2 opacity-85">Blue watermark with custom size and spacing.</p>
        </div>
      </Container>
    </Watermark>
}`,...(U=(z=v.parameters)==null?void 0:z.docs)==null?void 0:U.source}}};var A,V,L;k.parameters={...k.parameters,docs:{...(A=k.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Dense Spacing',
  render: () => <Watermark content="CONFIDENTIAL" color="#ff4d4f" fontSize={14} rotate={-30} opacity={0.08} gapX={80} gapY={60}>
      <Container>
        <div className="text-center">
          <h2 className="text-2xl m-0">High Security</h2>
          <p className="mt-2 opacity-85">Tighter watermark spacing for higher security.</p>
        </div>
      </Container>
    </Watermark>
}`,...(L=(V=k.parameters)==null?void 0:V.docs)==null?void 0:L.source}}};var F,P,$;N.parameters={...N.parameters,docs:{...(F=N.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <Watermark content="SAMPLE" fullScreen>
      <Container>
        <div className="text-center">
          <h2 className="text-2xl m-0">Full Screen Watermark</h2>
          <p className="mt-2 opacity-85">
            The watermark covers the entire viewport on scroll.
          </p>
        </div>
      </Container>
    </Watermark>
}`,...($=(P=N.parameters)==null?void 0:P.docs)==null?void 0:$.source}}};var _,B,X;b.parameters={...b.parameters,docs:{...(_=b.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => {
    const imageUrl = useMemo(() => generateImageDataUrl(), []);
    return <div style={{
      position: 'relative',
      height: 320,
      borderRadius: 8,
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: '#fff',
      fontSize: 18,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    }}>
        <div className="text-center">
          <h2 className="text-2xl m-0">Image Watermark</h2>
          <p className="mt-2 opacity-85">使用图片作为水印内容</p>
        </div>
        <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: \`url(\${imageUrl})\`,
        backgroundRepeat: 'repeat',
        pointerEvents: 'none',
        zIndex: 9999
      }} />
      </div>;
  }
}`,...(X=(B=b.parameters)==null?void 0:B.docs)==null?void 0:X.source}}};const Z=["Basic","MultiLine","CustomStyle","DenseWatermark","FullScreen","ImageWatermark"];export{g as Basic,v as CustomStyle,k as DenseWatermark,N as FullScreen,b as ImageWatermark,y as MultiLine,Z as __namedExportsOrder,Q as default};
