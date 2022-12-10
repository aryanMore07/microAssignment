const mongoose = require("mongoose");

const gallerySchema = mongoose.Schema({
    name: String,
    createdAt: String,
    updatedAt: String,
}, {
    timestamps:true
});

module.exports = mongoose.model("gallaries", gallerySchema);