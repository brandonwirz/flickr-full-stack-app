const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// const imgOpts = []

const imageSchema = new Schema({
      title: String,
      img: [String]

},{ usePushEach: true });

module.exports = mongoose.model("Save Image", imageSchema);


//
// title: String,
//   board1: {
//       title: String
//       img: [String],
//   },
//   location: {
//       lat: String,
//       long: String
//   }
