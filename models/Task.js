const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const Comment = new Schema({
  content: String,
  createdAt: {
    type: Date,
    default: Date.now()
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "Newtask"
  }
});

const Task = new Schema({
  content: String,
  createdAt: {
    type: Date,
    default: Date.now()
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "Newtask"
  },
  comments: [Comment]
});

module.exports = {
  Task: mongoose.model("Task", Task),
  Comment: mongoose.model("Comment", Comment)
};