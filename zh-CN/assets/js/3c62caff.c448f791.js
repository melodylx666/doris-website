"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["513300"],{494734:function(n,e,o){o.r(e),o.d(e,{metadata:()=>r,contentTitle:()=>s,default:()=>h,assets:()=>l,toc:()=>a,frontMatter:()=>t});var r=JSON.parse('{"id":"how-to-contribute/trino-connector-developer-guide","title":"\u5982\u4F55\u63A5\u5165\u4E00\u4E2A\u65B0\u7684 Trino Connector\u63D2\u4EF6","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs-community/current/how-to-contribute/trino-connector-developer-guide.md","sourceDirName":"how-to-contribute","slug":"/how-to-contribute/trino-connector-developer-guide","permalink":"/zh-CN/community/how-to-contribute/trino-connector-developer-guide","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"\u5982\u4F55\u63A5\u5165\u4E00\u4E2A\u65B0\u7684 Trino Connector\u63D2\u4EF6","language":"zh-CN"},"sidebar":"community","previous":{"title":"\u5982\u4F55\u5206\u4EAB Blog","permalink":"/zh-CN/community/how-to-contribute/how-to-share-blogs"},"next":{"title":"\u7248\u672C\u89C4\u5219","permalink":"/zh-CN/community/release-versioning"}}'),i=o("785893"),c=o("250065");let t={title:"\u5982\u4F55\u63A5\u5165\u4E00\u4E2A\u65B0\u7684 Trino Connector\u63D2\u4EF6",language:"zh-CN"},s="\u5982\u4F55\u63A5\u5165\u4E00\u4E2A\u65B0\u7684 Trino Connector \u63D2\u4EF6",l={},a=[{value:"\u80CC\u666F",id:"\u80CC\u666F",level:2},{value:"\u6B65\u9AA4\u4E00\uFF1A\u7F16\u8BD1 Kakfa Connector \u63D2\u4EF6",id:"\u6B65\u9AA4\u4E00\u7F16\u8BD1-kakfa-connector-\u63D2\u4EF6",level:2},{value:"\u6B65\u9AA4\u4E8C\uFF1A\u8BBE\u7F6E Doris \u7684 fe.conf / be.conf",id:"\u6B65\u9AA4\u4E8C\u8BBE\u7F6E-doris-\u7684-feconf--beconf",level:2},{value:"\u6B65\u9AA4\u4E09\uFF1A\u4F7F\u7528 Trino-Connector Catalog \u529F\u80FD",id:"\u6B65\u9AA4\u4E09\u4F7F\u7528-trino-connector-catalog-\u529F\u80FD",level:2}];function d(n){let e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,c.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"\u5982\u4F55\u63A5\u5165\u4E00\u4E2A\u65B0\u7684-trino-connector-\u63D2\u4EF6",children:"\u5982\u4F55\u63A5\u5165\u4E00\u4E2A\u65B0\u7684 Trino Connector \u63D2\u4EF6"})}),"\n",(0,i.jsx)(e.h2,{id:"\u80CC\u666F",children:"\u80CC\u666F"}),"\n",(0,i.jsxs)(e.p,{children:["\u4ECE 3.0 \u7248\u672C\u5F00\u59CB\uFF0CDoris \u652F\u6301\u5BF9\u63A5 Trino Connector \u63D2\u4EF6\u3002\u901A\u8FC7\u4E30\u5BCC\u7684 Trino Connector \u63D2\u4EF6\u4EE5\u53CA Doris \u7684 ",(0,i.jsx)(e.code,{children:"Trino-Connector"})," Catalog \u529F\u80FD\u53EF\u4EE5\u8BA9 Doris \u652F\u6301\u66F4\u591A\u7684\u6570\u636E\u6E90\u3002"]}),"\n",(0,i.jsx)(e.p,{children:"Trino Connector \u517C\u5BB9\u6846\u67B6\u7684\u76EE\u7684\u5728\u4E8E\u5E2E\u52A9 Doris \u5FEB\u901F\u5BF9\u63A5\u66F4\u591A\u7684\u6570\u636E\u6E90\uFF0C\u4EE5\u6EE1\u8DB3\u7528\u6237\u9700\u6C42\u3002\n\u5BF9\u4E8E Hive\u3001Iceberg\u3001Hudi\u3001Paimon\u3001JDBC \u7B49\u6570\u636E\u6E90\uFF0C\u6211\u4EEC\u4ECD\u7136\u5EFA\u8BAE\u4F7F\u7528 Doris \u5185\u7F6E\u7684 Catalog \u8FDB\u884C\u8FDE\u63A5\uFF0C\u5DF2\u83B7\u5F97\u66F4\u597D\u7684\u6027\u80FD\u3001\u7A33\u5B9A\u6027\u548C\u517C\u5BB9\u6027\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u672C\u6587\u4E3B\u8981\u4ECB\u7ECD\uFF0C\u5982\u4F55\u5728 Doris \u4E2D\u9002\u914D\u4E00\u4E2A Trino Connector \u63D2\u4EF6\u3002"}),"\n",(0,i.jsxs)(e.p,{children:["\u4E0B\u9762\u4EE5 Trino \u7684 Kafka Connector \u63D2\u4EF6\u4E3A\u4F8B\uFF0C\u8BE6\u7EC6\u4ECB\u7ECD\u5982\u4F55\u5728 Doris \u4E2D\u9002\u914D Trino \u7684 Kafka Connector \u63D2\u4EF6\uFF0C\u7136\u540E\u901A\u8FC7 Doris \u7684 ",(0,i.jsx)(e.code,{children:"Trino-Connector"})," Catalog \u529F\u80FD\u8BBF\u95EE Kafka \u6570\u636E\u6E90\u3002"]}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["\u6CE8\uFF1ATrino \u662F\u4E00\u6B3E\u7531 ",(0,i.jsx)(e.a,{href:"https://trino.io/foundation",children:"Trino \u8F6F\u4EF6\u57FA\u91D1\u4F1A"})," \u63D0\u4F9B\u7684 Apache License 2.0 \u534F\u8BAE\u5F00\u6E90\u8F6F\u4EF6\uFF0C\u8BE6\u60C5\u53EF\u8BBF\u95EE ",(0,i.jsx)(e.a,{href:"https://trino.io/docs/current/",children:"Trino \u5B98\u7F51"}),"\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u6B65\u9AA4\u4E00\u7F16\u8BD1-kakfa-connector-\u63D2\u4EF6",children:"\u6B65\u9AA4\u4E00\uFF1A\u7F16\u8BD1 Kakfa Connector \u63D2\u4EF6"}),"\n",(0,i.jsx)(e.p,{children:"Trino \u6CA1\u6709\u63D0\u4F9B\u5B98\u65B9\u7F16\u8BD1\u597D\u7684 Connector \u63D2\u4EF6\uFF0C\u6240\u4EE5\u9700\u8981\u6211\u4EEC\u81EA\u5DF1\u7F16\u8BD1\u6240\u9700 Connector \u63D2\u4EF6\u3002"}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["\u6CE8\u610F\uFF1A\u7531\u4E8E Doris \u5F53\u524D\u4F7F\u7528 435\u7248\u672C\u7684 ",(0,i.jsx)(e.code,{children:"trino-main"})," \u5305\uFF0C\u6240\u4EE5\u6700\u597D\u7F16\u8BD1 435 \u7248\u672C\u7684 Connector \u63D2\u4EF6\u3002\u5BF9\u4E8E\u975E 435 \u7248\u672C\u7684 Connector \u63D2\u4EF6\uFF0C\u53EF\u80FD\u4F1A\u5B58\u5728\u517C\u5BB9\u6027\u95EE\u9898\u3002\u5982\u9047\u95EE\u9898\uFF0C\u6B22\u8FCE\u5411 Apache Doris \u793E\u533A\u53CD\u9988\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\u62C9\u53D6 Trino \u6E90\u7801\n",(0,i.jsx)(e.code,{children:"$ git clone https://github.com/trinodb/trino.git"})]}),"\n",(0,i.jsxs)(e.li,{children:["\u5C06 Trino \u5207\u6362\u5230 435 \u7248\u672C\n",(0,i.jsx)(e.code,{children:"$ git checkout 435"})]}),"\n",(0,i.jsxs)(e.li,{children:["\u8FDB\u5165\u5230 Kafka \u63D2\u4EF6\u6E90\u7801\u76EE\u5F55\n",(0,i.jsx)(e.code,{children:"$ cd trino/plugin/trino-kafka"})]}),"\n",(0,i.jsxs)(e.li,{children:["\u7F16\u8BD1 Kafka \u63D2\u4EF6\n",(0,i.jsx)(e.code,{children:"$ mvn clean install -DskipTest"})]}),"\n",(0,i.jsx)(e.li,{children:"\u7F16\u8BD1\u5B8C\u6210\u540E\uFF0C\u5728 trino/plugin/trino-kafka/ \u76EE\u5F55\u4E0B\u4F1A\u751F\u6210 target/trino-kafka-435 \u76EE\u5F55"}),"\n"]}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:"\u6CE8\u610F\uFF1A\u6BCF\u4E00\u4E2A Connector \u63D2\u4EF6\u90FD\u662F\u4E00\u4E2A\u5B50\u76EE\u5F55\uFF0C\u800C\u4E0D\u662F\u4E00\u4E2A jar \u5305\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u6B65\u9AA4\u4E8C\u8BBE\u7F6E-doris-\u7684-feconf--beconf",children:"\u6B65\u9AA4\u4E8C\uFF1A\u8BBE\u7F6E Doris \u7684 fe.conf / be.conf"}),"\n",(0,i.jsx)(e.p,{children:"\u51C6\u5907\u597D Kafka Connector \u63D2\u4EF6\u540E\uFF0C\u9700\u8981\u914D\u7F6E Doris \u7684 fe.conf \u3001be.conf \u4ECE\u800C\u4F7F\u5F97 Doris \u80FD\u591F\u627E\u5230\u8BE5\u63D2\u4EF6\u3002"}),"\n",(0,i.jsxs)(e.p,{children:["\u6211\u4EEC\u5C06\u4E0A\u8FF0\u51C6\u5907\u597D\u7684 ",(0,i.jsx)(e.code,{children:"trino-kafka-435"})," \u76EE\u5F55\u5B58\u653E\u5728 /path/to/connectors \u76EE\u5F55\u4E0B\uFF0C\u7136\u540E\u6211\u4EEC\u914D\u7F6E\uFF1A"]}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"fe.conf"}),"\n",(0,i.jsxs)(e.p,{children:["\u5728 fe.conf \u6587\u4EF6\u4E2D\u914D\u7F6E ",(0,i.jsx)(e.code,{children:"trino_connector_plugin_dir=/path/to/connectors"})," \uFF08\u82E5fe.conf\u4E2D\u6CA1\u6709\u914D\u7F6E ",(0,i.jsx)(e.code,{children:"trino_connector_plugin_dir"})," \u5C5E\u6027\uFF0C\u5219\u9ED8\u8BA4\u4F7F\u7528 ",(0,i.jsx)(e.code,{children:"${Doris_HOME}/fe/connectors"})," \u76EE\u5F55\uFF09"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"be.conf"}),"\n",(0,i.jsxs)(e.p,{children:["\u5728 be.conf \u6587\u4EF6\u4E2D\u914D\u7F6E ",(0,i.jsx)(e.code,{children:"trino_connector_plugin_dir=/path/to/connectors"})," \uFF08\u82E5 be.conf \u4E2D\u6CA1\u6709\u914D\u7F6E ",(0,i.jsx)(e.code,{children:"trino_connector_plugin_dir"})," \u5C5E\u6027 \uFF0C\u5219\u9ED8\u8BA4\u4F7F\u7528 ",(0,i.jsx)(e.code,{children:"${Doris_HOME}/be/connectors"})," \u76EE\u5F55\uFF09"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsxs)(e.p,{children:["\u6CE8\u610F\uFF1ADoris \u91C7\u7528\u61D2\u52A0\u8F7D\u7684\u65B9\u5F0F\u52A0\u8F7D Trino Connector \u63D2\u4EF6\uFF0C\u8FD9\u610F\u5473\u7740\u5982\u679C\u662F\u7B2C\u4E00\u6B21\u5728 Doris \u4E2D\u4F7F\u7528 Trino-Connector Catalog \u529F\u80FD\uFF0C\u662F\u65E0\u9700\u91CD\u542F FE / BE \u8282\u70B9\u7684\uFF0CDoris \u4F1A\u81EA\u52A8\u52A0\u8F7D\u63D2\u4EF6\u3002\u4F46\u662F\u63D2\u4EF6\u53EA\u4F1A\u52A0\u8F7D\u4E00\u6B21\uFF0C\u6240\u4EE5\u5982\u679C ",(0,i.jsx)(e.code,{children:"/path/to/connectors/"})," \u76EE\u5F55\u4E0B\u63D2\u4EF6\u53D1\u751F\u4E86\u53D8\u5316\uFF0C\u9700\u8981\u91CD\u542F FE / BE \u8282\u70B9\uFF0C\u624D\u53EF\u4EE5\u52A0\u8F7D\u53D8\u5316\u540E\u7684\u63D2\u4EF6\u3002"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u6B65\u9AA4\u4E09\u4F7F\u7528-trino-connector-catalog-\u529F\u80FD",children:"\u6B65\u9AA4\u4E09\uFF1A\u4F7F\u7528 Trino-Connector Catalog \u529F\u80FD"}),"\n",(0,i.jsx)(e.p,{children:"\u5B8C\u6210\u524D\u9762\u4E24\u4E2A\u6B65\u9AA4\u540E\uFF0C\u6211\u4EEC\u5C31\u53EF\u4EE5\u5728 Doris \u4E2D\u4F7F\u7528 Trino-Connector Catalog \u529F\u80FD\u4E86\u3002"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u9996\u5148\u8BA9\u6211\u4EEC\u5728 Doris \u4E2D\u521B\u5EFA\u4E00\u4E2A Trino-Connector Catalog\uFF1A"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:'create catalog kafka_tpch properties (\n    "type"="trino-connector",\n    -- \u4E0B\u9762\u8FD9\u56DB\u4E2A\u5C5E\u6027\u6765\u6E90\u4E8E trino\uFF0C\u4E0E trino \u7684 etc/catalog/kakfa.properties \u4E2D\u7684\u5C5E\u6027\u4E00\u81F4\u3002\u4F46\u9700\u8981\u7EDF\u4E00\u589E\u52A0 "trino." \u524D\u7F00\n    "trino.connector.name"="kafka",\n    "trino.kafka.table-names"="tpch.customer,tpch.orders,tpch.lineitem,tpch.part,tpch.partsupp,tpch.supplier,tpch.nation,tpch.region",\n    "trino.kafka.nodes"="localhost:9092",\n    "trino.kafka.table-description-dir" = "/mnt/datadisk1/fangtiewei"\n);\n'})}),"\n",(0,i.jsx)(e.p,{children:"\u89E3\u91CA\uFF1A"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"type"})," \uFF1ACatalog \u7C7B\u578B\uFF0C\u8FD9\u91CC\u6211\u4EEC\u5FC5\u987B\u8BBE\u7F6E\u4E3A ",(0,i.jsx)(e.code,{children:"trino-connector"})," \u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"trino.connector.name"}),"\u3001",(0,i.jsx)(e.code,{children:"trino.kafka.table-names"}),"\u3001",(0,i.jsx)(e.code,{children:"trino.kafka.nodes"}),"\u3001",(0,i.jsx)(e.code,{children:"trino.kafka.table-description-dir"})," \u8FD9\u56DB\u4E2A\u5C5E\u6027\u90FD\u662F\u6765\u6E90\u4E8Etrino\uFF0C\u53C2\u8003\uFF1A",(0,i.jsx)(e.a,{href:"https://trino.io/docs/current/connector/kafka.html#configuration",children:"Kafka connector"})]}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:["\u4E0D\u540C\u7684Connector\u63D2\u4EF6\u5E94\u8BE5\u8BBE\u7F6E\u4E0D\u540C\u7684\u5C5E\u6027\uFF0C\u53EF\u4EE5\u53C2\u8003trino\u5B98\u65B9\u6587\u6863\uFF1A",(0,i.jsx)(e.a,{href:"https://trino.io/docs/current/connector.html#connector--page-root",children:"Connectors"})]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u4F7F\u7528 Catalog"}),"\n",(0,i.jsxs)(e.p,{children:["\u5F53\u6211\u4EEC\u521B\u5EFA\u597D Trino-Connector Catalog\u540E\uFF0C\u5728\u4F7F\u7528\u4E0A\u4E0E\u5176\u4ED6 Catalog \u6CA1\u6709\u4EFB\u4F55\u533A\u522B\u3002\u901A\u8FC7 ",(0,i.jsx)(e.code,{children:"switch kafka_tpch"})," \u8BED\u53E5\u5207\u6362\u5230\u8BE5 Catalog \uFF0C\u7136\u540E\u5C31\u53EF\u4EE5\u67E5\u8BE2\u8BE5 Kafka \u6570\u636E\u6E90\u7684\u6570\u636E\u4E86\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u4E0B\u9762\u7ED9\u51FA\u51E0\u4E2A\u5E38\u7528\u7684 Connector \u63D2\u4EF6\u7684 Doris trino-conenctor Catalog \u914D\u7F6E"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Hive"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:'create catalog emr_hive properties (\n    "type"="trino-connector",\n    "trino.connector.name"="hive",\n    "trino.hive.metastore.uri"="thrift://ip:port",\n    "trino.hive.config.resources"="/path/to/core-site.xml,/path/to/hdfs-site.xml"\n);\n'})}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:"\u4F7F\u7528 Hive \u63D2\u4EF6\u65F6\u9700\u8981\u6CE8\u610F\uFF1A"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:'\u9700\u8981\u5728 JVM \u53C2\u6570\u91CC\u52A0\u4E0A Hadoop \u7684\u7528\u6237\uFF1A-DHADOOP_USER_NAME=user\uFF0C\u53EF\u4EE5\u914D\u7F6E\u5728 fe.conf / be.conf \u6587\u4EF6\u7684JAVA_OPTS_FOR_JDK_17 \u53C2\u6570\u672B\u5C3E\uFF0C\u5982 JAVA_OPTS_FOR_JDK_17="...-DHADOOP_USER_NAME=user"'}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Mysql"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:'create catalog trino_mysql properties (\n    "type"="trino-connector",\n    "trino.connector.name"="mysql",\n    "trino.connection-url" = "jdbc:mysql://ip:port",\n    "trino.connection-user" = "user",\n    "trino.connection-password" = "password"\n);\n'})}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:"\u4F7F\u7528 Mysql \u63D2\u4EF6\u65F6\u9700\u8981\u6CE8\u610F\uFF1A"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u9047\u5230\u62A5\u9519\uFF1AUnknown or incorrect time zone: 'Asia/Shanghai' \uFF0C \u9700\u8981\u5728JVM\u542F\u52A8\u53C2\u6570\u5904\u52A0\u4E0A\uFF1A -Duser.timezone=Etc/GMT-8\u3002\u53EF\u4EE5\u914D\u7F6E\u5728 fe.conf / be.conf \u6587\u4EF6\u7684 JAVA_OPTS_FOR_JDK_17 \u53C2\u6570\u672B\u5C3E\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"Kafka"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:'create catalog kafka properties (\n    "type"="trino-connector",\n    "trino.connector.name"="kafka",\n    "trino.kafka.nodes"="localhost:9092",\n    "trino.kafka.table-description-supplier"="CONFLUENT",\n    "trino.kafka.confluent-schema-registry-url"="http://localhost:8081",\n    "trino.kafka.hide-internal-columns" = "false"\n);\n'})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"BigQuery"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:'create catalog bigquery_catalog properties (\n    "type"="trino-connector",\n    "trino.connector.name"="bigquery",\n    "trino.bigquery.project-id"="steam-circlet-388406",\n    "trino.bigquery.credentials-file"="/path/to/application_default_credentials.json"\n);\n'})}),"\n"]}),"\n"]})]})}function h(n={}){let{wrapper:e}={...(0,c.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},250065:function(n,e,o){o.d(e,{Z:function(){return s},a:function(){return t}});var r=o(667294);let i={},c=r.createContext(i);function t(n){let e=r.useContext(c);return r.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:t(n.components),r.createElement(c.Provider,{value:e},n.children)}}}]);