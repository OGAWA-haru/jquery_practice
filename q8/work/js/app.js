// API
// const settings = {
//   "url": `https://ci.nii.ac.jp/books/opensearch/search?title=${searchWord}&format=json&p=${pageCount}&count=20`,
//   "method": "GET",
// }
// $.ajax(settings).done(function (response) {
//   const result = response['@graph'];
//   displayResult(result)
// }).fail(function (err) {
//   displayError(err)
// });

//入力した内容をsearchWordに代入
$(function () { //HTMLを読みこむ
  var pageCount = 1, f = "";
  $(".search-btn").on("click", function () { //検索ボタンをクリックしたタイミングで
    const searchWord = $("#search-input").val(); //クリック時の処理方法を設定
    //pageCountの初期値は1、同じ検索ワードで検索を行う場合は、pageCountに+1する。違う検索ワードの場合は1に戻す
    searchWord !== f ? (pageCount = 1,$(".lists").empty(),f = searchWord) : pageCount++ ;

    $.ajax({ //ajaxを書く ↓settings
      url: "https://ci.nii.ac.jp/books/opensearch/search?title=" //取得したいURLを入力
      + searchWord + "&format=json&p=" + pageCount + "&count=20" //パラメータ=値を入力
      ,method: "GET" //Webサーバーにリクエストを送る
    }).done(function (response) { a(response['@graph']) }) //通信成功時に 取得したresponseに対する処理を行う
    .fail(function (err) { //通信失敗時には
      $(".lists").empty(); //listクラスに入っている文字を空にする
      $(".message").remove(); //messageクラスを削除する
      if(err.status === 0){ //リクエストができなかった時の処理
        $(".lists").before('<div class="message">正常に通信できませんでした。<br>インターネットの接続の確認をしてください。</div>')
      }else if(err.status === 400){ //リクエストが不正である時の処理
        $(".lists").before('<div class="message">検索キーワードが有効ではありません。<br>文字以上で検索して下さい。</div>')
      }else{ //その他 予期せぬエラーである時の処理
        $(".lists").before('<div class="message">予期せぬエラーが起きました。<br>再読み込みを行ってください。</div>')
      }
    })
  function a(searchWord) { // 検索をしたときに実行される関数
    $(".message").remove(); //messageクラスを削除する
    //1.入力した内容で検索結果が出るときに繰り返し実行する処理内容
    0 < (null == (response = searchWord[0].items) ? void 0 : response.length) ? $.each(searchWord[0].items,
      function (h, c) { //以下関数を実行
      //↓ lists-itemクラスを追加し
      // テキストを追加＋代入された変数の中にタイトルが存在する場合はそのタイトルを、存在しない場合は「タイトル不明」を表示
      const g = '<li class="lists-item"><div class="list-inner"><p>タイトル：' + (c.title ? c.title : "タイトル不明")
      // テキストを追加＋代入された変数の中に作者情報が存在する場合はその内容を、存在しない場合は「作者不明」を表示
      + "</p><p>作者：" + (c["dc:creator"] ? c["dc:creator"] : "作者不明")
      // テキストを追加＋代入された変数の中に出版者情報が存在する場合はその内容を、存在しない場合は「出版者不明」を表示
      + "</p><p>出版者：" + (c["dc:publisher"] ? c["dc:publisher"][0] : "出版者不明")
      // 書誌詳細ページのパーマリンクをテキスト押下時にとべるように埋め込み
      + '</p><a href="' + (c.link["@id"] + '"target="_blank">書籍情報</a></div></li>');
    //2.入力した内容で検索結果が見つからなかった時に表示する処理
    $(".lists").prepend(g)}) : $(".lists").before('<div class="message">検索結果が見つかりませんでした。<br>別のキーワードで検索して下さい。</div>')
  }
  });
//リセットボタンの機能実装
  $(".reset-btn").on("click", function () { //reset-btnクラスをクリックしたタイミングで
    searchWord = 1; f = ""; //ページ数を１に 検索結果と条件をリセット
    $(".lists").empty(); //listクラスに入っている文字を空にする
    $(".message").remove(); //messageクラスを削除する
    $("#search-input").val("") //input要素にテキスト「検索ワード」をセット
  })
});