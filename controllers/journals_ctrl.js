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
const editRoute = async function (req, res, next) {
    try {
        return res.send(`Journal edit route works with id: ${req.params.id}`);
    } catch (error){
        console.log(error);
        req.error = error;
        return next();
    }
}

//update
const updateRoute = async function (req, res, next) {
    try {
        return res.send(`Journal update route works with id: ${req.params.id}`);
    } catch (error){
        console.log(error);
        req.error = error;
        return next();
    }
}


//destroy
const destroyRoute = async function (req, res, next) {
    try {
        return res.send(`Journal delete route works with id: ${req.params.id}`);
    } catch (error){
        console.log(error);
        req.error = error;
        return next();
    }
}

module.exports = {
    indexRoute,
    showRoute,
    newRoute,
    createRoute,
    editRoute,
    updateRoute,
    destroyRoute,
}