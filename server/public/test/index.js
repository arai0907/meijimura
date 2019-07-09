const buttonRed = document.querySelector("#js-button-red");
const buttonYellow = document.querySelector("#js-button-yellow");
const buttonBlue = document.querySelector("#js-button-blue");
const buttonBlack = document.querySelector("#js-button-black");
const buttonWhite = document.querySelector("#js-button-white");

const buttonRedNumber = document.querySelector("#js-button-red-number");
const buttonYellowNumber = document.querySelector("#js-button-yellow-number");
const buttonBlueNumber = document.querySelector("#js-button-blue-number");
const buttonBlackNumber = document.querySelector("#js-button-black-number");
const buttonWhiteNumber = document.querySelector("#js-button-white-number");

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

socket.on("/api/init", data => {
  // スマホの画面を開始画面に切り替える
  console.log("サーバーからWebSocketで/api/initのデータを受信しました。");
  console.log(data);
});

socket.on("/api/start", () => {
  // スマホの画面を開始画面に切り替える
  console.log("サーバーからWebSocketでOPアニメーションをスタートする。");

  // オープニングアニメーションを開始
  opening();
});

// 投票開始１
socket.on("/api/vote/start/1", data => {
  console.log(data);
  const voteColor0 = data.randomVoteColorId[0];
  const voteColor1 = data.randomVoteColorId[1];

  const buttonRed = document.querySelector("#js-button-red");
  const buttonYellow = document.querySelector("#js-button-yellow");
  const buttonBlue = document.querySelector("#js-button-blue");

  if (voteColor0 === COLORS.red && voteColor1 === COLORS.yellow) {
    console.log("赤と黄の投票画面を表示");
    buttonBlue.style.display = "none";
  } else if (voteColor0 === COLORS.red && voteColor1 === COLORS.blue) {
    console.log("赤と青の投票画面を表示");
    buttonYellow.style.display = "none";
  } else if (voteColor0 === COLORS.yellow && voteColor1 === COLORS.blue) {
    console.log("黄と青の投票画面を表示");
    buttonRed.style.display = "none";
  }
});

// 投票1の終了
socket.on("/api/vote/end/1", data => {
  console.log("サーバーからWebSocketで/api/vote/end/1のデータを受信しました。");
  // 画面を白くする
  console.log(data);
});

// 投票2の終了
socket.on("/api/vote/end/2", data => {
  console.log("サーバーからWebSocketで/api/vote/end/2のデータを受信しました。");
  console.log(data);
});

// 投票２
socket.on("/api/vote/start/2", data => {
  console.log(
    "サーバーからWebSocketで/api/vote/start/2のデータを受信しました。"
  );

  buttonBlue.style.display = "block";
  buttonYellow.style.display = "block";
  buttonRed.style.display = "block";

  console.log("赤と黄と青の投票画面を表示");
});

// 投票3
socket.on("/api/vote/start/3", data => {
  console.log(
    "サーバーからWebSocketで/api/vote/start/3のデータを受信しました。"
  );
  console.log(data);
  console.log("白と黒の投票画面を表示");
});

// 投票3の終了
socket.on("/api/vote/end/3", data => {
  console.log("サーバーからWebSocketで/api/vote/end/3のデータを受信しました。");
  console.log(data);
});

// 画面の切り替え
socket.on("/api/scene/change", data => {
  // スマホの画面のアニメーションを切り替える
  console.log(
    "サーバーからWebSocketで/api/scene/change/:idのデータを受信しました。"
  );
  console.log(data);

  if (data.sceneId === 1 || data.sceneId === 2) {
    if (data.colorId === COLORS.red) {
      red_animaiton();
    } else if (data.colorId === COLORS.blue) {
      blue_animaiton();
    } else if (data.colorId === COLORS.yellow) {
      yellow_animaiton();
    } else {
      false_animaiton();
    }
  } else if (data.sceneId === 3) {
    console.log(COLORS.green);
    if (data.colorId === COLORS.green) {
      green_animaiton();
    } else if (data.colorId === COLORS.orange) {
      orange_animaiton();
    } else if (data.colorId === COLORS.purple) {
      purple_animaiton();
    } else {
      false_animaiton();
    }
  }
});

socket.on("/api/end", data => {
  console.log("サーバーからWebSocketで/api/endのデータを受信しました。");
  console.log(data);
});

socket.on("/api/reset", data => {
  console.log("サーバーからWebSocketで/api/resetのデータを受信しました。");
  console.log(data);
});

socket.on("vote", data => {
  console.log("サーバーからWebSocketで投票数のデータを受信しました。");

  buttonRedNumber.textContent = data.R;
  buttonYellowNumber.textContent = data.Y;
  buttonBlueNumber.textContent = data.B;
  buttonBlackNumber.textContent = data.b;
  buttonWhiteNumber.textContent = data.w;
});

socket.on("phase", phase => {
  console.log(phase);
});

buttonRed.addEventListener("click", function() {
  socket.emit("vote", "red");
});

buttonYellow.addEventListener("click", function() {
  socket.emit("vote", "yellow");
});

buttonBlue.addEventListener("click", function() {
  socket.emit("vote", "blue");
});

buttonBlack.addEventListener("click", function() {
  socket.emit("vote", "black");
});

buttonWhite.addEventListener("click", function() {
  socket.emit("vote", "white");
});

// 投票
// var p1 = document.getElementById('red');
// var handler1 = function(){
//     console.log('vote1');
//     socket.emit('vote', 'red');
// };
// p1.addEventListener('click', handler1, false);

// var p2 = document.getElementById('yellow');
// var handler2 = function(){
//     console.log('vote2');
//     socket.emit('vote', 'yellow');
// };
// p2.addEventListener('click', handler2, false);

// var p3 = document.getElementById('blue');
// var handler3 = function(){
//     console.log('vote3');
//     socket.emit('vote', 'blue');
// };
// p3.addEventListener('click', handler3, false);

// var p4 = document.getElementById('white');
// var handler4 = function(){
//     console.log('vote4');
//     socket.emit('vote', 'white');
// };
// p4.addEventListener('click', handler4, false);

// var p5 = document.getElementById('black');
// var handler5 = function(){
//     console.log('vote5');
//     socket.emit('vote', 'black');
// };
// p5.addEventListener('click', handler5, false);

// var wait = document.querySelector('#js-wait');
// var startButton = document.querySelector('#js-start-button');
// startButton.addEventListener('click', function(){
//     TweenMax.to(wait,1.0,{autoAlpha: 1})
// });
