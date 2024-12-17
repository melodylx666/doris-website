"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["628207"],{705781:function(e,t,n){n.r(t),n.d(t,{metadata:()=>s,contentTitle:()=>l,default:()=>h,assets:()=>o,toc:()=>a,frontMatter:()=>d});var s=JSON.parse('{"id":"ecosystem/kettle","title":"Kettle Doris Plugin","description":"\x3c!--","source":"@site/versioned_docs/version-1.2/ecosystem/kettle.md","sourceDirName":"ecosystem","slug":"/ecosystem/kettle","permalink":"/docs/1.2/ecosystem/kettle","draft":false,"unlisted":false,"tags":[],"version":"1.2","frontMatter":{"title":"Kettle Doris Plugin","language":"en"},"sidebar":"docs","previous":{"title":"Seatunnel Doris Sink","permalink":"/docs/1.2/ecosystem/seatunnel"},"next":{"title":"Kyuubi","permalink":"/docs/1.2/ecosystem/kyuubi"}}'),r=n("785893"),i=n("250065");let d={title:"Kettle Doris Plugin",language:"en"},l=void 0,o={},a=[{value:"Kettle Doris Plugin",id:"kettle-doris-plugin",level:2},{value:"About Kettle",id:"about-kettle",level:2},{value:"User Manual",id:"user-manual",level:2},{value:"Download Kettle and install",id:"download-kettle-and-install",level:3},{value:"Compile Kettle Doris Plugin",id:"compile-kettle-doris-plugin",level:3},{value:"Build a job",id:"build-a-job",level:3},{value:"Parameter Description",id:"parameter-description",level:3}];function c(e){let t={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"kettle-doris-plugin",children:"Kettle Doris Plugin"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://pentaho.com/",children:"Kettle"})," Doris Plugin is used to write data from other data sources to Doris through Stream Load in Kettle."]}),"\n",(0,r.jsx)(t.p,{children:"This plug-in uses the Stream Load function of Doris to import data. It needs to be used in conjunction with the Kettle service."}),"\n",(0,r.jsx)(t.h2,{id:"about-kettle",children:"About Kettle"}),"\n",(0,r.jsx)(t.p,{children:"Kettle is an open source ETL (Extract, Transform, Load) tool, first developed by Pentaho, Kettle is one of the core components of the Pentaho product suite, mainly used for data integration and data processing, and can easily complete the tasks of extracting data from various sources, cleaning and transforming data, and loading it into the target system."}),"\n",(0,r.jsxs)(t.p,{children:["For more information, please refer to: ",(0,r.jsx)(t.code,{children:"https://pentaho.com/"})]}),"\n",(0,r.jsx)(t.h2,{id:"user-manual",children:"User Manual"}),"\n",(0,r.jsx)(t.h3,{id:"download-kettle-and-install",children:"Download Kettle and install"}),"\n",(0,r.jsxs)(t.p,{children:["Kettle download address: ",(0,r.jsx)(t.a,{href:"https://pentaho.com/download/#download-pentaho",children:"https://pentaho.com/download/#download-pentaho"}),"\nAfter downloading, unzip it and run spoon.sh to start kettle\nYou can also compile it yourself, refer to the ",(0,r.jsx)(t.a,{href:"https://github.com/pentaho/pentaho-kettle?tab=readme-ov-file#how-to-build",children:"Compilation Chapter"})]}),"\n",(0,r.jsx)(t.h3,{id:"compile-kettle-doris-plugin",children:"Compile Kettle Doris Plugin"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"cd doris/extension/kettle\nmvn clean package -DskipTests\n"})}),"\n",(0,r.jsx)(t.p,{children:"After compiling, unzip the plug-in package and copy it to the plugins directory of kettle"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"cd assemblies/plugin/target\nunzip doris-stream-loader-plugins-9.4.0.0-343.zip\ncp -r doris-stream-loader ${KETTLE_HOME}/plugins/\nmvn clean package -DskipTests\n"})}),"\n",(0,r.jsx)(t.h3,{id:"build-a-job",children:"Build a job"}),"\n",(0,r.jsxs)(t.p,{children:["Find Doris Stream Loader in the batch loading in Kettle and build a job\n",(0,r.jsx)(t.img,{src:"https://raw.githubusercontent.com/apache/doris/refs/heads/master/extension/kettle/images/create.png",alt:"create_zh.png"})]}),"\n",(0,r.jsxs)(t.p,{children:["Click Start Running the Job to complete data synchronization\n",(0,r.jsx)(t.img,{src:"https://raw.githubusercontent.com/apache/doris/refs/heads/master/extension/kettle/images/running.png",alt:"running_zh.png"})]}),"\n",(0,r.jsx)(t.h3,{id:"parameter-description",children:"Parameter Description"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Key"}),(0,r.jsx)(t.th,{children:"Default Value"}),(0,r.jsx)(t.th,{children:"Required"}),(0,r.jsx)(t.th,{children:"Comment"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Step name"}),(0,r.jsx)(t.td,{children:"--"}),(0,r.jsx)(t.td,{children:"Y"}),(0,r.jsx)(t.td,{children:"Step name"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"fenodes"}),(0,r.jsx)(t.td,{children:"--"}),(0,r.jsx)(t.td,{children:"Y"}),(0,r.jsx)(t.td,{children:"Doris FE http address, supports multiple addresses, separated by commas"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Database"}),(0,r.jsx)(t.td,{children:"--"}),(0,r.jsx)(t.td,{children:"Y"}),(0,r.jsx)(t.td,{children:"Doris write database"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Target table"}),(0,r.jsx)(t.td,{children:"--"}),(0,r.jsx)(t.td,{children:"Y"}),(0,r.jsx)(t.td,{children:"Doris's write table"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Username"}),(0,r.jsx)(t.td,{children:"--"}),(0,r.jsx)(t.td,{children:"Y"}),(0,r.jsx)(t.td,{children:"Username to access Doris"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Password"}),(0,r.jsx)(t.td,{children:"--"}),(0,r.jsx)(t.td,{children:"N"}),(0,r.jsx)(t.td,{children:"Password to access Doris"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Maximum number of rows for a single import"}),(0,r.jsx)(t.td,{children:"10000"}),(0,r.jsx)(t.td,{children:"N"}),(0,r.jsx)(t.td,{children:"Maximum number of rows for a single import"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Maximum bytes for a single import"}),(0,r.jsx)(t.td,{children:"10485760 (10MB)"}),(0,r.jsx)(t.td,{children:"N"}),(0,r.jsx)(t.td,{children:"Maximum byte size for a single import"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Number of import retries"}),(0,r.jsx)(t.td,{children:"3"}),(0,r.jsx)(t.td,{children:"N"}),(0,r.jsx)(t.td,{children:"Number of retries after import failure"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"StreamLoad properties"}),(0,r.jsx)(t.td,{children:"--"}),(0,r.jsx)(t.td,{children:"N"}),(0,r.jsx)(t.td,{children:"Streamload request header"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Delete Mode"}),(0,r.jsx)(t.td,{children:"N"}),(0,r.jsx)(t.td,{children:"N"}),(0,r.jsx)(t.td,{children:"Whether to enable delete mode. By default, Stream Load performs insert operations. After the delete mode is enabled, all Stream Load writes are delete operations."})]})]})]})]})}function h(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return l},a:function(){return d}});var s=n(667294);let r={},i=s.createContext(r);function d(e){let t=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);