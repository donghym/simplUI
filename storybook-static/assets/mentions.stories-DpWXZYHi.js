import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as s}from"./index-GiUgBvb1.js";import{a as z}from"./utils-BEhiKRD9.js";import{c as N}from"./index-C08JwjkN.js";const ye=N("relative inline-block w-full"),be=N("w-full rounded-md border border-[#d9d9d9] text-[#262626] text-sm leading-normal resize-y px-3 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-1",{variants:{disabled:{true:"bg-[#f5f5f5] cursor-not-allowed",false:"bg-white cursor-text"}},defaultVariants:{disabled:!1}}),Se=N("absolute top-full left-0 mt-1 min-w-[120px] bg-white rounded-lg shadow-[0_3px_6px_-4px_rgba(0,0,0,0.12),0_6px_16px_rgba(0,0,0,0.08)] z-[1070] max-h-[250px] overflow-auto"),we=N("px-3 py-2 cursor-pointer",{variants:{active:{true:"bg-[#e6f4ff]"},disabled:{true:"text-[#bfbfbf]"}},compoundVariants:[{active:!1,disabled:!1,className:"bg-transparent text-[#262626]"}],defaultVariants:{active:!1,disabled:!1}}),f=s.forwardRef(({prefix:n="@",options:r,value:l,defaultValue:b="",onChange:i,onSelect:p,disabled:o=!1,placeholder:S,rows:J=3,style:ue,className:fe,...pe},me)=>{const B=s.useMemo(()=>Array.isArray(n)?n:[n],[n]),v=l!==void 0,[ve,E]=s.useState(b),[P,g]=s.useState(!1),[d,ge]=s.useState([]),[q,A]=s.useState(0),L=s.useRef(null),w=s.useRef(null),W=s.useRef(""),j=v?l:ve,he=s.useCallback(t=>{if(o)return;const a=t.target.value;v||E(a),i==null||i(a);const D=t.target.selectionStart,h=a.slice(0,D);let c="",x=-1;for(const m of B){const u=h.lastIndexOf(m);u!==-1&&u>x&&(h.slice(u+m.length).includes(" ")||(x=u,c=m))}if(x!==-1&&c){const m=h.slice(x+c.length).toLowerCase(),u=r.filter(k=>!k.disabled&&(k.value.toLowerCase().includes(m)||String(k.label).toLowerCase().includes(m)));u.length>0?(g(!0),ge(u),A(0),w.current=x,W.current=c):g(!1)}else g(!1)},[v,i,r,B,o]),_=s.useCallback(t=>{if(w.current===null||!L.current)return;const a=w.current,D=j.slice(0,a),h=j.slice(L.current.selectionStart),c=`${D}${W.current}${t.value} ${h}`;v||E(c),i==null||i(c),p==null||p(t,W.current),g(!1),w.current=null},[j,v,i,p]),xe=s.useCallback(t=>{if(P)if(t.key==="ArrowDown")t.preventDefault(),A(a=>(a+1)%d.length);else if(t.key==="ArrowUp")t.preventDefault(),A(a=>(a-1+d.length)%d.length);else if(t.key==="Enter"){t.preventDefault();const a=d[q];a&&_(a)}else t.key==="Escape"&&g(!1)},[P,d,q,_]);return e.jsxs("div",{ref:me,className:z(ye(),o&&"sui-mentions--disabled",fe),style:ue,children:[e.jsx("textarea",{ref:L,value:j,onChange:he,onKeyDown:xe,disabled:o,placeholder:S,rows:J,className:z(be({disabled:o})),...pe}),P&&d.length>0&&e.jsx("div",{className:z(Se()),children:d.map((t,a)=>e.jsx("div",{className:z(we({active:a===q,disabled:t.disabled})),onClick:()=>_(t),children:t.label??t.value},t.value))})]})});f.displayName="Mentions";f.__docgenInfo={description:`Mentions 提及组件
用于在输入中提及某人或某事，类似社交媒体的 @ 功能。`,methods:[],displayName:"Mentions",props:{prefix:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:"触发字符",defaultValue:{value:"'@'",computed:!1}},options:{required:!0,tsType:{name:"Array",elements:[{name:"MentionsOptionProps"}],raw:"MentionsOptionProps[]"},description:"选项列表"},value:{required:!1,tsType:{name:"string"},description:"值"},defaultValue:{required:!1,tsType:{name:"string"},description:"默认值",defaultValue:{value:"''",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"变化回调"},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(option: MentionsOptionProps, prefix: string) => void",signature:{arguments:[{type:{name:"MentionsOptionProps"},name:"option"},{type:{name:"string"},name:"prefix"}],return:{name:"void"}}},description:"选中选项回调"},disabled:{required:!1,tsType:{name:"boolean"},description:"是否禁用",defaultValue:{value:"false",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"占位符"},rows:{required:!1,tsType:{name:"number"},description:"行数",defaultValue:{value:"3",computed:!1}},style:{required:!1,tsType:{name:"CSSProperties"},description:"自定义样式"},className:{required:!1,tsType:{name:"string"},description:"自定义类名"}},composes:["Omit"]};const Ie={title:"数据录入/Mentions 提及",component:f,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"提及组件用于在文本输入中通过特定前缀快速提及人或话题。适用于评论、协作编辑、社交互动等场景，支持多前缀、异步加载和自定义渲染。"}}},argTypes:{disabled:{control:"boolean"},rows:{control:"number"}}},y=[{value:"afc163",label:"afc163"},{value:"zombieJ",label:"zombieJ"},{value:"yesmeck",label:"yesmeck"},{value:"benjycui",label:"benjycui"},{value:"RaoHai",label:"RaoHai"},{value:"dqaria",label:"dqaria"},{value:"dengfuping",label:"dengfuping"}],V={args:{options:y,placeholder:"Type @ to mention someone"}},I={args:{options:y,disabled:!0,defaultValue:"@afc163"}},C={args:{prefix:"#",options:[{value:"react",label:"react"},{value:"vue",label:"vue"},{value:"angular",label:"angular"}],placeholder:"Type # to mention topic"}},T={render:()=>{const[n,r]=s.useState("");return e.jsxs("div",{children:[e.jsx(f,{value:n,onChange:r,options:y,placeholder:"Type @ to mention"}),e.jsxs("div",{className:"mt-4",children:["Value: ",n]})]})}},R={parameters:{docs:{description:{story:"同时支持 @ 和 # 两种前缀，分别用于提及用户和话题，适用于评论、动态发布等多场景输入。"}}},render:()=>{const[n,r]=s.useState("");return e.jsx(f,{value:n,onChange:r,prefix:["@","#"],options:[{value:"afc163",label:"@ afc163"},{value:"zombieJ",label:"@ zombieJ"},{value:"yesmeck",label:"@ yesmeck"},{value:"react",label:"# react"},{value:"vue",label:"# vue"},{value:"angular",label:"# angular"}],placeholder:"Type @ to mention users, # to mention tags",rows:4})}},M={render:()=>{const[n,r]=s.useState(""),[l,b]=s.useState(!1),[i,p]=s.useState(y),o=S=>{r(S),S.lastIndexOf("@")!==-1&&(b(!0),setTimeout(()=>{p(y),b(!1)},1e3))};return e.jsxs("div",{children:[e.jsx(f,{value:n,onChange:o,options:l?[]:i,placeholder:"Type @ to mention someone (simulates loading)",rows:3}),l&&e.jsxs("div",{className:"mt-2 text-sm text-gray-400 flex items-center gap-2",children:[e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",className:"animate-spin",children:[e.jsx("circle",{cx:"8",cy:"8",r:"6",fill:"none",stroke:"#d9d9d9",strokeWidth:"2"}),e.jsx("path",{d:"M8 2 A6 6 0 0 1 14 8",fill:"none",stroke:"#1677FF",strokeWidth:"2",strokeLinecap:"round"})]}),"Loading suggestions..."]})]})}},O={parameters:{docs:{description:{story:"自定义建议项渲染，展示头像、职位等丰富信息，适用于企业通讯录、团队协作等需要展示用户详情的场景。"}}},render:()=>{const[n,r]=s.useState(""),l=[{value:"zhangsan",label:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[e.jsx("div",{style:{width:24,height:24,borderRadius:"50%",background:"#1677ff",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,flexShrink:0},children:"张"}),e.jsxs("div",{children:[e.jsx("div",{style:{fontWeight:500,fontSize:14},children:"张三"}),e.jsx("div",{style:{fontSize:12,color:"#999"},children:"前端工程师"})]})]})},{value:"lisi",label:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[e.jsx("div",{style:{width:24,height:24,borderRadius:"50%",background:"#52c41a",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,flexShrink:0},children:"李"}),e.jsxs("div",{children:[e.jsx("div",{style:{fontWeight:500,fontSize:14},children:"李四"}),e.jsx("div",{style:{fontSize:12,color:"#999"},children:"后端工程师"})]})]})},{value:"wangwu",label:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[e.jsx("div",{style:{width:24,height:24,borderRadius:"50%",background:"#faad14",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,flexShrink:0},children:"王"}),e.jsxs("div",{children:[e.jsx("div",{style:{fontWeight:500,fontSize:14},children:"王五"}),e.jsx("div",{style:{fontSize:12,color:"#999"},children:"产品经理"})]})]})},{value:"zhaoliu",label:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[e.jsx("div",{style:{width:24,height:24,borderRadius:"50%",background:"#eb2f96",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,flexShrink:0},children:"赵"}),e.jsxs("div",{children:[e.jsx("div",{style:{fontWeight:500,fontSize:14},children:"赵六"}),e.jsx("div",{style:{fontSize:12,color:"#999"},children:"UI 设计师"})]})]})}];return e.jsx(f,{value:n,onChange:r,options:l,placeholder:"输入 @ 查看自定义渲染的建议项",rows:3})}};var F,$,U;V.parameters={...V.parameters,docs:{...(F=V.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    options: users,
    placeholder: 'Type @ to mention someone'
  }
}`,...(U=($=V.parameters)==null?void 0:$.docs)==null?void 0:U.source}}};var H,K,G;I.parameters={...I.parameters,docs:{...(H=I.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    options: users,
    disabled: true,
    defaultValue: '@afc163'
  }
}`,...(G=(K=I.parameters)==null?void 0:K.docs)==null?void 0:G.source}}};var Q,X,Y;C.parameters={...C.parameters,docs:{...(Q=C.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    prefix: '#',
    options: [{
      value: 'react',
      label: 'react'
    }, {
      value: 'vue',
      label: 'vue'
    }, {
      value: 'angular',
      label: 'angular'
    }],
    placeholder: 'Type # to mention topic'
  }
}`,...(Y=(X=C.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,te;T.parameters={...T.parameters,docs:{...(Z=T.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    return <div>
        <Mentions value={value} onChange={setValue} options={users} placeholder="Type @ to mention" />
        <div className="mt-4">Value: {value}</div>
      </div>;
  }
}`,...(te=(ee=T.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var se,ae,ne;R.parameters={...R.parameters,docs:{...(se=R.parameters)==null?void 0:se.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '同时支持 @ 和 # 两种前缀，分别用于提及用户和话题，适用于评论、动态发布等多场景输入。'
      }
    }
  },
  render: () => {
    const [value, setValue] = useState('');
    return <Mentions value={value} onChange={setValue} prefix={['@', '#']} options={[{
      value: 'afc163',
      label: '@ afc163'
    }, {
      value: 'zombieJ',
      label: '@ zombieJ'
    }, {
      value: 'yesmeck',
      label: '@ yesmeck'
    }, {
      value: 'react',
      label: '# react'
    }, {
      value: 'vue',
      label: '# vue'
    }, {
      value: 'angular',
      label: '# angular'
    }]} placeholder="Type @ to mention users, # to mention tags" rows={4} />;
  }
}`,...(ne=(ae=R.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var re,ie,le;M.parameters={...M.parameters,docs:{...(re=M.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    const [loading, setLoading] = useState(false);
    const [options, setOptions] = useState(users);
    const handleChange = (val: string) => {
      setValue(val);
      const lastAtIndex = val.lastIndexOf('@');
      if (lastAtIndex !== -1) {
        setLoading(true);
        setTimeout(() => {
          setOptions(users);
          setLoading(false);
        }, 1000);
      }
    };
    return <div>
        <Mentions value={value} onChange={handleChange} options={loading ? [] : options} placeholder="Type @ to mention someone (simulates loading)" rows={3} />
        {loading && <div className="mt-2 text-sm text-gray-400 flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 16 16" className="animate-spin">
              <circle cx="8" cy="8" r="6" fill="none" stroke="#d9d9d9" strokeWidth="2" />
              <path d="M8 2 A6 6 0 0 1 14 8" fill="none" stroke="#1677FF" strokeWidth="2" strokeLinecap="round" />
            </svg>
            Loading suggestions...
          </div>}
      </div>;
  }
}`,...(le=(ie=M.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var oe,de,ce;O.parameters={...O.parameters,docs:{...(oe=O.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '自定义建议项渲染，展示头像、职位等丰富信息，适用于企业通讯录、团队协作等需要展示用户详情的场景。'
      }
    }
  },
  render: () => {
    const [value, setValue] = useState('');
    const customOptions = [{
      value: 'zhangsan',
      label: <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }}>
            <div style={{
          width: 24,
          height: 24,
          borderRadius: '50%',
          background: '#1677ff',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 12,
          flexShrink: 0
        }}>张</div>
            <div>
              <div style={{
            fontWeight: 500,
            fontSize: 14
          }}>张三</div>
              <div style={{
            fontSize: 12,
            color: '#999'
          }}>前端工程师</div>
            </div>
          </div>
    }, {
      value: 'lisi',
      label: <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }}>
            <div style={{
          width: 24,
          height: 24,
          borderRadius: '50%',
          background: '#52c41a',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 12,
          flexShrink: 0
        }}>李</div>
            <div>
              <div style={{
            fontWeight: 500,
            fontSize: 14
          }}>李四</div>
              <div style={{
            fontSize: 12,
            color: '#999'
          }}>后端工程师</div>
            </div>
          </div>
    }, {
      value: 'wangwu',
      label: <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }}>
            <div style={{
          width: 24,
          height: 24,
          borderRadius: '50%',
          background: '#faad14',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 12,
          flexShrink: 0
        }}>王</div>
            <div>
              <div style={{
            fontWeight: 500,
            fontSize: 14
          }}>王五</div>
              <div style={{
            fontSize: 12,
            color: '#999'
          }}>产品经理</div>
            </div>
          </div>
    }, {
      value: 'zhaoliu',
      label: <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }}>
            <div style={{
          width: 24,
          height: 24,
          borderRadius: '50%',
          background: '#eb2f96',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 12,
          flexShrink: 0
        }}>赵</div>
            <div>
              <div style={{
            fontWeight: 500,
            fontSize: 14
          }}>赵六</div>
              <div style={{
            fontSize: 12,
            color: '#999'
          }}>UI 设计师</div>
            </div>
          </div>
    }];
    return <Mentions value={value} onChange={setValue} options={customOptions} placeholder="输入 @ 查看自定义渲染的建议项" rows={3} />;
  }
}`,...(ce=(de=O.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};const Ce=["Basic","Disabled","CustomPrefix","Controlled","MultiPrefix","LoadingState","CustomRender"];export{V as Basic,T as Controlled,C as CustomPrefix,O as CustomRender,I as Disabled,M as LoadingState,R as MultiPrefix,Ce as __namedExportsOrder,Ie as default};
