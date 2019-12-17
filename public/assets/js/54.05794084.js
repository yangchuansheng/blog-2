(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{371:function(s,n,a){"use strict";a.r(n);var e=a(0),t=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"tektoncd-pipeline教程-kubernetes原生pipeline"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tektoncd-pipeline教程-kubernetes原生pipeline"}},[s._v("#")]),s._v(" tektoncd pipeline教程 - kubernetes原生pipeline")]),s._v(" "),a("h1",{attrs:{id:"概览"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概览"}},[s._v("#")]),s._v(" 概览")]),s._v(" "),a("p",[s._v("Tekton Pipeline,是一个k8s native的pipeline, 任务跑在pod中，通过自定义CRD去管理任务与工作流等等，我看完tekton之后感觉是功能很强大，但是有点过度设计了，没有drone的简约大方灵活之感\n")]),s._v(" "),a("h1",{attrs:{id:"task"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#task"}},[s._v("#")]),s._v(" Task")]),s._v(" "),a("p",[s._v("Tekton Pipelines的主要目标是单独运行您的任务或作为管道的一部分运行。每个任务都在Kubernetes集群上作为Pod运行，每个步骤都作为自己的容器。这点深得drone思想精髓，其实drone也有计划将kubernetes作为任务执行引擎，只是没有下文了。")]),s._v(" "),a("p",[s._v("A Task定义了需要执行的工作，例如以下是一个简单的任务：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('apiVersion: tekton.dev/v1alpha1\nkind: Task\nmetadata:\n  name: echo-hello-world\nspec:\n  steps:\n    - name: echo\n      image: ubuntu\n      command:\n        - echo\n      args:\n        - "hello world"\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("p",[s._v("这steps是一系列由任务顺序执行的命令。这个steps内的配置几乎与drone如出一辙")]),s._v(" "),a("p",[s._v("Task定义好并没有被执行，创建TaskRun时才会执行。这是合理的，相当于是一个触发")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("apiVersion: tekton.dev/v1alpha1\nkind: TaskRun\nmetadata:\n  name: echo-hello-world-task-run\nspec:\n  taskRef:\n    name: echo-hello-world\n  trigger:\n    type: manual\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("kubectl apply -f < name-of-file.yaml >")]),s._v(" "),a("p",[s._v("查看TaskRun\nkubectl get taskruns / echo-hello-world-task-run -o yaml")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('apiVersion: tekton.dev/v1alpha1\nkind: TaskRun\nmetadata:\n  creationTimestamp: 2018-12-11T15:49:13Z\n  generation: 1\n  name: echo-hello-world-task-run\n  namespace: default\n  resourceVersion: "6706789"\n  selfLink: /apis/tekton.dev/v1alpha1/namespaces/default/taskruns/echo-hello-world-task-run\n  uid: 4e96e9c6-fd5c-11e8-9129-42010a8a0fdc\nspec:\n  generation: 1\n  inputs: {}\n  outputs: {}\n  taskRef:\n    name: echo-hello-world\n  taskSpec: null\n  trigger:\n    type: manual\nstatus:\n  conditions:\n    - lastTransitionTime: 2018-12-11T15:50:09Z\n      status: "True"\n      type: Succeeded\n  podName: echo-hello-world-task-run-pod-85ca51\n  startTime: 2018-12-11T15:49:39Z\n  steps:\n    - terminated:\n        containerID: docker://fcfe4a004...6729d6d2ad53faff41\n        exitCode: 0\n        finishedAt: 2018-12-11T15:50:01Z\n        reason: Completed\n        startedAt: 2018-12-11T15:50:01Z\n    - terminated:\n        containerID: docker://fe86fc5f7...eb429697b44ce4a5b\n        exitCode: 0\n        finishedAt: 2018-12-11T15:50:02Z\n        reason: Completed\n        startedAt: 2018-12-11T15:50:02Z\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br")])]),a("p",[s._v("状态Succeeded = True显示任务已成功运行。")]),s._v(" "),a("h1",{attrs:{id:"任务输入和输出"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#任务输入和输出"}},[s._v("#")]),s._v(" 任务输入和输出")]),s._v(" "),a("p",[s._v("在更常见的场景中，任务需要多个步骤来处理输入和输出资源。例如，Task可以从GitHub存储库获取源代码并从中构建Docker镜像。")]),s._v(" "),a("p",[s._v("PipelinesResources用于定义任务的输入(如代码)与输出(如Docker镜像)。有一些系统定义的资源类型可供使用，以下是通常需要的两个资源示例。")]),s._v(" "),a("p",[s._v("该git资源可以是你要编译的代码：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("apiVersion: tekton.dev/v1alpha1\nkind: PipelineResource\nmetadata:\n  name: skaffold-git\nspec:\n  type: git\n  params:\n    - name: revision\n      value: master\n    - name: url\n      value: https://github.com/GoogleContainerTools/skaffold\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("该image资源代表要被任务编译成的镜像：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("apiVersion: tekton.dev/v1alpha1\nkind: PipelineResource\nmetadata:\n  name: skaffold-image-leeroy-web\nspec:\n  type: image\n  params:\n    - name: url\n      value: gcr.io/<use your project>/leeroy-web\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("以下是Task输入和输出。输入资源是GitHub存储库，输出是从该源生成的图像。任务命令的参数支持模板化，因此任务的定义是常量，参数的值可以在运行时更改。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("apiVersion: tekton.dev/v1alpha1\nkind: Task\nmetadata:\n  name: build-docker-image-from-git-source\nspec:\n  inputs:\n    resources:\n      - name: docker-source\n        type: git\n    params:\n      - name: pathToDockerFile       # 这些参数都是可以自定义的\n        description: The path to the dockerfile to build\n        default: /workspace/docker-source/Dockerfile\n      - name: pathToContext\n        description:\n          The build context used by Kaniko\n          (https://github.com/GoogleContainerTools/kaniko#kaniko-build-contexts)\n        default: /workspace/docker-source\n  outputs:\n    resources:\n      - name: builtImage\n        type: image\n  steps:\n    - name: build-and-push\n      image: gcr.io/kaniko-project/executor  # 特定功能的镜像，可以用来docker build\n      command:\n        - /kaniko/executor\n      args:\n        - --dockerfile=${inputs.params.pathToDockerFile}   # 这时原pathToDockerFile就是上面定义的参数\n        - --destination=${outputs.resources.builtImage.url}\n        - --context=${inputs.params.pathToContext}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br")])]),a("p",[s._v("TaskRun将输入和输出绑定到已定义的PipelineResources值，除了执行任务步骤外，还将值设置为用于模板化的参数。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("apiVersion: tekton.dev/v1alpha1\nkind: TaskRun\nmetadata:\n  name: build-docker-image-from-git-source-task-run\nspec:\n  taskRef:\n    name: build-docker-image-from-git-source\n  trigger:\n    type: manual\n  inputs:\n    resources:\n      - name: docker-source\n        resourceRef:\n          name: skaffold-git\n    params:                       # 执行时把参数传给Task，这样就不需要重复定义task，只需要增加input output 和taskrun 就可以跑一个别的工程, 从解耦这个角度到说比drone更好，任务流程可以复用\n      - name: pathToDockerFile\n        value: Dockerfile\n      - name: pathToContext\n        value: /workspace/docker-source/examples/microservices/leeroy-web #configure: may change according to your source\n  outputs:\n    resources:\n      - name: builtImage\n        resourceRef:\n          name: skaffold-image-leeroy-web  # 这也是上面指定的资源\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br")])]),a("p",[s._v("PS: inputs outputs应当不限制死必须叫这两个名字，只要是能支持参数就好。比如定义一个叫build的资源去指定docker build的镜像：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("apiVersion: tekton.dev/v1alpha1\nkind: PipelineResource\nmetadata:\n  name: skaffold-image-leeroy-web\nspec:\n  type: image\n  params:\n    - name: url\n      value: docker-in-docker:latest\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("Task 里：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("apiVersion: tekton.dev/v1alpha1\nkind: Task\nmetadata:\n  name: build-docker-image-from-git-source\nspec:\n  build:\n     resources:\n     - name: build\n       type: image\n  params:\n  - name: build-image\n    default: docker-in-docker:latest\n  steps:\n      - name: build-and-push\n      image: ${build.params.build-image}     \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("p",[s._v("我是觉得需要能进行这样的扩展了, 仅是inputs outputs就狭义了")]),s._v(" "),a("p",[s._v("获取pipeline全部信息\nkubectl get build-pipeline")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("NAME                                                   AGE\ntaskruns/build-docker-image-from-git-source-task-run   30s\n\nNAME                                          AGE\npipelineresources/skaffold-git                6m\npipelineresources/skaffold-image-leeroy-web   7m\n\nNAME                                       AGE\ntasks/build-docker-image-from-git-source   7m\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("要查看TaskRun的输出，请使用以下命令：")]),s._v(" "),a("p",[s._v("kubectl get taskruns / build-docker-image-from-git-source-task-run -o yaml")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('apiVersion: tekton.dev/v1alpha1\nkind: TaskRun\nmetadata:\n  creationTimestamp: 2018-12-11T18:14:29Z\n  generation: 1\n  name: build-docker-image-from-git-source-task-run\n  namespace: default\n  resourceVersion: "6733537"\n  selfLink: /apis/tekton.dev/v1alpha1/namespaces/default/taskruns/build-docker-image-from-git-source-task-run\n  uid: 99d297fd-fd70-11e8-9129-42010a8a0fdc\nspec:\n  generation: 1\n  inputs:\n    params:\n      - name: pathToDockerFile\n        value: Dockerfile\n      - name: pathToContext\n        value: /workspace/git-source/examples/microservices/leeroy-web #configure: may change depending on your source\n    resources:\n      - name: git-source\n        paths: null\n        resourceRef:\n          name: skaffold-git\n  outputs:\n    resources:\n      - name: builtImage\n        paths: null\n        resourceRef:\n          name: skaffold-image-leeroy-web\n  taskRef:\n    name: build-docker-image-from-git-source\n  taskSpec: null\n  trigger:\n    type: manual\nstatus:\n  conditions:\n    - lastTransitionTime: 2018-12-11T18:15:09Z\n      status: "True"\n      type: Succeeded\n  podName: build-docker-image-from-git-source-task-run-pod-24d414\n  startTime: 2018-12-11T18:14:29Z\n  steps:\n    - terminated:\n        containerID: docker://138ce30c722eed....c830c9d9005a0542\n        exitCode: 0\n        finishedAt: 2018-12-11T18:14:47Z\n        reason: Completed\n        startedAt: 2018-12-11T18:14:47Z\n    - terminated:\n        containerID: docker://4a75136c029fb1....4c94b348d4f67744\n        exitCode: 0\n        finishedAt: 2018-12-11T18:14:48Z\n        reason: Completed\n        startedAt: 2018-12-11T18:14:48Z\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br")])]),a("p",[s._v("类型的状态Succeeded = True显示Task已成功运行，您还可以验证Docker镜像是否生成。")]),s._v(" "),a("h1",{attrs:{id:"pipeline"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pipeline"}},[s._v("#")]),s._v(" Pipeline")]),s._v(" "),a("p",[s._v("Pipeline定义要按顺序执行的任务列表，同时还通过使用该from字段指示是否应将任何输出用作后续任务的输入，并指示执行的顺序（使用runAfter和from字段）。您在任务中使用的相同模板也可以在管道中使用。")]),s._v(" "),a("p",[s._v("例如：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('apiVersion: tekton.dev/v1alpha1\nkind: Pipeline\nmetadata:\n  name: tutorial-pipeline\nspec:\n  resources:\n    - name: source-repo\n      type: git\n    - name: web-image\n      type: image\n  tasks:\n    - name: build-skaffold-web # 编译与打镜像任务，上面已经介绍过\n      taskRef:\n        name: build-docker-image-from-git-source\n      params:\n        - name: pathToDockerFile\n          value: Dockerfile\n        - name: pathToContext\n          value: /workspace/examples/microservices/leeroy-web #configure: may change according to your source\n      resources:\n        inputs:\n          - name: workspace\n            resource: source-repo\n        outputs:\n          - name: image\n            resource: web-image\n    - name: deploy-web          # 部署\n      taskRef:\n        name: deploy-using-kubectl # 这里引入了一个通过k8s部署的Task，我们在下文看它是什么\n      resources:\n        inputs:                    # 定义输入，这里的输入其实是上个任务的输出\n          - name: workspace\n            resource: source-repo\n          - name: image            # 比如这个镜像，就是上个任务产生的\n            resource: web-image\n            from:                  # from就如同管道一样，把上个任务的输出作为这个任务的输入\n              - build-skaffold-web\n      params:                      # 留意这些参数都是传给Task模板的,覆盖inputs里的参数\n        - name: path\n          value: /workspace/examples/microservices/leeroy-web/kubernetes/deployment.yaml #configure: may change according to your source\n        - name: yqArg\n          value: "-d1"\n        - name: yamlPathToImage\n          value: "spec.template.spec.containers[0].image"\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br")])]),a("p",[s._v("以上Pipeline是引用一个Task被叫的deploy-using-kubectl：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('apiVersion: tekton.dev/v1alpha1\nkind: Task\nmetadata:\n  name: deploy-using-kubectl\nspec:\n  inputs:\n    resources:\n      - name: workspace\n        type: git\n      - name: image\n        type: image\n    params:\n      - name: path\n        description: Path to the manifest to apply\n      - name: yqArg\n        description:\n          Okay this is a hack, but I didn\'t feel right hard-coding `-d1` down\n          below\n      - name: yamlPathToImage\n        description:\n          The path to the image to replace in the yaml manifest (arg to yq)\n  steps:\n    - name: replace-image  # 第一步替换镜像\n      image: mikefarah/yq  # 特定功能的镜像，和drone同理，这里主要就是个模板渲染\n      command: ["yq"]\n      args:\n        - "w"\n        - "-i"\n        - "${inputs.params.yqArg}"\n        - "${inputs.params.path}"\n        - "${inputs.params.yamlPathToImage}"\n        - "${inputs.resources.image.url}"\n    - name: run-kubectl                 # 第二步执行kubectl\n      image: lachlanevenson/k8s-kubectl\n      command: ["kubectl"]\n      args:\n        - "apply"\n        - "-f"\n        - "${inputs.params.path}"   # 这就是yaml文件的位置\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br")])]),a("p",[s._v("要运行Pipeline，请创建PipelineRun如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("apiVersion: tekton.dev/v1alpha1\nkind: PipelineRun\nmetadata:\n  name: tutorial-pipeline-run-1\nspec:\n  pipelineRef:\n    name: tutorial-pipeline\n  trigger:\n    type: manual\n  resources:\n    - name: source-repo\n      resourceRef:\n        name: skaffold-git\n    - name: web-image\n      resourceRef:\n        name: skaffold-image-leeroy-web\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("p",[s._v("执行与查看pipeline:")]),s._v(" "),a("p",[s._v("kubectl apply -f < name-of-file.yaml >\nkubectl获取pipelineruns / tutorial-pipeline-run-1 -o yaml")]),s._v(" "),a("h1",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),a("p",[s._v("初学者会觉得有点绕，但是这种设计也是为了解耦合，我个人觉得优劣如下：")]),s._v(" "),a("p",[s._v("优势：")]),s._v(" "),a("ul",[a("li",[s._v("可以把k8s集群作为任务执行引擎，这样可以更好的利用资源，比如把线上夜间闲置资源用来跑任务，构建镜像 离线分析 甚至机器学习。")]),s._v(" "),a("li",[s._v("解耦做的比较好，任务模板可以拿来复用，而不需要大家都去重复定义")]),s._v(" "),a("li",[s._v("输入输出理念，一个任务的输入作为另个任务的输出不错")])]),s._v(" "),a("p",[s._v("劣势：")]),s._v(" "),a("ul",[a("li",[s._v("有点过度设计，一些简单的场景可能觉得配置起来有点绕了")]),s._v(" "),a("li",[s._v("输入输出依赖分布式系统，对比drone一个pipeline中的容器是共享了一个数据卷的，这样上个任务产生的文件很方便的给下个任务用，而基于集群的任务就可能得依赖git docker镜像仓库等做输入输出，有点麻烦，好的解决办法是利用k8s分布试存储给pipeline设置一个共享卷，方便任务间传输数据")])]),s._v(" "),a("p",[s._v("总体来说路子是对的而且还是有很多场景可以用的。")]),s._v(" "),a("p",[s._v("探讨可加QQ群：98488045")])])}),[],!1,null,null,null);n.default=t.exports}}]);