$(function () {  //HTMLを読み込む
  $(".select-box").on("click", function () {  //セレクトボックスをクリックしたタイミングで
    const onClick = $(this).val(), category = $(".food-list li"); //クリック時の処理方法を設定
    "all" === onClick ? category.show() : $.each(category, function (index,value) {
      //条件式の結果がallだった場合、カテゴリすべてを表示、そうでなければ以下の繰り返し処理。第1引数に処理を行いたいものを指定・第2引数に繰り返し処理を行うための関数を指定
      const select = $(value).data("category-type");  //条件式を設定
      onClick === select ? $(value).show() : $(value).hide()  //カテゴリにクリックしたときの処理が当てはまれば表示、当てはまらなければ非表示
    })
  })
});
