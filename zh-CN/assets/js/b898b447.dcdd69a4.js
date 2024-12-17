"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["867536"],{294570:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>a,default:()=>d,assets:()=>c,toc:()=>o,frontMatter:()=>l});var r=JSON.parse('{"id":"sql-manual/sql-functions/string-functions/regexp/regexp-extract","title":"REGEXP_EXTRACT","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/string-functions/regexp/regexp-extract.md","sourceDirName":"sql-manual/sql-functions/string-functions/regexp","slug":"/sql-manual/sql-functions/string-functions/regexp/regexp-extract","permalink":"/zh-CN/docs/sql-manual/sql-functions/string-functions/regexp/regexp-extract","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"REGEXP_EXTRACT","language":"zh-CN"},"sidebar":"docs","previous":{"title":"REGEXP","permalink":"/zh-CN/docs/sql-manual/sql-functions/string-functions/regexp/"},"next":{"title":"REGEXP_EXTRACT_ALL","permalink":"/zh-CN/docs/sql-manual/sql-functions/string-functions/regexp/regexp-extract-all"}}'),s=t("785893"),i=t("250065");let l={title:"REGEXP_EXTRACT",language:"zh-CN"},a=void 0,c={},o=[{value:"regexp_extract",id:"regexp_extract",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function p(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"regexp_extract",children:"regexp_extract"}),"\n",(0,s.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,s.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"VARCHAR regexp_extract(VARCHAR str, VARCHAR pattern, int pos)"})}),"\n",(0,s.jsx)(n.p,{children:"\u5BF9\u5B57\u7B26\u4E32 str \u8FDB\u884C\u6B63\u5219\u5339\u914D\uFF0C\u62BD\u53D6\u7B26\u5408 pattern \u7684\u7B2C pos \u4E2A\u5339\u914D\u90E8\u5206\u3002\u9700\u8981 pattern \u5B8C\u5168\u5339\u914D str \u4E2D\u7684\u67D0\u90E8\u5206\uFF0C\u8FD9\u6837\u624D\u80FD\u8FD4\u56DE pattern \u90E8\u5206\u4E2D\u9700\u5339\u914D\u90E8\u5206\u3002\u5982\u679C\u6CA1\u6709\u5339\u914D\uFF0C\u8FD4\u56DE\u7A7A\u5B57\u7B26\u4E32\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u5B57\u7B26\u96C6\u5339\u914D\u9700\u8981\u4F7F\u7528 Unicode \u6807\u51C6\u5B57\u7B26\u7C7B\u578B\u3002\u4F8B\u5982\uFF0C\u5339\u914D\u4E2D\u6587\u8BF7\u4F7F\u7528 ",(0,s.jsx)(n.code,{children:"\\p{Han}"}),"\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"mysql> SELECT regexp_extract('AbCdE', '([[:lower:]]+)C([[:lower:]]+)', 1);\n+-------------------------------------------------------------+\n| regexp_extract('AbCdE', '([[:lower:]]+)C([[:lower:]]+)', 1) |\n+-------------------------------------------------------------+\n| b                                                           |\n+-------------------------------------------------------------+\n\nmysql> SELECT regexp_extract('AbCdE', '([[:lower:]]+)C([[:lower:]]+)', 2);\n+-------------------------------------------------------------+\n| regexp_extract('AbCdE', '([[:lower:]]+)C([[:lower:]]+)', 2) |\n+-------------------------------------------------------------+\n| d                                                           |\n+-------------------------------------------------------------+\n\nmysql> select regexp_extract('\u8FD9\u662F\u4E00\u6BB5\u4E2D\u6587This is a passage in English 1234567', '(\\\\p{Han}+)(.+)', 2);\n+-----------------------------------------------------------------------------------------------+\n| regexp_extract('\u8FD9\u662F\u4E00\u6BB5\u4E2D\u6587This is a passage in English 1234567', '(\\p{Han}+)(.+)', 2)       |\n+-----------------------------------------------------------------------------------------------+\n| This is a passage in English 1234567                                                          |\n+-----------------------------------------------------------------------------------------------+\n"})}),"\n",(0,s.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"REGEXP_EXTRACT,REGEXP,EXTRACT\n"})})]})}function d(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return l}});var r=t(667294);let s={},i=r.createContext(s);function l(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);