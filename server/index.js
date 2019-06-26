const express = require('express');
const http = require('http');
const path = require('path');
const SocketServer = require('socket.io');

// Color番号
const COLORS = {
    sameVote: 0,
    red: 1,
    yellow: 2,
    blue: 3,
    green: 4,
    orange: 5,
    purple: 6,
    white: 7,
    black: 8
};

let red = 0; // redの投票数を記録する変数
let yellow = 0; // yellowの投票数を記録する変数
let blue = 0; // blueの投票数を記録する変数
let black = 0; // blackの投票数を記録する変数
let white = 0; // whiteの投票数を記録する変数

// trueColorの正解の組み合わせ
const TRUE_COLORS = {
    ['id' + COLORS.green]: [COLORS.yellow,COLORS.blue],
    ['id' + COLORS.orange]: [COLORS.yellow,COLORS.red],
    ['id' + COLORS.purple]: [COLORS.red,COLORS.blue]
};

let vote1ResultColorId; // 1回目の投票結果の色IDを保持する
let vote2ResultColorId; // 2回目の投票結果の色IDを保持する

const vote1colors = [] // 投票１でランダムで選択された2色のID

const app = express();
const httpServer = http.Server(app);
const io = new SocketServer(httpServer);

// 正解の色のIDを入れる
let trueColorId;

app.get('/',(req,res) => {
    const file = path.join(__dirname,'../index.html');
    res.sendFile(file);
});

// マッピング開始
app.get('/api/start',(req,res) => {
    const colorsId = [COLORS.green,COLORS.orange,COLORS.purple];
    trueColorId = colorsId[Math.floor(Math.random() * colorsId.length)];
    // スマホ側に "/api/start" というラベルでデータを送る
    io.emit('/api/start',{ trueColorId: trueColorId});
    res.json({ colorId: trueColorId });
});

