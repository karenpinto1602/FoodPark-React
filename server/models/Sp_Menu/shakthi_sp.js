const mongoose = require("mongoose");

let Shakti_sp = new mongoose.Schema({
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
    collection: 'shakti_sps'
})

  module.exports = mongoose.model("Shakti_sp", Shakti_sp);
  