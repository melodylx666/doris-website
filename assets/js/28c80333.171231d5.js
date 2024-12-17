"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["986241"],{117204:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>l,default:()=>u,assets:()=>c,toc:()=>a,frontMatter:()=>r});var i=JSON.parse('{"id":"sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-LEAD","title":"WINDOW_FUNCTION_LEAD","description":"\x3c!--  Licensed to the Apache Software Foundation (ASF) under one or more contributor license agreements.  See the NOTICE file distributed with this work for additional information regarding copyright ownership.  The ASF licenses this file to you under the Apache License, Version 2.0 (the \\"License\\"); you may not use this file except in compliance with the License.  You may obtain a copy of the License at","source":"@site/versioned_docs/version-2.0/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-LEAD.md","sourceDirName":"sql-manual/sql-functions/window-functions","slug":"/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-LEAD","permalink":"/docs/2.0/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-LEAD","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"WINDOW_FUNCTION_LEAD","language":"en"},"sidebar":"docs","previous":{"title":"WINDOW_FUNCTION_LAST_VALUE","permalink":"/docs/2.0/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-LAST-VALUE"},"next":{"title":"WINDOW_FUNCTION_LAG","permalink":"/docs/2.0/sql-manual/sql-functions/window-functions/WINDOW-FUNCTION-LAG"}}'),o=t("785893"),s=t("250065");let r={title:"WINDOW_FUNCTION_LEAD",language:"en"},l=void 0,c={},a=[{value:"WINDOW FUNCTION LEAD",id:"window-function-lead",level:2},{value:"description",id:"description",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function d(e){let n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"window-function-lead",children:"WINDOW FUNCTION LEAD"}),"\n",(0,o.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,o.jsx)(n.p,{children:"The LEAD() method is used to calculate the value of the current line several lines backwards."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sql",children:"LEAD(expr, offset, default) OVER (partition_by_clause order_by_clause)\n"})}),"\n",(0,o.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,o.jsx)(n.p,{children:"Calculate the trend of the closing price of the second day compared with the closing price of the day, that is, the closing price of the second day is higher or lower than that of the day."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sql",children:'select stock_symbol, closing_date, closing_price,    \ncase   \n(lead(closing_price,1, 0)   \nover (partition by stock_symbol order by closing_date)-closing_price) > 0   \nwhen true then "higher"   \nwhen false then "flat or lower"    \nend as "trending"   \nfrom stock_ticker    \norder by closing_date;\n\n| stock_symbol | closing_date        | closing_price | trending      |\n|--------------|---------------------|---------------|---------------|\n| JDR          | 2014-09-13 00:00:00 | 12.86         | higher        |\n| JDR          | 2014-09-14 00:00:00 | 12.89         | higher        |\n| JDR          | 2014-09-15 00:00:00 | 12.94         | flat or lower |\n| JDR          | 2014-09-16 00:00:00 | 12.55         | higher        |\n| JDR          | 2014-09-17 00:00:00 | 14.03         | higher        |\n| JDR          | 2014-09-18 00:00:00 | 14.75         | flat or lower |\n| JDR          | 2014-09-19 00:00:00 | 13.98         | flat or lower |\n'})}),"\n",(0,o.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"WINDOW,FUNCTION,LEAD\n"})})]})}function u(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return r}});var i=t(667294);let o={},s=i.createContext(o);function r(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);