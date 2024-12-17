"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["369012"],{939728:function(n,e,s){s.r(e),s.d(e,{metadata:()=>d,contentTitle:()=>t,default:()=>o,assets:()=>c,toc:()=>a,frontMatter:()=>l});var d=JSON.parse('{"id":"table-design/data-model/unique","title":"\u4E3B\u952E\u6A21\u578B","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/table-design/data-model/unique.md","sourceDirName":"table-design/data-model","slug":"/table-design/data-model/unique","permalink":"/zh-CN/docs/table-design/data-model/unique","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"\u4E3B\u952E\u6A21\u578B","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u660E\u7EC6\u6A21\u578B","permalink":"/zh-CN/docs/table-design/data-model/duplicate"},"next":{"title":"\u805A\u5408\u6A21\u578B","permalink":"/zh-CN/docs/table-design/data-model/aggregate"}}'),i=s("785893"),r=s("250065");let l={title:"\u4E3B\u952E\u6A21\u578B",language:"zh-CN"},t=void 0,c={},a=[{value:"\u5199\u65F6\u5408\u5E76",id:"\u5199\u65F6\u5408\u5E76",level:2},{value:"\u8BFB\u65F6\u5408\u5E76",id:"\u8BFB\u65F6\u5408\u5E76",level:2},{value:"\u4F7F\u7528\u6CE8\u610F",id:"\u4F7F\u7528\u6CE8\u610F",level:2}];function h(n){let e={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.p,{children:"\u5F53\u7528\u6237\u6709\u6570\u636E\u66F4\u65B0\u9700\u6C42\u65F6\uFF0C\u53EF\u4EE5\u9009\u62E9\u4F7F\u7528\u4E3B\u952E\u6570\u636E\u6A21\u578B\uFF08Unique\uFF09\u3002\u4E3B\u952E\u6A21\u578B\u80FD\u591F\u4FDD\u8BC1 Key\uFF08\u4E3B\u952E\uFF09\u7684\u552F\u4E00\u6027\uFF0C\u5F53\u7528\u6237\u66F4\u65B0\u4E00\u6761\u6570\u636E\u65F6\uFF0C\u65B0\u5199\u5165\u7684\u6570\u636E\u4F1A\u8986\u76D6\u5177\u6709\u76F8\u540C key\uFF08\u4E3B\u952E\uFF09\u7684\u65E7\u6570\u636E\u3002"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u4E3B\u952E\u6A21\u578B\u63D0\u4F9B\u4E86\u4E24\u79CD\u5B9E\u73B0\u65B9\u5F0F\uFF1A"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u5199\u65F6\u5408\u5E76 (merge-on-write)\u3002\u5728 1.2 \u7248\u672C\u4E2D\uFF0C\u6211\u4EEC\u5F15\u5165\u4E86\u5199\u65F6\u5408\u5E76\u5B9E\u73B0\uFF0C\u8BE5\u5B9E\u73B0\u4F1A\u5728\u6570\u636E\u5199\u5165\u9636\u6BB5\u5B8C\u6210\u6240\u6709\u6570\u636E\u53BB\u91CD\u7684\u5DE5\u4F5C\uFF0C\u56E0\u6B64\u80FD\u591F\u63D0\u4F9B\u975E\u5E38\u597D\u7684\u67E5\u8BE2\u6027\u80FD\u3002\u81EA 2.1 \u7248\u672C\u8D77\uFF0C\u5199\u65F6\u5408\u5E76\u7ECF\u8FC7\u4E24\u4E2A\u5927\u7248\u672C\u7684\u6253\u78E8\uFF0C\u5DF2\u7ECF\u975E\u5E38\u6210\u719F\u7A33\u5B9A\uFF0C\u7531\u4E8E\u5176\u4F18\u79C0\u7684\u67E5\u8BE2\u6027\u80FD\uFF0C\u5199\u65F6\u5408\u5E76\u6210\u4E3A Unique \u6A21\u578B\u7684\u9ED8\u8BA4\u5B9E\u73B0\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u8BFB\u65F6\u5408\u5E76 (merge-on-read)\u3002\u5728\u8BFB\u65F6\u5408\u5E76\u5B9E\u73B0\u4E2D\uFF0C\u7528\u6237\u5728\u8FDB\u884C\u6570\u636E\u5199\u5165\u65F6\u4E0D\u4F1A\u89E6\u53D1\u4EFB\u4F55\u6570\u636E\u53BB\u91CD\u76F8\u5173\u7684\u64CD\u4F5C\uFF0C\u6240\u6709\u6570\u636E\u53BB\u91CD\u7684\u64CD\u4F5C\u90FD\u5728\u67E5\u8BE2\u6216\u8005 compaction \u65F6\u8FDB\u884C\u3002\u56E0\u6B64\uFF0C\u8BFB\u65F6\u5408\u5E76\u7684\u5199\u5165\u6027\u80FD\u8F83\u597D\uFF0C\u67E5\u8BE2\u6027\u80FD\u8F83\u5DEE\uFF0C\u540C\u65F6\u5185\u5B58\u6D88\u8017\u4E5F\u8F83\u9AD8\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u6570\u636E\u66F4\u65B0\u7684\u8BED\u4E49"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["Unique \u6A21\u578B\u9ED8\u8BA4\u7684\u66F4\u65B0\u8BED\u4E49\u4E3A",(0,i.jsxs)(e.strong,{children:["\u6574\u884C",(0,i.jsx)(e.code,{children:"UPSERT"})]}),"\uFF0C\u5373 UPDATE OR INSERT\uFF0C\u8BE5\u884C\u6570\u636E\u7684 key \u5982\u679C\u5B58\u5728\uFF0C\u5219\u8FDB\u884C\u66F4\u65B0\uFF0C\u5982\u679C\u4E0D\u5B58\u5728\uFF0C\u5219\u8FDB\u884C\u65B0\u6570\u636E\u63D2\u5165\u3002\u5728\u6574\u884C",(0,i.jsx)(e.code,{children:"UPSERT"}),"\u8BED\u4E49\u4E0B\uFF0C\u5373\u4F7F\u7528\u6237\u4F7F\u7528 insert into \u6307\u5B9A\u90E8\u5206\u5217\u8FDB\u884C\u5199\u5165\uFF0CDoris \u4E5F\u4F1A\u5728 Planner \u4E2D\u5C06\u672A\u63D0\u4F9B\u7684\u5217\u4F7F\u7528 NULL \u503C\u6216\u8005\u9ED8\u8BA4\u503C\u8FDB\u884C\u586B\u5145\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["\u90E8\u5206\u5217\u66F4\u65B0\u3002\u5982\u679C\u7528\u6237\u5E0C\u671B\u66F4\u65B0\u90E8\u5206\u5B57\u6BB5\uFF0C\u9700\u8981\u4F7F\u7528\u5199\u65F6\u5408\u5E76\u5B9E\u73B0\uFF0C\u5E76\u901A\u8FC7\u7279\u5B9A\u7684\u53C2\u6570\u6765\u5F00\u542F\u90E8\u5206\u5217\u66F4\u65B0\u7684\u652F\u6301\u3002\u8BF7\u67E5\u9605\u6587\u6863",(0,i.jsx)(e.a,{href:"../../data-operate/update/update-of-unique-model",children:"\u90E8\u5206\u5217\u66F4\u65B0"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u4E0B\u9762\u4EE5\u4E00\u4E2A\u5178\u578B\u7684\u7528\u6237\u57FA\u7840\u4FE1\u606F\u8868\uFF0C\u6765\u770B\u770B\u5982\u4F55\u5EFA\u7ACB\u8BFB\u65F6\u5408\u5E76\u548C\u5199\u65F6\u5408\u5E76\u7684\u4E3B\u952E\u6A21\u578B\u8868\u3002\u8FD9\u4E2A\u8868\u6570\u636E\u6CA1\u6709\u805A\u5408\u9700\u6C42\uFF0C\u53EA\u9700\u4FDD\u8BC1\u4E3B\u952E\u552F\u4E00\u6027\u3002\uFF08\u8FD9\u91CC\u7684\u4E3B\u952E\u4E3A user_id + username\uFF09\u3002"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"ColumnName"}),(0,i.jsx)(e.th,{children:"Type"}),(0,i.jsx)(e.th,{children:"IsKey"}),(0,i.jsx)(e.th,{children:"Comment"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"user_id"}),(0,i.jsx)(e.td,{children:"BIGINT"}),(0,i.jsx)(e.td,{children:"Yes"}),(0,i.jsx)(e.td,{children:"\u7528\u6237 id"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"username"}),(0,i.jsx)(e.td,{children:"VARCHAR(50)"}),(0,i.jsx)(e.td,{children:"Yes"}),(0,i.jsx)(e.td,{children:"\u7528\u6237\u6635\u79F0"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"city"}),(0,i.jsx)(e.td,{children:"VARCHAR(20)"}),(0,i.jsx)(e.td,{children:"No"}),(0,i.jsx)(e.td,{children:"\u7528\u6237\u6240\u5728\u57CE\u5E02"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"age"}),(0,i.jsx)(e.td,{children:"SMALLINT"}),(0,i.jsx)(e.td,{children:"No"}),(0,i.jsx)(e.td,{children:"\u7528\u6237\u5E74\u9F84"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"sex"}),(0,i.jsx)(e.td,{children:"TINYINT"}),(0,i.jsx)(e.td,{children:"No"}),(0,i.jsx)(e.td,{children:"\u7528\u6237\u6027\u522B"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"phone"}),(0,i.jsx)(e.td,{children:"LARGEINT"}),(0,i.jsx)(e.td,{children:"No"}),(0,i.jsx)(e.td,{children:"\u7528\u6237\u7535\u8BDD"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"address"}),(0,i.jsx)(e.td,{children:"VARCHAR(500)"}),(0,i.jsx)(e.td,{children:"No"}),(0,i.jsx)(e.td,{children:"\u7528\u6237\u4F4F\u5740"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"register_time"}),(0,i.jsx)(e.td,{children:"DATETIME"}),(0,i.jsx)(e.td,{children:"No"}),(0,i.jsx)(e.td,{children:"\u7528\u6237\u6CE8\u518C\u65F6\u95F4"})]})]})]}),"\n",(0,i.jsx)(e.h2,{id:"\u5199\u65F6\u5408\u5E76",children:"\u5199\u65F6\u5408\u5E76"}),"\n",(0,i.jsx)(e.p,{children:"\u5199\u65F6\u5408\u5E76\u5EFA\u8868\u8BED\u53E5\u4E3A\uFF1A"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:'CREATE TABLE IF NOT EXISTS example_tbl_unique\n(\n    `user_id` LARGEINT NOT NULL COMMENT "\u7528\u6237id",\n    `username` VARCHAR(50) NOT NULL COMMENT "\u7528\u6237\u6635\u79F0",\n    `city` VARCHAR(20) COMMENT "\u7528\u6237\u6240\u5728\u57CE\u5E02",\n    `age` SMALLINT COMMENT "\u7528\u6237\u5E74\u9F84",\n    `sex` TINYINT COMMENT "\u7528\u6237\u6027\u522B",\n    `phone` LARGEINT COMMENT "\u7528\u6237\u7535\u8BDD",\n    `address` VARCHAR(500) COMMENT "\u7528\u6237\u5730\u5740",\n    `register_time` DATETIME COMMENT "\u7528\u6237\u6CE8\u518C\u65F6\u95F4"\n)\nUNIQUE KEY(`user_id`, `username`)\nDISTRIBUTED BY HASH(`user_id`) BUCKETS 10\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 3"\n);\n'})}),"\n",(0,i.jsx)(e.h2,{id:"\u8BFB\u65F6\u5408\u5E76",children:"\u8BFB\u65F6\u5408\u5E76"}),"\n",(0,i.jsx)(e.p,{children:"\u8BFB\u65F6\u5408\u5E76\u7684\u5EFA\u8868\u8BED\u53E5\u5982\u4E0B\uFF1A"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:'CREATE TABLE IF NOT EXISTS example_tbl_unique\n(\n    `user_id` LARGEINT NOT NULL COMMENT "\u7528\u6237id",\n    `username` VARCHAR(50) NOT NULL COMMENT "\u7528\u6237\u6635\u79F0",\n    `city` VARCHAR(20) COMMENT "\u7528\u6237\u6240\u5728\u57CE\u5E02",\n    `age` SMALLINT COMMENT "\u7528\u6237\u5E74\u9F84",\n    `sex` TINYINT COMMENT "\u7528\u6237\u6027\u522B",\n    `phone` LARGEINT COMMENT "\u7528\u6237\u7535\u8BDD",\n    `address` VARCHAR(500) COMMENT "\u7528\u6237\u5730\u5740",\n    `register_time` DATETIME COMMENT "\u7528\u6237\u6CE8\u518C\u65F6\u95F4"\n)\nUNIQUE KEY(`user_id`, `username`)\nDISTRIBUTED BY HASH(`user_id`) BUCKETS 10\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 3",\n"enable_unique_key_merge_on_write" = "false"\n);\n'})}),"\n",(0,i.jsx)(e.p,{children:"\u7528\u6237\u9700\u8981\u5728\u5EFA\u8868\u65F6\u6DFB\u52A0\u4E0B\u9762\u7684 property \u6765\u5F00\u542F\u8BFB\u65F6\u5408\u5E76\u3002"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-Plain",children:'"enable_unique_key_merge_on_write" = "false"\n'})}),"\n",(0,i.jsxs)(e.admonition,{type:"caution",children:[(0,i.jsx)(e.p,{children:"\u5728 2.1 \u7248\u672C\u4E2D\uFF0C\u5199\u65F6\u5408\u5E76\u5C06\u4F1A\u662F\u4E3B\u952E\u6A21\u578B\u7684\u9ED8\u8BA4\u65B9\u5F0F\u3002"}),(0,i.jsx)(e.p,{children:"\u5BF9\u4E8E\u65B0\u7528\u6237\uFF0C\u5F3A\u70C8\u63A8\u8350\u4F7F\u7528 2.0 \u53CA\u5176\u4EE5\u4E0A\u7248\u672C\u3002\u5728 2.0 \u7248\u672C\u4E2D\uFF0C\u5199\u65F6\u5408\u5E76\u7684\u6027\u80FD\u548C\u7A33\u5B9A\u6027\u90FD\u6709\u5927\u5E45\u7684\u63D0\u5347\u548C\u4F18\u5316\u3002"}),(0,i.jsx)(e.p,{children:"\u5BF9\u4E8E 1.2 \u7684\u7528\u6237"}),(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u5EFA\u8BAE\u4F7F\u7528 1.2.4 \u53CA\u4EE5\u4E0A\u7248\u672C\uFF0C\u8BE5\u7248\u672C\u4FEE\u590D\u4E86\u4E00\u4E9B bug \u548C\u7A33\u5B9A\u6027\u95EE\u9898\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u5728 be.conf \u4E2D\u6DFB\u52A0\u914D\u7F6E\u9879\uFF1Adisable_storage_page_cache=false\u3002\u4E0D\u6DFB\u52A0\u8BE5\u914D\u7F6E\u9879\u53EF\u80FD\u4F1A\u5BF9\u6570\u636E\u5BFC\u5165\u6027\u80FD\u4EA7\u751F\u8F83\u5927\u5F71\u54CD"}),"\n"]})]}),"\n",(0,i.jsx)(e.h2,{id:"\u4F7F\u7528\u6CE8\u610F",children:"\u4F7F\u7528\u6CE8\u610F"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Unique \u8868\u7684\u5B9E\u73B0\u65B9\u5F0F\u53EA\u80FD\u5728\u5EFA\u8868\u65F6\u786E\u5B9A\uFF0C\u65E0\u6CD5\u901A\u8FC7 schema change \u8FDB\u884C\u4FEE\u6539\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["\u65E7\u7684 Merge-on-Read \u7684\u5B9E\u73B0\u65E0\u6CD5\u65E0\u7F1D\u5347\u7EA7\u5230 Merge-on-Write \u7684\u5B9E\u73B0\uFF08\u6570\u636E\u7EC4\u7EC7\u65B9\u5F0F\u5B8C\u5168\u4E0D\u540C\uFF09\uFF0C\u5982\u679C\u9700\u8981\u6539\u4E3A\u4F7F\u7528\u5199\u65F6\u5408\u5E76\u7684\u5B9E\u73B0\u7248\u672C\uFF0C\u9700\u8981\u624B\u52A8\u6267\u884C ",(0,i.jsx)(e.code,{children:"insert into unique-mow-table select * from source table"})," \u6765\u91CD\u65B0\u5BFC\u5165\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["\u6574\u884C\u66F4\u65B0\uFF1AUnique \u6A21\u578B\u9ED8\u8BA4\u7684\u66F4\u65B0\u8BED\u4E49\u4E3A\u6574\u884C ",(0,i.jsx)(e.code,{children:"UPSERT"}),"\uFF0C\u5373 UPDATE OR INSERT\uFF0C\u8BE5\u884C\u6570\u636E\u7684 key \u5982\u679C\u5B58\u5728\uFF0C\u5219\u8FDB\u884C\u66F4\u65B0\uFF0C\u5982\u679C\u4E0D\u5B58\u5728\uFF0C\u5219\u8FDB\u884C\u65B0\u6570\u636E\u63D2\u5165\u3002\u5728\u6574\u884C ",(0,i.jsx)(e.code,{children:"UPSERT"})," \u8BED\u4E49\u4E0B\uFF0C\u5373\u4F7F\u7528\u6237\u4F7F\u7528 insert into \u6307\u5B9A\u90E8\u5206\u5217\u8FDB\u884C\u5199\u5165\uFF0CDoris \u4E5F\u4F1A\u5728 Planner \u4E2D\u5C06\u672A\u63D0\u4F9B\u7684\u5217\u4F7F\u7528 NULL \u503C\u6216\u8005\u9ED8\u8BA4\u503C\u8FDB\u884C\u586B\u5145"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["\u90E8\u5206\u5217\u66F4\u65B0\u3002\u5982\u679C\u7528\u6237\u5E0C\u671B\u66F4\u65B0\u90E8\u5206\u5B57\u6BB5\uFF0C\u9700\u8981\u4F7F\u7528\u5199\u65F6\u5408\u5E76\u5B9E\u73B0\uFF0C\u5E76\u901A\u8FC7\u7279\u5B9A\u7684\u53C2\u6570\u6765\u5F00\u542F\u90E8\u5206\u5217\u66F4\u65B0\u7684\u652F\u6301\u3002\u8BF7\u67E5\u9605\u6587\u6863",(0,i.jsx)(e.a,{href:"../../data-operate/update/update-of-unique-model",children:"\u90E8\u5206\u5217\u66F4\u65B0"}),"\u83B7\u53D6\u76F8\u5173\u4F7F\u7528\u5EFA\u8BAE\u3002"]}),"\n"]}),"\n"]})]})}function o(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(h,{...n})}):h(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return t},a:function(){return l}});var d=s(667294);let i={},r=d.createContext(i);function l(n){let e=d.useContext(r);return d.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:l(n.components),d.createElement(r.Provider,{value:e},n.children)}}}]);