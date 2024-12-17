"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["255037"],{520415:function(e,a,t){t.r(a),t.d(a,{assets:function(){return l},contentTitle:function(){return o},default:function(){return h},frontMatter:function(){return r},metadata:function(){return s},toc:function(){return d}});var s=t(506989),n=t(785893),i=t(250065);let r={title:"Apache Doris for log and time series data analysis in NetEase, why not Elasticsearch and InfluxDB?",summary:"NetEase (NASDAQ: NTES) has replaced Elasticsearch and InfluxDB with Apache Doris in its monitoring and time series data analysis platforms, respectively, achieving 11X query performance and saving 70% of resources.",description:"NetEase (NASDAQ: NTES) has replaced Elasticsearch and InfluxDB with Apache Doris in its monitoring and time series data analysis platforms, respectively, achieving 11X query performance and saving 70% of resources.",date:"2024-05-23",author:"Apache Doris",tags:["Best Practice"],image:"/images/doris-for-log-and-time-series-data-analysis-in-netease.jpg"},o=void 0,l={authorsImageUrls:[void 0]},d=[{value:"Monitoring platform: Elasticsearch -&gt; Apache Doris",id:"monitoring-platform-elasticsearch---apache-doris",level:2},{value:"Time series data platform: InfluxDB -&gt; Apache Doris",id:"time-series-data-platform-influxdb---apache-doris",level:2},{value:"Best practice",id:"best-practice",level:2},{value:"Table creation",id:"table-creation",level:3},{value:"Cluster configuration",id:"cluster-configuration",level:3},{value:"Stream Load optimization",id:"stream-load-optimization",level:3},{value:"Query",id:"query",level:3},{value:"Conclusion",id:"conclusion",level:2}];function c(e){let a={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(a.p,{children:["For most people looking for a log management and analytics solution, Elasticsearch is the go-to choice. The same applies to InfluxDB for time series data analysis. These were exactly the choices of ",(0,n.jsxs)(a.a,{href:"https://finance.yahoo.com/quote/NTES/",children:["NetEase,Inc. ",(0,n.jsx)(a.em,{children:"(NASDAQ: NTES)"})]}),", one of the world's highest-yielding game companies but more than that. As NetEase expands its business horizons, the logs and time series data it receives explode, and problems like surging storage costs and declining stability come. As NetEase's pick among all big data components for platform upgrades, ",(0,n.jsx)(a.a,{href:"https://doris.apache.org",children:"Apache Doris"})," fits into both scenarios and brings much faster query performance."]}),"\n",(0,n.jsx)(a.p,{children:"We list the gains of NetEase after adopting Apache Doris in their monitoring platform and time series data platform, and share their best practice with users who have similar needs."}),"\n",(0,n.jsx)(a.h2,{id:"monitoring-platform-elasticsearch---apache-doris",children:"Monitoring platform: Elasticsearch -> Apache Doris"}),"\n",(0,n.jsx)(a.p,{children:"NetEase provides a collaborative workspace platform that combines email, calendar, cloud-based documents, instant messaging, and customer management, etc. To oversee its performance and availability, NetEase builds the Eagle monitoring platform, which collects logs for analysis. Eagle was supported by Elasticsearch and Logstash. The data pipeline was simple: Logstash gathers log data, cleans and transforms it, and then outputs it to Elasticsearch, which handles real-time log retrieval and analysis requests from users."}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"Monitoring platform: Elasticsearch -&gt; Apache Doris",src:t(956939).Z+"",width:"1280",height:"158"})}),"\n",(0,n.jsxs)(a.p,{children:["Due to NetEase's increasingly sizable log dataset, Elastisearch's index design, and limited hardware resources, the monitoring platform exhibits ",(0,n.jsx)(a.strong,{children:"high latency"})," in daily queries. Additionally, Elasticsearch maintains high data redundancy for forward indexes, inverted indexes, and columnar storage. This adds to cost pressure."]}),"\n",(0,n.jsx)(a.p,{children:"After migration to Apache Doris, NetEase achieves a 70% reduction in storage costs and an 11-fold increase in query speed."}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"Monitoring platform: Elasticsearch -&gt; Apache Doris",src:t(782855).Z+"",width:"1280",height:"160"})}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"70% reduction in storage costs"}),": This means a dataset that takes up 100TB in Elasticsearch only requires 30TB in Apache Doris. Moreover, thanks to the much-reduced storage space usage, they can replace their HDDs with more expensive SSDs for hot data storage to achieve higher query performance while staying within the same budget."]}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"11-fold increase in query speed"}),": Apache Doris can deliver faster queries while consuming less CPU resources than Elasticsearch. As shown below, Doris has reliably low latency in queries of various sizes, while Elasticsearch demonstrates longer latency and greater fluctuations, and the smallest speed difference is 11-fold."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"Apache Doris vs Elasticsearch",src:t(350313).Z+"",width:"1280",height:"720"})}),"\n",(0,n.jsx)(a.h2,{id:"time-series-data-platform-influxdb---apache-doris",children:"Time series data platform: InfluxDB -> Apache Doris"}),"\n",(0,n.jsx)(a.p,{children:"NetEase is also an instant messaging (IM) PaaS provider. To support this, it builds a data platform to analyze time series data from their IM services. The platform was built on InfluxDB, a time series database. Data flowed into a Kafka message queue. After the fields were parsed and cleaned, they arrived in InfluxDB, ready to be queried. InfluxDB responded to both online and offline queries. The former was to generate metric monitoring reports and bills in real time, and the latter was to batch analyze data from a day ago."}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"Time series data platform: InfluxDB -&gt; Apache Doris ",src:t(28840).Z+"",width:"1280",height:"588"})}),"\n",(0,n.jsx)(a.p,{children:"This platform was also challenged by the increasing data size and diversifying data sources."}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"OOM"}),": Offline data analysis across multiple data sources was putting InfluxDB under huge pressure and causing OOM errors."]}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"High storage costs"}),": Cold data took up a large portion but it was stored the same way as hot data. That added up to huge expenditures."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"Time series data platform: InfluxDB -&gt; Apache Doris ",src:t(857304).Z+"",width:"1280",height:"588"})}),"\n",(0,n.jsx)(a.p,{children:"Replacing InfluxDB with Apache Doris has brought higher cost efficiency to the data platform:"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"Higher throughput"}),": Apache Doris maintains a writing throughput of 500MB/s and achieves a peak writing throughput of 1GB/s. With InfluxDB, they used to require 22 servers for a CPU utilization rate of 50%. Now, with Doris, it only takes them 11 servers at the same CPU utilization rate. That means Doris helps cut down resource consumption by half."]}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"67% less storage usage"}),": The same dataset used 150TB of storage space with InfluxDB but only took up 50TB with Doris. Thus, Doris helps reduce storage costs by 67%."]}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"Faster and more stable query performance"}),": The performance test was to select a random online query SQL and run it 99 consecutive times. As is shown below, Doris delivers generally faster response time and maintains stability throughout the 99 queries."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"Doris vs InfluxDB",src:t(485132).Z+"",width:"1280",height:"692"})}),"\n",(0,n.jsx)(a.h2,{id:"best-practice",children:"Best practice"}),"\n",(0,n.jsx)(a.p,{children:"Adopting a new product and putting it into a production environment is, after all, a big project. The NetEase engineers came across a few hiccups during the journey, and they are kind enough to share about how they solved these problems and save other users some detours."}),"\n",(0,n.jsx)(a.h3,{id:"table-creation",children:"Table creation"}),"\n",(0,n.jsx)(a.p,{children:"Table schema design has a significant impact on database performance, and this holds for log and time series data processing as well. Apache Doris provides optimization options for these scenarios. These are some recommendations provided by NetEase."}),"\n",(0,n.jsxs)(a.ol,{children:["\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"Retrieval of the latest N logs"}),": Using a ",(0,n.jsx)(a.code,{children:"DATETIME"})," type time field as the primary key can largely speed queries up."]}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"Partitioning strategy"}),": Use ",(0,n.jsx)(a.code,{children:"PARTITION BY RANGE"})," based on a time field and enable ",(0,n.jsx)(a.a,{href:"https://doris.apache.org/docs/2.0/table-design/data-partitioning/dynamic-partitioning",children:"dynamic partition"}),". This allows for  auto-management of data partitions."]}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"Bucketing strategy"}),": Adopt random bucketing and set the number of buckets to roughly three times the total number of disks in the cluster. (Apache Doris also provides an ",(0,n.jsx)(a.a,{href:"https://doris.apache.org/docs/2.0/table-design/data-partitioning/auto-bucket",children:"auto bucket"})," feature to avoid performance loss caused by improper data sharding.)"]}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"Indexing"}),": Create indexes for frequently searched fields to improve query efficiency. Pay attention to the parser for the fields that require full-text searching, because it determines query accuracy."]}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"Compaction"}),": Optimize the compaction strategies based on your own business needs."]}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"Data compression"}),": Enable ",(0,n.jsx)(a.code,{children:"ZSTD"})," for better a higher compression ratio."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-sql",children:'CREATE TABLE log\n(\n    ts DATETIME,\n    host VARCHAR(20),\n    msg TEXT,\n    status INT,\n    size INT,\n    INDEX idx_size (size) USING INVERTED,\n    INDEX idx_status (status) USING INVERTED,\n    INDEX idx_host (host) USING INVERTED,\n    INDEX idx_msg (msg) USING INVERTED PROPERTIES("parser" = "unicode")\n)\nENGINE = OLAP\nDUPLICATE KEY(ts)\nPARTITION BY RANGE(ts) ()\nDISTRIBUTED BY RANDOM BUCKETS 250\nPROPERTIES (\n    "compression"="zstd",\n    "compaction_policy" = "time_series",\n    "dynamic_partition.enable" = "true",\n    "dynamic_partition.create_history_partition" = "true",\n    "dynamic_partition.time_unit" = "DAY",\n    "dynamic_partition.start" = "-7",\n    "dynamic_partition.end" = "3",\n    "dynamic_partition.prefix" = "p",\n    "dynamic_partition.buckets" = "250"\n);\n'})}),"\n",(0,n.jsx)(a.h3,{id:"cluster-configuration",children:"Cluster configuration"}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.strong,{children:"Frontend (FE) configuration"})}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-sql",children:"# For higher data ingestion performance:\nenable_single_replica_load = true\n\n# For more balanced tablet distribution:\nenable_round_robin_create_tablet = true\ntablet_rebalancer_type = partition\n\n# Memory optimization for frequent imports:\nmax_running_txn_num_per_db = 10000\nstreaming_label_keep_max_second = 300\nlabel_clean_interval_second = 300\n"})}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.strong,{children:"Backend (BE) configuration"})}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-SQL",children:"write_buffer_size=1073741824\nmax_tablet_version_num = 20000\nmax_cumu_compaction_threads = 10 (Half of the total number of CPUs)\nenable_write_index_searcher_cache = false\ndisable_storage_page_cache = true\nenable_single_replica_load = true\nstreaming_load_json_max_mb=250\n"})}),"\n",(0,n.jsx)(a.h3,{id:"stream-load-optimization",children:"Stream Load optimization"}),"\n",(0,n.jsx)(a.p,{children:"During peak times, the data platform is undertaking up to 1 million TPS and a writing throughput of 1GB/s. This is demanding for the system. Meanwhile, at peak time, a large number of concurrent write operations are loading data into lots of tables, but each individual write operation only involves a small amount of data. Thus, it takes a long time to accumulate a batch, which is contradictory to the data freshness requirement from the query side."}),"\n",(0,n.jsxs)(a.p,{children:["As a result, the data platform was bottlenecked by data backlogs in Apache Kafka. NetEase adopts the ",(0,n.jsx)(a.a,{href:"https://doris.apache.org/docs/2.0/data-operate/import/stream-load-manual",children:"Stream Load"})," method to ingest data from Kafka to Doris. So the key was to accelerate Stream Load. After talking to the ",(0,n.jsx)(a.a,{href:"https://join.slack.com/t/apachedoriscommunity/shared_invite/zt-2unfw3a3q-MtjGX4pAd8bCGC1UV0sKcw",children:"Apache Doris developers"}),", NetEase adopted two optimizations for their log and time series data analysis:"]}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"Single replica data loading"}),": Load one data replica and pull data from it to generate more replicas. This avoids the overhead of ranking and creating indexes for multiple replicas."]}),"\n"]}),"\n",(0,n.jsxs)(a.li,{children:["\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"Single tablet data loading"})," (",(0,n.jsx)(a.code,{children:"load_to_single_tablet=true"}),"): Compared to writing data to multiple tablets, this reduces the I/O overhead and the number the small files generated during data loading."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(a.p,{children:"The above measures are effective in improving data loading performance:"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:(0,n.jsx)(a.strong,{children:"2X data consumption speed from Kafka"})}),"\n"]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"2X data consumption speed from Kafka",src:t(873774).Z+"",width:"1280",height:"456"})}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:(0,n.jsx)(a.strong,{children:"75% lower data latency"})}),"\n"]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"75% lower data latency",src:t(724753).Z+"",width:"1280",height:"574"})}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:(0,n.jsx)(a.strong,{children:"70% faster response of Stream Load"})}),"\n"]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"70% faster response of Stream Load",src:t(471251).Z+"",width:"1280",height:"459"})}),"\n",(0,n.jsx)(a.p,{children:"Before putting the upgraded data platform in their production environment, NetEase has conducted extensive stress testing and grayscale testing. This is their experience in tackling errors along the way."}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.strong,{children:"1. Stream Load timeout:"})}),"\n",(0,n.jsx)(a.p,{children:"The early stage of stress testing often reported frequent timeout errors during data import. Additionally, despite the processes and cluster status being normal, the monitoring system couldn't collect the correct BE metrics. The engineers obtained the Doris BE stack using Pstack and analyzed it with PT-PMT. They discovered that the root cause was the lack of HTTP chunked encoding or content-length settings when initiating requests. This led Doris to mistakenly consider the data transfer as incomplete, causing it to remain in a waiting state. The solution was to simply add a chunked encoding setting on the client side."}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.strong,{children:"2. Data size in a single Stream Load exceeding threshold:"})}),"\n",(0,n.jsxs)(a.p,{children:["The default limit is 100 MB. The solution was to increase ",(0,n.jsx)(a.code,{children:"streaming_load_json_max_mb"})," to 250 MB."]}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"3. Error:"})," ",(0,n.jsx)(a.code,{children:"alive replica num 0 < quorum replica num 1"})]}),"\n",(0,n.jsxs)(a.p,{children:["By the ",(0,n.jsx)(a.code,{children:"show backends"})," command, it was discovered that one BE node was in OFFLINE state. A lookup in the ",(0,n.jsx)(a.code,{children:"be_custom"})," configuration file revealed a ",(0,n.jsx)(a.code,{children:"broken_storage_path"}),'. Further inspection of the BE logs located an error message "too many open files," meaning the number of file handles opened by the BE process had exceeded the system\'s limit, and this caused I/O operations to fail. When Doris detected such an abnormality, it marked the disk as unavailable. Because the table was configured with one single replica, when the disk holding the only replica was unavailable, data writing failed.']}),"\n",(0,n.jsxs)(a.p,{children:["The solution was to increase the maximum open file descriptor limit for the process to 1 million, delete the ",(0,n.jsx)(a.code,{children:"be_custom.conf"})," file, and restart the BE node."]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.strong,{children:"4. FE memory jitter"})}),"\n",(0,n.jsxs)(a.p,{children:["During grayscale testing, the FE could not be connected. The monitoring data showed that the JVM's 32 GB was exhausted, and the ",(0,n.jsx)(a.code,{children:"bdb"})," directory under the FE's meta directory had ballooned to 50 GB. Memory jitter occurred every hour, with peak memory usage reaching 80%"]}),"\n",(0,n.jsxs)(a.p,{children:["The root cause was improper parameter configuration. During high-concurrency Stream Load operations, the FE records the related Load information. Each import adds about 200 KB of information to the memory. The cleanup time for such information is controlled by the ",(0,n.jsx)(a.code,{children:"streaming_label_keep_max_second"})," parameter, which by default is 12 hours. Reducing this to 5 minutes can prevent the FE memory from being exhausted. However, they didn't modify the ",(0,n.jsx)(a.code,{children:"label_clean_interval_second"})," parameter, which controls the interval of the label cleanup thread. The default value of this parameter is 1 hour, which explains the hourly memory jitter."]}),"\n",(0,n.jsxs)(a.p,{children:["The solution was to dial down ",(0,n.jsx)(a.code,{children:"label_clean_interval_second"})," to 5 minutes."]}),"\n",(0,n.jsx)(a.h3,{id:"query",children:"Query"}),"\n",(0,n.jsx)(a.p,{children:"The engineers found results that did not match the filtering conditions in a query on the Eagle monitoring platform."}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"Dorsi Query Optimization",src:t(683895).Z+"",width:"1280",height:"936"})}),"\n",(0,n.jsxs)(a.p,{children:["This was due to the engineers' misconception of ",(0,n.jsx)(a.code,{children:"match_all"})," in Apache Doris. ",(0,n.jsx)(a.code,{children:"match_all"}),' identifies data records that include all the specified tokens while tokenization is based on space and punctuation marks. In the unqualified result, although the timestamp did not match, the message included "29", which compensated for the unmatched part in the timestamp. That\'s why this data record was included as a query result.']}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"Dorsi Query Optimization",src:t(729478).Z+"",width:"1144",height:"825"})}),"\n",(0,n.jsxs)(a.p,{children:["For Doris to produce what the engineers wanted in this query, ",(0,n.jsx)(a.code,{children:"MATCH_PHRASE"})," should be used instead, because it also identifies the sequence of texts."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-sql",children:"SELECT * FROM table_name WHERE logmsg MATCH_PHRASE 'keyword1 keyword2';\n"})}),"\n",(0,n.jsxs)(a.p,{children:["Note that when using ",(0,n.jsx)(a.code,{children:"MATCH_PHRASE"}),", you should enable ",(0,n.jsx)(a.code,{children:"support_phrase"})," during index creation. Otherwise, the system will perform a full table scan and a hard match, resulting in poor query efficiency."]}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-sql",children:'INDEX idx_name4(column_name4) USING INVERTED PROPERTIES("parser" = "english", "support_phrase" = "true")\n'})}),"\n",(0,n.jsxs)(a.p,{children:["If you want to enable ",(0,n.jsx)(a.code,{children:"support_phrase"})," for existing tables that have already been populated with data, you can execute ",(0,n.jsx)(a.code,{children:"DROP INDEX"})," and then ",(0,n.jsx)(a.code,{children:"ADD INDEX"})," to replace the old index with a new one. This process is incremental and does not require rewriting the entire table."]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.strong,{children:"This is another advantage of Doris compared to Elasticsearch: It supports more flexible index management and allows easy addition and removal of indexes."})}),"\n",(0,n.jsx)(a.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,n.jsxs)(a.p,{children:["Apache Doris supports the log and time series data analytic workloads of NetEase with higher query performance and less storage consumption. Beyond these, Apache Doris has other capabilities such as data lake analysis since it is designed as an all-in-one big data analytic platform. If you want a quick evaluation of whether Doris is right for your use case, come talk to the Doris makers on ",(0,n.jsx)(a.a,{href:"https://join.slack.com/t/apachedoriscommunity/shared_invite/zt-2unfw3a3q-MtjGX4pAd8bCGC1UV0sKcw",children:"Slack"}),"."]})]})}function h(e={}){let{wrapper:a}={...(0,i.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},873774:function(e,a,t){t.d(a,{Z:function(){return s}});let s=t.p+"assets/images/doris-data-loading-performance-1-ee9e3f0841cd78fa0171bc08c18d6fbb.png"},724753:function(e,a,t){t.d(a,{Z:function(){return s}});let s=t.p+"assets/images/doris-data-loading-performance-2-ad5092021a47b02cb0a874cd5511ea0f.png"},471251:function(e,a,t){t.d(a,{Z:function(){return s}});let s=t.p+"assets/images/doris-data-loading-performance-3-32c579174b74d58a922ad4b29e03acd7.png"},729478:function(e,a,t){t.d(a,{Z:function(){return s}});let s=t.p+"assets/images/doris-query-optimization-2-778c89a665a9de4e41aacc256b099954.png"},683895:function(e,a,t){t.d(a,{Z:function(){return s}});let s=t.p+"assets/images/doris-query-optimization-9a78bd121d00c488676981931cf1e981.png"},350313:function(e,a,t){t.d(a,{Z:function(){return s}});let s=t.p+"assets/images/doris-vs-elasticsearch-query-latency-542660f4457f559a4e594993e28aef4c.PNG"},485132:function(e,a,t){t.d(a,{Z:function(){return s}});let s=t.p+"assets/images/doris-vs-influxdb-cost-effectivity-1026ec10820805c8bffc1f024a8ab2cb.png"},782855:function(e,a,t){t.d(a,{Z:function(){return s}});let s=t.p+"assets/images/monitoring-platform-apache-doris-23c3a1008f0d3e6e59d53047ace7e185.PNG"},956939:function(e,a,t){t.d(a,{Z:function(){return s}});let s=t.p+"assets/images/monitoring-platform-elasticsearch-5926a8f4794acda07e50b877ffc85c92.PNG"},28840:function(e,a,t){t.d(a,{Z:function(){return s}});let s=t.p+"assets/images/time-series-data-platform-from-influxdb-to-apache-doris-480aab1f5537e6bd0fba6f1c6801f9c3.PNG"},857304:function(e,a,t){t.d(a,{Z:function(){return s}});let s=t.p+"assets/images/time-series-data-platform-influxdb-to-apache-doris-2-def95b716954bcd09bdffa13fef7ed1f.PNG"},250065:function(e,a,t){t.d(a,{Z:function(){return o},a:function(){return r}});var s=t(667294);let n={},i=s.createContext(n);function r(e){let a=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),s.createElement(i.Provider,{value:a},e.children)}},506989:function(e){e.exports=JSON.parse('{"permalink":"/zh-CN/blog/apache-doris-for-log-and-time-series-data-analysis-in-netease","source":"@site/blog/apache-doris-for-log-and-time-series-data-analysis-in-netease.md","title":"Apache Doris for log and time series data analysis in NetEase, why not Elasticsearch and InfluxDB?","description":"NetEase (NASDAQ: NTES) has replaced Elasticsearch and InfluxDB with Apache Doris in its monitoring and time series data analysis platforms, respectively, achieving 11X query performance and saving 70% of resources.","date":"2024-05-23T00:00:00.000Z","tags":[{"inline":true,"label":"Best Practice","permalink":"/zh-CN/blog/tags/best-practice"}],"hasTruncateMarker":false,"authors":[{"name":"Apache Doris","key":null,"page":null}],"frontMatter":{"title":"Apache Doris for log and time series data analysis in NetEase, why not Elasticsearch and InfluxDB?","summary":"NetEase (NASDAQ: NTES) has replaced Elasticsearch and InfluxDB with Apache Doris in its monitoring and time series data analysis platforms, respectively, achieving 11X query performance and saving 70% of resources.","description":"NetEase (NASDAQ: NTES) has replaced Elasticsearch and InfluxDB with Apache Doris in its monitoring and time series data analysis platforms, respectively, achieving 11X query performance and saving 70% of resources.","date":"2024-05-23","author":"Apache Doris","tags":["Best Practice"],"image":"/images/doris-for-log-and-time-series-data-analysis-in-netease.jpg"},"unlisted":false,"prevItem":{"title":"Apache Doris version 2.0.11 has been released","permalink":"/zh-CN/blog/release-note-2.0.11"},"nextItem":{"title":"Apache Doris 2.1.3 just released","permalink":"/zh-CN/blog/release-note-2.1.3"}}')}}]);