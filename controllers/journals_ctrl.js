
const index = async function (req, res, next) {
    try {
        return res.send("Journal route works!");
    } catch (error){
        console.log(error);
        req.error = error;
        return next();
    }
}

module.exports = {
    index,
}