/**
 * main.js
 */

$(function () {
  let param = para_get();

  $("#address").text(param["addr"]);

  getBalance();
  setInterval(getBalance, 60000);
});

const getBalance = () => {
  var url =
    "https://api.flexpool.io/v2/miner/balance?coin=ETH&address=0x4F86847ABC39a79deFa890587836A7f5082e74f3";
  fetch(url)
    .then((data) => {
      return data.json();
    })
    .then((json) => {
      let balance = parseInt(json["result"]["balance"]) * 10 ** -18;
      let price = parseInt(json["result"]["price"]);
      let balanceCountervalue = balance * price;
      $("#balance").text(balance.toFixed(5));
      $("#balanceCountervalue").text(balanceCountervalue.toFixed(2));
      //$("#price").text(price);
    });
};

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
