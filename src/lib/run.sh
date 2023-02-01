#!/bin/bash

echo "SH: Run cleaning from previouse activity------------------"
res=$(ps aux | grep 'node ./websocket-relay'| awk '{print $2}')

while [ ! -z "$res" ]
do
pid=$(ps aux | grep 'node ./websocket-relay'| awk '{print $2}'|head -n 1)
kill -n 9 $pid
if [ $? -ne 0 ]
    then
	echo "SH: clean websocket broken process done"	>&2
	break
fi
sleep 1
res=$(ps aux | grep 'node ./websocket-relay'| awk '{print $2}')
echo "Broken websocket processes detected: "$res
done

res=$(ps aux | grep 'ffmpeg'| awk '{print $2}')

while [ ! -z "$res" ]
do
pid=$(ps aux | grep 'ffmpeg'| awk '{print $2}'|head -n 1)
kill -n 9 $pid
if [ $? -ne 0 ]
    then
	echo "SH: clean ffmpeg broken process done"	>&2
	break
fi
sleep 1
res=$(ps aux | grep 'ffmpeg'| awk '{print $2}')
echo "Broken ffmpeg processes detected: "$res
done


echo "SH: Run stream grubbing--------------------------------"
echo "SH: websocket relay start------------------------------"
echo "   "

cd src/lib/
	node ./websocket-relay.js supersecret 8081 8082 &
	P1=$!

	node ./websocket-relay.js supersecret 8083 8084 &
	P2=$!

  node ./websocket-relay.js supersecret 8085 8086 &
	P3=$!

echo "SH: stream transcoding start---------------------------"
echo "   "
	ffmpeg -i rtsp://admin:Admin123@212.233.126.11:40013/MediaInput/h264/stream_3 -f mpegts -codec:v mpeg1video -r 20 http://localhost:8081/supersecret &
	P4=$!

	ffmpeg -i rtsp://wowzaec2demo.streamlock.net/vod/mp4:BigBuckBunny_115k.mp4 -f mpegts -codec:v mpeg1video -r 20 http://localhost:8083/supersecret &
	P5=$!

  ffmpeg -i rtsp://admin:Admin123@212.233.126.11:40013/MediaInput/h264/stream_1 -f mpegts -codec:v mpeg1video -r 20 -codec:a mp2 -ar 44100 http://localhost:8083/supersecret &
	P6=$!

wait $P1 $P2 $P3 $P4 $P5 $P6
exit 0
