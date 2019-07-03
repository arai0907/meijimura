var w = window.innerWidth;
var h = window.innerHeight;


var numButton = 4;//onClickナンバーは計４つだよ
var startButtonNumber = 0;//最初のページのナンバーは０だよ
var button = new Array(numButton); //ボタンはonClick（０～３）の群にあるよ
//使うタグとか宣言するよ↓↓
var images_src = new Array('server/public/images/1.png','server/public/images/2.png');
var num = -1;
var wait = document.querySelector('#js-wait');

window.addEventListener("load", function(){
    console.log("<finish Load>");
    //ボタンの取得
    for(var i= 0;i < numButton;i++){button[ i ]= document.getElementById('button'+ i);}
　　allButtonPermissionClickEvent();
    circle                =document.querySelector('.js-circle');
    waitCircle            =document.querySelector('.js-wait-circle');
    topPage               =document.querySelector('.top-page');
    explainSentence       =document.getElementById('explain-sentence');
    $$buttonText          =document.getElementById('button-text');
    $$rectButton          =document.getElementById('rect-button');
    $$buttonText          =document.getElementsByClassName( 'button-text' );
    topLogo               =document.querySelector('.top-logo');
    waitPage              =document.getElementById('js-wait');
    topArea               =document.getElementById('top-area');
    bottomArea            =document.getElementById('bottom-area');




    topPage.style.display == "block";

      //説明文の位置を決める
      explainSentence.style.top = ( h - explainSentence.clientHeight ) / 15 + "vh";
      explainSentence.style.display = "none";

//1.3秒毎に花火点滅させる
//帯が縮ませる

change_timer();

setTimeout(function(){
  topArea.style.height = '20%';
  bottomArea.style.height = '20%';

  for( var i = 0; i < 2; i++ ){ permissionClickEvent( i );}


  setTimeout(function(){
    topPage.style.opacity = 1.0;
    setTimeout(function(){
      circle.classList.add('fadeout');
      setTimeout(function(){

        console.log('fade');
      }, 1000);
    },700);
  },200);
},100);

});

function change_timer(){

  if (num == 1){
                  num = 0;
              }
              else {
                  num ++;
              }
              circle.src = images_src[num]
              setTimeout("change_timer()",1000);
      }
// .src = images_src[num];
function wait_timer(){

  if (num == 1){
                  num = 0;
              }
              else {
                  num ++;
              }
              waitCircle.src = images_src[num]
              setTimeout("wait_timer()",500);
      }

      //　全てのボタンのイベントを拒否
function allButtonPermissionClickEvent()
      {
        for( var i = 0; i < numButton; i++ ){ button[ i ].style.pointerEvents = "none"; }
        console.log( "＜ Can't touch" );
      }

      //　特定のボタンのイベントを許可
function permissionClickEvent( id )
      {
        button[ id ].style.pointerEvents = "auto";
        console.log( "＜permission click" + id );
      }

      //ボタンイベント
      //-------------------------
      //-------------------------
      //ボタン押したときの処理
      //-------------------------


      function pushButton ( targetButton )
      {
        var clickedButton;               //clickedButtonをつかうよ（ローカル変数）
        allButtonPermissionClickEvent();　//すべてのボタンのクリックイベントを無効にするよ
        // flashButton( targetButton );    //押したボタンが光る
        console.log( targetButton );     //押したボタンがコンソールに出力されるよ
        switch(targetButton)
        {
          case 0:
          case 1:
          clickeButton = targetButton;
          setTimeout( function(){ expandRect( targetButton )}, 300 );
          console.log("case 1");
          break;

          case 2:
          clickedButton = 1;
          setTimeout( function(){ deleteTop( clickedButton ) }, 600 );
          console.log("case 2");
          break;

          case 3:
           
          setTimeout( reduceRect, 600 );
          console.log("case 3");
          break;

          default:
          break;

        }
      }

      //-----------------------------
      // 画面切り替え
      //-----------------------------
      //-----------------------------
      //　四角いボタンを押した時

function expandRect( targetButton ){
  var otherButton;
  if( targetButton != 1){ otherButton = 1; }
  else                   { otherButton = 0; }

  //押してないボタンが消えていく
  button[ otherButton ].style.opacity = 0.0;
//   setTimeout(function(){
  topArea.style.height = '100%';
  bottomArea.style.height = "100%";
// },1200);

//ボタンのpをフェードアウト
  // for( var i = 0; i < 2; i++ ){ $$buttonText[ i ].style.opacity = 0.0; }

  //押したボタンが0.5秒後消えていく
 setTimeout(function(){
  button[ targetButton ].style.opacity = 0.0
   //トップイメージをフェードアウト
},500);

//はじめるボタンを押したら
if(targetButton == 0){
  // TweenMax.to(wait,1.0,{autoAlpha: 1});
 deleteTop( targetButton );
}
//説明ボタンをおしたら
else{
 console.log("explainSentence");
 explainSentence.style.display = button[ 2 ].style.display = button[ 3 ].style.display = "block";
setTimeout(function(){
 topArea.style.height = '20%';
 bottomArea.style.height = "20%";
 topLogo.style.opacity ="0.0";
 button[ otherButton ].style.display = "none";
 button[ 2 ].style.opacity = button[ 3 ].style.opacity = explainSentence.style.opacity = 1.0;
setTimeout( function(){
  for( var i = 2; i < 4; i++ ){ permissionClickEvent( i ) }
}, 500 );
}, 1300 );

}
}
function deleteTop( clickedButton ){

  var otherButton;
  if( clickedButton == 1 ){ otherButton = 0; }
  else{ otherButton = 1; }

  waitPage.style.display = "block";

setTimeout(function(){
  topPage.style.opacity = 0.0;
  setTimeout(function(){
  topArea.style.height = '0%';
  bottomArea.style.height = '0%';

   setTimeout(function(){
    waitPage.style.opacity = "1.0";
    wait_timer();
    topPage.style.display = "none";
    console.log('waitPage');
   },300);
 },900);
},700);
 console.log( "＜ delete TopPage" );
}

//戻るを押した時の処理
function reduceRect(){

  var clickedButton = 1;
  var otherButton   = 0;
  explainSentence.style.opacity = button[ 2 ].style.opacity = button[ 3 ].style.opacity = 0.0;

setTimeout(function(){
  button[ otherButton ].style.display = "block";
  button[ clickeButton ].style.display = "block";

  explainSentence.style.display = button[ 2 ].style.display = button[ 3 ].style.display = "none";

  //トップイメージをフェードイン
  topLogo.style.display = "block";
  topLogo.style.opacity = 1.0;
//クリックイベントを許可
setTimeout( function(){ for( var i = 0; i < 2; i++ ){ permissionClickEvent( i, true ); } }, 500 );
console.log("reload Top");
},550);


}
