"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["905078"],{563746:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>r,default:()=>u,assets:()=>l,toc:()=>o,frontMatter:()=>d});var i=JSON.parse('{"id":"sql-manual/sql-functions/date-time-functions/timestampdiff","title":"TIMESTAMPDIFF","description":"\x3c!--","source":"@site/docs/sql-manual/sql-functions/date-time-functions/timestampdiff.md","sourceDirName":"sql-manual/sql-functions/date-time-functions","slug":"/sql-manual/sql-functions/date-time-functions/timestampdiff","permalink":"/docs/dev/sql-manual/sql-functions/date-time-functions/timestampdiff","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"TIMESTAMPDIFF","language":"en"},"sidebar":"docs","previous":{"title":"TIMESTAMPADD","permalink":"/docs/dev/sql-manual/sql-functions/date-time-functions/timestampadd"},"next":{"title":"DATE_ADD","permalink":"/docs/dev/sql-manual/sql-functions/date-time-functions/date-add"}}'),s=t("785893"),a=t("250065");let d={title:"TIMESTAMPDIFF",language:"en"},r=void 0,l={},o=[{value:"timestampdiff",id:"timestampdiff",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function c(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"timestampdiff",children:"timestampdiff"}),"\n",(0,s.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,s.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"INT TIMESTAMPDIFF(unit, DATETIME datetime_expr1, DATETIME datetime_expr2)"})}),"\n",(0,s.jsx)(n.p,{children:"Returns datetime_expr2 \u2212 datetime_expr1, where datetime_expr1 and datetime_expr2 are date or datetime expressions."}),"\n",(0,s.jsx)(n.p,{children:"The unit for the result (an integer) is given by the unit argument."}),"\n",(0,s.jsx)(n.p,{children:"The legal values for unit are the same as those listed in the description of the TIMESTAMPADD() function."}),"\n",(0,s.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"\nMySQL> SELECT TIMESTAMPDIFF(MONTH,'2003-02-01','2003-05-01');\n+--------------------------------------------------------------------+\n| timestampdiff(MONTH, '2003-02-01 00:00:00', '2003-05-01 00:00:00') |\n+--------------------------------------------------------------------+\n|                                                                  3 |\n+--------------------------------------------------------------------+\n\nMySQL> SELECT TIMESTAMPDIFF(YEAR,'2002-05-01','2001-01-01');\n+-------------------------------------------------------------------+\n| timestampdiff(YEAR, '2002-05-01 00:00:00', '2001-01-01 00:00:00') |\n+-------------------------------------------------------------------+\n|                                                                -1 |\n+-------------------------------------------------------------------+\n\n\nMySQL> SELECT TIMESTAMPDIFF(MINUTE,'2003-02-01','2003-05-01 12:05:55');\n+---------------------------------------------------------------------+\n| timestampdiff(MINUTE, '2003-02-01 00:00:00', '2003-05-01 12:05:55') |\n+---------------------------------------------------------------------+\n|                                                              128885 |\n+---------------------------------------------------------------------+\n\n"})}),"\n",(0,s.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"TIMESTAMPDIFF\n"})})]})}function u(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return d}});var i=t(667294);let s={},a=i.createContext(s);function d(e){let n=i.useContext(a);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);