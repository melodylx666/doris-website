"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["229021"],{776819:function(e,n,t){t.r(n),t.d(n,{metadata:()=>a,contentTitle:()=>o,default:()=>p,assets:()=>c,toc:()=>l,frontMatter:()=>i});var a=JSON.parse('{"id":"admin-manual/open-api/fe-http/check-storage-type-action","title":"Check Storage Type Action","description":"\x3c!--","source":"@site/versioned_docs/version-3.0/admin-manual/open-api/fe-http/check-storage-type-action.md","sourceDirName":"admin-manual/open-api/fe-http","slug":"/admin-manual/open-api/fe-http/check-storage-type-action","permalink":"/docs/3.0/admin-manual/open-api/fe-http/check-storage-type-action","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"Check Storage Type Action","language":"en"},"sidebar":"docs","previous":{"title":"Check Decommission Action","permalink":"/docs/3.0/admin-manual/open-api/fe-http/check-decommission-action"},"next":{"title":"Connection Action","permalink":"/docs/3.0/admin-manual/open-api/fe-http/connection-action"}}'),s=t("785893"),r=t("250065");let i={title:"Check Storage Type Action",language:"en"},o="Check Storage Type Action",c={},l=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}];function d(e){let n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"check-storage-type-action",children:"Check Storage Type Action"})}),"\n",(0,s.jsx)(n.h2,{id:"request",children:"Request"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"GET /api/_check_storagetype"})}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"It is used to check whether the storage format of the table under the specified database is the row storage format. (The row format is deprecated)"}),"\n",(0,s.jsx)(n.h2,{id:"path-parameters",children:"Path parameters"}),"\n",(0,s.jsx)(n.p,{children:"None"}),"\n",(0,s.jsx)(n.h2,{id:"query-parameters",children:"Query parameters"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"db"})}),"\n",(0,s.jsx)(n.p,{children:"Specify the database"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"request-body",children:"Request body"}),"\n",(0,s.jsx)(n.p,{children:"None"}),"\n",(0,s.jsx)(n.h2,{id:"response",children:"Response"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\n	"msg": "success",\n	"code": 0,\n	"data": {\n		"tbl2": {},\n		"tbl1": {}\n	},\n	"count": 0\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"If there is content after the table name, the base or rollup table whose storage format is row storage will be displayed."}),"\n",(0,s.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Check whether the storage format of the following table of the specified database is row format"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'GET /api/_check_storagetype\n\nResponse:\n{\n	"msg": "success",\n	"code": 0,\n	"data": {\n		"tbl2": {},\n		"tbl1": {}\n	},\n	"count": 0\n}\n'})}),"\n"]}),"\n"]})]})}function p(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return i}});var a=t(667294);let s={},r=a.createContext(s);function i(e){let n=a.useContext(r);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);