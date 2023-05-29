const express = require("express");
const path = require("path");
const { upload } = require("../multer");
const User = require("../model/user");
const ErrorHandler = require("../utils/ErrorHandler");
const router = express.Router();
const fs = require("fs");
const jwt = require("jsonwebtoken");
const sendMail = require("../utils/sendMail");

router.post("/create-user", upload.single("file"), async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const userEmail = await User.findOne({ email });

    const filename = req.file.filename;
    const fileurl = path.join(filename);

    if (userEmail) {
      const filename = req.file.filename;
      const filePath = `uploads/${filename}`;
      fs.unlink(filePath, (err) => {
        if (err) {
          console.log(err);
          res.status(500).json({ message: "Error deleting file" });
        } else {
          res.json({ message: "File deleted successfully" });
        }
      });
      return next(new ErrorHandler("User already registered", 400));
    }

    const user = {
      name,
      email,
      password,
      avatar: fileurl,
    };

    // console.log(newUser);
    // const newUser = await User.create(user);
    // res.status(201).json({
    //     success: true,
    //     newUser
    // })

    const activationToken = createActivationToken(user);

    const activationUrl = `http://localhost:3000/activation/${activationToken}`

    try {
        await sendMail({
            email: user.email,
            subject: "Account Activation",
            message: `Hello ${user.name} please activate your account by clicking on this link ${activationUrl}`
        })
        
    } catch (error) {
        return next(new ErrorHandler(error.message, 400));
    }
  } catch (error) {
    return next(new ErrorHandler(error.message, 400));
  }
});
// create activation token 
const createActivationToken =(user)=> {
    return jwt.sign(user, process.env.ACTIVATION_SECRET, {
        expiresIn: "5m"
    })
}


module.exports = router;
