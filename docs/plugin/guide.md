---
title: 插件下载
---

### VideoShowTextPlugin
VideoShowTextPlugin 提供视频播放过程中，在指定位置显示指定文本
```yaml
version: "1.0"
plugin:
  - file: "libVideoShowFileNamePlugin"
    params:
      font_size: "17"     # 字号
      font_color: "white" # 颜色属性
      text: "文本" # 显示文本 
      x: "100" # x坐标 
      y: "100" # y坐标
```

### VideoShowCurrentTimePlugin
VideoShowCurrentTimePlugin提供视频播放过程中，在左上角显示当前系统时间插件
```yaml
version: "1.0"
plugin:
  - file: "libVideoShowCurrentTimePlugin"
    params:
      font_size: "17"     # 字号
      font_color: "white" # 颜色属性
```

### VideoShowFileNamePlugin
VideoShowFileNamePlugin提供视频播放过程中，在左上角显示当前播放文件名称。
```yaml
version: "1.0"
plugin:
  - file: "libVideoShowFileNamePlugin"
    params:
      font_size: "17"     # 字号
      font_color: "white" # 颜色属性
```