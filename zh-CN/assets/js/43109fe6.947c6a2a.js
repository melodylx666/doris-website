"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["440818"],{578364:function(n,e,t){t.r(e),t.d(e,{metadata:()=>i,contentTitle:()=>o,default:()=>u,assets:()=>a,toc:()=>c,frontMatter:()=>l});var i=JSON.parse('{"id":"sql-manual/sql-statements/function/SHOW-FUNCTIONS","title":"SHOW FUNCTIONS","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-statements/function/SHOW-FUNCTIONS.md","sourceDirName":"sql-manual/sql-statements/function","slug":"/sql-manual/sql-statements/function/SHOW-FUNCTIONS","permalink":"/zh-CN/docs/sql-manual/sql-statements/function/SHOW-FUNCTIONS","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"SHOW FUNCTIONS","language":"zh-CN"},"sidebar":"docs","previous":{"title":"DESC FUNCTION","permalink":"/zh-CN/docs/sql-manual/sql-statements/function/DESC-FUNCTION"},"next":{"title":"ANALYZE","permalink":"/zh-CN/docs/sql-manual/sql-statements/statistics/ANALYZE"}}'),s=t("785893"),r=t("250065");let l={title:"SHOW FUNCTIONS",language:"zh-CN"},o=void 0,a={},c=[{value:"\u63CF\u8FF0",id:"\u63CF\u8FF0",level:2},{value:"\u793A\u4F8B",id:"\u793A\u4F8B",level:2},{value:"\u5173\u952E\u8BCD",id:"\u5173\u952E\u8BCD",level:2},{value:"\u6700\u4F73\u5B9E\u8DF5",id:"\u6700\u4F73\u5B9E\u8DF5",level:2}];function d(n){let e={blockquote:"blockquote",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h2,{id:"\u63CF\u8FF0",children:"\u63CF\u8FF0"}),"\n",(0,s.jsx)(e.p,{children:"\u67E5\u770B\u6570\u636E\u5E93\u4E0B\u6240\u6709\u7684\u81EA\u5B9A\u4E49 (\u7CFB\u7EDF\u63D0\u4F9B) \u7684\u51FD\u6570\u3002\u5982\u679C\u7528\u6237\u6307\u5B9A\u4E86\u6570\u636E\u5E93\uFF0C\u90A3\u4E48\u67E5\u770B\u5BF9\u5E94\u6570\u636E\u5E93\u7684\uFF0C\u5426\u5219\u76F4\u63A5\u67E5\u8BE2\u5F53\u524D\u4F1A\u8BDD\u6240\u5728\u6570\u636E\u5E93"}),"\n",(0,s.jsxs)(e.p,{children:["\u9700\u8981\u5BF9\u8FD9\u4E2A\u6570\u636E\u5E93\u62E5\u6709 ",(0,s.jsx)(e.code,{children:"SHOW"})," \u6743\u9650"]}),"\n",(0,s.jsx)(e.p,{children:"\u8BED\u6CD5"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"SHOW [FULL] [BUILTIN] FUNCTIONS [IN|FROM db] [LIKE 'function_pattern']\n"})}),"\n",(0,s.jsx)(e.p,{children:"Parameters"}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"full"}),":\u8868\u793A\u663E\u793A\u51FD\u6570\u7684\u8BE6\u7EC6\u4FE1\u606F\n",(0,s.jsx)(e.code,{children:"builtin"}),":\u8868\u793A\u663E\u793A\u7CFB\u7EDF\u63D0\u4F9B\u7684\u51FD\u6570\n",(0,s.jsx)(e.code,{children:"db"}),": \u8981\u67E5\u8BE2\u7684\u6570\u636E\u5E93\u540D\u5B57\n",(0,s.jsx)(e.code,{children:"function_pattern"}),": \u7528\u6765\u8FC7\u6EE4\u51FD\u6570\u540D\u79F0\u7684\u53C2\u6570"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u8BED\u6CD5"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:"SHOW GLOBAL [FULL] FUNCTIONS [LIKE 'function_pattern']\n"})}),"\n",(0,s.jsx)(e.p,{children:"Parameters"}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"global"}),":\u8868\u793A\u8981\u5C55\u793A\u7684\u662F\u5168\u5C40\u51FD\u6570\n",(0,s.jsx)(e.code,{children:"full"}),":\u8868\u793A\u663E\u793A\u51FD\u6570\u7684\u8BE6\u7EC6\u4FE1\u606F\n",(0,s.jsx)(e.code,{children:"function_pattern"}),": \u7528\u6765\u8FC7\u6EE4\u51FD\u6570\u540D\u79F0\u7684\u53C2\u6570"]}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:'\u6CE8\u610F\uFF1A"global"\u5173\u952E\u5B57\u5728 v2.0 \u7248\u672C\u53CA\u4EE5\u540E\u624D\u53EF\u7528'})}),"\n",(0,s.jsx)(e.h2,{id:"\u793A\u4F8B",children:"\u793A\u4F8B"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-sql",children:'mysql> show full functions in testDb\\G\n*************************** 1. row ***************************\n        Signature: my_add(INT,INT)\n      Return Type: INT\n    Function Type: Scalar\nIntermediate Type: NULL\n       Properties: {"symbol":"_ZN9doris_udf6AddUdfEPNS_15FunctionContextERKNS_6IntValES4_","object_file":"http://host:port/libudfsample.so","md5":"cfe7a362d10f3aaf6c49974ee0f1f878"}\n*************************** 2. row ***************************\n        Signature: my_count(BIGINT)\n      Return Type: BIGINT\n    Function Type: Aggregate\nIntermediate Type: NULL\n       Properties: {"object_file":"http://host:port/libudasample.so","finalize_fn":"_ZN9doris_udf13CountFinalizeEPNS_15FunctionContextERKNS_9BigIntValE","init_fn":"_ZN9doris_udf9CountInitEPNS_15FunctionContextEPNS_9BigIntValE","merge_fn":"_ZN9doris_udf10CountMergeEPNS_15FunctionContextERKNS_9BigIntValEPS2_","md5":"37d185f80f95569e2676da3d5b5b9d2f","update_fn":"_ZN9doris_udf11CountUpdateEPNS_15FunctionContextERKNS_6IntValEPNS_9BigIntValE"}\n*************************** 3. row ***************************\n        Signature: id_masking(BIGINT)\n      Return Type: VARCHAR\n    Function Type: Alias\nIntermediate Type: NULL\n       Properties: {"parameter":"id","origin_function":"concat(left(`id`, 3), `****`, right(`id`, 4))"}\n\n3 rows in set (0.00 sec)\nmysql> show builtin functions in testDb like \'year%\';\n+---------------+\n| Function Name |\n+---------------+\n| year          |\n| years_add     |\n| years_diff    |\n| years_sub     |\n+---------------+\n2 rows in set (0.00 sec)\n    \nmysql> show global full functions\\G;\n*************************** 1. row ***************************\n        Signature: decimal(ALL, INT, INT)\n      Return Type: VARCHAR\n    Function Type: Alias\nIntermediate Type: NULL\n       Properties: {"parameter":"col, precision, scale","origin_function":"CAST(`col` AS decimal(`precision`, `scale`))"}\n*************************** 2. row ***************************\n        Signature: id_masking(BIGINT)\n      Return Type: VARCHAR\n    Function Type: Alias\nIntermediate Type: NULL\n       Properties: {"parameter":"id","origin_function":"concat(left(`id`, 3), `****`, right(`id`, 4))"}\n2 rows in set (0.00 sec)\n    \nmysql> show global functions ;\n+---------------+\n| Function Name |\n+---------------+\n| decimal       |\n| id_masking    |\n+---------------+\n2 rows in set (0.00 sec)\n\n'})}),"\n",(0,s.jsx)(e.h2,{id:"\u5173\u952E\u8BCD",children:"\u5173\u952E\u8BCD"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{children:"SHOW, FUNCTIONS\n"})}),"\n",(0,s.jsx)(e.h2,{id:"\u6700\u4F73\u5B9E\u8DF5",children:"\u6700\u4F73\u5B9E\u8DF5"})]})}function u(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},250065:function(n,e,t){t.d(e,{Z:function(){return o},a:function(){return l}});var i=t(667294);let s={},r=i.createContext(s);function l(n){let e=i.useContext(r);return i.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:l(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);