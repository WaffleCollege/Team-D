// /*-----target.ejs------*/

let date = new Date();
let year = date.getFullYear();
let month = date.getMonth() + 1;

// 先月ボタンを押した時
document.getElementById('next').addEventListener('click', 
function() {
    if(month == 12) {
        month = 1;
        year += 1;
    } else {
        month += 1;
    }
    document.getElementById('date').textContent = year + "年" + month + "月";
    // 実績→(month)の月のデータを引っ張る
})

//来月ボタンを押した時
document.getElementById('last').addEventListener('click', 
function() {
    if(month == 1) {
        month = 12;
        year -= 1;
    } else {
        month -= 1;
    }
    document.getElementById('date').textContent = year + "年" + month + "月";
    // 実績→(month)の月のデータを引っ張る
})