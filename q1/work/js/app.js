//　Q1-1 読み込み時に文字の色変化

$(function(){  //HTMLが読み込まれるタイミングで
  $("#q1").css("color","green");  //q1のcssスタイルのカラーを緑に変更する
});

//　Q1-2 クリックしてボタンの色変更

$(function(){  //HTMLが読み込まれて
  $("#q2").on("click",function(){  //クリックしたタイミングで
    $(this).css("background","pink")  //q2のcssスタイルの背景カラーをピンクに変更する
  })
});

//　Q1-3 クリックしてフェードアウト

$(function(){
  $("#q3").on("click",function(){  //クリックしたタイミングで
    $(this).fadeOut(3000)  //3秒（3000ミリ秒）かけてフェードアウトする
  })
});


//　Q1-4 クリックしてサイズ変更

$(function(){
  $("#q4").on("click",function(){  //クリックしたタイミングで
    $(this).addClass("large")  //クラス"large"を追加
  })
});

//　Q1-5 クリックしてDOMの挿入

$(function(){
  $("#q5").on("click",function(){  //クリックしたタイミングで
    $(this).prepend("DOMの中の前")  //指定した要素の中の前に子要素追加
    .append("DOMの中の後")  //指定した要素の中の後に子要素追加
    .before("DOMの前")  //指定した要素の前に追加
    .after("DOMの後")  //指定した要素の後に追加
  })
});

//　Q1-6 クリックして移動

$(function(){
  $("#q6").on("click",function(){  //クリックしたタイミングで
    $(this).animate({"margin-top":100,"margin-left":100},2000)
    //2秒かけて上と左にマージンをそれぞれそれぞれ100px取る位置（右斜め下）へ移動
  })
});

//　Q1-7 クリックしてidのノードをコンソールで表示

$(function(){
  $("#q7").on("click",function(){  //クリックしたタイミングで
    console.log(this)  //ブラウザのコンソールに変数の中身を出力
  })
});

//　Q1-8 ホバー時にサイズ変更

$(function(){
  $("#q8").on({mouseenter:function(){  //カーソルをあてたタイミングで
    $(this).addClass("large")},  //クラス"large"を追加
    mouseleave:function(){  //カーソルを外したタイミングで
      $(this).removeClass("large")}  //クラス"large"を削除
  })
});

//　Q1-9 クリックして配列のアラート表示　【※修正※】変数名をindexのiを使用

$(function(){
  $("#q9 li").on("click",function(){  //クリックしたタイミングで
    const i = $(this).index();
    alert(i)
    //クリックされた要素のインデックス番号を取得し、アラートを表示
  })
});

//　Q1-10 Q10をクリックしてQ11を操作　【※修正※】変数名をindexのiを使用

$(function(){
  $("#q10 li").on("click",function(){  //クリックしたタイミングで
    const i = $(this).index();  //クリックされた要素のインデックス番号を取得する
    console.log($("#q11 li").eq(i));  //ブラウザのコンソールに変数の中身を出力
    $("#q11 li").eq(i).addClass("large-text")  //q11でクラス"large-text"を追加
  })
});

