"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["846283"],{495524:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>r,default:()=>u,assets:()=>l,toc:()=>c,frontMatter:()=>o});var s=JSON.parse('{"id":"sql-manual/sql-functions/aggregate-functions/approx-count-distinct","title":"APPROX_COUNT_DISTINCT","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/sql-manual/sql-functions/aggregate-functions/approx-count-distinct.md","sourceDirName":"sql-manual/sql-functions/aggregate-functions","slug":"/sql-manual/sql-functions/aggregate-functions/approx-count-distinct","permalink":"/docs/3.0/sql-manual/sql-functions/aggregate-functions/approx-count-distinct","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"APPROX_COUNT_DISTINCT","language":"en"},"sidebar":"docs","previous":{"title":"COUNT_BY_ENUM","permalink":"/docs/3.0/sql-manual/sql-functions/aggregate-functions/count-by-enum"},"next":{"title":"PERCENTILE","permalink":"/docs/3.0/sql-manual/sql-functions/aggregate-functions/percentile"}}'),i=t("785893"),a=t("250065");let o={title:"APPROX_COUNT_DISTINCT",language:"en"},r=void 0,l={},c=[{value:"Description",id:"description",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Example",id:"example",level:3},{value:"Keywords",id:"keywords",level:3}];function d(e){let n={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h3,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"APPROX_COUNT_DISTINCT(expr)"})}),"\n",(0,i.jsxs)(n.p,{children:["Returns an approximate aggregation function similar to the result of ",(0,i.jsx)(n.code,{children:"COUNT(DISTINCT col)"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"It is implemented based on the HyperLogLog algorithm, which uses a fixed size of memory to estimate the column base. The algorithm is based on the assumption of a null distribution in the tails, and the accuracy depends on the data distribution. Based on the fixed bucket size used by Doris, the relative standard error of the algorithm is 0.8125%."}),"\n",(0,i.jsxs)(n.p,{children:["For a more detailed and specific analysis, see ",(0,i.jsx)(n.a,{href:"https://algo.inria.fr/flajolet/Publications/FlFuGaMe07.pdf",children:"related paper"})]}),"\n",(0,i.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sql",children:"MySQL > select approx_count_distinct(query_id) from log_statis group by datetime;\n+-----------------+\n| approx_count_distinct(`query_id`) |\n+-----------------+\n| 17721           |\n+-----------------+\n"})}),"\n",(0,i.jsx)(n.h3,{id:"keywords",children:"Keywords"}),"\n",(0,i.jsx)(n.p,{children:"APPROX_COUNT_DISTINCT"})]})}function u(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return o}});var s=t(667294);let i={},a=s.createContext(i);function o(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);