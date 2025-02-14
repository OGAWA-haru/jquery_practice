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

$(function () { //HTMLを読みこむ
  let pageCount = 1;
  let find = "";
  $(".search-btn").on("click",function(){  // 検索ボタンをクリックしたタイミングで
    const searchWord = $("#search-input").val();  //変数を定義する
    if (searchWord !== find){ //検索ワードと前回のワードが異なる場合に
      pageCount = 1; //ページを１にリセット
      $(".lists").empty(); //リストをemptyで無しにする
      find = searchWord;
    }else{
      pageCount++; //同じ検索ワードが使用されている場合はページ数を増やす
    }

    $.ajax({ //ajaxを書く ↓settings
      url: "https://ci.nii.ac.jp/books/opensearch/search?title=" //取得したいURLを入力
      + searchWord + "&format=json&p=" + pageCount + "&count=20", //パラメータ=値を入力
      method: "GET" //Webサーバーにリクエストを送る
    }).done(function (response) {  //通信成功時に 取得したresponseに対する処理を行う
      result(response['@graph'])  //結果を表示
    }).fail(function (err) { //通信失敗時の処理
      displayError(err); //エラー時のメッセージを表示させる処理を行う
    })

    function displayError(err) {//APIがうまく送信されなかったときのエラー
      $(".lists").empty(); //listクラスに入っている文字を空にする
      $(".message").remove(); //messageクラスを削除する
      if(err.status === 0){ //リクエストができなかった時の処理
        $(".lists").before('<div class="message">正常に通信できませんでした。<br>インターネットの接続の確認をしてください。</div>')
      }else if(err.status === 400){ //リクエストが不正である時の処理
        $(".lists").before('<div class="message">検索キーワードが有効ではありません。<br>文字以上で検索して下さい。</div>')
      }else{ //その他 予期せぬエラーである時の処理
        $(".lists").before('<div class="message">予期せぬエラーが起きました。<br>再読み込みを行ってください。</div>')
      }
    }

  function result(searchWord){
    $(".message").remove(); //messegeクラス要素を削除する
    let response = searchWord[0].items;  //変数responseを定義
    null == response ? void 0 : response.length; //変数responseの値がない時には必ずundefindを表示させ、値があるときにはHTML要素に対して繰り返し処理を行う
    if(0 < void 0 || response.length ){  //検索結果が１つ以上あったときに以下の繰り返し処理を実施
      $.each(response,function(index,item){
        const listItem = `<li class="lists-item">
            <div class="list-inner">
              <p>タイトル：${item.title || "タイトル不明"}</p>
              <p>著者：${item["dc:creator"] || "著者不明"}</p>
              <p>出版社：${item["dc:publisher"] ? item["dc:publisher"][0] : "出版社不明"}</p>
              <a href="${item.link["@id"]}" target="_blank">書籍情報</a>
            </div>
          </li>`;
          $(".lists").prepend(listItem);
      });
    }else{  //検索結果が１つもなかった場合メッセージを表示
      $(".lists").before('<div class="message">検索結果が見つかりませんでした。<br>別のキーワードで検索して下さい。</div>');
    }
  }
});
//リセットボタンの機能実装
  $(function(){
    $(".reset-btn").on("click", function () { //reset-btnクラスをクリックしたタイミングで
      $(".lists").empty(); //listクラスに入っている文字を空にする
      $(".message").remove(); //messageクラスを削除する
      $("#search-input").val("") //input要素にテキスト「検索ワード」をセット
    })
  });
})
