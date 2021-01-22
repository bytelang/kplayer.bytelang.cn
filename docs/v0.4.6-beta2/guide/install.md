---
title: 安装
---

安装
===

### 兼容性
Kplayer目前仅支持Linux_amd_x86_64环境上运行。在后续的版本迭代中我们将会陆续针对不同操作系统与不同发行版本进行跨平台支持，目前仍需要针对不同平台的差异化进行处理。

### 下载安装

#### Linux
Kplayer还未进行各平台二进制包 *(dep,rpm...)* 等安装途径。我们将依赖的相关库已静态编译至kplayer中，只需要在 `Linux内核版本>=3`与`glibc >=2.17`之上的依赖环境中直接运行

> [http://download.bytelang.cn/kplayer-v0.4.6-beta2-10-gc96eb76-linux_amd64.tar.gz](http://download.bytelang.cn/kplayer-v0.4.6-beta2-10-gc96eb76-linux_amd64.tar.gz)

找到合适的目录。运行以下代码，下载并解压当前最终发布版本的kplayer程序
```shell script
[kplayer@hostname]$ wget http://download.bytelang.cn/kplayer-v0.4.6-beta2-10-gc96eb76-linux_amd64.tar.gz
[kplayer@hostname]$ tar zxvf kplayer-v0.4.6-beta2-10-gc96eb76-linux_amd64.tar.gz
x kplayer
x kplayer.yaml.exmale
```

至此，kplayer已经被下载至你的服务器上
