"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["190054"],{692835:function(e,n,l){l.r(n),l.d(n,{metadata:()=>t,contentTitle:()=>r,default:()=>E,assets:()=>d,toc:()=>c,frontMatter:()=>s});var t=JSON.parse('{"id":"sql-manual/sql-statements/table-and-view/materialized-view/SHOW-CREATE-MATERIALIZED-VIEW","title":"SHOW CREATE MATERIALIZED VIEW","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-statements/table-and-view/materialized-view/SHOW-CREATE-MATERIALIZED-VIEW.md","sourceDirName":"sql-manual/sql-statements/table-and-view/materialized-view","slug":"/sql-manual/sql-statements/table-and-view/materialized-view/SHOW-CREATE-MATERIALIZED-VIEW","permalink":"/zh-CN/docs/sql-manual/sql-statements/table-and-view/materialized-view/SHOW-CREATE-MATERIALIZED-VIEW","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"SHOW CREATE MATERIALIZED VIEW","language":"zh-CN"},"sidebar":"docs","previous":{"title":"REFRESH MATERIALIZED VIEW","permalink":"/zh-CN/docs/sql-manual/sql-statements/table-and-view/materialized-view/REFRESH-MATERIALIZED-VIEW"},"next":{"title":"PAUSE MATERIALIZED VIEW","permalink":"/zh-CN/docs/sql-manual/sql-statements/table-and-view/materialized-view/PAUSE-MATERIALIZED-VIEW"}}'),a=l("785893"),i=l("250065");let s={title:"SHOW CREATE MATERIALIZED VIEW",language:"zh-CN"},r=void 0,d={},c=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2},{value:"\u5173\u952E\u8BCD",id:"\u5173\u952E\u8BCD",level:2},{value:"\u6700\u4F73\u5B9E\u8DF5",id:"\u6700\u4F73\u5B9E\u8DF5",level:2}];function o(e){let n={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,a.jsx)(n.p,{children:"\u8BE5\u8BED\u53E5\u7528\u4E8E\u67E5\u8BE2\u521B\u5EFA\u7269\u5316\u89C6\u56FE\u7684\u8BED\u53E5\u3002"}),"\n",(0,a.jsx)(n.p,{children:"\u8BED\u6CD5\uFF1A"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"SHOW CREATE MATERIALIZED VIEW mv_name ON table_name\n"})}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"mv_name:\n\u7269\u5316\u89C6\u56FE\u7684\u540D\u79F0\u3002\u5FC5\u586B\u9879\u3002"}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"table_name:\n\u7269\u5316\u89C6\u56FE\u6240\u5C5E\u7684\u8868\u540D\u3002\u5FC5\u586B\u9879\u3002"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,a.jsx)(n.p,{children:"\u521B\u5EFA\u7269\u5316\u89C6\u56FE\u7684\u8BED\u53E5\u4E3A"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"create materialized view id_col1 as select id,col1 from table3;\n"})}),"\n",(0,a.jsx)(n.p,{children:"\u67E5\u8BE2\u540E\u8FD4\u56DE"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"mysql> show create materialized view id_col1 on table3;\n+-----------+----------+----------------------------------------------------------------+\n| TableName | ViewName | CreateStmt                                                     |\n+-----------+----------+----------------------------------------------------------------+\n| table3    | id_col1  | create materialized view id_col1 as select id,col1 from table3 |\n+-----------+----------+----------------------------------------------------------------+\n1 row in set (0.00 sec)\n"})}),"\n",(0,a.jsx)(n.h2,{id:"\u5173\u952E\u8BCD",children:"\u5173\u952E\u8BCD"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"SHOW, MATERIALIZED, VIEW\n"})}),"\n",(0,a.jsx)(n.h2,{id:"\u6700\u4F73\u5B9E\u8DF5",children:"\u6700\u4F73\u5B9E\u8DF5"})]})}function E(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},250065:function(e,n,l){l.d(n,{Z:function(){return r},a:function(){return s}});var t=l(667294);let a={},i=t.createContext(a);function s(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);