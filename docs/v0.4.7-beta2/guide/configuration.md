---
title: 修改配置文件
---

修改配置文件
===

::: tip 提醒
对yaml配置文件的更改需要完全遵循yaml配置文件格式规范。保持严格的空格或tab缩进。如需帮助请移步至：[https://baike.baidu.com/item/YAML/1067697](https://baike.baidu.com/item/YAML/1067697)
:::

下载并解压完成后的文件中包含可执行文件与配置文件示例结构
### 修改配置文件
将`kplayer.yaml.example`重命名为`kplayer.yaml`。使用你最习惯的文本编辑器打开kplayer.yaml，你将看到默认的配置文件
```yaml
# ----------------------------------------
# kplayer 基础配置文件.
#
# 详细说明请参见：https://kplayer.bytelang.cn
#
# ----------------------------------------
version: "1.1.0"
player:
  media:
    list:
      - "/path/example1.mp4"
      - "/path/example2.mp4"

  output:
    type: rtmp
    path: "rtmp://127.0.0.1:1935/push"
```

### 添加视频资源文件
::: warning 注意
yaml为严格的缩进配置文件格式，请保持配置文件的缩进格式和缩进长度
:::
修改配置文件中的视频资源列表，例如你有两个文件存放在/videos路径中，将list目录中的资源文件路径替换为你的视频文件路径
```yaml {5,6}
version: "1.1.0"
player:
  media:
    list:
      - "/videos/1.mp4"
      - "/videos/2.mp4"

  output:
    type: rtmp
    path: "rtmp://127.0.0.1:1935/push"
```

### 添加推流路径
1. 一般可在本地搭建rtmp server进行在本地进行视频资源推流测试。rtmp server搭建请参考搜索引擎中搭建rtmp server教程。示例配置文件中默认给出的地址均为本地推流测试地址，若未搭建rtmp server时会提示无法打开目标服务器。

2. 若非本地推流调试，则需要访问目标直播推流平台开启直播后获取推流地址。主流直播平台分为`推流地址`与`直播码`。直播码通常是为了用户身份鉴权使用，**将直播码追加至推流地址后方就获得了完整的推流地址**.

将获取到的推流地址修改至kplayer的配置文件中
```yaml {10}
version: "1.1.0"
player:
  media:
    list:
      - "/videos/1.mp4"
      - "/videos/2.mp4"

  output:
    type: rtmp
    path: "rtmp://live.xxxx.xxxx.com/?xxxx"
```
