// Home
const homeRoute = async function (req, res, next){
    try {
        const context = {};
        return res.render("info/home", context);
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
}

// About
const aboutRoute = async function (req, res, next){
    try {
        const context = {};
        return res.render("info/about", context);
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
}

//Resources
const resourcesRoute = async function (req, res, next){
    try {
        const context = {};
        return res.render("info/resources", context);
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
}

module.exports = {
    homeRoute,
    aboutRoute,
    resourcesRoute,
}