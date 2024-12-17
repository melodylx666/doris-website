"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["498034"],{70138:function(e,n,t){t.r(n),t.d(n,{metadata:()=>a,contentTitle:()=>d,default:()=>u,assets:()=>c,toc:()=>o,frontMatter:()=>r});var a=JSON.parse('{"id":"admin-manual/data-admin/repairing-data","title":"\u6570\u636E\u4FEE\u590D","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/admin-manual/data-admin/repairing-data.md","sourceDirName":"admin-manual/data-admin","slug":"/admin-manual/data-admin/repairing-data","permalink":"/zh-CN/docs/dev/admin-manual/data-admin/repairing-data","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"\u6570\u636E\u4FEE\u590D","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u4ECE\u56DE\u6536\u7AD9\u6062\u590D","permalink":"/zh-CN/docs/dev/admin-manual/data-admin/recyclebin"},"next":{"title":"Workload Group","permalink":"/zh-CN/docs/dev/admin-manual/resource-admin/workload-group"}}'),i=t("785893"),l=t("250065");let r={title:"\u6570\u636E\u4FEE\u590D",language:"zh-CN"},d=void 0,c={},o=[{value:"\u7B80\u8981\u539F\u7406\u8BF4\u660E",id:"\u7B80\u8981\u539F\u7406\u8BF4\u660E",level:2},{value:"\u4F7F\u7528\u8BF4\u660E",id:"\u4F7F\u7528\u8BF4\u660E",level:2},{value:"\u4F7F\u7528\u4F8B\u5B50",id:"\u4F7F\u7528\u4F8B\u5B50",level:2}];function s(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"\u5BF9\u4E8E Unique Key Merge on Write \u8868\uFF0C\u5728\u67D0\u4E9B Doris \u7684\u7248\u672C\u4E2D\u5B58\u5728 Bug\uFF0C\u53EF\u80FD\u4F1A\u5BFC\u81F4\u7CFB\u7EDF\u5728\u8BA1\u7B97 Delete Bitmap \u65F6\u51FA\u73B0\u9519\u8BEF\uFF0C\u5BFC\u81F4\u51FA\u73B0\u91CD\u590D\u4E3B\u952E\uFF0C\u6B64\u65F6\u53EF\u4EE5\u5229\u7528 Full Compaction \u529F\u80FD\u8FDB\u884C\u6570\u636E\u7684\u4FEE\u590D\u3002\u672C\u529F\u80FD\u5BF9\u4E8E\u975E Unique Key Merge on Write \u8868\u65E0\u6548\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u8BE5\u529F\u80FD\u9700\u8981 Doris \u7248\u672C 2.0+\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u4F7F\u7528\u8BE5\u529F\u80FD\uFF0C\u9700\u8981\u5C3D\u53EF\u80FD\u505C\u6B62\u5BFC\u5165\uFF0C\u5426\u5219\u53EF\u80FD\u4F1A\u51FA\u73B0\u5BFC\u5165\u8D85\u65F6\u7B49\u95EE\u9898\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u7B80\u8981\u539F\u7406\u8BF4\u660E",children:"\u7B80\u8981\u539F\u7406\u8BF4\u660E"}),"\n",(0,i.jsx)(n.p,{children:"\u6267\u884C Full Compaction \u540E\uFF0C\u4F1A\u5BF9 Delete Bitmap \u8FDB\u884C\u91CD\u65B0\u8BA1\u7B97\uFF0C\u5C06\u9519\u8BEF\u7684 Delete Bitmap \u6570\u636E\u5220\u9664\uFF0C\u4EE5\u5B8C\u6210\u6570\u636E\u7684\u4FEE\u590D\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u4F7F\u7528\u8BF4\u660E",children:"\u4F7F\u7528\u8BF4\u660E"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"POST /api/compaction/run?tablet_id={int}&compact_type=full"})}),"\n",(0,i.jsx)(n.p,{children:"\u6216"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"POST /api/compaction/run?table_id={int}&compact_type=full"})}),"\n",(0,i.jsxs)(n.p,{children:["\u6CE8\u610F\uFF0C",(0,i.jsx)(n.code,{children:"tablet_id"})," \u548C ",(0,i.jsx)(n.code,{children:"table_id"})," \u53EA\u80FD\u6307\u5B9A\u4E00\u4E2A\uFF0C\u4E0D\u80FD\u591F\u540C\u65F6\u6307\u5B9A\uFF0C\u6307\u5B9A ",(0,i.jsx)(n.code,{children:"table_id"})," \u540E\u4F1A\u81EA\u52A8\u5BF9\u6B64 table \u4E0B\u6240\u6709 tablet \u6267\u884C ",(0,i.jsx)(n.code,{children:"full_compaction"}),"\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u4F7F\u7528\u4F8B\u5B50",children:"\u4F7F\u7528\u4F8B\u5B50"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:'curl -X POST "http://127.0.0.1:8040/api/compaction/run?tablet_id=10015&compact_type=full"\ncurl -X POST "http://127.0.0.1:8040/api/compaction/run?table_id=10104&compact_type=full"\n'})})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(s,{...e})}):s(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return r}});var a=t(667294);let i={},l=a.createContext(i);function r(e){let n=a.useContext(l);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);