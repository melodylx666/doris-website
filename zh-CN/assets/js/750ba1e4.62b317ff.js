"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["976275"],{735879:function(n,r,a){a.r(r),a.d(r,{metadata:()=>e,contentTitle:()=>l,default:()=>y,assets:()=>o,toc:()=>i,frontMatter:()=>c});var e=JSON.parse('{"id":"sql-manual/sql-functions/array-functions/array-count","title":"ARRAY_COUNT","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/array-functions/array-count.md","sourceDirName":"sql-manual/sql-functions/array-functions","slug":"/sql-manual/sql-functions/array-functions/array-count","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/array-functions/array-count","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"ARRAY_COUNT","language":"zh-CN"},"sidebar":"docs","previous":{"title":"ARRAYS_OVERLAP","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/array-functions/arrays-overlap"},"next":{"title":"ARRAY_APPLY","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/array-functions/array-apply"}}'),t=a("785893"),s=a("250065");let c={title:"ARRAY_COUNT",language:"zh-CN"},l=void 0,o={},i=[{value:"array_count",id:"array_count",level:2},{value:"description",id:"description",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function u(n){let r={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h2,{id:"array_count",children:"array_count"}),"\n",(0,t.jsx)(r.p,{children:"array_count"}),"\n",(0,t.jsx)(r.h3,{id:"description",children:"description"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-sql",children:"array_count(lambda, array1, ...)\n"})}),"\n",(0,t.jsxs)(r.p,{children:["\u4F7F\u7528 lambda \u8868\u8FBE\u5F0F\u4F5C\u4E3A\u8F93\u5165\u53C2\u6570\uFF0C\u5BF9\u5176\u4ED6\u8F93\u5165 ARRAY \u53C2\u6570\u7684\u5185\u90E8\u6570\u636E\u8FDB\u884C\u76F8\u5E94\u7684\u8868\u8FBE\u5F0F\u8BA1\u7B97\u3002\u8FD4\u56DE\u4F7F\u5F97 ",(0,t.jsx)(r.code,{children:"lambda(array1[i], ...)"})," \u8FD4\u56DE\u503C\u4E0D\u4E3A 0 \u7684\u5143\u7D20\u6570\u91CF\u3002\u5982\u679C\u627E\u4E0D\u5230\u5230\u6EE1\u8DB3\u6B64\u6761\u4EF6\u7684\u5143\u7D20\uFF0C\u5219\u8FD4\u56DE 0\u3002"]}),"\n",(0,t.jsx)(r.p,{children:"lambda \u8868\u8FBE\u5F0F\u4E2D\u8F93\u5165\u7684\u53C2\u6570\u4E3A 1 \u4E2A\u6216\u591A\u4E2A\uFF0C\u5FC5\u987B\u548C\u540E\u9762\u8F93\u5165\u7684\u6570\u7EC4\u5217\u6570\u4E00\u81F4\uFF0C\u4E14\u6240\u6709\u8F93\u5165\u7684 array \u7684\u5143\u7D20\u4E2A\u6570\u5FC5\u987B\u76F8\u540C\u3002\u5728 lambda \u4E2D\u53EF\u4EE5\u6267\u884C\u5408\u6CD5\u7684\u6807\u91CF\u51FD\u6570\uFF0C\u4E0D\u652F\u6301\u805A\u5408\u51FD\u6570\u7B49\u3002"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"array_count(x->x, array1);\narray_count(x->(x%2 = 0), array1);\narray_count(x->(abs(x)-1), array1);\narray_count((x,y)->(x = y), array1, array2);\n"})}),"\n",(0,t.jsx)(r.h3,{id:"example",children:"example"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"mysql> select array_count(x -> x, [0, 1, 2, 3]);\n+--------------------------------------------------------+\n| array_count(array_map([x] -> x(0), ARRAY(0, 1, 2, 3))) |\n+--------------------------------------------------------+\n|                                                      3 |\n+--------------------------------------------------------+\n1 row in set (0.00 sec)\n\nmysql> select array_count(x -> x > 2, [0, 1, 2, 3]);\n+------------------------------------------------------------+\n| array_count(array_map([x] -> x(0) > 2, ARRAY(0, 1, 2, 3))) |\n+------------------------------------------------------------+\n|                                                          1 |\n+------------------------------------------------------------+\n1 row in set (0.01 sec)\n\nmysql> select array_count(x -> x is null, [null, null, null, 1, 2]);\n+----------------------------------------------------------------------------+\n| array_count(array_map([x] -> x(0) IS NULL, ARRAY(NULL, NULL, NULL, 1, 2))) |\n+----------------------------------------------------------------------------+\n|                                                                          3 |\n+----------------------------------------------------------------------------+\n1 row in set (0.01 sec)\n\nmysql> select array_count(x -> power(x,2)>10, [1, 2, 3, 4, 5]);\n+------------------------------------------------------------------------------+\n| array_count(array_map([x] -> power(x(0), 2.0) > 10.0, ARRAY(1, 2, 3, 4, 5))) |\n+------------------------------------------------------------------------------+\n|                                                                            2 |\n+------------------------------------------------------------------------------+\n1 row in set (0.01 sec)\n\nmysql> select *, array_count((x, y) -> x>y, c_array1, c_array2) from array_test;\n+------+-----------------+-------------------------+-----------------------------------------------------------------------+\n| id   | c_array1        | c_array2                | array_count(array_map([x, y] -> x(0) > y(1), `c_array1`, `c_array2`)) |\n+------+-----------------+-------------------------+-----------------------------------------------------------------------+\n|    1 | [1, 2, 3, 4, 5] | [10, 20, -40, 80, -100] |                                                                     2 |\n|    2 | [6, 7, 8]       | [10, 12, 13]            |                                                                     0 |\n|    3 | [1]             | [-100]                  |                                                                     1 |\n|    4 | [1, NULL, 2]    | [NULL, 3, 1]            |                                                                     1 |\n|    5 | []              | []                      |                                                                     0 |\n|    6 | NULL            | NULL                    |                                                                     0 |\n+------+-----------------+-------------------------+-----------------------------------------------------------------------+\n6 rows in set (0.02 sec)\n\n"})}),"\n",(0,t.jsx)(r.h3,{id:"keywords",children:"keywords"}),"\n",(0,t.jsx)(r.p,{children:"ARRAY, COUNT, ARRAY_COUNT"})]})}function y(n={}){let{wrapper:r}={...(0,s.a)(),...n.components};return r?(0,t.jsx)(r,{...n,children:(0,t.jsx)(u,{...n})}):u(n)}},250065:function(n,r,a){a.d(r,{Z:function(){return l},a:function(){return c}});var e=a(667294);let t={},s=e.createContext(t);function c(n){let r=e.useContext(s);return e.useMemo(function(){return"function"==typeof n?n(r):{...r,...n}},[r,n])}function l(n){let r;return r=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:c(n.components),e.createElement(s.Provider,{value:r},n.children)}}}]);