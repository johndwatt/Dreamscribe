// Home
const homeRoute = async function (req, res, next){
    try {
        return res.send("Home route works!");
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
}

// About
const aboutRoute = async function (req, res, next){
    try {
        return res.send("About route works!");
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
}

module.exports = {
    homeRoute,
    aboutRoute,
}