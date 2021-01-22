---
title: video_fps
---

video_fps
===

### 说明
配置视频输出帧率(FPS)

### 类型
| 数据类型 | 是否必填 | 默认值 |
|---|---|---|
|  无符号整型 | 否 | 30 |

### 示例
```yaml {4}
version: "1.1.0"
player:
  encode:
    video_fps: 25
```
