"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["220688"],{844024:function(e,s,n){n.r(s),n.d(s,{metadata:()=>i,contentTitle:()=>a,default:()=>h,assets:()=>c,toc:()=>l,frontMatter:()=>o});var i=JSON.parse('{"id":"releasenotes/v2.1/release-2.1.3","title":"Release 2.1.3","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/releasenotes/v2.1/release-2.1.3.md","sourceDirName":"releasenotes/v2.1","slug":"/releasenotes/v2.1/release-2.1.3","permalink":"/docs/releasenotes/v2.1/release-2.1.3","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"Release 2.1.3","language":"en"},"sidebar":"docs","previous":{"title":"Release 2.1.4","permalink":"/docs/releasenotes/v2.1/release-2.1.4"},"next":{"title":"Release 2.1.2","permalink":"/docs/releasenotes/v2.1/release-2.1.2"}}'),r=n("785893"),t=n("250065");let o={title:"Release 2.1.3",language:"en"},a=void 0,c={},l=[{value:"Feature Enhancements",id:"feature-enhancements",level:2},{value:"Optimization and Improvements",id:"optimization-and-improvements",level:2},{value:"Behavioral Changes",id:"behavioral-changes",level:2},{value:"Upgrade Issues",id:"upgrade-issues",level:2},{value:"Bug Fixes",id:"bug-fixes",level:2}];function d(e){let s={a:"a",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.p,{children:"Apache Doris 2.1.3 was officially released on May 21, 2024. This version has updated several improvements, including writing data back to Hive, materialized view, permission management and bug fixes. It further enhances the performance and stability of the system."}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Quick Download:"})," ",(0,r.jsx)(s.a,{href:"https://doris.apache.org/download/",children:"https://doris.apache.org/download/"})]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"GitHub Release:"})," ",(0,r.jsx)(s.a,{href:"https://github.com/apache/doris/releases",children:"https://github.com/apache/doris/releases"})]}),"\n",(0,r.jsx)(s.h2,{id:"feature-enhancements",children:"Feature Enhancements"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"1. Support writing back data to hive tables via Hive Catalog"})}),"\n",(0,r.jsxs)(s.p,{children:["Starting from version 2.1.3, Apache Doris supports DDL and DML operations on Hive. Users can directly create libraries and tables in Hive through Apache Doris and write data to Hive tables by executing ",(0,r.jsx)(s.code,{children:"INSERT INTO"})," statements. This feature allows users to perform complete data query and write operations on Hive through Apache Doris, further simplifying the integrated lakehouse architecture."]}),"\n",(0,r.jsxs)(s.p,{children:["Please refer: ",(0,r.jsx)(s.a,{href:"https://doris.apache.org/docs/lakehouse/datalake-building/hive-build/",children:"https://doris.apache.org/docs/lakehouse/datalake-building/hive-build/"})]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"2. Support building new asynchronous materialized views on top of existing ones"})}),"\n",(0,r.jsxs)(s.p,{children:["Users can create new asynchronous materialized views on top of existing ones, directly reusing pre-computed intermediate results for data processing. This simplifies complex aggregation and computation operations, reducing resource consumption and maintenance costs while further accelerating query performance and improving data availability. ",(0,r.jsx)(s.a,{href:"https://github.com/apache/doris/pull/32984",children:"#32984"})]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"3. Support rewriting through nested materialized views"})}),"\n",(0,r.jsxs)(s.p,{children:["Materialized View (MV) is a database object used to store query results. Now, Apache Doris supports rewriting through nested materialized views, which helps optimize query performance. ",(0,r.jsx)(s.a,{href:"https://github.com/apache/doris/pull/33362",children:"#33362"})]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsxs)(s.strong,{children:["4. New ",(0,r.jsx)(s.code,{children:"SHOW VIEWS"})," statement"]})}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:"SHOW VIEWS"})," statement can be used to query views in the database, facilitating better management and understanding of view objects in the database. ",(0,r.jsx)(s.a,{href:"https://github.com/apache/doris/pull/32358",children:"#32358"})]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"5. Workload Group supports binding to specific BE nodes"})}),"\n",(0,r.jsxs)(s.p,{children:["Workload Group can be bound to specific BE nodes, enabling more refined control over query execution to optimize resource usage and improve performance. ",(0,r.jsx)(s.a,{href:"https://github.com/apache/doris/pull/32874",children:"#32874"})]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"6. Broker Load supports compressed JSON format"})}),"\n",(0,r.jsxs)(s.p,{children:["Broker Load now supports importing compressed JSON format data, significantly reducing bandwidth requirements for data transmission and accelerating data import performance. ",(0,r.jsx)(s.a,{href:"https://github.com/apache/doris/pull/30809",children:"#30809"})]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"7. TRUNCATE Function can use columns as scale parameters"})}),"\n",(0,r.jsxs)(s.p,{children:["The TRUNCATE function can now accept columns as scale parameters, providing more flexibility when processing numerical data. ",(0,r.jsx)(s.a,{href:"https://github.com/apache/doris/pull/32746",children:"#32746"})]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsxs)(s.strong,{children:["8. Add new functions ",(0,r.jsx)(s.code,{children:"uuid_to_int"})," and ",(0,r.jsx)(s.code,{children:"int_to_uuid"})]})}),"\n",(0,r.jsxs)(s.p,{children:["These two functions allow users to convert between UUID and integer, significantly helping in scenarios that require handling UUID data. ",(0,r.jsx)(s.a,{href:"https://github.com/apache/doris/pull/33005",children:"#33005"})]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsxs)(s.strong,{children:["9. Add ",(0,r.jsx)(s.code,{children:"bypass_workload_group"})," session variable to bypass query queue"]})}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:"bypass_workload_group"})," session variable allows certain queries to bypass the Workload Group queue and execute directly, which is useful for handling critical queries that require quick responses. ",(0,r.jsx)(s.a,{href:"https://github.com/apache/doris/pull/33101",children:"#33101"})]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"10. Add strcmp function"})}),"\n",(0,r.jsxs)(s.p,{children:["The strcmp function compares two strings and returns their comparison result, simplifying text data processing. ",(0,r.jsx)(s.a,{href:"https://github.com/apache/doris/pull/33272",children:"#33272"})]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsxs)(s.strong,{children:["11. Support HLL functions ",(0,r.jsx)(s.code,{children:"hll_from_base64"})," and ",(0,r.jsx)(s.code,{children:"hll_to_base64"})]})}),"\n",(0,r.jsxs)(s.p,{children:["HyperLogLog (HLL) is an algorithm for cardinality estimation. These two functions allow users to decode HLL data from a Base64-encoded string or encode HLL data as a Base64 string, which is very useful for storing and transmitting HLL data. ",(0,r.jsx)(s.a,{href:"https://github.com/apache/doris/pull/32089",children:"#32089"})]}),"\n",(0,r.jsx)(s.h2,{id:"optimization-and-improvements",children:"Optimization and Improvements"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"1. Replace SipHash with XXHash to improve shuffle performance"})}),"\n",(0,r.jsxs)(s.p,{children:["Both SipHash and XXHash are hashing functions, but XXHash may provide faster hashing speeds and better performance in certain scenarios. This optimization aims to improve performance during data shuffling by adopting XXHash. ",(0,r.jsx)(s.a,{href:"https://github.com/apache/doris/pull/32919",children:"#32919"})]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"2. Asynchronous materialized views support NULL partition columns in OLAP tables"})}),"\n",(0,r.jsxs)(s.p,{children:["This enhancement allows asynchronous materialized views to support NULL partition columns in OLAP tables, enhancing data processing flexibility.",(0,r.jsx)(s.a,{href:"https://github.com/apache/doris/pull/32698",children:"#32698"})]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"3. Limit maximum string length to 1024 when collecting column statistics to control BE memory usage"})}),"\n",(0,r.jsxs)(s.p,{children:["Limiting the string length when collecting column statistics prevents excessive data from consuming too much BE memory, helping maintain system stability and performance. ",(0,r.jsx)(s.a,{href:"https://github.com/apache/doris/pull/32470",children:"#32470"})]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"4. Support dynamic deletion of Bitmap cache to improve performance"})}),"\n",(0,r.jsxs)(s.p,{children:["Dynamically deleting no longer needed Bitmap Cache can free up memory and improve system performance. ",(0,r.jsx)(s.a,{href:"https://github.com/apache/doris/pull/32991",children:"#32991"})]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"5. Reduce memory usage during ALTER operations"})}),"\n",(0,r.jsxs)(s.p,{children:["Reducing memory usage during ALTER operations improves the efficiency of system resource utilization. ",(0,r.jsx)(s.a,{href:"https://github.com/apache/doris/pull/33474",children:"#33474"})]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"6. Support constant folding for complex types"})}),"\n",(0,r.jsxs)(s.p,{children:["Supports constant folding for Array/Map/Struct complex types.",(0,r.jsx)(s.a,{href:"https://github.com/apache/doris/pull/32867",children:"#32867"})]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"7. Add support for Variant type in Aggregate Key Model"})}),"\n",(0,r.jsxs)(s.p,{children:["The Variant data type can store multiple data types. This optimization allows aggregation operations on Variant type data, enhancing the flexibility of semi-structured data analysis. ",(0,r.jsx)(s.a,{href:"https://github.com/apache/doris/pull/33493",children:"#33493"})]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"8. Support new inverted index format in CCR"})," ",(0,r.jsx)(s.a,{href:"https://github.com/apache/doris/pull/33415",children:"#33415"})]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"9. Optimize rewriting performance for nested materialized views"})," ",(0,r.jsx)(s.a,{href:"https://github.com/apache/doris/pull/34127",children:"#34127"})]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"10. Support decimal256 type in row-based storage format"})}),"\n",(0,r.jsxs)(s.p,{children:["Supporting the decimal256 type in row-based storage extends the system's ability to handle high-precision numerical data. ",(0,r.jsx)(s.a,{href:"https://github.com/apache/doris/pull/34887",children:"#34887"})]}),"\n",(0,r.jsx)(s.h2,{id:"behavioral-changes",children:"Behavioral Changes"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"1. Authorization"})}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Grant_priv permission changes"}),": ",(0,r.jsx)(s.code,{children:"Grant_priv"})," can no longer be arbitrarily granted. When performing a ",(0,r.jsx)(s.code,{children:"GRANT"})," operation, the user not only needs to have ",(0,r.jsx)(s.code,{children:"Grant_priv"})," but also the permissions to be granted. For example, to grant ",(0,r.jsx)(s.code,{children:"SELECT"})," permission on ",(0,r.jsx)(s.code,{children:"table1"}),", the user needs both ",(0,r.jsx)(s.code,{children:"GRANT"})," permission and ",(0,r.jsx)(s.code,{children:"SELECT"})," permission on ",(0,r.jsx)(s.code,{children:"table1"}),", enhancing security and consistency in permission management. ",(0,r.jsx)(s.a,{href:"https://github.com/apache/doris/pull/32825",children:"#32825"})]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Workload group and resource usage_priv"}),": ",(0,r.jsx)(s.code,{children:"Usage_priv"})," for Workload Group and Resource is no longer global but limited to Resource and Workload Group, making permission granting and usage more specific. ",(0,r.jsx)(s.a,{href:"https://github.com/apache/doris/pull/32907",children:"#32907"})]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Authorization for operations"}),": Operations that were previously unauthorized now have corresponding authorizations for more detailed and comprehensive operational permission control. ",(0,r.jsx)(s.a,{href:"https://github.com/apache/doris/pull/33347",children:"#33347"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"2. LOG directory configuration"})}),"\n",(0,r.jsxs)(s.p,{children:["The log directory configuration for FE and BE now uniformly uses the ",(0,r.jsx)(s.code,{children:"LOG_DIR"})," environment variable. All other different types of logs will be stored with ",(0,r.jsx)(s.code,{children:"LOG_DIR"})," as the root directory. To maintain compatibility between versions, the previous configuration item ",(0,r.jsx)(s.code,{children:"sys_log_dir"})," can still be used. ",(0,r.jsx)(s.a,{href:"https://github.com/apache/doris/pull/32933",children:"#32933"})]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"3. S3 Table Function (TVF)"})}),"\n",(0,r.jsxs)(s.p,{children:["Due to issues with correctly recognizing or processing S3 URLs in certain cases, the parsing logic for object storage paths has been refactored. For file paths in S3 table functions, the ",(0,r.jsx)(s.code,{children:"force_parsing_by_standard_uri"})," parameter needs to be passed to ensure correct parsing. ",(0,r.jsx)(s.a,{href:"https://github.com/apache/doris/pull/33858",children:"#33858"})]}),"\n",(0,r.jsx)(s.h2,{id:"upgrade-issues",children:"Upgrade Issues"}),"\n",(0,r.jsxs)(s.p,{children:["Since many users use certain keywords as column names or attribute values, the following keywords have been set as non-reserved, allowing users to use them as identifiers. ",(0,r.jsx)(s.a,{href:"https://github.com/apache/doris/pull/34613",children:"#34613"})]}),"\n",(0,r.jsx)(s.h2,{id:"bug-fixes",children:"Bug Fixes"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"1. Fix no data error when reading Hive tables on Tencent Cloud COSN"})}),"\n",(0,r.jsx)(s.p,{children:"Resolved the no data error that could occur when reading Hive tables on Tencent Cloud COSN, enhancing compatibility with Tencent Cloud storage services."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsxs)(s.strong,{children:["2. Fix incorrect results returned by ",(0,r.jsx)(s.code,{children:"milliseconds_diff"})," function"]})}),"\n",(0,r.jsxs)(s.p,{children:["Fixed an issue where the ",(0,r.jsx)(s.code,{children:"milliseconds_diff"})," function returned incorrect results in some cases, ensuring the accuracy of time difference calculations. ",(0,r.jsx)(s.a,{href:"https://github.com/apache/doris/pull/32897",children:"#32897"})]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"3. User-defined variables should be rorwarded to the Master node"})}),"\n",(0,r.jsxs)(s.p,{children:["Ensured that user-defined variables are correctly passed to the Master node for consistency and correct execution logic across the entire system. [#33013]",(0,r.jsx)(s.a,{href:"https://github.com/apache/doris/pull/33013",children:"https://github.com/apache/doris/pull/33013"})]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"4. Fix Schema Change issues when adding complex type columns"})}),"\n",(0,r.jsxs)(s.p,{children:["Resolved Schema Change issues that could arise when adding complex type columns, ensuring the correctness of Schema Changes. ",(0,r.jsx)(s.a,{href:"https://github.com/apache/doris/pull/31824",children:"#31824"})]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"5. Fix data loss issue in Routine Load when FE Master node changes"})}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"Routine Load"})," is often used to subscribe to Kafka message queues. This fix addresses potential data loss issues that may occur during FE Master node changes. ",(0,r.jsx)(s.a,{href:"https://github.com/apache/doris/pull/33678",children:"#33678"})]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"6. Fix Routine Load failure when Workload Group cannot be found"})}),"\n",(0,r.jsxs)(s.p,{children:["Resolved an issue where ",(0,r.jsx)(s.code,{children:"Routine Load"})," would fail if the specified Workload Group could not be found. ",(0,r.jsx)(s.a,{href:"https://github.com/apache/doris/pull/33596",children:"#33596"})]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"7. Support column string64 to avoid join failures when string size overflows unit32"})}),"\n",(0,r.jsxs)(s.p,{children:["In some cases, string sizes may exceed the unit32 limit. Supporting the ",(0,r.jsx)(s.code,{children:"string64"})," type ensures correct execution of string JOIN operations. ",(0,r.jsx)(s.a,{href:"https://github.com/apache/doris/pull/33850",children:"#33850"})]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"8. Allow Hadoop users to create Paimon Catalog"})}),"\n",(0,r.jsxs)(s.p,{children:["Permitted authorized Hadoop users to create Paimon Catalogs.",(0,r.jsx)(s.a,{href:"https://github.com/apache/doris/pull/33833",children:"#33833"})]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsxs)(s.strong,{children:["9. Fix ",(0,r.jsx)(s.code,{children:"function_ipxx_cidr"})," function issues with constant parameters"]})}),"\n",(0,r.jsxs)(s.p,{children:["Resolved problems with the ",(0,r.jsx)(s.code,{children:"function_ipxx_cidr"})," function when handling constant parameters, ensuring the correctness of function execution.",(0,r.jsx)(s.a,{href:"https://github.com/apache/doris/pull/33968",children:"#33968"})]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"10. Fix file download errors when restoring using HDFS"})}),"\n",(0,r.jsxs)(s.p,{children:['Resolved "failed to download" errors encountered during data restoration using HDFS, ensuring the accuracy and reliability of data recovery. ',(0,r.jsx)(s.a,{href:"https://github.com/apache/doris/issues/33303",children:"#33303"})]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"11. Fix column permission issues related to hidden columns"})}),"\n",(0,r.jsxs)(s.p,{children:["In some cases, permission settings for hidden columns may be incorrect. This fix ensures the correctness and security of column permission settings. ",(0,r.jsx)(s.a,{href:"https://github.com/apache/doris/pull/34849",children:"#34849"})]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"12. Fix issue where Arrow Flight cannot obtain the correct IP in K8s deployments"})}),"\n",(0,r.jsxs)(s.p,{children:["This fix resolves an issue where Arrow Flight cannot correctly obtain the IP address in Kubernetes deployment environments.",(0,r.jsx)(s.a,{href:"https://github.com/apache/doris/pull/34850",children:"#34850"})]})]})}function h(e={}){let{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return a},a:function(){return o}});var i=n(667294);let r={},t=i.createContext(r);function o(e){let s=i.useContext(t);return i.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(t.Provider,{value:s},e.children)}}}]);