"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["107855"],{552150:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>o,default:()=>u,assets:()=>a,toc:()=>c,frontMatter:()=>l});var s=JSON.parse('{"id":"sql-manual/sql-functions/aggregate-functions/percentile-approx","title":"PERCENTILE_APPROX","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/aggregate-functions/percentile-approx.md","sourceDirName":"sql-manual/sql-functions/aggregate-functions","slug":"/sql-manual/sql-functions/aggregate-functions/percentile-approx","permalink":"/zh-CN/docs/sql-manual/sql-functions/aggregate-functions/percentile-approx","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"PERCENTILE_APPROX","language":"zh-CN"},"sidebar":"docs","previous":{"title":"PERCENTILE_ARRAY","permalink":"/zh-CN/docs/sql-manual/sql-functions/aggregate-functions/percentile-array"},"next":{"title":"HISTOGRAM","permalink":"/zh-CN/docs/sql-manual/sql-functions/aggregate-functions/histogram"}}'),r=t("785893"),i=t("250065");let l={title:"PERCENTILE_APPROX",language:"zh-CN"},o=void 0,a={},c=[{value:"PERCENTILE_APPROX",id:"percentile_approx",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function p(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"percentile_approx",children:"PERCENTILE_APPROX"}),"\n",(0,r.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,r.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"PERCENTILE_APPROX(expr, DOUBLE p[, DOUBLE compression])"})}),"\n",(0,r.jsx)(n.p,{children:"\u8FD4\u56DE\u7B2Cp\u4E2A\u767E\u5206\u4F4D\u70B9\u7684\u8FD1\u4F3C\u503C\uFF0Cp\u7684\u503C\u4ECB\u4E8E0\u52301\u4E4B\u95F4"}),"\n",(0,r.jsx)(n.p,{children:"compression\u53C2\u6570\u662F\u53EF\u9009\u9879\uFF0C\u53EF\u8BBE\u7F6E\u8303\u56F4\u662F[2048, 10000]\uFF0C\u503C\u8D8A\u5927\uFF0C\u7CBE\u5EA6\u8D8A\u9AD8\uFF0C\u5185\u5B58\u6D88\u8017\u8D8A\u5927\uFF0C\u8BA1\u7B97\u8017\u65F6\u8D8A\u957F\u3002\ncompression\u53C2\u6570\u672A\u6307\u5B9A\u6216\u8BBE\u7F6E\u7684\u503C\u5728[2048, 10000]\u8303\u56F4\u5916\uFF0C\u4EE510000\u7684\u9ED8\u8BA4\u503C\u8FD0\u884C"}),"\n",(0,r.jsx)(n.p,{children:"\u8BE5\u51FD\u6570\u4F7F\u7528\u56FA\u5B9A\u5927\u5C0F\u7684\u5185\u5B58\uFF0C\u56E0\u6B64\u5BF9\u4E8E\u9AD8\u57FA\u6570\u7684\u5217\u53EF\u4EE5\u4F7F\u7528\u66F4\u5C11\u7684\u5185\u5B58\uFF0C\u53EF\u7528\u4E8E\u8BA1\u7B97tp99\u7B49\u7EDF\u8BA1\u503C"}),"\n",(0,r.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"MySQL > select `table`, percentile_approx(cost_time,0.99) from log_statis group by `table`;\n+---------------------+---------------------------+\n| table    | percentile_approx(`cost_time`, 0.99) |\n+----------+--------------------------------------+\n| test     |                                54.22 |\n+----------+--------------------------------------+\n\nMySQL > select `table`, percentile_approx(cost_time,0.99, 4096) from log_statis group by `table`;\n+---------------------+---------------------------+\n| table    | percentile_approx(`cost_time`, 0.99, 4096.0) |\n+----------+--------------------------------------+\n| test     |                                54.21 |\n+----------+--------------------------------------+\n"})}),"\n",(0,r.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,r.jsx)(n.p,{children:"PERCENTILE_APPROX,PERCENTILE,APPROX"})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return l}});var s=t(667294);let r={},i=s.createContext(r);function l(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);