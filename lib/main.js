$(function () {
  let param = para_get();

  $("#address").text(param["addr"]);
});

/**
 * https://office-obata.com/report/memorandum/post-1408/
 * @returns
 */
function para_get() {
  // URLパラメータを"&"で分離する
  var url_search = location.search.substr(1).split("&");

  // パラメータ連想配列エリア初期化
  var para = [];

  // キーエリア初期化
  var key = null;

  for (var i = 0; i < url_search.length; i++) {
    // "&"で分離したパラメータを"="で再分離
    key = url_search[i].split("=");

    // パラメータを連想配列でセット
    para[key[0]] = key[1];
  }

  // 連想配列パラメータを返す
  return para;
}
