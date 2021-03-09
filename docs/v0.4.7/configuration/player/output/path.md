---
title: path 
---

path
===

### 说明
配置资源输出路径

若输出类型为`file`需要配置有效的文件路径。请注意kplayer不会二次确认该文件是否已存在，请勿配置重要文件路径以免造成数据的丢失
若输出类型为`rtmp`需要配置符合rtmp协议的推流地址

path支持单个字符串或字符串数组。单个字符串为单路输出、数组为相同视频资源同时推流至多个目标输出

### 类型
| 数据类型 | 是否必填 | 默认值 |
|---|---|---|
| 字符串 | 是 | - |
| 字符串数组 | 是 | - |

### 示例
单路输出
```yaml {4}
version: "1.1.0"
player:
  output:
    path: "rtmp://xxxxx.xxxx.com/xxxx?xxxx"
```

多路输出
```yaml {5,6}
version: "1.1.0"
player:
  output:
    path:
      - "rtmp://xxxxx.xxxx.com/xxxx?xxxx"
      - "rtmp://xxxxx.xxxx.com/xxxx?xxxx"
```
