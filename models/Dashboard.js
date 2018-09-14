const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema

const DashboardSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  video: {
    type: [Schema.Types.ObjectId],
    ref: "Video"
  },
  progress: {
    type: Number
  }
});

module.exports = mongoose.model("Dashboard", DashboardSchema);
