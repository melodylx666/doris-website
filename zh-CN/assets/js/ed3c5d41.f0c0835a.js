"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["188451"],{13220:function(n,i,e){e.r(i),e.d(i,{metadata:()=>t,contentTitle:()=>c,default:()=>d,assets:()=>o,toc:()=>a,frontMatter:()=>l});var t=JSON.parse('{"id":"query-acceleration/tuning/tuning-plan/adjusting-join-shuffle","title":"\u4F7F\u7528 Hint \u8C03\u6574 Join Shuffle \u65B9\u5F0F","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/query-acceleration/tuning/tuning-plan/adjusting-join-shuffle.md","sourceDirName":"query-acceleration/tuning/tuning-plan","slug":"/query-acceleration/tuning/tuning-plan/adjusting-join-shuffle","permalink":"/zh-CN/docs/dev/query-acceleration/tuning/tuning-plan/adjusting-join-shuffle","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"\u4F7F\u7528 Hint \u8C03\u6574 Join Shuffle \u65B9\u5F0F","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u4F7F\u7528 Colocate Group \u4F18\u5316 Join","permalink":"/zh-CN/docs/dev/query-acceleration/tuning/tuning-plan/optimizing-join-with-colocate-group"},"next":{"title":"\u4F7F\u7528 Hint \u63A7\u5236\u4EE3\u4EF7\u6539\u5199","permalink":"/zh-CN/docs/dev/query-acceleration/tuning/tuning-plan/controlling-hints-with-cbo-rule"}}'),s=e("785893"),r=e("250065");let l={title:"\u4F7F\u7528 Hint \u8C03\u6574 Join Shuffle \u65B9\u5F0F",language:"zh-CN"},c=void 0,o={},a=[{value:"\u5DE5\u4F5C\u539F\u7406",id:"\u5DE5\u4F5C\u539F\u7406",level:2},{value:"\u8C03\u4F18\u6848\u4F8B",id:"\u8C03\u4F18\u6848\u4F8B",level:2},{value:"\u603B\u7ED3",id:"\u603B\u7ED3",level:2}];function h(n){let i={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h2,{id:"\u5DE5\u4F5C\u539F\u7406",children:"\u5DE5\u4F5C\u539F\u7406"}),"\n",(0,s.jsx)(i.p,{children:"Doris \u652F\u6301\u4F7F\u7528 Hint \u6765\u8C03\u6574 Join \u64CD\u4F5C\u4E2D\u6570\u636E Shuffle \u7684\u7C7B\u578B\uFF0C\u4ECE\u800C\u4F18\u5316\u67E5\u8BE2\u6027\u80FD\u3002\u672C\u8282\u5C06\u8BE6\u7EC6\u4ECB\u7ECD\u5982\u4F55\u5728 Doris \u4E2D\u5229\u7528 Hint \u6765\u6307\u5B9A Join Shuffle \u7684\u7C7B\u578B\u3002"}),"\n",(0,s.jsxs)(i.p,{children:["\u76EE\u524D\uFF0CDoris \u4EC5\u9650\u4E8E\u6307\u5B9A Join \u53F3\u8868\u7684 Distribute Type\uFF0C\u5E76\u4E14\u4EC5\u63D0\u4F9B\u4E24\u79CD\u7C7B\u578B\u4F9B\u9009\u62E9\uFF1A",(0,s.jsx)(i.code,{children:"[shuffle] "}),"\u548C ",(0,s.jsx)(i.code,{children:"[broadcast]"}),"\u3002Distribute Type \u9700\u7F6E\u4E8E Join \u53F3\u8868\u4E4B\u524D\uFF0C\u53EF\u91C7\u7528\u4E2D\u62EC\u53F7 ",(0,s.jsx)(i.code,{children:"[]"}),"\u7684\u65B9\u5F0F\u3002"]}),"\n",(0,s.jsx)(i.p,{children:"\u793A\u4F8B\u5982\u4E0B\uFF1A"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-sql",children:"SELECT COUNT(*) FROM t2 JOIN [broadcast] t1 ON t1.c1 = t2.c2;\nSELECT COUNT(*) FROM t2 JOIN [shuffle] t1 ON t1.c1 = t2.c2;\nSELECT /*+ ordered */ COUNT(*) FROM t2 JOIN [broadcast] t1 ON t1.c1 = t2.c2;\nSELECT /*+ ordered */ COUNT(*) FROM t2 JOIN [shuffle] t1 ON t1.c1 = t2.c2;\n"})}),"\n",(0,s.jsx)(i.p,{children:"\u5728\u4F7F\u7528\u65F6\uFF0C\u9700\u6CE8\u610F\u4EE5\u4E0B\u4E8B\u9879\uFF1A"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"\u82E5\u9047\u5230\u65E0\u6CD5\u6B63\u786E\u751F\u6210\u6267\u884C\u8BA1\u5212\u7684 DistributeHint \u65F6\uFF0CDoris \u4E0D\u4F1A\u663E\u793A\u8BE5 Hint\uFF0C\u800C\u662F\u4F1A\u6309\u201C\u6700\u5927\u52AA\u529B\u201D\u539F\u5219\u4F7F\u5176\u751F\u6548\u3002\u6700\u7EC8\uFF0C\u4EE5 EXPLAIN \u663E\u793A\u7684 Distribute \u65B9\u5F0F\u4E3A\u51C6\u3002"}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"\u5728\u5F53\u524D\u7248\u672C\u4E2D\uFF0CDistributeHint \u6682\u4E0D\u652F\u6301\u4E0E LEADING \u6DF7\u7528\uFF0C\u4E14\u4EC5\u5F53 Distribute \u6307\u5B9A\u7684\u8868\u4F4D\u4E8E Join \u53F3\u8FB9\u65F6\uFF0CHint \u624D\u4F1A\u751F\u6548\u3002"}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"\u5EFA\u8BAE\u5C06 DistributeHint \u4E0E ORDERED \u6DF7\u7528\u3002\u9996\u5148\u5229\u7528 ORDERED \u56FA\u5B9A Join \u987A\u5E8F\uFF0C\u7136\u540E\u518D\u6307\u5B9A\u76F8\u5E94 Join \u4E2D\u9884\u671F\u4F7F\u7528\u7684 Distribute \u65B9\u5F0F\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"\u8C03\u4F18\u6848\u4F8B",children:"\u8C03\u4F18\u6848\u4F8B"}),"\n",(0,s.jsx)(i.p,{children:"\u63A5\u4E0B\u6765\uFF0C\u6211\u4EEC\u5C06\u901A\u8FC7\u540C\u4E00\u4E2A\u4F8B\u5B50\u6765\u5C55\u793A Hint \u7684\u4F7F\u7528\u65B9\u6CD5\uFF1A"}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"1. \u4F7F\u7528\u524D\uFF1A"})}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-sql",children:"EXPLAIN SHAPE PLAN SELECT COUNT(*) FROM t1 JOIN t2 ON t1.c1 = t2.c2;\n"})}),"\n",(0,s.jsx)(i.p,{children:"\u7ED3\u679C\uFF1A"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-sql",children:"+----------------------------------------------------------------------------------+  \n| Explain String (Nereids Planner)                                                 |  \n+----------------------------------------------------------------------------------+  \n| PhysicalResultSink                                                               |  \n| --hashAgg [GLOBAL]                                                               |  \n| ----PhysicalDistribute [DistributionSpecGather]                                  |  \n| ------hashAgg [LOCAL]                                                            |  \n| --------PhysicalProject                                                          |  \n| ----------hashJoin [INNER_JOIN] hashCondition=((t1.c1 = t2.c2)) otherCondition=()|  \n| ------------PhysicalProject                                                      |  \n| --------------PhysicalOlapScan [t1]                                              |  \n| ------------PhysicalDistribute [DistributionSpecHash]                            |  \n| --------------PhysicalProject                                                    |  \n| ----------------PhysicalOlapScan [t2]                                            |  \n+----------------------------------------------------------------------------------+\n"})}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.strong,{children:"2. \u4F7F\u7528\u540E\uFF1A"})}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-sql",children:"EXPLAIN SHAPE PLAN SELECT /*+ ordered */ COUNT(*) FROM t2 JOIN [broadcast] t1 ON t1.c1 = t2.c2;\n"})}),"\n",(0,s.jsx)(i.p,{children:"\u7ED3\u679C\uFF1A"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-sql",children:"+----------------------------------------------------------------------------------+  \n| Explain String (Nereids Planner)                                                 |  \n+----------------------------------------------------------------------------------+  \n| PhysicalResultSink                                                               |  \n| --hashAgg [GLOBAL]                                                               |  \n| ----PhysicalDistribute [DistributionSpecGather]                                  |  \n| ------hashAgg [LOCAL]                                                            |  \n| --------PhysicalProject                                                          |  \n| ----------hashJoin [INNER_JOIN] hashCondition=((t1.c1 = t2.c2)) otherCondition=()|  \n| ------------PhysicalProject                                                      |  \n| --------------PhysicalOlapScan [t2]                                              |  \n| ------------PhysicalDistribute [DistributionSpecReplicated]                      |  \n| --------------PhysicalProject                                                    |  \n| ----------------PhysicalOlapScan [t1]                                            |  \n|                                                                                  |  \n| Hint log:                                                                        |  \n| Used: ORDERED                                                                    |  \n| UnUsed:                                                                          |  \n| SyntaxError:                                                                     |  \n+----------------------------------------------------------------------------------+\n"})}),"\n",(0,s.jsx)(i.p,{children:"\u5728 EXPLAIN \u7ED3\u679C\u4E2D\uFF0C\u53EF\u4EE5\u770B\u5230 Distribute \u7B97\u5B50\u7684\u76F8\u5173\u4FE1\u606F\uFF1A"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"DistributionSpecReplicated"})," \u8868\u793A\u5C06\u5BF9\u5E94\u7684\u6570\u636E\u590D\u5236\u5230\u6240\u6709 BE \u8282\u70B9\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"DistributionSpecGather"})," \u8868\u793A\u5C06\u6570\u636E Gather \u5230 FE \u8282\u70B9\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"DistributionSpecHash"})," \u8868\u793A\u5C06\u6570\u636E\u6309\u7167\u7279\u5B9A\u7684 HashKey \u548C\u7B97\u6CD5\u6253\u6563\u5230\u4E0D\u540C\u7684 BE \u8282\u70B9\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"\u603B\u7ED3",children:"\u603B\u7ED3"}),"\n",(0,s.jsx)(i.p,{children:"\u901A\u8FC7\u5408\u7406\u4F7F\u7528 DistributeHint\uFF0C\u53EF\u4EE5\u4F18\u5316 Join \u64CD\u4F5C\u7684 Shuffle \u65B9\u5F0F\uFF0C\u63D0\u5347\u67E5\u8BE2\u6027\u80FD\u3002\u5728\u5B9E\u8DF5\u4E2D\uFF0C\u5EFA\u8BAE \u5148\u901A\u8FC7 EXPLAIN \u5206\u6790\u67E5\u8BE2\u6267\u884C\u8BA1\u5212\uFF0C\u518D\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u9009\u62E9\u5408\u9002\u7684 Shuffle \u7C7B\u578B\u3002\u5728\u4F7F\u7528\u65F6\uFF0C\u9700\u6CE8\u610F\u4EE5\u4E0B\u4E8B\u9879\uFF1A"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"\u82E5\u9047\u5230\u65E0\u6CD5\u6B63\u786E\u751F\u6210\u6267\u884C\u8BA1\u5212\u7684 DistributeHint \u65F6\uFF0CDoris \u4E0D\u4F1A\u663E\u793A\u8BE5 Hint\uFF0C\u800C\u662F\u4F1A\u6309\u201C\u6700\u5927\u52AA\u529B\u201D\u539F\u5219\u4F7F\u5176\u751F\u6548\u3002\u6700\u7EC8\uFF0C\u4EE5 EXPLAIN \u663E\u793A\u7684 Distribute \u65B9\u5F0F\u4E3A\u51C6\u3002"}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"\u5728\u5F53\u524D\u7248\u672C\u4E2D\uFF0CDistributeHint \u6682\u4E0D\u652F\u6301\u4E0E LEADING \u6DF7\u7528\uFF0C\u4E14\u4EC5\u5F53 Distribute \u6307\u5B9A\u7684\u8868\u4F4D\u4E8E Join \u53F3\u8FB9\u65F6\uFF0CHint \u624D\u4F1A\u751F\u6548\u3002"}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"\u5EFA\u8BAE\u5C06 DistributeHint \u4E0E ORDERED \u6DF7\u7528\u3002\u9996\u5148\u5229\u7528 ORDERED \u56FA\u5B9A Join \u987A\u5E8F\uFF0C\u7136\u540E\u518D\u6307\u5B9A\u76F8\u5E94 Join \u4E2D\u9884\u671F\u4F7F\u7528\u7684 Distribute \u65B9\u5F0F\u3002"}),"\n"]}),"\n"]})]})}function d(n={}){let{wrapper:i}={...(0,r.a)(),...n.components};return i?(0,s.jsx)(i,{...n,children:(0,s.jsx)(h,{...n})}):h(n)}},250065:function(n,i,e){e.d(i,{Z:function(){return c},a:function(){return l}});var t=e(667294);let s={},r=t.createContext(s);function l(n){let i=t.useContext(r);return t.useMemo(function(){return"function"==typeof n?n(i):{...i,...n}},[i,n])}function c(n){let i;return i=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:l(n.components),t.createElement(r.Provider,{value:i},n.children)}}}]);