---
title: start
---

start
===

### 说明
指定kplayer在第一次运行时，从媒体资源列表第几个索引位开始运行。
用于中断程序推流后按照预期位置进行推流

::: tip 提醒
该参数只在第一次运行kplayer的第一次循环有效
:::

### 类型
| 数据类型 | 是否必填 | 默认值 |
|---|---|---|
| 无符号整型 | 否 | 1 |

### 示例
```yaml {7}
version: "1.0"
player:
  media:
    list:
      - "/path/example1.mp4"
      - "/path/example2.mp4"
    start: 2 # 第一次循环播放将从example2.mp4开始播放
```
