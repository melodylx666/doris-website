"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["308257"],{212005:function(n,t,e){e.r(t),e.d(t,{metadata:()=>s,contentTitle:()=>a,default:()=>d,assets:()=>r,toc:()=>c,frontMatter:()=>o});var s=JSON.parse('{"id":"sql-manual/sql-functions/spatial-functions/st-angle","title":"ST_ANGLE","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.0/sql-manual/sql-functions/spatial-functions/st-angle.md","sourceDirName":"sql-manual/sql-functions/spatial-functions","slug":"/sql-manual/sql-functions/spatial-functions/st-angle","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/spatial-functions/st-angle","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"ST_ANGLE","language":"zh-CN"},"sidebar":"docs","previous":{"title":"ST_DISTANCE_SPHERE","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/spatial-functions/st-distance-sphere"},"next":{"title":"ST_AZIMUTH","permalink":"/zh-CN/docs/2.0/sql-manual/sql-functions/spatial-functions/st-azimuth"}}'),i=e("785893"),l=e("250065");let o={title:"ST_ANGLE",language:"zh-CN"},a=void 0,r={},c=[{value:"ST_Angle",id:"st_angle",level:2},{value:"Syntax",id:"syntax",level:3},{value:"description",id:"description",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function u(n){let t={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"st_angle",children:"ST_Angle"}),"\n",(0,i.jsx)(t.h3,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"DOUBLE ST_Angle(GEOPOINT point1, GEOPOINT point2, GEOPOINT point3)"})}),"\n",(0,i.jsx)(t.h3,{id:"description",children:"description"}),"\n",(0,i.jsx)(t.p,{children:"\u8F93\u5165\u4E09\u4E2A\u70B9\uFF0C\u5B83\u4EEC\u8868\u793A\u4E24\u6761\u76F8\u4EA4\u7684\u7EBF\u3002\u8FD4\u56DE\u8FD9\u4E9B\u7EBF\u4E4B\u95F4\u7684\u5939\u89D2\u3002\u70B9 2 \u548C\u70B9 1 \u8868\u793A\u7B2C\u4E00\u6761\u7EBF\uFF0C\u70B9 2 \u548C\u70B9 3 \u8868\u793A\u7B2C\u4E8C\u6761\u7EBF\u3002\u8FD9\u4E9B\u7EBF\u4E4B\u95F4\u7684\u5939\u89D2\u4EE5\u5F27\u5EA6\u8868\u793A\uFF0C\u8303\u56F4\u4E3A [0, 2pi)\u3002\u5939\u89D2\u6309\u987A\u65F6\u9488\u65B9\u5411\u4ECE\u7B2C\u4E00\u6761\u7EBF\u5F00\u59CB\u6D4B\u91CF\uFF0C\u76F4\u81F3\u7B2C\u4E8C\u6761\u7EBF\u3002"}),"\n",(0,i.jsx)(t.p,{children:"ST_ANGLE \u5B58\u5728\u4EE5\u4E0B\u8FB9\u7F18\u60C5\u51B5\uFF1A"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"\u5982\u679C\u70B9 2 \u548C\u70B9 3 \u76F8\u540C\uFF0C\u5219\u8FD4\u56DE NULL\u3002"}),"\n",(0,i.jsx)(t.li,{children:"\u5982\u679C\u70B9 2 \u548C\u70B9 1 \u76F8\u540C\uFF0C\u5219\u8FD4\u56DE NULL\u3002"}),"\n",(0,i.jsx)(t.li,{children:"\u5982\u679C\u70B9 2 \u548C\u70B9 3 \u662F\u5B8C\u5168\u5BF9\u6620\u70B9\uFF0C\u5219\u8FD4\u56DE NULL\u3002"}),"\n",(0,i.jsx)(t.li,{children:"\u5982\u679C\u70B9 2 \u548C\u70B9 1 \u662F\u5B8C\u5168\u5BF9\u6620\u70B9\uFF0C\u5219\u8FD4\u56DE NULL\u3002"}),"\n",(0,i.jsx)(t.li,{children:"\u5982\u679C\u4EFB\u4F55\u8F93\u5165\u5730\u7406\u4F4D\u7F6E\u4E0D\u662F\u5355\u70B9\u6216\u4E3A\u7A7A\u5730\u7406\u4F4D\u7F6E\uFF0C\u5219\u4F1A\u629B\u51FA\u9519\u8BEF\u3002"}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"example",children:"example"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"mysql> SELECT ST_Angle(ST_Point(1, 0),ST_Point(0, 0),ST_Point(0, 1));\n+----------------------------------------------------------------------+\n| st_angle(st_point(1.0, 0.0), st_point(0.0, 0.0), st_point(0.0, 1.0)) |\n+----------------------------------------------------------------------+\n|                                                     4.71238898038469 |\n+----------------------------------------------------------------------+\n1 row in set (0.04 sec)\n\nmysql> SELECT ST_Angle(ST_Point(0, 0),ST_Point(1, 0),ST_Point(0, 1));\n+----------------------------------------------------------------------+\n| st_angle(st_point(0.0, 0.0), st_point(1.0, 0.0), st_point(0.0, 1.0)) |\n+----------------------------------------------------------------------+\n|                                                  0.78547432161873854 |\n+----------------------------------------------------------------------+\n1 row in set (0.02 sec)\n\nmysql> SELECT ST_Angle(ST_Point(1, 0),ST_Point(0, 0),ST_Point(1, 0));\n+----------------------------------------------------------------------+\n| st_angle(st_point(1.0, 0.0), st_point(0.0, 0.0), st_point(1.0, 0.0)) |\n+----------------------------------------------------------------------+\n|                                                                    0 |\n+----------------------------------------------------------------------+\n1 row in set (0.02 sec)\n\nmysql> SELECT ST_Angle(ST_Point(1, 0),ST_Point(0, 0),ST_Point(0, 0));\n+----------------------------------------------------------------------+\n| st_angle(st_point(1.0, 0.0), st_point(0.0, 0.0), st_point(0.0, 0.0)) |\n+----------------------------------------------------------------------+\n|                                                                 NULL |\n+----------------------------------------------------------------------+\n1 row in set (0.03 sec)\n\nmysql> SELECT ST_Angle(ST_Point(0, 0),ST_Point(-30, 0),ST_Point(150, 0));\n+--------------------------------------------------------------------------+\n| st_angle(st_point(0.0, 0.0), st_point(-30.0, 0.0), st_point(150.0, 0.0)) |\n+--------------------------------------------------------------------------+\n|                                                                     NULL |\n+--------------------------------------------------------------------------+\n1 row in set (0.02 sec)\n"})}),"\n",(0,i.jsx)(t.h3,{id:"keywords",children:"keywords"}),"\n",(0,i.jsx)(t.p,{children:"ST_ANGLE,ST,ANGLE"})]})}function d(n={}){let{wrapper:t}={...(0,l.a)(),...n.components};return t?(0,i.jsx)(t,{...n,children:(0,i.jsx)(u,{...n})}):u(n)}},250065:function(n,t,e){e.d(t,{Z:function(){return a},a:function(){return o}});var s=e(667294);let i={},l=s.createContext(i);function o(n){let t=s.useContext(l);return s.useMemo(function(){return"function"==typeof n?n(t):{...t,...n}},[t,n])}function a(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:o(n.components),s.createElement(l.Provider,{value:t},n.children)}}}]);