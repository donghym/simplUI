import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as s}from"./index-GiUgBvb1.js";import{a as Y}from"./utils-BEhiKRD9.js";import{c as G}from"./index-C08JwjkN.js";function Be(r){const a=parseInt(r.slice(1,3),16)/255,t=parseInt(r.slice(3,5),16)/255,l=parseInt(r.slice(5,7),16)/255,o=Math.max(a,t,l),i=Math.min(a,t,l),d=o-i;let p=0,g=o?d/o:0;const x=o;return d&&(o===a?p=((t-l)/d+(t<l?6:0))/6:o===t?p=((l-a)/d+2)/6:p=((a-t)/d+4)/6),{h:Math.round(p*360),s:Math.round(g*100),v:Math.round(x*100)}}function O(r,a,t){r/=360,a/=100,t/=100;const l=Math.floor(r*6),o=r*6-l,i=t*(1-a),d=t*(1-o*a),p=t*(1-(1-o)*a);let g=0,x=0,b=0;switch(l%6){case 0:g=t,x=p,b=i;break;case 1:g=d,x=t,b=i;break;case 2:g=i,x=t,b=p;break;case 3:g=i,x=d,b=t;break;case 4:g=p,x=i,b=t;break;case 5:g=t,x=i,b=d;break}const h=P=>Math.round(P*255).toString(16).padStart(2,"0");return`#${h(g)}${h(x)}${h(b)}`}const Ue=[{label:"Recommended",colors:["#f5222d","#fa8c16","#fadb14","#52c41a","#13c2c2","#1890ff","#2f54eb","#722ed1","#eb2f96","#fa541c","#a0d911","#36cfc9","#40a9ff","#597ef7","#b37feb","#ff85c0"]},{label:"Recent",colors:[]}],We={bottomLeft:{top:"100%",left:0,marginTop:4}},Oe=G("rounded-md border border-[#d9d9d9] flex items-center justify-center transition-[border-color] duration-200 shrink-0 overflow-hidden",{variants:{size:{small:"w-6 h-6",medium:"w-8 h-8",large:"w-10 h-10"},disabled:{true:"cursor-not-allowed",false:"cursor-pointer"}},defaultVariants:{size:"medium",disabled:!1}}),Ye=G("w-20 border border-[#d9d9d9] rounded-md px-2 py-1 text-[#262626] outline-none font-mono transition-[border-color,box-shadow] duration-200 focus:border-[#1677ff] focus:shadow-[0_0_0_2px_rgba(22,119,255,0.15)]",{variants:{size:{small:"text-xs",medium:"text-sm",large:"text-base"}},defaultVariants:{size:"medium"}}),Ge=G("w-[18px] h-[18px] rounded-sm cursor-pointer transition-transform duration-150 bg-[var(--swatch-color)]",{variants:{selected:{true:"scale-[1.15] border-2 border-[#1677ff]",false:"border border-[rgba(0,0,0,0.08)]"}},defaultVariants:{selected:!1}}),Le=({color:r,hsv:a,formatValue:t,allowClear:l,presets:o,onHexInputChange:i,onComplete:d,onClear:p,onFormatCycle:g,onPresetClick:x})=>{const b=s.useRef(null),h=s.useCallback(m=>{m.preventDefault();const c=b.current;if(!c)return;const y=f=>{const j=c.getBoundingClientRect();let N=(f-j.left)/j.width;N=Math.max(0,Math.min(1,N));const C=Math.round(N*360),T=O(C,a.s,a.v);i(T)};y(m.clientX);const k=f=>y(f.clientX),w=f=>{y(f.clientX),d(r),document.removeEventListener("mousemove",k),document.removeEventListener("mouseup",w)};document.addEventListener("mousemove",k),document.addEventListener("mouseup",w)},[a,i,d,r]),P=s.useCallback(m=>{m.preventDefault();const c=m.currentTarget.getBoundingClientRect(),y=(f,j)=>{const N=Math.max(0,Math.min(1,(f-c.left)/c.width)),C=Math.max(0,Math.min(1,(j-c.top)/c.height)),T=Math.round(N*100),V=Math.round((1-C)*100),v=O(a.h,T,V);i(v)};y(m.clientX,m.clientY);const k=f=>y(f.clientX,f.clientY),w=f=>{y(f.clientX,f.clientY),d(r),document.removeEventListener("mousemove",k),document.removeEventListener("mouseup",w)};document.addEventListener("mousemove",k),document.addEventListener("mouseup",w)},[a.h,i,d,r]),W=o||Ue;return e.jsxs("div",{className:"sui-color-picker__dropdown px-3 pt-3 pb-2 bg-white rounded-lg shadow-[0_6px_16px_0_rgba(0,0,0,0.08),0_3px_6px_-4px_rgba(0,0,0,0.12),0_9px_28px_8px_rgba(0,0,0,0.05)] min-w-[234px]",style:{position:"absolute",...We.bottomLeft,zIndex:1070},onClick:m=>m.stopPropagation(),children:[e.jsx("div",{className:"h-40 rounded relative mb-2 cursor-crosshair bg-[linear-gradient(to_top,#000,transparent),linear-gradient(to_right,#fff,var(--hue-color))]",style:{"--hue-color":O(a.h,100,100)},onMouseDown:P,children:e.jsx("div",{className:"absolute w-4 h-4 rounded-full border-2 border-white shadow-[0_1px_3px_rgba(0,0,0,0.3)] pointer-events-none",style:{left:`${a.s}%`,top:`${100-a.v}%`,transform:"translate(-50%, -50%)",backgroundColor:r}})}),e.jsx("div",{className:"mb-2",children:e.jsx("div",{ref:b,onMouseDown:h,className:"h-3 rounded-full cursor-pointer relative bg-[linear-gradient(to_right,#f00_0%,#ff0_17%,#0f0_33%,#0ff_50%,#00f_67%,#f0f_83%,#f00_100%)]",children:e.jsx("div",{className:"absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-[14px] h-[14px] rounded-full bg-white border-2 border-[#1677ff] shadow-[0_1px_3px_rgba(0,0,0,0.2)] pointer-events-none",style:{left:`${a.h/360*100}%`}})})}),e.jsxs("div",{className:"flex items-center gap-1 mb-2",children:[e.jsx("div",{onClick:g,className:"flex-1 px-2 py-1 border border-[#d9d9d9] rounded text-xs font-mono text-[#333] cursor-pointer select-none text-center",title:"Click to switch format",children:t}),l&&e.jsx("div",{onClick:p,className:"px-2 py-1 border border-[#d9d9d9] rounded text-xs text-[#666] cursor-pointer select-none whitespace-nowrap",children:"Clear"})]}),W.map(m=>e.jsxs("div",{className:"mb-1",children:[e.jsx("div",{className:"text-[11px] text-[#999] mb-1 select-none",children:m.label}),e.jsx("div",{className:"flex flex-wrap gap-1",children:m.colors.map(c=>e.jsx("div",{onClick:()=>x(c),className:Y(Ge({selected:r.toLowerCase()===c.toLowerCase()})),style:{"--swatch-color":c},title:c},c))})]},m.label))]})};Le.__docgenInfo={description:"",methods:[],displayName:"ColorPickerPanel",props:{color:{required:!0,tsType:{name:"string"},description:""},hsv:{required:!0,tsType:{name:"signature",type:"object",raw:"{ h: number; s: number; v: number }",signature:{properties:[{key:"h",value:{name:"number",required:!0}},{key:"s",value:{name:"number",required:!0}},{key:"v",value:{name:"number",required:!0}}]}},description:""},formatValue:{required:!0,tsType:{name:"string"},description:""},allowClear:{required:!0,tsType:{name:"boolean"},description:""},presets:{required:!1,tsType:{name:"defaultPresets"},description:""},onHexInputChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(val: string) => void",signature:{arguments:[{type:{name:"string"},name:"val"}],return:{name:"void"}}},description:""},onComplete:{required:!0,tsType:{name:"signature",type:"function",raw:"(val: string) => void",signature:{arguments:[{type:{name:"string"},name:"val"}],return:{name:"void"}}},description:""},onClear:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onFormatCycle:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onPresetClick:{required:!0,tsType:{name:"signature",type:"function",raw:"(c: string) => void",signature:{arguments:[{type:{name:"string"},name:"c"}],return:{name:"void"}}},description:""}}};const u=s.forwardRef(({value:r,defaultValue:a="#1677FF",onChange:t,onChangeComplete:l,disabled:o=!1,allowClear:i=!1,showText:d=!0,size:p="medium",format:g,presets:x,open:b,onOpenChange:h,style:P,className:W},m)=>{const c=r!==void 0,[y,k]=s.useState(a),[w,f]=s.useState(!1),[j,N]=s.useState(g||"hex"),[C,T]=s.useState(""),V=b!==void 0?b:w,v=c?r:y,z=s.useMemo(()=>Be(v),[v]);s.useEffect(()=>{T(v)},[v]);const _=s.useCallback(n=>{c||f(n),h==null||h(n)},[c,h]),S=s.useCallback(n=>{if(o)return;const q=n.startsWith("#")?n:`#${n}`;/^#[0-9a-fA-F]{6}$/.test(q)&&(c||k(q),t==null||t(q))},[o,c,t]),M=s.useCallback(n=>{l==null||l(n)},[l]),$e=s.useCallback(()=>{o||(S(a),_(!1))},[o,a,S,_]),Ee=s.useCallback(()=>{o||_(!V)},[o,V,_]),K=s.useCallback(()=>{S(C),M(C)},[C,S,M]),He=s.useCallback(n=>{S(n),M(n),_(!1)},[S,M,_]),Ae=s.useCallback(()=>{N(n=>n==="hex"?"rgb":n==="rgb"?"hsb":"hex")},[]),De=s.useMemo(()=>{const n=parseInt(v.slice(1,3),16),q=parseInt(v.slice(3,5),16),Xe=parseInt(v.slice(5,7),16);switch(j){case"rgb":return`rgb(${n}, ${q}, ${Xe})`;case"hsb":return`hsb(${z.h}, ${z.s}%, ${z.v}%)`;default:return v.toUpperCase()}},[v,j,z]);return e.jsxs("div",{ref:m,className:Y("sui-color-picker relative inline-flex items-center gap-2",o&&"sui-color-picker--disabled",W),style:P,children:[e.jsx("div",{className:Y("sui-color-picker__trigger",Oe({size:p,disabled:o})),onClick:Ee,style:{"--trigger-bg":v},children:e.jsx("div",{className:"w-full h-full rounded-[5px] bg-[var(--trigger-bg)]"})}),d&&e.jsx("input",{type:"text",value:C,onChange:n=>T(n.target.value),onBlur:K,onKeyDown:n=>n.key==="Enter"&&K(),disabled:o,className:Ye({size:p})}),V&&e.jsx(Le,{color:v,hsv:z,formatValue:De,allowClear:i,presets:x,onHexInputChange:S,onComplete:M,onClear:$e,onFormatCycle:Ae,onPresetClick:He})]})});u.displayName="ColorPicker";u.__docgenInfo={description:`ColorPicker 颜色选择器组件
用于选择颜色值，支持多种格式输出。`,methods:[],displayName:"ColorPicker",props:{value:{required:!1,tsType:{name:"string"},description:"当前选中颜色值（受控模式），HEX 格式如 '#1890ff'"},defaultValue:{required:!1,tsType:{name:"string"},description:"默认选中颜色值（非受控模式）",defaultValue:{value:"'#1677FF'",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"颜色变化回调，拖动过程中实时触发"},onChangeComplete:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"颜色选择完成回调，松开鼠标或关闭面板时触发"},disabled:{required:!1,tsType:{name:"boolean"},description:"是否禁用，默认 false",defaultValue:{value:"false",computed:!1}},disabledAlpha:{required:!1,tsType:{name:"boolean"},description:"是否禁用透明度选择，默认 false"},allowClear:{required:!1,tsType:{name:"boolean"},description:"是否允许清空选中颜色，默认 false",defaultValue:{value:"false",computed:!1}},showText:{required:!1,tsType:{name:"union",raw:"boolean | ((color: string) => ReactNode)",elements:[{name:"boolean"},{name:"unknown"}]},description:"是否显示颜色文本，可传函数自定义显示内容，默认 false",defaultValue:{value:"true",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"选择器尺寸，默认 'medium'",defaultValue:{value:"'medium'",computed:!1}},placement:{required:!1,tsType:{name:"union",raw:"'bottomLeft' | 'bottomRight' | 'topLeft' | 'topRight'",elements:[{name:"literal",value:"'bottomLeft'"},{name:"literal",value:"'bottomRight'"},{name:"literal",value:"'topLeft'"},{name:"literal",value:"'topRight'"}]},description:"弹出面板位置，默认 'bottomLeft'"},format:{required:!1,tsType:{name:"union",raw:"'hex' | 'rgb' | 'hsb'",elements:[{name:"literal",value:"'hex'"},{name:"literal",value:"'rgb'"},{name:"literal",value:"'hsb'"}]},description:"颜色格式，默认 'hex'"},presets:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ label: string; colors: string[]; defaultOpen?: boolean }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"colors",value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}},{key:"defaultOpen",value:{name:"boolean",required:!1}}]}}],raw:"{ label: string; colors: string[]; defaultOpen?: boolean }[]"},description:"预设颜色分组"},trigger:{required:!1,tsType:{name:"union",raw:"'click' | 'hover'",elements:[{name:"literal",value:"'click'"},{name:"literal",value:"'hover'"}]},description:"触发方式，默认 'click'"},open:{required:!1,tsType:{name:"boolean"},description:"面板是否打开（受控模式）"},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:"面板打开/关闭变化回调"},style:{required:!1,tsType:{name:"CSSProperties"},description:"自定义样式"},className:{required:!1,tsType:{name:"string"},description:"自定义 className"}}};const Ke=r=>e.jsx("div",{style:{display:"flex",alignItems:"flex-start",justifyContent:"center",minHeight:"500px",width:"100%",paddingTop:"40px"},children:e.jsx(r,{})}),rr={title:"数据录入/ColorPicker 颜色选择器",component:u,tags:["autodocs"],decorators:[Ke],parameters:{layout:"padded",docs:{description:{component:"提供颜色选取的交互方式。支持 HEX / RGB / HSB 格式切换，预设颜色，透明度选择等功能。"}}},argTypes:{size:{control:"select",options:["small","medium","large"]},placement:{control:"select",options:["bottomLeft","bottomRight","topLeft","topRight"]},showText:{control:"boolean"},disabled:{control:"boolean"},disabledAlpha:{control:"boolean"},allowClear:{control:"boolean"},format:{control:"select",options:["hex","rgb","hsb"]},trigger:{control:"select",options:["click","hover"]}}},I={args:{defaultValue:"#1677FF"}},L={render:()=>{const[r,a]=s.useState("#1677ff");return e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(u,{value:r,onChange:a}),e.jsxs("div",{className:"flex gap-3 items-center px-3 py-2 border border-gray-200 rounded-lg bg-gray-50",children:[e.jsx("div",{style:{width:24,height:24,borderRadius:4,background:r,border:"1px solid #d9d9d9",flexShrink:0}}),e.jsx("span",{style:{color:"var(--color-gray-500, #6b7280)",fontSize:13},children:"Color:"}),e.jsx("span",{style:{fontFamily:"SF Mono, Monaco, monospace",fontSize:14,fontWeight:500,color:"#333"},children:r.toUpperCase()})]})]})}},$={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(u,{defaultValue:"#f5222d",size:"small"}),e.jsx(u,{defaultValue:"#52c41a",size:"medium"}),e.jsx(u,{defaultValue:"#1890ff",size:"large"})]})},E={args:{defaultValue:"#ff4d4f",disabled:!0}},H={args:{defaultValue:"#722ed1",showText:!1}},A={args:{defaultValue:"#eb2f96",allowClear:!0}},D={render:()=>{const[r,a]=s.useState("#1677FF");return e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(u,{value:r,onChange:a}),e.jsxs("div",{style:{fontFamily:"monospace",fontSize:13,color:"var(--color-gray-500, #6b7280)"},children:["HEX: ",r]})]})}},X={parameters:{docs:{description:{story:"展示弹出面板的不同定位方式，适用于页面边缘或特殊布局下的颜色选择器摆放。"}}},render:()=>e.jsxs("div",{style:{display:"flex",gap:24,paddingTop:80},children:[e.jsx(u,{defaultValue:"#13c2c2",placement:"topLeft"}),e.jsx(u,{defaultValue:"#722ed1",placement:"topRight"})]})},B={render:()=>{const[r,a]=s.useState("#1677ff");return e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(u,{value:r,onChange:a,presets:[{label:"Recommended",colors:["#1677ff","#0958d9","#003eb3","#722ed1","#531dab","#391085"],defaultOpen:!0},{label:"Recent",colors:["#f5222d","#fa541c","#fa8c16","#fadb14","#52c41a","#13c2c2"]}]}),e.jsxs("div",{className:"flex gap-3 items-center px-3 py-2 border border-gray-200 rounded-lg bg-gray-50",children:[e.jsx("div",{style:{width:24,height:24,borderRadius:4,background:r,border:"1px solid #d9d9d9",flexShrink:0}}),e.jsx("span",{style:{fontFamily:"SF Mono, Monaco, monospace",fontSize:14,fontWeight:500,color:"#333"},children:r.toUpperCase()})]})]})}},U={render:()=>{const[r,a]=s.useState("#1677ff"),[t,l]=s.useState("#52c41a");return e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{children:[e.jsx("div",{className:"mb-2 text-sm text-gray-500",children:"Click trigger (default)"}),e.jsx(u,{value:r,onChange:a,trigger:"click"})]}),e.jsxs("div",{children:[e.jsx("div",{className:"mb-2 text-sm text-gray-500",children:"Hover trigger"}),e.jsx(u,{value:t,onChange:l,trigger:"hover"})]})]})}},F={render:()=>{const[r,a]=s.useState("#1677ff"),[t,l]=s.useState(100),o=(()=>{const i=parseInt(r.slice(1,3),16),d=parseInt(r.slice(3,5),16),p=parseInt(r.slice(5,7),16);return`rgba(${i}, ${d}, ${p}, ${t/100})`})();return e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(u,{value:r,onChange:a,disabledAlpha:!1}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-sm text-gray-500",children:"透明度："}),e.jsx("input",{type:"range",min:0,max:100,value:t,onChange:i=>l(Number(i.target.value)),className:"w-40"}),e.jsxs("span",{className:"text-sm font-mono",children:[t,"%"]})]}),e.jsxs("div",{className:"flex gap-3 items-center px-3 py-2 border border-gray-200 rounded-lg bg-gray-50",children:[e.jsx("div",{style:{width:48,height:48,borderRadius:4,background:o,border:"1px solid #d9d9d9",backgroundImage:"linear-gradient(45deg, #ccc 25%, transparent 25%), linear-gradient(-45deg, #ccc 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ccc 75%), linear-gradient(-45deg, transparent 75%, #ccc 75%)",backgroundSize:"8px 8px",backgroundPosition:"0 0, 0 4px, 4px -4px, -4px 0px",position:"relative",overflow:"hidden"},children:e.jsx("div",{style:{position:"absolute",inset:0,background:o,borderRadius:3}})}),e.jsxs("div",{children:[e.jsx("div",{style:{fontFamily:"monospace",fontSize:13,color:"#333"},children:o}),e.jsxs("div",{style:{fontSize:11,color:"#999"},children:["Alpha: ",t,"%"]})]})]})]})}},R={parameters:{docs:{description:{story:"并排对比三种尺寸的颜色选择器，便于直观选择合适的组件大小。"}}},render:()=>e.jsxs("div",{className:"flex items-end gap-6",children:[e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(u,{defaultValue:"#f5222d",size:"small"}),e.jsx("span",{className:"text-xs text-gray-500",children:"Small"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(u,{defaultValue:"#52c41a",size:"medium"}),e.jsx("span",{className:"text-xs text-gray-500",children:"Medium"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(u,{defaultValue:"#1890ff",size:"large"}),e.jsx("span",{className:"text-xs text-gray-500",children:"Large"})]})]})};var J,Q,Z;I.parameters={...I.parameters,docs:{...(J=I.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    defaultValue: '#1677FF'
  }
}`,...(Z=(Q=I.parameters)==null?void 0:Q.docs)==null?void 0:Z.source}}};var ee,re,ae;L.parameters={...L.parameters,docs:{...(ee=L.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => {
    const [color, setColor] = useState('#1677ff');
    return <div className="flex flex-col gap-4">
        <ColorPicker value={color} onChange={setColor} />
        <div className="flex gap-3 items-center px-3 py-2 border border-gray-200 rounded-lg bg-gray-50">
          <div style={{
          width: 24,
          height: 24,
          borderRadius: 4,
          background: color,
          border: '1px solid #d9d9d9',
          flexShrink: 0
        }} />
          <span style={{
          color: 'var(--color-gray-500, #6b7280)',
          fontSize: 13
        }}>Color:</span>
          <span style={{
          fontFamily: 'SF Mono, Monaco, monospace',
          fontSize: 14,
          fontWeight: 500,
          color: '#333'
        }}>{color.toUpperCase()}</span>
        </div>
      </div>;
  }
}`,...(ae=(re=L.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var te,se,oe;$.parameters={...$.parameters,docs:{...(te=$.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <ColorPicker defaultValue="#f5222d" size="small" />
      <ColorPicker defaultValue="#52c41a" size="medium" />
      <ColorPicker defaultValue="#1890ff" size="large" />
    </div>
}`,...(oe=(se=$.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var ne,le,ie;E.parameters={...E.parameters,docs:{...(ne=E.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    defaultValue: '#ff4d4f',
    disabled: true
  }
}`,...(ie=(le=E.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var ce,de,ue;H.parameters={...H.parameters,docs:{...(ce=H.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    defaultValue: '#722ed1',
    showText: false
  }
}`,...(ue=(de=H.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var pe,me,fe;A.parameters={...A.parameters,docs:{...(pe=A.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    defaultValue: '#eb2f96',
    allowClear: true
  }
}`,...(fe=(me=A.parameters)==null?void 0:me.docs)==null?void 0:fe.source}}};var ge,xe,be;D.parameters={...D.parameters,docs:{...(ge=D.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render: () => {
    const [color, setColor] = useState('#1677FF');
    return <div className="flex flex-col gap-4">
        <ColorPicker value={color} onChange={setColor} />
        <div style={{
        fontFamily: 'monospace',
        fontSize: 13,
        color: 'var(--color-gray-500, #6b7280)'
      }}>
          HEX: {color}
        </div>
      </div>;
  }
}`,...(be=(xe=D.parameters)==null?void 0:xe.docs)==null?void 0:be.source}}};var ve,he,ye;X.parameters={...X.parameters,docs:{...(ve=X.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '展示弹出面板的不同定位方式，适用于页面边缘或特殊布局下的颜色选择器摆放。'
      }
    }
  },
  render: () => <div style={{
    display: 'flex',
    gap: 24,
    paddingTop: 80
  }}>
      <ColorPicker defaultValue="#13c2c2" placement="topLeft" />
      <ColorPicker defaultValue="#722ed1" placement="topRight" />
    </div>
}`,...(ye=(he=X.parameters)==null?void 0:he.docs)==null?void 0:ye.source}}};var Ce,ke,we;B.parameters={...B.parameters,docs:{...(Ce=B.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  render: () => {
    const [color, setColor] = useState('#1677ff');
    return <div className="flex flex-col gap-4">
        <ColorPicker value={color} onChange={setColor} presets={[{
        label: 'Recommended',
        colors: ['#1677ff', '#0958d9', '#003eb3', '#722ed1', '#531dab', '#391085'],
        defaultOpen: true
      }, {
        label: 'Recent',
        colors: ['#f5222d', '#fa541c', '#fa8c16', '#fadb14', '#52c41a', '#13c2c2']
      }]} />
        <div className="flex gap-3 items-center px-3 py-2 border border-gray-200 rounded-lg bg-gray-50">
          <div style={{
          width: 24,
          height: 24,
          borderRadius: 4,
          background: color,
          border: '1px solid #d9d9d9',
          flexShrink: 0
        }} />
          <span style={{
          fontFamily: 'SF Mono, Monaco, monospace',
          fontSize: 14,
          fontWeight: 500,
          color: '#333'
        }}>{color.toUpperCase()}</span>
        </div>
      </div>;
  }
}`,...(we=(ke=B.parameters)==null?void 0:ke.docs)==null?void 0:we.source}}};var je,Ne,Se;U.parameters={...U.parameters,docs:{...(je=U.parameters)==null?void 0:je.docs,source:{originalSource:`{
  render: () => {
    const [clickColor, setClickColor] = useState('#1677ff');
    const [hoverColor, setHoverColor] = useState('#52c41a');
    return <div className="flex flex-col gap-6">
        <div>
          <div className="mb-2 text-sm text-gray-500">Click trigger (default)</div>
          <ColorPicker value={clickColor} onChange={setClickColor} trigger="click" />
        </div>
        <div>
          <div className="mb-2 text-sm text-gray-500">Hover trigger</div>
          <ColorPicker value={hoverColor} onChange={setHoverColor} trigger="hover" />
        </div>
      </div>;
  }
}`,...(Se=(Ne=U.parameters)==null?void 0:Ne.docs)==null?void 0:Se.source}}};var Te,_e,Pe,Ve,ze;F.parameters={...F.parameters,docs:{...(Te=F.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  render: () => {
    const [color, setColor] = useState('#1677ff');
    const [alpha, setAlpha] = useState(100);
    const rgbaColor = (() => {
      const r = parseInt(color.slice(1, 3), 16);
      const g = parseInt(color.slice(3, 5), 16);
      const b = parseInt(color.slice(5, 7), 16);
      return \`rgba(\${r}, \${g}, \${b}, \${alpha / 100})\`;
    })();
    return <div className="flex flex-col gap-4">
        <ColorPicker value={color} onChange={setColor} disabledAlpha={false} />
        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-500">透明度：</span>
          <input type="range" min={0} max={100} value={alpha} onChange={e => setAlpha(Number(e.target.value))} className="w-40" />
          <span className="text-sm font-mono">{alpha}%</span>
        </div>
        <div className="flex gap-3 items-center px-3 py-2 border border-gray-200 rounded-lg bg-gray-50">
          <div style={{
          width: 48,
          height: 48,
          borderRadius: 4,
          background: rgbaColor,
          border: '1px solid #d9d9d9',
          backgroundImage: 'linear-gradient(45deg, #ccc 25%, transparent 25%), linear-gradient(-45deg, #ccc 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ccc 75%), linear-gradient(-45deg, transparent 75%, #ccc 75%)',
          backgroundSize: '8px 8px',
          backgroundPosition: '0 0, 0 4px, 4px -4px, -4px 0px',
          position: 'relative',
          overflow: 'hidden'
        }}>
            <div style={{
            position: 'absolute',
            inset: 0,
            background: rgbaColor,
            borderRadius: 3
          }} />
          </div>
          <div>
            <div style={{
            fontFamily: 'monospace',
            fontSize: 13,
            color: '#333'
          }}>{rgbaColor}</div>
            <div style={{
            fontSize: 11,
            color: '#999'
          }}>Alpha: {alpha}%</div>
          </div>
        </div>
      </div>;
  }
}`,...(Pe=(_e=F.parameters)==null?void 0:_e.docs)==null?void 0:Pe.source},description:{story:"带透明度通道",...(ze=(Ve=F.parameters)==null?void 0:Ve.docs)==null?void 0:ze.description}}};var Me,qe,Fe,Re,Ie;R.parameters={...R.parameters,docs:{...(Me=R.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '并排对比三种尺寸的颜色选择器，便于直观选择合适的组件大小。'
      }
    }
  },
  render: () => <div className="flex items-end gap-6">
      <div className="flex flex-col items-center gap-2">
        <ColorPicker defaultValue="#f5222d" size="small" />
        <span className="text-xs text-gray-500">Small</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <ColorPicker defaultValue="#52c41a" size="medium" />
        <span className="text-xs text-gray-500">Medium</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <ColorPicker defaultValue="#1890ff" size="large" />
        <span className="text-xs text-gray-500">Large</span>
      </div>
    </div>
}`,...(Fe=(qe=R.parameters)==null?void 0:qe.docs)==null?void 0:Fe.source},description:{story:"不同尺寸并排展示",...(Ie=(Re=R.parameters)==null?void 0:Re.docs)==null?void 0:Ie.description}}};const ar=["Basic","Controlled","Size","Disabled","NoText","AllowClear","FormatSwitch","Placement","PresetColors","TriggerMode","WithAlpha","SizeVariants"];export{A as AllowClear,I as Basic,L as Controlled,E as Disabled,D as FormatSwitch,H as NoText,X as Placement,B as PresetColors,$ as Size,R as SizeVariants,U as TriggerMode,F as WithAlpha,ar as __namedExportsOrder,rr as default};
