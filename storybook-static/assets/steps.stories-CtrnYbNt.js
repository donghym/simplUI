import{j as e}from"./jsx-runtime-CDt2p4po.js";import{fn as n}from"./index-DeN4tkzB.js";import{r as i}from"./index-GiUgBvb1.js";import{S as s}from"./index-DrsvZnyz.js";import{U as pt}from"./user-CXa3gJrY.js";import{M as lt}from"./mail-CM1fAoIt.js";import{c as dt}from"./createLucideIcon-CZe00VV7.js";import"./utils-BEhiKRD9.js";import"./index-C08JwjkN.js";import"./check-DytZnMFh.js";import"./loader-circle-CulI208u.js";/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mt=dt("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ut=dt("Smile",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]]),kt={title:"导航/Steps 步骤条",component:s,tags:["autodocs"],parameters:{layout:"padded",actions:{argTypesRegex:"^on.*"},docs:{description:{component:`引导用户按照流程完成任务的导航条。

- 流程向导：用于表单填写、注册开户等需要分步完成的场景。
- 状态反馈：展示每一步的完成、进行、等待或错误状态。
- 进度展示：支持百分比进度，用于上传、处理等耗时任务。`}}},argTypes:{onChange:{action:"onChange",description:"点击步骤时的回调"},current:{control:{type:"number",min:0},description:"当前步骤索引（从 0 开始）"},status:{control:"select",options:["wait","process","finish","error"],description:"当前步骤的状态"},direction:{control:"select",options:["horizontal","vertical"],description:"步骤条方向"},stepSize:{control:"select",options:["default","small"],description:"步骤条尺寸"},variant:{control:"select",options:["default","outlined","inline"],description:"步骤条变体"},progressDot:{control:"boolean",description:"是否使用点状步骤条"},percent:{control:{type:"number",min:0,max:100},description:"当前步骤进度百分比"},labelPlacement:{control:"select",options:["horizontal","vertical"],description:"标签放置位置"}}},c={args:{current:1,onChange:n(),items:[{title:"已完成",description:"步骤描述信息"},{title:"进行中",description:"步骤描述信息",subTitle:"剩余 00:00:08"},{title:"等待中",description:"步骤描述信息"}]}},d={args:{stepSize:"small",current:1,onChange:n(),items:[{title:"已完成"},{title:"进行中"},{title:"等待中"}]}},p={args:{current:1,onChange:n(),items:[{title:"登录",icon:e.jsx(pt,{className:"h-4 w-4"})},{title:"验证",icon:e.jsx(lt,{className:"h-4 w-4"})},{title:"支付",icon:e.jsx(mt,{className:"h-4 w-4"})},{title:"完成",icon:e.jsx(ut,{className:"h-4 w-4"})}]}},l={parameters:{docs:{description:{story:"可手动切换步骤的示例，配合上一步/下一步按钮引导用户按流程操作。"}}},render:()=>{const[t,r]=i.useState(0),a=[{title:"步骤 1",description:"描述 1"},{title:"步骤 2",description:"描述 2"},{title:"步骤 3",description:"描述 3"}];return e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{current:t,items:a}),e.jsxs("div",{className:"p-4 bg-gray-50 rounded min-h-[100px] text-center",children:["步骤 ",t+1," 内容"]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{className:"px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50",onClick:()=>r(Math.max(0,t-1)),disabled:t===0,children:"上一步"}),e.jsx("button",{className:"px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90 disabled:opacity-50",onClick:()=>r(Math.min(a.length-1,t+1)),disabled:t===a.length-1,children:"下一步"})]})]})}},m={args:{current:1,direction:"vertical",onChange:n(),items:[{title:"已完成",description:"步骤描述信息"},{title:"进行中",description:"步骤描述信息"},{title:"等待中",description:"步骤描述信息"}]}},u={args:{current:1,direction:"vertical",stepSize:"small",onChange:n(),items:[{title:"已完成",description:"步骤描述信息"},{title:"进行中",description:"步骤描述信息"},{title:"等待中",description:"步骤描述信息"}]}},g={args:{current:1,status:"error",onChange:n(),items:[{title:"已完成",description:"步骤描述信息"},{title:"处理中",description:"步骤描述信息"},{title:"等待中",description:"步骤描述信息"}]}},h={args:{current:1,progressDot:!0,onChange:n(),items:[{title:"已完成",description:"步骤描述信息"},{title:"进行中",description:"步骤描述信息"},{title:"等待中",description:"步骤描述信息"}]}},y={args:{current:1,progressDot:!0,direction:"vertical",onChange:n(),items:[{title:"已完成",description:"步骤描述信息"},{title:"进行中",description:"步骤描述信息"},{title:"等待中",description:"步骤描述信息"}]}},x={parameters:{docs:{description:{story:"可点击的步骤条，用户可直接跳转到已完成的步骤，提升操作效率。"}}},render:()=>{const[t,r]=i.useState(0);return e.jsx(s,{current:t,onChange:r,items:[{title:"步骤 1",description:"点击跳转"},{title:"步骤 2",description:"点击跳转"},{title:"步骤 3",description:"点击跳转"}]})}},b={parameters:{docs:{description:{story:"行内样式的步骤条，视觉更轻量，适用于步骤数较少且空间紧凑的场景。"}}},render:()=>{const[t,r]=i.useState(0);return e.jsx(s,{current:t,variant:"inline",onChange:r,items:[{title:"步骤 1"},{title:"步骤 2"},{title:"步骤 3"}]})}},C={args:{current:1,variant:"outlined",onChange:n(),items:[{title:"已完成",description:"步骤描述信息"},{title:"进行中",description:"步骤描述信息"},{title:"等待中",description:"步骤描述信息"}]}},v={parameters:{docs:{description:{story:"带百分比进度的步骤条，适用于上传、处理等需要展示具体完成度的场景。"}}},render:()=>{const[t,r]=i.useState(30);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{current:0,percent:t,items:[{title:"步骤 1",description:"处理中..."},{title:"步骤 2",description:"等待中"},{title:"步骤 3",description:"等待中"}]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{className:"px-4 py-2 bg-gray-200 rounded hover:bg-gray-300",onClick:()=>r(Math.max(0,t-10)),children:"-10%"}),e.jsx("button",{className:"px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90",onClick:()=>r(Math.min(100,t+10)),children:"+10%"})]})]})}},S={args:{current:1,labelPlacement:"vertical",onChange:n(),items:[{title:"已完成",description:"步骤描述信息"},{title:"进行中",description:"步骤描述信息"},{title:"等待中",description:"步骤描述信息"}]}},f={render:()=>{const[t,r]=i.useState(0);return e.jsx(s,{current:t,onChange:r,items:[{title:"步骤 1",description:"可用"},{title:"步骤 2",description:"禁用",disabled:!0},{title:"步骤 3",description:"可用"}]})}},N={args:{onChange:n(),items:[{title:"等待",status:"wait",description:"等待开始"},{title:"处理中",status:"process",description:"正在处理"},{title:"已完成",status:"finish",description:"已经完成"},{title:"错误",status:"error",description:"发生错误"}]}},j={parameters:{docs:{description:{story:"综合展示多种变体、进度控制和步骤切换的完整示例，便于对比不同样式效果。"}}},render:()=>{const[t,r]=i.useState(0),[a,M]=i.useState(0),o=[{title:"选择商品",description:"选择您想要的商品"},{title:"确认订单",description:"查看并确认您的订单"},{title:"支付",description:"完成支付流程"},{title:"完成",description:"订单成功完成"}];return e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"mb-2 font-medium",children:"默认变体"}),e.jsx(s,{current:t,onChange:r,items:o})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"mb-2 font-medium",children:"边框变体"}),e.jsx(s,{current:t,variant:"outlined",onChange:r,items:o})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"mb-2 font-medium",children:"行内变体"}),e.jsx(s,{current:t,variant:"inline",onChange:r,items:o})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"mb-2 font-medium",children:"点状步骤条"}),e.jsx(s,{current:t,progressDot:!0,onChange:r,items:o})]}),e.jsxs("div",{children:[e.jsxs("h4",{className:"mb-2 font-medium",children:["带进度（步骤 ",t+1,"）"]}),e.jsx(s,{current:t,percent:a,items:o}),e.jsxs("div",{className:"mt-2 flex gap-2",children:[e.jsx("button",{className:"px-3 py-1 bg-gray-200 rounded text-sm",onClick:()=>M(Math.max(0,a-10)),children:"-10%"}),e.jsx("button",{className:"px-3 py-1 bg-primary text-primary-foreground rounded text-sm",onClick:()=>M(Math.min(100,a+10)),children:"+10%"})]})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{className:"px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50",onClick:()=>r(Math.max(0,t-1)),disabled:t===0,children:"上一步"}),e.jsx("button",{className:"px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90 disabled:opacity-50",onClick:()=>r(Math.min(o.length-1,t+1)),disabled:t===o.length-1,children:"下一步"})]})]})}},k={parameters:{docs:{description:{story:"简洁的步骤导航示例，仅展示标题，适合步骤简单、无需描述信息的场景。"}}},render:()=>{const[t,r]=i.useState(0);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{current:t,onChange:r,items:[{title:"第一步"},{title:"第二步"},{title:"第三步"}]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{className:"px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50",onClick:()=>r(Math.max(0,t-1)),disabled:t===0,children:"上一步"}),e.jsx("button",{className:"px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90 disabled:opacity-50",onClick:()=>r(Math.min(2,t+1)),disabled:t===2,children:"下一步"})]})]})}};var P,D,w,V,z;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    current: 1,
    onChange: fn(),
    items: [{
      title: '已完成',
      description: '步骤描述信息'
    }, {
      title: '进行中',
      description: '步骤描述信息',
      subTitle: '剩余 00:00:08'
    }, {
      title: '等待中',
      description: '步骤描述信息'
    }]
  }
}`,...(w=(D=c.parameters)==null?void 0:D.docs)==null?void 0:w.source},description:{story:"基础用法",...(z=(V=c.parameters)==null?void 0:V.docs)==null?void 0:z.description}}};var E,I,W,O,T;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    stepSize: 'small',
    current: 1,
    onChange: fn(),
    items: [{
      title: '已完成'
    }, {
      title: '进行中'
    }, {
      title: '等待中'
    }]
  }
}`,...(W=(I=d.parameters)==null?void 0:I.docs)==null?void 0:W.source},description:{story:"迷你版",...(T=(O=d.parameters)==null?void 0:O.docs)==null?void 0:T.description}}};var L,U,R,_,q;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    current: 1,
    onChange: fn(),
    items: [{
      title: '登录',
      icon: <User className="h-4 w-4" />
    }, {
      title: '验证',
      icon: <Mail className="h-4 w-4" />
    }, {
      title: '支付',
      icon: <CreditCard className="h-4 w-4" />
    }, {
      title: '完成',
      icon: <Smile className="h-4 w-4" />
    }]
  }
}`,...(R=(U=p.parameters)==null?void 0:U.docs)==null?void 0:R.source},description:{story:"带图标的步骤条",...(q=(_=p.parameters)==null?void 0:_.docs)==null?void 0:q.description}}};var A,B,F,G,H;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '可手动切换步骤的示例，配合上一步/下一步按钮引导用户按流程操作。'
      }
    }
  },
  render: () => {
    const [current, setCurrent] = useState(0);
    const steps = [{
      title: '步骤 1',
      description: '描述 1'
    }, {
      title: '步骤 2',
      description: '描述 2'
    }, {
      title: '步骤 3',
      description: '描述 3'
    }];
    return <div className="space-y-4">
        <Steps current={current} items={steps} />
        <div className="p-4 bg-gray-50 rounded min-h-[100px] text-center">
          步骤 {current + 1} 内容
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50" onClick={() => setCurrent(Math.max(0, current - 1))} disabled={current === 0}>
            上一步
          </button>
          <button className="px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90 disabled:opacity-50" onClick={() => setCurrent(Math.min(steps.length - 1, current + 1))} disabled={current === steps.length - 1}>
            下一步
          </button>
        </div>
      </div>;
  }
}`,...(F=(B=l.parameters)==null?void 0:B.docs)==null?void 0:F.source},description:{story:"步骤切换",...(H=(G=l.parameters)==null?void 0:G.docs)==null?void 0:H.description}}};var J,K,Q,X,Y;m.parameters={...m.parameters,docs:{...(J=m.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    current: 1,
    direction: 'vertical',
    onChange: fn(),
    items: [{
      title: '已完成',
      description: '步骤描述信息'
    }, {
      title: '进行中',
      description: '步骤描述信息'
    }, {
      title: '等待中',
      description: '步骤描述信息'
    }]
  }
}`,...(Q=(K=m.parameters)==null?void 0:K.docs)==null?void 0:Q.source},description:{story:"竖直方向的步骤条",...(Y=(X=m.parameters)==null?void 0:X.docs)==null?void 0:Y.description}}};var Z,$,ee,te,re;u.parameters={...u.parameters,docs:{...(Z=u.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    current: 1,
    direction: 'vertical',
    stepSize: 'small',
    onChange: fn(),
    items: [{
      title: '已完成',
      description: '步骤描述信息'
    }, {
      title: '进行中',
      description: '步骤描述信息'
    }, {
      title: '等待中',
      description: '步骤描述信息'
    }]
  }
}`,...(ee=($=u.parameters)==null?void 0:$.docs)==null?void 0:ee.source},description:{story:"竖直方向的小型步骤条",...(re=(te=u.parameters)==null?void 0:te.docs)==null?void 0:re.description}}};var se,ne,ie,ae,oe;g.parameters={...g.parameters,docs:{...(se=g.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    current: 1,
    status: 'error',
    onChange: fn(),
    items: [{
      title: '已完成',
      description: '步骤描述信息'
    }, {
      title: '处理中',
      description: '步骤描述信息'
    }, {
      title: '等待中',
      description: '步骤描述信息'
    }]
  }
}`,...(ie=(ne=g.parameters)==null?void 0:ne.docs)==null?void 0:ie.source},description:{story:"步骤运行错误",...(oe=(ae=g.parameters)==null?void 0:ae.docs)==null?void 0:oe.description}}};var ce,de,pe,le,me;h.parameters={...h.parameters,docs:{...(ce=h.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    current: 1,
    progressDot: true,
    onChange: fn(),
    items: [{
      title: '已完成',
      description: '步骤描述信息'
    }, {
      title: '进行中',
      description: '步骤描述信息'
    }, {
      title: '等待中',
      description: '步骤描述信息'
    }]
  }
}`,...(pe=(de=h.parameters)==null?void 0:de.docs)==null?void 0:pe.source},description:{story:"点状步骤条",...(me=(le=h.parameters)==null?void 0:le.docs)==null?void 0:me.description}}};var ue,ge,he,ye,xe;y.parameters={...y.parameters,docs:{...(ue=y.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    current: 1,
    progressDot: true,
    direction: 'vertical',
    onChange: fn(),
    items: [{
      title: '已完成',
      description: '步骤描述信息'
    }, {
      title: '进行中',
      description: '步骤描述信息'
    }, {
      title: '等待中',
      description: '步骤描述信息'
    }]
  }
}`,...(he=(ge=y.parameters)==null?void 0:ge.docs)==null?void 0:he.source},description:{story:"点状步骤条（竖直方向）",...(xe=(ye=y.parameters)==null?void 0:ye.docs)==null?void 0:xe.description}}};var be,Ce,ve,Se,fe;x.parameters={...x.parameters,docs:{...(be=x.parameters)==null?void 0:be.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '可点击的步骤条，用户可直接跳转到已完成的步骤，提升操作效率。'
      }
    }
  },
  render: () => {
    const [current, setCurrent] = useState(0);
    return <Steps current={current} onChange={setCurrent} items={[{
      title: '步骤 1',
      description: '点击跳转'
    }, {
      title: '步骤 2',
      description: '点击跳转'
    }, {
      title: '步骤 3',
      description: '点击跳转'
    }]} />;
  }
}`,...(ve=(Ce=x.parameters)==null?void 0:Ce.docs)==null?void 0:ve.source},description:{story:"可点击",...(fe=(Se=x.parameters)==null?void 0:Se.docs)==null?void 0:fe.description}}};var Ne,je,ke,Me,Pe;b.parameters={...b.parameters,docs:{...(Ne=b.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '行内样式的步骤条，视觉更轻量，适用于步骤数较少且空间紧凑的场景。'
      }
    }
  },
  render: () => {
    const [current, setCurrent] = useState(0);
    return <Steps current={current} variant="inline" onChange={setCurrent} items={[{
      title: '步骤 1'
    }, {
      title: '步骤 2'
    }, {
      title: '步骤 3'
    }]} />;
  }
}`,...(ke=(je=b.parameters)==null?void 0:je.docs)==null?void 0:ke.source},description:{story:"导航步骤（inline 变体）",...(Pe=(Me=b.parameters)==null?void 0:Me.docs)==null?void 0:Pe.description}}};var De,we,Ve,ze,Ee;C.parameters={...C.parameters,docs:{...(De=C.parameters)==null?void 0:De.docs,source:{originalSource:`{
  args: {
    current: 1,
    variant: 'outlined',
    onChange: fn(),
    items: [{
      title: '已完成',
      description: '步骤描述信息'
    }, {
      title: '进行中',
      description: '步骤描述信息'
    }, {
      title: '等待中',
      description: '步骤描述信息'
    }]
  }
}`,...(Ve=(we=C.parameters)==null?void 0:we.docs)==null?void 0:Ve.source},description:{story:"outlined 变体",...(Ee=(ze=C.parameters)==null?void 0:ze.docs)==null?void 0:Ee.description}}};var Ie,We,Oe,Te,Le;v.parameters={...v.parameters,docs:{...(Ie=v.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '带百分比进度的步骤条，适用于上传、处理等需要展示具体完成度的场景。'
      }
    }
  },
  render: () => {
    const [percent, setPercent] = useState(30);
    return <div className="space-y-4">
        <Steps current={0} percent={percent} items={[{
        title: '步骤 1',
        description: '处理中...'
      }, {
        title: '步骤 2',
        description: '等待中'
      }, {
        title: '步骤 3',
        description: '等待中'
      }]} />
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300" onClick={() => setPercent(Math.max(0, percent - 10))}>
            -10%
          </button>
          <button className="px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90" onClick={() => setPercent(Math.min(100, percent + 10))}>
            +10%
          </button>
        </div>
      </div>;
  }
}`,...(Oe=(We=v.parameters)==null?void 0:We.docs)==null?void 0:Oe.source},description:{story:"带有进度的步骤",...(Le=(Te=v.parameters)==null?void 0:Te.docs)==null?void 0:Le.description}}};var Ue,Re,_e,qe,Ae;S.parameters={...S.parameters,docs:{...(Ue=S.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
  args: {
    current: 1,
    labelPlacement: 'vertical',
    onChange: fn(),
    items: [{
      title: '已完成',
      description: '步骤描述信息'
    }, {
      title: '进行中',
      description: '步骤描述信息'
    }, {
      title: '等待中',
      description: '步骤描述信息'
    }]
  }
}`,...(_e=(Re=S.parameters)==null?void 0:Re.docs)==null?void 0:_e.source},description:{story:"标签放置位置",...(Ae=(qe=S.parameters)==null?void 0:qe.docs)==null?void 0:Ae.description}}};var Be,Fe,Ge,He,Je;f.parameters={...f.parameters,docs:{...(Be=f.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  render: () => {
    const [current, setCurrent] = useState(0);
    return <Steps current={current} onChange={setCurrent} items={[{
      title: '步骤 1',
      description: '可用'
    }, {
      title: '步骤 2',
      description: '禁用',
      disabled: true
    }, {
      title: '步骤 3',
      description: '可用'
    }]} />;
  }
}`,...(Ge=(Fe=f.parameters)==null?void 0:Fe.docs)==null?void 0:Ge.source},description:{story:"禁用步骤",...(Je=(He=f.parameters)==null?void 0:He.docs)==null?void 0:Je.description}}};var Ke,Qe,Xe,Ye,Ze;N.parameters={...N.parameters,docs:{...(Ke=N.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
  args: {
    onChange: fn(),
    items: [{
      title: '等待',
      status: 'wait',
      description: '等待开始'
    }, {
      title: '处理中',
      status: 'process',
      description: '正在处理'
    }, {
      title: '已完成',
      status: 'finish',
      description: '已经完成'
    }, {
      title: '错误',
      status: 'error',
      description: '发生错误'
    }]
  }
}`,...(Xe=(Qe=N.parameters)==null?void 0:Qe.docs)==null?void 0:Xe.source},description:{story:"自定义状态",...(Ze=(Ye=N.parameters)==null?void 0:Ye.docs)==null?void 0:Ze.description}}};var $e,et,tt,rt,st;j.parameters={...j.parameters,docs:{...($e=j.parameters)==null?void 0:$e.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '综合展示多种变体、进度控制和步骤切换的完整示例，便于对比不同样式效果。'
      }
    }
  },
  render: () => {
    const [current, setCurrent] = useState(0);
    const [percent, setPercent] = useState(0);
    const steps = [{
      title: '选择商品',
      description: '选择您想要的商品'
    }, {
      title: '确认订单',
      description: '查看并确认您的订单'
    }, {
      title: '支付',
      description: '完成支付流程'
    }, {
      title: '完成',
      description: '订单成功完成'
    }];
    return <div className="space-y-8">
        {/* Default variant */}
        <div>
          <h4 className="mb-2 font-medium">默认变体</h4>
          <Steps current={current} onChange={setCurrent} items={steps} />
        </div>

        {/* Outlined variant */}
        <div>
          <h4 className="mb-2 font-medium">边框变体</h4>
          <Steps current={current} variant="outlined" onChange={setCurrent} items={steps} />
        </div>

        {/* Inline variant */}
        <div>
          <h4 className="mb-2 font-medium">行内变体</h4>
          <Steps current={current} variant="inline" onChange={setCurrent} items={steps} />
        </div>

        {/* Progress dot */}
        <div>
          <h4 className="mb-2 font-medium">点状步骤条</h4>
          <Steps current={current} progressDot onChange={setCurrent} items={steps} />
        </div>

        {/* With progress */}
        <div>
          <h4 className="mb-2 font-medium">带进度（步骤 {current + 1}）</h4>
          <Steps current={current} percent={percent} items={steps} />
          <div className="mt-2 flex gap-2">
            <button className="px-3 py-1 bg-gray-200 rounded text-sm" onClick={() => setPercent(Math.max(0, percent - 10))}>
              -10%
            </button>
            <button className="px-3 py-1 bg-primary text-primary-foreground rounded text-sm" onClick={() => setPercent(Math.min(100, percent + 10))}>
              +10%
            </button>
          </div>
        </div>

        {/* Controls */}
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50" onClick={() => setCurrent(Math.max(0, current - 1))} disabled={current === 0}>
            上一步
          </button>
          <button className="px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90 disabled:opacity-50" onClick={() => setCurrent(Math.min(steps.length - 1, current + 1))} disabled={current === steps.length - 1}>
            下一步
          </button>
        </div>
      </div>;
  }
}`,...(tt=(et=j.parameters)==null?void 0:et.docs)==null?void 0:tt.source},description:{story:"完整功能示例",...(st=(rt=j.parameters)==null?void 0:rt.docs)==null?void 0:st.description}}};var nt,it,at,ot,ct;k.parameters={...k.parameters,docs:{...(nt=k.parameters)==null?void 0:nt.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '简洁的步骤导航示例，仅展示标题，适合步骤简单、无需描述信息的场景。'
      }
    }
  },
  render: () => {
    const [current, setCurrent] = useState(0);
    return <div className="space-y-4">
        <Steps current={current} onChange={setCurrent} items={[{
        title: '第一步'
      }, {
        title: '第二步'
      }, {
        title: '第三步'
      }]} />
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50" onClick={() => setCurrent(Math.max(0, current - 1))} disabled={current === 0}>
            上一步
          </button>
          <button className="px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90 disabled:opacity-50" onClick={() => setCurrent(Math.min(2, current + 1))} disabled={current === 2}>
            下一步
          </button>
        </div>
      </div>;
  }
}`,...(at=(it=k.parameters)==null?void 0:it.docs)==null?void 0:at.source},description:{story:"简单步骤导航",...(ct=(ot=k.parameters)==null?void 0:ot.docs)==null?void 0:ct.description}}};const Mt=["Default","Small","WithIcons","SwitchStep","Vertical","VerticalSmall","ErrorStatus","ProgressDot","ProgressDotVertical","Clickable","InlineVariant","OutlinedVariant","WithProgress","LabelPlacementVertical","DisabledStep","CustomStatus","CompleteExample","SimpleSteps"];export{x as Clickable,j as CompleteExample,N as CustomStatus,c as Default,f as DisabledStep,g as ErrorStatus,b as InlineVariant,S as LabelPlacementVertical,C as OutlinedVariant,h as ProgressDot,y as ProgressDotVertical,k as SimpleSteps,d as Small,l as SwitchStep,m as Vertical,u as VerticalSmall,p as WithIcons,v as WithProgress,Mt as __namedExportsOrder,kt as default};
