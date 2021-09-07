//index
const indexRoute = async function (req, res, next) {
    try {
        return res.send("Journal index route works!");
    } catch (error){
        console.log(error);
        req.error = error;
        return next();
    }
}

//new
const newRoute = async function (req, res, next) {
    try {
        return res.send(`Journal new route works!`);
    } catch (error){
        console.log(error);
        req.error = error;
        return next();
    }
}

//create
const createRoute = async function (req, res, next) {
    try {
        return res.send(`Journal create route works!`);
    } catch (error){
        console.log(error);
        req.error = error;
        return next();
    }
}

//show
const showRoute = async function (req, res, next) {
    try {
        return res.send(`Journal show route works with id: ${req.params.id}`);
    } catch (error){
        console.log(error);
        req.error = error;
        return next();
    }
}


//edit

//update

//destroy

module.exports = {
    indexRoute,
    showRoute,
    newRoute,
    createRoute,
}