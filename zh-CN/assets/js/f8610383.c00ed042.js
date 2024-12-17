"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["257690"],{61255:function(e,n,i){i.r(n),i.d(n,{metadata:()=>t,contentTitle:()=>r,default:()=>u,assets:()=>a,toc:()=>d,frontMatter:()=>c});var t=JSON.parse('{"id":"sql-manual/sql-functions/date-time-functions/date-ceil","title":"date_ceil","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/sql-manual/sql-functions/date-time-functions/date-ceil.md","sourceDirName":"sql-manual/sql-functions/date-time-functions","slug":"/sql-manual/sql-functions/date-time-functions/date-ceil","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/date-time-functions/date-ceil","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"date_ceil","language":"zh-CN"},"sidebar":"docs","previous":{"title":"year_floor","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/date-time-functions/year-floor"},"next":{"title":"second_ceil","permalink":"/zh-CN/docs/3.0/sql-manual/sql-functions/date-time-functions/second-ceil"}}'),l=i("785893"),s=i("250065");let c={title:"date_ceil",language:"zh-CN"},r=void 0,a={},d=[{value:"date_ceil",id:"date_ceil",level:2},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practices",id:"best-practices",level:3}];function o(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"date_ceil",children:"date_ceil"}),"\n",(0,l.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Syntax"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"DATETIME DATE_CEIL(DATETIME datetime, INTERVAL period type)"})}),"\n",(0,l.jsx)(n.p,{children:"\u5C06\u65E5\u671F\u8F6C\u5316\u4E3A\u6307\u5B9A\u7684\u65F6\u95F4\u95F4\u9694\u5468\u671F\u7684\u6700\u8FD1\u4E0A\u53D6\u6574\u65F6\u523B\u3002"}),"\n",(0,l.jsx)(n.p,{children:"datetime \u53C2\u6570\u662F\u5408\u6CD5\u7684\u65E5\u671F\u8868\u8FBE\u5F0F\u3002"}),"\n",(0,l.jsx)(n.p,{children:"period \u53C2\u6570\u662F\u6307\u5B9A\u6BCF\u4E2A\u5468\u671F\u6709\u591A\u5C11\u4E2A\u5355\u4F4D\u7EC4\u6210\uFF0C\u5F00\u59CB\u7684\u65F6\u95F4\u8D77\u70B9\u4E3A0001-01-01T00:00:00."}),"\n",(0,l.jsx)(n.p,{children:"type \u53C2\u6570\u53EF\u4EE5\u662F\u4E0B\u5217\u503C\uFF1AYEAR, MONTH, DAY, HOUR, MINUTE, SECOND."}),"\n",(0,l.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"mysql [(none)]>select date_ceil(\"2023-07-13 22:28:18\",interval 5 second);\n+--------------------------------------------------------------+\n| second_ceil('2023-07-13 22:28:18', 5, '0001-01-01 00:00:00') |\n+--------------------------------------------------------------+\n| 2023-07-13 22:28:20                                          |\n+--------------------------------------------------------------+\n1 row in set (0.01 sec)\n\nmysql [(none)]>select date_ceil(\"2023-07-13 22:28:18\",interval 5 minute);\n+--------------------------------------------------------------+\n| minute_ceil('2023-07-13 22:28:18', 5, '0001-01-01 00:00:00') |\n+--------------------------------------------------------------+\n| 2023-07-13 22:30:00                                          |\n+--------------------------------------------------------------+\n1 row in set (0.01 sec)\n\nmysql [(none)]>select date_ceil(\"2023-07-13 22:28:18\",interval 5 hour);\n+------------------------------------------------------------+\n| hour_ceil('2023-07-13 22:28:18', 5, '0001-01-01 00:00:00') |\n+------------------------------------------------------------+\n| 2023-07-13 23:00:00                                        |\n+------------------------------------------------------------+\n1 row in set (0.01 sec)\n\nmysql [(none)]>select date_ceil(\"2023-07-13 22:28:18\",interval 5 day);\n+-----------------------------------------------------------+\n| day_ceil('2023-07-13 22:28:18', 5, '0001-01-01 00:00:00') |\n+-----------------------------------------------------------+\n| 2023-07-15 00:00:00                                       |\n+-----------------------------------------------------------+\n1 row in set (0.00 sec)\n\nmysql [(none)]>select date_ceil(\"2023-07-13 22:28:18\",interval 5 month);\n+-------------------------------------------------------------+\n| month_ceil('2023-07-13 22:28:18', 5, '0001-01-01 00:00:00') |\n+-------------------------------------------------------------+\n| 2023-12-01 00:00:00                                         |\n+-------------------------------------------------------------+\n1 row in set (0.01 sec)\n\nmysql [(none)]>select date_ceil(\"2023-07-13 22:28:18\",interval 5 year);\n+------------------------------------------------------------+\n| year_ceil('2023-07-13 22:28:18', 5, '0001-01-01 00:00:00') |\n+------------------------------------------------------------+\n| 2026-01-01 00:00:00                                        |\n+------------------------------------------------------------+\n1 row in set (0.00 sec)\n"})}),"\n",(0,l.jsx)(n.h3,{id:"keywords",children:"Keywords"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"DATE_CEIL,DATE,CEIL\n"})}),"\n",(0,l.jsx)(n.h3,{id:"best-practices",children:"Best Practices"}),"\n",(0,l.jsx)(n.p,{children:"\u8FD8\u53EF\u53C2\u9605\uFF1A"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"./second_ceil",children:"second_ceil"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"./minute_ceil",children:"minute_ceil"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"./hour_ceil",children:"hour_ceil"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"./day_ceil",children:"day_ceil"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"./month_ceil",children:"month_ceil"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"./year_ceil",children:"year_ceil"})}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return r},a:function(){return c}});var t=i(667294);let l={},s=t.createContext(l);function c(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);