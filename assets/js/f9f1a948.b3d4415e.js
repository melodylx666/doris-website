"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["50401"],{24596:function(n,e,s){s.r(e),s.d(e,{metadata:()=>t,contentTitle:()=>a,default:()=>u,assets:()=>o,toc:()=>c,frontMatter:()=>r});var t=JSON.parse('{"id":"sql-manual/sql-functions/string-functions/field","title":"FIELD","description":"\x3c!--","source":"@site/docs/sql-manual/sql-functions/string-functions/field.md","sourceDirName":"sql-manual/sql-functions/string-functions","slug":"/sql-manual/sql-functions/string-functions/field","permalink":"/docs/dev/sql-manual/sql-functions/string-functions/field","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"FIELD","language":"en"},"sidebar":"docs","previous":{"title":"OVERLAY","permalink":"/docs/dev/sql-manual/sql-functions/string-functions/overlay"},"next":{"title":"FIND_IN_SET","permalink":"/docs/dev/sql-manual/sql-functions/string-functions/find-in-set"}}'),l=s("785893"),i=s("250065");let r={title:"FIELD",language:"en"},a=void 0,o={},c=[{value:"field",id:"field",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function d(n){let e={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h2,{id:"field",children:"field"}),"\n",(0,l.jsx)(e.p,{children:"field"}),"\n",(0,l.jsx)(e.h3,{id:"description",children:"description"}),"\n",(0,l.jsx)(e.h4,{id:"syntax",children:"Syntax"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.code,{children:"field(Expr e, param1, param2, param3,.....)"})}),"\n",(0,l.jsx)(e.p,{children:"In the order by clause, you can use custom sorting to arrange the data in expr in the specified param1, 2, and 3 order.\nThe data not in the param parameter will not participate in sorting, but will be placed first.\nYou can use asc and desc to control the overall order.\nIf there is a NULL value, you can use nulls first, nulls last to control the order of nulls."}),"\n",(0,l.jsx)(e.h3,{id:"example",children:"example"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:"mysql> select k1,k7 from baseall where k1 in (1,2,3) order by field(k1,2,1,3);\n+------+------------+\n| k1   | k7         |\n+------+------------+\n|    2 | wangyu14   |\n|    1 | wangjing04 |\n|    3 | yuanyuan06 |\n+------+------------+\n\nmysql> select class_name from class_test order by field(class_name,'Suzi','Ben','Henry');\n+------------+\n| class_name |\n+------------+\n| Suzi       |\n| Suzi       |\n| Ben        |\n| Ben        |\n| Henry      |\n| Henry      |\n+------------+\n\nmysql> select class_name from class_test order by field(class_name,'Suzi','Ben','Henry') desc;\n+------------+\n| class_name |\n+------------+\n| Henry      |\n| Henry      |\n| Ben        |\n| Ben        |\n| Suzi       |\n| Suzi       |\n+------------+\n\nmysql> select class_name from class_test order by field(class_name,'Suzi','Ben','Henry') nulls first;\n+------------+\n| class_name |\n+------------+\n| null       |\n| Suzi       |\n| Suzi       |\n| Ben        |\n| Ben        |\n| Henry      |\n| Henry      |\n+------------+\n"})}),"\n",(0,l.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:"field\n"})})]})}function u(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(d,{...n})}):d(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return a},a:function(){return r}});var t=s(667294);let l={},i=t.createContext(l);function r(n){let e=t.useContext(i);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:r(n.components),t.createElement(i.Provider,{value:e},n.children)}}}]);