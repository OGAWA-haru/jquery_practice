$(function(){  //HTMLを読み込む
  $(".drawer_button").on("click",function(){  //三本線のメニューボタンをクリックしたタイミングで
    $(this).toggleClass("active");  //クリックしたクラスにactiveを付与する
    $(".drawer_bg").fadeToggle();  // drawer_bgクラスをフェードイン、フェードアウトを交互に行うようよう設定
    $(".drawer_nav_wrapper").toggleClass("open");  //drawer_nav_wrapperクラスにopenを付与し表示させる
  });
  $(".drawer_bg").on("click",function(){ //drawer_bgの×部分をクリックしたタイミングで
    $(this).hide();  //drawer_bgクラスを隠す
    $(".drawer_button").removeClass("active");  //drawer_buttonクラスのactiveを削除する
    $(".drawer_nav_wrapper").removeClass("open");  //drawer_nav_wrapperクラスのopen表示を削除する
  })
})