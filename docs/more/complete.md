---
title: 完整配置文件
---

完整配置文件
===

```yaml
version: "1.1.0"
player:
  media:
    list:
      - video: "/user/media/video/image1.jpg"
        audio: "/user/media/video/audio1.mp3"
      - "/user/media/video/video1.mp4"
      - "/user/media/video/video2.mp4"
      - "/user/media/video/video3.mp4"
    start: 1
    process_bar: true
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
    cache_use: true
    cache_path: /tmp/kplayer
    path:
      - "rtmp://127.0.0.1:1379/live"
      - "rtmp://127.0.0.1:1379/push"

  resource:
    font_name: 'fzhtjw'

  connect:
    type: single
    loop: true

  api:
    use_api: true
    port: 4156

  plugin:
    - file: "libVideoShowTextPlugin"
      params:
        font_size: "12"
        font_color: "red"
        x: "w-tw"
        y: "h-th"
        text: "Hello Kplayer"
```
