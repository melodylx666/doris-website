"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["381639"],{362953:function(e,n,i){i.r(n),i.d(n,{metadata:()=>t,contentTitle:()=>o,default:()=>h,assets:()=>a,toc:()=>c,frontMatter:()=>r});var t=JSON.parse('{"id":"admin-manual/resource-admin/workload-policy","title":"Workload Policy","description":"\x3c!--","source":"@site/versioned_docs/version-2.1/admin-manual/resource-admin/workload-policy.md","sourceDirName":"admin-manual/resource-admin","slug":"/admin-manual/resource-admin/workload-policy","permalink":"/docs/admin-manual/resource-admin/workload-policy","draft":false,"unlisted":false,"tags":[],"version":"2.1","frontMatter":{"title":"Workload Policy","language":"en"},"sidebar":"docs","previous":{"title":"Grouping Workload Groups","permalink":"/docs/admin-manual/resource-admin/group-workload-groups"},"next":{"title":"Workload Analysis","permalink":"/docs/admin-manual/resource-admin/workload-analysis"}}'),s=i("785893"),l=i("250065");let r={title:"Workload Policy",language:"en"},o=void 0,a={},c=[{value:"Backgroup",id:"backgroup",level:2},{value:"Basic Concepts",id:"basic-concepts",level:2},{value:"Basic Usage",id:"basic-usage",level:2},{value:"Policy used in FE",id:"policy-used-in-fe",level:3},{value:"Policy used in BE",id:"policy-used-in-be",level:3},{value:"Properties",id:"properties",level:3},{value:"Attention",id:"attention",level:3},{value:"Example",id:"example",level:2},{value:"Test",id:"test",level:2},{value:"1 set session variables",id:"1-set-session-variables",level:3},{value:"2 big query fusing test",id:"2-big-query-fusing-test",level:3}];function d(e){let n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.admonition,{title:"Tips",type:"tip",children:(0,s.jsx)(n.p,{children:"This feature is supported since the Apache Doris 1.2.3 version"})}),"\n",(0,s.jsx)(n.h2,{id:"backgroup",children:"Backgroup"}),"\n",(0,s.jsx)(n.p,{children:"The Workload Group solves the problem of isolation between different workload, but it cannot solve negative impact of large queries on stability within the same Group. When users encounter large queries that affect cluster stability, they can only manually handle them."}),"\n",(0,s.jsx)(n.p,{children:"Therefore, Doris has implemented Workload Policy, which supports the automation of query load management, such as automatically canceling queries with running time exceeding 5 seconds."}),"\n",(0,s.jsx)(n.h2,{id:"basic-concepts",children:"Basic Concepts"}),"\n",(0,s.jsx)(n.p,{children:"Provide an example of Workload Policy"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"create workload policy test_cancel_policy\nconditions(query_time > 1000)\nactions(cancel_query) \nproperties('enabled'='true'); \n"})}),"\n",(0,s.jsx)(n.p,{children:"Workload Policy mainly includes the following concepts:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"policy, user-defined policies, Contains conditions for triggering policies and actions after triggering policies."}),"\n",(0,s.jsx)(n.li,{children:"conditions, represents the triggering conditions of the policy.A policy can have multiple conditions, and there is an AND relationship between multiple conditions."}),"\n",(0,s.jsxs)(n.li,{children:["actions, the action works when a policy is triggered, such as canceling a query, currently only a policy can only have one action (except for ",(0,s.jsx)(n.code,{children:"set_session_variable"}),")."]}),"\n",(0,s.jsx)(n.li,{children:"properties, defined the properties of the current policy, including whether it is enabled and its priority."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The meaning of the policy in the above example is to create a policy named test_cancel_policy, which will cancel queries in the cluster that have been running for more than 1 second, and it's enabled.\nCREATE POLICY needs admin_priv."}),"\n",(0,s.jsx)(n.h2,{id:"basic-usage",children:"Basic Usage"}),"\n",(0,s.jsx)(n.p,{children:"Due to the fact that some actions can only take effect in FE and others can only take effect in BE, so the policy also needs to be distinguished between the policy of FE and the policy of BE."}),"\n",(0,s.jsx)(n.h3,{id:"policy-used-in-fe",children:"Policy used in FE"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Condition\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"username, When the username of a query is a certain value, the corresponding action will be triggered."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Action\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["set_session_variable, This action can execute a statement that sets session variable. The same policy can have multiple ",(0,s.jsx)(n.code,{children:"set_session_variable"}),", which means that a policy can execute multiple statements that modify the session variable."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The policy used in FE is mainly used to modify the session variable, and currently does not support the ",(0,s.jsx)(n.code,{children:"set global"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"policy-used-in-be",children:"Policy used in BE"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Condition"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"be_scan_rows, The number of rows scanned by an SQL within a single BE process, if the SQL is executed concurrently on the BE, it is the cumulative value of multiple concurrency."}),"\n",(0,s.jsx)(n.li,{children:"be_scan_bytes, The number of bytes scanned by an SQL within a single BE process, if the SQL is executed concurrently on the BE, it is the cumulative value of multiple concurrency, measured in bytes."}),"\n",(0,s.jsx)(n.li,{children:"query_time, The running time of an SQL on a single BE process, measured in milliseconds."}),"\n",(0,s.jsx)(n.li,{children:"query_be_memory_bytes, supported since version 2.1.5, The memory used by an SQL within a BE process, if the SQL is executed concurrently on the BE, it is the cumulative value of multiple concurrency, measured in bytes."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Action"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"cancel_query, cancel query"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"At present, BE's policy is mainly used for managing BE workload, such as canceling a query when the scan data volume is too large or the query time is too long."}),"\n",(0,s.jsx)(n.h3,{id:"properties",children:"Properties"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"enabled, the value is either true or false. The default value is true, indicating that the current policy is enabled, while false indicates that the current policy is disabled."}),"\n",(0,s.jsx)(n.li,{children:"priority, the value range is a positive integer from 0 to 100, with a default value of 0. The higher the value, the higher the priority of the policy. The main function of this attribute is to select the policy with the highest priority when multiple policies are matched."}),"\n",(0,s.jsx)(n.li,{children:"workload_group, A policy can be bound to a workload group, indicating that this policy only applies to a certain workload group.The default value is empty, which means it will take effect for all queries."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"attention",children:"Attention"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Conditions and actions of the same policy are either used in FE or used in BE at the same time, for example, ",(0,s.jsx)(n.code,{children:"set_session_variable"})," and ",(0,s.jsx)(n.code,{children:"cancel_query"})," cannot be configured into the same policy. Condition ",(0,s.jsx)(n.code,{children:"be_scan_rows"})," and condition ",(0,s.jsx)(n.code,{children:"username"})," cannot be configured into the same policy."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Due to the current policy being executed by asynchronous threads at fixed time intervals, there is a certain lag in the effectiveness of the policy. For example, if a user has configured a strategy of canceling queries when the number of scan rows exceeds one million, and the cluster resources are relatively idle at this time, it is possible that the query may have ended before the cancel policy takes effect. At present, the time interval is 500ms, which means that queries with too short running time may bypass policy checks."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"The currently supported workload types include select/insert select/stream load/broker load/route load."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"A query may match multiple policies, but only the policy with the highest priority will take effect."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"At present, it does not support modifying actions and conditions, and can only be modified by deleting and creating new ones."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Change the workload group in all session variables with the username admin to normal."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"create workload policy test_set_var_policy\nconditions(username='admin')\nactions(set_session_variable 'workload_group=normal') \n"})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsx)(n.li,{children:"Cancel SQL with scan rows greater than 1000 on a single BE."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"create workload policy test_cancel_query\nconditions(be_scan_rows > 1000)\nactions(cancel_query) \n"})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsx)(n.li,{children:"Cancel all SQL with scan bytes greater than 5GB and running time exceeding 1s."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"create workload policy test_cancel_big_query\nconditions(query_time > 1000, be_scan_bytes > 5368709120)\nactions(cancel_query) \n"})}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsx)(n.li,{children:"Alter properties."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"alter workload policy test_cancel_big_query properties('workload_group'='normal');\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"5",children:["\n",(0,s.jsx)(n.li,{children:"show all workload policy."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"mysql [information_schema]>select * from workload_policy;\n+-------+-----------------------+----------------------------------------------+--------------+----------+---------+---------+----------------+\n| ID    | NAME                  | CONDITION                                    | ACTION       | PRIORITY | ENABLED | VERSION | WORKLOAD_GROUP |\n+-------+-----------------------+----------------------------------------------+--------------+----------+---------+---------+----------------+\n| 35025 | test_cancel_big_query | query_time > 1000;be_scan_bytes > 5368709120 | cancel_query |        0 |       1 |       1 | normal         |\n+-------+-----------------------+----------------------------------------------+--------------+----------+---------+---------+----------------+\n1 row in set (0.03 sec)\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"6",children:["\n",(0,s.jsx)(n.li,{children:"drop policy."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"drop workload policy test_cancel_3s_query;\n"})}),"\n",(0,s.jsx)(n.h2,{id:"test",children:"Test"}),"\n",(0,s.jsx)(n.h3,{id:"1-set-session-variables",children:"1 set session variables"}),"\n",(0,s.jsx)(n.p,{children:"Attempt to modify concurrency related parameters in the session variable of the admin user."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"// show variable parallel_fragment_exec_instance_num of admin user.\nmysql [(none)]>show variables like '%parallel_fragment_exec_instance_num%';\n+-------------------------------------+-------+---------------+---------+\n| Variable_name                       | Value | Default_Value | Changed |\n+-------------------------------------+-------+---------------+---------+\n| parallel_fragment_exec_instance_num | 8     | 8             | 0       |\n+-------------------------------------+-------+---------------+---------+\n1 row in set (0.00 sec)\n\n\n// create a policy which reset session variable.\ncreate workload policy test_set_var_policy\nconditions(username='admin')\nactions(set_session_variable 'parallel_fragment_exec_instance_num=1') \n\n\n// After a while, check the session variable of the admin.\nmysql [(none)]>show variables like '%parallel_fragment_exec_instance_num%';\n+-------------------------------------+-------+---------------+---------+\n| Variable_name                       | Value | Default_Value | Changed |\n+-------------------------------------+-------+---------------+---------+\n| parallel_fragment_exec_instance_num | 1     | 8             | 1       |\n+-------------------------------------+-------+---------------+---------+\n1 row in set (0.01 sec)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"2-big-query-fusing-test",children:"2 big query fusing test"}),"\n",(0,s.jsx)(n.p,{children:"Test fusing queries that have run for more than 3 seconds. The following is the audit log of a successful execution of q29 in Clickbench. It can be seen that it takes 4.5 seconds for this SQL to run."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"mysql [hits]>SELECT REGEXP_REPLACE(Referer, '^https?://(?:www\\.)?([^/]+)/.*$', '\\1') AS k, AVG(length(Referer)) AS l, COUNT(*) AS c, MIN(Referer) FROM hits WHERE Referer <> '' GROUP BY k HAVING COUNT(*) > 100000 ORDER BY l DESC LIMIT 25;\n+-----------------------------------------------------------------------+------------------+----------+---------------------------------------------------------------------------------------------------------------------+\n| k                                                                     | l                | c        | min(Referer)                                                                                                        |\n+-----------------------------------------------------------------------+------------------+----------+---------------------------------------------------------------------------------------------------------------------+\n| 1                                                                     | 85.4611926713085 | 67259319 | http://%26ad%3D1%25EA%25D0%26utm_source=web&cd=19590&input_onlist/\u0431\u0438-2 \u043C\u0435\u0441\u0442\u043E \u0431\u0443\u0434\u0443\u0449\u0435\u0439 \u043A\u043E\u043D\u0434\u0438\u0446\u0438\u043D                       |\n| http:%2F%2Fwwww.regnancies/search&evL8gE&where=all&filmId=bEmYZc_WTDE |               69 |   207347 | http:%2F%2Fwwww.regnancies/search&evL8gE&where=all&filmId=bEmYZc_WTDE                                               |\n| http://\u043D\u043E\u0432\u043E\u0441\u0442\u0440\u0430\u0448\u043D\u0430\u044F                                                   |               31 |   740277 | http://\u043D\u043E\u0432\u043E\u0441\u0442\u0440\u0430\u0448\u043D\u0430\u044F                                                                                                 |\n| http://loveche.html?ctid                                              |               24 |   144901 | http://loveche.html?ctid                                                                                            |\n| http://rukodeliveresult                                               |               23 |   226135 | http://rukodeliveresult                                                                                             |\n| http://holodilnik.ru                                                  |               20 |   133893 | http://holodilnik.ru                                                                                                |\n| http://smeshariki.ru                                                  |               20 |   210736 | http://smeshariki.ru                                                                                                |\n| http:%2F%2Fviewtopic                                                  |               20 |   391115 | http:%2F%2Fviewtopic                                                                                                |\n| http:%2F%2Fwwww.ukr                                                   |               19 |   655178 | http:%2F%2Fwwww.ukr                                                                                                 |\n| http:%2F%2FviewType                                                   |               19 |   148907 | http:%2F%2FviewType                                                                                                 |\n| http://state=2008                                                     |               17 |   139630 | http://state=2008                                                                                                   |\n+-----------------------------------------------------------------------+------------------+----------+---------------------------------------------------------------------------------------------------------------------+\n11 rows in set (4.50 sec)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Create a policy that cancels queries after running for more than 3 seconds"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"create workload policy test_cancel_3s_query\nconditions(query_time > 3000)\nactions(cancel_query) \n"})}),"\n",(0,s.jsx)(n.p,{children:"Executing SQL again will result in a direct error message."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"mysql [hits]>SELECT REGEXP_REPLACE(Referer, '^https?://(?:www\\.)?([^/]+)/.*$', '\\1') AS k, AVG(length(Referer)) AS l, COUNT(*) AS c, MIN(Referer) FROM hits WHERE Referer <> '' GROUP BY k HAVING COUNT(*) > 100000 ORDER BY l DESC LIMIT 25;\nERROR 1105 (HY000): errCode = 2, detailMessage = (10.16.10.8)[CANCELLED]query canceled by workload policy,id:12345\n"})})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return o},a:function(){return r}});var t=i(667294);let s={},l=t.createContext(s);function r(e){let n=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);