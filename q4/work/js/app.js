$(function(){  //HTMLを読み込む 【※修正】変数名を変更
  $(".nav li").on("click",function(){  //「nav」クラスの１つをクリックしたタイミングで
    const i = $(".nav li").index(this);  //変数の引数にjQueryオブジェクトを指定
      //index() でクリックされた要素を.nav liの何番目にあるかを返す
    $(".description li").addClass("is-hidden");  //description li要素の「is-hidden」クラスを追加する
    $(".description li").eq(i).removeClass("is-hidden");  //description li要素のクリックした「is-hidden」クラスを削除する
  })
})