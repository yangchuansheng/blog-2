(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{353:function(e,s,a){"use strict";a.r(s);var n=a(0),t=Object(n.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"kube-scheduler定制，支持深度学习批处理任务调度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kube-scheduler定制，支持深度学习批处理任务调度"}},[e._v("#")]),e._v(" kube-scheduler定制，支持深度学习批处理任务调度")]),e._v(" "),a("h1",{attrs:{id:"什么是批处理任务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是批处理任务"}},[e._v("#")]),e._v(" 什么是批处理任务")]),e._v(" "),a("p",[e._v("深度学习中经常会出现多机多卡的任务，也就是同事会起多个pod，但是这多个pod属于同一个任务。")]),e._v(" "),a("p",[e._v("这样就会有一个问题")]),e._v(" "),a("p",[e._v("一个任务要起100个pod，每个pod需要一张卡，总共需要100张GPU卡，而集群中只有99张空闲的GPU卡，这样默认的k8s调度器会如何处理？")]),e._v(" "),a("p",[e._v("因为默认调度器是一个一个pod调度的，只会检查单个pod资源够不够，这样前99个都能成功，最后一个pod调度失败。")]),e._v(" "),a("p",[e._v("这样非常有可能造成")]),e._v(" "),a("ol",[a("li",[e._v("任务跑不了")]),e._v(" "),a("li",[e._v("前99个占着GPU不释放，新的任务无法调度")]),e._v(" "),a("li",[e._v("严重时整个集群死锁，都“占着茅坑不拉屎”\n")])]),e._v(" "),a("p",[e._v("所以需要在调度时对整个task所需所有资源进行检查，当集群总体资源不够时，一个pod都得不到调度。")]),e._v(" "),a("p",[e._v("社区提供了一个能支持这种特性的"),a("a",{attrs:{href:"https://github.com/kubernetes-sigs/kube-batch/blob/master/doc/usage/tutorial.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("调度器"),a("OutboundLink")],1),e._v("\n但是这个调度器是没办法和原生调度器很好的配合工作的")]),e._v(" "),a("ol",[a("li",[e._v("最大的问题在于两个调度器都有cache，这样cache的内容会冲突，导致调度混乱")]),e._v(" "),a("li",[e._v("这个调度器没法和原生调度器同时起作用，这样用了这个batch调度器后就没法用亲和性什么的特性了")])]),e._v(" "),a("p",[e._v("所以我们做的事是将两者特性融合，选择的方法是定制化开发kube-scheduler")]),e._v(" "),a("p",[e._v("其实scheduler是可以通过extender扩展的，但是extender还是太弱了，它仅能在预选和优选过程中加入自己的过滤策略，而这对于批处理任务远远不够。")]),e._v(" "),a("h1",{attrs:{id:"实现难点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现难点"}},[e._v("#")]),e._v(" 实现难点")]),e._v(" "),a("blockquote",[a("p",[e._v("需要优选时加batch任务检查\n拿到一个pod ---\x3e 如果是一个batchpod ---\x3e 查询集群资源是否满足batch任务---\x3e否调度失败")])]),e._v(" "),a("blockquote",[a("p",[e._v("需要保障batch任务中其它pod能得到调度")])]),e._v(" "),a("p",[e._v("如果集群资源能满足这个batch任务直接去bind有个问题：\n假设调度队列是这样,假设集群中有三个GPU，而batch任务需要三个GPU：")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("A batch pod ->")]),e._v(" "),a("th",[e._v("pod ->")]),e._v(" "),a("th",[e._v("pod ->")]),e._v(" "),a("th",[e._v("A batch pod ->")]),e._v(" "),a("th",[e._v("A batch pod")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("集群资源够 调度成功")]),e._v(" "),a("td",[e._v("调度了别的pod")]),e._v(" "),a("td",[e._v("调度了别的pod")]),e._v(" "),a("td",[e._v("GPU被别的pod占用 GPU不够 失败")]),e._v(" "),a("td",[e._v("GPU不够 失败")])])])]),e._v(" "),a("p",[e._v("所以最终结果是A批任务占用了一个GPU但是整个任务是调度失败的，那一个GPU还得不到释放")]),e._v(" "),a("p",[e._v("所以需要修改pod调度队列里的顺序?让A batch pod连续调度? 没这么简单，")]),e._v(" "),a("p",[e._v("pod调度是创建协程并发调度的，这样即便去调整任务队列里pod的顺序也不一定能保证batch任务其它pod能得到优先调度。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("go wait.Until(sched.scheduleOne, 0, sched.config.StopEverything)\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("blockquote",[a("p",[e._v("只要batch pod走到Bind逻辑了就没有回头路了")])]),e._v(" "),a("p",[e._v("batch任务中所有pod先进行assume调度，其中任意一个失败就清理掉其它已经bind但是还没实际进行调度的pod。 并把所有pod扔回队列，或者直接返回调度失败清理改任务的pod，让上层重新触发?")]),e._v(" "),a("p",[e._v("scheduler流程 scheduler/sheduler.go scheduleOne逻辑：")]),e._v(" "),a("p",[e._v("选节点->cache assume pod on node-> 创建协程bind")]),e._v(" "),a("p",[e._v("所以在assume时去检查，不满足退还已经调度的pod是不可行的，因为之前batch任务中的pod可能已经bind过了， 所以只能batch任务中最后一个pod得到确认才能去bind前面的pod")]),e._v(" "),a("blockquote",[a("p",[e._v("预占用策略\n预占用策略： 第一个batch pod任务来时，检查集群资源是不是够，如果够进行预占，把其它几个node打上标记，让接下来pod无法占用其它的node，这样batch任务其实pod过来就有节点可用。")])]),e._v(" "),a("p",[e._v("回到了不能bind的问题。。。")]),e._v(" "),a("p",[e._v("这种问题有两点：")]),e._v(" "),a("p",[e._v("如何知道batch任务中其它pod需要什么样的节点，如果pod都一样问题可简化\n如果后面的pod失败了，第一个pod还是已经bind，还是会出现一样的问题\n最终还是在所有pod assume之前不能bind单个pod")]),e._v(" "),a("p",[e._v("综上，需要在几个地方处理")]),e._v(" "),a("p",[e._v("队列最好用优先级队列，把正在调度的pod的关联pod优先级提高\n选节点时做判断，看集群资源是否够\n选好节点assume pod时检查，如果自己不够或者pod组不够就不去bind\n问题是之前的pod已经走了bind流程，所以最重要的是如何解决让之前的pod不去bind，延迟bind")]),e._v(" "),a("blockquote",[a("p",[e._v("最终方案 - 延迟绑定")])]),e._v(" "),a("p",[e._v("方案：在batch任务bind时进行特殊处理")]),e._v(" "),a("ol",[a("li",[e._v("如果是batch任务扔进task cache，不进行binding")]),e._v(" "),a("li",[e._v("如果batch任务最后一个pod扔进task cache,该task ready，放进bind队列")]),e._v(" "),a("li",[e._v("在bind队列里取task 进行bind，task互斥锁与普通pod bind时互斥")])]),e._v(" "),a("blockquote",[a("p",[e._v("使用\nbatch任务使用，pod增加两个注解：")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("      annotations:\n        scheduling.k8s.io/group-name: qj-1\n        scheduling.k8s.io/group-pod-num: 3\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("p",[e._v("pod加上这两个注解表示属于同一个task, num表示task里有多少pod。")]),e._v(" "),a("p",[e._v("本来是再定义一个CRD去描述这个task，耦合会小一些，但是实现麻烦些，需要多监听一个CRD，偷懒就没这样做")]),e._v(" "),a("h1",{attrs:{id:"实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现"}},[e._v("#")]),e._v(" 实现")]),e._v(" "),a("p",[e._v("延迟绑定流程：\n"),a("img",{attrs:{src:"/batch-scheduler-flow.png",alt:""}})]),e._v(" "),a("ul",[a("li",[e._v("如果是普通的pod，找到节点后assume就直接bind")]),e._v(" "),a("li",[e._v("如果是批处理任务，直接扔到批处理缓存中返回")]),e._v(" "),a("li",[e._v("有个协程一直检查批缓存中是否有成功的task (pod都齐了)")]),e._v(" "),a("li",[e._v("成功的task扔进binding队列，worker取成功的task进行批量绑定，绑定时与普通pod互斥")])]),e._v(" "),a("p",[e._v("batch scheduler接口与成员\n"),a("img",{attrs:{src:"/batch-scheduler.png",alt:""}})]),e._v(" "),a("p",[e._v("Run 起一个协程检查成功的task并塞入队列\nRunBind 起一个task绑定协程\nPodQuePriority 去动态修改pod队列的优先级，让同task的pod优先调度")]),e._v(" "),a("p",[e._v("执行流程：\n"),a("img",{attrs:{src:"/batch-scheduler-run.png",alt:""}})]),e._v(" "),a("h2",{attrs:{id:"延迟绑定"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#延迟绑定"}},[e._v("#")]),e._v(" 延迟绑定")]),e._v(" "),a("p",[e._v("scheduler/scheduler.go:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('\t//fanux if it is a batch pod, return\n\tif sched.Config.BatchScheduler.IsBatchPod(assumedPod) {\n\t\terr = sched.Config.BatchScheduler.HandleBatchPod(assumedPod)\n\t\tif err != nil {\n\t\t\tglog.Errorf("schedule batch pod failed: %v", assumedPod.Namespace, assumedPod.Name)\n\t\t}\n\t\treturn\n\t}\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br")])]),a("p",[e._v("增加绑定互斥，防止batch任务和普通pod同事binding:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("\tgo func() {\n\t\t//fanux add bind mutex\n\t\tsched.Config.BatchScheduler.Lock()\n\t\tdefer sched.Config.BatchScheduler.UnLock()\n\n\t\terr := sched.bind(assumedPod, &v1.Binding{\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br")])]),a("h2",{attrs:{id:"检查资源是否充足checkresourceisenough"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#检查资源是否充足checkresourceisenough"}},[e._v("#")]),e._v(" 检查资源是否充足CheckResourceIsEnough")]),e._v(" "),a("p",[e._v("should't use filterFunc, needs nodelist")]),e._v(" "),a("p",[e._v("scheduler/util/batch.go")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('package util\n\nimport "api/core/v1"\n\n//CheckResourceIsEnough is\nfunc CheckResourceIsEnough(pod *v1.Pod, nodes []*v1.Node) (bool, error) {\n\treturn false, nil\n}\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br")])]),a("p",[e._v("scheduler/core/generic_scheduler.go")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('\t//fanux add checkBatchPodResource\n\tflag, err := util.CheckResourceIsEnough(pod, filteredNodes)\n\tif !flag || err != nil {\n\t\treturn "", err\n\t}\n\n\ttrace.Step("Prioritizing")\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br")])]),a("p",[e._v("处理资源不足时的情况")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("\tsuggestedHost, err := sched.schedule(pod)\n\n\t//fanux add handle if resource not enough\n\tif strings.Contains(err.Error(), common.BatchResourceNotEnough) {\n\t\tsched.Config.BatchScheduler.HandleResourceNotEnough(pod)\n\t} else if err != nil {\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br")])]),a("h2",{attrs:{id:"如何获取节点已经分配gpu的数量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何获取节点已经分配gpu的数量"}},[e._v("#")]),e._v(" 如何获取节点已经分配GPU的数量")]),e._v(" "),a("p",[e._v("nodeInfo allocatableResource - requestedResource is avaliavle resource")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("\trequestedResource *Resource\n\tnonzeroRequest    *Resource\n\tallocatableResource *Resource\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("p",[e._v("GPU 是 ScalarResources, 资源名称叫 : "),a("code",[e._v('NVIDIAGPUResourceName = "nvidia.com/gpu"')])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("type Resource struct {\n\tMilliCPU         int64\n\tMemory           int64\n\tEphemeralStorage int64\n\t// We store allowedPodNumber (which is Node.Status.Allocatable.Pods().Value())\n\t// explicitly as int, to avoid conversions and improve performance.\n\tAllowedPodNumber int\n\t// ScalarResources\n\tScalarResources map[v1.ResourceName]int64\n}\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br")])]),a("h2",{attrs:{id:"增加podupdater，可更新podcondition状态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#增加podupdater，可更新podcondition状态"}},[e._v("#")]),e._v(" 增加podupdater，可更新podcondition状态")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("\tbatchScheduler := batch.NewBatchScheduler(c.schedulerCache, c.podQueue, &binder{c.client}, &podConditionUpdater{c.client})\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h2",{attrs:{id:"需要把batch-scheduler的cache给generic-scheduler资源检查时需要用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#需要把batch-scheduler的cache给generic-scheduler资源检查时需要用"}},[e._v("#")]),e._v(" 需要把batch scheduler的cache给generic_scheduler资源检查时需要用")]),e._v(" "),a("p",[e._v("需要知道已经有哪些pod已经assume过了，把这个数量减掉才是batch任务还需要多少GPU")]),e._v(" "),a("p",[e._v("core/generic_scheduler.go")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("\t//fanux add batch Cache\n\t//check batch pod resource is enough need batch scheduler cache\n\tBatchCache common.TaskCache\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("\t//fanux add checkBatchPodResource\n\tflag, err := common.CheckResourceIsEnough(pod, filteredNodes, g.cachedNodeInfoMap, g.BatchCache)\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("factory.go")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("\t//fanux check batch resource is enough need batch scheduler cache\n\tbatchCache := batchScheduler.GetTaskCache()\n\n\talgo := core.NewGenericScheduler(\n        ...\n\t\tbatchCache,\n\t)\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br")])]),a("p",[e._v("then checkresource :")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("\t//shoud not use metadata, need use metadata - assumed pod num in batch cache\n\t_, podNum := GetPodBathMeta(pod)\n\tpodNum -= batchCache.GetTaskAssumedPodNum(pod)\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("h2",{attrs:{id:"检查资源是否充足详细算法："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#检查资源是否充足详细算法："}},[e._v("#")]),e._v(" 检查资源是否充足详细算法：")]),e._v(" "),a("p",[e._v("有很多细节")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('//获取pod需要多少GPU，这个需要把pod里容器配额加起来\nfunc GetPodGPUCount(pod *v1.Pod) (count int) {\n\tfor _, c := range pod.Spec.Containers {\n\t\tlimit, ok := c.Resources.Limits[NVIDIAGPUResourceName]\n\t\tl, okay := limit.AsInt64()\n\t\tif !ok || !okay {\n\t\t\tcontinue\n\t\t}\n\t\tcount += int(l)\n\t}\n\n\tglog.Infof("Pod [%s] need GPU [%d]", pod.GetName(), count)\n\n\treturn\n}\n\n//获取节点空闲GPU，需要把可分配的减去已经申请的\nfunc GetNodeFreeGPU(nodeInfo *cache.NodeInfo) int {\n\tif nodeInfo == nil {\n\t\treturn 0\n\t}\n\n\tallocatable, ok := nodeInfo.AllocatableResource().ScalarResources[NVIDIAGPUResourceName]\n\tif !ok {\n\t\tglog.Errorf("can\'t fetch allocatable GPU : %v", nodeInfo)\n\t\treturn 0\n\t}\n\tglog.Infof("node [%s] allocatable GPU [%d]", nodeInfo.Node().Name, allocatable)\n\n\trequested, ok := nodeInfo.RequestedResource().ScalarResources[NVIDIAGPUResourceName]\n\tif !ok {\n\t\t//glog.Errorf("can\'t fetch requested GPU : %v", nodeInfo)\n\t\t//return 0\n\t\trequested = 0\n\t}\n\tglog.Infof("node [%s] requested GPU [%d]", nodeInfo.Node().Name, requested)\n\n\tavailable := allocatable - requested\n\n\tglog.Infof("available node [%s] GPU : [%d]", nodeInfo.Node().Name, available)\n\n\treturn int(available)\n}\n\n//这里最关键的点是需要把annotations里面获取的task pod总数减去已经assume过的batch pod，这样才是真实所需\nfunc CheckResourceIsEnough(pod *v1.Pod, nodes []*v1.Node, cachedNodeInfoMap map[string]*cache.NodeInfo, batchCache TaskCache) (bool, error) {\n\t//if is not batch pod, return true,nil\n\tif !IsBatch(pod) {\n\t\tglog.Infof("pod %s is not batch pod", pod.GetName())\n\t\treturn true, nil\n\t}\n\n\t//shoud not use metadata, need use metadata - ready pod num in batch cache\n\t_, podNum := GetPodBathMeta(pod)\n\tpodNum -= batchCache.GetTaskAssumedPodNum(pod)\n\n\teveryPodNeedsGPU := GetPodGPUCount(pod)\n\tif everyPodNeedsGPU == 0 {\n\t\tglog.Infof("pod %s require 0 GPU", pod.GetName())\n\t\treturn true, nil\n\t}\n\n\t// TODO maybe check nodes[1:], node[0] already allocate a pod, CPU and other metric may reach limit\n\tfor _, node := range nodes {\n\t\tnodeInfo, ok := cachedNodeInfoMap[node.Name]\n\t\tif !ok {\n\t\t\tcontinue\n\t\t}\n\t\tnodeFree := GetNodeFreeGPU(nodeInfo)\n\t\tpodNum -= nodeFree / everyPodNeedsGPU\n\t\tglog.Infof("pod: [%s] node: [%s] podNum [%d] nodeFree [%d] podNeed [%d]", pod.GetName(), node.Name, podNum, nodeFree, everyPodNeedsGPU)\n\t\tif podNum <= 0 {\n\t\t\treturn true, nil\n\t\t}\n\t}\n\n\treturn false, fmt.Errorf("BatchResourceNotEnough : pod name is %s", pod.GetName())\n}\n\n//判断是不是batch pod\nfunc IsBatch(pod *v1.Pod) bool {\n\tg, n := GetPodBathMeta(pod)\n\tif g == "" || n == 0 {\n\t\tglog.Infof("The pod\'s group name is empty string,pod name is %v.", pod.GetName())\n\t\treturn false\n\t}\n\treturn true\n}\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br"),a("span",{staticClass:"line-number"},[e._v("21")]),a("br"),a("span",{staticClass:"line-number"},[e._v("22")]),a("br"),a("span",{staticClass:"line-number"},[e._v("23")]),a("br"),a("span",{staticClass:"line-number"},[e._v("24")]),a("br"),a("span",{staticClass:"line-number"},[e._v("25")]),a("br"),a("span",{staticClass:"line-number"},[e._v("26")]),a("br"),a("span",{staticClass:"line-number"},[e._v("27")]),a("br"),a("span",{staticClass:"line-number"},[e._v("28")]),a("br"),a("span",{staticClass:"line-number"},[e._v("29")]),a("br"),a("span",{staticClass:"line-number"},[e._v("30")]),a("br"),a("span",{staticClass:"line-number"},[e._v("31")]),a("br"),a("span",{staticClass:"line-number"},[e._v("32")]),a("br"),a("span",{staticClass:"line-number"},[e._v("33")]),a("br"),a("span",{staticClass:"line-number"},[e._v("34")]),a("br"),a("span",{staticClass:"line-number"},[e._v("35")]),a("br"),a("span",{staticClass:"line-number"},[e._v("36")]),a("br"),a("span",{staticClass:"line-number"},[e._v("37")]),a("br"),a("span",{staticClass:"line-number"},[e._v("38")]),a("br"),a("span",{staticClass:"line-number"},[e._v("39")]),a("br"),a("span",{staticClass:"line-number"},[e._v("40")]),a("br"),a("span",{staticClass:"line-number"},[e._v("41")]),a("br"),a("span",{staticClass:"line-number"},[e._v("42")]),a("br"),a("span",{staticClass:"line-number"},[e._v("43")]),a("br"),a("span",{staticClass:"line-number"},[e._v("44")]),a("br"),a("span",{staticClass:"line-number"},[e._v("45")]),a("br"),a("span",{staticClass:"line-number"},[e._v("46")]),a("br"),a("span",{staticClass:"line-number"},[e._v("47")]),a("br"),a("span",{staticClass:"line-number"},[e._v("48")]),a("br"),a("span",{staticClass:"line-number"},[e._v("49")]),a("br"),a("span",{staticClass:"line-number"},[e._v("50")]),a("br"),a("span",{staticClass:"line-number"},[e._v("51")]),a("br"),a("span",{staticClass:"line-number"},[e._v("52")]),a("br"),a("span",{staticClass:"line-number"},[e._v("53")]),a("br"),a("span",{staticClass:"line-number"},[e._v("54")]),a("br"),a("span",{staticClass:"line-number"},[e._v("55")]),a("br"),a("span",{staticClass:"line-number"},[e._v("56")]),a("br"),a("span",{staticClass:"line-number"},[e._v("57")]),a("br"),a("span",{staticClass:"line-number"},[e._v("58")]),a("br"),a("span",{staticClass:"line-number"},[e._v("59")]),a("br"),a("span",{staticClass:"line-number"},[e._v("60")]),a("br"),a("span",{staticClass:"line-number"},[e._v("61")]),a("br"),a("span",{staticClass:"line-number"},[e._v("62")]),a("br"),a("span",{staticClass:"line-number"},[e._v("63")]),a("br"),a("span",{staticClass:"line-number"},[e._v("64")]),a("br"),a("span",{staticClass:"line-number"},[e._v("65")]),a("br"),a("span",{staticClass:"line-number"},[e._v("66")]),a("br"),a("span",{staticClass:"line-number"},[e._v("67")]),a("br"),a("span",{staticClass:"line-number"},[e._v("68")]),a("br"),a("span",{staticClass:"line-number"},[e._v("69")]),a("br"),a("span",{staticClass:"line-number"},[e._v("70")]),a("br"),a("span",{staticClass:"line-number"},[e._v("71")]),a("br"),a("span",{staticClass:"line-number"},[e._v("72")]),a("br"),a("span",{staticClass:"line-number"},[e._v("73")]),a("br"),a("span",{staticClass:"line-number"},[e._v("74")]),a("br"),a("span",{staticClass:"line-number"},[e._v("75")]),a("br"),a("span",{staticClass:"line-number"},[e._v("76")]),a("br"),a("span",{staticClass:"line-number"},[e._v("77")]),a("br"),a("span",{staticClass:"line-number"},[e._v("78")]),a("br"),a("span",{staticClass:"line-number"},[e._v("79")]),a("br"),a("span",{staticClass:"line-number"},[e._v("80")]),a("br"),a("span",{staticClass:"line-number"},[e._v("81")]),a("br"),a("span",{staticClass:"line-number"},[e._v("82")]),a("br"),a("span",{staticClass:"line-number"},[e._v("83")]),a("br"),a("span",{staticClass:"line-number"},[e._v("84")]),a("br"),a("span",{staticClass:"line-number"},[e._v("85")]),a("br"),a("span",{staticClass:"line-number"},[e._v("86")]),a("br"),a("span",{staticClass:"line-number"},[e._v("87")]),a("br"),a("span",{staticClass:"line-number"},[e._v("88")]),a("br")])]),a("h1",{attrs:{id:"关于gpu的使用与发现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于gpu的使用与发现"}},[e._v("#")]),e._v(" 关于GPU的使用与发现")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/sealyun/GPU/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("资源包"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("这里包含docker nv-docker GPU-device plugin\ninstall.sh...")]),e._v(" "),a("p",[e._v("/etc/docker/daemon.json")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('[root@compute-gpu006 ~]# cat /etc/docker/daemon.json\n{\n    "default-runtime":"nvidia",\n    "runtimes": {\n        "nvidia": {\n            "path": "/usr/bin/nvidia-container-runtime",\n            "runtimeArgs": []\n        }\n    }\n}\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br")])]),a("p",[e._v("kubectl describe node xxx:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Capacity:\n cpu:                72\n ephemeral-storage:  222779Mi\n hugepages-1Gi:      0\n hugepages-2Mi:      2Gi\n memory:             791014684Ki\n nvidia.com/gpu:     2                # 这里就能看到GPU了\n pods:               110\nAllocatable:\n cpu:                72\n ephemeral-storage:  210240641086\n hugepages-1Gi:      0\n hugepages-2Mi:      2Gi\n memory:             788815132Ki\n nvidia.com/gpu:     2\n pods:               110\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br")])]),a("h1",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[e._v("#")]),e._v(" 总结")]),e._v(" "),a("p",[e._v("原生调度器的设计就是pod one by one，所以做这个功能的开发还是改动非常大的，也是比较困难的，工作量不大，但是需要找到一个优雅的方案，\n合理的架构比较麻烦,想了很久做了这个侵入不太大的实现方案，欢迎大家一起讨论")])])}),[],!1,null,null,null);s.default=t.exports}}]);