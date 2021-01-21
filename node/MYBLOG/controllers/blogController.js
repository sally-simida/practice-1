const blogDB = require("../models/blogDB");

module.exports = {
  //get
  async home(ctx) {
    // 查询所有文章数据
    let results = await blogDB.getBlogInHome();
    await ctx.render("index", {
      blogs: results,
      username: ctx.session.username,
    });
  },
  //get
  async blogDetail(ctx) {
   /*  let { blogId } = ctx.params;
    let details = [];
    console.log( await blogDB.getBlogDetail(blogId));
    //报错 正常点击标题找不到results ？！
    let results = await blogDB.getBlogDetail(blogId);
    let { title, content, post_time } = results[0];
    details = { title, content, post_time };
    details.comm = [];
    for (let i = 0; i < results.length; i++) {
      details.comm.push({
        comm_content: results[i].comm_content,
        comm_post_time: results[i].comm_post_time,
        username: results[i].username,
      });
    }
    await ctx.render("blogDetail", {
      details: details,
    }); */
    let { blogId } = ctx.params;
    let results = await blogDB.getBlogDetail(blogId);
    if (results.length > 0) {
      let { blog_id, title, content, post_time } = results[0];
      let blogInfo = {
        blog_id,
        title,
        content,
        post_time,
      };
      blogInfo.comments = [];
      for (let i = 0; i < results.length; i++) {
        let obj = results[i];
        blogInfo.comments.push({
          comm_id: obj.comm_id,
          comm_content: obj.comm_content,
          comm_post_time: obj.comm_post_time,
          username: obj.username
        });
      }
      console.log(blogInfo);

      await ctx.render("blogDetail", {
        details: blogInfo,
      });
      await ctx.render("err", {
        message: '该条文章不存在！'
      });
    }
  },
  //post
  async published(ctx) {
    let { title, content } = ctx.request.body;
    if (title.trim().length == 0) {
      await ctx.render("err", {
        message: "标题不得为空!",
      });
    } else if (content.trim().length == 0) {
      await ctx.render("err", {
        message: "内容不得为空!",
      });
    } else {
      let results = await blogDB.saveArticle({title, content,userId});
      console.log(results);
      if (results.insertId) {
        //insertId非空 => 数据库 增 操作成功
        await ctx.render("/");
      } else {
        await ctx.render("err", {
          message: "发表文章失败!",
        });
      }
    }
  },
};
