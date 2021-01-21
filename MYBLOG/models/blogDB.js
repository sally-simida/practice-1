const db = require("../models/db");

module.exports = {
  getBlogInHome() {
    return db.query(`SELECT * FROM t_blog`);
  },
  getBlogDetail(blog_id) {
    return db.query(
        //字符串拼接时，注意空格
      "SELECT blog.*, comm.comm_id, comm.content as comm_content, comm.post_time as comm_post_time, usr.username" +
        " FROM t_blog blog  LEFT JOIN t_comment comm " +
        "ON comm.blog_id=blog.blog_id " +
        "LEFT JOIN t_user usr ON comm.user_id=usr.user_id" +
        " WHERE blog.blog_id=?",
      [blog_id]
    );
  },
  saveArticle(obj){
    return db.query(
      "insert into t_blog set ?",obj )
  }
};
