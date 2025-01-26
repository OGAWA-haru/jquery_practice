
$(function(){ //HTMLを読み込む
  $(".btn__submit").on("click",function(){ //ボタンをクリックしたタイミングで

    //コンソールに以下すべて表示
    console.log("名字"); //テキスト表示
    console.log($('#family__name').val()); //入力した値を表示

    console.log("名前"); //テキスト表示
    console.log($('#given__name').val()); //入力した値を表示

    console.log("生年月日"); //テキスト表示
    console.log($(".year").val() + "年" + $(".month").val() + "月" + $(".day").val() + "日"); //選択した項目とテキストを表示

    console.log("性別"); //テキスト表示
    console.log($('[name="gender"]:checked').val()); //チェックした項目を表示

    console.log("職業"); //テキスト表示
    console.log($(".occupation").val()); //選択した項目を表示

    console.log("アカウント情報"); //テキスト表示
    console.log($("#account__name").val()); //入力した値を表示

    console.log("メールアドレス"); //テキスト表示
    console.log($("#email").val()); //入力した値を表示

    console.log("パスワード"); //テキスト表示
    console.log($("#password").val()); //入力した値を表示

    console.log("確認用パスワード"); //テキスト表示
    console.log($("#duplication__password").val()); //入力した値を表示

    console.log("住所"); //テキスト表示
    console.log($("#address").val()); //入力した値を表示

    console.log("電話番号"); //テキスト表示
    console.log($("#tel").val()); //入力した値を表示

    console.log("購読情報"); //テキスト表示
    $('[name="subscription"]:checked').each(function () { ////チェックした項目を表示
      console.log($(this).val()) })


  })
})