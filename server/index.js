const express = require('express');
const http = require('http');
const path = require('path');
const SocketServer = require('socket.io');

const app = express();
const httpServer = http.Server(app);
const io = new SocketServer(httpServer);

app.get('/',(req,res) => {
    const file = path.join(__dirname,'../index.html');
    res.sendFile(file);
});

app.get('/test',(req,res) => {
    res.send('test');
});

app.get('/api/start',(req,res) => {
    // スマホ側に "/api/start" というラベルでデータを送る
    io.emit('/api/start',{ trueColor: 'red'});
    res.send('start');
});

app.get('/api/vote/start/1',(req,res) => {
    res.send('/api/vote/start/1');
});

app.get('/api/vote/end/1',(req,res) => {
    res.send('/api/vote/end/1');
});

app.get('/api/scene/change/1',(req,res) => {
    res.send('/api/scene/change/1');
});

app.get('/api/vote/start/2',(req,res) => {
    res.send('/api/vote/start/2');
});

app.get('/api/vote/end/2',(req,res) => {
    res.send('/api/vote/end/2');
});

app.get('/api/scene/change/2',(req,res) => {
    res.send('/api/scene/change/2');
});

app.get('/api/scene/change/3',(req,res) => {
    res.send('/api/scene/change/3');
});

app.get('/api/scene/change/4',(req,res) => {
    res.send('/api/scene/change/4');
});

app.get('/api/vote/start/3',(req,res) => {
    res.send('/api/vote/start/3');
});

app.get('/api/vote/end/3',(req,res) => {
    res.send('/api/vote/end/3');
});

app.get('/api/end',(req,res) => {
    io.emit('/api/end');
    res.send('end');
});

io.on('connection',(socket) => {
    console.log('ユーザーが接続しました。');

    socket.on('chat message',(msg) => {
        console.log('ユーザーからのメッセージを受信しました。');
        // このサーバーに接続しているユーザーに受信したメッセージを配信します
        io.emit('chat message',msg);
    });
});

httpServer.listen(3000,function(){
    console.log('サーバーが起動しました。URLは http://localhost:3000 です');
});