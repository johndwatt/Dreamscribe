// External Modules
const express = require("express");
const methodOverride = require("method-override");

// Internal Modules


// Instanced Modules
const app = express();

// Config
const PORT = 4000;
app.set("view engine", "ejs");

// Middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(require("./utils/logger"));

// Routes

// Bind to PORT
app.listen(PORT, function(){
    console.log(`Server is live on port ${PORT}!` )
});