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


const socket = io();


socket.on('/api/init', (data) => {
    // スマホの画面を開始画面に切り替える
    console.log('サーバーからWebSocketで/api/initのデータを受信しました。')
    console.log(data);
});

socket.on('/api/start', () => {
    // スマホの画面を開始画面に切り替える
    console.log('サーバーからWebSocketでOPアニメーションをスタートする。')
    phase = '/api/start';
});

// 投票開始１
socket.on('/api/vote/start/1',(data) => {

    const voteColor0 = data.randomVoteColorId[0];
    const voteColor1 = data.randomVoteColorId[1];

    if (voteColor0 === COLORS.red && voteColor1 === COLORS.yellow) {
        console.log('赤と黄の投票画面を表示');
    } else if (voteColor0 === COLORS.red && voteColor1 === COLORS.blue) {
        console.log('赤と青の投票画面を表示');
    } else if (voteColor0 === COLORS.yellow && voteColor1 === COLORS.blue) {
        console.log('黄と青の投票画面を表示');
    }

    phase = '/api/vote/start/1';
    console.log(phase);
});

// 投票1の終了
socket.on('/api/vote/end/1', (data) => {
    console.log('サーバーからWebSocketで/api/vote/end/1のデータを受信しました。')
    console.log(data);
    phase = '/api/vote/end/1';
    console.log(phase);
});

// 投票2の終了
socket.on('/api/vote/end/2', (data) => {
    console.log('サーバーからWebSocketで/api/vote/end/2のデータを受信しました。')
    console.log(data);
    phase = '/api/vote/end/2';
    console.log(phase);
});

// 投票２
socket.on('/api/vote/start/2',(data) => {
    console.log('サーバーからWebSocketで/api/vote/start/2のデータを受信しました。')
    console.log(data);
    console.log('赤と黄と青の投票画面を表示')
    phase = '/api/vote/start/2';
    console.log(phase);
});

// 投票3
socket.on('/api/vote/start/3', (data) => {
    console.log('サーバーからWebSocketで/api/vote/start/3のデータを受信しました。')
    console.log(data);
    console.log('白と黒の投票画面を表示')
    phase = '/api/vote/start/3';
    console.log(phase);
});

// 投票3の終了
socket.on('/api/vote/end/3', (data) => {
    console.log('サーバーからWebSocketで/api/vote/end/3のデータを受信しました。')
    console.log(data);
    phase = '/api/vote/end/3';
    console.log(phase);
});

// 画面の切り替え
socket.on('/api/scene/change', (data) => {
    // スマホの画面のアニメーションを切り替える
    console.log('サーバーからWebSocketで/api/scene/change/:idのデータを受信しました。')
    console.log(data);

    if(data.sceneId === "0") {
        document.body.style.backgroundColor = "red";
    } else if(data.sceneId === "1") {
        document.body.style.backgroundColor = "blue";
    } else if(data.sceneId === "2") {
        document.body.style.backgroundColor = "green";
    }

    phase = '/api/scene/change';
    console.log(phase);
});

// 画面の切り替え2
socket.on('/api/scene/change/2', (data) => {
    console.log('サーバーからWebSocketで/api/scene/change/2のデータを受信しました。')
    console.log(data);
    phase = '/api/scene/change/2';
    console.log(phase);
});

// 画面の切り替え3
socket.on('/api/scene/change/3', (data) => {
    console.log('サーバーからWebSocketで/api/scene/change/3のデータを受信しました。')
    console.log(data);
    phase = '/api/scene/change/3';
    console.log(phase);
});

// 画面の切り替え4
socket.on('/api/scene/change/4', (data) => {
    console.log('サーバーからWebSocketで/api/scene/change/4のデータを受信しました。')
    console.log(data);
    phase = '/api/scene/change/4';
    console.log(phase);
});

socket.on('/api/end', (data) => {
    // スマホの画面を終了画面に切り替える
    console.log('サーバーからWebSocketで/api/endのデータを受信しました。')
    console.log(data);
    phase = '/api/end';
    console.log(phase);
});

socket.on('/api/reset', (data) => {
    console.log('サーバーからWebSocketで/api/resetのデータを受信しました。')
    console.log(data);
    phase = '/api/reset';
    console.log(phase);
})

socket.on('vote', (data) => {
    // スマホの画面を終了画面に切り替える
    console.log('サーバーからWebSocketでvoteのデータを受信しました。')
    console.log(data);
});

// 投票
var p1 = document.getElementById('red');
var handler1 = function(){
    console.log('vote1');
    socket.emit('vote', 'red');
};
p1.addEventListener('click', handler1, false);

var p2 = document.getElementById('yellow');
var handler2 = function(){
    console.log('vote2');
    socket.emit('vote', 'yellow');
};
p2.addEventListener('click', handler2, false);

var p3 = document.getElementById('blue');
var handler3 = function(){
    console.log('vote3');
    socket.emit('vote', 'blue');
};
p3.addEventListener('click', handler3, false);

var p4 = document.getElementById('white');
var handler4 = function(){
    console.log('vote4');
    socket.emit('vote', 'white');
};
p4.addEventListener('click', handler4, false);

var p5 = document.getElementById('black');
var handler5 = function(){
    console.log('vote5');
    socket.emit('vote', 'black');
};
p5.addEventListener('click', handler5, false);

// var wait = document.querySelector('#js-wait');
// var startButton = document.querySelector('#js-start-button');
// startButton.addEventListener('click', function(){
//     TweenMax.to(wait,1.0,{autoAlpha: 1})
// });
