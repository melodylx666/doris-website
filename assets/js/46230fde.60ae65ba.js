"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["651264"],{644076:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>r,default:()=>h,assets:()=>o,toc:()=>d,frontMatter:()=>a});var i=JSON.parse('{"id":"admin-manual/open-api/fe-http/get-small-file","title":"Get Small File Action","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/admin-manual/open-api/fe-http/get-small-file.md","sourceDirName":"admin-manual/open-api/fe-http","slug":"/admin-manual/open-api/fe-http/get-small-file","permalink":"/docs/admin-manual/open-api/fe-http/get-small-file","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"Get Small File Action","language":"en"},"sidebar":"docs","previous":{"title":"Get FE log file","permalink":"/docs/admin-manual/open-api/fe-http/get-log-file-action"},"next":{"title":"Health Action","permalink":"/docs/admin-manual/open-api/fe-http/health-action"}}'),l=t("785893"),s=t("250065");let a={title:"Get Small File Action",language:"en"},r="Get Small File",o={},d=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2},{value:"Examples",id:"examples",level:2}];function c(e){let n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"get-small-file",children:"Get Small File"})}),"\n",(0,l.jsx)(n.h2,{id:"request",children:"Request"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"GET /api/get_small_file"})}),"\n",(0,l.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(n.p,{children:"Through the file id, download the file in the small file manager."}),"\n",(0,l.jsx)(n.h2,{id:"path-parameters",children:"Path parameters"}),"\n",(0,l.jsx)(n.p,{children:"None"}),"\n",(0,l.jsx)(n.h2,{id:"query-parameters",children:"Query parameters"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"token"})}),"\n",(0,l.jsxs)(n.p,{children:["The token of the cluster. It can be viewed in the file ",(0,l.jsx)(n.code,{children:"doris-meta/image/VERSION"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.code,{children:"file_id"})}),"\n",(0,l.jsxs)(n.p,{children:["The file id displayed in the file manager. The file id can be viewed with the ",(0,l.jsx)(n.code,{children:"SHOW FILE"})," command."]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"request-body",children:"Request body"}),"\n",(0,l.jsx)(n.p,{children:"None"}),"\n",(0,l.jsx)(n.h2,{id:"response",children:"Response"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"< HTTP/1.1 200\n< Vary: Origin\n< Vary: Access-Control-Request-Method\n< Vary: Access-Control-Request-Headers\n< Content-Disposition: attachment;fileName=ca.pem\n< Content-Type: application/json;charset=UTF-8\n< Transfer-Encoding: chunked\n\n... File Content ...\n"})}),"\n",(0,l.jsx)(n.p,{children:"If there is an error, it returns:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:'{\n	"msg": "File not found or is not content",\n	"code": 1,\n	"data": null,\n	"count": 0\n}\n'})}),"\n",(0,l.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Download the file with the specified id"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"GET /api/get_small_file?token=98e8c0a6-3a41-48b8-a72b-0432e42a7fe5&file_id=11002\n\nResponse:\n\n< HTTP/1.1 200\n< Vary: Origin\n< Vary: Access-Control-Request-Method\n< Vary: Access-Control-Request-Headers\n< Content-Disposition: attachment;fileName=ca.pem\n< Content-Type: application/json;charset=UTF-8\n< Transfer-Encoding: chunked\n\n... File Content ...\n"})}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return a}});var i=t(667294);let l={},s=i.createContext(l);function a(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);