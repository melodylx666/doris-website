"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["511756"],{928916:function(e,t,i){i.r(t),i.d(t,{assets:function(){return c},contentTitle:function(){return r},default:function(){return d},frontMatter:function(){return s},metadata:function(){return a},toc:function(){return h}});var a=i(430935),n=i(785893),o=i(250065);let s={title:"Practice and optimization of Apache Doris in Xiaomi",description:"Xiaomi Group introduced Apache Doris in 2019. At present, Apache Doris has been widely used in dozens of business departments within Xiaomi. A set of data ecology with Apache Doris has been formed. This article is transcribed from an online meetup speech of the Doris community, aiming to share the practice of Apache Doris in Xiaomi.",date:"2022-12-08",author:"ZuoWei",tags:["Best Practice"],image:"/images/best-practice.png"},r="About Xiaomi",c={authorsImageUrls:[void 0]},h=[{value:"Previous Architecture",id:"previous-architecture",level:2},{value:"Problem No.1: Scattered components",id:"problem-no1-scattered-components",level:3},{value:"Problem No.2: High resource consumption",id:"problem-no2-high-resource-consumption",level:3},{value:"New Choice",id:"new-choice",level:2},{value:"New Architecture Based on Apache Doris",id:"new-architecture-based-on-apache-doris",level:2},{value:"Query Performance Comparision between Apache Doris &amp; Spark SQL",id:"query-performance-comparision-between-apache-doris--spark-sql",level:2},{value:"Data Import",id:"data-import",level:2},{value:"How to write real-time data into Apache Doris:",id:"how-to-write-real-time-data-into-apache-doris",level:3},{value:"How to write offline data into Apache Doris:",id:"how-to-write-offline-data-into-apache-doris",level:3},{value:"Data Qurey",id:"data-qurey",level:2},{value:"A/B Test",id:"ab-test",level:2},{value:"Test before Launch",id:"test-before-launch",level:2},{value:"Single SQL Parrellel Query Test",id:"single-sql-parrellel-query-test",level:3},{value:"Optimization",id:"optimization",level:2},{value:"Optimization in Test 1",id:"optimization-in-test-1",level:3},{value:"Optimization in Test 2",id:"optimization-in-test-2",level:3},{value:"Optimization in Test 3",id:"optimization-in-test-3",level:3}];function l(e){let t={a:"a",blockquote:"blockquote",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Guide: Xiaomi Group introduced Apache Doris in 2019. At present, Apache Doris has been widely used in dozens of business departments within Xiaomi. A set of data ecology with Apache Doris has been formed. This article is transcribed from an online meetup speech of the Doris community, aiming to share the practice of Apache Doris in Xiaomi."}),"\n"]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"Author: ZuoWei, OLAP Engineer, Xiaomi"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"kv",src:i(829082).Z+"",width:"900",height:"383"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://www.mi.com/global",children:"Xiaomi Corporation"})," (\u201CXiaomi\u201D or the \u201CGroup\u201D; HKG:1810), a consumer electronics and smart manufacturing company with smartphones and smart hardware connected by an Internet of Things (IoT) platform.  In 2021, Xiaomi's total revenue amounted to RMB328.3 billion(USD472,231,316,200), an increase of 33.5% year-over-year; Adjusted net profit was RMB22.0 billion(USD3,164,510,800), an increase of 69.5% year-over-year."]}),"\n",(0,n.jsxs)(t.p,{children:["Due to the growing need of data analysis, Xiaomi Group introduced Apache Doris in 2019. As one of the earliest users of Apache Doris, Xiaomi Group has been deeply involved in the open-source community. After three years of development, Apache Doris has been widely used in dozens of business departments within Xiaomi, such as Advertising, New Retail, Growth Analysis, Dashboards, UserPortraits, ",(0,n.jsx)(t.a,{href:"https://airstar.com/home",children:"AISTAR"}),", ",(0,n.jsx)(t.a,{href:"https://www.xiaomiyoupin.com",children:"Xiaomi Youpin"}),". Within Xiaomi, a data ecosystem has been built around Apache Doris."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"page_1",src:i(376920).Z+"",width:"1135",height:"661"})}),"\n",(0,n.jsx)(t.p,{children:"At present, Apache Doris already has dozens of clusters in Xiaomi, with an overall scale of hundreds of virtual machines . Among them, the largest single cluster reaches nearly 100 nodes, with dozens of real-time data synchronization tasks. And the largest daily increment of a single table rocket to 12 billion, supporting PB-level storage. And a single cluster can support more than 20,000 multi-dimensional analysis queries per day."}),"\n",(0,n.jsx)(t.h1,{id:"architecture-evolution",children:"Architecture Evolution"}),"\n",(0,n.jsx)(t.p,{children:"The original intention of Xiaomi to introduce Apache Doris is to solve the problems encountered in user behavior analysis. With the development of Xiaomi's Internet business, the demand for growth analysis using user behavior data is becoming stronger and stronger. If each business branch builds its own growth analysis system, it will not only be costly, but also inefficient. Therefore, if there is a product that can help them stop worrying about underlying complex technical details, it would be great to have relevant business personnel focus on their own technical work. In this way, it can greatly improve work efficiency. Therefore, Xiaomi Big Data and the cloud platform jointly developed the growth analysis system called Growing Analytics (referred to as GA), which aims to provide a flexible multi-dimensional real-time query and analysis platform, which can manage data access and query solutions in a unified way, and help business branches to refine operation."}),"\n",(0,n.jsx)(t.h2,{id:"previous-architecture",children:"Previous Architecture"}),"\n",(0,n.jsx)(t.p,{children:"The growth analysis platform project was established in mid-2018. At that time, based on the consideration of development time and cost, Xiaomi reused various existing big data basic components (HDFS, Kudu, SparkSQL, etc.) to build a growth analysis query system based on Lambda architecture. The architecture of the first version of the GA system is shown in the figure below, including the following aspects:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Data Source: The data source is the front-end embedded data and user behavior data."}),"\n",(0,n.jsx)(t.li,{children:"Data Access: The event tracking data is uniformly cleaned and ingested into Xiaomi's internal self-developed message queue, and the data is imported into Kudu through Spark Streaming."}),"\n",(0,n.jsx)(t.li,{children:"Storage: Separate hot and cold data in the storage layer. Hot data is stored in Kudu, and cold data is stored in HDFS. At the same time, partitioning is carried out in the storage layer. When the partition unit is day, part of the data will be cooled and stored on HDFS every night."}),"\n",(0,n.jsx)(t.li,{children:"Compute and Query: In the query layer, use SparkSQL to perform federated queries on the data on Kudu and HDFS, and finally display the query results on the front-end page."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"page_2",src:i(151096).Z+"",width:"1159",height:"683"})}),"\n",(0,n.jsx)(t.p,{children:"At that time, the first version of the growth analysis platform helped us solve a series of problems in the user operation process, but there were also two problems:"}),"\n",(0,n.jsx)(t.h3,{id:"problem-no1-scattered-components",children:"Problem No.1: Scattered components"}),"\n",(0,n.jsx)(t.p,{children:"Since the historical architecture is based on the combination of SparkSQL + Kudu + HDFS, too many dependent components lead to high operation and maintenance costs. The original design is that each component uses the resources of the public cluster, but in practice, it is found that during the execution of the query job, the query performance is easily affected by other jobs in the public cluster, and query jitter is prone to occur, especially when reading data from the HDFS public cluster , sometimes slower."}),"\n",(0,n.jsx)(t.h3,{id:"problem-no2-high-resource-consumption",children:"Problem No.2: High resource consumption"}),"\n",(0,n.jsx)(t.p,{children:"When querying through SparkSQL, the latency is relatively high. SparkSQL is a query engine designed based on a batch processing system. In the process of exchanging data shuffle between each stage, it still needs to be placed on the disk, and the delay in completing the SQL query is relatively high. In order to ensure that SQL queries are not affected by resources, we ensure query performance by adding machines. However, in practice, we find that there is limited room for performance improvement. This solution cannot make full use of machine resources to achieve efficient queries. A certain waste of resources."}),"\n",(0,n.jsx)(t.p,{children:"In response to the above two problems, our goal is to seek an MPP database that integrates computing and storage to replace our current storage and computing layer components. After technical selection, we finally decided to use Apache Doris to replace the older generation of historical architecture."}),"\n",(0,n.jsx)(t.h2,{id:"new-choice",children:"New Choice"}),"\n",(0,n.jsx)(t.p,{children:"Popular MPP-based query engines such as Impala and Presto, can efficiently support SQL queries, but they still need to rely on Kudu, HDFS, Hive Metastore and other storage system, which increase the operation and maintenance costs. At the same time, due to the separation of storage and compute, the query engine cannot easily find the data changes in the storage layer, resulting in bad performance in detailed query optimization. If you want to cache at the SQL layer, you cannot guarantee that the query results are up-to-date."}),"\n",(0,n.jsx)(t.p,{children:"Apache Doris is a top-level project of the Apache Foundation. It is mainly positioned as a high-performance, real-time analytical database, and is mainly used to solve reports and multi-dimensional analysis. It integrates Google Mesa and Cloudera Impala technologies. We conducted an in-depth performance tests on Doris and communicated with the community many times. And finally, we determined to replace the previous computing and storage components with Doris."}),"\n",(0,n.jsx)(t.h2,{id:"new-architecture-based-on-apache-doris",children:"New Architecture Based on Apache Doris"}),"\n",(0,n.jsx)(t.p,{children:"The new architecture obtains event tracking data from the data source. Then data is ingested  into Apache Doris. Query results can be directly displayed in the applications. In this way, Doris has truly realized the unification of computing, storage, and resource management tools."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"page_3",src:i(220501).Z+"",width:"1149",height:"674"})}),"\n",(0,n.jsx)(t.p,{children:"We chose Doris because:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Doris has excellent query performance and can meet our business needs."}),"\n",(0,n.jsx)(t.li,{children:"Doris supports standard SQL, and the learning cost is low."}),"\n",(0,n.jsx)(t.li,{children:"Doris does not depend on other external components and is easy to operate and maintain."}),"\n",(0,n.jsx)(t.li,{children:"The Apache Doris community is very active and friendly, crowded with contributors. It is easier for further versions upgrades and convenient for maintenance."}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"query-performance-comparision-between-apache-doris--spark-sql",children:"Query Performance Comparision between Apache Doris & Spark SQL"}),"\n",(0,n.jsx)(t.p,{children:"Note: The comparison is based on Apache Doris V0.13"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"page_4",src:i(568323).Z+"",width:"1242",height:"1000"})}),"\n",(0,n.jsx)(t.p,{children:"We selected a business model with an average daily data volume of about 1 billion, and conducted performance tests on Doris in different scenarios, including 6 event analysis scenarios, 3 retention analysis scenarios, and 3 funnel analysis scenarios. After comparing it with the previous architecture(SparkSQL+Kudu+HDFS), we found out:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"In the event analysis scenario, the average query time was reduced by 85%."}),"\n",(0,n.jsx)(t.li,{children:"In the scenarios of retention analysis and funnel analysis, the average query time was reduced by 50%."}),"\n"]}),"\n",(0,n.jsx)(t.h1,{id:"real-practice",children:"Real Practice"}),"\n",(0,n.jsx)(t.p,{children:"Below we will introduce our experience of data import, data query, A/B test in the business application of Apache Doris."}),"\n",(0,n.jsx)(t.h2,{id:"data-import",children:"Data Import"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"page_5",src:i(991561).Z+"",width:"1130",height:"667"})}),"\n",(0,n.jsx)(t.p,{children:"Xiaomi writes data into Doris mainly through Stream Load, Broker Load and a small amount of data by Insert. Usually data is generally ingested into the message queue first, which is divided into real-time and offline data."}),"\n",(0,n.jsx)(t.h3,{id:"how-to-write-real-time-data-into-apache-doris",children:"How to write real-time data into Apache Doris:"}),"\n",(0,n.jsx)(t.p,{children:"After part of real-time data processed by Flink, they will be ingested into Doris through  Flink-Doris-Connector provided by Apache Doris. The rest of the data is ingested through Spark Streaming. The bottom layer of these two writing approaches both rely on the Stream Load provided by Apache Doris."}),"\n",(0,n.jsx)(t.h3,{id:"how-to-write-offline-data-into-apache-doris",children:"How to write offline data into Apache Doris:"}),"\n",(0,n.jsx)(t.p,{children:"After offline data is partially ingested into Hive, they will be ingested into Doris through Xiaomi's data import tool. Users can directly submit Broker Load tasks to the Xiaomi's data import tool and import data directly into Doris, or import data through Spark SQL, which relies on the Spark-Doris-Connector provided by Apache Doris. Spark Doris Connector is actually the encapsulation of Stream Load."}),"\n",(0,n.jsx)(t.h2,{id:"data-qurey",children:"Data Qurey"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"page_6",src:i(561082).Z+"",width:"1120",height:"638"})}),"\n",(0,n.jsx)(t.p,{children:"Users can query after data import is done. Inside Xiaomi, we query through our data platform. Users can perform visual queries on Doris through Xiaomi's data platform, and conduct user behavior analysis and user portrait analysis. In order to help our teams conduct event analysis, retention analysis, funnel analysis, path analysis and other behavioral analysis, we have added corresponding UDF (User Defined Function) and UDAF (User Defined Aggregate Function) to Doris."}),"\n",(0,n.jsx)(t.p,{children:"In the upcoming version 1.2, Apache Doris adds the function of synchronizing metadata through external table, such as Hive/Hudi/Iceberg and Multi Catalog tool. External table query improves performance, and the ability to access external tables greatly increases ease of use. In the future, we will consider querying Hive and Iceberg data directly through Doris, which builds an architecture of datalake."}),"\n",(0,n.jsx)(t.h2,{id:"ab-test",children:"A/B Test"}),"\n",(0,n.jsx)(t.p,{children:"In real business, the A/B test is a method of comparing two versions of strategies against each other to determine which one performs better. A/B test is essentially an experiment where two or more variants of a page are shown to users at random, and statistical analysis. It is popular approach used to determine which variation performs better for a given conversion goal. Xiaomi's A/B test platform is an operation tool product that conducts the A/B test with experimental grouping, traffic splitting, and scientific evaluation to assist in decision making. Xiaomi's A/B test platform has several query applications: user deduplication, indicator summation, covariance calculation, etc. The query types will involve Count (distinct), Bitmap, Like, etc."}),"\n",(0,n.jsx)(t.p,{children:"Apache Doris also provides services to Xiaomi's A/B test platform. Everyday, Xiaomi's A/B test platform needs to process a temendous amount of data with billions of queries. That's why Xiaomi's A/B test platform is eager to improve the query performance."}),"\n",(0,n.jsx)(t.p,{children:"Apache Doris V1.1 released just in time and has fully supported vectorization in the processing and storage. Compared with the non-vectorized version, the query performance has been significantly improved. It is time to update Xiaomi's Doris cluster to the latest version. That's why we first launched the latest vectorized version of Doris on Xiaomi's A/B test platform."}),"\n",(0,n.jsx)(t.h2,{id:"test-before-launch",children:"Test before Launch"}),"\n",(0,n.jsx)(t.p,{children:"Note: The following tests are based on Apache Doris V1.1.2"}),"\n",(0,n.jsx)(t.p,{children:"We built a test cluster for Apache Doris V1.1.2, which is as big as that of the Xiaomi online Apache Doris V0.13 version, to test before the vectorization version goes online. The test is divided into two aspects: single SQL parrellel query test and batch SQL concurrent query test."}),"\n",(0,n.jsx)(t.p,{children:"The configurations of the two clusters are exactly the same, and the specific configuration information is as follows:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Scale: 3 FEs + 89 virtual machines"}),"\n",(0,n.jsx)(t.li,{children:"CPU: Intel(R) Xeon(R) Silver 4216 CPU @ 2.10GHz 16 cores 32 threads \xd7 2"}),"\n",(0,n.jsx)(t.li,{children:"Memory: 256GB"}),"\n",(0,n.jsx)(t.li,{children:"Disk: 7.3TB \xd7 12 HDD"}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"single-sql-parrellel-query-test",children:"Single SQL Parrellel Query Test"}),"\n",(0,n.jsx)(t.p,{children:"We choose 7 classic queries in the Xiaomi A/B test. For each query, we limited the time range to 1 day, 7 days, and 20 days for testing, where the daily partition data size is about 3.1 billion (the data volume is about 2 TB). The test results are shown in the figures:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"page_7",src:i(395353).Z+"",width:"750",height:"450"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"page_8",src:i(977400).Z+"",width:"750",height:"450"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"page_9",src:i(993331).Z+"",width:"750",height:"450"})}),"\n",(0,n.jsx)(t.p,{children:"The Apache Doris V1.1.2 has at least 3~5 times performance improvement compared to the Xiaomi online Doris V0.13, which is remarkable."}),"\n",(0,n.jsx)(t.h2,{id:"optimization",children:"Optimization"}),"\n",(0,n.jsx)(t.p,{children:"Note: The following tests are based on Apache Doris V1.1.2"}),"\n",(0,n.jsx)(t.p,{children:"Based on Xiaomi's A/B test business data, we tuned Apache Doris V1.1.2 and conducted concurrent query tests on the tuned Doris V1.1.2 and Xiaomi's online Doris V0.13. The test results are as follows."}),"\n",(0,n.jsx)(t.h3,{id:"optimization-in-test-1",children:"Optimization in Test 1"}),"\n",(0,n.jsx)(t.p,{children:"We choose user deduplication, index summation, and covariance calculation query(the total number of SQL is 3245) in the A/B test to conduct concurrent query tests on the two versions. The single-day partition data of the table is about 3.1 billion (the amount of data is about 2 TB) and the query will be based on the latest week's data. The test results are shown in the figures:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"page_10",src:i(739636).Z+"",width:"1080",height:"338"})}),"\n",(0,n.jsx)(t.p,{children:"Compared with Apache Doris V0.13, the overall average latency of Doris V1.1.2 is reduced by about 48%, and the P95 latency is reduced by about 49%. In this test, the query performance of Doris V1.1.2 was nearly doubled compared to Doris V0.13."}),"\n",(0,n.jsx)(t.h3,{id:"optimization-in-test-2",children:"Optimization in Test 2"}),"\n",(0,n.jsx)(t.p,{children:"We choose 7 A/B test reports to test the two versions. Each A/B test report is corresponded to two modules in Xiaomi A/B test platform and each module represents thousands of SQL query. Each report submits query tasks to the cluster where the two versions reside at the same concurrency. The test results are shown in the figure:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"page_11",src:i(429629).Z+"",width:"750",height:"450"})}),"\n",(0,n.jsx)(t.p,{children:"Compared with Doris V0.13, Doris V1.1.2 reduces the overall average latency by around 52%. In the test, the query performance of Doris V1.1.2 version was more than 1 time higher than that of Doris V0.13."}),"\n",(0,n.jsx)(t.h3,{id:"optimization-in-test-3",children:"Optimization in Test 3"}),"\n",(0,n.jsx)(t.p,{children:"To verify the performance of the tuned Apache Doris V1.1.2 in other cases, we choose the Xiaomi user behavior analysis to conduct concurrent query performance tests of Doris V1.1.2 and Doris V0.13. We choose behavior analysis query for 4 days on October 24, 25, 26 and 27, 2022. The test results are shown in the figures:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"page_12",src:i(368854).Z+"",width:"1080",height:"338"})}),"\n",(0,n.jsx)(t.p,{children:"Compared with Doris V0.13, the overall average latency of Doris V1.1.2 has been reduced by about 77%, and the P95 latency has been reduced by about 83%. In this test, the query performance of Doris V1.1.2 version is 4~6 times higher than that of Doris V0.13."}),"\n",(0,n.jsx)(t.h1,{id:"conclusion",children:"Conclusion"}),"\n",(0,n.jsx)(t.p,{children:"Since we adopted Apache Doris in 2019, Apache Doris has currently served dozens of businesses and sub-brands within Xiaomi, with dozens of clusters and hundreds of nodes. It completes more than 10,000 user online analysis queries every day and is responsible for most of the online analysis in Xiaomi."}),"\n",(0,n.jsx)(t.p,{children:"After performance test and tuning, Apache Doris V1.1.2 has met the launch requirements of the Xiaomi A/B test platform and does well in query performance and stability. In some cases, it even exceeds our expectations, such as the overall average latency being reduced by about 77% in our tuned version."}),"\n",(0,n.jsx)(t.p,{children:"Meanwhile, some functions have in the above been released in Apache Doris V1.0 or V1.1,  some PRs have been merged into the community Master Fork and should be released soon. Recently the activity of the community has been greatly enhanceed. We are glad to see that Apache Doris has become more and more mature, and stepped forward to an integrated datalake. We truly believe that in the future, more data analysis will be explored and realized within Apache Doris."}),"\n",(0,n.jsx)(t.h1,{id:"contact-us",children:"Contact Us"}),"\n",(0,n.jsxs)(t.p,{children:["Apache Doris Website\uFF1A",(0,n.jsx)(t.a,{href:"http://doris.apache.org",children:"http://doris.apache.org"})]}),"\n",(0,n.jsxs)(t.p,{children:["Github Homepage\uFF1A",(0,n.jsx)(t.a,{href:"https://github.com/apache/doris",children:"https://github.com/apache/doris"})]}),"\n",(0,n.jsxs)(t.p,{children:["Email to DEV\uFF1A",(0,n.jsx)(t.a,{href:"mailto:dev@doris.apache.org",children:"dev@doris.apache.org"})]})]})}function d(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},829082:function(e,t,i){i.d(t,{Z:function(){return a}});let a=i.p+"assets/images/kv-b27d71e34981d9850785329cea2cb610.png"},376920:function(e,t,i){i.d(t,{Z:function(){return a}});let a=i.p+"assets/images/page_1-93afbd2f90769776af3083bc49fbf8dd.jpg"},739636:function(e,t,i){i.d(t,{Z:function(){return a}});let a=i.p+"assets/images/page_10-98057ca75a1689b6c6eb9932cdd5e841.jpg"},429629:function(e,t,i){i.d(t,{Z:function(){return a}});let a=i.p+"assets/images/page_11-bbf60c474aaea1a007b5b413d6bad77a.jpg"},368854:function(e,t,i){i.d(t,{Z:function(){return a}});let a=i.p+"assets/images/page_12-58242671fba5bbf25225b4d9d9f6d87c.jpg"},151096:function(e,t,i){i.d(t,{Z:function(){return a}});let a=i.p+"assets/images/page_2-db57a1a2eadb0f1c787f440a26358339.jpg"},220501:function(e,t,i){i.d(t,{Z:function(){return a}});let a=i.p+"assets/images/page_3-30c8cb46f4d289fa768e9a364779bc69.jpg"},568323:function(e,t,i){i.d(t,{Z:function(){return a}});let a=i.p+"assets/images/page_4-3e71f2a8753e49f5a73bea4bb628fbbf.jpg"},991561:function(e,t,i){i.d(t,{Z:function(){return a}});let a=i.p+"assets/images/page_5-010f8edce4b736817d68815f31e52fd7.jpg"},561082:function(e,t,i){i.d(t,{Z:function(){return a}});let a=i.p+"assets/images/page_6-14cf1592d25e4b6e4cc275e06c2e6673.jpg"},395353:function(e,t,i){i.d(t,{Z:function(){return a}});let a=i.p+"assets/images/page_7-b41817232fb711c583332d813de7f684.jpg"},977400:function(e,t,i){i.d(t,{Z:function(){return a}});let a=i.p+"assets/images/page_8-c8e10196ce6917449e8372205333f12c.jpg"},993331:function(e,t,i){i.d(t,{Z:function(){return a}});let a=i.p+"assets/images/page_9-cfbcd21a8b00a3b50508251b78ebd163.jpg"},250065:function(e,t,i){i.d(t,{Z:function(){return r},a:function(){return s}});var a=i(667294);let n={},o=a.createContext(n);function s(e){let t=a.useContext(o);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),a.createElement(o.Provider,{value:t},e.children)}},430935:function(e){e.exports=JSON.parse('{"permalink":"/zh-CN/blog/xiaomi_vector","source":"@site/blog/xiaomi_vector.md","title":"Practice and optimization of Apache Doris in Xiaomi","description":"Xiaomi Group introduced Apache Doris in 2019. At present, Apache Doris has been widely used in dozens of business departments within Xiaomi. A set of data ecology with Apache Doris has been formed. This article is transcribed from an online meetup speech of the Doris community, aiming to share the practice of Apache Doris in Xiaomi.","date":"2022-12-08T00:00:00.000Z","tags":[{"inline":true,"label":"Best Practice","permalink":"/zh-CN/blog/tags/best-practice"}],"hasTruncateMarker":false,"authors":[{"name":"ZuoWei","key":null,"page":null}],"frontMatter":{"title":"Practice and optimization of Apache Doris in Xiaomi","description":"Xiaomi Group introduced Apache Doris in 2019. At present, Apache Doris has been widely used in dozens of business departments within Xiaomi. A set of data ecology with Apache Doris has been formed. This article is transcribed from an online meetup speech of the Doris community, aiming to share the practice of Apache Doris in Xiaomi.","date":"2022-12-08","author":"ZuoWei","tags":["Best Practice"],"image":"/images/best-practice.png"},"unlisted":false,"prevItem":{"title":"Best practice in Kwai: Apache Doris on Elasticsearch","permalink":"/zh-CN/blog/BestPractice_Kwai"},"nextItem":{"title":"Apache Doris announced the official release of version 1.2.0","permalink":"/zh-CN/blog/release-note-1.2.0"}}')}}]);