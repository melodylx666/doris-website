"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["273820"],{849185:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>l,default:()=>d,assets:()=>a,toc:()=>c,frontMatter:()=>o});var r=JSON.parse('{"id":"query-data/subquery","title":"Subquery","description":"\x3c!--","source":"@site/docs/query-data/subquery.md","sourceDirName":"query-data","slug":"/query-data/subquery","permalink":"/docs/dev/query-data/subquery","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Subquery","language":"en"},"sidebar":"docs","previous":{"title":"Join","permalink":"/docs/dev/query-data/join"},"next":{"title":"Multi-Dimensional Analytics","permalink":"/docs/dev/query-data/multi-dimensional-analytics"}}'),s=t("785893"),i=t("250065");let o={title:"Subquery",language:"en"},l=void 0,a={},c=[{value:"Classification of Subqueries",id:"classification-of-subqueries",level:2},{value:"Classification Based on the Characteristics of Data Returned by Subqueries",id:"classification-based-on-the-characteristics-of-data-returned-by-subqueries",level:3},{value:"Classification Based on Whether the Subquery References Columns from the Outer Query",id:"classification-based-on-whether-the-subquery-references-columns-from-the-outer-query",level:3},{value:"Subqueries Supported by Doris",id:"subqueries-supported-by-doris",level:2},{value:"Limitations of Correlated Subqueries",id:"limitations-of-correlated-subqueries",level:2},{value:"Limitations of Correlated Scalar Subqueries",id:"limitations-of-correlated-scalar-subqueries",level:3},{value:"Limitations of Correlated (NOT) EXISTS Subqueries",id:"limitations-of-correlated-not-exists-subqueries",level:3},{value:"Limitations of Correlated (NOT) IN Subqueries",id:"limitations-of-correlated-not-in-subqueries",level:3},{value:"Limitations of Nested Subqueries",id:"limitations-of-nested-subqueries",level:3},{value:"Mark Join",id:"mark-join",level:2},{value:"Common Issues",id:"common-issues",level:2},{value:"For Correlated Scalar Subqueries",id:"for-correlated-scalar-subqueries",level:3},{value:"For Non-Correlated Scalar Subqueries",id:"for-non-correlated-scalar-subqueries",level:3}];function u(e){let n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"A Subquery is an SQL query nested within another query (usually a SELECT statement). It can be used in the SELECT, FROM, WHERE, or HAVING clauses to provide data or conditions for the outer query. The use of subqueries makes SQL queries more flexible and powerful, as they allow us to solve more complex problems within a single query."}),"\n",(0,s.jsx)(n.p,{children:"Some important features of subqueries are as follows:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Position of Subqueries: Subqueries can be placed in multiple SQL clauses, such as the WHERE clause, HAVING clause, and FROM clause. They can be used with SELECT, UPDATE, INSERT, DELETE statements, and expression operators (such as comparison operators =, >, <, <=, as well as IN, EXISTS, etc.)."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Relationship between Main Query and Subquery: A subquery is a query nested inside another query. The outer query is referred to as the main query, while the inner query is referred to as the subquery."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Execution Order: When there is no correlation between the subquery and the main query, the subquery is usually executed first. When there is a correlation, the parser decides which query to execute first in real-time as needed and uses the output of the subquery accordingly."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Use of Parentheses: Subqueries must be enclosed in parentheses to distinguish them as nested within another query."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Below, we will use tables t1 and t2 and related SQL to introduce the basic features and usage of subqueries. The table creation statements are as follows:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'create table t1\n(\n    c1 bigint, \n    c2 bigint\n)\nDISTRIBUTED BY HASH(c1) BUCKETS 3\nPROPERTIES ("replication_num" = "1");\n\ncreate table t2\n(\n    c1 bigint, \n    c2 bigint\n)\nDISTRIBUTED BY HASH(c1) BUCKETS 3\nPROPERTIES ("replication_num" = "1");\n'})}),"\n",(0,s.jsx)(n.h2,{id:"classification-of-subqueries",children:"Classification of Subqueries"}),"\n",(0,s.jsx)(n.h3,{id:"classification-based-on-the-characteristics-of-data-returned-by-subqueries",children:"Classification Based on the Characteristics of Data Returned by Subqueries"}),"\n",(0,s.jsx)(n.p,{children:"Subqueries can be classified into scalar and non-scalar subqueries based on the characteristics of the data they return:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"1. Scalar Subquery"})}),"\n",(0,s.jsx)(n.p,{children:"A subquery that always returns a single value (essentially equivalent to a one-row, one-column Relation). If the subquery does not return any data, it returns a NULL value. Scalar subqueries can theoretically appear anywhere a single-value expression is allowed."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"2. Non-scalar Subquery"})}),"\n",(0,s.jsx)(n.p,{children:"A subquery that returns a Relation (different from the return value of a scalar subquery, this Relation can contain multiple rows and columns). If the subquery does not return any data, it returns an empty set (0 rows). Non-scalar subqueries can theoretically appear anywhere a relation (set) is allowed."}),"\n",(0,s.jsx)(n.p,{children:"The following examples illustrate scalar and non-scalar subqueries (for the two subqueries in parentheses, when t2 is an empty table, the results returned by the two subqueries are different):"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"-- Scalar subquery, when t2 is an empty table, the subquery returns the scalar value null    \nselect * from t1 where t1.c1 > (select sum(t2.c1) from t2);    \n    \n-- Non-scalar subquery, when t2 is an empty table, the subquery returns an empty set (0 rows)    \nselect * from t1 where t1.c1 in (select t2.c1 from t2);\n"})}),"\n",(0,s.jsx)(n.h3,{id:"classification-based-on-whether-the-subquery-references-columns-from-the-outer-query",children:"Classification Based on Whether the Subquery References Columns from the Outer Query"}),"\n",(0,s.jsx)(n.p,{children:"Subqueries can be classified into correlated subqueries and non-correlated subqueries based on whether they reference columns from the outer query:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"3. Non-correlated Subquery"})}),"\n",(0,s.jsx)(n.p,{children:"A subquery that does not reference any columns from the outer query. Non-correlated subqueries can often be computed independently and return the corresponding results once for the outer query to use."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"4. Correlated Subquery"})}),"\n",(0,s.jsx)(n.p,{children:"A subquery that references one or more columns from the main query (also known as the outer query) (the referenced outer columns are often in the WHERE condition of the subquery). Correlated subqueries can often be seen as a filtering operation on the externally associated table, as for each row of data in the outer table, the subquery is computed and returns the corresponding result."}),"\n",(0,s.jsx)(n.p,{children:"The following examples illustrate correlated and non-correlated subqueries:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"-- Correlated subquery, the subquery internally uses the column t1.c2 from the outer table    \nselect * from t1 where t1.c1 in (select t2.c1 from t2 where t2.c2 = t1.c2);    \n    \n-- Non-correlated subquery, the subquery internally does not use any columns from the outer table t1    \nselect * from t1 where t1.c1 in (select t2.c1 from tt2);\n"})}),"\n",(0,s.jsx)(n.h2,{id:"subqueries-supported-by-doris",children:"Subqueries Supported by Doris"}),"\n",(0,s.jsx)(n.p,{children:"Doris supports all non-correlated subqueries and provides partial support for correlated subqueries as follows:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Supports correlated scalar subqueries in the ",(0,s.jsx)(n.code,{children:"WHERE"})," and ",(0,s.jsx)(n.code,{children:"HAVING"})," clauses."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Supports correlated ",(0,s.jsx)(n.code,{children:"IN"}),", ",(0,s.jsx)(n.code,{children:"NOT IN"}),", ",(0,s.jsx)(n.code,{children:"EXISTS"}),",",(0,s.jsx)(n.code,{children:"NOT EXISTS"})," non-scalar subqueries in the ",(0,s.jsx)(n.code,{children:"WHERE"})," and ",(0,s.jsx)(n.code,{children:"HAVING"})," clauses."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Supports correlated scalar subqueries in the ",(0,s.jsx)(n.code,{children:"SELECT"})," list."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"For nested subqueries, Doris only supports subqueries correlated to their immediate parent query and does not support cross-level correlation to outer queries beyond the parent."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"limitations-of-correlated-subqueries",children:"Limitations of Correlated Subqueries"}),"\n",(0,s.jsx)(n.h3,{id:"limitations-of-correlated-scalar-subqueries",children:"Limitations of Correlated Scalar Subqueries"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"The correlation condition must be an equality condition."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"The output of the subquery must be the result of a single aggregate function without a GROUP BY clause."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"-- Single aggregate function without GROUP BY, supported    \nselect * from t1 where t1.c1 < (select max(t2.c1) from t2 where t1.c2 = t2.c2);    \n    \n-- Equivalent rewritten SQL as follows:    \nselect t1.* from t1 inner join (select t2.c2 as c2, max(t2.c1) as c1 from t2 group by t2.c2) tx on t1.c1 < tx.c1 and t1.c2 = tx.c2;    \n    \n-- Non-equality condition, not supported    \nselect * from t1 where t1.c1 = (select max(t2.c1) from t2 where t1.c2 > t2.c2);    \n    \n-- No aggregate function, not supported    \nselect * from t1 where t1.c1 = (select t2.c1 from t2 where t1.c2 = t2.c2);    \n    \n-- With aggregate function but includes GROUP BY, not supported    \nselect * from t1 where t1.c1 = (select max(t2.c1) from t2 where t1.c2 = t2.c2 group by t2.c2);\n"})}),"\n",(0,s.jsx)(n.h3,{id:"limitations-of-correlated-not-exists-subqueries",children:"Limitations of Correlated (NOT) EXISTS Subqueries"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The subquery cannot have both OFFSET and LIMIT."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"-- With LIMIT but no OFFSET, supported    \nselect * from t1 where exists (select t2.c1 from t2 where t1.c2 = t2.c2 limit 2);    \n    \n-- Equivalent rewritten SQL as follows:    \nselect * from t1 left semi join t2 on t1.c2 = t2.c2;    \n    \n-- With OFFSET and LIMIT, not supported    \nselect * from t1 where exists (select t2.c1 from t2 where t1.c2 = t2.c2 limit 2, 3);\n"})}),"\n",(0,s.jsx)(n.h3,{id:"limitations-of-correlated-not-in-subqueries",children:"Limitations of Correlated (NOT) IN Subqueries"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"The output of the subquery must be a single column."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"The subquery cannot have LIMIT."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"The subquery cannot have aggregate functions or GROUP BY clauses."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"-- Supported subquery    \nselect * from t1 where t1.c1 in (select t2.c1 from t2 where t1.c2 = t2.c2);    \n    \n-- Equivalent rewritten SQL as follows:    \nselect * from t1 left semi join t2 on t1.c1 = t2.c1 and t1.c2 = t2.c2;    \n    \n-- Subquery output is multiple columns, not supported    \nselect * from t1 where (t1.a, t1.c) in (select t2.c1, t2.c from t2 where t1.c2 = t2.c2);    \n    \n-- Subquery with LIMIT, not supported    \nselect * from t1 where t1.c1 in (select t2.c1 from t2 where t1.c2 = t2.c2 limit 3);    \n    \n-- With GROUP BY clause, not supported    \nselect * from t1 where t1.c1 in (select t2.c1 from t2 where t1.c2 = t2.c2 group by t2.c1);    \n    \n-- With aggregate function, not supported    \nselect * from t1 where t1.c1 in (select sum(t2.c1) from t2 where t1.c2 = t2.c2);\n"})}),"\n",(0,s.jsx)(n.h3,{id:"limitations-of-nested-subqueries",children:"Limitations of Nested Subqueries"}),"\n",(0,s.jsx)(n.p,{children:"Currently, only subqueries that correlate directly with their immediate parent queries are supported. Correlation with outer layers of the parent query is not supported."}),"\n",(0,s.jsxs)(n.p,{children:["Assume there is another table ",(0,s.jsx)(n.code,{children:"t3"})," with the following creation statement:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:'create table t3  \n(  \n    c1 bigint,   \n    c2 bigint  \n)  \nDISTRIBUTED BY HASH(c1) BUCKETS 3  \nPROPERTIES ("replication_num" = "1");\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Supported when the subquery only uses columns from its immediate parent query:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"select   \n    t1.c1   \nfrom   \n    t1   \nwhere not exists (  \n    select   \n        t2.c1   \n    from   \n        t2   \n    where not exists (  \n        select   \n            t3.c1   \n        from   \n            t3   \n        where   \n            t3.c2 = t2.c2  \n    ) and t2.c2 = t1.c2  \n);\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Not supported when the innermost subquery uses columns from its immediate parent query ",(0,s.jsx)(n.code,{children:"t2.c2"})," and also columns from the outermost query ",(0,s.jsx)(n.code,{children:"t1.c1"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"  select   \n      t1.c1   \n  from   \n      t1   \n  where not exists (  \n      select   \n          t2.c1   \n      from   \n          t2   \n      where not exists (  \n          select   \n              t3.c1   \n          from   \n              t3   \n          where   \n              t3.c2 = t2.c2 and t3.c1 = t1.c1  \n      )  \n  );\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"mark-join",children:"Mark Join"}),"\n",(0,s.jsxs)(n.p,{children:["In ",(0,s.jsx)(n.code,{children:"where"})," conditions, clauses with ",(0,s.jsx)(n.code,{children:"or"})," relationships composed of subqueries using ",(0,s.jsx)(n.code,{children:"(not) in"})," or ",(0,s.jsx)(n.code,{children:"(not) exists"})," and other filtering conditions require special handling to produce correct results. An example is given below:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"select \n    t1.c1, \n    t1.c2 \nfrom t1 \nwhere exists (\n    select \n        t2.c1 \n    from t2 \n    where \n        t1.c2 = t2.c2\n    ) or t1.c1 > 0;\n"})}),"\n",(0,s.jsxs)(n.p,{children:["If the ",(0,s.jsx)(n.code,{children:"exists"})," clause in this SQL is directly implemented using ",(0,s.jsx)(n.code,{children:"left semi join"}),", according to the semantics of ",(0,s.jsx)(n.code,{children:"left semi join"}),", only rows from ",(0,s.jsx)(n.code,{children:"t1"})," that satisfy ",(0,s.jsx)(n.code,{children:"t1.c2 = t2.c2"})," will be output. However, rows that actually satisfy the condition ",(0,s.jsx)(n.code,{children:"t1.c1 > 0"})," should also be output. To achieve this, the mechanism of ",(0,s.jsx)(n.code,{children:"Mark Join"})," is introduced."]}),"\n",(0,s.jsx)(n.admonition,{title:"Note",type:"info",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"right semi join"})," is similar but differs in the left and right tables. Here, we use ",(0,s.jsx)(n.code,{children:"left semi join"})," as an example."]})}),"\n",(0,s.jsx)(n.p,{children:"Example SQL is as follows:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"-- This SQL cannot be executed and is only for demonstration purposes    \nselect     \n    tx.c1,     \n    tx.c2     \nfrom     \n    (    \n        select     \n            t1.c1,     \n            t1.c2,     \n            mark_join_flag     \n        from     \n            t1 left (mark) semi join t2 on t1.c2 = t2.c2    \n    ) tx    \nwhere     \n    tx.mark_join_flag or tx.c1 > 0;\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The difference between ",(0,s.jsx)(n.code,{children:"Mark Join"})," and a regular ",(0,s.jsx)(n.code,{children:"left semi join"})," is that a regular ",(0,s.jsx)(n.code,{children:"left semi join"})," directly outputs rows from the left table that meet the condition, while ",(0,s.jsx)(n.code,{children:"Mark Join"})," outputs the original left table with an additional flag column (the ",(0,s.jsx)(n.code,{children:"mark_join_flag"})," in the example) that can be ",(0,s.jsx)(n.code,{children:"true"}),", ",(0,s.jsx)(n.code,{children:"false"}),", or ",(0,s.jsx)(n.code,{children:"null"}),". The value of the flag is determined by the ",(0,s.jsx)(n.code,{children:"join"})," condition expression ",(0,s.jsx)(n.code,{children:"t1.c2 = t2.c2"}),", with each row corresponding to a flag value. The calculation of flag values is shown in the table below:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"t1.c1"}),(0,s.jsx)(n.th,{children:"t2.c1"}),(0,s.jsx)(n.th,{children:"mark_join_flag"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"1"}),(0,s.jsx)(n.td,{children:"1"}),(0,s.jsx)(n.td,{children:"TRUE"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"1"}),(0,s.jsx)(n.td,{children:"2"}),(0,s.jsx)(n.td,{children:"FALSE"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"1"}),(0,s.jsx)(n.td,{children:"NULL"}),(0,s.jsx)(n.td,{children:"NULL"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"NULL"}),(0,s.jsx)(n.td,{children:"1"}),(0,s.jsx)(n.td,{children:"NULL"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"NULL"}),(0,s.jsx)(n.td,{children:"NULL"}),(0,s.jsx)(n.td,{children:"NULL"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["With this flag, the ",(0,s.jsx)(n.code,{children:"where"})," filtering condition can be rewritten as ",(0,s.jsx)(n.code,{children:"where mark_join_flag or t1.c1 > 0"})," to obtain the correct results."]}),"\n",(0,s.jsx)(n.h2,{id:"common-issues",children:"Common Issues"}),"\n",(0,s.jsx)(n.p,{children:"Since the output of a scalar subquery must be a single value, a runtime error will be reported when the subquery returns more than one row of data."}),"\n",(0,s.jsx)(n.h3,{id:"for-correlated-scalar-subqueries",children:"For Correlated Scalar Subqueries"}),"\n",(0,s.jsx)(n.p,{children:"When using a correlated quantifier subquery, if the subquery that satisfies the correlation condition returns more than one row of data, a runtime error will be reported."}),"\n",(0,s.jsx)(n.p,{children:"Please refer to the following SQL example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"-- If there are more than 1 row in the t2 table that satisfies t1.c2 = t2.c2 in the associated scalar subquery, a runtime error will be reported\nselect t1.*, (select t2.c1 from t2 where t1.c2 = t2.c2) from t1;\n\n-- Example error message\nERROR 1105 (HY000): errCode = 2, detailMessage = (127.0.0.1)[INVALID_ARGUMENT][E33] correlate scalar subquery must return only 1 row\n"})}),"\n",(0,s.jsx)(n.h3,{id:"for-non-correlated-scalar-subqueries",children:"For Non-Correlated Scalar Subqueries"}),"\n",(0,s.jsxs)(n.p,{children:["Doris will add an ",(0,s.jsx)(n.code,{children:"assert num rows"})," operator at runtime. If the subquery returns more than one row of data, a runtime error will be reported."]}),"\n",(0,s.jsx)(n.p,{children:"Please refer to the following SQL example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"-- Non-correlated scalar subquery, will report an error if table t2 has more than 1 row of data    \nselect t1.*, (select t2.c1 from t2) from t1;    \n  \n-- Example error message    \nERROR 1105 (HY000): errCode = 2, detailMessage = (127.0.0.1)[CANCELLED]Expected EQ 1 to be returned by expression\n"})})]})}function d(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return o}});var r=t(667294);let s={},i=r.createContext(s);function o(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);