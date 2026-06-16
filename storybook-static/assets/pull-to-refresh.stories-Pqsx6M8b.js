import{j as r}from"./jsx-runtime-CDt2p4po.js";import{r as t}from"./index-GiUgBvb1.js";import{a as q}from"./utils-BEhiKRD9.js";import{c as pe}from"./index-C08JwjkN.js";const ge=pe("sui-pull-to-refresh relative overflow-hidden",{variants:{variant:{default:"",primary:""}},defaultVariants:{variant:"default"}}),xe="flex items-center justify-center text-sm text-muted-foreground select-none",Re="text-primary-500 font-medium",o=t.forwardRef((a,s)=>{const{className:i,children:l,refreshing:e,onRefresh:j,threshold:u=80,maxDistance:N=150,pullingText:re="下拉刷新",canReleaseText:se="释放刷新",refreshingText:te="刷新中...",indicator:b,disabled:d=!1,variant:ne,...ae}=a,[f,m]=t.useState(0),[ie,h]=t.useState(!1),S=t.useRef(0),v=t.useRef(0),P=t.useRef(null),oe=t.useCallback(n=>e?"refreshing":n>=u?"canRelease":"pulling",[e,u]),le=n=>{if(b)return b(n);const c={pulling:re,canRelease:se,refreshing:te};return r.jsx("span",{className:q(n==="refreshing"&&Re),children:c[n]})},ce=oe(f),ue=t.useCallback(n=>{if(d)return;const c=P.current;if(!c||(v.current=c.scrollTop,v.current>0))return;const p=n.touches[0];p&&(S.current=p.clientY,h(!1))},[d]),de=t.useCallback(n=>{if(d||e||v.current>0)return;const c=n.touches[0];if(!c)return;const p=c.clientY-S.current;if(p<=0){m(0);return}const me=p*.5,he=Math.min(me,N);m(he)},[d,e,N]),fe=t.useCallback(()=>{d||e||(f>=u?(h(!0),m(u),j()):(h(!0),m(0)))},[d,e,f,u,j]),_=t.useRef(e);_.current&&!e&&(h(!0),m(0)),_.current=e;const C=f>0?f:e?u:0;return r.jsxs("div",{ref:n=>{P.current=n,typeof s=="function"?s(n):s&&(s.current=n)},className:q(ge({variant:ne}),i),...ae,children:[r.jsx("div",{className:xe,style:{height:C,transition:ie?"height 0.3s ease":"none"},onTransitionEnd:()=>h(!1),children:C>0&&le(ce)}),r.jsx("div",{onTouchStart:ue,onTouchMove:de,onTouchEnd:fe,children:l})]})});o.displayName="PullToRefresh";o.__docgenInfo={description:`PullToRefresh 下拉刷新组件

提供顶部下拉回弹、加载状态切换、自定义刷新内容等功能。
通过 touch 事件监听实现手势交互，使用 CSS transition 实现回弹动画。`,methods:[],displayName:"PullToRefresh",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"子元素"},refreshing:{required:!0,tsType:{name:"boolean"},description:"是否正在刷新"},onRefresh:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"刷新回调，下拉释放时触发"},threshold:{required:!1,tsType:{name:"number"},description:"触发刷新的下拉距离像素，默认 80"},maxDistance:{required:!1,tsType:{name:"number"},description:"最大下拉距离像素，默认 150"},pullingText:{required:!1,tsType:{name:"string"},description:"下拉提示文本"},canReleaseText:{required:!1,tsType:{name:"string"},description:"释放提示文本"},refreshingText:{required:!1,tsType:{name:"string"},description:"刷新中文本"},indicator:{required:!1,tsType:{name:"signature",type:"function",raw:"(status: PullToRefreshStatus) => ReactNode",signature:{arguments:[{type:{name:"union",raw:"'pulling' | 'canRelease' | 'refreshing'",elements:[{name:"literal",value:"'pulling'"},{name:"literal",value:"'canRelease'"},{name:"literal",value:"'refreshing'"}]},name:"status"}],return:{name:"ReactNode"}}},description:"自定义下拉指示器渲染"},disabled:{required:!1,tsType:{name:"boolean"},description:"是否禁用下拉刷新，默认 false"}},composes:["Omit","VariantProps"]};const Ne={title:"操作反馈/PullToRefresh 下拉刷新",component:o,tags:["autodocs"],parameters:{layout:"padded"}},g={render:()=>{const[a,s]=t.useState(!1),i=()=>{s(!0),setTimeout(()=>s(!1),2e3)};return r.jsx(o,{refreshing:a,onRefresh:i,children:r.jsx("div",{className:"space-y-3 p-4",children:Array.from({length:8},(l,e)=>r.jsxs("div",{className:"h-16 rounded-lg bg-muted flex items-center justify-center text-sm text-muted-foreground",children:["列表项 ",e+1]},e))})})}},x={render:()=>{const[a,s]=t.useState(!1),i=()=>{s(!0),setTimeout(()=>s(!1),1500)};return r.jsx(o,{refreshing:a,onRefresh:i,pullingText:"继续下拉",canReleaseText:"松手即可刷新",refreshingText:"正在加载...",children:r.jsx("div",{className:"space-y-3 p-4",children:Array.from({length:5},(l,e)=>r.jsxs("div",{className:"h-16 rounded-lg bg-muted flex items-center justify-center text-sm text-muted-foreground",children:["数据项 ",e+1]},e))})})}},R={render:()=>{const[a,s]=t.useState(!1),i=()=>{s(!0),setTimeout(()=>s(!1),2e3)};return r.jsx(o,{refreshing:a,onRefresh:i,indicator:l=>{const e={pulling:"↓ 下拉刷新",canRelease:"↑ 释放刷新",refreshing:"⟳ 加载中..."};return r.jsx("span",{className:"text-primary-500 font-medium",children:e[l]})},children:r.jsx("div",{className:"space-y-3 p-4",children:Array.from({length:5},(l,e)=>r.jsxs("div",{className:"h-16 rounded-lg bg-muted flex items-center justify-center text-sm text-muted-foreground",children:["卡片 ",e+1]},e))})})}},y={render:()=>r.jsx(o,{refreshing:!1,onRefresh:()=>{},disabled:!0,children:r.jsx("div",{className:"space-y-3 p-4",children:Array.from({length:5},(a,s)=>r.jsxs("div",{className:"h-16 rounded-lg bg-muted flex items-center justify-center text-sm text-muted-foreground",children:["不可下拉刷新 ",s+1]},s))})})},T={render:()=>{const[a,s]=t.useState(!1),i=()=>{s(!0),setTimeout(()=>s(!1),1500)};return r.jsx(o,{refreshing:a,onRefresh:i,threshold:50,maxDistance:100,children:r.jsxs("div",{className:"space-y-3 p-4",children:[r.jsx("p",{className:"text-sm text-muted-foreground",children:"阈值 50px，最大距离 100px"}),Array.from({length:5},(l,e)=>r.jsxs("div",{className:"h-16 rounded-lg bg-muted flex items-center justify-center text-sm text-muted-foreground",children:["项目 ",e+1]},e))]})})}};var A,D,k,E,I;g.parameters={...g.parameters,docs:{...(A=g.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => {
    const [refreshing, setRefreshing] = useState(false);
    const handleRefresh = () => {
      setRefreshing(true);
      setTimeout(() => setRefreshing(false), 2000);
    };
    return <PullToRefresh refreshing={refreshing} onRefresh={handleRefresh}>
        <div className="space-y-3 p-4">
          {Array.from({
          length: 8
        }, (_, i) => <div key={i} className="h-16 rounded-lg bg-muted flex items-center justify-center text-sm text-muted-foreground">
              列表项 {i + 1}
            </div>)}
        </div>
      </PullToRefresh>;
  }
}`,...(k=(D=g.parameters)==null?void 0:D.docs)==null?void 0:k.source},description:{story:"基础用法",...(I=(E=g.parameters)==null?void 0:E.docs)==null?void 0:I.description}}};var w,M,Y,V,O;x.parameters={...x.parameters,docs:{...(w=x.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => {
    const [refreshing, setRefreshing] = useState(false);
    const handleRefresh = () => {
      setRefreshing(true);
      setTimeout(() => setRefreshing(false), 1500);
    };
    return <PullToRefresh refreshing={refreshing} onRefresh={handleRefresh} pullingText="继续下拉" canReleaseText="松手即可刷新" refreshingText="正在加载...">
        <div className="space-y-3 p-4">
          {Array.from({
          length: 5
        }, (_, i) => <div key={i} className="h-16 rounded-lg bg-muted flex items-center justify-center text-sm text-muted-foreground">
              数据项 {i + 1}
            </div>)}
        </div>
      </PullToRefresh>;
  }
}`,...(Y=(M=x.parameters)==null?void 0:M.docs)==null?void 0:Y.source},description:{story:"自定义提示文本",...(O=(V=x.parameters)==null?void 0:V.docs)==null?void 0:O.description}}};var H,z,B,F,G;R.parameters={...R.parameters,docs:{...(H=R.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => {
    const [refreshing, setRefreshing] = useState(false);
    const handleRefresh = () => {
      setRefreshing(true);
      setTimeout(() => setRefreshing(false), 2000);
    };
    return <PullToRefresh refreshing={refreshing} onRefresh={handleRefresh} indicator={status => {
      const map = {
        pulling: '↓ 下拉刷新',
        canRelease: '↑ 释放刷新',
        refreshing: '⟳ 加载中...'
      };
      return <span className="text-primary-500 font-medium">{map[status]}</span>;
    }}>
        <div className="space-y-3 p-4">
          {Array.from({
          length: 5
        }, (_, i) => <div key={i} className="h-16 rounded-lg bg-muted flex items-center justify-center text-sm text-muted-foreground">
              卡片 {i + 1}
            </div>)}
        </div>
      </PullToRefresh>;
  }
}`,...(B=(z=R.parameters)==null?void 0:z.docs)==null?void 0:B.source},description:{story:"自定义指示器",...(G=(F=R.parameters)==null?void 0:F.docs)==null?void 0:G.description}}};var J,K,L,Q,U;y.parameters={...y.parameters,docs:{...(J=y.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <PullToRefresh refreshing={false} onRefresh={() => {}} disabled>
      <div className="space-y-3 p-4">
        {Array.from({
        length: 5
      }, (_, i) => <div key={i} className="h-16 rounded-lg bg-muted flex items-center justify-center text-sm text-muted-foreground">
            不可下拉刷新 {i + 1}
          </div>)}
      </div>
    </PullToRefresh>
}`,...(L=(K=y.parameters)==null?void 0:K.docs)==null?void 0:L.source},description:{story:"禁用状态",...(U=(Q=y.parameters)==null?void 0:Q.docs)==null?void 0:U.description}}};var W,X,Z,$,ee;T.parameters={...T.parameters,docs:{...(W=T.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => {
    const [refreshing, setRefreshing] = useState(false);
    const handleRefresh = () => {
      setRefreshing(true);
      setTimeout(() => setRefreshing(false), 1500);
    };
    return <PullToRefresh refreshing={refreshing} onRefresh={handleRefresh} threshold={50} maxDistance={100}>
        <div className="space-y-3 p-4">
          <p className="text-sm text-muted-foreground">阈值 50px，最大距离 100px</p>
          {Array.from({
          length: 5
        }, (_, i) => <div key={i} className="h-16 rounded-lg bg-muted flex items-center justify-center text-sm text-muted-foreground">
              项目 {i + 1}
            </div>)}
        </div>
      </PullToRefresh>;
  }
}`,...(Z=(X=T.parameters)==null?void 0:X.docs)==null?void 0:Z.source},description:{story:"自定义阈值",...(ee=($=T.parameters)==null?void 0:$.docs)==null?void 0:ee.description}}};const be=["Default","CustomText","CustomIndicator","Disabled","CustomThreshold"];export{R as CustomIndicator,x as CustomText,T as CustomThreshold,g as Default,y as Disabled,be as __namedExportsOrder,Ne as default};
