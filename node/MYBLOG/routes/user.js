const Router = require("@koa/router");
const router = new Router();
const userController = require("../controllers/userController");

// 登录路由
router.get("/login", async (ctx) => {
  await ctx.render("login");
});
// 登录路由 post
router.post("/login", userController.userLogin);

// 注册路由
router.get("/regist", async (ctx) => {
  await ctx.render("regist");
});

router.post("/regist", userController.userRegist);

//退出路由
router.get("/signOut", userController.userSignOut);
module.exports = router;
