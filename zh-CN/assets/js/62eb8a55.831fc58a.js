"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["180128"],{970084:function(e,r,n){n.r(r),n.d(r,{metadata:()=>s,contentTitle:()=>l,default:()=>L,assets:()=>i,toc:()=>c,frontMatter:()=>o});var s=JSON.parse('{"id":"sql-manual/sql-functions/array-functions/array-reverse-sort","title":"ARRAY_REVERSE_SORT","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/sql-manual/sql-functions/array-functions/array-reverse-sort.md","sourceDirName":"sql-manual/sql-functions/array-functions","slug":"/sql-manual/sql-functions/array-functions/array-reverse-sort","permalink":"/zh-CN/docs/sql-manual/sql-functions/array-functions/array-reverse-sort","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"ARRAY_REVERSE_SORT","language":"zh-CN"},"sidebar":"docs","previous":{"title":"ARRAY_SORT","permalink":"/zh-CN/docs/sql-manual/sql-functions/array-functions/array-sort"},"next":{"title":"ARRAY_SORTBY","permalink":"/zh-CN/docs/sql-manual/sql-functions/array-functions/array-sortby"}}'),a=n("785893"),t=n("250065");let o={title:"ARRAY_REVERSE_SORT",language:"zh-CN"},l=void 0,i={},c=[{value:"array_reverse_sort",id:"array_reverse_sort",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function u(e){let r={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.h2,{id:"array_reverse_sort",children:"array_reverse_sort"}),"\n",(0,a.jsx)(r.p,{children:"array_reverse_sort"}),"\n",(0,a.jsx)(r.h3,{id:"description",children:"description"}),"\n",(0,a.jsx)(r.h4,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.code,{children:"ARRAY<T> array_reverse_sort(ARRAY<T> arr)"})}),"\n",(0,a.jsx)(r.p,{children:"\u8FD4\u56DE\u6309\u964D\u5E8F\u6392\u5217\u540E\u7684\u6570\u7EC4\uFF0C\u5982\u679C\u8F93\u5165\u6570\u7EC4\u4E3A NULL\uFF0C\u5219\u8FD4\u56DE NULL\u3002\n\u5982\u679C\u6570\u7EC4\u5143\u7D20\u5305\u542B NULL, \u5219\u8F93\u51FA\u7684\u6392\u5E8F\u6570\u7EC4\u4F1A\u5C06 NULL \u653E\u5728\u6700\u540E\u9762\u3002"}),"\n",(0,a.jsx)(r.h3,{id:"example",children:"example"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-mysql>",metastring:"select k1, k2, array_reverse_sort(k2) from array_test;",children:"+------+-----------------------------+-----------------------------+\n| k1   | k2                          | array_reverse_sort(`k2`)    |\n+------+-----------------------------+-----------------------------+\n|  1   | [1, 2, 3, 4, 5]             | [5, 4, 3, 2, 1]             |\n|  2   | [6, 7, 8]                   | [8, 7, 6]                   |\n|  3   | []                          | []                          |\n|  4   | NULL                        | NULL                        |\n|  5   | [1, 2, 3, 4, 5, 4, 3, 2, 1] | [5, 4, 4, 3, 3, 2, 2, 1, 1] |\n|  6   | [1, 2, 3, NULL]             | [3, 2, 1, NULL]             |\n|  7   | [1, 2, 3, NULL, NULL]       | [3, 2, 1, NULL, NULL]       |\n|  8   | [1, 1, 2, NULL, NULL]       | [2, 1, 1, NULL, NULL]       |\n|  9   | [1, NULL, 1, 2, NULL, NULL] | [2, 1, 1, NULL, NULL, NULL] |\n+------+-----------------------------+-----------------------------+\n\nmysql> select k1, k2, array_reverse_sort(k2) from array_test01;\n+------+------------------------------------------+------------------------------------------+\n| k1   | k2                                       | array_reverse_sort(`k2`)                 |\n+------+------------------------------------------+------------------------------------------+\n|  1   | ['a', 'b', 'c', 'd', 'e']                | ['e', 'd', 'c', 'b', 'a']                |\n|  2   | ['f', 'g', 'h']                          | ['h', 'g', 'f']                          |\n|  3   | ['']                                     | ['']                                     |\n|  3   | [NULL]                                   | [NULL]                                   |\n|  5   | ['a', 'b', 'c', 'd', 'e', 'a', 'b', 'c'] | ['e', 'd', 'c', 'c', 'b', 'b', 'a', 'a'] |\n|  6   | NULL                                     | NULL                                     |\n|  7   | ['a', 'b', NULL]                         | ['b', 'a', NULL]                         |\n|  8   | ['a', 'b', NULL, NULL]                   | ['b', 'a', NULL, NULL]                  |\n+------+------------------------------------------+------------------------------------------+\n"})}),"\n",(0,a.jsx)(r.h3,{id:"keywords",children:"keywords"}),"\n",(0,a.jsx)(r.p,{children:"ARRAY, SORT, REVERSE, ARRAY_SORT, ARRAY_REVERSE_SORT"})]})}function L(e={}){let{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return l},a:function(){return o}});var s=n(667294);let a={},t=s.createContext(a);function o(e){let r=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(t.Provider,{value:r},e.children)}}}]);