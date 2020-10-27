const mongoose = require("mongoose");

let Darling_sp = new mongoose.Schema({
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
    collection: 'darling_sps'
})

  module.exports = mongoose.model("Darling_sp", Darling_sp);
  