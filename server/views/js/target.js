/*-----target.html------*/
//ペンギン画像
const penguin = document.createElement('img');

let target = Number(document.getElementById("target-figure").textContent); //目標額
let achievement = Number(document.getElementById("achievement-figure").textContent); //実績

if((target - achievement) >= 1000){
    console.log("aaa")
    penguin.src = "imgs/pen1.png"; //すごい！ってやつ
} else if((target - achievement) <= -1000) {
    penguin.src = "imgs/pen2.png"; //普通のやつ
} else {
    penguin.src = "imgs/pen3.png"; //残念なやつ
}
// penguin.src = "https://cdn.glitch.global/d2c5f07e-df19-41b0-aa15-c4e16dd6d9ec/%E3%83%98%E3%82%9A%E3%83%B3%E3%82%AD%E3%82%99%E3%83%B31.png?v=1676985350670"
//ペンギン画像追加
const image_parent = document.getElementById("image") //image(ペンギン達の親ノード)
image_parent.appendChild(penguin);
image_parent.style.textAlign = "center"; //ペンギンセンターへ
image_parent.style.margin = "10px";