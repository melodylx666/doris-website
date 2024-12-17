"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["802526"],{643045:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>r,default:()=>u,assets:()=>a,toc:()=>c,frontMatter:()=>l});var i=JSON.parse('{"id":"sql-manual/sql-functions/date-time-functions/minute-floor","title":"minute_floor","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-functions/date-time-functions/minute-floor.md","sourceDirName":"sql-manual/sql-functions/date-time-functions","slug":"/sql-manual/sql-functions/date-time-functions/minute-floor","permalink":"/docs/3.0/sql-manual/sql-functions/date-time-functions/minute-floor","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"minute_floor","language":"en"},"sidebar":"docs","previous":{"title":"second_floor","permalink":"/docs/3.0/sql-manual/sql-functions/date-time-functions/second-floor"},"next":{"title":"hour_floor","permalink":"/docs/3.0/sql-manual/sql-functions/date-time-functions/hour-floor"}}'),o=t("785893"),s=t("250065");let l={title:"minute_floor",language:"en"},r=void 0,a={},c=[{value:"minute_floor",id:"minute_floor",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}];function d(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"minute_floor",children:"minute_floor"}),"\n",(0,o.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,o.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sql",children:"DATETIME MINUTE_FLOOR(DATETIME datetime)\nDATETIME MINUTE_FLOOR(DATETIME datetime, DATETIME origin)\nDATETIME MINUTE_FLOOR(DATETIME datetime, INT period)\nDATETIME MINUTE_FLOOR(DATETIME datetime, INT period, DATETIME origin)\n"})}),"\n",(0,o.jsx)(n.p,{children:"Convert the date to the nearest rounding down time of the specified time interval period."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"datetime: a valid date expression."}),"\n",(0,o.jsx)(n.li,{children:"period: specifies how many minutes each cycle consists of."}),"\n",(0,o.jsx)(n.li,{children:"origin: starting from 0001-01-01T00:00:00."}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"mysql> select minute_floor(\"2023-07-13 22:28:18\", 5);\n+---------------------------------------------------------------+\n| minute_floor(cast('2023-07-13 22:28:18' as DATETIMEV2(0)), 5) |\n+---------------------------------------------------------------+\n| 2023-07-13 22:25:00                                           |\n+---------------------------------------------------------------+\n1 row in set (0.06 sec)\n"})}),"\n",(0,o.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"MINUTE_FLOOR, MINUTE, FLOOR\n"})}),"\n",(0,o.jsx)(n.h3,{id:"best-practice",children:"Best Practice"}),"\n",(0,o.jsxs)(n.p,{children:["See also ",(0,o.jsx)(n.a,{href:"./date_floor",children:"date_floor"})]})]})}function u(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return l}});var i=t(667294);let o={},s=i.createContext(o);function l(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);