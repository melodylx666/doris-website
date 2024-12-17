"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["427370"],{897656:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>l,default:()=>u,assets:()=>o,toc:()=>c,frontMatter:()=>r});var s=JSON.parse('{"id":"admin-manual/http-actions/fe/table-row-count-action","title":"Table Row Count Action","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/admin-manual/http-actions/fe/table-row-count-action.md","sourceDirName":"admin-manual/http-actions/fe","slug":"/admin-manual/http-actions/fe/table-row-count-action","permalink":"/zh-CN/docs/1.2/admin-manual/http-actions/fe/table-row-count-action","draft":false,"unlisted":false,"tags":[],"version":"1.2","frontMatter":{"title":"Table Row Count Action","language":"zh-CN"},"sidebar":"docs","previous":{"title":"Table Query Plan Action","permalink":"/zh-CN/docs/1.2/admin-manual/http-actions/fe/table-query-plan-action"},"next":{"title":"Table Schema Action","permalink":"/zh-CN/docs/1.2/admin-manual/http-actions/fe/table-schema-action"}}'),a=t("785893"),i=t("250065");let r={title:"Table Row Count Action",language:"zh-CN"},l="Table Row Count Action",o={},c=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}];function d(e){let n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"table-row-count-action",children:"Table Row Count Action"})}),"\n",(0,a.jsx)(n.h2,{id:"request",children:"Request"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"GET /api/<db>/<table>/_count"})}),"\n",(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(n.p,{children:"\u7528\u4E8E\u83B7\u53D6\u6307\u5B9A\u8868\u7684\u884C\u6570\u7EDF\u8BA1\u4FE1\u606F\u3002\u8BE5\u63A5\u53E3\u76EE\u524D\u7528\u4E8E Spark-Doris-Connector \u4E2D\uFF0CSpark \u83B7\u53D6 Doris \u7684\u8868\u7EDF\u8BA1\u4FE1\u606F\u3002"}),"\n",(0,a.jsx)(n.h2,{id:"path-parameters",children:"Path parameters"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"<db>"})}),"\n",(0,a.jsx)(n.p,{children:"\u6307\u5B9A\u6570\u636E\u5E93"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"<table>"})}),"\n",(0,a.jsx)(n.p,{children:"\u6307\u5B9A\u8868"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"query-parameters",children:"Query parameters"}),"\n",(0,a.jsx)(n.p,{children:"\u65E0"}),"\n",(0,a.jsx)(n.h2,{id:"request-body",children:"Request body"}),"\n",(0,a.jsx)(n.p,{children:"\u65E0"}),"\n",(0,a.jsx)(n.h2,{id:"response",children:"Response"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'{\n	"msg": "success",\n	"code": 0,\n	"data": {\n		"size": 1,\n		"status": 200\n	},\n	"count": 0\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["\u5176\u4E2D ",(0,a.jsx)(n.code,{children:"data.size"})," \u5B57\u6BB5\u8868\u793A\u6307\u5B9A\u8868\u7684\u884C\u6570\u3002"]}),"\n",(0,a.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"\u83B7\u53D6\u6307\u5B9A\u8868\u7684\u884C\u6570\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'GET /api/db1/tbl1/_count\n\nResponse:\n{\n	"msg": "success",\n	"code": 0,\n	"data": {\n		"size": 1,\n		"status": 200\n	},\n	"count": 0\n}\n'})}),"\n"]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return r}});var s=t(667294);let a={},i=s.createContext(a);function r(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);