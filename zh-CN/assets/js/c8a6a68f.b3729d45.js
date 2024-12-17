"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["984182"],{87899:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>o,default:()=>f,assets:()=>a,toc:()=>r,frontMatter:()=>l});var t=JSON.parse('{"id":"sql-manual/sql-functions/date-time-functions/weeks_diff","title":"weeks_diff","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-functions/date-time-functions/weeks_diff.md","sourceDirName":"sql-manual/sql-functions/date-time-functions","slug":"/sql-manual/sql-functions/date-time-functions/weeks_diff","permalink":"/zh-CN/docs/1.2/sql-manual/sql-functions/date-time-functions/weeks_diff","draft":false,"unlisted":false,"tags":[],"version":"1.2","frontMatter":{"title":"weeks_diff","language":"zh-CN"},"sidebar":"docs","previous":{"title":"weeks_add","permalink":"/zh-CN/docs/1.2/sql-manual/sql-functions/date-time-functions/weeks_add"},"next":{"title":"weeks_sub","permalink":"/zh-CN/docs/1.2/sql-manual/sql-functions/date-time-functions/weeks_sub"}}'),i=s("785893"),d=s("250065");let l={title:"weeks_diff",language:"zh-CN"},o=void 0,a={},r=[{value:"weeks_diff",id:"weeks_diff",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function c(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,d.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"weeks_diff",children:"weeks_diff"}),"\n",(0,i.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,i.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"INT weeks_diff(DATETIME enddate, DATETIME startdate)"})}),"\n",(0,i.jsx)(n.p,{children:"\u5F00\u59CB\u65F6\u95F4\u5230\u7ED3\u675F\u65F6\u95F4\u76F8\u5DEE\u51E0\u661F\u671F"}),"\n",(0,i.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"mysql> select weeks_diff('2020-12-25','2020-10-25');\n+----------------------------------------------------------+\n| weeks_diff('2020-12-25 00:00:00', '2020-10-25 00:00:00') |\n+----------------------------------------------------------+\n|                                                        8 |\n+----------------------------------------------------------+\n"})}),"\n",(0,i.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"weeks_diff\n"})})]})}function f(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return l}});var t=s(667294);let i={},d=t.createContext(i);function l(e){let n=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);