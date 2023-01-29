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
### IP cameras stream
JSMpeg only plays MPEG-TS containers. That's why ip cam stream should be transcoded to MPEG-TS format as following:
```shell
ffmpeg -i rtsp://<user>:<pass>@<camera_ip>:554 -f mpegts -codec:v mpeg1video -r 20 -codec:a mp2 -ar 44100 http://<server_ip>:8081/<stream_secret>
```
For demo please do:
```shell
sudo apt-get install git
git clone https://github.com/phoboslab/jsmpeg.git
cd jsmpeg/

npm install ws

node websocket-relay.js supersecret 8081 8082

ffmpeg -i rtsp://<user>:<pass>@<camera_ip>:554 -f mpegts -codec:v mpeg1video -r 20 -codec:a mp2 -ar 44100 http://localhost:8081/supersecret
```

