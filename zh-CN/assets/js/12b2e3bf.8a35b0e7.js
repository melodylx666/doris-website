"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["493207"],{990458:function(e,n,a){a.r(n),a.d(n,{metadata:()=>r,contentTitle:()=>c,default:()=>d,assets:()=>i,toc:()=>o,frontMatter:()=>s});var r=JSON.parse('{"id":"sql-manual/sql-functions/array-functions/array_except","title":"array_except","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-functions/array-functions/array_except.md","sourceDirName":"sql-manual/sql-functions/array-functions","slug":"/sql-manual/sql-functions/array-functions/array_except","permalink":"/zh-CN/docs/1.2/sql-manual/sql-functions/array-functions/array_except","draft":false,"unlisted":false,"tags":[],"version":"1.2","frontMatter":{"title":"array_except","language":"zh-CN"},"sidebar":"docs","previous":{"title":"array_contains","permalink":"/zh-CN/docs/1.2/sql-manual/sql-functions/array-functions/array_contains"},"next":{"title":"array_product","permalink":"/zh-CN/docs/1.2/sql-manual/sql-functions/array-functions/array_product"}}'),t=a("785893"),l=a("250065");let s={title:"array_except",language:"zh-CN"},c=void 0,i={},o=[{value:"array_except",id:"array_except",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"notice",id:"notice",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function u(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"array_except",children:"array_except"}),"\n",(0,t.jsx)(n.p,{children:"array_except"}),"\n",(0,t.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,t.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"ARRAY<T> array_except(ARRAY<T> array1, ARRAY<T> array2)"})}),"\n",(0,t.jsx)(n.p,{children:"\u8FD4\u56DE\u4E00\u4E2A\u6570\u7EC4\uFF0C\u5305\u542B\u6240\u6709\u5728array1\u5185\u4F46\u4E0D\u5728array2\u5185\u7684\u5143\u7D20\uFF0C\u4E0D\u5305\u542B\u91CD\u590D\u9879\uFF0C\u5982\u679C\u8F93\u5165\u53C2\u6570\u4E3ANULL\uFF0C\u5219\u8FD4\u56DENULL"}),"\n",(0,t.jsx)(n.h3,{id:"notice",children:"notice"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"\u4EC5\u652F\u6301\u5411\u91CF\u5316\u5F15\u64CE\u4E2D\u4F7F\u7528"})}),"\n",(0,t.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"mysql> select k1,k2,k3,array_except(k2,k3) from array_type_table;\n+------+-----------------+--------------+--------------------------+\n| k1   | k2              | k3           | array_except(`k2`, `k3`) |\n+------+-----------------+--------------+--------------------------+\n|    1 | [1, 2, 3]       | [2, 4, 5]    | [1, 3]                   |\n|    2 | [2, 3]          | [1, 5]       | [2, 3]                   |\n|    3 | [1, 1, 1]       | [2, 2, 2]    | [1]                      |\n+------+-----------------+--------------+--------------------------+\n\nmysql> select k1,k2,k3,array_except(k2,k3) from array_type_table_nullable;\n+------+-----------------+--------------+--------------------------+\n| k1   | k2              | k3           | array_except(`k2`, `k3`) |\n+------+-----------------+--------------+--------------------------+\n|    1 | [1, NULL, 3]    | [1, 3, 5]    | [NULL]                   |\n|    2 | [NULL, NULL, 2] | [2, NULL, 4] | []                       |\n|    3 | NULL            | [1, 2, 3]    | NULL                     |\n+------+-----------------+--------------+--------------------------+\n\nmysql> select k1,k2,k3,array_except(k2,k3) from array_type_table_varchar;\n+------+----------------------------+----------------------------------+--------------------------+\n| k1   | k2                         | k3                               | array_except(`k2`, `k3`) |\n+------+----------------------------+----------------------------------+--------------------------+\n|    1 | ['hello', 'world', 'c++']  | ['I', 'am', 'c++']               | ['hello', 'world']       |\n|    2 | ['a1', 'equals', 'b1']     | ['a2', 'equals', 'b2']           | ['a1', 'b1']             |\n|    3 | ['hasnull', NULL, 'value'] | ['nohasnull', 'nonull', 'value'] | ['hasnull', NULL]        |\n|    3 | ['hasnull', NULL, 'value'] | ['hasnull', NULL, 'value']       | []                       |\n+------+----------------------------+----------------------------------+--------------------------+\n\nmysql> select k1,k2,k3,array_except(k2,k3) from array_type_table_decimal;\n+------+------------------+-------------------+--------------------------+\n| k1   | k2               | k3                | array_except(`k2`, `k3`) |\n+------+------------------+-------------------+--------------------------+\n|    1 | [1.1, 2.1, 3.44] | [2.1, 3.4, 5.4]   | [1.1, 3.44]              |\n|    2 | [NULL, 2, 5]     | [NULL, NULL, 5.4] | [2, 5]                   |\n|    1 | [1, NULL, 2, 5]  | [1, 3.1, 5.4]     | [NULL, 2, 5]             |\n+------+------------------+-------------------+--------------------------+\n\n"})}),"\n",(0,t.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,t.jsx)(n.p,{children:"ARRAY,EXCEPT,ARRAY_EXCEPT"})]})}function d(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},250065:function(e,n,a){a.d(n,{Z:function(){return c},a:function(){return s}});var r=a(667294);let t={},l=r.createContext(t);function s(e){let n=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);