const { Router } = require("express");
const u_router = new Router();
const { signUp, login } = require("../controllers/user_controller");
const { verify_token } = require("../middleware/authentication");

//u_router.use(verify_token);

u_router.post("/signUp", signUp);
u_router.post("/login", login);

module.exports = u_router;
