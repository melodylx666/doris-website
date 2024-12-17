"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["534242"],{746112:function(n,e,t){t.r(e),t.d(e,{metadata:()=>s,contentTitle:()=>o,default:()=>d,assets:()=>u,toc:()=>c,frontMatter:()=>r});var s=JSON.parse('{"id":"sql-manual/sql-functions/string-functions/unhex","title":"UNHEX","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/string-functions/unhex.md","sourceDirName":"sql-manual/sql-functions/string-functions","slug":"/sql-manual/sql-functions/string-functions/unhex","permalink":"/zh-CN/docs/sql-manual/sql-functions/string-functions/unhex","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"UNHEX","language":"zh-CN"},"sidebar":"docs","previous":{"title":"HEX","permalink":"/zh-CN/docs/sql-manual/sql-functions/string-functions/hex"},"next":{"title":"ELT","permalink":"/zh-CN/docs/sql-manual/sql-functions/string-functions/elt"}}'),i=t("785893"),l=t("250065");let r={title:"UNHEX",language:"zh-CN"},o=void 0,u={},c=[{value:"unhex",id:"unhex",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function a(n){let e={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,l.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"unhex",children:"unhex"}),"\n",(0,i.jsx)(e.h3,{id:"description",children:"description"}),"\n",(0,i.jsx)(e.h4,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.code,{children:"VARCHAR unhex(VARCHAR str)"})}),"\n",(0,i.jsxs)(e.p,{children:["\u8F93\u5165\u5B57\u7B26\u4E32\uFF0C\u5982\u679C\u5B57\u7B26\u4E32\u957F\u5EA6\u4E3A0\u6216\u8005\u4E3A\u5947\u6570\uFF0C\u8FD4\u56DE\u7A7A\u4E32\uFF1B\n\u5982\u679C\u5B57\u7B26\u4E32\u4E2D\u5305\u542B",(0,i.jsx)(e.code,{children:"[0-9]\u3001[a-f]\u3001[A-F]"}),"\u4E4B\u5916\u7684\u5B57\u7B26\uFF0C\u8FD4\u56DE\u7A7A\u4E32\uFF1B\n\u5176\u4ED6\u60C5\u51B5\u6BCF\u4E24\u4E2A\u5B57\u7B26\u4E3A\u4E00\u7EC4\u8F6C\u5316\u4E3A16\u8FDB\u5236\u540E\u7684\u5B57\u7B26\uFF0C\u7136\u540E\u62FC\u63A5\u6210\u5B57\u7B26\u4E32\u8F93\u51FA"]}),"\n",(0,i.jsx)(e.h3,{id:"example",children:"example"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"mysql> select unhex('@');\n+------------+\n| unhex('@') |\n+------------+\n|            |\n+------------+\n\nmysql> select unhex('41');\n+-------------+\n| unhex('41') |\n+-------------+\n| A           |\n+-------------+\n\nmysql> select unhex('4142');\n+---------------+\n| unhex('4142') |\n+---------------+\n| AB            |\n+---------------+\n"})}),"\n",(0,i.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"UNHEX\n"})})]})}function d(n={}){let{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(a,{...n})}):a(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return o},a:function(){return r}});var s=t(667294);let i={},l=s.createContext(i);function r(n){let e=s.useContext(l);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:r(n.components),s.createElement(l.Provider,{value:e},n.children)}}}]);