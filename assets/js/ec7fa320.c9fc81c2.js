"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["54818"],{585689:function(n,e,t){t.r(e),t.d(e,{metadata:()=>s,contentTitle:()=>a,default:()=>d,assets:()=>r,toc:()=>c,frontMatter:()=>l});var s=JSON.parse('{"id":"sql-manual/sql-functions/spatial-functions/st-point","title":"ST_POINT","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/sql-manual/sql-functions/spatial-functions/st-point.md","sourceDirName":"sql-manual/sql-functions/spatial-functions","slug":"/sql-manual/sql-functions/spatial-functions/st-point","permalink":"/docs/2.0/sql-manual/sql-functions/spatial-functions/st-point","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"ST_POINT","language":"en"},"sidebar":"docs","previous":{"title":"ST_AREA","permalink":"/docs/2.0/sql-manual/sql-functions/spatial-functions/st-area"},"next":{"title":"ST_POLYGON,ST_POLYFROMTEXT,ST_POLYGONFROMTEXT","permalink":"/docs/2.0/sql-manual/sql-functions/spatial-functions/st-polygon"}}'),i=t("785893"),o=t("250065");let l={title:"ST_POINT",language:"en"},a=void 0,r={},c=[{value:"St_Point",id:"st_point",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function u(n){let e={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,o.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h2,{id:"st_point",children:"St_Point"}),"\n",(0,i.jsx)(e.h3,{id:"description",children:"Description"}),"\n",(0,i.jsx)(e.h4,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.code,{children:"POINT ST_Point(DOUBLE x, DOUBLE y)"})}),"\n",(0,i.jsx)(e.p,{children:"Given the X coordinate value, the Y coordinate value returns the corresponding Point.\nThe current value is meaningful only for spherical sets, and X/Y corresponds to longitude/latitude."}),"\n",(0,i.jsx)(e.h3,{id:"example",children:"example"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"mysql> SELECT ST_AsText(ST_Point(24.7, 56.7));\n+---------------------------------+\n| st_astext(st_point(24.7, 56.7)) |\n+---------------------------------+\n| POINT (24.7 56.7)               |\n+---------------------------------+\n"})}),"\n",(0,i.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,i.jsx)(e.p,{children:"ST_POINT,ST,POINT"})]})}function d(n={}){let{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(u,{...n})}):u(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return a},a:function(){return l}});var s=t(667294);let i={},o=s.createContext(i);function l(n){let e=s.useContext(o);return s.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:l(n.components),s.createElement(o.Provider,{value:e},n.children)}}}]);