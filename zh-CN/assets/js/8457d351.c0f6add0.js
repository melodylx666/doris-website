"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["289013"],{482330:function(n,e,r){r.r(e),r.d(e,{metadata:()=>a,contentTitle:()=>l,default:()=>d,assets:()=>o,toc:()=>c,frontMatter:()=>i});var a=JSON.parse('{"id":"sql-manual/sql-functions/array-functions/array","title":"ARRAY","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/array-functions/array.md","sourceDirName":"sql-manual/sql-functions/array-functions","slug":"/sql-manual/sql-functions/array-functions/array","permalink":"/zh-CN/docs/sql-manual/sql-functions/array-functions/array","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"ARRAY","language":"zh-CN"},"sidebar":"docs","previous":{"title":"IPV6","permalink":"/zh-CN/docs/sql-manual/sql-data-types/ip/IPV6"},"next":{"title":"ARRAY_MAX","permalink":"/zh-CN/docs/sql-manual/sql-functions/array-functions/array-max"}}'),t=r("785893"),s=r("250065");let i={title:"ARRAY",language:"zh-CN"},l=void 0,o={},c=[{value:"array()",id:"array",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function u(n){let e={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"array",children:"array()"}),"\n",(0,t.jsx)(e.p,{children:"array()"}),"\n",(0,t.jsx)(e.h3,{id:"description",children:"description"}),"\n",(0,t.jsx)(e.h4,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"ARRAY<T> array(T, ...)"}),"\n\u6839\u636E\u53C2\u6570\u6784\u9020\u5E76\u8FD4\u56DEarray, \u53C2\u6570\u53EF\u4EE5\u662F\u591A\u5217\u6216\u8005\u5E38\u91CF"]}),"\n",(0,t.jsx)(e.h3,{id:"example",children:"example"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"mysql> select array(\"1\", 2, 1.1);\n+----------------------+\n| array('1', 2, '1.1') |\n+----------------------+\n| ['1', '2', '1.1']    |\n+----------------------+\n1 row in set (0.00 sec)\n\n\nmysql> select array(null, 1);\n+----------------+\n| array(NULL, 1) |\n+----------------+\n| [NULL, 1]      |\n+----------------+\n1 row in set (0.00 sec)\n\nmysql> select array(1, 2, 3);\n+----------------+\n| array(1, 2, 3) |\n+----------------+\n| [1, 2, 3]      |\n+----------------+\n1 row in set (0.00 sec)\n\nmysql>  select array(qid, creationDate, null) from nested  limit 4;\n+------------------------------------+\n| array(`qid`, `creationDate`, NULL) |\n+------------------------------------+\n| [1000038, 20090616074056, NULL]    |\n| [1000069, 20090616075005, NULL]    |\n| [1000130, 20090616080918, NULL]    |\n| [1000145, 20090616081545, NULL]    |\n+------------------------------------+\n4 rows in set (0.01 sec)\n"})}),"\n",(0,t.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,t.jsx)(e.p,{children:"ARRAY,ARRAY,CONSTRUCTOR"})]})}function d(n={}){let{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(u,{...n})}):u(n)}},250065:function(n,e,r){r.d(e,{Z:function(){return l},a:function(){return i}});var a=r(667294);let t={},s=a.createContext(t);function i(n){let e=a.useContext(s);return a.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:i(n.components),a.createElement(s.Provider,{value:e},n.children)}}}]);