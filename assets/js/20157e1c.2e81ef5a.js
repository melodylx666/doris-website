"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["863129"],{898969:function(e,n,i){i.r(n),i.d(n,{metadata:()=>t,contentTitle:()=>r,default:()=>d,assets:()=>c,toc:()=>l,frontMatter:()=>o});var t=JSON.parse('{"id":"query-acceleration/tuning/tuning-plan/optimizing-table-schema","title":"Optimizing Table Schema Design","description":"\x3c!--","source":"@site/docs/query-acceleration/tuning/tuning-plan/optimizing-table-schema.md","sourceDirName":"query-acceleration/tuning/tuning-plan","slug":"/query-acceleration/tuning/tuning-plan/optimizing-table-schema","permalink":"/docs/dev/query-acceleration/tuning/tuning-plan/optimizing-table-schema","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Optimizing Table Schema Design","language":"en"},"sidebar":"docs","previous":{"title":"Query Profile","permalink":"/docs/dev/query-acceleration/tuning/query-profile"},"next":{"title":"Optimizing Table Index Design","permalink":"/docs/dev/query-acceleration/tuning/tuning-plan/optimizing-table-index"}}'),s=i("785893"),a=i("250065");let o={title:"Optimizing Table Schema Design",language:"en"},r=void 0,c={},l=[{value:"Case 1: Table Engine Selection",id:"case-1-table-engine-selection",level:2},{value:"Case 2: Bucket Column Selection",id:"case-2-bucket-column-selection",level:2},{value:"Case 3: Key Column Optimization",id:"case-3-key-column-optimization",level:2},{value:"Case 4: Field Type Optimization",id:"case-4-field-type-optimization",level:2},{value:"Summary",id:"summary",level:2}];function u(e){let n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"In Schema design and tuning, table Schema design is a crucial part, encompassing table engine selection, partition and bucket column selection, partition and bucket size settings, key column and field type optimization, etc. Systems lacking proper Schema design may encounter issues such as data skew, failing to fully leverage system parallelism and sorting features, thereby hindering the Doris system from realizing its true performance advantages within business systems."}),"\n",(0,s.jsxs)(n.p,{children:["Detailed design principles can be found in the ",(0,s.jsx)(n.a,{href:"../../../table-design/overview",children:"Data Table Design"})," section for further information. This chapter, from the perspective of practical cases, will showcase performance bottlenecks caused by Schema design issues in several typical scenarios and provide optimization suggestions for business tuning reference."]}),"\n",(0,s.jsx)(n.h2,{id:"case-1-table-engine-selection",children:"Case 1: Table Engine Selection"}),"\n",(0,s.jsx)(n.p,{children:"Doris supports three table models: Duplicate, Unique, and Aggregate. Among them, Unique can be further divided into Merge-On-Read (MOR) and Merge-On-Write (MOW)."}),"\n",(0,s.jsx)(n.p,{children:"The query performance of these table models, from best to worst, is: Duplicate > MOW > MOR == Aggregate. Therefore, under normal circumstances, if there are no special requirements, the Duplicate table is recommended for better query performance."}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["When the business has no data update requirements but high demands for query performance, the ",(0,s.jsx)(n.a,{href:"../../../table-design/data-model/duplicate",children:"Duplicate table"})," is recommended."]})}),"\n",(0,s.jsx)(n.h2,{id:"case-2-bucket-column-selection",children:"Case 2: Bucket Column Selection"}),"\n",(0,s.jsx)(n.p,{children:"Doris supports bucketing data, which means distributing data based on bucket keys in the Schema to form data buckets."}),"\n",(0,s.jsx)(n.p,{children:"Selecting appropriate bucket columns is vital for the reasonable distribution of raw data, effectively preventing performance issues caused by data skew. Meanwhile, it maximizes the utilization of Doris's Colocate Join and Bucket Shuffle Join features, significantly enhancing the performance of Join operations."}),"\n",(0,s.jsx)(n.p,{children:"Taking the table creation statement of table t1 as an example, the current bucket column is set as c2. However, during the actual data import process, if all values of column c2 are defaulted to null, even if 64 buckets are set, only one bucket will contain all the data. This extreme case leads to severe data skew, resulting in performance bottlenecks."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE `t1` (\n  `c1` INT NULL,\n  `c2` INT NULL\n) ENGINE=OLAP\nDUPLICATE KEY(`c1`)\nDISTRIBUTED BY HASH(`c2`) BUCKETS 64\nPROPERTIES (\n\"replication_allocation\" = \"tag.location.default: 1\"\n\uFF09;\ninsert into t1 select number, null from numbers ('number'='10000000');\n"})}),"\n",(0,s.jsx)(n.p,{children:"In response to the above situation, we can change the bucket column from c2 to c1 to achieve adequate data hashing and maximize the system's parallel processing capabilities, thereby achieving tuning purposes."}),"\n",(0,s.jsx)(n.p,{children:"Therefore, during the Schema design phase, business personnel need to design reasonable bucket columns beforehand based on business characteristics. For instance, if it is known beforehand that the business meaning of column c2 may contain a large number of skewed values, such as null or certain specific values, these fields should be avoided as bucket columns. Conversely, fields with adequate hashing characteristics in business meaning, such as user ID, should be selected as bucket columns. During the performance issue troubleshooting phase, the following SQL statement can be used to confirm whether the bucket field has data skew and make subsequent optimization adjustments accordingly."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"select c2\uFF0Ccount(*) cnt from t1 group by c2 order by cnt desc limit 10;\n"})}),"\n",(0,s.jsx)(n.p,{children:"It is clear that good prior design can significantly reduce the cost of locating and correcting issues when they occur. Therefore, it is strongly recommended that business personnel conduct rigorous design and checks during the Schema design phase to avoid introducing unnecessary costs."}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"Check whether the bucket column has data skew issues. If so, replace it with a field that has adequate hashing characteristics in business meaning as the bucket column."})}),"\n",(0,s.jsx)(n.h2,{id:"case-3-key-column-optimization",children:"Case 3: Key Column Optimization"}),"\n",(0,s.jsx)(n.p,{children:"Among the three table models, if the table creation Schema explicitly specifies a Duplicate Key, Unique Key, or Aggregate Key, Doris will ensure that data is sorted based on the Key column at the storage level. This feature provides new ideas for data query performance optimization. Specifically, during the Schema design phase, if columns frequently used for equality or range queries in business queries can be defined as Key columns, it will significantly increase the execution speed of such queries, thereby enhancing overall performance."}),"\n",(0,s.jsx)(n.p,{children:"Here is a set of examples of business query requirements:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"select * from t1 where t1.c1 = 1;\nselect * from t1 where t1.c1 > 1 and t1.c1 < 10;\nselect * from t1 where t1.c1 in (1, 2, 3);\n"})}),"\n",(0,s.jsx)(n.p,{children:"For the above business requirements and the Schema design and later optimization of table t1, considering setting column c1 as the Key column to accelerate the query process is advisable. Here is an example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'CREATE TABLE `t1` (\n  `c1` INT NULL,\n  `c2` INT NULL\n) ENGINE=OLAP\nDUPLICATE KEY(`c1`)\nDISTRIBUTED BY HASH(`c2`) BUCKETS 10\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 1"\n\uFF09;\n'})}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"Set columns frequently used in business queries as key columns to accelerate the query process."})}),"\n",(0,s.jsx)(n.h2,{id:"case-4-field-type-optimization",children:"Case 4: Field Type Optimization"}),"\n",(0,s.jsx)(n.p,{children:"In database systems, the complexity of processing different types of data can vary significantly. For example, processing variable-length types is much more complex than fixed-length types; similarly, processing high-precision types is more complex than low-precision types."}),"\n",(0,s.jsx)(n.p,{children:"This characteristic provides important insights into the design and later optimization of business system Schemas:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"While meeting the expression and computation needs of business systems, priority should be given to fixed-length types, avoiding the use of variable-length types;"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"At the same time, low-precision types should be adopted instead of high-precision types. Specific practices include using BIGINT to replace VARCHAR or STRING type fields and using FLOAT / INT / BIGINT to replace DECIMAL type fields. Reasonable design and optimization of such field types will greatly enhance business computation efficiency, thereby improving system performance."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"When defining Schema types, follow the principle of prioritizing fixed-length and low-precision types."})}),"\n",(0,s.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,s.jsx)(n.p,{children:"In summary, a well-designed Schema can maximize the utilization of Doris's features, thereby significantly enhancing business performance. Conversely, a non-optimized Schema design may have a global negative impact on the business, such as causing data skew. Therefore, the initial Schema design optimization work is particularly important."}),"\n",(0,s.jsxs)(n.p,{children:["For performance tuning, you can also refer to using ",(0,s.jsx)(n.a,{href:"../../../query-data/join#colocate-join",children:"Colocate Group to optimize Join"}),". This document will provide detailed instructions on how to fully leverage Doris's features for performance optimization, offering strong support for improving your business performance."]})]})}function d(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return r},a:function(){return o}});var t=i(667294);let s={},a=t.createContext(s);function o(e){let n=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);