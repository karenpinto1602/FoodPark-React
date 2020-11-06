const mongoose = require("mongoose");

let Shakti_fp = new mongoose.Schema({
    ItemId: {
      type: Number,
      required: "Required",
      unique: true,
    },
    ItemName: {
      type: String,
    },
    ItemPrice: {
        type: Number,
    },
    Meal: {
      type: [{type:Number, type:Number, type:Number, type:Number}]
    }
  }, {
    collection: 'shakti_fps'
})

  module.exports = mongoose.model("Shakti_fp", Shakti_fp);
  