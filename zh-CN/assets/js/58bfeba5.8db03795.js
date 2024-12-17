"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["873961"],{380343:function(n,e,a){a.r(e),a.d(e,{metadata:()=>r,contentTitle:()=>l,default:()=>u,assets:()=>i,toc:()=>o,frontMatter:()=>s});var r=JSON.parse('{"id":"sql-manual/sql-functions/array-functions/array-compact","title":"ARRAY_COMPACY","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/array-functions/array-compact.md","sourceDirName":"sql-manual/sql-functions/array-functions","slug":"/sql-manual/sql-functions/array-functions/array-compact","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/array-functions/array-compact","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"ARRAY_COMPACY","language":"zh-CN"},"sidebar":"docs","previous":{"title":"ARRAY_PUSHBACK","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/array-functions/array-pushback"},"next":{"title":"ARRAY_CONCAT","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/array-functions/array-concat"}}'),c=a("785893"),t=a("250065");let s={title:"ARRAY_COMPACY",language:"zh-CN"},l=void 0,i={},o=[{value:"array_compact",id:"array_compact",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Arguments",id:"arguments",level:4},{value:"Returned value",id:"returned-value",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function d(n){let e={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,t.a)(),...n.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(e.h2,{id:"array_compact",children:"array_compact"}),"\n",(0,c.jsx)(e.p,{children:"array_compact"}),"\n",(0,c.jsx)(e.h3,{id:"description",children:"description"}),"\n",(0,c.jsx)(e.p,{children:"\u4ECE\u6570\u7EC4\u4E2D\u5220\u9664\u8FDE\u7EED\u7684\u91CD\u590D\u5143\u7D20\uFF0C\u7ED3\u679C\u503C\u7684\u987A\u5E8F\u7531\u6E90\u6570\u7EC4\u4E2D\u7684\u987A\u5E8F\u51B3\u5B9A\u3002"}),"\n",(0,c.jsx)(e.h4,{id:"syntax",children:"Syntax"}),"\n",(0,c.jsx)(e.p,{children:(0,c.jsx)(e.code,{children:"Array<T> array_compact(arr)"})}),"\n",(0,c.jsx)(e.h4,{id:"arguments",children:"Arguments"}),"\n",(0,c.jsxs)(e.p,{children:[(0,c.jsx)(e.code,{children:"arr"})," \u2014 \u9700\u8981\u5904\u7406\u7684\u6570\u7EC4\u3002"]}),"\n",(0,c.jsx)(e.h4,{id:"returned-value",children:"Returned value"}),"\n",(0,c.jsx)(e.p,{children:"\u4E0D\u5B58\u5728\u8FDE\u7EED\u91CD\u590D\u5143\u7D20\u7684\u6570\u7EC4\u3002"}),"\n",(0,c.jsx)(e.p,{children:"Type: Array."}),"\n",(0,c.jsx)(e.h3,{id:"example",children:"example"}),"\n",(0,c.jsx)(e.pre,{children:(0,c.jsx)(e.code,{children:"select array_compact([1, 2, 3, 3, null, null, 4, 4]);\n\n+----------------------------------------------------+\n| array_compact(ARRAY(1, 2, 3, 3, NULL, NULL, 4, 4)) |\n+----------------------------------------------------+\n| [1, 2, 3, NULL, 4]                                 |\n+----------------------------------------------------+\n\nselect array_compact(['aaa','aaa','bbb','ccc','ccccc',null, null,'dddd']);\n\n+-------------------------------------------------------------------------------+\n| array_compact(ARRAY('aaa', 'aaa', 'bbb', 'ccc', 'ccccc', NULL, NULL, 'dddd')) |\n+-------------------------------------------------------------------------------+\n| ['aaa', 'bbb', 'ccc', 'ccccc', NULL, 'dddd']                                  |\n+-------------------------------------------------------------------------------+\n\nselect array_compact(['2015-03-13','2015-03-13']);\n\n+--------------------------------------------------+\n| array_compact(ARRAY('2015-03-13', '2015-03-13')) |\n+--------------------------------------------------+\n| ['2015-03-13']                                   |\n+--------------------------------------------------+\n"})}),"\n",(0,c.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,c.jsx)(e.p,{children:"ARRAY,COMPACT,ARRAY_COMPACT"})]})}function u(n={}){let{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,c.jsx)(e,{...n,children:(0,c.jsx)(d,{...n})}):d(n)}},250065:function(n,e,a){a.d(e,{Z:function(){return l},a:function(){return s}});var r=a(667294);let c={},t=r.createContext(c);function s(n){let e=r.useContext(t);return r.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:s(n.components),r.createElement(t.Provider,{value:e},n.children)}}}]);