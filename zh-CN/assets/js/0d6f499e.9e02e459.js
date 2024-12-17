"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["231271"],{501603:function(e,n,r){r.r(n),r.d(n,{metadata:()=>a,contentTitle:()=>l,default:()=>d,assets:()=>u,toc:()=>o,frontMatter:()=>i});var a=JSON.parse('{"id":"sql-manual/sql-functions/array-functions/array_enumerate","title":"array_enumerate","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-functions/array-functions/array_enumerate.md","sourceDirName":"sql-manual/sql-functions/array-functions","slug":"/sql-manual/sql-functions/array-functions/array_enumerate","permalink":"/zh-CN/docs/1.2/sql-manual/sql-functions/array-functions/array_enumerate","draft":false,"unlisted":false,"tags":[],"version":"1.2","frontMatter":{"title":"array_enumerate","language":"zh-CN"},"sidebar":"docs","previous":{"title":"array_with_constant","permalink":"/zh-CN/docs/1.2/sql-manual/sql-functions/array-functions/array_with_constant"},"next":{"title":"array_enumerate_uniq","permalink":"/zh-CN/docs/1.2/sql-manual/sql-functions/array-functions/array_enumerate_uniq"}}'),t=r("785893"),s=r("250065");let i={title:"array_enumerate",language:"zh-CN"},l=void 0,u={},o=[{value:"array_enumerate",id:"array_enumerate",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function c(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"array_enumerate",children:"array_enumerate"}),"\n",(0,t.jsx)(n.p,{children:"array_enumerate"}),"\n",(0,t.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,t.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"ARRAY<T> array_enumerate(ARRAY<T> arr)"})}),"\n",(0,t.jsx)(n.p,{children:"\u8FD4\u56DE\u6570\u7EC4\u4E0B\u6807, \u4F8B\u5982  [1, 2, 3, \u2026, length (arr) ]"}),"\n",(0,t.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'mysql> create table array_type_table(k1 INT, k2 Array<STRING>) duplicate key (k1)\n    -> distributed by hash(k1) buckets 1 properties(\'replication_num\' = \'1\');\nmysql> insert into array_type_table values (0, []), ("1", [NULL]), ("2", ["1", "2", "3"]), ("3", ["1", NULL, "3"]), ("4", NULL);\nmysql> select k2, array_enumerate(k2) from array_type_table;\n+------------------+-----------------------+\n| k2               | array_enumerate(`k2`) |\n+------------------+-----------------------+\n| []               | []                    |\n| [NULL]           | [1]                   |\n| [\'1\', \'2\', \'3\']  | [1, 2, 3]             |\n| [\'1\', NULL, \'3\'] | [1, 2, 3]             |\n| NULL             | NULL                  |\n+------------------+-----------------------+\n5 rows in set (0.01 sec)\n'})}),"\n",(0,t.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,t.jsx)(n.p,{children:"ARRAY,ENUMERATE,ARRAY_ENUMERATE"})]})}function d(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return i}});var a=r(667294);let t={},s=a.createContext(t);function i(e){let n=a.useContext(s);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);