"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["657980"],{429684:function(e,t,n){n.r(t),n.d(t,{metadata:()=>s,contentTitle:()=>c,default:()=>x,assets:()=>d,toc:()=>o,frontMatter:()=>r});var s=JSON.parse('{"id":"lakehouse/database/max-compute","title":"Alibaba Cloud Max Compute","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/lakehouse/database/max-compute.md","sourceDirName":"lakehouse/database","slug":"/lakehouse/database/max-compute","permalink":"/docs/lakehouse/database/max-compute","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"Alibaba Cloud Max Compute","language":"en"},"sidebar":"docs","previous":{"title":"Elasticsearch","permalink":"/docs/lakehouse/database/es"},"next":{"title":"Querying Files on S3/HDFS","permalink":"/docs/lakehouse/file"}}'),i=n("785893"),l=n("250065");let r={title:"Alibaba Cloud Max Compute",language:"en"},c="Alibaba Cloud MaxCompute",d={},o=[{value:"Connect to MaxCompute",id:"connect-to-maxcompute",level:2},{value:"Example",id:"example",level:3},{value:"Basic properties of creating Catalog",id:"basic-properties-of-creating-catalog",level:3},{value:"Optional properties of creating Catalog",id:"optional-properties-of-creating-catalog",level:3},{value:"Column type mapping",id:"column-type-mapping",level:2},{value:"Usage notes",id:"usage-notes",level:2},{value:"How to obtain Endpoint and Quota",id:"how-to-obtain-endpoint-and-quota",level:2}];function a(e){let t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"alibaba-cloud-maxcompute",children:"Alibaba Cloud MaxCompute"})}),"\n",(0,i.jsx)(t.p,{children:"MaxCompute is an enterprise-level SaaS (Software as a Service) cloud data warehouse on Alibaba Cloud."}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://www.alibabacloud.com/help/en/maxcompute/product-overview/what-is-maxcompute",children:"What is MaxCompute"})}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"connect-to-maxcompute",children:"Connect to MaxCompute"}),"\n",(0,i.jsx)(t.h3,{id:"example",children:"Example"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sql",children:'-- 1. Create Catalog.\nCREATE CATALOG mc PROPERTIES (\n  "type" = "max_compute",\n  "mc.default.project" = "xxx",\n  "mc.access_key" = "xxxx",\n  "mc.secret_key" = "xxx",\n  "mc.endpoint" = "http://service.cn-beijing-vpc.MaxCompute.aliyun-inc.com/api"\n);\n\n-- 2. Switch to the newly created Catalog.\nSWITCH mc;\n\n-- The following steps are the same as using Mysql.\n\n-- 3. View all databases under this Catalog.\nSHOW DATABASES;\n\n-- 4. Use a database. Here, xxx is any database from the results shown in step 3.\nUSE xxx;\n\n-- 5. View all tables under this database.\nSHOW TABLES;\n\n-- 6. Perform SQL queries.\nselect * from tb  limit 10;\n'})}),"\n",(0,i.jsx)(t.h3,{id:"basic-properties-of-creating-catalog",children:"Basic properties of creating Catalog"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Parameter"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"type"}),(0,i.jsxs)(t.td,{style:{textAlign:"center"},children:["Fixed as  ",(0,i.jsx)(t.code,{children:"max_compute"}),"."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"mc.default.project"}),(0,i.jsxs)(t.td,{style:{textAlign:"center"},children:["The name of the MaxCompute project you want to access. It can be created and managed in ",(0,i.jsx)(t.a,{href:"https://MaxCompute.console.aliyun.com/cn-beijing/project-list",children:"MaxCompute project list"}),"."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"mc.access_key"}),(0,i.jsxs)(t.td,{style:{textAlign:"center"},children:["AccessKey.It can be created and managed in ",(0,i.jsx)(t.a,{href:"https://ram.console.aliyun.com/manage/ak",children:"Alibaba Cloud console"}),"."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"mc.secret_key"}),(0,i.jsxs)(t.td,{style:{textAlign:"center"},children:["SecretKey.It can be created and managed in ",(0,i.jsx)(t.a,{href:"https://ram.console.aliyun.com/manage/ak",children:"Alibaba Cloud console"}),"."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"mc.endpoint"}),(0,i.jsxs)(t.td,{style:{textAlign:"center"},children:["The region where MaxCompute is enabled. Please refer to ",(0,i.jsx)(t.code,{children:"How to obtain Endpoint and Quota"})," below for configuration."]})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"optional-properties-of-creating-catalog",children:"Optional properties of creating Catalog"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Parameter"}),(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"mc.quota"}),(0,i.jsx)(t.td,{children:"pay-as-you-go"}),(0,i.jsxs)(t.td,{children:["Quota name. Please refer to ",(0,i.jsx)(t.code,{children:"How to obtain Endpoint and Quota"})," below for configuration."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"mc.split_strategy"}),(0,i.jsx)(t.td,{children:"byte_size"}),(0,i.jsxs)(t.td,{children:["Set the split division method. It can be set to divide by byte size ",(0,i.jsx)(t.code,{children:"byte_size"})," or divide by row count ",(0,i.jsx)(t.code,{children:"row_count"}),"."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"mc.split_byte_size"}),(0,i.jsx)(t.td,{children:"268435456"}),(0,i.jsxs)(t.td,{children:["The file size read by each split, in bytes. The default is 256MB. It takes effect only when ",(0,i.jsx)(t.code,{children:'"mc.split_strategy" = "byte_size"'}),"."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"mc.split_row_count"}),(0,i.jsx)(t.td,{children:"1048576"}),(0,i.jsxs)(t.td,{children:["The number of rows read by each split. It takes effect only when ",(0,i.jsx)(t.code,{children:'"mc.split_strategy" = "row_count"'}),"."]})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"column-type-mapping",children:"Column type mapping"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"MaxCompute"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Doris"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Remarks"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"TINYINT"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"TINYINT"}),(0,i.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"TINYINT"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"TINYINT"}),(0,i.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"SMALLINT"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"SMALLINT"}),(0,i.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"INT"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"INT"}),(0,i.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"BIGINT"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"BIGINT"}),(0,i.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"BINARY"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Not supported"}),(0,i.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"FLOAT"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"FLOAT"}),(0,i.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"DOUBLE"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"DOUBLE"}),(0,i.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"DECIMAL(precision,scale)"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"DECIMAL(precision,scale)"}),(0,i.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"VARCHAR(n)"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"VARCHAR(n)"}),(0,i.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"CHAR(n)"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"CHAR(n)"}),(0,i.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"STRING"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"STRING"}),(0,i.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"DATE"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"DATE"}),(0,i.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"DATETIME"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"DATETIME(3)"}),(0,i.jsxs)(t.td,{style:{textAlign:"center"},children:["You can specify the time zone by  ",(0,i.jsx)(t.code,{children:"SET [global] time_zone = 'Asia/Shanghai'"}),"."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"TIMESTAMP"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Not supported"}),(0,i.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"TIMESTAMP_NTZ"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"DATETIME(6)"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"The precision of TIMESTAMP_NTZ in MaxCompute is 9. The maximum precision of DATETIME in Doris is only 6. Therefore, when reading data, the extra parts will be directly truncated."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"BOOLEAN"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"BOOLEAN"}),(0,i.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"ARRAY"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"ARRAY"}),(0,i.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"MAP"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"MAP"}),(0,i.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"STRUCT"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"STRUCT"}),(0,i.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"JSON"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Not supported"}),(0,i.jsx)(t.td,{style:{textAlign:"center"}})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"usage-notes",children:"Usage notes"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Since version 2.1.7, The MaxCompute Catalog is developed based on the ",(0,i.jsx)(t.a,{href:"https://help.aliyun.com/zh/maxcompute/user-guide/overview-1",children:"Open Storage SDK"})," ."]}),"\n",(0,i.jsxs)(t.li,{children:["The use of the Open Storage SDK has certain limitations. Please refer to the ",(0,i.jsx)(t.code,{children:"Usage limitations"})," section in this ",(0,i.jsx)(t.a,{href:"https://help.aliyun.com/zh/maxcompute/user-guide/overview-1",children:"document"})," ."]}),"\n",(0,i.jsx)(t.li,{children:"The Project in MaxCompute is equivalent to the DataBase in Doris."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"how-to-obtain-endpoint-and-quota",children:"How to obtain Endpoint and Quota"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["if you use the dedicated resource group of data transmission service , please refer to the ",(0,i.jsx)(t.code,{children:"Use exclusive data service resource groups"})," section in this ",(0,i.jsx)(t.a,{href:"https://help.aliyun.com/zh/maxcompute/user-guide/purchase-and-use-exclusive-resource-groups-for-dts",children:"document"}),", and in ",(0,i.jsx)(t.code,{children:"2. Authorization"}),", enable the corresponding permissions. In the ",(0,i.jsx)(t.code,{children:"Quota (Quota) management"})," list, view and copy the corresponding QuotaName, and specify ",(0,i.jsx)(t.code,{children:'"mc.quota" = "QuotaName"'}),". At this time, you can choose VPC/public network to access MaxCompute, but the bandwidth through VPC is guaranteed, and the public network bandwidth resources are small."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["If you use pay-as-you-go, please refer to the Using ",(0,i.jsx)(t.code,{children:"open storage (pay-as-you-go)"})," section in this ",(0,i.jsx)(t.a,{href:"https://help.aliyun.com/zh/maxcompute/user-guide/overview-1",children:"document"})," to enable the open storage (Storage API) switch and grant permissions to the users corresponding to Ak and SK. At this time, your ",(0,i.jsx)(t.code,{children:"mc.quota"})," is the default value ",(0,i.jsx)(t.code,{children:"pay-as-you-go"}),", and you do not need to specify this value additionally. At this time, you can only use VPC to access MaxCompute."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Through steps 1/2, you already know how to access MaxCompute. Now, you need to configure ",(0,i.jsx)(t.code,{children:"mc.endpoint"})," according to the ",(0,i.jsx)(t.code,{children:"Endpoints in different regions"})," in ",(0,i.jsx)(t.a,{href:"https://www.alibabacloud.com/help/en/maxcompute/user-guide/endpoints",children:"Alibaba Cloud Endpoints document"}),". Users that access through VPC need to configure ",(0,i.jsx)(t.code,{children:"mc.endpoint"})," according to the ",(0,i.jsx)(t.code,{children:"VPC endpoint"})," column in the ",(0,i.jsx)(t.code,{children:"Endpoints in different regions(VPC)"}),". Users that access through the public network can choose the ",(0,i.jsx)(t.code,{children:"Classic network endpoint"})," column in the ",(0,i.jsx)(t.code,{children:"Endpoints in different regions(internal network for connecting cloud products)"})," or the ",(0,i.jsx)(t.code,{children:"Public endpoint"})," column in the ",(0,i.jsx)(t.code,{children:"Endpoints in different regions(Internet)"})," to configure ",(0,i.jsx)(t.code,{children:"mc.endpoint"}),"."]}),"\n"]}),"\n"]})]})}function x(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return c},a:function(){return r}});var s=n(667294);let i={},l=s.createContext(i);function r(e){let t=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(l.Provider,{value:t},e.children)}}}]);