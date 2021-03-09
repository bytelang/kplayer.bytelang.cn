---
title: audio_sample_rate
---

audio_sample_rate
===

### 说明
配置音频输出采样率

### 类型
| 数据类型 | 是否必填 | 默认值 | 可选值 |
|---|---|---|---|
|  无符号整型 | 否 | 48000 | 44800 |
|  |  |  | 44800 |

### 示例
```yaml {4}
version: "1.1.0"
player:
  encode:
    audio_sample_rate: 48000
```
