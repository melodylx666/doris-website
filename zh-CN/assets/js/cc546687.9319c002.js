"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["360969"],{57179:function(e,n,a){a.r(n),a.d(n,{metadata:()=>s,contentTitle:()=>r,default:()=>h,assets:()=>l,toc:()=>i,frontMatter:()=>o});var s=JSON.parse('{"id":"lakehouse/database/oceanbase","title":"OceanBase","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/lakehouse/database/oceanbase.md","sourceDirName":"lakehouse/database","slug":"/lakehouse/database/oceanbase","permalink":"/zh-CN/docs/2.0/lakehouse/database/oceanbase","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"OceanBase","language":"zh-CN"},"sidebar":"docs","previous":{"title":"SAP HANA","permalink":"/zh-CN/docs/2.0/lakehouse/database/sap-hana"},"next":{"title":"Elasticsearch","permalink":"/zh-CN/docs/2.0/lakehouse/database/es"}}'),c=a("785893"),t=a("250065");let o={title:"OceanBase",language:"zh-CN"},r=void 0,l={},i=[{value:"\u4F7F\u7528\u987B\u77E5",id:"\u4F7F\u7528\u987B\u77E5",level:2},{value:"\u8FDE\u63A5 OceanBase",id:"\u8FDE\u63A5-oceanbase",level:2},{value:"\u6A21\u5F0F\u517C\u5BB9",id:"\u6A21\u5F0F\u517C\u5BB9",level:2}];function d(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.p,{children:"Doris JDBC Catalog \u652F\u6301\u901A\u8FC7\u6807\u51C6 JDBC \u63A5\u53E3\u8FDE\u63A5 OceanBase \u6570\u636E\u5E93\u3002\u672C\u6587\u6863\u4ECB\u7ECD\u5982\u4F55\u914D\u7F6E OceanBase \u6570\u636E\u5E93\u8FDE\u63A5\u3002"}),"\n",(0,c.jsx)(n.h2,{id:"\u4F7F\u7528\u987B\u77E5",children:"\u4F7F\u7528\u987B\u77E5"}),"\n",(0,c.jsx)(n.p,{children:"\u8981\u8FDE\u63A5\u5230 OceanBase \u6570\u636E\u5E93\uFF0C\u60A8\u9700\u8981"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"OceanBase 3.1.0 \u6216\u66F4\u9AD8\u7248\u672C"}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsxs)(n.p,{children:["OceanBase \u6570\u636E\u5E93\u7684 JDBC \u9A71\u52A8\u7A0B\u5E8F\uFF0C\u60A8\u53EF\u4EE5\u4ECE ",(0,c.jsx)(n.a,{href:"https://mvnrepository.com/artifact/com.oceanbase/oceanbase-client",children:"Maven \u4ED3\u5E93"}),"\u4E0B\u8F7D\u6700\u65B0\u6216\u6307\u5B9A\u7248\u672C\u7684 OceanBase JDBC \u9A71\u52A8\u7A0B\u5E8F\u3002",(0,c.jsx)(n.strong,{children:"\u63A8\u8350\u4F7F\u7528 OceanBase Connector/J 2.4.8 \u6216\u4EE5\u4E0A\u7248\u672C\u3002"})]}),"\n"]}),"\n",(0,c.jsxs)(n.li,{children:["\n",(0,c.jsx)(n.p,{children:"Doris \u6BCF\u4E2A FE \u548C BE \u8282\u70B9\u548C OceanBase \u670D\u52A1\u5668\u4E4B\u95F4\u7684\u7F51\u7EDC\u8FDE\u63A5\u3002"}),"\n"]}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"\u8FDE\u63A5-oceanbase",children:"\u8FDE\u63A5 OceanBase"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-sql",children:'CREATE CATALOG oceanbase PROPERTIES (\n    "type"="jdbc",\n    "user"="root",\n    "password"="password",\n    "jdbc_url" = "jdbc:oceanbase://host:port/db",\n    "driver_url" = "oceanbase-client-2.4.8.jar",\n    "driver_class" = "com.oceanbase.jdbc.Driver"\n)\n'})}),"\n",(0,c.jsx)(n.admonition,{title:"\u5907\u6CE8",type:"info",children:(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"jdbc_url"})," \u5B9A\u4E49\u8981\u4F20\u9012\u7ED9 OceanBase JDBC \u9A71\u52A8\u7A0B\u5E8F\u7684\u8FDE\u63A5\u4FE1\u606F\u548C\u53C2\u6570\u3002\n\u652F\u6301\u7684 URL \u7684\u53C2\u6570\u53EF\u5728 ",(0,c.jsx)(n.a,{href:"https://www.oceanbase.com/docs/common-oceanbase-connector-j-cn-1000000000517111",children:"OceanBase JDBC \u9A71\u52A8\u914D\u7F6E"})," \u4E2D\u627E\u5230\u3002"]})}),"\n",(0,c.jsx)(n.h2,{id:"\u6A21\u5F0F\u517C\u5BB9",children:"\u6A21\u5F0F\u517C\u5BB9"}),"\n",(0,c.jsx)(n.p,{children:"Doris \u4F1A\u5728\u521B\u5EFA OceanBase Catalog \u65F6\uFF0C\u81EA\u52A8\u8BC6\u522B OceanBase \u5904\u4E8E MySQL \u6216 Oracle \u6A21\u5F0F\u4E0B\uFF0C\u4EE5\u4FBF\u6B63\u786E\u89E3\u6790\u5143\u6570\u636E\u3002"}),"\n",(0,c.jsx)(n.p,{children:"\u4E0D\u540C\u6A21\u5F0F\u4E0B\u7684\u5C42\u7EA7\u6620\u5C04\u3001\u7C7B\u578B\u6620\u5C04\u3001\u67E5\u8BE2\u4F18\u5316\uFF0C\u4E0E MySQL \u6216 Oracle \u6570\u636E\u5E93\u7684 Catalog \u5904\u7406\u65B9\u5F0F\u76F8\u540C\uFF0C\u53EF\u53C2\u8003\u6587\u6863"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:"/zh-CN/docs/2.0/lakehouse/database/mysql",children:"MySQL Catalog"})}),"\n",(0,c.jsx)(n.li,{children:(0,c.jsx)(n.a,{href:"/zh-CN/docs/2.0/lakehouse/database/oracle",children:"Oracle Catalog"})}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(d,{...e})}):d(e)}},250065:function(e,n,a){a.d(n,{Z:function(){return r},a:function(){return o}});var s=a(667294);let c={},t=s.createContext(c);function o(e){let n=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:o(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);