---
title: 参数选项
---

参数选项
===

kplayer支持运行选项参数，以下是运行参数说明
```shell script
[kplayer@bytelang]$ ./kplayer -h
Usage:
  kplayer [options]
Available options:
  -h, --help            Display available options
  -c, --config_path     Set config file path
  -g, --generate_cache    Generate media resources cache
```

### [-h]
*-h*、*--help* 选项用于打印所有可用的选项参数
```shell script
[kplayer@bytelang]$ ./kplayer -h
```

### [-c]
*-c*、*--config_path* 选项可指定目标配置文件的路径地址
```shell script
[kplayer@bytelang]$ ./kplayer -c /etc/kplayer.yaml
```

### [-g]
*-g*、*--generate_cache* 选项用于构建已配置媒体输入资源的缓存构建。  
用于在非推流环境下预生成视频文件缓存(cache)，解决低配服务器运行时因为硬件资源占用过大导致推流卡顿的情况
```shell script
[kplayer@bytelang]$ ./kplayer -g
```
