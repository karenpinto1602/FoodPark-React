const mongoose = require("mongoose");

let Darling_fp = new mongoose.Schema({
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
    collection: 'darling_fps'
})

  module.exports = mongoose.model("Darling_fp", Darling_fp);
  