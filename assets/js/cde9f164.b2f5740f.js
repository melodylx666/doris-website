"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["985180"],{621993:function(e,t,a){a.r(t),a.d(t,{metadata:()=>l,contentTitle:()=>i,default:()=>h,assets:()=>c,toc:()=>d,frontMatter:()=>r});var l=JSON.parse('{"id":"sql-manual/sql-statements/table-and-view/table/CREATE-TABLE-LIKE","title":"CREATE TABLE LIKE","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-statements/table-and-view/table/CREATE-TABLE-LIKE.md","sourceDirName":"sql-manual/sql-statements/table-and-view/table","slug":"/sql-manual/sql-statements/table-and-view/table/CREATE-TABLE-LIKE","permalink":"/docs/3.0/sql-manual/sql-statements/table-and-view/table/CREATE-TABLE-LIKE","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"CREATE TABLE LIKE","language":"en"},"sidebar":"docs","previous":{"title":"CREATE TABLE","permalink":"/docs/3.0/sql-manual/sql-statements/table-and-view/table/CREATE-TABLE"},"next":{"title":"CREATE TABLE AS SELECT","permalink":"/docs/3.0/sql-manual/sql-statements/table-and-view/table/CREATE-TABLE-AS-SELECT"}}'),n=a("785893"),s=a("250065");let r={title:"CREATE TABLE LIKE",language:"en"},i=void 0,c={},d=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"Keywords",id:"keywords",level:2},{value:"Best Practice",id:"best-practice",level:2}];function o(e){let t={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(t.p,{children:"This statement is used to create an empty table with the exact same table structure as another table, and can optionally replicate some rollups."}),"\n",(0,n.jsx)(t.p,{children:"grammar:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"CREATE [EXTERNAL] TABLE [IF NOT EXISTS] [database.]table_name LIKE [database.]table_name [WITH ROLLUP (r1,r2,r3,...)]\n"})}),"\n",(0,n.jsx)(t.p,{children:"illustrate:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"The copied table structure includes Column Definition, Partitions, Table Properties, etc."}),"\n",(0,n.jsxs)(t.li,{children:["The user needs to have ",(0,n.jsx)(t.code,{children:"SELECT"})," permission on the copied original table"]}),"\n",(0,n.jsx)(t.li,{children:"Support for copying external tables such as MySQL"}),"\n",(0,n.jsx)(t.li,{children:"Support the rollup of copying OLAP Table"}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Create an empty table with the same table structure as table1 under the test1 library, the table name is table2"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"CREATE TABLE test1.table2 LIKE test1.table1\n"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Create an empty table with the same table structure as test1.table1 under the test2 library, the table name is table2"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"CREATE TABLE test2.table2 LIKE test1.table1\n"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Create an empty table with the same table structure as table1 under the test1 library, the table name is table2, and copy the two rollups of r1 and r2 of table1 at the same time"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"CREATE TABLE test1.table2 LIKE test1.table1 WITH ROLLUP (r1,r2)\n"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Create an empty table with the same table structure as table1 under the test1 library, the table name is table2, and copy all the rollups of table1 at the same time"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"CREATE TABLE test1.table2 LIKE test1.table1 WITH ROLLUP\n"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Create an empty table with the same table structure as test1.table1 under the test2 library, the table name is table2, and copy the two rollups of r1 and r2 of table1 at the same time"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"CREATE TABLE test2.table2 LIKE test1.table1 WITH ROLLUP (r1,r2)\n"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Create an empty table with the same table structure as test1.table1 under the test2 library, the table name is table2, and copy all the rollups of table1 at the same time"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"CREATE TABLE test2.table2 LIKE test1.table1 WITH ROLLUP\n"})}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Create an empty table under the test1 library with the same table structure as the MySQL outer table1, the table name is table2"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sql",children:"CREATE TABLE test1.table2 LIKE test1.table1\n"})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"keywords",children:"Keywords"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"CREATE, TABLE, LIKE\n"})}),"\n",(0,n.jsx)(t.h2,{id:"best-practice",children:"Best Practice"})]})}function h(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},250065:function(e,t,a){a.d(t,{Z:function(){return i},a:function(){return r}});var l=a(667294);let n={},s=l.createContext(n);function r(e){let t=l.useContext(s);return l.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),l.createElement(s.Provider,{value:t},e.children)}}}]);