## Preps

### Install

```shell
$ npm install @cycjimmy/jsmpeg-player --save
# or
$ yarn add @cycjimmy/jsmpeg-player
```

### Important comments
* in renderer file index.ejs change Contetnt Security Policy (CSP) to 
```shell
<meta
http-equiv="Content-Security-Policy-Report-Only"
/>
```    
* video canvas wrapper size is finally determined in render app.css file (.video-wrapper class)
* the player can decode only mpeg1-ts format. 
* 
## Encoding Video/Audio for [jsmpeg](https://github.com/phoboslab/jsmpeg) by [ffmpeg](https://ffmpeg.org/). E.g:
```shell
$ ffmpeg -i input.mp4 -f mpegts \
         -codec:v mpeg1video -s 640x360 -b:v 700k -r 25 -bf 0 \
         -codec:a mp2 -ar 44100 -ac 1 -b:a 64k \
         output.ts
```
