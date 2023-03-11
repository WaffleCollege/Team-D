// Express Server インスタンスを作成
let express = require("express");
let app = express();

let port = 3000;

app.set("view engine", 'ejs')

// app.use(express.static("public"));
app.use(express.static("views"));

// app.get("/", (req, res) => {
//     res.sendFile(__dirname + "/public/index.html");
// });

//ログイン画面
app.get("/", (req, res) => {
    res.render('login');
})

//新規登録画面
app.get("/register", (req, res) => {
    res.render('register');
})

//入力画面
app.get("/index", (req, res) => {
    res.render('index');
})

//リスト
app.get("/list", (req, res) => {
    res.render('list');
})

//目標
app.get("/target", (req, res) => {
    res.render('target');
})

//グラフ
app.get("/graph", (req, res) => {
    res.render('graph');
})

//設定
app.get("/setting", (req, res) => {
    res.render('setting');
})

app.listen(port, () => {
    console.log("Start Server!");
});


//http://localhost:3000/ ログイン画面
//http://localhost:3000/index 入力画面