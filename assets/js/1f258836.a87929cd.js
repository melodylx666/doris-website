"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["997836"],{256300:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>o,default:()=>u,assets:()=>a,toc:()=>c,frontMatter:()=>l});var s=JSON.parse('{"id":"sql-manual/sql-functions/string-functions/starts-with","title":"STARTS_WITH","description":"\x3c!--","source":"@site/docs/sql-manual/sql-functions/string-functions/starts-with.md","sourceDirName":"sql-manual/sql-functions/string-functions","slug":"/sql-manual/sql-functions/string-functions/starts-with","permalink":"/docs/dev/sql-manual/sql-functions/string-functions/starts-with","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"STARTS_WITH","language":"en"},"sidebar":"docs","previous":{"title":"ENDS_WITH","permalink":"/docs/dev/sql-manual/sql-functions/string-functions/ends-with"},"next":{"title":"TRIM","permalink":"/docs/dev/sql-manual/sql-functions/string-functions/trim"}}'),i=t("785893"),r=t("250065");let l={title:"STARTS_WITH",language:"en"},o=void 0,a={},c=[{value:"starts_with",id:"starts_with",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function d(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"starts_with",children:"starts_with"}),"\n",(0,i.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"BOOLEAN STARTS_WITH(VARCHAR str, VARCHAR prefix)"})}),"\n",(0,i.jsx)(n.p,{children:"It returns true if the string starts with the specified prefix, otherwise it returns false.\nIf any parameter is NULL, it returns NULL."}),"\n",(0,i.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"MySQL [(none)]> select starts_with(\"hello world\",\"hello\");\n+-------------------------------------+\n| starts_with('hello world', 'hello') |\n+-------------------------------------+\n|                                   1 |\n+-------------------------------------+\n\nMySQL [(none)]> select starts_with(\"hello world\",\"world\");\n+-------------------------------------+\n| starts_with('hello world', 'world') |\n+-------------------------------------+\n|                                   0 |\n+-------------------------------------+\n"})}),"\n",(0,i.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"STARTS_WITH\n"})})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return l}});var s=t(667294);let i={},r=s.createContext(i);function l(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);