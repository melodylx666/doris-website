"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["670353"],{84287:function(e,n,a){a.r(n),a.d(n,{metadata:()=>r,contentTitle:()=>u,default:()=>d,assets:()=>l,toc:()=>o,frontMatter:()=>i});var r=JSON.parse('{"id":"sql-manual/sql-functions/array-functions/array-enumerate-uniq","title":"ARRAY_ENUMERATE_UNIQ","description":"\x3c!--","source":"@site/docs/sql-manual/sql-functions/array-functions/array-enumerate-uniq.md","sourceDirName":"sql-manual/sql-functions/array-functions","slug":"/sql-manual/sql-functions/array-functions/array-enumerate-uniq","permalink":"/docs/dev/sql-manual/sql-functions/array-functions/array-enumerate-uniq","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"ARRAY_ENUMERATE_UNIQ","language":"en"},"sidebar":"docs","previous":{"title":"ARRAY_ENUMERATE","permalink":"/docs/dev/sql-manual/sql-functions/array-functions/array-enumerate"},"next":{"title":"ARRAY_POPBACK","permalink":"/docs/dev/sql-manual/sql-functions/array-functions/array-popback"}}'),t=a("785893"),s=a("250065");let i={title:"ARRAY_ENUMERATE_UNIQ",language:"en"},u=void 0,l={},o=[{value:"array_enumerate_uniq",id:"array_enumerate_uniq",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function c(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"array_enumerate_uniq",children:"array_enumerate_uniq"}),"\n",(0,t.jsx)(n.p,{children:"array_enumerate_uniq"}),"\n",(0,t.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,t.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"ARRAY<T> array_enumerate_uniq(ARRAY<T> arr)"})}),"\n",(0,t.jsx)(n.p,{children:"Returns an array the same size as the source array, indicating for each element what its position is among elements with the same value. For example, array_enumerate_uniq([1, 2, 1, 4]) = [1, 1, 2, 1].\nThe array_enumerate_uniq function can take multiple arrays of the same size as arguments. In this case, uniqueness is considered for tuples of elements in the same positions in all the arrays. For example, array_enumerate_uniq([1, 2, 1, 1, 2], [2, 1, 2, 2, 1]) = [1, 1, 2, 3, 2]."}),"\n",(0,t.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"mysql> select k2, array_enumerate_uniq([1, 2, 3, 1, 2, 3]);\n+-----------------------------------------------------+\n| array_enumerate_uniq(ARRAY(1, 2, 3, 1, 2, 3))       |\n+-----------------------------------------------------+\n| [1, 1, 1, 2, 2, 2]                                  |\n+-----------------------------------------------------+\nmysql> select array_enumerate_uniq([1, 1, 1, 1, 1], [2, 1, 2, 1, 2], [3, 1, 3, 1, 3]);\n+----------------------------------------------------------------------------------------+\n| array_enumerate_uniq(ARRAY(1, 1, 1, 1, 1), ARRAY(2, 1, 2, 1, 2), ARRAY(3, 1, 3, 1, 3)) |\n+----------------------------------------------------------------------------------------+\n| [1, 1, 2, 1, 3]                                                                        |\n+----------------------------------------------------------------------------------------+\n"})}),"\n",(0,t.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,t.jsx)(n.p,{children:"ARRAY,ENUMERATE_UNIQ,ARRAY_ENUMERATE_UNIQ"})]})}function d(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,n,a){a.d(n,{Z:function(){return u},a:function(){return i}});var r=a(667294);let t={},s=r.createContext(t);function i(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function u(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);