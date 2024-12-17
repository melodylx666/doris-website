"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["416300"],{457543:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>d,default:()=>m,assets:()=>r,toc:()=>o,frontMatter:()=>l});var t=JSON.parse('{"id":"sql-manual/sql-statements/data-modification/load-and-export/SHOW-STREAM-LOAD","title":"SHOW STREAM LOAD","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-statements/data-modification/load-and-export/SHOW-STREAM-LOAD.md","sourceDirName":"sql-manual/sql-statements/data-modification/load-and-export","slug":"/sql-manual/sql-statements/data-modification/load-and-export/SHOW-STREAM-LOAD","permalink":"/docs/3.0/sql-manual/sql-statements/data-modification/load-and-export/SHOW-STREAM-LOAD","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"SHOW STREAM LOAD","language":"en"},"sidebar":"docs","previous":{"title":"SHOW LOAD","permalink":"/docs/3.0/sql-manual/sql-statements/data-modification/load-and-export/SHOW-LOAD"},"next":{"title":"SHOW CREATE LOAD","permalink":"/docs/3.0/sql-manual/sql-statements/data-modification/load-and-export/SHOW-CREATE-LOAD"}}'),a=s("785893"),i=s("250065");let l={title:"SHOW STREAM LOAD",language:"en"},d=void 0,r={},o=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"Keywords",id:"keywords",level:2}];function c(e){let n={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(n.p,{children:"This statement is used to display the execution of the specified Stream Load task"}),"\n",(0,a.jsx)(n.p,{children:"grammar:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'SHOW STREAM LOAD\n[FROM db_name]\n[\n  WHERE\n  [LABEL [ = "your_label" | LIKE "label_matcher"]]\n  [STATUS = ["SUCCESS"|"FAIL"]]\n]\n[ORDER BY...]\n[LIMIT limit][OFFSET offset];\n'})}),"\n",(0,a.jsx)(n.p,{children:"illustrate:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["By default, BE does not record Stream Load records. If you want to view records that need to be enabled on BE, the configuration parameter is: ",(0,a.jsx)(n.code,{children:"enable_stream_load_record=true"}),". For details, please refer to ",(0,a.jsx)(n.a,{href:"../../../admin-manual/config/be-config.md",children:"BE Configuration Items"})]}),"\n",(0,a.jsx)(n.li,{children:"If db_name is not specified, the current default db is used"}),"\n",(0,a.jsx)(n.li,{children:"If LABEL LIKE is used, it will match the tasks whose label of the Stream Load task contains label_matcher"}),"\n",(0,a.jsx)(n.li,{children:"If LABEL = is used, it will match the specified label exactly"}),"\n",(0,a.jsx)(n.li,{children:"If STATUS is specified, matches STREAM LOAD status"}),"\n",(0,a.jsx)(n.li,{children:"You can use ORDER BY to sort on any combination of columns"}),"\n",(0,a.jsx)(n.li,{children:"If LIMIT is specified, limit matching records are displayed. Otherwise show all"}),"\n",(0,a.jsx)(n.li,{children:"If OFFSET is specified, the query results are displayed starting at offset offset. By default the offset is 0."}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Show all Stream Load tasks of the default db"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"  SHOW STREAM LOAD;\n"})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:'Display the Stream Load task of the specified db, the label contains the string "2014_01_02", and display the oldest 10'}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'SHOW STREAM LOAD FROM example_db WHERE LABEL LIKE "2014_01_02" LIMIT 10;\n'})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:'Display the Stream Load task of the specified db and specify the label as "load_example_db_20140102"'}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'SHOW STREAM LOAD FROM example_db WHERE LABEL = "load_example_db_20140102";\n'})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:'Display the Stream Load task of the specified db, specify the status as "success", and sort by StartTime in descending order'}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:'SHOW STREAM LOAD FROM example_db WHERE STATUS = "success" ORDER BY StartTime DESC;\n'})}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:"Display the import tasks of the specified db and sort them in descending order of StartTime, and display 10 query results starting from offset 5"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"SHOW STREAM LOAD FROM example_db ORDER BY StartTime DESC limit 5,10;\nSHOW STREAM LOAD FROM example_db ORDER BY StartTime DESC limit 10 offset 5;\n"})}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"keywords",children:"Keywords"}),"\n",(0,a.jsx)(n.p,{children:"SHOW, STREAM, LOAD"})]})}function m(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return l}});var t=s(667294);let a={},i=t.createContext(a);function l(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);