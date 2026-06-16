import{j as e}from"./jsx-runtime-CDt2p4po.js";import{r as H}from"./index-GiUgBvb1.js";import{a as h}from"./utils-BEhiKRD9.js";import{c as x}from"./index-C08JwjkN.js";import{L as U}from"./loader-circle-CulI208u.js";import"./createLucideIcon-CZe00VV7.js";const Z=x("flex flex-col gap-4",{variants:{bordered:{true:"border border-solid border-border rounded-lg p-4",false:""}},defaultVariants:{bordered:!1}}),ee=x("flex flex-col gap-1",{variants:{},defaultVariants:{}}),ae=x("text-base font-medium text-foreground",{variants:{},defaultVariants:{}}),re=x("text-sm text-muted-foreground",{variants:{},defaultVariants:{}}),te=x("flex-1 min-h-0",{variants:{},defaultVariants:{}}),C=H.forwardRef((r,d)=>{const{title:a,description:t,className:l,children:s,...c}=r;return e.jsxs("div",{ref:d,className:h(ee(),l),...c,children:[a&&e.jsx("div",{className:h(ae()),children:a}),t&&e.jsx("div",{className:h(re()),children:t}),s]})});C.displayName="ChartHeader";const n=H.forwardRef((r,d)=>{const{children:a,className:t,...l}=r;return e.jsx("div",{ref:d,className:h(te(),t),...l,children:a})});n.displayName="ChartBody";const i=H.forwardRef((r,d)=>{const{title:a,description:t,children:l,bordered:s=!1,loading:c=!1,className:u,...b}=r;return e.jsxs("div",{ref:d,"aria-label":typeof a=="string"?a:"图表",className:h(Z({bordered:s}),c&&"pointer-events-none",u),...b,children:[(a||t)&&e.jsx(C,{title:a,description:t}),e.jsx(n,{children:c?e.jsx("div",{className:"flex items-center justify-center h-full min-h-[200px]",role:"status",children:e.jsx(U,{className:"h-8 w-8 animate-spin text-primary-500","aria-hidden":"true"})}):l})]})});i.displayName="Chart";i.__docgenInfo={description:`Chart 图表容器

用于包裹第三方图表库（如 ECharts、Recharts）的容器组件。
提供标题、描述、边框、加载状态等通用功能。`,methods:[],displayName:"Chart",props:{title:{required:!1,tsType:{name:"ReactNode"},description:"图表标题"},description:{required:!1,tsType:{name:"ReactNode"},description:"图表描述"},children:{required:!0,tsType:{name:"ReactNode"},description:"图表内容区域"},bordered:{required:!1,tsType:{name:"boolean"},description:"是否显示边框。默认 false"},loading:{required:!1,tsType:{name:"boolean"},description:"是否显示加载状态"},className:{required:!1,tsType:{name:"string"},description:"自定义 className，通过 cn() + twMerge 合并"}},composes:["Omit","VariantProps"]};C.__docgenInfo={description:"ChartHeader 图表头部",methods:[],displayName:"ChartHeader",props:{title:{required:!1,tsType:{name:"ReactNode"},description:"标题"},description:{required:!1,tsType:{name:"ReactNode"},description:"描述"},className:{required:!1,tsType:{name:"string"},description:"自定义 className"}},composes:["Omit"]};n.__docgenInfo={description:"ChartBody 图表内容区",methods:[],displayName:"ChartBody",props:{children:{required:!1,tsType:{name:"ReactNode"},description:"子元素"},className:{required:!1,tsType:{name:"string"},description:"自定义 className"}},composes:["HTMLAttributes"]};const oe={title:"数据展示/Chart 图表",component:i,tags:["autodocs"],parameters:{layout:"padded"}},y={render:()=>e.jsx(i,{title:"销售概览",description:"月度销售数据",children:e.jsx(n,{children:e.jsx("div",{className:"h-[200px] flex items-center justify-center bg-gray-100 rounded",children:"图表内容占位"})})})},g={render:()=>e.jsx(i,{bordered:!0,title:"收入",description:"季度收入",children:e.jsx(n,{children:e.jsx("div",{className:"h-[150px] flex items-center justify-center",children:"收入图表"})})})},v={render:()=>e.jsx(i,{loading:!0,title:"图表加载中",children:e.jsx(n,{children:e.jsx("div",{className:"h-[200px]",children:"内容"})})})},N={render:()=>e.jsxs(i,{children:[e.jsx(C,{title:"自定义标题",description:"自定义布局"}),e.jsx(n,{children:e.jsx("div",{className:"h-[200px] bg-primary-50 rounded flex items-center justify-center",children:"图表区域"})})]})},j={render:()=>e.jsx(i,{children:e.jsx(n,{children:e.jsx("div",{className:"h-[200px] bg-gray-50 rounded p-4",children:"无标题图表"})})})},p={render:()=>{const r=[{label:"一月",value:65},{label:"二月",value:40},{label:"三月",value:85},{label:"四月",value:55},{label:"五月",value:72},{label:"六月",value:90}],d=Math.max(...r.map(a=>a.value));return e.jsx(i,{title:"月度销售",description:"柱状图示例",children:e.jsx(n,{children:e.jsx("div",{className:"h-[240px] flex items-end gap-3 px-4 pt-4 pb-2",children:r.map(a=>e.jsxs("div",{className:"flex-1 flex flex-col items-center gap-1",children:[e.jsx("span",{className:"text-xs text-gray-500",children:a.value}),e.jsx("div",{className:"w-full rounded-t-md bg-indigo-500 transition-all",style:{height:`${a.value/d*180}px`}}),e.jsx("span",{className:"text-xs text-gray-600",children:a.label})]},a.label))})})})}},m={render:()=>{const r=[30,45,28,60,52,78,65,90,72,85,68,95],d=["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],a=Math.max(...r),t=Math.min(...r),l=a-t||1,s=200,c=500,u=c/(r.length-1),b=r.map((B,o)=>{const f=o*u,V=s-(B-t)/l*(s-20)-10;return`${f},${V}`}).join(" ");return e.jsx(i,{title:"年度趋势",description:"折线图示例",children:e.jsx(n,{children:e.jsx("div",{className:"h-[260px] p-4",children:e.jsxs("svg",{viewBox:`0 0 ${c} ${s+30}`,className:"w-full h-full",preserveAspectRatio:"xMidYMid meet",children:[e.jsx("polyline",{fill:"none",stroke:"#6366f1",strokeWidth:"2",points:b}),r.map((B,o)=>{const f=o*u,V=s-(B-t)/l*(s-20)-10;return e.jsxs("g",{children:[e.jsx("circle",{cx:f,cy:V,r:"4",fill:"#6366f1"}),e.jsx("text",{x:f,y:s+20,textAnchor:"middle",className:"text-[10px]",fill:"#6b7280",children:d[o]})]},o)})]})})})})}};var T,R,M;y.parameters={...y.parameters,docs:{...(T=y.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <Chart title="销售概览" description="月度销售数据">
      <ChartBody>
        <div className="h-[200px] flex items-center justify-center bg-gray-100 rounded">
          图表内容占位
        </div>
      </ChartBody>
    </Chart>
}`,...(M=(R=y.parameters)==null?void 0:R.docs)==null?void 0:M.source}}};var q,w,$;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <Chart bordered title="收入" description="季度收入">
      <ChartBody>
        <div className="h-[150px] flex items-center justify-center">
          收入图表
        </div>
      </ChartBody>
    </Chart>
}`,...($=(w=g.parameters)==null?void 0:w.docs)==null?void 0:$.source}}};var W,_,L;v.parameters={...v.parameters,docs:{...(W=v.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <Chart loading title="图表加载中">
      <ChartBody>
        <div className="h-[200px]">内容</div>
      </ChartBody>
    </Chart>
}`,...(L=(_=v.parameters)==null?void 0:_.docs)==null?void 0:L.source}}};var S,k,A;N.parameters={...N.parameters,docs:{...(S=N.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <Chart>
      <ChartHeader title="自定义标题" description="自定义布局" />
      <ChartBody>
        <div className="h-[200px] bg-primary-50 rounded flex items-center justify-center">
          图表区域
        </div>
      </ChartBody>
    </Chart>
}`,...(A=(k=N.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};var E,X,D;j.parameters={...j.parameters,docs:{...(E=j.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <Chart>
      <ChartBody>
        <div className="h-[200px] bg-gray-50 rounded p-4">
          无标题图表
        </div>
      </ChartBody>
    </Chart>
}`,...(D=(X=j.parameters)==null?void 0:X.docs)==null?void 0:D.source}}};var I,O,Y,P,z;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => {
    const data = [{
      label: '一月',
      value: 65
    }, {
      label: '二月',
      value: 40
    }, {
      label: '三月',
      value: 85
    }, {
      label: '四月',
      value: 55
    }, {
      label: '五月',
      value: 72
    }, {
      label: '六月',
      value: 90
    }];
    const maxValue = Math.max(...data.map(d => d.value));
    return <Chart title="月度销售" description="柱状图示例">
        <ChartBody>
          <div className="h-[240px] flex items-end gap-3 px-4 pt-4 pb-2">
            {data.map(item => <div key={item.label} className="flex-1 flex flex-col items-center gap-1">
                <span className="text-xs text-gray-500">{item.value}</span>
                <div className="w-full rounded-t-md bg-indigo-500 transition-all" style={{
              height: \`\${item.value / maxValue * 180}px\`
            }} />
                <span className="text-xs text-gray-600">{item.label}</span>
              </div>)}
          </div>
        </ChartBody>
      </Chart>;
  }
}`,...(Y=(O=p.parameters)==null?void 0:O.docs)==null?void 0:Y.source},description:{story:"柱状图",...(z=(P=p.parameters)==null?void 0:P.docs)==null?void 0:z.description}}};var F,G,J,K,Q;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => {
    const data = [30, 45, 28, 60, 52, 78, 65, 90, 72, 85, 68, 95];
    const labels = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
    const maxValue = Math.max(...data);
    const minValue = Math.min(...data);
    const range = maxValue - minValue || 1;
    const chartHeight = 200;
    const chartWidth = 500;
    const stepX = chartWidth / (data.length - 1);
    const points = data.map((val, i) => {
      const x = i * stepX;
      const y = chartHeight - (val - minValue) / range * (chartHeight - 20) - 10;
      return \`\${x},\${y}\`;
    }).join(' ');
    return <Chart title="年度趋势" description="折线图示例">
        <ChartBody>
          <div className="h-[260px] p-4">
            <svg viewBox={\`0 0 \${chartWidth} \${chartHeight + 30}\`} className="w-full h-full" preserveAspectRatio="xMidYMid meet">
              <polyline fill="none" stroke="#6366f1" strokeWidth="2" points={points} />
              {data.map((val, i) => {
              const x = i * stepX;
              const y = chartHeight - (val - minValue) / range * (chartHeight - 20) - 10;
              return <g key={i}>
                    <circle cx={x} cy={y} r="4" fill="#6366f1" />
                    <text x={x} y={chartHeight + 20} textAnchor="middle" className="text-[10px]" fill="#6b7280">
                      {labels[i]}
                    </text>
                  </g>;
            })}
            </svg>
          </div>
        </ChartBody>
      </Chart>;
  }
}`,...(J=(G=m.parameters)==null?void 0:G.docs)==null?void 0:J.source},description:{story:"折线图",...(Q=(K=m.parameters)==null?void 0:K.docs)==null?void 0:Q.description}}};const pe=["Default","Bordered","Loading","WithHeader","NoTitle","BarChart","LineChart"];export{p as BarChart,g as Bordered,y as Default,m as LineChart,v as Loading,j as NoTitle,N as WithHeader,pe as __namedExportsOrder,oe as default};
