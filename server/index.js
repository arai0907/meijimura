const express = require('express');
const http = require('http');
const path = require('path');
const SocketServer = require('socket.io');

let red = 0; // redの投票数を記録する変数
let blue = 0; // blueの投票数を記録する変数
let yellow = 0; // yellowの投票数を記録する変数
let black = 0; // blackの投票数を記録する変数
let white = 0; // whiteの投票数を記録する変数

const app = express();
const httpServer = http.Server(app);
const io = new SocketServer(httpServer);

// 正解の色のIDを入れる
let trueColorId;

app.get('/',(req,res) => {
    const file = path.join(__dirname,'../index.html');
    res.sendFile(file);
});

// app.get('/test',(req,res) => {
//     res.send('test');
// });

app.get('/api/start',(req,res) => {
    const colorsId = ["1","2","3"];
    trueColorId = colorsId[Math.floor(Math.random() * colorsId.length)];
    // スマホ側に "/api/start" というラベルでデータを送る
    io.emit('/api/start',{ trueColorId: trueColorId});
    res.send('start');
});

// 投票開始１
const id = '1';
app.get('/api/vote/start/:id',(req,res) => {
    console.log(req.params.id);

    if(req.params.id === '1'){
        const voteColorsId = ["1,2","1,3","2,3"];
        randomTrueColorId = voteColorsId[Math.floor(Math.random() * voteColorsId.length)];
        io.emit('/api/vote/start/1',{ randomTrueColorId: randomTrueColorId });
        res.send('start1');
    } else if(req.params.id == '2') {
        io.emit('/api/vote/start/2');
        res.send('start2');
    } else {
        io.emit('/api/vote/start/3');
        res.send('start3');
    }
});

// 投票終了１
app.get('/api/vote/end/1',(req,res) => {
    const voteColorsId = ["1","2","3"];
    randomTrueColorId = voteColorsId[Math.floor(Math.random() * voteColorsId.length)];
    // スマホ側に "/api/vote/end/1" というラベルでデータを送る
    io.emit('/api/scene/change/', {
        sceneId: 1, 
        colorId: randomTrueColorId
    });
    res.send('end');
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

        switch (msg){
            case 'red':
                red = red + 1;
                console.log(red);
                break;
            case 'blue':
                blue = blue + 1;
                console.log(blue);
                break;
            case 'yellow':
                yellow = yellow + 1;
                console.log(yellow);
                break;
            case 'black':
                black = black + 1;
                console.log(black);
                break;
            case 'white':
                white = white + 1;
                console.log(white);
                break;
        }

        io.emit('vote',{
            R: red,
            B: blue,
            Y: yellow,
            b: black,
            w: white
        });
    });
});

httpServer.listen(3000,function(){
    console.log('サーバーが起動しました。URLは http://localhost:3000 です');
});