(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{368:function(n,s,e){"use strict";e.r(s);var a=e(0),r=Object(a.a)({},(function(){var n=this,s=n.$createElement,e=n._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h1",{attrs:{id:"runc-架构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#runc-架构"}},[n._v("#")]),n._v(" runc 架构")]),n._v(" "),e("p",[n._v("这里的spec.Process就是我们真正要运行的容器中的进程。")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("return r.run(&spec.Process)\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br")])]),e("p",[n._v("把这个塞到libcontainer.Process里去了：\n")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v(' lp := &libcontainer.Process{\n     Args: p.Args,\n     Env:  p.Env,\n     // TODO: fix libcontainer\'s API to better support uid/gid in a typesafe way.\n     User:            fmt.Sprintf("%d:%d", p.User.UID, p.User.GID),\n     Cwd:             p.Cwd,\n     Label:           p.SelinuxLabel,\n     NoNewPrivileges: &p.NoNewPrivileges,\n     AppArmorProfile: p.ApparmorProfile,\n }\n')])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br")])]),e("p",[n._v("我试了个busybox的容器，把p.Args和p.Env打印出来看一下,正是config.json中的内容：")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('fmt.Println("Args: ", p.Args, "env", p.Env)\n//Args:  [sh] env [PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin TERM=xterm]\n')])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br")])]),e("p",[n._v("这里真正调用的是container的Start 或者Run方法")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("    var (\n        startFn = r.container.Start\n    )\n    if !r.create {\n        startFn = r.container.Run\n    }\n    if err = startFn(process); err != nil {\n        return -1, err\n    }\n\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br")])]),e("p",[n._v("我们看linux_container的Run实现,在libcontainer/container_linux.go下面：\n相信你能找到这,这个parent到底是何方神圣？：")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("parent, err := c.newParentProcess(process, isInit)\n                    |\n                    +---\x3e cmd, err := c.commandTemplate(p, childPipe)\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br")])]),e("p",[n._v("这个cmd启动是的啥？我们容器中entrypoint 或者CMD?? 事实证明都不是：")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('cmd := exec.Command(c.initArgs[0], c.initArgs[1:]...)\nfmt.Println("cmd is: ", c.initArgs[0], c.initArgs[1:])\n//cmd is:  /proc/self/exe [init]\n')])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br")])]),e("p",[n._v("linux菜鸟表示看不懂了，"),e("code",[n._v("/proc/self/exe")]),n._v("是什么鬼？赶紧百度一下。强(sha)大(bi)百度告诉我们这代表当前进程，所以实际上是想调用"),e("code",[n._v("runc init")])]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("[root@dev-86-206 ~]# ll /proc/self\nlrwxrwxrwx. 1 root root 0 4月  24 19:56 /proc/self -> 108590\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br")])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("[root@dev-86-206 ~]# ll /proc/108590\n总用量 0\nlrwxrwxrwx.  1 root root 0 5月  31 15:25 exe -> /go/bin/cattle\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br")])]),e("p",[n._v("是不是明白了什么，最终/proc/self/exe链接到自己了")]),n._v(" "),e("h2",{attrs:{id:"runc-run进程与runc-init进程之间的通信"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#runc-run进程与runc-init进程之间的通信"}},[n._v("#")]),n._v(" runc run进程与runc init进程之间的通信")]),n._v(" "),e("h4",{attrs:{id:"runc-run进程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#runc-run进程"}},[n._v("#")]),n._v(" runc run进程")]),n._v(" "),e("p",[n._v("大家记住一点，容器外面的一些设置runc run去做，在init启动时就设置了init的namespace所以容器内需要做什么都由init去实现。\n比较典型的如在实现bridge网桥时，在容器里面创建eth0网卡就由init进程实现")]),n._v(" "),e("p",[n._v("run先把bootstrapData发给init，具体是什么回头讨论")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("                run            init\n                 |               |\n                 |--------------\x3e| bootstrapData\nsetNs            |               |\ncreateNetwork    |               |\n                 |--------------\x3e| sendConfig\n                 |<--------------| procReady 我准备好啦\n启动程序吧procRun|--------------\x3e| \n                 |<--------------| procHooks 执行钩子\n继续procResume   |--------------\x3e| \n                 |               |\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br")])]),e("p",[n._v("看看sendConfig发了些什么：")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('func (p *initProcess) sendConfig() error {\n    fmt.Println("sendconfig to init process, config is: ", p.config)\n    //sendconfig to init process, config is:  \n    //&{[sh] [PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin TERM=xterm] / 0xc420018780   true 0:0 [] 0xc4200ec1e0 [0xc420075380] 0 test [{7 1024 1024}] true false}\n    return utils.WriteJSON(p.parentPipe, p.config)\n}\n')])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br")])]),e("p",[n._v("就是我们要启动进程的信息, 除了initProcess还有个setnsProcess 两者区别是：\nTODO")]),n._v(" "),e("h4",{attrs:{id:"runc-init进程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#runc-init进程"}},[n._v("#")]),n._v(" runc init进程")]),n._v(" "),e("p",[n._v("我们想在init里面如上面一样打印一些调试信息就会发现不太管用了,因为已经在子进程中了,所以我们把调试信息输出到文件中")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('factory, _ := libcontainer.New("")\nfactory.StartInitialization(); \n')])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br")])]),e("p",[n._v("libcontainer/factory_linux.go里面有实现\n在pipe中获取到config信息")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("newContainerInit(t initType, pipe *os.File, consoleSocket *os.File, stateDirFD int) \n    if err := json.NewDecoder(pipe).Decode(&config); err != nil {\n} \n\n就是我们需要启动进程的信息\n//{[sh] [PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin TERM=xterm] / 0xc42005e480   true 0:0 [] 0xc4200dc1e0 [0xc420070240] 0 test [{7 1024 1024}] true false}\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br")])]),e("p",[n._v("所以我们去看linuxStandardInit的Init方法即可：\n做好一些准备后给run进程发送准备好了的信息，表示可以进行Execv启动进程了")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("    // Tell our parent that we're ready to Execv. This must be done before the\n    // Seccomp rules have been applied, because we need to be able to read and\n    // write to a socket.\n    if err := syncParentReady(l.pipe); err != nil {\n        return err\n    }\n")])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br")])]),e("p",[n._v("我们要的东西：")]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('    if err := syscall.Exec(name, l.config.Args[0:], os.Environ()); err != nil {\n        return newSystemErrorWithCause(err, "exec user process")\n    }\n')])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br")])]),e("h3",{attrs:{id:"切换rootfs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#切换rootfs"}},[n._v("#")]),n._v(" 切换rootfs")]),n._v(" "),e("pre",[e("code",[n._v("这里有个有意思的地方，我们使用dlv调试runc\n")])]),n._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('root@1db95ddcd993:/go/src/pro/ci-sftp# dlv --wd ./ exec runc -- run test\n(dlv) break main.main\nBreakpoint 1 set at 0x6c8a0b for main.main() /go/src/github.com/opencontainers/runc/main.go:51\n(dlv) continue\n> main.main() /go/src/github.com/opencontainers/runc/main.go:51 (hits goroutine(1):1 total:1) (PC: 0x6c8a0b)\n    46: value for "bundle" is the current directory.\n    47: )\n    48:\n    49:\n    50:\n=>  51: func main() {\n    52:     app := cli.NewApp()\n    53:     app.Name = "runc"\n    54:     app.Usage = usage\n    55:\n    56:     var v []string\n(dlv) next\n> main.main() /go/src/github.com/opencontainers/runc/main.go:54 (PC: 0x6c8a50)\n    49:\n    50:\n    51: func main() {\n    52:     app := cli.NewApp()\n    53:     app.Name = "runc"\n=>  54:     app.Usage = usage\n    55:\n    56:     var v []string\n    57:     if version != "" {\n    58:         v = append(v, version)\n    59:     }\n(dlv) p app.Name\n"runc"\n')])]),n._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[n._v("1")]),e("br"),e("span",{staticClass:"line-number"},[n._v("2")]),e("br"),e("span",{staticClass:"line-number"},[n._v("3")]),e("br"),e("span",{staticClass:"line-number"},[n._v("4")]),e("br"),e("span",{staticClass:"line-number"},[n._v("5")]),e("br"),e("span",{staticClass:"line-number"},[n._v("6")]),e("br"),e("span",{staticClass:"line-number"},[n._v("7")]),e("br"),e("span",{staticClass:"line-number"},[n._v("8")]),e("br"),e("span",{staticClass:"line-number"},[n._v("9")]),e("br"),e("span",{staticClass:"line-number"},[n._v("10")]),e("br"),e("span",{staticClass:"line-number"},[n._v("11")]),e("br"),e("span",{staticClass:"line-number"},[n._v("12")]),e("br"),e("span",{staticClass:"line-number"},[n._v("13")]),e("br"),e("span",{staticClass:"line-number"},[n._v("14")]),e("br"),e("span",{staticClass:"line-number"},[n._v("15")]),e("br"),e("span",{staticClass:"line-number"},[n._v("16")]),e("br"),e("span",{staticClass:"line-number"},[n._v("17")]),e("br"),e("span",{staticClass:"line-number"},[n._v("18")]),e("br"),e("span",{staticClass:"line-number"},[n._v("19")]),e("br"),e("span",{staticClass:"line-number"},[n._v("20")]),e("br"),e("span",{staticClass:"line-number"},[n._v("21")]),e("br"),e("span",{staticClass:"line-number"},[n._v("22")]),e("br"),e("span",{staticClass:"line-number"},[n._v("23")]),e("br"),e("span",{staticClass:"line-number"},[n._v("24")]),e("br"),e("span",{staticClass:"line-number"},[n._v("25")]),e("br"),e("span",{staticClass:"line-number"},[n._v("26")]),e("br"),e("span",{staticClass:"line-number"},[n._v("27")]),e("br"),e("span",{staticClass:"line-number"},[n._v("28")]),e("br"),e("span",{staticClass:"line-number"},[n._v("29")]),e("br"),e("span",{staticClass:"line-number"},[n._v("30")]),e("br"),e("span",{staticClass:"line-number"},[n._v("31")]),e("br")])]),e("p",[e("a",{attrs:{href:"https://github.com/derekparker/delve/tree/master/Documentation/cli",target:"_blank",rel:"noopener noreferrer"}},[n._v("delve command line"),e("OutboundLink")],1)]),n._v(" "),e("h2",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[n._v("#")]),n._v(" 总结")]),n._v(" "),e("p",[n._v("至此我们容器创建流程大的架构梳理了一遍，为了看清整个架构忽略了很多细节，当然我会在其它文章中介绍别的一些细节内容. 欢迎大家关注"),e("a",{attrs:{href:"lameleg.com"}},[n._v("sealyun")])])])}),[],!1,null,null,null);s.default=r.exports}}]);