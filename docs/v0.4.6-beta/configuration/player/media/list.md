---
title: list
---

list
===

### 说明
该参数指定kplayer需要推流的目标媒体资源文件。由`数组`类型构成。
参数均支持相对路径与绝对路径。

支持多资源混合输入，手动指定视频流与音频流来源文件、视频流支持常见视频资源文件与图片文件(png、jpg、jpeg)。若使用remix类型，会忽略video下的音频流域audio下的视频流资源。

资源列表同时支持单资源文件与混合输入资源文件配置

支持网络资源输入

::: tip 提醒  
暂不支持gif类型格式图片作为remix类型的视频流  
请填写完整可访问的文件路径，不支持目录、通配符、缺少后缀名等路径  
网络资源文件暂只支持http、https、ftp协议类型文件
:::


### 类型
| 数据类型 | 是否必填 | 默认值 |
|---|---|---|
| 数组或对象 | 是 | - |

### 示例
```yaml {5,6,7,8,9,10,11}
version: "1.1.0"
player:
  media:
    list:
      - "http://127.0.0.1/network.mp4"
      - "/path/example1.mp4"
      - "/path/example2.mp4"
      - video: "/path/example1.jpg"
        audio: "/path/example2.mp3"
      - video: "/path/example1.mp4"
        audio: "/path/example2.aac"
```
