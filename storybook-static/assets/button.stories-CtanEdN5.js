import{j as r}from"./jsx-runtime-CDt2p4po.js";import{fn as y}from"./index-DeN4tkzB.js";import{B as e}from"./index-WhxK0hy4.js";import{S as ur}from"./search-DufjXXN7.js";import{c as hr}from"./createLucideIcon-CZe00VV7.js";import{M as gr}from"./mail-CM1fAoIt.js";import"./index-GiUgBvb1.js";import"./utils-BEhiKRD9.js";import"./index-C08JwjkN.js";import"./loader-circle-CulI208u.js";/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xr=hr("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]),Nr={title:"通用/Button 按钮",component:e,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:`按钮用于触发一个即时操作或事件。

- 主按钮：用于主行动点，一个操作区域只能有一个主按钮。
- 默认按钮：用于没有主次之分的一组行动点。
- 虚线按钮：常用于添加、导入等次要操作。
- 文字按钮：用于最次要的操作，或与其他文本混排。
- 链接按钮：用于页面跳转或外部链接。`}}},argTypes:{variant:{control:"select",options:["default","primary","dashed","link","text"],description:"按钮变体，决定视觉风格"},loading:{control:"boolean",description:"加载状态，true 时显示 spinner、禁止交互"},disabled:{control:"boolean",description:"禁用状态，true 时不可点击"},block:{control:"boolean",description:"撑满父容器宽度"},icon:{control:!1,description:"前置/后置图标，使用 lucide-react 图标"},iconPosition:{control:"radio",options:["left","right"],description:"图标位置，默认 left"},asChild:{control:"boolean",description:"使用 Radix Slot 透传 props 到子元素"},htmlType:{control:"select",options:["button","submit","reset"],description:"原生 button type 属性，默认 button"},href:{control:"text",description:"提供时渲染为 <a> 标签"}}},t={args:{children:"按钮"}},a={args:{variant:"primary",children:"主要按钮"}},s={args:{variant:"dashed",children:"虚线按钮"}},n={args:{variant:"text",children:"文字按钮"}},o={args:{variant:"link",children:"链接按钮"}},i={parameters:{docs:{description:{story:"此示例展示了带图标按钮的使用场景。适用于需要图文结合引导用户操作的场景，如社交登录、功能入口等。"}}},args:{variant:"primary",icon:r.jsx(gr,{size:16}),children:"邮箱登录"}},c={args:{loading:!0,children:"请稍候"}},d={args:{disabled:!0,children:"禁用按钮"}},l={args:{block:!0,children:"全宽按钮"}},p={parameters:{docs:{description:{story:"图标位置用于调整图标在按钮中的左右分布。适用于需要明确操作流向的场景，如搜索（左图标）和下一步（右图标）。"}}},render:()=>r.jsxs("div",{className:"flex gap-4 items-center",children:[r.jsx(e,{variant:"primary",icon:r.jsx(ur,{size:16}),iconPosition:"left",children:"搜索"}),r.jsx(e,{variant:"primary",icon:r.jsx(xr,{size:16}),iconPosition:"right",children:"下一步"})]})},m={args:{href:"https://example.com",target:"_blank",children:"外部链接"}},u={parameters:{docs:{description:{story:"使用 asChild 可以将按钮样式透传到子元素。适用于需要保持按钮外观但底层渲染为链接或其他元素的场景。"}}},render:()=>r.jsx(e,{asChild:!0,children:r.jsx("a",{href:"https://example.com",target:"_blank",rel:"noopener noreferrer",children:"Slot 透传链接"})})},h={parameters:{docs:{description:{story:"原生按钮类型用于控制表单内的默认行为。submit 用于提交表单，reset 用于重置表单，button 为普通按钮。"}}},render:()=>r.jsxs("div",{className:"flex gap-4 items-center",children:[r.jsx(e,{htmlType:"button",children:"button"}),r.jsx(e,{htmlType:"submit",variant:"primary",children:"submit"}),r.jsx(e,{htmlType:"reset",children:"reset"})]})},g={parameters:{docs:{description:{story:"此示例展示了按钮加载状态的使用场景。适用于异步操作提交、数据加载等需要防止重复点击的情况。"}}},render:()=>r.jsxs("div",{className:"flex flex-wrap gap-4 items-center",children:[r.jsx(e,{loading:!0,children:"默认加载"}),r.jsx(e,{loading:!0,variant:"primary",children:"主要加载"}),r.jsx(e,{loading:!0,variant:"dashed",children:"虚线加载"}),r.jsx(e,{loading:!0,variant:"link",children:"链接加载"}),r.jsx(e,{loading:!0,variant:"text",children:"文字加载"})]})},x={parameters:{docs:{description:{story:"此示例展示了按钮组合的使用场景。适用于对话框底部操作、表单提交等需要主次操作并列的情况。"}}},render:()=>r.jsxs("div",{className:"flex gap-3 items-center",children:[r.jsx(e,{variant:"primary",onClick:y(),children:"确认提交"}),r.jsx(e,{onClick:y(),children:"取消"})]})},v={parameters:{docs:{description:{story:"此示例展示了所有按钮变体的并排对比。便于快速查看不同风格在相同场景下的视觉效果。"}}},render:()=>r.jsxs("div",{className:"flex flex-wrap gap-4 items-center",children:[r.jsx(e,{variant:"default",children:"默认"}),r.jsx(e,{variant:"primary",children:"主要"}),r.jsx(e,{variant:"dashed",children:"虚线"}),r.jsx(e,{variant:"text",children:"文字"}),r.jsx(e,{variant:"link",children:"链接"})]})};var f,B,b;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: '按钮'
  }
}`,...(b=(B=t.parameters)==null?void 0:B.docs)==null?void 0:b.source}}};var j,k,S;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: '主要按钮'
  }
}`,...(S=(k=a.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var T,C,N;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    variant: 'dashed',
    children: '虚线按钮'
  }
}`,...(N=(C=s.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};var P,w,z;n.parameters={...n.parameters,docs:{...(P=n.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    variant: 'text',
    children: '文字按钮'
  }
}`,...(z=(w=n.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};var A,L,D;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    variant: 'link',
    children: '链接按钮'
  }
}`,...(D=(L=o.parameters)==null?void 0:L.docs)==null?void 0:D.source}}};var _,I,R;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '此示例展示了带图标按钮的使用场景。适用于需要图文结合引导用户操作的场景，如社交登录、功能入口等。'
      }
    }
  },
  args: {
    variant: 'primary',
    icon: <Mail size={16} />,
    children: '邮箱登录'
  }
}`,...(R=(I=i.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};var H,M,V;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    loading: true,
    children: '请稍候'
  }
}`,...(V=(M=c.parameters)==null?void 0:M.docs)==null?void 0:V.source}}};var E,G,W;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    disabled: true,
    children: '禁用按钮'
  }
}`,...(W=(G=d.parameters)==null?void 0:G.docs)==null?void 0:W.source}}};var q,O,F;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    block: true,
    children: '全宽按钮'
  }
}`,...(F=(O=l.parameters)==null?void 0:O.docs)==null?void 0:F.source}}};var J,K,Q;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '图标位置用于调整图标在按钮中的左右分布。适用于需要明确操作流向的场景，如搜索（左图标）和下一步（右图标）。'
      }
    }
  },
  render: () => <div className="flex gap-4 items-center">
      <Button variant="primary" icon={<Search size={16} />} iconPosition="left">
        搜索
      </Button>
      <Button variant="primary" icon={<ArrowRight size={16} />} iconPosition="right">
        下一步
      </Button>
    </div>
}`,...(Q=(K=p.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,X,Y;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    href: 'https://example.com',
    target: '_blank',
    children: '外部链接'
  }
}`,...(Y=(X=m.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,rr;u.parameters={...u.parameters,docs:{...(Z=u.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '使用 asChild 可以将按钮样式透传到子元素。适用于需要保持按钮外观但底层渲染为链接或其他元素的场景。'
      }
    }
  },
  render: () => <Button asChild>
      <a href="https://example.com" target="_blank" rel="noopener noreferrer">
        Slot 透传链接
      </a>
    </Button>
}`,...(rr=($=u.parameters)==null?void 0:$.docs)==null?void 0:rr.source}}};var er,tr,ar;h.parameters={...h.parameters,docs:{...(er=h.parameters)==null?void 0:er.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '原生按钮类型用于控制表单内的默认行为。submit 用于提交表单，reset 用于重置表单，button 为普通按钮。'
      }
    }
  },
  render: () => <div className="flex gap-4 items-center">
      <Button htmlType="button">button</Button>
      <Button htmlType="submit" variant="primary">
        submit
      </Button>
      <Button htmlType="reset">reset</Button>
    </div>
}`,...(ar=(tr=h.parameters)==null?void 0:tr.docs)==null?void 0:ar.source}}};var sr,nr,or;g.parameters={...g.parameters,docs:{...(sr=g.parameters)==null?void 0:sr.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '此示例展示了按钮加载状态的使用场景。适用于异步操作提交、数据加载等需要防止重复点击的情况。'
      }
    }
  },
  render: () => <div className="flex flex-wrap gap-4 items-center">
      <Button loading>默认加载</Button>
      <Button loading variant="primary">
        主要加载
      </Button>
      <Button loading variant="dashed">
        虚线加载
      </Button>
      <Button loading variant="link">
        链接加载
      </Button>
      <Button loading variant="text">
        文字加载
      </Button>
    </div>
}`,...(or=(nr=g.parameters)==null?void 0:nr.docs)==null?void 0:or.source}}};var ir,cr,dr;x.parameters={...x.parameters,docs:{...(ir=x.parameters)==null?void 0:ir.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '此示例展示了按钮组合的使用场景。适用于对话框底部操作、表单提交等需要主次操作并列的情况。'
      }
    }
  },
  render: () => <div className="flex gap-3 items-center">
      <Button variant="primary" onClick={fn()}>
        确认提交
      </Button>
      <Button onClick={fn()}>取消</Button>
    </div>
}`,...(dr=(cr=x.parameters)==null?void 0:cr.docs)==null?void 0:dr.source}}};var lr,pr,mr;v.parameters={...v.parameters,docs:{...(lr=v.parameters)==null?void 0:lr.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '此示例展示了所有按钮变体的并排对比。便于快速查看不同风格在相同场景下的视觉效果。'
      }
    }
  },
  render: () => <div className="flex flex-wrap gap-4 items-center">
      <Button variant="default">默认</Button>
      <Button variant="primary">主要</Button>
      <Button variant="dashed">虚线</Button>
      <Button variant="text">文字</Button>
      <Button variant="link">链接</Button>
    </div>
}`,...(mr=(pr=v.parameters)==null?void 0:pr.docs)==null?void 0:mr.source}}};const Pr=["Default","Primary","Dashed","Text","Link","WithIcon","Loading","Disabled","Block","IconPosition","Href","AsChild","HtmlType","LoadingVariants","ButtonGroup","AllVariants"];export{v as AllVariants,u as AsChild,l as Block,x as ButtonGroup,s as Dashed,t as Default,d as Disabled,m as Href,h as HtmlType,p as IconPosition,o as Link,c as Loading,g as LoadingVariants,a as Primary,n as Text,i as WithIcon,Pr as __namedExportsOrder,Nr as default};
