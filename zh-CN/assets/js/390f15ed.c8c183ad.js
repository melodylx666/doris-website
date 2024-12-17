"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["367931"],{663682:function(e,i,s){s.r(i),s.d(i,{assets:function(){return h},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return a},metadata:function(){return n},toc:function(){return o}});var n=s(465029),r=s(785893),t=s(250065);let a={title:"Apache Doris 2.1.7 just released",summary:"This version brings continuous upgrades and improvements. Additionally, several fixes have been implemented in areas such as the  to the Lakehouse, Async Materialized Views, and Semi-Structured Data Management, Query Optimizer and Permission Management.",description:"This version brings continuous upgrades and improvements. Additionally, several fixes have been implemented in areas such as the  to the Lakehouse, Async Materialized Views, and Semi-Structured Data Management, Query Optimizer and Permission Management.",date:"2024-11-10",author:"Apache Doris",tags:["Release Notes"],image:"/images/2.1.7.jpg"},l=void 0,h={authorsImageUrls:[void 0]},o=[{value:"Behavior changes",id:"behavior-changes",level:2},{value:"New features",id:"new-features",level:2},{value:"Async Materialized View",id:"async-materialized-view",level:3},{value:"Query Execution",id:"query-execution",level:3},{value:"Storage Management",id:"storage-management",level:3},{value:"Others",id:"others",level:3},{value:"Improvements",id:"improvements",level:2},{value:"Lakehouse",id:"lakehouse",level:3},{value:"Async Materialized View",id:"async-materialized-view-1",level:3},{value:"Query optimizer",id:"query-optimizer",level:3},{value:"Query Execution",id:"query-execution-1",level:3},{value:"Storage Management",id:"storage-management-1",level:3},{value:"Others",id:"others-1",level:3},{value:"Bug fixes",id:"bug-fixes",level:2},{value:"Lakehouse",id:"lakehouse-1",level:3},{value:"Async Materialized View",id:"async-materialized-view-2",level:3},{value:"Semi-Structured Data Management",id:"semi-structured-data-management",level:3},{value:"Query optimizer",id:"query-optimizer-1",level:3},{value:"Query Execution",id:"query-execution-2",level:3},{value:"Storage Management",id:"storage-management-2",level:3},{value:"Permissions",id:"permissions",level:3},{value:"Others",id:"others-2",level:3}];function c(e){let i={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(i.p,{children:["Dear community, ",(0,r.jsx)(i.strong,{children:"Apache Doris version 2.1.7 was officially released on November 10, 2024."})," This version brings continuous upgrades and improvements. Additionally, several fixes have been implemented in areas such as the  to the Lakehouse, Async Materialized Views, and Semi-Structured Data Management, Query Optimizer and Permission Management."]}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"Quick Download:"})," ",(0,r.jsx)(i.a,{href:"https://doris.apache.org/download/",children:"https://doris.apache.org/download/"})]}),"\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"GitHub Release:"})," ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/releases",children:"https://github.com/apache/doris/releases"})]}),"\n",(0,r.jsx)(i.h2,{id:"behavior-changes",children:"Behavior changes"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["The following global variables will be forcibly set to the following default values:\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"enable_nereids_dml: true"}),"\n",(0,r.jsx)(i.li,{children:"enable_nereids_dml_with_pipeline: true"}),"\n",(0,r.jsx)(i.li,{children:"enable_nereids_planner: true"}),"\n",(0,r.jsx)(i.li,{children:"enable_fallback_to_original_planner: true"}),"\n",(0,r.jsx)(i.li,{children:"enable_pipeline_x_engine: true"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["New columns have been added to the audit log. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/42262",children:"#42262"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["For more information, please  refer to ",(0,r.jsx)(i.a,{href:"https://doris.apache.org/docs/admin-manual/audit-plugin/",children:"docs"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"new-features",children:"New features"}),"\n",(0,r.jsx)(i.h3,{id:"async-materialized-view",children:"Async Materialized View"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["An asynchronous materialized view has added a property called ",(0,r.jsx)(i.code,{children:"use_for_rewrite"})," to control whether it participates in transparent rewriting. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/40332",children:"#40332"})]}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"query-execution",children:"Query Execution"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["The list of changed session variables is now output in the Profile. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/41016",children:"#41016"})]}),"\n",(0,r.jsxs)(i.li,{children:["Support for ",(0,r.jsx)(i.code,{children:"trim_in"}),", ",(0,r.jsx)(i.code,{children:"ltrim_in"}),", and ",(0,r.jsx)(i.code,{children:"rtrim_in"})," functions has been added. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/42641",children:"#42641"})," (Note: This is a duplicate mention, but I'm including it as per your original list.)"]}),"\n",(0,r.jsxs)(i.li,{children:["Support for several URL functions (top_level_domain, first_significant_subdomain, cut_to_first_significant_subdomain) has been added. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/42916",children:"#42916"})]}),"\n",(0,r.jsxs)(i.li,{children:["The ",(0,r.jsx)(i.code,{children:"bit_set"})," function has been added. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/42099",children:"#42916"})]}),"\n",(0,r.jsxs)(i.li,{children:["The ",(0,r.jsx)(i.code,{children:"count_substrings"})," function has been added. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/42055",children:"#42055"})]}),"\n",(0,r.jsxs)(i.li,{children:["The ",(0,r.jsx)(i.code,{children:"translate"})," and ",(0,r.jsx)(i.code,{children:"url_encode"})," functions have been added. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/41051",children:"#41051"})]}),"\n",(0,r.jsxs)(i.li,{children:["The ",(0,r.jsx)(i.code,{children:"normal_cdf"}),", ",(0,r.jsx)(i.code,{children:"to_iso8601"}),", and ",(0,r.jsx)(i.code,{children:"from_iso8601_date"})," functions have been added. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/40695",children:"#40695"})]}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"storage-management",children:"Storage Management"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["The ",(0,r.jsx)(i.code,{children:"information_schema.table_options"})," and ",(0,r.jsx)(i.code,{children:"table_properties"})," system tables have been added, supporting the querying of attributes set during table creation. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/34384",children:"#34384"})]}),"\n",(0,r.jsxs)(i.li,{children:["Support for ",(0,r.jsx)(i.code,{children:"bitmap_empty"})," as a default value has been implemented. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/40364",children:"#40364"})]}),"\n",(0,r.jsxs)(i.li,{children:["A new session variable ",(0,r.jsx)(i.code,{children:"require_sequence_in_insert"})," has been introduced to control whether a sequence column must be provided when performing ",(0,r.jsx)(i.code,{children:"INSERT INTO SELECT"})," writes to a unique key table. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/41655",children:"#41655"})]}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"others",children:"Others"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["Allow for generating flame graphs on the BE WebUI page.",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/41044",children:"#41044"})]}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"improvements",children:"Improvements"}),"\n",(0,r.jsx)(i.h3,{id:"lakehouse",children:"Lakehouse"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["Support for writing data to Hive text format tables. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/40537",children:"#40537"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["For more information, please  refer to ",(0,r.jsx)(i.a,{href:"https://doris.apache.org/docs/lakehouse/datalake-building/hive-build",children:"docs"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["Access MaxCompute data using MaxCompute Open Storage API. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/41610",children:"#41610"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["For more information, please  refer to ",(0,r.jsx)(i.a,{href:"https://doris.apache.org/docs/lakehouse/database/max-compute",children:"docs"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["Support for Paimon DLF Catalog. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/41694",children:"#41694"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["For more information, please  refer to ",(0,r.jsx)(i.a,{href:"https://doris.apache.org/docs/lakehouse/datalake-analytics/paimon",children:"docs"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["Added ",(0,r.jsx)(i.code,{children:"table$partitions"})," syntax to directly query Hive partition information.",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/41230",children:"#41230"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["For more information, please  refer to ",(0,r.jsx)(i.a,{href:"https://doris.apache.org/docs/lakehouse/datalake-analytics/hive",children:"docs"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["Support for reading Parquet files in brotli compression format.",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/42162",children:"#42162"})]}),"\n",(0,r.jsxs)(i.li,{children:["Support for reading DECIMAL 256 types in Parquet files. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/42241",children:"#42241"})]}),"\n",(0,r.jsxs)(i.li,{children:["Support for reading Hive tables in OpenCsvSerde format.",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/42939",children:"#42939"})]}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"async-materialized-view-1",children:"Async Materialized View"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["Refined the granularity of lock holding during the build process for asynchronous materialized views. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/40402",children:"#40402"})," ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/41010",children:"#41010"}),"."]}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"query-optimizer",children:"Query optimizer"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["Improved the accuracy of statistic information collection and usage in extreme cases to enhance planning stability. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/40457",children:"#40457"})]}),"\n",(0,r.jsxs)(i.li,{children:["Runtime filters can now be generated in more scenarios to improve query performance. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/40815",children:"#40815"})]}),"\n",(0,r.jsxs)(i.li,{children:["Enhanced constant folding capabilities for numerical, date, and string functions to boost query performance.  ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/40820",children:"#40820"})]}),"\n",(0,r.jsxs)(i.li,{children:["Optimized the column pruning algorithm to enhance query performance. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/41548",children:"#41548"})]}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"query-execution-1",children:"Query Execution"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["Supported parallel preparation to reduce the time consumed by short queries. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/40270",children:"#40270"})]}),"\n",(0,r.jsxs)(i.li,{children:["Corrected the names of some counters in the profile to match the audit logs. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/41993",children:"#41993"})]}),"\n",(0,r.jsxs)(i.li,{children:["Added new local shuffle rules to speed up certain queries. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/40637",children:"#40637"})]}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"storage-management-1",children:"Storage Management"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["The ",(0,r.jsx)(i.code,{children:"SHOW PARTITIONS"})," command now supports displaying the commit version. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/28274",children:"#28274"})]}),"\n",(0,r.jsxs)(i.li,{children:["Checked for unreasonable partition expressions when creating tables. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/40158",children:"#40158"})]}),"\n",(0,r.jsxs)(i.li,{children:["Optimized the scheduling logic when encountering EOF in Routine Load. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/40509",children:"#40509"})]}),"\n",(0,r.jsxs)(i.li,{children:["Made Routine Load aware of schema changes. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/40508",children:"#40508"})]}),"\n",(0,r.jsxs)(i.li,{children:["Improved the timeout logic for Routine Load tasks. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/41135",children:"#41135"})]}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"others-1",children:"Others"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["Allowed closing the built-in service port of BRPC via BE configuration. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/41047",children:"#41047"})]}),"\n",(0,r.jsxs)(i.li,{children:["Fixed issues with missing fields and duplicate records in audit logs. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/43015",children:"#43015"})]}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"bug-fixes",children:"Bug fixes"}),"\n",(0,r.jsx)(i.h3,{id:"lakehouse-1",children:"Lakehouse"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["Fixed the inconsistency in the behavior of INSERT OVERWRITE with Hive. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/39840",children:"#39840"})]}),"\n",(0,r.jsxs)(i.li,{children:["Cleaned up temporarily created folders to address the issue of too many empty folders on HDFS.  ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/40424",children:"#40424"})]}),"\n",(0,r.jsxs)(i.li,{children:["Resolved memory leaks in FE caused by using the JDBC Catalog in some cases. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/40923",children:"#40923"})]}),"\n",(0,r.jsxs)(i.li,{children:["Resolved memory leaks in BE caused by using the JDBC Catalog in some cases. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/41266",children:"#41266"})]}),"\n",(0,r.jsxs)(i.li,{children:["Fixed errors in reading Snappy compressed formats in certain scenarios. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/40862",children:"#40862"})]}),"\n",(0,r.jsxs)(i.li,{children:["Addressed potential FileSystem leaks on the FE side in certain scenarios. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/41108",children:"#41108"})]}),"\n",(0,r.jsxs)(i.li,{children:["Resolved issues where using EXPLAIN VERBOSE to view external table execution plans could cause null pointer exceptions in some cases. [#41231] (",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/41231",children:"https://github.com/apache/doris/pull/41231"}),")"]}),"\n",(0,r.jsxs)(i.li,{children:["Fixed the inability to read tables in Paimon parquet format. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/41487",children:"#41487"})]}),"\n",(0,r.jsxs)(i.li,{children:["Addressed performance issues introduced by compatibility changes in the JDBC Oracle Catalog.  ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/41407",children:"#41407"})]}),"\n",(0,r.jsxs)(i.li,{children:["Disabled predicate pushing down after implicit conversion to resolve incorrect query results in some cases with JDBC Catalog. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/42242",children:"#42242"})]}),"\n",(0,r.jsxs)(i.li,{children:["Fixed issues with case-sensitive access to table names in the External Catalog. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/42261",children:"#42261"})]}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"async-materialized-view-2",children:"Async Materialized View"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["Fixed the issue where user-specified start times were not effective. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/39573",children:"#39573"})]}),"\n",(0,r.jsxs)(i.li,{children:["Resolved the issue of nested materialized views not refreshing. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/40433",children:"#40433"})]}),"\n",(0,r.jsxs)(i.li,{children:["Fixed the issue where materialized views might not refresh after the base table was deleted and recreated.  ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/41762",children:"#41762"})]}),"\n",(0,r.jsxs)(i.li,{children:["Addressed issues where partition compensation rewrites could lead to incorrect results. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/40803",children:"#40803"})]}),"\n",(0,r.jsxs)(i.li,{children:["Fixed potential errors in rewrite results when ",(0,r.jsx)(i.code,{children:"sql_select_limit"})," was set. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/40106",children:"#40106"})]}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"semi-structured-data-management",children:"Semi-Structured Data Management"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["Fixed the issue of index file handle leaks. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/41915",children:"#41915"})]}),"\n",(0,r.jsxs)(i.li,{children:["Addressed inaccuracies in the ",(0,r.jsx)(i.code,{children:"count()"})," function of inverted indexes in special cases. (#41127)[",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/41127",children:"https://github.com/apache/doris/pull/41127"}),"]"]}),"\n",(0,r.jsxs)(i.li,{children:["Fixed exceptions with variant when light schema change was not enabled. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/40908",children:"#40908"})]}),"\n",(0,r.jsxs)(i.li,{children:["Resolved memory leaks when variant returns arrays. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/41339",children:"#41339"})]}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"query-optimizer-1",children:"Query optimizer"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["Corrected potential errors in nullable calculations for filter conditions during external table queries, leading to execution exceptions. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/41014",children:"#41014"})]}),"\n",(0,r.jsxs)(i.li,{children:["Fixed potential errors in optimizing range comparison expressions. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/41356",children:"#41356"})]}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"query-execution-2",children:"Query Execution"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["The match_regexp function could not correctly handle empty strings. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/39503",children:"#39503"})]}),"\n",(0,r.jsxs)(i.li,{children:["Resolved issues where the scanner thread pool could become stuck in high-concurrency scenarios. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/40495",children:"#40495"})]}),"\n",(0,r.jsxs)(i.li,{children:["Fixed errors in the results of the ",(0,r.jsx)(i.code,{children:"data_floor"})," function. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/41948",children:"#41948"})]}),"\n",(0,r.jsxs)(i.li,{children:["Addressed incorrect cancel messages in some scenarios. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/41798",children:"#41798"})]}),"\n",(0,r.jsxs)(i.li,{children:["Fixed issues with excessive warning logs printed by arrow flight. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/41770",children:"#41770"})]}),"\n",(0,r.jsxs)(i.li,{children:["Resolved issues where runtime filters failed to send in some scenarios. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/41698",children:"#41698"})]}),"\n",(0,r.jsxs)(i.li,{children:["Fixed problems where some system table queries could not end normally or became stuck. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/41592",children:"#41592"})]}),"\n",(0,r.jsxs)(i.li,{children:["Addressed incorrect results from window functions. ]",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/40761",children:"#40761"})]}),"\n",(0,r.jsxs)(i.li,{children:["Fixed issues where the encrypt and decrypt functions caused BE cores. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/40726",children:"#40726"})]}),"\n",(0,r.jsxs)(i.li,{children:["Resolved errors in the results of the conv function. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/40530",children:"#40530"})]}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"storage-management-2",children:"Storage Management"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["Fixed import failures when Memtable migration was used in multi-replica scenarios with machine crashes.  ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/38003",children:"#38003"})]}),"\n",(0,r.jsxs)(i.li,{children:["Addressed inaccurate memory statistics during the Memtable flush phase during imports. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/39536",children:"#39536"})]}),"\n",(0,r.jsxs)(i.li,{children:["Fixed fault tolerance issues with Memtable migration in multi-replica scenarios. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/40477",children:"#40477"})]}),"\n",(0,r.jsxs)(i.li,{children:["Resolved inaccurate bvar statistics with Memtable migration. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/40985",children:"#40985"})]}),"\n",(0,r.jsxs)(i.li,{children:["Fixed inaccurate progress reporting for S3 loads. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/40987",children:"#40987"})]}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"permissions",children:"Permissions"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["Fixed permission issues related to show columns, show sync, and show data from db.table. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/39726",children:"#39726"})]}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"others-2",children:"Others"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["Fixed the issue where the audit log plugin for version 2.0 could not be used in version 2.1. ",(0,r.jsx)(i.a,{href:"https://github.com/apache/doris/pull/41400",children:"#41400"})]}),"\n"]})]})}function d(e={}){let{wrapper:i}={...(0,t.a)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,i,s){s.d(i,{Z:function(){return l},a:function(){return a}});var n=s(667294);let r={},t=n.createContext(r);function a(e){let i=n.useContext(t);return n.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(t.Provider,{value:i},e.children)}},465029:function(e){e.exports=JSON.parse('{"permalink":"/zh-CN/blog/release-note-2.1.7","source":"@site/blog/release-note-2.1.7.md","title":"Apache Doris 2.1.7 just released","description":"This version brings continuous upgrades and improvements. Additionally, several fixes have been implemented in areas such as the  to the Lakehouse, Async Materialized Views, and Semi-Structured Data Management, Query Optimizer and Permission Management.","date":"2024-11-10T00:00:00.000Z","tags":[{"inline":true,"label":"Release Notes","permalink":"/zh-CN/blog/tags/release-notes"}],"hasTruncateMarker":false,"authors":[{"name":"Apache Doris","key":null,"page":null}],"frontMatter":{"title":"Apache Doris 2.1.7 just released","summary":"This version brings continuous upgrades and improvements. Additionally, several fixes have been implemented in areas such as the  to the Lakehouse, Async Materialized Views, and Semi-Structured Data Management, Query Optimizer and Permission Management.","description":"This version brings continuous upgrades and improvements. Additionally, several fixes have been implemented in areas such as the  to the Lakehouse, Async Materialized Views, and Semi-Structured Data Management, Query Optimizer and Permission Management.","date":"2024-11-10","author":"Apache Doris","tags":["Release Notes"],"image":"/images/2.1.7.jpg"},"unlisted":false,"prevItem":{"title":"Fine-tuning Apache Doris for maximum performance and resilience: a deep dive into fe.conf","permalink":"/zh-CN/blog/ortege-studio-2-fine-tuning-apache-doris-for-maximum-performance-and-resilience"},"nextItem":{"title":"New milestone: Apache Doris 3.0 has been released","permalink":"/zh-CN/blog/release-note-3.0.0"}}')}}]);