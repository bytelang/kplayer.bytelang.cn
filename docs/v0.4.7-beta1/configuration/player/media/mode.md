---
title: mode
---

mode
===

### 说明
设置播放列表播放模式

::: tip 提醒  
random随机模式下，kplayer并不保证随机完整性，有几率会随机到当前播放资源文件
:::


### 类型
| 数据类型 | 是否必填 | 默认值 | 可选值 |
|---|---|---|---|
| 枚举 | 否 | list | list：顺序播放、random：随机播放、queue：播放完立即删除|

### 示例
```yaml {4}
version: "1.1.0"
player:
  media:
    mode: "list"
```
