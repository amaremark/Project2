const Newtask = require("../models/Newtask");
const { Task } = require("../models/Task");
const bcrypt = require("bcrypt-nodejs");
<section class="one">
const createPassword = password =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);

</section>