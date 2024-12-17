"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["591380"],{661727:function(n,e,t){t.r(e),t.d(e,{metadata:()=>i,contentTitle:()=>o,default:()=>p,assets:()=>r,toc:()=>u,frontMatter:()=>l});var i=JSON.parse('{"id":"sql-manual/sql-functions/bitmap-functions/sub-bitmap","title":"SUB_BITMAP","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/bitmap-functions/sub-bitmap.md","sourceDirName":"sql-manual/sql-functions/bitmap-functions","slug":"/sql-manual/sql-functions/bitmap-functions/sub-bitmap","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/bitmap-functions/sub-bitmap","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"SUB_BITMAP","language":"zh-CN"},"sidebar":"docs","previous":{"title":"BITMAP_SUBSET_IN_RANGE","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/bitmap-functions/bitmap-subset-in-range"},"next":{"title":"BITMAP_COUNT","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/bitmap-functions/bitmap-count"}}'),s=t("785893"),a=t("250065");let l={title:"SUB_BITMAP",language:"zh-CN"},o=void 0,r={},u=[{value:"sub_bitmap",id:"sub_bitmap",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function c(n){let e={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"sub_bitmap",children:"sub_bitmap"}),"\n",(0,s.jsx)(e.h3,{id:"description",children:"Description"}),"\n",(0,s.jsx)(e.h4,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.code,{children:"BITMAP SUB_BITMAP(BITMAP src, BIGINT offset, BIGINT cardinality_limit)"})}),"\n",(0,s.jsx)(e.p,{children:"\u4ECE offset \u6307\u5B9A\u4F4D\u7F6E\u5F00\u59CB\uFF0C\u622A\u53D6 cardinality_limit \u4E2A bitmap \u5143\u7D20\uFF0C\u8FD4\u56DE\u4E00\u4E2A bitmap \u5B50\u96C6\u3002"}),"\n",(0,s.jsx)(e.h3,{id:"example",children:"example"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"mysql> select bitmap_to_string(sub_bitmap(bitmap_from_string('1,0,1,2,3,1,5'), 0, 3)) value;\n+-------+\n| value |\n+-------+\n| 0,1,2 |\n+-------+\n\nmysql> select bitmap_to_string(sub_bitmap(bitmap_from_string('1,0,1,2,3,1,5'), -3, 2)) value;\n+-------+\n| value |\n+-------+\n| 2,3   |\n+-------+\n\nmysql> select bitmap_to_string(sub_bitmap(bitmap_from_string('1,0,1,2,3,1,5'), 2, 100)) value;\n+-------+\n| value |\n+-------+\n| 2,3,5 |\n+-------+\n"})}),"\n",(0,s.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"SUB_BITMAP,BITMAP_SUBSET,BITMAP\n"})})]})}function p(n={}){let{wrapper:e}={...(0,a.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(c,{...n})}):c(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return o},a:function(){return l}});var i=t(667294);let s={},a=i.createContext(s);function l(n){let e=i.useContext(a);return i.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:l(n.components),i.createElement(a.Provider,{value:e},n.children)}}}]);