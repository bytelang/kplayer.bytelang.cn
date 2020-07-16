---
title: 运行kplayer
---

运行kplayer
===

配置文件已配置完毕，开始运行kplayer进行视频资源推流
```shell script
[kplayer@hostname]$ ./kplayer --help
kplayer version v0.3.4(f55c06b) Copyright (c) 2019 the ByteLang Studio (https://kplayer.bytelang.cn)
  config version 1.0.0 plugin driver version 1.0.2 license driver version 1.0.1
  cmake with 3.6.2 build type Release
  build with GNU Toolchains version 4.9.2 C++ Standard 14 on Linux x86_64
  Hope you have a good experience.
/.................................................................................................../
Usage:
  kplayer [options]
Available options:
  -h, --help         Display available options
  -c, --config_path  Set config file path
```

运行输入--help查看kplayer支持的参数列表


### 加载配置文件
在没有指定配置文件的情况下，默认加载当前目录的`kplayer.yaml`文件。若存在多份配置文件，使用`-c`参数指定配置文件所在路径
```shell script
./kplayer -c /etc/kplayer.yaml
```