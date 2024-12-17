"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["114415"],{788961:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>c,default:()=>u,assets:()=>r,toc:()=>o,frontMatter:()=>a});var s=JSON.parse('{"id":"sql-manual/sql-functions/table-functions/iceberg_meta","title":"iceberg_meta","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-1.2/sql-manual/sql-functions/table-functions/iceberg_meta.md","sourceDirName":"sql-manual/sql-functions/table-functions","slug":"/sql-manual/sql-functions/table-functions/iceberg_meta","permalink":"/zh-CN/docs/1.2/sql-manual/sql-functions/table-functions/iceberg_meta","draft":false,"unlisted":false,"tags":[],"version":"1.2","frontMatter":{"title":"iceberg_meta","language":"zh-CN"},"sidebar":"docs","previous":{"title":"hdfs","permalink":"/zh-CN/docs/1.2/sql-manual/sql-functions/table-functions/hdfs"},"next":{"title":"backends","permalink":"/zh-CN/docs/1.2/sql-manual/sql-functions/table-functions/backends"}}'),i=t("785893"),l=t("250065");let a={title:"iceberg_meta",language:"zh-CN"},c=void 0,r={},o=[{value:"iceberg_meta",id:"iceberg_meta",level:2},{value:"Name",id:"name",level:3},{value:"description",id:"description",level:3},{value:"syntax",id:"syntax",level:4},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Prac",id:"best-prac",level:3}];function d(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",version:"version",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"iceberg_meta",children:"iceberg_meta"}),"\n",(0,i.jsx)(n.h3,{id:"name",children:"Name"}),"\n",(0,i.jsxs)(n.version,{since:"1.2",children:["\n",(0,i.jsx)(n.p,{children:"iceberg_meta"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,i.jsx)(n.p,{children:"iceberg_meta\u8868\u51FD\u6570\uFF08table-valued-function,tvf\uFF09\uFF0C\u53EF\u4EE5\u7528\u4E8E\u8BFB\u53D6iceberg\u8868\u7684\u5404\u7C7B\u5143\u6570\u636E\u4FE1\u606F\uFF0C\u5982\u64CD\u4F5C\u5386\u53F2\u3001\u751F\u6210\u7684\u5FEB\u7167\u3001\u6587\u4EF6\u5143\u6570\u636E\u7B49\u3002"}),"\n",(0,i.jsx)(n.h4,{id:"syntax",children:"syntax"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'iceberg_meta(\n  "table" = "ctl.db.tbl", \n  "query_type" = "snapshots"\n  ...\n  );\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"\u53C2\u6570\u8BF4\u660E"})}),"\n",(0,i.jsxs)(n.p,{children:["iceberg_meta\u8868\u51FD\u6570 tvf\u4E2D\u7684\u6BCF\u4E00\u4E2A\u53C2\u6570\u90FD\u662F\u4E00\u4E2A ",(0,i.jsx)(n.code,{children:'"key"="value"'})," \u5BF9\u3002\n\u76F8\u5173\u53C2\u6570\uFF1A"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"table"}),"\uFF1A (\u5FC5\u586B) \u5B8C\u6574\u7684\u8868\u540D\uFF0C\u9700\u8981\u6309\u7167\u76EE\u5F55\u540D.\u5E93\u540D.\u8868\u540D\u7684\u683C\u5F0F\uFF0C\u586B\u5199\u9700\u8981\u67E5\u770B\u7684iceberg\u8868\u540D\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"query_type"}),"\uFF1A (\u5FC5\u586B) \u60F3\u8981\u67E5\u770B\u7684\u5143\u6570\u636E\u7C7B\u578B\uFF0C\u76EE\u524D\u4EC5\u652F\u6301snapshots\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.p,{children:"\u8BFB\u53D6\u5E76\u8BBF\u95EEiceberg\u8868\u683C\u5F0F\u7684snapshots\u5143\u6570\u636E\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'select * from iceberg_meta("table" = "ctl.db.tbl", "query_type" = "snapshots");\n\n'})}),"\n",(0,i.jsxs)(n.p,{children:["\u53EF\u4EE5\u914D\u5408",(0,i.jsx)(n.code,{children:"desc function"}),"\u4F7F\u7528"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'desc function iceberg_meta("table" = "ctl.db.tbl", "query_type" = "snapshots");\n'})}),"\n",(0,i.jsx)(n.h3,{id:"keywords",children:"Keywords"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"iceberg_meta, table-valued-function, tvf\n"})}),"\n",(0,i.jsx)(n.h3,{id:"best-prac",children:"Best Prac"}),"\n",(0,i.jsx)(n.p,{children:"\u67E5\u770Biceberg\u8868\u7684snapshots"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'select * from iceberg_meta("table" = "iceberg_ctl.test_db.test_tbl", "query_type" = "snapshots");\n+------------------------+----------------+---------------+-----------+-------------------+\n|      committed_at      |  snapshot_id   |   parent_id   | operation |   manifest_list   |\n+------------------------+----------------+---------------+-----------+-------------------+\n|  2022-09-20 11:14:29   |  64123452344   |       -1      |  append   | hdfs:/path/to/m1  |\n|  2022-09-21 10:36:35   |  98865735822   |  64123452344  | overwrite | hdfs:/path/to/m2  |\n|  2022-09-21 21:44:11   |  51232845315   |  98865735822  | overwrite | hdfs:/path/to/m3  |\n+------------------------+----------------+---------------+-----------+-------------------+\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u6839\u636Esnapshot_id\u5B57\u6BB5\u7B5B\u9009"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:'select * from iceberg_meta("table" = "iceberg_ctl.test_db.test_tbl", "query_type" = "snapshots") \nwhere snapshot_id = 98865735822;\n+------------------------+----------------+---------------+-----------+-------------------+\n|      committed_at      |  snapshot_id   |   parent_id   | operation |   manifest_list   |\n+------------------------+----------------+---------------+-----------+-------------------+\n|  2022-09-21 10:36:35   |  98865735822   |  64123452344  | overwrite | hdfs:/path/to/m2  |\n+------------------------+----------------+---------------+-----------+-------------------+\n'})})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return a}});var s=t(667294);let i={},l=s.createContext(i);function a(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);