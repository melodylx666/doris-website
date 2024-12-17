"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["9349"],{276314:function(e,n,s){s.r(n),s.d(n,{metadata:()=>l,contentTitle:()=>t,default:()=>o,assets:()=>d,toc:()=>a,frontMatter:()=>c});var l=JSON.parse('{"id":"sql-manual/sql-reference/Show-Statements/SHOW-ALTER-TABLE-MATERIALIZED-VIEW","title":"SHOW ALTER TABLE MATERIALIZED VIEW","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-reference/Show-Statements/SHOW-ALTER-TABLE-MATERIALIZED-VIEW.md","sourceDirName":"sql-manual/sql-reference/Show-Statements","slug":"/sql-manual/sql-reference/Show-Statements/SHOW-ALTER-TABLE-MATERIALIZED-VIEW","permalink":"/zh-CN/docs/1.2/sql-manual/sql-reference/Show-Statements/SHOW-ALTER-TABLE-MATERIALIZED-VIEW","draft":false,"unlisted":false,"tags":[],"version":"1.2","frontMatter":{"title":"SHOW ALTER TABLE MATERIALIZED VIEW","language":"zh-CN"},"sidebar":"docs","previous":{"title":"ADMIN-CANCEL-REBALANCE-DISK","permalink":"/zh-CN/docs/1.2/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-CANCEL-REBALANCE-DISK"},"next":{"title":"SHOW-ALTER","permalink":"/zh-CN/docs/1.2/sql-manual/sql-reference/Show-Statements/SHOW-ALTER"}}'),i=s("785893"),r=s("250065");let c={title:"SHOW ALTER TABLE MATERIALIZED VIEW",language:"zh-CN"},t=void 0,d={},a=[{value:"SHOW ALTER TABLE MATERIALIZED VIEW",id:"show-alter-table-materialized-view",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}];function h(e){let n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"show-alter-table-materialized-view",children:"SHOW ALTER TABLE MATERIALIZED VIEW"}),"\n",(0,i.jsx)(n.h3,{id:"name",children:"Name"}),"\n",(0,i.jsx)(n.p,{children:"SHOW ALTER TABLE MATERIALIZED VIEW"}),"\n",(0,i.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["\u8BE5\u547D\u4EE4\u7528\u4E8E\u67E5\u770B\u901A\u8FC7 ",(0,i.jsx)(n.a,{href:"/zh-CN/docs/1.2/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-MATERIALIZED-VIEW",children:"CREATE-MATERIALIZED-VIEW"})," \u8BED\u53E5\u63D0\u4EA4\u7684\u521B\u5EFA\u7269\u5316\u89C6\u56FE\u4F5C\u4E1A\u7684\u6267\u884C\u60C5\u51B5\u3002"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u8BE5\u8BED\u53E5\u7B49\u540C\u4E8E ",(0,i.jsx)(n.code,{children:"SHOW ALTER TABLE ROLLUP"}),";"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SHOW ALTER TABLE MATERIALIZED VIEW\n[FROM database]\n[WHERE]\n[ORDER BY]\n[LIMIT OFFSET]\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"database\uFF1A\u67E5\u770B\u6307\u5B9A\u6570\u636E\u5E93\u4E0B\u7684\u4F5C\u4E1A\u3002\u5982\u4E0D\u6307\u5B9A\uFF0C\u4F7F\u7528\u5F53\u524D\u6570\u636E\u5E93\u3002"}),"\n",(0,i.jsxs)(n.li,{children:["WHERE\uFF1A\u53EF\u4EE5\u5BF9\u7ED3\u679C\u5217\u8FDB\u884C\u7B5B\u9009\uFF0C\u76EE\u524D\u4EC5\u652F\u6301\u5BF9\u4EE5\u4E0B\u5217\u8FDB\u884C\u7B5B\u9009\uFF1A\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"TableName\uFF1A\u4EC5\u652F\u6301\u7B49\u503C\u7B5B\u9009\u3002"}),"\n",(0,i.jsx)(n.li,{children:"State\uFF1A\u4EC5\u652F\u6301\u7B49\u503C\u7B5B\u9009\u3002"}),"\n",(0,i.jsx)(n.li,{children:"Createtime/FinishTime\uFF1A\u652F\u6301 =\uFF0C>=\uFF0C<=\uFF0C>\uFF0C<\uFF0C!="}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"ORDER BY\uFF1A\u53EF\u4EE5\u5BF9\u7ED3\u679C\u96C6\u6309\u4EFB\u610F\u5217\u8FDB\u884C\u6392\u5E8F\u3002"}),"\n",(0,i.jsx)(n.li,{children:"LIMIT\uFF1A\u914D\u5408 ORDER BY \u8FDB\u884C\u7FFB\u9875\u67E5\u8BE2\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u8FD4\u56DE\u7ED3\u679C\u8BF4\u660E\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"mysql> show alter table materialized view\\G\n*************************** 1. row ***************************\n          JobId: 11001\n      TableName: tbl1\n     CreateTime: 2020-12-23 10:41:00\n     FinishTime: NULL\n  BaseIndexName: tbl1\nRollupIndexName: r1\n       RollupId: 11002\n  TransactionId: 5070\n          State: WAITING_TXN\n            Msg:\n       Progress: NULL\n        Timeout: 86400\n1 row in set (0.00 sec)\n"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"JobId"}),"\uFF1A\u4F5C\u4E1A\u552F\u4E00ID\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"TableName"}),"\uFF1A\u57FA\u8868\u540D\u79F0"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"CreateTime/FinishTime"}),"\uFF1A\u4F5C\u4E1A\u521B\u5EFA\u65F6\u95F4\u548C\u7ED3\u675F\u65F6\u95F4\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"BaseIndexName/RollupIndexName"}),"\uFF1A\u57FA\u8868\u540D\u79F0\u548C\u7269\u5316\u89C6\u56FE\u540D\u79F0\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"RollupId"}),"\uFF1A\u7269\u5316\u89C6\u56FE\u7684\u552F\u4E00 ID\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"TransactionId"}),"\uFF1A\u89C1 State \u5B57\u6BB5\u8BF4\u660E\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"State"}),"\uFF1A\u4F5C\u4E1A\u72B6\u6001\u3002"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"PENDING\uFF1A\u4F5C\u4E1A\u51C6\u5907\u4E2D\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"WAITING_TXN\uFF1A"}),"\n",(0,i.jsxs)(n.p,{children:["\u5728\u6B63\u5F0F\u5F00\u59CB\u4EA7\u751F\u7269\u5316\u89C6\u56FE\u6570\u636E\u524D\uFF0C\u4F1A\u7B49\u5F85\u5F53\u524D\u8FD9\u4E2A\u8868\u4E0A\u7684\u6B63\u5728\u8FD0\u884C\u7684\u5BFC\u5165\u4E8B\u52A1\u5B8C\u6210\u3002\u800C ",(0,i.jsx)(n.code,{children:"TransactionId"})," \u5B57\u6BB5\u5C31\u662F\u5F53\u524D\u6B63\u5728\u7B49\u5F85\u7684\u4E8B\u52A1ID\u3002\u5F53\u8FD9\u4E2AID\u4E4B\u524D\u7684\u5BFC\u5165\u90FD\u5B8C\u6210\u540E\uFF0C\u5C31\u4F1A\u5B9E\u9645\u5F00\u59CB\u4F5C\u4E1A\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"RUNNING\uFF1A\u4F5C\u4E1A\u8FD0\u884C\u4E2D\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"FINISHED\uFF1A\u4F5C\u4E1A\u8FD0\u884C\u6210\u529F\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"CANCELLED\uFF1A\u4F5C\u4E1A\u8FD0\u884C\u5931\u8D25\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Msg"}),"\uFF1A\u9519\u8BEF\u4FE1\u606F"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Progress"}),"\uFF1A\u4F5C\u4E1A\u8FDB\u5EA6\u3002\u8FD9\u91CC\u7684\u8FDB\u5EA6\u8868\u793A ",(0,i.jsx)(n.code,{children:"\u5DF2\u5B8C\u6210\u7684tablet\u6570\u91CF/\u603Btablet\u6570\u91CF"}),"\u3002\u521B\u5EFA\u7269\u5316\u89C6\u56FE\u662F\u6309 tablet \u7C92\u5EA6\u8FDB\u884C\u7684\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Timeout"}),"\uFF1A\u4F5C\u4E1A\u8D85\u65F6\u65F6\u95F4\uFF0C\u5355\u4F4D\u79D2\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u67E5\u770B\u6570\u636E\u5E93 example_db \u4E0B\u7684\u7269\u5316\u89C6\u56FE\u4F5C\u4E1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"SHOW ALTER TABLE MATERIALIZED VIEW FROM example_db;\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"keywords",children:"Keywords"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"SHOW, ALTER, TABLE, MATERIALIZED, VIEW\n"})}),"\n",(0,i.jsx)(n.h3,{id:"best-practice",children:"Best Practice"})]})}function o(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return t},a:function(){return c}});var l=s(667294);let i={},r=l.createContext(i);function c(e){let n=l.useContext(r);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);