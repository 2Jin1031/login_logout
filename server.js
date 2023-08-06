// #1
var express = require('express');
var app = express();

app.listen(3000, () => console.log('서버 시작'));


// // #2
// var express = require('express');
// var app = express();
// var dbConfig = require(__dirname + '/config/db.js');
// var conn = dbConfig.init();
//
// dbConfig.connect(conn);
//
// // 추가 (이건 그냥 별거 아님)
// app.get('/', function (req, res) {
//     res.send('메인');
// });
//
// // 추가 (이게 핵심)
// app.get('/list', function (req, res) {
//     var sql = 'SELECT * FROM user';
//     conn.query(sql, function (err, rows, fields) {
//         if(err) console.log('query is not excuted. select fail...\n' + err);
//         else res.render('index.ejs', {list : rows});
//     });
// });
//
// app.listen(3000, () => console.log('포트 3000번에서 시작'));