const { Journal } = require("../models")

//index
const indexRoute = async function (req, res, next) {
    try {
        const publicJournals = await Journal.find({ isPublic: true }).populate('userId');
        const context = {
            journals: publicJournals,
        };
        return res.render("journal/index", context)
    } catch (error){
        console.log(error);
        req.error = error;
        return next();
    }
}

//new
const newRoute = async function (req, res, next) {
    try {
        return res.render("journal/new");
    } catch (error){
        console.log(error);
        req.error = error;
        return next();
    }
}

//create
const createRoute = async function (req, res, next) {
    try {
        req.body.userId = req.session.currentUser.id;
        const createdJournal = await Journal.create(req.body);
        return res.redirect(`/journals/${createdJournal.id}`)
    } catch (error){
        console.log(error);
        req.error = error;
        const context = {
            error,
        }
        return res.render ("journal/new", context);
    }
}

//show
const showRoute = async function (req, res, next) {
    try {
        const foundJournal = await Journal.findById(req.params.id).populate('userId');
        const context = {
            journal: foundJournal,
        };
        return res.render("journal/show", context)
    } catch (error){
        console.log(error);
        req.error = error;
        return next();
    }
}


//edit
const editRoute = async function (req, res, next) {
    try {
        const foundJournal = await Journal.findById(req.params.id);
        const context = {
            journal: foundJournal,
            publicValue: foundJournal.isPublic,
        };
        return res.render("journal/edit", context);
    } catch (error){
        console.log(error);
        req.error = error;
        return next();
    }
}

//update
const updateRoute = async function (req, res, next) {
    try {
        const updatedJournal = await Journal.findByIdAndUpdate(
            req.params.id,
            {$set: req.body}, 
            {new: true},
        );
        return res.redirect(`/journals/${updatedJournal.id}`);
    } catch (error){
        console.log(error);
        req.error = error;
        return next();
    }
}

//delete-confirmation
const deleteShow = async function (req, res, next) {
    try {
        const foundJournal = await Journal.findById(req.params.id);
        const context = {
            journal: foundJournal,
        };
        return res.render("journal/delete-conf", context);
    } catch (error){
        console.log(error);
        req.error = error;
        return next();
    }
}


//destroy
const destroyRoute = async function (req, res, next) {
    try {
        await Journal.findByIdAndDelete(req.params.id);
        return res.redirect("/journals");
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
    deleteShow,
    destroyRoute,
}