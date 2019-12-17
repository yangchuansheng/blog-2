(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{349:function(s,e,n){"use strict";n.r(e);var a=n(0),t=Object(a.a)({},(function(){var s=this,e=s.$createElement,n=s._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"kubernetes-ipvs设置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#kubernetes-ipvs设置"}},[s._v("#")]),s._v(" kubernetes ipvs设置")]),s._v(" "),n("h1",{attrs:{id:"_1-11-0版本ipset-bug说明"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-11-0版本ipset-bug说明"}},[s._v("#")]),s._v(" 1.11.0版本ipset bug说明")]),s._v(" "),n("p",[s._v("1.11.0版本centos下使用ipvs模式会出问题 "),n("a",{attrs:{href:"https://github.com/kubernetes/kubernetes/issues/65461",target:"_blank",rel:"noopener noreferrer"}},[s._v("65461"),n("OutboundLink")],1)]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("Jun 25 20:50:00 VM_3_4_centos kube-proxy[3828]: E0625 20:50:00.312569    3828 ipset.go:156] Failed to make sure ip set: &{{KUBE-LOOP-BACK hash:ip,port,ip inet 1024 65536 0-65535 Kubernetes endpoints dst ip:port, source ip for solving hairpin purpose} map[] 0xc42073e1d0} exist, error: error creating ipset KUBE-LOOP-BACK, error: exit status 2\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),s._v(" "),n("p",[s._v("主要是ipset不支持comment:")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("[root@compute063 ~]# ipset create foo hash:ip comment\nipset v6.19: Unknown argument: `comment'\nTry `ipset help' for more information.\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("尝试升级ipset问题依然没解决")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("[root@izrj9auny05eigffvcosvbz ipset-6.38]# ipset create foo hash:ip comment\nipset v6.38: Argument `comment' is supported in the kernel module of the set type hash:ip starting from the revision 2 and you have installed revision 1 only. Your kernel is behind your ipset utility.\nTry `ipset help' for more information.\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("在不改kubernetes情况下可以通过升级内核和ipset解决")]),s._v(" "),n("h2",{attrs:{id:"升级内核"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#升级内核"}},[s._v("#")]),s._v(" 升级内核")]),s._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/sealyun/kernel/releases/tag/v4.14.49",target:"_blank",rel:"noopener noreferrer"}},[s._v("rpm地址"),n("OutboundLink")],1)]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("rpm -ivh kernel-4.14.49-1.x86_64.rpm\nrpm -ivh kernel-devel-4.14.49-1.x86_64.rpm\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("修改grub配置，默认启动新内核\n vi /etc/default/grub\n修改成 GRUB_DEFAULT=0\ngrub2-mkconfig -o /boot/grub2/grub.cfg \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("h2",{attrs:{id:"ipset-安装过程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ipset-安装过程"}},[s._v("#")]),s._v(" ipset 安装过程")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("yum install -y kernel-devel\n\nyum install -y bzip2\n\nwget http://ipset.netfilter.org/ipset-6.38.tar.bz2\n\ncd ipset-6.38\n\nbzip2 -d ipset-6.38.tar.bz2\n\ntar xvf ipset-6.38.tar\n\ncd /lib/modules/3.10.0-693.2.2.el7.x86_64\nln -s /usr/src/kernels/3.10.0-862.3.3.el7.x86_64 build\n\n./configure && make && make install\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br")])]),n("h1",{attrs:{id:"kubernetes启用ipvs"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#kubernetes启用ipvs"}},[s._v("#")]),s._v(" kubernetes启用ipvs")]),s._v(" "),n("p",[s._v("确保内核开启了ipvs模块")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("[root@k8s ~]# lsmod|grep ip_vs\nip_vs_sh               12688  0\nip_vs_wrr              12697  0\nip_vs_rr               12600  16\nip_vs                 141092  23 ip_vs_rr,ip_vs_sh,xt_ipvs,ip_vs_wrr\nnf_conntrack          133387  9 ip_vs,nf_nat,nf_nat_ipv4,nf_nat_ipv6,xt_conntrack,nf_nat_masquerade_ipv4,nf_conntrack_netlink,nf_conntrack_ipv4,nf_conntrack_ipv6\nlibcrc32c              12644  3 ip_vs,nf_nat,nf_conntrack\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("没开启加载方式:")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("modprobe -- ip_vs\nmodprobe -- ip_vs_rr\nmodprobe -- ip_vs_wrr\nmodprobe -- ip_vs_sh\nmodprobe -- nf_conntrack_ipv4\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("1.10以上版本,使用kubeadm安装的，直接修改kube-proxy configmap即可")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("kubectl edit configmap kube-proxy -n kube-system\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('    ipvs:\n      minSyncPeriod: 0s\n      scheduler: ""\n      syncPeriod: 30s\n    kind: KubeProxyConfiguration\n    metricsBindAddress: 127.0.0.1:10249\n    mode: "ipvs"                          # 加上这个\n    nodePortAddresses: null\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("p",[s._v("看到pod如下信息表明成功")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("[root@k8s ~]# kubectl logs kube-proxy-72lg9 -n kube-system\nI0530 03:38:11.455609       1 feature_gate.go:226] feature gates: &{{} map[]}\nI0530 03:38:11.490470       1 server_others.go:183] Using ipvs Proxier.\nW0530 03:38:11.503868       1 proxier.go:304] IPVS scheduler not specified, use rr by default\nI0530 03:38:11.504109       1 server_others.go:209] Tearing down inactive rules.\nI0530 03:38:11.552587       1 server.go:444] Version: v1.10.3\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("安装ipvsadm工具")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("yum install -y ipvsadm\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("检查service ipvs配置：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("[root@k8s ~]# ipvsadm -ln\nIP Virtual Server version 1.2.1 (size=4096)\nProt LocalAddress:Port Scheduler Flags\n  -> RemoteAddress:Port           Forward Weight ActiveConn InActConn\nTCP  172.31.244.239:32000 rr\n  -> 192.168.77.9:8443            Masq    1      0          0\nTCP  172.31.244.239:32001 rr\n  -> 192.168.77.8:3000            Masq    1      0          0\nTCP  10.96.0.1:443 rr persistent 10800\n  -> 172.31.244.239:6443          Masq    1      0          0\nTCP  10.96.0.10:53 rr\n  -> 192.168.77.7:53              Masq    1      0          0\n  -> 192.168.77.10:53             Masq    1      0          0\nTCP  10.96.82.0:80 rr\n  -> 192.168.77.8:3000            Masq    1      0          0\nTCP  10.96.152.25:8086 rr\n  -> 192.168.77.12:8086           Masq    1      0          0\nTCP  10.96.232.136:6666 rr\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br")])]),n("p",[s._v("可以看到我们的dashboard dns什么的都已经配置了，可以验证一下：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("[root@k8s ~]# wget https://172.31.244.239:32000 --no-check-certificate\n--2018-05-30 16:17:15--  https://172.31.244.239:32000/\n正在连接 172.31.244.239:32000... 已连接。\n警告: 无法验证 172.31.244.239 的由 “/CN=.” 颁发的证书:\n  出现了自己签名的证书。\n    警告: 证书通用名 “.” 与所要求的主机名 “172.31.244.239” 不符。\n已发出 HTTP 请求，正在等待回应... 200 OK\n长度：990 [text/html]\n正在保存至: “index.html”\n\n100%[=======================================================================================================================================================>] 990         --.-K/s 用时 0s\n\n2018-05-30 16:17:15 (16.3 MB/s) - 已保存 “index.html” [990/990])\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br")])]),n("p",[s._v("是通的，完全ok")]),s._v(" "),n("p",[s._v("这里十分推荐大家使用ipvs模式，iptables出了问题不好调试，而且规则一多性能显著下降，我们甚至出现规则丢失的情况，ipvs稳定很多。")])])}),[],!1,null,null,null);e.default=t.exports}}]);