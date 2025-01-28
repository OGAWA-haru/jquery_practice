$(function () {  //HTMLを読み込む
  $(".select-box").on("change", function () {  // 選択した値を取得
    const i = $(this).val();
    $.each($(".food-list li"), function (index, element) {
      // allを選択した時の処理方法を設定
      if (i === "all") {
        $(element).show(); //すべて表示する
        return true;
      }
      const d = $(element).data("category-type"); //all以外を選択した時の処理方法を設定
      if (d === i) {
        $(element).show();  // 一致した場合は表示する
      } else {
        $(element).hide();  // 一致しなかった場合は非表示に
      }
    });
  });
});
