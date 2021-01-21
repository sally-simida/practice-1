const Koa = require("koa");

// 引入ejs模板引擎
const views = require("koa-views");

const path = require("path");

// 引入koa-static 加载静态资源
const staticPath = require("koa-static");
//post
const bodyParser = require('koa-bodyparser')
//使页面跳转时传递的参数生命周期更长一些
const session = require('koa-session');
const app = new Koa();

// 引入路由模块 index文件为默认 可以省略
const user = require('./routes/user');
const blog = require('./routes/blog');
// 使用ctx.body解析中间件
app.use(bodyParser())

// 加载模板引擎
app.use(
  views(path.join(__dirname, "/views"), {
    extension: "ejs",
  })
);
// 配置静态资源目录
app.use(staticPath(path.join(__dirname, "/public")));
//配置
app.keys = ['myblog_session_key$$'];
app.use(session(app));

app.use(user.routes()).use(user.allowedMethods());
app.use(blog.routes()).use(blog.allowedMethods());

app.listen(3000);
console.log("start-quick is starting at port 3000");