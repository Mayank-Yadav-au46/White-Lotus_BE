const jwt = require("jsonwebtoken");
const { key } = require("../controllers/user_controller");

const verify_token = (req, res, next) => {
  const token = req.cookies.jwt;
  console.log("From midd: ", token);

  if (token) {
    try {
      const user_payload = jwt.verify(token, secret_key);
      req.user_payload = user_payload;
      console.log("payload during authentication:", user_payload);
      next();
    } catch (error) {
      res.status(400).send({ status: "Error", msg: "Invalid token" });
    }
  } else {
    res.status(404).send({ status: " Error ", msg: "Token not found" });
  }
};

module.exports = { verify_token };
