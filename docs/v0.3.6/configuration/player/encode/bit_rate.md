---
title: bit_rate
---

bit_rate
===

### 说明
配置输出平均比特率。单位为k

### 类型
| 数据类型 | 是否必填 | 默认值 |
|---|---|---|
|  无符号整型 | 否 | 0(使用原视频转码后比特率) |

### 示例
```yaml {4}
version: "1.0"
player:
  encode:
    bit_rate: 2000
```
