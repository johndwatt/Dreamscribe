require("../config/db.connection");

module.exports = {
    Journal: require("./Journal"),
    User: require("./User"),
    Comment: require("./Comment"),
}