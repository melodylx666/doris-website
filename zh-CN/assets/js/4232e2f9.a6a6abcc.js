"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["248458"],{685939:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>i,default:()=>u,assets:()=>a,toc:()=>o,frontMatter:()=>c});var s=JSON.parse('{"id":"sql-manual/sql-statements/security/SHOW-ENCRYPTKEY","title":"SHOW ENCRYPTKEY","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-statements/security/SHOW-ENCRYPTKEY.md","sourceDirName":"sql-manual/sql-statements/security","slug":"/sql-manual/sql-statements/security/SHOW-ENCRYPTKEY","permalink":"/zh-CN/docs/3.0/sql-manual/sql-statements/security/SHOW-ENCRYPTKEY","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"SHOW ENCRYPTKEY","language":"zh-CN"},"sidebar":"docs","previous":{"title":"DROP ENCRYPTKEY","permalink":"/zh-CN/docs/3.0/sql-manual/sql-statements/security/DROP-ENCRYPTKEY"},"next":{"title":"CREATE SQL_BLOCK_RULE","permalink":"/zh-CN/docs/3.0/sql-manual/sql-statements/data-governance/CREATE-SQL_BLOCK_RULE"}}'),l=t("785893"),r=t("250065");let c={title:"SHOW ENCRYPTKEY",language:"zh-CN"},i=void 0,a={},o=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2},{value:"\u5173\u952E\u8BCD",id:"\u5173\u952E\u8BCD",level:2},{value:"\u6700\u4F73\u5B9E\u8DF5",id:"\u6700\u4F73\u5B9E\u8DF5",level:3}];function d(e){let n={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,l.jsx)(n.p,{children:"\u67E5\u770B\u6570\u636E\u5E93\u4E0B\u6240\u6709\u7684\u81EA\u5B9A\u4E49\u7684\u5BC6\u94A5\u3002\u5982\u679C\u7528\u6237\u6307\u5B9A\u4E86\u6570\u636E\u5E93\uFF0C\u90A3\u4E48\u67E5\u770B\u5BF9\u5E94\u6570\u636E\u5E93\u7684\uFF0C\u5426\u5219\u76F4\u63A5\u67E5\u8BE2\u5F53\u524D\u4F1A\u8BDD\u6240\u5728\u6570\u636E\u5E93\u3002"}),"\n",(0,l.jsxs)(n.p,{children:["\u9700\u8981\u5BF9\u8FD9\u4E2A\u6570\u636E\u5E93\u62E5\u6709 ",(0,l.jsx)(n.code,{children:"ADMIN"})," \u6743\u9650"]}),"\n",(0,l.jsx)(n.p,{children:"\u8BED\u6CD5\uFF1A"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:"SHOW ENCRYPTKEYS [IN|FROM db] [LIKE 'key_pattern']\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u53C2\u6570"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"db"}),": \u8981\u67E5\u8BE2\u7684\u6570\u636E\u5E93\u540D\u5B57\n",(0,l.jsx)(n.code,{children:"key_pattern"}),": \u7528\u6765\u8FC7\u6EE4\u5BC6\u94A5\u540D\u79F0\u7684\u53C2\u6570"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sql",children:'   mysql> SHOW ENCRYPTKEYS;\n   +-------------------+-------------------+\n   | EncryptKey Name   | EncryptKey String |\n   +-------------------+-------------------+\n   | example_db.my_key | ABCD123456789     |\n   +-------------------+-------------------+\n   1 row in set (0.00 sec)\n\n   mysql> SHOW ENCRYPTKEYS FROM example_db LIKE "%my%";\n   +-------------------+-------------------+\n   | EncryptKey Name   | EncryptKey String |\n   +-------------------+-------------------+\n   | example_db.my_key | ABCD123456789     |\n   +-------------------+-------------------+\n   1 row in set (0.00 sec)\n'})}),"\n",(0,l.jsx)(n.h2,{id:"\u5173\u952E\u8BCD",children:"\u5173\u952E\u8BCD"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"SHOW, ENCRYPT, KEY\n"})}),"\n",(0,l.jsx)(n.h3,{id:"\u6700\u4F73\u5B9E\u8DF5",children:"\u6700\u4F73\u5B9E\u8DF5"})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return c}});var s=t(667294);let l={},r=s.createContext(l);function c(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);