const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const imgOpts = []

const imageSchema = new Schema({
    title: String,
    id: String,
    imgUrl: String,
    img: [],
    owner: {
        title: String
    }
}, {timestamps: true});

module.exports = mongoose.model("", imageSchema);
