"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["637269"],{246641:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>a,default:()=>d,assets:()=>l,toc:()=>c,frontMatter:()=>o});var t=JSON.parse('{"id":"sql-manual/sql-functions/string-functions/esquery","title":"ESQUERY","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-functions/string-functions/esquery.md","sourceDirName":"sql-manual/sql-functions/string-functions","slug":"/sql-manual/sql-functions/string-functions/esquery","permalink":"/docs/3.0/sql-manual/sql-functions/string-functions/esquery","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"ESQUERY","language":"en"},"sidebar":"docs","previous":{"title":"SPACE","permalink":"/docs/3.0/sql-manual/sql-functions/string-functions/space"},"next":{"title":"random_bytes","permalink":"/docs/3.0/sql-manual/sql-functions/string-functions/random-bytes"}}'),r=s("785893"),i=s("250065");let o={title:"ESQUERY",language:"en"},a=void 0,l={},c=[{value:"esquery",id:"esquery",level:2},{value:"description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function u(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"esquery",children:"esquery"}),"\n",(0,r.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,r.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"boolean esquery(varchar field, varchar QueryDSL)"})}),"\n",(0,r.jsx)(n.p,{children:"Use the esquery (field, QueryDSL) function to match queries that cannot be expressed in SQL are pushed down to Elasticsearch for filtering.\nThe first column name parameter of esquery is used to associate indexes, and the second parameter is the json expression of the basic query DSL of ES, which is contained in curly brackets {}. There is one and only one root key of json, such as match_phrase\u3001geo_Shape, bool."}),"\n",(0,r.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'match_phrase SQL:\n\nselect * from es_table where esquery(k4, \'{\n        "match_phrase": {\n           "k4": "doris on es"\n        }\n    }\');\n\n\ngeo SQL:\n\nselect * from es_table where esquery(k4, \'{\n      "geo_shape": {\n         "location": {\n            "shape": {\n               "type": "envelope",\n               "coordinates": [\n                  [\n                     13,\n                     53\n                  ],\n                  [\n                     14,\n                     52\n                  ]\n               ]\n            },\n            "relation": "within"\n         }\n      }\n   }\');\n'})}),"\n",(0,r.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"esquery\n"})})]})}function d(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return o}});var t=s(667294);let r={},i=t.createContext(r);function o(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);