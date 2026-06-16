import{j as t}from"./jsx-runtime-CDt2p4po.js";import{r as i}from"./index-GiUgBvb1.js";import{a as C}from"./utils-BEhiKRD9.js";import{c as Se}from"./index-C08JwjkN.js";import{c as $}from"./createLucideIcon-CZe00VV7.js";import{L as V}from"./loader-circle-CulI208u.js";import{X as J}from"./x-B-5N0Ikz.js";import{C as Ge}from"./circle-check-5HUO4MLI.js";/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q=$("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y=$("File",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}]]);/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Je=$("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]),Qe=Se("relative flex flex-col items-center justify-center gap-2 rounded-md border-2 border-dashed border-border bg-background p-6 transition-colors duration-200 cursor-pointer hover:border-primary-400 hover:bg-primary-50",{variants:{disabled:{true:"cursor-not-allowed opacity-50 hover:border-border hover:bg-background",false:""},isDragOver:{true:"border-primary-500 bg-primary-50",false:""}},defaultVariants:{disabled:!1,isDragOver:!1}}),Ye=Se("flex items-center gap-2 rounded-md border bg-white px-3 py-2",{variants:{status:{uploading:"border-primary-300",done:"border-success-300",error:"border-danger-300 bg-danger-50",default:"border-border"}},defaultVariants:{status:"default"}});let ee=0;function et(){return ee+=1,`upload-${Date.now()}-${ee}`}function tt(a){return{uid:et(),name:a.name,size:a.size,type:a.type,originFileObj:a}}function rt(a){return new Promise((u,p)=>{if(!a.type.startsWith("image/")){u("");return}const c=new FileReader;c.onload=()=>u(c.result),c.onerror=p,c.readAsDataURL(a)})}const g=i.forwardRef((a,u)=>{const{className:p,fileList:c,defaultFileList:m=[],onChange:l,customRequest:v,multiple:y=!1,accept:S,maxSize:I,maxCount:b,beforeUpload:z,disabled:d=!1,listType:M="text",onPreview:k,onRemove:B,children:Ie,dragClassName:ze,...Me}=a,_=i.useRef(null),[Be,Ae]=i.useState(m),[H,A]=i.useState(!1),O=c!==void 0,w=O?c:Be,h=i.useRef(w);h.current=w;const f=i.useCallback((e,s)=>{h.current=e,O||Ae(e),l==null||l({file:s,fileList:e})},[O,l]),x=i.useCallback((e,s)=>{const o=[...h.current],r=o.findIndex(W=>W.uid===e);if(r===-1||!o[r])return null;const n={...o[r],...s};return o[r]=n,[o,n]},[]),K=i.useCallback((e,s)=>{const o=x(e.uid,{status:"uploading",percent:0});if(o&&f(o[0],o[1]),v)v({file:s,onProgress:r=>{const n=x(e.uid,{percent:r});n&&f(n[0],n[1])},onSuccess:r=>{const n=x(e.uid,{status:"done",percent:100,response:r});n&&f(n[0],n[1])},onError:r=>{const n=x(e.uid,{status:"error",error:r});n&&f(n[0],n[1])}});else{const r=x(e.uid,{status:"done",percent:100});r&&f(r[0],r[1])}},[v,x,f]),N=i.useCallback(async e=>{if(d)return;const s=Array.from(e),o=h.current;if(b!==void 0){const r=b-o.length;if(r<=0)return;s.splice(r)}for(const r of s){if(I!==void 0&&r.size>I)continue;if(z){const Xe=o.map(Ze=>Ze.originFileObj).filter(Boolean);if(await z(r,Xe)===!1)continue}const n=tt(r);try{n.thumbUrl=await rt(r)}catch{}const W=[...h.current,n];f(W,n),K(n,r)}},[d,b,I,z,f,K]),Oe=i.useCallback(e=>{e.preventDefault(),d||A(!0)},[d]),We=i.useCallback(e=>{e.preventDefault()},[]),Ve=i.useCallback(e=>{e.preventDefault(),A(!1)},[]),$e=i.useCallback(e=>{e.preventDefault(),A(!1),!d&&e.dataTransfer.files.length>0&&N(e.dataTransfer.files)},[d,N]),X=i.useCallback(()=>{var e;d||(e=_.current)==null||e.click()},[d]),_e=i.useCallback(e=>{e.target.files&&e.target.files.length>0&&(N(e.target.files),e.target.value="")},[N]),Z=i.useCallback(async(e,s)=>{if(s.stopPropagation(),d)return;if(B){const r=B(e);if(r===!1||r instanceof Promise&&await r===!1)return}const o=h.current.filter(r=>r.uid!==e.uid);f(o,e)},[d,B,f]),G=i.useCallback((e,s)=>{s.stopPropagation(),k==null||k(e)},[k]);function He(e){const s=e.status??"default",o=M==="picture"&&!!e.thumbUrl;if(M==="picture-card"){const r=!!e.thumbUrl&&s!=="error";return t.jsxs("div",{className:C("relative flex h-[104px] w-[104px] shrink-0 items-center justify-center rounded-md border bg-white",s==="uploading"&&"border-primary-300",s==="done"&&"border-success-300",s==="error"&&"border-danger-300 bg-danger-50",s==="default"&&"border-border"),children:[r?t.jsxs(t.Fragment,{children:[t.jsx("img",{src:e.thumbUrl,alt:e.name,className:"h-full w-full rounded-md object-cover"}),s==="uploading"&&t.jsx("div",{className:"absolute inset-0 flex items-center justify-center rounded-md bg-black/30",children:t.jsx(V,{className:"h-6 w-6 animate-spin text-white"})})]}):t.jsxs("div",{className:"flex flex-col items-center gap-1 text-muted-foreground",children:[s==="uploading"?t.jsx(V,{className:"h-6 w-6 animate-spin"}):s==="error"?t.jsx(Q,{className:"h-6 w-6 text-danger-400"}):t.jsx(Y,{className:"h-6 w-6"}),t.jsx("span",{className:"max-w-[80px] truncate text-xs",children:e.name})]}),s!=="uploading"&&t.jsx("button",{type:"button",onClick:n=>Z(e,n),"aria-label":"Remove file",className:"absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-foreground text-white hover:bg-foreground",children:t.jsx(J,{className:"h-3 w-3"})})]},e.uid)}return t.jsxs("div",{className:Ye({status:s}),children:[s==="uploading"?t.jsx(V,{className:"h-4 w-4 shrink-0 animate-spin text-primary-500","aria-hidden":"true"}):s==="error"?t.jsx(Q,{className:"h-4 w-4 shrink-0 text-danger-400","aria-hidden":"true"}):s==="done"?t.jsx(Ge,{className:"h-4 w-4 shrink-0 text-success-500","aria-hidden":"true"}):o?t.jsx("img",{src:e.thumbUrl,alt:e.name,className:"h-8 w-8 shrink-0 cursor-pointer rounded object-cover",onClick:r=>G(e,r)}):t.jsx(Y,{className:"h-4 w-4 shrink-0 text-muted-foreground","aria-hidden":"true"}),t.jsx("span",{className:C("min-w-0 flex-1 truncate text-sm",s==="error"&&"text-danger-600",o&&"cursor-pointer text-primary-600",s==="default"&&"text-foreground"),title:e.name,onClick:o?r=>G(e,r):void 0,children:e.name}),s!=="uploading"&&t.jsx("button",{type:"button",onClick:r=>Z(e,r),"aria-label":"Remove file",className:"shrink-0 text-muted-foreground hover:text-foreground",children:t.jsx(J,{className:"h-4 w-4"})})]},e.uid)}const Ke=!b||w.length<b;return t.jsxs("div",{ref:u,className:C("w-full",p),...Me,children:[t.jsx("input",{ref:_,type:"file",className:"hidden",multiple:y,accept:S,onChange:_e,disabled:d}),w.length>0&&t.jsx("div",{className:C("mb-3 gap-2",M==="picture-card"?"flex flex-row flex-wrap":"flex flex-col"),children:w.map(He)}),Ke&&t.jsx("div",{role:"button",tabIndex:d?-1:0,"aria-disabled":d||void 0,onClick:X,onKeyDown:e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),X())},onDragEnter:Oe,onDragLeave:Ve,onDragOver:We,onDrop:$e,className:C(Qe({disabled:d,isDragOver:H}),H&&ze),children:Ie??t.jsxs(t.Fragment,{children:[t.jsx(Je,{className:"h-8 w-8 text-muted-foreground","aria-hidden":"true"}),t.jsx("span",{className:"text-sm text-muted-foreground",children:"点击或拖拽文件到此区域上传"})]})})]})});g.displayName="Upload";g.__docgenInfo={description:"",methods:[],displayName:"Upload",props:{fileList:{required:!1,tsType:{name:"Array",elements:[{name:"UploadFile"}],raw:"UploadFile[]"},description:"文件列表（受控模式），与 onChange 配合使用，传入后组件不再自行维护 fileList 状态"},defaultFileList:{required:!1,tsType:{name:"Array",elements:[{name:"UploadFile"}],raw:"UploadFile[]"},description:"非受控模式下的默认文件列表，仅组件初始化时生效"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(info: UploadChangeInfo) => void",signature:{arguments:[{type:{name:"UploadChangeInfo"},name:"info"}],return:{name:"void"}}},description:"文件列表变化时触发，携带触发变化的文件及完整列表"},customRequest:{required:!1,tsType:{name:"signature",type:"function",raw:"(options: CustomRequestOptions) => void",signature:{arguments:[{type:{name:"CustomRequestOptions"},name:"options"}],return:{name:"void"}}},description:"自定义上传请求函数，接收文件及进度/成功/失败回调"},action:{required:!1,tsType:{name:"string"},description:"上传地址 URL，提供后使用内置 fetch 执行上传"},headers:{required:!1,tsType:{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<string, string>"},description:"上传请求头部，配合 action 使用"},data:{required:!1,tsType:{name:"Record",elements:[{name:"string"},{name:"union",raw:"string | Blob",elements:[{name:"string"},{name:"Blob"}]}],raw:"Record<string, string | Blob>"},description:"上传附加表单数据，配合 action 使用，键为字段名值为字段值"},name:{required:!1,tsType:{name:"string"},description:"文件参数字段名，配合 action 使用，默认 'file'"},multiple:{required:!1,tsType:{name:"boolean"},description:"是否支持多选文件，默认 false，同时影响 input multiple 属性"},accept:{required:!1,tsType:{name:"string"},description:"接受的文件类型 MIME 或扩展名，如 'image/*' 或 '.png,.jpg'"},maxSize:{required:!1,tsType:{name:"number"},description:"单个文件最大大小（字节），超过此值的文件将被跳过"},maxCount:{required:!1,tsType:{name:"number"},description:"最大文件数量，超过后不再接受新文件"},beforeUpload:{required:!1,tsType:{name:"signature",type:"function",raw:"(file: File, fileList: File[]) => boolean | Promise<boolean>",signature:{arguments:[{type:{name:"File"},name:"file"},{type:{name:"Array",elements:[{name:"File"}],raw:"File[]"},name:"fileList"}],return:{name:"union",raw:"boolean | Promise<boolean>",elements:[{name:"boolean"},{name:"Promise",elements:[{name:"boolean"}],raw:"Promise<boolean>"}]}}},description:"上传前检测函数，接收文件及当前文件列表，返回 false 或 Promise<false> 阻止上传"},disabled:{required:!1,tsType:{name:"boolean"},description:"是否禁用上传，true 时禁止点击和拖拽操作"},listType:{required:!1,tsType:{name:"union",raw:"'text' | 'picture' | 'picture-card'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'picture'"},{name:"literal",value:"'picture-card'"}]},description:"文件列表展示类型：text 纯文本列表、picture 图文列表、picture-card 卡片列表"},onPreview:{required:!1,tsType:{name:"signature",type:"function",raw:"(file: UploadFile) => void",signature:{arguments:[{type:{name:"UploadFile"},name:"file"}],return:{name:"void"}}},description:"文件预览回调，点击文件时触发，通常用于打开大图或文件预览"},onRemove:{required:!1,tsType:{name:"signature",type:"function",raw:"(file: UploadFile) => boolean | Promise<boolean> | void",signature:{arguments:[{type:{name:"UploadFile"},name:"file"}],return:{name:"union",raw:"boolean | Promise<boolean> | void",elements:[{name:"boolean"},{name:"Promise",elements:[{name:"boolean"}],raw:"Promise<boolean>"},{name:"void"}]}}},description:"文件移除前回调，返回 false 或 Promise<false> 阻止移除"},children:{required:!1,tsType:{name:"ReactNode"},description:"自定义触发上传区域的子内容，不传则显示默认上传图标与提示文案"},className:{required:!1,tsType:{name:"string"},description:"自定义类名，通过 cn() + twMerge 合并，可覆盖默认样式"},dragClassName:{required:!1,tsType:{name:"string"},description:"拖拽悬停时额外追加的类名，仅在 drag over 时生效"}}};const ut={title:"数据录入/Upload 上传",component:g,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"上传组件用于将本地文件上传到服务器。适用于头像上传、附件提交、图片管理等场景，支持拖拽上传、进度展示、多文件列表和自定义触发区域。"}}},argTypes:{accept:{control:"text",description:"接受的文件类型 MIME 或扩展名，如 image/* 或 .png,.jpg"},multiple:{control:"boolean",description:"是否支持多选文件，默认 false"},disabled:{control:"boolean",description:"是否禁用上传，true 时禁止点击和拖拽操作"},listType:{control:"radio",options:["text","picture","picture-card"],description:"文件列表展示类型：text 纯文本列表、picture 图文列表、picture-card 卡片列表"},maxCount:{control:"number",description:"最大文件数量，超过后不再接受新文件"}}},U={args:{}},F={args:{defaultFileList:[{uid:"1",name:"design-spec.pdf",size:102400,type:"application/pdf",status:"done"}]}},T={parameters:{docs:{description:{story:"图片卡片样式展示上传列表，适用于相册管理、商品图片上传等需要预览图的场景。"}}},render:()=>t.jsx(g,{listType:"picture-card",defaultFileList:[{uid:"1",name:"cat.png",size:2048,type:"image/png",status:"done",thumbUrl:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Crect fill='%23f3f4f6' width='80' height='80'/%3E%3Ctext fill='%239ca3af' font-family='sans-serif' font-size='12' x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle'%3ECat%3C/text%3E%3C/svg%3E"},{uid:"2",name:"dog.png",size:2048,type:"image/png",status:"done",thumbUrl:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Crect fill='%23f3f4f6' width='80' height='80'/%3E%3Ctext fill='%239ca3af' font-family='sans-serif' font-size='12' x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle'%3EDog%3C/text%3E%3C/svg%3E"},{uid:"3",name:"uploading.png",size:2048,type:"image/png",status:"uploading",percent:60}]})},R={args:{accept:"image/*",listType:"picture"}},q={args:{multiple:!0}},E={args:{disabled:!0}},D={parameters:{docs:{description:{story:"受控文件列表示例，展示如何在外部管理上传文件列表状态。"}}},render:()=>{const[a,u]=i.useState([{uid:"1",name:"report.docx",size:51200,type:"application/msword",status:"done"}]);return t.jsxs("div",{className:"flex flex-col gap-2 w-96",children:[t.jsx(g,{fileList:a,onChange:({fileList:p})=>u(p)}),t.jsxs("p",{className:"text-xs text-gray-500",children:["受控列表，共 ",a.length," 个文件"]})]})}},P={render:()=>t.jsx(g,{children:t.jsxs("div",{className:"flex flex-col items-center justify-center gap-2 py-8",children:[t.jsx("svg",{className:"h-10 w-10 text-muted-foreground",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"})}),t.jsx("p",{className:"text-sm text-muted-foreground",children:"点击或拖拽文件到此区域上传"}),t.jsx("p",{className:"text-xs text-muted-foreground",children:"支持单个或批量上传"})]})})},L={parameters:{docs:{description:{story:"圆形头像上传示例，限制单张图片并实时预览，适用于个人资料、用户头像设置等场景。"}}},render:()=>{var c;const[a,u]=i.useState([]),p=a.length>0&&((c=a[0])!=null&&c.thumbUrl)?a[0].thumbUrl:null;return t.jsxs("div",{className:"flex flex-col items-center gap-4",children:[t.jsx(g,{accept:"image/*",maxCount:1,fileList:a,onChange:({fileList:m})=>u(m.slice(0,1)),children:t.jsx("div",{style:{width:96,height:96,borderRadius:"50%",border:"2px dashed #d9d9d9",display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden",background:"#fafafa",cursor:"pointer",transition:"border-color 0.2s"},onMouseEnter:m=>{m.currentTarget.style.borderColor="#1677ff"},onMouseLeave:m=>{m.currentTarget.style.borderColor="#d9d9d9"},children:p?t.jsx("img",{src:p,alt:"avatar",style:{width:"100%",height:"100%",objectFit:"cover"}}):t.jsx("svg",{className:"h-8 w-8 text-muted-foreground",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M12 4.5v15m7.5-7.5h-15"})})})}),t.jsx("p",{className:"text-xs text-muted-foreground",children:"仅支持图片，单文件上传，点击圆形区域触发上传"})]})}},j={parameters:{docs:{description:{story:"模拟上传进度条，每 300ms 增加 10%，适用于需要展示上传状态和进度的场景。"}}},render:()=>{var c,m;const[a,u]=i.useState([]),p=i.useCallback(({onProgress:l,onSuccess:v})=>{let y=0;const S=setInterval(()=>{y+=10,y>=100?(clearInterval(S),l(100),v({})):l(y)},300)},[]);return t.jsxs("div",{className:"flex flex-col gap-4 w-96",children:[t.jsx(g,{fileList:a,onChange:({fileList:l})=>u(l),customRequest:p}),a.length>0&&a.some(l=>l.status==="uploading")&&t.jsxs("div",{className:"flex flex-col gap-1",children:[t.jsxs("div",{className:"text-sm text-muted-foreground",children:["上传中... ",((c=a.find(l=>l.status==="uploading"))==null?void 0:c.percent)??0,"%"]}),t.jsx("div",{style:{width:"100%",height:8,background:"#f0f0f0",borderRadius:4,overflow:"hidden"},children:t.jsx("div",{style:{width:`${((m=a.find(l=>l.status==="uploading"))==null?void 0:m.percent)??0}%`,height:"100%",background:"#1677ff",borderRadius:4,transition:"width 0.3s ease"}})})]}),a.length>0&&a.every(l=>l.status==="done")&&t.jsx("p",{className:"text-sm text-success-600",children:"上传完成！"}),t.jsx("p",{className:"text-xs text-muted-foreground",children:"模拟上传进度，每 300ms 增加 10%"})]})}};var te,re,se;U.parameters={...U.parameters,docs:{...(te=U.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {}
}`,...(se=(re=U.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var ae,ne,ie;F.parameters={...F.parameters,docs:{...(ae=F.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    defaultFileList: [{
      uid: '1',
      name: 'design-spec.pdf',
      size: 102400,
      type: 'application/pdf',
      status: 'done'
    }]
  }
}`,...(ie=(ne=F.parameters)==null?void 0:ne.docs)==null?void 0:ie.source}}};var oe,le,de;T.parameters={...T.parameters,docs:{...(oe=T.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '图片卡片样式展示上传列表，适用于相册管理、商品图片上传等需要预览图的场景。'
      }
    }
  },
  render: () => <Upload listType="picture-card" defaultFileList={[{
    uid: '1',
    name: 'cat.png',
    size: 2048,
    type: 'image/png',
    status: 'done',
    thumbUrl: 'data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'80\\' height=\\'80\\' viewBox=\\'0 0 80 80\\'%3E%3Crect fill=\\'%23f3f4f6\\' width=\\'80\\' height=\\'80\\'/%3E%3Ctext fill=\\'%239ca3af\\' font-family=\\'sans-serif\\' font-size=\\'12\\' x=\\'50%25\\' y=\\'50%25\\' dominant-baseline=\\'middle\\' text-anchor=\\'middle\\'%3ECat%3C/text%3E%3C/svg%3E'
  }, {
    uid: '2',
    name: 'dog.png',
    size: 2048,
    type: 'image/png',
    status: 'done',
    thumbUrl: 'data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'80\\' height=\\'80\\' viewBox=\\'0 0 80 80\\'%3E%3Crect fill=\\'%23f3f4f6\\' width=\\'80\\' height=\\'80\\'/%3E%3Ctext fill=\\'%239ca3af\\' font-family=\\'sans-serif\\' font-size=\\'12\\' x=\\'50%25\\' y=\\'50%25\\' dominant-baseline=\\'middle\\' text-anchor=\\'middle\\'%3EDog%3C/text%3E%3C/svg%3E'
  }, {
    uid: '3',
    name: 'uploading.png',
    size: 2048,
    type: 'image/png',
    status: 'uploading',
    percent: 60
  }]} />
}`,...(de=(le=T.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var ce,ue,pe;R.parameters={...R.parameters,docs:{...(ce=R.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    accept: 'image/*',
    listType: 'picture'
  }
}`,...(pe=(ue=R.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};var me,fe,ge;q.parameters={...q.parameters,docs:{...(me=q.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    multiple: true
  }
}`,...(ge=(fe=q.parameters)==null?void 0:fe.docs)==null?void 0:ge.source}}};var he,xe,ve;E.parameters={...E.parameters,docs:{...(he=E.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(ve=(xe=E.parameters)==null?void 0:xe.docs)==null?void 0:ve.source}}};var ye,be,we;D.parameters={...D.parameters,docs:{...(ye=D.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '受控文件列表示例，展示如何在外部管理上传文件列表状态。'
      }
    }
  },
  render: () => {
    const [list, setList] = useState<UploadFile[]>([{
      uid: '1',
      name: 'report.docx',
      size: 51200,
      type: 'application/msword',
      status: 'done'
    }]);
    return <div className="flex flex-col gap-2 w-96">
        <Upload fileList={list} onChange={({
        fileList
      }) => setList(fileList)} />
        <p className="text-xs text-gray-500">受控列表，共 {list.length} 个文件</p>
      </div>;
  }
}`,...(we=(be=D.parameters)==null?void 0:be.docs)==null?void 0:we.source}}};var Ce,Le,je;P.parameters={...P.parameters,docs:{...(Ce=P.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  render: () => <Upload>
      <div className="flex flex-col items-center justify-center gap-2 py-8">
        <svg className="h-10 w-10 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
        <p className="text-sm text-muted-foreground">点击或拖拽文件到此区域上传</p>
        <p className="text-xs text-muted-foreground">支持单个或批量上传</p>
      </div>
    </Upload>
}`,...(je=(Le=P.parameters)==null?void 0:Le.docs)==null?void 0:je.source}}};var ke,Ne,Ue,Fe,Te;L.parameters={...L.parameters,docs:{...(ke=L.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '圆形头像上传示例，限制单张图片并实时预览，适用于个人资料、用户头像设置等场景。'
      }
    }
  },
  render: () => {
    const [fileList, setFileList] = useState<UploadFile[]>([]);
    const avatarUrl = fileList.length > 0 && fileList[0]?.thumbUrl ? fileList[0].thumbUrl : null;
    return <div className="flex flex-col items-center gap-4">
        <Upload accept="image/*" maxCount={1} fileList={fileList} onChange={({
        fileList: newList
      }) => setFileList(newList.slice(0, 1))}>
          <div style={{
          width: 96,
          height: 96,
          borderRadius: '50%',
          border: '2px dashed #d9d9d9',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          background: '#fafafa',
          cursor: 'pointer',
          transition: 'border-color 0.2s'
        }} onMouseEnter={e => {
          e.currentTarget.style.borderColor = '#1677ff';
        }} onMouseLeave={e => {
          e.currentTarget.style.borderColor = '#d9d9d9';
        }}>
            {avatarUrl ? <img src={avatarUrl} alt="avatar" style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }} /> : <svg className="h-8 w-8 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.5v15m7.5-7.5h-15" />
              </svg>}
          </div>
        </Upload>
        <p className="text-xs text-muted-foreground">仅支持图片，单文件上传，点击圆形区域触发上传</p>
      </div>;
  }
}`,...(Ue=(Ne=L.parameters)==null?void 0:Ne.docs)==null?void 0:Ue.source},description:{story:"头像上传",...(Te=(Fe=L.parameters)==null?void 0:Fe.docs)==null?void 0:Te.description}}};var Re,qe,Ee,De,Pe;j.parameters={...j.parameters,docs:{...(Re=j.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '模拟上传进度条，每 300ms 增加 10%，适用于需要展示上传状态和进度的场景。'
      }
    }
  },
  render: () => {
    const [fileList, setFileList] = useState<UploadFile[]>([]);
    const customRequest = useCallback(({
      onProgress,
      onSuccess
    }: import('./upload-types').CustomRequestOptions) => {
      let percent = 0;
      const interval = setInterval(() => {
        percent += 10;
        if (percent >= 100) {
          clearInterval(interval);
          onProgress(100);
          onSuccess({});
        } else {
          onProgress(percent);
        }
      }, 300);
    }, []);
    return <div className="flex flex-col gap-4 w-96">
        <Upload fileList={fileList} onChange={({
        fileList: newList
      }) => setFileList(newList)} customRequest={customRequest} />
        {fileList.length > 0 && fileList.some(f => f.status === 'uploading') && <div className="flex flex-col gap-1">
            <div className="text-sm text-muted-foreground">
              上传中... {fileList.find(f => f.status === 'uploading')?.percent ?? 0}%
            </div>
            <div style={{
          width: '100%',
          height: 8,
          background: '#f0f0f0',
          borderRadius: 4,
          overflow: 'hidden'
        }}>
              <div style={{
            width: \`\${fileList.find(f => f.status === 'uploading')?.percent ?? 0}%\`,
            height: '100%',
            background: '#1677ff',
            borderRadius: 4,
            transition: 'width 0.3s ease'
          }} />
            </div>
          </div>}
        {fileList.length > 0 && fileList.every(f => f.status === 'done') && <p className="text-sm text-success-600">上传完成！</p>}
        <p className="text-xs text-muted-foreground">模拟上传进度，每 300ms 增加 10%</p>
      </div>;
  }
}`,...(Ee=(qe=j.parameters)==null?void 0:qe.docs)==null?void 0:Ee.source},description:{story:"上传进度模拟",...(Pe=(De=j.parameters)==null?void 0:De.docs)==null?void 0:Pe.description}}};const pt=["Basic","WithDefault","PictureCard","ImageOnly","Multiple","Disabled","WithControlledList","DragUpload","AvatarUpload","UploadProgress"];export{L as AvatarUpload,U as Basic,E as Disabled,P as DragUpload,R as ImageOnly,q as Multiple,T as PictureCard,j as UploadProgress,D as WithControlledList,F as WithDefault,pt as __namedExportsOrder,ut as default};
