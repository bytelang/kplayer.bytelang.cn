---
title: cache_path
---

cache_path
===

### 说明
指定缓存生成文件的路径。该值必须为有效的文件夹路径地址，并有写入权限

::: warning 注意
请确认缓存生成路径与运行时配置缓存路径一直，否则会重建缓存
:::

### 类型
| 数据类型 | 是否必填 | 默认值 |
|---|---|---|
|  字符串 | 否 | ./ |

### 示例
```yaml {4}
version: "1.0"
player:
  output:
    cache_path: "/tmp/kplayer"
```
