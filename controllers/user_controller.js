const user_model = require("../models/user_model");
const jwt = require("jsonwebtoken");
const key = "123@321";

//-----------------------getting all data----------------

const get_data = async (req, res) => {
  try {
    const data = await user_model.find();
    res.send({ status: "Success", data });
  } catch (error) {
    res.send({ status: "Error getting data", error });
  }
};

//-----------------------SignUp--------------------

const signUp = async (req, res) => {
  const userData = req.body;
  console.log(req.body);
  try {
    const newUser = await user_model.create(userData);
    res.status(200).send({ status: "Success", user: newUser });
    console.log("Signed Up user:", newUser);
  } catch (error) {
    res.status(401).send({ status: "Failure", error });
  }
};

//-------------------------login---------------------

const login = async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);

  try {
    const login_user = await user_model.findOne({ email });
    if (login_user) {
      console.log("login user:", login_user);
      console.log(password, login_user.password);

      //generating token
      if (password === login_user.password) {
        const payload = { email };
        const token = jwt.sign(payload, key, {
          algorithm: "HS384",
          expiresIn: "1d",
        });
        console.log("login token: ", token);
        res.cookie("jwt", token, {
          httpOnly: true,
          secure: true,
          sameSite: "none",
        });
      }
      res
        .status(200)
        .send({ status: "Success", msg: "user Found!", login_user });
    }
  } catch (error) {
    res.status(400).send({ status: "Failure in login", error });
  }
};

module.exports = { get_data, signUp, login, key };
