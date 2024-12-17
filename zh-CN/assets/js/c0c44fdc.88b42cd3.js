"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["807524"],{385865:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>r,default:()=>u,assets:()=>c,toc:()=>d,frontMatter:()=>i});var s=JSON.parse('{"id":"sql-manual/sql-reference/Database-Administration-Statements/ADMIN-SET-REPLICA-STATUS","title":"ADMIN-SET-REPLICA-STATUS","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-SET-REPLICA-STATUS.md","sourceDirName":"sql-manual/sql-reference/Database-Administration-Statements","slug":"/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-SET-REPLICA-STATUS","permalink":"/zh-CN/docs/1.2/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-SET-REPLICA-STATUS","draft":false,"unlisted":false,"tags":[],"version":"1.2","frontMatter":{"title":"ADMIN-SET-REPLICA-STATUS","language":"zh-CN"},"sidebar":"docs","previous":{"title":"UNINSTALL-PLUGIN","permalink":"/zh-CN/docs/1.2/sql-manual/sql-reference/Database-Administration-Statements/UNINSTALL-PLUGIN"},"next":{"title":"ADMIN-SHOW-REPLICA-DISTRIBUTION","permalink":"/zh-CN/docs/1.2/sql-manual/sql-reference/Database-Administration-Statements/ADMIN-SHOW-REPLICA-DISTRIBUTION"}}'),a=t("785893"),l=t("250065");let i={title:"ADMIN-SET-REPLICA-STATUS",language:"zh-CN"},r=void 0,c={},d=[{value:"ADMIN-SET-REPLICA-STATUS",id:"admin-set-replica-status",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}];function o(e){let n={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"admin-set-replica-status",children:"ADMIN-SET-REPLICA-STATUS"}),"\n",(0,a.jsx)(n.h3,{id:"name",children:"Name"}),"\n",(0,a.jsx)(n.p,{children:"ADMIN SET REPLICA STATUS"}),"\n",(0,a.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,a.jsx)(n.p,{children:"\u8BE5\u8BED\u53E5\u7528\u4E8E\u8BBE\u7F6E\u6307\u5B9A\u526F\u672C\u7684\u72B6\u6001\u3002"}),"\n",(0,a.jsx)(n.p,{children:"\u8BE5\u547D\u4EE4\u76EE\u524D\u4EC5\u7528\u4E8E\u624B\u52A8\u5C06\u67D0\u4E9B\u526F\u672C\u72B6\u6001\u8BBE\u7F6E\u4E3A BAD \u6216 OK\uFF0C\u4ECE\u800C\u4F7F\u5F97\u7CFB\u7EDF\u80FD\u591F\u81EA\u52A8\u4FEE\u590D\u8FD9\u4E9B\u526F\u672C"}),"\n",(0,a.jsx)(n.p,{children:"\u8BED\u6CD5\uFF1A"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'ADMIN SET REPLICA STATUS\n        PROPERTIES ("key" = "value", ...);\n'})}),"\n",(0,a.jsx)(n.p,{children:"\u76EE\u524D\u652F\u6301\u5982\u4E0B\u5C5E\u6027\uFF1A"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:'"tablet_id"\uFF1A\u5FC5\u9700\u3002\u6307\u5B9A\u4E00\u4E2A Tablet Id.'}),"\n",(0,a.jsx)(n.li,{children:'"backend_id"\uFF1A\u5FC5\u9700\u3002\u6307\u5B9A Backend Id.'}),"\n",(0,a.jsx)(n.li,{children:'"status"\uFF1A\u5FC5\u9700\u3002\u6307\u5B9A\u72B6\u6001\u3002\u5F53\u524D\u4EC5\u652F\u6301 "bad" \u6216 "ok"'}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"\u5982\u679C\u6307\u5B9A\u7684\u526F\u672C\u4E0D\u5B58\u5728\uFF0C\u6216\u72B6\u6001\u5DF2\u7ECF\u662F bad\uFF0C\u5219\u4F1A\u88AB\u5FFD\u7565\u3002"}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsx)(n.p,{children:"\u6CE8\u610F\uFF1A"}),"\n",(0,a.jsx)(n.p,{children:"\u8BBE\u7F6E\u4E3A Bad \u72B6\u6001\u7684\u526F\u672C\u53EF\u80FD\u7ACB\u523B\u88AB\u5220\u9664\uFF0C\u8BF7\u8C28\u614E\u64CD\u4F5C\u3002"}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"\u8BBE\u7F6E tablet 10003 \u5728 BE 10001 \u4E0A\u7684\u526F\u672C\u72B6\u6001\u4E3A bad\u3002"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'ADMIN SET REPLICA STATUS PROPERTIES("tablet_id" = "10003", "backend_id" = "10001", "status" = "bad");\n'})}),"\n",(0,a.jsxs)(n.ol,{start:"2",children:["\n",(0,a.jsx)(n.li,{children:"\u8BBE\u7F6E tablet 10003 \u5728 BE 10001 \u4E0A\u7684\u526F\u672C\u72B6\u6001\u4E3A ok\u3002"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'ADMIN SET REPLICA STATUS PROPERTIES("tablet_id" = "10003", "backend_id" = "10001", "status" = "ok");\n'})}),"\n",(0,a.jsx)(n.h3,{id:"keywords",children:"Keywords"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"ADMIN, SET, REPLICA, STATUS\n"})}),"\n",(0,a.jsx)(n.h3,{id:"best-practice",children:"Best Practice"})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return i}});var s=t(667294);let a={},l=s.createContext(a);function i(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);