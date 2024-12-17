"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["103752"],{878481:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>l,default:()=>u,assets:()=>d,toc:()=>c,frontMatter:()=>r});var t=JSON.parse('{"id":"admin-manual/fe/show-data-action","title":"Show Data Action","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/admin-manual/fe/show-data-action.md","sourceDirName":"admin-manual/fe","slug":"/admin-manual/fe/show-data-action","permalink":"/zh-CN/docs/2.0/admin-manual/fe/show-data-action","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"Show Data Action","language":"zh-CN"},"sidebar":"docs","previous":{"title":"Set Config Action","permalink":"/zh-CN/docs/2.0/admin-manual/fe/set-config-action"},"next":{"title":"Show Meta Info Action","permalink":"/zh-CN/docs/2.0/admin-manual/fe/show-meta-info-action"}}'),i=s("785893"),a=s("250065");let r={title:"Show Data Action",language:"zh-CN"},l=void 0,d={},c=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}];function o(e){let n={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"request",children:"Request"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"GET /api/show_data"})}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"\u7528\u4E8E\u83B7\u53D6\u96C6\u7FA4\u7684\u603B\u6570\u636E\u91CF\uFF0C\u6216\u8005\u6307\u5B9A\u6570\u636E\u5E93\u7684\u6570\u636E\u91CF\u3002\u5355\u4F4D\u5B57\u8282\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"path-parameters",children:"Path parameters"}),"\n",(0,i.jsx)(n.p,{children:"\u65E0"}),"\n",(0,i.jsx)(n.h2,{id:"query-parameters",children:"Query parameters"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"db"})}),"\n",(0,i.jsx)(n.p,{children:"\u53EF\u9009\u3002\u5982\u679C\u6307\u5B9A\uFF0C\u5219\u83B7\u53D6\u6307\u5B9A\u6570\u636E\u5E93\u7684\u6570\u636E\u91CF\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"request-body",children:"Request body"}),"\n",(0,i.jsx)(n.p,{children:"\u65E0"}),"\n",(0,i.jsx)(n.h2,{id:"response",children:"Response"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u6307\u5B9A\u6570\u636E\u5E93\u7684\u6570\u636E\u91CF\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'{\n	"msg": "success",\n	"code": 0,\n	"data": {\n		"default_cluster:db1": 381\n	},\n	"count": 0\n}\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u603B\u6570\u636E\u91CF"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'{\n	"msg": "success",\n	"code": 0,\n	"data": {\n		"__total_size": 381\n	},\n	"count": 0\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u83B7\u53D6\u6307\u5B9A\u6570\u636E\u5E93\u7684\u6570\u636E\u91CF"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'GET /api/show_data?db=db1\n\nResponse:\n{\n	"msg": "success",\n	"code": 0,\n	"data": {\n		"default_cluster:db1": 381\n	},\n	"count": 0\n}\n'})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u83B7\u53D6\u96C6\u7FA4\u603B\u6570\u636E\u91CF"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'GET /api/show_data\n    \nResponse:\n{\n	"msg": "success",\n	"code": 0,\n	"data": {\n		"__total_size": 381\n	},\n	"count": 0\n}\n'})}),"\n"]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return r}});var t=s(667294);let i={},a=t.createContext(i);function r(e){let n=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);