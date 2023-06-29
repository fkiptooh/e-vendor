const express = require("express");
const path = require("path");
const { upload } = require("../multer");
const User = require("../model/user");
const ErrorHandler = require("../utils/ErrorHandler");
const router = express.Router();
const fs = require("fs");
const jwt = require("jsonwebtoken");
const sendMail = require("../utils/sendMail");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const sendToken = require("../utils/jwtToken");
const { isAuthenticated } = require("../middleware/auth");
const Shop = require("../model/shop");

router.post("/create-user", upload.single("file"), async (req, res, next) => {
  try {
    const { email } = req.body;
    const sellerEmail = await Shop.findOne({ email });

    if (sellerEmail) {
      const filename = req.file.filename;
      const filePath = `uploads/${filename}`;
      fs.unlink(filePath, (err) => {
        if (err) {
          console.log(err);
          res.status(500).json({ message: "Error deleting file" });
        }
      });
      return next(new ErrorHandler("User alreafy exist", 400));
    }
    const filename = req.file.filename;
    const fileUrl = path.join(filename)
    const seller = {
        name : req.body.name,
        email: email,
        password: req.body.password,
        avatar: fileUrl,
        address: req.body.address,
        phoneNumber: req.body.phoneNumber,
        zipCode: req.body.zipCode

    }
    const activationToken = createActivationToken(seller);

    const activationUrl = `http://localhost:3000/seller/activation/${activationToken}`;

    try {
      await sendMail({
        email: seller.email,
        subject: "Account Activation",
        message: `Hello ${seller.name} please activate your shop account by clicking on this link ${activationUrl}`,
      });
      res.status(201).json({
        success: true,
        message: `Please check your email: - ${seller.email} to activate your shop account`,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 400));
    }
  } catch (error) {
    return next(new ErrorHandler(error.message, 500));
  }}
  );
module.exports = router;
