"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["200520"],{35626:function(n,e,t){t.r(e),t.d(e,{metadata:()=>i,contentTitle:()=>l,default:()=>u,assets:()=>c,toc:()=>o,frontMatter:()=>d});var i=JSON.parse('{"id":"sql-manual/sql-functions/aggregate-functions/retention","title":"RETENTION","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/aggregate-functions/retention.md","sourceDirName":"sql-manual/sql-functions/aggregate-functions","slug":"/sql-manual/sql-functions/aggregate-functions/retention","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/aggregate-functions/retention","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"RETENTION","language":"zh-CN"},"sidebar":"docs","previous":{"title":"COLLECT_LIST","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/aggregate-functions/collect-list"},"next":{"title":"SEQUENCE_MATCH","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/aggregate-functions/sequence-match"}}'),r=t("785893"),s=t("250065");let d={title:"RETENTION",language:"zh-CN"},l=void 0,c={},o=[{value:"RETENTION",id:"retention",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Arguments",id:"arguments",level:4},{value:"Returned value",id:"returned-value",level:5},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function a(n){let e={code:"code",h2:"h2",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,s.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"retention",children:"RETENTION"}),"\n",(0,r.jsx)(e.p,{children:"RETENTION"}),"\n",(0,r.jsx)(e.h3,{id:"description",children:"description"}),"\n",(0,r.jsx)(e.h4,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.code,{children:"retention(event1, event2, ... , eventN);"})}),"\n",(0,r.jsxs)(e.p,{children:["\u7559\u5B58\u51FD\u6570\u5C06\u4E00\u7EC4\u6761\u4EF6\u4F5C\u4E3A\u53C2\u6570\uFF0C\u7C7B\u578B\u4E3A1\u523032\u4E2A",(0,r.jsx)(e.code,{children:"UInt8"}),"\u7C7B\u578B\u7684\u53C2\u6570\uFF0C\u7528\u6765\u8868\u793A\u4E8B\u4EF6\u662F\u5426\u6EE1\u8DB3\u7279\u5B9A\u6761\u4EF6\u3002 \u4EFB\u4F55\u6761\u4EF6\u90FD\u53EF\u4EE5\u6307\u5B9A\u4E3A\u53C2\u6570."]}),"\n",(0,r.jsx)(e.p,{children:"\u9664\u4E86\u7B2C\u4E00\u4E2A\u4EE5\u5916\uFF0C\u6761\u4EF6\u6210\u5BF9\u9002\u7528\uFF1A\u5982\u679C\u7B2C\u4E00\u4E2A\u548C\u7B2C\u4E8C\u4E2A\u662F\u771F\u7684\uFF0C\u7B2C\u4E8C\u4E2A\u7ED3\u679C\u5C06\u662F\u771F\u7684\uFF0C\u5982\u679C\u7B2C\u4E00\u4E2A\u548C\u7B2C\u4E09\u4E2A\u662F\u771F\u7684\uFF0C\u7B2C\u4E09\u4E2A\u7ED3\u679C\u5C06\u662F\u771F\u7684\uFF0C\u7B49\u7B49\u3002"}),"\n",(0,r.jsxs)(e.p,{children:["\u7B80\u5355\u6765\u8BB2\uFF0C\u8FD4\u56DE\u503C\u6570\u7EC4\u7B2C1\u4F4D\u8868\u793A",(0,r.jsx)(e.code,{children:"event1"}),"\u7684\u771F\u5047\uFF0C\u7B2C\u4E8C\u4F4D\u8868\u793A",(0,r.jsx)(e.code,{children:"event1"}),"\u771F\u5047\u4E0E",(0,r.jsx)(e.code,{children:"event2"}),"\u771F\u5047\u76F8\u4E0E\uFF0C\u7B2C\u4E09\u4F4D\u8868\u793A",(0,r.jsx)(e.code,{children:"event1"}),"\u771F\u5047\u4E0E",(0,r.jsx)(e.code,{children:"event3"}),"\u771F\u5047\u76F8\u4E0E\uFF0C\u7B49\u7B49\u3002\u5982\u679C",(0,r.jsx)(e.code,{children:"event1"}),"\u4E3A\u5047\uFF0C\u5219\u8FD4\u56DE\u5168\u662F0\u7684\u6570\u7EC4\u3002"]}),"\n",(0,r.jsx)(e.h4,{id:"arguments",children:"Arguments"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"event"})," \u2014 \u8FD4\u56DE",(0,r.jsx)(e.code,{children:"UInt8"}),"\u7ED3\u679C\uFF081\u62160\uFF09\u7684\u8868\u8FBE\u5F0F."]}),"\n",(0,r.jsx)(e.h5,{id:"returned-value",children:"Returned value"}),"\n",(0,r.jsx)(e.p,{children:"\u75311\u548C0\u7EC4\u6210\u7684\u6700\u5927\u957F\u5EA6\u4E3A32\u4F4D\u7684\u6570\u7EC4\uFF0C\u6700\u7EC8\u8F93\u51FA\u6570\u7EC4\u7684\u957F\u5EA6\u4E0E\u8F93\u5165\u53C2\u6570\u957F\u5EA6\u76F8\u540C\u3002"}),"\n",(0,r.jsx)(e.p,{children:"1 \u2014 \u6761\u4EF6\u6EE1\u8DB3\u3002"}),"\n",(0,r.jsx)(e.p,{children:"0 \u2014 \u6761\u4EF6\u4E0D\u6EE1\u8DB3"}),"\n",(0,r.jsx)(e.h3,{id:"example",children:"example"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"DROP TABLE IF EXISTS retention_test;\n\nCREATE TABLE retention_test(\n                `uid` int COMMENT 'user id', \n                `date` datetime COMMENT 'date time' \n                )\nDUPLICATE KEY(uid) \nDISTRIBUTED BY HASH(uid) BUCKETS 3 \nPROPERTIES ( \n    \"replication_num\" = \"1\"\n); \n\nINSERT into retention_test (uid, date) values (0, '2022-10-12'),\n                                        (0, '2022-10-13'),\n                                        (0, '2022-10-14'),\n                                        (1, '2022-10-12'),\n                                        (1, '2022-10-13'),\n                                        (2, '2022-10-12'); \n\nSELECT * from retention_test;\n\n+------+---------------------+\n| uid  | date                |\n+------+---------------------+\n|    0 | 2022-10-14 00:00:00 |\n|    0 | 2022-10-13 00:00:00 |\n|    0 | 2022-10-12 00:00:00 |\n|    1 | 2022-10-13 00:00:00 |\n|    1 | 2022-10-12 00:00:00 |\n|    2 | 2022-10-12 00:00:00 |\n+------+---------------------+\n\nSELECT \n    uid,     \n    retention(date = '2022-10-12')\n        AS r \n            FROM retention_test \n            GROUP BY uid \n            ORDER BY uid ASC;\n\n+------+------+\n| uid  | r    |\n+------+------+\n|    0 | [1]  | \n|    1 | [1]  |\n|    2 | [1]  |\n+------+------+\n\nSELECT \n    uid,     \n    retention(date = '2022-10-12', date = '2022-10-13')\n        AS r \n            FROM retention_test \n            GROUP BY uid \n            ORDER BY uid ASC;\n\n+------+--------+\n| uid  | r      |\n+------+--------+\n|    0 | [1, 1] |\n|    1 | [1, 1] |\n|    2 | [1, 0] |\n+------+--------+\n\nSELECT \n    uid,     \n    retention(date = '2022-10-12', date = '2022-10-13', date = '2022-10-14')\n        AS r \n            FROM retention_test \n            GROUP BY uid \n            ORDER BY uid ASC;\n\n+------+-----------+\n| uid  | r         |\n+------+-----------+\n|    0 | [1, 1, 1] |\n|    1 | [1, 1, 0] |\n|    2 | [1, 0, 0] |\n+------+-----------+\n\n"})}),"\n",(0,r.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,r.jsx)(e.p,{children:"RETENTION"})]})}function u(n={}){let{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(a,{...n})}):a(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return l},a:function(){return d}});var i=t(667294);let r={},s=i.createContext(r);function d(n){let e=i.useContext(s);return i.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:d(n.components),i.createElement(s.Provider,{value:e},n.children)}}}]);