// 投票開始１
const id = '1';
app.get('/api/vote/start/:id',(req,res) => {
    console.log(req.params.id);

    // 投票数をリセット
    red = 0;
    yellow = 0;
    blue = 0;
    white = 0;
    black = 0;

    if(req.params.id === '1'){
        const voteColorsId = [
            [COLORS.red, COLORS.yellow],
            [COLORS.red, COLORS.blue],
            [COLORS.yellow, COLORS.blue]
        ];

        // 投票１の2色をランダムで決定する
        randomVoteColorId = voteColorsId[Math.floor(Math.random() * voteColorsId.length)];

        // 投票１で選ばれた2色を保存
        vote1colors[0] = randomVoteColorId[0];
        vote1colors[1] = randomVoteColorId[1];

        io.emit('/api/vote/start/1',{ randomVoteColorId: randomVoteColorId });
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
    // 投票
    let voteColor0 = 0;
    let voteColor1 = 0;
    
    if (vote1colors[0] === COLORS.red && vote1colors[1] === COLORS.yellow) {
        voteColor0 = red;
        voteColor1 = yellow;
    } else if (vote1colors[0] === COLORS.red && vote1colors[1] === COLORS.blue) {
        voteColor0 = red;
        voteColor1 = blue;
    } else if (vote1colors[0] === COLORS.yellow && vote1colors[1] === COLORS.blue) {
        voteColor0 = yellow;
        voteColor1 = blue;
    }

    if (voteColor0 > voteColor1) {
        // 投票数がvoteColor1よりvoteColor0の方が大きい時
        io.emit('/api/scene/end/1', {
            colorId: vote1colors[0],
            sceneId: 1
        });
        res.json({ colorId: vote1colors[0] });
        vote1ResultColorId = vote1colors[0];
    } else if (voteColor0 < voteColor1) {
        // 投票数がvoteColor0よりvoteColor1の方が大きい時
        io.emit('/api/scene/end/1', {
            colorId: vote1colors[1],
            sceneId: 1
        });
        res.json({ colorId: vote1colors[1] });
        vote1ResultColorId = vote1colors[1];
    } else {
        // 投票数が同票の時
        io.emit('/api/scene/end/1', {
            colorId: COLORS.sameVote,
            sceneId: 1
        });
        res.json({ colorId: COLORS.sameVote });
        vote1ResultColorId = COLORS.sameVote;
    }
});

// 投票終了2
app.get('/api/vote/end/2',(req,res) => {
    const maxVoteNumber = Math.max(red,yellow,blue);

    // WebSocket で投票2の終了を通知
    io.emit('/api/vote/end/2');

    if (red === yellow && yellow === blue) {
        // 投票数が同票の時
        res.json({ colorId: COLORS.sameVote });
    }

    if (maxVoteNumber === red) {
        res.json({ colorId: COLORS.red });
        vote2ResultColorId = COLORS.red;
    } else if (maxVoteNumber === yellow) {
        res.json({ colorId: COLORS.yellow });
        vote2ResultColorId = COLORS.yellow;
    } else if (maxVoteNumber === blue) {
        res.json({ colorId: COLORS.blue });
        vote2ResultColorId = COLORS.blue;
    } else {
        // 投票数が同票の時
        res.json({ colorId: COLORS.sameVote });
    }
});

// 画面の切り替え
app.get('/api/scene/change/:id',(req,res) => {
    if (req.params.id === '1') {
        let voteColor0 = 0;
        let voteColor1 = 0;
        
        if (vote1colors[0] === COLORS.red && vote1colors[1] === COLORS.yellow) {
            voteColor0 = red;
            voteColor1 = yellow;
        } else if (vote1colors[0] === COLORS.red && vote1colors[1] === COLORS.blue) {
            voteColor0 = red;
            voteColor1 = blue;
        } else if (vote1colors[0] === COLORS.yellow && vote1colors[1] === COLORS.blue) {
            voteColor0 = yellow;
            voteColor1 = blue;
        }
    
        if (voteColor0 > voteColor1) {
            // 投票数がvoteColor1よりvoteColor0の方が大きい時
            io.emit('/api/scene/change', {
                colorId: vote1colors[0],
                sceneId: 1
            });
            res.json({ colorId: vote1colors[0] });
        } else if (voteColor0 < voteColor1) {
            // 投票数がvoteColor0よりvoteColor1の方が大きい時
            io.emit('/api/scene/change', {
                colorId: vote1colors[1],
                sceneId: 1
              });
            res.json({ colorId: vote1colors[1] });
        } else {
            // 投票数が同票の時
            io.emit('/api/scene/change', {
                colorId: COLORS.sameVote,
                sceneId: 1
            });
            res.json({ colorId: COLORS.sameVote });
        }
    } else if (req.params.id === '2') {
        const maxVoteNumber2 = Math.max(red,yellow,blue);

        if (red === yellow && yellow === blue) {
            // 投票数が同票の時
            io.emit('/api/scene/change', {
              colorId: COLORS.sameVote,
              sceneId: 2
            });
            res.json({ colorId: COLORS.sameVote });
        }

        if (maxVoteNumber2 === red) {
            io.emit('/api/scene/change', {
                colorId: COLORS.red,
                sceneId: 2
            });
            res.json({ colorId: COLORS.red });
        } else if (maxVoteNumber2 === yellow) {
            io.emit('/api/scene/change', {
                colorId: COLORS.yellow,
                sceneId: 2
            });
            res.json({ colorId: COLORS.yellow });
        } else if (maxVoteNumber2 === blue) {
            io.emit('/api/scene/change', {
                colorId: COLORS.blue,
                sceneId: 2
            });
            res.json({ colorId: COLORS.blue });
        }
        
    } else if (req.params.id === '3') {
        if (
            TRUE_COLORS['id' + trueColorId][0] === vote1ResultColorId &&
            TRUE_COLORS['id' + trueColorId][1] === vote2ResultColorId
          ){
            // 2回の投票結果がtrueColorになった時
            const num = 4;
            console.log(TRUE_COLORS['id' + num]);
            console.log(TRUE_COLORS['id' + num][0]);
          } else {
            // 2回の投票結果がtrueColorにならなかった時
            const num = 4;
            console.log(TRUE_COLORS['id' + num]);
            console.log(TRUE_COLORS['id' + num][1]);
          }
        io.emit('/api/vote/change');
        res.send('change3');
    } else {
        io.emit('/api/vote/change');
        res.send('change4');
    }
});

// 投票終了3
app.get('/api/vote/end/3', (req,res) => {

})

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
            case 'yellow':
                yellow = yellow + 1;
                console.log(yellow);
                break;
            case 'blue':
                blue = blue + 1;
                console.log(blue);
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
            Y: yellow,
            B: blue,
            b: black,
            w: white
        });
    });
});

httpServer.listen(3000,function(){
    console.log('サーバーが起動しました。URLは http://localhost:3000 です');
});