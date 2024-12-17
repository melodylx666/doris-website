"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["437861"],{129179:function(e,i,n){n.r(i),n.d(i,{metadata:()=>t,contentTitle:()=>a,default:()=>h,assets:()=>r,toc:()=>d,frontMatter:()=>s});var t=JSON.parse('{"id":"table-design/index/bloomfilter","title":"BloomFilter Index","description":"\x3c!--","source":"@site/versioned_docs/version-2.0/table-design/index/bloomfilter.md","sourceDirName":"table-design/index","slug":"/table-design/index/bloomfilter","permalink":"/docs/2.0/table-design/index/bloomfilter","draft":false,"unlisted":false,"tags":[],"version":"2.0","frontMatter":{"title":"BloomFilter Index","language":"en"},"sidebar":"docs","previous":{"title":"Inverted Index","permalink":"/docs/2.0/table-design/index/inverted-index"},"next":{"title":"N-Gram BloomFilter Index","permalink":"/docs/2.0/table-design/index/ngram-bloomfilter-index"}}'),l=n("785893"),o=n("250065");let s={title:"BloomFilter Index",language:"en"},a=void 0,r={},d=[{value:"Indexing Principles",id:"indexing-principles",level:2},{value:"Use Cases",id:"use-cases",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Creating a BloomFilter Index When Creating a Table",id:"creating-a-bloomfilter-index-when-creating-a-table",level:3},{value:"Viewing BloomFilter Indexes",id:"viewing-bloomfilter-indexes",level:3},{value:"Adding or Removing BloomFilter Indexes on an Existing Table",id:"adding-or-removing-bloomfilter-indexes-on-an-existing-table",level:3},{value:"Usage Example",id:"usage-example",level:2},{value:"Creating a BloomFilter Index",id:"creating-a-bloomfilter-index",level:3}];function c(e){let i={admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.h2,{id:"indexing-principles",children:"Indexing Principles"}),"\n",(0,l.jsx)(i.p,{children:"The BloomFilter index is a type of skip list index based on BloomFilter. Its principle is to use BloomFilter to skip data blocks that do not meet the specified conditions for equality queries, thereby reducing IO and accelerating queries."}),"\n",(0,l.jsx)(i.p,{children:"BloomFilter is a fast lookup algorithm proposed by Bloom in 1970, which uses multiple hash functions. It is commonly used in scenarios where quick determination of whether an element belongs to a set is needed without requiring 100% accuracy. BloomFilter has the following characteristics:"}),"\n",(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:"A space-efficient probabilistic data structure used to check if an element is in a set."}),"\n",(0,l.jsx)(i.li,{children:"For a membership check, BloomFilter returns one of two results: possibly in the set or definitely not in the set."}),"\n"]}),"\n",(0,l.jsx)(i.p,{children:"A BloomFilter consists of a very long binary bit array and a series of hash functions. The bit array is initially all set to 0. When an element is to be checked, it is hashed by a series of hash functions to generate a series of values, and the bits at these positions in the array are set to 1."}),"\n",(0,l.jsx)(i.p,{children:"The figure below shows an example of a BloomFilter with m=18 and k=3 (where m is the size of the bit array and k is the number of hash functions). Elements x, y, and z in the set are hashed by 3 different hash functions into the bit array. When querying element w, if any bit calculated by the hash functions is 0, then w is not in the set. Conversely, if all bits are 1, it only indicates that w may be in the set, but not definitely, due to possible hash collisions."}),"\n",(0,l.jsx)(i.p,{children:(0,l.jsx)(i.img,{alt:"Bloom_filter.svg",src:n(713274).Z+"",width:"2560",height:"960"})}),"\n",(0,l.jsx)(i.p,{children:'Thus, if all bits at the calculated positions are 1, it only indicates that the element may be in the set, not definitely, due to possible hash collisions. This is the "false positive" nature of BloomFilter. Therefore, a BloomFilter-based index can only skip data that does not meet the conditions but cannot precisely locate data that does.'}),"\n",(0,l.jsx)(i.p,{children:"The Doris BloomFilter index is built on a per-page basis, with each data block storing a BloomFilter. During writing, each value in the data block is hashed into the corresponding BloomFilter. During querying, for equality conditions, it is checked if the BloomFilter of each data block contains the value. If not, the data block is skipped, reducing IO and speeding up the query."}),"\n",(0,l.jsx)(i.h2,{id:"use-cases",children:"Use Cases"}),"\n",(0,l.jsx)(i.p,{children:"BloomFilter indexes can accelerate equality queries (including = and IN) and are effective for high cardinality fields, such as unique id fields like userid."}),"\n",(0,l.jsxs)(i.admonition,{type:"tip",children:[(0,l.jsx)(i.p,{children:"BloomFilter has the following limitations:"}),(0,l.jsxs)(i.ol,{children:["\n",(0,l.jsx)(i.li,{children:"It has no effect on queries other than in and =, such as !=, NOT IN, >, <, etc."}),"\n",(0,l.jsx)(i.li,{children:"It does not support BloomFilter indexing on columns of type Tinyint, Float, Double."}),"\n",(0,l.jsx)(i.li,{children:'It has limited acceleration effect on low cardinality fields. For example, a "gender" field with only two values will likely be included in almost every data block, making the BloomFilter index meaningless.'}),"\n"]}),(0,l.jsx)(i.p,{children:"To check the effect of a BloomFilter index on a query, you can analyze relevant metrics in the Query Profile."}),(0,l.jsxs)(i.ul,{children:["\n",(0,l.jsx)(i.li,{children:"BlockConditionsFilteredBloomFilterTime is the time consumed by the BloomFilter index."}),"\n",(0,l.jsx)(i.li,{children:"RowsBloomFilterFiltered is the number of rows filtered out by the BloomFilter. You can compare it with other Rows values to analyze the filtering effect of the BloomFilter index."}),"\n"]})]}),"\n",(0,l.jsx)(i.h2,{id:"syntax",children:"Syntax"}),"\n",(0,l.jsx)(i.h3,{id:"creating-a-bloomfilter-index-when-creating-a-table",children:"Creating a BloomFilter Index When Creating a Table"}),"\n",(0,l.jsx)(i.p,{children:'Due to historical reasons, the syntax for defining BloomFilter indexes differs from the general INDEX syntax used for inverted indexes. BloomFilter indexes are specified in the table\'s PROPERTIES using "bloom_filter_columns", which can specify one or more fields.'}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-sql",children:'PROPERTIES (\n"bloom_filter_columns" = "column_name1,column_name2"\n);\n'})}),"\n",(0,l.jsx)(i.h3,{id:"viewing-bloomfilter-indexes",children:"Viewing BloomFilter Indexes"}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-sql",children:"SHOW CREATE TABLE table_name;\n"})}),"\n",(0,l.jsx)(i.h3,{id:"adding-or-removing-bloomfilter-indexes-on-an-existing-table",children:"Adding or Removing BloomFilter Indexes on an Existing Table"}),"\n",(0,l.jsx)(i.p,{children:"Modify the table's bloom_filter_columns property via ALTER TABLE to add or remove BloomFilter indexes."}),"\n",(0,l.jsx)(i.p,{children:(0,l.jsx)(i.strong,{children:"Add a BloomFilter index for column_name3"})}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-sql",children:'ALTER TABLE table_name SET ("bloom_filter_columns" = "column_name1,column_name2,column_name3");\n'})}),"\n",(0,l.jsx)(i.p,{children:(0,l.jsx)(i.strong,{children:"Remove the BloomFilter index for column_name1"})}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-sql",children:'ALTER TABLE table_name SET ("bloom_filter_columns" = "column_name2,column_name3");\n'})}),"\n",(0,l.jsx)(i.h2,{id:"usage-example",children:"Usage Example"}),"\n",(0,l.jsx)(i.p,{children:"Here is an example of how to create a BloomFilter index in Doris."}),"\n",(0,l.jsx)(i.h3,{id:"creating-a-bloomfilter-index",children:"Creating a BloomFilter Index"}),"\n",(0,l.jsx)(i.p,{children:'The BloomFilter index in Doris is created by adding the "bloom_filter_columns" property in the CREATE TABLE statement, with k1, k2, k3 being the key columns for the BloomFilter index. For example, the following creates BloomFilter indexes on saler_id and category_id.'}),"\n",(0,l.jsx)(i.pre,{children:(0,l.jsx)(i.code,{className:"language-sql",children:'CREATE TABLE IF NOT EXISTS sale_detail_bloom  (\n    sale_date date NOT NULL COMMENT "Sale date",\n    customer_id int NOT NULL COMMENT "Customer ID",\n    saler_id int NOT NULL COMMENT "Salesperson",\n    sku_id int NOT NULL COMMENT "Product ID",\n    category_id int NOT NULL COMMENT "Product category",\n    sale_count int NOT NULL COMMENT "Sales quantity",\n    sale_price DECIMAL(12,2) NOT NULL COMMENT "Unit price",\n    sale_amt DECIMAL(20,2)  COMMENT "Total sales amount"\n)\nDUPLICATE KEY(sale_date, customer_id, saler_id, sku_id, category_id)\nDISTRIBUTED BY HASH(saler_id) BUCKETS 10\nPROPERTIES (\n"replication_num" = "1",\n"bloom_filter_columns"="saler_id,category_id"\n);\n'})})]})}function h(e={}){let{wrapper:i}={...(0,o.a)(),...e.components};return i?(0,l.jsx)(i,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},713274:function(e,i,n){n.d(i,{Z:function(){return t}});let t=n.p+"assets/images/Bloom_filter.svg-e437ea5c65c96143c00cdb97711e1b10.png"},250065:function(e,i,n){n.d(i,{Z:function(){return a},a:function(){return s}});var t=n(667294);let l={},o=t.createContext(l);function s(e){let i=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(i):{...i,...e}},[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),t.createElement(o.Provider,{value:i},e.children)}}}]);