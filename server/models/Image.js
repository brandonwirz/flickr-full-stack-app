const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const imgOpts = []

const imageSchema = new Schema({
    title: String,
    imgUrl: String,
    img: [],
    location: {
        title: String
    }
}, {timestamps: true});

module.exports = mongoose.model("", imageSchema);
