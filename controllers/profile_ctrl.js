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


//edit
const profileEdit = async function (req, res, next) {
    try {
        const foundUser = await User.findById({ _id: req.params.id });
        const context = {
            userToEdit: foundUser,
        };
        return res.render("user/edit", context);
    } catch (error){
        console.log(error);
        req.error = error;
        return next();
    }
}

//update
const profileUpdate = async function (req, res, next) {
    try {
        const foundUser = await User.findById({ _id: req.params.id });
        const checkUsername = await User.exists({ username: req.body.username });
        const checkEmail = await User.exists({ email: req.body.email });
        if (checkUsername === true && foundUser.username !== req.body.username) {
            error = {
                message: "This username is already in use. You cannot update your profile to have the same username as another account.",
                userToEdit: foundUser,
            }
            return res.render("user/edit", error);
        };
        if (checkEmail === true && foundUser.email !== req.body.email) {
            error = {
                message: "This username is already in use. You cannot update your profile to have the same username as another account.",
                userToEdit: foundUser,
            }
            return res.render("user/edit", error);
        };
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            {$set: req.body}, 
            {new: true},
        );
        return res.redirect(`/profile/${updatedUser.id}`);
    } catch (error){
        console.log(error);
        req.error = error;
        return next();
    }
}

module.exports = {
    profileRoute,
    profileEdit,
    profileUpdate,
}