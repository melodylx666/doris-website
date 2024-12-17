"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["255025"],{420031:function(e,t,n){n.r(t),n.d(t,{metadata:()=>l,contentTitle:()=>r,default:()=>u,assets:()=>o,toc:()=>c,frontMatter:()=>i});var l=JSON.parse('{"id":"sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-SQL-BLOCK-RULE","title":"ALTER-SQL-BLOCK-RULE","description":"\x3c!--","source":"@site/docs/sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-SQL-BLOCK-RULE.md","sourceDirName":"sql-manual/sql-statements/Data-Definition-Statements/Alter","slug":"/sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-SQL-BLOCK-RULE","permalink":"/docs/dev/sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-SQL-BLOCK-RULE","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"ALTER-SQL-BLOCK-RULE","language":"en"},"sidebar":"docs","previous":{"title":"ALTER-WORKLOAD-GROUP","permalink":"/docs/dev/sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-WORKLOAD-GROUP"},"next":{"title":"ALTER-ASYNC-MATERIALIZED-VIEW","permalink":"/docs/dev/sql-manual/sql-statements/Data-Definition-Statements/Alter/ALTER-ASYNC-MATERIALIZED-VIEW"}}'),s=n("785893"),a=n("250065");let i={title:"ALTER-SQL-BLOCK-RULE",language:"en"},r=void 0,o={},c=[{value:"ALTER-SQL-BLOCK-RULE",id:"alter-sql-block-rule",level:2},{value:"Name",id:"name",level:3},{value:"Description",id:"description",level:3},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3},{value:"Best Practice",id:"best-practice",level:3}];function d(e){let t={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"alter-sql-block-rule",children:"ALTER-SQL-BLOCK-RULE"}),"\n",(0,s.jsx)(t.h3,{id:"name",children:"Name"}),"\n",(0,s.jsx)(t.p,{children:"ALTER SQL BLOCK RULE"}),"\n",(0,s.jsx)(t.h3,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"Modify SQL blocking rules to allow modification of each item such as sql/sqlHash/partition_num/tablet_num/cardinality/global/enable."}),"\n",(0,s.jsx)(t.p,{children:"grammar:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:'ALTER SQL_BLOCK_RULE rule_name\n[PROPERTIES ("key"="value", ...)];\n'})}),"\n",(0,s.jsx)(t.p,{children:"illustrate:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"sql and sqlHash cannot be set at the same time. This means that if a rule sets sql or sqlHash, the other attribute cannot be modified;"}),"\n",(0,s.jsx)(t.li,{children:"sql/sqlHash and partition_num/tablet_num/cardinality cannot be set at the same time. For example, if a rule sets partition_num, then sql or sqlHash cannot be modified;"}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Modify according to SQL properties"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:'ALTER SQL_BLOCK_RULE test_rule PROPERTIES("sql"="select \\\\* from test_table","enable"="true")\n'})}),"\n",(0,s.jsxs)(t.ol,{start:"2",children:["\n",(0,s.jsx)(t.li,{children:"If a rule sets partition_num, then sql or sqlHash cannot be modified"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:'ALTER SQL_BLOCK_RULE test_rule2 PROPERTIES("partition_num" = "10","tablet_num"="300","enable"="true")\n'})}),"\n",(0,s.jsx)(t.h3,{id:"keywords",children:"Keywords"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-text",children:"ALTER,SQL_BLOCK_RULE\n"})}),"\n",(0,s.jsx)(t.h3,{id:"best-practice",children:"Best Practice"})]})}function u(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return r},a:function(){return i}});var l=n(667294);let s={},a=l.createContext(s);function i(e){let t=l.useContext(a);return l.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),l.createElement(a.Provider,{value:t},e.children)}}}]);