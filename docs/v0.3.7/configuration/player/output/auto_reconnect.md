---
title: auto_reconnect
---

auto_reconnect
===

### 说明
在服务端主动断开连接时（直播间被关闭、推流服务器宕机），kplayer是否仍然保持运行并继续播放视频资源文件。并尝试5s一次的连接重试

### 类型
| 数据类型 | 是否必填 | 默认值 | 可选值 |
|---|---|---|---|
| 布尔 | 否 | false | true false |

### 示例
```yaml {4}
version: "1.0"
player:
  output:
    auto_reconnect: true
```
