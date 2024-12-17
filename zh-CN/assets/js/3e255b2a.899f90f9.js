"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["198600"],{133835:function(e,n,s){s.r(n),s.d(n,{metadata:()=>i,contentTitle:()=>c,default:()=>u,assets:()=>l,toc:()=>r,frontMatter:()=>t});var i=JSON.parse('{"id":"sql-manual/sql-functions/date-time-functions/microseconds_add","title":"microseconds_add","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-functions/date-time-functions/microseconds_add.md","sourceDirName":"sql-manual/sql-functions/date-time-functions","slug":"/sql-manual/sql-functions/date-time-functions/microseconds_add","permalink":"/zh-CN/docs/1.2/sql-manual/sql-functions/date-time-functions/microseconds_add","draft":false,"unlisted":false,"tags":[],"version":"1.2","frontMatter":{"title":"microseconds_add","language":"zh-CN"},"sidebar":"docs","previous":{"title":"year_ceil","permalink":"/zh-CN/docs/1.2/sql-manual/sql-functions/date-time-functions/year_ceil"},"next":{"title":"microseconds_sub","permalink":"/zh-CN/docs/1.2/sql-manual/sql-functions/date-time-functions/microseconds_sub"}}'),d=s("785893"),o=s("250065");let t={title:"microseconds_add",language:"zh-CN"},c=void 0,l={},r=[{value:"microseconds_add",id:"microseconds_add",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function a(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h2,{id:"microseconds_add",children:"microseconds_add"}),"\n",(0,d.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,d.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:"DATETIMEV2 microseconds_add(DATETIMEV2 basetime, INT delta)"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"basetime: DATETIMEV2 \u7C7B\u578B\u8D77\u59CB\u65F6\u95F4"}),"\n",(0,d.jsx)(n.li,{children:"delta: \u4ECE basetime \u8D77\u9700\u8981\u76F8\u52A0\u7684\u5FAE\u79D2\u6570"}),"\n",(0,d.jsx)(n.li,{children:"\u8FD4\u56DE\u7C7B\u578B\u4E3A DATETIMEV2"}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"mysql> select now(3), microseconds_add(now(3), 100000);\n+-------------------------+----------------------------------+\n| now(3)                  | microseconds_add(now(3), 100000) |\n+-------------------------+----------------------------------+\n| 2023-02-21 11:35:56.556 | 2023-02-21 11:35:56.656          |\n+-------------------------+----------------------------------+\n"})}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"now(3)"})," \u8FD4\u56DE\u7CBE\u5EA6\u4F4D\u6570 3 \u7684 DATETIMEV2 \u7C7B\u578B\u5F53\u524D\u65F6\u95F4\uFF0C",(0,d.jsx)(n.code,{children:"microseconds_add(now(3), 100000)"})," \u8FD4\u56DE\u5F53\u524D\u65F6\u95F4\u52A0\u4E0A 100000 \u5FAE\u79D2\u540E\u7684 DATETIMEV2 \u7C7B\u578B\u65F6\u95F4"]}),"\n",(0,d.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:"microseconds_add\n"})})]})}function u(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return t}});var i=s(667294);let d={},o=i.createContext(d);function t(e){let n=i.useContext(o);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:t(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);