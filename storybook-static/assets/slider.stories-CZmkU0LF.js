import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as s}from"./index-GiUgBvb1.js";import{a as V}from"./utils-BEhiKRD9.js";import{c as _}from"./index-C08JwjkN.js";const Je=_("relative w-full rounded-full bg-gray-400 select-none",{variants:{disabled:{true:"opacity-50 cursor-not-allowed pointer-events-none",false:"cursor-pointer"},componentSize:{small:"h-1",middle:"h-2",large:"h-3"}},defaultVariants:{disabled:!1,componentSize:"middle"}}),Ke=_("absolute h-full rounded-full bg-primary-500",{variants:{disabled:{true:"bg-muted-foreground",false:""}},defaultVariants:{disabled:!1}}),Q=_("absolute rounded-full bg-white border-2 border-primary-500 shadow-sm transition-transform duration-150 hover:scale-110 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2",{variants:{disabled:{true:"border-muted-foreground cursor-not-allowed hover:scale-100",false:"cursor-grab active:cursor-grabbing"},componentSize:{small:"w-3 h-3 -mt-[5px]",middle:"w-4 h-4 -mt-1",large:"w-5 h-5 -mt-[5px]"}},defaultVariants:{disabled:!1,componentSize:"middle"}}),Qe=_("absolute w-1 h-1 rounded-full bg-muted-foreground -translate-x-1/2",{variants:{active:{true:"bg-primary-500",false:""}},defaultVariants:{active:!1}});function Ye(i,m,p){return Math.min(Math.max(i,m),p)}function Ze(i,m,p){const g=Math.round((i-p)/m);return p+g*m}const l=s.forwardRef((i,m)=>{const{className:p,value:g,defaultValue:O=0,onChange:n,min:c=0,max:y=100,step:X=1,disabled:a,range:f,marks:P,showTooltip:Fe=!0,componentSize:B,...He}=i,u=g!==void 0,Oe=s.useMemo(()=>u?g:O,[u,g,O]),[Xe,I]=s.useState(Oe),[h,U]=s.useState(null),[Ue,L]=s.useState(null),o=u?g:Xe,j=s.useRef(null),G=s.useCallback(()=>f&&Array.isArray(o)?[o[0],o[1]]:[o],[o,f]),[S,w]=s.useMemo(()=>{const r=G();return[r[0],r[1]??r[0]]},[G]),v=s.useCallback(r=>(r-c)/(y-c)*100,[c,y]),$=s.useCallback(r=>{const t=Ye(r,0,100)/100;return Ze(c+t*(y-c),X,c)},[c,y,X]),F=s.useCallback(r=>{if(a||h===null||!j.current)return;const t=j.current.getBoundingClientRect(),x=(r.clientX-t.left)/t.width*100,d=$(x);if(f&&Array.isArray(o)){const[M,W]=o,k=h===0?[Math.min(d,W),W]:[M,Math.max(d,M)];u||I(k),n==null||n(k)}else u||I(d),n==null||n(d)},[a,h,$,f,o,u,n]),H=s.useCallback(()=>U(null),[]),J=s.useCallback(r=>t=>{a||(t.preventDefault(),U(r))},[a]);s.useEffect(()=>{if(h!==null)return document.addEventListener("mousemove",F),document.addEventListener("mouseup",H),()=>{document.removeEventListener("mousemove",F),document.removeEventListener("mouseup",H)}},[h,F,H]);const Ge=s.useCallback(r=>{if(a||!j.current)return;const t=j.current.getBoundingClientRect(),x=(r.clientX-t.left)/t.width*100,d=$(x);if(f&&Array.isArray(o)){const[M,W]=o,k=d<(M+W)/2?[d,W]:[M,d];u||I(k),n==null||n(k)}else u||I(d),n==null||n(d)},[a,$,f,o,u,n]),K=(r,t)=>{if(!Fe)return null;const x=h===t||Ue===t;return e.jsx("span",{className:V("absolute -top-8 -translate-x-1/2 px-2 py-1 text-xs bg-foreground text-white rounded transition-opacity duration-150",x?"opacity-100":"opacity-0"),style:{left:`${v(r)}%`},children:r})};return e.jsxs("div",{ref:j,className:V("sui-slider",Je({disabled:a,componentSize:B}),p),onClick:Ge,...He,children:[e.jsx("div",{className:V(Ke({disabled:a})),style:{left:`${v(S)}%`,width:`${v(w)-v(S)}%`}}),P==null?void 0:P.map(r=>{const t=v(r.value),x=r.value>=S&&r.value<=w;return e.jsxs("div",{className:"absolute",style:{left:`${t}%`},children:[e.jsx("div",{className:V(Qe({active:x}))}),r.label&&e.jsx("span",{className:"absolute top-4 left-1/2 -translate-x-1/2 text-xs text-muted-foreground",children:r.label})]},r.value)}),e.jsxs("div",{ref:m,children:[K(S,0),e.jsx("div",{role:"slider","aria-label":"滑块","aria-valuemin":c,"aria-valuemax":y,"aria-valuenow":S,"aria-disabled":a,tabIndex:a?-1:0,onMouseDown:J(0),onMouseEnter:()=>{a||L(0)},onMouseLeave:()=>{a||L(null)},className:V(Q({disabled:a,componentSize:B})),style:{left:`${v(S)}%`}}),f&&e.jsxs(e.Fragment,{children:[K(w,1),e.jsx("div",{role:"slider","aria-label":"滑块","aria-valuemin":c,"aria-valuemax":y,"aria-valuenow":w,"aria-disabled":a,tabIndex:a?-1:0,onMouseDown:J(1),onMouseEnter:()=>{a||L(1)},onMouseLeave:()=>{a||L(null)},className:V(Q({disabled:a,componentSize:B})),style:{left:`${v(w)}%`}})]})]})]})});l.displayName="Slider";l.__docgenInfo={description:"",methods:[],displayName:"Slider",props:{value:{required:!1,tsType:{name:"union",raw:"number | [number, number]",elements:[{name:"number"},{name:"tuple",raw:"[number, number]",elements:[{name:"number"},{name:"number"}]}]},description:"当前值（受控模式），单滑块时为数字，双滑块时为 [start, end]"},defaultValue:{required:!1,tsType:{name:"union",raw:"number | [number, number]",elements:[{name:"number"},{name:"tuple",raw:"[number, number]",elements:[{name:"number"},{name:"number"}]}]},description:"默认值（非受控模式），单滑块时为数字，双滑块时为 [start, end]"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number | [number, number]) => void",signature:{arguments:[{type:{name:"union",raw:"number | [number, number]",elements:[{name:"number"},{name:"tuple",raw:"[number, number]",elements:[{name:"number"},{name:"number"}]}]},name:"value"}],return:{name:"void"}}},description:"值变化回调，参数为当前值"},min:{required:!1,tsType:{name:"number"},description:"最小值，默认 0"},max:{required:!1,tsType:{name:"number"},description:"最大值，默认 100"},step:{required:!1,tsType:{name:"number"},description:"步长，默认 1"},disabled:{required:!1,tsType:{name:"boolean"},description:"是否禁用，禁用后不可交互且显示灰色，默认 false"},range:{required:!1,tsType:{name:"boolean"},description:"是否为范围选择（双滑块），默认 false"},marks:{required:!1,tsType:{name:"Array",elements:[{name:"SliderMark"}],raw:"SliderMark[]"},description:"是否显示刻度标记"},showTooltip:{required:!1,tsType:{name:"boolean"},description:"是否显示 tooltip，默认 true"},componentSize:{required:!1,tsType:{name:"union",raw:"'small' | 'middle' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'middle'"},{name:"literal",value:"'large'"}]},description:"滑动条尺寸，控制轨道高度和手柄大小，默认 'middle'"},className:{required:!1,tsType:{name:"string"},description:"自定义类名，通过 twMerge 合并覆盖默认样式"}},composes:["Omit","VariantProps"]};const nr={title:"数据录入/Slider 滑动输入条",component:l,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"滑动输入条用于通过拖动滑块在范围内选择数值。适用于音量调节、价格区间筛选、评分设置等场景，支持单值和范围选择以及刻度标记。"}}},argTypes:{min:{control:"number",description:"最小值"},max:{control:"number",description:"最大值"},step:{control:"number",description:"步长"},disabled:{control:"boolean",description:"是否禁用"},range:{control:"boolean",description:"是否范围选择"},showTooltip:{control:"boolean",description:"是否显示 tooltip"},componentSize:{control:"select",options:["small","middle","large"],description:"滑动条尺寸，控制轨道高度和手柄大小"}}},b=({children:i})=>e.jsx("div",{className:"w-full max-w-80 py-4",children:i}),N={render:()=>e.jsx(b,{children:e.jsx(l,{defaultValue:30})})},C={parameters:{docs:{description:{story:"自定义最小值和最大值，适用于非 0-100 标准范围的数值选择场景。"}}},render:()=>e.jsx(b,{children:e.jsx(l,{defaultValue:50,min:0,max:200})})},T={render:()=>e.jsx(b,{children:e.jsx(l,{defaultValue:20,step:10,min:0,max:100})})},z={parameters:{docs:{description:{story:"双滑块范围选择，适用于价格区间、时间范围等需要同时设定上下限的场景。"}}},render:()=>e.jsx(b,{children:e.jsx(l,{defaultValue:[20,80],range:!0})})},q={parameters:{docs:{description:{story:"禁用状态下的滑动条不可交互，适用于数值已固定或权限受限的场景。"}}},render:()=>e.jsx(b,{children:e.jsx(l,{defaultValue:50,disabled:!0})})},E={parameters:{docs:{description:{story:"在滑动条上显示刻度标签，帮助用户理解数值含义，适用于温度、进度等有明确刻度的场景。"}}},render:()=>e.jsx(b,{children:e.jsx(l,{defaultValue:50,marks:[{value:0,label:"0°C"},{value:25,label:"25°C"},{value:50,label:"50°C"},{value:75,label:"75°C"},{value:100,label:"100°C"}]})})},R={render:()=>e.jsx(b,{children:e.jsx(l,{defaultValue:[20,60],range:!0,marks:[{value:0,label:"开始"},{value:50,label:"中间"},{value:100,label:"结束"}]})})},D={render:()=>{const[i,m]=s.useState(30);return e.jsx(b,{children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("p",{children:["当前值：",i]}),e.jsx(l,{value:i,onChange:p=>m(p)})]})})}},A={parameters:{docs:{description:{story:"展示小、中、大三种尺寸的滑动条，适应不同布局密度的需求。"}}},render:()=>e.jsxs("div",{className:"w-full max-w-80 space-y-8 py-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm text-gray-600 mb-2",children:'小尺寸（componentSize="small"）'}),e.jsx(l,{defaultValue:30,componentSize:"small"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm text-gray-600 mb-2",children:"中尺寸（默认）"}),e.jsx(l,{defaultValue:50})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm text-gray-600 mb-2",children:'大尺寸（componentSize="large"）'}),e.jsx(l,{defaultValue:70,componentSize:"large"})]})]})};var Y,Z,ee,re,ae;N.parameters={...N.parameters,docs:{...(Y=N.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <Wrapper>
      <Slider defaultValue={30} />
    </Wrapper>
}`,...(ee=(Z=N.parameters)==null?void 0:Z.docs)==null?void 0:ee.source},description:{story:"基础用法",...(ae=(re=N.parameters)==null?void 0:re.docs)==null?void 0:ae.description}}};var se,ne,te,le,oe;C.parameters={...C.parameters,docs:{...(se=C.parameters)==null?void 0:se.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '自定义最小值和最大值，适用于非 0-100 标准范围的数值选择场景。'
      }
    }
  },
  render: () => <Wrapper>
      <Slider defaultValue={50} min={0} max={200} />
    </Wrapper>
}`,...(te=(ne=C.parameters)==null?void 0:ne.docs)==null?void 0:te.source},description:{story:"自定义范围",...(oe=(le=C.parameters)==null?void 0:le.docs)==null?void 0:oe.description}}};var ie,de,ce,ue,me;T.parameters={...T.parameters,docs:{...(ie=T.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => <Wrapper>
      <Slider defaultValue={20} step={10} min={0} max={100} />
    </Wrapper>
}`,...(ce=(de=T.parameters)==null?void 0:de.docs)==null?void 0:ce.source},description:{story:"带步长",...(me=(ue=T.parameters)==null?void 0:ue.docs)==null?void 0:me.description}}};var pe,be,fe,ve,xe;z.parameters={...z.parameters,docs:{...(pe=z.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '双滑块范围选择，适用于价格区间、时间范围等需要同时设定上下限的场景。'
      }
    }
  },
  render: () => <Wrapper>
      <Slider defaultValue={[20, 80]} range />
    </Wrapper>
}`,...(fe=(be=z.parameters)==null?void 0:be.docs)==null?void 0:fe.source},description:{story:"范围选择",...(xe=(ve=z.parameters)==null?void 0:ve.docs)==null?void 0:xe.description}}};var ge,ye,he,Se,Ve;q.parameters={...q.parameters,docs:{...(ge=q.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '禁用状态下的滑动条不可交互，适用于数值已固定或权限受限的场景。'
      }
    }
  },
  render: () => <Wrapper>
      <Slider defaultValue={50} disabled />
    </Wrapper>
}`,...(he=(ye=q.parameters)==null?void 0:ye.docs)==null?void 0:he.source},description:{story:"禁用状态",...(Ve=(Se=q.parameters)==null?void 0:Se.docs)==null?void 0:Ve.description}}};var je,we,Me,We,ke;E.parameters={...E.parameters,docs:{...(je=E.parameters)==null?void 0:je.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '在滑动条上显示刻度标签，帮助用户理解数值含义，适用于温度、进度等有明确刻度的场景。'
      }
    }
  },
  render: () => <Wrapper>
      <Slider defaultValue={50} marks={[{
      value: 0,
      label: '0°C'
    }, {
      value: 25,
      label: '25°C'
    }, {
      value: 50,
      label: '50°C'
    }, {
      value: 75,
      label: '75°C'
    }, {
      value: 100,
      label: '100°C'
    }]} />
    </Wrapper>
}`,...(Me=(we=E.parameters)==null?void 0:we.docs)==null?void 0:Me.source},description:{story:"带刻度",...(ke=(We=E.parameters)==null?void 0:We.docs)==null?void 0:ke.description}}};var Ne,Ce,Te,ze,qe;R.parameters={...R.parameters,docs:{...(Ne=R.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  render: () => <Wrapper>
      <Slider defaultValue={[20, 60]} range marks={[{
      value: 0,
      label: '开始'
    }, {
      value: 50,
      label: '中间'
    }, {
      value: 100,
      label: '结束'
    }]} />
    </Wrapper>
}`,...(Te=(Ce=R.parameters)==null?void 0:Ce.docs)==null?void 0:Te.source},description:{story:"范围选择 + 刻度",...(qe=(ze=R.parameters)==null?void 0:ze.docs)==null?void 0:qe.description}}};var Ee,Re,De,Ae,Ie;D.parameters={...D.parameters,docs:{...(Ee=D.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState(30);
    return <Wrapper>
        <div className="space-y-4">
          <p>当前值：{value}</p>
          <Slider value={value} onChange={v => setValue(v as number)} />
        </div>
      </Wrapper>;
  }
}`,...(De=(Re=D.parameters)==null?void 0:Re.docs)==null?void 0:De.source},description:{story:"受控模式",...(Ie=(Ae=D.parameters)==null?void 0:Ae.docs)==null?void 0:Ie.description}}};var Le,$e,_e,Pe,Be;A.parameters={...A.parameters,docs:{...(Le=A.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '展示小、中、大三种尺寸的滑动条，适应不同布局密度的需求。'
      }
    }
  },
  render: () => <div className="w-full max-w-80 space-y-8 py-4">
      <div>
        <label className="block text-sm text-gray-600 mb-2">小尺寸（componentSize="small"）</label>
        <Slider defaultValue={30} componentSize="small" />
      </div>
      <div>
        <label className="block text-sm text-gray-600 mb-2">中尺寸（默认）</label>
        <Slider defaultValue={50} />
      </div>
      <div>
        <label className="block text-sm text-gray-600 mb-2">大尺寸（componentSize="large"）</label>
        <Slider defaultValue={70} componentSize="large" />
      </div>
    </div>
}`,...(_e=($e=A.parameters)==null?void 0:$e.docs)==null?void 0:_e.source},description:{story:"不同尺寸",...(Be=(Pe=A.parameters)==null?void 0:Pe.docs)==null?void 0:Be.description}}};const tr=["Default","WithMinMax","WithStep","Range","Disabled","WithMarks","RangeWithMarks","Controlled","Sizes"];export{D as Controlled,N as Default,q as Disabled,z as Range,R as RangeWithMarks,A as Sizes,E as WithMarks,C as WithMinMax,T as WithStep,tr as __namedExportsOrder,nr as default};
