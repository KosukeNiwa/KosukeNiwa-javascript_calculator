let myFlg = 0;	        // １回前に入力したもの 0:数字 1:演算子または小数点
let myInput = 0;        // 初期段階かどうか (1周目の計算かどうか) 0:1周目 1:1周目でない
let zeroJudge = 0;      // 先頭の0を消すかどうか 0:消す 1:消さない

// 数字ボタンを押した
function myValue(myData) {	                  
  myFlg = 0;	                                                    // １回前に入力したものは数値
  
  if ( (myData == 0 || myData == "00") && myInput == 0) {
    return 0;
  }
  
  if (myInput == 0) {                                             // 一周目の計算のとき
    myInput = 1;
    document.getElementById("displayNumber").value = myData;      // 0を消し、押されたボタンのみ表示

  } else {
    document.getElementById("displayNumber").value += myData;     // 押されたボタンを追加表示
  }
  
}

//演算子または小数点ボタンを押した	
function myCalculate(myData) {
  if (myFlg == 0) {                                               // 1回前に押したものが数字ならば
    document.getElementById("displayNumber").value += myData;     // 現在入力している値を表示
    myFlg = 1;                                                    // 演算子または小数点を入力した履歴を残す
    myInput = 1;                                                  //
    
  } else {                                                        // 1回前に押したものが演算子ならば
    return 0;                                                     // 何もしない
  }

}

// ＝ボタンを押した
function equalButton() {
  document.getElementById("displayNumber").value = eval(document.getElementById("displayNumber").value);
}

// ACボタンを押した
function allClear(){            
  myFlg = 0;                    //
  myInput = 0;                  //
  zeroJudge = 0;                // 先頭の0を消すかどうかの履歴をクリア
  document.getElementById("displayNumber").value = 0;	      // つまり、０を表示
}