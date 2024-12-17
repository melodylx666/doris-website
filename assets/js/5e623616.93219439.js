"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["952927"],{554870:function(n,e,t){t.r(e),t.d(e,{metadata:()=>s,contentTitle:()=>o,default:()=>u,assets:()=>c,toc:()=>a,frontMatter:()=>l});var s=JSON.parse('{"id":"sql-manual/sql-functions/string-functions/find-in-set","title":"FIND_IN_SET","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/sql-manual/sql-functions/string-functions/find-in-set.md","sourceDirName":"sql-manual/sql-functions/string-functions","slug":"/sql-manual/sql-functions/string-functions/find-in-set","permalink":"/docs/2.0/sql-manual/sql-functions/string-functions/find-in-set","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"FIND_IN_SET","language":"en"},"sidebar":"docs","previous":{"title":"FIELD","permalink":"/docs/2.0/sql-manual/sql-functions/string-functions/field"},"next":{"title":"REPLACE","permalink":"/docs/2.0/sql-manual/sql-functions/string-functions/replace"}}'),i=t("785893"),r=t("250065");let l={title:"FIND_IN_SET",language:"en"},o=void 0,c={},a=[{value:"find_in_set",id:"find_in_set",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function d(n){let e={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"find_in_set",children:"find_in_set"}),"\n",(0,i.jsx)(e.h3,{id:"description",children:"description"}),"\n",(0,i.jsx)(e.h4,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.code,{children:"INT find_in_set(VARCHAR str, VARCHAR strlist)"})}),"\n",(0,i.jsx)(e.p,{children:'"NOT found in set (VARCHAR str., VARCHAR strlist)"'}),"\n",(0,i.jsx)(e.p,{children:"Return to the location where the str first appears in strlist (counting from 1). Strlist is a comma-separated string. If not, return 0. Any parameter is NULL, returning NULL."}),"\n",(0,i.jsx)(e.h3,{id:"example",children:"example"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"mysql> select find_in_set(\"b\", \"a,b,c\");\n+---------------------------+\n| find_in_set('b', 'a,b,c') |\n+---------------------------+\n|                         2 |\n+---------------------------+\n"})}),"\n",(0,i.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"FIND_IN_SET,FIND,IN,SET\n"})})]})}function u(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return o},a:function(){return l}});var s=t(667294);let i={},r=s.createContext(i);function l(n){let e=s.useContext(r);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:l(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);