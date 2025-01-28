$(function(){  //HTMLを読み込む
  $(".dropdwn li").hover(function(){  //マウスのカーソルを当てたタイミングで
    $(this).children("ul").stop().slideDown()
    },    //dropdwn liクラスの子要素ulをスライドしながら表示
    function(){  ////マウスのカーソルを外したタイミングで
      $(this).children("ul").stop().slideUp()
    });   //dropdwn liクラスの子要素ulをスライドしながら非表示
});

//【※修正】stop()メソッドを追加してアニメーションを強制的に終了させるようにした。
//　→　マウスカーソルが離れたらすぐに閉じるようになる