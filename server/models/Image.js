const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const imgOpts = []

const imageSchema = new Schema({
    image: Number,
    quality: {
        type: String,
        enum: imgOpts
    },
    location: {
        lat: String,
        long: String
    }
}, {timestamps: true});

module.exports = mongoose.model("", imageSchema);
