var firstVotePage = document.getElementById('first-vote');
var secondVotePage = document.getElementById('second-vote');
var thirdVotePage = document.getElementById('third-vote');
var colorPage = document.getElementById('colorPage')

//--- 投票 ---
var voteRY = document.getElementById('vote-RY'); //red_yellow
var voteYB = document.getElementById('vote-YB'); //yellow_blue
var voteBR = document.getElementById('vote-BR'); //bule_red

var voteRYB  = document.getElementById('vote-RYB'); //red_yellow_blue
var votewb   = document.getElementById('vote-wb'); //white_black

var btnR01     = document.getElementById('red1');
var btnR02     = document.getElementById('red2');
var btnR03     = document.getElementById('red3');

var btnY01     = document.getElementById('yellow1');
var btnY02     = document.getElementById('yellow2');
var btnY03     = document.getElementById('yellow3');

var btnB01     = document.getElementById('blue1');
var btnB02     = document.getElementById('blue2');
var btnB03     = document.getElementById('blue3');

var btnw01     = document.getElementById('white1');
var btnb01     = document.getElementById('black1');
// var waitPage   = document.querySelector('#wait-content');

//RY
btnR01.onclick = function() {
 colorPage.style.display = "block";
 btnR01.style.height = '130%';
}
btnY01.onclick = function() {
 colorPage.style.display = "block";
 btnR01.style.height = '0%';
}

//YB
btnY02.onclick = function() {
 colorPage.style.display = "block";
 btnY02.style.height = '130%';
}
btnB01.onclick = function() {
 colorPage.style.display = "block";
 btnY02.style.height = '0%';
}

//BR
btnB02.onclick = function() {
 colorPage.style.display = "block";
 btnB02.style.height = '130%';
}
btnR02.onclick = function() {
 colorPage.style.display = "block";
 btnB02.style.height = '0%';
}

//RYB
btnR03.onclick = function() {
 colorPage.style.display = "block";
 btnR03.style.height = '130%';
 btnB03.style.height = '0%';
}
btnY03.onclick = function() {
 colorPage.style.display = "block";
 btnR03.style.height = '0%';
 btnB03.style.top = '110%'
}
btnB03.onclick = function() {
 colorPage.style.display = "block";
 btnR03.style.height = '0%';
 btnB03.style.height = '120%';
 btnB03.style.top    = '-10%'
}

//wb
btnw01.onclick = function() {
 colorPage.style.display = "block";
 btnb01.style.height = '0%';
}
btnb01.onclick = function() {
 colorPage.style.display = "block";
 btnwb1.style.height = '130%';
}

//--- 投票画面のスタイルをデフォルトに戻す ---
function voteReset(){
 btnR01.style.height = '60%';
 btnY02.style.height = '60%';
 btnB02.style.height = '60%';


 btnR03.style.height = '45%';
 btnB03.style.height = '45%';

 btnB03.style.top    = '20%'

 voteRY.style.display = 'none';
 voteYB.style.display = 'none';
 voteBR.style.display = 'none';

 firstVotePage.style.display  = 'none';
 secondVotePage.style.display = 'none';
}
