const { Task } = require("../models/Task");

module.exports = {
  index: (req, res) => {
    Task.find({})
      .sort({ createdAt: -1 })
      .limit(10)
      .populate("author")
      .then(taskes => {
        res.render("app/index", { taskes });
      });
  }
};