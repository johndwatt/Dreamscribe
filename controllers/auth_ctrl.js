
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
        return res.send("Auth login POST route works!");
    } catch (error){
        console.log(error);
        req.error = error;
        return next();
    }
}

// signup post
const signupPost = async function (req, res, next) {
    try {
        return res.send("Auth signup POST route works!");
    } catch (error){
        console.log(error);
        req.error = error;
        return next();
    }
}

// logout
const logoutRoute = async function (req, res, next) {
    try {
        return res.send("Auth logout route works!");
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