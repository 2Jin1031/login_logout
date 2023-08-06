var mysql = require('mysql2');
const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'box',
};

var pool = mysql.createPool(dbConfig);

module.exports = {
    init: function () {
        return pool;
    },
    connect: function(conn) {
        conn.connect(function(err) {
            if(err) console.error('mysql 연결 에러 : ' + err);
            else console.log('mysql 연결 성공');
        });
    },
    query: function (sql, params, callback){
        pool.getConnection((err, conn) => {
            if(!err){
                conn.query(sql, params, callback);
            }
            else{
                console.log('error:', err);
            }
            conn.release();
        })
    }
};
