(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{343:function(s,n,e){"use strict";e.r(n);var a=e(0),t=Object(a.a)({},(function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"ovs对接容器网络"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ovs对接容器网络"}},[s._v("#")]),s._v(" ovs对接容器网络")]),s._v(" "),e("h1",{attrs:{id:"初始化环境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#初始化环境"}},[s._v("#")]),s._v(" 初始化环境")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("升级内核：\n      rpm --import https://www.elrepo.org/RPM-GPG-KEY-elrepo.org\n      rpm -Uvh http://www.elrepo.org/elrepo-release-7.0-2.el7.elrepo.noarch.rpm\n      yum --enablerepo=elrepo-kernel install  kernel-ml-devel kernel-ml\n      awk -F\\' '$1==\"menuentry \" {print $2}' /etc/grub2.cfg\n      grub2-set-default 0\n      reboot\n      uname -a\n\n安装docker:\n     yum install -y yum-utils\n     yum-config-manager     --add-repo     https://download.docker.com/linux/centos/docker-ce.repo\n     yum-config-manager --disable docker-ce-edge\n     yum makecache fast\n     yum install docker-ce\n     service docker start\n\n\n安装open vswitch:\n     yum -y install wget openssl-devel gcc make python-devel openssl-devel kernel-devel graphviz kernel-debug-devel autoconf automake rpm-build redhat-rpm-config libtool python-twisted-core python-zope-interface PyQt4 desktop-file-utils libcap-ng-devel groff checkpolicy selinux-policy-devel\n     adduser ovs\n     su - ovs\n     yum localinstall /home/ovs/rpmbuild/RPMS/x86_64/openvswitch-2.5.0-1.el7.centos.x86_64.rpm -y\n     systemctl start openvswitch.service\n     systemctl is-active openvswitch\n     ovs-vsctl -V\n     systemctl enable openvswitch\n\n安装pipework:\n     yum install git\n     git clone https://github.com/jpetazzo/pipework\n     cp pipework/pipework /bin\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br")])]),s._v(" "),e("p",[s._v("一些工具安装：\nyum install bridge-utils  # 如果brctl不能用")]),s._v(" "),e("p",[s._v("yum install net-tools     # 如果route命令不能用")]),s._v(" "),e("h1",{attrs:{id:"单节点上使用ovs-vlan划分网络"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#单节点上使用ovs-vlan划分网络"}},[s._v("#")]),s._v(" 单节点上使用ovs vlan划分网络")]),s._v(" "),e("p",[s._v("启动四个容器：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("docker run -itd --name con1 ubuntu:14.04 /bin/bash\ndocker run -itd --name con2 ubuntu:14.04 /bin/bash\ndocker run -itd --name con3 ubuntu:14.04 /bin/bash\ndocker run -itd --name con4 ubuntu:14.04 /bin/bash\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("创建ovs网桥并绑定端口")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("pipework ovs0 con1 192.168.0.1/24 @100\npipework ovs0 con2 192.168.0.2/24 @100\n\npipework ovs0 con3 192.168.0.3/24 @200\npipework ovs0 con4 192.168.0.4/24 @200\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("这样con1 和 con2是通的，con3和con4是通的，这个比较简单。pipework干的具体的事是：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("ovs-vsctl add-port ovs0 [容器的虚拟网卡设备] tag=100\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("ovs划分vlan处理的原理也非常简单，包进入到switch时打上tag，发出去时去掉tag，发出去的端口与包的tag不匹配时不处理，这便实现了二层隔离。")]),s._v(" "),e("p",[s._v("access端口与trunk端口的区别是，trunk端口可接受多个tag。")]),s._v(" "),e("h1",{attrs:{id:"跨主机vlan"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#跨主机vlan"}},[s._v("#")]),s._v(" 跨主机vlan")]),s._v(" "),e("p",[s._v("准备两个主机，在host1上：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("docker run -itd --name con1 ubuntu:14.04 /bin/bash\ndocker run -itd --name con2 ubuntu:14.04 /bin/bash\npipework ovs0 con1 192.168.0.1/24 @100\npipework ovs0 con2 192.168.0.2/24 @200\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("如果是单张网卡的话，把eth0桥接到switch上时会造成网络中断，所以以下几步不要通过ssh操作：\n如果非得ssh去操作的话把以下命令放在一条命令中执行（用&&连接各个命令）")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("ovs-vsctl add-port ovs0 eth0\nifconfig ovs0 10.1.86.201 netmask 255.255.255.0   # 这里地址和掩码与eth0的配置一致\nifconfig ovs0 up\nifconfig eth0 0.0.0.0\nroute add default gw 10.1.86.1  # 执行之前看看eth0的gw是什么，保持一致，这样eth0就桥接到ovs0上去了。\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("查看switch端口：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('[root@dev-86-204 ~]# ovs-vsctl show\nc5ddf9e8-daac-4ed2-80f5-16e6365425fa\n    Bridge "ovs0"\n        Port "veth1pl41885"\n            tag: 100\n            Interface "veth1pl41885"\n        Port "ovs0"\n            Interface "ovs0"\n                type: internal\n        Port "eth0"\n            Interface "eth0"\n        Port "veth1pl41805"\n            tag: 200\n            Interface "veth1pl41805"\n    ovs_version: "2.5.1"\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br")])]),e("p",[s._v("在host2上：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("docker run -itd --name con3 ubuntu:14.04 /bin/bash\ndocker run -itd --name con4 ubuntu:14.04 /bin/bash\npipework ovs0 con3 192.168.0.3/24 @100\npipework ovs0 con4 192.168.0.4/24 @200\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("同样要桥接eth0到ovs0上,同host1的操作，然后con1与con3可通，con2与con4可通.")]),s._v(" "),e("h1",{attrs:{id:"gre实现overlay网络"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gre实现overlay网络"}},[s._v("#")]),s._v(" GRE实现overlay网络")]),s._v(" "),e("p",[s._v("linux内核需要3.11以上，本尊在3.10内核上实践失败，在虚拟机中升级内核时虚拟机启动不了，CPU飙到100%，以后再试。")]),s._v(" "),e("p",[s._v("发现把容器直接挂ovs网桥上是可以通的")]),s._v(" "),e("p",[s._v("gre与下面的vxlan非常类似，只需要在添加往外连的端口时改成下面命令即可：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("ovs-vsctl add-port ovs0 gre0 -- set interface gre0 type=gre options:remote_ip=172.31.244.185\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h1",{attrs:{id:"vxlan实现跨主机通信"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vxlan实现跨主机通信"}},[s._v("#")]),s._v(" Vxlan实现跨主机通信")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("   host1:10.1.86.203 \n   ovs0\n    |\n    |-veth1 <-------\x3e eth1 192.168.0.3  con3\n    |\n    |-vxlan1-------------+\n    |                    |\n                         |\n    host2:10.1.86.204    |\n    ovs0                 |\n     |                   |\n     |-vxlan1------------+\n     |\n     |-veth1 <--------\x3e eth1 192.168.0.4 con4\n     |\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br")])]),e("p",[s._v("可以看到con3和con4在搭建vxlan之前是无法通信的。")]),s._v(" "),e("p",[s._v("在host1上：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('[root@dev-86-203 ~]# docker run --name con3 -itd ubuntu:14.04 /bin/bash\n[root@dev-86-203 ~]# ovs-vsctl add-br ovs0\n[root@dev-86-203 ~]# pipework ovs0 con3 192.168.0.3/24   # 给容器分配地址并挂到ovs0上\n\n[root@dev-86-203 ~]# ovs-vsctl add-port ovs0 vxlan1 -- set interface vxlan1 type=vxlan options:remote_ip=10.1.86.204 options:key=flow # 创建vxlan\n\n[root@dev-86-203 ~]# ovs-vsctl show\n5e371797-db70-451c-a0f2-d70c6d00cd05\n    Bridge "ovs0"\n        Port "veth1pl3342"\n            Interface "veth1pl3342"\n        Port "ovs0"\n            Interface "ovs0"\n                type: internal\n        Port "vxlan1"\n            Interface "vxlan1"\n                type: vxlan\n                options: {key=flow, remote_ip="10.1.86.204"}\n    ovs_version: "2.5.1"\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br")])]),e("p",[s._v("host2上同理：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('[root@dev-86-204 ~]# docker run --name con4 -itd ubuntu:14.04 /bin/bash\n[root@dev-86-204 ~]# ovs-vsctl add-br ovs0\n[root@dev-86-204 ~]# pipework ovs0 con4 192.168.0.4/24   # 给容器分配地址并挂到ovs0上\n\n[root@dev-86-204 ~]# ovs-vsctl add-port ovs0 vxlan1 -- set interface vxlan1 type=vxlan options:remote_ip=10.1.86.203 options:key=flow # 创建vxlan\n\n[root@dev-86-204 ~]# ovs-vsctl show\nc5ddf9e8-daac-4ed2-80f5-16e6365425fa\n    Bridge "ovs0"\n        Port "ovs0"\n            Interface "ovs0"\n                type: internal\n        Port "veth1pl52846"\n            Interface "veth1pl52846"\n        Port "vxlan1"\n            Interface "vxlan1"\n                type: vxlan\n                options: {key=flow, remote_ip="10.1.86.203"}\n    ovs_version: "2.5.1"\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br")])]),e("p",[s._v("验证：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("[root@dev-86-204 ~]# docker exec con4 ping 192.168.0.3  # con4容器中ping con3的地址，可通\nPING 192.168.0.3 (192.168.0.3) 56(84) bytes of data.\n64 bytes from 192.168.0.3: icmp_seq=1 ttl=64 time=0.251 ms\n64 bytes from 192.168.0.3: icmp_seq=2 ttl=64 time=0.170 ms\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);