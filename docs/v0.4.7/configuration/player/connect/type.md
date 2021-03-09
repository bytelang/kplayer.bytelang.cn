---
title: type
---

type
===

### 说明
选择kplayer对多路输出或多路资源处理时的连接方式
* single
使用单线程

* mulit
使用多线程

### 类型
| 数据类型 | 是否必填 | 默认值 | 可选值 |
|---|---|---|---|
| 枚举 | 否 | single | single |
|  |  |  | mulit |

### 示例
```yaml {4}
version: "1.1.0"
player:
  connect:
    single: mulit
```
