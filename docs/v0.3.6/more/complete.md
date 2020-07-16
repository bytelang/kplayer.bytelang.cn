---
title: 完整配置文件
---

完整配置文件
===

```yaml
version: "1.0.0"
player:
  media:
    list:
      - "/user/media/video/video1.mp4"
      - "/user/media/video/video2.mp4"
      - "/user/media/video/video3.mp4"
    start: 1
  decode:
    type: file

  encode:
    video_width: "640"
    video_height: "480"
    video_fps: 30
    audio_sample_rate: 44100
    bit_rate: 50
    quality: 10

  output:
    type: rtmp
    auto_reconnect: true
    cache: true
    path:
      - "rtmp://127.0.0.1:1379/live"
      - "rtmp://127.0.0.1:1379/push"

  connect:
    type: single
    loop: true

  api:
    use_api: true

  plugin:
    - file: "libVideoShowTextPlugin"
      params:
        font_size: "12"
        font_color: "red"
        x: "w-tw"
        y: "h-th"
        text: "Hello Kplayer"
```
