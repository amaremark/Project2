const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/recipe");
mongoose.Promise = Promise;
module.exports = mongoose;

