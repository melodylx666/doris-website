"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["625773"],{848756:function(n,t,e){e.r(t),e.d(t,{metadata:()=>i,contentTitle:()=>r,default:()=>c,assets:()=>l,toc:()=>m,frontMatter:()=>a});var i=JSON.parse('{"id":"sql-manual/sql-functions/bitmap-functions/bitmap_not","title":"bitmap_not","description":"\x3c!--","source":"@site/versioned_docs/version-1.2/sql-manual/sql-functions/bitmap-functions/bitmap_not.md","sourceDirName":"sql-manual/sql-functions/bitmap-functions","slug":"/sql-manual/sql-functions/bitmap-functions/bitmap_not","permalink":"/docs/1.2/sql-manual/sql-functions/bitmap-functions/bitmap_not","draft":false,"unlisted":false,"tags":[],"version":"1.2","frontMatter":{"title":"bitmap_not","language":"en"},"sidebar":"docs","previous":{"title":"bitmap_xor","permalink":"/docs/1.2/sql-manual/sql-functions/bitmap-functions/bitmap_xor"},"next":{"title":"bitmap_and_not","permalink":"/docs/1.2/sql-manual/sql-functions/bitmap-functions/bitmap_and_not"}}'),s=e("785893"),o=e("250065");let a={title:"bitmap_not",language:"en"},r=void 0,l={},m=[{value:"bitmap_not",id:"bitmap_not",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function p(n){let t={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"bitmap_not",children:"bitmap_not"}),"\n",(0,s.jsx)(t.h3,{id:"description",children:"description"}),"\n",(0,s.jsx)(t.h4,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"BITMAP BITMAP_NOT(BITMAP lhs, BITMAP rhs)"})}),"\n",(0,s.jsx)(t.p,{children:"Calculate the set after lhs minus rhs, return the new bitmap."}),"\n",(0,s.jsx)(t.h3,{id:"example",children:"example"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"mysql> select bitmap_to_string(bitmap_not(bitmap_from_string('2,3'),bitmap_from_string('1,2,3,4')));\n+----------------------------------------------------------------------------------------+\n| bitmap_to_string(bitmap_not(bitmap_from_string('2,3'), bitmap_from_string('1,2,3,4'))) |\n+----------------------------------------------------------------------------------------+\n|                                                                                        |\n+----------------------------------------------------------------------------------------+\n\nmysql> select bitmap_to_string(bitmap_not(bitmap_from_string('2,3,5'),bitmap_from_string('1,2,3,4')));\n+----------------------------------------------------------------------------------------+\n| bitmap_to_string(bitmap_not(bitmap_from_string('2,3,5'), bitmap_from_string('1,2,3,4'))) |\n+----------------------------------------------------------------------------------------+\n| 5                                                                                      |\n+----------------------------------------------------------------------------------------+\n"})}),"\n",(0,s.jsx)(t.h3,{id:"keywords",children:"keywords"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"BITMAP_NOT,BITMAP\n"})})]})}function c(n={}){let{wrapper:t}={...(0,o.a)(),...n.components};return t?(0,s.jsx)(t,{...n,children:(0,s.jsx)(p,{...n})}):p(n)}},250065:function(n,t,e){e.d(t,{Z:function(){return r},a:function(){return a}});var i=e(667294);let s={},o=i.createContext(s);function a(n){let t=i.useContext(o);return i.useMemo(function(){return"function"==typeof n?n(t):{...t,...n}},[t,n])}function r(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:a(n.components),i.createElement(o.Provider,{value:t},n.children)}}}]);