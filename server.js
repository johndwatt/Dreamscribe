// External Modules
const express = require("express");
const methodOverride = require("method-override");
const routes = require("./routes");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const dotenv = require("dotenv");

// Internal Modules


// Instanced Modules
const app = express();

// Config
const PORT = 4000;
app.set("view engine", "ejs");
dotenv.config();

// Middleware
app.use(
    session({
        store: MongoStore.create({ mongoUrl: "mongodb://localhost:27017/dreamscribe" }),
        secret: process.env.SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 7 * 2,
        },
    })
);
app.use((req, res, next) => {
    res.locals.user = req.session.currentUser;
    return next();
}); 

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(require("./utils/logger"));

app.use("/", routes.auth);
app.use("/", routes.info);
app.use("/journals", routes.journals);

// Routes
app.get("/", function (req, res, next) {
    res.redirect("/home");
});

app.get("/*", function (req, res, next) {
    res.render("404");
});

// Bind to PORT
app.listen(PORT, function(){
    console.log(`Server is live on port ${PORT}!` )
});