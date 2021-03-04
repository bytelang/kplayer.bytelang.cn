---
title: 运行kplayer
---

运行kplayer
===

配置文件已配置完毕，开始运行kplayer进行视频资源推流
```shell script
[kplayer@hostname]$ ./kplayer
kplayer version v0.4.7-beta2(ccb00cc) Copyright (c) 2019-2020 the ByteLang Studio (https://kplayer.bytelang.cn)
  config version 1.1.0 plugin driver version 1.3.0 license driver version v1
  cmake with 3.6.2 build type Release
  build with GNU Toolchains version 9.3.1 C++ Standard 14 on Linux x86_64
  Hope you have a good experience.
/.................................................................................................../
[pid:40504/tid:1689117] [2021-01-22 09:40:32.935] [KPSingleOutput] [info] 正在打开输出流; path: rtmp://127.0.0.1:1935/push
[pid:40504/tid:1689117] [2021-01-22 09:40:32.935] [KPEncode] [info] 打开输出流成功; path: rtmp://127.0.0.1:1935/push
[pid:40504/tid:1689117] [2021-01-22 09:40:32.935] [KPSingleConnect] [info] 正在打开媒体文件: /videos/1.mp4
```
