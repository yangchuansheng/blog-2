(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{343:function(s,e,n){"use strict";n.r(e);var a=n(0),t=Object(a.a)({},(function(){var s=this,e=s.$createElement,n=s._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"容器网络概述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#容器网络概述"}},[s._v("#")]),s._v(" 容器网络概述")]),s._v(" "),n("h2",{attrs:{id:"网络概述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#网络概述"}},[s._v("#")]),s._v(" 网络概述")]),s._v(" "),n("ol",[n("li",[s._v("端口映射：")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("$ docker run -p 8080:80 nginx:latest\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("如果没有这个-p，会发现启动了nginx但是无法通过宿主机访问到web服务，而使用了-p参数后就可以通过访问主机的8080断开去访问nginx了。\n端口映射的原理是作了net转发")]),s._v(" "),n("ol",{attrs:{start:"2"}},[n("li",[s._v("共享主机网络:")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("$ docker run --net=host nginx:latest\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("这种容器没有自己的网络，完全共享主机的网络，所以可以通过主机ip直接访问容器服务。 坏处是容器与其它容器端口冲突\n")]),s._v(" "),n("ol",{attrs:{start:"3"}},[n("li",[s._v("link网络")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("$ docker run --name mysql mysql:latest\n$ docker run --link=mysql nginx:latest\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("这样nginx可以通过容器名去访问mysql，其原理是在nginx容器中的/etc/hosts中加入了mysql主机名解析。这种共享不可跨主机")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("$ docker run --rm -it --name c1 centos:latest /bin/bash\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("$ docker run --rm -it --name c2 --link c1  centos:latest /bin/bash\n[root@178d290d873c /]# cat /etc/hosts\n127.0.0.1    localhost\n::1    localhost ip6-localhost ip6-loopback\nfe00::0    ip6-localnet\nff00::0    ip6-mcastprefix\nff02::1    ip6-allnodes\nff02::2    ip6-allrouters\n172.17.0.4    c1 3b7b15fa7e20   # 看这里\n172.17.0.5    178d290d873c\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("ol",{attrs:{start:"4"}},[n("li",[n("p",[s._v("none模式\n容器不创建网络，需要自行定义")])]),s._v(" "),n("li",[n("p",[s._v("overlay网络\n进群中常用的网络模式，使用vxlan等技术作了一层覆盖，使每个容器有自己独立的ip并可跨主机通信。")])]),s._v(" "),n("li",[n("p",[s._v("共享容器网络")])])]),s._v(" "),n("p",[s._v("如kubernetes里pod的实现，pod是多个容器的集合，这些容器都共享了同一个容器的网络，那么这些容器就如同在一个host上一样。")]),s._v(" "),n("h3",{attrs:{id:"bridge原理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#bridge原理"}},[s._v("#")]),s._v(" bridge原理")]),s._v(" "),n("p",[s._v("在宿主机上ifconfig:")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("docker0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500\n        inet 172.17.0.1  netmask 255.255.0.0  broadcast 0.0.0.0\n        inet6 fe80::42:a4ff:fe60:b79d  prefixlen 64  scopeid 0x20<link>\n        ether 02:42:a4:60:b7:9d  txqueuelen 0  (Ethernet)\n        RX packets 23465  bytes 3407255 (3.2 MiB)\n        RX errors 0  dropped 0  overruns 0  frame 0\n        TX packets 24676  bytes 22031766 (21.0 MiB)\n        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0\n\nvethcd2d45d: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500\n        inet6 fe80::c4d6:dcff:fe7d:5f44  prefixlen 64  scopeid 0x20<link>\n        ether c6:d6:dc:7d:5f:44  txqueuelen 0  (Ethernet)\n        RX packets 415  bytes 82875 (80.9 KiB)\n        RX errors 0  dropped 0  overruns 0  frame 0\n        TX packets 372  bytes 379450 (370.5 KiB)\n        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br")])]),n("p",[s._v("docker0是一个虚拟网桥，类似一个交换机的存在。 veth开头的网卡就是为容器分配的一个设备,但是要注意这不是容器中的设备。由于linux物理网卡只能出现在一个namespace中，所以只能用虚拟设备给容器创建独立的网卡。")]),s._v(" "),n("p",[s._v("docker network inspect bridge 看一下,这是给容器内部分配的地址：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('"Containers": {\n    "ac8c983592f06d585a75184b4dcd012338645fb7fa60b07c722f59ce43ceb807": {\n        "Name": "sick_snyder",\n        "EndpointID": "0755707344f30c40d686a2b4fdcabf45d6e1a64f8de8618b9a3a8c8e5b203ddc",\n        "MacAddress": "02:42:ac:11:00:02",\n        "IPv4Address": "172.17.0.2/16",\n        "IPv6Address": ""\n    }\n}\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("p",[s._v("再引入一个概念：linux设备对，类似管道一样，在一端写另一端就可以读,容器内的eth0就与这个veth是一对设备对")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("           docker0         eth0 -> 宿主机\n        ---------------    ----\n         |          |\n        vethx      vethy\n        ----       ----\n          |          |    ----\x3e设备对\n     +----+---+ +----+---+\n     |  eth0  | |  eth0  |\n     +--------+ +--------+\n      容器1       容器2\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("p",[s._v("单有这些还不够，还需要iptables对包作一些处理,下文细说。有了这些理论，再去顺着这个思路去读网络模块的代码")]),s._v(" "),n("h2",{attrs:{id:"network-namespace实践"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#network-namespace实践"}},[s._v("#")]),s._v(" network namespace实践")]),s._v(" "),n("h3",{attrs:{id:"使用ip操作docker-net-namespace"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#使用ip操作docker-net-namespace"}},[s._v("#")]),s._v(" 使用ip操作docker net namespace")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("docker inspect --format '{{ .State.Pid }}' test1\nmkdir /var/run/netns   # ip命令的网络命名空间\nln -s /proc/1231221/ns/net /var/run/netns/test1\nip netns list\nip netns exec test1 ip link\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("使用ip命令，如果没有的话安装一下："),n("code",[s._v("yum install net-tools")])]),s._v(" "),n("p",[s._v("基本命令：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("ip netns add nstest  # 创建一个net namespace\nip netns list        # 查看net namespace列表\nip netns delete nstest # 删除\nip netns exec [ns name] command # 到对应的ns里去执行命令\nip netns exec [ns name] bash # 在ns中使用bash,需要要ns中做一系列操作时方便\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("开启ns中的回环设备,以创建的nstest为例")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("ip netns exec nstest ip link set dev lo up\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("在主机上创建两个虚拟网卡两张网卡是linux设备对")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("ip link set add veth-a type veth peer name veth-b\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("添加veth-b到nstest中")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("ip link set veth-b netns nstest\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("验证：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("[root@dev-86-208 ~]# ip netns exec nstest ip link\n1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN mode DEFAULT\n    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00\n251: veth-b@if252: <BROADCAST,MULTICAST> mtu 1500 qdisc noop state DOWN mode DEFAULT qlen 1000\n    link/ether aa:0a:7d:01:06:d3 brd ff:ff:ff:ff:ff:ff link-netnsid 0\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("为网卡设置ip并启动：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("[root@dev-86-208 ~]# ip addr add 10.0.0.1/24 dev veth-a\n[root@dev-86-208 ~]# ip link set dev veth-a up\n\n[root@dev-86-208 ~]# ip netns exec nstest ip addr add 10.0.0.2/24 dev veth-b\n[root@dev-86-208 ~]# ip netns exec nstest ip link set dev veth-b up\n\n设置完ip，自动添加了这个路由\n[root@dev-86-208 ~]# route\nKernel IP routing table\nDestination     Gateway         Genmask         Flags Metric Ref    Use Iface\ndefault         10.1.86.1       0.0.0.0         UG    100    0        0 eth0\n10.0.0.0        0.0.0.0         255.255.255.0   U     0      0        0 veth-a # 目的地址是10.0.0.0/24的就从这张网卡发出\n10.1.86.0       0.0.0.0         255.255.255.0   U     100    0        0 eth0\n172.17.0.0      0.0.0.0         255.255.0.0     U     0      0        0 docker0\n172.18.0.0      0.0.0.0         255.255.0.0     U     0      0        0 br-4b03f208bc30\n\nns里面的路由表\n[root@dev-86-208 ~]# ip netns exec nstest ip route\n10.0.0.0/24 dev veth-b  proto kernel  scope link  src 10.0.0.2\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br")])]),n("p",[s._v("验证相互ping：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("[root@dev-86-208 ~]# ip netns exec nstest ping 10.0.0.1\nPING 10.0.0.1 (10.0.0.1) 56(84) bytes of data.\n64 bytes from 10.0.0.1: icmp_seq=1 ttl=64 time=0.043 ms\n64 bytes from 10.0.0.1: icmp_seq=2 ttl=64 time=0.032 ms\n\n[root@dev-86-208 ~]# ping 10.0.0.2\nPING 10.0.0.2 (10.0.0.2) 56(84) bytes of data.\n64 bytes from 10.0.0.2: icmp_seq=1 ttl=64 time=0.069 ms\n64 bytes from 10.0.0.2: icmp_seq=2 ttl=64 time=0.024 ms\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("h3",{attrs:{id:"docker-bridge的网络"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#docker-bridge的网络"}},[s._v("#")]),s._v(" Docker bridge的网络")]),s._v(" "),n("p",[s._v("我们去创建两个ns（ns1 与 ns2）模拟两个容器，创建四张网卡（两对设备对）模仿容器网卡。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v(" brtest\n   |          +-------------+\n   |-veth1 <--|--\x3e eth1 ns1 |  \n   |          |-------------+\n   |-veth2 <--|--\x3e eth1 ns2 |  \n   |          +-------------+\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("再在宿主机上创建一个网桥brtest模拟docker0网桥，将veth1和veth2桥接到上面。")]),s._v(" "),n("p",[s._v("添加namespace:")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("[root@dev-86-208 ~]# ip netns add ns1\n[root@dev-86-208 ~]# ip netns add ns2\n[root@dev-86-208 ~]# ip netns list\nns2\nns1\ntest1 (id: 3)\nnstest (id: 2)\n\n[root@dev-86-208 ~]# ip netns exec ns1 ip link set dev lo up\n[root@dev-86-208 ~]# ip netns exec ns2 ip link set dev lo up\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br")])]),n("p",[s._v("添加网卡对：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("[root@dev-86-208 ~]# ip link add veth1 type veth peer name eth1\n[root@dev-86-208 ~]# ip link set eth1 netns ns1\n[root@dev-86-208 ~]# ip link add veth2 type veth peer name eth1\n[root@dev-86-208 ~]# ip link set eth1 netns ns2\n\n[root@dev-86-208 ~]# ip netns exec ns1 ip link\n1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN mode DEFAULT\n    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00\n255: eth1@if256: <BROADCAST,MULTICAST> mtu 1500 qdisc noop state DOWN mode DEFAULT qlen 1000\n    link/ether ae:93:ba:2c:54:93 brd ff:ff:ff:ff:ff:ff link-netnsid 0\n[root@dev-86-208 ~]# ip netns exec ns2 ip link\n257: eth1@if258: <BROADCAST,MULTICAST> mtu 1500 qdisc noop state DOWN mode DEFAULT qlen 1000\n    link/ether 3a:a6:f3:27:9d:83 brd ff:ff:ff:ff:ff:ff link-netnsid 0\n1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN mode DEFAULT\n    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])]),n("p",[s._v("配置地址：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("[root@dev-86-208 ~]# ip netns exec ns1 ip addr add 172.17.1.1/24 dev eth1\n[root@dev-86-208 ~]# ip netns exec ns2 ip addr add 172.17.1.2/24 dev eth1\n\n[root@dev-86-208 ~]# ip netns exec ns1 ip link set dev eth1 up\n[root@dev-86-208 ~]# ip netns exec ns2 ip link set dev eth1 up\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("创建网桥：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("[root@dev-86-208 ~]# brctl addbr brtest\n[root@dev-86-208 ~]# ifconfig brtest\nbrtest: flags=4098<BROADCAST,MULTICAST>  mtu 1500\n        ether 1e:60:eb:c1:e6:d0  txqueuelen 0  (Ethernet)\n        RX packets 0  bytes 0 (0.0 B)\n        RX errors 0  dropped 0  overruns 0  frame 0\n        TX packets 0  bytes 0 (0.0 B)\n        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0\n\n[root@dev-86-208 ~]# brctl addif brtest veth1\n[root@dev-86-208 ~]# brctl addif brtest veth2\n\n[root@dev-86-208 ~]# ifconfig brtest up\n[root@dev-86-208 ~]# ifconfig veth1 up      # 主机上这两张网卡工作在数据链路层，因此不需要设置ip也能通\n[root@dev-86-208 ~]# ifconfig veth2 up\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br")])]),n("p",[s._v("恭喜两个eth1之间可以通了：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("[root@dev-86-208 ~]# ip netns exec ns1 ping 172.17.1.2\nPING 172.17.1.2 (172.17.1.2) 56(84) bytes of data.\n64 bytes from 172.17.1.2: icmp_seq=1 ttl=64 time=0.063 ms\n64 bytes from 172.17.1.2: icmp_seq=2 ttl=64 time=0.022 ms\n\n[root@dev-86-208 ~]# ip netns exec ns2 ping 172.17.1.1\nPING 172.17.1.1 (172.17.1.1) 56(84) bytes of data.\n64 bytes from 172.17.1.1: icmp_seq=1 ttl=64 time=0.038 ms\n64 bytes from 172.17.1.1: icmp_seq=2 ttl=64 time=0.041 ms\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("p",[s._v("PS：后面尝试并不能通，很奇怪，加上路由和给网桥配置地址后才通：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("ip netns exec ns1 ip route add default via 172.17.1.254 dev eth1\nip netns exec ns2 ip route add default via 172.17.1.254 dev eth1\nip addr add 172.17.1.254/24 dev brtest\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("当然想在主机上能ping通容器的话需要给brtest加ip：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("[root@dev-86-208 ~]# ip addr add 172.17.1.254/24 dev brtest\n\n[root@dev-86-208 ~]# route -n # 上面动作设置了路由\nKernel IP routing table\nDestination     Gateway         Genmask         Flags Metric Ref    Use Iface\n172.17.1.0      0.0.0.0         255.255.255.0   U     0      0        0 brtest\n\n[root@dev-86-208 ~]# ping 172.17.1.1\nPING 172.17.1.1 (172.17.1.1) 56(84) bytes of data.\n64 bytes from 172.17.1.1: icmp_seq=1 ttl=64 time=0.046 ms\n64 bytes from 172.17.1.1: icmp_seq=2 ttl=64 time=0.030 ms\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("p",[s._v("以上操作就是docker bridge模式的模型")]),s._v(" "),n("h3",{attrs:{id:"用ip命令配置docker网络"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#用ip命令配置docker网络"}},[s._v("#")]),s._v(" 用ip命令配置docker网络")]),s._v(" "),n("p",[s._v("我们如果需要对容器网络进行配置，如修改ip地址，进入到容器里面显然不合适，而且有时不使用特权模式时是操作不了的，不过我们可以使用ip命令对其进行操作。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("docker run -itd --name test ubuntu:14.04 /bin/bash\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("这时namespace其实已经建立了，不过使用ip命令看不到")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("docker inspect --format '{{ .State.Pid }}' test\n3847\nmkdir /var/run/netns # 如果不存在才创建\nln -s /proc/3847/ns/net /var/run/netns/test\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("测试：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("# ip netns list\ntest\n\n[root@dev-86-208 ~]# ip netns exec test1 ip link\n1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN mode DEFAULT\n    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00\n253: eth0@if254: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc noqueue state UP mode DEFAULT\n    link/ether 02:42:ac:11:00:02 brd ff:ff:ff:ff:ff:ff link-netnsid 0\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("h3",{attrs:{id:"bridge实现源码解析"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#bridge实现源码解析"}},[s._v("#")]),s._v(" bridge实现源码解析")]),s._v(" "),n("h4",{attrs:{id:"docker0网桥的建立"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#docker0网桥的建立"}},[s._v("#")]),s._v(" docker0网桥的建立")]),s._v(" "),n("h4",{attrs:{id:"创建容器时宿主机上的网络操作"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#创建容器时宿主机上的网络操作"}},[s._v("#")]),s._v(" 创建容器时宿主机上的网络操作")]),s._v(" "),n("h4",{attrs:{id:"创建容器时容器内部的网络操作"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#创建容器时容器内部的网络操作"}},[s._v("#")]),s._v(" 创建容器时容器内部的网络操作")]),s._v(" "),n("h3",{attrs:{id:"overlay网络代表flannel原理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#overlay网络代表flannel原理"}},[s._v("#")]),s._v(" overlay网络代表flannel原理")])])}),[],!1,null,null,null);e.default=t.exports}}]);