"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["414880"],{696808:function(n,e,s){s.r(e),s.d(e,{metadata:()=>t,contentTitle:()=>r,default:()=>a,assets:()=>d,toc:()=>c,frontMatter:()=>i});var t=JSON.parse('{"id":"sql-manual/sql-functions/json-functions/get-json-double","title":"GET_JSON_DOUBLE","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-functions/json-functions/get-json-double.md","sourceDirName":"sql-manual/sql-functions/json-functions","slug":"/sql-manual/sql-functions/json-functions/get-json-double","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/json-functions/get-json-double","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"GET_JSON_DOUBLE","language":"zh-CN"},"sidebar":"docs","previous":{"title":"JSON_LENGTH","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/json-functions/json-length"},"next":{"title":"GET_JSON_INT","permalink":"/zh-CN/docs/dev/sql-manual/sql-functions/json-functions/get-json-int"}}'),l=s("785893"),o=s("250065");let i={title:"GET_JSON_DOUBLE",language:"zh-CN"},r=void 0,d={},c=[{value:"get_json_double",id:"get_json_double",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function u(n){let e={code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h2,{id:"get_json_double",children:"get_json_double"}),"\n",(0,l.jsx)(e.h3,{id:"description",children:"description"}),"\n",(0,l.jsx)(e.h4,{id:"syntax",children:"Syntax"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.code,{children:"DOUBLE get_json_double(VARCHAR json_str, VARCHAR json_path)"})}),"\n",(0,l.jsx)(e.p,{children:'\u89E3\u6790\u5E76\u83B7\u53D6 json \u5B57\u7B26\u4E32\u5185\u6307\u5B9A\u8DEF\u5F84\u7684\u6D6E\u70B9\u578B\u5185\u5BB9\u3002\n\u5176\u4E2D json_path \u5FC5\u987B\u4EE5 $ \u7B26\u53F7\u4F5C\u4E3A\u5F00\u5934\uFF0C\u4F7F\u7528 . \u4F5C\u4E3A\u8DEF\u5F84\u5206\u5272\u7B26\u3002\u5982\u679C\u8DEF\u5F84\u4E2D\u5305\u542B . \uFF0C\u5219\u53EF\u4EE5\u4F7F\u7528\u53CC\u5F15\u53F7\u5305\u56F4\u3002\n\u4F7F\u7528 [ ] \u8868\u793A\u6570\u7EC4\u4E0B\u6807\uFF0C\u4ECE 0 \u5F00\u59CB\u3002\npath \u7684\u5185\u5BB9\u4E0D\u80FD\u5305\u542B ", [ \u548C ]\u3002\n\u5982\u679C json_string \u683C\u5F0F\u4E0D\u5BF9\uFF0C\u6216 json_path \u683C\u5F0F\u4E0D\u5BF9\uFF0C\u6216\u65E0\u6CD5\u627E\u5230\u5339\u914D\u9879\uFF0C\u5219\u8FD4\u56DE NULL\u3002'}),"\n",(0,l.jsx)(e.p,{children:"\u53E6\u5916\uFF0C\u63A8\u8350\u4F7F\u7528jsonb\u7C7B\u578B\u548Cjsonb_extract_XXX\u51FD\u6570\u5B9E\u73B0\u540C\u6837\u7684\u529F\u80FD\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u7279\u6B8A\u60C5\u51B5\u5904\u7406\u5982\u4E0B\uFF1A"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u5982\u679C json_path \u6307\u5B9A\u7684\u5B57\u6BB5\u5728JSON\u4E2D\u4E0D\u5B58\u5728\uFF0C\u8FD4\u56DENULL"}),"\n",(0,l.jsx)(e.li,{children:"\u5982\u679C json_path \u6307\u5B9A\u7684\u5B57\u6BB5\u5728JSON\u4E2D\u7684\u5B9E\u9645\u7C7B\u578B\u548Cjson_extract_t\u6307\u5B9A\u7684\u7C7B\u578B\u4E0D\u4E00\u81F4\uFF0C\u5982\u679C\u80FD\u65E0\u635F\u8F6C\u6362\u6210\u6307\u5B9A\u7C7B\u578B\u8FD4\u56DE\u6307\u5B9A\u7C7B\u578Bt\uFF0C\u5982\u679C\u4E0D\u80FD\u5219\u8FD4\u56DENULL"}),"\n"]}),"\n",(0,l.jsx)(e.h3,{id:"example",children:"example"}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsx)(e.li,{children:'\u83B7\u53D6 key \u4E3A "k1" \u7684 value'}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:'mysql> SELECT get_json_double(\'{"k1":1.3, "k2":"2"}\', "$.k1");\n+-------------------------------------------------+\n| get_json_double(\'{"k1":1.3, "k2":"2"}\', \'$.k1\') |\n+-------------------------------------------------+\n|                                             1.3 |\n+-------------------------------------------------+\n'})}),"\n",(0,l.jsxs)(e.ol,{start:"2",children:["\n",(0,l.jsx)(e.li,{children:'\u83B7\u53D6 key \u4E3A "my.key" \u7684\u6570\u7EC4\u4E2D\u7B2C\u4E8C\u4E2A\u5143\u7D20'}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:'mysql> SELECT get_json_double(\'{"k1":"v1", "my.key":[1.1, 2.2, 3.3]}\', \'$."my.key"[1]\');\n+---------------------------------------------------------------------------+\n| get_json_double(\'{"k1":"v1", "my.key":[1.1, 2.2, 3.3]}\', \'$."my.key"[1]\') |\n+---------------------------------------------------------------------------+\n|                                                                       2.2 |\n+---------------------------------------------------------------------------+\n'})}),"\n",(0,l.jsxs)(e.ol,{start:"3",children:["\n",(0,l.jsx)(e.li,{children:"\u83B7\u53D6\u4E8C\u7EA7\u8DEF\u5F84\u4E3A k1.key -> k2 \u7684\u6570\u7EC4\u4E2D\uFF0C\u7B2C\u4E00\u4E2A\u5143\u7D20"}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:'mysql> SELECT get_json_double(\'{"k1.key":{"k2":[1.1, 2.2]}}\', \'$."k1.key".k2[0]\');\n+---------------------------------------------------------------------+\n| get_json_double(\'{"k1.key":{"k2":[1.1, 2.2]}}\', \'$."k1.key".k2[0]\') |\n+---------------------------------------------------------------------+\n|                                                                 1.1 |\n+---------------------------------------------------------------------+\n'})}),"\n",(0,l.jsx)(e.h3,{id:"keywords",children:"keywords"}),"\n",(0,l.jsx)(e.p,{children:"GET_JSON_DOUBLE,GET,JSON,DOUBLE"})]})}function a(n={}){let{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(u,{...n})}):u(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return r},a:function(){return i}});var t=s(667294);let l={},o=t.createContext(l);function i(n){let e=t.useContext(o);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:i(n.components),t.createElement(o.Provider,{value:e},n.children)}}}]);