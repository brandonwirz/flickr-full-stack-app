const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const imgOpts = []

const imageSchema = new Schema({
      title: String,
      img: [String],
      id: [String]
});

module.exports = mongoose.model("Save Image", imageSchema);
