"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["242418"],{308478:function(t,e,n){n.r(e),n.d(e,{metadata:()=>l,contentTitle:()=>r,default:()=>j,assets:()=>x,toc:()=>c,frontMatter:()=>d});var l=JSON.parse('{"id":"admin-manual/system-tables/internal_schema/audit_log","title":"audit_log","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/admin-manual/system-tables/internal_schema/audit_log.md","sourceDirName":"admin-manual/system-tables/internal_schema","slug":"/admin-manual/system-tables/internal_schema/audit_log","permalink":"/zh-CN/docs/dev/admin-manual/system-tables/internal_schema/audit_log","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"audit_log","language":"zh-CN"},"sidebar":"docs","previous":{"title":"user","permalink":"/zh-CN/docs/dev/admin-manual/system-tables/mysql/user"},"next":{"title":"column_statistics","permalink":"/zh-CN/docs/dev/admin-manual/system-tables/internal_schema/column_statistics"}}'),s=n("785893"),i=n("250065");let d={title:"audit_log",language:"zh-CN"},r=void 0,x={},c=[{value:"\u6982\u8FF0",id:"\u6982\u8FF0",level:2},{value:"\u6240\u5C5E\u6570\u636E\u5E93",id:"\u6240\u5C5E\u6570\u636E\u5E93",level:2},{value:"\u8868\u4FE1\u606F",id:"\u8868\u4FE1\u606F",level:2},{value:"\u8BF4\u660E",id:"\u8BF4\u660E",level:2}];function h(t){let e={code:"code",h2:"h2",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"\u6982\u8FF0",children:"\u6982\u8FF0"}),"\n",(0,s.jsx)(e.p,{children:"\u5B58\u50A8\u5BA1\u8BA1\u65E5\u5FD7"}),"\n",(0,s.jsx)(e.h2,{id:"\u6240\u5C5E\u6570\u636E\u5E93",children:"\u6240\u5C5E\u6570\u636E\u5E93"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.code,{children:"__internal_schema"})}),"\n",(0,s.jsx)(e.h2,{id:"\u8868\u4FE1\u606F",children:"\u8868\u4FE1\u606F"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{style:{textAlign:"left"},children:"\u5217\u540D"}),(0,s.jsx)(e.th,{style:{textAlign:"left"},children:"\u7C7B\u578B"}),(0,s.jsx)(e.th,{style:{textAlign:"left"},children:"\u8BF4\u660E"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"query_id"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"varchar(48)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"Query \u7684 ID\u3002"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"time"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"datetime(3)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"\u67E5\u8BE2\u53D1\u751F\u7684\u65F6\u95F4\u3002"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"client_ip"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"varchar(128)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"\u53D1\u9001\u67E5\u8BE2\u7684\u5BA2\u6237\u7AEF IP"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"user"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"varchar(128)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"\u7528\u6237"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"catalog"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"varchar(128)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"\u8BED\u53E5\u6267\u884C\u65F6\u7684\u5F53\u524D Catalog"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"db"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"varchar(128)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"\u8BED\u53E5\u6267\u884C\u65F6\u7684\u5F53\u524D Database"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"state"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"varchar(128)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"\u8BED\u53E5\u6267\u884C\u72B6\u6001"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"error_code"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"int"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"\u9519\u8BEF\u7801"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"error_message"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"text"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"\u9519\u8BEF\u4FE1\u606F"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"query_time"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"bigint"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"\u8BED\u53E5\u6267\u884C\u65F6\u95F4\u3002\u5355\u4F4D\u4E3A\u6BEB\u79D2\u3002"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"scan_bytes"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"bigint"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"\u626B\u63CF\u7684\u6570\u636E\u91CF\u3002"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"scan_rows"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"bigint"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"\u626B\u63CF\u884C\u6570"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"return_rows"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"bigint"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"\u8FD4\u56DE\u7684\u884C\u6570"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"shuffleSendRows"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"bigint"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"\u8BED\u53E5\u6267\u884C\u8FC7\u7A0B\u4E2D\uFF0C\u8282\u70B9\u95F4\u4F20\u8F93\u7684\u884C\u6570\u30023.0 \u7248\u672C\u5F00\u59CB\u652F\u6301\u3002"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"shuffleSendBytes"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"bigint"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"\u8BED\u53E5\u6267\u884C\u8FC7\u7A0B\u4E2D\uFF0C\u8282\u70B9\u95F4\u4F20\u8F93\u7684\u6570\u636E\u91CF\u30023.0 \u7248\u672C\u5F00\u59CB\u652F\u6301\u3002"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"scanBytesFromLocalStorage"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"bigint"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"\u4ECE\u672C\u5730\u78C1\u76D8\u8BFB\u53D6\u7684\u6570\u636E\u91CF\u30023.0 \u7248\u672C\u5F00\u59CB\u652F\u6301\u3002"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"scanBytesFromRemoteStorage"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"bigint"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"\u4ECE\u8FDC\u7AEF\u5B58\u50A8\u8BFB\u53D6\u7684\u6570\u636E\u91CF\u30023.0 \u7248\u672C\u5F00\u59CB\u652F\u6301\u3002"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"stmt_id"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"bigint"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"\u8BED\u53E5 ID"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"stmt_type"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"string"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"\u8BED\u53E5\u7C7B\u578B\u30023.0 \u7248\u672C\u5F00\u59CB\u652F\u6301\u3002"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"is_query"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"tinyint"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"\u662F\u5426\u662F\u67E5\u8BE2"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"is_nereids"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"booean"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"\u662F\u5426\u4F7F\u7528\u4E86\u65B0\u4F18\u5316\u5668"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"frontend_ip"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"varchar(128)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"\u8FDE\u63A5\u7684 Frontend \u7684 IP"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"cpu_time_ms"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"bigint"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"\u8BED\u53E5\u6267\u884C\u6D88\u8017 Backend \u7684\u7D2F\u8BA1 CPU \u6BEB\u79D2\u6570"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"sql_hash"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"varchar(128)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"\u8BED\u53E5\u7684 Hash \u503C"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"sql_digest"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"varchar(128)"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"\u8BED\u53E5\u7684\u7B7E\u540D"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"peak_memory_bytes"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"bigint"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"\u8BED\u53E5\u6267\u884C\u6240\u5360\u7528\u7684 Backend \u5185\u5B58\u7684\u5CF0\u503C"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"workload_group"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"text"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"\u8BED\u53E5\u6267\u884C\u6240\u4F7F\u7528\u7684 Workload Group"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"compute_group"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"string"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"\u5B58\u7B97\u5206\u79BB\u6A21\u5F0F\u4E0B\uFF0C\u6267\u884C\u8BED\u53E5\u6240\u4F7F\u7528\u7684\u8BA1\u7B97\u7EC4\u30023.0 \u7248\u672C\u5F00\u59CB\u652F\u6301\u3002"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"trace_id"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"string"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"\u6267\u884C\u8BED\u53E5\u65F6\u8BBE\u7F6E\u7684 Trace ID"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"stmt"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"text"}),(0,s.jsx)(e.td,{style:{textAlign:"left"},children:"\u8BED\u53E5\u6587\u672C"})]})]})]}),"\n",(0,s.jsx)(e.h2,{id:"\u8BF4\u660E",children:"\u8BF4\u660E"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"client_ip"}),"\uFF1A\u5982\u679C\u4F7F\u7528\u4E86\u4EE3\u7406\u670D\u52A1\uFF0C\u5E76\u4E14\u6CA1\u6709\u5F00\u542F IP \u900F\u4F20\u529F\u80FD\uFF0C\u5219\u8FD9\u91CC\u53EF\u80FD\u8BB0\u5F55\u7684\u662F\u4EE3\u7406\u670D\u52A1\u7684 IP \u800C\u4E0D\u662F\u771F\u5B9E\u5BA2\u6237\u7AEF IP\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"state"}),"\uFF1A",(0,s.jsx)(e.code,{children:"EOF"})," \u8868\u793A\u67E5\u8BE2\u6267\u884C\u6210\u529F\u3002",(0,s.jsx)(e.code,{children:"OK"})," \u8868\u793A DDL\u3001DML\u8BED\u53E5\u6267\u884C\u6210\u529F\u3002",(0,s.jsx)(e.code,{children:"ERR"})," \u8868\u793A\u8BED\u53E5\u6267\u884C\u5931\u8D25\u3002"]}),"\n"]})]})}function j(t={}){let{wrapper:e}={...(0,i.a)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(h,{...t})}):h(t)}},250065:function(t,e,n){n.d(e,{Z:function(){return r},a:function(){return d}});var l=n(667294);let s={},i=l.createContext(s);function d(t){let e=l.useContext(i);return l.useMemo(function(){return"function"==typeof t?t(e):{...e,...t}},[e,t])}function r(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:d(t.components),l.createElement(i.Provider,{value:e},t.children)}}}]);