const Newtask = require("../models/Newtask");
const { Task } = require("../models/Task");
const bcrypt = require("bcrypt-nodejs");
<section class="one">
const createPassword = password =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);

{/* User.find({}).remove(() => {
  Task.find({}).remove(() => {
    let bugs = User.create({
      email: "bugsbunny@gmail.com",
      password: createPassword("bugsbunny")
    }).then(user => {
      Promise.all([
        Task.create({
          content: "eh, what's up doc?",
          author: user._id
        }).then(recipe => {
          user.recipes.push(recipe);
        }),
        Task.create({
          content: "That's all, folks!",
          author: user._id
        }).then(recipe => {
          user.recipes.push(recipe);
        })
      ]).then(() => {
        user.save(err => console.log(err));
      });
    });

    let daffy = User.create({
      email: "daffyduck@gmail.com",
      password: createPassword("daffyduck")
    }).then(user => {
      Promise.all([
        Task.create({
          content: "Who's this Duck Dodgers any how?",
          author: user._id
        }).then(recipe => {
          user.recipes.push(recipe);
        }),
        Task.create({
          content: "You're dethpicable.",
          author: user._id
        }).then(recipe => {
          user.recipes.push(recipe);
        })
      ]).then(() => {
        user.save(err => console.log(err));
      });
    });

    let elmer = User.create({
      email: "elmerfudd@gmail.com",
      password: createPassword("elmerfudd")
    }).then(user => {
      Promise.all([
        Task.create({
          content:
            "Shh. Be vewy vewy quiet. I'm hunting wabbits! Huh-huh-huh-huh!",
          author: user._id,

        }).then(recipe => {
          user.recipes.push(recipe);
        }),

        Task.create({
          content: "egg!",
          author: user._id
        }).then(recipe => {
          user.recipes.push(recipe);
        })
      ]).then(() => {
        user.save(err => console.log(err));
      });
    });
<<<<<<< HEAD
  });
}); */}
User.find({}).remove(() => {
  Task.find({}).remove(() => {
    let bugs = User.create({
      email: "bugsbunny@gmail.com",
      password: createPassword("bugsbunny")
    }).then(user => {
      Promise.all([
        Task.create({
          content: "eh, what's up doc?",
          author: user._id
        }).then(recipe => {
          user.recipes.push(recipe);
        }),
        Task.create({
          content: "That's all, folks!",
          author: user._id,

        }).then(recipe => {
          user.recips.push(recipe);
        })
      ]).then(() => {
        user.save(err => console.log(err));
      });
    });
</section>
=======
  })};
});
</section>
 
>>>>>>> a53df01cfb0598f459557f87398d5a1897de14af
