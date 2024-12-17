"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["356015"],{299477:function(e,n,a){a.r(n),a.d(n,{metadata:()=>t,contentTitle:()=>r,default:()=>u,assets:()=>o,toc:()=>c,frontMatter:()=>s});var t=JSON.parse('{"id":"table-design/auto-increment","title":"Using AUTO_INCREMENT","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/table-design/auto-increment.md","sourceDirName":"table-design","slug":"/table-design/auto-increment","permalink":"/docs/table-design/auto-increment","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"Using AUTO_INCREMENT","language":"en"},"sidebar":"docs","previous":{"title":"Schema Evolution","permalink":"/docs/table-design/schema-change"},"next":{"title":"Best Practices","permalink":"/docs/table-design/best-practice"}}'),i=a("785893"),l=a("250065");let s={title:"Using AUTO_INCREMENT",language:"en"},r="AUTO_INCREMENT Column",o={},c=[{value:"Functionality",id:"functionality",level:2},{value:"Uniqueness",id:"uniqueness",level:3},{value:"Density",id:"density",level:3},{value:"Syntax",id:"syntax",level:2},{value:"Examples",id:"examples",level:3},{value:"Constraints and Limitations",id:"constraints-and-limitations",level:3},{value:"Usage",id:"usage",level:2},{value:"Import",id:"import",level:3},{value:"Partial Update",id:"partial-update",level:3},{value:"Usage Scenarios",id:"usage-scenarios",level:2},{value:"Dictionary Encoding",id:"dictionary-encoding",level:3},{value:"Efficient Pagination",id:"efficient-pagination",level:3}];function d(e){let n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"auto_increment-column",children:"AUTO_INCREMENT Column"})}),"\n",(0,i.jsx)(n.p,{children:"When importing data, Doris assigns a table-unique value to rows that do not have specified values in the auto-increment column."}),"\n",(0,i.jsx)(n.h2,{id:"functionality",children:"Functionality"}),"\n",(0,i.jsx)(n.p,{children:"For tables containing an auto-increment column, during data import:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"If the target columns don't include the auto-increment column, Doris will populate the auto-increment column with generated values."}),"\n",(0,i.jsxs)(n.li,{children:["If the target columns include the auto-increment column, null values in the imported data for that column will be replaced by values generated by Doris, while non-null values will remain unchanged. Note that ",(0,i.jsx)(n.strong,{children:"non-null values can disrupt the uniqueness of the auto-increment column values"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"uniqueness",children:"Uniqueness"}),"\n",(0,i.jsxs)(n.p,{children:["Doris ensures that values generated on the auto-increment column have ",(0,i.jsx)(n.strong,{children:"table-wide uniqueness"}),". However, it's important to note that ",(0,i.jsx)(n.strong,{children:"the uniqueness of the auto-increment column only guarantees uniqueness for values automatically filled by Doris and does not consider values provided by users"}),". If a user explicitly inserts user-provided values for this table by specifying the auto-increment column, this uniqueness cannot be guaranteed."]}),"\n",(0,i.jsx)(n.h3,{id:"density",children:"Density"}),"\n",(0,i.jsxs)(n.p,{children:["Doris ensures that the values generated on the auto-increment column are dense, but it ",(0,i.jsx)(n.strong,{children:"cannot guarantee"})," that the values automatically generated in the auto-increment column during an import will be entirely contiguous. Thus, there might be some jumps in the values generated by the auto-increment column during an import. This is because, for performance consideration, each BE caches a portion of pre-allocated auto-increment column values, and these cached values do not intersect between different BEs. Additionally, due to this caching mechanism, Doris cannot guarantee that the values automatically generated on the auto-increment column in a later import on the physical timeline will be larger than those from the previous import. Therefore, the values allocated by the auto-increment column cannot be used to determine the chronological order of imports."]}),"\n",(0,i.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsxs)(n.p,{children:["To use auto-increment columns, you need to add the ",(0,i.jsx)(n.code,{children:"AUTO_INCREMENT"})," attribute to the corresponding column during table creation (",(0,i.jsx)(n.a,{href:"../sql-manual/sql-statements/table-and-view/table/CREATE-TABLE",children:"CREATE-TABLE"}),"). To manually specify the starting value for an auto-increment column, you can do so by using the ",(0,i.jsx)(n.code,{children:"AUTO_INCREMENT(start_value)"})," statement when creating the table. If not specified, the default starting value is 1."]}),"\n",(0,i.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Creating a Duplicate table with one key column as an auto-increment column:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'CREATE TABLE `demo`.`tbl` (\n        `id` BIGINT NOT NULL AUTO_INCREMENT,\n        `value` BIGINT NOT NULL\n) ENGINE=OLAP\nDUPLICATE KEY(`id`)\nDISTRIBUTED BY HASH(`id`) BUCKETS 10\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 3"\n);\n\n2. Creating a Duplicate table with one key column as an auto-increment column, and set start value is 100:\n\n```sql\nCREATE TABLE `demo`.`tbl` (\n      `id` BIGINT NOT NULL AUTO_INCREMENT(100),\n      `value` BIGINT NOT NULL\n) ENGINE=OLAP\nDUPLICATE KEY(`id`)\nDISTRIBUTED BY HASH(`id`) BUCKETS 10\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 3"\n);\n'})}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsx)(n.li,{children:"Creating a Duplicate table with one value column as an auto-increment column:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'CREATE TABLE `demo`.`tbl` (\n    `uid` BIGINT NOT NULL,\n    `name` BIGINT NOT NULL,\n    `id` BIGINT NOT NULL AUTO_INCREMENT,\n    `value` BIGINT NOT NULL\n) ENGINE=OLAP\nDUPLICATE KEY(`uid`, `name`)\nDISTRIBUTED BY HASH(`uid`) BUCKETS 10\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 3"\n);\n'})}),"\n",(0,i.jsxs)(n.ol,{start:"4",children:["\n",(0,i.jsx)(n.li,{children:"Creating a Unique tbl table with one key column as an auto-increment column:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'CREATE TABLE `demo`.`tbl` (\n      `id` BIGINT NOT NULL AUTO_INCREMENT,\n      `name` varchar(65533) NOT NULL,\n      `value` int(11) NOT NULL\n) ENGINE=OLAP\nUNIQUE KEY(`id`)\nDISTRIBUTED BY HASH(`id`) BUCKETS 10\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 3",\n"enable_unique_key_merge_on_write" = "true"\n);\n'})}),"\n",(0,i.jsxs)(n.ol,{start:"5",children:["\n",(0,i.jsx)(n.li,{children:"Creating a Unique tbl table with one value column as an auto-increment column:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'CREATE TABLE `demo`.`tbl` (\n      `text` varchar(65533) NOT NULL,\n      `id` BIGINT NOT NULL AUTO_INCREMENT,\n) ENGINE=OLAP\nUNIQUE KEY(`text`)\nDISTRIBUTED BY HASH(`text`) BUCKETS 10\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 3",\n"enable_unique_key_merge_on_write" = "true"\n);\n'})}),"\n",(0,i.jsx)(n.h3,{id:"constraints-and-limitations",children:"Constraints and Limitations"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Only Duplicate model tables and Unique model tables can contain auto-increment columns."}),"\n",(0,i.jsx)(n.li,{children:"A table can contain at most one auto-increment column."}),"\n",(0,i.jsx)(n.li,{children:"The type of the auto-increment column must be BIGINT and must be NOT NULL."}),"\n",(0,i.jsx)(n.li,{children:"The manually specified starting value for an auto-increment column must be greater than or equal to 0."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(n.h3,{id:"import",children:"Import"}),"\n",(0,i.jsx)(n.p,{children:"Consider the following table:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'CREATE TABLE `demo`.`tbl` (\n    `id` BIGINT NOT NULL AUTO_INCREMENT,\n    `name` varchar(65533) NOT NULL,\n    `value` int(11) NOT NULL\n) ENGINE=OLAP\nUNIQUE KEY(`id`)\nDISTRIBUTED BY HASH(`id`) BUCKETS 10\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 3",\n"enable_unique_key_merge_on_write" = "true"\n);\n'})}),"\n",(0,i.jsxs)(n.p,{children:["When using the insert into statement to import data without specifying the auto-increment column ",(0,i.jsx)(n.code,{children:"id"}),", the ",(0,i.jsx)(n.code,{children:"id"})," column will automatically be filled with generated values."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"mysql> insert into tbl(name, value) values(\"Bob\", 10), (\"Alice\", 20), (\"Jack\", 30);\nQuery OK, 3 rows affected (0.09 sec)\n{'label':'label_183babcb84ad4023_a2d6266ab73fb5aa', 'status':'VISIBLE', 'txnId':'7'}\n\nmysql> select * from tbl order by id;\n+------+-------+-------+\n| id   | name  | value |\n+------+-------+-------+\n|    1 | Bob   |    10 |\n|    2 | Alice |    20 |\n|    3 | Jack  |    30 |\n+------+-------+-------+\n3 rows in set (0.05 sec)\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Similarly, using stream load to import the file test.csv without specifying the auto-increment column ",(0,i.jsx)(n.code,{children:"id"})," will result in the id column being automatically filled with generated values."]}),"\n",(0,i.jsx)(n.p,{children:"test.csv:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Tom, 40\nJohn, 50\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'curl --location-trusted -u user:passwd -H "columns:name,value" -H "column_separator:," -T ./test1.csv http://{host}:{port}/api/{db}/tbl/_stream_load\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"mysql> select * from tbl order by id;\n+------+-------+-------+\n| id   | name  | value |\n+------+-------+-------+\n|    1 | Bob   |    10 |\n|    2 | Alice |    20 |\n|    3 | Jack  |    30 |\n|    4 | Tom   |    40 |\n|    5 | John  |    50 |\n+------+-------+-------+\n5 rows in set (0.04 sec)\n"})}),"\n",(0,i.jsxs)(n.p,{children:["When importing using insert into statement while specifying the auto-increment column ",(0,i.jsx)(n.code,{children:"id"}),", null values in the imported data for that column will be replaced by generated values."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"mysql> insert into tbl(id, name, value) values(null, \"Doris\", 60), (null, \"Nereids\", 70);\nQuery OK, 2 rows affected (0.07 sec)\n{'label':'label_9cb0c01db1a0402c_a2b8b44c11ce4703', 'status':'VISIBLE', 'txnId':'10'}\n\nmysql> select * from tbl order by id;\n+------+---------+-------+\n| id   | name    | value |\n+------+---------+-------+\n|    1 | Bob     |    10 |\n|    2 | Alice   |    20 |\n|    3 | Jack    |    30 |\n|    4 | Tom     |    40 |\n|    5 | John    |    50 |\n|    6 | Doris   |    60 |\n|    7 | Nereids |    70 |\n+------+---------+-------+\n7 rows in set (0.04 sec)\n"})}),"\n",(0,i.jsx)(n.h3,{id:"partial-update",children:"Partial Update"}),"\n",(0,i.jsx)(n.p,{children:"When performing a partial update on a merge-on-write Unique table containing an auto-increment column:"}),"\n",(0,i.jsx)(n.p,{children:"If the auto-increment column is a key column, during partial updates, as users must explicitly specify the key column, the target columns for partial column updates must include the auto-increment column. In this scenario, the import behavior is similar to regular partial updates."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"mysql> CREATE TABLE `demo`.`tbl2` (\n    ->     `id` BIGINT NOT NULL AUTO_INCREMENT,\n    ->     `name` varchar(65533) NOT NULL,\n    ->     `value` int(11) NOT NULL DEFAULT \"0\"\n    -> ) ENGINE=OLAP\n    -> UNIQUE KEY(`id`)\n    -> DISTRIBUTED BY HASH(`id`) BUCKETS 10\n    -> PROPERTIES (\n    -> \"replication_allocation\" = \"tag.location.default: 3\",\n    -> \"enable_unique_key_merge_on_write\" = \"true\"\n    -> );\nQuery OK, 0 rows affected (0.03 sec)\n\nmysql> insert into tbl2(id, name, value) values(1, \"Bob\", 10), (2, \"Alice\", 20), (3, \"Jack\", 30);\nQuery OK, 3 rows affected (0.14 sec)\n{'label':'label_5538549c866240b6_bce75ef323ac22a0', 'status':'VISIBLE', 'txnId':'1004'}\n\nmysql> select * from tbl2 order by id;\n+------+-------+-------+\n| id   | name  | value |\n+------+-------+-------+\n|    1 | Bob   |    10 |\n|    2 | Alice |    20 |\n|    3 | Jack  |    30 |\n+------+-------+-------+\n3 rows in set (0.08 sec)\n\nmysql> set enable_unique_key_partial_update=true;\nQuery OK, 0 rows affected (0.01 sec)\n\nmysql> set enable_insert_strict=false;\nQuery OK, 0 rows affected (0.00 sec)\n\nmysql> insert into tbl2(id, name) values(1, \"modified\"), (4, \"added\");\nQuery OK, 2 rows affected (0.06 sec)\n{'label':'label_3e68324cfd87457d_a6166cc0a878cfdc', 'status':'VISIBLE', 'txnId':'1005'}\n\nmysql> select * from tbl2 order by id;\n+------+----------+-------+\n| id   | name     | value |\n+------+----------+-------+\n|    1 | modified |    10 |\n|    2 | Alice    |    20 |\n|    3 | Jack     |    30 |\n|    4 | added    |     0 |\n+------+----------+-------+\n4 rows in set (0.04 sec)\n"})}),"\n",(0,i.jsx)(n.p,{children:"When the auto-increment column is a non-key column and users haven't specified the value for the auto-increment column, the value will be filled from existing data rows in the table. If users specify the auto-increment column, null values in the imported data for that column will be replaced by generated values, while non-null values will remain unchanged, and then these data will be loaded with the semantics of partial updates."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"mysql> CREATE TABLE `demo`.`tbl3` (\n    ->     `id` BIGINT NOT NULL,\n    ->     `name` varchar(100) NOT NULL,\n    ->     `score` BIGINT NOT NULL,\n    ->     `aid` BIGINT NOT NULL AUTO_INCREMENT\n    -> ) ENGINE=OLAP\n    -> UNIQUE KEY(`id`)\n    -> DISTRIBUTED BY HASH(`id`) BUCKETS 1\n    -> PROPERTIES (\n    -> \"replication_allocation\" = \"tag.location.default: 3\",\n    -> \"enable_unique_key_merge_on_write\" = \"true\"\n    -> );\nQuery OK, 0 rows affected (0.16 sec)\n\nmysql> insert into tbl3(id, name, score) values(1, \"Doris\", 100), (2, \"Nereids\", 200), (3, \"Bob\", 300);\nQuery OK, 3 rows affected (0.28 sec)\n{'label':'label_c52b2c246e244dda_9b91ee5e27a31f9b', 'status':'VISIBLE', 'txnId':'2003'}\n\nmysql> select * from tbl3 order by id;\n+------+---------+-------+------+\n| id   | name    | score | aid  |\n+------+---------+-------+------+\n|    1 | Doris   |   100 |    0 |\n|    2 | Nereids |   200 |    1 |\n|    3 | Bob     |   300 |    2 |\n+------+---------+-------+------+\n3 rows in set (0.13 sec)\n\nmysql> set enable_unique_key_partial_update=true;\nQuery OK, 0 rows affected (0.00 sec)\n\nmysql> set enable_insert_strict=false;\nQuery OK, 0 rows affected (0.00 sec)\n\nmysql> insert into tbl3(id, score) values(1, 999), (2, 888);\nQuery OK, 2 rows affected (0.07 sec)\n{'label':'label_dfec927d7a4343ca_9f9ade581391de97', 'status':'VISIBLE', 'txnId':'2004'}\n\nmysql> select * from tbl3 order by id;\n+------+---------+-------+------+\n| id   | name    | score | aid  |\n+------+---------+-------+------+\n|    1 | Doris   |   999 |    0 |\n|    2 | Nereids |   888 |    1 |\n|    3 | Bob     |   300 |    2 |\n+------+---------+-------+------+\n3 rows in set (0.06 sec)\n\nmysql> insert into tbl3(id, aid) values(1, 1000), (3, 500);\nQuery OK, 2 rows affected (0.07 sec)\n{'label':'label_b26012959f714f60_abe23c87a06aa0bf', 'status':'VISIBLE', 'txnId':'2005'}\n\nmysql> select * from tbl3 order by id;\n+------+---------+-------+------+\n| id   | name    | score | aid  |\n+------+---------+-------+------+\n|    1 | Doris   |   999 | 1000 |\n|    2 | Nereids |   888 |    1 |\n|    3 | Bob     |   300 |  500 |\n+------+---------+-------+------+\n3 rows in set (0.06 sec)\n"})}),"\n",(0,i.jsx)(n.h2,{id:"usage-scenarios",children:"Usage Scenarios"}),"\n",(0,i.jsx)(n.h3,{id:"dictionary-encoding",children:"Dictionary Encoding"}),"\n",(0,i.jsx)(n.p,{children:"Using bitmaps for audience analysis in user profile requires building a user dictionary where each user corresponds to a unique integer dictionary value. Aggregating these dictionary values can improve the performance of bitmap."}),"\n",(0,i.jsx)(n.p,{children:"Taking the offline UV and PV analysis scenario as an example, assuming there's a detailed user behavior table:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'CREATE TABLE `demo`.`dwd_dup_tbl` (\n    `user_id` varchar(50) NOT NULL,\n    `dim1` varchar(50) NOT NULL,\n    `dim2` varchar(50) NOT NULL,\n    `dim3` varchar(50) NOT NULL,\n    `dim4` varchar(50) NOT NULL,\n    `dim5` varchar(50) NOT NULL,\n    `visit_time` DATE NOT NULL\n) ENGINE=OLAP\nDUPLICATE KEY(`user_id`)\nDISTRIBUTED BY HASH(`user_id`) BUCKETS 32\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 3"\n);\n'})}),"\n",(0,i.jsx)(n.p,{children:"Using the auto-incrementa column to create the following dictionary table:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'CREATE TABLE `demo`.`dictionary_tbl` (\n    `user_id` varchar(50) NOT NULL,\n    `aid` BIGINT NOT NULL AUTO_INCREMENT\n) ENGINE=OLAP\nUNIQUE KEY(`user_id`)\nDISTRIBUTED BY HASH(`user_id`) BUCKETS 32\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 3",\n"enable_unique_key_merge_on_write" = "true"\n);\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Import the value of ",(0,i.jsx)(n.code,{children:"user_id"})," from existing data into the dictionary table, establishing the mapping of ",(0,i.jsx)(n.code,{children:"user_id"})," to integer values:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"insert into dictionary_tbl(user_id)\nselect user_id from dwd_dup_tbl group by user_id;\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Or import only the value of ",(0,i.jsx)(n.code,{children:"user_id"})," in incrementa data into the dictionary table alternatively:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"insert into dictionary_tbl(user_id)\nselect dwd_dup_tbl.user_id from dwd_dup_tbl left join dictionary_tbl\non dwd_dup_tbl.user_id = dictionary_tbl.user_id where dwd_dup_tbl.visit_time > '2023-12-10' and dictionary_tbl.user_id is NULL;\n"})}),"\n",(0,i.jsx)(n.p,{children:"In real-world scenarios, Flink connectors can also be employed to write data into Doris."}),"\n",(0,i.jsxs)(n.p,{children:["Assuming ",(0,i.jsx)(n.code,{children:"dim1"}),", ",(0,i.jsx)(n.code,{children:"dim3"}),", ",(0,i.jsx)(n.code,{children:"dim5"})," represent statistical dimensions of interest to us, create the following table to store aggregated results:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'CREATE TABLE `demo`.`dws_agg_tbl` (\n    `dim1` varchar(50) NOT NULL,\n    `dim3` varchar(50) NOT NULL,\n    `dim5` varchar(50) NOT NULL,\n    `user_id_bitmap` BITMAP BITMAP_UNION NOT NULL,\n    `pv` BIGINT SUM NOT NULL \n) ENGINE=OLAP\nAGGREGATE KEY(`dim1`,`dim3`,`dim5`)\nDISTRIBUTED BY HASH(`user_id`) BUCKETS 32\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 3"\n);\n'})}),"\n",(0,i.jsx)(n.p,{children:"Store the result of the data aggregation operations into the aggregation result table:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"insert into dws_agg_tbl\nselect dwd_dup_tbl.dim1, dwd_dup_tbl.dim3, dwd_dup_tbl.dim5, BITMAP_UNION(TO_BITMAP(dictionary_tbl.aid)), COUNT(1)\nfrom dwd_dup_tbl INNER JOIN dictionary_tbl on dwd_dup_tbl.user_id = dictionary_tbl.user_id;\n"})}),"\n",(0,i.jsx)(n.p,{children:"Perform UV and PV queries using the following statement:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"select dim1, dim3, dim5, user_id_bitmap as uv, pv from dws_agg_tbl;\n"})}),"\n",(0,i.jsx)(n.h3,{id:"efficient-pagination",children:"Efficient Pagination"}),"\n",(0,i.jsxs)(n.p,{children:["When displaying data on a page, pagination is often necessary. Traditional pagination typically involves using ",(0,i.jsx)(n.code,{children:"limit"}),", ",(0,i.jsx)(n.code,{children:"offset"}),", and ",(0,i.jsx)(n.code,{children:"order by"})," in SQL queries. For instance, consider the following business table intended for display:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'CREATE TABLE `demo`.`records_tbl` (\n    `key` int(11) NOT NULL COMMENT "",\n    `name` varchar(26) NOT NULL COMMENT "",\n    `address` varchar(41) NOT NULL COMMENT "",\n    `city` varchar(11) NOT NULL COMMENT "",\n    `nation` varchar(16) NOT NULL COMMENT "",\n    `region` varchar(13) NOT NULL COMMENT "",\n    `phone` varchar(16) NOT NULL COMMENT "",\n    `mktsegment` varchar(11) NOT NULL COMMENT ""\n) DUPLICATE KEY (`key`, `name`)\nDISTRIBUTED BY HASH(`key`) BUCKETS 10\nPROPERTIES (\n"replication_allocation" = "tag.location.default: 3"\n);\n'})}),"\n",(0,i.jsx)(n.p,{children:"Assuming 100 records are displayed per page in pagination. To fetch the first page's data, the following SQL query can be used:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"select * from records_tbl order by `key`, `name` limit 100;\n"})}),"\n",(0,i.jsx)(n.p,{children:"Fetching the data for the second page can be accomplished by:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"select * from records_tbl order by `key`, `name` limit 100 offset 100;\n"})}),"\n",(0,i.jsxs)(n.p,{children:["However, when performing deep pagination queries (with large offsets), even if the actual required data rows are few, this method still reads all data into memory for full sorting before subsequent processing, which is quite inefficient. Using an auto-incrementa column assigns a unique value to each row, allowing the use of where ",(0,i.jsx)(n.code,{children:"unique_value"})," > x limit y to filter a significant amount of data beforehand, making pagination more efficient."]}),"\n",(0,i.jsx)(n.p,{children:"Continuing with the aforementioned business table, an auto-increment column is added to the table to give each row a unique identifier:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'CREATE TABLE `demo`.`records_tbl2` (\n    `key` int(11) NOT NULL COMMENT "",\n    `name` varchar(26) NOT NULL COMMENT "",\n    `address` varchar(41) NOT NULL COMMENT "",\n    `city` varchar(11) NOT NULL COMMENT "",\n    `nation` varchar(16) NOT NULL COMMENT "",\n    `region` varchar(13) NOT NULL COMMENT "",\n    `phone` varchar(16) NOT NULL COMMENT "",\n    `mktsegment` varchar(11) NOT NULL COMMENT "",\n    `unique_value` BIGINT NOT NULL AUTO_INCREMENT\n) DUPLICATE KEY (`key`, `name`)\nDISTRIBUTED BY HASH(`key`) BUCKETS 10\nPROPERTIES (\n    "replication_num" = "3"\n);\n'})}),"\n",(0,i.jsx)(n.p,{children:"For pagination displaying 100 records per page, to fetch the first page's data, the following SQL query can be used:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"select * from records_tbl2 order by unique_value limit 100;\n"})}),"\n",(0,i.jsx)(n.p,{children:"By recording the maximum value of unique_value in the returned results, let's assume it's 99. The following query can then fetch data for the second page:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"select * from records_tbl2 where unique_value > 99 order by unique_value limit 100;\n"})}),"\n",(0,i.jsxs)(n.p,{children:["If directly querying contents from a later page and it's inconvenient to directly obtain the maximum value of ",(0,i.jsx)(n.code,{children:"unique_value"})," from the preceding page's data (for instance, directly obtaining contents from the 101st page), the following query can be used:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"select key, name, address, city, nation, region, phone, mktsegment\nfrom records_tbl2, (select unique_value as max_value from records_tbl2 order by unique_value limit 1 offset 9999) as previous_data\nwhere records_tbl2.unique_value > previous_data.max_value\norder by records_tbl2.unique_value limit 100;\n"})})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},250065:function(e,n,a){a.d(n,{Z:function(){return r},a:function(){return s}});var t=a(667294);let i={},l=t.createContext(i);function s(e){let n=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);