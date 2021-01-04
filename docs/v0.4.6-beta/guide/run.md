---
title: 运行kplayer
---

运行kplayer
===

配置文件已配置完毕，开始运行kplayer进行视频资源推流
```shell script
[kplayer@hostname]$ ./kplayer
kplayer version v0.4.3(3a5690a) Copyright (c) 2019-2020 the ByteLang Studio (https://kplayer.bytelang.cn)
  config version 1.1.0 plugin driver version 1.2.0 license driver version v1
  cmake with 3.6.2 build type Release
  build with GNU Toolchains version 4.9.2 C++ Standard 14 on Linux x86_64
  Hope you have a good experience.
/.................................................................................................../
[pid:40504/tid:1689117] [2020-07-21 10:08:00.634] [KPSingleOutput] [info] 正在打开输出流; path: rtmp://127.0.0.1:1935/push
[pid:40504/tid:1689117] [2020-07-21 10:08:00.660] [KPEncode] [info] 打开输出流成功; path: rtmp://127.0.0.1:1935/push
[pid:40504/tid:1689117] [2020-07-21 10:08:00.838] [KPSingleConnect] [info] 正在打开媒体文件: /videos/1.mp4
```
