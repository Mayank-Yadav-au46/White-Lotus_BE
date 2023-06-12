const express = require("express");
const cors = require("cors");
const { urlencoded } = require("express");
const db_connect = require("./db_config");
const cookieParser = require("cookie-parser");

//routers
const u_router = require("./routes/user_router");
const a_router = require("./routes/admin_router");

//using app
const app = express();

//applying middlewares
app.use(cors());
//app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());
app.use(cookieParser());
app.use(urlencoded({ extended: true }));

app.use("/user", u_router);
app.use("/admin", a_router);

const PORT = 8000;
app.listen(PORT, () => {
  console.log("Server Started");
  db_connect();
});
