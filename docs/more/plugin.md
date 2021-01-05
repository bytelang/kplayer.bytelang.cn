---
title: 插件下载
---

插件大全
===

::: tip 提醒
v0.3.6版本后只需要配置相应插件，kplayer将会自动从插件商城中下载并使用插件。无需手动下载插件

若使用的是第三方插件并未收录在插件商城中，则需要您手动下载符合版本要求的插件
:::

### VideoShowTextPlugin
VideoShowTextPlugin 提供视频播放过程中，在指定位置显示指定文本
```yaml
plugin:
  - file: "libVideoShowFileNamePlugin"
    params:
      font_size: "17"     # 字号
      font_color: "white" # 颜色属性
      text: "文本" # 显示文本 
      x: "100" # x坐标 
      y: "100" # y坐标
```
* [v1.0.0](http://download.bytelang.cn/plugin/v1.0.0/libVideoShowFileNamePlugin.so)
* [v1.0.1](http://download.bytelang.cn/plugin/v1.0.1/libVideoShowFileNamePlugin.so)
* [v1.0.2](http://download.bytelang.cn/plugin/v1.0.2/libVideoShowFileNamePlugin.so)
* [v1.1.0](http://download.bytelang.cn/plugin/v1.1.0/libVideoShowFileNamePlugin.so)
* [v1.2.0](http://download.bytelang.cn/plugin/v1.2.0/libVideoShowFileNamePlugin.so)
* [v1.3.0](http://download.bytelang.cn/plugin/v1.3.0/libVideoShowFileNamePlugin.so)

---

### VideoShowCurrentTimePlugin
VideoShowCurrentTimePlugin提供视频播放过程中，在左上角显示当前系统时间插件
```yaml
plugin:
  - file: "libVideoShowCurrentTimePlugin"
    params:
      font_size: "17"     # 字号
      font_color: "white" # 颜色属性
```
* [v1.0.0](http://download.bytelang.cn/plugin/v1.0.0/libVideoShowCurrentTimePlugin.so)
* [v1.0.1](http://download.bytelang.cn/plugin/v1.0.1/libVideoShowCurrentTimePlugin.so)
* [v1.0.2](http://download.bytelang.cn/plugin/v1.0.2/libVideoShowCurrentTimePlugin.so)
* [v1.1.0](http://download.bytelang.cn/plugin/v1.1.0/libVideoShowCurrentTimePlugin.so)
* [v1.2.0](http://download.bytelang.cn/plugin/v1.2.0/libVideoShowCurrentTimePlugin.so)
* [v1.3.0](http://download.bytelang.cn/plugin/v1.3.0/libVideoShowCurrentTimePlugin.so)

---

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
* [v1.0.0](http://download.bytelang.cn/plugin/v1.0.0/libVideoShowFileNamePlugin.so)
* [v1.0.1](http://download.bytelang.cn/plugin/v1.0.1/libVideoShowFileNamePlugin.so)
* [v1.0.2](http://download.bytelang.cn/plugin/v1.0.2/libVideoShowFileNamePlugin.so)
* [v1.1.0](http://download.bytelang.cn/plugin/v1.1.0/libVideoShowFileNamePlugin.so)
* [v1.2.0](http://download.bytelang.cn/plugin/v1.2.0/libVideoShowFileNamePlugin.so)
* [v1.3.0](http://download.bytelang.cn/plugin/v1.3.0/libVideoShowFileNamePlugin.so)

---

### libVideoShowSubtitlePlugin
libVideoShowSubtitlePlugin，自动寻找视频同级目录的字幕文件，仅支持srt字幕文件
```yaml
plugin:
  - file: "libVideoShowSubtitlePlugin"
```
* [v1.1.0](http://download.bytelang.cn/plugin/v1.1.0/libVideoShowSubtitlePlugin.so)
* [v1.2.0](http://download.bytelang.cn/plugin/v1.2.0/libVideoShowSubtitlePlugin.so)
* [v1.3.0](http://download.bytelang.cn/plugin/v1.3.0/libVideoShowSubtitlePlugin.so)

---

### VideoShowImagePlugin
VideoShowImagePlugin提供视频播放过程中，指定位置添加图片水印
```yaml
plugin:
  - file: "libVideoShowImagePlugin"
    params:
      path: "img.png"     # 图片路径
      x: "100" # x坐标
      y: "100" # y坐标
```
* [v1.1.0](http://download.bytelang.cn/plugin/v1.1.0/libVideoShowImagePlugin.so)
* [v1.2.0](http://download.bytelang.cn/plugin/v1.2.0/libVideoShowImagePlugin.so)
* [v1.3.0](http://download.bytelang.cn/plugin/v1.3.0/libVideoShowImagePlugin.so)

### VideoShowProcessPlugin
VideoShowProcessPlugin提供视频播放过程中，指定位置添加当前播放媒体资源文件进度条。样式为"00:00:00 / 00:00:00"
```yaml
plugin:
  - file: "libVideoShowProcessPlugin"
    params:
      font_size: 17 # 字体大小
      font_color: white # 文字颜色
      x: "100" # x坐标
      y: "100" # y坐标
```
* [v1.3.0](http://download.bytelang.cn/plugin/v1.3.0/libVideoShowProcessPlugin.so)

### VideoShowPlayListPlugin
VideoShowPlayListPlugin提供视频播放过程中，指定位置添加当前播放媒体资源列表打印
```yaml
plugin:
  - file: "libVideoShowPlayListPlugin"
    params:
      font_size: 17 # 字体大小
      font_color: white # 文字颜色
      x: "100" # x坐标
      y: "100" # y坐标
      line_height: 15 # 上下行间距
      show_extension: false # 是否显示文件扩展名（后缀名）
      count: 5 # 设置显示至多媒体文件数量
```
* [v1.3.0](http://download.bytelang.cn/plugin/v1.3.0/libVideoShowPlayListPlugin.so)