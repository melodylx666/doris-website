"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["752594"],{925377:function(e,n,t){t.r(n),t.d(n,{metadata:()=>l,contentTitle:()=>a,default:()=>h,assets:()=>c,toc:()=>o,frontMatter:()=>i});var l=JSON.parse('{"id":"sql-manual/sql-statements/data-governance/DROP-ROW-POLICY","title":"DROP ROW POLICY","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-statements/data-governance/DROP-ROW-POLICY.md","sourceDirName":"sql-manual/sql-statements/data-governance","slug":"/sql-manual/sql-statements/data-governance/DROP-ROW-POLICY","permalink":"/docs/sql-manual/sql-statements/data-governance/DROP-ROW-POLICY","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"DROP ROW POLICY","language":"en"},"sidebar":"docs","previous":{"title":"CREATE ROW POLICY","permalink":"/docs/sql-manual/sql-statements/data-governance/CREATE-ROW-POLICY"},"next":{"title":"SHOW ROW POLICY","permalink":"/docs/sql-manual/sql-statements/data-governance/SHOW-ROW-POLICY"}}'),s=t("785893"),r=t("250065");let i={title:"DROP ROW POLICY",language:"en"},a=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Required Parameters",id:"required-parameters",level:2}];function d(e){let n={blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:'Delete row security policy. For details about row security policies, please refer to the "Security Policies" chapter'}),"\n",(0,s.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"DROP ROW POLICY <policy_name> on <table_name>\n  [ FOR { <user_name> | ROLE <role_name> } ];\n"})}),"\n",(0,s.jsx)(n.h2,{id:"required-parameters",children:"Required Parameters"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"<policy_name>"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Row security policy name"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"<table_name>"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Table name"}),"\n"]}),"\n",(0,s.jsx)(n.h1,{id:"optional-parameters-optional-parameters",children:"Optional Parameters (Optional Parameters)"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"<user_name>"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"User name"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"<role_name>"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Role name"}),"\n"]}),"\n",(0,s.jsx)(n.h1,{id:"access-control-requirements-access-control-requirements",children:"Access Control Requirements (Access Control Requirements)"}),"\n",(0,s.jsx)(n.p,{children:"The user executing this SQL command must have at least the following privileges:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Privilege"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Object"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Notes"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{style:{textAlign:"left"},children:["ADMIN_PRIV or ",(0,s.jsx)(n.em,{children:"GRANT_PRIV"})]}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Global"}),(0,s.jsx)(n.td,{style:{textAlign:"left"}})]})})]}),"\n",(0,s.jsx)(n.h1,{id:"examples-examples",children:"Examples (Examples)"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Delete the ",(0,s.jsx)(n.em,{children:"policy1 row security policy"})," for ",(0,s.jsx)(n.em,{children:"db1.table1"})]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"DROP ROW POLICY policy1 ON db1.table1\n"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Delete the policy1 row security policy for db1.table1 that applies to user1"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"DROP ROW POLICY policy1 ON db1.table1 FOR user1\n"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Delete the policy1 row security policy for db1.table1 that applies to role1"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sql",children:"DROP ROW POLICY policy1 ON db1.table1 FOR role role1\n"})})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return i}});var l=t(667294);let s={},r=l.createContext(s);function i(e){let n=l.useContext(r);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);