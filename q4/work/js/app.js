$(function(){  //HTMLを読み込む
  $(".nav li").on("click",function(){  //「nav」クラスの１つをクリックしたタイミングで
    const onClick = $(".nav li").index(this);  //変数に引数にjQueryオブジェクトを指定
      //index() でクリックされた要素を.nav liの何番目にあるかを返す
    $(".description li").addClass("is-hidden");  //description li要素の「is-hidden」クラスを追加する
    $(".description li").eq(onClick).removeClass("is-hidden");  //description li要素のクリックした「is-hidden」クラスを削除する
  })
})