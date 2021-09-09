const { User, Journal } = require("../models");

const profileRoute = async function (req, res, next){
    try {
        const foundUser = await User.findById({ _id: req.params.id });
        const context = {
            thisUser: foundUser,
        };
        return res.render("user/profile", context);
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
}

module.exports = {
    profileRoute,
}