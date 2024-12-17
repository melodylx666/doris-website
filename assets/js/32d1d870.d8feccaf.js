"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["961758"],{144571:function(e,n,r){r.r(n),r.d(n,{metadata:()=>a,contentTitle:()=>i,default:()=>d,assets:()=>c,toc:()=>o,frontMatter:()=>l});var a=JSON.parse('{"id":"sql-manual/sql-functions/array-functions/array-intersect","title":"ARRAY_INTERSECT","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-functions/array-functions/array-intersect.md","sourceDirName":"sql-manual/sql-functions/array-functions","slug":"/sql-manual/sql-functions/array-functions/array-intersect","permalink":"/docs/3.0/sql-manual/sql-functions/array-functions/array-intersect","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"ARRAY_INTERSECT","language":"en"},"sidebar":"docs","previous":{"title":"ARRAY_PRODUCT","permalink":"/docs/3.0/sql-manual/sql-functions/array-functions/array-product"},"next":{"title":"ARRAY_RANGE","permalink":"/docs/3.0/sql-manual/sql-functions/array-functions/array-range"}}'),t=r("785893"),s=r("250065");let l={title:"ARRAY_INTERSECT",language:"en"},i=void 0,c={},o=[{value:"array_intersect",id:"array_intersect",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function u(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"array_intersect",children:"array_intersect"}),"\n",(0,t.jsx)(n.p,{children:"array_intersect"}),"\n",(0,t.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,t.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"ARRAY<T> array_intersect(ARRAY<T> array1, ARRAY<T> array2)"})}),"\n",(0,t.jsx)(n.p,{children:"Returns an array of the elements in the intersection of array1 and array2, without duplicates. If the input parameter is null, null is returned."}),"\n",(0,t.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"mysql> select k1,k2,k3,array_intersect(k2,k3) from array_type_table;\n+------+-----------------+--------------+-----------------------------+\n| k1   | k2              | k3           | array_intersect(`k2`, `k3`) |\n+------+-----------------+--------------+-----------------------------+\n|    1 | [1, 2, 3]       | [2, 4, 5]    | [2]                         |\n|    2 | [2, 3]          | [1, 5]       | []                          |\n|    3 | [1, 1, 1]       | [2, 2, 2]    | []                          |\n+------+-----------------+--------------+-----------------------------+\n\nmysql> select k1,k2,k3,array_intersect(k2,k3) from array_type_table_nullable;\n+------+-----------------+--------------+-----------------------------+\n| k1   | k2              | k3           | array_intersect(`k2`, `k3`) |\n+------+-----------------+--------------+-----------------------------+\n|    1 | [1, NULL, 3]    | [1, 3, 5]    | [1, 3]                      |\n|    2 | [NULL, NULL, 2] | [2, NULL, 4] | [NULL, 2]                   |\n|    3 | NULL            | [1, 2, 3]    | NULL                        |\n+------+-----------------+--------------+-----------------------------+\n\nmysql> select k1,k2,k3,array_intersect(k2,k3) from array_type_table_varchar;\n+------+----------------------------+----------------------------------+-----------------------------+\n| k1   | k2                         | k3                               | array_intersect(`k2`, `k3`) |\n+------+----------------------------+----------------------------------+-----------------------------+\n|    1 | ['hello', 'world', 'c++']  | ['I', 'am', 'c++']               | ['c++']                     |\n|    2 | ['a1', 'equals', 'b1']     | ['a2', 'equals', 'b2']           | ['equals']                  |\n|    3 | ['hasnull', NULL, 'value'] | ['nohasnull', 'nonull', 'value'] | [NULL, 'value']             |\n|    3 | ['hasnull', NULL, 'value'] | ['hasnull', NULL, 'value']       | ['hasnull', 'value']        |\n+------+----------------------------+----------------------------------+-----------------------------+\n\nmysql> select k1,k2,k3,array_intersect(k2,k3) from array_type_table_decimal;\n+------+------------------+-------------------+-----------------------------+\n| k1   | k2               | k3                | array_intersect(`k2`, `k3`) |\n+------+------------------+-------------------+-----------------------------+\n|    1 | [1.1, 2.1, 3.44] | [2.1, 3.4, 5.4]   | [2.1]                       |\n|    2 | [NULL, 2, 5]     | [NULL, NULL, 5.4] | [NULL]                      |\n|    3 | [1, NULL, 2, 5]  | [1, 3.1, 5.4]     | [1]                         |\n+------+------------------+-------------------+-----------------------------+\n\n"})}),"\n",(0,t.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,t.jsx)(n.p,{children:"ARRAY,INTERSECT,ARRAY_INTERSECT"})]})}function d(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return l}});var a=r(667294);let t={},s=a.createContext(t);function l(e){let n=a.useContext(s);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);