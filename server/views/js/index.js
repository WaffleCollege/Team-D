/*-----index.ejs-----*/
/*入力ボタンを押したらデータを更新する*/
document.getElementById('input-button').addEventListener('click', 
function() {
        let product_input = document.getElementById('product_input');
        let amount_input = document.getElementById('amount_input');
        console.log(product_input.value); //確認用
        console.log(amount_input.value); //確認用

        //商品名, 金額の部分がどれか空白だったら
        if(product_input.value == "" && amount_input.value == "") {
            alert('商品名と金額を入力してください!')
        }else if(product_input.value == "") {
            alert('商品名を入力してください!')
        } else if (amount_input.value == "") {
            alert('金額を入力してください!')
        } else { //入力OK データの更新
            //リストページに移行
            location = "/list"
        }
})
