const Router = require("@koa/router");
const router = new Router();
const blogController = require("../controllers/blogController");

// 首页路由
router.get("/", blogController.home);
//文章详情
router.get("/blogDetail/:blogId", blogController.blogDetail);
//发表文章
router.get("/published/user_id", async (ctx) => {
  if(user_id){
  await ctx.render("published", {
    username: ctx.session.username,
    userId:ctx.session.user_id
  });}else{
    await ctx.redirect('/login')
  }
});
//post发表文章
router.post("/published", blogController.published);

module.exports = router;
