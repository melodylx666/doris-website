"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["15239"],{554274:function(e,n,t){t.r(n),t.d(n,{metadata:()=>l,contentTitle:()=>r,default:()=>u,assets:()=>o,toc:()=>c,frontMatter:()=>a});var l=JSON.parse('{"id":"sql-manual/sql-statements/table-and-view/view/ALTER-VIEW","title":"ALTER VIEW","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-statements/table-and-view/view/ALTER-VIEW.md","sourceDirName":"sql-manual/sql-statements/table-and-view/view","slug":"/sql-manual/sql-statements/table-and-view/view/ALTER-VIEW","permalink":"/docs/3.0/sql-manual/sql-statements/table-and-view/view/ALTER-VIEW","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"ALTER VIEW","language":"en"},"sidebar":"docs","previous":{"title":"CREATE VIEW","permalink":"/docs/3.0/sql-manual/sql-statements/table-and-view/view/CREATE-VIEW"},"next":{"title":"DROP VIEW","permalink":"/docs/3.0/sql-manual/sql-statements/table-and-view/view/DROP-VIEW"}}'),i=t("785893"),s=t("250065");let a={title:"ALTER VIEW",language:"en"},r=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"Keywords",id:"keywords",level:2},{value:"Best Practice",id:"best-practice",level:2}];function d(e){let n={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"This statement is used to modify the definition of a view"}),"\n",(0,i.jsx)(n.p,{children:"grammar:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'ALTER VIEW\n[db_name.]view_name\n(column1[ COMMENT "col comment"][, column2, ...])\nAS query_stmt\n'})}),"\n",(0,i.jsx)(n.p,{children:"illustrate:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Views are all logical, and the data in them will not be stored on physical media. When querying, the view will be used as a subquery in the statement. Therefore, modifying the definition of the view is equivalent to modifying query_stmt."}),"\n",(0,i.jsx)(n.li,{children:"query_stmt is any supported SQL"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Modify the view example_view on example_db"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'ALTER VIEW example_db.example_view\n(\nc1 COMMENT "column 1",\nc2 COMMENT "column 2",\nc3 COMMENT "column 3"\n)\nAS SELECT k1, k2, SUM(v1) FROM example_table\nGROUP BY k1, k2\n'})}),"\n",(0,i.jsx)(n.h2,{id:"keywords",children:"Keywords"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"ALTER, VIEW\n"})}),"\n",(0,i.jsx)(n.h2,{id:"best-practice",children:"Best Practice"})]})}function u(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return a}});var l=t(667294);let i={},s=l.createContext(i);function a(e){let n=l.useContext(s);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),l.createElement(s.Provider,{value:n},e.children)}}}]);