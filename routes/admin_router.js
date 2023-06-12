const { Router } = require("express");
const a_router = new Router();
const { get_data } = require("../controllers/user_controller");

a_router.get("/data", get_data);

module.exports = a_router;
