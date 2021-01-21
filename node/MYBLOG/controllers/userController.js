const userDB = require("../models/uesrBD")

module.exports={
      async userLogin (ctx) {
        // 1. 接收表单数据
        // {username: 'lisi', pasword: '123456'}
        let { username, password } = ctx.request.body;
        // 2. 安全验证
        // 3. 连接数据库
        let results = await userDB.login(username, password);
        // 4. 根据查询的结果跳转(或输出)不同的结果页面
        if (results.length > 0) {
          // redirect重定向 不能传参 可以更改地址
          //render 渲染 可以引用模板引擎传参 但是
          ctx.session.username=username;
          ctx.session.user_id=user_id;
          ctx.redirect("/");
        } else {
          await ctx.render("err", {
            message: "登录失败，用户名或密码不正确",
          });
        }
      },
      async userRegist (ctx) {
        // 1. 接收表单数据
        // 2. 安全验证
        // 3. 连接数据库
        // 4. 根据查询的结果跳转(或输出)不同的结果页面
        let { username, password, nickname } = ctx.request.body;
        let loginUser={username, password, nickname};
        if (username.trim().length == 0) {
          await ctx.render("err", {
            message: "用户名不能为空!",
          });
        } else {
          let results = await userDB.regist({ username, password, nickname });
          if (results.insertId) {
            //insertId非空 => 数据库 增 操作成功
            await ctx.render("login");
          } else {
            await ctx.render("err", {
              message: "注册失败!",
            });
          }
        }
      },
      async userSignOut (ctx){
        ctx.session.username='';
        await ctx.render("signOut");
      }

}