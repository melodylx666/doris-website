"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["142778"],{484493:function(e,n,r){r.r(n),r.d(n,{metadata:()=>a,contentTitle:()=>i,default:()=>u,assets:()=>c,toc:()=>o,frontMatter:()=>t});var a=JSON.parse('{"id":"sql-manual/sql-functions/array-functions/array-apply","title":"ARRAY_APPLY","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/array-functions/array-apply.md","sourceDirName":"sql-manual/sql-functions/array-functions","slug":"/sql-manual/sql-functions/array-functions/array-apply","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/array-functions/array-apply","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"ARRAY_APPLY","language":"zh-CN"},"sidebar":"docs","previous":{"title":"ARRAY_COUNT","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/array-functions/array-count"},"next":{"title":"COUNTEQUAL","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/array-functions/countequal"}}'),l=r("785893"),s=r("250065");let t={title:"ARRAY_APPLY",language:"zh-CN"},i=void 0,c={},o=[{value:"array_apply",id:"array_apply",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Arguments",id:"arguments",level:4},{value:"Returned value",id:"returned-value",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function d(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"array_apply",children:"array_apply"}),"\n",(0,l.jsx)(n.p,{children:"array_apply"}),"\n",(0,l.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,l.jsx)(n.p,{children:"\u6570\u7EC4\u4EE5\u7279\u5B9A\u7684\u4E8C\u5143\u6761\u4EF6\u7B26\u8FC7\u6EE4\u5143\u7D20\uFF0C \u5E76\u8FD4\u56DE\u8FC7\u6EE4\u540E\u7684\u7ED3\u679C"}),"\n",(0,l.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"array_apply(arr, op, val)\n"})}),"\n",(0,l.jsx)(n.h4,{id:"arguments",children:"Arguments"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"arr"})," \u2014 \u8F93\u5165\u7684\u6570\u7EC4\uFF0C \u5982\u679C\u662Fnull\uFF0C \u5219\u8FD4\u56DEnull\n",(0,l.jsx)(n.code,{children:"op"})," \u2014 \u8FC7\u6EE4\u6761\u4EF6\uFF0C \u6761\u4EF6\u5305\u62EC ",(0,l.jsx)(n.code,{children:"="}),", ",(0,l.jsx)(n.code,{children:">="}),", ",(0,l.jsx)(n.code,{children:"<="}),", ",(0,l.jsx)(n.code,{children:">"}),", ",(0,l.jsx)(n.code,{children:"<"}),", ",(0,l.jsx)(n.code,{children:"!="}),"\uFF0C\u4EC5\u652F\u6301\u5E38\u91CF\n",(0,l.jsx)(n.code,{children:"val"})," \u2014 \u8FC7\u6EE4\u7684\u6761\u4EF6\u503C\uFF0C \u5982\u679C\u662Fnull\uFF0C \u5219\u8FD4\u56DEnull\uFF0C\u4EC5\u652F\u6301\u5E38\u91CF"]}),"\n",(0,l.jsx)(n.h4,{id:"returned-value",children:"Returned value"}),"\n",(0,l.jsx)(n.p,{children:"\u8FC7\u6EE4\u540E\u7684\u6570\u7EC4"}),"\n",(0,l.jsx)(n.p,{children:"\u7C7B\u578B: Array."}),"\n",(0,l.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:'mysql> select array_apply([1, 2, 3, 4, 5], ">=", 2);\n+--------------------------------------------+\n| array_apply(ARRAY(1, 2, 3, 4, 5), \'>=\', 2) |\n+--------------------------------------------+\n| [2, 3, 4, 5]                               |\n+--------------------------------------------+\n1 row in set (0.01 sec)\n\nmysql> select array_apply([1000000, 1000001, 1000002], "=", "1000002");\n+-------------------------------------------------------------+\n| array_apply(ARRAY(1000000, 1000001, 1000002), \'=\', 1000002) |\n+-------------------------------------------------------------+\n| [1000002]                                                   |\n+-------------------------------------------------------------+\n1 row in set (0.01 sec)\n'})}),"\n",(0,l.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,l.jsx)(n.p,{children:"ARRAY,APPLY,ARRAY_APPLY"})]})}function u(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return t}});var a=r(667294);let l={},s=a.createContext(l);function t(e){let n=a.useContext(s);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);