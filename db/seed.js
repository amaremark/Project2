const User = require("../models/User");
const { Recipe } = require("../models/Recipe");
const bcrypt = require("bcrypt-nodejs");
<section class="one">
const createPassword = password =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);

User.find({}).remove(() => {
  Recipe.find({}).remove(() => {
    let bugs = User.create({
      email: "ayusime@gmail.com",
      password: createPassword("ayusime")
    }).then(user => {
      Promise.all([
        Recipe.create({
          content: "",
          author: user._id
        }).then(recipe => {
          user.push(recipe);
        }),
        Recipe.create({
          content: "!",
          author: user._id
        }).then(recipe => {
          user.push(recipe);
        })
      ]).then(() => {
        user.save(err => console.log(err));
      });
    });

    let daffy = User.create({
      email: "awenew@gmail.com",
      password: createPassword("awesime")
    }).then(user => {
      Promise.all([
        Recipe.create({
          content: "",
          author: user._id
        }).then(recipe => {
          user.push(recipe);
        }),
        Recipe.create({
          content: ".",
          author: user._id
        }).then(recipe => {
          user.push(recipe);
        })
      ]).then(() => {
        user.save(err => console.log(err));
      });
    });

    let elmer = User.create({
      email: "amaremark@gmail.com",
      password: createPassword("amaresime")
    }).then(user => {
      Promise.all([
        Recipe.create({
          content:
            "",
          author: user._id
        }).then(recipe => {
          user.push(recipe);
        }),

        Recipe.create({
          content: "",
          author: user._id
        }).then(recipe => {
          user.push(recipe);
        })
      ]).then(() => {
        user.save(err => console.log(err));
      });
    });
  });
});
</section>