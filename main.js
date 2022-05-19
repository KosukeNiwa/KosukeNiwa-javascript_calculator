let myTotal = 0;	      // 現在の合計値
let myInput = null;	    // 現在入力している値
let myFlg = 1;	        // １回前に入力したもの 0:数字 1:演算子

// 0～9または小数点ボタンを押した
function myValue(myData) {	                  
  myFlg = 0;	                                                  // １回前に入力したものは数値
  myInput += myData;	                                          // 現在入力している値に追加
  console.log(myInput);
  
  document.getElementById("displayNumber").value = myInput;     // 現在入力している値を表示
}

//演算子ボタンを押した	
function myCalculate(myCalc) {
  if (myFlg = 0) {                                                // 1回前に押したものが数字ならば
    myInput += myCalc;
   console.log(myInput);
    
    document.getElementById("displayNumber").value = myWork;      // 現在入力している値を表示
    myFlg = 1;                                                    // 演算子を入力した履歴を残す
    
  } else {                                                        // 1回前に押したものが演算子ならば
    return 0;                                                     // 何もしない
  }

}

// ＝ボタンを押した
function equalButton() {
  document.getElementById("displayNumber").value = eval(myInput);
}

// ACボタンを押した
function allClear(){            // クリアボタンを押した
  myTotal = 0;	                // 合計クリア
  myFlg = 1;
  myInput = null;           	    // 現在入力している値をクリア
  document.getElementById("displayNumber").value = myTotal;	      // つまり、０を表示
}