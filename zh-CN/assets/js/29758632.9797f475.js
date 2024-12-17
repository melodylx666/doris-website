"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["576541"],{957664:function(n,e,a){a.r(e),a.d(e,{metadata:()=>s,contentTitle:()=>r,default:()=>m,assets:()=>d,toc:()=>o,frontMatter:()=>i});var s=JSON.parse('{"id":"sql-manual/sql-statements/data-modification/load-and-export/SHOW-LOAD-PROFILE","title":"SHOW LOAD PROFILE","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-statements/data-modification/load-and-export/SHOW-LOAD-PROFILE.md","sourceDirName":"sql-manual/sql-statements/data-modification/load-and-export","slug":"/sql-manual/sql-statements/data-modification/load-and-export/SHOW-LOAD-PROFILE","permalink":"/zh-CN/docs/3.0/sql-manual/sql-statements/data-modification/load-and-export/SHOW-LOAD-PROFILE","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"SHOW LOAD PROFILE","language":"zh-CN"},"sidebar":"docs","previous":{"title":"CANCEL LOAD","permalink":"/zh-CN/docs/3.0/sql-manual/sql-statements/data-modification/load-and-export/CANCEL-LOAD"},"next":{"title":"SHOW LOAD WARNINGS","permalink":"/zh-CN/docs/3.0/sql-manual/sql-statements/data-modification/load-and-export/SHOW-LOAD-WARNINGS"}}'),t=a("785893"),l=a("250065");let i={title:"SHOW LOAD PROFILE",language:"zh-CN"},r=void 0,d={},o=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2},{value:"\u5173\u952E\u8BCD",id:"\u5173\u952E\u8BCD",level:2},{value:"\u6700\u4F73\u5B9E\u8DF5",id:"\u6700\u4F73\u5B9E\u8DF5",level:3}];function c(n){let e={admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,l.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.admonition,{type:"caution",children:(0,t.jsx)(e.p,{children:"\u81EA 2.1.1 \u8D77\uFF0C\u6B64\u8BED\u6CD5\u88AB\u5F03\u7528\u3002"})}),"\n",(0,t.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,t.jsx)(e.p,{children:"\u8BE5\u8BED\u53E5\u662F\u7528\u6765\u67E5\u770B\u5BFC\u5165\u64CD\u4F5C\u7684 Profile \u4FE1\u606F\uFF0C\u8BE5\u529F\u80FD\u9700\u8981\u7528\u6237\u6253\u5F00 Profile \u8BBE\u7F6E\uFF0C0.15 \u4E4B\u524D\u7248\u672C\u6267\u884C\u4E0B\u9762\u7684\u8BBE\u7F6E\uFF1A"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"SET is_report_success=true;\n"})}),"\n",(0,t.jsx)(e.p,{children:"0.15 \u53CA\u4E4B\u540E\u7684\u7248\u672C\u6267\u884C\u4E0B\u9762\u7684\u8BBE\u7F6E\uFF1A"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:"SET [GLOBAL] enable_profile=true;\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u8BED\u6CD5\uFF1A"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:'show load profile "/";\n\nshow load profile "/[queryId]"\n\nshow load profile "/[queryId]/[TaskId]"\n\nshow load profile "/[queryId]/[TaskId]/[FragmentId]/"\n\nshow load profile "/[queryId]/[TaskId]/[FragmentId]/[InstanceId]"\n'})}),"\n",(0,t.jsx)(e.p,{children:"\u8FD9\u4E2A\u547D\u4EE4\u4F1A\u5217\u51FA\u5F53\u524D\u4FDD\u5B58\u7684\u6240\u6709\u5BFC\u5165 Profile\u3002\u6BCF\u884C\u5BF9\u5E94\u4E00\u4E2A\u5BFC\u5165\u3002\u5176\u4E2D QueryId \u5217\u4E3A\u5BFC\u5165\u4F5C\u4E1A\u7684 ID\u3002\u8FD9\u4E2A ID \u4E5F\u53EF\u4EE5\u901A\u8FC7 SHOW LOAD \u8BED\u53E5\u67E5\u770B\u62FF\u5230\u3002\u6211\u4EEC\u53EF\u4EE5\u9009\u62E9\u6211\u4EEC\u60F3\u770B\u7684 Profile \u5BF9\u5E94\u7684 QueryId\uFF0C\u67E5\u770B\u5177\u4F53\u60C5\u51B5"}),"\n",(0,t.jsx)(e.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"1. \u5217\u51FA\u6240\u6709\u7684 Load Profile"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:'mysql> show load profile "/"\\G\n*************************** 1. row ***************************\n            JobId: 20010\n         QueryId: 980014623046410a-af5d36f23381017f\n            User: root\n         DefaultDb: default_cluster:test\n               SQL: LOAD LABEL xxx\n         QueryType: Load\n         StartTime: 2023-03-07 19:48:24\n         EndTime: 2023-03-07 19:50:45\n         TotalTime: 2m21s\n      QueryState: N/A\n         TraceId:\n      AnalysisTime: NULL\n         PlanTime: NULL\n      ScheduleTime: NULL\n   FetchResultTime: NULL\n   WriteResultTime: NULL\nWaitAndFetchResultTime: NULL\n*************************** 2. row ***************************\n            JobId: N/A\n         QueryId: 7cc2d0282a7a4391-8dd75030185134d8\n            User: root\n         DefaultDb: default_cluster:test\n               SQL: insert into xxx\n         QueryType: Load\n         StartTime: 2023-03-07 19:49:15\n         EndTime: 2023-03-07 19:49:15\n         TotalTime: 102ms\n      QueryState: OK\n         TraceId:\n      AnalysisTime: 825.277us\n         PlanTime: 4.126ms\n      ScheduleTime: N/A\n   FetchResultTime: 0ns\n   WriteResultTime: 0ns\nWaitAndFetchResultTime: N/A\n'})}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"2. \u67E5\u770B\u6709\u5BFC\u5165\u4F5C\u4E1A\u7684\u5B50\u4EFB\u52A1\u6982\u51B5\uFF1A"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:'mysql> show load profile "/980014623046410a-af5d36f23381017f";\n+-----------------------------------+------------+\n| TaskId                            | ActiveTime |\n+-----------------------------------+------------+\n| 980014623046410a-af5d36f23381017f | 3m14s      |\n+-----------------------------------+------------+\n'})}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"3. \u67E5\u770B\u5B50\u4EFB\u52A1\u7684\u6267\u884C\u6811\uFF1A"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:'show load profile "/980014623046410a-af5d36f23381017f/980014623046410a-af5d36f23381017f";\n\n                     \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n                     \u2502[-1: OlapTableSink]    \u2502\n                     \u2502Fragment: 0            \u2502\n                     \u2502MaxActiveTime: 86.541ms\u2502\n                     \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n                                 \u2502\n                                 \u2502\n                     \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n                     \u2502[1: VEXCHANGE_NODE]\u2502\n                     \u2502Fragment: 0        \u2502\n                     \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n      \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n      \u2502                                 \u2502\n\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510              \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502[MemoryUsage]\u2502              \u2502[1: VDataStreamSender] \u2502\n\u2502Fragment: 0  \u2502              \u2502Fragment: 1            \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518              \u2502MaxActiveTime: 34.882ms\u2502\n                           \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n                                       \u2502\n                                       \u2502\n                           \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n                           \u2502[0: VNewOlapScanNode(tbl1)]\u2502\n                           \u2502Fragment: 1                \u2502\n                           \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n                     \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n                     \u2502                         \u2502\n               \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510            \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n               \u2502[MemoryUsage]\u2502            \u2502[VScanner] \u2502\n               \u2502Fragment: 1  \u2502            \u2502Fragment: 1\u2502\n               \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518            \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n                                       \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n                                       \u2502                 \u2502\n                              \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510 \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n                              \u2502[SegmentIterator]\u2502 \u2502[MemoryUsage]\u2502\n                              \u2502Fragment: 1      \u2502 \u2502Fragment: 1  \u2502\n                              \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518 \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n'})}),"\n",(0,t.jsx)(e.p,{children:"\u8FD9\u4E00\u5C42\u4F1A\u663E\u793A\u5B50\u4EFB\u52A1\u7684\u67E5\u8BE2\u6811\uFF0C\u5176\u4E2D\u6807\u6CE8\u4E86 Fragment id\u3002"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"4. \u67E5\u770B\u6307\u5B9A Fragment \u7684 Instance \u6982\u51B5"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:'mysql> show load profile "/980014623046410a-af5d36f23381017f/980014623046410a-af5d36f23381017f/1";\n+-----------------------------------+------------------+------------+\n| Instances                         | Host             | ActiveTime |\n+-----------------------------------+------------------+------------+\n| 980014623046410a-88e260f0c43031f2 | 10.81.85.89:9067 | 3m7s       |\n| 980014623046410a-88e260f0c43031f3 | 10.81.85.89:9067 | 3m6s       |\n| 980014623046410a-88e260f0c43031f4 | 10.81.85.89:9067 | 3m10s      |\n| 980014623046410a-88e260f0c43031f5 | 10.81.85.89:9067 | 3m14s      |\n+-----------------------------------+------------------+------------+\n'})}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"5. \u7EE7\u7EED\u67E5\u770B\u67D0\u4E00\u4E2A\u5177\u4F53\u7684 Instance \u4E0A\u5404\u4E2A\u7B97\u5B50\u7684\u8BE6\u7EC6 Profile"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-sql",children:'mysql> show load profile "/980014623046410a-af5d36f23381017f/980014623046410a-af5d36f23381017f/1/980014623046410a-88e260f0c43031f5"\\G\n\n*************************** 1. row ***************************\n\nInstance:\n\n   \u250C-----------------------------------------\u2510\n   \u2502[-1: OlapTableSink]                      \u2502\n   \u2502(Active: 2m17s, non-child: 70.91)        \u2502\n   \u2502  - Counters:                            \u2502\n   \u2502      - CloseWaitTime: 1m53s             \u2502\n   \u2502      - ConvertBatchTime: 0ns            \u2502\n   \u2502      - MaxAddBatchExecTime: 1m46s       \u2502\n   \u2502      - NonBlockingSendTime: 3m11s       \u2502\n   \u2502      - NumberBatchAdded: 782            \u2502\n   \u2502      - NumberNodeChannels: 1            \u2502\n   \u2502      - OpenTime: 743.822us              \u2502\n   \u2502      - RowsFiltered: 0                  \u2502\n   \u2502      - RowsRead: 1.599729M (1599729)    \u2502\n   \u2502      - RowsReturned: 1.599729M (1599729)\u2502\n   \u2502      - SendDataTime: 11s761ms           \u2502\n   \u2502      - TotalAddBatchExecTime: 1m46s     \u2502\n   \u2502      - ValidateDataTime: 9s802ms        \u2502\n   \u2514-----------------------------------------\u2518\n                        \u2502\n\u250C-----------------------------------------------------\u2510\n\u2502[0: BROKER_SCAN_NODE]                                \u2502\n\u2502(Active: 56s537ms, non-child: 29.06)                 \u2502\n\u2502  - Counters:                                        \u2502\n\u2502      - BytesDecompressed: 0.00                      \u2502\n\u2502      - BytesRead: 5.77 GB                           \u2502\n\u2502      - DecompressTime: 0ns                          \u2502\n\u2502      - FileReadTime: 34s263ms                       \u2502\n\u2502      - MaterializeTupleTime(*): 45s54ms             \u2502\n\u2502      - NumDiskAccess: 0                             \u2502\n\u2502      - PeakMemoryUsage: 33.03 MB                    \u2502\n\u2502      - RowsRead: 1.599729M (1599729)                \u2502\n\u2502      - RowsReturned: 1.599729M (1599729)            \u2502\n\u2502      - RowsReturnedRate: 28.295K sec                \u2502\n\u2502      - TotalRawReadTime(*): 1m20s                   \u2502\n\u2502      - TotalReadThroughput: 30.39858627319336 MB/sec\u2502\n\u2502      - WaitScannerTime: 56s528ms                    \u2502\n\u2514-----------------------------------------------------\u2518\n'})}),"\n",(0,t.jsx)(e.h2,{id:"\u5173\u952E\u8BCD",children:"\u5173\u952E\u8BCD"}),"\n",(0,t.jsx)(e.p,{children:"SHOW, LOAD, PROFILE"}),"\n",(0,t.jsx)(e.h3,{id:"\u6700\u4F73\u5B9E\u8DF5",children:"\u6700\u4F73\u5B9E\u8DF5"})]})}function m(n={}){let{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(c,{...n})}):c(n)}},250065:function(n,e,a){a.d(e,{Z:function(){return r},a:function(){return i}});var s=a(667294);let t={},l=s.createContext(t);function i(n){let e=s.useContext(l);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:i(n.components),s.createElement(l.Provider,{value:e},n.children)}}}]);