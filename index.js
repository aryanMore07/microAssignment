const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static("public"));

//

app.get("/health", (req, res) => {
    res.send("hello from the health api");
})



const port = process.env.PORT || 3000
const host = process.env.HOST || "localhost";

// start

app.listen(3000, function() {
    console.log("server is running on port number 3000");
});