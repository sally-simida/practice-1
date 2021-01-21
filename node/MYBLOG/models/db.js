//引入连接池
let mysql = require("mysql");
let pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "",
  database: "myblog",
});

function query(sql,value) {
    return new Promise((resolve, reject) => {
      pool.getConnection(function (err, connection) {
        if (err) {
          // not connected!
          reject(err);
        } else {
          connection.query(sql,value,function (error, results) {
              connection.release(); //释放连接，放回pool中
              if (error) {
                reject(err);
              } else {
                resolve(results);
              }
            }
          );
        }
      });
    });
  }

  module.exports ={
      query:query
  }