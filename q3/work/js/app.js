$(function(){  //HTMLを読み込む
  $(".drawer_button").on("click",function(){  //drawer_buttonのボタンをクリックしたタイミングで
    $(this).toggleClass("active");  //クリックしたクラスにactiveを付与する
    $(".drawer_bg").fadeToggle();  // drawer_bgクラスをフェードで切り替える
    $(".drawer_nav_wrapper").toggleClass("open");  //drawer_nav_wrapperクラスにopenを付与する
  });
  $(".drawer_bg").on("click",function(){  //drawer_bgの×部分をクリックしたタイミングでで
    $(this).removeClass("active");  //クリックしたクラスのactiveを削除する
    $(".drawer_nav_wrapper").removeClass("open");  //drawer_nav_wrapperクラスのopenを削除する
  })
})

//.openでCSSのスタイルを適用してメニューの表示・非表示を切り替える