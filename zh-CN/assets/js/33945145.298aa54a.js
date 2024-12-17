"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["359596"],{84900:function(e,n,s){s.r(n),s.d(n,{metadata:()=>l,contentTitle:()=>r,default:()=>o,assets:()=>c,toc:()=>a,frontMatter:()=>d});var l=JSON.parse('{"id":"sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-JOB","title":"CREATE-JOB","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-JOB.md","sourceDirName":"sql-manual/sql-statements/Data-Definition-Statements/Create","slug":"/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-JOB","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-JOB","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"CREATE-JOB","language":"zh-CN"},"sidebar":"docs","previous":{"title":"CREATE-ASYNC-MATERIALIZED-VIEW","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/Data-Definition-Statements/Create/CREATE-ASYNC-MATERIALIZED-VIEW"},"next":{"title":"ALTER-CATALOG","permalink":"/zh-CN/docs/dev/sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-CATALOG"}}'),i=s("785893"),t=s("250065");let d={title:"CREATE-JOB",language:"zh-CN"},r=void 0,c={},a=[{value:"CREATE-JOB",id:"create-job",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"\u6743\u9650",id:"\u6743\u9650",level:4},{value:"\u76F8\u5173\u6587\u6863",id:"\u76F8\u5173\u6587\u6863",level:4},{value:"\u8BED\u6CD5",id:"\u8BED\u6CD5",level:3},{value:"Example",id:"example",level:3},{value:"INSERT JOB",id:"insert-job",level:3},{value:"CONFIG",id:"config",level:3},{value:"Best Practice",id:"best-practice",level:3},{value:"Keywords",id:"keywords",level:3}];function h(e){let n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"create-job",children:"CREATE-JOB"}),"\n",(0,i.jsx)(n.h3,{id:"name",children:"Name"}),"\n",(0,i.jsx)(n.p,{children:"CREATE JOB"}),"\n",(0,i.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"Doris Job \u662F\u6839\u636E\u65E2\u5B9A\u8BA1\u5212\u8FD0\u884C\u7684\u4EFB\u52A1\uFF0C\u7528\u4E8E\u5728\u7279\u5B9A\u65F6\u95F4\u6216\u6307\u5B9A\u65F6\u95F4\u95F4\u9694\u89E6\u53D1\u9884\u5B9A\u4E49\u7684\u64CD\u4F5C\uFF0C\u4ECE\u800C\u5E2E\u52A9\u6211\u4EEC\u81EA\u52A8\u6267\u884C\u4E00\u4E9B\u4EFB\u52A1\u3002\u4ECE\u529F\u80FD\u4E0A\u6765\u8BB2\uFF0C\u5B83\u7C7B\u4F3C\u4E8E\u64CD\u4F5C\u7CFB\u7EDF\u4E0A\u7684\n\u5B9A\u65F6\u4EFB\u52A1\uFF08\u5982\uFF1ALinux \u4E2D\u7684 cron\u3001Windows \u4E2D\u7684\u8BA1\u5212\u4EFB\u52A1\uFF09\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["Job \u6709\u4E24\u79CD\u7C7B\u578B\uFF1A",(0,i.jsx)(n.code,{children:"ONE_TIME"})," \u548C ",(0,i.jsx)(n.code,{children:"RECURRING"}),"\u3002\u5176\u4E2D ",(0,i.jsx)(n.code,{children:"ONE_TIME"})," \u7C7B\u578B\u7684 Job \u4F1A\u5728\u6307\u5B9A\u7684\u65F6\u95F4\u70B9\u89E6\u53D1\uFF0C\u5B83\u4E3B\u8981\u7528\u4E8E\u4E00\u6B21\u6027\u4EFB\u52A1\uFF0C\u800C ",(0,i.jsx)(n.code,{children:"RECURRING"})," \u7C7B\u578B\u7684 Job \u4F1A\u5728\u6307\u5B9A\u7684\u65F6\u95F4\u95F4\u9694\u5185\u5FAA\u73AF\u89E6\u53D1, \u6B64\u65B9\u5F0F\u4E3B\u8981\u7528\u4E8E\u5468\u671F\u6027\u6267\u884C\u7684\u4EFB\u52A1\u3002\n",(0,i.jsx)(n.code,{children:"RECURRING"})," \u7C7B\u578B\u7684 Job \u53EF\u6307\u5B9A\u5F00\u59CB\u65F6\u95F4\uFF0C\u7ED3\u675F\u65F6\u95F4\uFF0C\u5373 ",(0,i.jsx)(n.code,{children:"STARTS\\ENDS"}),", \u5982\u679C\u4E0D\u6307\u5B9A\u5F00\u59CB\u65F6\u95F4\uFF0C\u5219\u9ED8\u8BA4\u9996\u6B21\u6267\u884C\u65F6\u95F4\u4E3A\u5F53\u524D\u65F6\u95F4 + \u4E00\u6B21\u8C03\u5EA6\u5468\u671F\u3002\u5982\u679C\u6307\u5B9A\u7ED3\u675F\u65F6\u95F4\uFF0C\u5219 task \u6267\u884C\u5B8C\u6210\u5982\u679C\u8FBE\u5230\u7ED3\u675F\u65F6\u95F4\uFF08\u6216\u8D85\u8FC7\uFF0C\u6216\u4E0B\u6B21\u6267\u884C\u5468\u671F\u4F1A\u8D85\u8FC7\u7ED3\u675F\u65F6\u95F4\uFF09\u5219\u66F4\u65B0\u4E3AFINISHED\u72B6\u6001\uFF0C\u6B64\u65F6\u4E0D\u4F1A\u518D\u4EA7\u751F Task\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["JOB \u51714\u79CD\u72B6\u6001\uFF08",(0,i.jsx)(n.code,{children:"RUNNING"}),",",(0,i.jsx)(n.code,{children:"STOPPED"}),",",(0,i.jsx)(n.code,{children:"PAUSED"}),",",(0,i.jsx)(n.code,{children:"FINISHED"}),",\uFF09\uFF0C\u521D\u59CB\u72B6\u6001\u4E3ARUNNING\uFF0CRUNNING \u72B6\u6001\u7684JOB\u4F1A\u6839\u636E\u65E2\u5B9A\u7684\u8C03\u5EA6\u5468\u671F\u53BB\u751F\u6210 TASK \u6267\u884C\uFF0CJob \u6267\u884C\u5B8C\u6210\u8FBE\u5230\u7ED3\u675F\u65F6\u95F4\u5219\u72B6\u6001\u53D8\u66F4\u4E3A ",(0,i.jsx)(n.code,{children:"FINISHED"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"RUNNING \u72B6\u6001\u7684JOB \u53EF\u4EE5\u88AB pause\uFF0C\u5373\u6682\u505C\uFF0C\u6B64\u65F6\u4E0D\u4F1A\u518D\u751F\u6210 Task\u3002"}),"\n",(0,i.jsx)(n.p,{children:"PAUSE\u72B6\u6001\u7684 JOB \u53EF\u4EE5\u901A\u8FC7 RESUME \u64CD\u4F5C\u6765\u6062\u590D\u8FD0\u884C\uFF0C\u66F4\u6539\u4E3ARUNNING\u72B6\u6001\u3002"}),"\n",(0,i.jsx)(n.p,{children:"STOP \u72B6\u6001\u7684 JOB \u7531\u7528\u6237\u4E3B\u52A8\u89E6\u53D1\uFF0C\u6B64\u65F6\u4F1A Cancel \u6B63\u5728\u8FD0\u884C\u4E2D\u7684\u4F5C\u4E1A\uFF0C\u7136\u540E\u5220\u9664 JOB\u3002"}),"\n",(0,i.jsx)(n.p,{children:"Finished \u72B6\u6001\u7684 JOB \u4F1A\u4FDD\u7559\u5728\u7CFB\u7EDF\u4E2D 24 H\uFF0C24H \u540E\u4F1A\u88AB\u5220\u9664\u3002"}),"\n",(0,i.jsx)(n.p,{children:"JOB \u53EA\u63CF\u8FF0\u4F5C\u4E1A\u4FE1\u606F\uFF0C \u6267\u884C\u4F1A\u751F\u6210 TASK\uFF0C TASK \u72B6\u6001\u5206\u4E3A PENDING\uFF0CRUNNING\uFF0CSUCCEESS,FAILED,CANCELED\nPENDING \u8868\u793A\u5230\u8FBE\u89E6\u53D1\u65F6\u95F4\u4E86\u4F46\u662F\u7B49\u5F85\u8D44\u6E90 RUN\uFF0C \u5206\u914D\u5230\u8D44\u6E90\u540E\u72B6\u6001\u53D8\u66F4\u4E3ARUNNING \uFF0C\u6267\u884C\u6210\u529F/\u5931\u8D25\u5373\u53D8\u66F4\u4E3A SUCCESS/FAILED.\nCANCELED \u5373\u53D6\u6D88\u72B6\u6001 \uFF0CTASK\u6301\u4E45\u5316\u6700\u7EC8\u72B6\u6001\uFF0C\u5373SUCCESS/FAILED,\u5176\u4ED6\u72B6\u6001\u8FD0\u884C\u4E2D\u53EF\u4EE5\u67E5\u5230\uFF0C\u4F46\u662F\u5982\u679C\u91CD\u542F\u5219\u4E0D\u53EF\u89C1\u3002TASK\u53EA\u4FDD\u7559\u6700\u65B0\u7684 100 \u6761\u8BB0\u5F55\u3002"}),"\n",(0,i.jsx)(n.h4,{id:"\u6743\u9650",children:"\u6743\u9650"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u76EE\u524D\u4EC5\u652F\u6301 ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"ADMIN"})})," \u6743\u9650\u6267\u884C\u6B64\u64CD\u4F5C\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"\u76F8\u5173\u6587\u6863",children:"\u76F8\u5173\u6587\u6863"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/zh-CN/docs/dev/sql-manual/sql-statements/Data-Definition-Statements/Alter/PAUSE-JOB",children:"\u6682\u505C-JOB"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/zh-CN/docs/dev/sql-manual/sql-statements/Data-Definition-Statements/Alter/RESUME-JOB",children:"\u6062\u590D-JOB"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/zh-CN/docs/dev/sql-manual/sql-statements/Data-Definition-Statements/Drop/DROP-JOB",children:"\u5220\u9664-JOB"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/zh-CN/docs/dev/sql-manual/sql-functions/table-valued-functions/jobs",children:"\u67E5\u8BE2-JOB"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/zh-CN/docs/dev/sql-manual/sql-functions/table-valued-functions/tasks",children:"\u67E5\u8BE2-TASKS"})}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"\u8BED\u6CD5",children:"\u8BED\u6CD5"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"CREATE\n    JOB\n    job_name\n    ON SCHEDULE schedule\n    [COMMENT 'string']\n    DO sql_body;\n\nschedule: {\n   AT timestamp \n   | EVERY interval\n    [STARTS timestamp ]\n    [ENDS timestamp ]\n}\n\ninterval:\n    quantity { WEEK | DAY | HOUR | MINUTE }\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u4E00\u6761\u6709\u6548\u7684 Job \u8BED\u53E5\u5FC5\u987B\u5305\u542B\u4EE5\u4E0B\u5185\u5BB9"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u5173\u952E\u5B57 CREATE JOB \u52A0\u4E0A\u4F5C\u4E1A\u540D\u79F0\uFF0C\u5B83\u5728\u4E00\u4E2A db \u4E2D\u6807\u8BC6\u552F\u4E00\u4E8B\u4EF6\u3002 JOB \u540D\u79F0\u5FC5\u987B\u662F\u5168\u5C40\u552F\u4E00\u7684\uFF0C\u5982\u679C\u5DF2\u7ECF\u5B58\u5728\u540C\u540D\u7684 JOB\uFF0C\u5219\u4F1A\u62A5\u9519\u3002\u6211\u4EEC\u4FDD\u7559\u4E86 ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"inner_"})})," \u524D\u7F00\u5728\u7CFB\u7EDF\u5185\u90E8\u4F7F\u7528\uFF0C\u56E0\u6B64\u7528\u6237\u4E0D\u80FD\u521B\u5EFA\u4EE5 ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"inner_"})})," \u5F00\u5934\u7684\u540D\u79F0\u3002"]}),"\n",(0,i.jsx)(n.li,{children:"ON SCHEDULE \u5B50\u53E5\uFF0C\u5B83\u6307\u5B9A\u4E86 Job \u4F5C\u4E1A\u7684\u7C7B\u578B\u548C\u89E6\u53D1\u65F6\u95F4\u4EE5\u53CA\u9891\u7387\u3002"}),"\n",(0,i.jsx)(n.li,{children:"DO \u5B50\u53E5\uFF0C\u5B83\u6307\u5B9A\u4E86 Job \u4F5C\u4E1A\u89E6\u53D1\u65F6\u9700\u8981\u6267\u884C\u7684\u64CD\u4F5C, \u5373\u4E00\u6761 SQL \u8BED\u53E5\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u8FD9\u662F\u4E00\u4E2A\u6700\u7B80\u5355\u7684\u4F8B\u5B50\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"CREATE JOB my_job ON SCHEDULE EVERY 1 MINUTE DO INSERT INTO db1.tbl1 SELECT * FROM db2.tbl2;\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u8BE5\u8BED\u53E5\u8868\u793A\u521B\u5EFA\u4E00\u4E2A\u540D\u4E3A my_job \u7684\u4F5C\u4E1A\uFF0C\u6BCF\u5206\u949F\u6267\u884C\u4E00\u6B21\uFF0C\u6267\u884C\u7684\u64CD\u4F5C\u662F\u5C06 db2.tbl2 \u4E2D\u7684\u6570\u636E\u5BFC\u5165\u5230 db1.tbl1 \u4E2D\u3002"}),"\n",(0,i.jsx)(n.p,{children:"SCHEDULE \u8BED\u53E5\u7528\u4E8E\u5B9A\u4E49\u4F5C\u4E1A\u7684\u6267\u884C\u65F6\u95F4\uFF0C\u9891\u7387\u4EE5\u53CA\u6301\u7EED\u65F6\u95F4\uFF0C\u5B83\u53EF\u4EE5\u6307\u5B9A\u4E00\u6B21\u6027\u4F5C\u4E1A\u6216\u8005\u5468\u671F\u6027\u4F5C\u4E1A\u3002"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"AT timestamp"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u683C\u5F0F\uFF1A'YYYY-MM-DD HH:MM:SS', \u7528\u4E8E\u4E00\u6B21\u6027\u4E8B\u4EF6\uFF0C\u5B83\u6307\u5B9A\u4E8B\u4EF6\u4EC5\u5728 \u7ED9\u5B9A\u7684\u65E5\u671F\u548C\u65F6\u95F4\u6267\u884C\u4E00\u6B21 timestamp\uFF0C\u5F53\u6267\u884C\u5B8C\u6210\u540E\uFF0CJOB \u72B6\u6001\u4F1A\u53D8\u66F4\u4E3A FINISHED\u3002"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"EVERY"}),"\n",(0,i.jsx)(n.p,{children:"\u8868\u793A\u5B9A\u671F\u91CD\u590D\u64CD\u4F5C\uFF0C\u5B83\u6307\u5B9A\u4E86\u4F5C\u4E1A\u7684\u6267\u884C\u9891\u7387\uFF0C\u5173\u952E\u5B57\u540E\u9762\u8981\u6307\u5B9A\u4E00\u4E2A\u65F6\u95F4\u95F4\u9694\uFF0C\u8BE5\u65F6\u95F4\u95F4\u9694\u53EF\u4EE5\u662F\u5929\u3001\u5C0F\u65F6\u3001\u5206\u949F\u3001\u79D2\u3001\u5468\u3002"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"interval"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u7528\u4E8E\u6307\u5B9A\u4F5C\u4E1A\u6267\u884C\u9891\u7387\uFF0C\u5B83\u53EF\u4EE5\u662F\u5929\u3001\u5C0F\u65F6\u3001\u5206\u949F\u3001\u5468\u3002\u4F8B\u5982\uFF1A",(0,i.jsx)(n.code,{children:" 1 DAY"})," \u8868\u793A\u6BCF\u5929\u6267\u884C\u4E00\u6B21\uFF0C",(0,i.jsx)(n.code,{children:" 1 HOUR"})," \u8868\u793A\u6BCF\u5C0F\u65F6\u6267\u884C\u4E00\u6B21\uFF0C",(0,i.jsx)(n.code,{children:" 1 MINUTE"})," \u8868\u793A\u6BCF\u5206\u949F\u6267\u884C\u4E00\u6B21\uFF0C",(0,i.jsx)(n.code,{children:" 1 WEEK"})," \u8868\u793A\u6BCF\u5468\u6267\u884C\u4E00\u6B21\u3002"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"STARTS timestamp \uFF08\u53EF\u9009\u5B57\u6BB5\uFF09"}),"\n",(0,i.jsx)(n.p,{children:"\u683C\u5F0F\uFF1A'YYYY-MM-DD HH:MM:SS',\u7528\u4E8E\u6307\u5B9A\u4F5C\u4E1A\u7684\u5F00\u59CB\u65F6\u95F4\uFF0C\u5982\u679C\u6CA1\u6709\u6307\u5B9A\uFF0C\u5219\u4ECE\u5F53\u524D\u65F6\u95F4\u7684\u4E0B\u4E00\u4E2A\u65F6\u95F4\u70B9\u5F00\u59CB\u6267\u884C\u3002\u5F00\u59CB\u65F6\u95F4\u5FC5\u987B\u5927\u4E8E\u5F53\u524D\u65F6\u95F4\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"ENDS timestamp \uFF08\u53EF\u9009\u5B57\u6BB5\uFF09"}),"\n",(0,i.jsxs)(n.p,{children:["\u683C\u5F0F\uFF1A'YYYY-MM-DD HH:MM:SS', \u7528\u4E8E\u6307\u5B9A\u4F5C\u4E1A\u7684\u7ED3\u675F\u65F6\u95F4\uFF0C\u5982\u679C\u6CA1\u6709\u6307\u5B9A\uFF0C\u5219\u8868\u793A\u6C38\u4E45\u6267\u884C\u3002\u8BE5\u65E5\u671F\u5FC5\u987B\u5927\u4E8E\u5F53\u524D\u65F6\u95F4\uFF0C\u5982\u679C\u6307\u5B9A\u4E86\u5F00\u59CB\u65F6\u95F4\uFF0C \u5373 ",(0,i.jsx)(n.code,{children:"STARTS"}),"\uFF0C\u5219\u7ED3\u675F\u65F6\u95F4\u5FC5\u987B\u5927\u4E8E\u5F00\u59CB\u65F6\u95F4\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"DO"}),"\n",(0,i.jsxs)(n.p,{children:["\u7528\u4E8E\u6307\u5B9A\u4F5C\u4E1A\u89E6\u53D1\u65F6\u9700\u8981\u6267\u884C\u7684\u64CD\u4F5C\uFF0C\u76EE\u524D\u4EC5\u652F\u6301 ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"INSERT \u5185\u8868"})})," \u64CD\u4F5C\u3002\u540E\u7EED\u6211\u4EEC\u4F1A\u652F\u6301\u66F4\u591A\u7684\u64CD\u4F5C\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.p,{children:"\u521B\u5EFA\u4E00\u4E2A\u4E00\u6B21\u6027\u7684 Job\uFF0C\u5B83\u4F1A\u5728 2020-01-01 00:00:00 \u65F6\u6267\u884C\u4E00\u6B21\uFF0C\u6267\u884C\u7684\u64CD\u4F5C\u662F\u5C06 db2.tbl2 \u4E2D\u7684\u6570\u636E\u5BFC\u5165\u5230 db1.tbl1 \u4E2D\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"\nCREATE JOB my_job ON SCHEDULE AT '2020-01-01 00:00:00' DO INSERT INTO db1.tbl1 SELECT * FROM db2.tbl2;\n\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u521B\u5EFA\u4E00\u4E2A\u5468\u671F\u6027\u7684 Job\uFF0C\u5B83\u4F1A\u5728 2020-01-01 00:00:00 \u65F6\u5F00\u59CB\u6267\u884C\uFF0C\u6BCF\u5929\u6267\u884C\u4E00\u6B21\uFF0C\u6267\u884C\u7684\u64CD\u4F5C\u662F\u5C06 db2.tbl2 \u4E2D\u7684\u6570\u636E\u5BFC\u5165\u5230 db1.tbl1 \u4E2D\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"CREATE JOB my_job ON SCHEDULE EVERY 1 DAY STARTS '2020-01-01 00:00:00' DO INSERT INTO db1.tbl1 SELECT * FROM db2.tbl2 WHERE  create_time >=  days_add(now(),-1);\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u521B\u5EFA\u4E00\u4E2A\u5468\u671F\u6027\u7684 Job\uFF0C\u5B83\u4F1A\u5728 2020-01-01 00:00:00 \u65F6\u5F00\u59CB\u6267\u884C\uFF0C\u6BCF\u5929\u6267\u884C\u4E00\u6B21\uFF0C\u6267\u884C\u7684\u64CD\u4F5C\u662F\u5C06 db2.tbl2 \u4E2D\u7684\u6570\u636E\u5BFC\u5165\u5230 db1.tbl1 \u4E2D\uFF0C\u8BE5 Job \u5728 2020-01-01 00:10:00 \u65F6\u7ED3\u675F\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"CREATE JOB my_job ON SCHEDULE EVERY 1 DAY STARTS '2020-01-01 00:00:00' ENDS '2020-01-01 00:10:00' DO INSERT INTO db1.tbl1 SELECT * FROM db2.tbl2 create_time >=  days_add(now(),-1);\n"})}),"\n",(0,i.jsx)(n.h3,{id:"insert-job",children:"INSERT JOB"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u76EE\u524D\u4EC5\u652F\u6301 ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.strong,{children:"INSERT \u5185\u8868"})})]}),"\n",(0,i.jsx)(n.li,{children:"\u5F53\u4E0B\u4E00\u4E2A\u8BA1\u5212\u4EFB\u52A1\u65F6\u95F4\u5230\u671F\uFF0C\u5373\u9700\u8981\u8C03\u5EA6\u4EFB\u52A1\u6267\u884C\u65F6\uFF0C\u5982\u679C\u5F53\u524D JOB \u4ECD\u6709\u5386\u53F2\u4EFB\u52A1\u6B63\u5728\u6267\u884C\uFF0C\u5219\u4F1A\u8DF3\u8FC7\u5F53\u524D\u4EFB\u52A1\u8C03\u5EA6\u3002\u56E0\u6B64\u63A7\u5236\u4E00\u4E2A\u5408\u7406\u7684\u6267\u884C\u95F4\u9694\u975E\u5E38\u91CD\u8981\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"config",children:"CONFIG"}),"\n",(0,i.jsx)(n.p,{children:"fe.conf"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"job_dispatch_timer_job_thread_num, \u7528\u4E8E\u5206\u53D1\u5B9A\u65F6\u4EFB\u52A1\u7684\u7EBF\u7A0B\u6570, \u9ED8\u8BA4\u503C2\uFF0C\u5982\u679C\u542B\u6709\u5927\u91CF\u5468\u671F\u6267\u884C\u4EFB\u52A1\uFF0C\u53EF\u4EE5\u8C03\u5927\u8FD9\u4E2A\u53C2\u6570\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"job_dispatch_timer_job_queue_size, \u4EFB\u52A1\u5806\u79EF\u65F6\u7528\u4E8E\u5B58\u653E\u5B9A\u65F6\u4EFB\u52A1\u7684\u961F\u5217\u5927\u5C0F,\u9ED8\u8BA4\u503C 1024. \u5982\u679C\u6709\u5927\u91CF\u4EFB\u52A1\u540C\u4E00\u65F6\u95F4\u89E6\u53D1\uFF0C\u53EF\u4EE5\u8C03\u5927\u8FD9\u4E2A\u53C2\u6570\u3002\u5426\u5219\u4F1A\u5BFC\u81F4\u961F\u5217\u6EE1\uFF0C\u63D0\u4EA4\u4EFB\u52A1\u4F1A\u8FDB\u5165\u963B\u585E\u72B6\u6001\uFF0C\u4ECE\u800C\u5BFC\u81F4\u540E\u7EED\u4EFB\u52A1\u65E0\u6CD5\u63D0\u4EA4\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"finished_job_cleanup_threshold_time_hour, \u7528\u4E8E\u6E05\u7406\u5DF2\u5B8C\u6210\u7684\u4EFB\u52A1\u7684\u65F6\u95F4\u9608\u503C\uFF0C\u5355\u4F4D\u4E3A\u5C0F\u65F6\uFF0C\u9ED8\u8BA4\u503C\u4E3A24\u5C0F\u65F6\u3002"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"job_insert_task_consumer_thread_num = 10;\u7528\u4E8E\u6267\u884C Insert \u4EFB\u52A1\u7684\u7EBF\u7A0B\u6570, \u503C\u5E94\u8BE5\u5927\u4E8E0\uFF0C\u5426\u5219\u9ED8\u8BA4\u4E3A5."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"best-practice",children:"Best Practice"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u5408\u7406\u7684\u8FDB\u884C Job \u7684\u7BA1\u7406\uFF0C\u907F\u514D\u5927\u91CF\u7684 Job \u540C\u65F6\u89E6\u53D1\uFF0C\u5BFC\u81F4\u4EFB\u52A1\u5806\u79EF\uFF0C\u4ECE\u800C\u5F71\u54CD\u7CFB\u7EDF\u7684\u6B63\u5E38\u8FD0\u884C\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u4EFB\u52A1\u7684\u6267\u884C\u95F4\u9694\u5E94\u8BE5\u8BBE\u7F6E\u5728\u4E00\u4E2A\u5408\u7406\u7684\u8303\u56F4\uFF0C\u81F3\u5C11\u5E94\u8BE5\u5927\u4E8E\u4EFB\u52A1\u6267\u884C\u65F6\u95F4\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"keywords",children:"Keywords"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"    CREATE, JOB\n"})})]})}function o(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return r},a:function(){return d}});var l=s(667294);let i={},t=l.createContext(i);function d(e){let n=l.useContext(t);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),l.createElement(t.Provider,{value:n},e.children)}}}]);