const e = require("express");
const {Router} = require("express");
const Gallery = require("../models/galleryCategory");
const error = "../middleware/error.js";
const route = Router();
const Category = require("../models/galleryCategory");
const Image = require("../models/imagegallery");

let time = new Date().toLocaleString();
console.log(time);

route.get("/", (req, res) => {
    res.send("Hello from admin Route");
});


route.post("/addcategory", (req, res) => {
    const newGallery = new Category({
        name: req.body.name,
        createdAt: time,
        updatedAt: time,
    })

    newGallery.save((err) => {
        if(!err) {
            res.send("Succesfully added a new category");
        } else {
            next(err);
        }
    });
});

route.post("/addimage", (req, res) => {
    const newImage = new Image({
        name: req.body.name,
        createdAt: time,
        updatedAt:time,
        category: [],
        likes: req.body.like,
        imageLink: req.body.imageLink,
    })

    newImage.save((err) => {
        if(!err) {
            res.send("Succesfully added the Image");
        } else {
            next(err);
        }
    });
});

module.exports = route;
