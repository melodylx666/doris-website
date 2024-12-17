"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["105883"],{820363:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>l,default:()=>u,assets:()=>s,toc:()=>c,frontMatter:()=>o});var r=JSON.parse('{"id":"advanced/lateral-view","title":"Column to Row (Lateral View)","description":"\x3c!--","source":"@site/versioned_docs/version-1.2/advanced/lateral-view.md","sourceDirName":"advanced","slug":"/advanced/lateral-view","permalink":"/docs/1.2/advanced/lateral-view","draft":false,"unlisted":false,"tags":[],"version":"1.2","frontMatter":{"title":"Column to Row (Lateral View)","language":"en"},"sidebar":"docs","previous":{"title":"Compute Node","permalink":"/docs/1.2/advanced/compute_node"},"next":{"title":"Materialized view","permalink":"/docs/1.2/query-acceleration/materialized-view"}}'),a=t("785893"),i=t("250065");let o={title:"Column to Row (Lateral View)",language:"en"},l="Column to Row (Lateral View)",s={},c=[{value:"Grammar",id:"grammar",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}];function d(e){let n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"column-to-row-lateral-view",children:"Column to Row (Lateral View)"})}),"\n",(0,a.jsxs)(n.p,{children:["Used in conjunction with generator functions such as ",(0,a.jsx)(n.code,{children:"EXPLODE"}),", will generate a virtual table containing one or more rows. ",(0,a.jsx)(n.code,{children:"LATERAL VIEW"})," applies rows to each raw output row."]}),"\n",(0,a.jsx)(n.h2,{id:"grammar",children:"Grammar"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"LATERAL VIEW  generator_function ( expression [, ...] ) table_identifier AS column_identifier [, ...]\n"})}),"\n",(0,a.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"generator_function"}),"\n",(0,a.jsx)(n.p,{children:"Generator functions (EXPLODE, EXPLODE_SPLIT, etc.)."}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"table_identifier"}),"\n",(0,a.jsxs)(n.p,{children:["Alias for ",(0,a.jsx)(n.code,{children:"generator_function"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"column_identifier"}),"\n",(0,a.jsxs)(n.p,{children:["List column alias ",(0,a.jsx)(n.code,{children:"generator_function"}),", which can be used to output rows. The number of column identifiers must match the number of columns returned by the generator function."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE `person` (\n  `id` int(11) NULL,\n  `name` text NULL,\n  `age` int(11) NULL,\n  `class` int(11) NULL,\n  `address` text NULL\n) ENGINE=OLAP\nUNIQUE KEY(`id`)\nCOMMENT 'OLAP'\nDISTRIBUTED BY HASH(`id`) BUCKETS 1\nPROPERTIES (\n\"replication_allocation\" = \"tag.location.default: 1\",\n\"in_memory\" = \"false\",\n\"storage_format\" = \"V2\",\n\"disable_auto_compaction\" = \"false\"\n);\n\nINSERT INTO person VALUES\n    (100, 'John', 30, 1, 'Street 1'),\n    (200, 'Mary', NULL, 1, 'Street 2'),\n    (300, 'Mike', 80, 3, 'Street 3'),\n    (400, 'Dan', 50, 4, 'Street 4');\n\nmysql> SELECT * FROM person\n    ->     LATERAL VIEW EXPLODE(ARRAY(30, 60)) tableName AS c_age;\n+------+------+------+-------+----------+-------+\n| id   | name | age  | class | address  | c_age |\n+------+------+------+-------+----------+-------+\n|  100 | John |   30 |     1 | Street 1 |    30 |\n|  100 | John |   30 |     1 | Street 1 |    60 |\n|  200 | Mary | NULL |     1 | Street 2 |    30 |\n|  200 | Mary | NULL |     1 | Street 2 |    60 |\n|  300 | Mike |   80 |     3 | Street 3 |    30 |\n|  300 | Mike |   80 |     3 | Street 3 |    60 |\n|  400 | Dan  |   50 |     4 | Street 4 |    30 |\n|  400 | Dan  |   50 |     4 | Street 4 |    60 |\n+------+------+------+-------+----------+-------+\n8 rows in set (0.12 sec)\n\n"})})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return o}});var r=t(667294);let a={},i=r.createContext(a);function o(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);