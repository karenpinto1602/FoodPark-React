const mongoose = require("mongoose");

let Neelkesh_fp = new mongoose.Schema({
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
    collection: 'neelkesh_fps'
})

  module.exports = mongoose.model("Neelkesh_fp", Neelkesh_fp);
  