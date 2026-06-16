import{j as a}from"./jsx-runtime-CDt2p4po.js";import{fn as P}from"./index-DeN4tkzB.js";import{r as N}from"./index-GiUgBvb1.js";import{a as $}from"./utils-BEhiKRD9.js";import{c as b}from"./index-C08JwjkN.js";import{U as B}from"./user-CXa3gJrY.js";import"./createLucideIcon-CZe00VV7.js";const J=b("sui-avatar-group flex -space-x-2",{variants:{},defaultVariants:{}}),c=b("relative inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-muted text-muted-foreground text-sm font-medium overflow-hidden transition-transform hover:z-10 hover:scale-110",{variants:{},defaultVariants:{}}),Q=b("relative inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-muted text-muted-foreground text-xs font-medium cursor-pointer hover:z-10 hover:bg-gray-200",{variants:{},defaultVariants:{}}),X=(f,s)=>{const{src:o,name:r,icon:e}=f;return o?a.jsx("span",{className:c(),children:a.jsx("img",{src:o,alt:r??"",className:"h-full w-full object-cover"})},s):e?a.jsx("span",{className:c(),children:e},s):r?a.jsx("span",{className:c(),children:r.charAt(0).toUpperCase()},s):a.jsx("span",{className:c()},s)},x=N.forwardRef((f,s)=>{const{className:o,avatars:r,maxCount:e=4,onExcessClick:n,...L}=f,M=r.slice(0,e),g=r.length-e,C=N.useCallback(()=>{n==null||n()},[n]);return a.jsxs("div",{ref:s,className:$(J(),o),...L,children:[M.map((t,O)=>X(t,O)),g>0&&a.jsxs("span",{className:Q(),onClick:C,role:"button",tabIndex:0,onKeyDown:t=>{(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),C())},"aria-label":`还有 ${g} 人`,children:["+",g]})]})});x.displayName="AvatarGroup";x.__docgenInfo={description:"堆叠头像组组件",methods:[],displayName:"AvatarGroup",props:{avatars:{required:!0,tsType:{name:"Array",elements:[{name:"AvatarItem"}],raw:"AvatarItem[]"},description:"头像数据数组"},maxCount:{required:!1,tsType:{name:"number"},description:"最大显示数量，超出部分显示 +N。默认 4"},onExcessClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"超出数量点击回调"}},composes:["HTMLAttributes","VariantProps"]};const h=[{src:"https://picsum.photos/300/300?random=1",name:"张三"},{src:"https://picsum.photos/300/300?random=2",name:"李四"},{src:"https://picsum.photos/300/300?random=3",name:"王五"},{src:"https://picsum.photos/300/300?random=4",name:"赵六"},{src:"https://picsum.photos/300/300?random=5",name:"孙七"},{src:"https://picsum.photos/300/300?random=6",name:"周八"}],oa={title:"数据展示/AvatarGroup 堆叠头像组",component:x,tags:["autodocs"],parameters:{layout:"padded"},argTypes:{maxCount:{control:"number",description:"最大显示数量，超出部分显示 +N"},onExcessClick:{description:"超出数量点击回调"}}},m={args:{avatars:h,maxCount:4}},i={args:{avatars:[{name:"张三"},{name:"李四"},{name:"王五"}]}},p={args:{avatars:[{icon:a.jsx(B,{className:"h-5 w-5"})},{name:"李四"},{src:"https://api.dicebear.com/7.x/avataaars/svg?seed=3",name:"王五"}]}},u={args:{avatars:h,maxCount:3,onExcessClick:P()}},l={args:{avatars:h.slice(0,3),maxCount:4}},d={args:{avatars:[{src:"https://api.dicebear.com/7.x/avataaars/svg?seed=1",name:"张三"}]}},v={render:()=>a.jsx(x,{avatars:h,className:"[&_*]:h-8 [&_*]:w-8 [&_*]:text-xs"})};var A,y,j;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    avatars: sampleAvatars,
    maxCount: 4
  }
}`,...(j=(y=m.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var k,w,E;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    avatars: [{
      name: '张三'
    }, {
      name: '李四'
    }, {
      name: '王五'
    }]
  }
}`,...(E=(w=i.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};var S,_,G;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    avatars: [{
      icon: <User className="h-5 w-5" />
    }, {
      name: '李四'
    }, {
      src: 'https://api.dicebear.com/7.x/avataaars/svg?seed=3',
      name: '王五'
    }]
  }
}`,...(G=(_=p.parameters)==null?void 0:_.docs)==null?void 0:G.source}}};var I,V,T;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    avatars: sampleAvatars,
    maxCount: 3,
    onExcessClick: fn()
  }
}`,...(T=(V=u.parameters)==null?void 0:V.docs)==null?void 0:T.source}}};var z,D,F;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    avatars: sampleAvatars.slice(0, 3),
    maxCount: 4
  }
}`,...(F=(D=l.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var U,W,q;d.parameters={...d.parameters,docs:{...(U=d.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    avatars: [{
      src: 'https://api.dicebear.com/7.x/avataaars/svg?seed=1',
      name: '张三'
    }]
  }
}`,...(q=(W=d.parameters)==null?void 0:W.docs)==null?void 0:q.source}}};var R,H,K;v.parameters={...v.parameters,docs:{...(R=v.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <AvatarGroup avatars={sampleAvatars} className="[&_*]:h-8 [&_*]:w-8 [&_*]:text-xs" />
}`,...(K=(H=v.parameters)==null?void 0:H.docs)==null?void 0:K.source}}};const na=["Default","WithNameFallback","WithIconFallback","ExcessClick","NoExcess","SingleAvatar","CustomSize"];export{v as CustomSize,m as Default,u as ExcessClick,l as NoExcess,d as SingleAvatar,p as WithIconFallback,i as WithNameFallback,na as __namedExportsOrder,oa as default};
