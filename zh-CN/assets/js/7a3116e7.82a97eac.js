"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["633436"],{277564:function(n,e,a){a.r(e),a.d(e,{metadata:()=>t,contentTitle:()=>s,default:()=>d,assets:()=>u,toc:()=>o,frontMatter:()=>c});var t=JSON.parse('{"id":"sql-manual/sql-functions/array-functions/countequal","title":"COUNTEQUAL","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/array-functions/countequal.md","sourceDirName":"sql-manual/sql-functions/array-functions","slug":"/sql-manual/sql-functions/array-functions/countequal","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/array-functions/countequal","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"COUNTEQUAL","language":"zh-CN"},"sidebar":"docs","previous":{"title":"ARRAY_APPLY","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/array-functions/array-apply"},"next":{"title":"ELEMENT_AT","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/array-functions/element-at"}}'),r=a("785893"),l=a("250065");let c={title:"COUNTEQUAL",language:"zh-CN"},s=void 0,u={},o=[{value:"countequal",id:"countequal",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function i(n){let e={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,l.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"countequal",children:"countequal"}),"\n",(0,r.jsx)(e.p,{children:"countequal"}),"\n",(0,r.jsx)(e.h3,{id:"description",children:"description"}),"\n",(0,r.jsx)(e.h4,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.code,{children:"BIGINT countequal(ARRAY<T> arr, T value)"})}),"\n",(0,r.jsx)(e.p,{children:"\u5224\u65AD\u6570\u7EC4\u4E2D\u5305\u542Bvalue\u5143\u7D20\u7684\u4E2A\u6570\u3002\u8FD4\u56DE\u7ED3\u679C\u5982\u4E0B\uFF1A"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"num      - value\u5728array\u4E2D\u7684\u6570\u91CF\uFF1B\n0        - value\u4E0D\u5B58\u5728\u6570\u7EC4arr\u4E2D\uFF1B\nNULL     - \u5982\u679C\u6570\u7EC4\u4E3ANULL\u3002\n"})}),"\n",(0,r.jsx)(e.h3,{id:"example",children:"example"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"mysql> select *, countEqual(c_array,5) from array_test;\n+------+-----------------+--------------------------+\n| id   | c_array         | countequal(`c_array`, 5) |\n+------+-----------------+--------------------------+\n|    1 | [1, 2, 3, 4, 5] |                        1 |\n|    2 | [6, 7, 8]       |                        0 |\n|    3 | []              |                        0 |\n|    4 | NULL            |                     NULL |\n+------+-----------------+--------------------------+\n\nmysql> select *,countEqual(c_array, 1),countEqual(c_array, 5),countEqual(c_array, NULL) from array_test;\n+------+-----------------------+--------------------------+--------------------------+-----------------------------+\n| id   | c_array               | countequal(`c_array`, 1) | countequal(`c_array`, 5) | countequal(`c_array`, NULL) |\n+------+-----------------------+--------------------------+--------------------------+-----------------------------+\n|    1 | [1, 2, 3, 4, 5]       |                        1 |                        1 |                           0 |\n|    2 | [6, 7, 8]             |                        0 |                        0 |                           0 |\n|    3 | []                    |                        0 |                        0 |                           0 |\n|    4 | NULL                  |                     NULL |                     NULL |                        NULL |\n|    5 | [66, 77]              |                        0 |                        0 |                           0 |\n|    5 | [66, 77]              |                        0 |                        0 |                           0 |\n|    6 | NULL                  |                     NULL |                     NULL |                        NULL |\n|    7 | [NULL, NULL, NULL]    |                        0 |                        0 |                           3 |\n|    8 | [1, 2, 3, 4, 5, 5, 5] |                        1 |                        3 |                           0 |\n+------+-----------------------+--------------------------+--------------------------+-----------------------------+\n"})}),"\n",(0,r.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,r.jsx)(e.p,{children:"ARRAY,COUNTEQUAL"})]})}function d(n={}){let{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(i,{...n})}):i(n)}},250065:function(n,e,a){a.d(e,{Z:function(){return s},a:function(){return c}});var t=a(667294);let r={},l=t.createContext(r);function c(n){let e=t.useContext(l);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:c(n.components),t.createElement(l.Provider,{value:e},n.children)}}}]);