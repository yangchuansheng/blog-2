(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{352:function(e,s,a){"use strict";a.r(s);var n=a(0),t=Object(n.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"keepalived-in-docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keepalived-in-docker"}},[e._v("#")]),e._v(" keepalived in docker")]),e._v(" "),a("h1",{attrs:{id:"kubernetes集群三步安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kubernetes集群三步安装"}},[e._v("#")]),e._v(" "),a("a",{attrs:{href:"https://sealyun.com/pro/products/",target:"_blank",rel:"noopener noreferrer"}},[e._v("kubernetes集群三步安装"),a("OutboundLink")],1)]),e._v(" "),a("h1",{attrs:{id:"概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[e._v("#")]),e._v(" 概述")]),e._v(" "),a("p",[e._v("目前keepalived作为kubernetes集群高可用的重要组件，保障虚拟ip可以在多个主机间漂移，"),a("a",{attrs:{href:"https://github.com/fanux/sealos",target:"_blank",rel:"noopener noreferrer"}},[e._v("sealos"),a("OutboundLink")],1),e._v(" 也是使用了，只是在方案上与传统的方式有很大区别")]),e._v(" "),a("p",[e._v("首先把keepalived放到容器里了，版本也用了比较新的2.x.x以上")]),e._v(" "),a("p",[e._v("然后使用kubernetes static pod去管理keepalived服务")]),e._v(" "),a("h1",{attrs:{id:"keepalived放到容器里的好处"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keepalived放到容器里的好处"}},[e._v("#")]),e._v(" keepalived放到容器里的好处")]),e._v(" "),a("ul",[a("li",[e._v("安装成功率更高，更跨平台, 传统方式如用yum安装或者其它，如果采用那些办法在别的一些发型版系统上sealos就不可用。其次，很多系统的源不一样导致版本不一致造成问题，如果通过源码编译可能一些系统库版本直接导致编译不通过，所以为了提高高可用的安装成功率，放容器里是最好的方式")]),e._v(" "),a("li",[e._v("无需额外对keepalived增加监控, 因为是pod，而sealos又已经集成了prometheus，所以不需要再额外添加监控信息")]),e._v(" "),a("li",[e._v("统一管理, keepalived异常退出什么的kubelet也会将其拉起，与其它的kubernetes组件就有了一个统一的方式管理\n")])]),e._v(" "),a("h1",{attrs:{id:"keepalived在k8s中高可用中的作用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keepalived在k8s中高可用中的作用"}},[e._v("#")]),e._v(" keepalived在k8s中高可用中的作用")]),e._v(" "),a("p",[e._v("sealos中图中LVS的地方替换成HAproxy了\n"),a("img",{attrs:{src:"/HA-arch.png",alt:""}})]),e._v(" "),a("p",[e._v("kubelet kubeproxy在连接master时，如果配置某个具体的master节点的IP，当该master宕机时集群中节点就不能正常工作，所以需要keepalived提供一个虚拟IP在多个节点之间漂移。")]),e._v(" "),a("p",[e._v("然后组件就可以通过vip访问haproxy，haproxy去负载多个master节点")]),e._v(" "),a("h1",{attrs:{id:"实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现"}},[e._v("#")]),e._v(" 实现")]),e._v(" "),a("p",[e._v("keepalived的Dockerfile:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('FROM centos:7.4.1708\nRUN yum install -y  wget  && yum install -y gcc-c++ openssl-devel openssl && yum install -y net-tools \nRUN wget http://www.keepalived.org/software/keepalived-2.0.8.tar.gz && tar zxvf keepalived-2.0.8.tar.gz && cd keepalived-2.0.8 && ./configure && make && make install  \nCMD ["keepalived", "-n","--all", "-d", "-D",  "-f", "/etc/keepalived/keepalived.conf", "--log-console"]\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])]),a("p",[e._v("这里需要用-n参数让keepalived在前台启动，之前在前台启动有一些无法执行检测脚本的问题，和官方沟通后解决, 不然可能需要用一些守护进程去守护，就比较恶心了.")]),e._v(" "),a("p",[e._v("keepalived配置, "),a("a",{attrs:{href:"https://github.com/fanux/sealos/blob/master/roles/keepalived/templates/keepalived.conf.j2",target:"_blank",rel:"noopener noreferrer"}},[e._v("模板文件"),a("OutboundLink")],1),e._v("：")]),e._v(" "),a("p",[e._v("模板里的值对应下文host文件里的一些值")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('global_defs {\n   router_id kubernetes\n}\n\nvrrp_script Checkhaproxy {\n    script "/etc/keepalived/check_haproxy.sh"\n    interval 3\n    weight -25 \n}\n\nvrrp_instance VI_1 {\n    state {{ lb }}\n\n    interface {{ ansible_default_ipv4.interface }}\n    virtual_router_id  100\n    priority {{ priority }}\n    advert_int 1\n\n    authentication {\n        auth_type PASS\n        auth_pass kubernetes\n    }\n\n    virtual_ipaddress {\n         {{ vip }} \n    }\n    track_script {\n        Checkhaproxy\n    }\n}\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br"),a("span",{staticClass:"line-number"},[e._v("21")]),a("br"),a("span",{staticClass:"line-number"},[e._v("22")]),a("br"),a("span",{staticClass:"line-number"},[e._v("23")]),a("br"),a("span",{staticClass:"line-number"},[e._v("24")]),a("br"),a("span",{staticClass:"line-number"},[e._v("25")]),a("br"),a("span",{staticClass:"line-number"},[e._v("26")]),a("br"),a("span",{staticClass:"line-number"},[e._v("27")]),a("br"),a("span",{staticClass:"line-number"},[e._v("28")]),a("br"),a("span",{staticClass:"line-number"},[e._v("29")]),a("br"),a("span",{staticClass:"line-number"},[e._v("30")]),a("br")])]),a("p",[e._v("这里的检测脚本检测失败后优先级就-25，这样主原先的优先级是100，从是80，优先级低于从了，vip就会漂移到从上面。")]),e._v(" "),a("p",[e._v("再看一下keepalived"),a("a",{attrs:{href:"https://github.com/fanux/sealos/blob/master/roles/keepalived/templates/check_haproxy.sh.j2",target:"_blank",rel:"noopener noreferrer"}},[e._v("检测脚本"),a("OutboundLink")],1),e._v(", 如果HAproxy代理的master节点返回值异常了，就漂移：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("#!/bin/bash\n\nif [ `curl https://{{ ansible_default_ipv4.address }}:6444 --insecure |grep kind |wc -l` -eq 0 ] ; then\n   exit 1 # just exit, MASTER will reduce weight(-25), so vip will move on BACKUP node\nfi\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])]),a("p",[e._v("这里网上有很多人简单粗暴的配置检测haproxy进程在不在，其实是有问题的，因为一旦haproxy假死，其实已经不正常了 但是IP漂移不走。")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/fanux/sealos/blob/master/roles/haproxy/templates/haproxy.cfg.j2",target:"_blank",rel:"noopener noreferrer"}},[e._v("haproxy配置"),a("OutboundLink")],1),e._v("了check功能，所以不论哪个master挂了，都能负载到其它master上")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("global\n  daemon\n  log 127.0.0.1 local0\n  log 127.0.0.1 local1 notice\n  maxconn 4096\ndefaults\n  log               global\n  retries           3\n  maxconn           2000\n  timeout connect   5s\n  timeout client    50s\n  timeout server    50s\nfrontend k8s\n  bind *:6444\n  mode tcp\n  default_backend k8s-backend\nbackend k8s-backend\n  balance roundrobin\n  mode tcp\n  {% for host in groups['k8s-master'] %}\n  server {{hostvars[host].name}} {{ host }}:6443 check port 6443  inter 1500 rise 1 fall 3\n  {% endfor %}\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br"),a("span",{staticClass:"line-number"},[e._v("21")]),a("br"),a("span",{staticClass:"line-number"},[e._v("22")]),a("br")])]),a("h1",{attrs:{id:"测试过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试过程"}},[e._v("#")]),e._v(" 测试过程")]),e._v(" "),a("p",[e._v("我安装了一个集群,具体安装"),a("a",{attrs:{href:"https://github.com/fanux/sealos",target:"_blank",rel:"noopener noreferrer"}},[e._v("参考文档"),a("OutboundLink")],1),e._v("，host文件为：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("[k8s-master]\n10.1.86.201 name=node01 order=1 role=master lb=MASTER lbname=lbmaster priority=100\n10.1.86.202 name=node02 order=2 role=master lb=BACKUP lbname=lbbackup priority=80\n10.1.86.203 name=node03 order=3 role=master\n\n[k8s-node]\n10.1.86.205 name=node04 role=node\n\n[k8s-all:children]\nk8s-master\nk8s-node\n\n[all:vars]\nvip=10.1.86.209\nk8s_version=1.13.2\nip_interface=eth.*\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br")])]),a("p",[e._v("安装完之后查看vip是否正常：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("[root@dev-86-201 ~]# ip addr|grep 209\n    inet 10.1.86.209/32 scope global eth0  # 能看到vip\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("停掉haproxy检查vip是不是漂移到202上：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("[root@dev-86-201 ~]# mv /etc/kubernetes/manifests/haproxy.yaml .\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("再看vip：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("[root@dev-86-201 ~]# ip addr|grep 209 # 已经不在\n[root@dev-86-201 ~]# \n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("vip正常漂移到202上：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("[root@dev-86-202 ~]# ip addr|grep 209\n    inet 10.1.86.209/32 scope global eth0  # 能看到vip\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("再恢复haproxy:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v(" mv haproxy.yaml /etc/kubernetes/manifests/\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("vip再次漂回201：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("[root@dev-86-201 ~]# ip addr|grep 209\n    inet 10.1.86.209/32 scope global eth0  # 能看到vip\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("如果关闭机器或者拔掉网卡也会与上述结果一致，请各位可自测")]),e._v(" "),a("h1",{attrs:{id:"其它"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其它"}},[e._v("#")]),e._v(" 其它")]),e._v(" "),a("p",[e._v("sealos非常简单轻量，不追求大而全的功能，而提供核心的实现，这样无论是使用还是定制修改，或者把其中某一块哪出来都非常方便。")]),e._v(" "),a("p",[e._v("比如只需要用keepalived+haproxy的场景，   只需要装etcd高可用集群的场景等等")]),e._v(" "),a("p",[e._v("不管你懂不懂ansible，我相信看看看都能很容易看懂sealos的代码，然后根据自己的需要去做一些定制等")]),e._v(" "),a("p",[e._v("QQ群：98488045")])])}),[],!1,null,null,null);s.default=t.exports}}]);