import{j as t}from"./jsx-runtime-CDt2p4po.js";import{r as D}from"./index-GiUgBvb1.js";import{a as N}from"./utils-BEhiKRD9.js";import{c as ye}from"./index-C08JwjkN.js";const ve=ye("sui-progress-gauge relative inline-flex items-center justify-center",{variants:{type:{arc:"",circle:""}},defaultVariants:{type:"arc"}}),xe=(r,l,u)=>{const s=(r-l)/2,i=r/2,o=r/2;if(u==="arc"){const e=Math.PI*s;return{radius:s,cx:i,cy:o,circumference:e}}const p=2*Math.PI*s;return{radius:s,cx:i,cy:o,circumference:p}},Ce=(r,l,u,s,i)=>{const p=[];if(i==="arc")for(let e=0;e<=10;e++){const a=Math.PI+e/10*Math.PI,n=u+s/2+4,c=u+s/2+10,f=r+n*Math.cos(a),m=l+n*Math.sin(a),d=r+c*Math.cos(a),g=l+c*Math.sin(a);p.push(t.jsx("line",{x1:f,y1:m,x2:d,y2:g,stroke:"currentColor",strokeWidth:1.5,className:"text-border"},e))}else for(let e=0;e<10;e++){const a=e/10*2*Math.PI-Math.PI/2,n=u+s/2+4,c=u+s/2+10,f=r+n*Math.cos(a),m=l+n*Math.sin(a),d=r+c*Math.cos(a),g=l+c*Math.sin(a);p.push(t.jsx("line",{x1:f,y1:m,x2:d,y2:g,stroke:"currentColor",strokeWidth:1.5,className:"text-border"},e))}return p},$=D.forwardRef((r,l)=>{const{className:u,value:s,max:i=100,type:o="arc",showScale:p=!1,gradient:e,format:a,width:n=200,strokeWidth:c=8,...f}=r,m=Math.min(i,Math.max(0,s)),d=i>0?m/i:0,g=D.useMemo(()=>a?a(m):`${Math.round(d*100)}%`,[m,d,a]),{radius:G,cx:T,cy:q,circumference:h}=xe(n,c,o),fe=h-d*h,I=o==="arc"?n/2+c:n,W=`sui-gauge-gradient-${Math.random().toString(36).slice(2,9)}`,he=e?`url(#${W})`:"currentColor";return t.jsxs("div",{ref:l,role:"progressbar","aria-valuenow":m,"aria-valuemin":0,"aria-valuemax":i,"aria-label":`进度 ${g}`,className:N("sui-progress-gauge",ve({type:o}),u),...f,children:[t.jsxs("svg",{width:n,height:I,viewBox:`0 0 ${n} ${I}`,className:o==="arc"?"-rotate-180":"-rotate-90",children:[e&&t.jsx("defs",{children:t.jsxs("linearGradient",{id:W,x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[t.jsx("stop",{offset:"0%",stopColor:e.from}),t.jsx("stop",{offset:"100%",stopColor:e.to})]})}),t.jsx("circle",{cx:T,cy:q,r:G,fill:"none",stroke:"currentColor",strokeWidth:c,className:"text-border",strokeDasharray:o==="arc"?h:void 0,strokeLinecap:"round"}),t.jsx("circle",{cx:T,cy:q,r:G,fill:"none",stroke:he,strokeWidth:c,strokeLinecap:"round",strokeDasharray:h,strokeDashoffset:fe,className:N("transition-all duration-300 ease-out",!e&&"text-primary-500")}),p&&Ce(T,q,G,c,o)]}),t.jsx("span",{className:N("absolute font-medium text-foreground",o==="arc"?"bottom-2":""),children:g})]})});$.displayName="ProgressGauge";$.__docgenInfo={description:"仪表盘进度组件",methods:[],displayName:"ProgressGauge",props:{value:{required:!0,tsType:{name:"number"},description:"当前值，0-100"},max:{required:!1,tsType:{name:"number"},description:"最大值，默认 100"},type:{required:!1,tsType:{name:"union",raw:"'arc' | 'circle'",elements:[{name:"literal",value:"'arc'"},{name:"literal",value:"'circle'"}]},description:"仪表盘类型。arc 为半圆弧形，circle 为完整圆形，默认 'arc'"},showScale:{required:!1,tsType:{name:"boolean"},description:"是否显示刻度线，默认 false"},gradient:{required:!1,tsType:{name:"signature",type:"object",raw:"{ from: string; to: string }",signature:{properties:[{key:"from",value:{name:"string",required:!0}},{key:"to",value:{name:"string",required:!0}}]}},description:"渐变色配置"},format:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => string",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"string"}}},description:"格式化显示值函数"},width:{required:!1,tsType:{name:"number"},description:"仪表盘宽度像素，默认 200"},strokeWidth:{required:!1,tsType:{name:"number"},description:"线条宽度像素，默认 8"}},composes:["HTMLAttributes","VariantProps"]};const Se=r=>t.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"500px",width:"100%"},children:t.jsx(r,{})}),je={title:"反馈/ProgressGauge 仪表盘进度",component:$,tags:["autodocs"],decorators:[Se],parameters:{layout:"padded",docs:{story:{height:"400px"}}},argTypes:{value:{control:"number",description:"当前值，0-100"},max:{control:"number",description:"最大值"},type:{control:"select",options:["arc","circle"],description:"仪表盘类型"},showScale:{control:"boolean",description:"是否显示刻度线"},width:{control:"number",description:"仪表盘宽度像素"},strokeWidth:{control:"number",description:"线条宽度像素"}}},y={args:{value:65,type:"arc"}},v={args:{value:72,type:"circle"}},x={args:{value:45,type:"arc",showScale:!0}},C={args:{value:80,type:"circle",showScale:!0}},S={args:{value:70,type:"arc",gradient:{from:"#6366f1",to:"#ec4899"}}},b={args:{value:55,type:"circle",gradient:{from:"#10b981",to:"#3b82f6"}}},k={args:{value:88,type:"arc",format:r=>`${r} 分`}},M={args:{value:60,type:"arc",width:280,strokeWidth:12}},w={args:{value:0,type:"arc"}},j={args:{value:100,type:"arc"}},P={args:{value:150,max:200,type:"circle",format:r=>`${r}/200`}};var V,A,R;y.parameters={...y.parameters,docs:{...(V=y.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    value: 65,
    type: 'arc'
  }
}`,...(R=(A=y.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};var F,_,z;v.parameters={...v.parameters,docs:{...(F=v.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    value: 72,
    type: 'circle'
  }
}`,...(z=(_=v.parameters)==null?void 0:_.docs)==null?void 0:z.source}}};var E,H,L;x.parameters={...x.parameters,docs:{...(E=x.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    value: 45,
    type: 'arc',
    showScale: true
  }
}`,...(L=(H=x.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var Z,B,O;C.parameters={...C.parameters,docs:{...(Z=C.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    value: 80,
    type: 'circle',
    showScale: true
  }
}`,...(O=(B=C.parameters)==null?void 0:B.docs)==null?void 0:O.source}}};var J,K,Q;S.parameters={...S.parameters,docs:{...(J=S.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    value: 70,
    type: 'arc',
    gradient: {
      from: '#6366f1',
      to: '#ec4899'
    }
  }
}`,...(Q=(K=S.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,X,Y;b.parameters={...b.parameters,docs:{...(U=b.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    value: 55,
    type: 'circle',
    gradient: {
      from: '#10b981',
      to: '#3b82f6'
    }
  }
}`,...(Y=(X=b.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var ee,re,ae;k.parameters={...k.parameters,docs:{...(ee=k.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    value: 88,
    type: 'arc',
    format: v => \`\${v} 分\`
  }
}`,...(ae=(re=k.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var te,se,oe;M.parameters={...M.parameters,docs:{...(te=M.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    value: 60,
    type: 'arc',
    width: 280,
    strokeWidth: 12
  }
}`,...(oe=(se=M.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var ne,ce,ie;w.parameters={...w.parameters,docs:{...(ne=w.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    value: 0,
    type: 'arc'
  }
}`,...(ie=(ce=w.parameters)==null?void 0:ce.docs)==null?void 0:ie.source}}};var le,ue,me;j.parameters={...j.parameters,docs:{...(le=j.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    value: 100,
    type: 'arc'
  }
}`,...(me=(ue=j.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var pe,de,ge;P.parameters={...P.parameters,docs:{...(pe=P.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    value: 150,
    max: 200,
    type: 'circle',
    format: v => \`\${v}/200\`
  }
}`,...(ge=(de=P.parameters)==null?void 0:de.docs)==null?void 0:ge.source}}};const Pe=["ArcDefault","CircleDefault","ArcWithScale","CircleWithScale","ArcGradient","CircleGradient","CustomFormat","CustomSize","ZeroValue","FullValue","CustomMax"];export{y as ArcDefault,S as ArcGradient,x as ArcWithScale,v as CircleDefault,b as CircleGradient,C as CircleWithScale,k as CustomFormat,P as CustomMax,M as CustomSize,j as FullValue,w as ZeroValue,Pe as __namedExportsOrder,je as default};
