function opening() {
    var stage = new createjs.Stage('mappingPage');
    stage.canvas.width  = 414;
    stage.canvas.height = 736;
    // Animate CCで出力したコンテンツを読み込む
    // 引数の文字列はAnimate CCから出力したHTMLファイルから調べる
    var comp = AdobeAn.getComposition("FC04ADEABFEC944CB5C638C13B6439D1");
    // ライブラリ内のコンテンツを読み込む
    var lib = comp.getLibrary();
    // Animate CCのシンボル名の先頭に「lib.」をつけると利用できます
    var box = new lib.opening();
    stage.addChild(box);
    console.log("opening");
    createjs.Ticker.setFPS(lib.properties.fps);
    createjs.Ticker.addEventListener("tick",stage);

  }

  function red_animaiton() {
    var stage = new createjs.Stage('mappingPage');
    stage.canvas.width  = 414;
    stage.canvas.height = 736;
    // Animate CCで出力したコンテンツを読み込む
    // 引数の文字列はAnimate CCから出力したHTMLファイルから調べる
    var comp = AdobeAn.getComposition("75CD6775DCFD78479361BCD75BF44E17");
    // ライブラリ内のコンテンツを読み込む
    var lib = comp.getLibrary();
    // Animate CCのシンボル名の先頭に「lib.」をつけると利用できます
    var box = new lib.red();
    stage.addChild(box);
    console.log("red");
    createjs.Ticker.setFPS(lib.properties.fps);
    createjs.Ticker.addEventListener("tick",stage);
  }

  function blue_animaiton() {
    var stage = new createjs.Stage('mappingPage');
    stage.canvas.width  = 414;
    stage.canvas.height = 736;
    // Animate CCで出力したコンテンツを読み込む
    // 引数の文字列はAnimate CCから出力したHTMLファイルから調べる
    var comp = AdobeAn.getComposition("A16512C49FBB554CB7B3983F90E15978");
    // ライブラリ内のコンテンツを読み込む
    var lib = comp.getLibrary();
    // Animate CCのシンボル名の先頭に「lib.」をつけると利用できます
    var box = new lib.blue();
    stage.addChild(box);
    console.log("bule");
    createjs.Ticker.setFPS(lib.properties.fps);
    createjs.Ticker.addEventListener("tick",stage);
  }

  function yellow_animaiton() {

    var stage = new createjs.Stage('mappingPage');
    stage.canvas.width  = 414;
    stage.canvas.height = 736;
    // Animate CCで出力したコンテンツを読み込む
    // 引数の文字列はAnimate CCから出力したHTMLファイルから調べる
    var comp = AdobeAn.getComposition("91B5A76C76DB734EAED026B4511388A6");
    // ライブラリ内のコンテンツを読み込む
    var lib = comp.getLibrary();
    // Animate CCのシンボル名の先頭に「lib.」をつけると利用できます
    var box = new lib.yellow();
    stage.addChild(box);
    console.log("yellow");
    createjs.Ticker.setFPS(lib.properties.fps);
    createjs.Ticker.addEventListener("tick",stage);
  }

  function green_animaiton() {
    var stage = new createjs.Stage('mappingPage');
    stage.canvas.width  = 414;
    stage.canvas.height = 736;
    // Animate CCで出力したコンテンツを読み込む
    // 引数の文字列はAnimate CCから出力したHTMLファイルから調べる
    var comp = AdobeAn.getComposition("D9672207A79826468258E7ACDF875F3E");
    // ライブラリ内のコンテンツを読み込む
    var lib = comp.getLibrary();
    // Animate CCのシンボル名の先頭に「lib.」をつけると利用できます
    var box = new lib.green();
    stage.addChild(box);
    console.log("green");
    createjs.Ticker.setFPS(lib.properties.fps);
    createjs.Ticker.addEventListener("tick",stage);
  }

  function purple_animaiton() {
    var stage = new createjs.Stage('mappingPage');
    stage.canvas.width  = 414;
    stage.canvas.height = 736;
    // Animate CCで出力したコンテンツを読み込む
    // 引数の文字列はAnimate CCから出力したHTMLファイルから調べる
    var comp = AdobeAn.getComposition("D4C55AA399BE47B096256101406838C2");
    // ライブラリ内のコンテンツを読み込む
    var lib = comp.getLibrary();
    // Animate CCのシンボル名の先頭に「lib.」をつけると利用できます
    var box = new lib.purple();
    stage.addChild(box);
    console.log("purple");
    createjs.Ticker.setFPS(lib.properties.fps);
    createjs.Ticker.addEventListener("tick",stage);
  }

  function orange_animaiton() {
    var stage = new createjs.Stage('mappingPage');
    stage.canvas.width  = 414;
    stage.canvas.height = 736;
    // Animate CCで出力したコンテンツを読み込む
    // 引数の文字列はAnimate CCから出力したHTMLファイルから調べる
    var comp = AdobeAn.getComposition("873D49B0170247F2A3B5D9F3BB7B6C3C");
    // ライブラリ内のコンテンツを読み込む
    var lib = comp.getLibrary();
    // Animate CCのシンボル名の先頭に「lib.」をつけると利用できます
    var box = new lib.orange();
    stage.addChild(box);
    console.log("orange");
    createjs.Ticker.setFPS(lib.properties.fps);
    createjs.Ticker.addEventListener("tick",stage);
  }


  function white_animaiton() {
    var stage = new createjs.Stage('mappingPage');
    stage.canvas.width  = 414;
    stage.canvas.height = 736;
    // Animate CCで出力したコンテンツを読み込む
    // 引数の文字列はAnimate CCから出力したHTMLファイルから調べる
    var comp = AdobeAn.getComposition("332A209311DD428B97FD9E8DDB1EA4B8");
    // ライブラリ内のコンテンツを読み込む
    var lib = comp.getLibrary();
    // Animate CCのシンボル名の先頭に「lib.」をつけると利用できます
    var box = new lib._true();
    stage.addChild(box);
    console.log("white");
    createjs.Ticker.setFPS(lib.properties.fps);
    createjs.Ticker.addEventListener("tick",stage);
  }

  function black_animaiton() {
    var stage = new createjs.Stage('mappingPage');
    stage.canvas.width  = 414;
    stage.canvas.height = 736;
    // Animate CCで出力したコンテンツを読み込む
    // 引数の文字列はAnimate CCから出力したHTMLファイルから調べる
    var comp = AdobeAn.getComposition("7B10DE9C33FAF64EA8302B6E8A1BEA53");
    // ライブラリ内のコンテンツを読み込む
    var lib = comp.getLibrary();
    // Animate CCのシンボル名の先頭に「lib.」をつけると利用できます
    var box = new lib.Black();
    stage.addChild(box);
    console.log("Black");
    createjs.Ticker.setFPS(lib.properties.fps);
    createjs.Ticker.addEventListener("tick",stage);
  }


  function false_animaiton() {
    var stage = new createjs.Stage('mappingPage');
    stage.canvas.width  = 414;
    stage.canvas.height = 736;
    // Animate CCで出力したコンテンツを読み込む
    // 引数の文字列はAnimate CCから出力したHTMLファイルから調べる
    var comp = AdobeAn.getComposition("36189F819B24485F99408E9A4461C4F1");
    // ライブラリ内のコンテンツを読み込む
    var lib = comp.getLibrary();
    // Animate CCのシンボル名の先頭に「lib.」をつけると利用できます
    var box = new lib.false();
    stage.addChild(box);
    console.log("false");
    createjs.Ticker.setFPS(lib.properties.fps);
    createjs.Ticker.addEventListener("tick",stage);
  }

  function endroll_animaiton() {
    var stage = new createjs.Stage('mappingPage');
    stage.canvas.width  = 414;
    stage.canvas.height = 736;
    // Animate CCで出力したコンテンツを読み込む
    // 引数の文字列はAnimate CCから出力したHTMLファイルから調べる
    var comp = AdobeAn.getComposition("36189F819B24485F99408E9A4461C4F0");
    // ライブラリ内のコンテンツを読み込む
    var lib = comp.getLibrary();
    // Animate CCのシンボル名の先頭に「lib.」をつけると利用できます
    var box = new lib.endroll();
    stage.addChild(box);
    console.log("endroll");
    createjs.Ticker.setFPS(lib.properties.fps);
    createjs.Ticker.addEventListener("tick",stage);
  }
