"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["381297"],{552254:function(n,e,t){t.r(e),t.d(e,{metadata:()=>i,contentTitle:()=>o,default:()=>c,assets:()=>d,toc:()=>l,frontMatter:()=>a});var i=JSON.parse('{"id":"sql-manual/sql-functions/aggregate-functions/retention","title":"RETENTION","description":"\x3c!--","source":"@site/versioned_docs/version-1.2/sql-manual/sql-functions/aggregate-functions/retention.md","sourceDirName":"sql-manual/sql-functions/aggregate-functions","slug":"/sql-manual/sql-functions/aggregate-functions/retention","permalink":"/docs/1.2/sql-manual/sql-functions/aggregate-functions/retention","draft":false,"unlisted":false,"tags":[],"version":"1.2","frontMatter":{"title":"RETENTION","language":"en"},"sidebar":"docs","previous":{"title":"VARIANCE,VAR_POP,VARIANCE_POP","permalink":"/docs/1.2/sql-manual/sql-functions/aggregate-functions/variance"},"next":{"title":"SEQUENCE-MATCH","permalink":"/docs/1.2/sql-manual/sql-functions/aggregate-functions/sequence_match"}}'),r=t("785893"),s=t("250065");let a={title:"RETENTION",language:"en"},o=void 0,d={},l=[{value:"RETENTION",id:"retention",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Arguments",id:"arguments",level:4},{value:"Returned value",id:"returned-value",level:5},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function u(n){let e={code:"code",h2:"h2",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,s.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"retention",children:"RETENTION"}),"\n",(0,r.jsx)(e.p,{children:"RETENTION"}),"\n",(0,r.jsx)(e.h3,{id:"description",children:"Description"}),"\n",(0,r.jsx)(e.h4,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.code,{children:"retention(event1, event2, ... , eventN);"})}),"\n",(0,r.jsxs)(e.p,{children:["The ",(0,r.jsx)(e.code,{children:"retention"})," function takes as arguments a set of conditions from 1 to 32 arguments of type ",(0,r.jsx)(e.code,{children:"UInt8"})," that indicate whether a certain condition was met for the event. Any condition can be specified as an argument."]}),"\n",(0,r.jsx)(e.p,{children:"The conditions, except the first, apply in pairs: the result of the second will be true if the first and second are true, of the third if the first and third are true, etc."}),"\n",(0,r.jsx)(e.h4,{id:"arguments",children:"Arguments"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"event"})," \u2014 An expression that returns a ",(0,r.jsx)(e.code,{children:"UInt8"})," result (1 or 0)."]}),"\n",(0,r.jsx)(e.h5,{id:"returned-value",children:"Returned value"}),"\n",(0,r.jsx)(e.p,{children:"The array of 1 or 0."}),"\n",(0,r.jsx)(e.p,{children:"1 \u2014 Condition was met for the event."}),"\n",(0,r.jsx)(e.p,{children:"0 \u2014 Condition wasn\u2019t met for the event."}),"\n",(0,r.jsx)(e.h3,{id:"example",children:"example"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-sql",children:"DROP TABLE IF EXISTS retention_test;\n\nCREATE TABLE retention_test(\n                `uid` int COMMENT 'user id', \n                `date` datetime COMMENT 'date time' \n                )\nDUPLICATE KEY(uid) \nDISTRIBUTED BY HASH(uid) BUCKETS 3 \nPROPERTIES ( \n    \"replication_num\" = \"1\"\n); \n\nINSERT into retention_test (uid, date) values (0, '2022-10-12'),\n                                        (0, '2022-10-13'),\n                                        (0, '2022-10-14'),\n                                        (1, '2022-10-12'),\n                                        (1, '2022-10-13'),\n                                        (2, '2022-10-12'); \n\nSELECT * from retention_test;\n\n+------+---------------------+\n| uid  | date                |\n+------+---------------------+\n|    0 | 2022-10-14 00:00:00 |\n|    0 | 2022-10-13 00:00:00 |\n|    0 | 2022-10-12 00:00:00 |\n|    1 | 2022-10-13 00:00:00 |\n|    1 | 2022-10-12 00:00:00 |\n|    2 | 2022-10-12 00:00:00 |\n+------+---------------------+\n\nSELECT \n    uid,     \n    retention(date = '2022-10-12')\n        AS r \n            FROM retention_test \n            GROUP BY uid \n            ORDER BY uid ASC;\n\n+------+------+\n| uid  | r    |\n+------+------+\n|    0 | [1]  | \n|    1 | [1]  |\n|    2 | [1]  |\n+------+------+\n\nSELECT \n    uid,     \n    retention(date = '2022-10-12', date = '2022-10-13')\n        AS r \n            FROM retention_test \n            GROUP BY uid \n            ORDER BY uid ASC;\n\n+------+--------+\n| uid  | r      |\n+------+--------+\n|    0 | [1, 1] |\n|    1 | [1, 1] |\n|    2 | [1, 0] |\n+------+--------+\n\nSELECT \n    uid,     \n    retention(date = '2022-10-12', date = '2022-10-13', date = '2022-10-14')\n        AS r \n            FROM retention_test \n            GROUP BY uid \n            ORDER BY uid ASC;\n\n+------+-----------+\n| uid  | r         |\n+------+-----------+\n|    0 | [1, 1, 1] |\n|    1 | [1, 1, 0] |\n|    2 | [1, 0, 0] |\n+------+-----------+\n\n"})}),"\n",(0,r.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,r.jsx)(e.p,{children:"RETENTION"})]})}function c(n={}){let{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(u,{...n})}):u(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return o},a:function(){return a}});var i=t(667294);let r={},s=i.createContext(r);function a(n){let e=i.useContext(s);return i.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:a(n.components),i.createElement(s.Provider,{value:e},n.children)}}}]);