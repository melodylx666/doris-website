"use strict";(self.webpackChunkdoris_website=self.webpackChunkdoris_website||[]).push([["541301"],{652075:function(n,e,t){t.r(e),t.d(e,{metadata:()=>r,contentTitle:()=>o,default:()=>h,assets:()=>a,toc:()=>c,frontMatter:()=>i});var r=JSON.parse('{"id":"install/source-install/compilation-arm","title":"Arm \u5E73\u53F0\u4E0A\u7F16\u8BD1","description":"{/* Licensed to the Apache Software Foundation (ASF) under one","source":"@site/i18n/zh-CN/docusaurus-plugin-content-docs/version-3.0/install/source-install/compilation-arm.mdx","sourceDirName":"install/source-install","slug":"/install/source-install/compilation-arm","permalink":"/zh-CN/docs/3.0/install/source-install/compilation-arm","draft":false,"unlisted":false,"tags":[],"version":"3.0","frontMatter":{"title":"Arm \u5E73\u53F0\u4E0A\u7F16\u8BD1","language":"zh-CN"},"sidebar":"docs","previous":{"title":"Linux \u5E73\u53F0\u76F4\u63A5\u7F16\u8BD1","permalink":"/zh-CN/docs/3.0/install/source-install/compilation-linux"},"next":{"title":"Windows \u5E73\u53F0\u4E0A\u7F16\u8BD1","permalink":"/zh-CN/docs/3.0/install/source-install/compilation-win"}}'),l=t("785893"),s=t("250065");t("247902"),t("905525");let i={title:"Arm \u5E73\u53F0\u4E0A\u7F16\u8BD1",language:"zh-CN"},o=void 0,a={},c=[{value:"\u786C\u4EF6/\u64CD\u4F5C\u7CFB\u7EDF\u73AF\u5883",id:"\u786C\u4EF6\u64CD\u4F5C\u7CFB\u7EDF\u73AF\u5883",level:2},{value:"\u8F6F\u4EF6\u73AF\u5883\u914D\u7F6E",id:"\u8F6F\u4EF6\u73AF\u5883\u914D\u7F6E",level:2},{value:"\u8F6F\u4EF6\u73AF\u5883\u5BF9\u7167\u8868",id:"\u8F6F\u4EF6\u73AF\u5883\u5BF9\u7167\u8868",level:3},{value:"CentOS 7.9 \u8F6F\u4EF6\u73AF\u5883\u5B89\u88C5",id:"centos-79-\u8F6F\u4EF6\u73AF\u5883\u5B89\u88C5",level:3},{value:"Ubuntu 20.04 \u8F6F\u4EF6\u73AF\u5883\u5B89\u88C5",id:"ubuntu-2004-\u8F6F\u4EF6\u73AF\u5883\u5B89\u88C5",level:3},{value:"\u7F16\u8BD1",id:"\u7F16\u8BD1",level:2},{value:"\u5E38\u89C1\u95EE\u9898",id:"\u5E38\u89C1\u95EE\u9898",level:2}];function d(n){let e={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:["\n","\n",(0,l.jsx)(e.p,{children:"\u672C\u6587\u6863\u4ECB\u7ECD\u5982\u4F55\u5728 ARM64 \u5E73\u53F0\u4E0A\u7F16\u8BD1 Doris\u3002"}),"\n",(0,l.jsxs)(e.p,{children:["\u6CE8\u610F\uFF0C\u8BE5\u6587\u6863\u4EC5\u4F5C\u4E3A\u6307\u5BFC\u6027\u6587\u6863\u3002\u5728\u4E0D\u540C\u73AF\u5883\u4E2D\u7F16\u8BD1\u53EF\u80FD\u51FA\u73B0\u5176\u4ED6\u9519\u8BEF\u3002\u5982\u9047\u95EE\u9898\uFF0C\u6B22\u8FCE\u5411 Doris ",(0,l.jsx)(e.a,{href:"https://github.com/apache/doris/issues",children:"\u63D0\u51FA Issue"})," \u6216\u89E3\u51B3\u65B9\u6848\u3002"]}),"\n",(0,l.jsx)(e.admonition,{type:"tip",children:(0,l.jsx)(e.p,{children:"\u76EE\u524D\u8FD8\u4E0D\u652F\u6301\u5B58\u7B97\u5206\u79BB\u6A21\u5F0F\u7F16\u8BD1\u90E8\u7F72"})}),"\n",(0,l.jsx)(e.h2,{id:"\u786C\u4EF6\u64CD\u4F5C\u7CFB\u7EDF\u73AF\u5883",children:"\u786C\u4EF6/\u64CD\u4F5C\u7CFB\u7EDF\u73AF\u5883"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u7CFB\u7EDF\u7248\u672C\uFF1ACentOS 7.9\u3001Ubuntu 20.04"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u7CFB\u7EDF\u67B6\u6784\uFF1AARM64"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u5185\u5B58\uFF1A16 GB +"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"\u8F6F\u4EF6\u73AF\u5883\u914D\u7F6E",children:"\u8F6F\u4EF6\u73AF\u5883\u914D\u7F6E"}),"\n",(0,l.jsx)(e.h3,{id:"\u8F6F\u4EF6\u73AF\u5883\u5BF9\u7167\u8868",children:"\u8F6F\u4EF6\u73AF\u5883\u5BF9\u7167\u8868"}),"\n",(0,l.jsxs)(e.table,{children:[(0,l.jsx)(e.thead,{children:(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.th,{children:"\u7EC4\u4EF6\u540D\u79F0"}),(0,l.jsx)(e.th,{children:"\u7EC4\u4EF6\u7248\u672C"})]})}),(0,l.jsxs)(e.tbody,{children:[(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"Git"}),(0,l.jsx)(e.td,{children:"2.0+"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"JDK"}),(0,l.jsx)(e.td,{children:"1.8.0"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"Maven"}),(0,l.jsx)(e.td,{children:"3.6.3"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"NodeJS"}),(0,l.jsx)(e.td,{children:"16.3.0"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"LDB-Toolchain"}),(0,l.jsx)(e.td,{children:"0.9.1"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"\u5E38\u5907\u73AF\u5883\uFF1Abyacc patch automake libtool make which file ncurses-devel gettext-devel unzip bzip2 zip util-linux wget git python2"}),(0,l.jsx)(e.td,{children:"yum \u6216 apt \u81EA\u52A8\u5B89\u88C5\u5373\u53EF"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"autoconf"}),(0,l.jsx)(e.td,{children:"2.69"})]}),(0,l.jsxs)(e.tr,{children:[(0,l.jsx)(e.td,{children:"bison"}),(0,l.jsx)(e.td,{children:"3.0.4"})]})]})]}),"\n",(0,l.jsx)(e.h3,{id:"centos-79-\u8F6F\u4EF6\u73AF\u5883\u5B89\u88C5",children:"CentOS 7.9 \u8F6F\u4EF6\u73AF\u5883\u5B89\u88C5"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"1.  \u521B\u5EFA\u8F6F\u4EF6\u4E0B\u8F7D\u5B89\u88C5\u5305\u6839\u76EE\u5F55\u548C\u8F6F\u4EF6\u5B89\u88C5\u6839\u76EE\u5F55"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:"# \u521B\u5EFA\u8F6F\u4EF6\u4E0B\u8F7D\u5B89\u88C5\u5305\u6839\u76EE\u5F55\nmkdir /opt/tools\n\n# \u521B\u5EFA\u8F6F\u4EF6\u5B89\u88C5\u6839\u76EE\u5F55\nmkdir /opt/software\n"})}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"2.  \u5B89\u88C5\u4F9D\u8D56\u9879"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:"### Git ###\n# \u7701\u53BB\u7F16\u8BD1\u9EBB\u70E6\uFF0C\u76F4\u63A5\u4F7F\u7528 yum \u5B89\u88C5\nyum install -y git\n\n### JDK8 \u4E24\u79CD\u65B9\u5F0F\uFF0C\u4EFB\u9009\u4E00\u79CD ###\n# \u7B2C\u4E00\u79CD\u662F\u7701\u53BB\u989D\u5916\u4E0B\u8F7D\u548C\u914D\u7F6E\uFF0C\u76F4\u63A5\u4F7F\u7528 yum \u5B89\u88C5\uFF0C\u5B89\u88C5 devel \u5305\u662F\u4E3A\u4E86\u83B7\u53D6\u4E00\u4E9B\u5DE5\u5177\uFF0C\u5982 jps \u547D\u4EE4\nyum install -y java-1.8.0-openjdk java-1.8.0-openjdk-devel        \n# \u7B2C\u4E8C\u79CD\u662F\u4E0B\u8F7D ARM64 \u67B6\u6784\u7684\u5B89\u88C5\u5305\uFF0C\u89E3\u538B\u914D\u7F6E\u73AF\u5883\u53D8\u91CF\u540E\u4F7F\u7528\ncd /opt/tools\nwget https://doris-thirdparty-repo.bj.bcebos.com/thirdparty/jdk-8u291-linux-aarch64.tar.gz && tar -zxvf jdk-8u291-linux-aarch64.tar.gz && \\\nmv jdk1.8.0_291 /opt/software/jdk8\n\n### Maven ###\ncd /opt/tools\n# wget \u5DE5\u5177\u4E0B\u8F7D\u540E\uFF0C\u76F4\u63A5\u89E3\u538B\u7F29\u914D\u7F6E\u73AF\u5883\u53D8\u91CF\u4F7F\u7528\nwget https://archive.apache.org/dist/maven/maven-3/3.6.3/binaries/apache-maven-3.6.3-bin.tar.gz && tar -zxvf apache-maven-3.6.3-bin.tar.gz && \\\nmv apache-maven-3.6.3 /opt/software/maven\n\n### NodeJS ###\ncd /opt/tools\n# \u4E0B\u8F7D ARM64 \u67B6\u6784\u7684\u5B89\u88C5\u5305\nwget https://doris-thirdparty-repo.bj.bcebos.com/thirdparty/node-v16.3.0-linux-arm64.tar.xz && tar -xvf node-v16.3.0-linux-arm64.tar.xz && \\\nmv node-v16.3.0-linux-arm64 /opt/software/nodejs\n\n### LDB-Toolchain ###\ncd /opt/tools\n# \u4E0B\u8F7D LDB-Toolchain ARM \u7248\u672C\nwget https://github.com/amosbird/ldb_toolchain_gen/releases/download/v0.9.1/ldb_toolchain_gen.aarch64.sh && sh ldb_toolchain_gen.aarch64.sh /opt/software/ldb_toolchain/\n\n### \u5176\u4ED6 ###\n# install required system packages\nsudo yum install -y byacc patch automake libtool make which file ncurses-devel gettext-devel unzip bzip2 bison zip util-linux wget git python2\n\n# install autoconf-2.69\ncd /opt/tools\nwget http://ftp.gnu.org/gnu/autoconf/autoconf-2.69.tar.gz && \\\n    tar zxf autoconf-2.69.tar.gz && \\\n    mv autoconf-2.69 /opt/software/autoconf && \\\n    cd /opt/software/autoconf && \\\n    ./configure && \\\n    make && \\\n    make install\n"})}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"3.  \u914D\u7F6E\u73AF\u5883\u53D8\u91CF"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:'# \u914D\u7F6E\u73AF\u5883\u53D8\u91CF\nvim /etc/profile.d/doris.sh\nexport JAVA_HOME=/opt/software/jdk8\nexport MAVEN_HOME=/opt/software/maven\nexport NODE_JS_HOME=/opt/software/nodejs\nexport LDB_HOME=/opt/software/ldb_toolchain\nexport PATH=$JAVA_HOME/bin:$MAVEN_HOME/bin:$NODE_JS_HOME/bin:$LDB_HOME/bin:$PATH\n\n# \u4FDD\u5B58\u9000\u51FA\u5E76\u5237\u65B0\u73AF\u5883\u53D8\u91CF\nsource /etc/profile.d/doris.sh\n\n# \u6D4B\u8BD5\u662F\u5426\u6210\u529F\njava -version\n> java version "1.8.0_291"\nmvn -version\n> Apache Maven 3.6.3\nnode --version\n> v16.3.0\ngcc --version\n> gcc-11\n'})}),"\n",(0,l.jsx)(e.h3,{id:"ubuntu-2004-\u8F6F\u4EF6\u73AF\u5883\u5B89\u88C5",children:"Ubuntu 20.04 \u8F6F\u4EF6\u73AF\u5883\u5B89\u88C5"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"1.  \u66F4\u65B0 apt-get \u8F6F\u4EF6\u5E93"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:"apt-get update\n"})}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"2.  \u91CD\u65B0\u914D\u7F6E shell"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:"# Ubuntu \u7684 shell \u9ED8\u8BA4\u5B89\u88C5\u7684\u662F dash\uFF0C\u800C\u4E0D\u662F bash\uFF0C\u8981\u5207\u6362\u6210 bash \u624D\u80FD\u6267\u884C\uFF0C\u8FD0\u884C\u4EE5\u4E0B\u547D\u4EE4\u67E5\u770B sh \u7684\u8BE6\u7EC6\u4FE1\u606F\uFF0C\u786E\u8BA4 shell \u5BF9\u5E94\u7684\u7A0B\u5E8F\u662F\u54EA\u4E2A\uFF1A\nls -al /bin/sh\n\n# \u901A\u8FC7\u4EE5\u4E0B\u65B9\u5F0F\u53EF\u4EE5\u4F7F shell \u5207\u6362\u56DE bash\nsudo dpkg-reconfigure dash\n# \u7136\u540E\u9009\u62E9 no \u6216\u8005 \u5426 \uFF0C\u5E76\u786E\u8BA4\u3002\u8FD9\u6837\u505A\u5C06\u91CD\u65B0\u914D\u7F6E dash\uFF0C\u5E76\u4F7F\u5176\u4E0D\u4F5C\u4E3A\u9ED8\u8BA4\u7684 shell \u5DE5\u5177\n"})}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"3.  \u521B\u5EFA\u8F6F\u4EF6\u4E0B\u8F7D\u5B89\u88C5\u5305\u6839\u76EE\u5F55\u548C\u8F6F\u4EF6\u5B89\u88C5\u6839\u76EE\u5F55"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:"# \u521B\u5EFA\u8F6F\u4EF6\u4E0B\u8F7D\u5B89\u88C5\u5305\u6839\u76EE\u5F55\nmkdir /opt/tools\n\n# \u521B\u5EFA\u8F6F\u4EF6\u5B89\u88C5\u6839\u76EE\u5F55\nmkdir /opt/software\n"})}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"4.  \u5B89\u88C5\u4F9D\u8D56\u9879"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:"### Git ###\n# \u7701\u53BB\u7F16\u8BD1\u9EBB\u70E6\uFF0C\u76F4\u63A5\u4F7F\u7528 apt-get \u5B89\u88C5\napt-get -y install git\n\n### JDK8 ###      \n# \u4E0B\u8F7D ARM64 \u67B6\u6784\u7684\u5B89\u88C5\u5305\uFF0C\u89E3\u538B\u914D\u7F6E\u73AF\u5883\u53D8\u91CF\u540E\u4F7F\u7528\ncd /opt/tools\nwget https://doris-thirdparty-repo.bj.bcebos.com/thirdparty/jdk-8u291-linux-aarch64.tar.gz && tar -zxvf jdk-8u291-linux-aarch64.tar.gz && \\\nmv jdk1.8.0_291 /opt/software/jdk8\n\n### Maven ###\ncd /opt/tools\n# wget \u5DE5\u5177\u4E0B\u8F7D\u540E\uFF0C\u76F4\u63A5\u89E3\u538B\u7F29\u914D\u7F6E\u73AF\u5883\u53D8\u91CF\u4F7F\u7528\nwget https://dlcdn.apache.org/maven/maven-3/3.6.3/binaries/apache-maven-3.6.3-bin.tar.gz && tar -zxvf apache-maven-3.6.3-bin.tar.gz && \\\nmv apache-maven-3.6.3 /opt/software/maven\n\n### NodeJS ###\ncd /opt/tools\n# \u4E0B\u8F7D ARM64 \u67B6\u6784\u7684\u5B89\u88C5\u5305\nwget https://doris-thirdparty-repo.bj.bcebos.com/thirdparty/node-v16.3.0-linux-arm64.tar.xz && tar -xvf node-v16.3.0-linux-arm64.tar.xz && \\\nmv node-v16.3.0-linux-arm64 /opt/software/nodejs\n\n### LDB-Toolchain ###\ncd /opt/tools\n# \u4E0B\u8F7D LDB-Toolchain ARM \u7248\u672C\nwget https://github.com/amosbird/ldb_toolchain_gen/releases/download/v0.9.1/ldb_toolchain_gen.aarch64.sh && sh ldb_toolchain_gen.aarch64.sh /opt/software/ldb_toolchain/\n\n### \u5176\u4ED6 ###\n# install required system packages\nsudo apt install -y build-essential cmake flex automake bison binutils-dev libiberty-dev zip libncurses5-dev curl ninja-build\nsudo apt-get install -y make\nsudo apt-get install -y unzip\nsudo apt-get install -y python2\nsudo apt-get install -y byacc\nsudo apt-get install -y automake\nsudo apt-get install -y libtool\nsudo apt-get install -y bzip2\nsudo add-apt-repository ppa:ubuntu-toolchain-r/ppa \nsudo apt update\nsudo apt install gcc-11 g++-11 \nsudo apt-get -y install autoconf autopoint\n\n# install autoconf-2.69\ncd /opt/tools\nwget http://ftp.gnu.org/gnu/autoconf/autoconf-2.69.tar.gz && \\\n    tar zxf autoconf-2.69.tar.gz && \\\n    mv autoconf-2.69 /opt/software/autoconf && \\\n    cd /opt/software/autoconf && \\\n    ./configure && \\\n    make && \\\n    make install\n"})}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"5.  \u914D\u7F6E\u73AF\u5883\u53D8\u91CF"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:'# \u914D\u7F6E\u73AF\u5883\u53D8\u91CF\nvim /etc/profile.d/doris.sh\nexport JAVA_HOME=/opt/software/jdk8\nexport MAVEN_HOME=/opt/software/maven\nexport NODE_JS_HOME=/opt/software/nodejs\nexport LDB_HOME=/opt/software/ldb_toolchain\nexport PATH=$JAVA_HOME/bin:$MAVEN_HOME/bin:$NODE_JS_HOME/bin:$LDB_HOME/bin:$PATH\n\n# \u4FDD\u5B58\u9000\u51FA\u5E76\u5237\u65B0\u73AF\u5883\u53D8\u91CF\nsource /etc/profile.d/doris.sh\n\n# \u6D4B\u8BD5\u662F\u5426\u6210\u529F\njava -version\n> java version "1.8.0_291"\nmvn -version\n> Apache Maven 3.6.3\nnode --version\n> v16.3.0\ngcc --version\n> gcc-11\n'})}),"\n",(0,l.jsx)(e.h2,{id:"\u7F16\u8BD1",children:"\u7F16\u8BD1"}),"\n",(0,l.jsx)(e.p,{children:"\u76EE\u524D ARM \u73AF\u5883\u4EC5\u63A8\u8350\u4F7F\u7528 LDB Toolchain \u8FDB\u884C\u7F16\u8BD1\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u5728 ARM \u5E73\u53F0\u7F16\u8BD1 Doris \u65F6\uFF0C\u8BF7\u5173\u95ED AVX2 \u548C LIBUNWIND \u4E09\u65B9\u5E93\uFF1A"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:"export USE_AVX2=OFF\nexport USE_UNWIND=OFF\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u7136\u540E\u53C2\u8003 \u4F7F\u7528 LDB Toolchain \u7F16\u8BD1\u6587\u6863\uFF0C\u8FDB\u884C\u7F16\u8BD1\u3002"}),"\n",(0,l.jsx)(e.h2,{id:"\u5E38\u89C1\u95EE\u9898",children:"\u5E38\u89C1\u95EE\u9898"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"1.  \u7F16\u8BD1\u7B2C\u4E09\u65B9\u5E93 libhdfs3.a\uFF0C\u627E\u4E0D\u5230\u6587\u4EF6\u5939"})}),"\n",(0,l.jsxs)(e.p,{children:["\u5728\u6267\u884C\u7F16\u8BD1\u5B89\u88C5\u8FC7\u7A0B\u4E2D\uFF0C\u51FA\u73B0\u4E86\u5982\u4E0B\u62A5\u9519 ",(0,l.jsx)(e.code,{children:"not found lib/libhdfs3.a file or directory"}),"\u3002"]}),"\n",(0,l.jsx)(e.p,{children:"\u95EE\u9898\u539F\u56E0\uFF1A\u7B2C\u4E09\u65B9\u5E93\u7684\u4F9D\u8D56\u4E0B\u8F7D\u6709\u95EE\u9898\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u89E3\u51B3\u65B9\u6848\uFF1A\u4F7F\u7528\u7B2C\u4E09\u65B9\u5E93\u4E0B\u8F7D\u4ED3\u5E93"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-shell",children:"export REPOSITORY_URL=https://doris-thirdparty-repo.bj.bcebos.com/thirdparty\nsh /opt/doris/thirdparty/build-thirdparty.sh\n"})}),"\n",(0,l.jsx)(e.p,{children:"REPOSITORY_URL \u4E2D\u5305\u542B\u6240\u6709\u7B2C\u4E09\u65B9\u5E93\u6E90\u7801\u5305\u548C\u4ED6\u4EEC\u7684\u5386\u53F2\u7248\u672C\u3002"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"2.  Python \u547D\u4EE4\u672A\u627E\u5230"})}),"\n",(0,l.jsx)(e.p,{children:"\u6267\u884C build.sh \u65F6\u629B\u51FA\u5F02\u5E38\uFF1A"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:"/opt/doris/env.sh: line 46: python: command not found\n"})}),"\n",(0,l.jsxs)(e.p,{children:["\u95EE\u9898\u53EF\u80FD\u539F\u56E0\uFF1A\u7CFB\u7EDF\u9ED8\u8BA4\u4F7F\u7528 ",(0,l.jsx)(e.code,{children:"python2.7"}),"\u3001 ",(0,l.jsx)(e.code,{children:"python3.6"}),"\u3001",(0,l.jsx)(e.code,{children:"python2"}),"\u3001",(0,l.jsx)(e.code,{children:"python3"})," \u8FD9\u51E0\u4E2A\u547D\u4EE4\u6765\u6267\u884C python \u547D\u4EE4\uFF0CDoris \u5B89\u88C5\u4F9D\u8D56\u9700\u8981 python 2.7+ \u7248\u672C\u5373\u53EF\uFF0C\u6545\u53EA\u9700\u8981\u6DFB\u52A0\u540D\u4E3A ",(0,l.jsx)(e.code,{children:"python"})," \u7684\u547D\u4EE4\u8FDE\u63A5\u5373\u53EF\uFF0C\u4F7F\u7528\u7248\u672C 2 \u548C\u7248\u672C 3 \u7684\u90FD\u53EF\u4EE5\u3002"]}),"\n",(0,l.jsxs)(e.p,{children:["\u89E3\u51B3\u65B9\u6848\uFF1A\u5EFA\u7ACB ",(0,l.jsx)(e.code,{children:"\\usr\\bin"})," \u4E2D ",(0,l.jsx)(e.code,{children:"python"})," \u547D\u4EE4\u7684\u8F6F\u8FDE\u63A5\uFF0C\u6BD4\u5982\uFF1A"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-Shell",children:"sudo ln -s /usr/bin/python2.7 /usr/bin/python\n"})}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"3.  \u7F16\u8BD1\u7ED3\u675F\u540E\u6CA1\u6709 output \u76EE\u5F55"})}),"\n",(0,l.jsx)(e.p,{children:"build.sh \u6267\u884C\u7ED3\u675F\u540E\uFF0C\u76EE\u5F55\u4E2D\u672A\u53D1\u73B0 output \u6587\u4EF6\u5939\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u95EE\u9898\u539F\u56E0\uFF1A\u672A\u6210\u529F\u7F16\u8BD1\uFF0C\u9700\u91CD\u65B0\u7F16\u8BD1\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u89E3\u51B3\u65B9\u6848\u5982\u4E0B\uFF1A"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-Shell",children:"sh build.sh --clean\n"})}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"4.  \u5269\u4F59\u7A7A\u95F4\u4E0D\u8DB3\uFF0C\u7F16\u8BD1\u5931\u8D25"})}),"\n",(0,l.jsx)(e.p,{children:"\u7F16\u8BD1\u8FC7\u7A0B\u4E2D\u62A5\u201C\u6784\u5EFA CXX \u5BF9\u8C61\u5931\u8D25\uFF0C\u63D0\u793A\u5269\u4F59\u7A7A\u95F4\u4E0D\u8DB3\u201D\u3002"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.code,{children:"fatal error: error writing to /tmp/ccKn4nPK.s: No space left on device 1112 | } // namespace doris::vectorized compilation terminated."})}),"\n",(0,l.jsx)(e.p,{children:"\u89E3\u51B3\u65B9\u6848\uFF1A\u6269\u5927\u8BBE\u5907\u5269\u4F59\u7A7A\u95F4\uFF0C\u5982\u5220\u9664\u4E0D\u9700\u8981\u7684\u6587\u4EF6\u7B49\u3002"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"5. \u5728 pkg.config \u4E2D\u627E\u4E0D\u5230 pkg.m4 \u6587\u4EF6"})}),"\n",(0,l.jsx)(e.p,{children:"\u7F16\u8BD1\u8FC7\u7A0B\u4E2D\u51FA\u73B0\u4E86\u627E\u4E0D\u5230\u6587\u4EF6\u9519\u8BEF\uFF0C\u62A5\u9519\u5982\u4E0B\uFF1A"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.code,{children:"Couldn't find pkg.m4 from pkg-config. Install the appropriate package for your distribution or set ACLOCAL_PATH to the directory containing pkg.m4."})}),"\n",(0,l.jsxs)(e.p,{children:["\u901A\u8FC7\u67E5\u627E\u4E0A\u9762\u7684\u65E5\u5FD7\uFF0C\u53D1\u73B0\u662F ",(0,l.jsx)(e.code,{children:"libxml2"})," \u8FD9\u4E2A\u4E09\u65B9\u5E93\u5728\u7F16\u8BD1\u7684\u65F6\u5019\u51FA\u73B0\u4E86\u95EE\u9898\u3002"]}),"\n",(0,l.jsxs)(e.p,{children:["\u95EE\u9898\u539F\u56E0\uFF1A",(0,l.jsx)(e.code,{children:"libxml2"})," \u4E09\u65B9\u5E93\u7F16\u8BD1\u9519\u8BEF\uFF0C\u627E\u4E0D\u5230 pkg.m4 \u6587\u4EF6\u3002\u5F88\u6709\u53EF\u80FD\u662F\uFF1A"]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"Ubuntu \u7CFB\u7EDF\u52A0\u8F7D\u73AF\u5883\u53D8\u91CF\u65F6\u6709\u5F02\u5E38\uFF0C\u5BFC\u81F4 ldb \u76EE\u5F55\u4E0B\u7684\u7D22\u5F15\u672A\u88AB\u6210\u529F\u52A0\u8F7D\uFF1B"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u5728 libxml2 \u7F16\u8BD1\u65F6\u68C0\u7D22\u73AF\u5883\u53D8\u91CF\u5931\u6548\uFF0C\u5BFC\u81F4\u7F16\u8BD1\u8FC7\u7A0B\u6CA1\u6709\u68C0\u7D22\u5230 ldb/aclocal \u76EE\u5F55\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.p,{children:["\u89E3\u51B3\u65B9\u6848\u662F\uFF1A\u5C06 ldb/aclocal \u76EE\u5F55\u4E0B\u7684 ",(0,l.jsx)(e.code,{children:"pkg.m4"})," \u6587\u4EF6\u62F7\u8D1D\u81F3 libxml2/m4 \u76EE\u5F55\u4E0B\uFF0C\u91CD\u65B0\u7F16\u8BD1\u7B2C\u4E09\u65B9\u5E93"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-Shell",children:" cp /opt/software/ldb_toolchain/share/aclocal/pkg.m4 /opt/doris/thirdparty/src/libxml2-v2.9.10/m4\n sh /opt/doris/thirdparty/build-thirdparty.sh\n"})}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"6. \u6267\u884C\u6D4B\u8BD5 CURL_HAS_TLS_PROXY \u5931\u8D25"})}),"\n",(0,l.jsx)(e.p,{children:"\u4E09\u65B9\u5305\u7F16\u8BD1\u8FC7\u7A0B\u62A5\u9519\uFF0C\u9519\u8BEF\u5982\u4E0B\uFF1A"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.code,{children:'-- Performing Test CURL_HAS_TLS_PROXY - Failed CMake Error at cmake/dependencies.cmake:15 (get_property): INTERFACE_LIBRARY targets may only have whitelisted properties. The property "LINK_LIBRARIES_ALL" is not allowed.'})}),"\n",(0,l.jsxs)(e.p,{children:["\u67E5\u770B\u65E5\u5FD7\u4EE5\u540E\uFF0C\u53D1\u73B0\u5185\u90E8\u662F\u7531\u4E8E curl ",(0,l.jsx)(e.code,{children:"No such file or directory"})]}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.code,{children:"fa``tal error: curl/curl.h: No such file or directory 2 | #include <curl/curl.h> compilation terminated. ninja: build stopped: subcommand failed."})}),"\n",(0,l.jsx)(e.p,{children:"\u95EE\u9898\u539F\u56E0\uFF1A\u7F16\u8BD1\u73AF\u5883\u6709\u9519\u8BEF\uFF0C\u67E5\u770B gcc \u7248\u672C\u540E\u53D1\u73B0\u662F\u7CFB\u7EDF\u81EA\u5E26\u7684 9.3.0 \u7248\u672C\uFF0C\u6545\u800C\u6CA1\u6709\u8D70 ldb \u7F16\u8BD1\uFF0C\u9700\u8BBE\u7F6E ldb \u73AF\u5883\u53D8\u91CF\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u89E3\u51B3\u65B9\u6848\uFF1A\u914D\u7F6E ldb \u73AF\u5883\u53D8\u91CF\uFF1A"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-Shell",children:" # \u914D\u7F6E\u73AF\u5883\u53D8\u91CF\n vim /etc/profile.d/ldb.sh\n export LDB_HOME=/opt/software/ldb_toolchain\n export PATH=$LDB_HOME/bin:$PATH\n # \u4FDD\u5B58\u9000\u51FA\u5E76\u5237\u65B0\u73AF\u5883\u53D8\u91CF\n source /etc/profile.d/ldb.sh\n # \u6D4B\u8BD5\n gcc --version\n # \u663E\u793A gcc-11\n"})}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"7. \u5176\u4ED6\u7EC4\u4EF6\u95EE\u9898"})}),"\n",(0,l.jsx)(e.p,{children:"\u5982\u6709\u4EE5\u4E0B\u7EC4\u4EF6\u7684\u9519\u8BEF\u63D0\u793A\uFF0C\u5219\u7EDF\u4E00\u4EE5\u8BE5\u65B9\u6848\u89E3\u51B3\uFF1A"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"bison \u76F8\u5173\uFF1A\u5B89\u88C5 bison-3.0.4 \u65F6\u62A5 fseterr.c \u9519\u8BEF"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"flex \u76F8\u5173\uFF1Aflex \u547D\u4EE4\u672A\u627E\u5230"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"cmake \u76F8\u5173"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"cmake \u547D\u4EE4\u672A\u627E\u5230"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"cmake \u627E\u4E0D\u5230\u4F9D\u8D56\u5E93"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"cmake \u627E\u4E0D\u5230 CMAKE_ROOT"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"cmake \u73AF\u5883\u53D8\u91CF CXX \u4E2D\u627E\u4E0D\u5230\u7F16\u8BD1\u5668\u96C6"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"boost \u76F8\u5173\uFF1ABoost.Build \u6784\u5EFA\u5F15\u64CE\u5931\u8D25"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"mysql \u76F8\u5173\uFF1A\u627E\u4E0D\u5230 mysql \u7684\u5BA2\u6237\u7AEF\u4F9D\u8D56 a \u6587\u4EF6"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"gcc \u76F8\u5173\uFF1AGCC \u7248\u672C\u9700\u8981 11+"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"\u95EE\u9898\u539F\u56E0\uFF1A\u90FD\u662F\u672A\u4F7F\u7528\u6B63\u786E\u7684 ldb-toolchain \u8FDB\u884C\u7F16\u8BD1\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u89E3\u51B3\u65B9\u6848\u5982\u4E0B\uFF1A"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u68C0\u67E5 ldb-toolchain \u73AF\u5883\u53D8\u91CF\u662F\u5426\u914D\u7F6E"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["\u67E5\u770B gcc \u7248\u672C\u662F\u5426\u4E0E",(0,l.jsx)(e.a,{href:"../../install/source-install/compilation-with-ldb-toolchain",children:"\u4F7F\u7528 LDB-Toolchain \u7F16\u8BD1"}),"\u6587\u6863\u4E2D\u63A8\u8350\u4E00\u81F4"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["\u5220\u9664 ",(0,l.jsx)(e.code,{children:"ldb_toolchain_gen.aarch64.sh"})," \u811A\u672C\u6267\u884C\u540E\u7684 ldb \u76EE\u5F55\uFF0C\u91CD\u65B0\u6267\u884C\u5E76\u914D\u7F6E\u73AF\u5883\u53D8\u91CF\uFF0C\u9A8C\u8BC1 gcc \u7248\u672C"]}),"\n"]}),"\n"]})]})}function h(n={}){let{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(d,{...n})}):d(n)}},905525:function(n,e,t){t.d(e,{Z:()=>i});var r=t("785893");t("667294");var l=t("74904");let s="tabItem_Ymn6";function i(n){let{children:e,hidden:t,className:i}=n;return(0,r.jsx)("div",{role:"tabpanel",className:(0,l.Z)(s,i),hidden:t,children:e})}},247902:function(n,e,t){t.d(e,{Z:()=>v});var r=t("785893"),l=t("667294"),s=t("74904"),i=t("69599"),o=t("616550"),a=t("232000"),c=t("4520"),d=t("38341"),h=t("876009");function p(n){return l.Children.toArray(n).filter(n=>"\n"!==n).map(n=>{if(!n||l.isValidElement(n)&&function(n){let{props:e}=n;return!!e&&"object"==typeof e&&"value"in e}(n))return n;throw Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof n.type?n.type:n.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})?.filter(Boolean)??[]}function u(n){let{value:e,tabValues:t}=n;return t.some(n=>n.value===e)}var x=t("7227");let j="tabList__CuJ",m="tabItem_LNqP";function g(n){let{className:e,block:t,selectedValue:l,selectValue:o,tabValues:a}=n,c=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),h=n=>{let e=n.currentTarget,t=a[c.indexOf(e)].value;t!==l&&(d(e),o(t))},p=n=>{let e=null;switch(n.key){case"Enter":h(n);break;case"ArrowRight":{let t=c.indexOf(n.currentTarget)+1;e=c[t]??c[0];break}case"ArrowLeft":{let t=c.indexOf(n.currentTarget)-1;e=c[t]??c[c.length-1]}}e?.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},e),children:a.map(n=>{let{value:e,label:t,attributes:i}=n;return(0,r.jsx)("li",{role:"tab",tabIndex:l===e?0:-1,"aria-selected":l===e,ref:n=>c.push(n),onKeyDown:p,onClick:h,...i,className:(0,s.Z)("tabs__item",m,i?.className,{"tabs__item--active":l===e}),children:t??e},e)})})}function b(n){let{lazy:e,children:t,selectedValue:i}=n,o=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){let n=o.find(n=>n.props.value===i);return n?(0,l.cloneElement)(n,{className:(0,s.Z)("margin-top--md",n.props.className)}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:o.map((n,e)=>(0,l.cloneElement)(n,{key:e,hidden:n.props.value!==i}))})}function f(n){let e=function(n){let{defaultValue:e,queryString:t=!1,groupId:r}=n,s=function(n){let{values:e,children:t}=n;return(0,l.useMemo)(()=>{let n=e??p(t).map(n=>{let{props:{value:e,label:t,attributes:r,default:l}}=n;return{value:e,label:t,attributes:r,default:l}});return!function(n){let e=(0,d.lx)(n,(n,e)=>n.value===e.value);if(e.length>0)throw Error(`Docusaurus error: Duplicate values "${e.map(n=>n.value).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(n),n},[e,t])}(n),[i,x]=(0,l.useState)(()=>(function(n){let{defaultValue:e,tabValues:t}=n;if(0===t.length)throw Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!u({value:e,tabValues:t}))throw Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${t.map(n=>n.value).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}let r=t.find(n=>n.default)??t[0];if(!r)throw Error("Unexpected error: 0 tabValues");return r.value})({defaultValue:e,tabValues:s})),[j,m]=function(n){let{queryString:e=!1,groupId:t}=n,r=(0,o.k6)(),s=function(n){let{queryString:e=!1,groupId:t}=n;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!t)throw Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:e,groupId:t}),i=(0,c._X)(s);return[i,(0,l.useCallback)(n=>{if(!s)return;let e=new URLSearchParams(r.location.search);e.set(s,n),r.replace({...r.location,search:e.toString()})},[s,r])]}({queryString:t,groupId:r}),[g,b]=function(n){var e;let{groupId:t}=n;let r=(e=t)?`docusaurus.tab.${e}`:null,[s,i]=(0,h.Nk)(r);return[s,(0,l.useCallback)(n=>{if(!!r)i.set(n)},[r,i])]}({groupId:r}),f=(()=>{let n=j??g;return u({value:n,tabValues:s})?n:null})();return(0,a.Z)(()=>{f&&x(f)},[f]),{selectedValue:i,selectValue:(0,l.useCallback)(n=>{if(!u({value:n,tabValues:s}))throw Error(`Can't select invalid tab value=${n}`);x(n),m(n),b(n)},[m,b,s]),tabValues:s}}(n);return(0,r.jsxs)("div",{className:(0,s.Z)("tabs-container",j),children:[(0,r.jsx)(g,{...e,...n}),(0,r.jsx)(b,{...e,...n})]})}function v(n){let e=(0,x.Z)();return(0,r.jsx)(f,{...n,children:p(n.children)},String(e))}},250065:function(n,e,t){t.d(e,{Z:function(){return o},a:function(){return i}});var r=t(667294);let l={},s=r.createContext(l);function i(n){let e=r.useContext(s);return r.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:i(n.components),r.createElement(s.Provider,{value:e},n.children)}}}]);