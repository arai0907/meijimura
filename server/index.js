const express = require('express');
const http = require('http');
const path = require('path');
const SocketServer = require('socket.io');

const app = express();
const httpServer = http.Server(app);
const io = new SocketServer(httpServer);

// 正解の色のIDを入れる
let trueColorId;

app.get('/',(req,res) => {
    const file = path.join(__dirname,'../index.html');
    res.sendFile(file);
});

app.get('/test',(req,res) => {
    res.send('test');
});

app.get('/api/start',(req,res) => {
    const colorsId  = ["1","2","3"];
    trueColorId = colorsId[Math.floor(Math.random() * colorsId.length)];
    // スマホ側に "/api/start" というラベルでデータを送る
    io.emit('/api/start',{ trueColorId: trueColorId});
    res.send('start');
});

app.get('/api/vote/start/:id',(req,res) => {
    console.log(req.params.id);
    
    res.send('/api/vote/start/1');
});

app.get('/api/vote/end/:id',(req,res) => {
    console.log(req.params);
    res.send('/api/vote/end/1');
});

// 画面の切り替え
app.get('/api/scene/change/:id',(req,res) => {
    console.log(req.params.id);
    io.emit('/api/scene/change/:id',{ 
        sceneId: req.params.id,
        colorId: 0
    });
    res.send('/api/scene/change/1');
});

// マッピング終了
app.get('/api/end',(req,res) => {
    io.emit('/api/end');
    res.send('end');
});

io.on('connection',(socket) => {
    console.log('ユーザーが接続しました。');

    socket.on('vote',(msg) => {
        console.log('ユーザーからのメッセージを受信しました。');
        // このサーバーに接続しているユーザーに受信したメッセージを配信します
        io.emit('vote',msg);
    });
});

httpServer.listen(3000,function(){
    console.log('サーバーが起動しました。URLは http://localhost:3000 です');
});