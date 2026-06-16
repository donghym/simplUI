import{j as e}from"./jsx-runtime-CDt2p4po.js";import{fn as $}from"./index-DeN4tkzB.js";import{r as Y}from"./index-GiUgBvb1.js";import{P as r}from"./index-Cko5bnEN.js";import{B as t}from"./index-WhxK0hy4.js";import"./utils-BEhiKRD9.js";import"./index-C08JwjkN.js";import"./loader-circle-CulI208u.js";import"./createLucideIcon-CZe00VV7.js";const ee=n=>e.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",minHeight:"400px",width:"100%"},children:e.jsx(n,{})}),le={title:"数据展示/Popover 气泡卡片",component:r,tags:["autodocs"],decorators:[ee],parameters:{layout:"padded",docs:{description:{component:"气泡卡片用于展示比文字提示更丰富的内容，可包含标题、文本和操作。适用于信息确认、快捷操作、内容预览等场景，支持点击和悬停触发。"}}},argTypes:{title:{control:"text",description:"气泡卡片标题，不传则无标题栏"},content:{control:"text",description:"气泡卡片中展示的内容"},trigger:{control:"select",options:["click","hover"],description:"触发方式，默认 click"},placement:{control:"select",options:["top","bottom","left","right","topLeft","topRight","bottomLeft","bottomRight"],description:"弹出位置，相对触发元素的方位，默认 top"},arrow:{control:"boolean",description:"是否显示箭头，默认 true"}}},c={render:()=>e.jsx(r,{content:"这是一个简单的气泡卡片内容",children:e.jsx(t,{children:"点击显示"})})},a={render:()=>e.jsx(r,{title:"气泡卡片标题",content:"这个气泡卡片有标题和下方的内容。",children:e.jsx(t,{children:"带标题"})})},i={render:()=>e.jsx(r,{trigger:"hover",title:"悬停气泡卡片",content:"这个气泡卡片在悬停时出现，而不是点击。",children:e.jsx(t,{children:"悬停我"})})},p={render:()=>e.jsx(r,{placement:"bottom",content:"下方的气泡卡片",children:e.jsx(t,{children:"下方位置"})})},l={render:()=>e.jsx(r,{placement:"left",content:"左侧的气泡卡片",children:e.jsx(t,{children:"左侧位置"})})},d={render:()=>e.jsx(r,{placement:"right",content:"右侧的气泡卡片",children:e.jsx(t,{children:"右侧位置"})})},m={render:()=>e.jsx(r,{arrow:!1,title:"无箭头",content:"这个气泡卡片没有指向触发元素的箭头。",children:e.jsx(t,{children:"无箭头"})})},u={render:()=>e.jsx(r,{title:"富文本内容",content:e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{children:"这个气泡卡片包含富文本内容。"}),e.jsx(t,{children:"操作按钮"})]}),children:e.jsx(t,{children:"富文本内容"})})},x={render:()=>{const[n,o]=Y.useState(!1);return e.jsx(r,{open:n,onOpenChange:o,title:"受控模式",content:"这个气泡卡片由外部控制。",children:e.jsx(t,{onClick:()=>o(!n),children:n?"关闭":"打开"})})}},h={render:()=>e.jsx(r,{placement:"top",title:"顶部气泡卡片",content:"从顶部弹出的气泡卡片。",children:e.jsx(t,{children:"顶部位置"})})},s={render:()=>{const[n,o]=Y.useState(!1),Z=$();return e.jsx(r,{title:"确认操作",content:e.jsxs("div",{className:"space-y-3",children:[e.jsx("p",{className:"text-sm text-gray-600",children:"确定要执行此操作吗？"}),n&&e.jsx("p",{className:"text-sm text-success font-medium",children:"操作已执行！"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(t,{className:"h-[28px] text-xs px-3",onClick:()=>{Z(),o(!0)},children:"确认"}),e.jsx(t,{className:"h-[28px] text-xs px-3",variant:"dashed",onClick:()=>o(!1),children:"重置"})]})]}),children:e.jsx(t,{children:"点击打开"})})}};var v,g,j;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <Popover content="这是一个简单的气泡卡片内容">
      <Button>点击显示</Button>
    </Popover>
}`,...(j=(g=c.parameters)==null?void 0:g.docs)==null?void 0:j.source}}};var P,f,B;a.parameters={...a.parameters,docs:{...(P=a.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <Popover title="气泡卡片标题" content="这个气泡卡片有标题和下方的内容。">
      <Button>带标题</Button>
    </Popover>
}`,...(B=(f=a.parameters)==null?void 0:f.docs)==null?void 0:B.source}}};var C,N,k;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <Popover trigger="hover" title="悬停气泡卡片" content="这个气泡卡片在悬停时出现，而不是点击。">
      <Button>悬停我</Button>
    </Popover>
}`,...(k=(N=i.parameters)==null?void 0:N.docs)==null?void 0:k.source}}};var S,y,R;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <Popover placement="bottom" content="下方的气泡卡片">
      <Button>下方位置</Button>
    </Popover>
}`,...(R=(y=p.parameters)==null?void 0:y.docs)==null?void 0:R.source}}};var A,O,T;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <Popover placement="left" content="左侧的气泡卡片">
      <Button>左侧位置</Button>
    </Popover>
}`,...(T=(O=l.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};var b,w,L;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <Popover placement="right" content="右侧的气泡卡片">
      <Button>右侧位置</Button>
    </Popover>
}`,...(L=(w=d.parameters)==null?void 0:w.docs)==null?void 0:L.source}}};var W,D,E;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <Popover arrow={false} title="无箭头" content="这个气泡卡片没有指向触发元素的箭头。">
      <Button>无箭头</Button>
    </Popover>
}`,...(E=(D=m.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var H,_,I;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <Popover title="富文本内容" content={<div className="space-y-2">
          <p>这个气泡卡片包含富文本内容。</p>
          <Button>操作按钮</Button>
        </div>}>
      <Button>富文本内容</Button>
    </Popover>
}`,...(I=(_=u.parameters)==null?void 0:_.docs)==null?void 0:I.source}}};var q,z,F;x.parameters={...x.parameters,docs:{...(q=x.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <Popover open={open} onOpenChange={setOpen} title="受控模式" content="这个气泡卡片由外部控制。">
        <Button onClick={() => setOpen(!open)}>{open ? '关闭' : '打开'}</Button>
      </Popover>;
  }
}`,...(F=(z=x.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};var G,J,K;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <Popover placement="top" title="顶部气泡卡片" content="从顶部弹出的气泡卡片。">
      <Button>顶部位置</Button>
    </Popover>
}`,...(K=(J=h.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var M,Q,U,V,X;s.parameters={...s.parameters,docs:{...(M=s.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => {
    const [clicked, setClicked] = useState(false);
    const handleAction = fn();
    return <Popover title="确认操作" content={<div className="space-y-3">
            <p className="text-sm text-gray-600">确定要执行此操作吗？</p>
            {clicked && <p className="text-sm text-success font-medium">操作已执行！</p>}
            <div className="flex gap-2">
              <Button className="h-[28px] text-xs px-3" onClick={() => {
          handleAction();
          setClicked(true);
        }}>
                确认
              </Button>
              <Button className="h-[28px] text-xs px-3" variant="dashed" onClick={() => setClicked(false)}>
                重置
              </Button>
            </div>
          </div>}>
        <Button>点击打开</Button>
      </Popover>;
  }
}`,...(U=(Q=s.parameters)==null?void 0:Q.docs)==null?void 0:U.source},description:{story:"富文本内容带操作",...(X=(V=s.parameters)==null?void 0:V.docs)==null?void 0:X.description}}};const de=["Default","WithTitle","HoverTrigger","PlacementBottom","PlacementLeft","PlacementRight","NoArrow","RichContent","Controlled","PlacementTop","RichContentWithAction"];export{x as Controlled,c as Default,i as HoverTrigger,m as NoArrow,p as PlacementBottom,l as PlacementLeft,d as PlacementRight,h as PlacementTop,u as RichContent,s as RichContentWithAction,a as WithTitle,de as __namedExportsOrder,le as default};
