(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{366:function(s,n,e){"use strict";e.r(n);var a=e(0),t=Object(a.a)({},(function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"使用prometheus-operator监控envoy"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用prometheus-operator监控envoy"}},[s._v("#")]),s._v(" 使用prometheus operator监控envoy")]),s._v(" "),e("h1",{attrs:{id:"概述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#概述"}},[s._v("#")]),s._v(" 概述")]),s._v(" "),e("p",[s._v("prometheus operator应当是使用监控系统的最佳实践了，首先它一键构建整个监控系统，通过一些无侵入的手段去配置如监控数据源等\n故障自动恢复，高可用的告警等。。")]),s._v(" "),e("p",[s._v("不过对于新手使用上还是有一丢丢小门槛，本文就结合如何给envoy做监控这个例子来分享使用prometheus operator的正确姿势")]),s._v(" "),e("p",[s._v("至于如何写告警规则，如何配置prometheus查询语句不是本文探讨的重点，会在后续文章中给大家分享，本文着重探讨如何使用prometheus operator\n")]),s._v(" "),e("h1",{attrs:{id:"prometheus-operator安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#prometheus-operator安装"}},[s._v("#")]),s._v(" prometheus operator安装")]),s._v(" "),e("p",[e("a",{attrs:{href:"https://sealyun.com/pro/products/",target:"_blank",rel:"noopener noreferrer"}},[s._v("sealyun离线安装包"),e("OutboundLink")],1),s._v("内已经包含prometheus operator,安装完直接使用即可")]),s._v(" "),e("h1",{attrs:{id:"配置监控数据源"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置监控数据源"}},[s._v("#")]),s._v(" 配置监控数据源")]),s._v(" "),e("p",[s._v("原理：通过operator的CRD发现监控数据源service\n"),e("img",{attrs:{src:"/prometheus/operator-arch.png",alt:""}})]),s._v(" "),e("h2",{attrs:{id:"启动envoy"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#启动envoy"}},[s._v("#")]),s._v(" 启动envoy")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: envoy\n  labels:\n    app: envoy\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: envoy\n  template:\n    metadata:\n      labels:\n        app: envoy\n    spec:\n      volumes:\n      - hostPath:   # 为了配置方便把envory配置文件挂载出来了\n          path: /root/envoy\n          type: DirectoryOrCreate\n        name: envoy\n      containers:\n      - name: envoy\n        volumeMounts:\n        - mountPath: /etc/envoy\n          name: envoy\n          readOnly: true\n        image: envoyproxy/envoy:latest\n        ports:\n        - containerPort: 10000 # 数据端口\n        - containerPort: 9901  # 管理端口，metric是通过此端口暴露\n\n---\nkind: Service\napiVersion: v1\nmetadata:\n  name: envoy\n  labels:\n    app: envoy  # 给service贴上标签，operator会去找这个service\nspec:\n  selector:\n    app: envoy\n  ports:\n  - protocol: TCP\n    port: 80\n    targetPort: 10000\n    name: user\n  - protocol: TCP   # service暴露metric的端口\n    port: 81\n    targetPort: 9901\n    name: metrics   # 名字很重要，ServiceMonitor 会找端口名\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br"),e("span",{staticClass:"line-number"},[s._v("39")]),e("br"),e("span",{staticClass:"line-number"},[s._v("40")]),e("br"),e("span",{staticClass:"line-number"},[s._v("41")]),e("br"),e("span",{staticClass:"line-number"},[s._v("42")]),e("br"),e("span",{staticClass:"line-number"},[s._v("43")]),e("br"),e("span",{staticClass:"line-number"},[s._v("44")]),e("br"),e("span",{staticClass:"line-number"},[s._v("45")]),e("br"),e("span",{staticClass:"line-number"},[s._v("46")]),e("br"),e("span",{staticClass:"line-number"},[s._v("47")]),e("br"),e("span",{staticClass:"line-number"},[s._v("48")]),e("br"),e("span",{staticClass:"line-number"},[s._v("49")]),e("br"),e("span",{staticClass:"line-number"},[s._v("50")]),e("br"),e("span",{staticClass:"line-number"},[s._v("51")]),e("br")])]),e("p",[s._v("envoy配置文件：\n监听的地址一定需要修改成0.0.0.0，否则通过service获取不到metric\n/root/envoy/envoy.yaml")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('admin:\n  access_log_path: /tmp/admin_access.log\n  address:\n    socket_address:\n      protocol: TCP\n      address: 0.0.0.0   # 这里一定要改成0.0.0.0，而不能是127.0.0.1\n      port_value: 9901\nstatic_resources:\n  listeners:\n  - name: listener_0\n    address:\n      socket_address:\n        protocol: TCP\n        address: 0.0.0.0\n        port_value: 10000\n    filter_chains:\n    - filters:\n      - name: envoy.http_connection_manager\n        config:\n          stat_prefix: ingress_http\n          route_config:\n            name: local_route\n            virtual_hosts:\n            - name: local_service\n              domains: ["*"]\n              routes:\n              - match:\n                  prefix: "/"\n                route:\n                  host_rewrite: sealyun.com\n                  cluster: service_google\n          http_filters:\n          - name: envoy.router\n  clusters:\n  - name: service_sealyun\n    connect_timeout: 0.25s\n    type: LOGICAL_DNS\n    # Comment out the following line to test on v6 networks\n    dns_lookup_family: V4_ONLY\n    lb_policy: ROUND_ROBIN\n    hosts:\n      - socket_address:\n          address: sealyun.com\n          port_value: 443\n    tls_context: { sni: sealyun.com }\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br"),e("span",{staticClass:"line-number"},[s._v("39")]),e("br"),e("span",{staticClass:"line-number"},[s._v("40")]),e("br"),e("span",{staticClass:"line-number"},[s._v("41")]),e("br"),e("span",{staticClass:"line-number"},[s._v("42")]),e("br"),e("span",{staticClass:"line-number"},[s._v("43")]),e("br"),e("span",{staticClass:"line-number"},[s._v("44")]),e("br"),e("span",{staticClass:"line-number"},[s._v("45")]),e("br")])]),e("h2",{attrs:{id:"使用servicemonitor"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用servicemonitor"}},[s._v("#")]),s._v(" 使用ServiceMonitor")]),s._v(" "),e("p",[s._v("envoyServiceMonitor.yaml:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("apiVersion: monitoring.coreos.com/v1\nkind: ServiceMonitor\nmetadata:\n  labels:\n    app: envoy\n  name: envoy\n  namespace: monitoring  # 这个可以与service不在一个namespace中\nspec:\n  endpoints:\n  - interval: 15s\n    port: metrics        # envoy service的端口名\n    path: /stats/prometheus # 数据源path\n  namespaceSelector:\n    matchNames:        # envoy service所在namespace\n    - default\n  selector:\n    matchLabels:\n      app: envoy       # 选择envoy service\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br")])]),e("p",[s._v("create成功后我们就可以看到envoy的数据源了：\n"),e("img",{attrs:{src:"/prometheus/envoy-target.png",alt:""}})]),s._v(" "),e("p",[s._v("然后就可以看到metric了：\n"),e("img",{attrs:{src:"/prometheus/envoy-metric.png",alt:""}})]),s._v(" "),e("p",[s._v("然后就可以在grafana上进行一些配置了，promethues相关使用不是本文讨论的对象")]),s._v(" "),e("h1",{attrs:{id:"告警配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#告警配置"}},[s._v("#")]),s._v(" 告警配置")]),s._v(" "),e("h2",{attrs:{id:"alert-manager配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#alert-manager配置"}},[s._v("#")]),s._v(" alert manager配置")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("[root@dev-86-201 envoy]# kubectl get secret -n monitoring\nNAME                              TYPE                                  DATA   AGE\nalertmanager-main                 Opaque                                1      27d\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("我们可以看到这个secrect，看下里面具体内容：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("[root@dev-86-201 envoy]# kubectl get secret  alertmanager-main -o yaml -n monitoring\napiVersion: v1\ndata:\n  alertmanager.yaml: Imdsb2JhbCI6IAogICJyZXNvbHZlX3RpbWVvdXQiOiAiNW0iCiJyZWNlaXZlcnMiOiAKLSAibmFtZSI6ICJudWxsIgoicm91dGUiOiAKICAiZ3JvdXBfYnkiOiAKICAtICJqb2IiCiAgImdyb3VwX2ludGVydmFsIjogIjVtIgogICJncm91cF93YWl0IjogIjMwcyIKICAicmVjZWl2ZXIiOiAibnVsbCIKICAicmVwZWF0X2ludGVydmFsIjogIjEyaCIKICAicm91dGVzIjogCiAgLSAibWF0Y2giOiAKICAgICAgImFsZXJ0bmFtZSI6ICJEZWFkTWFuc1N3aXRjaCIKICAgICJyZWNlaXZlciI6ICJudWxsIg==\nkind: Secret\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("base64解码一下：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('"global":\n  "resolve_timeout": "5m"\n"receivers":\n- "name": "null"\n"route":\n  "group_by":\n  - "job"\n  "group_interval": "5m"\n  "group_wait": "30s"\n  "receiver": "null"\n  "repeat_interval": "12h"\n  "routes":\n  - "match":\n      "alertname": "DeadMansSwitch"\n    "receiver": "null"\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br")])]),e("p",[s._v("所以配置alertmanager就非常简单了，就是创建一个secrect即可\n如alertmanager.yaml:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("global:\n  smtp_smarthost: 'smtp.qq.com:465'\n  smtp_from: '5153@qq.com'\n  smtp_auth_username: '5153@qq.com'\n  smtp_auth_password: 'xxx'       # 这个密码是开启smtp授权后生成的,下文有说怎么配置\n  smtp_require_tls: false\nroute:\n  group_by: ['alertmanager','cluster','service']\n  group_wait: 30s\n  group_interval: 5m\n  repeat_interval: 3h\n  receiver: 'fanux'\n  routes:\n  - receiver: 'fanux'\nreceivers:\n- name: 'fanux'\n  email_configs:\n  - to: '5153@qq.com'\n    send_resolved: true\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br")])]),e("p",[s._v("delete掉老的secret，根据自己的配置重新生成secret即可")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("kubectl delete secret alertmanager-main -n monitoring\nkubectl create secret generic alertmanager-main --from-file=alertmanager.yaml -n monitoring\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h2",{attrs:{id:"邮箱配置，以qq邮箱为例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#邮箱配置，以qq邮箱为例"}},[s._v("#")]),s._v(" 邮箱配置，以QQ邮箱为例")]),s._v(" "),e("p",[s._v("开启smtp pop3服务\n"),e("img",{attrs:{src:"/prometheus/email-setting.png",alt:""}}),s._v(" "),e("img",{attrs:{src:"/prometheus/email-setting2.png",alt:""}}),s._v(" 照着操作即可，后面会弹框一个授权码，配置到上面的配置文件中\n然后就可以收到告警了：\n"),e("img",{attrs:{src:"/prometheus/alert-email.png",alt:""}})]),s._v(" "),e("h2",{attrs:{id:"告警规则配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#告警规则配置"}},[s._v("#")]),s._v(" 告警规则配置")]),s._v(" "),e("p",[s._v("prometheus operator自定义PrometheusRule crd去描述告警规则")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("[root@dev-86-202 shell]# kubectl get PrometheusRule -n monitoring\nNAME                   AGE\nprometheus-k8s-rules   6m\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("直接edit这个rule即可，也可以再自己去创建个PrometheusRule")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("kubectl edit PrometheusRule prometheus-k8s-rules -n monitoring\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("如我们在group里加一个告警：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("spec:\n  groups:\n  - name: ./example.rules\n    rules:\n    - alert: ExampleAlert\n      expr: vector(1)\n  - name: k8s.rules\n    rules:\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("p",[s._v("重启prometheuspod:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("kubectl delete pod prometheus-k8s-0 prometheus-k8s-1 -n monitoring\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("然后在界面上就可以看到新加的规则：\n"),e("img",{attrs:{src:"prometheus/prometheus-rule.png",alt:""}})]),s._v(" "),e("p",[s._v("探讨可加QQ群：98488045")])])}),[],!1,null,null,null);n.default=t.exports}}]);