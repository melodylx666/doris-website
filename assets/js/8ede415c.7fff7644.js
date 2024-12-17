"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["650324"],{193972:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>r,default:()=>u,assets:()=>l,toc:()=>c,frontMatter:()=>a});var t=JSON.parse('{"id":"sql-manual/sql-functions/json-functions/json-set","title":"JSON_SET","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/sql-manual/sql-functions/json-functions/json-set.md","sourceDirName":"sql-manual/sql-functions/json-functions","slug":"/sql-manual/sql-functions/json-functions/json-set","permalink":"/docs/2.0/sql-manual/sql-functions/json-functions/json-set","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"JSON_SET","language":"en"},"sidebar":"docs","previous":{"title":"JSON_REPLACE","permalink":"/docs/2.0/sql-manual/sql-functions/json-functions/json-replace"},"next":{"title":"MURMUR_HASH3_32","permalink":"/docs/2.0/sql-manual/sql-functions/hash-functions/murmur-hash3-32"}}'),i=s("785893"),o=s("250065");let a={title:"JSON_SET",language:"en"},r=void 0,l={},c=[{value:"json_set",id:"json_set",level:2},{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function d(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"json_set",children:"json_set"}),"\n",(0,i.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"VARCHAR json_set(VARCHAR json_str, VARCHAR path, VARCHAR val[, VARCHAR path, VARCHAR val] ...)"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"json_set"})," function inserts or updates data in a JSON and returns the result.Returns NULL if ",(0,i.jsx)(n.code,{children:"json_str"})," or ",(0,i.jsx)(n.code,{children:"path"})," is NULL. Otherwise, an error occurs if the ",(0,i.jsx)(n.code,{children:"json_str"})," argument is not a valid JSON or any path argument is not a valid path expression or contains a * wildcard."]}),"\n",(0,i.jsx)(n.p,{children:"The path-value pairs are evaluated left to right."}),"\n",(0,i.jsx)(n.p,{children:"A path-value pair for an existing path in the json overwrites the existing json value with the new value. A path-value pair for a nonexisting path in the json adds the value to the json if the path identifies one of these types of values:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"A member not present in an existing object. The member is added to the object and associated with the new value."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"A position past the end of an existing array. The array is extended with the new value. If the existing value is not an array, it is autowrapped as an array, then extended with the new value."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Otherwise, a path-value pair for a nonexisting path in the json is ignored and has no effect."}),"\n",(0,i.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"MySQL> select json_set(null, null, null);\n+------------------------------+\n| json_set(NULL, NULL, 'NULL') |\n+------------------------------+\n| NULL                         |\n+------------------------------+\n\nMySQL> select json_set('{\"k\": 1}', \"$.k\", 2);\n+------------------------------------+\n| json_set('{\\\"k\\\": 1}', '$.k', '2') |\n+------------------------------------+\n| {\"k\":2}                            |\n+------------------------------------+\n\nMySQL> select json_set('{\"k\": 1}', \"$.j\", 2);\n+------------------------------------+\n| json_set('{\\\"k\\\": 1}', '$.j', '2') |\n+------------------------------------+\n| {\"k\":1,\"j\":2}                      |\n+------------------------------------+\n"})}),"\n",(0,i.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,i.jsx)(n.p,{children:"JSON, json_set"})]})}function u(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return r},a:function(){return a}});var t=s(667294);let i={},o=t.createContext(i);function a(e){let n=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);