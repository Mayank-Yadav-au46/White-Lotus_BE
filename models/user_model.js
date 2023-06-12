const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const user_schema = new Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  orders: [{ type: Object }],
});

const user_model = mongoose.model("users", user_schema);
module.exports = user_model;
