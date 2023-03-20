/*-----login.ejs-----*/
/*入力ボタンを押したらデータを更新する*/
document.getElementById('login_button').addEventListener('click', 
function() {
        let user_input = document.getElementById('user_input');
        let pass_input = document.getElementById('pass_input');
        console.log(user_input.value); //確認用
        console.log(pass_input.value); //確認用

        if(user_input.value == "" && pass_input.value == "") {
            alert('ユーザー名とパスワードを入力してください!')
        }else if(user_input.value == "") {
            alert('ユーザー名を入力してください!')
        } else if (pass_input.value == "") {
            alert('パスワードを入力してください!')
        } else { //入力OK データの更新
            //入力ページに移行
            location = "/index"
        }
})