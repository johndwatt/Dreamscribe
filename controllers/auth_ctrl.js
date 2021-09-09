const bcrypt = require("bcryptjs");
const { User } = require("../models");

// login show
const loginShow = async function (req, res, next) {
    try {
        return res.render("auth/login");
    } catch (error){
        console.log(error);
        req.error = error;
        return next();
    }
}

// signup show
const signupShow = async function (req, res, next) {
    try {
        return res.render("auth/signup");
    } catch (error){
        console.log(error);
        req.error = error;
        return next();
    }
}

// login post
const loginPost = async function (req, res, next) {
    try {
        const foundUser = await User.findOne({ username: req.body.username });
        if (!foundUser) {
            error = {
                message: "An account with this username or email does not exist. Please create an account."
            }
            return res.render("auth/signup", error);
        };
        const match = await bcrypt.compare(req.body.password, foundUser.password);
        if (!match) {
            error = {
                message: "Incorrect email or password. Please try again."
            }
            return res.render("auth/login", error)
        };
        req.session.currentUser = {
            id: foundUser._id,
            name: foundUser.username,
        };
        console.log("2 currentUser:", req.session.currentUser);
        return res.redirect(`/profile`);
        /* return res.redirect(`/profile/${currentUser._id}`); */
    } catch (error){
        console.log(error);
        req.error = error;
        return next();
    }
}

// signup post
const signupPost = async function (req, res, next) {
    try {
        const foundUser = await User.exists({ 
            $or: [{ email: req.body.email }, { username: req.body.username }], 
        });
        if (foundUser) {
            error = {
                message: "An account with this username or email already exists. Please log in instead."
            }
            return res.render("auth/login", error);
        };
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(req.body.password, salt);
        req.body.password = hash;
        const createdUser = await User.create(req.body);
        req.session.currentUser = {
            id: createdUser._id,
            username: createdUser.username,
        };
        return res.redirect("/profile");
    } catch (error){
        console.log(error);
        req.error = error;
        return next();
    }
}

// logout
const logoutRoute = async function (req, res, next) {
    try {
        await req.session.destroy();
        return res.redirect("/login");
    } catch (error){
        console.log(error);
        req.error = error;
        return next();
    }
}

module.exports = {
    loginShow,
    signupShow,
    loginPost,
    signupPost,
    logoutRoute,
}