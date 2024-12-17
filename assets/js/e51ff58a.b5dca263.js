"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["831064"],{180270:function(e,t,a){a.r(t),a.d(t,{metadata:()=>n,contentTitle:()=>s,default:()=>d,assets:()=>r,toc:()=>c,frontMatter:()=>i});var n=JSON.parse('{"id":"lakehouse/external-statistics","title":"External Table Statistics","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/lakehouse/external-statistics.md","sourceDirName":"lakehouse","slug":"/lakehouse/external-statistics","permalink":"/docs/3.0/lakehouse/external-statistics","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"External Table Statistics","language":"en"},"sidebar":"docs","previous":{"title":"Elastic Compute Node","permalink":"/docs/3.0/lakehouse/compute-node"},"next":{"title":"Cloud Service Authentication","permalink":"/docs/3.0/lakehouse/cloud-auth"}}'),l=a("785893"),o=a("250065");let i={title:"External Table Statistics",language:"en"},s="External Table Statistics",r={},c=[{value:"Property to turn on automatic collection when creating a catalog (default is false)",id:"property-to-turn-on-automatic-collection-when-creating-a-catalog-default-is-false",level:3},{value:"Control automatic collection by modifying the Catalog attribute:",id:"control-automatic-collection-by-modifying-the-catalog-attribute",level:3}];function u(e){let t={a:"a",code:"code",h1:"h1",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.header,{children:(0,l.jsx)(t.h1,{id:"external-table-statistics",children:"External Table Statistics"})}),"\n",(0,l.jsxs)(t.p,{children:["The collection method and content of external table statistical information are basically the same as those of internal tables. For detailed information, please refer to the ",(0,l.jsx)(t.a,{href:"../query/nereids/statistics.md",children:"statistical information"}),". After version 2.0.3, Hive tables support automatic and sampling collection."]}),"\n",(0,l.jsx)(t.h1,{id:"note",children:"Note"}),"\n",(0,l.jsxs)(t.ol,{children:["\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsx)(t.p,{children:"Currently (2.0.3) only Hive external tables support automatic and sampling collection. HMS type of Iceberg and Hudi tables, as well as JDBC tables only support manual full collection. Other types of external tables do not support statistics collection yet."}),"\n"]}),"\n",(0,l.jsxs)(t.li,{children:["\n",(0,l.jsx)(t.p,{children:"The automatic collection function is turned off by default for the external tables. You need to add attributes to turn it on when creating the external catalog, or enable it by setting the catalog attribute."}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(t.h3,{id:"property-to-turn-on-automatic-collection-when-creating-a-catalog-default-is-false",children:"Property to turn on automatic collection when creating a catalog (default is false)"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-SQL",children:"'enable.auto.analyze' = 'true'\n"})}),"\n",(0,l.jsx)(t.h3,{id:"control-automatic-collection-by-modifying-the-catalog-attribute",children:"Control automatic collection by modifying the Catalog attribute:"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{className:"language-sql",children:"ALTER CATALOG external_catalog SET PROPERTIES ('enable.auto.analyze'='true'); // enable auto collection\nALTER CATALOG external_catalog SET PROPERTIES ('enable.auto.analyze'='false'); // disable auto collection\n"})})]})}function d(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(u,{...e})}):u(e)}},250065:function(e,t,a){a.d(t,{Z:function(){return s},a:function(){return i}});var n=a(667294);let l={},o=n.createContext(l);function i(e){let t=n.useContext(o);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);