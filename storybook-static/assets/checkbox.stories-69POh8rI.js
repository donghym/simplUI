import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as F}from"./index-GiUgBvb1.js";import{C as c}from"./index-SScp5wZW.js";import"./utils-BEhiKRD9.js";import"./index-C08JwjkN.js";import"./minus-DzxWgTKt.js";import"./createLucideIcon-CZe00VV7.js";import"./check-DytZnMFh.js";const $={title:"数据录入/Checkbox 多选框",component:c,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"多选框用于在一组选项中进行多项选择。适用于表单配置、批量操作、筛选条件等场景，支持全选、半选和禁用状态。"}}},argTypes:{checked:{control:"boolean",description:"受控模式下的选中状态，true 为选中，false 为未选中"},defaultChecked:{control:"boolean",description:"非受控模式下的初始选中状态，默认 false"},disabled:{control:"boolean",description:"禁用状态，true 时不可交互、灰色半透明显示"},indeterminate:{control:"boolean",description:"半选状态，显示横线图标，优先级高于 checked 的视觉表现"},onChange:{control:!1,description:"选中状态变化时触发，参数为变化后的 checked 值"}}},d={args:{children:"苹果"}},n={args:{children:"香蕉",defaultChecked:!0}},l={args:{children:"全选",indeterminate:!0}},i={args:{children:"禁用选项",disabled:!0}},h={args:{children:"禁用且选中",disabled:!0,defaultChecked:!0}},m={parameters:{docs:{description:{story:"多个复选框组合使用，适用于表单中的多项配置或兴趣标签选择等场景。"}}},render:()=>e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(c,{defaultChecked:!0,children:"React"}),e.jsx(c,{defaultChecked:!0,children:"TypeScript"}),e.jsx(c,{children:"Tailwind CSS"}),e.jsx(c,{children:"Vite"})]})},p={parameters:{docs:{description:{story:"受控模式示例，展示如何通过外部状态管理复选框的选中状态。"}}},render:()=>{const[a,r]=F.useState(!1);return e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(c,{checked:a,onChange:r,children:"受控复选框"}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["当前状态：",a?"选中":"未选中"]})]})}},k={parameters:{docs:{description:{story:"实现全选/半选/取消全选功能，适用于批量操作、列表多选等需要统一控制选项状态的场景。"}}},render:()=>{const a=["苹果","香蕉","橘子"],[r,u]=F.useState([!0,!1,!1]),C=r.every(Boolean),H=r.some(Boolean)&&!C,J=s=>{u(a.map(()=>s))},K=(s,t)=>{const o=[...r];o[s]=t,u(o)};return e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(c,{checked:C,indeterminate:H,onChange:J,children:"全选"}),e.jsx("div",{className:"ml-4 flex flex-col gap-2",children:a.map((s,t)=>e.jsx(c,{checked:r[t],onChange:o=>K(t,o),children:s},s))})]})}};var x,f,g;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: '苹果'
  }
}`,...(g=(f=d.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var b,S,j;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    children: '香蕉',
    defaultChecked: true
  }
}`,...(j=(S=n.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var v,y,L;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: '全选',
    indeterminate: true
  }
}`,...(L=(y=l.parameters)==null?void 0:y.docs)==null?void 0:L.source}}};var N,B,D;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    children: '禁用选项',
    disabled: true
  }
}`,...(D=(B=i.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var A,I,T;h.parameters={...h.parameters,docs:{...(A=h.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    children: '禁用且选中',
    disabled: true,
    defaultChecked: true
  }
}`,...(T=(I=h.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var E,R,w;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '多个复选框组合使用，适用于表单中的多项配置或兴趣标签选择等场景。'
      }
    }
  },
  render: () => <div className="flex flex-col gap-2">
      <Checkbox defaultChecked>React</Checkbox>
      <Checkbox defaultChecked>TypeScript</Checkbox>
      <Checkbox>Tailwind CSS</Checkbox>
      <Checkbox>Vite</Checkbox>
    </div>
}`,...(w=(R=m.parameters)==null?void 0:R.docs)==null?void 0:w.source}}};var G,V,_;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '受控模式示例，展示如何通过外部状态管理复选框的选中状态。'
      }
    }
  },
  render: () => {
    const [checked, setChecked] = useState(false);
    return <div className="flex flex-col gap-2">
        <Checkbox checked={checked} onChange={setChecked}>
          受控复选框
        </Checkbox>
        <p className="text-sm text-muted-foreground">当前状态：{checked ? '选中' : '未选中'}</p>
      </div>;
  }
}`,...(_=(V=p.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var O,q,z;k.parameters={...k.parameters,docs:{...(O=k.parameters)==null?void 0:O.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '实现全选/半选/取消全选功能，适用于批量操作、列表多选等需要统一控制选项状态的场景。'
      }
    }
  },
  render: () => {
    const items = ['苹果', '香蕉', '橘子'];
    const [checkedList, setCheckedList] = useState<boolean[]>([true, false, false]);
    const allChecked = checkedList.every(Boolean);
    const someChecked = checkedList.some(Boolean) && !allChecked;
    const handleCheckAll = (checked: boolean) => {
      setCheckedList(items.map(() => checked));
    };
    const handleItemChange = (index: number, checked: boolean) => {
      const next = [...checkedList];
      next[index] = checked;
      setCheckedList(next);
    };
    return <div className="flex flex-col gap-2">
        <Checkbox checked={allChecked} indeterminate={someChecked} onChange={handleCheckAll}>
          全选
        </Checkbox>
        <div className="ml-4 flex flex-col gap-2">
          {items.map((item, index) => <Checkbox key={item} checked={checkedList[index]} onChange={checked => handleItemChange(index, checked)}>
              {item}
            </Checkbox>)}
        </div>
      </div>;
  }
}`,...(z=(q=k.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};const ee=["Basic","DefaultChecked","Indeterminate","Disabled","DisabledChecked","Group","Controlled","CheckAll"];export{d as Basic,k as CheckAll,p as Controlled,n as DefaultChecked,i as Disabled,h as DisabledChecked,m as Group,l as Indeterminate,ee as __namedExportsOrder,$ as default};
