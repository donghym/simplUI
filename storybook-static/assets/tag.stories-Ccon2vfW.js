import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as h}from"./index-GiUgBvb1.js";import{T as a}from"./index-40oP6IOU.js";import{B as re}from"./index-WhxK0hy4.js";import{c as se}from"./createLucideIcon-CZe00VV7.js";import"./utils-BEhiKRD9.js";import"./index-C08JwjkN.js";import"./x-B-5N0Ikz.js";import"./loader-circle-CulI208u.js";/**
 * @license lucide-react v0.460.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ne=se("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]),ue={title:"数据展示/Tag 标签",component:a,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"标签用于对信息进行分类、标记和筛选。适用于状态展示、属性标记、关键词筛选等场景，支持多种语义色和可关闭样式。"}}},argTypes:{variant:{control:"select",options:["default","primary","success","warning","danger"],description:"标签语义变体，控制背景色和文字色，默认 default"},closable:{control:"boolean",description:"是否可关闭，true 时右侧显示关闭按钮，默认 false"},icon:{control:"text",description:"前置图标，显示在文字左侧"},onClose:{description:"关闭按钮的回调，仅在 closable=true 时触发"}}},s={args:{children:"标签 1"}},n={args:{variant:"primary",children:"主要"}},t={args:{variant:"success",children:"成功"}},c={args:{variant:"warning",children:"警告"}},o={args:{variant:"danger",children:"危险"}},i={args:{closable:!0,children:"可关闭"}},l={args:{icon:e.jsx(ne,{className:"h-3 w-3"}),children:"GitHub"}},d={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(a,{children:"默认"}),e.jsx(a,{variant:"primary",children:"主要"}),e.jsx(a,{variant:"success",children:"成功"}),e.jsx(a,{variant:"warning",children:"警告"}),e.jsx(a,{variant:"danger",children:"危险"})]})},g={render:()=>{const[U,u]=h.useState([{key:1,label:"标签一"},{key:2,label:"标签二"},{key:3,label:"标签三"}]),[x,X]=h.useState(4),Y=r=>{u(ee=>ee.filter(ae=>ae.key!==r))},Z=()=>{u(r=>[...r,{key:x,label:`标签${x}`}]),X(r=>r+1)};return e.jsxs("div",{className:"flex flex-wrap gap-2 items-center",children:[U.map(r=>e.jsx(a,{closable:!0,onClose:()=>Y(r.key),children:r.label},r.key)),e.jsx(re,{onClick:Z,children:"+ 添加标签"})]})}},p={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(a,{variant:"default",children:"灰色"}),e.jsx(a,{variant:"primary",children:"蓝色"}),e.jsx(a,{variant:"success",children:"绿色"}),e.jsx(a,{variant:"warning",children:"橙色"}),e.jsx(a,{variant:"danger",children:"红色"})]})},m={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(a,{className:"border-0 bg-transparent text-gray-700",children:"无边框默认"}),e.jsx(a,{className:"border-0 bg-transparent text-primary-600",children:"无边框主要"}),e.jsx(a,{className:"border-0 bg-transparent text-success-600",children:"无边框成功"}),e.jsx(a,{className:"border-0 bg-transparent text-warning-600",children:"无边框警告"}),e.jsx(a,{className:"border-0 bg-transparent text-danger-600",children:"无边框危险"})]})};var v,b,y;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: '标签 1'
  }
}`,...(y=(b=s.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var T,f,N;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: '主要'
  }
}`,...(N=(f=n.parameters)==null?void 0:f.docs)==null?void 0:N.source}}};var j,k,w;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    children: '成功'
  }
}`,...(w=(k=t.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var S,C,B;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    children: '警告'
  }
}`,...(B=(C=c.parameters)==null?void 0:C.docs)==null?void 0:B.source}}};var K,G,A;o.parameters={...o.parameters,docs:{...(K=o.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    children: '危险'
  }
}`,...(A=(G=o.parameters)==null?void 0:G.docs)==null?void 0:A.source}}};var D,P,R;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    closable: true,
    children: '可关闭'
  }
}`,...(R=(P=i.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var W,E,I;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    icon: <Github className="h-3 w-3" />,
    children: 'GitHub'
  }
}`,...(I=(E=l.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var H,M,V;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-2">
      <Tag>默认</Tag>
      <Tag variant="primary">主要</Tag>
      <Tag variant="success">成功</Tag>
      <Tag variant="warning">警告</Tag>
      <Tag variant="danger">危险</Tag>
    </div>
}`,...(V=(M=d.parameters)==null?void 0:M.docs)==null?void 0:V.source}}};var _,$,L;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => {
    const [tags, setTags] = useState<{
      key: number;
      label: string;
    }[]>([{
      key: 1,
      label: '标签一'
    }, {
      key: 2,
      label: '标签二'
    }, {
      key: 3,
      label: '标签三'
    }]);
    const [nextKey, setNextKey] = useState(4);
    const handleRemove = (key: number) => {
      setTags(prev => prev.filter(t => t.key !== key));
    };
    const handleAdd = () => {
      setTags(prev => [...prev, {
        key: nextKey,
        label: \`标签\${nextKey}\`
      }]);
      setNextKey(k => k + 1);
    };
    return <div className="flex flex-wrap gap-2 items-center">
        {tags.map(tag => <Tag key={tag.key} closable onClose={() => handleRemove(tag.key)}>
            {tag.label}
          </Tag>)}
        <Button onClick={handleAdd}>+ 添加标签</Button>
      </div>;
  }
}`,...(L=($=g.parameters)==null?void 0:$.docs)==null?void 0:L.source}}};var O,q,z;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-2">
      <Tag variant="default">灰色</Tag>
      <Tag variant="primary">蓝色</Tag>
      <Tag variant="success">绿色</Tag>
      <Tag variant="warning">橙色</Tag>
      <Tag variant="danger">红色</Tag>
    </div>
}`,...(z=(q=p.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var F,J,Q;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-2">
      <Tag className="border-0 bg-transparent text-gray-700">无边框默认</Tag>
      <Tag className="border-0 bg-transparent text-primary-600">无边框主要</Tag>
      <Tag className="border-0 bg-transparent text-success-600">无边框成功</Tag>
      <Tag className="border-0 bg-transparent text-warning-600">无边框警告</Tag>
      <Tag className="border-0 bg-transparent text-danger-600">无边框危险</Tag>
    </div>
}`,...(Q=(J=m.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};const xe=["Basic","Primary","Success","Warning","Danger","Closable","WithIcon","Variants","DynamicTags","PresetColors","NoBorderTag"];export{s as Basic,i as Closable,o as Danger,g as DynamicTags,m as NoBorderTag,p as PresetColors,n as Primary,t as Success,d as Variants,c as Warning,l as WithIcon,xe as __namedExportsOrder,ue as default};
