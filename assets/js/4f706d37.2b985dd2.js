"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["2456"],{15784:function(e,n,a){a.r(n),a.d(n,{metadata:()=>r,contentTitle:()=>c,default:()=>d,assets:()=>i,toc:()=>o,frontMatter:()=>s});var r=JSON.parse('{"id":"sql-manual/sql-functions/array-functions/array-except","title":"ARRAY_EXCEPT","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-functions/array-functions/array-except.md","sourceDirName":"sql-manual/sql-functions/array-functions","slug":"/sql-manual/sql-functions/array-functions/array-except","permalink":"/docs/sql-manual/sql-functions/array-functions/array-except","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"ARRAY_EXCEPT","language":"en"},"sidebar":"docs","previous":{"title":"ARRAY_CONTAINS","permalink":"/docs/sql-manual/sql-functions/array-functions/array-contains"},"next":{"title":"ARRAY_PRODUCT","permalink":"/docs/sql-manual/sql-functions/array-functions/array-product"}}'),t=a("785893"),l=a("250065");let s={title:"ARRAY_EXCEPT",language:"en"},c=void 0,i={},o=[{value:"array_except",id:"array_except",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function u(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"array_except",children:"array_except"}),"\n",(0,t.jsx)(n.p,{children:"array_except"}),"\n",(0,t.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,t.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"ARRAY<T> array_except(ARRAY<T> array1, ARRAY<T> array2)"})}),"\n",(0,t.jsx)(n.p,{children:"Returns an array of the elements in array1 but not in array2, without duplicates. If the input parameter is null, null is returned."}),"\n",(0,t.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"mysql> select k1,k2,k3,array_except(k2,k3) from array_type_table;\n+------+-----------------+--------------+--------------------------+\n| k1   | k2              | k3           | array_except(`k2`, `k3`) |\n+------+-----------------+--------------+--------------------------+\n|    1 | [1, 2, 3]       | [2, 4, 5]    | [1, 3]                   |\n|    2 | [2, 3]          | [1, 5]       | [2, 3]                   |\n|    3 | [1, 1, 1]       | [2, 2, 2]    | [1]                      |\n+------+-----------------+--------------+--------------------------+\n\nmysql> select k1,k2,k3,array_except(k2,k3) from array_type_table_nullable;\n+------+-----------------+--------------+--------------------------+\n| k1   | k2              | k3           | array_except(`k2`, `k3`) |\n+------+-----------------+--------------+--------------------------+\n|    1 | [1, NULL, 3]    | [1, 3, 5]    | [NULL]                   |\n|    2 | [NULL, NULL, 2] | [2, NULL, 4] | []                       |\n|    3 | NULL            | [1, 2, 3]    | NULL                     |\n+------+-----------------+--------------+--------------------------+\n\nmysql> select k1,k2,k3,array_except(k2,k3) from array_type_table_varchar;\n+------+----------------------------+----------------------------------+--------------------------+\n| k1   | k2                         | k3                               | array_except(`k2`, `k3`) |\n+------+----------------------------+----------------------------------+--------------------------+\n|    1 | ['hello', 'world', 'c++']  | ['I', 'am', 'c++']               | ['hello', 'world']       |\n|    2 | ['a1', 'equals', 'b1']     | ['a2', 'equals', 'b2']           | ['a1', 'b1']             |\n|    3 | ['hasnull', NULL, 'value'] | ['nohasnull', 'nonull', 'value'] | ['hasnull', NULL]        |\n|    3 | ['hasnull', NULL, 'value'] | ['hasnull', NULL, 'value']       | []                       |\n+------+----------------------------+----------------------------------+--------------------------+\n\nmysql> select k1,k2,k3,array_except(k2,k3) from array_type_table_decimal;\n+------+------------------+-------------------+--------------------------+\n| k1   | k2               | k3                | array_except(`k2`, `k3`) |\n+------+------------------+-------------------+--------------------------+\n|    1 | [1.1, 2.1, 3.44] | [2.1, 3.4, 5.4]   | [1.1, 3.44]              |\n|    2 | [NULL, 2, 5]     | [NULL, NULL, 5.4] | [2, 5]                   |\n|    1 | [1, NULL, 2, 5]  | [1, 3.1, 5.4]     | [NULL, 2, 5]             |\n+------+------------------+-------------------+--------------------------+\n\n"})}),"\n",(0,t.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,t.jsx)(n.p,{children:"ARRAY,EXCEPT,ARRAY_EXCEPT"})]})}function d(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},250065:function(e,n,a){a.d(n,{Z:function(){return c},a:function(){return s}});var r=a(667294);let t={},l=r.createContext(t);function s(e){let n=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);