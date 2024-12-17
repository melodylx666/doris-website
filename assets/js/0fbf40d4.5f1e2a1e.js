"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["429938"],{632482:function(e,s,r){r.r(s),r.d(s,{metadata:()=>n,contentTitle:()=>a,default:()=>d,assets:()=>o,toc:()=>h,frontMatter:()=>l});var n=JSON.parse('{"id":"releasenotes/v1.1/release-1.1.3","title":"Release 1.1.3","description":"\x3c!--","source":"@site/docs/releasenotes/v1.1/release-1.1.3.md","sourceDirName":"releasenotes/v1.1","slug":"/releasenotes/v1.1/release-1.1.3","permalink":"/docs/dev/releasenotes/v1.1/release-1.1.3","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Release 1.1.3","language":"en"},"sidebar":"docs","previous":{"title":"Release 1.1.4","permalink":"/docs/dev/releasenotes/v1.1/release-1.1.4"},"next":{"title":"Release 1.1.2","permalink":"/docs/dev/releasenotes/v1.1/release-1.1.2"}}'),i=r("785893"),t=r("250065");let l={title:"Release 1.1.3",language:"en"},a="Features",o={},h=[];function c(e){let s={a:"a",code:"code",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.p,{children:"In this release, Doris Team has fixed more than 80 issues or performance improvement since 1.1.2. This release is a bugfix release on 1.1 and all users are encouraged to upgrade to this release."}),"\n",(0,i.jsx)(s.header,{children:(0,i.jsx)(s.h1,{id:"features",children:"Features"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Support escape identifiers for sqlserver and postgresql in ODBC table."}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Could use Parquet as output file format."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h1,{id:"improvements",children:"Improvements"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Optimize flush policy to avoid small segments. ",(0,i.jsx)(s.a,{href:"https://github.com/apache/doris/pull/12706",children:"#12706"})," ",(0,i.jsx)(s.a,{href:"https://github.com/apache/doris/pull/12716",children:"#12716"})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Refactor runtime filter to reduce the prepare time. ",(0,i.jsx)(s.a,{href:"https://github.com/apache/doris/pull/13127",children:"#13127"})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Lots of memory control related issues during query or load process. ",(0,i.jsx)(s.a,{href:"https://github.com/apache/doris/pull/12682",children:"#12682"})," ",(0,i.jsx)(s.a,{href:"https://github.com/apache/doris/pull/12688",children:"#12688"})," ",(0,i.jsx)(s.a,{href:"https://github.com/apache/doris/pull/12708",children:"#12708"})," ",(0,i.jsx)(s.a,{href:"https://github.com/apache/doris/pull/12776",children:"#12776"})," ",(0,i.jsx)(s.a,{href:"https://github.com/apache/doris/pull/12782",children:"#12782"})," ",(0,i.jsx)(s.a,{href:"https://github.com/apache/doris/pull/12791",children:"#12791"})," ",(0,i.jsx)(s.a,{href:"https://github.com/apache/doris/pull/12794",children:"#12794"})," ",(0,i.jsx)(s.a,{href:"https://github.com/apache/doris/pull/12820",children:"#12820"})," ",(0,i.jsx)(s.a,{href:"https://github.com/apache/doris/pull/12932",children:"#12932"})," ",(0,i.jsx)(s.a,{href:"https://github.com/apache/doris/pull/12954",children:"#12954"})," ",(0,i.jsx)(s.a,{href:"https://github.com/apache/doris/pull/12951",children:"#12951"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h1,{id:"bugfix",children:"BugFix"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Core dump on compaction with largeint. ",(0,i.jsx)(s.a,{href:"https://github.com/apache/doris/pull/10094",children:"#10094"})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Grouping sets cause be core or return wrong results. ",(0,i.jsx)(s.a,{href:"https://github.com/apache/doris/pull/12313",children:"#12313"})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["PREAGGREGATION flag in orthogonal_bitmap_union_count operator is wrong. ",(0,i.jsx)(s.a,{href:"https://github.com/apache/doris/pull/12581",children:"#12581"})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Level1Iterator should release iterators in heap and it may cause memory leak. ",(0,i.jsx)(s.a,{href:"https://github.com/apache/doris/pull/12592",children:"#12592"})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Fix decommission failure with 2 BEs and existing colocation table. ",(0,i.jsx)(s.a,{href:"https://github.com/apache/doris/pull/12644",children:"#12644"})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["BE may core dump because of stack-buffer-overflow when TBrokerOpenReaderResponse too large. ",(0,i.jsx)(s.a,{href:"https://github.com/apache/doris/pull/12658",children:"#12658"})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["BE may OOM during load when error code -238 occurs. ",(0,i.jsx)(s.a,{href:"https://github.com/apache/doris/pull/12666",children:"#12666"})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Fix wrong child expression of lead function. ",(0,i.jsx)(s.a,{href:"https://github.com/apache/doris/pull/12587",children:"#12587"})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Fix intersect query failed in row storage code. ",(0,i.jsx)(s.a,{href:"https://github.com/apache/doris/pull/12712",children:"#12712"})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Fix wrong result produced by curdate()/current_date() function. ",(0,i.jsx)(s.a,{href:"https://github.com/apache/doris/pull/12720",children:"#12720"})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Fix lateral view explode_split with temp table bug. ",(0,i.jsx)(s.a,{href:"https://github.com/apache/doris/pull/13643",children:"#13643"})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Bucket shuffle join plan is wrong in two same table. ",(0,i.jsx)(s.a,{href:"https://github.com/apache/doris/pull/12930",children:"#12930"})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Fix bug that tablet version may be wrong when doing alter and load. ",(0,i.jsx)(s.a,{href:"https://github.com/apache/doris/pull/13070",children:"#13070"})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["BE core when load data using broker with md5sum()/sm3sum(). ",(0,i.jsx)(s.a,{href:"https://github.com/apache/doris/pull/13009",children:"#13009"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h1,{id:"upgrade-notes",children:"Upgrade Notes"}),"\n",(0,i.jsxs)(s.p,{children:["PageCache and ChunkAllocator are disabled by default to reduce memory usage and can be re-enabled by modifying the configuration items ",(0,i.jsx)(s.code,{children:"disable_storage_page_cache"})," and ",(0,i.jsx)(s.code,{children:"chunk_reserved_bytes_limit"}),"."]}),"\n",(0,i.jsx)(s.p,{children:"Storage Page Cache and Chunk Allocator cache user data chunks and memory preallocation, respectively."}),"\n",(0,i.jsx)(s.p,{children:"These two functions take up a certain percentage of memory and are not freed. This part of memory cannot be flexibly allocated, which may lead to insufficient memory for other tasks in some scenarios, affecting system stability and availability. Therefore, we disabled these two features by default in version 1.1.3."}),"\n",(0,i.jsx)(s.p,{children:"However, in some latency-sensitive reporting scenarios, turning off this feature may lead to increased query latency. If you are worried about the impact of this feature on your business after upgrade, you can add the following parameters to be.conf to keep the same behavior as the previous version."}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:"disable_storage_page_cache=false\nchunk_reserved_bytes_limit=10%\n"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"disable_storage_page_cache"}),": Whether to disable Storage Page Cache. version 1.1.2 (inclusive), the default is false, i.e., on. version 1.1.3 defaults to true, i.e., off."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"chunk_reserved_bytes_limit"}),": Chunk allocator reserved memory size. 1.1.2 (and earlier), the default is 10% of the overall memory. 1.1.3 version default is 209715200 (200MB)."]}),"\n"]})]})}function d(e={}){let{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,s,r){r.d(s,{Z:function(){return a},a:function(){return l}});var n=r(667294);let i={},t=n.createContext(i);function l(e){let s=n.useContext(t);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);