function opening() {
    var stage = new createjs.Stage('mappingPage');
    stage.canvas.width  = 414;
    stage.canvas.height = 736;
    // Animate CCで出力したコンテンツを読み込む
    // 引数の文字列はAnimate CCから出力したHTMLファイルから調べる
    var comp = AdobeAn.getComposition("320208A0C54ABB44A408C5BED95BDF4A");
    // ライブラリ内のコンテンツを読み込む
    var lib = comp.getLibrary();
    // Animate CCのシンボル名の先頭に「lib.」をつけると利用できます
    var box = new lib.OP();
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
    var comp = AdobeAn.getComposition("BFB189BF562C484782C3932DDD08AA20");
    var lib = comp.getLibrary();
    var loader = new createjs.LoadQueue(false);

    loader.addEventListener("fileload", function(evt){handleFileLoad(evt,comp)});
    loader.addEventListener("complete", function(evt){
      var lib=comp.getLibrary();
      var ss=comp.getSpriteSheet();
      var queue = evt.target;
      var ssMetadata = lib.ssMetadata;
      for(i=0; i<ssMetadata.length; i++) {
        ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
      }

      var box = new lib.green();
      var stage = new createjs.Stage('mappingPage');

      stage.canvas.width  = 414;
      stage.canvas.height = 736;
      stage.addChild(box);

      createjs.Ticker.setFPS(lib.properties.fps);
      createjs.Ticker.addEventListener("tick",stage);
    });

    loader.loadManifest(lib.properties.manifest);

    console.log("green");
  }

  function purple_animaiton() {
    var comp = AdobeAn.getComposition("14632E5FB800BA4494A184A2DA1C4C20");
    var lib = comp.getLibrary();
    var loader = new createjs.LoadQueue(false);

    loader.addEventListener("fileload", function(evt){handleFileLoad(evt,comp)});
    loader.addEventListener("complete", function(evt){
      var lib=comp.getLibrary();
      var ss=comp.getSpriteSheet();
      var queue = evt.target;
      var ssMetadata = lib.ssMetadata;
      for(i=0; i<ssMetadata.length; i++) {
        ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
      }

      var box = new lib.purple();
      var stage = new createjs.Stage('mappingPage');

      stage.canvas.width  = 414;
      stage.canvas.height = 736;
      stage.addChild(box);

      createjs.Ticker.setFPS(lib.properties.fps);
      createjs.Ticker.addEventListener("tick",stage);
    });

    loader.loadManifest(lib.properties.manifest);

    console.log("purple");
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

  function red2_animaiton() {
    var comp = AdobeAn.getComposition("1DC0810EBB7C724BB89563C70381CCE8");
    var lib = comp.getLibrary();
    var loader = new createjs.LoadQueue(false);

    loader.addEventListener("fileload", function(evt){handleFileLoad(evt,comp)});
  	loader.addEventListener("complete", function(evt){
      var lib=comp.getLibrary();
      var ss=comp.getSpriteSheet();
      var queue = evt.target;
      var ssMetadata = lib.ssMetadata;
      for(i=0; i<ssMetadata.length; i++) {
        ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
      }

      var box = new lib.red2();
      var stage = new createjs.Stage('mappingPage');

      stage.canvas.width  = 414;
      stage.canvas.height = 736;
      stage.addChild(box);

      createjs.Ticker.setFPS(lib.properties.fps);
      createjs.Ticker.addEventListener("tick",stage);
    });

    loader.loadManifest(lib.properties.manifest);

    console.log("red2");
  }

  function yellow2_animaiton() {
    var comp = AdobeAn.getComposition("CD9F3402B221214BBB23C2B471ACC9CF");
    var lib = comp.getLibrary();
    var loader = new createjs.LoadQueue(false);

    loader.addEventListener("fileload", function(evt){handleFileLoad(evt,comp)});
  	loader.addEventListener("complete", function(evt){
      var lib=comp.getLibrary();
      var ss=comp.getSpriteSheet();
      var queue = evt.target;
      var ssMetadata = lib.ssMetadata;
      for(i=0; i<ssMetadata.length; i++) {
        ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
      }

      var box = new lib.yellow2();
      var stage = new createjs.Stage('mappingPage');

      stage.canvas.width  = 414;
      stage.canvas.height = 736;
      stage.addChild(box);

      createjs.Ticker.setFPS(lib.properties.fps);
      createjs.Ticker.addEventListener("tick",stage);
    });

    loader.loadManifest(lib.properties.manifest);

    console.log("yellow2");
  }

  function blue2_animaiton() {
    var comp = AdobeAn.getComposition("BDE1B6BE28D9084EAFDB95895D8C40DF");
    var lib = comp.getLibrary();
    var loader = new createjs.LoadQueue(false);

    loader.addEventListener("fileload", function(evt){handleFileLoad(evt,comp)});
    loader.addEventListener("complete", function(evt){
      var lib=comp.getLibrary();
      var ss=comp.getSpriteSheet();
      var queue = evt.target;
      var ssMetadata = lib.ssMetadata;
      for(i=0; i<ssMetadata.length; i++) {
        ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
      }

      var box = new lib.blue2();
      var stage = new createjs.Stage('mappingPage');

      stage.canvas.width  = 414;
      stage.canvas.height = 736;
      stage.addChild(box);

      createjs.Ticker.setFPS(lib.properties.fps);
      createjs.Ticker.addEventListener("tick",stage);
    });

    loader.loadManifest(lib.properties.manifest);

    console.log("blue2");
  }

  function false_animaiton() {
    var stage = new createjs.Stage('mappingPage');
    stage.canvas.width  = 414;
    stage.canvas.height = 736;
    // Animate CCで出力したコンテンツを読み込む
    // 引数の文字列はAnimate CCから出力したHTMLファイルから調べる
    var comp = AdobeAn.getComposition("094486F273D67049BD5BEC32448026B7");
    // ライブラリ内のコンテンツを読み込む
    var lib = comp.getLibrary();
    // Animate CCのシンボル名の先頭に「lib.」をつけると利用できます
    var box = new lib.False2();
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
    var comp = AdobeAn.getComposition("780572263170584C83D340CD9E8880BF");
    // ライブラリ内のコンテンツを読み込む
    var lib = comp.getLibrary();
    // Animate CCのシンボル名の先頭に「lib.」をつけると利用できます
    var box = new lib.Endroll2();
    stage.addChild(box);
    console.log("endroll");
    createjs.Ticker.setFPS(lib.properties.fps);
    createjs.Ticker.addEventListener("tick",stage);
  }

  function handleFileLoad(evt, comp) {
  	var images=comp.getImages();
  	if (evt && (evt.item.type == "image")) { images[evt.item.id] = evt.result; }
  }
