---
title: quality
---

quality
===

### 说明
配置输出视频资源质量

取值区间为**0-20**(取值越大，压缩程度越高。视频清晰度降低、比特率与网络资源占用更小)

### 类型
| 数据类型 | 是否必填 | 默认值 |
|---|---|---|
|  无符号整型 | 否 | 0(使用原视频转码后比特率) |

### 示例
```yaml {4}
version: "1.1.0"
player:
  encode:
    quality: 10
```
