"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["592169"],{847106:function(e,n,t){t.r(n),t.d(n,{metadata:()=>a,contentTitle:()=>r,default:()=>E,assets:()=>c,toc:()=>o,frontMatter:()=>l});var a=JSON.parse('{"id":"sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-VIEW","title":"CREATE-VIEW","description":"\x3c!--","source":"@site/docs/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-VIEW.md","sourceDirName":"sql-manual/sql-statements/Data-Definition-Statements/Create","slug":"/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-VIEW","permalink":"/docs/dev/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-VIEW","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"CREATE-VIEW","language":"en"},"sidebar":"docs","previous":{"title":"CREATE-INDEX","permalink":"/docs/dev/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-INDEX"},"next":{"title":"CREATE-MATERIALIZED-VIEW","permalink":"/docs/dev/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-MATERIALIZED-VIEW"}}'),s=t("785893"),i=t("250065");let l={title:"CREATE-VIEW",language:"en"},r=void 0,c={},o=[{value:"CREATE-VIEW",id:"create-view",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}];function d(e){let n={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"create-view",children:"CREATE-VIEW"}),"\n",(0,s.jsx)(n.h3,{id:"name",children:"Name"}),"\n",(0,s.jsx)(n.p,{children:"CREATE VIEW"}),"\n",(0,s.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"This statement is used to create a logical view\ngrammar:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'CREATE VIEW [IF NOT EXISTS]\n [db_name.]view_name\n (column1[ COMMENT "col comment"][, column2, ...])\nAS query_stmt\n'})}),"\n",(0,s.jsx)(n.p,{children:"illustrate:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Views are logical views and have no physical storage. All queries on the view are equivalent to the sub-queries corresponding to the view."}),"\n",(0,s.jsx)(n.li,{children:"query_stmt is any supported SQL"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Create the view example_view on example_db"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"CREATE VIEW example_db.example_view (k1, k2, k3, v1)\nAS\nSELECT c1 as k1, k2, k3, SUM(v1) FROM example_table\nWHERE k1 = 20160112 GROUP BY k1,k2,k3;\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Create a view with a comment"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'CREATE VIEW example_db.example_view\n(\n    k1 COMMENT "first key",\n    k2 COMMENT "second key",\n    k3 COMMENT "third key",\n    v1 COMMENT "first value"\n)\nCOMMENT "my first view"\nAS\nSELECT c1 as k1, k2, k3, SUM(v1) FROM example_table\nWHERE k1 = 20160112 GROUP BY k1,k2,k3;\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"keywords",children:"Keywords"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"CREATE, VIEW\n"})}),"\n",(0,s.jsx)(n.h3,{id:"best-practice",children:"Best Practice"})]})}function E(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return l}});var a=t(667294);let s={},i=a.createContext(s);function l(e){let n=a.useContext(i);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);