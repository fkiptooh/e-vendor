const mongoose = require("mongoose");

const productScheme = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "Please enter the product name!"],
  },
  description: {
    type: String,
    require: [true, "Please enter the product description!"],
  },
  category: {
    type: String,
    require: [true, "Please enter the product category!"],
  },
  tags: {
    type: String,
  },
  originalPrice: {
    type: Number,
  },
  discountPrice: {
    type: Number,
    require: [true, "Please enter the product price!"],
  },
  stock: {
    type: Number,
    require: [true, "Please enter the product stoke!"],
  },
  images: [{}],
  shopId: {
    type: String,
    required: true,
  },
  shop: {
    type: Object,
    required: true,
  },
  sold_out: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Product", productScheme);
