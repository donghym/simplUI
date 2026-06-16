import{j as s}from"./jsx-runtime-CDt2p4po.js";import{r as o}from"./index-GiUgBvb1.js";import{a as y}from"./utils-BEhiKRD9.js";import{c as E}from"./index-C08JwjkN.js";const b=E("relative inline-flex items-center justify-center overflow-hidden bg-muted text-muted-foreground align-middle select-none font-medium",{variants:{size:{small:"h-6 w-6 text-xs",default:"h-10 w-10 text-sm",large:"h-14 w-14 text-xl"},shape:{circle:"rounded-full",square:"rounded-md"}},defaultVariants:{size:"default",shape:"circle"}}),i=o.forwardRef((l,c)=>{const{className:d,src:r,srcSet:m,alt:e,icon:n,onError:a,size:u,shape:f,children:t,...p}=l,[h,g]=o.useState(!1),v=!!r&&!h,x=()=>{a&&a()===!1||g(!0)},w=()=>t||n||(e?e.charAt(0).toUpperCase():null);return s.jsx("span",{ref:c,className:y("sui-avatar",b({size:u,shape:f}),d),...p,children:v?s.jsx("img",{src:r,srcSet:m,alt:e??"",onError:x,className:"h-full w-full object-cover"}):w()})});i.displayName="Avatar";i.__docgenInfo={description:`Avatar 头像组件

展示用户头像，支持三种内容模式：
- src 传入且正常加载：渲染 img 元素，图片居中裁切
- src 未传入或加载失败、children 存在：显示 children 文字（如姓名首字母）
- src 未传入或加载失败、children 不存在、icon 存在：显示 icon 图标
- src 未传入或加载失败、children/icon 均不存在、alt 存在：显示 alt 首字符

使用 forwardRef 转发 span 元素引用。`,methods:[],displayName:"Avatar",props:{src:{required:!1,tsType:{name:"string"},description:`图片源地址

传入后渲染为 img 元素，图片居中裁切填充。
图片加载失败时触发 onError 回调，并回退到 children / icon / alt 首字符。`},srcSet:{required:!1,tsType:{name:"string"},description:`响应式图片的 srcSet 属性

透传到 img 元素的 srcSet，用于不同分辨率下加载不同尺寸的图片。`},alt:{required:!1,tsType:{name:"string"},description:`图片的 alt 属性

同时作为文字回退源：不传 src 或图片加载失败时，取 alt 的首字符作为文本回退显示。`},icon:{required:!1,tsType:{name:"ReactNode"},description:`回退图标

当 src 未传入或图片加载失败时显示的图标。
优先级：children > icon > alt 首字符。`},onError:{required:!1,tsType:{name:"signature",type:"function",raw:"() => boolean | void",signature:{arguments:[],return:{name:"union",raw:"boolean | void",elements:[{name:"boolean"},{name:"void"}]}}},description:`图片加载失败回调

img 元素 onerror 事件触发时调用。
返回 false 可阻止默认的文字/图标回退行为，
此时头像保持空状态（灰色背景，无内容）。`}},composes:["Omit","VariantProps"]};export{i as A};
