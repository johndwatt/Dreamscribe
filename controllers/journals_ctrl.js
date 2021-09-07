
const index = async function (req, res, next) {
    try {
        return res.send("Journal index route works!");
    } catch (error){
        console.log(error);
        req.error = error;
        return next();
    }
}

const show = async function (req, res, next) {
    try {
        return res.send(`Journal show route works with id: ${req.params.id}`);
    } catch (error){
        console.log(error);
        req.error = error;
        return next();
    }
}

module.exports = {
    index,
    show,
}