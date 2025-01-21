$(function(){  //HTMLを読み込む
  $(".dropdwn li").on({  //
    mouseenter:function(){  //マウスのカーソルを当てたタイミングで
    $(this).children("ul").slideDown()
    },    //dropdwn liクラスの子要素ulをスライドしながら表示
    mouseleave:function(){  ////マウスのカーソルを外したタイミングで
      $(this).children("ul").slideUp()
    }    //dropdwn liクラスの子要素ulをスライドしながら非表示
  });
});