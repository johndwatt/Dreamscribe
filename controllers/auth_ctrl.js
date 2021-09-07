// login show
const loginShow = async function (req, res, next) {
    try {
        return res.send("Auth login show route works!");
    } catch (error){
        console.log(error);
        req.error = error;
        return next();
    }
}
// signup show

// login post

// signup post

// logout

module.exports = {
    loginShow,
}