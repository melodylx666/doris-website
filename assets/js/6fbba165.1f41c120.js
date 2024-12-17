"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["500733"],{710999:function(n,e,i){i.r(e),i.d(e,{metadata:()=>t,contentTitle:()=>a,default:()=>f,assets:()=>o,toc:()=>c,frontMatter:()=>l});var t=JSON.parse('{"id":"sql-manual/sql-functions/ip-functions/is-ipv6-string","title":"IS_IPV6_STRING","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-functions/ip-functions/is-ipv6-string.md","sourceDirName":"sql-manual/sql-functions/ip-functions","slug":"/sql-manual/sql-functions/ip-functions/is-ipv6-string","permalink":"/docs/3.0/sql-manual/sql-functions/ip-functions/is-ipv6-string","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"IS_IPV6_STRING","language":"en"},"sidebar":"docs","previous":{"title":"IS_IPV4_STRING","permalink":"/docs/3.0/sql-manual/sql-functions/ip-functions/is-ipv4-string"},"next":{"title":"TO_IPV4","permalink":"/docs/3.0/sql-manual/sql-functions/ip-functions/to-ipv4"}}'),s=i("785893"),r=i("250065");let l={title:"IS_IPV6_STRING",language:"en"},a=void 0,o={},c=[{value:"IS_IPV6_STRING",id:"is_ipv6_string",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Notice",id:"notice",level:4},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3}];function d(n){let e={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"is_ipv6_string",children:"IS_IPV6_STRING"}),"\n",(0,s.jsx)(e.p,{children:"IS_IPV6_STRING"}),"\n",(0,s.jsx)(e.h3,{id:"description",children:"Description"}),"\n",(0,s.jsx)(e.h4,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.code,{children:"BOOLEAN IS_IPV6_STRING(STRING ipv6_str)"})}),"\n",(0,s.jsx)(e.p,{children:"Receive an IPv6 address in the form of a string as a parameter, and return true if it is a properly formatted and valid IPv6 address; On the contrary, return false."}),"\n",(0,s.jsx)(e.h4,{id:"notice",children:"Notice"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.code,{children:"If the input parameter is NULL, return NULL, indicating invalid input"})}),"\n",(0,s.jsx)(e.h3,{id:"example",children:"Example"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"mysql> select is_ipv6_string(NULL);\n+----------------------+\n| is_ipv6_string(NULL) |\n+----------------------+\n|                 NULL |\n+----------------------+\n\nmysql> CREATE TABLE `test_is_ipv6_string` (\n      `id` int,\n      `ip_v6` string\n    ) ENGINE=OLAP\n    DISTRIBUTED BY HASH(`id`) BUCKETS 4\n    PROPERTIES (\n    \"replication_allocation\" = \"tag.location.default: 1\"\n    );\n    \nmysql> insert into test_is_ipv6_string values(0, NULL), (1, '::'), (2, ''), (3, '2001:1b70:a1:610::b102:2'), (4, 'ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffffg');\n\nmysql> select id, is_ipv6_string(ip_v6) from test_is_ipv6_string order by id;\n+------+-----------------------+\n| id   | is_ipv6_string(ip_v6) |\n+------+-----------------------+\n|    0 |                  NULL |\n|    1 |                     1 |\n|    2 |                     0 |\n|    3 |                     1 |\n|    4 |                     0 |\n+------+-----------------------+\n"})}),"\n",(0,s.jsx)(e.h3,{id:"keywords",children:"Keywords"}),"\n",(0,s.jsx)(e.p,{children:"IS_IPV6_STRING, IP"})]})}function f(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},250065:function(n,e,i){i.d(e,{Z:function(){return a},a:function(){return l}});var t=i(667294);let s={},r=t.createContext(s);function l(n){let e=t.useContext(r);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:l(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);