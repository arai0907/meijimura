
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

//--- 待機 ---
var waitMsg;
var wCaption = document.getElementById('waitCaption');//メッセージ切り替え
var wMsg1     = document.getElementById('waitMessage1');//メッセージ切り替え
var wMsg2    = document.getElementById('waitMessage2');//メッセージ切り替え
var wMsg3     = document.getElementById('waitMessage3');//メッセージ切り替え

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
  if( boolWait == 'true'){
    // スマホの画面を開始画面に切り替える
    waitPage.style.opacity = 0.0;
    waitPage.style.display = 'none';
    callMpPage();
    opening();
    console.log('サーバーからWebSocketでOPアニメーションをスタートする。')
  }
});

// 投票開始１
socket.on('/api/vote/start/1',(data) => {
  if( boolWait == 'true'){
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
    waitPage.style.opacity = 0.0;
    waitPage.style.display = 'none';
  }
});

// 投票1の終了
socket.on('/api/vote/end/1', (data) => {
  if( boolWait == 'true'){
    console.log('サーバーからWebSocketで/api/vote/end/1のデータを受信しました。')
    console.log(data);

    waitPage.style.opacity = 0.0;
    waitPage.style.display = 'none';
    deleteFirstVote();
    if(data.colorId === COLORS.red) {
       colorPage.style.backgroundColor = "#f5001e";
    } else if(data.colorId === COLORS.blue) {
       colorPage.style.backgroundColor = "#32a0ff";
    } else if(data.colorId === COLORS.yellow) {
       colorPage.style.backgroundColor = "#f5e628";
    } else if(data.colorId === COLORS.sameVote) {
       colorPage.style.backgroundColor = "#000000";
    }
    callColorPage();
  }
});

// 投票2の終了
socket.on('/api/vote/end/2', (data) => {
  if( boolWait == 'true'){
    console.log('サーバーからWebSocketで/api/vote/end/2のデータを受信しました。')
    console.log(data);

    waitPage.style.opacity = 0.0;
    waitPage.style.display = 'none';
    deleteSecondVote();
    if(data.colorId === COLORS.red) {
       colorPage.style.backgroundColor = "#f5001e";
    } else if(data.colorId === COLORS.blue) {
       colorPage.style.backgroundColor = "#32a0ff";
    } else if(data.colorId === COLORS.yellow) {
       colorPage.style.backgroundColor = "#f5e628";
    } else if(data.colorId === COLORS.sameVote) {
       colorPage.style.backgroundColor = "#000000";
    }
    callColorPage();
  }
});

// 投票２
socket.on('/api/vote/start/2',(data) => {
  if( boolWait == 'true'){
    waitPage.style.opacity = 0.0;
    waitPage.style.display = 'none';
    deleteMpPage();
    callSecondVote();
    console.log('サーバーからWebSocketで/api/vote/start/2のデータを受信しました。')
    console.log(data);
    console.log('赤と黄と青の投票画面を表示')
  }
});

// 投票3
socket.on('/api/vote/start/3', (data) => {
  if( boolWait == 'true'){
    waitPage.style.opacity = 0.0;
    waitPage.style.display = 'none';
    deleteMpPage();
    votewb.style.display = 'block';
    votewb.style.opacity = 1.0;
    callThirdVote();
    console.log('サーバーからWebSocketで/api/vote/start/3のデータを受信しました。')
    console.log(data);
    console.log('黒と白の投票画面を表示')
  }
});

// 投票3の終了
socket.on('/api/vote/end/3', (data) => {
  if( boolWait == 'true'){
    console.log('サーバーからWebSocketで/api/vote/end/3のデータを受信しました。')
    console.log(data);

    waitPage.style.opacity = 0.0;
    waitPage.style.display = 'none';
    deleteThirdVote();
    if(data.colorId === COLORS.white) {
       colorPage.style.backgroundColor = "#ffffff";
    } else if(data.colorId === COLORS.black) {
       colorPage.style.backgroundColor = "#000000";
    } else if(data.colorId === COLORS.sameVote) {
       colorPage.style.backgroundColor = "#000000";
    }
    callColorPage();
  }
});

// 画面の切り替え
socket.on('/api/scene/change/1', (data) => {
  if( boolWait == 'true'){

    waitPage.style.opacity = 0.0;
    waitPage.style.display = 'none';
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
  }
});

// 画面の切り替え2
socket.on('/api/scene/change/2', (data) => {
  if( boolWait == 'true'){

    waitPage.style.opacity = 0.0;
    waitPage.style.display = 'none';
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
  }
});

// 画面の切り替え3
socket.on('/api/scene/change/3', (data) => {
  if( boolWait == 'true'){

    waitPage.style.opacity = 0.0;
    waitPage.style.display = 'none';
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
    } else if (data.colorId === COLORS.sameVote) {
        false_animaiton();
    }
  };
});

// 画面の切り替え4
socket.on('/api/scene/change/4', (data) => {
  if( boolWait == 'true'){

    waitPage.style.opacity = 0.0;
    waitPage.style.display = 'none';
    callMpPage();
    console.log('サーバーからWebSocketで/api/scene/change/4のデータを受信しました。')
    console.log(data);

    if(data.colorId === COLORS.black) {
      alert('黒のアニメーション');
    } else if(data.colorId === COLORS.white) {
      alert('白のアニメーション');
    }
  }
});

