"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["686305"],{755972:function(e,t,n){n.r(t),n.d(t,{metadata:()=>s,contentTitle:()=>a,default:()=>d,assets:()=>r,toc:()=>c,frontMatter:()=>o});var s=JSON.parse('{"id":"sql-manual/sql-functions/spatial-functions/st_astext","title":"ST_AsText,ST_AsWKT","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-functions/spatial-functions/st_astext.md","sourceDirName":"sql-manual/sql-functions/spatial-functions","slug":"/sql-manual/sql-functions/spatial-functions/st_astext","permalink":"/zh-CN/docs/1.2/sql-manual/sql-functions/spatial-functions/st_astext","draft":false,"unlisted":false,"tags":[],"version":"1.2","frontMatter":{"title":"ST_AsText,ST_AsWKT","language":"zh-CN"},"sidebar":"docs","previous":{"title":"ST_Polygon,ST_PolyFromText,ST_PolygonFromText","permalink":"/zh-CN/docs/1.2/sql-manual/sql-functions/spatial-functions/st_polygon"},"next":{"title":"ST_Contains","permalink":"/zh-CN/docs/1.2/sql-manual/sql-functions/spatial-functions/st_contains"}}'),i=n("785893"),l=n("250065");let o={title:"ST_AsText,ST_AsWKT",language:"zh-CN"},a=void 0,r={},c=[{value:"ST_AsText,ST_AsWKT",id:"st_astextst_aswkt",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function u(e){let t={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"st_astextst_aswkt",children:"ST_AsText,ST_AsWKT"}),"\n",(0,i.jsx)(t.h3,{id:"description",children:"description"}),"\n",(0,i.jsx)(t.h4,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"VARCHAR ST_AsText(GEOMETRY geo)"})}),"\n",(0,i.jsx)(t.p,{children:"\u5C06\u4E00\u4E2A\u51E0\u4F55\u56FE\u5F62\u8F6C\u5316\u4E3AWKT\uFF08Well Known Text\uFF09\u7684\u8868\u793A\u5F62\u5F0F"}),"\n",(0,i.jsx)(t.h3,{id:"example",children:"example"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"mysql> SELECT ST_AsText(ST_Point(24.7, 56.7));\n+---------------------------------+\n| st_astext(st_point(24.7, 56.7)) |\n+---------------------------------+\n| POINT (24.7 56.7)               |\n+---------------------------------+\n"})}),"\n",(0,i.jsx)(t.h3,{id:"keywords",children:"keywords"}),"\n",(0,i.jsx)(t.p,{children:"ST_ASTEXT,ST_ASWKT,ST,ASTEXT,ASWKT"})]})}function d(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return o}});var s=n(667294);let i={},l=s.createContext(i);function o(e){let t=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(l.Provider,{value:t},e.children)}}}]);