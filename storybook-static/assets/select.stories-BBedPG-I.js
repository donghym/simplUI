import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as N}from"./index-GiUgBvb1.js";import{S as T}from"./index-pixgFsiF.js";import{a as De}from"./utils-BEhiKRD9.js";import{S as _e}from"./search-DufjXXN7.js";import"./index-C08JwjkN.js";import"./x-B-5N0Ikz.js";import"./createLucideIcon-CZe00VV7.js";import"./chevron-down-CY-YwltC.js";import"./check-DytZnMFh.js";const a=[{label:"苹果",value:"apple"},{label:"香蕉",value:"banana"},{label:"樱桃",value:"cherry"},{label:"枣",value:"date"},{label:"接骨木",value:"elderberry"},{label:"无花果",value:"fig"},{label:"葡萄",value:"grape",disabled:!0}],Ee=s=>e.jsx("div",{style:{display:"flex",alignItems:"flex-start",justifyContent:"center",minHeight:"500px",width:"100%",paddingTop:"40px"},children:e.jsx(s,{})}),Qe={title:"数据录入/Select 选择器",component:T,tags:["autodocs"],decorators:[Ee],parameters:{layout:"padded",actions:{argTypesRegex:"^on.*"},docs:{description:{component:"选择器用于从一组预设选项中进行选择。适用于筛选条件、表单填写、状态切换等场景，支持单选、多选、搜索和分组。"}}},argTypes:{componentSize:{control:"select",options:["large","default","small"],description:"选择器尺寸"},status:{control:"select",options:["error","warning"],description:"状态变体"},allowClear:{control:"boolean",description:"是否显示清空按钮"},disabled:{control:"boolean",description:"是否禁用"}}},p={args:{options:a,placeholder:"请选择水果"}},d={args:{componentSize:"large",options:a,placeholder:"请选择水果"}},u={args:{componentSize:"small",options:a,placeholder:"请选择水果"}},m={args:{options:a,defaultValue:"banana"}},b={args:{options:a,status:"error",placeholder:"必填项"}},g={args:{options:a,status:"warning",placeholder:"请核对"}},v={args:{options:a,defaultValue:"cherry",allowClear:!0}},h={args:{options:a,prefix:e.jsx(_e,{className:"h-4 w-4"}),placeholder:"搜索水果"}},x={args:{options:a,disabled:!0,defaultValue:"apple"}},f={parameters:{docs:{description:{story:"并排展示大、默认、小三种尺寸的选择器，便于根据布局空间选择合适的组件大小。"}}},render:()=>{const s=["large","default","small"],l={large:"大",default:"默认",small:"小"};return e.jsx("div",{className:"space-y-6 w-72",children:s.map(o=>e.jsxs("div",{children:[e.jsxs("label",{className:"block text-sm font-medium text-gray-700 mb-1 capitalize",children:[l[o]," 尺寸"]}),e.jsx(T,{componentSize:o,options:a,placeholder:"请选择水果",allowClear:!0})]},o))})}},S={parameters:{docs:{description:{story:"结合外部输入框实现选项过滤，适用于选项较多时需要快速定位目标项的场景。"}}},render:()=>{const[s,l]=N.useState(""),o=a.filter(n=>n.label.includes(s)||n.value.toLowerCase().includes(s.toLowerCase()));return e.jsxs("div",{className:"space-y-2 w-72",children:[e.jsx("input",{className:"w-full h-8 px-3 rounded-md border border-border bg-background text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500",placeholder:"输入关键词过滤...",value:s,onChange:n=>l(n.target.value)}),e.jsx(T,{options:o,placeholder:"请选择水果",prefix:e.jsx(_e,{className:"h-4 w-4"}),allowClear:!0})]})}},y={parameters:{docs:{description:{story:"自定义实现多选标签展示，支持添加和移除选项，适用于需要同时选择多个值的场景。"}}},render:()=>{const[s,l]=N.useState([]),[o,n]=N.useState(!1),i=r=>{l(t=>t.includes(r)?t.filter(c=>c!==r):[...t,r])},We=r=>{l(t=>t.filter(c=>c!==r))};return e.jsxs("div",{className:"w-72",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-1 min-h-[36px] px-3 py-1.5 rounded-md border border-border bg-background cursor-pointer",onClick:()=>n(!o),children:[s.length===0&&e.jsx("span",{className:"text-muted-foreground text-sm",children:"请选择水果"}),s.map(r=>{const t=a.find(c=>c.value===r);return e.jsxs("span",{className:"inline-flex items-center gap-1 px-2 py-0.5 text-xs rounded bg-primary-100 text-primary-700",children:[t==null?void 0:t.label,e.jsx("button",{type:"button",className:"text-primary-500 hover:text-primary-700",onClick:c=>{c.stopPropagation(),We(r)},children:"×"})]},r)})]}),o&&e.jsx("ul",{className:"mt-1 w-full rounded-md border border-border bg-white shadow-md max-h-60 overflow-auto z-10",children:a.map(r=>e.jsx("li",{className:De("px-3 py-2 text-sm cursor-pointer hover:bg-muted",s.includes(r.value)?"bg-primary-50 text-primary-700":"",r.disabled?"opacity-50 pointer-events-none":""),onClick:()=>{r.disabled||i(r.value)},children:r.label},r.value))})]})}},w={parameters:{docs:{description:{story:"通过禁用项模拟分组标题，实现选项分组展示，适用于需要对选项进行分类组织的场景。"}}},render:()=>{const l=[{label:"水果",options:[{label:"苹果",value:"apple"},{label:"香蕉",value:"banana"},{label:"樱桃",value:"cherry"}]},{label:"蔬菜",options:[{label:"胡萝卜",value:"carrot"},{label:"西兰花",value:"broccoli"},{label:"菠菜",value:"spinach"}]},{label:"饮品",options:[{label:"咖啡",value:"coffee"},{label:"茶",value:"tea"},{label:"果汁",value:"juice"}]}].flatMap(i=>[{label:`── ${i.label} ──`,value:`__group_${i.label}`,disabled:!0},...i.options]),[o,n]=N.useState("");return e.jsx("div",{className:"w-72",children:e.jsx(T,{options:l,value:o,onChange:n,placeholder:"请选择",allowClear:!0})})}};var C,j,z,R,k;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    options: FRUITS,
    placeholder: '请选择水果'
  }
}`,...(z=(j=p.parameters)==null?void 0:j.docs)==null?void 0:z.source},description:{story:"基础用法",...(k=(R=p.parameters)==null?void 0:R.docs)==null?void 0:k.description}}};var I,V,F,U,L;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    componentSize: 'large',
    options: FRUITS,
    placeholder: '请选择水果'
  }
}`,...(F=(V=d.parameters)==null?void 0:V.docs)==null?void 0:F.source},description:{story:"大尺寸",...(L=(U=d.parameters)==null?void 0:U.docs)==null?void 0:L.description}}};var O,_,W,D,E;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    componentSize: 'small',
    options: FRUITS,
    placeholder: '请选择水果'
  }
}`,...(W=(_=u.parameters)==null?void 0:_.docs)==null?void 0:W.source},description:{story:"小尺寸",...(E=(D=u.parameters)==null?void 0:D.docs)==null?void 0:E.description}}};var A,M,P,$,B;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    options: FRUITS,
    defaultValue: 'banana'
  }
}`,...(P=(M=m.parameters)==null?void 0:M.docs)==null?void 0:P.source},description:{story:"带默认值",...(B=($=m.parameters)==null?void 0:$.docs)==null?void 0:B.description}}};var G,H,q,J,K;b.parameters={...b.parameters,docs:{...(G=b.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    options: FRUITS,
    status: 'error',
    placeholder: '必填项'
  }
}`,...(q=(H=b.parameters)==null?void 0:H.docs)==null?void 0:q.source},description:{story:"错误状态",...(K=(J=b.parameters)==null?void 0:J.docs)==null?void 0:K.description}}};var Q,X,Y,Z,ee;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    options: FRUITS,
    status: 'warning',
    placeholder: '请核对'
  }
}`,...(Y=(X=g.parameters)==null?void 0:X.docs)==null?void 0:Y.source},description:{story:"警告状态",...(ee=(Z=g.parameters)==null?void 0:Z.docs)==null?void 0:ee.description}}};var re,ae,se,oe,te;v.parameters={...v.parameters,docs:{...(re=v.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    options: FRUITS,
    defaultValue: 'cherry',
    allowClear: true
  }
}`,...(se=(ae=v.parameters)==null?void 0:ae.docs)==null?void 0:se.source},description:{story:"可清空",...(te=(oe=v.parameters)==null?void 0:oe.docs)==null?void 0:te.description}}};var le,ne,ce,ie,pe;h.parameters={...h.parameters,docs:{...(le=h.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    options: FRUITS,
    prefix: <Search className="h-4 w-4" />,
    placeholder: '搜索水果'
  }
}`,...(ce=(ne=h.parameters)==null?void 0:ne.docs)==null?void 0:ce.source},description:{story:"带前缀图标",...(pe=(ie=h.parameters)==null?void 0:ie.docs)==null?void 0:pe.description}}};var de,ue,me,be,ge;x.parameters={...x.parameters,docs:{...(de=x.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    options: FRUITS,
    disabled: true,
    defaultValue: 'apple'
  }
}`,...(me=(ue=x.parameters)==null?void 0:ue.docs)==null?void 0:me.source},description:{story:"禁用状态",...(ge=(be=x.parameters)==null?void 0:be.docs)==null?void 0:ge.description}}};var ve,he,xe,fe,Se;f.parameters={...f.parameters,docs:{...(ve=f.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '并排展示大、默认、小三种尺寸的选择器，便于根据布局空间选择合适的组件大小。'
      }
    }
  },
  render: () => {
    const sizes = ['large', 'default', 'small'] as const;
    const sizeLabels: Record<string, string> = {
      large: '大',
      default: '默认',
      small: '小'
    };
    return <div className="space-y-6 w-72">
        {sizes.map(componentSize => <div key={componentSize}>
            <label className="block text-sm font-medium text-gray-700 mb-1 capitalize">
              {sizeLabels[componentSize]} 尺寸
            </label>
            <Select componentSize={componentSize} options={FRUITS} placeholder="请选择水果" allowClear />
          </div>)}
      </div>;
  }
}`,...(xe=(he=f.parameters)==null?void 0:he.docs)==null?void 0:xe.source},description:{story:"各尺寸对比",...(Se=(fe=f.parameters)==null?void 0:fe.docs)==null?void 0:Se.description}}};var ye,we,Ne,Te,Ce;S.parameters={...S.parameters,docs:{...(ye=S.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '结合外部输入框实现选项过滤，适用于选项较多时需要快速定位目标项的场景。'
      }
    }
  },
  render: () => {
    const [searchText, setSearchText] = useState('');
    const filtered = FRUITS.filter(item => item.label.includes(searchText) || item.value.toLowerCase().includes(searchText.toLowerCase()));
    return <div className="space-y-2 w-72">
        <input className="w-full h-8 px-3 rounded-md border border-border bg-background text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500" placeholder="输入关键词过滤..." value={searchText} onChange={e => setSearchText(e.target.value)} />
        <Select options={filtered} placeholder="请选择水果" prefix={<Search className="h-4 w-4" />} allowClear />
      </div>;
  }
}`,...(Ne=(we=S.parameters)==null?void 0:we.docs)==null?void 0:Ne.source},description:{story:"可搜索",...(Ce=(Te=S.parameters)==null?void 0:Te.docs)==null?void 0:Ce.description}}};var je,ze,Re,ke,Ie;y.parameters={...y.parameters,docs:{...(je=y.parameters)==null?void 0:je.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '自定义实现多选标签展示，支持添加和移除选项，适用于需要同时选择多个值的场景。'
      }
    }
  },
  render: () => {
    const [selectedValues, setSelectedValues] = useState<string[]>([]);
    const [open, setOpen] = useState(false);
    const handleToggle = (value: string) => {
      setSelectedValues(prev => prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value]);
    };
    const handleRemove = (value: string) => {
      setSelectedValues(prev => prev.filter(v => v !== value));
    };
    return <div className="w-72">
        <div className="flex flex-wrap items-center gap-1 min-h-[36px] px-3 py-1.5 rounded-md border border-border bg-background cursor-pointer" onClick={() => setOpen(!open)}>
          {selectedValues.length === 0 && <span className="text-muted-foreground text-sm">请选择水果</span>}
          {selectedValues.map(val => {
          const opt = FRUITS.find(f => f.value === val);
          return <span key={val} className="inline-flex items-center gap-1 px-2 py-0.5 text-xs rounded bg-primary-100 text-primary-700">
                {opt?.label}
                <button type="button" className="text-primary-500 hover:text-primary-700" onClick={e => {
              e.stopPropagation();
              handleRemove(val);
            }}>
                  ×
                </button>
              </span>;
        })}
        </div>
        {open && <ul className="mt-1 w-full rounded-md border border-border bg-white shadow-md max-h-60 overflow-auto z-10">
            {FRUITS.map(opt => <li key={opt.value} className={cn('px-3 py-2 text-sm cursor-pointer hover:bg-muted', selectedValues.includes(opt.value) ? 'bg-primary-50 text-primary-700' : '', opt.disabled ? 'opacity-50 pointer-events-none' : '')} onClick={() => {
          if (!opt.disabled) handleToggle(opt.value);
        }}>
                {opt.label}
              </li>)}
          </ul>}
      </div>;
  }
}`,...(Re=(ze=y.parameters)==null?void 0:ze.docs)==null?void 0:Re.source},description:{story:"多选模式",...(Ie=(ke=y.parameters)==null?void 0:ke.docs)==null?void 0:Ie.description}}};var Ve,Fe,Ue,Le,Oe;w.parameters={...w.parameters,docs:{...(Ve=w.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '通过禁用项模拟分组标题，实现选项分组展示，适用于需要对选项进行分类组织的场景。'
      }
    }
  },
  render: () => {
    const groups = [{
      label: '水果',
      options: [{
        label: '苹果',
        value: 'apple'
      }, {
        label: '香蕉',
        value: 'banana'
      }, {
        label: '樱桃',
        value: 'cherry'
      }]
    }, {
      label: '蔬菜',
      options: [{
        label: '胡萝卜',
        value: 'carrot'
      }, {
        label: '西兰花',
        value: 'broccoli'
      }, {
        label: '菠菜',
        value: 'spinach'
      }]
    }, {
      label: '饮品',
      options: [{
        label: '咖啡',
        value: 'coffee'
      }, {
        label: '茶',
        value: 'tea'
      }, {
        label: '果汁',
        value: 'juice'
      }]
    }];
    const flatOptions = groups.flatMap(group => [{
      label: \`── \${group.label} ──\`,
      value: \`__group_\${group.label}\`,
      disabled: true
    }, ...group.options]);
    const [selected, setSelected] = useState('');
    return <div className="w-72">
        <Select options={flatOptions} value={selected} onChange={setSelected} placeholder="请选择" allowClear />
      </div>;
  }
}`,...(Ue=(Fe=w.parameters)==null?void 0:Fe.docs)==null?void 0:Ue.source},description:{story:"分组选项",...(Oe=(Le=w.parameters)==null?void 0:Le.docs)==null?void 0:Oe.description}}};const Xe=["Basic","Large","Small","WithDefault","ErrorStatus","WarningStatus","AllowClear","WithPrefix","Disabled","AllSizes","Searchable","Multiple","GroupedOptions"];export{f as AllSizes,v as AllowClear,p as Basic,x as Disabled,b as ErrorStatus,w as GroupedOptions,d as Large,y as Multiple,S as Searchable,u as Small,g as WarningStatus,m as WithDefault,h as WithPrefix,Xe as __namedExportsOrder,Qe as default};
