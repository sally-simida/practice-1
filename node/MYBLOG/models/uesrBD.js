const db = require("../models/db");

module.exports={
    login(username, password){
        return db.query("SELECT * FROM t_user where username=? and password=?", [username, password]);
    },
    regist(user){
        return db.query("insert into t_user set ?", user);
        
    }
}