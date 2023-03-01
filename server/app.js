// Express Server インスタンスを作成
let express = require("express");
let app = express();


app.use(express.static("public"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

// 4つ目の関数
app.listen(3000, () => {
    console.log("Start Server!");
});

//http://localhost:3000/