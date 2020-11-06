const mongoose = require("mongoose");

let login = new mongoose.Schema({
    RegNo: {
      type: String,
      required: "Required",
      unique: true,
    },
    Passw: {
      type: String,
    }
  }, {
    collection: 'logins'
})

  module.exports = mongoose.model("login", login);
  
