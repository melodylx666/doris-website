"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["621243"],{976418:function(e,t,n){n.r(t),n.d(t,{metadata:()=>i,contentTitle:()=>s,default:()=>d,assets:()=>l,toc:()=>p,frontMatter:()=>o});var i=JSON.parse('{"id":"data-operate/delete/table-temp-partition","title":"Temporary Partition","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/data-operate/delete/table-temp-partition.md","sourceDirName":"data-operate/delete","slug":"/data-operate/delete/table-temp-partition","permalink":"/docs/3.0/data-operate/delete/table-temp-partition","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"Temporary Partition","language":"en"},"sidebar":"docs","previous":{"title":"Replacing Atomic Table","permalink":"/docs/3.0/data-operate/delete/atomicity-replace"},"next":{"title":"Export Overview","permalink":"/docs/3.0/data-operate/export/export-overview"}}'),r=n("785893"),a=n("250065");let o={title:"Temporary Partition",language:"en"},s=void 0,l={},p=[{value:"Add Temporary Partition",id:"add-temporary-partition",level:2},{value:"Delete Temporary Partition",id:"delete-temporary-partition",level:3},{value:"Replace Partition",id:"replace-partition",level:3},{value:"Importing Temporary Partitions",id:"importing-temporary-partitions",level:2},{value:"Query Temporary Partitions",id:"query-temporary-partitions",level:2},{value:"Relationship to Other Operations",id:"relationship-to-other-operations",level:2},{value:"DROP",id:"drop",level:3},{value:"TRUNCATE",id:"truncate",level:3},{value:"ALTER",id:"alter",level:3}];function h(e){let t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Doris supports adding temporary partitions to partitioned tables. Temporary partitions differ from formal partitions in that they are not queried by formal queries, but only by special query statements."}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"The partition columns of the temporary partition are the same as the formal partition and cannot be modified."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"The partition ranges of all temporary partitions of a table cannot overlap, but the ranges of temporary partitions and formal partitions can overlap."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"The partition name of the temporary partition cannot be the same as the formal partitions and other temporary partitions."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Temporary Partitions are mainly used in the following scenarios:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Atomic overwrite write operations"}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["In some cases, users want to rewrite the data of a certain partition, but if they do it by deleting and then importing, there will be a period of time in the middle when they cannot view the data. In this case, the user can create a corresponding Temporary Partition first, and after importing the new data into the Temporary Partition, replace the original partition atomically through the Replace operation to achieve the purpose. For the atomic overwrite write operation of non-partitioned table, please refer to ",(0,r.jsx)(t.a,{href:"../../data-operate/delete/atomicity-replace",children:"the documentation of Atomicity Replace"}),"."]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Modifying the number of buckets"}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["In some cases, users use an inappropriate bucket number when creating partitions. Then the user can first create a Temporary Partition corresponding to the partition range and specify the new bucket number. Then import the data of the formal partition into the Temporary Partition through the ",(0,r.jsx)(t.code,{children:"INSERT INTO"})," command, and replace the original partition atomically through the Replace operation to achieve the purpose."]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Merge or split partition"}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["In some cases, users want to modify the scope of partitions, such as merging two partitions, or splitting a large partition into several small partitions. You can first create a Temporary Partition corresponding to the scope of the merged or partitioned partition, and then import the data of the official partition into the Temporary Partition through the ",(0,r.jsx)(t.code,{children:"INSERT INTO"})," command, and then replace the original partition atomically through the Replacement operation, in order to achieve the purpose."]}),"\n",(0,r.jsx)(t.h2,{id:"add-temporary-partition",children:"Add Temporary Partition"}),"\n",(0,r.jsxs)(t.p,{children:["You can add temporary partitions to a table with the ",(0,r.jsx)(t.code,{children:"ALTER TABLE ADD TEMPORARY PARTITION"})," statement:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:'ALTER TABLE tbl1 ADD TEMPORARY PARTITION tp1 VALUES LESS THAN("2020-02-01");\n\nALTER TABLE tbl2 ADD TEMPORARY PARTITION tp1 VALUES [("2020-01-01"), ("2020-02-01"));\n\nALTER TABLE tbl1 ADD TEMPORARY PARTITION tp1 VALUES LESS THAN("2020-02-01")\n("replication_num" = "1")\nDISTRIBUTED BY HASH(k1) BUCKETS 5;\n\nALTER TABLE tbl3 ADD TEMPORARY PARTITION tp1 VALUES IN ("Beijing", "Shanghai");\n\nALTER TABLE tbl4 ADD TEMPORARY PARTITION tp1 VALUES IN ((1, "Beijing"), (1, "Shanghai"));\n\nALTER TABLE tbl3 ADD TEMPORARY PARTITION tp1 VALUES IN ("Beijing", "Shanghai")\n("replication_num" = "1")\nDISTRIBUTED BY HASH(k1) BUCKETS 5;\n'})}),"\n",(0,r.jsxs)(t.p,{children:["See ",(0,r.jsx)(t.code,{children:"HELP ALTER TABLE;"})," for more help and examples."]}),"\n",(0,r.jsx)(t.p,{children:"Some instructions for adding operations:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Adding a temporary partition is similar to adding a formal partition. The partition range of the temporary partition is independent of the formal partition."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Temporary partition can independently specify some attributes. Includes information such as the number of buckets, the number of replicas, or the storage medium."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"delete-temporary-partition",children:"Delete Temporary Partition"}),"\n",(0,r.jsxs)(t.p,{children:["A table's temporary partition can be dropped with the ",(0,r.jsx)(t.code,{children:"ALTER TABLE DROP TEMPORARY PARTITION"})," statement:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-Plain",children:"ALTER TABLE tbl1 DROP TEMPORARY PARTITION tp1;\n"})}),"\n",(0,r.jsxs)(t.p,{children:["See ",(0,r.jsx)(t.code,{children:"HELP ALTER TABLE;"})," for more help and examples."]}),"\n",(0,r.jsx)(t.p,{children:"Some instructions for the DELETE:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Deleting the temporary partition will not affect the data of the formal partition."}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"replace-partition",children:"Replace Partition"}),"\n",(0,r.jsxs)(t.p,{children:["You can replace formal partitions of a table with temporary partitions with the ",(0,r.jsx)(t.code,{children:"ALTER TABLE REPLACE PARTITION"})," statement."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:'ALTER TABLE tbl1 REPLACE PARTITION (p1) WITH TEMPORARY PARTITION (tp1);\n\nALTER TABLE tbl1 REPLACE PARTITION (p1, p2) WITH TEMPORARY PARTITION (tp1, tp2, tp3);\n\nALTER TABLE tbl1 REPLACE PARTITION (p1, p2) WITH TEMPORARY PARTITION (tp1, tp2)\nPROPERTIES (\n    "strict_range" = "false",\n    "use_temp_partition_name" = "true"\n);\n'})}),"\n",(0,r.jsxs)(t.p,{children:["See ",(0,r.jsx)(t.code,{children:"HELP ALTER TABLE;"})," for more help and examples."]}),"\n",(0,r.jsx)(t.p,{children:"The replace operation has two special optional parameters:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.strong,{children:["1. ",(0,r.jsx)(t.code,{children:"strict_range"})]})}),"\n",(0,r.jsx)(t.p,{children:"The default is true."}),"\n",(0,r.jsx)(t.p,{children:"For Range partition, When this parameter is true, the range union of all formal partitions to be replaced needs to be the same as the range union of the temporary partitions to be replaced. When set to false, you only need to ensure that the range between the new formal partitions does not overlap after replacement."}),"\n",(0,r.jsx)(t.p,{children:"For List partition, this parameter is always true, and the enumeration values of all full partitions to be replaced must be identical to the enumeration values of the temporary partitions to be replaced."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Example 1"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"-- Range of partitions p1, p2, p3 to be replaced (=> union):\n(10, 20), [20, 30), [40, 50) => [10, 30), [40, 50)\n\n--Replace the range of partitions tp1, tp2 (=> union):\n(10, 30), [40, 45), [45, 50) => [10, 30), [40, 50)\n\n--The union of ranges is the same, so you can use tp1 and tp2 to replace p1, p2, p3.\n"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Example 2"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"--Range of partition p1 to be replaced (=> union):\n[10, 50) => [10, 50)\n\n--Replace the range of partitions tp1, tp2 (=> union):\n[10, 30), [40, 50) => [10, 30), [40, 50)\n\n--The union of ranges is not the same. If strict_range is true, you cannot use tp1 and tp2 to replace p1. If false, and the two partition ranges [10, 30), [40, 50) and the other formal partitions do not overlap, they can be replaced.\n"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Example 3"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"--Enumerated values of partitions p1, p2 to be replaced (=> union).\n(1, 2, 3), (4, 5, 6) => (1, 2, 3, 4, 5, 6)\n--Replace the enumerated values of partitions tp1, tp2, tp3 (=> union).\n(1, 2, 3), (4), (5, 6) => (1, 2, 3, 4, 5, 6)\n--The enumeration values are the same, you can use tp1, tp2, tp3 to replace p1, p2\n"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Example 4"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:'--Enumerated values of partitions p1, p2, p3 to be replaced (=> union).\n(("1","beijing"), ("1", "shanghai")), (("2","beijing"), ("2", "shanghai")), (("3","beijing"), ("3", "shanghai")) => (("1","beijing"), ("1", "shanghai"), ("2","beijing"), ("2", "shanghai"), ("3","beijing"), ("3", "shanghai"))\n\n--Replace the enumerated values of partitions tp1, tp2 (=> union).\n(("1","beijing"), ("1", "shanghai")), (("2","beijing"), ("2", "shanghai"), ("3","beijing"), ("3", "shanghai")) => (("1","beijing"), ("1", "shanghai"), ("2","beijing"), ("2", "shanghai"), ("3","beijing"), ("3", "shanghai"))\n\n--The enumeration values are the same, you can use tp1, tp2 to replace p1, p2, p3\n'})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.strong,{children:["2. ",(0,r.jsx)(t.code,{children:"use_temp_partition_name"})]})}),"\n",(0,r.jsx)(t.p,{children:"The default is false."}),"\n",(0,r.jsx)(t.p,{children:"When this parameter is false, and the number of partitions to be replaced is the same as the number of replacement partitions, the name of the formal partition after the replacement remains unchanged."}),"\n",(0,r.jsx)(t.p,{children:"If true, after replacement, the name of the formal partition is the name of the replacement partition. Here are some examples:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Example 1"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"ALTER TABLE tbl1 REPLACE PARTITION (p1) WITH TEMPORARY PARTITION (tp1);\n"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"use_temp_partition_name"})," is ",(0,r.jsx)(t.strong,{children:"false"})," by default. After replacement, the partition name is still p1, but the related data and attributes are replaced with tp1."]}),"\n",(0,r.jsxs)(t.p,{children:["If ",(0,r.jsx)(t.code,{children:"use_temp_partition_name"})," is ",(0,r.jsx)(t.strong,{children:"true"})," by default, the name of the partition is tp1 after replacement. The p1 partition no longer exists."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Example 2"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-Plain",children:"ALTER TABLE tbl1 REPLACE PARTITION (p1, p2) WITH TEMPORARY PARTITION (tp1);\n"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"use_temp_partition_name"})," is ",(0,r.jsx)(t.strong,{children:"false"})," by default, but this parameter is invalid because the number of partitions to be replaced and the number of replacement partitions are different. After the replacement, the partition name is tp1, and p1 and p2 no longer exist."]}),"\n",(0,r.jsxs)(t.admonition,{title:"Tip",type:"tip",children:[(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Some instructions for the replacement operation:"})}),(0,r.jsx)(t.p,{children:"After the partition is replaced successfully, the replaced partition will be deleted and cannot be recovered."})]}),"\n",(0,r.jsx)(t.h2,{id:"importing-temporary-partitions",children:"Importing Temporary Partitions"}),"\n",(0,r.jsx)(t.p,{children:"Depending on the import method, the syntax for specifying the import of Temporary Partitions is slightly different. Here is a brief explanation with an example:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:'INSERT INTO tbl TEMPORARY PARTITION(tp1, tp2, ...) SELECT ....\ncurl --location-trusted -u root: -H "label:123" -H "temporary_partitions: tp1, tp2, ..." -T testData http://host:port/api/testDb/testTbl/_stream_load    \nLOAD LABEL example_db.label1\n(\nDATA INFILE("hdfs://hdfs_host:hdfs_port/user/palo/data/input/file")\nINTO TABLE my_table\nTEMPORARY PARTITION (tp1, tp2, ...)\n...\n)\nWITH BROKER hdfs ("username"="hdfs_user", "password"="hdfs_password");\nCREATE ROUTINE LOAD example_db.test1 ON example_tbl\nCOLUMNS(k1, k2, k3, v1, v2, v3 = k1 * 100),\nTEMPORARY PARTITIONS(tp1, tp2, ...),\nWHERE k1 > 100\nPROPERTIES\n(...)\nFROM KAFKA\n(...);\n'})}),"\n",(0,r.jsx)(t.h2,{id:"query-temporary-partitions",children:"Query Temporary Partitions"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sql",children:"SELECT ... FROM\ntbl1 TEMPORARY PARTITION(tp1, tp2, ...)\nJOIN\ntbl2 TEMPORARY PARTITION(tp1, tp2, ...)\nON ...\nWHERE ...;\n"})}),"\n",(0,r.jsx)(t.h2,{id:"relationship-to-other-operations",children:"Relationship to Other Operations"}),"\n",(0,r.jsx)(t.h3,{id:"drop",children:"DROP"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["After using the ",(0,r.jsx)(t.code,{children:"DROP"})," operation to directly drop the database or table, you can recover the database or table (within a limited time) through the ",(0,r.jsx)(t.code,{children:"RECOVER"})," command, but the temporary partition will not be recovered."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["After the formal partition is dropped using the ",(0,r.jsx)(t.code,{children:"ALTER"})," command, the partition can be recovered by the ",(0,r.jsx)(t.code,{children:"RECOVER"})," command (within a limited time). Operating a formal partition is not related to a temporary partition."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["After the temporary partition is dropped using the ",(0,r.jsx)(t.code,{children:"ALTER"})," command, the temporary partition cannot be recovered through the ",(0,r.jsx)(t.code,{children:"RECOVER"})," command."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"truncate",children:"TRUNCATE"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["Use the ",(0,r.jsx)(t.code,{children:"TRUNCATE"})," command to empty the table. The temporary partition of the table will be deleted and cannot be recovered."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["When using ",(0,r.jsx)(t.code,{children:"TRUNCATE"})," command to empty the formal partition, it will not affect the temporary partition."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["You cannot use the ",(0,r.jsx)(t.code,{children:"TRUNCATE"})," command to empty the temporary partition."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"alter",children:"ALTER"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["When the table has a temporary partition, you cannot use the ",(0,r.jsx)(t.code,{children:"ALTER"})," command to perform Schema Change, Rollup, etc. on the table."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"You cannot add temporary partitions to a table while the table is undergoing a alter operation."}),"\n"]}),"\n"]})]})}function d(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return s},a:function(){return o}});var i=n(667294);let r={},a=i.createContext(r);function o(e){let t=i.useContext(a);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);