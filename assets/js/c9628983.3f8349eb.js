"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["725099"],{973919:function(e,t,n){n.r(t),n.d(t,{metadata:()=>a,contentTitle:()=>r,default:()=>u,assets:()=>c,toc:()=>o,frontMatter:()=>i});var a=JSON.parse('{"id":"sql-manual/sql-statements/database/CREATE-DATABASE","title":"CREATE DATABASE","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-statements/database/CREATE-DATABASE.md","sourceDirName":"sql-manual/sql-statements/database","slug":"/sql-manual/sql-statements/database/CREATE-DATABASE","permalink":"/docs/3.0/sql-manual/sql-statements/database/CREATE-DATABASE","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"CREATE DATABASE","language":"en"},"sidebar":"docs","previous":{"title":"REFRESH","permalink":"/docs/3.0/sql-manual/sql-statements/catalog/REFRESH"},"next":{"title":"ALTER DATABASE","permalink":"/docs/3.0/sql-manual/sql-statements/database/ALTER-DATABASE"}}'),s=n("785893"),l=n("250065");let i={title:"CREATE DATABASE",language:"en"},r=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"Keywords",id:"keywords",level:2},{value:"Best Practice",id:"best-practice",level:2}];function d(e){let t={admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.p,{children:"This statement is used to create a new database (database)"}),"\n",(0,s.jsx)(t.p,{children:"grammar:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:'CREATE DATABASE [IF NOT EXISTS] db_name\n    [PROPERTIES ("key"="value", ...)];\n'})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"PROPERTIES"})," Additional information about the database, which can be defaulted."]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["If you want to specify the default replica distribution for tables in db, you need to specify ",(0,s.jsx)(t.code,{children:"replication_allocation"})," (the ",(0,s.jsx)(t.code,{children:"replication_allocation"})," attribute of table will have higher priority than db)"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:'PROPERTIES (\n  "replication_allocation" = "tag.location.default:3"\n)\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Create a new database db_test"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"CREATE DATABASE db_test;\n"})}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Create a new database with default replica distribution:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:'CREATE DATABASE `iceberg_test`\nPROPERTIES (\n    "replication_allocation" = "tag.location.group_1:3"\n);\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.admonition,{type:"caution",children:(0,s.jsx)(t.p,{children:"If the create table statement has attributes replication_allocation or replication_num, then the default replica distribution policy of the database will not take effect."})}),"\n",(0,s.jsx)(t.h2,{id:"keywords",children:"Keywords"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-text",children:"CREATE, DATABASE\n"})}),"\n",(0,s.jsx)(t.h2,{id:"best-practice",children:"Best Practice"})]})}function u(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return r},a:function(){return i}});var a=n(667294);let s={},l=a.createContext(s);function i(e){let t=a.useContext(l);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(l.Provider,{value:t},e.children)}}}]);