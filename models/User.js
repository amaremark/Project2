const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const userSchema  = new Schema({
  content: String,
  email: String,
  password: String,

  todolist:[
    {
     type: Schema.Types.ObjectId,
     ref: "Recipe"
    }
   ],
   author: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});




module.exports = mongoose.model("User", userSchema);
