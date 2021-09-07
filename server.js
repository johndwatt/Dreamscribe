// External Modules
const express = require("express");

// Internal Modules


// Instanced Modules
const app = express();

// Config
const PORT = 4000;

// Middleware
app.use(require("./utils/logger"));

// Routes

// Bind to PORT
app.listen(PORT, function(){
    console.log(`Server is live on port ${PORT}!` )
});