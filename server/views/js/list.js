/*-----list.ejs-----*/
// const date = new Date();
// console.log(date1.toLocaleString()); //2017/1/2 0:00:00

// // 2. 日の計算
// date1.setDate(date1.getDate() - 15);
// console.log(date1.getDate()); 

const food_obj_list = [];
//データベースからlistに追加??
food_obj_list.push({name: "かぼちゃ", amount: 200, limit:"2023/03/25"});
// food_obj_list.push({name: "レトルトカレー", amount: 150, limit:"2023/10/3"});

const food_list = document.getElementById("list");
for(let i of food_obj_list) {
    const list_table = document.createElement('tr');
    food_list.appendChild(list_table);

    table_name = list_table.appendChild(document.createElement('td'));
    table_name.textContent = i.name;
    table_amount = list_table.appendChild(document.createElement('td'));
    table_amount.textContent = i.amount + "円";
    table_limit = list_table.appendChild(document.createElement('td'));
    table_limit.textContent = i.limit;   
}