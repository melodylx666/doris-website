"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["200432"],{598339:function(e,n,s){s.r(n),s.d(n,{metadata:()=>i,contentTitle:()=>a,default:()=>p,assets:()=>d,toc:()=>o,frontMatter:()=>r});var i=JSON.parse('{"id":"sql-manual/sql-statements/Account-Management-Statements/GRANT","title":"GRANT","description":"\x3c!--","source":"@site/docs/sql-manual/sql-statements/Account-Management-Statements/GRANT.md","sourceDirName":"sql-manual/sql-statements/Account-Management-Statements","slug":"/sql-manual/sql-statements/Account-Management-Statements/GRANT","permalink":"/docs/dev/sql-manual/sql-statements/Account-Management-Statements/GRANT","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"GRANT","language":"en"},"sidebar":"docs","previous":{"title":"LDAP","permalink":"/docs/dev/sql-manual/sql-statements/Account-Management-Statements/LDAP"},"next":{"title":"REVOKE","permalink":"/docs/dev/sql-manual/sql-statements/Account-Management-Statements/REVOKE"}}'),l=s("785893"),t=s("250065");let r={title:"GRANT",language:"en"},a=void 0,d={},o=[{value:"Description",id:"description",level:2},{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"privilege_list",id:"privilege_list",level:3},{value:"priv_level",id:"priv_level",level:3},{value:"resource_name",id:"resource_name",level:3},{value:"workload_group_name",id:"workload_group_name",level:3},{value:"compute_group_name",id:"compute_group_name",level:3},{value:"storage_vault_name",id:"storage_vault_name",level:3},{value:"user_identity",id:"user_identity",level:3},{value:"role_name",id:"role_name",level:3},{value:"role_list",id:"role_list",level:3},{value:"Examples",id:"examples",level:2},{value:"Related Commands",id:"related-commands",level:2},{value:"Keywords",id:"keywords",level:2}];function c(e){let n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,l.jsx)(n.p,{children:"The GRANT command is used to:"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"Grant specified privileges to a user or role."}),"\n",(0,l.jsx)(n.li,{children:"Grant specified roles to a user."}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"syntax",children:"Syntax"}),"\n",(0,l.jsx)(n.p,{children:"GRANT privilege_list ON priv_level TO user_identity [ROLE role_name]"}),"\n",(0,l.jsx)(n.p,{children:"GRANT privilege_list ON RESOURCE resource_name TO user_identity [ROLE role_name]"}),"\n",(0,l.jsx)(n.p,{children:"GRANT privilege_list ON WORKLOAD GROUP workload_group_name TO user_identity [ROLE role_name]"}),"\n",(0,l.jsx)(n.p,{children:"GRANT privilege_list ON COMPUTE GROUP compute_group_name TO user_identity [ROLE role_name]"}),"\n",(0,l.jsx)(n.p,{children:"GRANT privilege_list ON STORAGE VAULT storage_vault_name TO user_identity [ROLE role_name]"}),"\n",(0,l.jsx)(n.p,{children:"GRANT role_list TO user_identity"}),"\n",(0,l.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,l.jsx)(n.h3,{id:"privilege_list",children:"privilege_list"}),"\n",(0,l.jsx)(n.p,{children:"A comma-separated list of privileges to be granted. Currently supported privileges include:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"NODE_PRIV: Cluster node operation permissions, including node online and offline operations."}),"\n",(0,l.jsx)(n.li,{children:"ADMIN_PRIV: All privileges except NODE_PRIV."}),"\n",(0,l.jsx)(n.li,{children:"GRANT_PRIV: Privilege for operation privileges, including creating and deleting users, roles, authorization and revocation, setting passwords, etc."}),"\n",(0,l.jsx)(n.li,{children:"SELECT_PRIV: Read permission on the specified database or table."}),"\n",(0,l.jsx)(n.li,{children:"LOAD_PRIV: Import privileges on the specified database or table."}),"\n",(0,l.jsx)(n.li,{children:"ALTER_PRIV: Schema change permission for the specified database or table."}),"\n",(0,l.jsx)(n.li,{children:"CREATE_PRIV: Create permission on the specified database or table."}),"\n",(0,l.jsx)(n.li,{children:"DROP_PRIV: Drop privilege on the specified database or table."}),"\n",(0,l.jsx)(n.li,{children:"USAGE_PRIV: Access to the specified resource and Workload Group permissions."}),"\n",(0,l.jsxs)(n.li,{children:["SHOW_VIEW_PRIV: Permission to view ",(0,l.jsx)(n.code,{children:"view"})," creation statements."]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"Legacy privilege conversion:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"ALL and READ_WRITE will be converted to: SELECT_PRIV, LOAD_PRIV, ALTER_PRIV, CREATE_PRIV, DROP_PRIV."}),"\n",(0,l.jsx)(n.li,{children:"READ_ONLY is converted to SELECT_PRIV."}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"priv_level",children:"priv_level"}),"\n",(0,l.jsx)(n.p,{children:"Supports the following four forms:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.em,{children:"."}),".*: Privileges can be applied to all catalogs and all databases and tables within them."]}),"\n",(0,l.jsxs)(n.li,{children:["catalog_name.",(0,l.jsx)(n.em,{children:"."}),": Privileges can be applied to all databases and tables in the specified catalog."]}),"\n",(0,l.jsx)(n.li,{children:"catalog_name.db.*: Privileges can be applied to all tables under the specified database."}),"\n",(0,l.jsx)(n.li,{children:"catalog_name.db.tbl: Privileges can be applied to the specified table under the specified database."}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"resource_name",children:"resource_name"}),"\n",(0,l.jsxs)(n.p,{children:["Specifies the resource name, supporting ",(0,l.jsx)(n.code,{children:"%"})," and ",(0,l.jsx)(n.code,{children:"*"})," to match all resources, but does not support wildcards, such as res*."]}),"\n",(0,l.jsx)(n.h3,{id:"workload_group_name",children:"workload_group_name"}),"\n",(0,l.jsxs)(n.p,{children:["Specifies the workload group name, supporting ",(0,l.jsx)(n.code,{children:"%"})," and ",(0,l.jsx)(n.code,{children:"*"})," to match all workload groups, but does not support wildcards."]}),"\n",(0,l.jsx)(n.h3,{id:"compute_group_name",children:"compute_group_name"}),"\n",(0,l.jsxs)(n.p,{children:["Specifies the compute group name, supporting ",(0,l.jsx)(n.code,{children:"%"})," and ",(0,l.jsx)(n.code,{children:"*"})," to match all compute groups, but does not support wildcards."]}),"\n",(0,l.jsx)(n.h3,{id:"storage_vault_name",children:"storage_vault_name"}),"\n",(0,l.jsxs)(n.p,{children:["Specifies the storage vault name, supporting ",(0,l.jsx)(n.code,{children:"%"})," and ",(0,l.jsx)(n.code,{children:"*"})," to match all storage vaults, but does not support wildcards."]}),"\n",(0,l.jsx)(n.h3,{id:"user_identity",children:"user_identity"}),"\n",(0,l.jsx)(n.p,{children:"Specifies the user to receive the privileges. Must be a user_identity created with CREATE USER. The host in user_identity can be a domain name. If it is a domain name, the effective time of the authority may be delayed by about 1 minute."}),"\n",(0,l.jsx)(n.h3,{id:"role_name",children:"role_name"}),"\n",(0,l.jsx)(n.p,{children:"Specifies the role to receive the privileges. If the specified role does not exist, it will be created automatically."}),"\n",(0,l.jsx)(n.h3,{id:"role_list",children:"role_list"}),"\n",(0,l.jsx)(n.p,{children:"A comma-separated list of roles to be assigned. The specified roles must exist."}),"\n",(0,l.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Grant permissions to all catalogs and databases and tables to the user:"}),"\n",(0,l.jsxs)(n.p,{children:["GRANT SELECT_PRIV ON ",(0,l.jsx)(n.em,{children:"."}),".* TO 'jack'@'%';"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Grant permissions to the specified database table to the user:"}),"\n",(0,l.jsx)(n.p,{children:"GRANT SELECT_PRIV,ALTER_PRIV,LOAD_PRIV ON ctl1.db1.tbl1 TO 'jack'@'192.8.%';"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Grant permissions to the specified database table to the role:"}),"\n",(0,l.jsx)(n.p,{children:"GRANT LOAD_PRIV ON ctl1.db1.* TO ROLE 'my_role';"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Grant access to all resources to users:"}),"\n",(0,l.jsx)(n.p,{children:"GRANT USAGE_PRIV ON RESOURCE * TO 'jack'@'%';"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Grant the user permission to use the specified resource:"}),"\n",(0,l.jsx)(n.p,{children:"GRANT USAGE_PRIV ON RESOURCE 'spark_resource' TO 'jack'@'%';"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Grant access to specified resources to roles:"}),"\n",(0,l.jsx)(n.p,{children:"GRANT USAGE_PRIV ON RESOURCE 'spark_resource' TO ROLE 'my_role';"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Grant the specified role to a user:"}),"\n",(0,l.jsx)(n.p,{children:"GRANT 'role1','role2' TO 'jack'@'%';"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Grant the specified workload group 'g1' to user jack:"}),"\n",(0,l.jsx)(n.p,{children:"GRANT USAGE_PRIV ON WORKLOAD GROUP 'g1' TO 'jack'@'%';"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Match all workload groups granted to user jack:"}),"\n",(0,l.jsx)(n.p,{children:"GRANT USAGE_PRIV ON WORKLOAD GROUP '%' TO 'jack'@'%';"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Grant the workload group 'g1' to the role my_role:"}),"\n",(0,l.jsx)(n.p,{children:"GRANT USAGE_PRIV ON WORKLOAD GROUP 'g1' TO ROLE 'my_role';"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Allow jack to view the creation statement of view1 under db1:"}),"\n",(0,l.jsx)(n.p,{children:"GRANT SHOW_VIEW_PRIV ON db1.view1 TO 'jack'@'%';"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Grant user permission to use the specified compute group:"}),"\n",(0,l.jsx)(n.p,{children:"GRANT USAGE_PRIV ON COMPUTE GROUP 'group1' TO 'jack'@'%';"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Grant role permission to use the specified compute group:"}),"\n",(0,l.jsx)(n.p,{children:"GRANT USAGE_PRIV ON COMPUTE GROUP 'group1' TO ROLE 'my_role';"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Grant user permission to use all compute groups:"}),"\n",(0,l.jsx)(n.p,{children:"GRANT USAGE_PRIV ON COMPUTE GROUP '*' TO 'jack'@'%';"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Grant user permission to use the specified storage vault:"}),"\n",(0,l.jsx)(n.p,{children:"GRANT USAGE_PRIV ON STORAGE VAULT 'vault1' TO 'jack'@'%';"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Grant role permission to use the specified storage vault:"}),"\n",(0,l.jsx)(n.p,{children:"GRANT USAGE_PRIV ON STORAGE VAULT 'vault1' TO ROLE 'my_role';"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Grant user permission to use all storage vaults:"}),"\n",(0,l.jsx)(n.p,{children:"GRANT USAGE_PRIV ON STORAGE VAULT '*' TO 'jack'@'%';"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"related-commands",children:"Related Commands"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/docs/dev/sql-manual/sql-statements/Account-Management-Statements/REVOKE",children:"REVOKE"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/docs/dev/sql-manual/sql-statements/Show-Statements/SHOW-GRANTS",children:"SHOW GRANTS"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"/docs/dev/sql-manual/sql-statements/Account-Management-Statements/CREATE-ROLE",children:"CREATE ROLE"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"../Administration-Statements/CREATE-WORKLOAD-GROUP.md",children:"CREATE WORKLOAD GROUP"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"../Administration-Statements/CREATE-COMPUTE-GROUP.md",children:"CREATE COMPUTE GROUP"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"../Administration-Statements/CREATE-RESOURCE.md",children:"CREATE RESOURCE"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"../Administration-Statements/CREATE-STORAGE-VAULT.md",children:"CREATE STORAGE VAULT"})}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"keywords",children:"Keywords"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{children:"GRANT, WORKLOAD GROUP, COMPUTE GROUP, RESOURCE \n"})})]})}function p(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return r}});var i=s(667294);let l={},t=i.createContext(l);function r(e){let n=i.useContext(t);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);