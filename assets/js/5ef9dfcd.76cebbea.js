"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["474955"],{185085:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>r,default:()=>h,assets:()=>c,toc:()=>l,frontMatter:()=>o});var s=JSON.parse('{"id":"admin-manual/http-actions/fe/system-action","title":"System Action","description":"\x3c!--","source":"@site/versioned_docs/version-1.2/admin-manual/http-actions/fe/system-action.md","sourceDirName":"admin-manual/http-actions/fe","slug":"/admin-manual/http-actions/fe/system-action","permalink":"/docs/1.2/admin-manual/http-actions/fe/system-action","draft":false,"unlisted":false,"tags":[],"version":"1.2","frontMatter":{"title":"System Action","language":"en"},"sidebar":"docs","previous":{"title":"Session Action","permalink":"/docs/1.2/admin-manual/http-actions/fe/session-action"},"next":{"title":"Colocate Meta Action","permalink":"/docs/1.2/admin-manual/http-actions/fe/colocate-meta-action"}}'),i=t("785893"),a=t("250065");let o={title:"System Action",language:"en"},r="System Action",c={},l=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2}];function d(e){let n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"system-action",children:"System Action"})}),"\n",(0,i.jsx)(n.h2,{id:"request",children:"Request"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"GET /rest/v1/system\n"})}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"System Action is used for information about the Proc system built in Doris."}),"\n",(0,i.jsx)(n.h2,{id:"path-parameters",children:"Path parameters"}),"\n",(0,i.jsx)(n.p,{children:"None"}),"\n",(0,i.jsx)(n.h2,{id:"query-parameters",children:"Query parameters"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"path"})}),"\n",(0,i.jsx)(n.p,{children:"Optional parameter, specify the path of proc"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"request-body",children:"Request body"}),"\n",(0,i.jsx)(n.p,{children:"None"}),"\n",(0,i.jsx)(n.h2,{id:"response",children:"Response"}),"\n",(0,i.jsxs)(n.p,{children:["Take ",(0,i.jsx)(n.code,{children:"/dbs/10003/10054/partitions/10053/10055"})," as an example:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'{\n	"msg": "success",\n	"code": 0,\n	"data": {\n		"href_columns": ["TabletId", "MetaUrl", "CompactionStatus"],\n		"column_names": ["TabletId", "ReplicaId", "BackendId", "SchemaHash", "Version", "VersionHash", "LstSuccessVersion", "LstSuccessVersionHash", "LstFailedVersion", "LstFailedVersionHash", "LstFailedTime", "DataSize", "RowCount", "State", "LstConsistencyCheckTime", "CheckVersion", "CheckVersionHash", "VersionCount", "PathHash", "MetaUrl", "CompactionStatus"],\n		"rows": [{\n			"SchemaHash": "1294206575",\n			"LstFailedTime": "\\\\N",\n			"LstFailedVersion": "-1",\n			"MetaUrl": "URL",\n			"__hrefPaths": ["http://192.168.100.100:8030/rest/v1/system?path=/dbs/10003/10054/partitions/10053/10055/10056", "http://192.168.100.100:8043/api/meta/header/10056", "http://192.168.100.100:8043/api/compaction/show?tablet_id=10056"],\n			"CheckVersionHash": "-1",\n			"ReplicaId": "10057",\n			"VersionHash": "4611804212003004639",\n			"LstConsistencyCheckTime": "\\\\N",\n			"LstSuccessVersionHash": "4611804212003004639",\n			"CheckVersion": "-1",\n			"Version": "6",\n			"VersionCount": "2",\n			"State": "NORMAL",\n			"BackendId": "10032",\n			"DataSize": "776",\n			"LstFailedVersionHash": "0",\n			"LstSuccessVersion": "6",\n			"CompactionStatus": "URL",\n			"TabletId": "10056",\n			"PathHash": "-3259732870068082628",\n			"RowCount": "21"\n		}]\n	},\n	"count": 1\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"column_names"})," in the data part is the header information, and ",(0,i.jsx)(n.code,{children:"href_columns"})," indicates which columns in the table are hyperlink columns. Each element in the ",(0,i.jsx)(n.code,{children:"rows"})," array represents a row. Among them, ",(0,i.jsx)(n.code,{children:"__hrefPaths"})," is not the table data, but the link URL of the hyperlink column, which corresponds to the column in ",(0,i.jsx)(n.code,{children:"href_columns"})," one by one."]})]})}function h(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return o}});var s=t(667294);let i={},a=s.createContext(i);function o(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);