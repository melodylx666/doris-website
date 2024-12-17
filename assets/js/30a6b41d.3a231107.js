"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["352904"],{372838:function(e,t,n){n.r(t),n.d(t,{metadata:()=>i,contentTitle:()=>o,default:()=>m,assets:()=>r,toc:()=>p,frontMatter:()=>l});var i=JSON.parse('{"id":"sql-manual/sql-functions/bitmap-functions/bitmap-empty","title":"BITMAP_EMPTY","description":"\x3c!--","source":"@site/docs/sql-manual/sql-functions/bitmap-functions/bitmap-empty.md","sourceDirName":"sql-manual/sql-functions/bitmap-functions","slug":"/sql-manual/sql-functions/bitmap-functions/bitmap-empty","permalink":"/docs/dev/sql-manual/sql-functions/bitmap-functions/bitmap-empty","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"BITMAP_EMPTY","language":"en"},"sidebar":"docs","previous":{"title":"BITMAP_FROM_ARRAY","permalink":"/docs/dev/sql-manual/sql-functions/bitmap-functions/bitmap-from-array"},"next":{"title":"BITMAP_OR","permalink":"/docs/dev/sql-manual/sql-functions/bitmap-functions/bitmap-or"}}'),s=n("785893"),a=n("250065");let l={title:"BITMAP_EMPTY",language:"en"},o=void 0,r={},p=[{value:"bitmap_empty",id:"bitmap_empty",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function c(e){let t={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"bitmap_empty",children:"bitmap_empty"}),"\n",(0,s.jsx)(t.h3,{id:"description",children:"description"}),"\n",(0,s.jsx)(t.h4,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"BITMAP BITMAP_EMPTY()"})}),"\n",(0,s.jsx)(t.p,{children:"Return an empty bitmap. Mainly be used to supply default value for bitmap column when loading, e.g.,"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'cat data | curl --location-trusted -u user:passwd -T - -H "columns: dt,page,v1,v2=bitmap_empty()"   http://host:8410/api/test/testDb/_stream_load\n'})}),"\n",(0,s.jsx)(t.h3,{id:"example",children:"example"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"mysql> select bitmap_count(bitmap_empty());\n+------------------------------+\n| bitmap_count(bitmap_empty()) |\n+------------------------------+\n|                            0 |\n+------------------------------+\n\nmysql> select bitmap_to_string(bitmap_empty());\n+----------------------------------+\n| bitmap_to_string(bitmap_empty()) |\n+----------------------------------+\n|                                  |\n+----------------------------------+\n"})}),"\n",(0,s.jsx)(t.h3,{id:"keywords",children:"keywords"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"BITMAP_EMPTY,BITMAP\n"})})]})}function m(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return o},a:function(){return l}});var i=n(667294);let s={},a=i.createContext(s);function l(e){let t=i.useContext(a);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);