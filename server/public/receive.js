const COLORS = {
    sameVote: 0,
    red: 1,
    yellow: 2,
    blue: 3,
    green: 4,
    orange: 5,
    purple: 6,
    black: 7,
    white: 8
};

const socket = io();

socket.on('/api/init', (data) => {
    // スマホの画面を開始画面に切り替える
    console.log('サーバーからWebSocketで/api/initのデータを受信しました。')
    console.log(data);

    const trueColorId = data.trueColorId; // 4, 5, 6 のいずれか

    // 待機画面の背景色
    switch (trueColorId) {
        case COLORS.orange:
        waitPage.style.backgroundColor = "rgb(255,105,0)";
        console.log('orange');
        break;

        case COLORS.purple:
        waitPage.style.backgroundColor = "rgb(150,115,255)";
        console.log('purple');
        break;

        case COLORS.green:
        waitPage.style.backgroundColor = "rgb(30,170,0)";
        console.log('green');
        break;

        default:
        waitPage.style.backgroundColor = "rgb(0,0,0)";
        console.log('white');
        break;
      }
});

socket.on('/api/start', () => {
    // スマホの画面を開始画面に切り替える
    waitPage.style.opacity = 0.0;
    waitPage.style.display = 'none';
    callMpPage();
    opening();
    console.log('サーバーからWebSocketでOPアニメーションをスタートする。')
});

// 投票開始１
socket.on('/api/vote/start/1',(data) => {
    deleteMpPage();
    callFirstVote();
    const voteColor0 = data.randomVoteColorId[0];
    const voteColor1 = data.randomVoteColorId[1];

    if (voteColor0 === COLORS.red && voteColor1 === COLORS.yellow) {
        voteRY.style.display = 'block';
        console.log('赤と黄の投票画面を表示');
    } else if (voteColor0 === COLORS.red && voteColor1 === COLORS.blue) {
        voteBR.style.display = 'block';
        console.log('赤と青の投票画面を表示');
    } else if (voteColor0 === COLORS.yellow && voteColor1 === COLORS.blue) {
        voteYB.style.display = 'block';
        console.log('黄と青の投票画面を表示');
    }
});

// 投票1の終了
socket.on('/api/vote/end/1', (data) => {
    callColorPage();
    deleteFirstVote();
    console.log('サーバーからWebSocketで/api/vote/end/1のデータを受信しました。')
    console.log(data);
});

// 投票2の終了
socket.on('/api/vote/end/2', (data) => {
    callColorPage();
    deleteFirstVote();
    console.log('サーバーからWebSocketで/api/vote/end/2のデータを受信しました。')
    console.log(data);
});

// 投票２
socket.on('/api/vote/start/2',(data) => {
    deleteMpPage();
    callSecondVote();
    console.log('サーバーからWebSocketで/api/vote/start/2のデータを受信しました。')
    console.log(data);
    console.log('赤と黄と青の投票画面を表示')
});

// 投票3
socket.on('/api/vote/start/3', (data) => {
    deleteMpPage();
    votewb.style.display = 'block';
    votewb.style.opacity = 1.0;
    callThirdVote();
    console.log('サーバーからWebSocketで/api/vote/start/3のデータを受信しました。')
    console.log(data);
    console.log('白と黒の投票画面を表示')
});

// 投票3の終了
socket.on('/api/vote/end/3', (data) => {
    callColorPage();
    deleteThirdVote();
    console.log('サーバーからWebSocketで/api/vote/end/3のデータを受信しました。')
    console.log(data);
});

// 画面の切り替え
socket.on('/api/scene/change/1', (data) => {
    deletelColorPage();
    callMpPage();
    // スマホの画面のアニメーションを切り替える
    console.log('サーバーからWebSocketで/api/scene/change/1のデータを受信しました。')
    console.log(data);

    if(data.colorId === COLORS.red) {
        red_animaiton();
    } else if(data.colorId === COLORS.blue) {
        blue_animaiton();
    } else if(data.colorId === COLORS.yellow) {
        yellow_animaiton();
    } else if(data.colorId === COLORS.sameVote) {
        false_animaiton();
    }
});

// 画面の切り替え2
socket.on('/api/scene/change/2', (data) => {
    deletelColorPage();
    callMpPage();
    console.log('サーバーからWebSocketで/api/scene/change/2のデータを受信しました。')
    console.log(data);

    if(data.colorId === COLORS.red) {
        red_animaiton();
    } else if(data.colorId === COLORS.blue) {
        blue_animaiton();
    } else if(data.colorId === COLORS.yellow) {
        yellow_animaiton();
    } else if(data.colorId === COLORS.sameVote) {
        false_animaiton();
    }
});

// 画面の切り替え3
socket.on('/api/scene/change/3', (data) => {
    deletelColorPage();
    callMpPage();
    console.log('サーバーからWebSocketで/api/scene/change/3のデータを受信しました。')
    console.log(data);

    if(data.colorId === COLORS.green) {
        green_animaiton();
    } else if(data.colorId === COLORS.orange) {
        orange_animaiton();
    } else if(data.colorId === COLORS.purple) {
        purple_animaiton();
    } else if(data.colorId === COLORS.sameVote) {
        false_animaiton();
    }
});

// 画面の切り替え4
socket.on('/api/scene/change/4', (data) => {
    callMpPage();
    console.log('サーバーからWebSocketで/api/scene/change/4のデータを受信しました。')
    console.log(data);
});

socket.on('/api/end', (data) => {
    callMpPage();
    // スマホの画面を終了画面に切り替える
    console.log('サーバーからWebSocketで/api/endのデータを受信しました。')
    console.log(data);
});

socket.on('/api/reset', (data) => {
    deleteMpPage();
    deletelColorPage();
    waitPage.style.display = 'block';
    waitPage.style.opacity = 1.0;
    console.log('サーバーからWebSocketで/api/resetのデータを受信しました。')
    console.log(data);
});

socket.on('vote', (data) => {
    // スマホの画面を終了画面に切り替える
    console.log('サーバーからWebSocketでvoteのデータを受信しました。')
    console.log(data);
});

socket.on('phase', (phase) => {
    console.log(phase);
});

// 投票
var p1 = document.getElementsByClassName('red1','red2','red3');
var handler1 = function(){
    console.log('vote1');
    socket.emit('vote', 'red');
};
p1.addEventListener('click', handler1, false);

var p2 = document.getElementsByClassName('yellow1','yellow2','yellow3');
var handler2 = function(){
    console.log('vote2');
    socket.emit('vote', 'yellow');
};
p2.addEventListener('click', handler2, false);

var p3 = document.getElementsByClassName('blue1','blue2','blue3');
var handler3 = function(){
    console.log('vote3');
    socket.emit('vote', 'blue');
};
p3.addEventListener('click', handler3, false);

var p4 = document.getElementsByClassName('black1');
var handler4 = function(){
    console.log('vote4');
    socket.emit('vote', 'black');
};
p4.addEventListener('click', handler4, false);

var p5 = document.getElementsByClassName('white1');
var handler5 = function(){
    console.log('vote5');
    socket.emit('vote', 'white');
};
p5.addEventListener('click', handler5, false);

var wait = document.querySelector('#js-wait');
var startButton = document.querySelector('#js-start-button');
startButton.addEventListener('click', function(){
    TweenMax.to(wait,1.0,{autoAlpha: 1})
});
