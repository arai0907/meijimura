// window.onload = function() {
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

    const socket = io.connect('http://192.168.1.102:3000');

    let trueColor;
    let voteNumber;
    let firstColor;
    let secondColor;
    let mixColor;
    let endName;
    let PhaseNumber;

    //--- 待機 ---
    const waitMsg;
    const wCaption = document.getElementById('waitCaption');//メッセージ切り替え
    const wMsg1    = document.getElementById('waitMessage1');//メッセージ切り替え
    const wMsg2    = document.getElementById('waitMessage2');//メッセージ切り替え
    const wMsg3    = document.getElementById('waitMessage3');//メッセージ切り替え
    //--- 投票 ---
    const voteRY = document.getElementById('vote-RY'); //red_yellow
    const voteYB = document.getElementById('vote-YB'); //yellow_blue
    const voteBR = document.getElementById('vote-BR'); //bule_red

    const voteRYB  = document.getElementById('vote-RYB'); //red_yellow_blue
    const votewb   = document.getElementById('vote-wb'); //white_black

    const btnR01     = document.getElementById('red01');
    const btnR02     = document.getElementById('red02');
    const btnR03     = document.getElementById('red03');

    const btnY01     = document.getElementById('yellow01');
    const btnY02     = document.getElementById('yellow02');
    const btnY03     = document.getElementById('yellow03');

    const btnB01     = document.getElementById('blue01');
    const btnB02     = document.getElementById('blue02');
    const btnB03     = document.getElementById('blue03');

    const btnw01     = document.getElementById('white01');

    const btnb01     = document.getElementById('black01');

    function changeColor(_Color) {
        if(_Color === "1"){
            colorPage.style.backgroundColor = "#d90c18";
        } else if(_Color === "2") {
            colorPage.style.backgroundColor = "#001ded";
        } else if(_Color === "3") {
            colorPage.style.backgroundColor = "#ffd00d";
        } else if(_Color === "7") {
            colorPage.style.backgroundColor = "#ffffff";
        } else if(_Color === "8") {
            colorPage.style.backgroundColor = "#000000";
        }
        // } else if(_Color === "#") {
        //     colorPage.style.backgroundColor = "#ffffff";
        // } else if(_Color === "#")
        //     colorPage.style.backgroundColor = "#ffffff";
    }

    // 指定された色のwebアニメーションを流す
    function colorAnimetion(_resultcolor){
        if (_resultcolor === '#') {
            false_animaiton();
        } else if(_resultcolor === '0') {
            false_animaiton();
        } else if(_resultcolor === '1') {
            red_animaiton();
        } else if(_resultcolor === '2') {
            yellow_animaiton();
        } else if(_resultcolor === '3') {
            blue_animaiton();
        }
    }

    // 指定された混色のwebアニメーションを流す
    function mixcolorAnimetion(_mixColor) {
        if(_mixColor === '#') {
            false_animaiton();
        } else if(_mixColor === '4') {
            green_animaiton();
        } else if(_mixColor === '5') {
            orange_animaiton();
        } else if(_mixColor === '6') {
            purple_animaiton();
        }
    }

    // function trueAnimetion(_trueColor) {

    // }

    // ウィンドウ
    const waitPage = document.getElementById('js-wait');
    const mpPage = document.getElementById('mappingPage');
    const firstVotePage = document.getElementById('firstVote');
    const secondVotePage = document.getElementById('secondVote');
    const thirdVotePage = document.getElementById('thirdVote');
    const colorPage = document.getElementById('colorPage');

    //--- 投票画面のスタイルをデフォルトに戻す ---
    function voteReset(){
        btnR01.style.height = '60%';
        btnY02.style.height = '60%';
        btnB02.style.height = '60%';
        btnw01.style.height = '60%';
        btnb01.style.height = '60%';

        btnR03.style.height = '45%';
        btnB03.style.height = '45%';

        btnB03.style.top    = '20%'

        voteRY.style.display = 'none';
        voteYB.style.display = 'none';
        voteBR.style.display = 'none';

        votewb.style.display = 'none';

        firstVotePage.style.display  = 'none';
        secondVotePage.style.display = 'none';
        thirdVotePage.style.display = 'none';
    }

    function findSceneNumber() {
        if( boolWait === 'true' ) { // topPageにいるときは切り替えないようにする
            switch( PhaseNumber ) {
                case 0:
                // 待機画面
                waitPage.style.opacity = 1.0;
                waitPage.style.display = "block";

                colorPage.style.opacity = 0.0;
                colorPage.style.display = "none";

                mpPage.style.opacity = 0.0;
                mpPage.style.display = "none";
                console.log("待機画面");
                break;

                case 1:
                // op
                mpPage.style.opacity = 1.0;
                mpPage.style.display = "block";
                opening();
                console.log("オープニング");
                break;

                case 2:
                // 投票画面1
                mpPage.style.opacity = 0.0;
                mpPage.style.display = "none";

                firstVotePage.style.opacity = 1.0;
                firstVotePage.style.display = "block";
                console.log("投票画面1");
                break;

                case 3:
                // 投票締め切り
                changeColor(firstColor);
                mpPage.style.opacity = 0.0;
                mpPage.style.display = "none";

                firstVotePage.style.opacity = 1.0;
                firstVotePage.style.display = "block";
                console.log("投票締め切り1");
                break;

                case 4:
                // アニメ1
                colorPage.style.opacity = 0.0;
                colorPage.style.display = "none";

                mpPage.style.opacity = 1.0;
                mpPage.style.display = "block";
                colorAnimetion( firstColor );
                console.log("アニメーション1");
                break;

                case 5:
                // 投票画面2
                mpPage.style.opacity = 0.0;
                mpPage.style.display = "none";

                secondVotePage.style.opacity = 1.0;
                secondVotePage.style.display = "block";
                console.log("投票画面2");
                break;

                case 6:
                // 投票締め切り2
                changeColor(secondColor);
                colorPage.style.opacity = 1.0;
                colorPage.style.display = "block";

                secondVotePage.style.opacity = 0.0;
                secondVotePage.style.display = "none";
                console.log("投票締め切り2");
                break;

                case 7:
                // アニメ2
                colorPage.style.opacity = 0.0;
                colorPage.style.display = "none";

                mpPage.style.opacity = 1.0;
                mpPage.style.display = "block";
                colorAnimetion( secondColor );
                console.log("アニメーション2");
                break;

                case 8:
                // アニメ3
                colorPage.style.opacity = 0.0;
                colorPage.style.display = "none";

                mpPage.style.opacity = 1.0;
                mpPage.style.display = "block";
                mixcolorAnimetion( mixColor );
                console.log("アニメーション3");
                break;

                case 9:
                // 投票画面3
                mpPage.style.opacity = 0.0;
                mpPage.style.display = "none";

                thirdVotePage.style.opacity = 1.0;
                thirdVotePage.style.display = "block";
                console.log("投票画面3");
                break;

                case 10:
                // 投票締め切り3
                changeColor(thirdColor);
                colorPage.style.opacity = 1.0;
                colorPage.style.display = "block";

                thirdVotePage.style.opacity = 0.0;
                thirdVotePage.style.display = "none";
                console.log("投票締め切り3");
                break;

                case 11:
                // アニメ4
                colorPage.style.opacity = 0.0;
                colorPage.style.display = "none";

                mpPage.style.opacity = 1.0;
                mpPage.style.display = "block";
                trueAnimetion( trueName );
                console.log("true");
                break;
                }

                if( PhaseNumber !==0){
                    waitPage.style.opacity = 0.0;
                    waitPage.style.display = "none";
                }
            }
        }


    // シーンの切り替え
    socket.on('sceneNumber', function(number) {
        PhaseNumber = number.phase;
        console.log("SCENE-NO."+PhaseNumber);
        findSceneNumber();
    });

    // 待機画面のメッセージ表示切り替え
    socket.on('waitMsg', function(text) {
        waitMsg = text.msg;
        wCaption.innerHTML = waitMsg;
    switch( waitMsg ){
        case 'マッピング開始前':
        wMsg1.innerHTML = 'マッピング開始までしばらくお待ちください';
        wMsg2.innerHTML = '';
        wMsg3.innerHTML = '';
        break;

        case '投票中':
        wMsg1.innerHTML = '投票終了時に画面が切り替わります';
        wMsg2.innerHTML = 'ブラウザを切り替えずそのままの状態で';
        wMsg3.innerHTML = 'お待ちください';
        break;

        case '投票終了':
        wMsg1.innerHTML = 'しばらくお待ちください';
        wMsg2.innerHTML = '';
        wMsg3.innerHTML = '';
        break;

        // case 'falseEnd上映中':
        // wMsg1.innerHTML = 'ありがとうございました';
        // wMsg2.innerHTML = '';
        // wMsg3.innerHTML = '';
        // break;

        case 'trueEnd上映中':
        wMsg1.innerHTML = 'ありがとうございました';
        wMsg2.innerHTML = '';
        wMsg3.innerHTML = '';
        break;

        // case '同票falseEnd上映中':
        // wMsg1.innerHTML = '投票の結果選ばれた色が2色以上だった為';
        // wMsg2.innerHTML = 'マッピングを終了します';
        // wMsg3.innerHTML = 'ありがとうございました';
        // break;

        case 'マッピング終了':
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

    //RY
    btnR01.onclick = function() {
        colorPage.style.display = "block";
        btnR01.style.height = '130%';
        socket.emit('vote', 'red');
    }
    btnY01.onclick = function() {
        colorPage.style.display = "block";
        btnR01.style.height = '0%';
        socket.emit('vote', 'yellow');
    }
    
    //YB
    btnY02.onclick = function() {
        colorPage.style.display = "block";
        btnY02.style.height = '130%';
        socket.emit('vote', 'yellow');
    }
    btnB01.onclick = function() {
        colorPage.style.display = "block";
        btnY02.style.height = '0%';
        socket.emit('vote', 'blue');
    }
    
    //BR
    btnB02.onclick = function() {
        colorPage.style.display = "block";
        btnB02.style.height = '130%';
        socket.emit('vote', 'blue');
    }
    btnR02.onclick = function() {
        colorPage.style.display = "block";
        btnB02.style.height = '0%';
        socket.emit('vote', 'red');
    }
    
    
    //RYB
    btnR03.onclick = function() {
        colorPage.style.display = "block";
        btnR03.style.height = '130%';
        btnB03.style.height = '0%';
        socket.emit('vote', 'red');
    }
    btnY03.onclick = function() {
        colorPage.style.display = "block";
        btnR03.style.height = '0%';
        btnB03.style.top = '110%'
        socket.emit('vote', 'yellow');
    }
    btnB03.onclick = function() {
        colorPage.style.display = "block";
        btnR03.style.height = '0%';
        btnB03.style.height = '120%';
        btnB03.style.top    = '-10%'
        socket.emit('vote', 'blue');
    }

    //wb
    btnw01.onclick = function() {
        colorPage.style.display = "block";
        btnw01.style.height = '130%';
        socket.emit('vote', 'white');
    }
    btnb01.onclick = function() {
        colorPage.style.display = "block";
        btnw01.style.height = '0%';
        socket.emit('vote', 'black');
    }


    //待機画面背景色
    function waitBackColor( _trueColorId ){
        switch ( _truecolor ) {
        case '5':
            waitPage.style.backgroundColor = "rgb(230,120,0)";
            break;
        
        case '6':
            waitPage.style.backgroundColor = "rgb(110,60,130)";
            break;
        
        case '4':
            waitPage.style.backgroundColor = "rgb(0,150,100)";
            break;
        
        default:
            waitPage.style.backgroundColor = "rgb(0,0,0)";
        break;
        }
    }


    socket.on('/api/init', (data) => {
        // スマホの画面を開始画面に切り替える
        console.log('サーバーからWebSocketで/api/initのデータを受信しました。')
        console.log(data);
    });

    socket.on('/api/start', () => {
        // スマホの画面を開始画面に切り替える
        console.log('サーバーからWebSocketでOPアニメーションをスタートする。')
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
    });

    // 投票2の終了
    socket.on('/api/vote/end/2', (data) => {
        console.log('サーバーからWebSocketで/api/vote/end/2のデータを受信しました。')
        console.log(data);
    });

    // 投票２
    socket.on('/api/vote/start/2',(data) => {
        console.log('サーバーからWebSocketで/api/vote/start/2のデータを受信しました。')
        console.log(data);
        console.log('赤と黄と青の投票画面を表示')
    });

    // 投票3
    socket.on('/api/vote/start/3', (data) => {
        console.log('サーバーからWebSocketで/api/vote/start/3のデータを受信しました。')
        console.log(data);
        console.log('白と黒の投票画面を表示')
    });

    // 投票3の終了
    socket.on('/api/vote/end/3', (data) => {
        console.log('サーバーからWebSocketで/api/vote/end/3のデータを受信しました。')
        console.log(data);
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
    });

    // 画面の切り替え2
    socket.on('/api/scene/change/2', (data) => {
        console.log('サーバーからWebSocketで/api/scene/change/2のデータを受信しました。')
        console.log(data);
    });

    // 画面の切り替え3
    socket.on('/api/scene/change/3', (data) => {
        console.log('サーバーからWebSocketで/api/scene/change/3のデータを受信しました。')
        console.log(data);
    });

    // 画面の切り替え4
    socket.on('/api/scene/change/4', (data) => {
        console.log('サーバーからWebSocketで/api/scene/change/4のデータを受信しました。')
        console.log(data);
    });

    socket.on('/api/end', (data) => {
        // スマホの画面を終了画面に切り替える
        console.log('サーバーからWebSocketで/api/endのデータを受信しました。')
        console.log(data);
    });

    socket.on('/api/reset', (data) => {
        console.log('サーバーからWebSocketで/api/resetのデータを受信しました。')
        console.log(data);
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
// }
