const express = require("express");
const router = express.Router();
const Product = require("../model/product");
const Shop = require("../model/shop")
const { upload } = require("../multer");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ErrorHandler = require("../utils/ErrorHandler");

// create product
router.post(
  "/create-product",
  upload.array("images"),
  catchAsyncErrors(async (req, res, next) => {
    try {
        const shopId = req.body.shopId;
        const Shop = 
    } catch (error) {
      return next(new ErrorHandler(error, 400));
    }
  })
);
