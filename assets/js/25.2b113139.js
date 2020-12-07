(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{340:function(e,s,a){"use strict";a.r(s);var r=a(0),t=Object(r.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"关于overlay2存储驱动的磁盘配额问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于overlay2存储驱动的磁盘配额问题"}},[e._v("#")]),e._v(" 关于overlay2存储驱动的磁盘配额问题")]),e._v(" "),a("h1",{attrs:{id:"概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[e._v("#")]),e._v(" 概述")]),e._v(" "),a("p",[e._v("这篇短文向大家介绍一下正确使用存储驱动的姿势，非常有用。")]),e._v(" "),a("h2",{attrs:{id:"为啥要用overlay2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为啥要用overlay2"}},[e._v("#")]),e._v(" 为啥要用overlay2")]),e._v(" "),a("ul",[a("li",[e._v("docker centos（内核3.10）上默认存储驱动是devicemapper 的loop-lvm模式，这种模式是用文件模拟块设备，不推荐生产使用")]),e._v(" "),a("li",[e._v("direct lvm又不是一个开箱即用的模式，懒得配置")]),e._v(" "),a("li",[e._v("最关键的是 docker in docker的情况下 device mapper是行不通的，典型的场景就是用drone时，构建docker镜像就不能正常工作")]),e._v(" "),a("li",[e._v("overlay存储驱动层数过多时会导致文件链接数过多可能会耗尽inode")])]),e._v(" "),a("p",[e._v("所以当前overlay2是个比较好的选择\n")]),e._v(" "),a("h2",{attrs:{id:"内核"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内核"}},[e._v("#")]),e._v(" 内核")]),e._v(" "),a("p",[e._v("你需要一个高版本的内核推荐4.9以上，我们用的是4.14，如果使用低内核可能你一些FROM别的基础镜像就跑不了，如用overlay2在centos系统上跑FROM ubuntu的镜像（不是必现）")]),e._v(" "),a("p",[e._v("我们这里提供了一个免费的"),a("a",{attrs:{href:"https://github.com/sealyun/kernel/releases/tag/v4.14.49",target:"_blank",rel:"noopener noreferrer"}},[e._v("内核rpm包"),a("OutboundLink")],1),e._v(" 这个在我们生产环境跑了将近一年没出任何问题")]),e._v(" "),a("h2",{attrs:{id:"监控"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#监控"}},[e._v("#")]),e._v(" 监控")]),e._v(" "),a("p",[e._v("overlay2如果不做一些特殊操作，cadvisor是监控不到容器内实际使用多少磁盘的，经过xfs和配额配置才能正常监控到")]),e._v(" "),a("h1",{attrs:{id:"使用xfs文件系统"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用xfs文件系统"}},[e._v("#")]),e._v(" 使用xfs文件系统")]),e._v(" "),a("p",[e._v("不使用xfs就无法做到给每个容器限制10G的大小，就可能出现一个容器的误操作导致把机器盘全占完")]),e._v(" "),a("p",[e._v("我们使用了lvm去弄个分区出来做xfs文件系统，当然你也可以不用lvm")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('if which lvs &>/dev/null; then\n  echo ""; echo -e "Remove last docker lv and mount ......"\n  lvremove k8s/docker -y\n  lvcreate -y -n docker k8s -L 100G\n  mkfs.xfs -n ftype=1 -f /dev/mapper/k8s-docker\n  mkdir -p /var/lib/docker\n  mount -o pquota,uqnoenforce /dev/mapper/k8s-docker /var/lib/docker\n  echo -e "/dev/mapper/k8s-docker                                  /var/lib/docker         xfs     defaults,pquota        0 0" >> /etc/fstab\nfi\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br")])]),a("h1",{attrs:{id:"配置使用overlay2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置使用overlay2"}},[e._v("#")]),e._v(" 配置使用overlay2")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('# cat /etc/docker/daemon.json\n{\n  "storage-opts": [\n    "overlay2.override_kernel_check=true",\n    "overlay2.size=10G"\n  ],\n  "log-driver": "json-file",\n  "log-opts": {\n    "max-size": "10m"\n  }\n}\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br")])]),a("p",[e._v("systemctl daemon-reload\nsystemctl restart docker")]),e._v(" "),a("p",[e._v("这样就可以把每个容器磁盘大小限制在10G了")]),e._v(" "),a("p",[e._v("探讨可加QQ群：98488045")])])}),[],!1,null,null,null);s.default=t.exports}}]);