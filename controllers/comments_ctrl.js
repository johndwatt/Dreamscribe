const { Journal, Comment } = require("../models");

const createComment = async function (req, res, next) {
    try {
        const foundJournal = await Journal.findById(req.params.id);
        req.body.userId = req.session.currentUser.id;
        req.body.journalId = req.params.id;
        const createdComment = await Comment.create(req.body);
        const context = {
            journal: foundJournal,
        }
        return res.redirect(`/journals/${foundJournal.id}`)
    } catch (error){
        console.log(error);
        req.error = error;
        const context = {
            error,
        }
        return res.render ("journal/show", context);
    }
}

module.exports = {
    createComment,
};