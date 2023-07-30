const mongoose = require("mongoose");

const couponCodeSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "Please enter the coupon code name!"],
    unique: true,
  },
  value: {
    type: Number,
    require: true,
  },
  minAmount: {
    type: Number,
  },
  maxAmount: {
    type: Number,
  },
  shopId: {
    type: Object,
    required: true,
  },
  selectedProducts: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("CouponCode", couponCodeSchema);
