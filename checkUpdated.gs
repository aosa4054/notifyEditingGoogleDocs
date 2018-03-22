//トリガーはcheckUpdatedに設定

//LINE Notifyにmessageの内容を送信
function sendHttpPost(message){
  var token = "icDAMMXr8nfDmlUjjM3xdHzqmFN1jKcKSTMiiEnLv3i";
  var options =
   {
     "method"  : "post",
     "payload" : "message=" + message,
     "headers" : {"Authorization" : "Bearer "+ token}

   };

   UrlFetchApp.fetch("https://notify-api.line.me/api/notify",options);
}

//sendHttpPostにmessageを送る。実行で通知。
function myFunction(){
  var message="LINE Notifyに送りたいメッセージを代入" ;
  sendHttpPost(message);
}

//最終更新日時から現在時刻までたった時間が3600000ミリ秒(1時間)以内ならmyFunctionを呼び出す。
//1時間ごとのトリガーを設定すること。
//トリガーの時間と29行目の条件文の中の数値で頻度の変更が可能
function checkUpdate(){
  var file = DriveApp.getFileById("18oYLbYW-FsVV2iHn-skHifCJh9wDfGdfgAl7LzowHqE");
  var lastUpdated = file.getLastUpdated();
  var date = new Date();
  var timePassed = date - lastUpdated;
  if(timePassed < 3600000){
    myFunction();
  }
}
