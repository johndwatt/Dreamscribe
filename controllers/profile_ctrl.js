const { User, Journal } = require("../models");

const profileRoute = async function (req, res, next){
    try {
        const foundUser = await User.findById({ _id: req.params.id });
        const userJournals = await Journal.find({ userId: foundUser.id }).sort('-createdAt');
        const context = {
            thisUser: foundUser,
            userJournals: userJournals,
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