"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["650290"],{80316:function(e,n,i){i.r(n),i.d(n,{metadata:()=>s,contentTitle:()=>d,default:()=>h,assets:()=>t,toc:()=>o,frontMatter:()=>c});var s=JSON.parse('{"id":"sql-manual/sql-data-types/numeric/DECIMAL","title":"DECIMAL","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-data-types/numeric/DECIMAL.md","sourceDirName":"sql-manual/sql-data-types/numeric","slug":"/sql-manual/sql-data-types/numeric/DECIMAL","permalink":"/zh-CN/docs/3.0/sql-manual/sql-data-types/numeric/DECIMAL","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"DECIMAL","language":"zh-CN"},"sidebar":"docs","previous":{"title":"DOUBLE","permalink":"/zh-CN/docs/3.0/sql-manual/sql-data-types/numeric/DOUBLE"},"next":{"title":"DATE","permalink":"/zh-CN/docs/3.0/sql-manual/sql-data-types/date-time/DATE"}}'),l=i("785893"),r=i("250065");let c={title:"DECIMAL",language:"zh-CN"},d=void 0,t={},o=[{value:"DECIMAL",id:"decimal",level:2},{value:"description",id:"description",level:3},{value:"\u7CBE\u5EA6\u63A8\u6F14",id:"\u7CBE\u5EA6\u63A8\u6F14",level:3},{value:"\u56DB\u5219\u8FD0\u7B97",id:"\u56DB\u5219\u8FD0\u7B97",level:4},{value:"\u805A\u5408\u8FD0\u7B97",id:"\u805A\u5408\u8FD0\u7B97",level:4},{value:"\u9ED8\u8BA4\u89C4\u5219",id:"\u9ED8\u8BA4\u89C4\u5219",level:4},{value:"\u8C03\u6574\u7ED3\u679C\u7CBE\u5EA6",id:"\u8C03\u6574\u7ED3\u679C\u7CBE\u5EA6",level:4},{value:"\u4E3A\u4EC0\u4E48\u9700\u8981DECIMAL",id:"\u4E3A\u4EC0\u4E48\u9700\u8981decimal",level:3},{value:"keywords",id:"keywords",level:3}];function a(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"decimal",children:"DECIMAL"}),"\n",(0,l.jsx)(n.p,{children:"DECIMAL"}),"\n",(0,l.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"DECIMAL(M[,D])\n\u9AD8\u7CBE\u5EA6\u5B9A\u70B9\u6570\uFF0CM \u4EE3\u8868\u4E00\u5171\u6709\u591A\u5C11\u4E2A\u6709\u6548\u6570\u5B57(precision)\uFF0CD \u4EE3\u8868\u5C0F\u6570\u4F4D\u6709\u591A\u5C11\u6570\u5B57(scale)\uFF0C\n\u6709\u6548\u6570\u5B57 M \u7684\u8303\u56F4\u662F [1, 38]\uFF0C\u5C0F\u6570\u4F4D\u6570\u5B57\u6570\u91CF D \u7684\u8303\u56F4\u662F [0, precision]\u3002\n\n\u9ED8\u8BA4\u503C\u4E3A DECIMAL(9, 0)\u3002\n"})}),"\n",(0,l.jsx)(n.h3,{id:"\u7CBE\u5EA6\u63A8\u6F14",children:"\u7CBE\u5EA6\u63A8\u6F14"}),"\n",(0,l.jsx)(n.p,{children:"DECIMAL\u6709\u4E00\u5957\u5F88\u590D\u6742\u7684\u7C7B\u578B\u63A8\u6F14\u89C4\u5219\uFF0C\u9488\u5BF9\u4E0D\u540C\u7684\u8868\u8FBE\u5F0F\uFF0C\u4F1A\u5E94\u7528\u4E0D\u540C\u89C4\u5219\u8FDB\u884C\u7CBE\u5EA6\u63A8\u65AD\u3002"}),"\n",(0,l.jsx)(n.h4,{id:"\u56DB\u5219\u8FD0\u7B97",children:"\u56DB\u5219\u8FD0\u7B97"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u52A0\u6CD5 / \u51CF\u6CD5\uFF1ADECIMAL(a, b) + DECIMAL(x, y) -> DECIMAL(max(a - b, x - y) + max(b, y) + 1, max(b, y))\u3002"}),"\n",(0,l.jsx)(n.li,{children:"\u4E58\u6CD5\uFF1ADECIMAL(a, b) + DECIMAL(x, y) -> DECIMAL(a + x, b + y)\u3002"}),"\n",(0,l.jsx)(n.li,{children:"\u9664\u6CD5\uFF1ADECIMAL(p1, s1) + DECIMAL(p2, s2) -> DECIMAL(p1 + s2 + div_precision_increment, s1 + div_precision_increment)\u3002div_precision_increment \u9ED8\u8BA4\u4E3A4\u3002\n\u503C\u5F97\u6CE8\u610F\u7684\u662F\uFF0C\u9664\u6CD5\u8BA1\u7B97\u7684\u8FC7\u7A0B\u662F\nDECIMAL(p1, s1) / DECIMAL(p2, s2) \u5148\u8F6C\u6362\u6210 DECIMAL(p1 + s2 + div_precision_increment, s1 + s2 ) /  DECIMAL(p2, s2)  \u7136\u540E\u518D\u8FDB\u884C\u8BA1\u7B97\uFF0C\u6240\u4EE5\u53EF\u80FD\u4F1A\u51FA\u73B0\nDECIMAL(p1 + s2 + div_precision_increment, s1 + div_precision_increment) \u662F\u6EE1\u8DB3DECIMAL\u7684\u8303\u56F4\uFF0C\u4F46\u662F\u7531\u4E8E\u5148\u8F6C\u6362\u6210\u4E86DECIMAL(p1 + s2 + div_precision_increment, s1 + s2 )\n\u5BFC\u81F4\u8D85\u51FA\u8303\u56F4\uFF0C\u76EE\u524DDoris\u7684\u5904\u7406\u662F\u8F6C\u6210Double\u8FDB\u884C\u8BA1\u7B97"}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"\u805A\u5408\u8FD0\u7B97",children:"\u805A\u5408\u8FD0\u7B97"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"SUM / MULTI_DISTINCT_SUM\uFF1ASUM(DECIMAL(a, b)) -> DECIMAL(38, b)\u3002"}),"\n",(0,l.jsx)(n.li,{children:"AVG\uFF1AAVG(DECIMAL(a, b)) -> DECIMAL(38, max(b, 4))\u3002"}),"\n"]}),"\n",(0,l.jsx)(n.h4,{id:"\u9ED8\u8BA4\u89C4\u5219",children:"\u9ED8\u8BA4\u89C4\u5219"}),"\n",(0,l.jsxs)(n.p,{children:["\u9664\u4E0A\u8FF0\u63D0\u5230\u7684\u51FD\u6570\u5916\uFF0C\u5176\u4F59\u8868\u8FBE\u5F0F\u90FD\u4F7F\u7528\u9ED8\u8BA4\u89C4\u5219\u8FDB\u884C\u7CBE\u5EA6\u63A8\u6F14\u3002\u5373\u5BF9\u4E8E\u8868\u8FBE\u5F0F ",(0,l.jsx)(n.code,{children:"expr(DECIMAL(a, b))"}),"\uFF0C\u7ED3\u679C\u7C7B\u578B\u540C\u6837\u4E5F\u662FDECIMAL(a, b)\u3002"]}),"\n",(0,l.jsx)(n.h4,{id:"\u8C03\u6574\u7ED3\u679C\u7CBE\u5EA6",children:"\u8C03\u6574\u7ED3\u679C\u7CBE\u5EA6"}),"\n",(0,l.jsxs)(n.p,{children:["\u4E0D\u540C\u7528\u6237\u5BF9DECIMAL\u7684\u7CBE\u5EA6\u8981\u6C42\u5404\u4E0D\u76F8\u540C\uFF0C\u4E0A\u8FF0\u89C4\u5219\u4E3A\u5F53\u524DDoris\u7684\u9ED8\u8BA4\u884C\u4E3A\uFF0C\u5982\u679C\u7528\u6237",(0,l.jsx)(n.strong,{children:"\u6709\u4E0D\u540C\u7684\u7CBE\u5EA6\u9700\u6C42\uFF0C\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u8FDB\u884C\u7CBE\u5EA6\u8C03\u6574"}),"\uFF1A"]}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\u5982\u679C\u671F\u671B\u7684\u7ED3\u679C\u7CBE\u5EA6\u5927\u4E8E\u9ED8\u8BA4\u7CBE\u5EA6\uFF0C\u53EF\u4EE5\u901A\u8FC7\u8C03\u6574\u5165\u53C2\u7CBE\u5EA6\u6765\u8C03\u6574\u7ED3\u679C\u7CBE\u5EA6\u3002\u4F8B\u5982\u7528\u6237\u671F\u671B\u8BA1\u7B97",(0,l.jsx)(n.code,{children:"AVG(col)"}),"\u5F97\u5230DECIMAL(x, y)\u4F5C\u4E3A\u7ED3\u679C\uFF0C\u5176\u4E2D",(0,l.jsx)(n.code,{children:"col"}),"\u7684\u7C7B\u578B\u4E3ADECIMAL(a, b)\uFF0C\u5219\u53EF\u4EE5\u6539\u5199\u8868\u8FBE\u5F0F\u4E3A",(0,l.jsx)(n.code,{children:"AVG(CAST(col as DECIMAL(x, y)))"}),"\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:["\u5982\u679C\u671F\u671B\u7684\u7ED3\u679C\u7CBE\u5EA6\u5C0F\u4E8E\u9ED8\u8BA4\u7CBE\u5EA6\uFF0C\u53EF\u4EE5\u901A\u8FC7\u5BF9\u8F93\u51FA\u7ED3\u679C\u6C42\u8FD1\u4F3C\u5F97\u5230\u60F3\u8981\u7684\u7CBE\u5EA6\u3002\u4F8B\u5982\u7528\u6237\u671F\u671B\u8BA1\u7B97",(0,l.jsx)(n.code,{children:"AVG(col)"}),"\u5F97\u5230DECIMAL(x, y)\u4F5C\u4E3A\u7ED3\u679C\uFF0C\u5176\u4E2D",(0,l.jsx)(n.code,{children:"col"}),"\u7684\u7C7B\u578B\u4E3ADECIMAL(a, b)\uFF0C\u5219\u53EF\u4EE5\u6539\u5199\u8868\u8FBE\u5F0F\u4E3A",(0,l.jsx)(n.code,{children:"ROUND(AVG(col), y)"}),"\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"\u4E3A\u4EC0\u4E48\u9700\u8981decimal",children:"\u4E3A\u4EC0\u4E48\u9700\u8981DECIMAL"}),"\n",(0,l.jsx)(n.p,{children:"Doris\u4E2D\u7684DECIMAL\u662F\u771F\u6B63\u610F\u4E49\u4E0A\u7684\u9AD8\u7CBE\u5EA6\u5B9A\u70B9\u6570\uFF0CDecimal\u6709\u4EE5\u4E0B\u6838\u5FC3\u4F18\u52BF\uFF1A"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"\u53EF\u8868\u793A\u8303\u56F4\u66F4\u5927\u3002DECIMAL\u4E2Dprecision\u548Cscale\u7684\u53D6\u503C\u8303\u56F4\u90FD\u8FDB\u884C\u4E86\u660E\u663E\u6269\u5145\u3002"}),"\n",(0,l.jsx)(n.li,{children:"\u6027\u80FD\u66F4\u9AD8\u3002\u8001\u7248\u672C\u7684DECIMAL\u5728\u5185\u5B58\u4E2D\u9700\u8981\u5360\u752816 bytes\uFF0C\u5728\u5B58\u50A8\u4E2D\u5360\u752812 bytes\uFF0C\u800CDECIMAL\u8FDB\u884C\u4E86\u81EA\u9002\u5E94\u8C03\u6574\uFF08\u5982\u4E0B\u8868\u683C\uFF09\u3002"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"+----------------------+-------------------+\n|     precision        | \u5360\u7528\u7A7A\u95F4\uFF08\u5185\u5B58/\u78C1\u76D8\uFF09|\n+----------------------+-------------------+\n| 0 < precision <= 9   |      4 bytes      |\n+----------------------+-------------------+\n| 9 < precision <= 18  |      8 bytes      |\n+----------------------+-------------------+\n| 18 < precision <= 38 |     16 bytes      |\n+----------------------+-------------------+\n"})}),"\n",(0,l.jsxs)(n.ol,{start:"3",children:["\n",(0,l.jsx)(n.li,{children:"\u66F4\u5B8C\u5907\u7684\u7CBE\u5EA6\u63A8\u6F14\u3002\u5BF9\u4E8E\u4E0D\u540C\u7684\u8868\u8FBE\u5F0F\uFF0C\u5E94\u7528\u4E0D\u540C\u7684\u7CBE\u5EA6\u63A8\u6F14\u89C4\u5219\u5BF9\u7ED3\u679C\u7684\u7CBE\u5EA6\u8FDB\u884C\u63A8\u6F14\u3002"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"DECIMAL\n"})})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return d},a:function(){return c}});var s=i(667294);let l={},r=s.createContext(l);function c(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);