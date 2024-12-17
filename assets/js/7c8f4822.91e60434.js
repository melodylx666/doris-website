"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["21691"],{367782:function(e,a,n){n.r(a),n.d(a,{metadata:()=>c,contentTitle:()=>i,default:()=>d,assets:()=>s,toc:()=>l,frontMatter:()=>o});var c=JSON.parse('{"id":"admin-manual/memory-management/memory-analysis/doris-cache-memory-analysis","title":"Cache Memory Analysis","description":"\x3c!--","source":"@site/docs/admin-manual/memory-management/memory-analysis/doris-cache-memory-analysis.md","sourceDirName":"admin-manual/memory-management/memory-analysis","slug":"/admin-manual/memory-management/memory-analysis/doris-cache-memory-analysis","permalink":"/docs/dev/admin-manual/memory-management/memory-analysis/doris-cache-memory-analysis","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Cache Memory Analysis","language":"en"},"sidebar":"docs","previous":{"title":"Global Memory Analysis","permalink":"/docs/dev/admin-manual/memory-management/memory-analysis/global-memory-analysis"},"next":{"title":"Metadata Memory Analysis","permalink":"/docs/dev/admin-manual/memory-management/memory-analysis/metadata-memory-analysis"}}'),r=n("785893"),t=n("250065");let o={title:"Cache Memory Analysis",language:"en"},i=void 0,s={},l=[{value:"Doris Cache Type",id:"doris-cache-type",level:2},{value:"Doris Cache View Method",id:"doris-cache-view-method",level:2},{value:"Doris Cache Memory Analysis",id:"doris-cache-memory-analysis",level:2},{value:"DataPageCache uses more memory",id:"datapagecache-uses-more-memory",level:3},{value:"SegmentCache uses a lot of memory",id:"segmentcache-uses-a-lot-of-memory",level:3},{value:"PKIndexPageCache uses a lot of memory",id:"pkindexpagecache-uses-a-lot-of-memory",level:3}];function h(e){let a={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.p,{children:"The caches managed by Doris are currently all LRU elimination strategies, and all support controlling the capacity and elimination time through parameters separately."}),"\n",(0,r.jsx)(a.h2,{id:"doris-cache-type",children:"Doris Cache Type"}),"\n",(0,r.jsxs)(a.ol,{children:["\n",(0,r.jsx)(a.li,{children:"Page Cache"}),"\n"]}),"\n",(0,r.jsx)(a.p,{children:"Used to speed up data scanning."}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{children:"- DataPageCache: Cache data Page.\n- IndexPageCache: Cache data Page index.\n- PKIndexPageCache: Cache Page primary key index.\n"})}),"\n",(0,r.jsxs)(a.ol,{start:"2",children:["\n",(0,r.jsx)(a.li,{children:"Metadata Cache"}),"\n"]}),"\n",(0,r.jsx)(a.p,{children:"Used to speed up metadata reading."}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{children:"- SegmentCache: Cache open Segments, such as index information.\n- SchemaCache: Cache Rowset Schema.\n- TabletSchemaCache: Cache Tablet Schema.\n- CreateTabletRRIdxCache: Cache Create Tabelt index.\n- MowTabletVersionCache: Cache Mow Tablet Version.\n- MowDeleteBitmapAggCache: Cache Mow DeleteBitmap.\n"})}),"\n",(0,r.jsxs)(a.ol,{start:"3",children:["\n",(0,r.jsx)(a.li,{children:"Cloud Cache"}),"\n"]}),"\n",(0,r.jsx)(a.p,{children:"A dedicated cache on the cloud."}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{children:"- CloudTabletCache: Cache Tablet on the Cloud.\n- CloudTxnDeleteBitmapCache: Cache DeleteBitmap on Cloud.\n"})}),"\n",(0,r.jsxs)(a.ol,{start:"4",children:["\n",(0,r.jsx)(a.li,{children:"Inverted Index Cache"}),"\n"]}),"\n",(0,r.jsx)(a.p,{children:"Speed \u200B\u200Bup inverted index."}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{children:"- InvertedIndexSearcherCache\n- InvertedIndexQueryCache\n"})}),"\n",(0,r.jsxs)(a.ol,{start:"5",children:["\n",(0,r.jsx)(a.li,{children:"Point Query Cache"}),"\n"]}),"\n",(0,r.jsx)(a.p,{children:"Speed \u200B\u200Bup point query execution, mainly used for log analysis."}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{children:"- PointQueryRowCache\n- PointQueryLookupConnectionCache\n"})}),"\n",(0,r.jsxs)(a.ol,{start:"6",children:["\n",(0,r.jsx)(a.li,{children:"Other Cache"}),"\n"]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{children:"- FileCache: File cache used by external table queries and Cloud.\n- CommonObjLRUCache\n- LastSuccessChannelCache\n"})}),"\n",(0,r.jsx)(a.h2,{id:"doris-cache-view-method",children:"Doris Cache View Method"}),"\n",(0,r.jsx)(a.p,{children:"There are three ways to view Doris Cache related indicators."}),"\n",(0,r.jsxs)(a.ol,{children:["\n",(0,r.jsx)(a.li,{children:"Doris BE Metrics"}),"\n"]}),"\n",(0,r.jsxs)(a.p,{children:["Web page ",(0,r.jsx)(a.code,{children:"http://http://{be_host}:{be_web_server_port}/metrics"})," can see BE process memory monitoring (Metrics), including each cache capacity, usage, number of elements, search and hit times and other indicators."]}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{children:'- `doris_be_cache_capacity{name="TabletSchemaCache"} 102400`: Cache capacity, two limiting methods: memory size or number of elements.\n- `doris_be_cache_usage{name="TabletSchemaCache"} 40838`: Cache usage, memory size or number of elements, corresponding to the limit of cache capacity.\n- `doris_be_cache_usage_ratio{name="TabletSchemaCache"} 0.398809`: Cache usage, equal to `(cache_usage / cache_capacity)`.\n- `doris_be_cache_element_count{name="TabletSchemaCache"} 1628`: Number of cache elements, equal to Cache Usage when the cache capacity limits the number of elements.\n- `doris_be_cache_lookup_count{name="TabletSchemaCache"} 63393`: Number of cache lookups.\n- `doris_be_cache_hit_count{name="TabletSchemaCache"} 61765`: Number of hits when looking up the cache.\n- `doris_be_cache_hit_ratio{name="TabletSchemaCache"} 0.974319`: Hit ratio, equal to `(hit_count / lookup_count)`\n'})}),"\n",(0,r.jsxs)(a.ol,{start:"2",children:["\n",(0,r.jsx)(a.li,{children:"Doris BE Bvar"}),"\n"]}),"\n",(0,r.jsxs)(a.p,{children:["Web page ",(0,r.jsx)(a.code,{children:"http://http://{be_host}:{brpc_port}/vars/*cache*"})," can show some unique metrics of some caches."]}),"\n",(0,r.jsxs)(a.blockquote,{children:["\n",(0,r.jsx)(a.p,{children:"In the future, the indicators in Doris BE Metrics will be moved to Doris BE Bvar."}),"\n"]}),"\n",(0,r.jsxs)(a.ol,{start:"3",children:["\n",(0,r.jsx)(a.li,{children:"Memory Trakcer"}),"\n"]}),"\n",(0,r.jsxs)(a.p,{children:["To view the memory size occupied by each cache in real time, refer to ",(0,r.jsx)(a.a,{href:"/docs/dev/admin-manual/memory-management/memory-analysis/global-memory-analysis",children:"Global Memory Analysis"}),". When there is a memory error, you can find the ",(0,r.jsx)(a.code,{children:"Memory Tracker Summary"})," in the ",(0,r.jsx)(a.code,{children:"be/log/be.INFO"})," log, which contains the cache memory size at that time."]}),"\n",(0,r.jsx)(a.h2,{id:"doris-cache-memory-analysis",children:"Doris Cache Memory Analysis"}),"\n",(0,r.jsx)(a.p,{children:"There are various caches when Doris BE is running. Usually, there is no need to pay attention to the cache memory, because when the BE process has insufficient available memory, the memory GC will be triggered to clean up the cache first."}),"\n",(0,r.jsx)(a.p,{children:"However, if the cache is too large, it will increase the pressure of memory GC, increase the risk of insufficient available memory for query or load error processes, and increase the risk of BE process OOM Crash. So if the memory is constantly tight, you can consider lowering the upper limit of the cache, closing the cache, or reducing the survival time of the cache entry. A smaller cache may reduce query performance in some scenarios, but it is usually tolerable in a production environment. After adjustment, you can observe the query and load performance for a period of time."}),"\n",(0,r.jsxs)(a.blockquote,{children:["\n",(0,r.jsx)(a.p,{children:"Before Doris 2.1, Memory GC was not perfect. When the memory was insufficient, the cache might not be released in time. If the memory was constantly tight, you often had to consider manually lowering the cache limit."}),"\n"]}),"\n",(0,r.jsxs)(a.p,{children:["After Doris 2.1.6, if you want to manually clean up all caches during BE operation, execute ",(0,r.jsx)(a.code,{children:"curl http://{be_host}:{be_web_server_port}/api/clear_cache/all"}),", and the released memory size will be returned."]}),"\n",(0,r.jsx)(a.p,{children:"The following analyzes the situation where different caches use more memory."}),"\n",(0,r.jsx)(a.h3,{id:"datapagecache-uses-more-memory",children:"DataPageCache uses more memory"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:["After Doris 2.1.6, execute ",(0,r.jsx)(a.code,{children:"curl http://{be_host}:{be_web_server_port}/api/clear_cache/DataPageCache"})," to manually clean up during BE operation."]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:["Execute ",(0,r.jsx)(a.code,{children:"curl -X POST http://{be_host}:{be_web_server_port}/api/update_config?disable_storage_page_cache=true"})," to disable DataPageCache for the running BE, and clear it after a maximum of 10 minutes by default. However, this is a temporary method. DataPageCache will take effect again after BE restarts."]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:["If you are sure that you want to reduce the memory usage of DataPageCache for a long time, refer to ",(0,r.jsx)(a.a,{href:"/docs/dev/admin-manual/config/be-config",children:"BE Configuration Items"}),", reduce ",(0,r.jsx)(a.code,{children:"storage_page_cache_limit"})," in ",(0,r.jsx)(a.code,{children:"conf/be.conf"})," to reduce the capacity of DataPageCache, or reduce ",(0,r.jsx)(a.code,{children:"data_page_cache_stale_sweep_time_sec"})," to reduce the effective time of DataPageCache cache, or increase ",(0,r.jsx)(a.code,{children:"disable_storage_page_cache=true"})," to disable DataPageCache, and then restart the BE process."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(a.h3,{id:"segmentcache-uses-a-lot-of-memory",children:"SegmentCache uses a lot of memory"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:["After Doris 2.1.6, execute ",(0,r.jsx)(a.code,{children:"curl http://{be_host}:{be_web_server_port}/api/clear_cache/SegmentCache"})," to manually clean up during BE operation."]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:["Execute ",(0,r.jsx)(a.code,{children:"curl -X POST http:/{be_host}:{be_web_server_port}/api/update_config?disable_segment_cache=true"})," to disable SegmentCache for the running BE, and clear it after a maximum of 10 minutes by default, but this is a temporary method, and SegmentCache will take effect again after BE restarts."]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:["If you are sure that you want to reduce the memory usage of SegmentCache for a long time, refer to ",(0,r.jsx)(a.a,{href:"/docs/dev/admin-manual/config/be-config",children:"BE Configuration Items"}),", adjust ",(0,r.jsx)(a.code,{children:"segment_cache_capacity"})," or ",(0,r.jsx)(a.code,{children:"segment_cache_memory_percentage"})," in ",(0,r.jsx)(a.code,{children:"conf/be.conf"})," to reduce the capacity of SegmentCache, or reduce ",(0,r.jsx)(a.code,{children:"tablet_rowset_stale_sweep_time_sec"})," to reduce the effective time of SegmentCache cache, or add ",(0,r.jsx)(a.code,{children:"disable_segment_cache=true"})," in ",(0,r.jsx)(a.code,{children:"conf/be.conf"})," to disable SegmentCache and restart the BE process."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(a.h3,{id:"pkindexpagecache-uses-a-lot-of-memory",children:"PKIndexPageCache uses a lot of memory"}),"\n",(0,r.jsxs)(a.ul,{children:["\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:["After Doris 2.1.6, execute ",(0,r.jsx)(a.code,{children:"curl http://{be_host}:{be_web_server_port}/api/clear_cache/PKIndexPageCache"})," to manually clean up during BE operation."]}),"\n"]}),"\n",(0,r.jsxs)(a.li,{children:["\n",(0,r.jsxs)(a.p,{children:["Refer to ",(0,r.jsx)(a.a,{href:"/docs/dev/admin-manual/config/be-config",children:"BE configuration items"}),", reduce the capacity of PKIndexPageCache by lowering ",(0,r.jsx)(a.code,{children:"pk_storage_page_cache_limit"})," in ",(0,r.jsx)(a.code,{children:"conf/be.conf"}),", or reduce the effective time of PKIndexPageCache by lowering ",(0,r.jsx)(a.code,{children:"pk_index_page_cache_stale_sweep_time_sec"}),", or add ",(0,r.jsx)(a.code,{children:"disable_pk_storage_page_cache=true"})," in ",(0,r.jsx)(a.code,{children:"conf/be.conf"})," to disable PKIndexPageCache, and then restart the BE process."]}),"\n"]}),"\n"]})]})}function d(e={}){let{wrapper:a}={...(0,t.a)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},250065:function(e,a,n){n.d(a,{Z:function(){return i},a:function(){return o}});var c=n(667294);let r={},t=c.createContext(r);function o(e){let a=c.useContext(t);return c.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),c.createElement(t.Provider,{value:a},e.children)}}}]);