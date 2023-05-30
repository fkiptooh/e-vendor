// creating token and saving it to cookies

const sendToken = (user, statusCode, res)=> {
    const token = user.getJwtToken();

    // option for cookie;
    const options = {
        expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000 ),
        httpOnly: true
    }

    res.status(statusCode).cookie("token", token, options).json({
        success: true,
        user,
        token
    })
}

module.exports = sendToken;
