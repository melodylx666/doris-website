"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["459993"],{695261:function(e,n,r){r.r(n),r.d(n,{metadata:()=>t,contentTitle:()=>a,default:()=>h,assets:()=>c,toc:()=>d,frontMatter:()=>i});var t=JSON.parse('{"id":"ecosystem/doris-kafka-connector","title":"Doris Kafka Connector","description":"\x3c!--","source":"@site/docs/ecosystem/doris-kafka-connector.md","sourceDirName":"ecosystem","slug":"/ecosystem/doris-kafka-connector","permalink":"/docs/dev/ecosystem/doris-kafka-connector","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Doris Kafka Connector","language":"en"},"sidebar":"docs","previous":{"title":"Flink Doris Connector","permalink":"/docs/dev/ecosystem/flink-doris-connector"},"next":{"title":"Doris Streamloader","permalink":"/docs/dev/ecosystem/doris-streamloader"}}'),o=r("785893"),s=r("250065");let i={title:"Doris Kafka Connector",language:"en"},a=void 0,c={},d=[{value:"Usage Doris Kafka Connector",id:"usage-doris-kafka-connector",level:2},{value:"Download",id:"download",level:3},{value:"Standalone mode startup",id:"standalone-mode-startup",level:3},{value:"Distributed mode startup",id:"distributed-mode-startup",level:3},{value:"Access an SSL-certified Kafka cluster",id:"access-an-ssl-certified-kafka-cluster",level:3},{value:"Dead letter queue",id:"dead-letter-queue",level:3},{value:"Configuration items",id:"configuration-items",level:2},{value:"Type mapping",id:"type-mapping",level:2},{value:"Best Practices",id:"best-practices",level:2},{value:"Load Json serialized data",id:"load-json-serialized-data",level:3},{value:"Load Avro serialized data",id:"load-avro-serialized-data",level:3},{value:"Load Protobuf serialized data",id:"load-protobuf-serialized-data",level:3},{value:"FAQ",id:"faq",level:2}];function l(e){let n={a:"a",admonition:"admonition",br:"br",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://docs.confluent.io/platform/current/connect/index.html",children:"Kafka Connect"})," is a scalable and reliable tool for data transmission between Apache Kafka and other systems. Connectors can be defined Move large amounts of data in and out of Kafka."]}),"\n",(0,o.jsxs)(n.p,{children:["The Doris community provides the ",(0,o.jsx)(n.a,{href:"https://github.com/apache/doris-kafka-connector",children:"doris-kafka-connector"})," plug-in, which can write data in the Kafka topic to Doris."]}),"\n",(0,o.jsx)(n.h2,{id:"usage-doris-kafka-connector",children:"Usage Doris Kafka Connector"}),"\n",(0,o.jsx)(n.h3,{id:"download",children:"Download"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://doris.apache.org/zh-CN/download",children:"doris-kafka-connector"})}),"\n",(0,o.jsx)(n.p,{children:"maven dependencies"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-xml",children:"<dependency>\n  <groupId>org.apache.doris</groupId>\n  <artifactId>doris-kafka-connector</artifactId>\n  <version>1.0.0</version>\n</dependency>\n"})}),"\n",(0,o.jsx)(n.h3,{id:"standalone-mode-startup",children:"Standalone mode startup"}),"\n",(0,o.jsxs)(n.p,{children:["Create the plugins directory under $KAFKA_HOME and put the downloaded doris-kafka-connector jar package into it\n",(0,o.jsx)(n.br,{}),"\nConfigure config/connect-standalone.properties"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-properties",children:"# Modify broker address\nbootstrap.servers=127.0.0.1:9092\n\n# Modify to the created plugins directory\n# Note: Please fill in the direct path to Kafka here. For example: plugin.path=/opt/kafka/plugins\nplugin.path=$KAFKA_HOME/plugins\n\n# It is recommended to increase the max.poll.interval.ms time of Kafka to more than 30 minutes, the default is 5 minutes\n# Avoid Stream Load import data consumption timeout and consumers being kicked out of the consumer group\nmax.poll.interval.ms=1800000\nconsumer.max.poll.interval.ms=1800000\n"})}),"\n",(0,o.jsx)(n.p,{children:"Configure doris-connector-sink.properties"}),"\n",(0,o.jsx)(n.p,{children:"Create doris-connector-sink.properties in the config directory and configure the following content:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-properties",children:"name=test-doris-sink\nconnector.class=org.apache.doris.kafka.connector.DorisSinkConnector\ntopics=topic_test\ndoris.topic2table.map=topic_test:test_kafka_tbl\nbuffer.count.records=10000\nbuffer.flush.time=120\nbuffer.size.bytes=5000000\ndoris.urls=10.10.10.1\ndoris.http.port=8030\ndoris.query.port=9030\ndoris.user=root\ndoris.password=\ndoris.database=test_db\nkey.converter=org.apache.kafka.connect.storage.StringConverter\nvalue.converter=org.apache.kafka.connect.json.JsonConverter\n"})}),"\n",(0,o.jsx)(n.p,{children:"Start Standalone"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"$KAFKA_HOME/bin/connect-standalone.sh -daemon $KAFKA_HOME/config/connect-standalone.properties $KAFKA_HOME/config/doris-connector-sink.properties\n"})}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"Note: It is generally not recommended to use standalone mode in a production environment."})}),"\n",(0,o.jsx)(n.h3,{id:"distributed-mode-startup",children:"Distributed mode startup"}),"\n",(0,o.jsx)(n.p,{children:"Create the plugins directory under $KAFKA_HOME and put the downloaded doris-kafka-connector jar package into it"}),"\n",(0,o.jsx)(n.p,{children:"Configure config/connect-distributed.properties"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-properties",children:"# Modify broker address\nbootstrap.servers=127.0.0.1:9092\n\n# Modify group.id, the same cluster needs to be consistent\ngroup.id=connect-cluster\n\n# Modify to the created plugins directory\n# Note: Please fill in the direct path to Kafka here. For example: plugin.path=/opt/kafka/plugins\nplugin.path=$KAFKA_HOME/plugins\n\n# It is recommended to increase the max.poll.interval.ms time of Kafka to more than 30 minutes, the default is 5 minutes\n# Avoid Stream Load import data consumption timeout and consumers being kicked out of the consumer group\nmax.poll.interval.ms=1800000\nconsumer.max.poll.interval.ms=1800000\n"})}),"\n",(0,o.jsx)(n.p,{children:"Start Distributed"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:"$KAFKA_HOME/bin/connect-distributed.sh -daemon $KAFKA_HOME/config/connect-distributed.properties\n"})}),"\n",(0,o.jsx)(n.p,{children:"Add Connector"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-shell",children:'curl -i http://127.0.0.1:8083/connectors -H "Content-Type: application/json" -X POST -d \'{\n  "name":"test-doris-sink-cluster",\n  "config":{\n    "connector.class":"org.apache.doris.kafka.connector.DorisSinkConnector",\n    "topics":"topic_test",\n    "doris.topic2table.map": "topic_test:test_kafka_tbl",\n    "buffer.count.records":"10000",\n    "buffer.flush.time":"120",\n    "buffer.size.bytes":"5000000",\n    "doris.urls":"10.10.10.1",\n    "doris.user":"root",\n    "doris.password":"",\n    "doris.http.port":"8030",\n    "doris.query.port":"9030",\n    "doris.database":"test_db",\n    "key.converter":"org.apache.kafka.connect.storage.StringConverter",\n    "value.converter":"org.apache.kafka.connect.json.JsonConverter"\n  }\n}\'\n'})}),"\n",(0,o.jsx)(n.p,{children:"Operation Connector"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"# View connector status\ncurl -i http://127.0.0.1:8083/connectors/test-doris-sink-cluster/status -X GET\n# Delete connector\ncurl -i http://127.0.0.1:8083/connectors/test-doris-sink-cluster -X DELETE\n# Pause connector\ncurl -i http://127.0.0.1:8083/connectors/test-doris-sink-cluster/pause -X PUT\n# Restart connector\ncurl -i http://127.0.0.1:8083/connectors/test-doris-sink-cluster/resume -X PUT\n# Restart tasks within the connector\ncurl -i http://127.0.0.1:8083/connectors/test-doris-sink-cluster/tasks/0/restart -X POST\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Refer to: ",(0,o.jsx)(n.a,{href:"https://docs.confluent.io/platform/current/connect/references/restapi.html#kconnect-rest-interface",children:"Connect REST Interface"})]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["Note that when kafka-connect is started for the first time, three topics ",(0,o.jsx)(n.code,{children:"config.storage.topic"})," ",(0,o.jsx)(n.code,{children:"offset.storage.topic"})," and ",(0,o.jsx)(n.code,{children:"status.storage.topic"})," will be created in the kafka cluster to record the shared connector configuration of kafka-connect. Offset data and status updates. ",(0,o.jsx)(n.a,{href:"https://docs.confluent.io/platform/current/connect/userguide.html",children:"How to Use Kafka Connect - Get Started"})]})}),"\n",(0,o.jsx)(n.h3,{id:"access-an-ssl-certified-kafka-cluster",children:"Access an SSL-certified Kafka cluster"}),"\n",(0,o.jsxs)(n.p,{children:["Accessing an SSL-certified Kafka cluster through kafka-connect requires the user to provide a certificate file (client.truststore.jks) used to authenticate the Kafka Broker public key. You can add the following configuration in the ",(0,o.jsx)(n.code,{children:"connect-distributed.properties"})," file:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"# Connect worker\nsecurity.protocol=SSL\nssl.truststore.location=/var/ssl/private/client.truststore.jks\nssl.truststore.password=test1234\n\n# Embedded consumer for sink connectors\nconsumer.security.protocol=SSL\nconsumer.ssl.truststore.location=/var/ssl/private/client.truststore.jks\nconsumer.ssl.truststore.password=test1234\n"})}),"\n",(0,o.jsxs)(n.p,{children:["For instructions on configuring a Kafka cluster connected to SSL authentication through kafka-connect, please refer to: ",(0,o.jsx)(n.a,{href:"https://docs.confluent.io/5.1.2/tutorials/security_tutorial.html#configure-kconnect-long",children:"Configure Kafka Connect"})]}),"\n",(0,o.jsx)(n.h3,{id:"dead-letter-queue",children:"Dead letter queue"}),"\n",(0,o.jsx)(n.p,{children:"By default, any errors encountered during or during the conversion will cause the connector to fail. Each connector configuration can also tolerate such errors by skipping them, optionally writing the details of each error and failed operation as well as the records in question (with varying levels of detail) to a dead-letter queue for logging."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"errors.tolerance=all\nerrors.deadletterqueue.topic.name=test_error_topic\nerrors.deadletterqueue.context.headers.enable=true\nerrors.deadletterqueue.topic.replication.factor=1\n"})}),"\n",(0,o.jsx)(n.h2,{id:"configuration-items",children:"Configuration items"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Key"}),(0,o.jsx)(n.th,{children:"Enum"}),(0,o.jsx)(n.th,{children:"Default Value"}),(0,o.jsx)(n.th,{children:(0,o.jsx)(n.strong,{children:"Required"})}),(0,o.jsx)(n.th,{children:(0,o.jsx)(n.strong,{children:"Description"})})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"name"}),(0,o.jsx)(n.td,{children:"-"}),(0,o.jsx)(n.td,{children:"-"}),(0,o.jsx)(n.td,{children:"Y"}),(0,o.jsx)(n.td,{children:"Connect application name, must be unique within the Kafka Connect environment"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"connector.class"}),(0,o.jsx)(n.td,{children:"-"}),(0,o.jsx)(n.td,{children:"-"}),(0,o.jsx)(n.td,{children:"Y"}),(0,o.jsx)(n.td,{children:"org.apache.doris.kafka.connector.DorisSinkConnector"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"topics"}),(0,o.jsx)(n.td,{children:"-"}),(0,o.jsx)(n.td,{children:"-"}),(0,o.jsx)(n.td,{children:"Y"}),(0,o.jsx)(n.td,{children:"List of subscribed topics, separated by commas. like: topic1, topic2"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"doris.urls"}),(0,o.jsx)(n.td,{children:"-"}),(0,o.jsx)(n.td,{children:"-"}),(0,o.jsx)(n.td,{children:"Y"}),(0,o.jsx)(n.td,{children:"Doris FE connection address. If there are multiple, separate them with commas. like: 10.20.30.1,10.20.30.2,10.20.30.3"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"doris.http.port"}),(0,o.jsx)(n.td,{children:"-"}),(0,o.jsx)(n.td,{children:"-"}),(0,o.jsx)(n.td,{children:"Y"}),(0,o.jsx)(n.td,{children:"Doris HTTP protocol port"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"doris.query.port"}),(0,o.jsx)(n.td,{children:"-"}),(0,o.jsx)(n.td,{children:"-"}),(0,o.jsx)(n.td,{children:"Y"}),(0,o.jsx)(n.td,{children:"Doris MySQL protocol port"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"doris.user"}),(0,o.jsx)(n.td,{children:"-"}),(0,o.jsx)(n.td,{children:"-"}),(0,o.jsx)(n.td,{children:"Y"}),(0,o.jsx)(n.td,{children:"Doris username"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"doris.password"}),(0,o.jsx)(n.td,{children:"-"}),(0,o.jsx)(n.td,{children:"-"}),(0,o.jsx)(n.td,{children:"Y"}),(0,o.jsx)(n.td,{children:"Doris password"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"doris.database"}),(0,o.jsx)(n.td,{children:"-"}),(0,o.jsx)(n.td,{children:"-"}),(0,o.jsx)(n.td,{children:"Y"}),(0,o.jsx)(n.td,{children:"The database to write to. It can be empty when there are multiple libraries. At the same time, the specific library name needs to be configured in topic2table.map."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"doris.topic2table.map"}),(0,o.jsx)(n.td,{children:"-"}),(0,o.jsx)(n.td,{children:"-"}),(0,o.jsx)(n.td,{children:"N"}),(0,o.jsxs)(n.td,{children:["The corresponding relationship between topic and table table, for example: topic1:tb1,topic2:tb2",(0,o.jsx)(n.br,{}),"The default is empty, indicating that topic and table names correspond one to one. ",(0,o.jsx)(n.br,{}),"The format of multiple libraries is topic1:db1.tbl1,topic2:db2.tbl2"]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"buffer.count.records"}),(0,o.jsx)(n.td,{children:"-"}),(0,o.jsx)(n.td,{children:"10000"}),(0,o.jsx)(n.td,{children:"N"}),(0,o.jsx)(n.td,{children:"The number of records each Kafka partition buffers in memory before flushing to doris. Default 10000 records"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"buffer.flush.time"}),(0,o.jsx)(n.td,{children:"-"}),(0,o.jsx)(n.td,{children:"120"}),(0,o.jsx)(n.td,{children:"N"}),(0,o.jsx)(n.td,{children:"Buffer refresh interval, in seconds, default 120 seconds"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"buffer.size.bytes"}),(0,o.jsx)(n.td,{children:"-"}),(0,o.jsx)(n.td,{children:"5000000(5MB)"}),(0,o.jsx)(n.td,{children:"N"}),(0,o.jsx)(n.td,{children:"The cumulative size of records buffered in memory for each Kafka partition, in bytes, default 5MB"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"jmx"}),(0,o.jsx)(n.td,{children:"-"}),(0,o.jsx)(n.td,{children:"true"}),(0,o.jsx)(n.td,{children:"N"}),(0,o.jsxs)(n.td,{children:["To obtain connector internal monitoring indicators through JMX, please refer to: ",(0,o.jsx)(n.a,{href:"https://github.com/apache/doris-kafka-connector/blob/master/docs/en/Doris-Connector-JMX.md",children:"Doris-Connector-JMX"})]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"enable.2pc"}),(0,o.jsx)(n.td,{children:"-"}),(0,o.jsx)(n.td,{children:"true"}),(0,o.jsx)(n.td,{children:"N"}),(0,o.jsx)(n.td,{children:"Whether to enable two-phase commit (TwoPhaseCommit) of Stream Load, the default is true."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"enable.delete"}),(0,o.jsx)(n.td,{children:"-"}),(0,o.jsx)(n.td,{children:"false"}),(0,o.jsx)(n.td,{children:"N"}),(0,o.jsx)(n.td,{children:"Whether to delete records synchronously, default false"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"label.prefix"}),(0,o.jsx)(n.td,{children:"-"}),(0,o.jsx)(n.td,{children:"${name}"}),(0,o.jsx)(n.td,{children:"N"}),(0,o.jsx)(n.td,{children:"Stream load label prefix when importing data. Defaults to the Connector application name."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"auto.redirect"}),(0,o.jsx)(n.td,{children:"-"}),(0,o.jsx)(n.td,{children:"true"}),(0,o.jsx)(n.td,{children:"N"}),(0,o.jsx)(n.td,{children:"Whether to redirect StreamLoad requests. After being turned on, StreamLoad will redirect to the BE where data needs to be written through FE, and the BE information will no longer be displayed."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"load.model"}),(0,o.jsxs)(n.td,{children:[(0,o.jsx)(n.code,{children:"stream_load"}),",",(0,o.jsx)(n.br,{})," ",(0,o.jsx)(n.code,{children:"copy_into"})]}),(0,o.jsx)(n.td,{children:"stream_load"}),(0,o.jsx)(n.td,{children:"N"}),(0,o.jsxs)(n.td,{children:["How to import data. Supports ",(0,o.jsx)(n.code,{children:"stream_load"})," to directly import data into Doris; also supports ",(0,o.jsx)(n.code,{children:"copy_into"})," to import data into object storage, and then load the data into Doris."]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"sink.properties.*"}),(0,o.jsx)(n.td,{children:"-"}),(0,o.jsxs)(n.td,{children:[(0,o.jsx)(n.code,{children:"'sink.properties.format':'json'"}),", ",(0,o.jsx)(n.br,{}),(0,o.jsx)(n.code,{children:"'sink.properties.read_json_by_line':'true'"})]}),(0,o.jsx)(n.td,{children:"N"}),(0,o.jsxs)(n.td,{children:["Import parameters for Stream Load. ",(0,o.jsx)(n.br,{}),"For example: define column separator ",(0,o.jsx)(n.code,{children:"'sink.properties.column_separator':','"})," ",(0,o.jsx)(n.br,{}),"Detailed parameter reference ",(0,o.jsx)(n.a,{href:"https://doris.apache.org/docs/data-operate/import/stream-load-manual",children:"here"}),"  ",(0,o.jsx)(n.br,{}),(0,o.jsx)(n.br,{})," ",(0,o.jsx)(n.strong,{children:"Enable Group Commit"}),", for example, enable group commit in sync_mode mode: ",(0,o.jsx)(n.code,{children:'"sink.properties.group_commit":"sync_mode"'}),". Group Commit can be configured with three modes: ",(0,o.jsx)(n.code,{children:"off_mode"}),", ",(0,o.jsx)(n.code,{children:"sync_mode"}),", and ",(0,o.jsx)(n.code,{children:"async_mode"}),". For specific usage, please refer to: ",(0,o.jsx)(n.a,{href:"https://doris.apache.org/docs/data-operate/import/group-commit-manual/",children:"Group-Commit"}),(0,o.jsx)(n.br,{}),(0,o.jsx)(n.br,{}),"  ",(0,o.jsx)(n.strong,{children:"Enable partial column update"}),", for example, enable update of partial columns of specified col2: ",(0,o.jsx)(n.code,{children:'"sink.properties.partial_columns":"true"'}),", ",(0,o.jsx)(n.code,{children:'"sink.properties.columns": " col2",'})]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"delivery.guarantee"}),(0,o.jsxs)(n.td,{children:[(0,o.jsx)(n.code,{children:"at_least_once"}),",",(0,o.jsx)(n.br,{})," ",(0,o.jsx)(n.code,{children:"exactly_once"})]}),(0,o.jsx)(n.td,{children:"at_least_once"}),(0,o.jsx)(n.td,{children:"N"}),(0,o.jsxs)(n.td,{children:["How to ensure data consistency when consuming Kafka data is imported into Doris. Supports ",(0,o.jsx)(n.code,{children:"at_least_once"})," ",(0,o.jsx)(n.code,{children:"exactly_once"}),", default is ",(0,o.jsx)(n.code,{children:"at_least_once"}),". Doris needs to be upgraded to 2.1.0 or above to ensure data ",(0,o.jsx)(n.code,{children:"exactly_once"})]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"converter.mode"}),(0,o.jsxs)(n.td,{children:[(0,o.jsx)(n.code,{children:"normal"}),",",(0,o.jsx)(n.br,{})," ",(0,o.jsx)(n.code,{children:"debezium_ingestion"})]}),(0,o.jsx)(n.td,{children:"normal"}),(0,o.jsx)(n.td,{children:"N"}),(0,o.jsxs)(n.td,{children:["Type conversion mode of upstream data when using Connector to consume Kafka data. ",(0,o.jsx)(n.br,{})," ",(0,o.jsx)(n.code,{children:"normal"})," means consuming data in Kafka normally without any type conversion. ",(0,o.jsx)(n.br,{})," ",(0,o.jsx)(n.code,{children:"debezium_ingestion"})," means that when Kafka upstream data is collected through CDC (Changelog Data Capture) tools such as Debezium, the upstream data needs to undergo special type conversion to support it."]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"debezium.schema.evolution"}),(0,o.jsxs)(n.td,{children:[(0,o.jsx)(n.code,{children:"none"}),",",(0,o.jsx)(n.br,{})," ",(0,o.jsx)(n.code,{children:"basic"})]}),(0,o.jsx)(n.td,{children:"none"}),(0,o.jsx)(n.td,{children:"N"}),(0,o.jsxs)(n.td,{children:["Use Debezium to collect upstream database systems (such as MySQL), and when structural changes occur, the added fields can be synchronized to Doris. ",(0,o.jsx)(n.br,{}),(0,o.jsx)(n.code,{children:"none"})," means that when the structure of the upstream database system changes, the changed structure will not be synchronized to Doris. ",(0,o.jsx)(n.br,{})," ",(0,o.jsx)(n.code,{children:"basic"})," means synchronizing the data change operation of the upstream database. Since changing the column structure is a dangerous operation (it may lead to accidentally deleting columns of the Doris table structure), currently only the operation of adding columns synchronously upstream is supported. When a column is renamed, the old column remains unchanged, and the Connector will add a new column in the target table and sink the renamed new data into the new column."]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"database.time_zone"}),(0,o.jsx)(n.td,{children:"-"}),(0,o.jsx)(n.td,{children:"UTC"}),(0,o.jsx)(n.td,{children:"N"}),(0,o.jsxs)(n.td,{children:["When ",(0,o.jsx)(n.code,{children:"converter.mode"})," is not ",(0,o.jsx)(n.code,{children:"normal"})," mode, it provides a way to specify time zone conversion for date data types (such as datetime, date, timestamp, etc.). The default is UTC time zone."]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"avro.topic2schema.filepath"}),(0,o.jsx)(n.td,{children:"-"}),(0,o.jsx)(n.td,{children:"-"}),(0,o.jsx)(n.td,{children:"N"}),(0,o.jsxs)(n.td,{children:["By reading the locally provided Avro Schema file, the Avro file content in the Topic is parsed to achieve decoupling from the Schema registration center provided by Confluent. ",(0,o.jsx)(n.br,{})," This configuration needs to be used with the ",(0,o.jsx)(n.code,{children:"key.converter"})," or ",(0,o.jsx)(n.code,{children:"value.converter"})," prefix. For example, the local Avro Schema file for configuring avro-user and avro-product Topic is as follows: ",(0,o.jsx)(n.code,{children:'"value.converter.avro.topic2schema. filepath":"avro-user:file:///opt/avro_user.avsc, avro-product:file:///opt/avro_product.avsc"'})," ",(0,o.jsx)(n.br,{})," For specific usage, please refer to: ",(0,o.jsx)(n.a,{href:"https://github.com/apache/doris-kafka-connector/pull/32",children:"#32"})]})]})]})]}),"\n",(0,o.jsxs)(n.p,{children:["For other Kafka Connect Sink common configuration items, please refer to: ",(0,o.jsx)(n.a,{href:"https://kafka.apache.org/documentation/#connect_configuring",children:"connect_configuring"})]}),"\n",(0,o.jsx)(n.h2,{id:"type-mapping",children:"Type mapping"}),"\n",(0,o.jsxs)(n.p,{children:["Doris-kafka-connector uses logical or primitive type mapping to resolve the column's data type.\n",(0,o.jsx)(n.br,{}),"Primitive types refer to simple data types represented using Kafka connect's ",(0,o.jsx)(n.code,{children:"Schema"}),". Logical data types usually use the ",(0,o.jsx)(n.code,{children:"Struct"})," structure to represent complex types, or date and time types."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Kafka Primitive Type"}),(0,o.jsx)(n.th,{children:"Doris Type"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"INT8"}),(0,o.jsx)(n.td,{children:"TINYINT"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"INT16"}),(0,o.jsx)(n.td,{children:"SMALLINT"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"INT32"}),(0,o.jsx)(n.td,{children:"INT"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"INT64"}),(0,o.jsx)(n.td,{children:"BIGINT"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"FLOAT32"}),(0,o.jsx)(n.td,{children:"FLOAT"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"FLOAT64"}),(0,o.jsx)(n.td,{children:"DOUBLE"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"BOOLEAN"}),(0,o.jsx)(n.td,{children:"BOOLEAN"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"STRING"}),(0,o.jsx)(n.td,{children:"STRING"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"BYTES"}),(0,o.jsx)(n.td,{children:"STRING"})]})]})]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Kafka Logical Type"}),(0,o.jsx)(n.th,{children:"Doris Type"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"org.apache.kafka.connect.data.Decimal"}),(0,o.jsx)(n.td,{children:"DECIMAL"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"org.apache.kafka.connect.data.Date"}),(0,o.jsx)(n.td,{children:"DATE"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"org.apache.kafka.connect.data.Time"}),(0,o.jsx)(n.td,{children:"STRING"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"org.apache.kafka.connect.data.Timestamp"}),(0,o.jsx)(n.td,{children:"DATETIME"})]})]})]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Debezium Logical Type"}),(0,o.jsx)(n.th,{children:"Doris Type"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"io.debezium.time.Date"}),(0,o.jsx)(n.td,{children:"DATE"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"io.debezium.time.Time"}),(0,o.jsx)(n.td,{children:"String"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"io.debezium.time.MicroTime"}),(0,o.jsx)(n.td,{children:"DATETIME"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"io.debezium.time.NanoTime"}),(0,o.jsx)(n.td,{children:"DATETIME"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"io.debezium.time.ZonedTime"}),(0,o.jsx)(n.td,{children:"DATETIME"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"io.debezium.time.Timestamp"}),(0,o.jsx)(n.td,{children:"DATETIME"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"io.debezium.time.MicroTimestamp"}),(0,o.jsx)(n.td,{children:"DATETIME"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"io.debezium.time.NanoTimestamp"}),(0,o.jsx)(n.td,{children:"DATETIME"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"io.debezium.time.ZonedTimestamp"}),(0,o.jsx)(n.td,{children:"DATETIME"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"io.debezium.data.VariableScaleDecimal"}),(0,o.jsx)(n.td,{children:"DOUBLE"})]})]})]}),"\n",(0,o.jsx)(n.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,o.jsx)(n.h3,{id:"load-json-serialized-data",children:"Load Json serialized data"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'curl -i http://127.0.0.1:8083/connectors -H "Content-Type: application/json" -X POST -d \'{ \n  "name":"doris-json-test", \n  "config":{ \n    "connector.class":"org.apache.doris.kafka.connector.DorisSinkConnector", \n    "topics":"json_topic", \n    "tasks.max":"10",\n    "doris.topic2table.map": "json_topic:json_tab", \n    "buffer.count.records":"100000", \n    "buffer.flush.time":"120", \n    "buffer.size.bytes":"10000000", \n    "doris.urls":"127.0.0.1", \n    "doris.user":"root", \n    "doris.password":"", \n    "doris.http.port":"8030", \n    "doris.query.port":"9030", \n    "doris.database":"test", \n    "load.model":"stream_load",\n    "key.converter":"org.apache.kafka.connect.json.JsonConverter",\n    "value.converter":"org.apache.kafka.connect.json.JsonConverter"\n  } \n}\'\n'})}),"\n",(0,o.jsx)(n.h3,{id:"load-avro-serialized-data",children:"Load Avro serialized data"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'curl -i http://127.0.0.1:8083/connectors -H "Content-Type: application/json" -X POST -d \'{ \n  "name":"doris-avro-test", \n  "config":{ \n    "connector.class":"org.apache.doris.kafka.connector.DorisSinkConnector", \n    "topics":"avro_topic", \n    "tasks.max":"10",\n    "doris.topic2table.map": "avro_topic:avro_tab", \n    "buffer.count.records":"100000", \n    "buffer.flush.time":"120", \n    "buffer.size.bytes":"10000000", \n    "doris.urls":"127.0.0.1", \n    "doris.user":"root", \n    "doris.password":"", \n    "doris.http.port":"8030", \n    "doris.query.port":"9030", \n    "doris.database":"test", \n    "load.model":"stream_load",\n    "key.converter":"io.confluent.connect.avro.AvroConverter",\n    "key.converter.schema.registry.url":"http://127.0.0.1:8081",\n    "value.converter":"io.confluent.connect.avro.AvroConverter",\n    "value.converter.schema.registry.url":"http://127.0.0.1:8081"\n  } \n}\'\n'})}),"\n",(0,o.jsx)(n.h3,{id:"load-protobuf-serialized-data",children:"Load Protobuf serialized data"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'curl -i http://127.0.0.1:8083/connectors -H "Content-Type: application/json" -X POST -d \'{ \n  "name":"doris-protobuf-test", \n  "config":{ \n    "connector.class":"org.apache.doris.kafka.connector.DorisSinkConnector", \n    "topics":"proto_topic", \n    "tasks.max":"10",\n    "doris.topic2table.map": "proto_topic:proto_tab", \n    "buffer.count.records":"100000", \n    "buffer.flush.time":"120", \n    "buffer.size.bytes":"10000000", \n    "doris.urls":"127.0.0.1", \n    "doris.user":"root", \n    "doris.password":"", \n    "doris.http.port":"8030", \n    "doris.query.port":"9030", \n    "doris.database":"test", \n    "load.model":"stream_load",\n    "key.converter":"io.confluent.connect.protobuf.ProtobufConverter",\n    "key.converter.schema.registry.url":"http://127.0.0.1:8081",\n    "value.converter":"io.confluent.connect.protobuf.ProtobufConverter",\n    "value.converter.schema.registry.url":"http://127.0.0.1:8081"\n  } \n}\'\n'})}),"\n",(0,o.jsx)(n.h2,{id:"faq",children:"FAQ"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"1. The following error occurs when reading Json type data:"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'Caused by: org.apache.kafka.connect.errors.DataException: JsonConverter with schemas.enable requires "schema" and "payload" fields and may not contain additional fields. If you are trying to deserialize plain JSON data, set schemas.enable=false in your converter configuration.\n	at org.apache.kafka.connect.json.JsonConverter.toConnectData(JsonConverter.java:337)\n	at org.apache.kafka.connect.storage.Converter.toConnectData(Converter.java:91)\n	at org.apache.kafka.connect.runtime.WorkerSinkTask.lambda$convertAndTransformRecord$4(WorkerSinkTask.java:536)\n	at org.apache.kafka.connect.runtime.errors.RetryWithToleranceOperator.execAndRetry(RetryWithToleranceOperator.java:180)\n	at org.apache.kafka.connect.runtime.errors.RetryWithToleranceOperator.execAndHandleError(RetryWithToleranceOperator.java:214)\n'})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"reason:"}),"\nThis is because using the ",(0,o.jsx)(n.code,{children:"org.apache.kafka.connect.json.JsonConverter"}),' converter requires matching the "schema" and "payload" fields.']}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Two solutions, choose one:"})}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Replace ",(0,o.jsx)(n.code,{children:"org.apache.kafka.connect.json.JsonConverter"})," with ",(0,o.jsx)(n.code,{children:"org.apache.kafka.connect.storage.StringConverter"})]}),"\n",(0,o.jsxs)(n.li,{children:["If the startup mode is ",(0,o.jsx)(n.strong,{children:"Standalone"})," mode, change ",(0,o.jsx)(n.code,{children:"value.converter.schemas.enable"})," or ",(0,o.jsx)(n.code,{children:"key.converter.schemas.enable"})," in config/connect-standalone.properties to false;\nIf the startup mode is ",(0,o.jsx)(n.strong,{children:"Distributed"})," mode, change ",(0,o.jsx)(n.code,{children:"value.converter.schemas.enable"})," or ",(0,o.jsx)(n.code,{children:"key.converter.schemas.enable"})," in config/connect-distributed.properties to false"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"2. The consumption times out and the consumer is kicked out of the consumption group:"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"org.apache.kafka.clients.consumer.CommitFailedException: Offset commit cannot be completed since the consumer is not part of an active group for auto partition assignment; it is likely that the consumer was kicked out of the group.\n        at org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.sendOffsetCommitRequest(ConsumerCoordinator.java:1318)\n        at org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.doCommitOffsetsAsync(ConsumerCoordinator.java:1127)\n        at org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.commitOffsetsAsync(ConsumerCoordinator.java:1093)\n        at org.apache.kafka.clients.consumer.KafkaConsumer.commitAsync(KafkaConsumer.java:1590)\n        at org.apache.kafka.connect.runtime.WorkerSinkTask.doCommitAsync(WorkerSinkTask.java:361)\n        at org.apache.kafka.connect.runtime.WorkerSinkTask.doCommit(WorkerSinkTask.java:376)\n        at org.apache.kafka.connect.runtime.WorkerSinkTask.commitOffsets(WorkerSinkTask.java:467)\n        at org.apache.kafka.connect.runtime.WorkerSinkTask.commitOffsets(WorkerSinkTask.java:381)\n        at org.apache.kafka.connect.runtime.WorkerSinkTask.iteration(WorkerSinkTask.java:221)\n        at org.apache.kafka.connect.runtime.WorkerSinkTask.execute(WorkerSinkTask.java:206)\n        at org.apache.kafka.connect.runtime.WorkerTask.doRun(WorkerTask.java:204)\n        at org.apache.kafka.connect.runtime.WorkerTask.run(WorkerTask.java:259)\n        at org.apache.kafka.connect.runtime.isolation.Plugins.lambda$withClassLoader$1(Plugins.java:181)\n        at java.base/java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:539)\n        at java.base/java.util.concurrent.FutureTask.run(FutureTask.java:264)\n        at java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1136)\n        at java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:635)\n        at java.base/java.lang.Thread.run(Thread.java:833)\n"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Solution:"})}),"\n",(0,o.jsxs)(n.p,{children:["Increase ",(0,o.jsx)(n.code,{children:"max.poll.interval.ms"})," in Kafka according to the scenario. The default value is ",(0,o.jsx)(n.code,{children:"300000"})]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["If it is started in Standalone mode, add the ",(0,o.jsx)(n.code,{children:"max.poll.interval.ms"})," and ",(0,o.jsx)(n.code,{children:"consumer.max.poll.interval.ms"})," parameters in the configuration file of config/connect-standalone.properties, and configure the parameter values."]}),"\n",(0,o.jsxs)(n.li,{children:["If it is started in Distributed mode, add the ",(0,o.jsx)(n.code,{children:"max.poll.interval.ms"})," and ",(0,o.jsx)(n.code,{children:"consumer.max.poll.interval.ms"})," parameters in the configuration file of config/connect-distributed.properties, and configure the parameter values."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"After adjusting the parameters, restart kafka-connect"})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return a},a:function(){return i}});var t=r(667294);let o={},s=t.createContext(o);function i(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);