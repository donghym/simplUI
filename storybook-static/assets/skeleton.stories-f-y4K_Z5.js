import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as yt}from"./index-GiUgBvb1.js";import{a as jt}from"./utils-BEhiKRD9.js";import{c as kt}from"./index-C08JwjkN.js";const Ct=kt("flex gap-4",{variants:{}}),zt=kt("bg-gray-400 rounded",{variants:{variant:{text:"h-4 rounded",circle:"rounded-full",rect:"rounded-md"},active:{true:"animate-pulse",false:""}},defaultVariants:{variant:"text",active:!0}}),t=yt.forwardRef((a,T)=>{const{className:R,variant:k="text",width:i,height:r,active:W=!0,style:C,...E}=a,z={...C,width:typeof i=="number"?`${i}px`:i,height:typeof r=="number"?`${r}px`:r};return e.jsx("div",{ref:T,style:z,className:jt(zt({variant:k,active:W}),R),...E})});t.displayName="SkeletonElement";const q=yt.forwardRef((a,T)=>{const{className:R,loading:k=!0,children:i,active:r=!0,avatar:W=!1,avatarShape:C="circle",avatarSize:E=40,title:z=!0,titleWidth:Et="38%",paragraph:bt=!0,paragraphRows:L=3,paragraphLastWidth:qt="60%",...Tt}=a;if(!k&&i)return e.jsx(e.Fragment,{children:i});const Rt=()=>{if(!bt)return null;const A=[];for(let b=0;b<L;b++){const Wt=b===L-1;A.push(e.jsx(t,{variant:"text",active:r,width:Wt?qt:"100%",className:"mb-2"},b))}return A};return e.jsxs("div",{ref:T,className:jt(Ct(),R),"aria-busy":k||void 0,...Tt,children:[W&&e.jsx(t,{variant:C==="circle"?"circle":"rect",active:r,width:E,height:E,className:"flex-shrink-0"}),e.jsxs("div",{className:"flex-1",children:[z&&e.jsx(t,{variant:"text",active:r,width:Et,className:"mb-2"}),Rt()]})]})});q.displayName="Skeleton";q.__docgenInfo={description:"骨架屏组件",methods:[],displayName:"Skeleton",props:{loading:{required:!1,tsType:{name:"boolean"},description:"是否显示加载状态，默认 true"},children:{required:!1,tsType:{name:"ReactNode"},description:"实际内容，loading 为 false 时显示"},active:{required:!1,tsType:{name:"boolean"},description:"是否显示动画，默认 true"},avatar:{required:!1,tsType:{name:"boolean"},description:"是否显示头像占位符，默认 false"},avatarShape:{required:!1,tsType:{name:"union",raw:"'circle' | 'square'",elements:[{name:"literal",value:"'circle'"},{name:"literal",value:"'square'"}]},description:"头像形状，默认 circle"},avatarSize:{required:!1,tsType:{name:"number"},description:"头像尺寸(直径)，默认 40"},title:{required:!1,tsType:{name:"boolean"},description:"是否显示标题占位符，默认 true"},titleWidth:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"标题宽度，默认 '38%'"},paragraph:{required:!1,tsType:{name:"boolean"},description:"是否显示段落占位符，默认 true"},paragraphRows:{required:!1,tsType:{name:"number"},description:"段落行数，默认 3"},paragraphLastWidth:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"最后一行宽度，默认 '60%'"},className:{required:!1,tsType:{name:"string"},description:"自定义 className"}},composes:["Omit"]};t.__docgenInfo={description:"骨架屏单个元素组件",methods:[],displayName:"SkeletonElement",props:{variant:{required:!1,tsType:{name:"union",raw:"'text' | 'circle' | 'rect'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'circle'"},{name:"literal",value:"'rect'"}]},description:"骨架屏变体：text 横条形, circle 圆形, rect 方形。默认 text"},width:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"宽度，数字(px)或字符串(如 '100%')"},height:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"高度，数字(px)或字符串(如 '2rem')"},active:{required:!1,tsType:{name:"boolean"},description:"是否显示动画，默认 true"},className:{required:!1,tsType:{name:"string"},description:"自定义 className"}},composes:["Omit","VariantProps"]};const Ut={title:"反馈/Skeleton 骨架屏",component:q,tags:["autodocs"],parameters:{layout:"padded"},argTypes:{active:{control:"boolean",description:"是否显示动画"},avatar:{control:"boolean",description:"是否显示头像占位"},title:{control:"boolean",description:"是否显示标题占位"},paragraph:{control:"boolean",description:"是否显示段落占位"},loading:{control:"boolean",description:"是否处于加载状态"},avatarShape:{control:"select",options:["circle","square"],description:"头像形状"},avatarSize:{control:"number",description:"头像尺寸"},paragraphRows:{control:"number",description:"段落行数"}}},s={args:{active:!0}},n={args:{active:!0,avatar:!0,avatarSize:50}},c={args:{active:!0,avatar:!0,avatarShape:"square",avatarSize:60}},d={args:{active:!0,title:!1,paragraphRows:4}},o={args:{active:!0,paragraph:!1}},l={args:{active:!0,paragraphRows:5,paragraphLastWidth:"40%"}},h={args:{active:!0,avatar:!0,avatarShape:"square",avatarSize:60,titleWidth:"50%",paragraphRows:3}},m={args:{active:!1,avatar:!0}},v={render:()=>e.jsx(q,{loading:!1,children:e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("div",{className:"w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold",children:"U"}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-gray-900",children:"User Name"}),e.jsx("div",{className:"text-sm text-gray-500",children:"user@example.com"})]})]})})},p={render:()=>e.jsxs("div",{className:"space-y-2 w-full max-w-64",children:[e.jsx(t,{variant:"text",active:!0,width:"100%",height:16}),e.jsx(t,{variant:"text",active:!0,width:"75%",height:16}),e.jsx(t,{variant:"text",active:!0,width:"50%",height:16})]})},u={render:()=>e.jsxs("div",{className:"flex gap-3",children:[e.jsx(t,{variant:"circle",active:!0,width:48,height:48}),e.jsx(t,{variant:"circle",active:!0,width:32,height:32}),e.jsx(t,{variant:"circle",active:!0,width:64,height:64})]})},x={render:()=>e.jsxs("div",{className:"space-y-3 w-full max-w-64",children:[e.jsx(t,{variant:"rect",active:!0,width:"100%",height:120}),e.jsx(t,{variant:"rect",active:!0,width:"100%",height:80})]})},g={render:()=>e.jsx("div",{className:"space-y-4 w-full max-w-80",children:[1,2,3,4].map(a=>e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(t,{variant:"circle",active:!0,width:40,height:40}),e.jsxs("div",{className:"flex-1 space-y-2",children:[e.jsx(t,{variant:"text",active:!0,width:"60%",height:16}),e.jsx(t,{variant:"text",active:!0,width:"40%",height:12})]})]},a))})},w={render:()=>e.jsx("div",{className:"grid grid-cols-3 gap-4 w-full max-w-[600px]",children:[1,2,3].map(a=>e.jsxs("div",{className:"border rounded-lg p-4 space-y-3",children:[e.jsx(t,{variant:"rect",active:!0,width:"100%",height:100}),e.jsx(t,{variant:"text",active:!0,width:"80%",height:16}),e.jsx(t,{variant:"text",active:!0,width:"60%",height:12})]},a))})},S={render:()=>e.jsxs("div",{className:"w-full max-w-[600px] space-y-2",children:[e.jsxs("div",{className:"flex gap-4 pb-2 border-b",children:[e.jsx(t,{variant:"text",active:!0,width:"25%",height:20}),e.jsx(t,{variant:"text",active:!0,width:"25%",height:20}),e.jsx(t,{variant:"text",active:!0,width:"25%",height:20}),e.jsx(t,{variant:"text",active:!0,width:"25%",height:20})]}),[1,2,3,4,5].map(a=>e.jsxs("div",{className:"flex gap-4 py-2",children:[e.jsx(t,{variant:"text",active:!0,width:"25%",height:16}),e.jsx(t,{variant:"text",active:!0,width:"25%",height:16}),e.jsx(t,{variant:"text",active:!0,width:"25%",height:16}),e.jsx(t,{variant:"text",active:!0,width:"25%",height:16})]},a))]})},f={render:()=>e.jsxs("div",{className:"w-full max-w-[500px] space-y-4",children:[e.jsx(t,{variant:"text",active:!0,width:"70%",height:32}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(t,{variant:"circle",active:!0,width:36,height:36}),e.jsxs("div",{className:"flex-1 space-y-1",children:[e.jsx(t,{variant:"text",active:!0,width:"30%",height:16}),e.jsx(t,{variant:"text",active:!0,width:"20%",height:12})]})]}),e.jsx(t,{variant:"rect",active:!0,width:"100%",height:200}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(t,{variant:"text",active:!0,width:"100%",height:16}),e.jsx(t,{variant:"text",active:!0,width:"100%",height:16}),e.jsx(t,{variant:"text",active:!0,width:"90%",height:16}),e.jsx(t,{variant:"text",active:!0,width:"95%",height:16}),e.jsx(t,{variant:"text",active:!0,width:"60%",height:16})]})]})},N={render:()=>e.jsxs("div",{className:"w-full max-w-80 border rounded-xl p-6 space-y-4",children:[e.jsxs("div",{className:"flex flex-col items-center space-y-3",children:[e.jsx(t,{variant:"circle",active:!0,width:80,height:80}),e.jsx(t,{variant:"text",active:!0,width:"60%",height:20}),e.jsx(t,{variant:"text",active:!0,width:"40%",height:16})]}),e.jsxs("div",{className:"flex justify-center gap-6 py-2",children:[e.jsxs("div",{className:"text-center space-y-1",children:[e.jsx(t,{variant:"text",active:!0,width:40,height:20,className:"mx-auto"}),e.jsx(t,{variant:"text",active:!0,width:50,height:12,className:"mx-auto"})]}),e.jsxs("div",{className:"text-center space-y-1",children:[e.jsx(t,{variant:"text",active:!0,width:40,height:20,className:"mx-auto"}),e.jsx(t,{variant:"text",active:!0,width:50,height:12,className:"mx-auto"})]}),e.jsxs("div",{className:"text-center space-y-1",children:[e.jsx(t,{variant:"text",active:!0,width:40,height:20,className:"mx-auto"}),e.jsx(t,{variant:"text",active:!0,width:50,height:12,className:"mx-auto"})]})]}),e.jsxs("div",{className:"space-y-2 pt-2",children:[e.jsx(t,{variant:"text",active:!0,width:"100%",height:16}),e.jsx(t,{variant:"text",active:!0,width:"100%",height:16}),e.jsx(t,{variant:"text",active:!0,width:"80%",height:16})]})]})},y={render:()=>e.jsxs("div",{className:"flex gap-3",children:[e.jsx(t,{variant:"rect",active:!0,width:80,height:32,className:"rounded-md"}),e.jsx(t,{variant:"rect",active:!0,width:100,height:32,className:"rounded-md"}),e.jsx(t,{variant:"rect",active:!0,width:64,height:32,className:"rounded-md"})]})},j={render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-full max-w-64",children:[e.jsx(t,{variant:"rect",active:!0,width:"100%",height:160,className:"rounded-lg"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(t,{variant:"text",active:!0,width:"70%",height:16}),e.jsx(t,{variant:"text",active:!0,width:"50%",height:12})]})]})};var I,P,U,_,V;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    active: true
  }
}`,...(U=(P=s.parameters)==null?void 0:P.docs)==null?void 0:U.source},description:{story:"基础骨架屏",...(V=(_=s.parameters)==null?void 0:_.docs)==null?void 0:V.description}}};var O,B,D,$,F;n.parameters={...n.parameters,docs:{...(O=n.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    active: true,
    avatar: true,
    avatarSize: 50
  }
}`,...(D=(B=n.parameters)==null?void 0:B.docs)==null?void 0:D.source},description:{story:"带头像",...(F=($=n.parameters)==null?void 0:$.docs)==null?void 0:F.description}}};var G,H,J,K,M;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    active: true,
    avatar: true,
    avatarShape: 'square',
    avatarSize: 60
  }
}`,...(J=(H=c.parameters)==null?void 0:H.docs)==null?void 0:J.source},description:{story:"方形头像",...(M=(K=c.parameters)==null?void 0:K.docs)==null?void 0:M.description}}};var Q,X,Y,Z,ee;d.parameters={...d.parameters,docs:{...(Q=d.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    active: true,
    title: false,
    paragraphRows: 4
  }
}`,...(Y=(X=d.parameters)==null?void 0:X.docs)==null?void 0:Y.source},description:{story:"无标题",...(ee=(Z=d.parameters)==null?void 0:Z.docs)==null?void 0:ee.description}}};var te,ae,re,ie,se;o.parameters={...o.parameters,docs:{...(te=o.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    active: true,
    paragraph: false
  }
}`,...(re=(ae=o.parameters)==null?void 0:ae.docs)==null?void 0:re.source},description:{story:"无段落",...(se=(ie=o.parameters)==null?void 0:ie.docs)==null?void 0:se.description}}};var ne,ce,de,oe,le;l.parameters={...l.parameters,docs:{...(ne=l.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    active: true,
    paragraphRows: 5,
    paragraphLastWidth: '40%'
  }
}`,...(de=(ce=l.parameters)==null?void 0:ce.docs)==null?void 0:de.source},description:{story:"自定义行数",...(le=(oe=l.parameters)==null?void 0:oe.docs)==null?void 0:le.description}}};var he,me,ve,pe,ue;h.parameters={...h.parameters,docs:{...(he=h.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    active: true,
    avatar: true,
    avatarShape: 'square',
    avatarSize: 60,
    titleWidth: '50%',
    paragraphRows: 3
  }
}`,...(ve=(me=h.parameters)==null?void 0:me.docs)==null?void 0:ve.source},description:{story:"卡片骨架",...(ue=(pe=h.parameters)==null?void 0:pe.docs)==null?void 0:ue.description}}};var xe,ge,we,Se,fe;m.parameters={...m.parameters,docs:{...(xe=m.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  args: {
    active: false,
    avatar: true
  }
}`,...(we=(ge=m.parameters)==null?void 0:ge.docs)==null?void 0:we.source},description:{story:"无动画",...(fe=(Se=m.parameters)==null?void 0:Se.docs)==null?void 0:fe.description}}};var Ne,ye,je,ke,Ee;v.parameters={...v.parameters,docs:{...(Ne=v.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  render: () => <Skeleton loading={false}>
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">
          U
        </div>
        <div>
          <div className="font-medium text-gray-900">User Name</div>
          <div className="text-sm text-gray-500">user@example.com</div>
        </div>
      </div>
    </Skeleton>
}`,...(je=(ye=v.parameters)==null?void 0:ye.docs)==null?void 0:je.source},description:{story:"加载完成显示内容",...(Ee=(ke=v.parameters)==null?void 0:ke.docs)==null?void 0:Ee.description}}};var be,qe,Te,Re,We;p.parameters={...p.parameters,docs:{...(be=p.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: () => <div className="space-y-2 w-full max-w-64">
      <SkeletonElement variant="text" active width="100%" height={16} />
      <SkeletonElement variant="text" active width="75%" height={16} />
      <SkeletonElement variant="text" active width="50%" height={16} />
    </div>
}`,...(Te=(qe=p.parameters)==null?void 0:qe.docs)==null?void 0:Te.source},description:{story:"文本元素",...(We=(Re=p.parameters)==null?void 0:Re.docs)==null?void 0:We.description}}};var Ce,ze,Le,Ae,Ie;u.parameters={...u.parameters,docs:{...(Ce=u.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  render: () => <div className="flex gap-3">
      <SkeletonElement variant="circle" active width={48} height={48} />
      <SkeletonElement variant="circle" active width={32} height={32} />
      <SkeletonElement variant="circle" active width={64} height={64} />
    </div>
}`,...(Le=(ze=u.parameters)==null?void 0:ze.docs)==null?void 0:Le.source},description:{story:"圆形元素",...(Ie=(Ae=u.parameters)==null?void 0:Ae.docs)==null?void 0:Ie.description}}};var Pe,Ue,_e,Ve,Oe;x.parameters={...x.parameters,docs:{...(Pe=x.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  render: () => <div className="space-y-3 w-full max-w-64">
      <SkeletonElement variant="rect" active width="100%" height={120} />
      <SkeletonElement variant="rect" active width="100%" height={80} />
    </div>
}`,...(_e=(Ue=x.parameters)==null?void 0:Ue.docs)==null?void 0:_e.source},description:{story:"矩形元素",...(Oe=(Ve=x.parameters)==null?void 0:Ve.docs)==null?void 0:Oe.description}}};var Be,De,$e,Fe,Ge;g.parameters={...g.parameters,docs:{...(Be=g.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 w-full max-w-80">
      {[1, 2, 3, 4].map(i => <div key={i} className="flex items-center gap-3">
          <SkeletonElement variant="circle" active width={40} height={40} />
          <div className="flex-1 space-y-2">
            <SkeletonElement variant="text" active width="60%" height={16} />
            <SkeletonElement variant="text" active width="40%" height={12} />
          </div>
        </div>)}
    </div>
}`,...($e=(De=g.parameters)==null?void 0:De.docs)==null?void 0:$e.source},description:{story:"列表骨架",...(Ge=(Fe=g.parameters)==null?void 0:Fe.docs)==null?void 0:Ge.description}}};var He,Je,Ke,Me,Qe;w.parameters={...w.parameters,docs:{...(He=w.parameters)==null?void 0:He.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-3 gap-4 w-full max-w-[600px]">
      {[1, 2, 3].map(i => <div key={i} className="border rounded-lg p-4 space-y-3">
          <SkeletonElement variant="rect" active width="100%" height={100} />
          <SkeletonElement variant="text" active width="80%" height={16} />
          <SkeletonElement variant="text" active width="60%" height={12} />
        </div>)}
    </div>
}`,...(Ke=(Je=w.parameters)==null?void 0:Je.docs)==null?void 0:Ke.source},description:{story:"卡片列表骨架",...(Qe=(Me=w.parameters)==null?void 0:Me.docs)==null?void 0:Qe.description}}};var Xe,Ye,Ze,et,tt;S.parameters={...S.parameters,docs:{...(Xe=S.parameters)==null?void 0:Xe.docs,source:{originalSource:`{
  render: () => <div className="w-full max-w-[600px] space-y-2">
      {/* 表头 */}
      <div className="flex gap-4 pb-2 border-b">
        <SkeletonElement variant="text" active width="25%" height={20} />
        <SkeletonElement variant="text" active width="25%" height={20} />
        <SkeletonElement variant="text" active width="25%" height={20} />
        <SkeletonElement variant="text" active width="25%" height={20} />
      </div>
      {/* 行 */}
      {[1, 2, 3, 4, 5].map(i => <div key={i} className="flex gap-4 py-2">
          <SkeletonElement variant="text" active width="25%" height={16} />
          <SkeletonElement variant="text" active width="25%" height={16} />
          <SkeletonElement variant="text" active width="25%" height={16} />
          <SkeletonElement variant="text" active width="25%" height={16} />
        </div>)}
    </div>
}`,...(Ze=(Ye=S.parameters)==null?void 0:Ye.docs)==null?void 0:Ze.source},description:{story:"表格骨架",...(tt=(et=S.parameters)==null?void 0:et.docs)==null?void 0:tt.description}}};var at,rt,it,st,nt;f.parameters={...f.parameters,docs:{...(at=f.parameters)==null?void 0:at.docs,source:{originalSource:`{
  render: () => <div className="w-full max-w-[500px] space-y-4">
      <SkeletonElement variant="text" active width="70%" height={32} />
      <div className="flex items-center gap-3">
        <SkeletonElement variant="circle" active width={36} height={36} />
        <div className="flex-1 space-y-1">
          <SkeletonElement variant="text" active width="30%" height={16} />
          <SkeletonElement variant="text" active width="20%" height={12} />
        </div>
      </div>
      <SkeletonElement variant="rect" active width="100%" height={200} />
      <div className="space-y-2">
        <SkeletonElement variant="text" active width="100%" height={16} />
        <SkeletonElement variant="text" active width="100%" height={16} />
        <SkeletonElement variant="text" active width="90%" height={16} />
        <SkeletonElement variant="text" active width="95%" height={16} />
        <SkeletonElement variant="text" active width="60%" height={16} />
      </div>
    </div>
}`,...(it=(rt=f.parameters)==null?void 0:rt.docs)==null?void 0:it.source},description:{story:"文章骨架",...(nt=(st=f.parameters)==null?void 0:st.docs)==null?void 0:nt.description}}};var ct,dt,ot,lt,ht;N.parameters={...N.parameters,docs:{...(ct=N.parameters)==null?void 0:ct.docs,source:{originalSource:`{
  render: () => <div className="w-full max-w-80 border rounded-xl p-6 space-y-4">
      <div className="flex flex-col items-center space-y-3">
        <SkeletonElement variant="circle" active width={80} height={80} />
        <SkeletonElement variant="text" active width="60%" height={20} />
        <SkeletonElement variant="text" active width="40%" height={16} />
      </div>
      <div className="flex justify-center gap-6 py-2">
        <div className="text-center space-y-1">
          <SkeletonElement variant="text" active width={40} height={20} className="mx-auto" />
          <SkeletonElement variant="text" active width={50} height={12} className="mx-auto" />
        </div>
        <div className="text-center space-y-1">
          <SkeletonElement variant="text" active width={40} height={20} className="mx-auto" />
          <SkeletonElement variant="text" active width={50} height={12} className="mx-auto" />
        </div>
        <div className="text-center space-y-1">
          <SkeletonElement variant="text" active width={40} height={20} className="mx-auto" />
          <SkeletonElement variant="text" active width={50} height={12} className="mx-auto" />
        </div>
      </div>
      <div className="space-y-2 pt-2">
        <SkeletonElement variant="text" active width="100%" height={16} />
        <SkeletonElement variant="text" active width="100%" height={16} />
        <SkeletonElement variant="text" active width="80%" height={16} />
      </div>
    </div>
}`,...(ot=(dt=N.parameters)==null?void 0:dt.docs)==null?void 0:ot.source},description:{story:"复杂场景 - 用户资料卡片",...(ht=(lt=N.parameters)==null?void 0:lt.docs)==null?void 0:ht.description}}};var mt,vt,pt,ut,xt;y.parameters={...y.parameters,docs:{...(mt=y.parameters)==null?void 0:mt.docs,source:{originalSource:`{
  render: () => <div className="flex gap-3">
      <SkeletonElement variant="rect" active width={80} height={32} className="rounded-md" />
      <SkeletonElement variant="rect" active width={100} height={32} className="rounded-md" />
      <SkeletonElement variant="rect" active width={64} height={32} className="rounded-md" />
    </div>
}`,...(pt=(vt=y.parameters)==null?void 0:vt.docs)==null?void 0:pt.source},description:{story:"按钮骨架",...(xt=(ut=y.parameters)==null?void 0:ut.docs)==null?void 0:xt.description}}};var gt,wt,St,ft,Nt;j.parameters={...j.parameters,docs:{...(gt=j.parameters)==null?void 0:gt.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 w-full max-w-64">
      <SkeletonElement variant="rect" active width="100%" height={160} className="rounded-lg" />
      <div className="space-y-2">
        <SkeletonElement variant="text" active width="70%" height={16} />
        <SkeletonElement variant="text" active width="50%" height={12} />
      </div>
    </div>
}`,...(St=(wt=j.parameters)==null?void 0:wt.docs)==null?void 0:St.source},description:{story:"图片骨架",...(Nt=(ft=j.parameters)==null?void 0:ft.docs)==null?void 0:Nt.description}}};const _t=["Default","WithAvatar","SquareAvatar","NoTitle","NoParagraph","CustomRows","CardSkeleton","Inactive","WithChildren","TextElement","CircleElement","RectElement","ListSkeleton","CardListSkeleton","TableSkeleton","ArticleSkeleton","UserProfileSkeleton","ButtonSkeleton","ImageSkeleton"];export{f as ArticleSkeleton,y as ButtonSkeleton,w as CardListSkeleton,h as CardSkeleton,u as CircleElement,l as CustomRows,s as Default,j as ImageSkeleton,m as Inactive,g as ListSkeleton,o as NoParagraph,d as NoTitle,x as RectElement,c as SquareAvatar,S as TableSkeleton,p as TextElement,N as UserProfileSkeleton,n as WithAvatar,v as WithChildren,_t as __namedExportsOrder,Ut as default};
