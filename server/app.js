// Express Server インスタンスを作成
let express = require("express");
let app = express();
//postgreSQLのモジュールをインポート
const pg = require("pg");
const port = 8000;

// POSTで、req.bodyでJSON受け取りを可能に
app.use(express.json());

app.use(
  express.urlencoded({
    extended: true
  })
);

//テンプレートエンジンの設定
app.set("view engine", 'ejs')

// app.use(express.static("public"));
app.use(express.static("views"));

// DBに接続
var pool = new pg.Pool({
    database: "food",
    user: "postgres", //ユーザー名はデフォルト以外を利用した人は適宜変更すること
    password: "SShinnichi2001", //PASSWORDにはPostgreSQLをインストールした際に設定したパスワードを記述。
    host: "localhost",
    port: 5432
  });

// app.get("/", (req, res) => {
//     res.sendFile(__dirname + "/public/index.html");
// });

//ログイン画面
app.get("/login", (req, res) => {
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


//http://localhost:8000/login ログイン画面
//http://localhost:8000/index 入力画面