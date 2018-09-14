const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema

const VideoSchema = new Schema({
  videoId: {
    type: String,
    require: true
  },
  opts: {
    type: Object,
    require: true
  }
});

module.exports = mongoose.model("Video", VideoSchema);
