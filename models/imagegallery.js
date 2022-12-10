const mongoose = require("mongoose");

const imageSchema = mongoose.Schema({
    name: String,
    createdAt: String,
    updatedAt: String,
    category: [],
    likes: Number,
    imageLink: String
}, {
    timestamps: true,
})

module.exports = mongoose.model("images", imageSchema);