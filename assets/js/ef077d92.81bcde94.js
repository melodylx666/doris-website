"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["786558"],{514525:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>l,default:()=>c,assets:()=>o,toc:()=>_,frontMatter:()=>i});var r=JSON.parse('{"id":"sql-manual/sql-functions/spatial-functions/st_area","title":"ST_Area","description":"\x3c!--","source":"@site/versioned_docs/version-1.2/sql-manual/sql-functions/spatial-functions/st_area.md","sourceDirName":"sql-manual/sql-functions/spatial-functions","slug":"/sql-manual/sql-functions/spatial-functions/st_area","permalink":"/docs/1.2/sql-manual/sql-functions/spatial-functions/st_area","draft":false,"unlisted":false,"tags":[],"version":"1.2","frontMatter":{"title":"ST_Area","language":"en"},"sidebar":"docs","previous":{"title":"ST_Angle_Sphere","permalink":"/docs/1.2/sql-manual/sql-functions/spatial-functions/st_angle_sphere"},"next":{"title":"St_Point","permalink":"/docs/1.2/sql-manual/sql-functions/spatial-functions/st_point"}}'),s=t("785893"),a=t("250065");let i={title:"ST_Area",language:"en"},l=void 0,o={},_=[{value:"ST_Area_Square_Meters,ST_Area_Square_Km",id:"st_area_square_metersst_area_square_km",level:2},{value:"Syntax",id:"syntax",level:3},{value:"description",id:"description",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function u(e){let n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"st_area_square_metersst_area_square_km",children:"ST_Area_Square_Meters,ST_Area_Square_Km"}),"\n",(0,s.jsx)(n.h3,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"DOUBLE ST_Area_Square_Meters(GEOMETRY geo)\nDOUBLE ST_Area_Square_Km(GEOMETRY geo)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,s.jsx)(n.p,{children:"Calculate the area of the area on the earth's sphere. Currently, the parameter geo supports St_Point, St_LineString, St_Circle and St_Polygon."}),"\n",(0,s.jsx)(n.p,{children:"Returns zero if the input is St_Point, St_LineString."}),"\n",(0,s.jsx)(n.p,{children:"Among them, the unit returned by ST_Area_Square_Meters (GEOMETRY geo) is square meters, and the unit returned by ST_Area_Square_Km (GEOMETRY geo) is square kilometers."}),"\n",(0,s.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"mysql> SELECT ST_Area_Square_Meters(ST_Circle(0, 0, 1));\n+-------------------------------------------------+\n| st_area_square_meters(st_circle(0.0, 0.0, 1.0)) |\n+-------------------------------------------------+\n|                              3.1415926535897869 |\n+-------------------------------------------------+\n1 row in set (0.04 sec)\n\nmysql> SELECT ST_Area_Square_Km(ST_Polygon(\"POLYGON ((0 0, 1 0, 1 1, 0 1, 0 0))\"));\n+----------------------------------------------------------------------+\n| st_area_square_km(st_polygon('POLYGON ((0 0, 1 0, 1 1, 0 1, 0 0))')) |\n+----------------------------------------------------------------------+\n|                                                   12364.036567076409 |\n+----------------------------------------------------------------------+\n1 row in set (0.01 sec)\n\nmysql> SELECT ST_Area_Square_Meters(ST_Point(0, 1));\n+-------------------------------------------+\n| st_area_square_meters(st_point(0.0, 1.0)) |\n+-------------------------------------------+\n|                                         0 |\n+-------------------------------------------+\n1 row in set (0.05 sec)\n\nmysql> SELECT ST_Area_Square_Meters(ST_LineFromText(\"LINESTRING (1 1, 2 2)\"));\n+-----------------------------------------------------------------+\n| st_area_square_meters(st_linefromtext('LINESTRING (1 1, 2 2)')) |\n+-----------------------------------------------------------------+\n|                                                               0 |\n+-----------------------------------------------------------------+\n1 row in set (0.03 sec)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,s.jsx)(n.p,{children:"ST_Area_Square_Meters,ST_Area_Square_Km,ST_Area,ST,Area"})]})}function c(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return i}});var r=t(667294);let s={},a=r.createContext(s);function i(e){let n=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);