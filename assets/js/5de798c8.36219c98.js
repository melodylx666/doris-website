"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["529659"],{783072:function(e,t,a){a.r(t),a.d(t,{metadata:()=>n,contentTitle:()=>c,default:()=>h,assets:()=>s,toc:()=>o,frontMatter:()=>r});var n=JSON.parse('{"id":"advanced/alter-table/replace-table","title":"Replace Table","description":"\x3c!--","source":"@site/versioned_docs/version-1.2/advanced/alter-table/replace-table.md","sourceDirName":"advanced/alter-table","slug":"/advanced/alter-table/replace-table","permalink":"/docs/1.2/advanced/alter-table/replace-table","draft":false,"unlisted":false,"tags":[],"version":"1.2","frontMatter":{"title":"Replace Table","language":"en"},"sidebar":"docs","previous":{"title":"Schema Change","permalink":"/docs/1.2/advanced/alter-table/schema-change"},"next":{"title":"Dynamic Partition","permalink":"/docs/1.2/advanced/partition/dynamic-partition"}}'),l=a("785893"),i=a("250065");let r={title:"Replace Table",language:"en"},c="Replace Table",s={},o=[{value:"Syntax",id:"syntax",level:2},{value:"Principle",id:"principle",level:2},{value:"Notice",id:"notice",level:2},{value:"Best Practices",id:"best-practices",level:2}];function d(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.header,{children:(0,l.jsx)(t.h1,{id:"replace-table",children:"Replace Table"})}),"\n",(0,l.jsx)(t.p,{children:"In version 0.14, Doris supports atomic replacement of two tables.\nThis operation only applies to OLAP tables."}),"\n",(0,l.jsxs)(t.p,{children:["For partition level replacement operations, please refer to ",(0,l.jsx)(t.a,{href:"/docs/1.2/advanced/partition/table-temp-partition",children:"Temporary Partition Document"})]}),"\n",(0,l.jsx)(t.h2,{id:"syntax",children:"Syntax"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{children:"ALTER TABLE [db.]tbl1 REPLACE WITH tbl2\n[PROPERTIES('swap' = 'true')];\n"})}),"\n",(0,l.jsxs)(t.p,{children:["Replace table ",(0,l.jsx)(t.code,{children:"tbl1"})," with table ",(0,l.jsx)(t.code,{children:"tbl2"}),"."]}),"\n",(0,l.jsxs)(t.p,{children:["If the ",(0,l.jsx)(t.code,{children:"swap"})," parameter is ",(0,l.jsx)(t.code,{children:"true"}),", after replacement, the data in the table named ",(0,l.jsx)(t.code,{children:"tbl1"})," is the data in the original ",(0,l.jsx)(t.code,{children:"tbl2"})," table. The data in the table named ",(0,l.jsx)(t.code,{children:"tbl2"})," is the data in the original table ",(0,l.jsx)(t.code,{children:"tbl1"}),". That is, the data of the two tables are interchanged."]}),"\n",(0,l.jsxs)(t.p,{children:["If the ",(0,l.jsx)(t.code,{children:"swap"})," parameter is ",(0,l.jsx)(t.code,{children:"false"}),", after replacement, the data in the table named ",(0,l.jsx)(t.code,{children:"tbl1"})," is the data in the original ",(0,l.jsx)(t.code,{children:"tbl2"})," table. The table named ",(0,l.jsx)(t.code,{children:"tbl2"})," is dropped."]}),"\n",(0,l.jsx)(t.h2,{id:"principle",children:"Principle"}),"\n",(0,l.jsx)(t.p,{children:"The replacement table function actually turns the following set of operations into an atomic operation."}),"\n",(0,l.jsxs)(t.p,{children:["Suppose you want to replace table A with table B, and ",(0,l.jsx)(t.code,{children:"swap"})," is ",(0,l.jsx)(t.code,{children:"true"}),", the operation is as follows:"]}),"\n",(0,l.jsxs)(t.ol,{children:["\n",(0,l.jsx)(t.li,{children:"Rename table B to table A."}),"\n",(0,l.jsx)(t.li,{children:"Rename table A to table B."}),"\n"]}),"\n",(0,l.jsxs)(t.p,{children:["If ",(0,l.jsx)(t.code,{children:"swap"})," is ",(0,l.jsx)(t.code,{children:"false"}),", the operation is as follows:"]}),"\n",(0,l.jsxs)(t.ol,{children:["\n",(0,l.jsx)(t.li,{children:"Drop table A."}),"\n",(0,l.jsx)(t.li,{children:"Rename table B to table A."}),"\n"]}),"\n",(0,l.jsx)(t.h2,{id:"notice",children:"Notice"}),"\n",(0,l.jsxs)(t.ol,{children:["\n",(0,l.jsxs)(t.li,{children:["The ",(0,l.jsx)(t.code,{children:"swap"})," parameter defaults to ",(0,l.jsx)(t.code,{children:"true"}),". That is, the replacement table operation is equivalent to the exchange of two table data."]}),"\n",(0,l.jsxs)(t.li,{children:["If the ",(0,l.jsx)(t.code,{children:"swap"})," parameter is set to ",(0,l.jsx)(t.code,{children:"false"}),", the replaced table (table A) will be dropped and cannot be recovered."]}),"\n",(0,l.jsx)(t.li,{children:"The replacement operation can only occur between two OLAP tables, and the table structure of the two tables is not checked for consistency."}),"\n",(0,l.jsx)(t.li,{children:"The replacement operation will not change the original permission settings. Because the permission check is based on the table name."}),"\n"]}),"\n",(0,l.jsx)(t.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,l.jsxs)(t.ol,{children:["\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsx)(t.p,{children:"Atomic Overwrite Operation"}),"\n",(0,l.jsxs)(t.p,{children:["In some cases, the user wants to be able to rewrite the data of a certain table, but if it is dropped and then imported, there will be a period of time in which the data cannot be viewed. At this time, the user can first use the ",(0,l.jsx)(t.code,{children:"CREATE TABLE LIKE"})," statement to create a new table with the same structure, import the new data into the new table, and replace the old table atomically through the replacement operation to achieve the goal. For partition level atomic overwrite operation, please refer to ",(0,l.jsx)(t.a,{href:"/docs/1.2/advanced/partition/table-temp-partition",children:"Temporary partition document"})]}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},250065:function(e,t,a){a.d(t,{Z:function(){return c},a:function(){return r}});var n=a(667294);let l={},i=n.createContext(l);function r(e){let t=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);