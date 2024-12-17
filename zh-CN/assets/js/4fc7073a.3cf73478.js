"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["146349"],{352109:function(e,n,r){r.r(n),r.d(n,{metadata:()=>a,contentTitle:()=>u,default:()=>d,assets:()=>l,toc:()=>o,frontMatter:()=>s});var a=JSON.parse('{"id":"sql-manual/sql-functions/array-functions/array-enumerate-uniq","title":"ARRAY_ENUMERATE_UNIQ","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/array-functions/array-enumerate-uniq.md","sourceDirName":"sql-manual/sql-functions/array-functions","slug":"/sql-manual/sql-functions/array-functions/array-enumerate-uniq","permalink":"/zh-CN/docs/sql-manual/sql-functions/array-functions/array-enumerate-uniq","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"ARRAY_ENUMERATE_UNIQ","language":"zh-CN"},"sidebar":"docs","previous":{"title":"ARRAY_ENUMERATE","permalink":"/zh-CN/docs/sql-manual/sql-functions/array-functions/array-enumerate"},"next":{"title":"ARRAY_POPBACK","permalink":"/zh-CN/docs/sql-manual/sql-functions/array-functions/array-popback"}}'),t=r("785893"),i=r("250065");let s={title:"ARRAY_ENUMERATE_UNIQ",language:"zh-CN"},u=void 0,l={},o=[{value:"array_enumerate_uniq",id:"array_enumerate_uniq",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function c(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"array_enumerate_uniq",children:"array_enumerate_uniq"}),"\n",(0,t.jsx)(n.p,{children:"array_enumerate_uniq"}),"\n",(0,t.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,t.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"ARRAY<T> array_enumerate_uniq(ARRAY<T> arr)"})}),"\n",(0,t.jsx)(n.p,{children:"\u8FD4\u56DE\u4E0E\u6E90\u6570\u7EC4\u5927\u5C0F\u76F8\u540C\u7684\u6570\u7EC4\uFF0C\u6307\u793A\u6BCF\u4E2A\u5143\u7D20\u5728\u5177\u6709\u76F8\u540C\u503C\u7684\u5143\u7D20\u4E2D\u7684\u4F4D\u7F6E\uFF0C\u4F8B\u5982 array_enumerate_uniq([1, 2, 1, 4]) = [1, 1, 2, 1]\n\u8BE5\u51FD\u6570\u4E5F\u53EF\u63A5\u53D7\u591A\u4E2A\u5927\u5C0F\u76F8\u540C\u7684\u6570\u7EC4\u4F5C\u4E3A\u53C2\u6570\uFF0C\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u8FD4\u56DE\u7684\u662F\u6570\u7EC4\u4E2D\u76F8\u540C\u4F4D\u7F6E\u7684\u5143\u7D20\u7EC4\u6210\u7684\u5143\u7EC4\u5728\u5177\u6709\u76F8\u540C\u503C\u7684\u5143\u7EC4\u4E2D\u7684\u4F4D\u7F6E\u3002\u4F8B\u5982 array_enumerate_uniq([1, 2, 1, 1, 2], [2, 1, 2, 2, 1]) = [1, 1, 2, 3, 2]"}),"\n",(0,t.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"mysql> select k2, array_enumerate_uniq([1, 2, 3, 1, 2, 3]);\n+-----------------------------------------------------+\n| array_enumerate_uniq(ARRAY(1, 2, 3, 1, 2, 3))       |\n+-----------------------------------------------------+\n| [1, 1, 1, 2, 2, 2]                                  |\n+-----------------------------------------------------+\nmysql> select array_enumerate_uniq([1, 1, 1, 1, 1], [2, 1, 2, 1, 2], [3, 1, 3, 1, 3]);\n+----------------------------------------------------------------------------------------+\n| array_enumerate_uniq(ARRAY(1, 1, 1, 1, 1), ARRAY(2, 1, 2, 1, 2), ARRAY(3, 1, 3, 1, 3)) |\n+----------------------------------------------------------------------------------------+\n| [1, 1, 2, 1, 3]                                                                        |\n+----------------------------------------------------------------------------------------+\n"})}),"\n",(0,t.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,t.jsx)(n.p,{children:"ARRAY,ENUMERATE_UNIQ,ARRAY_ENUMERATE_UNIQ"})]})}function d(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return u},a:function(){return s}});var a=r(667294);let t={},i=a.createContext(t);function s(e){let n=a.useContext(i);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function u(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);