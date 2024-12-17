"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["71706"],{459981:function(e,n,s){s.r(n),s.d(n,{metadata:()=>r,contentTitle:()=>a,default:()=>u,assets:()=>o,toc:()=>c,frontMatter:()=>l});var r=JSON.parse('{"id":"sql-manual/sql-reference/Show-Statements/SHOW-QUERY-PROFILE","title":"SHOW-QUERY-PROFILE","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/sql-manual/sql-reference/Show-Statements/SHOW-QUERY-PROFILE.md","sourceDirName":"sql-manual/sql-reference/Show-Statements","slug":"/sql-manual/sql-reference/Show-Statements/SHOW-QUERY-PROFILE","permalink":"/docs/2.0/sql-manual/sql-reference/Show-Statements/SHOW-QUERY-PROFILE","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"SHOW-QUERY-PROFILE","language":"en"},"sidebar":"docs","previous":{"title":"SHOW-REPOSITORIES","permalink":"/docs/2.0/sql-manual/sql-reference/Show-Statements/SHOW-REPOSITORIES"},"next":{"title":"SHOW-OPEN-TABLES","permalink":"/docs/2.0/sql-manual/sql-reference/Show-Statements/SHOW-OPEN-TABLES"}}'),t=s("785893"),i=s("250065");let l={title:"SHOW-QUERY-PROFILE",language:"en"},a=void 0,o={},c=[{value:"SHOW-QUERY-PROFILE",id:"show-query-profile",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}];function d(e){let n={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"show-query-profile",children:"SHOW-QUERY-PROFILE"}),"\n",(0,t.jsx)(n.h3,{id:"name",children:"Name"}),"\n",(0,t.jsx)(n.p,{children:"SHOW QUERY PROFILE"}),"\n",(0,t.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"This statement is used to view the tree profile information of the query operation,this function requires the user to open profile settings.\nBefore versions 0.15, perform the following settings:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SET is_report_success=true;\n"})}),"\n",(0,t.jsx)(n.p,{children:"For versions 0.15 and later, perform the following settings:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SET [GLOBAL] enable_profile=true;\n"})}),"\n",(0,t.jsx)(n.p,{children:"grammar:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'show query profile "/";\n'})}),"\n",(0,t.jsx)(n.p,{children:"This command will list the profiles of all currently saved query operations."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'show query profile "/queryId"\\G\nshow query profile "/queryId/fragment_id/instance_id"\\G\n'})}),"\n",(0,t.jsx)(n.p,{children:"Get the tree profile information of the specified query ID,Return to profile simple tree.Specify fragment_ ID and instance_ ID returns the corresponding detailed profile tree."}),"\n",(0,t.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"List all query Profile"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'mysql> show query profile "/";\n+-----------------------------------+------+-------------------------+--------------------+-----------+---------------------+---------------------+-----------+------------+\n| QueryId                           | User | DefaultDb               | SQL                | QueryType | StartTime           | EndTime             | TotalTime | QueryState |\n+-----------------------------------+------+-------------------------+--------------------+-----------+---------------------+---------------------+-----------+------------+\n| 327167e0db4749a9-adce3b3d770b2bb1 | root | default_cluster:test_db | select * from test | Query     | 2022-08-09 10:50:09 | 2022-08-09 10:50:09 | 19ms      | EOF        |\n+-----------------------------------+------+-------------------------+--------------------+-----------+---------------------+---------------------+-----------+------------+\n1 row in set (0.00 sec)\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"List the query profile of the specified queryid"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'mysql> show query profile "/327167e0db4749a9-adce3b3d770b2bb1"\\G\n*************************** 1. row ***************************\nFragments: \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502[-1: VDataBufferSender] \u2502\n\u2502Fragment: 0             \u2502\n\u2502MaxActiveTime: 783.263us\u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n            \u250C\u2518\n            \u2502\n  \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n  \u2502[1: VEXCHANGE_NODE]\u2502\n  \u2502Fragment: 0        \u2502\n  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n            \u2514\u2510\n             \u2502\n\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502[1: VDataStreamSender]  \u2502\n\u2502Fragment: 1             \u2502\n\u2502MaxActiveTime: 847.612us\u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n             \u2502\n             \u2502\n  \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n  \u2502[0: VOLAP_SCAN_NODE]\u2502\n  \u2502Fragment: 1         \u2502\n  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n            \u250C\u2518\n            \u2502\n     \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n     \u2502[OlapScanner]\u2502\n     \u2502Fragment: 1  \u2502\n     \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n            \u2502\n            \u2502\n   \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n   \u2502[SegmentIterator]\u2502\n   \u2502Fragment: 1      \u2502\n   \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n1 row in set (0.00 sec)\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Lists the instance profile of the specified fragment:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'mysql> show query profile "/327167e0db4749a9-adce3b3d770b2bb1/1/"\\G\n*************************** 1. row ***************************\n Instances: 327167e0db4749a9-adce3b3d770b2bb2\n      Host: 172.26.0.1:9111\nActiveTime: 847.612us\n1 row in set (0.01 sec)\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Continue to view the detailed profile of each operator on a specific instance:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'mysql> show query profile "/327167e0db4749a9-adce3b3d770b2bb1/1/327167e0db4749a9-adce3b3d770b2bb2"\\G\n*************************** 1. row ***************************\nInstance: \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502[1: VDataStreamSender]                 \u2502\n\u2502(Active: 36.944us, non-child: 0.20)    \u2502\n\u2502  - Counters:                          \u2502\n\u2502      - BytesSent: 0.00                \u2502\n\u2502      - IgnoreRows: 0                  \u2502\n\u2502      - LocalBytesSent: 20.00 B        \u2502\n\u2502      - OverallThroughput: 0.0 /sec    \u2502\n\u2502      - PeakMemoryUsage: 0.00          \u2502\n\u2502      - SerializeBatchTime: 0ns        \u2502\n\u2502      - UncompressedRowBatchSize: 0.00 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n                    \u2502\n                    \u2502\n\u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502[0: VOLAP_SCAN_NODE]                   \u2502\n\u2502(Active: 563.241us, non-child: 3.00)   \u2502\n\u2502  - Counters:                          \u2502\n\u2502      - BatchQueueWaitTime: 444.714us  \u2502\n\u2502      - BytesRead: 37.00 B             \u2502\n\u2502      - NumDiskAccess: 1               \u2502\n\u2502      - NumScanners: 2                 \u2502\n\u2502      - PeakMemoryUsage: 320.00 KB     \u2502\n\u2502      - RowsRead: 4                    \u2502\n\u2502      - RowsReturned: 4                \u2502\n\u2502      - RowsReturnedRate: 7.101K /sec  \u2502\n\u2502      - ScannerBatchWaitTime: 206.40us \u2502\n\u2502      - ScannerSchedCount : 2          \u2502\n\u2502      - ScannerWorkerWaitTime: 34.640us\u2502\n\u2502      - TabletCount : 2                \u2502\n\u2502      - TotalReadThroughput: 0.0 /sec  \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n                    \u2502\n                    \u2502\n   \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n   \u2502[OlapScanner]                    \u2502\n   \u2502(Active: 0ns, non-child: 0.00)   \u2502\n   \u2502  - Counters:                    \u2502\n   \u2502      - BlockConvertTime: 0ns    \u2502\n   \u2502      - BlockFetchTime: 183.741us\u2502\n   \u2502      - ReaderInitTime: 180.741us\u2502\n   \u2502      - RowsDelFiltered: 0       \u2502\n   \u2502      - RowsPushedCondFiltered: 0\u2502\n   \u2502      - ScanCpuTime: 388.576us   \u2502\n   \u2502      - ScanTime: 0ns            \u2502\n   \u2502      - ShowHintsTime_V1: 0ns    \u2502\n   \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n                    \u2502\n                    \u2502\n \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n \u2502[SegmentIterator]                    \u2502\n \u2502(Active: 0ns, non-child: 0.00)       \u2502\n \u2502  - Counters:                        \u2502\n \u2502      - BitmapIndexFilterTimer: 124ns\u2502\n \u2502      - BlockLoadTime: 179.202us     \u2502\n \u2502      - BlockSeekCount: 5            \u2502\n \u2502      - BlockSeekTime: 18.792us      \u2502\n \u2502      - BlocksLoad: 4                \u2502\n \u2502      - CachedPagesNum: 2            \u2502\n \u2502      - CompressedBytesRead: 0.00    \u2502\n \u2502      - DecompressorTimer: 0ns       \u2502\n \u2502      - IOTimer: 0ns                 \u2502\n \u2502      - IndexLoadTime_V1: 0ns        \u2502\n \u2502      - NumSegmentFiltered: 0        \u2502\n \u2502      - NumSegmentTotal: 2           \u2502\n \u2502      - RawRowsRead: 4               \u2502\n \u2502      - RowsBitmapIndexFiltered: 0   \u2502\n \u2502      - RowsBloomFilterFiltered: 0   \u2502\n \u2502      - RowsConditionsFiltered: 0    \u2502\n \u2502      - RowsKeyRangeFiltered: 0      \u2502\n \u2502      - RowsStatsFiltered: 0         \u2502\n \u2502      - RowsVectorPredFiltered: 0    \u2502\n \u2502      - TotalPagesNum: 2             \u2502\n \u2502      - UncompressedBytesRead: 0.00  \u2502\n \u2502      - VectorPredEvalTime: 0ns      \u2502\n \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n\n1 row in set (0.01 sec)\n'})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"keywords",children:"Keywords"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"SHOW, QUERY, PROFILE\n"})}),"\n",(0,t.jsx)(n.h3,{id:"best-practice",children:"Best Practice"})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return l}});var r=s(667294);let t={},i=r.createContext(t);function l(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);