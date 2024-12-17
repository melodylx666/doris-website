"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["374436"],{939807:function(e,n,r){r.r(n),r.d(n,{metadata:()=>s,contentTitle:()=>o,default:()=>h,assets:()=>c,toc:()=>l,frontMatter:()=>d});var s=JSON.parse('{"id":"release-and-verify/release-complete","title":"\u5B8C\u6210\u53D1\u5E03","description":"\x3c!--","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs-community/current/release-and-verify/release-complete.md","sourceDirName":"release-and-verify","slug":"/release-and-verify/release-complete","permalink":"/zh-CN/community/release-and-verify/release-complete","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"\u5B8C\u6210\u53D1\u5E03","language":"zh-CN"},"sidebar":"community","previous":{"title":"\u53D1\u5E03 Doris SDK","permalink":"/zh-CN/community/release-and-verify/release-doris-sdk"},"next":{"title":"\u9A8C\u8BC1 Apache \u53D1\u5E03\u7248\u672C","permalink":"/zh-CN/community/release-and-verify/release-verify"}}'),i=r("785893"),a=r("250065");let d={title:"\u5B8C\u6210\u53D1\u5E03",language:"zh-CN"},o="\u5B8C\u6210\u53D1\u5E03",c={},l=[{value:"\u4E0A\u4F20 package \u5230 release",id:"\u4E0A\u4F20-package-\u5230-release",level:2},{value:"\u5728 Doris \u5B98\u7F51\u548C github \u53D1\u5E03\u94FE\u63A5",id:"\u5728-doris-\u5B98\u7F51\u548C-github-\u53D1\u5E03\u94FE\u63A5",level:2},{value:"\u521B\u5EFA\u4E0B\u8F7D\u94FE\u63A5",id:"\u521B\u5EFA\u4E0B\u8F7D\u94FE\u63A5",level:3},{value:"Maven",id:"maven",level:3},{value:"\u51C6\u5907 release note",id:"\u51C6\u5907-release-note",level:3},{value:"svn \u4E0A\u6E05\u7406\u65E7\u7248\u672C\u7684\u5305",id:"svn-\u4E0A\u6E05\u7406\u65E7\u7248\u672C\u7684\u5305",level:3},{value:"Announce \u90AE\u4EF6",id:"announce-\u90AE\u4EF6",level:2}];function t(e){let n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"\u5B8C\u6210\u53D1\u5E03",children:"\u5B8C\u6210\u53D1\u5E03"})}),"\n",(0,i.jsx)(n.p,{children:"\u672C\u6587\u6863\u4E2D\u7684\u6B65\u9AA4\uFF0C\u662F\u5728\u5B8C\u6210 dev@doris \u90AE\u4EF6\u7EC4\u4E2D\u7684\u53D1\u7248\u6295\u7968\u5E76\u901A\u8FC7\u540E\uFF0C\u8FDB\u884C\u7684\u540E\u7EED\u6B65\u9AA4\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u4E0A\u4F20-package-\u5230-release",children:"\u4E0A\u4F20 package \u5230 release"}),"\n",(0,i.jsx)(n.p,{children:"\u5F53\u6B63\u5F0F\u53D1\u5E03\u6295\u7968\u6210\u529F\u540E\uFF0C\u5148\u53D1[Result]\u90AE\u4EF6\uFF0C\u7136\u540E\u5C31\u51C6\u5907 release package\u3002\n\u5C06\u4E4B\u524D\u5728dev\u4E0B\u53D1\u5E03\u7684\u5BF9\u5E94\u6587\u4EF6\u5939\u4E0B\u7684\u6E90\u7801\u5305\u3001\u7B7E\u540D\u6587\u4EF6\u548Chash\u6587\u4EF6\u62F7\u8D1D\u5230\u53E6\u4E00\u4E2A\u76EE\u5F55 1.1.0\uFF0C\u6CE8\u610F\u6587\u4EF6\u540D\u5B57\u4E2D\u4E0D\u8981rcxx (\u53EF\u4EE5rename\uFF0C\u4F46\u4E0D\u8981\u91CD\u65B0\u8BA1\u7B97\u7B7E\u540D\uFF0Chash\u53EF\u4EE5\u91CD\u65B0\u8BA1\u7B97\uFF0C\u7ED3\u679C\u4E0D\u4F1A\u53D8)"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"\u8FD9\u4E00\u6B65\u4EC5PMC\u6210\u5458\u6709\u6743\u9650\u64CD\u4F5C\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'From:\nhttps://dist.apache.org/repos/dist/dev/doris/\n\nTo:\nhttps://dist.apache.org/repos/dist/release/doris/\n\nEg:\nsvn mv -m "move doris 1.1.0-rc05 to release" https://dist.apache.org/repos/dist/dev/doris/1.1 https://dist.apache.org/repos/dist/release/doris/1.1\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u7B2C\u4E00\u6B21\u53D1\u5E03\u7684\u8BDD KEYS \u6587\u4EF6\u4E5F\u9700\u8981\u62F7\u8D1D\u8FC7\u6765\u3002\u7136\u540Eadd\u5230svn release \u4E0B\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"add \u6210\u529F\u540E\u5C31\u53EF\u4EE5\u5728\u4E0B\u9762\u7F51\u5740\u4E0A\u770B\u5230\u4F60\u53D1\u5E03\u7684\u6587\u4EF6\nhttps://dist.apache.org/repos/dist/release/doris/1.xx/\n\n\u7A0D\u7B49\u4E00\u6BB5\u65F6\u95F4\u540E\uFF0C\u80FD\u5728 apache \u5B98\u7F51\u770B\u5230\uFF1A\nhttp://www.apache.org/dist/doris/1.xx/\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u5728-doris-\u5B98\u7F51\u548C-github-\u53D1\u5E03\u94FE\u63A5",children:"\u5728 Doris \u5B98\u7F51\u548C github \u53D1\u5E03\u94FE\u63A5"}),"\n",(0,i.jsx)(n.p,{children:"\u6211\u4EEC\u4EE5 Doris Core \u4E3A\u4F8B\u3002\u5176\u4ED6\u7EC4\u4EF6\u6CE8\u610F\u66FF\u6362\u5BF9\u5E94\u7684\u540D\u79F0\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"\u521B\u5EFA\u4E0B\u8F7D\u94FE\u63A5",children:"\u521B\u5EFA\u4E0B\u8F7D\u94FE\u63A5"}),"\n",(0,i.jsx)(n.p,{children:"\u4E0B\u8F7D\u94FE\u63A5\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'http://www.apache.org/dyn/closer.cgi?filename=doris/1.xx/apache-doris-1.xx-src.tar.gz&action=download\n\nwget --trust-server-names "https://www.apache.org/dyn/mirrors/mirrors.cgi?action=download&filename=doris/1.xx/apache-doris-1.xx-src.tar.gz"\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u539F\u59CB\u4F4D\u7F6E:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"https://www.apache.org/dist/doris/1.xx/\n\nhttp://www.apache.org/dyn/closer.cgi/doris/1.xx/apache-doris-1.xx-src.tar.gz\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u6E90\u7801\u5305\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"http://www.apache.org/dyn/closer.cgi/doris/1.xx/apache-doris-1.xx-src.tar.gz\n\nASC:\nhttp://archive.apache.org/dist/doris/1.xx/apache-doris-1.xx-src.tar.gz.asc\n\nsha512:\nhttp://archive.apache.org/dist/doris/1.xx/apache-doris-1.xx-src.tar.gz.sha512\n"})}),"\n",(0,i.jsx)(n.p,{children:"KEYS:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"http://archive.apache.org/dist/doris/KEYS\n"})}),"\n",(0,i.jsxs)(n.p,{children:["refer to: ",(0,i.jsx)(n.a,{href:"http://www.apache.org/dev/release-download-pages#closer",children:"http://www.apache.org/dev/release-download-pages#closer"})]}),"\n",(0,i.jsx)(n.h3,{id:"maven",children:"Maven"}),"\n",(0,i.jsxs)(n.p,{children:["\u5728 ",(0,i.jsx)(n.a,{href:"https://repository.apache.org/#stagingRepositories",children:"https://repository.apache.org/#stagingRepositories"})," \u4E2D\u627E\u5230\u5BF9\u5E94\u7684 Staging Repo\u3002"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u5982\u679C\u6CA1\u6709 close\uFF0C\u5148\u70B9\u51FB ",(0,i.jsx)(n.code,{children:"close"})," \u5173\u95ED\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u70B9\u51FB ",(0,i.jsx)(n.code,{children:"Release"})," \u8FDB\u884C\u6B63\u5F0F\u53D1\u5E03\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u5982\u679C ",(0,i.jsx)(n.code,{children:"close"})," \u9636\u6BB5\u62A5\u9519\uFF1A",(0,i.jsx)(n.code,{children:"No public key: Key with id: (xxx) was not able to be located on"}),"\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["\u53EF\u4EE5\u6267\u884C ",(0,i.jsx)(n.code,{children:"gpg --keyserver hkp://keyserver.ubuntu.com --send-keys xxx"})," \u540E\u518D\u91CD\u65B0close\uFF0Cxxx \u53EF\u4EE5\u901A\u8FC7 ",(0,i.jsx)(n.code,{children:"gpg -k"})," \u67E5\u770B\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"\u51C6\u5907-release-note",children:"\u51C6\u5907 release note"}),"\n",(0,i.jsx)(n.p,{children:"\u9700\u8981\u4FEE\u6539\u5982\u4E0B\u4E24\u4E2A\u5730\u65B9\uFF1A"}),"\n",(0,i.jsx)(n.p,{children:"1\u3001Github \u7684 release \u9875\u9762"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"https://github.com/apache/doris/releases/tag/0.9.0-rc01\n"})}),"\n",(0,i.jsx)(n.p,{children:"2\u3001Doris \u5B98\u7F51\u4E0B\u8F7D\u9875\u9762"}),"\n",(0,i.jsx)(n.p,{children:"\u4E0B\u8F7D\u9875\u9762\u662F\u4E00\u4E2A markdown \u6587\u4EF6\uFF0C\u5730\u5740\u5982\u4E0B\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"docs/zh-CN/downloads/downloads.md\ndocs/en/downloads/downloads.md\n"})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"\u9700\u8981\u5C06\u4E0A\u4E00\u6B21\u53D1\u5E03\u7248\u672C\u7684\u4E0B\u8F7D\u5305\u5730\u5740\u6539\u4E3A apache \u7684\u5F52\u6863\u5730\u5740\uFF08\u89C1\u540E\uFF09\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u589E\u52A0\u65B0\u7248\u672C\u7684\u4E0B\u8F7D\u4FE1\u606F\u3002"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"svn-\u4E0A\u6E05\u7406\u65E7\u7248\u672C\u7684\u5305",children:"svn \u4E0A\u6E05\u7406\u65E7\u7248\u672C\u7684\u5305"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"svn \u4E0A\u5220\u9664\u65E7\u7248\u672C\u7684\u5305"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u7531\u4E8E svn \u53EA\u9700\u8981\u4FDD\u5B58\u6700\u65B0\u7248\u672C\u7684\u5305\uFF0C\u6240\u4EE5\u5F53\u6709\u65B0\u7248\u672C\u53D1\u5E03\u7684\u65F6\u5019\uFF0C\u65E7\u7248\u672C\u7684\u5305\u5C31\u5E94\u8BE5\u4ECE svn \u4E0A\u6E05\u7406\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"https://dist.apache.org/repos/dist/release/doris/\nhttps://dist.apache.org/repos/dist/dev/doris/\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u4FDD\u6301\u8FD9\u4E24\u4E2A\u5730\u5740\u4E2D\uFF0C\u53EA\u6709\u6700\u65B0\u7248\u672C\u7684\u5305\u5373\u53EF\u3002"}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsx)(n.li,{children:"\u5C06 Doris \u5B98\u7F51\u7684\u4E0B\u8F7D\u9875\u9762\u4E2D\uFF0C\u65E7\u7248\u672C\u5305\u7684\u4E0B\u8F7D\u5730\u5740\u6539\u4E3A\u5F52\u6863\u9875\u9762\u7684\u5730\u5740"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"\u4E0B\u8F7D\u9875\u9762: http://doris.apache.org/downloads.html\n\u5F52\u6863\u9875\u9762: http://archive.apache.org/dist/doris\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Apache \u4F1A\u6709\u540C\u6B65\u673A\u5236\u53BB\u5C06\u5386\u53F2\u7684\u53D1\u5E03\u7248\u672C\u8FDB\u884C\u4E00\u4E2A\u5F52\u6863\uFF0C\u5177\u4F53\u64CD\u4F5C\u89C1\uFF1A",(0,i.jsx)(n.a,{href:"https://www.apache.org/legal/release-policy.html#how-to-archive",children:"how to archive"}),"\n\u6240\u4EE5\u5373\u4F7F\u65E7\u7684\u5305\u4ECE svn \u4E0A\u6E05\u9664\uFF0C\u8FD8\u662F\u53EF\u4EE5\u5728\u5F52\u6863\u9875\u9762\u4E2D\u627E\u5230\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"announce-\u90AE\u4EF6",children:"Announce \u90AE\u4EF6"}),"\n",(0,i.jsx)(n.p,{children:"Title:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"[ANNOUNCE] Apache Doris 1.xx release\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u53D1\u9001\u90AE\u4EF6\u7EC4\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"dev@doris.apache.org\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u90AE\u4EF6\u6B63\u6587\uFF1A"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"Hi All,\n\nWe are pleased to announce the release of Apache Doris 1.xx.\n\nApache Doris is an MPP-based interactive SQL data warehousing for reporting and analysis.\n\nThe release is available at:\nhttp://doris.apache.org/master/zh-CN/downloads/downloads.html\n\nThanks to everyone who has contributed to this release, and the release note can be found here:\nhttps://github.com/apache/doris/releases\n\nBest Regards,\n\nOn behalf of the Doris team,\nxxx\n\n"})})]})}function h(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(t,{...e})}):t(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return o},a:function(){return d}});var s=r(667294);let i={},a=s.createContext(i);function d(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);