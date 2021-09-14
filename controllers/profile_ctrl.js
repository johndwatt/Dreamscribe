const { User, Journal } = require("../models");

const profileRoute = async function (req, res, next){
    try {
        if (req.query.search) {
            query = {
                $or: [
                {
                    title: {
                        $regex: new RegExp(req.query.search),
                        $options: "i",
                    },
                },
                {
                    content: {
                        $regex: new RegExp(req.query.search),
                        $options: "i",
                    },
                }],
            };
            const foundUser = await User.findById({ _id: req.params.id });
            const userJournals = await Journal.find({ userId: foundUser.id }).find(query).sort('-createdAt');
            const context = {
                thisUser: foundUser,
                userJournals: userJournals,
            };
            return res.render("user/profile", context);
        } else {
            const foundUser = await User.findById({ _id: req.params.id });
            const userJournals = await Journal.find({ userId: foundUser.id }).sort('-createdAt');
            const context = {
                thisUser: foundUser,
                userJournals: userJournals,
            };
            return res.render("user/profile", context);
        }
        
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
}

module.exports = {
    profileRoute,
}