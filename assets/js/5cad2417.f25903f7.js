"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["39971"],{639205:function(e,n,r){r.r(n),r.d(n,{metadata:()=>a,contentTitle:()=>i,default:()=>u,assets:()=>o,toc:()=>c,frontMatter:()=>l});var a=JSON.parse('{"id":"sql-manual/sql-functions/array-functions/arrays-overlap","title":"ARRAYS_OVERLAP","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-functions/array-functions/arrays-overlap.md","sourceDirName":"sql-manual/sql-functions/array-functions","slug":"/sql-manual/sql-functions/array-functions/arrays-overlap","permalink":"/docs/3.0/sql-manual/sql-functions/array-functions/arrays-overlap","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"ARRAYS_OVERLAP","language":"en"},"sidebar":"docs","previous":{"title":"ARRAY_LAST","permalink":"/docs/3.0/sql-manual/sql-functions/array-functions/array-last"},"next":{"title":"ARRAY_COUNT","permalink":"/docs/3.0/sql-manual/sql-functions/array-functions/array-count"}}'),t=r("785893"),s=r("250065");let l={title:"ARRAYS_OVERLAP",language:"en"},i=void 0,o={},c=[{value:"arrays_overlap",id:"arrays_overlap",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function d(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"arrays_overlap",children:"arrays_overlap"}),"\n",(0,t.jsx)(n.p,{children:"arrays_overlap"}),"\n",(0,t.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,t.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"BOOLEAN arrays_overlap(ARRAY<T> left, ARRAY<T> right)"})}),"\n",(0,t.jsx)(n.p,{children:"Check if there is any common element for left and right array. Return below values:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"1    - if any common element inside left and right array;\n0    - if no common element inside left and right array;\nNULL - when left or right array is NULL; OR any element inside left and right array is NULL;\n"})}),"\n",(0,t.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"mysql> select c_left,c_right,arrays_overlap(c_left,c_right) from array_test;\n+--------------+-----------+-------------------------------------+\n| c_left       | c_right   | arrays_overlap(`c_left`, `c_right`) |\n+--------------+-----------+-------------------------------------+\n| [1, 2, 3]    | [3, 4, 5] |                                   1 |\n| [1, 2, 3]    | [5, 6]    |                                   0 |\n| [1, 2, NULL] | [1]       |                                NULL |\n| NULL         | [1, 2]    |                                NULL |\n| [1, 2, 3]    | [1, 2]    |                                   1 |\n+--------------+-----------+-------------------------------------+\n"})}),"\n",(0,t.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,t.jsx)(n.p,{children:"ARRAY,ARRAYS,OVERLAP,ARRAYS_OVERLAP"})]})}function u(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return l}});var a=r(667294);let t={},s=a.createContext(t);function l(e){let n=a.useContext(s);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);