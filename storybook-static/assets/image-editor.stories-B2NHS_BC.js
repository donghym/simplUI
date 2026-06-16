import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as n}from"./index-GiUgBvb1.js";import{a as F}from"./utils-BEhiKRD9.js";import{c as H}from"./index-C08JwjkN.js";import{c as f}from"./createLucideIcon-CZe00VV7.js";import{C as ue}from"./check-DytZnMFh.js";import{X as me}from"./x-B-5N0Ikz.js";/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pe=f("Crop",[["path",{d:"M6 2v14a2 2 0 0 0 2 2h14",key:"ron5a4"}],["path",{d:"M18 22V8a2 2 0 0 0-2-2H2",key:"7s9ehn"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const he=f("FlipHorizontal",[["path",{d:"M8 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h3",key:"1i73f7"}],["path",{d:"M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3",key:"saxlbk"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 14v2",key:"8jcxud"}],["path",{d:"M12 8v2",key:"1woqiv"}],["path",{d:"M12 2v2",key:"tus03m"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xe=f("FlipVertical",[["path",{d:"M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3",key:"14bfxa"}],["path",{d:"M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3",key:"14rx03"}],["path",{d:"M4 12H2",key:"rhcxmi"}],["path",{d:"M10 12H8",key:"s88cx1"}],["path",{d:"M16 12h-2",key:"10asgb"}],["path",{d:"M22 12h-2",key:"14jgyd"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=f("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ge=f("RotateCw",[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ye=f("ZoomIn",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fe=f("ZoomOut",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]),be=H("relative flex flex-col rounded-lg border border-border bg-background overflow-hidden",{variants:{status:{default:"",cropping:"ring-2 ring-primary-500"}},defaultVariants:{status:"default"}}),ve=H("flex items-center gap-1 border-t border-border bg-muted/30 px-3 py-2"),m=H("inline-flex items-center justify-center rounded-md p-2 text-sm text-foreground transition-colors hover:bg-muted hover:text-primary-600 disabled:opacity-50 disabled:cursor-not-allowed",{variants:{active:{true:"bg-primary-50 text-primary-600",false:""}},defaultVariants:{active:!1}});function ne(t,o,l){const s=Math.min(l/t.width,500/t.height,1)*o.zoom,r=t.width*s,d=t.height*s,i=o.rotation*Math.PI/180,u=Math.abs(Math.cos(i)),p=Math.abs(Math.sin(i));return{cw:r*u+d*p,ch:r*p+d*u,w:r,h:d,rad:i}}function Me(t,o,l,s){const r=t.getContext("2d");if(!r)return;const{cw:d,ch:i,w:u,h:p,rad:b}=ne(o,l,s);t.width=d,t.height=i,r.clearRect(0,0,d,i),r.save(),r.translate(d/2,i/2),r.rotate(b),r.scale(l.flipH?-1:1,l.flipV?-1:1),r.drawImage(o,-u/2,-p/2,u,p),r.restore()}function we(t,o,l,s,r,d,i){const{cw:u,ch:p}=ne(o,l,r),b=s.x/100*u,V=s.y/100*p,c=s.width/100*u,k=s.height/100*p,h=document.createElement("canvas");h.width=c,h.height=k;const v=h.getContext("2d");v&&(v.drawImage(t,b,V,c,k,0,0,c,k),d==null||d(h.toDataURL("image/png")),i==null||i({x:s.x,y:s.y,width:s.width,height:s.height}))}function ke(t,o,l){return{x:Math.max(0,Math.min(100-t.width,t.x+o)),y:Math.max(0,Math.min(100-t.height,t.y+l)),width:t.width,height:t.height}}function je(t,o,l){return{x:t.x,y:t.y,width:Math.max(10,Math.min(100-t.x,t.width+o)),height:Math.max(10,Math.min(100-t.y,t.height+l))}}const T=n.forwardRef((t,o)=>{const{className:l,src:s,onChange:r,showToolbar:d=!0,rotateStep:i=90,zoomStep:u=.1,cropMode:p=!1,onCropConfirm:b,...V}=t,[c,k]=n.useState({rotation:0,flipH:!1,flipV:!1,zoom:1}),[h,v]=n.useState(p),[x,ie]=n.useState({x:10,y:10,width:80,height:80}),[g,A]=n.useState(null),M=n.useRef(null),N=n.useRef(null),j=n.useRef(null);n.useEffect(()=>{const a=new Image;a.crossOrigin="anonymous",a.onload=()=>{j.current=a},a.src=s},[s]);const q=n.useCallback(()=>{var a;!M.current||!j.current||Me(M.current,j.current,c,((a=N.current)==null?void 0:a.clientWidth)??600)},[c]);n.useEffect(()=>{q()},[q]);const ce=n.useCallback(()=>{const a=M.current;a&&(r==null||r(a.toDataURL("image/png")))},[r]),le=n.useCallback(()=>{var a;!M.current||!j.current||(we(M.current,j.current,c,x,((a=N.current)==null?void 0:a.clientWidth)??600,r,b),v(!1))},[x,c,r,b]),_=n.useCallback((a,w)=>{a.preventDefault(),A({type:w,startMouse:{x:a.clientX,y:a.clientY},startRect:{...x}})},[x]);n.useEffect(()=>{if(!g)return;const a=D=>{const P=N.current;if(!P)return;const U=P.getBoundingClientRect(),G=(D.clientX-g.startMouse.x)/U.width*100,R=(D.clientY-g.startMouse.y)/U.height*100;ie(g.type==="move"?ke(g.startRect,G,R):je(g.startRect,G,R))},w=()=>A(null);return document.addEventListener("mousemove",a),document.addEventListener("mouseup",w),()=>{document.removeEventListener("mousemove",a),document.removeEventListener("mouseup",w)}},[g]);const y=a=>k(w=>({...w,...a})),de=()=>y({rotation:0,flipH:!1,flipV:!1,zoom:1});return e.jsxs("div",{ref:o,className:F(be({status:h?"cropping":"default"}),l),...V,children:[e.jsxs("div",{ref:N,className:"relative flex items-center justify-center bg-muted/20 p-4 min-h-[200px]",children:[e.jsx("canvas",{ref:M,className:"max-w-full"}),h&&e.jsxs("div",{className:"absolute inset-4 pointer-events-none",children:[e.jsx("div",{className:"absolute inset-0 bg-black/40"}),e.jsx("div",{className:"absolute border-2 border-primary-500 bg-transparent pointer-events-auto cursor-move",style:{left:`${x.x}%`,top:`${x.y}%`,width:`${x.width}%`,height:`${x.height}%`},onMouseDown:a=>_(a,"move"),children:e.jsx("div",{className:"absolute -right-1.5 -bottom-1.5 h-3 w-3 cursor-se-resize rounded-sm bg-primary-500 pointer-events-auto",onMouseDown:a=>_(a,"resize")})})]})]}),d&&e.jsxs("div",{className:ve(),children:[e.jsx("button",{type:"button",className:m(),onClick:()=>y({rotation:c.rotation-i}),title:"向左旋转","aria-label":"向左旋转",children:e.jsx(O,{className:"h-4 w-4"})}),e.jsx("button",{type:"button",className:m(),onClick:()=>y({rotation:c.rotation+i}),title:"向右旋转","aria-label":"向右旋转",children:e.jsx(ge,{className:"h-4 w-4"})}),e.jsx("button",{type:"button",className:m(),onClick:()=>y({flipH:!c.flipH}),title:"水平翻转","aria-label":"水平翻转",children:e.jsx(he,{className:"h-4 w-4"})}),e.jsx("button",{type:"button",className:m(),onClick:()=>y({flipV:!c.flipV}),title:"垂直翻转","aria-label":"垂直翻转",children:e.jsx(xe,{className:"h-4 w-4"})}),e.jsx("button",{type:"button",className:m(),onClick:()=>y({zoom:Math.min(3,c.zoom+u)}),title:"放大","aria-label":"放大",children:e.jsx(ye,{className:"h-4 w-4"})}),e.jsx("button",{type:"button",className:m(),onClick:()=>y({zoom:Math.max(.2,c.zoom-u)}),title:"缩小","aria-label":"缩小",children:e.jsx(fe,{className:"h-4 w-4"})}),e.jsx("div",{className:"mx-1 h-4 w-px bg-border"}),e.jsx("button",{type:"button",className:m({active:h}),onClick:()=>v(!h),title:"裁剪","aria-label":"裁剪",children:e.jsx(pe,{className:"h-4 w-4"})}),h&&e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",className:m(),onClick:le,title:"确认裁剪","aria-label":"确认裁剪",children:e.jsx(ue,{className:"h-4 w-4 text-success-600"})}),e.jsx("button",{type:"button",className:m(),onClick:()=>v(!1),title:"取消裁剪","aria-label":"取消裁剪",children:e.jsx(me,{className:"h-4 w-4 text-danger-500"})})]}),e.jsx("div",{className:"flex-1"}),e.jsx("button",{type:"button",className:m(),onClick:de,title:"重置","aria-label":"重置",children:e.jsx(O,{className:"h-4 w-4"})}),e.jsx("button",{type:"button",className:F(m(),"text-primary-600 font-medium text-xs px-3"),onClick:ce,title:"导出","aria-label":"导出",children:"导出"})]})]})});T.displayName="ImageEditor";T.__docgenInfo={description:"",methods:[],displayName:"ImageEditor",props:{src:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(dataUrl: string) => void",signature:{arguments:[{type:{name:"string"},name:"dataUrl"}],return:{name:"void"}}},description:""},showToolbar:{required:!1,tsType:{name:"boolean"},description:""},rotateStep:{required:!1,tsType:{name:"number"},description:""},zoomStep:{required:!1,tsType:{name:"number"},description:""},cropMode:{required:!1,tsType:{name:"boolean"},description:""},onCropConfirm:{required:!1,tsType:{name:"signature",type:"function",raw:"(cropArea: CropArea) => void",signature:{arguments:[{type:{name:"CropArea"},name:"cropArea"}],return:{name:"void"}}},description:""}},composes:["Omit","VariantProps"]};const Te={title:"媒体/ImageEditor 图片编辑器",component:T,tags:["autodocs"],parameters:{layout:"fullscreen"},argTypes:{showToolbar:{control:"boolean",description:"是否显示工具栏"},rotateStep:{control:"number",description:"旋转角度步长"},zoomStep:{control:"number",description:"缩放步长"},cropMode:{control:"boolean",description:"是否启用裁剪模式"}}},C="https://picsum.photos/id/10/800/600",S={args:{src:C}},E={args:{src:C,cropMode:!0}},I={args:{src:C,showToolbar:!1}},z={args:{src:C,rotateStep:45,zoomStep:.2}},L={render:()=>{const t=o=>{console.log("导出数据:",o.substring(0,50)+"...")};return e.jsx(T,{src:C,onChange:t})}};var W,Z,$;S.parameters={...S.parameters,docs:{...(W=S.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    src: SAMPLE_IMG
  }
}`,...($=(Z=S.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var X,B,Y;E.parameters={...E.parameters,docs:{...(X=E.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    src: SAMPLE_IMG,
    cropMode: true
  }
}`,...(Y=(B=E.parameters)==null?void 0:B.docs)==null?void 0:Y.source}}};var J,K,Q;I.parameters={...I.parameters,docs:{...(J=I.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    src: SAMPLE_IMG,
    showToolbar: false
  }
}`,...(Q=(K=I.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var ee,te,ae;z.parameters={...z.parameters,docs:{...(ee=z.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    src: SAMPLE_IMG,
    rotateStep: 45,
    zoomStep: 0.2
  }
}`,...(ae=(te=z.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var re,se,oe;L.parameters={...L.parameters,docs:{...(re=L.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => {
    const handleChange = (dataUrl: string) => {
      console.log('导出数据:', dataUrl.substring(0, 50) + '...');
    };
    return <ImageEditor src={SAMPLE_IMG} onChange={handleChange} />;
  }
}`,...(oe=(se=L.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};const Ve=["Default","CropMode","NoToolbar","CustomSteps","WithExport"];export{E as CropMode,z as CustomSteps,S as Default,I as NoToolbar,L as WithExport,Ve as __namedExportsOrder,Te as default};
