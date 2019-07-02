var w = window.innerWidth;
var h = window.innerHeight;


var numButton =4;//onClickナンバーは計４つだよ
var startButtonNumber = 0;//最初のページのナンバーは０だよ
var button = new Array (numButton); //ボタンはonClick（０～３）の群にあるよ
//使うタグとか宣言するよ↓↓
var $$buttonText;
var topPage;
var explainSentence;
var images_src = new Array('server/public/images/1.png','server/public/images/2.png');
var num = -1;
var topLogo;

var wait = document.querySelector('#js-wait');

window.addEventListener("load",function()
{
    console.log("<finish Load>");
    //ボタンの取得
    for(var i= 0;i < numButton;i++){button[ i ]= document.getElementById('button'+ i);}
　　allButtonPermissionClickEvent();
    circle               =document.getElementById('js-circle');
    topPage               =document.getElementsByClassName('topPage');
    explainSentence       =document.getElementById('explainSentence');
    $$buttonText          =document.getElementById('buttonText');
    $$rectButton          =document.getElementById('rectButton');
    $$buttonText          =document.getElementsByClassName( 'buttonText' );
    topLogo               =document.getElementsByClassName('topLogo');





    topPage.style.display == "block";

      //説明文の位置を決める
      explainSentence.style.top = ( h - explainSentence.clientHeight ) / 3.5 + "px";
      explainSentence.style.display = "none";

//1.3秒毎に花火点滅させる
//帯が縮ませる

　　　slideshow_timer();

setTimeout(function(){
  document.getElementById('TopArea').style.height = '20%';
  document.getElementById('BottomArea').style.height = '20%';

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

function slideshow_timer(){
  if (num == 1){
                  num = 0;
              }
              else {
                  num ++;
              }
              document.getElementById("js-circle").src=images_src[num];
              setTimeout("slideshow_timer()",1000);
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
        //flashButton( targetButton );    //押したボタンが光る
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
  //帯が伸びる
  document.getElementById('TopArea').style.height = '100%';
  document.getElementById('BottomArea').style.height = '100%';

//   setTimeout(function(){
//   document.getElementById('TopArea').style.height = '20%';
//   document.getElementById('BottomArea').style.height = '20%';
// },1200);

//ボタンのpをフェードアウト
  // for( var i = 0; i < 2; i++ ){ $$buttonText[ i ].style.opacity = 0.0; }

  //押したボタンが0.5秒後消えていく
 setTimeout(function()  {
   // button[ targetButton ].style.opacity = 0.0;
   //トップイメージをフェードアウト

topPage.style.opacity = 0.0;

});

if(targetButton == 0){

 deleteTop();
  // TweenMax.to(wait,1.0,{autoAlpha: 1});
 console.log('wait');
}

}

function deleteTop(){

  setTimeout(function(){
  document.getElementById('TopArea').style.height = '0%';
  document.getElementById('BottomArea').style.height = '0%';

setTimeout(function(){
  console.log('waitLogo');
},300);

},1200);

}
