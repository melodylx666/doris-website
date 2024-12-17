"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["113740"],{996731:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>l,default:()=>u,assets:()=>o,toc:()=>d,frontMatter:()=>r});var i=JSON.parse('{"id":"sql-manual/sql-functions/aggregate-functions/bitmap-union","title":"BITMAP_UNION","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/sql-manual/sql-functions/aggregate-functions/bitmap-union.md","sourceDirName":"sql-manual/sql-functions/aggregate-functions","slug":"/sql-manual/sql-functions/aggregate-functions/bitmap-union","permalink":"/docs/sql-manual/sql-functions/aggregate-functions/bitmap-union","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"BITMAP_UNION","language":"en"},"sidebar":"docs","previous":{"title":"GROUP_CONCAT","permalink":"/docs/sql-manual/sql-functions/aggregate-functions/group-concat"},"next":{"title":"HLL_UNION_AGG","permalink":"/docs/sql-manual/sql-functions/aggregate-functions/hll-union-agg"}}'),a=t("785893"),s=t("250065");let r={title:"BITMAP_UNION",language:"en"},l=void 0,o={},d=[{value:"BITMAP_UNION",id:"bitmap_union",level:2},{value:"description",id:"description",level:3},{value:"example",id:"example",level:3},{value:"Create table",id:"create-table",level:4},{value:"Data Load",id:"data-load",level:4},{value:"Stream Load",id:"stream-load",level:5},{value:"Insert Into",id:"insert-into",level:5},{value:"Data Query",id:"data-query",level:4},{value:"Syntax",id:"syntax",level:5},{value:"Example",id:"example-1",level:5},{value:"keywords",id:"keywords",level:3}];function c(e){let n={code:"code",h2:"h2",h3:"h3",h4:"h4",h5:"h5",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"bitmap_union",children:"BITMAP_UNION"}),"\n",(0,a.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,a.jsx)(n.h3,{id:"example",children:"example"}),"\n",(0,a.jsx)(n.h4,{id:"create-table",children:"Create table"}),"\n",(0,a.jsx)(n.p,{children:"The aggregation model needs to be used when creating the table. The data type is bitmap and the aggregation function is bitmap_union."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'CREATE TABLE `pv_bitmap` (\n\xa0\xa0`dt` int (11) NULL COMMENT" ",\n\xa0\xa0`page` varchar (10) NULL COMMENT" ",\n\xa0\xa0`user_id` bitmap BITMAP_UNION NULL COMMENT" "\n) ENGINE = OLAP\nAGGREGATE KEY (`dt`,` page`)\nCOMMENT "OLAP"\nDISTRIBUTED BY HASH (`dt`) BUCKETS 2;\n'})}),"\n",(0,a.jsx)(n.p,{children:"Note: When the amount of data is large, it is best to create a corresponding rollup table for high-frequency bitmap_union queries"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"ALTER TABLE pv_bitmap ADD ROLLUP pv (page, user_id);\n"})}),"\n",(0,a.jsx)(n.h4,{id:"data-load",children:"Data Load"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"TO_BITMAP (expr)"}),": Convert 0 ~ 18446744073709551615 unsigned bigint to bitmap"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"BITMAP_EMPTY ()"}),": Generate empty bitmap columns, used for insert or import to fill the default value"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"BITMAP_HASH (expr)"})," or ",(0,a.jsx)(n.code,{children:"BITMAP_HASH64 (expr)"}),": Convert any type of column to a bitmap by hashing"]}),"\n",(0,a.jsx)(n.h5,{id:"stream-load",children:"Stream Load"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'cat data | curl --location-trusted -u user: passwd -T--H "columns: dt, page, user_id, user_id = to_bitmap (user_id)" http: // host: 8410 / api / test / testDb / _stream_load\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'cat data | curl --location-trusted -u user: passwd -T--H "columns: dt, page, user_id, user_id = bitmap_hash (user_id)" http: // host: 8410 / api / test / testDb / _stream_load\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'cat data | curl --location-trusted -u user: passwd -T--H "columns: dt, page, user_id, user_id = bitmap_empty ()" http: // host: 8410 / api / test / testDb / _stream_load\n'})}),"\n",(0,a.jsx)(n.h5,{id:"insert-into",children:"Insert Into"}),"\n",(0,a.jsx)(n.p,{children:"id2's column type is bitmap"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"insert into bitmap_table1 select id, id2 from bitmap_table2;\n"})}),"\n",(0,a.jsx)(n.p,{children:"id2's column type is bitmap"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"INSERT INTO bitmap_table1 (id, id2) VALUES (1001, to_bitmap (1000)), (1001, to_bitmap (2000));\n"})}),"\n",(0,a.jsx)(n.p,{children:"id2's column type is bitmap"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"insert into bitmap_table1 select id, bitmap_union (id2) from bitmap_table2 group by id;\n"})}),"\n",(0,a.jsx)(n.p,{children:"id2's column type is int"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"insert into bitmap_table1 select id, to_bitmap (id2) from table;\n"})}),"\n",(0,a.jsx)(n.p,{children:"id2's column type is String"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"insert into bitmap_table1 select id, bitmap_hash (id_string) from table;\n"})}),"\n",(0,a.jsx)(n.h4,{id:"data-query",children:"Data Query"}),"\n",(0,a.jsx)(n.h5,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"BITMAP_UNION (expr)"}),": Calculate the union of two Bitmaps. The return value is the new Bitmap value."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"BITMAP_UNION_COUNT (expr)"}),": Calculate the cardinality of the union of two Bitmaps, equivalent to BITMAP_COUNT (BITMAP_UNION (expr)). It is recommended to use the BITMAP_UNION_COUNT function first, its performance is better than BITMAP_COUNT (BITMAP_UNION (expr))."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"BITMAP_UNION_INT (expr)"}),": Count the number of different values \u200B\u200Bin columns of type TINYINT, SMALLINT and INT, return the sum of COUNT (DISTINCT expr) same"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"INTERSECT_COUNT (bitmap_column_to_count, filter_column, filter_values \u200B\u200B...)"}),": The calculation satisfies\nfilter_column The cardinality of the intersection of multiple bitmaps of the filter.\nbitmap_column_to_count is a column of type bitmap, filter_column is a column of varying dimensions, and filter_values \u200B\u200Bis a list of dimension values."]}),"\n",(0,a.jsx)(n.h5,{id:"example-1",children:"Example"}),"\n",(0,a.jsx)(n.p,{children:"The following SQL uses the pv_bitmap table above as an example:"}),"\n",(0,a.jsx)(n.p,{children:"Calculate the deduplication value for user_id:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"select bitmap_union_count (user_id) from pv_bitmap;\n\nselect bitmap_count (bitmap_union (user_id)) from pv_bitmap;\n"})}),"\n",(0,a.jsx)(n.p,{children:"Calculate the deduplication value of id:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"select bitmap_union_int (id) from pv_bitmap;\n"})}),"\n",(0,a.jsx)(n.p,{children:"Calculate the retention of user_id:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"select intersect_count (user_id, page, 'meituan') as meituan_uv,\nintersect_count (user_id, page, 'waimai') as waimai_uv,\nintersect_count (user_id, page, 'meituan', 'waimai') as retention // Number of users appearing on both 'meituan' and 'waimai' pages\nfrom pv_bitmap\nwhere page in ('meituan', 'waimai');\n"})}),"\n",(0,a.jsx)(n.h3,{id:"keywords",children:"keywords"}),"\n",(0,a.jsx)(n.p,{children:"BITMAP, BITMAP_COUNT, BITMAP_EMPTY, BITMAP_UNION, BITMAP_UNION_INT, TO_BITMAP, BITMAP_UNION_COUNT, INTERSECT_COUNT"})]})}function u(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return r}});var i=t(667294);let a={},s=i.createContext(a);function r(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);