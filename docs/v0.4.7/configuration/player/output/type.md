---
title: type
---

type
===

### 说明
指定输出资源类型。
当前支持`file`和`rtmp`类型
* file
kplayer会无视视频资源的时钟时间，完全成为解编码模式，将编码后资源写入至文件中
* rtmp
kplayer会遵循视频文件的时钟时间，进行远程rtmp协议推流

### 类型
| 数据类型 | 是否必填 | 默认值 | 可选值 |
|---|---|---|---|
| 枚举 | 是 | - | file |
| | | | rtmp |

### 示例
```yaml {4}
version: "1.1.0"
player:
  output:
    type: "rtmp"
```
