const express = require("express");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ErrorHandler = require("../utils/ErrorHandler");
const router = express.Router();
const Shop = require("../model/shop");
const { isSeller } = require("../middleware/auth");
const CouponCode = require("../model/couponCode");

// create a coupon code
router.post(
  "/create-coupon-code",
  isSeller,
  catchAsyncErrors(async (req, res, next) => {
    try {
      const isCouponCodeExit = await CouponCode.find({ name: req.body.name });
      if (isCouponCodeExit) {
        return next(new ErrorHandler("Coupon Code already exits!", 400));
      }
      const couponCode = await CouponCode.create(req.body);
      res.status(201).json({
        success: true,
        couponCode,
      });
    } catch (error) {
      return next(new ErrorHandler(error, 400));
    }
  })
);

module.exports = router;
