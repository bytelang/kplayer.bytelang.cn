---
title: font_name
---

font_name
===

### 说明
指定kplayer加载的字体资源文件

::: tip 提醒 
v0.4.7之前版本默认字体为`汉仪铸字美心体`，v0.4.7之后缺省字体为`方正黑体`
:::

### 类型
| 数据类型 | 是否必填 | 默认值 | 可选值 | 描述 |
|---|---|---|---|---|
| 字符串 | 否 | fzhtjw | fzhtjw | 方正黑体 |
|  |  |  | HYZhuZiMeiXinTiW | 汉仪铸字美心体 |

### 示例
```yaml {4}
version: "1.1.0"
player:
  resource:
    font_name: "HYZhuZiMeiXinTiW"
```
