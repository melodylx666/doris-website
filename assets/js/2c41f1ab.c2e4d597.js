"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["416098"],{690814:function(e,r,s){s.r(r),s.d(r,{metadata:()=>n,contentTitle:()=>d,default:()=>h,assets:()=>i,toc:()=>c,frontMatter:()=>t});var n=JSON.parse('{"id":"advanced/resource","title":"Resource management","description":"\x3c!--","source":"@site/versioned_docs/version-1.2/advanced/resource.md","sourceDirName":"advanced","slug":"/advanced/resource","permalink":"/docs/1.2/advanced/resource","draft":false,"unlisted":false,"tags":[],"version":"1.2","frontMatter":{"title":"Resource management","language":"en"},"sidebar":"docs","previous":{"title":"Compaction","permalink":"/docs/1.2/advanced/best-practice/compaction"},"next":{"title":"Orthogonal BITMAP calculation","permalink":"/docs/1.2/advanced/orthogonal-bitmap-manual"}}'),a=s("785893"),o=s("250065");let t={title:"Resource management",language:"en"},d="Resource Management",i={},c=[{value:"Fundamental Concept",id:"fundamental-concept",level:2},{value:"Operation Of Resource",id:"operation-of-resource",level:2},{value:"Resources Supported",id:"resources-supported",level:2},{value:"Spark",id:"spark",level:3},{value:"Parameter",id:"parameter",level:4},{value:"Spark Parameters:",id:"spark-parameters",level:5},{value:"If spark is used for ETL, also need to specify the following parameters:",id:"if-spark-is-used-for-etl-also-need-to-specify-the-following-parameters",level:5},{value:"Example",id:"example",level:4},{value:"ODBC",id:"odbc",level:3},{value:"Parameter",id:"parameter-1",level:4},{value:"ODBC Parameters:",id:"odbc-parameters",level:5},{value:"Example",id:"example-1",level:4}];function l(e){let r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.header,{children:(0,a.jsx)(r.h1,{id:"resource-management",children:"Resource Management"})}),"\n",(0,a.jsx)(r.p,{children:"In order to save the compute and storage resources in the Doris cluster, Doris needs to reference to some other external resources to do the related work. such as spark/GPU for query, HDFS/S3 for external storage, spark/MapReduce for ETL, connect to external storage by ODBC driver. Therefore, Doris need a resource management mechanism to manage these external resources."}),"\n",(0,a.jsx)(r.h2,{id:"fundamental-concept",children:"Fundamental Concept"}),"\n",(0,a.jsx)(r.p,{children:"A resource contains basic information such as name and type. The name is globally unique. Different types of resources contain different attributes. Please refer to the introduction of each resource for details."}),"\n",(0,a.jsxs)(r.p,{children:["The creation and deletion of resources can only be performed by users own ",(0,a.jsx)(r.code,{children:"admin"})," permission. One resource belongs to the entire Doris cluster. Users with ",(0,a.jsx)(r.code,{children:"admin"})," permission can assign permission of resource to other users. Please refer to ",(0,a.jsx)(r.code,{children:"HELP GRANT"})," or doris document."]}),"\n",(0,a.jsx)(r.h2,{id:"operation-of-resource",children:"Operation Of Resource"}),"\n",(0,a.jsxs)(r.p,{children:["There are three main commands for resource management: ",(0,a.jsx)(r.code,{children:"create resource"}),", ",(0,a.jsx)(r.code,{children:"drop resource"})," and ",(0,a.jsx)(r.code,{children:"show resources"}),". They are to create, delete and check resources. The specific syntax of these three commands can be viewed by executing ",(0,a.jsx)(r.code,{children:"help CMD"})," after MySQL client connects to Doris."]}),"\n",(0,a.jsxs)(r.ol,{children:["\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsx)(r.p,{children:"CREATE RESOURCE"}),"\n",(0,a.jsxs)(r.p,{children:["This statement is used to create a resource. For details, please refer to ",(0,a.jsx)(r.a,{href:"/docs/1.2/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-RESOURCE",children:"CREATE RESOURCE"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsx)(r.p,{children:"DROP RESOURCE"}),"\n",(0,a.jsxs)(r.p,{children:["This command can delete an existing resource. For details, see ",(0,a.jsx)(r.a,{href:"/docs/1.2/sql-manual/sql-reference/Data-Definition-Statements/Drop/DROP-RESOURCE",children:"DROP RESOURCE"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(r.li,{children:["\n",(0,a.jsx)(r.p,{children:"SHOW RESOURCES"}),"\n",(0,a.jsxs)(r.p,{children:["This command can view the resources that the user has permission to use. For details, see ",(0,a.jsx)(r.a,{href:"/docs/1.2/sql-manual/sql-reference/Show-Statements/SHOW-RESOURCES",children:"SHOW RESOURCES"}),"."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(r.h2,{id:"resources-supported",children:"Resources Supported"}),"\n",(0,a.jsx)(r.p,{children:"Currently, Doris can support"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:"Spark resource: do ETL work"}),"\n",(0,a.jsx)(r.li,{children:"ODBC resource: query and import data from external tables"}),"\n"]}),"\n",(0,a.jsx)(r.p,{children:"The following shows how the two resources are used."}),"\n",(0,a.jsx)(r.h3,{id:"spark",children:"Spark"}),"\n",(0,a.jsx)(r.h4,{id:"parameter",children:"Parameter"}),"\n",(0,a.jsx)(r.h5,{id:"spark-parameters",children:"Spark Parameters:"}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.code,{children:"spark.master"}),": required, currently supported yarn, spark://host:port."]}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.code,{children:"spark.submit.deployMode"}),": The deployment mode of spark. required. It supports cluster and client."]}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.code,{children:"spark.hadoop.yarn.resourcemanager.address"}),": required when master is yarn."]}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.code,{children:"spark.hadoop.fs.defaultFS"}),": required when master is yarn."]}),"\n",(0,a.jsxs)(r.p,{children:["Other parameters are optional, refer to: ",(0,a.jsx)(r.a,{href:"http://spark.apache.org/docs/latest/configuration.html",children:"http://spark.apache.org/docs/latest/configuration.html"})]}),"\n",(0,a.jsx)(r.h5,{id:"if-spark-is-used-for-etl-also-need-to-specify-the-following-parameters",children:"If spark is used for ETL, also need to specify the following parameters:"}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.code,{children:"working_dir"}),": Directory used by ETL. Spark is required when used as an ETL resource. For example: hdfs://host:port/tmp/doris."]}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.code,{children:"broker"}),": The name of broker. Is required when spark be used as ETL resource. You need to use the ",(0,a.jsx)(r.code,{children:"ALTER SYSTEM ADD BROKER"})," command to complete the configuration in advance."]}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.code,{children:"broker.property_key"}),": When the broker reads the intermediate file generated by ETL, it needs the specified authentication information."]}),"\n"]}),"\n",(0,a.jsx)(r.h4,{id:"example",children:"Example"}),"\n",(0,a.jsxs)(r.p,{children:["Create a spark resource named ",(0,a.jsx)(r.code,{children:"spark0 "}),"in the yarn cluster mode."]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-sql",children:'CREATE EXTERNAL RESOURCE "spark0"\nPROPERTIES\n(\n  "type" = "spark",\n  "spark.master" = "yarn",\n  "spark.submit.deployMode" = "cluster",\n  "spark.jars" = "xxx.jar,yyy.jar",\n  "spark.files" = "/tmp/aaa,/tmp/bbb",\n  "spark.executor.memory" = "1g",\n  "spark.yarn.queue" = "queue0",\n  "spark.hadoop.yarn.resourcemanager.address" = "127.0.0.1:9999",\n  "spark.hadoop.fs.defaultFS" = "hdfs://127.0.0.1:10000",\n  "working_dir" = "hdfs://127.0.0.1:10000/tmp/doris",\n  "broker" = "broker0",\n  "broker.username" = "user0",\n  "broker.password" = "password0"\n);\n'})}),"\n",(0,a.jsx)(r.h3,{id:"odbc",children:"ODBC"}),"\n",(0,a.jsx)(r.h4,{id:"parameter-1",children:"Parameter"}),"\n",(0,a.jsx)(r.h5,{id:"odbc-parameters",children:"ODBC Parameters:"}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.code,{children:"type"}),": Required, must be ",(0,a.jsx)(r.code,{children:"odbc_catalog"}),". As the type identifier of resource."]}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.code,{children:"user"}),": The user name of the external table, required."]}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.code,{children:"password"}),": The user password of the external table, required."]}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.code,{children:"host"}),": The ip address of the external table, required."]}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.code,{children:"port"}),": The port of the external table, required."]}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.code,{children:"odbc_type"}),": Indicates the type of external table. Currently, Doris supports ",(0,a.jsx)(r.code,{children:"MySQL"})," and ",(0,a.jsx)(r.code,{children:"Oracle"}),". In the future, it may support more databases. The ODBC external table referring to the resource is required. The old MySQL external table referring to the resource is optional."]}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.code,{children:"driver"}),": Indicates the driver dynamic library used by the ODBC external table.\nThe ODBC external table referring to the resource is required. The old MySQL external table referring to the resource is optional."]}),"\n",(0,a.jsxs)(r.p,{children:["For the usage of ODBC resource, please refer to ",(0,a.jsx)(r.a,{href:"/docs/1.2/lakehouse/external-table/odbc",children:"ODBC of Doris"})]}),"\n",(0,a.jsx)(r.h4,{id:"example-1",children:"Example"}),"\n",(0,a.jsxs)(r.p,{children:["Create the ODBC resource of Oracle, named ",(0,a.jsx)(r.code,{children:"oracle_odbc"}),"."]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-sql",children:'CREATE EXTERNAL RESOURCE `oracle_odbc`\nPROPERTIES (\n"type" = "odbc_catalog",\n"host" = "192.168.0.1",\n"port" = "8086",\n"user" = "test",\n"password" = "test",\n"database" = "test",\n"odbc_type" = "oracle",\n"driver" = "Oracle 19 ODBC driver"\n);\n'})})]})}function h(e={}){let{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},250065:function(e,r,s){s.d(r,{Z:function(){return d},a:function(){return t}});var n=s(667294);let a={},o=n.createContext(a);function t(e){let r=n.useContext(o);return n.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),n.createElement(o.Provider,{value:r},e.children)}}}]);