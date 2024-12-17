"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["46966"],{997026:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>c,default:()=>u,assets:()=>o,toc:()=>a,frontMatter:()=>l});var s=JSON.parse('{"id":"sql-manual/sql-functions/string-functions/hex","title":"HEX","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-functions/string-functions/hex.md","sourceDirName":"sql-manual/sql-functions/string-functions","slug":"/sql-manual/sql-functions/string-functions/hex","permalink":"/docs/3.0/sql-manual/sql-functions/string-functions/hex","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"HEX","language":"en"},"sidebar":"docs","previous":{"title":"NOT_NULL_OR_EMPTY","permalink":"/docs/3.0/sql-manual/sql-functions/string-functions/not-null-or-empty"},"next":{"title":"UNHEX","permalink":"/docs/3.0/sql-manual/sql-functions/string-functions/unhex"}}'),i=t("785893"),r=t("250065");let l={title:"HEX",language:"en"},c=void 0,o={},a=[{value:"hex",id:"hex",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function d(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"hex",children:"hex"}),"\n",(0,i.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,i.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"VARCHAR hex(VARCHAR str)"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"VARCHAR hex(BIGINT num)"})}),"\n",(0,i.jsx)(n.p,{children:"If the input parameter is a number, the string representation of the hexadecimal value is returned;"}),"\n",(0,i.jsx)(n.p,{children:"If the input parameter is a string, each character will be converted into two hexadecimal characters, and all the characters after the conversion will be spliced into a string for output"}),"\n",(0,i.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"input string\n\nmysql> select hex('1');\n+----------+\n| hex('1') |\n+----------+\n| 31       |\n+----------+\n\nmysql> select hex('@');\n+----------+\n| hex('@') |\n+----------+\n| 40       |\n+----------+\n\nmysql> select hex('12');\n+-----------+\n| hex('12') |\n+-----------+\n| 3132      |\n+-----------+\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"intput num\n\nmysql> select hex(12);\n+---------+\n| hex(12) |\n+---------+\n| C       |\n+---------+\n\nmysql> select hex(-1);\n+------------------+\n| hex(-1)          |\n+------------------+\n| FFFFFFFFFFFFFFFF |\n+------------------+\n"})}),"\n",(0,i.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"HEX\n"})})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return l}});var s=t(667294);let i={},r=s.createContext(i);function l(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);