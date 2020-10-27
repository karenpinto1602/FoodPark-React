const mongoose = require("mongoose");

let paymentHistory = new mongoose.Schema({
    StudReg: {
        type: String,
      },
    OrderNo: {
       type: Number,
       unique: true,
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
    OrderDate: {
        type: String,
      },
    
    }, {
      collection: 'paymenthistories'
  })

  module.exports = mongoose.model("paymentHistory", paymentHistory);
  