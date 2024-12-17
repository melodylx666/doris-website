"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["921362"],{556578:function(e,t,n){n.r(t),n.d(t,{metadata:()=>a,contentTitle:()=>o,default:()=>u,assets:()=>l,toc:()=>c,frontMatter:()=>i});var a=JSON.parse('{"id":"sql-manual/sql-data-types/aggregate/AGG-STATE","title":"AGG_STATE","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-data-types/aggregate/AGG-STATE.md","sourceDirName":"sql-manual/sql-data-types/aggregate","slug":"/sql-manual/sql-data-types/aggregate/AGG-STATE","permalink":"/docs/sql-manual/sql-data-types/aggregate/AGG-STATE","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"AGG_STATE","language":"en"},"sidebar":"docs","previous":{"title":"QUANTILE_STATE","permalink":"/docs/sql-manual/sql-data-types/aggregate/QUANTILE-STATE"},"next":{"title":"IPV4","permalink":"/docs/sql-manual/sql-data-types/ip/IPV4"}}'),s=n("785893"),r=n("250065");let i={title:"AGG_STATE",language:"en"},o=void 0,l={},c=[{value:"AGG_STATE",id:"agg_state",level:2},{value:"description",id:"description",level:3},{value:"example",id:"example",level:3},{value:"keywords",id:"keywords",level:3}];function d(e){let t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"agg_state",children:"AGG_STATE"}),"\n",(0,s.jsx)(t.h3,{id:"description",children:"description"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"  AGG_STATE cannot be used as a key column, and the signature of the aggregation function must be declared at the same time when creating the table.\n  User does not need to specify length and default value. The actual stored data size is related to the function implementation.\n"})}),"\n",(0,s.jsxs)(t.p,{children:["AGG_STATE can only be used with ",(0,s.jsx)(t.a,{href:"/docs/sql-manual/sql-functions/combinators/state",children:"state"}),"\n/",(0,s.jsx)(t.a,{href:"/docs/sql-manual/sql-functions/combinators/merge",children:"merge"}),"/",(0,s.jsx)(t.a,{href:"/docs/sql-manual/sql-functions/combinators/union",children:"union"})," function combiner usage."]}),"\n",(0,s.jsxs)(t.p,{children:["It should be noted that the signature of the aggregation function is also part of the type, and agg_state with different signatures cannot be mixed. For example, if the signature of the table creation statement is ",(0,s.jsx)(t.code,{children:"max_by(int,int)"}),", then ",(0,s.jsx)(t.code,{children:"max_by(bigint,int)"})," or ",(0,s.jsx)(t.code,{children:"group_concat(varchar)"})," cannot be inserted.\nThe nullable attribute here is also part of the signature. If you can confirm that you will not enter a null value, you can declare the parameter as not null, which can obtain a smaller storage size and reduce serialization/deserialization overhead."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Note: Because agg_state stores the intermediate result of the aggregation function, the read and write process is strongly dependent on the specific implementation of the aggregation function, if the implementation of the aggregation function is modified during the Doris version upgrade, it may cause incompatible situations. If the incompatibility occurs, the materialized view using the corresponding agg_state needs to be dropped and recreated, and the underlying aggregation table involved will be directly unavailable, so you need to use agg_state with caution."})}),"\n",(0,s.jsx)(t.h3,{id:"example",children:"example"}),"\n",(0,s.jsx)(t.p,{children:"Create table example:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:'  -- after doris-2.1.1\n  create table a_table(\n      k1 int null,\n      k2 agg_state<max_by(int not null,int)> generic,\n      k3 agg_state<group_concat(string) generic\n  )\n  aggregate key (k1)\n  distributed BY hash(k1) buckets 3\n  properties("replication_num" = "1");  \n\n  -- until doris-2.1.0\n  create table a_table(\n      k1 int null,\n      k2 agg_state max_by(int not null,int),\n      k3 agg_state group_concat(string)\n  )\n  aggregate key (k1)\n  distributed BY hash(k1) buckets 3\n  properties("replication_num" = "1");\n'})}),"\n",(0,s.jsx)(t.p,{children:"Here k2 and k3 use max_by and group_concat as aggregation types respectively."}),"\n",(0,s.jsx)(t.p,{children:"Insert data example:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"    insert into a_table values(1,max_by_state(3,1),group_concat_state('a'));\n    insert into a_table values(1,max_by_state(2,2),group_concat_state('bb'));\n    insert into a_table values(2,max_by_state(1,3),group_concat_state('ccc'));\n"})}),"\n",(0,s.jsxs)(t.p,{children:["For the agg_state column, the insert statement must use the ",(0,s.jsx)(t.a,{href:"/docs/sql-manual/sql-functions/combinators/state",children:"state"})," function to generate the corresponding agg_state data, where the functions and input parameter types must completely correspond to agg_state."]}),"\n",(0,s.jsx)(t.p,{children:"Select data example:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"    mysql [test]>select k1,max_by_merge(k2),group_concat_merge(k3) from a_table group by k1 order by k1;\n    +------+--------------------+--------------------------+\n    | k1   | max_by_merge(`k2`) | group_concat_merge(`k3`) |\n    +------+--------------------+--------------------------+\n    |    1 |                  2 | bb,a                     |\n    |    2 |                  1 | ccc                      |\n    +------+--------------------+--------------------------+\n"})}),"\n",(0,s.jsxs)(t.p,{children:["If you need to get the actual result, you need to use the corresponding ",(0,s.jsx)(t.a,{href:"/docs/sql-manual/sql-functions/combinators/merge",children:"merge"})," function."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"    mysql [test]>select max_by_merge(u2),group_concat_merge(u3) from (\n    select k1,max_by_union(k2) as u2,group_concat_union(k3) u3 from a_table group by k1 order by k1\n    ) t;\n    +--------------------+--------------------------+\n    | max_by_merge(`u2`) | group_concat_merge(`u3`) |\n    +--------------------+--------------------------+\n    |                  1 | ccc,bb,a                 |\n    +--------------------+--------------------------+\n"})}),"\n",(0,s.jsxs)(t.p,{children:["If you want to aggregate only the agg_state without getting the actual result during the process, you can use the ",(0,s.jsx)(t.a,{href:"/docs/sql-manual/sql-functions/combinators/union",children:"union"})," function."]}),"\n",(0,s.jsxs)(t.p,{children:["For more examples, see ",(0,s.jsx)(t.a,{href:"https://github.com/apache/doris/tree/master/regression-test/suites/datatype_p0/agg_state",children:"datatype_p0/agg_state"})]}),"\n",(0,s.jsx)(t.h3,{id:"keywords",children:"keywords"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"AGG_STATE\n"})})]})}function u(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return o},a:function(){return i}});var a=n(667294);let s={},r=a.createContext(s);function i(e){let t=a.useContext(r);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);