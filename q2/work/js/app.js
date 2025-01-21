$(function(){ //HTMLを読み込む
  $(".modal_open_button").on("click",function(){  //赤いボタン部分をクリックしたタイミングで
    $(".modal_win").fadeIn()  //モーダルウィンドウを表示表示
  });
  $(".modal_close_button").on("click",function(){  //クローズボタンをクリックしたタイミングで
    $(".modal_win").fadeOut()  //モーダルウィンドウを非表示
  })
})