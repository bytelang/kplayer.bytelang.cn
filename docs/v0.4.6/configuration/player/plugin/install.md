---
title: plugin
---

plugin
===

### 说明
加载kplayer插件

具体插件依赖的参数请参见插件说明文档，此处配置通用化插件模板。并不适配所有符合kplayer规范的插件

`file`配置插件名称，一般情况下也是存放在plugin目录的插件文件名，不包含后缀。

`unique`为插件的唯一名称，用于插件重复加载时API操作的的对象标识名称，若未指定则会生成随机哈希值

`params` 为向插件传递的参数列表，具体参数列表需要根据不同插件进行定制化配置

### 示例
```yaml {3,4,5,6,7,8}
version: "1.1.0"
player:
  plugin:
    - file: "libVideoShowFileNamePlugin"
      unqie: "my_name"
      params:
        font_size: "17"
        font_color: "white"
```
