"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["882115"],{138136:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>o,default:()=>u,assets:()=>l,toc:()=>d,frontMatter:()=>s});var r=JSON.parse('{"id":"query-acceleration/tuning/tuning-plan/solving-unevenly-data-distribution","title":"\u6570\u636E\u503E\u659C\u5904\u7406","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/query-acceleration/tuning/tuning-plan/solving-unevenly-data-distribution.md","sourceDirName":"query-acceleration/tuning/tuning-plan","slug":"/query-acceleration/tuning/tuning-plan/solving-unevenly-data-distribution","permalink":"/zh-CN/docs/dev/query-acceleration/tuning/tuning-plan/solving-unevenly-data-distribution","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"\u6570\u636E\u503E\u659C\u5904\u7406","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u4F7F\u7528 Runtime Filter \u9AD8\u9636\u4F18\u5316","permalink":"/zh-CN/docs/dev/query-acceleration/tuning/tuning-plan/accelerating-queries-with-runtime-filter"},"next":{"title":"DML \u8BA1\u5212\u8C03\u4F18","permalink":"/zh-CN/docs/dev/query-acceleration/tuning/tuning-plan/dml-tuning-plan"}}'),c=t("785893"),i=t("250065");let s={title:"\u6570\u636E\u503E\u659C\u5904\u7406",language:"zh-CN"},o=void 0,l={},d=[{value:"\u8C03\u4F18\u6848\u4F8B 1\uFF1ABucket \u95EE\u9898",id:"\u8C03\u4F18\u6848\u4F8B-1bucket-\u95EE\u9898",level:2},{value:"\u8C03\u4F18\u6848\u4F8B 2\uFF1A\u4F30\u884C\u95EE\u9898",id:"\u8C03\u4F18\u6848\u4F8B-2\u4F30\u884C\u95EE\u9898",level:2}];function a(e){let n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.p,{children:["\u5728",(0,c.jsx)(n.a,{href:"../../../query-acceleration/tuning/tuning-plan/tuning-plan-with-statistics",children:"\u4F7F\u7528\u5217\u7EDF\u8BA1\u4FE1\u606F\u4F18\u5316\u8BA1\u5212"}),"\u5C0F\u8282\u4E2D\uFF0C\u6211\u4EEC\u4ECB\u7ECD\u4E86\u4F18\u5316\u5668\u6240\u4F7F\u7528\u7684\u5747\u5300\u5047\u8BBE\u3002\u7136\u800C\uFF0C\u5728\u5B9E\u9645\u573A\u666F\u4E2D\uFF0C\u6570\u636E\u5E38\u5E38\u5E76\u4E0D\u6EE1\u8DB3\u5747\u5300\u5047\u8BBE\u3002\u5F53\u4F18\u5316\u5668\u7531\u4E8E\u4F30\u7B97\u8BEF\u5DEE\u8FC7\u5927\u800C\u751F\u6210\u4E86\u4E0D\u7406\u60F3\u7684\u6267\u884C\u8BA1\u5212\u65F6\uFF0C\u6211\u4EEC\u53EF\u4EE5\u501F\u52A9 Hint \u65B9\u5F0F\u4EBA\u5DE5\u8C03\u6574\u5E76\u4F18\u5316\u8BE5\u6267\u884C\u8BA1\u5212\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"\u8C03\u4F18\u6848\u4F8B-1bucket-\u95EE\u9898",children:"\u8C03\u4F18\u6848\u4F8B 1\uFF1ABucket \u95EE\u9898"}),"\n",(0,c.jsx)(n.p,{children:"\u5F53 Table \u5728 Bucket Key \u4E0A\u51FA\u73B0\u6570\u636E\u503E\u659C\u65F6\uFF0CWorkload \u5728\u4E0D\u540C\u7684 BE instance \u95F4\u4F1A\u5206\u5E03\u4E0D\u5747\uFF0C\u4ECA\u513F\u5EF6\u957F\u6574\u4E2A\u67E5\u8BE2\u7684\u6267\u884C\u65F6\u95F4\u3002"}),"\n",(0,c.jsxs)(n.p,{children:["\u4EE5 TPC-H \u7684 Schema \u4E3A\u4F8B\uFF1A\u5047\u8BBE ",(0,c.jsx)(n.code,{children:"orders"})," \u8868\u4EE5 ",(0,c.jsx)(n.code,{children:"o_orderkey"})," \u4F5C\u4E3A Bucket Key\uFF0C\u5E76\u4E14\u6709\u4E24\u4E2A Tablet\u3002\u7531\u4E8E\u67D0\u4E9B\u539F\u56E0\uFF0C\u4E00\u4E2A Tablet \u5305\u542B\u4E86 1 \u4EBF\u884C\u6570\u636E\uFF0C\u800C\u53E6\u4E00\u4E2A Tablet \u4EC5\u5305\u542B 100 \u884C\u6570\u636E\u3002"]}),"\n",(0,c.jsx)(n.p,{children:"\u5F53\u6267\u884C\u4EE5\u4E0B\u67E5\u8BE2\u65F6\u65F6\uFF1A"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-sql",children:"SELECT COUNT(*) FROM orders JOIN customer ON o_custkey = c_custkey;\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u4F18\u5316\u5668\u751F\u6210\u4E86 Broadcast Join\uFF0C\u5176\u4E2D ",(0,c.jsx)(n.code,{children:"orders"})," \u8868\u4F5C\u4E3A\u5DE6\u8868\uFF0C",(0,c.jsx)(n.code,{children:"customer"})," \u8868\u4F5C\u4E3A\u53F3\u8868\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u6267\u884C\u5F15\u64CE\u968F\u540E\u4F1A\u5BF9 ",(0,c.jsx)(n.code,{children:"orders"})," \u8868\u7684\u6BCF\u4E2A Tablet \u542F\u52A8\u4E00\u4E2A\u7EBF\u7A0B\u6765\u6267\u884C Join\u3002\u7136\u800C\uFF0C\u7531\u4E8E\u6570\u636E\u5206\u5E03\u4E0D\u5747\uFF0C\u4F1A\u5BFC\u81F4\u5176\u4E2D\u4E00\u4E2A\u7EBF\u7A0B\u5904\u7406\u4E86 1 \u4EBF\u884C\u6570\u636E\uFF0C\u800C\u53E6\u4E00\u4E2A\u7EBF\u7A0B\u53EA\u5904\u7406\u4E86 100 \u884C\u6570\u636E\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u5728\u7406\u60F3\u60C5\u51B5\u4E0B\uFF0C\u4E24\u4E2A\u7EBF\u7A0B\u5E94\u5404\u5904\u7406 50% \u7684\u6570\u636E\uFF0C\u4EE5\u5B9E\u73B0\u67E5\u8BE2\u6548\u7387\u63D0\u5347\u4E00\u500D\u3002\u9488\u5BF9\u6B64\u95EE\u9898\uFF0C\u6211\u4EEC\u53EF\u4EE5\u6307\u5B9A\u4F7F\u7528 Shuffle Join\uFF0C\u8BA9 ",(0,c.jsx)(n.code,{children:"orders"})," \u8868\u7684\u6570\u636E\u6839\u636E ",(0,c.jsx)(n.code,{children:"o_custkey"})," \u91CD\u65B0\u5206\u5E03\uFF0C\u7136\u540E\u518D\u4E0E ",(0,c.jsx)(n.code,{children:"customer"})," \u8868\u8FDB\u884C Join\u3002"]}),"\n",(0,c.jsx)(n.h2,{id:"\u8C03\u4F18\u6848\u4F8B-2\u4F30\u884C\u95EE\u9898",children:"\u8C03\u4F18\u6848\u4F8B 2\uFF1A\u4F30\u884C\u95EE\u9898"}),"\n",(0,c.jsx)(n.p,{children:"\u4F18\u5316\u5668\u57FA\u4E8E\u5747\u5300\u5047\u8BBE\u4F30\u7B97\u8FC7\u6EE4\u7387\u3002\u8FC7\u6EE4\u884C\u6570\u8BEF\u5DEE\u504F\u5927\u5219\u4F1A\u5F71\u54CD\u540E\u7EED SQL \u7B97\u5B50\u7684\u9009\u62E9\u3002"}),"\n",(0,c.jsx)(n.p,{children:"\u4F18\u5316\u5668\u5728\u4F30\u7B97\u8FC7\u6EE4\u7387\u65F6\uFF0C\u901A\u5E38\u662F\u57FA\u4E8E\u5747\u5300\u5206\u5E03\u7684\u5047\u8BBE\u3002\u7136\u800C\uFF0C\u5F53\u8FC7\u6EE4\u884C\u6570\u7684\u8BEF\u5DEE\u504F\u5927\u65F6\uFF0C\u5219\u4F1A\u5F71\u54CD\u5230\u540E\u7EED SQL \u7B97\u5B50\u7684\u9009\u62E9\u3002"}),"\n",(0,c.jsx)(n.p,{children:"\u4EE5\u4E0B SQL \u67E5\u8BE2\u4E3A\u4F8B\uFF1A"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-sql",children:"select count(1)\nfrom orders, customer \nwhere o_custkey = c_custkey and o_orderdate < '1920-01-02'\n"})}),"\n",(0,c.jsxs)(n.p,{children:["\u5728\u5747\u5300\u5206\u5E03\u7684\u5047\u8BBE\u4E0B\uFF0C\u4F18\u5316\u5668\u53EF\u80FD\u4F1A\u8BA4\u4E3A\u7ECF\u8FC7",(0,c.jsx)(n.code,{children:"o_orderdate < '1920-01-02'"}),"\u8FC7\u6EE4\u540E\u8F93\u51FA\u7684\u884C\u6570\u4F1A\u5C11\u4E8E ",(0,c.jsx)(n.code,{children:"customer"})," \u8868\u7684\u884C\u6570\uFF0C\u56E0\u6B64\u9009\u62E9\u4EE5 ",(0,c.jsx)(n.code,{children:"orders"})," \u8868\u4E3A\u57FA\u7840\u6784\u5EFA Hash Table\u3002"]}),"\n",(0,c.jsxs)(n.p,{children:["\u4F46\u662F\uFF0C\u5982\u679C\u5B9E\u9645\u6570\u636E\u5B58\u5728\u503E\u659C\uFF0C\u5BFC\u81F4\u6EE1\u8DB3\u6761\u4EF6\u7684 ",(0,c.jsx)(n.code,{children:"orders"})," \u6570\u91CF\u591A\u4E8E ",(0,c.jsx)(n.code,{children:"customer"})," \u8868\u4E2D\u7684\u6570\u91CF\uFF0C\u90A3\u4E48\u66F4\u5408\u7406\u7684\u9009\u62E9\u5E94\u8BE5\u662F\u4EE5 ",(0,c.jsx)(n.code,{children:"customer"})," \u8868\u4E3A\u57FA\u7840\u6765\u6784\u5EFA Hash Table\u3002"]}),"\n",(0,c.jsx)(n.p,{children:"\u4E3A\u4E86\u4F18\u5316\u67E5\u8BE2\uFF0C\u6211\u4EEC\u9700\u8981\u6839\u636E\u5B9E\u9645\u60C5\u51B5\u8C03\u6574 SQL \u8BED\u53E5\u6216\u63D0\u793A\u4F18\u5316\u5668\u4F7F\u7528\u66F4\u5408\u9002\u7684\u6267\u884C\u8BA1\u5212\u3002"}),"\n",(0,c.jsx)(n.p,{children:"\u6539\u5199 SQL \u5982\u4E0B\uFF1A"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-sql",children:"select /* +leading(orders customer) */ count(1)\nfrom orders, customer \nwhere o_custkey = c_custkey and o_orderdate < '1920-01-02'\n"})})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return s}});var r=t(667294);let c={},i=r.createContext(c);function s(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);