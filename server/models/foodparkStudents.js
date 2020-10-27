const mongoose = require("mongoose");

let foodparkStudents = new mongoose.Schema({
    RegNo: {
      type: String,
      required: "Required",
      unique: true,
    },
    Name: {
      type: String,
    },
    Kitchen: {
      type: String,
    },
    CreditBal: {
      type: Number,
    },
  }, {
    collection: 'foodparkStudents'
})

  module.exports = mongoose.model("foodparkStudents", foodparkStudents);
  