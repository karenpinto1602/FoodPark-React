const mongoose = require("mongoose");

let Neelkesh_sp = new mongoose.Schema({
    ItemId: {
      type: Number,
      required: "Required",
      unique: true,
    },
    ItemName: {
      type: String,
    },
    Meal: {
      type: [{type:Number, type:Number, type:Number, type:Number}]
    }
  }, {
    collection: 'neelkesh_sps'
})
  module.exports = mongoose.model("Neelkesh_sp", Neelkesh_sp);
  