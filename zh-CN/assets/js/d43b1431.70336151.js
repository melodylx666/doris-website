"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["633956"],{789880:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>l,default:()=>f,assets:()=>a,toc:()=>r,frontMatter:()=>o});var t=JSON.parse('{"id":"sql-manual/sql-functions/table-valued-functions/frontends-disks","title":"FRONTENDS_DISKS","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-functions/table-valued-functions/frontends-disks.md","sourceDirName":"sql-manual/sql-functions/table-valued-functions","slug":"/sql-manual/sql-functions/table-valued-functions/frontends-disks","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/table-valued-functions/frontends-disks","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"FRONTENDS_DISKS","language":"en"},"sidebar":"docs","previous":{"title":"FRONTENDS","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/table-valued-functions/frontends"},"next":{"title":"CATALOGS","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/table-valued-functions/catalogs"}}'),i=s("785893"),d=s("250065");let o={title:"FRONTENDS_DISKS",language:"en"},l=void 0,a={},r=[{value:"<code>frontends</code>",id:"frontends",level:2},{value:"Name",id:"name",level:3},{value:"description",id:"description",level:3},{value:"syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function c(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,d.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"frontends",children:(0,i.jsx)(n.code,{children:"frontends"})}),"\n",(0,i.jsx)(n.h3,{id:"name",children:"Name"}),"\n",(0,i.jsx)(n.p,{children:"frontends"}),"\n",(0,i.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,i.jsxs)(n.p,{children:["Table-Value-Function, generate a temporary table named ",(0,i.jsx)(n.code,{children:"frontends_disks"}),". This tvf is used to view the information of FE nodes 's disks in the doris cluster."]}),"\n",(0,i.jsxs)(n.p,{children:["This function is used in ",(0,i.jsx)(n.code,{children:"FROM"})," clauses."]}),"\n",(0,i.jsx)(n.h4,{id:"syntax",children:"syntax"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"frontends_disks()"})}),"\n",(0,i.jsxs)(n.p,{children:["The table schema of ",(0,i.jsx)(n.code,{children:"frontends_disks()"})," tvf\uFF1A"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"mysql> desc function frontends_disks();\n+-------------+------+------+-------+---------+-------+\n| Field       | Type | Null | Key   | Default | Extra |\n+-------------+------+------+-------+---------+-------+\n| Name        | TEXT | No   | false | NULL    | NONE  |\n| Host        | TEXT | No   | false | NULL    | NONE  |\n| DirType     | TEXT | No   | false | NULL    | NONE  |\n| Dir         | TEXT | No   | false | NULL    | NONE  |\n| Filesystem  | TEXT | No   | false | NULL    | NONE  |\n| Capacity    | TEXT | No   | false | NULL    | NONE  |\n| Used        | TEXT | No   | false | NULL    | NONE  |\n| Available   | TEXT | No   | false | NULL    | NONE  |\n| UseRate     | TEXT | No   | false | NULL    | NONE  |\n| MountOn     | TEXT | No   | false | NULL    | NONE  |\n+-------------+------+------+-------+---------+-------+\n11 rows in set (0.14 sec)\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The information displayed by the ",(0,i.jsx)(n.code,{children:"frontends_disks"})," tvf is basically consistent with the information displayed by the ",(0,i.jsx)(n.code,{children:"show frontends disks"})," statement. However, the types of each field in the ",(0,i.jsx)(n.code,{children:"frontends_disks"})," tvf are more specific, and you can use the ",(0,i.jsx)(n.code,{children:"frontends_disks"})," tvf to perform operations such as filtering and joining."]}),"\n",(0,i.jsxs)(n.p,{children:["The information displayed by the ",(0,i.jsx)(n.code,{children:"frontends_disks"})," tvf is authenticated, which is consistent with the behavior of ",(0,i.jsx)(n.code,{children:"show frontends disks"}),", user must have ADMIN/OPERATOR privelege."]}),"\n",(0,i.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"mysql> select * from frontends_disk()\\G\n*************************** 1. row ***************************\n       Name: fe_fe1d5bd9_d1e5_4ccc_9b03_ca79b95c9941\n       Host: 172.XX.XX.1\n    DirType: log\n        Dir: /data/doris/fe-github/log\n Filesystem: /dev/sdc5\n   Capacity: 366G\n       Used: 119G\n  Available: 228G\n    UseRate: 35%\n    MountOn: /data\n......    \n12 row in set (0.03 sec)\n"})}),"\n",(0,i.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"frontends_disks\n"})})]})}function f(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return o}});var t=s(667294);let i={},d=t.createContext(i);function o(e){let n=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);