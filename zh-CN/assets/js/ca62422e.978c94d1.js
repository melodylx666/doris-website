"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["925354"],{142432:function(e,n,t){t.r(n),t.d(n,{metadata:()=>i,contentTitle:()=>o,default:()=>u,assets:()=>l,toc:()=>c,frontMatter:()=>r});var i=JSON.parse('{"id":"admin-manual/open-api/fe-http/config-action","title":"Config Action","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-2.1/admin-manual/open-api/fe-http/config-action.md","sourceDirName":"admin-manual/open-api/fe-http","slug":"/admin-manual/open-api/fe-http/config-action","permalink":"/zh-CN/docs/admin-manual/open-api/fe-http/config-action","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"Config Action","language":"zh-CN"},"sidebar":"docs","previous":{"title":"\u603B\u89C8","permalink":"/zh-CN/docs/admin-manual/open-api/overview"},"next":{"title":"HA Action","permalink":"/zh-CN/docs/admin-manual/open-api/fe-http/ha-action"}}'),a=t("785893"),s=t("250065");let r={title:"Config Action",language:"zh-CN"},o=void 0,l={},c=[{value:"Request",id:"request",level:2},{value:"Description",id:"description",level:2},{value:"Path parameters",id:"path-parameters",level:2},{value:"Query parameters",id:"query-parameters",level:2},{value:"Request body",id:"request-body",level:2},{value:"Response",id:"response",level:2}];function d(e){let n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"request",children:"Request"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"GET /rest/v1/config/fe/\n"})}),"\n",(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(n.p,{children:"Config Action \u7528\u4E8E\u83B7\u53D6\u5F53\u524D FE \u7684\u914D\u7F6E\u4FE1\u606F"}),"\n",(0,a.jsx)(n.h2,{id:"path-parameters",children:"Path parameters"}),"\n",(0,a.jsx)(n.p,{children:"\u65E0"}),"\n",(0,a.jsx)(n.h2,{id:"query-parameters",children:"Query parameters"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"conf_item"})}),"\n",(0,a.jsx)(n.p,{children:"\u53EF\u9009\u53C2\u6570\u3002\u8FD4\u56DE FE \u7684\u914D\u7F6E\u4FE1\u606F\u4E2D\u7684\u6307\u5B9A\u9879\u3002"}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"request-body",children:"Request body"}),"\n",(0,a.jsx)(n.p,{children:"\u65E0"}),"\n",(0,a.jsx)(n.h2,{id:"response",children:"Response"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'{\n	"msg": "success",\n	"code": 0,\n	"data": {\n		"column_names": ["Name", "Value"],\n		"rows": [{\n			"Value": "DAY",\n			"Name": "sys_log_roll_interval"\n		}, {\n			"Value": "23",\n			"Name": "consistency_check_start_time"\n		}, {\n			"Value": "4096",\n			"Name": "max_mysql_service_task_threads_num"\n		}, {\n			"Value": "1000",\n			"Name": "max_unfinished_load_job"\n		}, {\n			"Value": "100",\n			"Name": "max_routine_load_job_num"\n		}, {\n			"Value": "SYNC",\n			"Name": "master_sync_policy"\n		}]\n	},\n	"count": 0\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["\u8FD4\u56DE\u7ED3\u679C\u540C ",(0,a.jsx)(n.code,{children:"System Action"}),"\u3002\u662F\u4E00\u4E2A\u8868\u683C\u7684\u63CF\u8FF0\u3002"]})]})}function u(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return r}});var i=t(667294);let a={},s=i.createContext(a);function r(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);