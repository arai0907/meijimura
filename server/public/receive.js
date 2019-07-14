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
// 赤
const redButtons = document.getElementsByClassName('btn-red');
for (let i = 0; i < redButtons.length; i++) {
    console.log('取得したボタンの数だけこの中の処理が繰り返されます');
    
    // ひとつづつ addEventListener していく
    redButtons[i].addEventListener("click", function (){
        socket.emit('vote', 'red');
    }, false);
}
console.log(redButtons);
// p1.addEventListener('click', handler1, false);

// 黄
const yellowButtons = document.getElementsByClassName('btn-yellow');
for (let i = 0; i < yellowButtons.length; i++) {
    console.log('取得したボタンの数だけこの中の処理が繰り返されます');
    
    // ひとつづつ addEventListener していく
    yellowButtons[i].addEventListener("click", function (){
        socket.emit('vote', 'yellow');
    }, false);
}
console.log(yellowButtons);
// p2.addEventListener('click', handler2, false);

// 青
const blueButtons = document.getElementsByClassName('btn-blue');
for (let i = 0; i < blueButtons.length; i++) {
    console.log('取得したボタンの数だけこの中の処理が繰り返されます');
    
    // ひとつづつ addEventListener していく
    blueButtons[i].addEventListener("click", function (){
        socket.emit('vote', 'blue');
    }, false);
}
console.log(blueButtons);
// p3.addEventListener('click', handler3, false);

// 黒
const blackButtons = document.getElementsByClassName('btn-black');
for (let i = 0; i < blackButtons.length; i++) {
    console.log('取得したボタンの数だけこの中の処理が繰り返されます');
    
    // ひとつづつ addEventListener していく
    blackButtons[i].addEventListener("click", function (){
        socket.emit('vote', 'blue');
    }, false);
}
console.log(blackButtons);
// p4.addEventListener('click', handler4, false);

// 白
const whiteButtons = document.getElementsByClassName('btn-white');
for (let i = 0; i < whiteButtons.length; i++) {
    console.log('取得したボタンの数だけこの中の処理が繰り返されます');
    
    // ひとつづつ addEventListener していく
    whiteButtons[i].addEventListener("click", function (){
        socket.emit('vote', 'blue');
    }, false);
}
console.log(whiteButtons);
// p5.addEventListener('click', handler5, false);

const waitStart = document.querySelector('#js-wait');
const startButton = document.querySelector('#js-start-button');
startButton.addEventListener('click', function(){
    TweenMax.to(waitStart,1.0,{autoAlpha: 1})
});
