"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["98726"],{802749:function(e,n,r){r.r(n),r.d(n,{metadata:()=>t,contentTitle:()=>c,default:()=>u,assets:()=>o,toc:()=>d,frontMatter:()=>s});var t=JSON.parse('{"id":"sql-manual/sql-reference/Operators/in","title":"IN","description":"\x3c!--","source":"@site/versioned_docs/version-1.2/sql-manual/sql-reference/Operators/in.md","sourceDirName":"sql-manual/sql-reference/Operators","slug":"/sql-manual/sql-reference/Operators/in","permalink":"/docs/1.2/sql-manual/sql-reference/Operators/in","draft":false,"unlisted":false,"tags":[],"version":"1.2","frontMatter":{"title":"IN","language":"en"},"sidebar":"docs","previous":{"title":"JSONB","permalink":"/docs/1.2/sql-manual/sql-reference/Data-Types/JSONB"},"next":{"title":"HELP","permalink":"/docs/1.2/sql-manual/sql-reference/Utility-Statements/HELP"}}'),l=r("785893"),i=r("250065");let s={title:"IN",language:"en"},c=void 0,o={},d=[{value:"IN",id:"in",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"notice",id:"notice",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function a(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"in",children:"IN"}),"\n",(0,l.jsx)(n.p,{children:"IN"}),"\n",(0,l.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,l.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"expr IN (value, ...)"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"expr IN (subquery)"})}),"\n",(0,l.jsx)(n.p,{children:"If expr is equal to any value in the IN list, return true; otherwise, return false."}),"\n",(0,l.jsx)(n.p,{children:"Subquery can only return one column, and the column types returned by subquery must be compatible with expr types."}),"\n",(0,l.jsx)(n.p,{children:"If subquery returns a bitmap data type column, expr must be an integer."}),"\n",(0,l.jsx)(n.h4,{id:"notice",children:"notice"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Currently, bitmap columns are only returned to in subqueries supported in the vectorized engine."}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"mysql> select id from cost where id in (1, 2);\n+------+\n| id   |\n+------+\n|    2 |\n|    1 |\n+------+\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"mysql> select id from tbl1 where id in (select id from tbl2);\n+------+\n| id   |\n+------+\n|    1 |\n|    4 |\n|    5 |\n+------+\n"})}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"mysql> select id from tbl1 where id in (select bitmap_col from tbl3);\n+------+\n| id   |\n+------+\n|    1 |\n|    3 |\n+------+\n"})}),"\n",(0,l.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"IN\n"})})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return c},a:function(){return s}});var t=r(667294);let l={},i=t.createContext(l);function s(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);