"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["327494"],{471836:function(e,n,s){s.r(n),s.d(n,{metadata:()=>l,contentTitle:()=>a,default:()=>u,assets:()=>o,toc:()=>c,frontMatter:()=>r});var l=JSON.parse('{"id":"sql-manual/sql-statements/session/variable/SET-VARIABLE","title":"SET VARIABLE","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-statements/session/variable/SET-VARIABLE.md","sourceDirName":"sql-manual/sql-statements/session/variable","slug":"/sql-manual/sql-statements/session/variable/SET-VARIABLE","permalink":"/zh-CN/docs/sql-manual/sql-statements/session/variable/SET-VARIABLE","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"SET VARIABLE","language":"zh-CN"},"sidebar":"docs","previous":{"title":"USE DATABASE","permalink":"/zh-CN/docs/sql-manual/sql-statements/session/context/USE-DATABASE"},"next":{"title":"UNSET VARIABLE","permalink":"/zh-CN/docs/sql-manual/sql-statements/session/variable/UNSET-VARIABLE"}}'),t=s("785893"),i=s("250065");let r={title:"SET VARIABLE",language:"zh-CN"},a=void 0,o={},c=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2},{value:"\u5173\u952E\u8BCD",id:"\u5173\u952E\u8BCD",level:2}];function d(e){let n={blockquote:"blockquote",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,t.jsxs)(n.p,{children:["\u8BE5\u8BED\u53E5\u4E3B\u8981\u662F\u7528\u6765\u4FEE\u6539 Doris \u7CFB\u7EDF\u53D8\u91CF\uFF0C\u8FD9\u4E9B\u7CFB\u7EDF\u53D8\u91CF\u53EF\u4EE5\u5206\u4E3A\u5168\u5C40\u4EE5\u53CA\u4F1A\u8BDD\u7EA7\u522B\u5C42\u9762\u6765\u4FEE\u6539\uFF0C\u6709\u4E9B\u4E5F\u53EF\u4EE5\u8FDB\u884C\u52A8\u6001\u4FEE\u6539\u3002\u4F60\u4E5F\u53EF\u4EE5\u901A\u8FC7 ",(0,t.jsx)(n.code,{children:"SHOW VARIABLE"})," \u6765\u67E5\u770B\u8FD9\u4E9B\u7CFB\u7EDF\u53D8\u91CF\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u8BED\u6CD5\uFF1A"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SET variable_assignment [, variable_assignment] ...\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u8BF4\u660E\uFF1A"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"variable_assignment:\nuser_var_name = expr\n| [GLOBAL | SESSION] system_var_name = expr"}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u6CE8\u610F\uFF1A"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"\u53EA\u6709 ADMIN \u7528\u6237\u53EF\u4EE5\u8BBE\u7F6E\u53D8\u91CF\u7684\u5168\u5C40\u751F\u6548"}),"\n",(0,t.jsx)(n.li,{children:"\u5168\u5C40\u751F\u6548\u7684\u53D8\u91CF\u5F71\u54CD\u5F53\u524D\u4F1A\u8BDD\u548C\u6B64\u540E\u7684\u65B0\u4F1A\u8BDD\uFF0C\u4E0D\u5F71\u54CD\u5F53\u524D\u5DF2\u7ECF\u5B58\u5728\u7684\u5176\u4ED6\u4F1A\u8BDD\u3002"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u8BBE\u7F6E\u65F6\u533A\u4E3A\u4E1C\u516B\u533A"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'SET time_zone = "Asia/Shanghai";\n'})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"\u8BBE\u7F6E\u5168\u5C40\u7684\u6267\u884C\u5185\u5B58\u5927\u5C0F"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"SET GLOBAL exec_mem_limit = 137438953472\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u5173\u952E\u8BCD",children:"\u5173\u952E\u8BCD"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"SET, VARIABLE\n"})})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return r}});var l=s(667294);let t={},i=l.createContext(t);function r(e){let n=l.useContext(i);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),l.createElement(i.Provider,{value:n},e.children)}}}]);