"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["272257"],{372394:function(e,n,t){t.r(n),t.d(n,{metadata:()=>a,contentTitle:()=>s,default:()=>u,assets:()=>l,toc:()=>c,frontMatter:()=>o});var a=JSON.parse('{"id":"admin-manual/http-actions/fe/ha-action","title":"HA Action","description":"\x3c!--","source":"@site/versioned_docs/version-1.2/admin-manual/http-actions/fe/ha-action.md","sourceDirName":"admin-manual/http-actions/fe","slug":"/admin-manual/http-actions/fe/ha-action","permalink":"/docs/1.2/admin-manual/http-actions/fe/ha-action","draft":false,"unlisted":false,"tags":[],"version":"1.2","frontMatter":{"title":"HA Action","language":"en"},"sidebar":"docs","previous":{"title":"Config Action","permalink":"/docs/1.2/admin-manual/http-actions/fe/config-action"},"next":{"title":"Hardware Info Action","permalink":"/docs/1.2/admin-manual/http-actions/fe/hardware-info-action"}}'),r=t("785893"),i=t("250065");let o={title:"HA Action",language:"en"},s="HA Action",l={},c=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2}];function d(e){let n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"ha-action",children:"HA Action"})}),"\n",(0,r.jsx)(n.h2,{id:"request",children:"Request"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"GET /rest/v1/ha\n"})}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"HA Action is used to obtain the high availability group information of the FE cluster."}),"\n",(0,r.jsx)(n.h2,{id:"path-parameters",children:"Path parameters"}),"\n",(0,r.jsx)(n.p,{children:"None"}),"\n",(0,r.jsx)(n.h2,{id:"query-parameters",children:"Query parameters"}),"\n",(0,r.jsx)(n.p,{children:"None"}),"\n",(0,r.jsx)(n.h2,{id:"request-body",children:"Request body"}),"\n",(0,r.jsx)(n.p,{children:"None"}),"\n",(0,r.jsx)(n.h2,{id:"response",children:"Response"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'{\n	"msg": "success",\n	"code": 0,\n	"data": {\n		"Observernodes": [],\n		"CurrentJournalId": [{\n			"Value": 433648,\n			"Name": "FrontendRole"\n		}],\n		"Electablenodes": [{\n			"Value": "host1",\n			"Name": "host1"\n		}],\n		"allowedFrontends": [{\n			"Value": "name: 192.168.1.1_9213_1597652404352, role: FOLLOWER, 192.168.1.1:9213",\n			"Name": "192.168.1.1_9213_1597652404352"\n		}],\n		"removedFronteds": [],\n		"CanRead": [{\n			"Value": true,\n			"Name": "Status"\n		}],\n		"databaseNames": [{\n			"Value": "433436 ",\n			"Name": "DatabaseNames"\n		}],\n		"FrontendRole": [{\n			"Value": "MASTER",\n			"Name": "FrontendRole"\n		}],\n		"CheckpointInfo": [{\n			"Value": 433435,\n			"Name": "Version"\n		}, {\n			"Value": "2020-09-03T02:07:37.000+0000",\n			"Name": "lastCheckPointTime"\n		}]\n	},\n	"count": 0\n}\n'})})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return o}});var a=t(667294);let r={},i=a.createContext(r);function o(e){let n=a.useContext(i);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);