const Newtask = require("../models/Newtask");
const { Task } = require("../models/Task");

module.exports = {
  show: (req, res) => {
    Newtask.findOne({ _id: req.params.id })
      .populate({
        path: "recipes",
        options: { limit: 5, sort: { createdAt: -1 } }
      })
      .then(task => {
        res.render("task/show", { usetasks });
      });
  },
  new: (req, res) => {
    res.render("task/new");
  },
  create: (req, res) => {
    Newtask.create({
      email: req.body.email,
      password: req.body.password
    }).then(task => {
      res.redirect(`/task/${task._id}`);
    });
  }
};