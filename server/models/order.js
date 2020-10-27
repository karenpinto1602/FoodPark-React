const mongoose = require("mongoose");

let orders = new mongoose.Schema({
    OrderNo: {
       type: Number,
       unique: true,
    },
    StudReg: {
        type: String,
      },
    OrderItem: {
      type: Number,
    },
    OrderKitchen: {
      type: String,
    },
    TotalAmt: {
        type: Number,
    },
    PayMode: {
        type: String,
      },
    OrderTime: {
        type: String,
      },
    
    }, {
      collection: 'orders'
  })

  module.exports = mongoose.model("orders", orders);
  