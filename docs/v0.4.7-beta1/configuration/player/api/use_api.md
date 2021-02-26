---
title: use_api
---

use_api
===

### 说明
是否打开api端口监听功能.提供restful风格的api控制kplayer的播放行为

### 类型
| 数据类型 | 是否必填 | 默认值 | 可选值 |
|---|---|---|---|
| 布尔 | 否 | false | true false |

### 示例
```yaml {4}
version: "1.1.0"
player:
  api:
    use_api: true
```
