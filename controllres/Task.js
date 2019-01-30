const { Task, Comment } = require("../models/Task");
const Newtask = require("../models/Newtask");

module.exports = {
  show: (req, res) => {
    Task.findOne({ _id: req.params.id })
      .populate("author")
      .exec(function(err, recipe) {
        Comment.populate(recipe.comments, { path: "author" }, function(
          err,
          comments
        ) {
          recipe.comments = comments;
          res.render("recipe/show", taskes);
        });
      });
  },
  new: (req, res) => {
    Newtask.find({}).then(users => {
      res.render("taskes/new", { users });
    });
  },
  create: (req, res) => {
    Task.create({
      content: req.body.taskes.content,
      author: req.body.author
    }).then(taskes => {
      Newtask.findOne({ _id: req.body.author }).then(user => {
        user.recipes.push(taskes);
        user.save(err => {
          res.redirect(`/taskes/${taskes._id}`);
        });
      });
    });
  },
  update: (req, res) => {
    let { content, author } = req.body;
    Task.findOne({ _id: req.params.id }).then(taskes => {
      taskes.comments.push({
        content,
        author
      });
      taskes.save(err => {
        res.redirect(`/taskes/${taskes._id}`);
      });
    });
  },
  delete: (req, res) => {
    Task.findOneAndRemove({ _id: req.params.id }).then(taskes => {
      res.redirect('/')
    })
  }
};