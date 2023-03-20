// /*-----target.ejs------*/
// //ペンギン画像
// const penguin = document.createElement('img');

// let target = Number(document.getElementById("target-figure").textContent); //目標額
// let achievement = Number(document.getElementById("achievement-figure").textContent); //実績

// if((target - achievement) >= 1000){
//     penguin.src = "imgs/pen1.png"; //すごい！ってやつ
// } else if((target - achievement) <= -1000) {
//     penguin.src = "imgs/pen2.png"; //残念のやつ
// } else {
//     penguin.src = "imgs/pen3.png"; //普通なやつ
// }
// // penguin.src = "https://cdn.glitch.global/d2c5f07e-df19-41b0-aa15-c4e16dd6d9ec/%E3%83%98%E3%82%9A%E3%83%B3%E3%82%AD%E3%82%99%E3%83%B31.png?v=1676985350670"
// //ペンギン画像追加
// const image_parent = document.getElementById("image") //image(ペンギン達の親ノード)
// image_parent.appendChild(penguin);
// image_parent.style.textAlign = "center";
// //いらない

let date = new Date();
let year = date.getFullYear();
let month = date.getMonth() + 1;

// 来月ボタンを押した時
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
    // document.getElementById('achievement-figure').textContent = データベースから
    // if(month == 1) {
    //     document.getElementById("achievement-figure").textContent = 25000;
    //     penguin.src = "imgs/pen2.png";
    // }
    // else if(month == 2) {
    //     document.getElementById("achievement-figure").textContent = 21000;
    //     penguin.src = "imgs/pen3.png";
    // }
    // else if(month == 3) {
    //     document.getElementById("achievement-figure").textContent = 18000;
    //     penguin.src = "imgs/pen1.png";
    // }
})

//先月ボタンを押した時
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
    // document.getElementById('achievement-figure').textContent = データベースから
    // if(month == 1) {
    //     document.getElementById("achievement-figure").textContent = 25000;
    //     penguin.src = "imgs/pen2.png";
    // }
    // else if(month == 2) {
    //     document.getElementById("achievement-figure").textContent = 21000;
    //     penguin.src = "imgs/pen3.png";
    // }
    // else if(month == 3) {
    //     document.getElementById("achievement-figure").textContent = 18000;
    //     penguin.src = "imgs/pen1.png";
    // }
})