socket.on('/api/end', (data) => {
  if( boolWait == 'true'){

    waitPage.style.opacity = 0.0;
    waitPage.style.display = 'none';
    callMpPage();
    // スマホの画面を終了画面に切り替える
    console.log('サーバーからWebSocketで/api/endのデータを受信しました。')
    console.log(data);
    
    // const data = {2
    //   isTrueEnd: false
    // };

    if (false === false) {
      false_animaiton();
    }
  }
});

socket.on('/api/reset', (data) => {
  if( boolWait == 'true'){
    deleteMpPage();
    deletelColorPage();
    voteReset();
    waitPage.style.display = 'block';
    waitPage.style.opacity = 1.0;
    console.log('サーバーからWebSocketで/api/resetのデータを受信しました。')
    console.log(data);
  }
});

socket.on('vote', (data) => {
    // スマホの画面を終了画面に切り替える
    console.log('サーバーからWebSocketでvoteのデータを受信しました。')
    console.log(data);
});

socket.on('phase', (data) => {
    console.log(data);
    if(data.phase === 'connection') {
        if (!(typeof data.colorId === 'undefined')) {
            // ユーザーが接続した時にtrueColorが決まっていた時の処理
            const trueColorId = data.colorId; // 4, 5, 6 のいずれか
            const waitEl = document.getElementById('js-wait');

            // 待機画面の背景色
            switch (trueColorId) {
                case COLORS.orange:
                    waitEl.style.backgroundColor = "rgb(255,105,0)";
                    console.log('orange');
                    break;

                case COLORS.purple:
                    waitEl.style.backgroundColor = "rgb(150,115,255)";
                    console.log('purple');
                    break;

                case COLORS.green:
                    waitEl.style.backgroundColor = "rgb(30,170,0)";
                    console.log('green');
                    break;

                default:
                    waitEl.style.backgroundColor = "rgb(0,0,0)";
                    console.log('white');
                    break;
            }
        }
    }

    switch(data.phase){
        case '/api/init':
        wMsg1.innerHTML = 'マッピング開始までしばらくお待ちください';
        wMsg2.innerHTML = '';
        wMsg3.innerHTML = '';
        break;

        case '/api/vote/start/1':
        wMsg1.innerHTML = '投票終了時に画面が切り替わります';
        wMsg2.innerHTML = 'ブラウザを切り替えずそのままの状態で';
        wMsg3.innerHTML = 'お待ちください';
        break;

        case '/api/vote/start/2':
        wMsg1.innerHTML = '投票終了時に画面が切り替わります';
        wMsg2.innerHTML = 'ブラウザを切り替えずそのままの状態で';
        wMsg3.innerHTML = 'お待ちください';
        break;

        case '/api/vote/start/3':
        wMsg1.innerHTML = '投票終了時に画面が切り替わります';
        wMsg2.innerHTML = 'ブラウザを切り替えずそのままの状態で';
        wMsg3.innerHTML = 'お待ちください';
        break;

        case '/api/vote/end/1/False':
        wMsg1.innerHTML = '投票の結果選ばれた色が2色以上だった為';
        wMsg2.innerHTML = 'マッピングを終了します';
        wMsg3.innerHTML = 'ありがとうございました';
        break;

        case '/api/vote/end/1':
        wMsg1.innerHTML = 'しばらくお待ちください';
        wMsg2.innerHTML = '';
        wMsg3.innerHTML = '';
        break;

        case '/api/vote/end/2/False':
        wMsg1.innerHTML = '投票の結果選ばれた色が2色以上だった為';
        wMsg2.innerHTML = 'マッピングを終了します';
        wMsg3.innerHTML = 'ありがとうございました';
        break;

        case '/api/vote/end/2':
        wMsg1.innerHTML = 'しばらくお待ちください';
        wMsg2.innerHTML = '';
        wMsg3.innerHTML = '';
        break;

        case '/api/vote/end/3':
        wMsg1.innerHTML = 'しばらくお待ちください';
        wMsg2.innerHTML = '';
        wMsg3.innerHTML = '';
        break;

        case '/api/scene/change/4':
        wMsg1.innerHTML = 'ありがとうございました';
        wMsg2.innerHTML = '';
        wMsg3.innerHTML = '';
        break;

        case '/api/end':
        wMsg1.innerHTML = 'ありがとうございました';
        wMsg2.innerHTML = '';
        wMsg3.innerHTML = '';
        break;

        default:
        wMsg1.innerHTML = '次のシーンから携帯連携の参加ができます';
        wMsg2.innerHTML = 'ブラウザを切り替えずそのままの状態で';
        wMsg3.innerHTML = 'マッピングをお楽しみください';
        break;
        
    }
});

// 投票
// 赤
const redButtons = document.getElementsByClassName('btn-red');
for (let i = 0; i < redButtons.length; i++) {
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
    // ひとつづつ addEventListener していく
    blackButtons[i].addEventListener("click", function (){
        socket.emit('vote', 'black');
    }, false);
}
console.log(blackButtons);
// p4.addEventListener('click', handler4, false);

// 白
const whiteButtons = document.getElementsByClassName('btn-white');
for (let i = 0; i < whiteButtons.length; i++) {
    // ひとつづつ addEventListener していく
    whiteButtons[i].addEventListener("click", function (){
        socket.emit('vote', 'white');
    }, false);
}
console.log(whiteButtons);
// p5.addEventListener('click', handler5, false);

// const waitStart = document.querySelector('#js-wait');
// const startButton = document.querySelector('#js-start-button');
// startButton.addEventListener('click', function(){
//     TweenMax.to(waitStart,1.0,{autoAlpha: 1})
// });
