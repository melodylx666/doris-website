"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["741533"],{800992:function(e,n,r){r.r(n),r.d(n,{metadata:()=>t,contentTitle:()=>o,default:()=>d,assets:()=>l,toc:()=>c,frontMatter:()=>i});var t=JSON.parse('{"id":"sql-manual/sql-functions/aggregate-functions/group-array-intersect","title":"GROUP_ARRAY_INTERSECT","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-functions/aggregate-functions/group-array-intersect.md","sourceDirName":"sql-manual/sql-functions/aggregate-functions","slug":"/sql-manual/sql-functions/aggregate-functions/group-array-intersect","permalink":"/docs/3.0/sql-manual/sql-functions/aggregate-functions/group-array-intersect","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"GROUP_ARRAY_INTERSECT","language":"en"},"sidebar":"docs","previous":{"title":"LINEAR_HISTOGRAM","permalink":"/docs/3.0/sql-manual/sql-functions/aggregate-functions/linear-histogram"},"next":{"title":"GROUP_BITMAP_XOR","permalink":"/docs/3.0/sql-manual/sql-functions/aggregate-functions/group-bitmap-xor"}}'),s=r("785893"),a=r("250065");let i={title:"GROUP_ARRAY_INTERSECT",language:"en"},o=void 0,l={},c=[{value:"group_array_intersect",id:"group_array_intersect",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function u(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"group_array_intersect",children:"group_array_intersect"}),"\n",(0,s.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,s.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"expr GROUP_ARRAY_INTERSECT(expr)"})}),"\n",(0,s.jsx)(n.p,{children:"calculate the intersect element from all arrays given, return a new array"}),"\n",(0,s.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'mysql> select c_array_string from group_array_intersect_test where id in (18, 20);\n+--------------------------------+\n| c_array_string                 |\n+--------------------------------+\n| ["a", "b", "c", "d", "e", "f"] |\n| ["a", null]                    |\n+--------------------------------+\n2 rows in set (0.02 sec)\n\nmysql> select group_array_intersect(c_array_string) from group_array_intersect_test where id in (18, 20);\n+---------------------------------------+\n| group_array_intersect(c_array_string) |\n+---------------------------------------+\n| ["a"]                                 |\n+---------------------------------------+\n1 row in set (0.03 sec)\n'})}),"\n",(0,s.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,s.jsx)(n.p,{children:"GROUP_ARRAY_INTERSECT, ARRAY"})]})}function d(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return o},a:function(){return i}});var t=r(667294);let s={},a=t.createContext(s);function i(e){let n=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);