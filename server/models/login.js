const mongoose = require("mongoose");

let login = new mongoose.Schema({
    RegNo: {
      type: String,
      required: "Required",
      unique: true,
    },
    Name: {
      type: String,
    }
  }, {
    collection: 'logins'
})

  module.exports = mongoose.model("login", login);
  
