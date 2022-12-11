const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const adminRoute = require("./routes/admin");
const dbs = require("./config/db");
const error = require("./middleware/error");
const routerr = require("./middleware/route");


const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static("public"));

//
app.use(error);
app.use(require("./middleware/route"));
app.use(routerr);
app.use("/api/admin", adminRoute);



app.get("/health", (req, res) => {
    res.send("hello from the health api");
})

app.get("/", (req, res) => {
    res.send("hello from More Aryan");
})



const port = process.env.PORT || 3000
const host = process.env.HOST || "localhost";

// start

app.listen(3000, function() {
    console.log("server is running on port number 3000");
});