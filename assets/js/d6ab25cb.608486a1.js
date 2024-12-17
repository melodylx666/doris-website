"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["106103"],{276761:function(n,e,l){l.r(e),l.d(e,{metadata:()=>t,contentTitle:()=>r,default:()=>d,assets:()=>c,toc:()=>a,frontMatter:()=>o});var t=JSON.parse('{"id":"sql-manual/sql-functions/conditional-functions/nullif","title":"NULLIF","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-functions/conditional-functions/nullif.md","sourceDirName":"sql-manual/sql-functions/conditional-functions","slug":"/sql-manual/sql-functions/conditional-functions/nullif","permalink":"/docs/3.0/sql-manual/sql-functions/conditional-functions/nullif","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"NULLIF","language":"en"},"sidebar":"docs","previous":{"title":"NVL","permalink":"/docs/3.0/sql-manual/sql-functions/conditional-functions/nvl"},"next":{"title":"JSON_PARSE","permalink":"/docs/3.0/sql-manual/sql-functions/json-functions/json-parse"}}'),i=l("785893"),s=l("250065");let o={title:"NULLIF",language:"en"},r=void 0,c={},a=[{value:"nullif",id:"nullif",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function u(n){let e={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"nullif",children:"nullif"}),"\n",(0,i.jsx)(e.h3,{id:"description",children:"description"}),"\n",(0,i.jsx)(e.h4,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.code,{children:"nullif(expr1, expr2)"})}),"\n",(0,i.jsxs)(e.p,{children:["If the two parameters are equal, null is returned. Otherwise, the value of the first parameter is returned. It has the same effect as the following ",(0,i.jsx)(e.code,{children:"case when"})]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"CASE\n     WHEN expr1 = expr2 THEN NULL\n     ELSE expr1\nEND\n"})}),"\n",(0,i.jsx)(e.h3,{id:"example",children:"example"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"mysql> select nullif(1,1);\n+--------------+\n| nullif(1, 1) |\n+--------------+\n|         NULL |\n+--------------+\n\nmysql> select nullif(1,0);\n+--------------+\n| nullif(1, 0) |\n+--------------+\n|            1 |\n+--------------+\n"})}),"\n",(0,i.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,i.jsx)(e.p,{children:"NULLIF"})]})}function d(n={}){let{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(u,{...n})}):u(n)}},250065:function(n,e,l){l.d(e,{Z:function(){return r},a:function(){return o}});var t=l(667294);let i={},s=t.createContext(i);function o(n){let e=t.useContext(s);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:o(n.components),t.createElement(s.Provider,{value:e},n.children)}}}]);