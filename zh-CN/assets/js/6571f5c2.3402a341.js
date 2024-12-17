"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["618680"],{559643:function(n,e,l){l.r(e),l.d(e,{metadata:()=>s,contentTitle:()=>c,default:()=>h,assets:()=>d,toc:()=>o,frontMatter:()=>t});var s=JSON.parse('{"id":"query-acceleration/distinct-counts/using-hll","title":"HLL \u8FD1\u4F3C\u53BB\u91CD","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/query-acceleration/distinct-counts/using-hll.md","sourceDirName":"query-acceleration/distinct-counts","slug":"/query-acceleration/distinct-counts/using-hll","permalink":"/zh-CN/docs/3.0/query-acceleration/distinct-counts/using-hll","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"HLL \u8FD1\u4F3C\u53BB\u91CD","language":"zh-CN"},"sidebar":"docs","previous":{"title":"BITMAP \u7CBE\u51C6\u53BB\u91CD","permalink":"/zh-CN/docs/3.0/query-acceleration/distinct-counts/orthogonal-bitmap-manual"},"next":{"title":"\u67E5\u8BE2\u4F18\u5316\u5668\u4ECB\u7ECD","permalink":"/zh-CN/docs/3.0/query-acceleration/query-optimizer"}}'),i=l("785893"),r=l("250065");let t={title:"HLL \u8FD1\u4F3C\u53BB\u91CD",language:"zh-CN"},c=void 0,d={},o=[{value:"HLL \u8FD1\u4F3C\u53BB\u91CD",id:"hll-\u8FD1\u4F3C\u53BB\u91CD",level:2},{value:"\u4EC0\u4E48\u662F HyperLogLog",id:"\u4EC0\u4E48\u662F-hyperloglog",level:2},{value:"Doris HLL \u51FD\u6570",id:"doris-hll-\u51FD\u6570",level:2},{value:"\u5982\u4F55\u4F7F\u7528 Doris HLL",id:"\u5982\u4F55\u4F7F\u7528-doris-hll",level:2},{value:"\u521B\u5EFA\u4E00\u5F20\u542B\u6709 HLL \u5217\u7684\u8868",id:"\u521B\u5EFA\u4E00\u5F20\u542B\u6709-hll-\u5217\u7684\u8868",level:3},{value:"\u5BFC\u5165\u6570\u636E",id:"\u5BFC\u5165\u6570\u636E",level:3},{value:"\u67E5\u8BE2\u6570\u636E",id:"\u67E5\u8BE2\u6570\u636E",level:2}];function a(n){let e={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"hll-\u8FD1\u4F3C\u53BB\u91CD",children:"HLL \u8FD1\u4F3C\u53BB\u91CD"}),"\n",(0,i.jsx)(e.p,{children:"\u5728\u5B9E\u9645\u7684\u4E1A\u52A1\u573A\u666F\u4E2D\uFF0C\u968F\u7740\u4E1A\u52A1\u6570\u636E\u91CF\u8D8A\u6765\u8D8A\u5927\uFF0C\u5BF9\u6570\u636E\u53BB\u91CD\u7684\u538B\u529B\u4E5F\u8D8A\u6765\u8D8A\u5927\uFF0C\u5F53\u6570\u636E\u8FBE\u5230\u4E00\u5B9A\u89C4\u6A21\u4E4B\u540E\uFF0C\u4F7F\u7528\u7CBE\u51C6\u53BB\u91CD\u7684\u6210\u672C\u4E5F\u8D8A\u6765\u8D8A\u9AD8\uFF0C\u5728\u4E1A\u52A1\u53EF\u4EE5\u63A5\u53D7\u7684\u60C5\u51B5\u4E0B\uFF0C\u901A\u8FC7\u8FD1\u4F3C\u7B97\u6CD5\u6765\u5B9E\u73B0\u5FEB\u901F\u53BB\u91CD\u964D\u4F4E\u8BA1\u7B97\u538B\u529B\u662F\u4E00\u4E2A\u975E\u5E38\u597D\u7684\u65B9\u5F0F\uFF0C\u672C\u6587\u4E3B\u8981\u4ECB\u7ECD Doris \u63D0\u4F9B\u7684 HyperLogLog\uFF08\u7B80\u79F0 HLL\uFF09\u662F\u4E00\u79CD\u8FD1\u4F3C\u53BB\u91CD\u7B97\u6CD5\u3002"}),"\n",(0,i.jsx)(e.p,{children:"HLL \u7684\u7279\u70B9\u662F\u5177\u6709\u975E\u5E38\u4F18\u5F02\u7684\u7A7A\u95F4\u590D\u6742\u5EA6 O(mloglogn) , \u65F6\u95F4\u590D\u6742\u5EA6\u4E3A O(n),  \u5E76\u4E14\u8BA1\u7B97\u7ED3\u679C\u7684\u8BEF\u5DEE\u53EF\u63A7\u5236\u5728 1%\u20142% \u5DE6\u53F3\uFF0C\u8BEF\u5DEE\u4E0E\u6570\u636E\u96C6\u5927\u5C0F\u4EE5\u53CA\u6240\u91C7\u7528\u7684\u54C8\u5E0C\u51FD\u6570\u6709\u5173\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"\u4EC0\u4E48\u662F-hyperloglog",children:"\u4EC0\u4E48\u662F HyperLogLog"}),"\n",(0,i.jsxs)(e.p,{children:["\u5B83\u662F LogLog \u7B97\u6CD5\u7684\u5347\u7EA7\u7248\uFF0C\u4F5C\u7528\u662F\u80FD\u591F\u63D0\u4F9B\u4E0D\u7CBE\u786E\u7684\u53BB\u91CD\u8BA1\u6570\u3002\u5176\u6570\u5B66\u57FA\u7840\u4E3A",(0,i.jsx)(e.strong,{children:"\u4F2F\u52AA\u5229\u8BD5\u9A8C"}),"\u3002"]}),"\n",(0,i.jsx)(e.p,{children:"\u5047\u8BBE\u786C\u5E01\u62E5\u6709\u6B63\u53CD\u4E24\u9762\uFF0C\u4E00\u6B21\u7684\u4E0A\u629B\u81F3\u843D\u4E0B\uFF0C\u6700\u7EC8\u51FA\u73B0\u6B63\u53CD\u9762\u7684\u6982\u7387\u90FD\u662F 50%\u3002\u4E00\u76F4\u629B\u786C\u5E01\uFF0C\u76F4\u5230\u5B83\u51FA\u73B0\u6B63\u9762\u4E3A\u6B62\uFF0C\u6211\u4EEC\u8BB0\u5F55\u4E3A\u4E00\u6B21\u5B8C\u6574\u7684\u8BD5\u9A8C\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u90A3\u4E48\u5BF9\u4E8E\u591A\u6B21\u7684\u4F2F\u52AA\u5229\u8BD5\u9A8C\uFF0C\u5047\u8BBE\u8FD9\u4E2A\u591A\u6B21\u4E3A n \u6B21\u3002\u5C31\u610F\u5473\u7740\u51FA\u73B0\u4E86 n \u6B21\u7684\u6B63\u9762\u3002\u5047\u8BBE\u6BCF\u6B21\u4F2F\u52AA\u5229\u8BD5\u9A8C\u6240\u7ECF\u5386\u4E86\u7684\u629B\u63B7\u6B21\u6570\u4E3A k\u3002\u7B2C\u4E00\u6B21\u4F2F\u52AA\u5229\u8BD5\u9A8C\uFF0C\u6B21\u6570\u8BBE\u4E3A k1\uFF0C\u4EE5\u6B64\u7C7B\u63A8\uFF0C\u7B2C n \u6B21\u5BF9\u5E94\u7684\u662F kn\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u5176\u4E2D\uFF0C\u5BF9\u4E8E\u8FD9 n \u6B21\u4F2F\u52AA\u5229\u8BD5\u9A8C\u4E2D\uFF0C\u5FC5\u7136\u4F1A\u6709\u4E00\u4E2A\u6700\u5927\u7684\u629B\u63B7\u6B21\u6570 k\uFF0C\u4F8B\u5982\u629B\u4E86 12 \u6B21\u624D\u51FA\u73B0\u6B63\u9762\uFF0C\u90A3\u4E48\u79F0\u8FD9\u4E2A\u4E3A k_max\uFF0C\u4EE3\u8868\u629B\u4E86\u6700\u591A\u7684\u6B21\u6570\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u4F2F\u52AA\u5229\u8BD5\u9A8C\u5BB9\u6613\u5F97\u51FA\u6709\u4EE5\u4E0B\u7ED3\u8BBA\uFF1A"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"n \u6B21\u4F2F\u52AA\u5229\u8FC7\u7A0B\u7684\u6295\u63B7\u6B21\u6570\u90FD\u4E0D\u5927\u4E8E k_max\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"n \u6B21\u4F2F\u52AA\u5229\u8FC7\u7A0B\uFF0C\u81F3\u5C11\u6709\u4E00\u6B21\u6295\u63B7\u6B21\u6570\u7B49\u4E8E k_max"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:["\u6700\u7EC8\u7ED3\u5408\u6781\u5927\u4F3C\u7136\u4F30\u7B97\u7684\u65B9\u6CD5\uFF0C\u53D1\u73B0\u5728 n \u548C k_max \u4E2D\u5B58\u5728\u4F30\u7B97\u5173\u8054\uFF1An = 2 ^ k_max\u3002",(0,i.jsx)(e.strong,{children:"\u5F53\u6211\u4EEC\u53EA\u8BB0\u5F55\u4E86 k_max \u65F6\uFF0C\u5373\u53EF\u4F30\u7B97\u603B\u5171\u6709\u591A\u5C11\u6761\u6570\u636E\uFF0C\u4E5F\u5C31\u662F\u57FA\u6570\u3002"})]}),"\n",(0,i.jsx)(e.p,{children:"\u5047\u8BBE\u8BD5\u9A8C\u7ED3\u679C\u5982\u4E0B\uFF1A"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u7B2C 1 \u6B21\u8BD5\u9A8C\uFF1A\u629B\u4E86 3 \u6B21\u624D\u51FA\u73B0\u6B63\u9762\uFF0C\u6B64\u65F6 k=3\uFF0Cn=1"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u7B2C 2 \u6B21\u8BD5\u9A8C\uFF1A\u629B\u4E86 2 \u6B21\u624D\u51FA\u73B0\u6B63\u9762\uFF0C\u6B64\u65F6 k=2\uFF0Cn=2"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u7B2C 3 \u6B21\u8BD5\u9A8C\uFF1A\u629B\u4E86 6 \u6B21\u624D\u51FA\u73B0\u6B63\u9762\uFF0C\u6B64\u65F6 k=6\uFF0Cn=3"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u7B2C n \u6B21\u8BD5\u9A8C\uFF1A\u629B\u4E86 12 \u6B21\u624D\u51FA\u73B0\u6B63\u9762\uFF0C\u6B64\u65F6\u6211\u4EEC\u4F30\u7B97\uFF0Cn = 2^12"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u53D6\u4E0A\u9762\u4F8B\u5B50\u4E2D\u524D\u4E09\u7EC4\u8BD5\u9A8C\uFF0C\u90A3\u4E48 k_max = 6\uFF0C\u6700\u7EC8 n=3\uFF0C\u6211\u4EEC\u653E\u8FDB\u4F30\u7B97\u516C\u5F0F\u4E2D\u53BB\uFF0C\u660E\u663E\uFF1A3 \u2260 2^6\u3002\u4E5F\u5373\u662F\u8BF4\uFF0C\u5F53\u8BD5\u9A8C\u6B21\u6570\u5F88\u5C0F\u7684\u65F6\u5019\uFF0C\u8FD9\u79CD\u4F30\u7B97\u65B9\u6CD5\u7684\u8BEF\u5DEE\u662F\u5F88\u5927\u7684\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u8FD9\u4E09\u7EC4\u8BD5\u9A8C\uFF0C\u6211\u4EEC\u79F0\u4E3A\u4E00\u8F6E\u7684\u4F30\u7B97\u3002\u5982\u679C\u53EA\u662F\u8FDB\u884C\u4E00\u8F6E\u7684\u8BDD\uFF0C\u5F53 n \u8DB3\u591F\u5927\u7684\u65F6\u5019\uFF0C\u4F30\u7B97\u7684\u8BEF\u5DEE\u7387\u4F1A\u76F8\u5BF9\u51CF\u5C11\uFF0C\u4F46\u4ECD\u7136\u4E0D\u591F\u5C0F\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"doris-hll-\u51FD\u6570",children:"Doris HLL \u51FD\u6570"}),"\n",(0,i.jsx)(e.p,{children:"HLL \u662F\u57FA\u4E8E HyperLogLog \u7B97\u6CD5\u7684\u5DE5\u7A0B\u5B9E\u73B0\uFF0C\u7528\u4E8E\u4FDD\u5B58 HyperLogLog \u8BA1\u7B97\u8FC7\u7A0B\u7684\u4E2D\u95F4\u7ED3\u679C\uFF0C\u5B83\u53EA\u80FD\u4F5C\u4E3A\u8868\u7684 Value \u5217\u7C7B\u578B\u3001\u901A\u8FC7\u805A\u5408\u6765\u4E0D\u65AD\u7684\u51CF\u5C11\u6570\u636E\u91CF\uFF0C\u4EE5\u6B64"}),"\n",(0,i.jsx)(e.p,{children:"\u6765\u5B9E\u73B0\u52A0\u5FEB\u67E5\u8BE2\u7684\u76EE\u7684\uFF0C\u57FA\u4E8E\u5B83\u5F97\u5230\u7684\u662F\u4E00\u4E2A\u4F30\u7B97\u7ED3\u679C\uFF0C\u8BEF\u5DEE\u5927\u6982\u5728 1% \u5DE6\u53F3\uFF0CHLL \u5217\u662F\u901A\u8FC7\u5176\u5B83\u5217\u6216\u8005\u5BFC\u5165\u6570\u636E\u91CC\u9762\u7684\u6570\u636E\u751F\u6210\u7684\uFF0C\u5BFC\u5165\u7684\u65F6\u5019\u901A\u8FC7 hll_hash \u51FD\u6570"}),"\n",(0,i.jsx)(e.p,{children:"\u6765\u6307\u5B9A\u6570\u636E\u4E2D\u54EA\u4E00\u5217\u7528\u4E8E\u751F\u6210 HLL \u5217\uFF0C\u5B83\u5E38\u7528\u4E8E\u66FF\u4EE3 Count Distinct\uFF0C\u901A\u8FC7\u7ED3\u5408 Rollup \u5728\u4E1A\u52A1\u4E0A\u7528\u4E8E\u5FEB\u901F\u8BA1\u7B97 UV \u7B49"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"HLL_UNION_AGG(hll)"})}),"\n",(0,i.jsx)(e.p,{children:"\u6B64\u51FD\u6570\u4E3A\u805A\u5408\u51FD\u6570\uFF0C\u7528\u4E8E\u8BA1\u7B97\u6EE1\u8DB3\u6761\u4EF6\u7684\u6240\u6709\u6570\u636E\u7684\u57FA\u6570\u4F30\u7B97\u3002"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"HLL_CARDINALITY(hll)"})}),"\n",(0,i.jsx)(e.p,{children:"\u6B64\u51FD\u6570\u7528\u4E8E\u8BA1\u7B97\u5355\u6761 HLL \u5217\u7684\u57FA\u6570\u4F30\u7B97"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"HLL_HASH(column_name)"})}),"\n",(0,i.jsx)(e.p,{children:"\u751F\u6210 HLL \u5217\u7C7B\u578B\uFF0C\u7528\u4E8E Insert \u6216\u5BFC\u5165\u7684\u65F6\u5019\uFF0C\u5BFC\u5165\u7684\u4F7F\u7528\u89C1\u76F8\u5173\u8BF4\u660E"}),"\n",(0,i.jsx)(e.h2,{id:"\u5982\u4F55\u4F7F\u7528-doris-hll",children:"\u5982\u4F55\u4F7F\u7528 Doris HLL"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u4F7F\u7528 HLL \u53BB\u91CD\u7684\u65F6\u5019\uFF0C\u9700\u8981\u5728\u5EFA\u8868\u8BED\u53E5\u4E2D\u5C06\u76EE\u6807\u5217\u7C7B\u578B\u8BBE\u7F6E\u6210 HLL\uFF0C\u805A\u5408\u51FD\u6570\u8BBE\u7F6E\u6210 HLL_UNION"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"HLL \u7C7B\u578B\u7684\u5217\u4E0D\u80FD\u4F5C\u4E3A Key \u5217\u4F7F\u7528"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u7528\u6237\u4E0D\u9700\u8981\u6307\u5B9A\u957F\u5EA6\u53CA\u9ED8\u8BA4\u503C\uFF0C\u957F\u5EA6\u6839\u636E\u6570\u636E\u805A\u5408\u7A0B\u5EA6\u7CFB\u7EDF\u5185\u63A7\u5236"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"\u521B\u5EFA\u4E00\u5F20\u542B\u6709-hll-\u5217\u7684\u8868",children:"\u521B\u5EFA\u4E00\u5F20\u542B\u6709 HLL \u5217\u7684\u8868"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:'create table test_hll(\n	dt date,\n	id int,\n	name char(10),\n	province char(10),\n	os char(10),\n	pv hll hll_union\n)\nAggregate KEY (dt,id,name,province,os)\ndistributed by hash(id) buckets 10\nPROPERTIES(\n	"replication_num" = "1",\n	"in_memory"="false"\n);\n'})}),"\n",(0,i.jsx)(e.h3,{id:"\u5BFC\u5165\u6570\u636E",children:"\u5BFC\u5165\u6570\u636E"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Stream load \u5BFC\u5165"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:'curl --location-trusted -u root: -H "label:label_test_hll_load" \\\n    -H "column_separator:," \\\n    -H "columns:dt,id,name,province,os, pv=hll_hash(id)" -T test_hll.csv http://fe_IP:8030/api/demo/test_hll/_stream_load\n'})}),"\n",(0,i.jsx)(e.p,{children:"\u793A\u4F8B\u6570\u636E\u5982\u4E0B\uFF08test_hll.csv\uFF09\uFF1A"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"2022-05-05,10001\uFF0C\u6D4B\u8BD5 01\uFF0C\u5317\u4EAC\uFF0Cwindows\n2022-05-05,10002\uFF0C\u6D4B\u8BD5 01\uFF0C\u5317\u4EAC\uFF0Clinux\n2022-05-05,10003\uFF0C\u6D4B\u8BD5 01\uFF0C\u5317\u4EAC\uFF0Cmacos\n2022-05-05,10004\uFF0C\u6D4B\u8BD5 01\uFF0C\u6CB3\u5317\uFF0Cwindows\n2022-05-06,10001\uFF0C\u6D4B\u8BD5 01\uFF0C\u4E0A\u6D77\uFF0Cwindows\n2022-05-06,10002\uFF0C\u6D4B\u8BD5 01\uFF0C\u4E0A\u6D77\uFF0Clinux\n2022-05-06,10003\uFF0C\u6D4B\u8BD5 01\uFF0C\u6C5F\u82CF\uFF0Cmacos\n2022-05-06,10004\uFF0C\u6D4B\u8BD5 01\uFF0C\u9655\u897F\uFF0Cwindows\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u5BFC\u5165\u7ED3\u679C\u5982\u4E0B"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:'# curl --location-trusted -u root: -H "label:label_test_hll_load"     -H "column_separator:,"     -H "columns:dt,id,name,province,os, pv=hll_hash(id)" -T test_hll.csv http://127.0.0.1:8030/api/demo/test_hll/_stream_load\n\n{\n    "TxnId": 693,\n    "Label": "label_test_hll_load",\n    "TwoPhaseCommit": "false",\n    "Status": "Success",\n    "Message": "OK",\n    "NumberTotalRows": 8,\n    "NumberLoadedRows": 8,\n    "NumberFilteredRows": 0,\n    "NumberUnselectedRows": 0,\n    "LoadBytes": 320,\n    "LoadTimeMs": 23,\n    "BeginTxnTimeMs": 0,\n    "StreamLoadPutTimeMs": 1,\n    "ReadDataTimeMs": 0,\n    "WriteDataTimeMs": 9,\n    "CommitAndPublishTimeMs": 11\n}\n'})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Broker Load"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:'LOAD LABEL demo.test_hlllabel\n(\n   DATA INFILE("hdfs://hdfs_host:hdfs_port/user/doris_test_hll/data/input/file")\n   INTO TABLE `test_hll`\n   COLUMNS TERMINATED BY ","\n   (dt,id,name,province,os)\n   SET (\n      pv = HLL_HASH(id)\n   )\n);\n'})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u67E5\u8BE2\u6570\u636E",children:"\u67E5\u8BE2\u6570\u636E"}),"\n",(0,i.jsx)(e.p,{children:"HLL \u5217\u4E0D\u5141\u8BB8\u76F4\u63A5\u67E5\u8BE2\u539F\u59CB\u503C\uFF0C\u53EA\u80FD\u901A\u8FC7 HLL \u7684\u805A\u5408\u51FD\u6570\u8FDB\u884C\u67E5\u8BE2\u3002"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u6C42\u603B\u7684 PV"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"mysql> select HLL_UNION_AGG(pv) from test_hll;\n+---------------------+\n| hll_union_agg(`pv`) |\n+---------------------+\n|                   4 |\n+---------------------+\n1 row in set (0.00 sec)\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u7B49\u4EF7\u4E8E\uFF1A"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"mysql> SELECT COUNT(DISTINCT pv) FROM test_hll;\n+----------------------+\n| count(DISTINCT `pv`) |\n+----------------------+\n|                    4 |\n+----------------------+\n1 row in set (0.01 sec)\n"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u6C42\u6BCF\u4E00\u5929\u7684 PV"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"mysql> select HLL_UNION_AGG(pv) from test_hll group by dt;\n+---------------------+\n| hll_union_agg(`pv`) |\n+---------------------+\n|                   4 |\n|                   4 |\n+---------------------+\n2 rows in set (0.01 sec)\n"})}),"\n"]}),"\n"]})]})}function h(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(a,{...n})}):a(n)}},250065:function(n,e,l){l.d(e,{Z:function(){return c},a:function(){return t}});var s=l(667294);let i={},r=s.createContext(i);function t(n){let e=s.useContext(r);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:t(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);