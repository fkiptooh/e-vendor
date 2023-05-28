const express = require('express');
const path = require("path");
const { upload } = require('../multer');
const User = require('../model/user');
const ErrorHandler = require('../utils/ErrorHandler');
const router = express.Router();

router.post("/create-user", upload.single("file"), async(req, res, next) => {
    const { name, email, password } = req.body;
    const userEmail = await User.findOne({email});

    const filename = req.file.filename;
    const fileurl = path.join(filename);

    
    if (userEmail) {
        return next(new ErrorHandler("User already registered", 400))
    }
    
    const newUser = {
        name,
        email,
        password,
        avatar: fileurl

    }

    console.log(newUser);

})

module.exports = router;