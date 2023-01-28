## Preps

### Install

```shell
$ npm install @cycjimmy/jsmpeg-player --save
# or
$ yarn add @cycjimmy/jsmpeg-player
```

### Important comments
* in renderer file index.ejs disable Contetnt Security Policy (CSP) to 
```shell
<meta
http-equiv="Content-Security-Policy-Report-Only"
/>
```
    in HTML header meta 
* video canvas wrapper size is finally determined in render app.css file
