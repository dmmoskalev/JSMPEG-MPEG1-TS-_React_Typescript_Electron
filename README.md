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
